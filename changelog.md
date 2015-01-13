Today - Unreleased
===================================

* nothing at the moment


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