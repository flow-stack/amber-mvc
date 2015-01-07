define("amber-mvc/MVC-Iterables", ["amber/boot", "amber-mvc/MVC-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('MVC-Iterables');
$core.packages["MVC-Iterables"].transport = {"type":"amd","amdNamespace":"amber-mvc"};

$core.addClass('ItemsController', $globals.BindingController, ['getItemsBlock', 'itemControllerClass', 'newItemControllerBlock', 'rivetsAccessor'], 'MVC-Iterables');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ItemsController.comment="##IteratedController\x0a##Sorry this one is not currently being supported\x0aIt requires a rivetjs hack to work and the ListController gives you the feature \x0a____\x0a\x0aLike ListController except it relies on rivets.js to iterate  models' presentation.\x0a\x0aIt's rivets who triggers the creation, maintenance and destruction of the (sub)controllers of this controller.\x0a\x0a[This is how you use it in the template/view](http://rivetsjs.com/docs/reference/#each-[item])";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "getItems",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv(self["@getItemsBlock"])._numArgs())._isZero();
if($core.assert($2)){
$1=$recv(self["@getItemsBlock"])._value();
} else {
$1=$recv(self["@getItemsBlock"])._value_(self["@model"]);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getItems",{},$globals.ItemsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getItems\x0a\x0a\x09^ getItemsBlock numArgs isZero\x0a\x09\x09ifTrue: [ getItemsBlock value ]\x0a\x09\x09ifFalse: [ getItemsBlock value: model ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isZero", "numArgs", "value", "value:"]
}),
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "getItemsBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@getItemsBlock"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getItemsBlock\x0a\x0a\x09^ getItemsBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ItemsController);

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
$globals.ItemsController);

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
$globals.ItemsController);

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
$globals.ItemsController);

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
$globals.ItemsController);

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
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "newItemControllerOn:for:",
protocol: 'actions',
fn: function (aView,aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@itemControllerClass"])._isNil();
if($core.assert($2)){
$1=$recv(self._newItemControllerBlock())._value_value_value_(aView,aModel,self);
} else {
$1=$recv(self["@itemControllerClass"])._for_on_appendingTo_(aModel,self,aView);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newItemControllerOn:for:",{aView:aView,aModel:aModel},$globals.ItemsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aView", "aModel"],
source: "newItemControllerOn: aView for: aModel\x0a\x0a\x09^ itemControllerClass isNil\x0a\x09\x09ifFalse:[ itemControllerClass \x0a\x09\x09\x09\x09\x09for: aModel \x0a\x09\x09\x09\x09\x09on: self \x0a\x09\x09\x09\x09\x09appendingTo: aView ] \x0a\x09\x09ifTrue:[ self newItemControllerBlock \x0a\x09\x09\x09\x09\x09\x09value: aView \x0a\x09\x09\x09\x09\x09\x09value: aModel \x0a\x09\x09\x09\x09\x09\x09value: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "isNil", "for:on:appendingTo:", "value:value:value:", "newItemControllerBlock"]
}),
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "onAfterBound:",
protocol: 'reactions',
fn: function (aRivetsBinding){
var self=this;
var boundItemView,boundItemModel;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ItemsController.superclass.fn.prototype._onAfterBound_.apply($recv(self), [aRivetsBinding]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
boundItemModel=$recv($recv(aRivetsBinding)._model())._at_(self._rivetsAccessor());
self._ifAbsentAt_put_(boundItemModel,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
boundItemView=$recv($recv($recv(aRivetsBinding)._view())._els())._first();
boundItemView;
return self._newItemControllerOn_for_(boundItemView,boundItemModel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._controllerAt_(boundItemModel))._render();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAfterBound:",{aRivetsBinding:aRivetsBinding,boundItemView:boundItemView,boundItemModel:boundItemModel},$globals.ItemsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRivetsBinding"],
source: "onAfterBound: aRivetsBinding\x0a\x09\x22Rivets has created a Binding instance with a view and the model and all its parts\x22\x0a\x0a\x09| boundItemView boundItemModel |\x0a\x09\x0a\x09super onAfterBound: aRivetsBinding.\x0a\x09boundItemModel := aRivetsBinding model at: self rivetsAccessor.\x0a\x0a\x09self ifAbsentAt: boundItemModel put: [\x0a\x09\x09boundItemView := aRivetsBinding view els first.\x0a\x09\x09self newItemControllerOn: boundItemView for: boundItemModel ].\x0a\x09\x09\x0a\x09(self controllerAt: boundItemModel) render",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onAfterBound:", "at:", "model", "rivetsAccessor", "ifAbsentAt:put:", "first", "els", "view", "newItemControllerOn:for:", "render", "controllerAt:"]
}),
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "onAfterUnbound:",
protocol: 'reactions',
fn: function (aRivetsBinding){
var self=this;
var boundItemModel;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ItemsController.superclass.fn.prototype._onAfterUnbound_.apply($recv(self), [aRivetsBinding]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
boundItemModel=$recv($recv(aRivetsBinding)._model())._at_(self._rivetsAccessor());
self._removeControllerAt_(boundItemModel);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAfterUnbound:",{aRivetsBinding:aRivetsBinding,boundItemModel:boundItemModel},$globals.ItemsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRivetsBinding"],
source: "onAfterUnbound: aRivetsBinding\x0a\x09\x22Rivets has unbound a aRivetsBinding instance\x22\x0a\x0a\x09| boundItemModel |\x0a\x09\x0a\x09super onAfterUnbound: aRivetsBinding.\x0a\x0a\x09boundItemModel := aRivetsBinding model at: self rivetsAccessor.\x0a\x09\x0a\x09(self removeControllerAt: boundItemModel)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onAfterUnbound:", "at:", "model", "rivetsAccessor", "removeControllerAt:"]
}),
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "rivetsAccessor",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@rivetsAccessor"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rivetsAccessor\x0a\x0a\x09^ rivetsAccessor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "rivetsAccessor:",
protocol: 'accessing',
fn: function (aSymbol){
var self=this;
self["@rivetsAccessor"]=aSymbol;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "rivetsAccessor: aSymbol\x0a\x0a\x09rivetsAccessor := aSymbol",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ItemsController);



$core.addClass('IteratedController', $globals.BindingController, ['itemControllerClass', 'newItemControllerBlock'], 'MVC-Iterables');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IteratedController.comment="##IteratedController\x0a##Sorry this one is not currently being supported\x0aIt requires a rivetjs hack to work and the ListController gives you the feature \x0a____\x0a\x0aLike ListController except it relies on rivets.js to iterate  models' presentation.\x0a\x0aIt's rivets who triggers the creation, maintenance and destruction of the (sub)controllers of this controller.\x0a\x0a[This is how you use it in the template/view](http://rivetsjs.com/docs/reference/#each-[item])";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "configureAndBind",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._configure();
self._makeCustomBinder();
self._bind();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configureAndBind",{},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configureAndBind\x0a\x0a\x09self configure.\x0a\x0a\x09self makeCustomBinder.\x0a\x09\x0a\x09self bind",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["configure", "makeCustomBinder", "bind"]
}),
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "getCustomBindFor:",
protocol: 'actions',
fn: function (theEachBind){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return function(el){
		this.view.onViewCreated = function(aView, aModel){ self._onViewCreated_for_(aView, aModel) };
		this.view.onViewDestroyed = function(aView, aModel){ self._onViewDestroyed_for_(aView, aModel) };
		theEachBind.call(this,el);		
		};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getCustomBindFor:",{theEachBind:theEachBind},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theEachBind"],
source: "getCustomBindFor: theEachBind\x0a\x0a\x09<return function(el){\x0a\x09\x09this.view.onViewCreated = function(aView, aModel){ self._onViewCreated_for_(aView, aModel) };\x0a\x09\x09this.view.onViewDestroyed = function(aView, aModel){ self._onViewDestroyed_for_(aView, aModel) };\x0a\x09\x09theEachBind.call(this,el);\x09\x09\x0a\x09\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "getCustomRoutineFor:",
protocol: 'actions',
fn: function (theEachRoutine){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return function(el, collection){
		var results = theEachRoutine.call(this, el, collection);
		self._onRoutine_value_(el, collection);
		return results;
		};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getCustomRoutineFor:",{theEachRoutine:theEachRoutine},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theEachRoutine"],
source: "getCustomRoutineFor: theEachRoutine\x0a\x0a\x09<return function(el, collection){\x0a\x09\x09var results = theEachRoutine.call(this, el, collection);\x0a\x09\x09self._onRoutine_value_(el, collection);\x0a\x09\x09return results;\x0a\x09\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IteratedController);

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
$globals.IteratedController);

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
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "makeCustomBinder",
protocol: 'actions',
fn: function (){
var self=this;
var theEachBind,theEachRoutine;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3,$8,$7,$6,$11,$10,$9,$14,$13,$12;
$2=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=1;
//>>excludeEnd("ctx");
$5=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._at_("each-*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("iterated-*",$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$8=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=3;
//>>excludeEnd("ctx");
$6=$recv($7)._at_("each-*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
theEachBind=$recv($6)._at_("bind");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$11=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=4;
//>>excludeEnd("ctx");
$10=$recv($11)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=4;
//>>excludeEnd("ctx");
$9=$recv($10)._at_("each-*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=5;
//>>excludeEnd("ctx");
theEachRoutine=$recv($9)._at_("routine");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$14=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=5;
//>>excludeEnd("ctx");
$13=$recv($14)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=5;
//>>excludeEnd("ctx");
$12=$recv($13)._at_("iterated-*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=6;
//>>excludeEnd("ctx");
$recv($12)._at_put_("bind",self._getCustomBindFor_(theEachBind));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($recv($recv(self._rivets())._binders())._at_("iterated-*"))._at_put_("routine",self._getCustomRoutineFor_(theEachRoutine));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeCustomBinder",{theEachBind:theEachBind,theEachRoutine:theEachRoutine},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeCustomBinder\x0a\x09\x22Answers the rivetjs configuration needed for this controller to maintain subcontrollers\x0a\x09in sync with the lifecicly of the elements maintained by rivets via the each-* directive\x22\x0a\x09\x0a\x09| theEachBind theEachRoutine |\x0a\x09\x0a\x09self rivets binders \x0a\x09\x09at: 'iterated-*'\x0a\x09\x09put: (self rivets binders at: 'each-*').\x0a\x09\x09\x0a\x09theEachBind := (self rivets binders at: 'each-*') at: #bind.\x0a\x09theEachRoutine := (self rivets binders at: 'each-*') at: #routine.\x0a\x09\x0a\x09(self rivets binders at: 'iterated-*') at: #bind put: (self getCustomBindFor: theEachBind).\x0a\x09(self rivets binders at: 'iterated-*') at: #routine put: (self getCustomRoutineFor: theEachRoutine)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "binders", "rivets", "at:", "getCustomBindFor:", "getCustomRoutineFor:"]
}),
$globals.IteratedController);

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
$globals.IteratedController);

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
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "newItemControllerOn:for:",
protocol: 'actions',
fn: function (aRivetJSView,aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@itemControllerClass"])._isNil();
if($core.assert($2)){
$1=$recv(self._newItemControllerBlock())._value_value_value_(aRivetJSView,aModel,self);
} else {
$1=$recv(self["@itemControllerClass"])._for_on_appendingTo_(aModel,self,$recv(jQuery)._value_($recv($recv(aRivetJSView)._els())._first()));
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newItemControllerOn:for:",{aRivetJSView:aRivetJSView,aModel:aModel},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRivetJSView", "aModel"],
source: "newItemControllerOn: aRivetJSView for: aModel\x0a\x0a\x09^ itemControllerClass isNil\x0a\x09\x09ifFalse:[ itemControllerClass \x0a\x09\x09\x09\x09\x09for: aModel \x0a\x09\x09\x09\x09\x09on: self \x0a\x09\x09\x09\x09\x09appendingTo: (jQuery value: aRivetJSView els first) ] \x0a\x09\x09ifTrue:[ self newItemControllerBlock \x0a\x09\x09\x09\x09\x09\x09value: aRivetJSView \x0a\x09\x09\x09\x09\x09\x09value: aModel \x0a\x09\x09\x09\x09\x09\x09value: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "isNil", "for:on:appendingTo:", "value:", "first", "els", "value:value:value:", "newItemControllerBlock"]
}),
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "onRoutine:value:",
protocol: 'reactions',
fn: function (anElement,aValue){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement", "aValue"],
source: "onRoutine: anElement value: aValue\x0a\x09\x22Rivetjs has executed the routing of the iterated-* binder.\x22\x0a\x0a\x09\x22no-op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "onViewCreated:for:",
protocol: 'reactions',
fn: function (aRivetJSView,aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aModel)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=1;
//>>excludeEnd("ctx");
self._ifAbsentAt_put_($1,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._newItemControllerOn_for_(aRivetJSView,aModel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._controllerAt_($recv(aModel)._id()))._render();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onViewCreated:for:",{aRivetJSView:aRivetJSView,aModel:aModel},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRivetJSView", "aModel"],
source: "onViewCreated: aRivetJSView for: aModel\x0a\x09\x22aRivetJSView was ceated for aModel by rivetsjs iterated-* and \x0a\x09we make sure we have a controller for it.\x22\x0a\x0a\x09self ifAbsentAt: aModel id put:[ self newItemControllerOn: aRivetJSView for: aModel].\x0a\x09\x09\x0a\x09(self controllerAt: aModel id) render",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "id", "newItemControllerOn:for:", "render", "controllerAt:"]
}),
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "onViewDestroyed:for:",
protocol: 'reactions',
fn: function (aView,aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._removeControllerAt_($recv(aModel)._id());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onViewDestroyed:for:",{aView:aView,aModel:aModel},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aView", "aModel"],
source: "onViewDestroyed: aView for: aModel\x0a\x09\x22The view for aModel was revoved by rivetjs, \x0a\x09so we make sure we remove the controller as well\x22\x0a\x09\x0a\x09self removeControllerAt: aModel id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeControllerAt:", "id"]
}),
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "parentElement:",
protocol: 'accessing',
fn: function (anHtmlElement){
var self=this;
self["@view"]=anHtmlElement;
self["@parentElement"]=self["@view"];
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anHtmlElement"],
source: "parentElement: anHtmlElement\x0a\x09\x22Sets the parent elment for the list.\x0a\x09It can be anything but, in the case of lists, the parent element usually is a <ul>\x0a\x09The thing is to treat it like an <ul> full of <li> children.\x22\x0a\x09parentElement := view := anHtmlElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IteratedController);


});
