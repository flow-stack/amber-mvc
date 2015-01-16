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