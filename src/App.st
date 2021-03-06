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

	self main reset
!

setupRoutes

	Router rlite 
		"Normalize the home URI"
		add: '' do: [ :r | Router set: '/home' ];
		add: '/' do: [ :r | Router set: '/home' ];
		add: '/#' do: [ :r | Router set: '/home' ];
		add: '/home' do: [ :r | Router set: '/home' ];
		add: '/#/home' do: [ :r | Router set: '/home' ];

		"Setup the actual routes"
		add: 'home' do: [ :r | App home ];
		add: 'example1' do: [ :r | App main showExample1 ];
		add: 'example2' do: [ :r | App main showExample2 ];
		add: 'example3' do: [ :r | App main showExample3 ];
		add: 'example4' do: [ :r | App main showExample4 ];
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
					on: ExampleModel new
					in: nil
					addOn: [ '#main-wrapper' asJQuery ]
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

	super observeEvents.

	(view asJQuery find: 'a#browse-example1') 
		on: #click
		do: [ [ Example1Controller browse ] on: Error do: [ :x | window alert: 'Is the IDE open?' ] ].
		
	(view asJQuery find: 'a#browse-template') 
		on: #click
		do: [  [ TemplateController browse ] on: Error do: [ :x | window alert: 'Is the IDE open?' ] ]
! !

!Example1Controller class methodsFor: 'accessing'!

defaultModel

	^ ExampleModel new
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
			on: model
			in: self
			addOn: [ '#confirmName' asJQuery ])
				acceptBlock: [ 
					model isConfirmed: true.
					self nameModal close ];
				rejectBlock: [ 
					model isConfirmed: false.
					self nameModal close ];
				yourself ]
! !

!Example2Controller methodsFor: 'actions'!

confirm
	"Sets a fresh message and opens the modal"

	self nameModal
		message: (model firstName asString,' are you sure you can handle this?');
		open
!

confirmAgain

	model firstName: ''.
	model isConfirmed: false.
	
	self  updateCanConfirm
!

observeEvents

	super observeEvents.
	
	self 
		when: #onAfterView 
		do: [ self updateCanConfirm ]
!

updateCanConfirm
		
	self hasModel ifFalse: [ ^ self ].
	
	self 
		basicAt: #canConfirm
		put: (model firstName notNil and: [
				model firstName notEmpty ])
! !

!Example2Controller methodsFor: 'reactions'!

onFirstNameKeyUp

	self updateCanConfirm
! !

!Example2Controller class methodsFor: 'accessing'!

defaultModel

	^ ThingModel new 
		firstName: 'Dude';
		someNumbers: #( 3 6 2 8 1 );
		someFloatValue: 33.33333333;
		someStringNumericValue: '1776';
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
			on: nil "We don't need to set any particular model for it"
			in: self  "with this we are saying 'self is going to be your parent controller' (check implementors of #for:on:addOn:)"
			addOn: [ '#subexample-wrapper' asJQuery ] ]
! !

!Example3Controller methodsFor: 'actions'!

observeEvents

	super observeEvents.

	(view asJQuery find: 'a#inspect-this') 
		on: #click
		do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is the IDE open?' ] ]
!

showSubController
	
	self example1 show
! !

!Example3Controller methodsFor: 'initialization'!

initialize

	super initialize.
	
	self 
		when: #onAfterView 
		do: [ self showSubController ]
! !

!Example3Controller class methodsFor: 'accessing'!

defaultModel

	^ ExampleModel new
! !

BindingController subclass: #Example4Controller
	instanceVariableNames: ''
	package: 'App'!
!Example4Controller commentStamp!
##AppController

The AppController is the main/root controller of your flow-based application.!

!Example4Controller methodsFor: 'accessing'!

details
	
	^ self ifAbsentAt: #details put: [
		ThingDetailsController
			in: self
			addOn: [ '#details-wrapper' asJQuery ]]
!

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
			on: self getListModel
			in: self
			addOn: [ '#things-wrapper' asJQuery ])
				newItemControllerBlock: [ :item | 
					self newItemControllerFor: item for: self things ];
				yourself ]
! !

!Example4Controller methodsFor: 'actions'!

addThing

	self things model add: (ThingModel new name: #( Wave Particle Entanglement Superposition ) atRandom; yourself).
	
	self updateNotEmpty
!

getListModel
	"Answers a newly created list model of things (Thing sample instances)."
	
	^ ListModel new
		list: (self potentialNames shuffled collect: [ :aName |  
				ThingModel new 
					name: aName;
					yourself ]);
		yourself
!

newItemControllerFor: aModel for: aListController
	"Returns a new controller for aModel to be handled by aListController."

	| row |

	row := ThingRowController 
				on: aModel
				in: aListController
				addOn: [ aListController view ].
	
	row
		when: #removeThing do: [ self onRemove: aModel ];
		when: #viewDetails do: [ self onDetails: aModel ];
		yourself.

	^ row
!

observeEvents

	super observeEvents.
	
	"self when: #onAfterView do: [ 
		self things show.		
		self updateNotEmpty ]"
!

removeThing

	self things model removeLast.
	
	self updateNotEmpty
!

show

	^ super show done: [ 
		self things show.		
		self updateNotEmpty ]
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

	^ ExampleModel new
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
			on: model
			in: self
			addOn: [ '#example1-wrapper' asJQuery ] ]
!

example2

	^ self ifAbsentAt: #example2 put: [
		Example2Controller 
			on: (ThingModel new
					firstName: 'Dude';
					someNumbers: #( 3 6 2 8 1 );
					someFloatValue: 33.33333333;
					someStringNumericValue: '1776';
					yourself)
			in: self
			addOn: [ '#example2-wrapper' asJQuery ] ]
!

example3

	^ self ifAbsentAt: #example3 put: [
		Example3Controller 
			on: model
			in: self
			addOn: [ '#example3-wrapper' asJQuery ] ]
!

example4

	^ self ifAbsentAt: #example4 put: [
		Example4Controller 
			on: ThingModel new
			in: self
			addOn: [ '#example4-wrapper' asJQuery ] ]
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

reset
	"Hides all subcontrollers and shows the welcome message"

	self hideAll.
	
	self show done: [ '#welcome' asJQuery show ]
!

showExample1

	self show done: [
		self hideAll.
		self example1 show ]
!

showExample2

	self show done: [
		self hideAll.
		self example2 show ]
!

showExample3
	
	self show done: [
		self hideAll.
		self example3 show ]
!

showExample4

	self show done: [
		self hideAll.
		self example4 show ]
! !

!MainController methodsFor: 'initializing'!

observeEvents
	
	super observeEvents.

	(view asJQuery find: 'a#inspect-main') 
		on: #click 
		do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is the IDE open?' ] ]
! !

BindingController subclass: #ThingDetailsController
	instanceVariableNames: ''
	package: 'App'!

MaplessModel subclass: #ThingModel
	instanceVariableNames: ''
	package: 'App'!

!ThingModel methodsFor: 'actions'!

printOn: aStream

	super printOn: aStream.
	
	aStream space; nextPutAll: self asJSONString
! !

BindingController subclass: #ThingRowController
	instanceVariableNames: ''
	package: 'App'!

!ThingRowController methodsFor: 'actions'!

removeThing

	self triggerEvent: #removeThing
!

show

	^ super show done: [  
		"This example doesn't really use it but for illustrative pruposes
		here you see how you can use the promise to do 
		useful post render DOM manipulation."
		view asJQuery attr: #id set: model cid ]
!

viewDetails

	self triggerEvent: #viewDetails
! !

!ProtoObject methodsFor: '*App'!

perform: aString withArguments: aCollection
	<return $core.send(self, $core.st2js(aString), aCollection)>
! !

