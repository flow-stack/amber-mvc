Smalltalk createPackage: 'MVC-Routeables'!
Object subclass: #FullPageRouter
	instanceVariableNames: ''
	package: 'MVC-Routeables'!
!FullPageRouter commentStamp!
This router observes changes in the URI and reacts accordingly.

The strategy is to ignore what should be rote where in advance by collaborating intensively with controllers that understands #isValidFor: 
That way this router will flexibly route thigs with a pontentially complex URI!

FullPageRouter class instanceVariableNames: 'active'!

!FullPageRouter class methodsFor: 'accessing'!

active

	^ active
!

parameterAt: aKey
	"Answers the value found in the parameter aKey found in the current URL.
	Returns nil if there is no parameter at aKey."
	
	^  self parameterAt: aKey in: window location href
!

parameterAt: aKey in: anURL
	"Answers the value found in the parameter aKey found in anURL.
	Returns nil if there is no parameter at aKey."

	<var re = new RegExp('.*[?&]' + aKey + '=([^&]+)(&|$)');
    var match = anURL.match(re);
    return(match ? decodeURIComponent(match[1]) : nil);>
!

route
	"Answers the current route."
	
	^ self uri replace: '^#/' with: ''
!

uri

	^ window location hash
! !

!FullPageRouter class methodsFor: 'actions'!

goBack
	"Makes the browser go back one page in its navigation history.
	Same effect as user pressing back button"

	window history go: -1
!

observeHash

	window onhashchange:[ self onHashChanged ]
!

refresh
	
	self triggerEvent: #beforeRouting.
	
	active ifNotNil:[ active remove ].
	active := RouteableController routeFor: self route.

	active refresh.
	
	self triggerEvent: #afterRouting.
! !

!FullPageRouter class methodsFor: 'reactions'!

onHashChanged
	
	active ifNotNil:[ active destroy ].	
	self refresh
! !

Controller subclass: #RouteableController
	instanceVariableNames: ''
	package: 'MVC-Routeables'!
!RouteableController commentStamp!
## This is an abstraction. 

*Concrete subclasses know* if they are valid for a given URI so the app can be routed to them.

A typical web app might have:
1. home
2. sign up
3. sign in
4. many other app-specific controllers!

!RouteableController methodsFor: 'initialization'!

initialize

	super initialize.
	
	"The convention for routeable controllers is 
	to have only one element with id='content' in index.html 
	and all the rest of the app goes from that controller"
	self parentElement: '#content' asJQuery
! !

!RouteableController class methodsFor: 'accessing'!

controllerFor: anURI
	"Answers the subclass that is a good fit to route anURI."
	
	^ self allSubclasses
		detect:[ :each | each isValidFor: anURI ]
		ifNone:[ NotFoundController ]
!

keyword
	"Answers the name of the class in lowercase without 
	the 'Controller' sufix so it can, for example, be used for friendly URI.
	Subclasses are expected to follow the naming convention *Controller like
	ThisNameController, ThatOtherNameController, AnyNameController, etc"

	^ (self name reversed copyFrom: 'Controller' size + 1 to: self name size) reversed
! !

!RouteableController class methodsFor: 'actions'!

forURI: anURI

	^ self 
		for: (self modelFor: anURI) 
		on: nil 
		appendingTo: self defaultHtmlElement
!

modelFor: anURI
	"Answers the model that corresponds to anURI."

	"The default is just to return the default model"
	^ self defaultModel
!

routeFor: anURI
	"Answers a new controller suited to anURI."
	
	^ (self controllerFor: anURI) forURI: anURI
! !

!RouteableController class methodsFor: 'testing'!

isAbstract
	"Answers true if the receiver is abstract."
	
	^ self = RouteableController
!

isValidFor: anURI
	"Answers true if this controller is the right route for anURI"
	
	"the default policy is reject"
	^ false
! !

RouteableController subclass: #NotFoundController
	instanceVariableNames: ''
	package: 'MVC-Routeables'!

