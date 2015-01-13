define("amber-mvc/MVC-Core", ["amber/boot", "amber_core/Web", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections", "amber_core/Kernel-Infrastructure"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('MVC-Core');
$core.packages["MVC-Core"].transport = {"type":"amd","amdNamespace":"amber-mvc"};

$core.addClass('Controller', $globals.Widget, ['controllers', 'model', 'view', 'parent', 'parentElement', 'deferred'], 'MVC-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Controller.comment="## This is an abstraction. \x0a\x0a*Concrete subclasses* are controllers with some degree of specialization. Here we concentrate in the commons and foundatinos for all of them.\x0a\x0aA typical controller might have:\x0a\x0a1. a model\x0a2. some (sub)controllers\x0a3. minimal common behavior";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "controllerAt:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllers())._at_ifAbsent_(aKey,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("Controller not found: ".__comma($recv(aKey)._asString()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAt:",{aKey:aKey},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "controllerAt: aKey \x0a\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifAbsent:[ self error: 'Controller not found: ', aKey asString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "controllers", "error:", ",", "asString"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAt:ifAbsent:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllers())._at_ifAbsent_(aKey,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAt:ifAbsent:",{aKey:aKey,aBlock:aBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "controllerAt: aKey ifAbsent: aBlock\x0a\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifAbsent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "controllers"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAt:ifAbsentPut:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllers())._at_ifAbsent_(aKey,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._controllerAt_put_(aKey,$recv(aBlock)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAt:ifAbsentPut:",{aKey:aKey,aBlock:aBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "controllerAt: aKey ifAbsentPut: aBlock\x0a\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifAbsent:[ self controllerAt: aKey put: aBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "controllers", "controllerAt:put:", "value"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAt:ifPresent:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllers())._at_ifPresent_ifAbsent_(aKey,aBlock,(function(){
return nil;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAt:ifPresent:",{aKey:aKey,aBlock:aBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "controllerAt: aKey ifPresent: aBlock\x0a\x09\x22Evaluates aBlock if this controller has a controller at aKey.\x0a\x09Silently do nothing otherwise.\x22\x0a\x09\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifPresent: aBlock \x0a\x09\x09ifAbsent: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:ifAbsent:", "controllers"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAt:ifPresent:ifAbsent:",
protocol: 'accessing',
fn: function (aKey,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllers())._at_ifPresent_ifAbsent_(aKey,aBlock,anotherBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAt:ifPresent:ifAbsent:",{aKey:aKey,aBlock:aBlock,anotherBlock:anotherBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock", "anotherBlock"],
source: "controllerAt: aKey ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Evaluates aBlock if this controller has a controller at aKey or\x0a\x09evaluates anotherBlock if it's absent.\x22\x0a\x09\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifPresent: aBlock\x0a\x09\x09ifAbsent: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:ifAbsent:", "controllers"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAt:put:",
protocol: 'accessing',
fn: function (aKey,aController){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllers())._at_put_(aKey,aController);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAt:put:",{aKey:aKey,aController:aController},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aController"],
source: "controllerAt: aKey put: aController\x0a\x0a\x09^ self controllers at: aKey put: aController",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "controllers"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAtView:",
protocol: 'accessing',
fn: function (aView){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._controllerAtView_ifAbsent_(aView,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("Controller not found for view: ".__comma($recv(aView)._asString()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAtView:",{aView:aView},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aView"],
source: "controllerAtView: aView \x0a\x0a\x09^ self controllerAtView: aView ifAbsent:[ \x0a\x09\x09self error: 'Controller not found for view: ', aView asString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["controllerAtView:ifAbsent:", "error:", ",", "asString"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAtView:ifAbsent:",
protocol: 'accessing',
fn: function (aView,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._controllers())._values())._detect_ifNone_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(e)._view()).__eq_eq(aView);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}),aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAtView:ifAbsent:",{aView:aView,aBlock:aBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aView", "aBlock"],
source: "controllerAtView: aView ifAbsent: aBlock\x0a\x0a\x09^ self controllers values\x0a\x09\x09detect: [ :e | e view == aView ]\x0a\x09\x09ifNone: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "values", "controllers", "==", "view"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllers",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@controllers"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeControllers();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllers",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "controllers\x0a\x09\x0a\x09^ controllers ifNil:[ self initializeControllers ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeControllers"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "deferred",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@deferred"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeDeferred();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deferred",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deferred\x0a\x0a\x09^ deferred ifNil: [ self initializeDeferred ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeDeferred"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "destroy",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._remove();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"destroy",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "destroy\x0a\x0a\x09self remove",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "hasDeferred",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@deferred"])._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasDeferred",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasDeferred\x0a\x09\x22Answers true if this controller has a deferred object.\x22\x0a\x09\x0a\x09^ deferred notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "hasModel",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@model"])._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasModel",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasModel\x0a\x09\x22Answers true if this controller has a model\x22\x0a\x09\x0a\x09^ model notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "hasView",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@view"])._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasView",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasView\x0a\x09\x22Answers true if this controller has a view\x22\x0a\x09\x0a\x09^ view notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "hide",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._view();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["view"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
$recv(self._view())._hide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hide",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hide \x0a\x0a\x09self view ifNil: [ ^ self ].\x0a\x09\x0a\x09self view hide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "view", "hide"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "hideAll",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._controllers())._values())._do_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._hide();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hideAll",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hideAll\x0a\x0a\x09self controllers values do: [ :e | e hide ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "values", "controllers", "hide"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "ifAbsentAt:put:",
protocol: 'actions',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._controllerAt_ifAbsentPut_(aKey,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifAbsentAt:put:",{aKey:aKey,aBlock:aBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "ifAbsentAt: aKey put: aBlock\x0a\x09\x22Answers the controller already present at aKey or,\x0a\x09if absent, puts the one expected to be created during aBlock and returns it.\x22\x0a\x09\x0a\x09^ self controllerAt: aKey ifAbsentPut: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["controllerAt:ifAbsentPut:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "ifAbsentAt:put:andDo:",
protocol: 'actions',
fn: function (aKey,aBlock,aPostAddingBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._controllerAt_ifAbsent_(aKey,(function(){
var newController;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
newController=$recv(aBlock)._value();
newController;
self._controllerAt_put_(aKey,newController);
$recv(aPostAddingBlock)._value_(newController);
return newController;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({newController:newController},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifAbsentAt:put:andDo:",{aKey:aKey,aBlock:aBlock,aPostAddingBlock:aPostAddingBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock", "aPostAddingBlock"],
source: "ifAbsentAt: aKey put: aBlock andDo: aPostAddingBlock\x0a\x09\x22Answers the controller already present at aKey or,\x0a\x09if absent, puts the one expected to be created during aBlock,\x0a\x09evaluates aPostAddingBlock using it and finally returns it\x22\x0a\x09\x0a\x09^ self \x0a\x09\x09controllerAt: aKey \x0a\x09\x09ifAbsent: [ | newController |\x0a\x09\x09\x09newController := aBlock value.\x0a\x09\x09\x09self controllerAt: aKey put: newController.\x0a\x09\x09\x09aPostAddingBlock value: newController.\x0a\x09\x09\x09newController ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["controllerAt:ifAbsent:", "value", "controllerAt:put:", "value:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "initializeControllers",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@controllers"]=$recv($Dictionary())._new();
$1=self["@controllers"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeControllers",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeControllers\x0a\x09\x0a\x09^ controllers := Dictionary new",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "initializeDeferred",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@deferred"]=$recv($recv(jQuery)._Deferred())._value();
$1=self["@deferred"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeDeferred",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeDeferred\x0a\x09\x22Sets the promise used by this controller.\x0a\x09http://api.jquery.com/category/deferred-object/\x22\x0a\x09\x0a\x09^ deferred := jQuery Deferred value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "Deferred"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09\x0a\x09^ model",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("onBeforeModel");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["triggerEvent:"]=1;
//>>excludeEnd("ctx");
self["@model"]=aModel;
self._triggerEvent_("onAfterModel");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "model: aModel\x0a\x0a\x09self triggerEvent: #onBeforeModel.\x0a\x09model := aModel.\x0a\x09self triggerEvent: #onAfterModel.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "parent",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@parent"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parent\x0a\x09\x22Answers the parent controller of this controller.\x22\x0a\x0a\x09^ parent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "parent:",
protocol: 'accessing',
fn: function (aParentControllerOrNil){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("onBeforeParent");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["triggerEvent:"]=1;
//>>excludeEnd("ctx");
self["@parent"]=aParentControllerOrNil;
self._triggerEvent_("onAfterParent");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parent:",{aParentControllerOrNil:aParentControllerOrNil},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aParentControllerOrNil"],
source: "parent: aParentControllerOrNil\x0a\x0a\x09self triggerEvent: #onBeforeParent.\x0a\x09parent := aParentControllerOrNil.\x0a\x09self triggerEvent: #onAfterParent.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "parentElement",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@parentElement"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parentElement\x0a\x0a\x09^ parentElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "parentElement:",
protocol: 'accessing',
fn: function (aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("onBeforeParentElement");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["triggerEvent:"]=1;
//>>excludeEnd("ctx");
self["@parentElement"]=aHtmlElement;
self._triggerEvent_("onAfterParentElement");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parentElement:",{aHtmlElement:aHtmlElement},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHtmlElement"],
source: "parentElement: aHtmlElement\x0a\x0a\x09self triggerEvent: #onBeforeParentElement.\x0a\x09parentElement := aHtmlElement.\x0a\x09self triggerEvent: #onAfterParentElement.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._remove();
$1=self._render();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x0a\x09self remove; render",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "render"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("onBeforeRemove");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["triggerEvent:"]=1;
//>>excludeEnd("ctx");
self._silentRemove();
self._triggerEvent_("onAfterRemove");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09\x0a\x09self triggerEvent: #onBeforeRemove.\x0a\x0a\x09self silentRemove.\x0a\x09\x0a\x09self triggerEvent: #onAfterRemove.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:", "silentRemove"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "removeControllerAt:",
protocol: 'actions',
fn: function (aKey){
var self=this;
var controller;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
controller=self._controllerAt_ifAbsent_(aKey,(function(){
return nil;

}));
$1=controller;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(controller)._remove();
};
$recv(self._controllers())._removeKey_ifAbsent_(aKey,(function(){
return nil;

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeControllerAt:",{aKey:aKey,controller:controller},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "removeControllerAt: aKey \x0a\x0a\x09| controller |\x0a\x09\x0a\x09controller := self controllerAt: aKey ifAbsent:[ nil ].\x0a\x09\x0a\x09controller ifNotNil:[\x0a\x09\x09controller remove ].\x0a\x09\x09\x0a\x09self controllers removeKey: aKey ifAbsent: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["controllerAt:ifAbsent:", "ifNotNil:", "remove", "removeKey:ifAbsent:", "controllers"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "render",
protocol: 'actions',
fn: function (){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("onBeforeRender");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["triggerEvent:"]=1;
//>>excludeEnd("ctx");
self._renderOn_($recv($HTMLCanvas())._onJQuery_(self._parentElement()));
self._triggerEvent_("onAfterRender");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"render",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "render\x0a\x09\x0a\x09self triggerEvent: #onBeforeRender.\x0a\x09self renderOn: (HTMLCanvas onJQuery: self parentElement).\x0a\x09self triggerEvent: #onAfterRender.",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:", "renderOn:", "onJQuery:", "parentElement"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'actions',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._silentRenderOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09self silentRenderOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["silentRenderOn:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._hasView();
if(!$core.assert($1)){
$2=self._render();
return $2;
};
$recv(self._view())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x0a\x09self hasView ifFalse: [ ^ self render ].\x0a\x09\x0a\x09self view show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "hasView", "render", "show", "view"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "showAll",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._controllers())._values())._do_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showAll",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showAll\x0a\x0a\x09self controllers values do: [ :e | e show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "values", "controllers", "show"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "showThen:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._deferred())._done_(aBlock);
self._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showThen:",{aBlock:aBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "showThen: aBlock\x0a\x09\x22Shows this controller and get aBlock executed after its view is set.\x22\x0a\x09\x0a\x09self deferred done: aBlock.\x0a\x09\x0a\x09self show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["done:", "deferred", "show"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "silentRefresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._silentRemove();
$1=self._silentRender();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentRefresh",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "silentRefresh\x0a\x0a\x09self silentRemove; silentRender",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["silentRemove", "silentRender"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "silentRemove",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@view"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var exView;
exView=self["@view"];
exView;
$recv(exView)._off();
self["@view"]=nil;
self["@view"];
$recv(exView)._remove();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentRemove",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "silentRemove\x0a\x09\x0a\x09view ifNotNil:[ | exView |\x0a\x09\x09exView := view.\x0a\x09\x09exView off.\x0a\x09\x09view := nil.\x0a\x09\x09exView remove ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "off", "remove"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "silentRender",
protocol: 'actions',
fn: function (){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._silentRenderOn_($recv($HTMLCanvas())._onJQuery_(self._parentElement()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentRender",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "silentRender\x0a\x09\x0a\x09self silentRenderOn: (HTMLCanvas onJQuery: self parentElement).",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["silentRenderOn:", "onJQuery:", "parentElement"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "silentRenderOn:",
protocol: 'actions',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._silentView_($recv($recv(html)._h1_($recv(self._class())._name()))._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentRenderOn:",{html:html},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "silentRenderOn: html\x0a\x09\x22This is the actual render implementation in a silly default only useful to development \x0a\x09It provides quick feedback ans sets a view for easy visual identification.\x0a\x09Subclasses implement the interesting real renders.\x0a\x09TemplateController or BindingController are good examples of this.\x22\x0a\x09\x0a\x09self silentView: (html h1: self class name) asJQuery.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["silentView:", "asJQuery", "h1:", "name", "class"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "silentView:",
protocol: 'accessing',
fn: function (aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@view"]=aHtmlElement;
$1=self._hasDeferred();
if($core.assert($1)){
$recv(self["@deferred"])._resolve_(self);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentView:",{aHtmlElement:aHtmlElement},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHtmlElement"],
source: "silentView: aHtmlElement\x0a\x09\x22Sets the instance of the element considered the view of this controller.\x22\x0a\x09view := aHtmlElement.\x0a\x09\x0a\x09self hasDeferred ifTrue: [\x0a\x09\x09deferred resolve: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "hasDeferred", "resolve:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "view",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@view"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "view\x0a\x09\x22Answers the DOM element who is the root of this controller's view\x22\x0a\x09^ view",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "view:",
protocol: 'accessing',
fn: function (aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("onBeforeView");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["triggerEvent:"]=1;
//>>excludeEnd("ctx");
self._silentView_(aHtmlElement);
self._triggerEvent_("onAfterView");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"view:",{aHtmlElement:aHtmlElement},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHtmlElement"],
source: "view: aHtmlElement\x0a\x0a\x09self triggerEvent: #onBeforeView.\x0a\x09self silentView: aHtmlElement.\x0a\x09self triggerEvent: #onAfterView.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:", "silentView:"]
}),
$globals.Controller);


$core.addMethod(
$core.method({
selector: "defaultHtmlElement",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="#content"._asJQuery();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultHtmlElement",{},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultHtmlElement\x0a\x0a\x09^ '#content' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery"]
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "for:",
protocol: 'actions',
fn: function (aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._for_on_appendingTo_(aModel,nil,self._defaultHtmlElement());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:",{aModel:aModel},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "for: aModel \x0a\x09\x22Answers a new instance of this controller dedicated to aModel,\x0a\x09with no parent and meant to be appended to the default html element,\x0a\x09expected to be <div id=#content></div>.\x22\x0a\x09\x0a\x09^ self for: aModel on: nil appendingTo: self defaultHtmlElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["for:on:appendingTo:", "defaultHtmlElement"]
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "for:on:",
protocol: 'actions',
fn: function (aModel,aParentControllerOrNil){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._for_on_appendingTo_(aModel,aParentControllerOrNil,self._defaultHtmlElement());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:on:",{aModel:aModel,aParentControllerOrNil:aParentControllerOrNil},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel", "aParentControllerOrNil"],
source: "for: aModel on: aParentControllerOrNil\x0a\x09\x22Answers a new instance of this controller dedicated to aModel,\x0a\x09child of aParentControllerOrNil and meant to be appended to \x0a\x09the default html element, expected to be <div id=#content></div>.\x22\x0a\x09\x0a\x09^ self for: aModel on: aParentControllerOrNil appendingTo: self defaultHtmlElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["for:on:appendingTo:", "defaultHtmlElement"]
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "for:on:appendingTo:",
protocol: 'actions',
fn: function (aModel,aParentControllerOrNil,aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._model_(aModel);
$recv($2)._parent_(aParentControllerOrNil);
$recv($2)._parentElement_(aHtmlElement);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:on:appendingTo:",{aModel:aModel,aParentControllerOrNil:aParentControllerOrNil,aHtmlElement:aHtmlElement},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel", "aParentControllerOrNil", "aHtmlElement"],
source: "for: aModel on: aParentControllerOrNil appendingTo: aHtmlElement\x0a\x09\x22Answers a new instance of this controller dedicated to aModel,\x0a\x09child of aParentControllerOrNil and meant to be appended to aHtmlElement.\x22\x0a\x0a\x09^ self new\x0a\x09\x09model: aModel;\x0a\x09\x09parent: aParentControllerOrNil;\x0a\x09\x09parentElement: aHtmlElement;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model:", "new", "parent:", "parentElement:", "yourself"]
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "for:on:view:",
protocol: 'actions',
fn: function (aModel,aParentControllerOrNil,aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._model_(aModel);
$recv($2)._parent_(aParentControllerOrNil);
$recv($2)._view_(aHtmlElement);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:on:view:",{aModel:aModel,aParentControllerOrNil:aParentControllerOrNil,aHtmlElement:aHtmlElement},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel", "aParentControllerOrNil", "aHtmlElement"],
source: "for: aModel on: aParentControllerOrNil view: aHtmlElement\x0a\x09\x22Answers a new instance of this controller dedicated to aModel,\x0a\x09child of aParentControllerOrNil and with the already created aHtmlElement as its view.\x22\x0a\x0a\x09^ self new\x0a\x09\x09model: aModel;\x0a\x09\x09parent: aParentControllerOrNil;\x0a\x09\x09view: aHtmlElement;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model:", "new", "parent:", "view:", "yourself"]
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "keyword",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$6,$5,$2,$1;
$4=self._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._reversed();
$6="Controller"._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__plus((1));
$2=$recv($3)._copyFrom_to_($5,$recv(self._name())._size());
$1=$recv($2)._reversed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reversed"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyword",{},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keyword\x0a\x09\x22Answers the name of the class in lowercase without \x0a\x09the 'Controller' sufix so it can, for example, be used for friendly URI.\x0a\x09Subclasses are expected to follow the naming convention *Controller like\x0a\x09ThisNameController, ThatOtherNameController, AnyNameController, etc\x22\x0a\x0a\x09^ (self name reversed copyFrom: 'Controller' size + 1 to: self name size) reversed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reversed", "copyFrom:to:", "name", "+", "size"]
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "on:appendingTo:",
protocol: 'actions',
fn: function (aParentControllerOrNil,aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._parent_(aParentControllerOrNil);
$recv($2)._parentElement_(aHtmlElement);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:appendingTo:",{aParentControllerOrNil:aParentControllerOrNil,aHtmlElement:aHtmlElement},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aParentControllerOrNil", "aHtmlElement"],
source: "on: aParentControllerOrNil appendingTo: aHtmlElement\x0a\x09\x22Answers a new instance of this controller, child of aParentControllerOrNil \x0a\x09and meant to be appended to aHtmlElement.\x0a\x09Using this contructor will make the model to stay nil.\x22\x0a\x0a\x09^ self new\x0a\x09\x09parent: aParentControllerOrNil;\x0a\x09\x09parentElement: aHtmlElement;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent:", "new", "parentElement:", "yourself"]
}),
$globals.Controller.klass);


$core.addClass('ListController', $globals.Controller, ['getItemsBlock', 'itemControllerClass', 'newItemControllerBlock', 'listView'], 'MVC-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ListController.comment="## ListController\x0a\x0aListControllers know how to deal with lists of things. It needs to know how you want to create subcontrollers for its items and it needs to know how to get those items. It will also allow you to customize the subcontrollers with a callback when they are instantiated.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "getItems",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._getItemsBlock())._value_(self["@model"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getItems",{},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getItems\x0a\x09\x22Answers the items using the custom getItemsBlock on its model\x22\x0a\x09\x0a\x09^ self getItemsBlock value: model",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "getItemsBlock"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "getItemsBlock",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@getItemsBlock"];
if(($receiver = $2) == null || $receiver.isNil){
self["@getItemsBlock"]=(function(listModel){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(listModel)._list();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({listModel:listModel},$ctx1,2)});
//>>excludeEnd("ctx");
});
$1=self["@getItemsBlock"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getItemsBlock",{},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getItemsBlock\x0a\x0a\x09^ getItemsBlock ifNil: [ getItemsBlock := [ :listModel | listModel list ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "list"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "getItemsBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@getItemsBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "getItemsBlock: aBlock\x0a\x0a\x09getItemsBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ListController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterModel",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._observeList();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self when: #onAfterModel do: [ self observeList ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "observeList"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "itemControllerClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@itemControllerClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "itemControllerClass\x0a\x0a\x09^ itemControllerClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "itemControllerClass:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@itemControllerClass"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "itemControllerClass: aBlock\x0a\x0a\x09itemControllerClass := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "listView",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@listView"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listView\x0a\x09\x22Answers the html element from where the item controllers are going to be appended.\x0a\x09Usually a <ul>\x22\x0a\x09^ listView",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "listView:",
protocol: 'accessing',
fn: function (aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("onBeforeListView");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["triggerEvent:"]=1;
//>>excludeEnd("ctx");
self["@listView"]=aHtmlElement;
self._triggerEvent_("onAfterListView");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"listView:",{aHtmlElement:aHtmlElement},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHtmlElement"],
source: "listView: aHtmlElement\x0a\x0a\x09self triggerEvent: #onBeforeListView.\x0a\x09listView := aHtmlElement.\x0a\x09self triggerEvent: #onAfterListView.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "newItemControllerBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@newItemControllerBlock"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newItemControllerBlock\x0a\x0a\x09^ newItemControllerBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "newItemControllerBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@newItemControllerBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "newItemControllerBlock: aBlock\x0a\x0a\x09newItemControllerBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "newItemControllerFor:",
protocol: 'actions',
fn: function (anItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@itemControllerClass"])._isNil();
if($core.assert($2)){
$1=$recv(self._newItemControllerBlock())._value_(anItem);
} else {
$1=$recv(self["@itemControllerClass"])._for_on_appendingTo_(anItem,self,self._view());
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newItemControllerFor:",{anItem:anItem},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "newItemControllerFor: anItem\x0a\x0a\x09^ itemControllerClass isNil\x0a\x09\x09ifFalse:[ itemControllerClass \x0a\x09\x09\x09\x09\x09for: anItem \x0a\x09\x09\x09\x09\x09on: self \x0a\x09\x09\x09\x09\x09appendingTo: self view ] \x0a\x09\x09ifTrue:[ self newItemControllerBlock value: anItem ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "isNil", "for:on:appendingTo:", "view", "value:", "newItemControllerBlock"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "observeList",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._model())._when_do_("changed",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._refresh();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeList",{},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeList\x0a\x09\x22Observe the model for changes and react to them with a refresh.\x22\x0a\x0a\x09self model when: #changed do: [ self refresh ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["when:do:", "model", "refresh"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "parentElement:",
protocol: 'accessing',
fn: function (anHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ListController.superclass.fn.prototype._parentElement_.apply($recv(self), [anHtmlElement]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._view_(anHtmlElement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parentElement:",{anHtmlElement:anHtmlElement},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anHtmlElement"],
source: "parentElement: anHtmlElement\x0a\x09\x22Sets the parent elment for the list.\x0a\x09It can be anything but, in the case of lists, the parent element usually is a <ul>\x0a\x09The 'normal' thing is to treat it like an <ul> full of <li> children.\x22\x0a\x09super parentElement: anHtmlElement.\x0a\x09self view: anHtmlElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parentElement:", "view:"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
var items;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$receiver;
$1=$recv(self._controllers())._keys();
$2=self._getItems();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getItems"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_do_($2,(function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=self._getItems();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["getItems"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each).__eq_eq(e);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
if(!$core.assert($3)){
return self._removeControllerAt_(e);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._getItems())._do_((function(e){
var added;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._controllerAt_ifAbsentPut_(e,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
added=self._newItemControllerFor_(e);
return added;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
$5=added;
if(($receiver = $5) == null || $receiver.isNil){
return $5;
} else {
return $recv(added)._render();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,added:added},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{items:items},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09\x22Makes sure all the items in the model have its own controller.\x0a\x09Nothing less and nothing more. So it will add lazily \x0a\x09the missing controllers and remove those who's model isn't present.\x22\x0a\x09\x0a\x09| items |\x0a\x09\x0a\x09\x22Remove absences\x22\x0a\x09self controllers keys \x0a\x09\x09with: self getItems \x0a\x09\x09do:[ :e | (self getItems anySatisfy:[ :each | each == e]) ifFalse:[\x0a\x09\x09\x09\x09\x09self removeControllerAt: e ] ].\x0a\x09\x0a\x09\x22Add novelties\x22\x0a\x09self getItems do:[ :e | | added |\x0a\x09\x09self controllerAt: e ifAbsentPut:[ \x0a\x09\x09\x09added := self newItemControllerFor: e ].\x0a\x09\x09added ifNotNil:[ \x0a\x09\x09\x09added render ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:do:", "keys", "controllers", "getItems", "ifFalse:", "anySatisfy:", "==", "removeControllerAt:", "do:", "controllerAt:ifAbsentPut:", "newItemControllerFor:", "ifNotNil:", "render"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._refresh();
$recv(self._view())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x0a\x09self refresh.\x0a\x09\x0a\x09self view show.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh", "show", "view"]
}),
$globals.ListController);



$core.addClass('TemplateController', $globals.Controller, ['templateUri'], 'MVC-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TemplateController.comment="## TemplateController is an abstraction\x0aThe concrete subclasses of TemplateController follow the convention of loading html from the server.\x0aThis convention uses the name of the controller without the \x22Controller\x22 suffix as the name of the template (in lowercase) to be found as a html file in the views/ directory.\x0a\x0aA typical interesting moment for this controllers is when they are actually finished loading and with the view set. You can observe the #onAfterView event to make it do things after it has the view loaded and set.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "flush",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
window.require.undef(self._templateUri());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flush",{},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flush\x0a\x09\x22Tells require to flush the potentially cached template (or do nothing if not loaded yet)\x22\x0a\x09<window.require.undef(self._templateUri())>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "initializeTemplateUri",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._viewPath();
$2=$recv($3).__comma($recv(self._class())._keyword());
self["@templateUri"]=$recv($2).__comma(".html");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=self["@templateUri"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeTemplateUri",{},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeTemplateUri\x0a\x09\x22Initilizes the templateUri on the convention that uses the first part of the controller name.\x22\x0a\x09^ templateUri := self class viewPath, self class keyword,'.html'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "viewPath", "class", "keyword"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(require)._value_value_($recv($Array())._with_(self._templateUri()),(function(template){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._setTemplate_(template);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({template:template},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09\x0a\x09require \x0a\x09\x09value: (Array with: self templateUri)\x0a\x09\x09value: [ :template | self setTemplate: template ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["value:value:", "with:", "templateUri", "setTemplate:"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "setTemplate:",
protocol: 'actions',
fn: function (htmlString){
var self=this;
var appended;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
appended=$recv(self._parentElement())._append_(htmlString);
self._view_($recv($recv(appended)._children())._last());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setTemplate:",{htmlString:htmlString,appended:appended},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["htmlString"],
source: "setTemplate: htmlString\x0a\x09\x22Receives the template's htmlString after requirejs \x0a\x09have received it from the server (or cache).\x22\x0a\x0a\x09| appended |\x0a\x0a\x09\x22Make it to be the contents of this controllers parent element\x22\x0a\x09appended := self parentElement append: htmlString.\x0a\x09\x0a\x09\x22And follow the convention that all templates are wrapped\x0a\x09in one element which is the view of this controller.\x22\x0a\x09self view: appended children last.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "parentElement", "view:", "last", "children"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "silentRenderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(require)._value_value_($recv($Array())._with_(self._templateUri()),(function(template){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._silentSetTemplate_(template);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({template:template},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentRenderOn:",{html:html},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "silentRenderOn: html\x0a\x0a\x09require \x0a\x09\x09value: (Array with: self templateUri)\x0a\x09\x09value: [ :template | self silentSetTemplate: template ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["value:value:", "with:", "templateUri", "silentSetTemplate:"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "silentSetTemplate:",
protocol: 'actions',
fn: function (htmlString){
var self=this;
var appended;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
appended=$recv(self._parentElement())._append_(htmlString);
self._silentView_($recv($recv(appended)._children())._last());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentSetTemplate:",{htmlString:htmlString,appended:appended},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["htmlString"],
source: "silentSetTemplate: htmlString\x0a\x09\x22Receives the template's htmlString after requirejs \x0a\x09have received it from the server (or cache).\x22\x0a\x0a\x09| appended |\x0a\x0a\x09\x22Make it to be the contents of this controllers parent element\x22\x0a\x09appended := self parentElement append: htmlString.\x0a\x09\x0a\x09\x22And follow the convention that all templates are wrapped\x0a\x09in one element which is the view of this controller.\x22\x0a\x09self silentView: appended children last.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "parentElement", "silentView:", "last", "children"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "templateName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self._class())._viewPath()).__comma(aString)).__comma(".html");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._templateUri_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"templateName:",{aString:aString},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "templateName: aString\x0a\x0a\x09self templateUri: (self class viewPath, aString,'.html')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["templateUri:", ",", "viewPath", "class"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "templateUri",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@templateUri"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeTemplateUri();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"templateUri",{},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "templateUri\x0a\x0a\x09^ templateUri ifNil:[ self initializeTemplateUri ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeTemplateUri"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "templateUri:",
protocol: 'accessing',
fn: function (anUri){
var self=this;
self["@templateUri"]=anUri;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUri"],
source: "templateUri: anUri\x0a\x0a\x09templateUri := anUri",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TemplateController);


$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
function $TemplateController(){return $globals.TemplateController||(typeof TemplateController=="undefined"?nil:TemplateController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self.__eq($TemplateController());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},$globals.TemplateController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09\x22Answers true if the receiver is abstract.\x22\x0a\x09\x0a\x09^ self = TemplateController",
referencedClasses: ["TemplateController"],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.TemplateController.klass);

$core.addMethod(
$core.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._isAbstract())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(anURI)._notEmpty())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(anURI).__eq(self._keyword());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anURI:anURI},$globals.TemplateController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "isValidFor: anURI\x0a\x09\x22Answers true if this controller is the right route for anURI\x22\x0a\x09\x0a\x09^ self isAbstract not and:[\x0a\x09anURI notEmpty and:[\x0a\x09anURI = self keyword ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "not", "isAbstract", "notEmpty", "=", "keyword"]
}),
$globals.TemplateController.klass);

$core.addMethod(
$core.method({
selector: "viewPath",
protocol: 'accessing',
fn: function (){
var self=this;
return "text!views/";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "viewPath\x0a\x09\x22Returns the path where the template of the view should be found\x22\x0a\x09\x0a\x09^ 'text!views/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TemplateController.klass);


$core.addClass('BindingController', $globals.TemplateController, [], 'MVC-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BindingController.comment="## BindingController is an abstraction\x0aThe concrete subclasses of BindingController are users of the two-way data binding mechanism loaded by flow.\x0a\x0aNote that BindingController is a subclass of TemplateController so all subclasses of it follow the convention of loading a html template from the server using the keyword of the controller as the name of the template to be found at views/";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asBindArgument",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$globals.HashedCollection._newFromPairs_(["model",self._getBindableModel(),"controller",self]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asBindArgument",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asBindArgument\x0a\x09\x22Answers the model and this controller as rivets like it for binding.\x22\x0a\x0a\x09^ #{\x0a\x09'model' -> self getBindableModel.\x0a\x09'controller' -> self\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getBindableModel"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "bind",
protocol: 'actions',
fn: function (){
var self=this;
function $RivetsJS(){return $globals.RivetsJS||(typeof RivetsJS=="undefined"?nil:RivetsJS)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($RivetsJS())._rv())._bind_to_(self._view(),self._asBindArgument());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bind",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bind\x0a\x09\x22Tells rivets.js to bind \x0a\x09the model of this controller to its view.\x22\x0a\x09\x0a\x09RivetsJS rv\x0a\x09\x09bind: self view \x0a\x09\x09to: self asBindArgument",
referencedClasses: ["RivetsJS"],
//>>excludeEnd("ide");
messageSends: ["bind:to:", "rv", "view", "asBindArgument"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "configure",
protocol: 'actions',
fn: function (){
var self=this;
var conf;
function $RivetsJS(){return $globals.RivetsJS||(typeof RivetsJS=="undefined"?nil:RivetsJS)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
conf=self._getConfiguration();
$recv($recv($RivetsJS())._rv())._configure_(conf);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configure",{conf:conf},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configure\x0a\x09\x22Sets some configurations for rivets\x22\x0a\x09| conf |\x0a\x09\x0a\x09conf := self getConfiguration.\x0a\x09\x0a\x09RivetsJS rv configure: conf",
referencedClasses: ["RivetsJS"],
//>>excludeEnd("ide");
messageSends: ["getConfiguration", "configure:", "rv"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "configureAndBind",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self._hasModel())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["not"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._hasView())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return self;
};
self._configure();
self._bind();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configureAndBind",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configureAndBind\x0a\x0a\x09(self hasModel not or: [\x0a\x09self hasView not ]) ifTrue: [ ^ self ].\x0a\x0a\x09self configure.\x0a\x09\x0a\x09self bind.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "or:", "not", "hasModel", "hasView", "configure", "bind"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "getBindableModel",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@model"])._data();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getBindableModel",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getBindableModel\x0a\x09\x22Returns the model in a way that is appropiate for binding (usable by rivets).\x0a\x09By default BindingController assumes you are using a plain javascript object as model\x0a\x09but subclasses might differ if they please to do so.\x22\x0a\x0a\x09\x22We are assuming here that you are working with aMapless as model so you\x0a\x09can use regular Amber objects as models in your application.\x0a\x09Mapless are implemented using a plain JavaScript object at its core so \x0a\x09you'll have a single source of truth for your models and enjoy the \x0a\x09two-way data binding an other RivetJS features simultaneously.\x22\x0a\x09^ model data",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["data"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "getConfiguration",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$globals.HashedCollection._newFromPairs_(["handler",self._getHandler()]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getConfiguration",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getConfiguration\x0a\x0a\x09^ #{ #handler -> self getHandler }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getHandler"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "getHandler",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return function( target, event, binding ){
		this.call(binding.model);
	};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getHandler",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getHandler\x0a\x09\x22Answers the custom handler of flow controllers for rivets.\x0a\x09We need it to be call on binding.model otherwhise \x0a\x09rivets would send the html element (target of the event)\x0a\x09screwing the self instance of this controller\x22\x0a\x0a\x09<return function( target, event, binding ){\x0a\x09\x09this.call(binding.model);\x0a\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.BindingController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._configureAndBind();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["when:do:"]=1;
//>>excludeEnd("ctx");
self._when_do_("onAfterModel",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._rebind();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["when:do:"]=2;
//>>excludeEnd("ctx");
self._when_do_("onBeforeRemove",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._unbind();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$1=self._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView do: [ self configureAndBind ];\x0a\x09\x09when: #onAfterModel do: [ self rebind ];\x0a\x09\x09when: #onBeforeRemove do: [ self unbind ];\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "configureAndBind", "rebind", "unbind", "yourself"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "onAfterBound:",
protocol: 'reactions',
fn: function (aRivetsBinding){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRivetsBinding"],
source: "onAfterBound: aRivetsBinding\x0a\x09\x22Rivets has created a Binding instance (aRivetsBinding) with a view and the model and all its parts\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "onAfterUnbound:",
protocol: 'reactions',
fn: function (aRivetsBinding){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRivetsBinding"],
source: "onAfterUnbound: aRivetsBinding\x0a\x09\x22Rivets has unbound aRivetsBinding\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "rebind",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._unbind();
$1=self._configureAndBind();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rebind",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rebind\x0a\x0a\x09self unbind; configureAndBind",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unbind", "configureAndBind"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "silentRefresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._unbind();
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.BindingController.superclass.fn.prototype._silentRefresh.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentRefresh",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "silentRefresh\x0a\x0a\x09self unbind.\x0a\x09\x0a\x09super silentRefresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unbind", "silentRefresh"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "unbind",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@view"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@view"])._unbind();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unbind",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unbind\x0a\x09\x22Tells rivets.js to unbind the view.\x22\x0a\x09\x0a\x09view ifNotNil:[ view unbind ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "unbind"]
}),
$globals.BindingController);


$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
function $BindingController(){return $globals.BindingController||(typeof BindingController=="undefined"?nil:BindingController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self.__eq($BindingController());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},$globals.BindingController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09\x22Answers true if the receiver is abstract.\x22\x0a\x09\x0a\x09^ self = BindingController",
referencedClasses: ["BindingController"],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.BindingController.klass);


$core.addClass('ModalController', $globals.BindingController, [], 'MVC-Core');
$core.addMethod(
$core.method({
selector: "close",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._view())._modal_("hide");
self._triggerEvent_("modalClosed");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x0a\x09self view modal: 'hide'.\x0a\x09\x0a\x09self triggerEvent: #modalClosed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modal:", "view", "triggerEvent:"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "createModal",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@view"])._asJQuery())._modal_(self._modalOptions());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createModal",{},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createModal\x0a\x09\x22Creates the bootstrap modal on the view of this controller.\x22\x0a\x0a\x09view asJQuery modal: self modalOptions",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modal:", "asJQuery", "modalOptions"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ModalController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._createModal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self when: #onAfterView do: [ self createModal ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "createModal"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "message:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._basicAt_put_("message",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"message:",{aString:aString},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "message: aString\x0a\x0a\x09self basicAt: #message put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "modalOptions",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._defaultModalOptions();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modalOptions",{},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "modalOptions\x0a\x0a\x09^ self class defaultModalOptions",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["defaultModalOptions", "class"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._view())._modal_("show");
self._triggerEvent_("modalOpened");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x0a\x09self view modal: 'show'.\x0a\x09\x0a\x09self triggerEvent: #modalOpened",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modal:", "view", "triggerEvent:"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "title:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._basicAt_put_("title",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "title: aString\x0a\x0a\x09self basicAt: #title put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "toggle",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._view())._modal_("toggle");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggle",{},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggle\x0a\x0a\x09self view modal: 'toggle'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modal:", "view"]
}),
$globals.ModalController);


$core.addMethod(
$core.method({
selector: "defaultModalOptions",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["backdrop",true,"keyboard",true,"show",false]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModalOptions\x0a\x09\x22Answers the default options for the modal controllers.\x0a\x09For details on options check:\x0a\x09http://getbootstrap.com/javascript/\x22\x0a\x0a\x09^ #{\x0a\x09\x09#backdrop -> true.\x0a\x09\x09#keyboard -> true.\x0a\x09\x09#show -> false\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ModalController.klass);

$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
function $ModalController(){return $globals.ModalController||(typeof ModalController=="undefined"?nil:ModalController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self.__eq($ModalController());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},$globals.ModalController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09\x22Answers true if the receiver is abstract.\x22\x0a\x09\x0a\x09^ self = ModalController",
referencedClasses: ["ModalController"],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.ModalController.klass);


$core.addClass('AlertController', $globals.ModalController, [], 'MVC-Core');
$core.addMethod(
$core.method({
selector: "buttonLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._basicAt_put_("buttonLabel",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buttonLabel:",{aString:aString},$globals.AlertController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "buttonLabel: aString\x0a\x0a\x09self basicAt: #buttonLabel put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.AlertController);

$core.addMethod(
$core.method({
selector: "onConfirmBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._when_do_("confirm",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onConfirmBlock:",{aBlock:aBlock},$globals.AlertController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onConfirmBlock: aBlock\x0a\x0a\x09self when: #confirm do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["when:do:"]
}),
$globals.AlertController);



$core.addClass('ConfirmController', $globals.ModalController, [], 'MVC-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ConfirmController.comment="##ConfirmController\x0aThis controller asks the user for confirmation of a given action. It has a reject and accept customizable callback";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("accept");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept",{},$globals.ConfirmController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "accept\x0a\x0a\x09self triggerEvent: #accept",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:"]
}),
$globals.ConfirmController);

$core.addMethod(
$core.method({
selector: "acceptBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._when_do_("accept",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptBlock:",{aBlock:aBlock},$globals.ConfirmController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "acceptBlock: aBlock\x0a\x0a\x09self when: #accept do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["when:do:"]
}),
$globals.ConfirmController);

$core.addMethod(
$core.method({
selector: "acceptButtonLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._basicAt_put_("acceptButtonLabel",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptButtonLabel:",{aString:aString},$globals.ConfirmController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "acceptButtonLabel: aString\x0a\x0a\x09self basicAt: #acceptButtonLabel put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.ConfirmController);

$core.addMethod(
$core.method({
selector: "reject",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("reject");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reject",{},$globals.ConfirmController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reject\x0a\x0a\x09self triggerEvent: #reject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:"]
}),
$globals.ConfirmController);

$core.addMethod(
$core.method({
selector: "rejectBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._when_do_("reject",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rejectBlock:",{aBlock:aBlock},$globals.ConfirmController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "rejectBlock: aBlock\x0a\x0a\x09self when: #reject do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["when:do:"]
}),
$globals.ConfirmController);

$core.addMethod(
$core.method({
selector: "rejectButtonLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._basicAt_put_("rejectButtonLabel",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rejectButtonLabel:",{aString:aString},$globals.ConfirmController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "rejectButtonLabel: aString\x0a\x0a\x09self basicAt: #rejectButtonLabel put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.ConfirmController);



$core.addClass('Model', $globals.Object, [], 'MVC-Core');


$core.addClass('ListModel', $globals.Model, ['list'], 'MVC-Core');
$core.addMethod(
$core.method({
selector: "add:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._list())._add_(anObject);
self._changed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x0a\x09self list add: anObject.\x0a\x09\x0a\x09self changed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "list", "changed"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "first",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._list())._first();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"first",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "first\x0a\x0a\x09^ self list first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["first", "list"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "includes:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._list())._includes_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "includes: anObject\x0a\x0a\x09^ self list includes: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:", "list"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._list())._isEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x0a\x09^ self list isEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isEmpty", "list"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "last",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._list())._last();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"last",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "last\x0a\x0a\x09^ self list last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last", "list"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "list",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@list"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "list\x0a\x0a\x09^ list",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "list:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@list"]=aCollection;
self._changed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"list:",{aCollection:aCollection},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "list: aCollection\x0a\x0a\x09list := aCollection.\x0a\x09\x0a\x09self changed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["changed"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "notEmpty",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._list())._notEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notEmpty",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notEmpty\x0a\x0a\x09^ self list notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notEmpty", "list"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "remove:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._list())._remove_(anObject);
self._changed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "remove: anObject\x0a\x0a\x09self list remove: anObject.\x0a\x09\x0a\x09self changed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "list", "changed"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "remove:ifAbsent:",
protocol: 'actions',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._list())._remove_ifAbsent_(anObject,aBlock);
self._changed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x0a\x09self list remove: anObject ifAbsent: aBlock.\x0a\x09\x0a\x09self changed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "list", "changed"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "removeFirst",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._remove_(self._first());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeFirst",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeFirst\x0a\x0a\x09self remove: self first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "first"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "removeLast",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._remove_(self._last());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeLast",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeLast\x0a\x0a\x09self remove: self last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "last"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._list())._size();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x0a\x09^ self list size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "list"]
}),
$globals.ListModel);



$core.addClass('RivetsJS', $globals.Object, [], 'MVC-Core');

$core.addMethod(
$core.method({
selector: "addFormatter:at:",
protocol: 'actions',
fn: function (aBlock,aName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._rv())._formatters())._at_put_(aName,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addFormatter:at:",{aBlock:aBlock,aName:aName},$globals.RivetsJS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aName"],
source: "addFormatter: aBlock at: aName\x0a\x09\x22Tells rivets.js to add aBlock callback as a formatter under aName.\x22\x0a\x09\x0a\x09self rv formatters at: aName put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "formatters", "rv"]
}),
$globals.RivetsJS.klass);

$core.addMethod(
$core.method({
selector: "afterBoundCallback",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return function(el, val){
		this.model.controller._onAfterBound_(this);
		return this;
	};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"afterBoundCallback",{},$globals.RivetsJS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "afterBoundCallback\x0a\x09\x22Returns a callback used when rivets had bound an element\x22\x0a\x09\x0a\x09<return function(el, val){\x0a\x09\x09this.model.controller._onAfterBound_(this);\x0a\x09\x09return this;\x0a\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RivetsJS.klass);

$core.addMethod(
$core.method({
selector: "afterUnboundCallback",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return function(el, val){
		this.model.controller._onAfterUnbound_(this);
		return this;
	};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"afterUnboundCallback",{},$globals.RivetsJS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "afterUnboundCallback\x0a\x09\x22Returns a callback used when rivets had bound an element\x22\x0a\x09\x0a\x09<return function(el, val){\x0a\x09\x09this.model.controller._onAfterUnbound_(this);\x0a\x09\x09return this;\x0a\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RivetsJS.klass);

$core.addMethod(
$core.method({
selector: "binderCallback",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return function(){
		var args = Array.prototype.slice.call(arguments);
		var fn = args.shift();
		var whoBinds = args.shift();

		if (typeof fn === 'function') {
			return function() {
				fn.apply(self, args);
			}
		}
		
		return fn;
	};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"binderCallback",{},$globals.RivetsJS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "binderCallback\x0a\x09\x22Returns a callback to bind whoBinds.\x22\x0a\x09\x0a\x09<return function(){\x0a\x09\x09var args = Array.prototype.slice.call(arguments);\x0a\x09\x09var fn = args.shift();\x0a\x09\x09var whoBinds = args.shift();\x0a\x0a\x09\x09if (typeof fn === 'function') {\x0a\x09\x09\x09return function() {\x0a\x09\x09\x09\x09fn.apply(self, args);\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09return fn;\x0a\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RivetsJS.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._installUtils();
self._installBinders();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.RivetsJS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09self installUtils.\x0a\x09self installBinders.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["installUtils", "installBinders"]
}),
$globals.RivetsJS.klass);

$core.addMethod(
$core.method({
selector: "installBinders",
protocol: 'actions',
fn: function (){
var self=this;
var liveValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
liveValue=self._newLiveValue();
$1=liveValue;
$recv($1)._at_put_("bind",self._liveValueBindCallback());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("unbind",self._liveValueUnbindCallback());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$3=$recv(self._rv())._binders();
$recv($3)._at_put_("after-bound",$globals.HashedCollection._newFromPairs_(["bind",self._afterBoundCallback(),"priority",(4000)]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($3)._at_put_("after-unbound",$globals.HashedCollection._newFromPairs_(["unbind",self._afterUnboundCallback(),"priority",(4000)]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($3)._at_put_("live-value",liveValue);
$4=$recv($3)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installBinders",{liveValue:liveValue},$globals.RivetsJS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "installBinders\x0a\x09\x22Installs custom binders.\x22\x0a\x09\x0a\x09| liveValue |\x0a\x0a\x09liveValue := self newLiveValue.\x0a\x0a\x09liveValue \x0a\x09\x09at: #bind put: self liveValueBindCallback;\x0a\x09\x09at: #unbind put: self liveValueUnbindCallback;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09self rv binders \x0a\x09\x09at: 'after-bound' \x0a\x09\x09put: #{\x0a\x09\x09\x09\x09#bind -> self afterBoundCallback.\x0a\x09\x09\x09\x09#priority -> 4000 };\x0a\x09\x09at: 'after-unbound' \x0a\x09\x09put: #{\x0a\x09\x09\x09\x09#unbind -> self afterUnboundCallback.\x0a\x09\x09\x09\x09#priority -> 4000 };\x0a\x09\x09at: 'live-value' put: liveValue;\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newLiveValue", "at:put:", "liveValueBindCallback", "liveValueUnbindCallback", "yourself", "binders", "rv", "afterBoundCallback", "afterUnboundCallback"]
}),
$globals.RivetsJS.klass);

$core.addMethod(
$core.method({
selector: "installUtils",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._utilFormatters())._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._addFormatter_at_(value,key);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installUtils",{},$globals.RivetsJS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "installUtils\x0a\x0a\x09self utilFormatters keysAndValuesDo: [ :key :value |\x0a\x09\x09self addFormatter: value at: key ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "utilFormatters", "addFormatter:at:"]
}),
$globals.RivetsJS.klass);

$core.addMethod(
$core.method({
selector: "liveValueBindCallback",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return function (el) {
    	this.handler = this.handler || this.publish.bind(this);
    	el.addEventListener('keyup', this.handler);
	};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"liveValueBindCallback",{},$globals.RivetsJS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "liveValueBindCallback\x0a\x0a\x09<return function (el) {\x0a    \x09this.handler = this.handler || this.publish.bind(this);\x0a    \x09el.addEventListener('keyup', this.handler);\x0a\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RivetsJS.klass);

$core.addMethod(
$core.method({
selector: "liveValueUnbindCallback",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return  function (el) {
		if (this.handler) {
    		el.removeEventListener('keyup', this.handler);
    	}
	};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"liveValueUnbindCallback",{},$globals.RivetsJS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "liveValueUnbindCallback\x0a\x09\x0a\x09<return  function (el) {\x0a\x09\x09if (this.handler) {\x0a    \x09\x09el.removeEventListener('keyup', this.handler);\x0a    \x09}\x0a\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RivetsJS.klass);

$core.addMethod(
$core.method({
selector: "newLiveValue",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Object.create(rivets.binders.value);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newLiveValue",{},$globals.RivetsJS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newLiveValue\x0a\x0a\x09<return Object.create(rivets.binders.value)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RivetsJS.klass);

$core.addMethod(
$core.method({
selector: "rv",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(require)._value_("rivets");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rv",{},$globals.RivetsJS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rv\x0a\x09\x22Answers the rivets accessor.\x0a\x09http://rivetsjs.com/docs/guide/\x22\x0a\x0a\x09^ require value: 'rivets'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.RivetsJS.klass);

$core.addMethod(
$core.method({
selector: "utilFormatters",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$6,$1;
$2=$recv($Dictionary())._new();
$recv($2)._at_put_("at",(function(object,key){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(object)._basicAt_(key);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({object:object,key:key},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_("reversed",(function(aCollection){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aCollection)._reversed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aCollection:aCollection},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($2)._at_put_("sorted",(function(aCollection){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aCollection)._sorted();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aCollection:aCollection},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($2)._at_put_("size",(function(anObject){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anObject)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({anObject:anObject},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($2)._at_put_("rounded",(function(aNumber){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aNumber)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aNumber:aNumber},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv($2)._at_put_("capitalized",(function(aString){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aString)._capitalized();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aString:aString},$ctx1,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$recv($2)._at_put_("currency",(function(aNumber,aCurrencySymbol){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(aCurrencySymbol)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$4=$recv(aNumber)._printShowingDecimalPlaces_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["printShowingDecimalPlaces:"]=1;
//>>excludeEnd("ctx");
return $recv($3).__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aNumber:aNumber,aCurrencySymbol:aCurrencySymbol},$ctx1,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv($2)._at_put_("decimalPlaces",(function(aNumber,decimalPlaces){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aNumber)._printShowingDecimalPlaces_(decimalPlaces);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aNumber:aNumber,decimalPlaces:decimalPlaces},$ctx1,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=8;
//>>excludeEnd("ctx");
$recv($2)._at_put_("asLowercase",(function(aString){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(aString)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
return $recv($5)._asLowercase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aString:aString},$ctx1,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=9;
//>>excludeEnd("ctx");
$recv($2)._at_put_("asUppercase",(function(aString){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aString)._asString())._asUppercase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aString:aString},$ctx1,10)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=10;
//>>excludeEnd("ctx");
$recv($2)._at_put_("bind",self._binderCallback());
$6=$recv($2)._yourself();
$1=$6;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"utilFormatters",{},$globals.RivetsJS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "utilFormatters\x0a\x0a\x09^ Dictionary new \x0a\x09\x09at: #at put: [ :object :key | object basicAt: key ];\x0a\x09\x09at: #reversed put: [ :aCollection | aCollection reversed ];\x0a\x09\x09at: #sorted put: [ :aCollection | aCollection sorted ];\x0a\x09\x09at: #size put: [ :anObject | anObject size ];\x0a\x09\x09at: #rounded put: [ :aNumber | aNumber rounded ];\x0a\x09\x09at: #capitalized put: [ :aString | aString capitalized ];\x0a\x09\x09at: #currency put: [ :aNumber :aCurrencySymbol | aCurrencySymbol asString, (aNumber printShowingDecimalPlaces: 2) ];\x0a\x09\x09at: #decimalPlaces put: [ :aNumber :decimalPlaces | aNumber printShowingDecimalPlaces: decimalPlaces ];\x0a\x09\x09at: #asLowercase put: [ :aString | aString asString asLowercase ];\x0a\x09\x09at: #asUppercase put: [ :aString | aString asString asUppercase ];\x0a\x09\x09at: #bind put: self binderCallback;\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "basicAt:", "reversed", "sorted", "size", "rounded", "capitalized", ",", "asString", "printShowingDecimalPlaces:", "asLowercase", "asUppercase", "binderCallback", "yourself"]
}),
$globals.RivetsJS.klass);


$core.addClass('Router', $globals.Object, [], 'MVC-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Router.comment="This is a simple Router based on [rlite](https://github.com/chrisdavies/rlite)\x0a\x0a##Example\x0a\x0a```\x0aApp class>>setupRoutes\x0a\x0a\x09Router rlite \x0a\x09\x09add: '' do: [ :r | Router set: '#/home' ];\x0a\x09\x09add: '#' do: [ :r | Router set: '#/home' ];\x0a\x09\x09add: '#/' do: [ :r | Router set: '#/home' ];\x0a\x09\x09add: '/' do: [ :r | Router set: '#/home' ];\x0a\x09\x09add: 'home' do: [ :r | App home ];\x0a\x09\x09add: 'users' do: [ :r | App users ];\x0a\x09\x09add: 'users/:id' do: [ :r | App showUserAt: r params id ];\x0a\x09\x09add: 'articles/:articleid?query=thisthing' do: [ :r | App showArticleAt: r params articleid searching: r params query ];\x0a\x09\x09add: 'profile' do: [ :r | console log: 'view / edit profile requested' ];\x0a\x09\x09add: 'settings' do: [ :r | console log: 'view edit settings requested' ];\x0a\x09\x09add: 'system' do: [ :r | console log: 'view edit system requested' ];\x0a\x09\x09add: 'account' do: [ :r | console log: 'view edit account requested' ];\x0a\x09\x09add: 'signout' do: [ :r | console log: 'sign out requested' ];\x0a\x09\x09yourself\x0a```";
//>>excludeEnd("ide");

$globals.Router.klass.iVarNames = ['rlite'];
$core.addMethod(
$core.method({
selector: "go:",
protocol: 'actions',
fn: function (aURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv(aURI)._includes_("#");
if($core.assert($2)){
$3=self._rlite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rlite"]=1;
//>>excludeEnd("ctx");
$1=$recv($3)._run_($recv(aURI)._allButFirst());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["run:"]=1;
//>>excludeEnd("ctx");
} else {
$1=$recv(self._rlite())._run_(aURI);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"go:",{aURI:aURI},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aURI"],
source: "go: aURI\x0a\x09\x22Evaluates the predefined callback for the route defined by aURI.\x0a\x09Returns false if no callback was found for it.\x22\x0a\x0a\x09^ (aURI includes: '#')\x0a\x09\x09ifTrue: [ self rlite run: aURI allButFirst ]\x0a\x09\x09ifFalse: [ self rlite run: aURI ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "includes:", "run:", "rlite", "allButFirst"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._observeHash();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x0a\x09self observeHash",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["observeHash"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "observeHash",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(window)._addEventListener_do_("hashchange",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._processHash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addEventListener:do:"]=1;
//>>excludeEnd("ctx");
$recv(window)._addEventListener_do_("unload",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(window)._removeEventListener_("hashchange");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeHash",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeHash\x0a\x0a\x09window \x0a\x09\x09addEventListener: #hashchange \x0a\x09\x09do: [ self processHash ].\x0a\x09\x09\x0a\x09window \x0a\x09\x09addEventListener: #unload\x0a\x09\x09do: [ window removeEventListener: #hashchange ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addEventListener:do:", "processHash", "removeEventListener:"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "processHash",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._go_($recv($recv(window)._location())._hash());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processHash",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "processHash\x0a\x09\x22Evaluates the predefined callback for the route defined by the current hash.\x0a\x09Returns false if no callback was found for it.\x22\x0a\x0a    ^ self go: window location hash",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["go:", "hash", "location"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "rlite",
protocol: 'accessing',
fn: function (){
var self=this;
function $Rlite(){return $globals.Rlite||(typeof Rlite=="undefined"?nil:Rlite)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@rlite"];
if(($receiver = $2) == null || $receiver.isNil){
self["@rlite"]=$recv($Rlite())._new();
$1=self["@rlite"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rlite",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rlite\x0a\x0a\x09^ rlite ifNil: [ rlite := Rlite new ]",
referencedClasses: ["Rlite"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "set:",
protocol: 'actions',
fn: function (aURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(window)._location())._at_put_("hash",aURI);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"set:",{aURI:aURI},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aURI"],
source: "set: aURI\x0a\x09\x22Sets the URI of the web browser to aRUI.\x22\x0a\x09\x0a\x09window location at: #hash put: aURI",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "location"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "isNil",
protocol: '*MVC-Core',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNil\x0a\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "notNil",
protocol: '*MVC-Core',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notNil\x0a\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "changed",
protocol: '*MVC-Core',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("changed");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changed",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changed\x0a\x0a\x09self triggerEvent: #changed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "shuffled",
protocol: '*MVC-Core',
fn: function (){
var self=this;
var shaked,source;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
shaked=$recv(self._class())._new();
source=self._copy();
(1)._to_do_(self._size(),(function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(shaked)._add_($recv(source)._remove_($recv(source)._atRandom()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shuffled",{shaked:shaked,source:source},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shuffled\x0a\x09\x22Answers a copy of this collection with the same elements but randomly positioned.\x22\x0a\x09\x0a\x09| shaked source | \x0a\x09\x0a\x09shaked := self class new.\x0a\x09source := self copy.\x0a\x09\x0a\x091 to: self size do: [ :i | \x0a\x09\x09shaked add: (source remove: source atRandom) ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "class", "copy", "to:do:", "size", "add:", "remove:", "atRandom"]
}),
$globals.SequenceableCollection);

});
