define("amber-mvc/App", ["amber/boot", "amber_core/Kernel-Objects", "amber-mvc/MVC-Core", "minimapless/MiniMapless"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('App');
$core.packages["App"].transport = {"type":"amd","amdNamespace":"amber-mvc"};

$core.addClass('App', $globals.Object, [], 'App');

$globals.App.klass.iVarNames = ['main'];
$core.addMethod(
$core.method({
selector: "home",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._main())._reset();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"home",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "home\x0a\x0a\x09self main reset",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reset", "main"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._setupRoutes();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09self setupRoutes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupRoutes"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "initializeMain",
protocol: 'initialization',
fn: function (){
var self=this;
function $MainController(){return $globals.MainController||(typeof MainController=="undefined"?nil:MainController)}
function $ExampleModel(){return $globals.ExampleModel||(typeof ExampleModel=="undefined"?nil:ExampleModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@main"]=$recv($MainController())._for_on_appendingTo_($recv($ExampleModel())._new(),nil,"#main-wrapper"._asJQuery());
$1=self["@main"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeMain",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeMain\x0a\x0a\x09^ main := MainController \x0a\x09\x09\x09\x09\x09for: ExampleModel new\x0a\x09\x09\x09\x09\x09on: nil\x0a\x09\x09\x09\x09\x09appendingTo: '#main-wrapper' asJQuery",
referencedClasses: ["MainController", "ExampleModel"],
//>>excludeEnd("ide");
messageSends: ["for:on:appendingTo:", "new", "asJQuery"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "main",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@main"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeMain();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a\x09\x22Answers the main controller of the app (parent of all the other ones).\x0a\x09Initializes it lazily.\x22\x0a\x0a\x09^ main ifNil: [ self initializeMain ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeMain"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "setupRoutes",
protocol: 'actions',
fn: function (){
var self=this;
function $Router(){return $globals.Router||(typeof Router=="undefined"?nil:Router)}
function $App(){return $globals.App||(typeof App=="undefined"?nil:App)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=$recv($Router())._rlite();
$recv($1)._add_do_("",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Router())._set_("/home");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["set:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=1;
//>>excludeEnd("ctx");
$recv($1)._add_do_("/",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Router())._set_("/home");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["set:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=2;
//>>excludeEnd("ctx");
$recv($1)._add_do_("/#",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Router())._set_("/home");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["set:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=3;
//>>excludeEnd("ctx");
$recv($1)._add_do_("/home",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Router())._set_("/home");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["set:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=4;
//>>excludeEnd("ctx");
$recv($1)._add_do_("/#/home",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Router())._set_("/home");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=5;
//>>excludeEnd("ctx");
$recv($1)._add_do_("home",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($App())._home();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=6;
//>>excludeEnd("ctx");
$recv($1)._add_do_("example1",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($App())._main();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["main"]=1;
//>>excludeEnd("ctx");
return $recv($2)._showExample1();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=7;
//>>excludeEnd("ctx");
$recv($1)._add_do_("example2",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($App())._main();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["main"]=2;
//>>excludeEnd("ctx");
return $recv($3)._showExample2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=8;
//>>excludeEnd("ctx");
$recv($1)._add_do_("example3",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv($App())._main();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["main"]=3;
//>>excludeEnd("ctx");
return $recv($4)._showExample3();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=9;
//>>excludeEnd("ctx");
$recv($1)._add_do_("example4",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($App())._main())._showExample4();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,10)});
//>>excludeEnd("ctx");
}));
$5=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupRoutes",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupRoutes\x0a\x0a\x09Router rlite \x0a\x09\x09\x22Normalize the home URI\x22\x0a\x09\x09add: '' do: [ :r | Router set: '/home' ];\x0a\x09\x09add: '/' do: [ :r | Router set: '/home' ];\x0a\x09\x09add: '/#' do: [ :r | Router set: '/home' ];\x0a\x09\x09add: '/home' do: [ :r | Router set: '/home' ];\x0a\x09\x09add: '/#/home' do: [ :r | Router set: '/home' ];\x0a\x0a\x09\x09\x22Setup the actual routes\x22\x0a\x09\x09add: 'home' do: [ :r | App home ];\x0a\x09\x09add: 'example1' do: [ :r | App main showExample1 ];\x0a\x09\x09add: 'example2' do: [ :r | App main showExample2 ];\x0a\x09\x09add: 'example3' do: [ :r | App main showExample3 ];\x0a\x09\x09add: 'example4' do: [ :r | App main showExample4 ];\x0a\x09\x09yourself",
referencedClasses: ["Router", "App"],
//>>excludeEnd("ide");
messageSends: ["add:do:", "rlite", "set:", "home", "showExample1", "main", "showExample2", "showExample3", "showExample4", "yourself"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'actions',
fn: function (){
var self=this;
function $Router(){return $globals.Router||(typeof Router=="undefined"?nil:Router)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(window)._at_put_("app",self);
$recv($Router())._processHash();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x0a\x09window at: #app put: self.\x0a\x09\x0a\x09Router processHash",
referencedClasses: ["Router"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "processHash"]
}),
$globals.App.klass);


$core.addClass('ConfirmNameController', $globals.ConfirmController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ConfirmNameController.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
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
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ConfirmNameController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._title_("Please confirm");
self._rejectButtonLabel_("Mmmm, I'd have to think about it");
self._acceptButtonLabel_("Of course I can!");
$1=self._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ConfirmNameController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09title: 'Please confirm';\x0a\x09\x09rejectButtonLabel: 'Mmmm, I''d have to think about it';\x0a\x09\x09acceptButtonLabel: 'Of course I can!';\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "title:", "rejectButtonLabel:", "acceptButtonLabel:", "yourself"]
}),
$globals.ConfirmNameController);



$core.addClass('Example1Controller', $globals.TemplateController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Example1Controller.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
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
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Example1Controller.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._observeEvents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Example1Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView do: [ self observeEvents ];\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "observeEvents", "yourself"]
}),
$globals.Example1Controller);

$core.addMethod(
$core.method({
selector: "observeEvents",
protocol: 'actions',
fn: function (){
var self=this;
function $Example1Controller(){return $globals.Example1Controller||(typeof Example1Controller=="undefined"?nil:Example1Controller)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
function $TemplateController(){return $globals.TemplateController||(typeof TemplateController=="undefined"?nil:TemplateController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@view"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._find_("a#browse-example1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["find:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($Example1Controller())._browse();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["browse"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(window)._alert_("Is the IDE open?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["alert:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["on:do:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv($recv($recv(self["@view"])._asJQuery())._find_("a#browse-template"))._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($TemplateController())._browse();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(window)._alert_("Is the IDE open?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=3;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.Example1Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x0a\x09(view asJQuery find: 'a#browse-example1') \x0a\x09\x09on: #click\x0a\x09\x09do: [ [ Example1Controller browse ] on: Error do: [ :x | window alert: 'Is the IDE open?' ] ].\x0a\x09\x09\x0a\x09(view asJQuery find: 'a#browse-template') \x0a\x09\x09on: #click\x0a\x09\x09do: [  [ TemplateController browse ] on: Error do: [ :x | window alert: 'Is the IDE open?' ] ]",
referencedClasses: ["Example1Controller", "Error", "TemplateController"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "find:", "asJQuery", "browse", "alert:"]
}),
$globals.Example1Controller);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
function $ExampleModel(){return $globals.ExampleModel||(typeof ExampleModel=="undefined"?nil:ExampleModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($ExampleModel())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.Example1Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ ExampleModel new",
referencedClasses: ["ExampleModel"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Example1Controller.klass);


$core.addClass('Example2Controller', $globals.BindingController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Example2Controller.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "confirm",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._nameModal();
$recv($1)._message_($recv($recv($recv(self["@model"])._firstName())._asString()).__comma(" are you sure you can handle this?"));
$2=$recv($1)._show();
$recv($2)._done_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(c)._open();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirm\x0a\x09\x22Sets a fresh message and opens the modal\x22\x0a\x0a\x09(self nameModal\x0a\x09\x09message: (model firstName asString,' are you sure you can handle this?');\x0a\x09\x09show) done: [ :c | c open ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["done:", "message:", "nameModal", ",", "asString", "firstName", "show", "open"]
}),
$globals.Example2Controller);

$core.addMethod(
$core.method({
selector: "confirmAgain",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@model"])._firstName_("");
$recv(self["@model"])._isConfirmed_(false);
self._updateCanConfirm();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirmAgain",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirmAgain\x0a\x0a\x09model firstName: ''.\x0a\x09model isConfirmed: false.\x0a\x09\x0a\x09self  updateCanConfirm",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["firstName:", "isConfirmed:", "updateCanConfirm"]
}),
$globals.Example2Controller);

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
$globals.Example2Controller.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._updateCanConfirm();
return self._observeEvents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView \x0a\x09\x09do: [ \x0a\x09\x09\x09self updateCanConfirm.\x0a\x09\x09\x09self observeEvents ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "updateCanConfirm", "observeEvents"]
}),
$globals.Example2Controller);

$core.addMethod(
$core.method({
selector: "nameModal",
protocol: 'accessing',
fn: function (){
var self=this;
function $ConfirmNameController(){return $globals.ConfirmNameController||(typeof ConfirmNameController=="undefined"?nil:ConfirmNameController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$1;
$1=self._ifAbsentAt_put_("nameModal",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($ConfirmNameController())._for_on_appendingTo_(self["@model"],self,"#confirmName"._asJQuery());
$recv($2)._acceptBlock_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(self["@model"])._isConfirmed_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["isConfirmed:"]=1;
//>>excludeEnd("ctx");
$3=self._nameModal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nameModal"]=1;
//>>excludeEnd("ctx");
return $recv($3)._close();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["close"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv($2)._rejectBlock_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(self["@model"])._isConfirmed_(false);
return $recv(self._nameModal())._close();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$4=$recv($2)._yourself();
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nameModal",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nameModal\x0a\x0a\x09^ self ifAbsentAt: #nameModal put: [\x0a\x09\x09(ConfirmNameController \x0a\x09\x09\x09for: model\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#confirmName' asJQuery)\x0a\x09\x09\x09\x09acceptBlock: [ \x0a\x09\x09\x09\x09\x09model isConfirmed: true.\x0a\x09\x09\x09\x09\x09self nameModal close ];\x0a\x09\x09\x09\x09rejectBlock: [ \x0a\x09\x09\x09\x09\x09model isConfirmed: false.\x0a\x09\x09\x09\x09\x09self nameModal close ];\x0a\x09\x09\x09\x09yourself ]",
referencedClasses: ["ConfirmNameController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "acceptBlock:", "for:on:appendingTo:", "asJQuery", "isConfirmed:", "close", "nameModal", "rejectBlock:", "yourself"]
}),
$globals.Example2Controller);

$core.addMethod(
$core.method({
selector: "observeEvents",
protocol: 'actions',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
function $BindingController(){return $globals.BindingController||(typeof BindingController=="undefined"?nil:BindingController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@view"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._find_("a#inspect-example2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["find:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._inspect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(window)._alert_("Is the IDE open?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["alert:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["on:do:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv($recv($recv(self["@view"])._asJQuery())._find_("a#browse-binding"))._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($BindingController())._browse();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(window)._alert_("Is the IDE open?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=3;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x0a\x09(view asJQuery find: 'a#inspect-example2') \x0a\x09\x09on: 'click' \x0a\x09\x09do: [  [ self inspect ] on: Error do: [ :x | window alert: 'Is the IDE open?' ] ].\x0a\x09\x09\x0a\x09(view asJQuery find: 'a#browse-binding') \x0a\x09\x09on: 'click' \x0a\x09\x09do: [ [ BindingController browse ] on: Error do: [ :x | window alert: 'Is the IDE open?' ] ]",
referencedClasses: ["Error", "BindingController"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "find:", "asJQuery", "inspect", "alert:", "browse"]
}),
$globals.Example2Controller);

$core.addMethod(
$core.method({
selector: "onFirstNameKeyUp",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._updateCanConfirm();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onFirstNameKeyUp",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onFirstNameKeyUp\x0a\x0a\x09self updateCanConfirm",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateCanConfirm"]
}),
$globals.Example2Controller);

$core.addMethod(
$core.method({
selector: "updateCanConfirm",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=self._hasModel();
if(!$core.assert($1)){
return self;
};
$4=$recv(self["@model"])._firstName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["firstName"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._notNil();
$2=$recv($3)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self["@model"])._firstName())._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._basicAt_put_("canConfirm",$2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateCanConfirm",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateCanConfirm\x0a\x09\x09\x0a\x09self hasModel ifFalse: [ ^ self ].\x0a\x09\x0a\x09self \x0a\x09\x09basicAt: #canConfirm\x0a\x09\x09put: (model firstName notNil and: [\x0a\x09\x09\x09\x09model firstName notEmpty ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "hasModel", "basicAt:put:", "and:", "notNil", "firstName", "notEmpty"]
}),
$globals.Example2Controller);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
function $ThingModel(){return $globals.ThingModel||(typeof ThingModel=="undefined"?nil:ThingModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($ThingModel())._new();
$recv($2)._firstName_("Dude");
$recv($2)._someNumbers_([(3), (6), (2), (8), (1)]);
$recv($2)._someFloatValue_((33.33333333));
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.Example2Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ ThingModel new \x0a\x09\x09firstName: 'Dude';\x0a\x09\x09someNumbers: #( 3 6 2 8 1 );\x0a\x09\x09someFloatValue: 33.33333333;\x0a\x09\x09yourself",
referencedClasses: ["ThingModel"],
//>>excludeEnd("ide");
messageSends: ["firstName:", "new", "someNumbers:", "someFloatValue:", "yourself"]
}),
$globals.Example2Controller.klass);


$core.addClass('Example3Controller', $globals.TemplateController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Example3Controller.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "example1",
protocol: 'accessing',
fn: function (){
var self=this;
function $Example1Controller(){return $globals.Example1Controller||(typeof Example1Controller=="undefined"?nil:Example1Controller)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ifAbsentAt_put_("example1",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Example1Controller())._for_on_appendingTo_(nil,self,"#subexample-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example1",{},$globals.Example3Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example1\x0a\x0a\x09^ self ifAbsentAt: #example1 put: [\x0a\x09\x09Example1Controller \x0a\x09\x09\x09for: nil \x22We don't need to set any particular model for it\x22\x0a\x09\x09\x09on: self  \x22with this we are saying 'self is going to be your parent controller' (check implementors of #for:on:appendingTo:)\x22\x0a\x09\x09\x09appendingTo: '#subexample-wrapper' asJQuery ]",
referencedClasses: ["Example1Controller"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "asJQuery"]
}),
$globals.Example3Controller);

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
$globals.Example3Controller.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._showSubController();
return self._observeEvents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Example3Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView \x0a\x09\x09do: [ \x0a\x09\x09\x09self showSubController.\x0a\x09\x09\x09self observeEvents ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "showSubController", "observeEvents"]
}),
$globals.Example3Controller);

$core.addMethod(
$core.method({
selector: "observeEvents",
protocol: 'actions',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($recv(self["@view"])._asJQuery())._find_("a#inspect-this"))._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._inspect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(window)._alert_("Is the IDE open?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.Example3Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x0a\x09(view asJQuery find: 'a#inspect-this') \x0a\x09\x09on: #click\x0a\x09\x09do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is the IDE open?' ] ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "find:", "asJQuery", "inspect", "alert:"]
}),
$globals.Example3Controller);

$core.addMethod(
$core.method({
selector: "showSubController",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._example1())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showSubController",{},$globals.Example3Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showSubController\x0a\x09\x0a\x09self example1 show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show", "example1"]
}),
$globals.Example3Controller);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
function $ExampleModel(){return $globals.ExampleModel||(typeof ExampleModel=="undefined"?nil:ExampleModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($ExampleModel())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.Example3Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ ExampleModel new",
referencedClasses: ["ExampleModel"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Example3Controller.klass);


$core.addClass('Example4Controller', $globals.BindingController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Example4Controller.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addThing",
protocol: 'actions',
fn: function (){
var self=this;
function $ThingModel(){return $globals.ThingModel||(typeof ThingModel=="undefined"?nil:ThingModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($ThingModel())._new();
$recv($1)._name_(["Wave", "Particle", "Entanglement", "Superposition"]._atRandom());
$2=$recv($1)._yourself();
$recv($recv(self._things())._model())._add_($2);
self._updateNotEmpty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addThing",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addThing\x0a\x0a\x09self things model add: (ThingModel new name: #( Wave Particle Entanglement Superposition ) atRandom; yourself).\x0a\x09\x0a\x09self updateNotEmpty",
referencedClasses: ["ThingModel"],
//>>excludeEnd("ide");
messageSends: ["add:", "model", "things", "name:", "new", "atRandom", "yourself", "updateNotEmpty"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "details",
protocol: 'actions',
fn: function (){
var self=this;
function $ThingDetailsController(){return $globals.ThingDetailsController||(typeof ThingDetailsController=="undefined"?nil:ThingDetailsController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ifAbsentAt_put_("details",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ThingDetailsController())._on_appendingTo_(self,"#details-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"details",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "details\x0a\x09\x0a\x09^ self ifAbsentAt: #details put: [\x0a\x09\x09ThingDetailsController\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#details-wrapper' asJQuery ]",
referencedClasses: ["ThingDetailsController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "on:appendingTo:", "asJQuery"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "getListModel",
protocol: 'actions',
fn: function (){
var self=this;
function $ListModel(){return $globals.ListModel||(typeof ListModel=="undefined"?nil:ListModel)}
function $ThingModel(){return $globals.ThingModel||(typeof ThingModel=="undefined"?nil:ThingModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1;
$2=$recv($ListModel())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($2)._list_($recv($recv(self._potentialNames())._shuffled())._collect_((function(aName){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($ThingModel())._new();
$recv($3)._name_(aName);
$4=$recv($3)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aName:aName},$ctx1,1)});
//>>excludeEnd("ctx");
})));
$5=$recv($2)._yourself();
$1=$5;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getListModel",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getListModel\x0a\x09\x22Answers a newly created list model of things (Thing sample instances).\x22\x0a\x09\x0a\x09^ ListModel new\x0a\x09\x09list: (self potentialNames shuffled collect: [ :aName |  \x0a\x09\x09\x09\x09ThingModel new \x0a\x09\x09\x09\x09\x09name: aName;\x0a\x09\x09\x09\x09\x09yourself ]);\x0a\x09\x09yourself",
referencedClasses: ["ListModel", "ThingModel"],
//>>excludeEnd("ide");
messageSends: ["list:", "new", "collect:", "shuffled", "potentialNames", "name:", "yourself"]
}),
$globals.Example4Controller);

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
$globals.Example4Controller.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._basicAt_put_("hasDetails",false);
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self._things())._show();
self._updateNotEmpty();
return self._observeEvents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self basicAt: #hasDetails put: false.\x0a\x09\x0a\x09self when: #onAfterView do: [ \x0a\x09\x09self things show.\x0a\x09\x09self updateNotEmpty.\x0a\x09\x09self observeEvents ] ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "basicAt:put:", "when:do:", "show", "things", "updateNotEmpty", "observeEvents"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "newItemControllerFor:for:",
protocol: 'actions',
fn: function (aModel,aListController){
var self=this;
var row;
function $ThingRowController(){return $globals.ThingRowController||(typeof ThingRowController=="undefined"?nil:ThingRowController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
row=$recv($ThingRowController())._for_on_appendingTo_(aModel,aListController,$recv(aListController)._view());
$1=row;
$recv($1)._when_do_("removeThing",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onRemove_(aModel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["when:do:"]=1;
//>>excludeEnd("ctx");
$recv($1)._when_do_("viewDetails",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onDetails_(aModel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._yourself();
$3=row;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newItemControllerFor:for:",{aModel:aModel,aListController:aListController,row:row},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel", "aListController"],
source: "newItemControllerFor: aModel for: aListController\x0a\x09\x22Returns a new controller for aModel to be handled by aListController.\x22\x0a\x0a\x09| row |\x0a\x0a\x09row := ThingRowController \x0a\x09\x09\x09\x09for: aModel\x0a\x09\x09\x09\x09on: aListController\x0a\x09\x09\x09\x09appendingTo: aListController view.\x0a\x09\x09\x09\x09\x0a\x09row\x0a\x09\x09when: #removeThing do: [ self onRemove: aModel ];\x0a\x09\x09when: #viewDetails do: [ self onDetails: aModel ];\x0a\x09\x09yourself.\x0a\x0a\x09^ row",
referencedClasses: ["ThingRowController"],
//>>excludeEnd("ide");
messageSends: ["for:on:appendingTo:", "view", "when:do:", "onRemove:", "onDetails:", "yourself"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "observeEvents",
protocol: 'actions',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#inspect-this"._asJQuery())._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._inspect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(window)._alert_("Is the IDE open?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x0a\x09'#inspect-this' asJQuery \x0a\x09\x09on: #click\x0a\x09\x09do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is the IDE open?' ] ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "asJQuery", "inspect", "alert:"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "onDetails:",
protocol: 'reactions',
fn: function (aThing){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._basicAt_put_("hasDetails",true);
$1=self._details();
$recv($1)._model_(aThing);
$2=$recv($1)._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onDetails:",{aThing:aThing},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aThing"],
source: "onDetails: aThing\x0a\x0a\x09self basicAt: #hasDetails put: true.\x0a\x09\x0a\x09self details model: aThing; refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "model:", "details", "refresh"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "onRemove:",
protocol: 'reactions',
fn: function (aThing){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._things())._model())._remove_(aThing);
self._updateNotEmpty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onRemove:",{aThing:aThing},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aThing"],
source: "onRemove: aThing\x0a\x0a\x09self things model remove: aThing.\x0a\x0a\x09self updateNotEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "model", "things", "updateNotEmpty"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "potentialNames",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["Galileo", "Newton", "Einstein", "Heisemberg", "Bohr", "Schrodinger", "Plank", "Neumann", "DeBroglie", "Feynman"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "potentialNames\x0a\x0a\x09^ #(\x0a\x09Galileo\x0a\x09Newton\x0a\x09Einstein\x0a\x09Heisemberg\x0a\x09Bohr\x0a\x09Schrodinger\x0a\x09Plank\x0a\x09Neumann\x0a\x09DeBroglie\x0a\x09Feynman\x0a\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "removeThing",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._things())._model())._removeLast();
self._updateNotEmpty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeThing",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeThing\x0a\x0a\x09self things model removeLast.\x0a\x09\x0a\x09self updateNotEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeLast", "model", "things", "updateNotEmpty"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "things",
protocol: 'accessing',
fn: function (){
var self=this;
function $ListController(){return $globals.ListController||(typeof ListController=="undefined"?nil:ListController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=self._ifAbsentAt_put_("things",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($ListController())._on_appendingTo_(self,"#things-wrapper"._asJQuery());
$recv($2)._newItemControllerBlock_((function(item){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._newItemControllerFor_for_(item,self._things());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({item:item},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv($2)._model_(self._getListModel());
$3=$recv($2)._yourself();
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"things",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "things \x0a\x09\x0a\x09^ self ifAbsentAt: #things put: [\x0a\x09\x09(ListController \x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#things-wrapper' asJQuery)\x0a\x09\x09\x09newItemControllerBlock: [ :item | \x0a\x09\x09\x09\x09self newItemControllerFor: item for: self things ];\x0a\x09\x09\x09model: self getListModel;\x0a\x09\x09\x09yourself ]",
referencedClasses: ["ListController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "newItemControllerBlock:", "on:appendingTo:", "asJQuery", "newItemControllerFor:for:", "things", "model:", "getListModel", "yourself"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "updateNotEmpty",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._basicAt_put_("notEmpty",$recv($recv(self._things())._model())._notEmpty());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateNotEmpty",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateNotEmpty\x0a\x0a\x09self \x0a\x09\x09basicAt: #notEmpty \x0a\x09\x09put: self things model notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "notEmpty", "model", "things"]
}),
$globals.Example4Controller);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
function $ExampleModel(){return $globals.ExampleModel||(typeof ExampleModel=="undefined"?nil:ExampleModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($ExampleModel())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.Example4Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ ExampleModel new",
referencedClasses: ["ExampleModel"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Example4Controller.klass);


$core.addClass('ExampleModel', $globals.Object, ['name'], 'App');
$core.addMethod(
$core.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@name"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExampleModel);

$core.addMethod(
$core.method({
selector: "name:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@name"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "name: aString\x0a\x0a\x09name := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ExampleModel);



$core.addClass('MainController', $globals.TemplateController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MainController.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "example1",
protocol: 'accessing',
fn: function (){
var self=this;
function $Example1Controller(){return $globals.Example1Controller||(typeof Example1Controller=="undefined"?nil:Example1Controller)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ifAbsentAt_put_("example1",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Example1Controller())._for_on_appendingTo_(self["@model"],self,"#example1-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example1",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example1\x0a\x0a\x09^ self ifAbsentAt: #example1 put: [\x0a\x09\x09Example1Controller \x0a\x09\x09\x09for: model\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#example1-wrapper' asJQuery ]",
referencedClasses: ["Example1Controller"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "asJQuery"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "example2",
protocol: 'accessing',
fn: function (){
var self=this;
function $Example2Controller(){return $globals.Example2Controller||(typeof Example2Controller=="undefined"?nil:Example2Controller)}
function $ThingModel(){return $globals.ThingModel||(typeof ThingModel=="undefined"?nil:ThingModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=self._ifAbsentAt_put_("example2",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($ThingModel())._new();
$recv($2)._firstName_("Dude");
$recv($2)._someNumbers_([(3), (6), (2), (8), (1)]);
$recv($2)._someFloatValue_((33.33333333));
$3=$recv($2)._yourself();
return $recv($Example2Controller())._for_on_appendingTo_($3,self,"#example2-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example2",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example2\x0a\x0a\x09^ self ifAbsentAt: #example2 put: [\x0a\x09\x09Example2Controller \x0a\x09\x09\x09for: (ThingModel new\x0a\x09\x09\x09\x09\x09firstName: 'Dude';\x0a\x09\x09\x09\x09\x09someNumbers: #( 3 6 2 8 1 );\x0a\x09\x09\x09\x09\x09someFloatValue: 33.33333333;\x0a\x09\x09\x09\x09\x09yourself)\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#example2-wrapper' asJQuery ]",
referencedClasses: ["Example2Controller", "ThingModel"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "firstName:", "new", "someNumbers:", "someFloatValue:", "yourself", "asJQuery"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "example3",
protocol: 'accessing',
fn: function (){
var self=this;
function $Example3Controller(){return $globals.Example3Controller||(typeof Example3Controller=="undefined"?nil:Example3Controller)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ifAbsentAt_put_("example3",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Example3Controller())._for_on_appendingTo_(self["@model"],self,"#example3-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example3",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example3\x0a\x0a\x09^ self ifAbsentAt: #example3 put: [\x0a\x09\x09Example3Controller \x0a\x09\x09\x09for: model\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#example3-wrapper' asJQuery ]",
referencedClasses: ["Example3Controller"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "asJQuery"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "example4",
protocol: 'accessing',
fn: function (){
var self=this;
function $Example4Controller(){return $globals.Example4Controller||(typeof Example4Controller=="undefined"?nil:Example4Controller)}
function $ThingModel(){return $globals.ThingModel||(typeof ThingModel=="undefined"?nil:ThingModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ifAbsentAt_put_("example4",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Example4Controller())._for_on_appendingTo_($recv($ThingModel())._new(),self,"#example4-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example4",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example4\x0a\x0a\x09^ self ifAbsentAt: #example4 put: [\x0a\x09\x09Example4Controller \x0a\x09\x09\x09for: ThingModel new\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#example4-wrapper' asJQuery ]",
referencedClasses: ["Example4Controller", "ThingModel"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "new", "asJQuery"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "hideAll",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#welcome"._asJQuery())._hide();
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MainController.superclass.fn.prototype._hideAll.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hideAll",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hideAll\x0a\x09\x22Hides all subcontrollers and the welcome message\x22\x0a\x0a\x09'#welcome' asJQuery hide.\x0a\x09\x0a\x09super hideAll",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hide", "asJQuery", "hideAll"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "highlightTitle",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($recv(self["@view"])._asJQuery())._find_("h1"))._effect_("highlight");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"highlightTitle",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "highlightTitle\x0a\x0a\x09(view asJQuery find: 'h1') effect: 'highlight'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["effect:", "find:", "asJQuery"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "observeEvents",
protocol: 'initializing',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MainController.superclass.fn.prototype._observeEvents.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($recv($recv(self["@view"])._asJQuery())._find_("a#inspect-main"))._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._inspect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(window)._alert_("Is the IDE open?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x09\x0a\x09super observeEvents.\x0a\x0a\x09(view asJQuery find: 'a#inspect-main') \x0a\x09\x09on: #click \x0a\x09\x09do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is the IDE open?' ] ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["observeEvents", "on:do:", "find:", "asJQuery", "inspect", "alert:"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._hideAll();
$1=self._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show"]=1;
//>>excludeEnd("ctx");
$recv($1)._done_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv("#welcome"._asJQuery())._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09\x22Hides all subcontrollers and shows the welcome message\x22\x0a\x0a\x09self hideAll.\x0a\x09\x0a\x09self show done: [ '#welcome' asJQuery show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hideAll", "done:", "show", "asJQuery"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "showExample1",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show"]=1;
//>>excludeEnd("ctx");
$recv($1)._done_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._hideAll();
return $recv(self._example1())._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showExample1",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showExample1\x0a\x0a\x09self show done: [\x0a\x09\x09self hideAll.\x0a\x09\x09self example1 show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["done:", "show", "hideAll", "example1"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "showExample2",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show"]=1;
//>>excludeEnd("ctx");
$recv($1)._done_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._hideAll();
return $recv(self._example2())._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showExample2",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showExample2\x0a\x0a\x09self show done: [\x0a\x09\x09self hideAll.\x0a\x09\x09self example2 show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["done:", "show", "hideAll", "example2"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "showExample3",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show"]=1;
//>>excludeEnd("ctx");
$recv($1)._done_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._hideAll();
return $recv(self._example3())._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showExample3",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showExample3\x0a\x09\x0a\x09self show done: [\x0a\x09\x09self hideAll.\x0a\x09\x09self example3 show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["done:", "show", "hideAll", "example3"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "showExample4",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show"]=1;
//>>excludeEnd("ctx");
$recv($1)._done_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._hideAll();
return $recv(self._example4())._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showExample4",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showExample4\x0a\x09\x0a\x09self show done: [\x0a\x09\x09self hideAll.\x0a\x09\x09self example4 show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["done:", "show", "hideAll", "example4"]
}),
$globals.MainController);



$core.addClass('ThingDetailsController', $globals.BindingController, [], 'App');


$core.addClass('ThingModel', $globals.MaplessModel, [], 'App');


$core.addClass('ThingRowController', $globals.BindingController, [], 'App');
$core.addMethod(
$core.method({
selector: "removeThing",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("removeThing");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeThing",{},$globals.ThingRowController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeThing\x0a\x0a\x09self triggerEvent: #removeThing",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:"]
}),
$globals.ThingRowController);

$core.addMethod(
$core.method({
selector: "viewDetails",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("viewDetails");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"viewDetails",{},$globals.ThingRowController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "viewDetails\x0a\x0a\x09self triggerEvent: #viewDetails",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:"]
}),
$globals.ThingRowController);


});
