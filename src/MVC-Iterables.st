Smalltalk createPackage: 'MVC-Iterables'!
BindingController subclass: #ItemsController
	instanceVariableNames: 'getItemsBlock itemControllerClass newItemControllerBlock rivetsAccessor'
	package: 'MVC-Iterables'!
!ItemsController commentStamp!
##IteratedController
##Sorry this one is not currently being supported
It requires a rivetjs hack to work and the ListController gives you the feature 
____

Like ListController except it relies on rivets.js to iterate  models' presentation.

It's rivets who triggers the creation, maintenance and destruction of the (sub)controllers of this controller.

[This is how you use it in the template/view](http://rivetsjs.com/docs/reference/#each-[item])!

!ItemsController methodsFor: 'accessing'!

getItems

	^ getItemsBlock numArgs isZero
		ifTrue: [ getItemsBlock value ]
		ifFalse: [ getItemsBlock value: model ]
!

getItemsBlock

	^ getItemsBlock
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

rivetsAccessor

	^ rivetsAccessor
!

rivetsAccessor: aSymbol

	rivetsAccessor := aSymbol
! !

!ItemsController methodsFor: 'actions'!

newItemControllerOn: aView for: aModel

	^ itemControllerClass isNil
		ifFalse:[ itemControllerClass 
					for: aModel 
					on: self 
					appendingTo: aView ] 
		ifTrue:[ self newItemControllerBlock 
						value: aView 
						value: aModel 
						value: self ]
! !

!ItemsController methodsFor: 'reactions'!

onAfterBound: aRivetsBinding
	"Rivets has created a Binding instance with a view and the model and all its parts"

	| boundItemView boundItemModel |
	
	super onAfterBound: aRivetsBinding.
	boundItemModel := aRivetsBinding model at: self rivetsAccessor.

	self ifAbsentAt: boundItemModel put: [
		boundItemView := aRivetsBinding view els first.
		self newItemControllerOn: boundItemView for: boundItemModel ].
		
	(self controllerAt: boundItemModel) render
!

onAfterUnbound: aRivetsBinding
	"Rivets has unbound a aRivetsBinding instance"

	| boundItemModel |
	
	super onAfterUnbound: aRivetsBinding.

	boundItemModel := aRivetsBinding model at: self rivetsAccessor.
	
	(self removeControllerAt: boundItemModel)
! !

BindingController subclass: #IteratedController
	instanceVariableNames: 'itemControllerClass newItemControllerBlock'
	package: 'MVC-Iterables'!
!IteratedController commentStamp!
##IteratedController
##Sorry this one is not currently being supported
It requires a rivetjs hack to work and the ListController gives you the feature 
____

Like ListController except it relies on rivets.js to iterate  models' presentation.

It's rivets who triggers the creation, maintenance and destruction of the (sub)controllers of this controller.

[This is how you use it in the template/view](http://rivetsjs.com/docs/reference/#each-[item])!

!IteratedController methodsFor: 'accessing'!

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
	The thing is to treat it like an <ul> full of <li> children."
	parentElement := view := anHtmlElement
! !

!IteratedController methodsFor: 'actions'!

configureAndBind

	self configure.

	self makeCustomBinder.
	
	self bind
!

getCustomBindFor: theEachBind

	<return function(el){
		this.view.onViewCreated = function(aView, aModel){ self._onViewCreated_for_(aView, aModel) };
		this.view.onViewDestroyed = function(aView, aModel){ self._onViewDestroyed_for_(aView, aModel) };
		theEachBind.call(this,el);		
		}>
!

getCustomRoutineFor: theEachRoutine

	<return function(el, collection){
		var results = theEachRoutine.call(this, el, collection);
		self._onRoutine_value_(el, collection);
		return results;
		}>
!

makeCustomBinder
	"Answers the rivetjs configuration needed for this controller to maintain subcontrollers
	in sync with the lifecicly of the elements maintained by rivets via the each-* directive"
	
	| theEachBind theEachRoutine |
	
	self rivets binders 
		at: 'iterated-*'
		put: (self rivets binders at: 'each-*').
		
	theEachBind := (self rivets binders at: 'each-*') at: #bind.
	theEachRoutine := (self rivets binders at: 'each-*') at: #routine.
	
	(self rivets binders at: 'iterated-*') at: #bind put: (self getCustomBindFor: theEachBind).
	(self rivets binders at: 'iterated-*') at: #routine put: (self getCustomRoutineFor: theEachRoutine)
!

newItemControllerOn: aRivetJSView for: aModel

	^ itemControllerClass isNil
		ifFalse:[ itemControllerClass 
					for: aModel 
					on: self 
					appendingTo: (jQuery value: aRivetJSView els first) ] 
		ifTrue:[ self newItemControllerBlock 
						value: aRivetJSView 
						value: aModel 
						value: self ]
! !

!IteratedController methodsFor: 'reactions'!

onRoutine: anElement value: aValue
	"Rivetjs has executed the routing of the iterated-* binder."

	"no-op"
!

onViewCreated: aRivetJSView for: aModel
	"aRivetJSView was ceated for aModel by rivetsjs iterated-* and 
	we make sure we have a controller for it."

	self ifAbsentAt: aModel id put:[ self newItemControllerOn: aRivetJSView for: aModel].
		
	(self controllerAt: aModel id) render
!

onViewDestroyed: aView for: aModel
	"The view for aModel was revoved by rivetjs, 
	so we make sure we remove the controller as well"
	
	self removeControllerAt: aModel id
! !

