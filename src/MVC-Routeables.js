define("amber-mvc/MVC-Routeables", ["amber/boot", "amber-mvc/MVC-Core", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('MVC-Routeables');
$core.packages["MVC-Routeables"].transport = {"type":"amd","amdNamespace":"amber-mvc"};

$core.addClass('RouteableController', $globals.Controller, [], 'MVC-Routeables');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.RouteableController.comment="## This is an abstraction. \x0a\x0a*Concrete subclasses know* if they are valid for a given URI so the app can be routed to them.\x0a\x0aA typical web app might have:\x0a1. home\x0a2. sign up\x0a3. sign in\x0a4. many other app-specific controllers";
//>>excludeEnd("ide");
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
$globals.RouteableController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._parentElement_("#content"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.RouteableController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09\x22The convention for routeable controllers is \x0a\x09to have only one element with id='content' in index.html \x0a\x09and all the rest of the app goes from that controller\x22\x0a\x09self parentElement: '#content' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "parentElement:", "asJQuery"]
}),
$globals.RouteableController);


$core.addMethod(
$core.method({
selector: "controllerFor:",
protocol: 'accessing',
fn: function (anURI){
var self=this;
function $NotFoundController(){return $globals.NotFoundController||(typeof NotFoundController=="undefined"?nil:NotFoundController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._allSubclasses())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isValidFor_(anURI);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return $NotFoundController();

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerFor:",{anURI:anURI},$globals.RouteableController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "controllerFor: anURI\x0a\x09\x22Answers the subclass that is a good fit to route anURI.\x22\x0a\x09\x0a\x09^ self allSubclasses\x0a\x09\x09detect:[ :each | each isValidFor: anURI ]\x0a\x09\x09ifNone:[ NotFoundController ]",
referencedClasses: ["NotFoundController"],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "allSubclasses", "isValidFor:"]
}),
$globals.RouteableController.klass);

$core.addMethod(
$core.method({
selector: "forURI:",
protocol: 'actions',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._for_on_appendingTo_(self._modelFor_(anURI),nil,self._defaultHtmlElement());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forURI:",{anURI:anURI},$globals.RouteableController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "forURI: anURI\x0a\x0a\x09^ self \x0a\x09\x09for: (self modelFor: anURI) \x0a\x09\x09on: nil \x0a\x09\x09appendingTo: self defaultHtmlElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["for:on:appendingTo:", "modelFor:", "defaultHtmlElement"]
}),
$globals.RouteableController.klass);

$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
function $RouteableController(){return $globals.RouteableController||(typeof RouteableController=="undefined"?nil:RouteableController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self.__eq($RouteableController());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},$globals.RouteableController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09\x22Answers true if the receiver is abstract.\x22\x0a\x09\x0a\x09^ self = RouteableController",
referencedClasses: ["RouteableController"],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.RouteableController.klass);

$core.addMethod(
$core.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (anURI){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "isValidFor: anURI\x0a\x09\x22Answers true if this controller is the right route for anURI\x22\x0a\x09\x0a\x09\x22the default policy is reject\x22\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RouteableController.klass);

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
}, function($ctx1) {$ctx1.fill(self,"keyword",{},$globals.RouteableController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keyword\x0a\x09\x22Answers the name of the class in lowercase without \x0a\x09the 'Controller' sufix so it can, for example, be used for friendly URI.\x0a\x09Subclasses are expected to follow the naming convention *Controller like\x0a\x09ThisNameController, ThatOtherNameController, AnyNameController, etc\x22\x0a\x0a\x09^ (self name reversed copyFrom: 'Controller' size + 1 to: self name size) reversed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reversed", "copyFrom:to:", "name", "+", "size"]
}),
$globals.RouteableController.klass);

$core.addMethod(
$core.method({
selector: "modelFor:",
protocol: 'actions',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._defaultModel();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modelFor:",{anURI:anURI},$globals.RouteableController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "modelFor: anURI\x0a\x09\x22Answers the model that corresponds to anURI.\x22\x0a\x0a\x09\x22The default is just to return the default model\x22\x0a\x09^ self defaultModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["defaultModel"]
}),
$globals.RouteableController.klass);

$core.addMethod(
$core.method({
selector: "routeFor:",
protocol: 'actions',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllerFor_(anURI))._forURI_(anURI);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"routeFor:",{anURI:anURI},$globals.RouteableController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "routeFor: anURI\x0a\x09\x22Answers a new controller suited to anURI.\x22\x0a\x09\x0a\x09^ (self controllerFor: anURI) forURI: anURI",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["forURI:", "controllerFor:"]
}),
$globals.RouteableController.klass);


$core.addClass('NotFoundController', $globals.RouteableController, [], 'MVC-Routeables');


$core.addClass('Router', $globals.Object, [], 'MVC-Routeables');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Router.comment="This router observes changes in the URI and reacts accordingly.\x0a\x0aThe strategy is to ignore what should be rote where in advance by collaborating intensively with controllers that understands #isValidFor: \x0aThat way this router will flexibly route thigs with a pontentially complex URI";
//>>excludeEnd("ide");

$globals.Router.klass.iVarNames = ['active'];
$core.addMethod(
$core.method({
selector: "active",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@active"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "active\x0a\x0a\x09^ active",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "goBack",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(window)._history())._go_((-1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"goBack",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "goBack\x0a\x09\x22Makes the browser go back one page in its navigation history.\x0a\x09Same effect as user pressing back button\x22\x0a\x0a\x09window history go: -1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["go:", "history"]
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
$recv(window)._onhashchange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onHashChanged();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeHash",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeHash\x0a\x0a\x09window onhashchange:[ self onHashChanged ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onhashchange:", "onHashChanged"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "onHashChanged",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@active"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@active"])._destroy();
};
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onHashChanged",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onHashChanged\x0a\x09\x0a\x09active ifNotNil:[ active destroy ].\x09\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "destroy", "refresh"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "parameterAt:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._parameterAt_in_(aKey,$recv($recv(window)._location())._href());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parameterAt:",{aKey:aKey},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "parameterAt: aKey\x0a\x09\x22Answers the value found in the parameter aKey found in the current URL.\x0a\x09Returns nil if there is no parameter at aKey.\x22\x0a\x09\x0a\x09^  self parameterAt: aKey in: window location href",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parameterAt:in:", "href", "location"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "parameterAt:in:",
protocol: 'accessing',
fn: function (aKey,anURL){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var re = new RegExp('.*[?&]' + aKey + '=([^&]+)(&|$)');
    var match = anURL.match(re);
    return(match ? decodeURIComponent(match[1]) : nil);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parameterAt:in:",{aKey:aKey,anURL:anURL},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "anURL"],
source: "parameterAt: aKey in: anURL\x0a\x09\x22Answers the value found in the parameter aKey found in anURL.\x0a\x09Returns nil if there is no parameter at aKey.\x22\x0a\x0a\x09<var re = new RegExp('.*[?&]' + aKey + '=([^&]+)(&|$)');\x0a    var match = anURL.match(re);\x0a    return(match ? decodeURIComponent(match[1]) : nil);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
function $RouteableController(){return $globals.RouteableController||(typeof RouteableController=="undefined"?nil:RouteableController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
self._trigger_("beforeRouting");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
$1=self["@active"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@active"])._remove();
};
self["@active"]=$recv($RouteableController())._routeFor_(self._route());
$recv(self["@active"])._refresh();
self._trigger_("afterRouting");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09\x0a\x09self trigger: #beforeRouting.\x0a\x09\x0a\x09active ifNotNil:[ active remove ].\x0a\x09active := RouteableController routeFor: self route.\x0a\x0a\x09active refresh.\x0a\x09\x0a\x09self trigger: #afterRouting.",
referencedClasses: ["RouteableController"],
//>>excludeEnd("ide");
messageSends: ["trigger:", "ifNotNil:", "remove", "routeFor:", "route", "refresh"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "route",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._uri())._replace_with_("^#/","");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"route",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "route\x0a\x09\x22Answers the current route.\x22\x0a\x09\x0a\x09^ self uri replace: '^#/' with: ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "uri"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "uri",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(window)._location())._hash();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uri",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uri\x0a\x0a\x09^ window location hash",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hash", "location"]
}),
$globals.Router.klass);

});
