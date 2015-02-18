February 18, 2015 - Release 0.1.29
===================================

* Upgrades Amber to 0.14.10


February 17, 2015 - Release 0.1.28
===================================

* Upgrades amber-dev to 0.4.0 and MiniMapless to 0.11.1


February 17, 2015 - Release 0.1.27
===================================

* Deprecation of all constructor methods of Controller using appendingTo: in favor of addOn: aBlock where aBlock returns the parentElement that controllers can use on demand to get it fresh anytime they want.
* Fixes #observeEvents on the examples, controllers now need to always send `super observeEvents` and no need to call it during their #initialize #onAfterView since that's being done for all in the Controller class.
* Introducing #beAppending and #bePrepending controlled by #isAppending true or false. The default is appending.
* To guarantee consistency, removes #parentElement instVar and making controllers to access it always via the block passed in the addOn: of the constructor and set into the new #parentElementGetter instVar.
* Deprecated Controller>>deferred in favor of Controller>>showPromise
* Introducing Controller>>removeView with events #onBeforeRemoveView and #onAfterRemoveView.
* ConfirmController now using instVars acceptBlock and rejectBlock for the callbacks.
* The message #remove will remove children's first and then the receiver.
* Controllers listens to parent's #onRemove event to react removing themselves first when that happens.
* ListController>>refreshItems is now what used to be #refresh and is used mostly atumatically. The new implementation of ListController>>refresh is now loyal to the superclass' intention.


February 10, 2015 - Release 0.1.24
===================================

* Upgrades to "minimapless": "^0.11.0"


February 2, 2015 - Release 0.1.23
===================================

* Controller>>hasControllerAt: belongs to amber-mvc instead of *App
* Upgrades to Amber 0.14.4


January 30, 2015 - Release 0.1.22
===================================

* Controller>>hasControllerAt:


January 30, 2015 - Release 0.1.21
===================================

* Review


January 30, 2015 - Release 0.1.20
===================================

* Controller class>>in:appendingTo:
* Adds missing deprecation warning


January 29, 2015 - Release 0.1.19
===================================

* Upgrades to "minimapless": "~0.10.12"
* Using verbs in past for events of the modals controllers.
* New constructor ListModel class>>on: aCollection.
* BindingControllers now hold the RivetJS returned binded View.
* Controller>>hideAllBut:
* Controller>>hideAt:
* Controller>>removeAll
* Controller>>showAt:
* Controller>>silentView: anHtmlElement will put self in controller 
* Object>>destroy will do a JavaScript delete of the instance


January 21, 2015 - Release 0.1.18
===================================

* ListModel>>addAll:
* ListModel>>removeAll
* ListModel>>removeAll:
* Collection>>removeAll:
* Upgrades to Amber 0.14.3
* Removed development dependency on Helios
* Upgrades amber-attic to 0.1.3
* Makes sure all works after amber-dev 0.3.1
* Upgrades to Amber 0.14.3
* Upgrades amber-attic to 0.1.3
* Upgrades Helios 0.3.4
* Adds changelog.md

January 17, 2015 - Release 0.1.17
===================================

* Deprecation of #showThen:
* Controller>>show now answers always a deferred, so it allows: `controller show done: [ :c | ... ]; fail: [ :c | ... ]`.
* Removes packages that are not currently supported (MVC-Iterables and MVC-Routeables).
* Removes example 5 page (which used unsupported code).
* Removes duplicate license file


January 15, 2015 - Release 0.1.16
===================================

* Fixes typo #createControllers

January 15, 2015 - Release 0.1.15
===================================

* Using jQuery to unobserve window observeHash.

January 15, 2015 - Release 0.1.14
===================================

* Not using globals anymore. Rivets is now fetched using requirejs.

January 14, 2015 - Release 0.1.13
===================================

* Model as subclass of MaplessModel

January 14, 2015 - Release 0.1.12
===================================

* Introducing Controller>>createControlers for creating children controllers after the view is set.
* Bower now will install rlite form the bower repository (instead of directly from github)

January 13, 2015 - Release 0.1.11
===================================

* Fixes all the examples except Example5 which is work in progress.
* Adds MiniMapless as dependency. Mapless objects are a good fit to allow you to have Amber objects as models of your application while the Mapless data plain JavasScript object is binded by RivetJS so you win all its features. It's the current State of the Art to currently get the best of both worlds.

January 13, 2015 - Release 0.1.10
===================================

* Adds the App example application
* upgrades to Amber 0.14.2
* upgrades DOMEvents to 0.1.5 which introduces the Pharo API for events


January 11, 2015 - Release 0.1.5
===================================

* Adds deferred instVar to Controller that resolves once the controller sets its view. Probably instantly for those controllers using the HTMLCanvas and reallydeferred for those loading the view from templates.It initializes lazily to preserve efficienfy while interested users of the controller's can reacting after the view is set.

January 8, 2015 - Release 0.1.4
===================================

* First release usable as alpha.

Previous history is in the git commits.

To give some historical context, before having its own repository and being an Amber library, this code was in Flow packages.