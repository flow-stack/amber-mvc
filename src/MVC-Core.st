Smalltalk createPackage: 'MVC-Core'!
Widget subclass: #Controller
	instanceVariableNames: 'controllers model view parent parentElement showPromise getParentElementBlock isAppending'
	package: 'MVC-Core'!
!Controller commentStamp!
## This is an abstraction. 

*Concrete subclasses* are controllers with some degree of specialization. Here we concentrate in the commons and foundatinos for all of them.

A typical controller might have:

1. a model
2. some (sub)controllers
3. minimal common behavior!

!Controller methodsFor: 'accessing'!

controllerAt: aKey 

	^ self controllers 
		at: aKey 
		ifAbsent:[ self error: 'Controller not found: ', aKey asString ]
!

controllerAt: aKey ifAbsent: aBlock

	^ self controllers 
		at: aKey 
		ifAbsent: aBlock
!

controllerAt: aKey ifAbsentPut: aBlock

	^ self controllers 
		at: aKey 
		ifAbsent:[ self controllerAt: aKey put: aBlock value ]
!

controllerAt: aKey ifPresent: aBlock
	"Evaluates aBlock if this controller has a controller at aKey.
	Silently do nothing otherwise."
	
	^ self controllers 
		at: aKey 
		ifPresent: aBlock 
		ifAbsent: [ nil ]
!

controllerAt: aKey ifPresent: aBlock ifAbsent: anotherBlock
	"Evaluates aBlock if this controller has a controller at aKey or
	evaluates anotherBlock if it's absent."
	
	^ self controllers 
		at: aKey 
		ifPresent: aBlock
		ifAbsent: anotherBlock
!

controllerAt: aKey put: aController

	^ self controllers at: aKey put: aController
!

controllerAtView: aView 

	^ self controllerAtView: aView ifAbsent:[ 
		self error: 'Controller not found for view: ', aView asString ]
!

controllerAtView: aView ifAbsent: aBlock

	^ self controllers values
		detect: [ :e | e view == aView ]
		ifNone: aBlock
!

controllers
	
	^ controllers ifNil:[ self initializeControllers ]
!

deferred

	self deprecatedAPI: 'use #showPromise'.

	^ self showPromise
!

getParentElementBlock

	^ getParentElementBlock ifNil: [ self initializeGetParentElementBlock ]
!

getParentElementBlock: aBlock
	"Sets the parent element getter and gets one."
	
	getParentElementBlock := aBlock.

	self initializeParentElement
!

model
	
	^ model
!

model: aModel

	self triggerEvent: #onBeforeModel.
	model := aModel.
	self triggerEvent: #onAfterModel.
!

parent
	"Answers the parent controller of this controller."

	^ parent
!

parent: aParentControllerOrNil

	self triggerEvent: #onBeforeParent.
	parent := aParentControllerOrNil.
	self triggerEvent: #onAfterParent.
!

parentElement

	^ parentElement ifNil: [ self initializeParentElement ]
!

parentElement: aHtmlElement

	self triggerEvent: #onBeforeParentElement.
	parentElement := aHtmlElement.
	self triggerEvent: #onAfterParentElement.
!

showPromise

	^ showPromise ifNil: [ self initializeShowPromise ]
!

silentView: aHtmlElement
	"Sets the instance of the element considered the view of this controller."
	
	self onBeforeView.
	view := aHtmlElement.
	self onAfterView.
!

view
	"Answers the DOM element who is the root of this controller's view"
	^ view
!

view: aHtmlElement
	"Sets aHtmlElement as the view of this controller and 
	evaluate the hooks before and after the view gets set."
	
	self onBeforeView.
	view := aHtmlElement.
	self onAfterView
! !

!Controller methodsFor: 'actions'!

beAppending

	isAppending := true
!

bePrepending

	isAppending := false
!

createControllers
	"Create any children (sub)controllers for this controller.
	Note: subclasses typically send `super createControllers` and then they create their specific ones."
	
	"None by default"
	
	self triggerEvent: #controllersCreated
!

hide 

	self view ifNil: [ ^ self ].
	
	self view hide
!

hideAll

	self controllers values do: [ :e | e hide ]
!

hideAllBut: aKey
	"Hides all the (sub)controller except the one at aKey.
	Does  not fail when controller are not found."

	(self controllers keys reject: [ :e | e = aKey ]) do: [ :each | | found |
		found := self controllerAt: each ifAbsent: [ nil ].
		found ifNotNil: [ found hide ] ]
!

hideAt: aKey
	"Hides the (sub)controller found at aKey.
	Does nothing if no controller is found."
	
	(self controllerAt: aKey ifAbsent: [ ^ self ]) hide
!

ifAbsentAt: aKey put: aBlock
	"Answers the controller already present at aKey or,
	if absent, puts the one expected to be created during aBlock and returns it."
	
	^ self controllerAt: aKey ifAbsentPut: aBlock
!

ifAbsentAt: aKey put: aBlock andDo: aPostAddingBlock
	"Answers the controller already present at aKey or,
	if absent, puts the one expected to be created during aBlock,
	evaluates aPostAddingBlock using it and finally returns it"
	
	^ self 
		controllerAt: aKey 
		ifAbsent: [ | newController |
			newController := aBlock value.
			self controllerAt: aKey put: newController.
			aPostAddingBlock value: newController.
			newController ]
!

observeEvents
	"Program the observations of events that are important for this controller."
	
	"console log: (self class name,'>>observeEvents')."
	
	parent ifNotNil: [ 
		parent 
			when: #onRemove do: [ self remove ];
			when: #onAfterRemoveView do: [ self resetParentElement ];
			when: #onAfterView do: [ self onParentViewChanged ];
			yourself ].
	
	self triggerEvent: #controllersObserved
!

refresh
	"Removes the view and shows a fresh view of this controller."

	self initializeParentElement.

	self removeView.
	
	^ self show done: [ self onAfterRefresh ]
!

remove

	self silentRemoveView.
	self unobserveEvents.
!

removeAll
	"Removes all the subcontrollers children of this controller"
	self controllers keys do: [ :each | self removeControllerAt: each ]
!

removeControllerAt: aKey 

	| controller |
	
	controller := self controllerAt: aKey ifAbsent:[ nil ].
	
	controller ifNotNil:[
		controller remove ].
		
	self controllers removeKey: aKey ifAbsent: [ nil ]
!

removeView
	"Removes the view of this controller."
	
	self triggerEvent: #onBeforeRemoveView.

	self silentRemoveView.
	
	self triggerEvent: #onAfterRemoveView.
!

render

	self triggerEvent: #onBeforeRender.
	self renderOn: (HTMLCanvas onJQuery: self parentElement).
	self triggerEvent: #onAfterRender.
!

renderOn: html

	self silentRenderOn: html
!

resetParentElement

	parentElement := nil.
!

show
	"Shows the receiver.
	Rendes when there is no view.
	Always returns the deferred showPromise.
	The promise is a jQuery Deferred that will resolve receiving 
	this controller as argument when the view is set."
	
	"console log: (self class name,'>>show')."

	self hasView ifFalse: [ 
		self render.
		^ self showPromise ].
	
	self view show.

	^ self showPromise
!

showAll

	self controllers values do: [ :e | e show ]
!

showAt: aKey
	"Shows the (sub)controller found at aKey.
	Does nothing if no controller is found."
	
	(self controllerAt: aKey ifAbsent: [ ^ self ]) show
!

showThen: aBlock
	"Shows this controller and get aBlock executed after its view is set."
	
	self deprecatedAPI: 'use `controller show done: [ do something ]` instead'.
	
	self show done: aBlock.
!

silentRefresh

	self silentRemove; silentRender
!

silentRemove

	#deprecated.
	console warn: self class name, '>>silentRemove deprecated, use #silentRemoveView'.
	
	self silentRemoveView
!

silentRemoveView
	
	view ifNotNil:[ | exView |
		exView := view.
		exView asJQuery off.
		view := nil.
		exView asJQuery remove ].
!

silentRender
	
	self silentRenderOn: (HTMLCanvas onJQuery: self parentElement).
!

silentRenderOn: html
	"This is the actual render implementation in a silly default only useful to development 
	It provides quick feedback ans sets a view for easy visual identification.
	Subclasses implement the interesting real renders.
	TemplateController or BindingController are good examples of this."
	
	self silentView: (html h1: self class name) asJQuery.
!

unobserveEvents
	"Stops any pre-programed reaction based on events coming from this controller."
	
	self releaseActionMap
! !

!Controller methodsFor: 'initialization'!

initialize

	super initialize.
	
	"By default the controllers will append to render 
	on the parentElement (as opposed to prepend)."
	self beAppending.
	
	self showPromise done: [ self observeEvents ]
!

initializeControllers
	
	^ controllers := Dictionary new
!

initializeGetParentElementBlock
	"Returns the default parent element getter."

	^ getParentElementBlock := [ 
		console warn: (self class name, ' using default getParentElementBlock').
		self class defaultHtmlElementId asJQuery ]
!

initializeParentElement

	self parentElement: self getParentElementBlock value.

	^ parentElement
!

initializeShowPromise
	"Sets the promise used by this controller when it shows (resolves when the view is set).
	For the full promise API check here: http://api.jquery.com/category/deferred-object/"
	
	^ showPromise := jQuery Deferred value
! !

!Controller methodsFor: 'reactions'!

onAfterRefresh
	"This controller has just finished refreshing.
	Tell all subcontrollers to refresh so it propagates deep."
	
	self controllers values do: [ :cntrl | cntrl refresh ]
!

onAfterView
	"Hook used when the view of this controller was just set.
	Create subcontrollers and resolve the show promise 
	in case there is one."

	"console log: (self class name,'>>onAfterView')."

	"After the view is set, we are ready to create subcontrollers..." 
	self createControllers.

	self hasShowPromise ifTrue: [
		"console log: (self class name,'>>onAfterView fulfilling promise')."
		showPromise resolve: self ].

	self triggerEvent: #onAfterView.
!

onBeforeView
	"Hook used when the view of this controller is about to be set."

	self triggerEvent: #onBeforeView.

	"Break promises that might be done for the about-to-be-removed view."
	"showPromise := nil."
!

onParentViewChanged
	"The parent's view has changed, make sure we have one and refresh.
	We refresh the parentElement because it probably got re-rendered
	making a new one on the DOM probably using same id attribute 
	but with different identity."
	
	self deprecatedAPI.
	"console log: (self class name,'>>onParentViewChanged')."
	self initializeParentElement.
! !

!Controller methodsFor: 'testing'!

hasDeferred
	"Answers true if this controller has a deferred object."

	self deprecatedAPI: 'use #hasShowPromise'.
	
	^ self hasShowPomise
!

hasModel
	"Answers true if this controller has a model"
	
	^ model notNil
!

hasShowPromise
	"Answers true if this controller has a show promise object."
	
	^ showPromise notNil
!

hasView
	"Answers true if this controller has a view"
	
	^ view notNil
!

isAppending

	^ isAppending
! !

!Controller class methodsFor: 'accessing'!

defaultHtmlElement
	"Returns the element that is presumed to be wrapping this controller.
	Ex: ThingDetailsController would expect '#thing-details-wrapper' asJQuery"

	^ self defaultHtmlElementId asJQuery
!

defaultHtmlElementId
	"Returns the id of the element that is presumed to be wrapping this controller.
	Ex: ThingDetailsController would expect '#thing-details-wrapper' "

	^ '#',self keyword asDashedNotation asLowercase,'-wrapper'
!

defaultModel

	^ nil
!

keyword
	"Answers the name of the class in lowercase without 
	the 'Controller' sufix so it can, for example, be used for friendly URI.
	Subclasses are expected to follow the naming convention *Controller like
	ThisNameController, ThatOtherNameController, AnyNameController, etc"

	^ (self name reversed copyFrom: 'Controller' size + 1 to: self name size) reversed
! !

!Controller class methodsFor: 'actions'!

for: aModel 
	"Answers a new instance of this controller dedicated to aModel,
	with no parent and meant to be appended to the default html element,
	expected to be <div id=#content></div>."

	#deprecated.
	self deprecatedAPI: 'use #on:'.
	
	^ self for: aModel on: nil appendingTo: self defaultHtmlElement
!

for: aModel on: aParentControllerOrNil
	"Answers a new instance of this controller dedicated to aModel,
	child of aParentControllerOrNil and meant to be appended to 
	the default html element, expected to be <div id=#content></div>."
	
	#deprecated.
	self deprecatedAPI: 'use #on:in:'.
	
	^ self on: aModel in: aParentControllerOrNil appendingTo: self defaultHtmlElement
!

for: aModel on: aParentControllerOrNil appendingTo: aHtmlElement
	"Answers a new instance of this controller dedicated to aModel,
	child of aParentControllerOrNil and meant to be appended to aHtmlElement."

	#deprecated.
	self deprecatedAPI: 'use #on:in:addOn:'.
	
	^ self new
		model: aModel;
		parent: aParentControllerOrNil;
		parentElement: aHtmlElement;
		yourself
!

for: aModel on: aParentControllerOrNil view: aHtmlElement
	"Answers a new instance of this controller dedicated to aModel,
	child of aParentControllerOrNil and with the already created aHtmlElement as its view."

	#deprecated.
	self deprecatedAPI: 'use #on:in:view:'.
	
	^ self new
		model: aModel;
		parent: aParentControllerOrNil;
		view: aHtmlElement;
		yourself
!

in: aParentControllerOrNil addOn: aBlock
	"Answers a new instance of this controller without model (nil),
	child of aParentControllerOrNil and meant to be appended to aHtmlElement."

	^ self new
		parent: aParentControllerOrNil;
		getParentElementBlock: aBlock;
		yourself
!

in: aParentControllerOrNil appendingTo: aHtmlElement
	"Answers a new instance of this controller without model (nil),
	child of aParentControllerOrNil and meant to be appended to aHtmlElement."

	#deprecated.
	self deprecatedAPI: 'use #in:addOn: aBlock where aBlock is the getter of the parent element'.

	^ self new
		parent: aParentControllerOrNil;
		parentElement: aHtmlElement;
		yourself
!

on: aModel 
	"Answers a new instance of this controller dedicated to aModel,
	with no parent and meant to be appended to the default html element."
	
	^ self on: aModel in: nil addOn: [ self defaultHtmlElement ]
!

on: aParentControllerOrNil appendingTo: aHtmlElement
	"Answers a new instance of this controller, child of aParentControllerOrNil 
	and meant to be appended to aHtmlElement.
	Using this contructor will make the model to stay nil."

	#deprecated.
	self deprecatedAPI: 'use #on:addOn:aBlock where aBlock is the getter of the parent element'.

	^ self new
		parent: aParentControllerOrNil;
		parentElement: aHtmlElement;
		yourself
!

on: aModel in: aParentControllerOrNil
	"Answers a new instance of this controller dedicated to aModel,
	child of aParentControllerOrNil and meant to be appended to 
	the default html element, expected to be <div id=#controller-keyword-wrapper></div>."
	
	^ self new 
		parent: aParentControllerOrNil;
		model: aModel;
		yourself
!

on: aModel in: aParentControllerOrNil addOn: aBlock
	"Answers a new instance of this controller dedicated to aModel,
	child of aParentControllerOrNil and meant to be appended to aHtmlElement."

	^ self new
		parent: aParentControllerOrNil;
		getParentElementBlock: aBlock;
		model: aModel;
		yourself
!

on: aModel in: aParentControllerOrNil appendingTo: aHtmlElement
	"Answers a new instance of this controller dedicated to aModel,
	child of aParentControllerOrNil and meant to be appended to aHtmlElement."

	#deprecated.
	self deprecatedAPI: 'use #on:in:addOn:aBlock where aBlock is the getter of the parent element'.

	^ self new
		parent: aParentControllerOrNil;
		parentElement: aHtmlElement;
		model: aModel;
		yourself
!

on: aModel in: aParentControllerOrNil view: aHtmlElement
	"Answers a new instance of this controller dedicated to aModel,
	child of aParentControllerOrNil and with the already created aHtmlElement as its view."

	^ self new
		model: aModel;
		parent: aParentControllerOrNil;
		view: aHtmlElement;
		yourself
! !

Controller subclass: #ListController
	instanceVariableNames: 'getItemsBlock itemControllerClass newItemControllerBlock'
	package: 'MVC-Core'!
!ListController commentStamp!
## ListController

ListControllers know how to deal with lists of things. It needs to know how you want to create subcontrollers for its items and it needs to know how to get those items. It will also allow you to customize the subcontrollers with a callback when they are instantiated.!

!ListController methodsFor: 'accessing'!

getItemsBlock

	^ getItemsBlock ifNil: [ getItemsBlock := [ :listModel | listModel list ] ]
!

getItemsBlock: aBlock

	getItemsBlock := aBlock
!

itemControllerClass

	^ itemControllerClass
!

itemControllerClass: aBlock

	itemControllerClass := aBlock
!

newItemControllerBlock

	^ newItemControllerBlock
!

newItemControllerBlock: aBlock

	newItemControllerBlock := aBlock
!

parentElement: anHtmlElement
	"Sets the parent elment for the list.
	It can be anything but, in the case of lists, the parent element usually is a <ul>
	The 'normal' thing is to treat it like an <ul> full of <li> children."
	super parentElement: anHtmlElement.
	self view: anHtmlElement
! !

!ListController methodsFor: 'actions'!

addNovelties
	"Adds a new controller for the models that yet don't have one."
	
	self getItems do: [ :each | | added |
		self controllerAt: each ifAbsentPut:[ 
			added := self newItemControllerFor: each ].
		added ifNotNil: [ 
			added show ] ]
!

getItems
	"Answers the items using the custom getItemsBlock on its model"
	
	^ self getItemsBlock value: model
!

newItemControllerFor: anItem

	^ itemControllerClass isNil
		ifFalse: [ itemControllerClass 
					on: anItem 
					in: self 
					addOn: [ self view ] ] 
		ifTrue: [ self newItemControllerBlock value: anItem ]
!

observeList
	"Observe the model for changes and react to them with a refresh."

	self model when: #changed do: [ self refresh ]
!

refresh
	"Makes sure all the items in the model have its own controller.
	Nothing less and nothing more. So it will add lazily 
	the missing controllers and remove those who's model isn't present."

	self removeAbsences.
	self addNovelties.
!

removeAbsences
	"Remove the controllers which their keys that are absent from the list model."

	| models |
	
	models := self getItems.

 	self controllers keys copy do: [ :each |
		(models includes: each) ifFalse: [ self removeControllerAt: each ] ]
!

show

	self refresh.
	
	self view show.
! !

!ListController methodsFor: 'initialization'!

initialize

	super initialize.
	
	self when: #onAfterModel do: [ 
		self observeList.
		self canCreateControllers ifTrue: [ self refresh ] ]
! !

!ListController methodsFor: 'reactions'!

onParentViewChanged
	"The parent's view has changed, make sure we have one and refresh.
	We refresh the parentElement because it probably got re-rendered
	making a new one on the DOM probably using same id attribute 
	but with different identity."
	
	"If the parent element is changed, all the observed 
	events become invalid and would need to re-observe,
	the trivial way to do it is to just remove and 
	let the refresh to rebuild all children properly."
	self removeAll.

	super onParentViewChanged
! !

!ListController methodsFor: 'testing'!

canCreateControllers
	"Answers true if this list controller has minimum needs to create controllers."
	
	^ itemControllerClass notNil or: [
	newItemControllerBlock notNil ]
! !

Controller subclass: #TemplateController
	instanceVariableNames: 'templateUri'
	package: 'MVC-Core'!
!TemplateController commentStamp!
## TemplateController is an abstraction
The concrete subclasses of TemplateController follow the convention of loading html from the server.
This convention uses the name of the controller without the "Controller" suffix as the name of the template (in lowercase) to be found as a html file in the views/ directory.

A typical interesting moment for this controllers is when they are actually finished loading and with the view set. You can observe the #onAfterView event to make it do things after it has the view loaded and set.!

!TemplateController methodsFor: 'accessing'!

templateName: aString

	self templateUri: (self class viewPath, aString,'.html')
!

templateUri

	^ templateUri ifNil:[ self initializeTemplateUri ]
!

templateUri: anUri

	templateUri := anUri
! !

!TemplateController methodsFor: 'actions'!

flush
	"Tells require to flush the potentially cached template (or do nothing if not loaded yet)"
	<window.require.undef(self._templateUri())>
!

setTemplate: htmlString
	"Receives the template's htmlString after requirejs 
	have received it from the server (or cache)."

	| added |

	"Make it to be the contents of this controllers parent element"
	^ isAppending 
		ifTrue: [ 
			added := self parentElement append: htmlString.
			self view: added children last ]
		ifFalse: [ 
			added := self parentElement prepend: htmlString 
			self view: added children first ]
!

silentSetTemplate: htmlString
	"Receives the template's htmlString after requirejs 
	have received it from the server (or cache)."

	| added |

	"Make it to be the contents of this controllers parent element"
	^ isAppending 
		ifTrue: [ 
			added := self parentElement append: htmlString.
			self silentView: added children last ]
		ifFalse: [ 
			added := self parentElement prepend: htmlString 
			self silentView: added children first ]
! !

!TemplateController methodsFor: 'initialization'!

initializeTemplateUri
	"Initilizes the templateUri on the convention that uses the first part of the controller name."
	^ templateUri := self class viewPath, self class keyword,'.html'
! !

!TemplateController methodsFor: 'rendering'!

renderOn: html
	
	require 
		value: (Array with: self templateUri)
		value: [ :template | self setTemplate: template ]
!

silentRenderOn: html

	require 
		value: (Array with: self templateUri)
		value: [ :template | self silentSetTemplate: template ]
! !

!TemplateController class methodsFor: 'accessing'!

viewPath
	"Returns the path where the template of the view should be found"
	
	^ 'text!!views/'
! !

!TemplateController class methodsFor: 'testing'!

isAbstract
	"Answers true if the receiver is abstract."
	
	^ self = TemplateController
!

isValidFor: anURI
	"Answers true if this controller is the right route for anURI"
	
	^ self isAbstract not and:[
	anURI notEmpty and:[
	anURI = self keyword ] ]
! !

TemplateController subclass: #BindingController
	instanceVariableNames: 'boundView'
	package: 'MVC-Core'!
!BindingController commentStamp!
## BindingController is an abstraction
The concrete subclasses of BindingController are users of the two-way data binding mechanism loaded by flow.

Note that BindingController is a subclass of TemplateController so all subclasses of it follow the convention of loading a html template from the server using the keyword of the controller as the name of the template to be found at views/!

!BindingController methodsFor: 'accessing'!

boundView

	^ boundView
! !

!BindingController methodsFor: 'actions'!

asBindArgument
	"Answers the model and this controller as rivets like it for binding."

	^ #{
	'model' -> self getBindableModel.
	'controller' -> self
	}
!

bind
	"Tells rivets.js to bind 
	the model of this controller to its view."
	
	boundView := RivetsJS rv
			bind: self view 
			to: self asBindArgument
!

configure
	"Sets some configurations for rivets"
	| conf |
	
	conf := self getConfiguration.
	
	RivetsJS rv configure: conf
!

configureAndBind

	(self hasModel not or: [
	self hasView not ]) ifTrue: [ ^ self ].

	self configure.
	
	self bind.
	
	"console log: (self class name,'>>configureAndBind')."
!

getBindableModel
	"Returns the model in a way that is appropiate for binding (usable by rivets).
	By default BindingController assumes that you are using a plain javascript object as model
	but subclasses might differ if they please to do so."

	"We are assuming here that you are working with aMapless as model so you
	can use regular Amber objects as models in your application.
	Mapless are implemented in a way that they have JavaScript properties 
	holding the references so you  can have a single source of truth 
	for your models and enjoy the two-way data binding and other RivetJS features."
	^ model
!

getConfiguration

	^ #{ #handler -> self getHandler }
!

getHandler
	"Answers the custom handler of flow controllers for rivets.
	We need it to be call on binding.model otherwhise 
	rivets would send the html element (target of the event)
	screwing the self instance of this controller"

	<return function( target, event, binding ){
		this.call(binding.model);
	}>
!

rebind

	"Reuse of a binded view is not exactly supported by RivetJS.
	You might want to use a refresh that will remove, 
	re-render and fesh bind this controller and its model."
	self mustNotImplement
!

removeView
	
	self unbind.
	boundView := nil.
	
	super removeView.
!

show

	^ super show 
		"done: [ self configureAndBind ]"
!

unbind
	"Tells rivets.js to unbind the view."
	
	view ifNotNil:[ view unbind ]
! !

!BindingController methodsFor: 'initialization'!

initialize

	super initialize.
	
	self 
		when: #onAfterModel do: [ self hasView ifTrue: [ self removeView ] ];
		yourself
! !

!BindingController methodsFor: 'reactions'!

onAfterBound: aRivetsBinding
	"Rivets has created a Binding instance (aRivetsBinding) with a view and the model and all its parts"
!

onAfterUnbound: aRivetsBinding
	"Rivets has unbound aRivetsBinding"
!

onAfterView

	super onAfterView.
		
	self configureAndBind
! !

!BindingController class methodsFor: 'testing'!

isAbstract
	"Answers true if the receiver is abstract."
	
	^ self = BindingController
! !

BindingController subclass: #ModalController
	instanceVariableNames: ''
	package: 'MVC-Core'!

!ModalController methodsFor: 'accessing'!

message: aString

	self basicAt: #message put: aString
!

modalOptions

	^ self class defaultModalOptions
!

title: aString

	self basicAt: #title put: aString
! !

!ModalController methodsFor: 'actions'!

close

	self view modal: 'hide'.
	
	self triggerEvent: #modalClosed
!

createModal
	"Creates the bootstrap modal on the view of this controller."

	view asJQuery modal: self modalOptions
!

observeEvents

	super observeEvents.
	
	self when: #onAfterView do: [ self createModal ]
!

open

	self show done: [

		self view modal: 'show'.
	
		self triggerEvent: #modalOpened ]
!

toggle

	self view modal: 'toggle'
! !

!ModalController class methodsFor: 'accessing'!

defaultModalOptions
	"Answers the default options for the modal controllers.
	For details on options check:
	http://getbootstrap.com/javascript/"

	^ #{
		#backdrop -> true.
		#keyboard -> true.
		#show -> false
	}
! !

!ModalController class methodsFor: 'testing'!

isAbstract
	"Answers true if the receiver is abstract."
	
	^ self = ModalController
! !

ModalController subclass: #AlertController
	instanceVariableNames: ''
	package: 'MVC-Core'!

!AlertController methodsFor: 'accessing'!

buttonLabel: aString

	self basicAt: #buttonLabel put: aString
!

onConfirmBlock: aBlock

	self when: #confirm do: aBlock
! !

ModalController subclass: #ConfirmController
	instanceVariableNames: 'acceptBlock rejectBlock'
	package: 'MVC-Core'!
!ConfirmController commentStamp!
##ConfirmController
This controller asks the user for confirmation of a given action. It has a reject and accept customizable callback!

!ConfirmController methodsFor: 'accessing'!

accept

	acceptBlock value.

	self triggerEvent: #accepted.
!

acceptBlock: aBlock

	acceptBlock := aBlock
!

acceptButtonLabel: aString

	self basicAt: #acceptButtonLabel put: aString
!

reject

	rejectBlock value.

	self triggerEvent: #rejected
!

rejectBlock: aBlock

	rejectBlock := aBlock
!

rejectButtonLabel: aString

	self basicAt: #rejectButtonLabel put: aString
! !

MaplessModel subclass: #Model
	instanceVariableNames: ''
	package: 'MVC-Core'!

Model subclass: #ListModel
	instanceVariableNames: ''
	package: 'MVC-Core'!

!ListModel methodsFor: 'accessing'!

first

	^ self list first
!

last

	^ self list last
!

list: aCollection

	super list: aCollection.
	
	self changed
!

size

	^ self list size
! !

!ListModel methodsFor: 'actions'!

add: anObject

	self list add: anObject.
	
	self changed
!

addAll: someObjects

	self list addAll: someObjects.
	
	self changed
!

remove: anObject

	self list remove: anObject.
	
	self changed
!

remove: anObject ifAbsent: aBlock

	self list remove: anObject ifAbsent: aBlock.
	
	self changed
!

removeAll

	self list removeAll.
	
	self changed
!

removeAll: someObjects

	self list removeAll: someObjects.
	
	self changed
!

removeFirst

	self remove: self first
!

removeLast

	self remove: self last
! !

!ListModel methodsFor: 'testing'!

includes: anObject

	^ self list includes: anObject
!

isEmpty

	^ self list isEmpty
!

notEmpty

	^ self list notEmpty
! !

!ListModel class methodsFor: 'actions'!

on: aCollection
	"Answers a new ListModel instance wrapping aCollection."
	
	^ self new 
		list: aCollection;
		yourself
! !

Object subclass: #RivetsJS
	instanceVariableNames: ''
	package: 'MVC-Core'!

!RivetsJS class methodsFor: 'accessing'!

afterBoundCallback
	"Returns a callback used when rivets had bound an element"
	
	<return function(el, val){
		this.model.controller._onAfterBound_(this);
		return this;
	}>
!

afterUnboundCallback
	"Returns a callback used when rivets had bound an element"
	
	<return function(el, val){
		this.model.controller._onAfterUnbound_(this);
		return this;
	}>
!

binderCallback
	"Returns a callback to bind whoBinds."
	
	<return function(){
		var args = Array.prototype.slice.call(arguments);
		var fn = args.shift();
		var whoBinds = args.shift();

		if (typeof fn === 'function') {
			return function() {
				fn.apply(self, args);
			}
		}
		
		return fn;
	}>
!

liveValueBindCallback

	<return function (el) {
    	this.handler = this.handler || this.publish.bind(this);
    	el.addEventListener('keyup', this.handler);
	}>
!

liveValueUnbindCallback
	
	<return  function (el) {
		if (this.handler) {
    		el.removeEventListener('keyup', this.handler);
    	}
	}>
!

rv
	"Answers the rivets accessor.
	http://rivetsjs.com/docs/guide/"

	^ require value: 'rivets'
!

utilFormatters

	^ Dictionary new 
		at: #at put: [ :object :key | object at: key ];
		at: #reversed put: [ :aCollection | aCollection reversed ];
		at: #sorted put: [ :aCollection | aCollection sorted ];
		at: #size put: [ :anObject | anObject size ];
		at: #rounded put: [ :aNumber | aNumber rounded ];
		at: #capitalized put: [ :aString | aString capitalized ];
		at: #asNumber put: [ :aString | aString ifNotNil: [ aString asNumber ] ifNil: [ 0 ] ];
		at: #asCurrency put: [ :aNumber :aCurrencySymbol | aCurrencySymbol asString, (aNumber ifNotNil: [ aNumber asNumber printShowingDecimalPlaces: 2 ] ifNil: [ '' ]) ];
		at: #decimalPlaces put: [ :aNumber :decimalPlaces | aNumber ifNotNil: [ aNumber asNumber printShowingDecimalPlaces: decimalPlaces ] ifNil: [ '' ]  ];
		at: #asLowercase put: [ :aString | aString asString asLowercase ];
		at: #asUppercase put: [ :aString | aString asString asUppercase ];
		at: #bind put: self binderCallback;
		yourself
! !

!RivetsJS class methodsFor: 'actions'!

addFormatter: aBlock at: aName
	"Tells rivets.js to add aBlock callback as a formatter under aName."
	
	self rv formatters at: aName put: aBlock
!

installBinders
	"Installs custom binders."
	
	| liveValue |

	liveValue := self newLiveValue.

	liveValue 
		at: #bind put: self liveValueBindCallback;
		at: #unbind put: self liveValueUnbindCallback;
		yourself.
		
	self rv binders 
		at: 'after-bound' 
		put: #{
				#bind -> self afterBoundCallback.
				#priority -> 4000 };
		at: 'after-unbound' 
		put: #{
				#unbind -> self afterUnboundCallback.
				#priority -> 4000 };
		at: 'live-value' put: liveValue;
		yourself.
!

installUtils

	self utilFormatters keysAndValuesDo: [ :key :value |
		self addFormatter: value at: key ]
!

newLiveValue

	<return Object.create(require('rivets').binders.value)>
! !

!RivetsJS class methodsFor: 'initialization'!

initialize

	self installUtils.
	self installBinders.
! !

Object subclass: #Router
	instanceVariableNames: ''
	package: 'MVC-Core'!
!Router commentStamp!
This is a simple Router based on [rlite](https://github.com/chrisdavies/rlite)

##Example

```
App class>>setupRoutes

	Router rlite 
		add: '' do: [ :r | Router set: '#/home' ];
		add: '#' do: [ :r | Router set: '#/home' ];
		add: '#/' do: [ :r | Router set: '#/home' ];
		add: '/' do: [ :r | Router set: '#/home' ];
		add: 'home' do: [ :r | App home ];
		add: 'users' do: [ :r | App users ];
		add: 'users/:id' do: [ :r | App showUserAt: r params id ];
		add: 'articles/:articleid?query=thisthing' do: [ :r | App showArticleAt: r params articleid searching: r params query ];
		add: 'profile' do: [ :r | console log: 'view / edit profile requested' ];
		add: 'settings' do: [ :r | console log: 'view edit settings requested' ];
		add: 'system' do: [ :r | console log: 'view edit system requested' ];
		add: 'account' do: [ :r | console log: 'view edit account requested' ];
		add: 'signout' do: [ :r | console log: 'sign out requested' ];
		yourself
```!

Router class instanceVariableNames: 'rlite'!

!Router class methodsFor: 'accessing'!

rlite

	^ rlite ifNil: [ rlite := Rlite new ]
!

uri

	^ window location hash
! !

!Router class methodsFor: 'actions'!

back

	self back: -1
!

back: aNegtiveInteger

	aNegtiveInteger > 0 ifTrue:[ ^self ].
	window history go: aNegtiveInteger
!

go: aURI
	"Evaluates the predefined callback for the route defined by aURI.
	Returns false if no callback was found for it."

	^ (aURI includes: '#')
		ifTrue: [ self rlite run: aURI allButFirst ]
		ifFalse: [ self rlite run: aURI ]
!

observeHash

	window 
		addEventListener: #hashchange 
		do: [ self processHash ].
		
	window 
		addEventListener: #unload
		do: [ window asJQuery off: #hashchange ]
!

processHash
	"Evaluates the predefined callback for the route defined by the current hash.
	Returns false if no callback was found for it."

    ^ self go: window location hash
!

set: aURI
	"Sets the URI of the web browser to aRUI."
	
	window location at: #hash put: aURI
! !

!Router class methodsFor: 'initialization'!

initialize
	
	self observeHash
! !

!Collection methodsFor: '*MVC-Core'!

removeAll: aCollection 
	"Remove each element of aCollection from the receiver. If successful for 
	each, answer aCollection. Otherwise create an error notification.
	ArrayedCollections cannot respond to this message."

	aCollection == self ifTrue: [^self removeAll].
	aCollection do: [:each | self remove: each].
	^ aCollection
!

removeAllFoundIn: aCollection 
    "Remove each element of aCollection which is present in the receiver 
    from the receiver. Answer aCollection. No error is raised if an element
    isn't found. ArrayedCollections cannot respond to this message."

    aCollection do: [ :each | self remove: each ifAbsent: [ nil ] ].
    ^ aCollection
!

removeAllSuchThat: aBlock 
	"Evaluate aBlock for each element and remove all that elements from
	the receiver for that aBlock evaluates to true.  Use a copy to enumerate 
	collections whose order changes when an element is removed (i.e. Sets)."

	self copy do: [ :each | (aBlock value: each) ifTrue: [ self remove: each ] ]
! !

!JSObjectProxy methodsFor: '*MVC-Core'!

isNil

	^ false
!

notNil

	^ true
! !

!Object methodsFor: '*MVC-Core'!

changed

	self triggerEvent: #changed
!

debugger

	<debugger>
!

destroy

	<delete self>
! !

!SequenceableCollection methodsFor: '*MVC-Core'!

shuffled
	"Answers a copy of this collection with the same elements but randomly positioned."
	
	| shaked source | 
	
	shaked := self class new.
	source := self copy.
	
	1 to: self size do: [ :i | 
		shaked add: (source remove: source atRandom) ].
! !

