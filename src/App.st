Smalltalk createPackage: 'App'!
Object subclass: #App
	instanceVariableNames: ''
	package: 'App'!

App class instanceVariableNames: 'main'!

!App class methodsFor: 'accessing'!

main
	"Answers the main controller of the app (parent of all the other ones).
	Initializes it lazily."

	^ main ifNil: [ self initializeMain ]
! !

!App class methodsFor: 'actions'!

home
	console log: 'App>>home'.
	
	self main reset
!

publishObjects

	Flow session api ws
		publish: Flow app at: 'app';
		publish: Transcript current at: 'Transcript';
		publish: console at: 'console';
		publish: [ :sent | sent ] at: 'echo';
		publish: [ :ping | #pong ] at: 'ping';		
		publish: [ :a :b | a + b ] at: 'sum';	
		yourself
!

setupRoutes

	Router rlite 
		add: '' do: [ :r | console log: 'process ""'. Router set: '/home' ];
		add: '/' do: [ :r | console log: 'process "/"'. Router set: '/home' ];
		add: '/#' do: [ :r | console log: 'process "/#"'. Router set: '/home' ];
		add: '/home' do: [ :r | console log: 'process "/home"'. Router set: '/home' ];
		add: '/#/home' do: [ :r | console log: 'process "/#/home"'. Router set: '/home' ];

		add: 'home' do: [ :r | console log: 'process "home"'. App home ];
		add: 'example1' do: [ :r | App main showExample1 ];
		add: 'example2' do: [ :r | App main showExample2 ];
		add: 'example3' do: [ :r | App main showExample3 ];
		add: 'example4' do: [ :r | App main showExample4 ];
		add: 'example5' do: [ :r | App main showExample5 ];
		yourself
!

start

	window at: #app put: self.
	
	Router processHash
! !

!App class methodsFor: 'initialization'!

initialize

	self setupRoutes
!

initializeMain

	^ main := MainController 
				for: ExampleModel new
				on: nil
				appendingTo: '#main-wrapper' asJQuery
! !

ConfirmController subclass: #ConfirmNameController
	instanceVariableNames: ''
	package: 'App'!
!ConfirmNameController commentStamp!
##AppController

The AppController is the main/root controller of your flow-based application.!

!ConfirmNameController methodsFor: 'initialization'!

initialize

	super initialize.
	
	self 
		title: 'Please confirm';
		rejectButtonLabel: 'Mmmm, I''d have to think about it';
		acceptButtonLabel: 'Of course I can!!';
		yourself.
! !

TemplateController subclass: #Example1Controller
	instanceVariableNames: ''
	package: 'App'!
!Example1Controller commentStamp!
##AppController

The AppController is the main/root controller of your flow-based application.!

!Example1Controller methodsFor: 'actions'!

observeEvents

	(view asJQuery find: 'a#browse-example1') 
		on: #click
		do: [ [ Example1Controller browse ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ].
		
	(view asJQuery find: 'a#browse-template') 
		on: #click
		do: [  [ TemplateController browse ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ]
! !

!Example1Controller methodsFor: 'initialization'!

initialize

	super initialize.
	
	self 
		when: #onAfterView do: [ self observeEvents ];
		yourself
! !

!Example1Controller class methodsFor: 'accessing'!

defaultModel

	^ Flow session
! !

BindingController subclass: #Example2Controller
	instanceVariableNames: ''
	package: 'App'!
!Example2Controller commentStamp!
##AppController

The AppController is the main/root controller of your flow-based application.!

!Example2Controller methodsFor: 'accessing'!

nameModal

	^ self ifAbsentAt: #nameModal put: [
		(ConfirmNameController 
			for: ExampleModel new
			on: self
			appendingTo: '#confirmName' asJQuery)
				acceptBlock: [ 
					model at: #isConfirmed put: true.
					(self controllerAt: #nameModal) close ];
				rejectBlock: [ 
					model at: #isConfirmed put: false.
					(self controllerAt: #nameModal) close ];
				yourself ]
! !

!Example2Controller methodsFor: 'actions'!

confirm
	"Sets a fresh message and opens the modal"

	self nameModal
		message: ((model at: #firstName) asString,' are you sure you can handle this?');
		showThen: [ :c | c open ]
!

confirmAgain

	model firstName: ''.
	model isConfirmed: false.
	
	self  updateCanConfirm
!

observeEvents

	(view asJQuery find: 'a#inspect-example2') 
		on: 'click' 
		do: [  [ self inspect ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ].
		
	(view asJQuery find: 'a#browse-binding') 
		on: 'click' 
		do: [ [ BindingController browse ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ]
!

updateCanConfirm
		
	self hasModel ifFalse: [ ^ self ].
	
	self 
		basicAt: #canConfirm 
		put: ((model at: #firstName) notNil and: [
				(model at: #firstName) notEmpty ])
! !

!Example2Controller methodsFor: 'initialization'!

initialize

	super initialize.
	
	self 
		when: #onAfterView 
		do: [ 
			self updateCanConfirm.
			self observeEvents ]
! !

!Example2Controller methodsFor: 'reactions'!

onFirstNameKeyUp

	self updateCanConfirm
! !

!Example2Controller class methodsFor: 'accessing'!

defaultModel

	^ Dictionary new 
		firstName: 'Dude';
		someNumbers: #( 3 6 2 8 1 );
		someFloatValue: 33.33333333;
		yourself
! !

TemplateController subclass: #Example3Controller
	instanceVariableNames: ''
	package: 'App'!
!Example3Controller commentStamp!
##AppController

The AppController is the main/root controller of your flow-based application.!

!Example3Controller methodsFor: 'accessing'!

example1

	^ self ifAbsentAt: #example1 put: [
		Example1Controller 
			for: nil "We don't need to set any particular model for it"
			on: self  "with this we are saying 'self is going to be your parent controller' (check implementors of #for:on:appendingTo:)"
			appendingTo: '#subexample-wrapper' asJQuery ]
! !

!Example3Controller methodsFor: 'actions'!

observeEvents

	(view asJQuery find: 'a#inspect-this') 
		on: #click
		do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ]
!

showSubController
	
	self example1 show
! !

!Example3Controller methodsFor: 'initialization'!

initialize

	super initialize.
	
	self 
		when: #onAfterView 
		do: [ 
			self showSubController.
			self observeEvents ]
! !

!Example3Controller class methodsFor: 'accessing'!

defaultModel

	^ Dictionary new 
		firstName: 'Visitor';
		yourself
! !

BindingController subclass: #Example4Controller
	instanceVariableNames: ''
	package: 'App'!
!Example4Controller commentStamp!
##AppController

The AppController is the main/root controller of your flow-based application.!

!Example4Controller methodsFor: 'accessing'!

potentialNames

	^ #(
	Galileo
	Newton
	Einstein
	Heisemberg
	Bohr
	Schrodinger
	Plank
	Neumann
	DeBroglie
	Feynman
	)
!

things 
	
	^ self ifAbsentAt: #things put: [
		(ListController 
			on: self
			appendingTo: '#things-wrapper' asJQuery)
			newItemControllerBlock: [ :item | 
				self newItemControllerFor: item for: (self controllerAt: #things) ];
			model: self getListModel;
			yourself ]
! !

!Example4Controller methodsFor: 'actions'!

addThing

	self things model add: (ThingModel new name: #( Wave Particle Entanglement Superposition ) atRandom; yourself).
	
	self updateNotEmpty
!

details
	
	^ self ifAbsentAt: #details put: [
		ThingDetailsController
			on: self
			appendingTo: '#details-wrapper' asJQuery ]
!

getListModel
	"Answers a newly created list model of things (Thing sample instances)."
	
	^ ListModel new
		list: (self potentialNames shuffled collect: [ :aName |  
				#{ #name -> aName } ]);
		yourself
!

newItemControllerFor: aModel for: aListController
	"Returns a new controller for aModel to be handled by aListController."

	| row |

	row := ThingRowController 
				for: aModel
				on: aListController
				appendingTo: aListController view.
				
	row
		when: #removeThing do: [ self onRemove: aModel ];
		when: #viewDetails do: [ self onDetails: aModel ];
		yourself.

	^ row
!

observeEvents

	'#inspect-this' asJQuery 
		on: #click
		do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ]
!

removeThing

	self things model removeLast.
	
	self updateNotEmpty
!

updateNotEmpty

	self 
		basicAt: #notEmpty 
		put: self things model notEmpty
! !

!Example4Controller methodsFor: 'initialization'!

initialize

	super initialize.
	
	self basicAt: #hasDetails put: false.
	
	self when: #onAfterView do: [ 
		self things show.
		self updateNotEmpty.
		self observeEvents ]
! !

!Example4Controller methodsFor: 'reactions'!

onDetails: aThing

	self basicAt: #hasDetails put: true.
	
	self details model: aThing; refresh
!

onRemove: aThing

	self things model remove: aThing.

	self updateNotEmpty
! !

!Example4Controller class methodsFor: 'accessing'!

defaultModel

	^ AppVisitor new
! !

BindingController subclass: #Example5Controller
	instanceVariableNames: ''
	package: 'App'!
!Example5Controller commentStamp!
##AppController

The AppController is the main/root controller of your flow-based application.!

!Example5Controller methodsFor: 'accessing'!

potentialNames

	^ #(
	Galileo
	Newton
	Einstein
	Heisemberg
	Bohr
	Schrodinger
	Plank
	Neumann
	DeBroglie
	Feynman
	)
! !

!Example5Controller methodsFor: 'actions'!

addThing

	model things add: (Thing new name: #( Wave Particle Entanglement Superposition ) atRandom; yourself).
	
	self updateNotEmpty
!

ensureDetails
	"Makes sure we have a controller for #details and 
	make it fresh and visible with a refresh"
	
	self ifAbsentAt: #details put: [
		ThingDetailsController
			on: self
			appendingTo: '#details-wrapper' asJQuery ].
	
	(self controllerAt: #details) refresh
!

ensureList
	"Makes sure we have a controller for #things and 
	make it fresh and visible with a refresh"
	
	self ifAbsentAt: #things put: [
		ItemsController 
			for: model
			on: self
			appendingTo: '#things-wrapper' asJQuery ].
	
	(self controllerAt: #things) 
		getItemsBlock: [ :m | m things ];
		rivetsAccessor: #thing;
		newItemControllerBlock: [ :v :m :itemsController | 
			self newItemControllerForModel: m view: v parent: itemsController ];
		model: model;
		refresh
!

newItemControllerForModel: aModel view: aView parent: anItemsController
	"Returns a new controller for aModel using aView and meant to be child of anItemsController."

	| row |

	row := ThingRowController 
				for: aModel
				on: anItemsController
				appendingTo: (aView asJQuery find: '.item-wrapper').

	row
		when: #removeThing do: [ self onRemove: aModel ];
		when: #viewDetails do: [ self onDetails: aModel ];
		yourself.

	^ row
!

newItems
	"Answers a newly created collection of items to be used as models in the ItemsController."
	
	^ self potentialNames shuffled collect: [ :aName |  
		ThingModel new 
			name: aName;
			yourself ]
!

observeEvents

	'#inspect-this' asJQuery 
		on: #click
		do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ]
!

removeThing

	model things remove: model things last ifAbsent: [ nil ].
	
	self updateNotEmpty
!

updateNotEmpty

	self 
		basicAt: #notEmpty 
		put: model things notEmpty
! !

!Example5Controller methodsFor: 'initialization'!

initialize

	super initialize.
	
	self when: #onAfterView do: [ 
		self ensureDetails.
		self ensureList.
		self updateNotEmpty.
		self observeEvents ]
!

model: aModel
	
	super model: aModel.
	
	aModel things: self newItems
! !

!Example5Controller methodsFor: 'reactions'!

onDetails: aThing

	self basicAt: #hasDetails put: true.
	
	(self controllerAt: #details) model: aThing; refresh
!

onRemove: aThing

	model things remove: aThing ifAbsent: [ nil ].

	self updateNotEmpty
! !

!Example5Controller class methodsFor: 'accessing'!

defaultModel

	^ AppVisitor new
! !

Object subclass: #ExampleModel
	instanceVariableNames: 'name'
	package: 'App'!

!ExampleModel methodsFor: 'accessing'!

name

	^ name
!

name: aString

	name := aString
! !

TemplateController subclass: #MainController
	instanceVariableNames: ''
	package: 'App'!
!MainController commentStamp!
##AppController

The AppController is the main/root controller of your flow-based application.!

!MainController methodsFor: 'accessing'!

example1

	^ self ifAbsentAt: #example1 put: [
		Example1Controller 
			for: model
			on: self
			appendingTo: '#example1-wrapper' asJQuery ]
!

example2

	^ self ifAbsentAt: #example2 put: [
		Example2Controller 
			for: #{ 
					#firstName -> 'Dude'.					
					#someNumbers -> #( 3 6 2 8 1 ).
					#someFloatValue -> 33.33333333
	
				}  "It's a binding controller, so we send a plain js object as model"
			on: self
			appendingTo: '#example2-wrapper' asJQuery ]
!

example3

	^ self ifAbsentAt: #example3 put: [
		Example3Controller 
			for: model
			on: self
			appendingTo: '#example3-wrapper' asJQuery ]
!

example4

	^ self ifAbsentAt: #example4 put: [
		Example4Controller 
			for: #{} "It's a binding controller, so we send a plain js object as model"
			on: self
			appendingTo: '#example4-wrapper' asJQuery ]
!

example5

	^ self ifAbsentAt: #example5 put: [
		Example5Controller 
			for: #{} "It's a binding controller, so we send a plain js object as model"
			on: self
			appendingTo: '#example5-wrapper' asJQuery ]
! !

!MainController methodsFor: 'actions'!

hideAll
	"Hides all subcontrollers and the welcome message"

	'#welcome' asJQuery hide.
	
	super hideAll
!

highlightTitle

	(view asJQuery find: 'h1') effect: 'highlight'
!

observeEvents

	(view asJQuery find: 'a#inspect-main') 
		on: #click 
		do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ]
!

reset
	"Hides all subcontrollers and shows the welcome message"

	console log: 'MainController>>reset'.

	self hideAll.
	
	self showThen: [ '#welcome' asJQuery show ]
!

showExample1

	console log: 'showExample1'.
	
	self showThen: [
		self hideAll.
		self example1 show ]
!

showExample2

	console log: 'showExample2'.

	self showThen: [
		self hideAll.
		self example2 show ]
!

showExample3

	console log: 'showExample3'.
	
	self showThen: [
		self hideAll.
		self example3 show ]
!

showExample4

	console log: 'showExample4'.
	
	self showThen: [
		self hideAll.
		self example4 show ]
!

showExample5

	console log: 'showExample5'.
	
	self showThen: [
		self hideAll.
		self example5 show ]
! !

!MainController methodsFor: 'initialization'!

initialize

	super initialize.
	
	self 
		when: #onAfterView do: [ 
			self observeEvents ];
		yourself
! !

BindingController subclass: #ThingDetailsController
	instanceVariableNames: ''
	package: 'App'!

Object subclass: #ThingModel
	instanceVariableNames: 'name'
	package: 'App'!

!ThingModel methodsFor: 'accessing'!

name

	^ name
!

name: aString

	name := aString
! !

BindingController subclass: #ThingRowController
	instanceVariableNames: ''
	package: 'App'!

!ThingRowController methodsFor: 'actions'!

removeThing

	self triggerEvent: #removeThing
!

viewDetails

	self triggerEvent: #viewDetails
! !

