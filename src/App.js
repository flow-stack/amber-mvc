define("amber-mvc/App", ["amber/boot", "amber_core/Kernel-Objects", "amber-mvc/MVC-Core"], function($boot){
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
$recv(console)._log_("App>>home");
$recv(self._main())._reset();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"home",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "home\x0a\x09console log: 'App>>home'.\x0a\x09\x0a\x09self main reset",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", "reset", "main"]
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
function $AppVisitor(){return $globals.AppVisitor||(typeof AppVisitor=="undefined"?nil:AppVisitor)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@main"]=$recv($MainController())._for_on_appendingTo_($recv($AppVisitor())._new(),nil,"#main-wrapper"._asJQuery());
$1=self["@main"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeMain",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeMain\x0a\x0a\x09^ main := MainController \x0a\x09\x09\x09\x09for: AppVisitor new\x0a\x09\x09\x09\x09on: nil\x0a\x09\x09\x09\x09appendingTo: '#main-wrapper' asJQuery",
referencedClasses: ["MainController", "AppVisitor"],
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
selector: "publishObjects",
protocol: 'actions',
fn: function (){
var self=this;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($recv($recv($Flow())._session())._api())._ws();
$recv($1)._publish_at_($recv($Flow())._app(),"app");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["publish:at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._publish_at_($recv($Transcript())._current(),"Transcript");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["publish:at:"]=2;
//>>excludeEnd("ctx");
$recv($1)._publish_at_(console,"console");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["publish:at:"]=3;
//>>excludeEnd("ctx");
$recv($1)._publish_at_((function(sent){
return sent;

}),"echo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["publish:at:"]=4;
//>>excludeEnd("ctx");
$recv($1)._publish_at_((function(ping){
return "pong";

}),"ping");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["publish:at:"]=5;
//>>excludeEnd("ctx");
$recv($1)._publish_at_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__plus(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,3)});
//>>excludeEnd("ctx");
}),"sum");
$2=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"publishObjects",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "publishObjects\x0a\x0a\x09Flow session api ws\x0a\x09\x09publish: Flow app at: 'app';\x0a\x09\x09publish: Transcript current at: 'Transcript';\x0a\x09\x09publish: console at: 'console';\x0a\x09\x09publish: [ :sent | sent ] at: 'echo';\x0a\x09\x09publish: [ :ping | #pong ] at: 'ping';\x09\x09\x0a\x09\x09publish: [ :a :b | a + b ] at: 'sum';\x09\x0a\x09\x09yourself",
referencedClasses: ["Flow", "Transcript"],
//>>excludeEnd("ide");
messageSends: ["publish:at:", "ws", "api", "session", "app", "current", "+", "yourself"]
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
var $1,$2,$3,$4,$5,$6;
$1=$recv($Router())._rlite();
$recv($1)._add_do_("",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(console)._log_("process \x22\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["log:"]=1;
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
$recv(console)._log_("process \x22/\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["log:"]=2;
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
$recv(console)._log_("process \x22/#\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["log:"]=3;
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
$recv(console)._log_("process \x22/home\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["log:"]=4;
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
$recv(console)._log_("process \x22/#/home\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["log:"]=5;
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
$recv(console)._log_("process \x22home\x22");
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
$5=$recv($App())._main();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["main"]=4;
//>>excludeEnd("ctx");
return $recv($5)._showExample4();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,10)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:do:"]=10;
//>>excludeEnd("ctx");
$recv($1)._add_do_("example5",(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($App())._main())._showExample5();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,11)});
//>>excludeEnd("ctx");
}));
$6=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupRoutes",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupRoutes\x0a\x0a\x09Router rlite \x0a\x09\x09add: '' do: [ :r | console log: 'process \x22\x22'. Router set: '/home' ];\x0a\x09\x09add: '/' do: [ :r | console log: 'process \x22/\x22'. Router set: '/home' ];\x0a\x09\x09add: '/#' do: [ :r | console log: 'process \x22/#\x22'. Router set: '/home' ];\x0a\x09\x09add: '/home' do: [ :r | console log: 'process \x22/home\x22'. Router set: '/home' ];\x0a\x09\x09add: '/#/home' do: [ :r | console log: 'process \x22/#/home\x22'. Router set: '/home' ];\x0a\x0a\x09\x09add: 'home' do: [ :r | console log: 'process \x22home\x22'. App home ];\x0a\x09\x09add: 'example1' do: [ :r | App main showExample1 ];\x0a\x09\x09add: 'example2' do: [ :r | App main showExample2 ];\x0a\x09\x09add: 'example3' do: [ :r | App main showExample3 ];\x0a\x09\x09add: 'example4' do: [ :r | App main showExample4 ];\x0a\x09\x09add: 'example5' do: [ :r | App main showExample5 ];\x0a\x09\x09yourself",
referencedClasses: ["Router", "App"],
//>>excludeEnd("ide");
messageSends: ["add:do:", "rlite", "log:", "set:", "home", "showExample1", "main", "showExample2", "showExample3", "showExample4", "showExample5", "yourself"]
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


$core.addClass('AppVisitor', $globals.Object, [], 'App');


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
return $recv(window)._alert_("Is Helios open?");
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
return $recv(window)._alert_("Is Helios open?");
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
source: "observeEvents\x0a\x0a\x09(view asJQuery find: 'a#browse-example1') \x0a\x09\x09on: #click\x0a\x09\x09do: [ [ Example1Controller browse ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ].\x0a\x09\x09\x0a\x09(view asJQuery find: 'a#browse-template') \x0a\x09\x09on: #click\x0a\x09\x09do: [  [ TemplateController browse ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ]",
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
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Flow())._session();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.Example1Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ Flow session",
referencedClasses: ["Flow"],
//>>excludeEnd("ide");
messageSends: ["session"]
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
$1=self._controllerAt_("nameModal");
$recv($1)._message_($recv($recv($recv(self["@model"])._firstName())._asString()).__comma(" are you sure you can handle this?"));
$2=$recv($1)._open();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirm\x0a\x09\x22Sets a fresh message and opens the modal\x22\x0a\x0a\x09(self controllerAt: #nameModal) \x0a\x09\x09message: (model firstName asString,' are you sure you can handle this?');\x0a\x09\x09open",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["message:", "controllerAt:", ",", "asString", "firstName", "open"]
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
selector: "ensureModal",
protocol: 'actions',
fn: function (){
var self=this;
function $ConfirmNameController(){return $globals.ConfirmNameController||(typeof ConfirmNameController=="undefined"?nil:ConfirmNameController)}
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
self._ifAbsentAt_put_("nameModal",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ConfirmNameController())._for_on_appendingTo_($recv($recv($Flow())._session())._visitor(),self,"#confirmName"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self._controllerAt_("nameModal");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["controllerAt:"]=1;
//>>excludeEnd("ctx");
$recv($1)._acceptBlock_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@model"])._isConfirmed_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isConfirmed:"]=1;
//>>excludeEnd("ctx");
$2=self._controllerAt_("nameModal");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["controllerAt:"]=2;
//>>excludeEnd("ctx");
return $recv($2)._close();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["close"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($1)._rejectBlock_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@model"])._isConfirmed_(false);
return $recv(self._controllerAt_("nameModal"))._close();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$3=$recv($1)._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureModal",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureModal\x0a\x0a\x09self ifAbsentAt: #nameModal put: [\x0a\x09\x09ConfirmNameController \x0a\x09\x09\x09for: Flow session visitor\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#confirmName' asJQuery ].\x0a\x09\x09\x09\x0a\x09(self controllerAt: #nameModal) \x0a\x09\x09acceptBlock: [ \x0a\x09\x09\x09model isConfirmed: true.\x0a\x09\x09\x09(self controllerAt: #nameModal) close ];\x0a\x09\x09rejectBlock: [ \x0a\x09\x09\x09model isConfirmed: false.\x0a\x09\x09\x09(self controllerAt: #nameModal) close ];\x0a\x09\x09refresh",
referencedClasses: ["ConfirmNameController", "Flow"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "visitor", "session", "asJQuery", "acceptBlock:", "controllerAt:", "isConfirmed:", "close", "rejectBlock:", "refresh"]
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
self._ensureModal();
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
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView \x0a\x09\x09do: [ \x0a\x09\x09\x09self updateCanConfirm.\x0a\x09\x09\x09self ensureModal.\x0a\x09\x09\x09self observeEvents ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "updateCanConfirm", "ensureModal", "observeEvents"]
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
return $recv(window)._alert_("Is Helios open?");
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
return $recv(window)._alert_("Is Helios open?");
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
source: "observeEvents\x0a\x0a\x09(view asJQuery find: 'a#inspect-example2') \x0a\x09\x09on: 'click' \x0a\x09\x09do: [  [ self inspect ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ].\x0a\x09\x09\x0a\x09(view asJQuery find: 'a#browse-binding') \x0a\x09\x09on: 'click' \x0a\x09\x09do: [ [ BindingController browse ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ]",
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
source: "updateCanConfirm\x0a\x09\x09\x0a\x09self hasModel ifFalse: [ ^ self ].\x0a\x09\x0a\x09self \x0a\x09\x09basicAt: #canConfirm \x0a\x09\x09put: (model firstName notNil and: [\x0a\x09\x09\x09\x09model firstName notEmpty ])",
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
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Dictionary())._new();
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
source: "defaultModel\x0a\x0a\x09^ Dictionary new \x0a\x09\x09firstName: 'Dude';\x0a\x09\x09someNumbers: #( 3 6 2 8 1 );\x0a\x09\x09someFloatValue: 33.33333333;\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
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
selector: "ensureSubControllers",
protocol: 'actions',
fn: function (){
var self=this;
function $Example1Controller(){return $globals.Example1Controller||(typeof Example1Controller=="undefined"?nil:Example1Controller)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._ifAbsentAt_put_("subexample",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Example1Controller())._for_on_appendingTo_(nil,self,"#subexample-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._controllerAt_("subexample"))._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureSubControllers",{},$globals.Example3Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureSubControllers\x0a\x0a\x09self ifAbsentAt: #subexample put: [\x0a\x09\x09Example1Controller \x0a\x09\x09\x09for: nil \x22We don't need to set any particular model for it\x22\x0a\x09\x09\x09on: self  \x22with this we are saying 'self is going to be your parent controller' (check implementors of #for:on:appendingTo:)\x22\x0a\x09\x09\x09appendingTo: '#subexample-wrapper' asJQuery ].\x0a\x09\x09\x09\x0a\x09(self controllerAt: #subexample) refresh",
referencedClasses: ["Example1Controller"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "asJQuery", "refresh", "controllerAt:"]
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
self._ensureSubControllers();
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
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView \x0a\x09\x09do: [ \x0a\x09\x09\x09self ensureSubControllers.\x0a\x09\x09\x09self observeEvents ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "ensureSubControllers", "observeEvents"]
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
return $recv(window)._alert_("Is Helios open?");
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
source: "observeEvents\x0a\x0a\x09(view asJQuery find: 'a#inspect-this') \x0a\x09\x09on: #click\x0a\x09\x09do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "find:", "asJQuery", "inspect", "alert:"]
}),
$globals.Example3Controller);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Dictionary())._new();
$recv($2)._firstName_("Visitor");
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.Example3Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ Dictionary new \x0a\x09\x09firstName: 'Visitor';\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["firstName:", "new", "yourself"]
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
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($Thing())._new();
$recv($1)._name_(["Wave", "Particle", "Entanglement", "Superposition"]._atRandom());
$2=$recv($1)._yourself();
$recv($recv(self._controllerAt_("things"))._model())._add_($2);
self._updateNotEmpty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addThing",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addThing\x0a\x0a\x09(self controllerAt: #things) model add: (Thing new name: #( Wave Particle Entanglement Superposition ) atRandom; yourself).\x0a\x09\x0a\x09self updateNotEmpty",
referencedClasses: ["Thing"],
//>>excludeEnd("ide");
messageSends: ["add:", "model", "controllerAt:", "name:", "new", "atRandom", "yourself", "updateNotEmpty"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "ensureDetails",
protocol: 'actions',
fn: function (){
var self=this;
function $ThingDetailsController(){return $globals.ThingDetailsController||(typeof ThingDetailsController=="undefined"?nil:ThingDetailsController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._ifAbsentAt_put_("details",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ThingDetailsController())._on_appendingTo_(self,"#details-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._controllerAt_("details"))._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureDetails",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureDetails\x0a\x09\x22Makes sure we have a controller for #details and \x0a\x09make it fresh and visible with a refresh\x22\x0a\x09\x0a\x09self ifAbsentAt: #details put: [\x0a\x09\x09ThingDetailsController\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#details-wrapper' asJQuery ].\x0a\x09\x0a\x09(self controllerAt: #details) refresh",
referencedClasses: ["ThingDetailsController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "on:appendingTo:", "asJQuery", "refresh", "controllerAt:"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "ensureList",
protocol: 'actions',
fn: function (){
var self=this;
function $ListController(){return $globals.ListController||(typeof ListController=="undefined"?nil:ListController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._ifAbsentAt_put_("things",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ListController())._on_appendingTo_(self,"#things-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self._controllerAt_("things");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["controllerAt:"]=1;
//>>excludeEnd("ctx");
$recv($1)._newItemControllerBlock_((function(item){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._newItemControllerFor_for_(item,self._controllerAt_("things"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({item:item},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($1)._model_(self._getListModel());
$2=$recv($1)._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureList",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureList\x0a\x09\x22Makes sure we have a controller for #things and \x0a\x09make it fresh and visible with a refresh\x22\x0a\x09\x0a\x09self ifAbsentAt: #things put: [\x0a\x09\x09ListController \x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#things-wrapper' asJQuery ].\x0a\x09\x0a\x09(self controllerAt: #things) \x0a\x09\x09newItemControllerBlock: [ :item | \x0a\x09\x09\x09self newItemControllerFor: item for: (self controllerAt: #things) ];\x0a\x09\x09model: self getListModel;\x0a\x09\x09refresh",
referencedClasses: ["ListController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "on:appendingTo:", "asJQuery", "newItemControllerBlock:", "controllerAt:", "newItemControllerFor:for:", "model:", "getListModel", "refresh"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "getListModel",
protocol: 'actions',
fn: function (){
var self=this;
var things;
function $ListModel(){return $globals.ListModel||(typeof ListModel=="undefined"?nil:ListModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
things=$recv($ListModel())._localFindCid_("samples");
$1=things;
if(($receiver = $1) == null || $receiver.isNil){
things=self._newListModel();
things;
$recv(things)._do_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localSave"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(things)._localSave();
} else {
$1;
};
$2=things;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getListModel",{things:things},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getListModel\x0a\x09\x22Answers the list model of things\x22\x0a\x0a\x09| things |\x0a\x09 \x0a\x09\x22Load them from the local storage\x22\x0a\x09things := ListModel localFindCid: 'samples'.\x0a\x09\x0a\x09things ifNil: [ \x0a\x09\x09\x22Oh, not found? then create and save some...\x22\x0a\x09\x09things := self newListModel.\x0a\x09\x09things do: [ :e | e localSave ].\x0a\x09\x09things localSave ].\x0a\x09\x0a\x09^ things",
referencedClasses: ["ListModel"],
//>>excludeEnd("ide");
messageSends: ["localFindCid:", "ifNil:", "newListModel", "do:", "localSave"]
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
self._ensureDetails();
self._ensureList();
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
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self basicAt: #hasDetails put: false.\x0a\x09\x0a\x09self when: #onAfterView do: [ \x0a\x09\x09self ensureDetails.\x0a\x09\x09self ensureList.\x0a\x09\x09self updateNotEmpty.\x0a\x09\x09self observeEvents ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "basicAt:put:", "when:do:", "ensureDetails", "ensureList", "updateNotEmpty", "observeEvents"]
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
selector: "newListModel",
protocol: 'actions',
fn: function (){
var self=this;
function $ListModel(){return $globals.ListModel||(typeof ListModel=="undefined"?nil:ListModel)}
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
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
$3=$recv($Thing())._new();
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
}, function($ctx1) {$ctx1.fill(self,"newListModel",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newListModel\x0a\x09\x22Answers a newly created list model of things (Thing sample instances).\x22\x0a\x09\x0a\x09^ ListModel new\x0a\x09\x09list: (self potentialNames shuffled collect: [ :aName |  \x0a\x09\x09\x09\x09Thing new \x0a\x09\x09\x09\x09\x09name: aName;\x0a\x09\x09\x09\x09\x09yourself ]);\x0a\x09\x09yourself",
referencedClasses: ["ListModel", "Thing"],
//>>excludeEnd("ide");
messageSends: ["list:", "new", "collect:", "shuffled", "potentialNames", "name:", "yourself"]
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
return $recv(window)._alert_("Is Helios open?");
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
source: "observeEvents\x0a\x0a\x09'#inspect-this' asJQuery \x0a\x09\x09on: #click\x0a\x09\x09do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ]",
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
$1=self._controllerAt_("details");
$recv($1)._model_(aThing);
$2=$recv($1)._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onDetails:",{aThing:aThing},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aThing"],
source: "onDetails: aThing\x0a\x0a\x09self basicAt: #hasDetails put: true.\x0a\x09\x0a\x09(self controllerAt: #details) model: aThing; refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "model:", "controllerAt:", "refresh"]
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
$recv($recv(self._controllerAt_("things"))._model())._remove_(aThing);
self._updateNotEmpty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onRemove:",{aThing:aThing},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aThing"],
source: "onRemove: aThing\x0a\x0a\x09(self controllerAt: #things) model remove: aThing.\x0a\x0a\x09self updateNotEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "model", "controllerAt:", "updateNotEmpty"]
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
$recv($recv(self._controllerAt_("things"))._model())._removeLast();
self._updateNotEmpty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeThing",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeThing\x0a\x0a\x09(self controllerAt: #things) model removeLast.\x0a\x09\x0a\x09self updateNotEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeLast", "model", "controllerAt:", "updateNotEmpty"]
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
self._basicAt_put_("notEmpty",$recv($recv(self._controllerAt_("things"))._model())._notEmpty());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateNotEmpty",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateNotEmpty\x0a\x0a\x09self \x0a\x09\x09basicAt: #notEmpty \x0a\x09\x09put: (self controllerAt: #things) model notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "notEmpty", "model", "controllerAt:"]
}),
$globals.Example4Controller);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
function $AppVisitor(){return $globals.AppVisitor||(typeof AppVisitor=="undefined"?nil:AppVisitor)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($AppVisitor())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.Example4Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ AppVisitor new",
referencedClasses: ["AppVisitor"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Example4Controller.klass);


$core.addClass('Example5Controller', $globals.BindingController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Example5Controller.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addThing",
protocol: 'actions',
fn: function (){
var self=this;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($Thing())._new();
$recv($1)._name_(["Wave", "Particle", "Entanglement", "Superposition"]._atRandom());
$2=$recv($1)._yourself();
$recv($recv(self["@model"])._things())._add_($2);
self._updateNotEmpty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addThing",{},$globals.Example5Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addThing\x0a\x0a\x09model things add: (Thing new name: #( Wave Particle Entanglement Superposition ) atRandom; yourself).\x0a\x09\x0a\x09self updateNotEmpty",
referencedClasses: ["Thing"],
//>>excludeEnd("ide");
messageSends: ["add:", "things", "name:", "new", "atRandom", "yourself", "updateNotEmpty"]
}),
$globals.Example5Controller);

$core.addMethod(
$core.method({
selector: "ensureDetails",
protocol: 'actions',
fn: function (){
var self=this;
function $ThingDetailsController(){return $globals.ThingDetailsController||(typeof ThingDetailsController=="undefined"?nil:ThingDetailsController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._ifAbsentAt_put_("details",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ThingDetailsController())._on_appendingTo_(self,"#details-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._controllerAt_("details"))._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureDetails",{},$globals.Example5Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureDetails\x0a\x09\x22Makes sure we have a controller for #details and \x0a\x09make it fresh and visible with a refresh\x22\x0a\x09\x0a\x09self ifAbsentAt: #details put: [\x0a\x09\x09ThingDetailsController\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#details-wrapper' asJQuery ].\x0a\x09\x0a\x09(self controllerAt: #details) refresh",
referencedClasses: ["ThingDetailsController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "on:appendingTo:", "asJQuery", "refresh", "controllerAt:"]
}),
$globals.Example5Controller);

$core.addMethod(
$core.method({
selector: "ensureList",
protocol: 'actions',
fn: function (){
var self=this;
function $ItemsController(){return $globals.ItemsController||(typeof ItemsController=="undefined"?nil:ItemsController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._ifAbsentAt_put_("things",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ItemsController())._for_on_appendingTo_(self["@model"],self,"#things-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self._controllerAt_("things");
$recv($1)._getItemsBlock_((function(m){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(m)._things();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($1)._rivetsAccessor_("thing");
$recv($1)._newItemControllerBlock_((function(v,m,itemsController){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._newItemControllerForModel_view_parent_(m,v,itemsController);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({v:v,m:m,itemsController:itemsController},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv($1)._model_(self["@model"]);
$2=$recv($1)._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureList",{},$globals.Example5Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureList\x0a\x09\x22Makes sure we have a controller for #things and \x0a\x09make it fresh and visible with a refresh\x22\x0a\x09\x0a\x09self ifAbsentAt: #things put: [\x0a\x09\x09ItemsController \x0a\x09\x09\x09for: model\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#things-wrapper' asJQuery ].\x0a\x09\x0a\x09(self controllerAt: #things) \x0a\x09\x09getItemsBlock: [ :m | m things ];\x0a\x09\x09rivetsAccessor: #thing;\x0a\x09\x09newItemControllerBlock: [ :v :m :itemsController | \x0a\x09\x09\x09self newItemControllerForModel: m view: v parent: itemsController ];\x0a\x09\x09model: model;\x0a\x09\x09refresh",
referencedClasses: ["ItemsController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "asJQuery", "getItemsBlock:", "controllerAt:", "things", "rivetsAccessor:", "newItemControllerBlock:", "newItemControllerForModel:view:parent:", "model:", "refresh"]
}),
$globals.Example5Controller);

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
$globals.Example5Controller.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._ensureDetails();
self._ensureList();
self._updateNotEmpty();
return self._observeEvents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Example5Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self when: #onAfterView do: [ \x0a\x09\x09self ensureDetails.\x0a\x09\x09self ensureList.\x0a\x09\x09self updateNotEmpty.\x0a\x09\x09self observeEvents ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "ensureDetails", "ensureList", "updateNotEmpty", "observeEvents"]
}),
$globals.Example5Controller);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'initialization',
fn: function (aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Example5Controller.superclass.fn.prototype._model_.apply($recv(self), [aModel]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aModel)._things_(self._newItems());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},$globals.Example5Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "model: aModel\x0a\x09\x0a\x09super model: aModel.\x0a\x09\x0a\x09aModel things: self newItems",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model:", "things:", "newItems"]
}),
$globals.Example5Controller);

$core.addMethod(
$core.method({
selector: "newItemControllerForModel:view:parent:",
protocol: 'actions',
fn: function (aModel,aView,anItemsController){
var self=this;
var row;
function $ThingRowController(){return $globals.ThingRowController||(typeof ThingRowController=="undefined"?nil:ThingRowController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
row=$recv($ThingRowController())._for_on_appendingTo_(aModel,anItemsController,$recv($recv(aView)._asJQuery())._find_(".item-wrapper"));
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
}, function($ctx1) {$ctx1.fill(self,"newItemControllerForModel:view:parent:",{aModel:aModel,aView:aView,anItemsController:anItemsController,row:row},$globals.Example5Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel", "aView", "anItemsController"],
source: "newItemControllerForModel: aModel view: aView parent: anItemsController\x0a\x09\x22Returns a new controller for aModel using aView and meant to be child of anItemsController.\x22\x0a\x0a\x09| row |\x0a\x0a\x09row := ThingRowController \x0a\x09\x09\x09\x09for: aModel\x0a\x09\x09\x09\x09on: anItemsController\x0a\x09\x09\x09\x09appendingTo: (aView asJQuery find: '.item-wrapper').\x0a\x0a\x09row\x0a\x09\x09when: #removeThing do: [ self onRemove: aModel ];\x0a\x09\x09when: #viewDetails do: [ self onDetails: aModel ];\x0a\x09\x09yourself.\x0a\x0a\x09^ row",
referencedClasses: ["ThingRowController"],
//>>excludeEnd("ide");
messageSends: ["for:on:appendingTo:", "find:", "asJQuery", "when:do:", "onRemove:", "onDetails:", "yourself"]
}),
$globals.Example5Controller);

$core.addMethod(
$core.method({
selector: "newItems",
protocol: 'actions',
fn: function (){
var self=this;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$recv($recv(self._potentialNames())._shuffled())._collect_((function(aName){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($Thing())._new();
$recv($2)._name_(aName);
$3=$recv($2)._yourself();
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aName:aName},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newItems",{},$globals.Example5Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newItems\x0a\x09\x22Answers a newly created collection of items to be used as models in the ItemsController.\x22\x0a\x09\x0a\x09^ self potentialNames shuffled collect: [ :aName |  \x0a\x09\x09Thing new \x0a\x09\x09\x09name: aName;\x0a\x09\x09\x09yourself ]",
referencedClasses: ["Thing"],
//>>excludeEnd("ide");
messageSends: ["collect:", "shuffled", "potentialNames", "name:", "new", "yourself"]
}),
$globals.Example5Controller);

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
return $recv(window)._alert_("Is Helios open?");
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
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.Example5Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x0a\x09'#inspect-this' asJQuery \x0a\x09\x09on: #click\x0a\x09\x09do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "asJQuery", "inspect", "alert:"]
}),
$globals.Example5Controller);

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
$1=self._controllerAt_("details");
$recv($1)._model_(aThing);
$2=$recv($1)._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onDetails:",{aThing:aThing},$globals.Example5Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aThing"],
source: "onDetails: aThing\x0a\x0a\x09self basicAt: #hasDetails put: true.\x0a\x09\x0a\x09(self controllerAt: #details) model: aThing; refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "model:", "controllerAt:", "refresh"]
}),
$globals.Example5Controller);

$core.addMethod(
$core.method({
selector: "onRemove:",
protocol: 'reactions',
fn: function (aThing){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@model"])._things())._remove_ifAbsent_(aThing,(function(){
return nil;

}));
self._updateNotEmpty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onRemove:",{aThing:aThing},$globals.Example5Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aThing"],
source: "onRemove: aThing\x0a\x0a\x09model things remove: aThing ifAbsent: [ nil ].\x0a\x0a\x09self updateNotEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "things", "updateNotEmpty"]
}),
$globals.Example5Controller);

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
$globals.Example5Controller);

$core.addMethod(
$core.method({
selector: "removeThing",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@model"])._things();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["things"]=1;
//>>excludeEnd("ctx");
$recv($1)._remove_ifAbsent_($recv($recv(self["@model"])._things())._last(),(function(){
return nil;

}));
self._updateNotEmpty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeThing",{},$globals.Example5Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeThing\x0a\x0a\x09model things remove: model things last ifAbsent: [ nil ].\x0a\x09\x0a\x09self updateNotEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "things", "last", "updateNotEmpty"]
}),
$globals.Example5Controller);

$core.addMethod(
$core.method({
selector: "updateNotEmpty",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._basicAt_put_("notEmpty",$recv($recv(self["@model"])._things())._notEmpty());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateNotEmpty",{},$globals.Example5Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateNotEmpty\x0a\x0a\x09self \x0a\x09\x09basicAt: #notEmpty \x0a\x09\x09put: model things notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "notEmpty", "things"]
}),
$globals.Example5Controller);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
function $AppVisitor(){return $globals.AppVisitor||(typeof AppVisitor=="undefined"?nil:AppVisitor)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($AppVisitor())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.Example5Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ AppVisitor new",
referencedClasses: ["AppVisitor"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Example5Controller.klass);


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
return $recv($Example1Controller())._for_on_appendingTo_(self._model(),self,"#example1-wrapper"._asJQuery());
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
source: "example1\x0a\x0a\x09^ self ifAbsentAt: #example1 put: [\x0a\x09\x09Example1Controller \x0a\x09\x09\x09for: self model\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#example1-wrapper' asJQuery ]",
referencedClasses: ["Example1Controller"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "model", "asJQuery"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "example2",
protocol: 'accessing',
fn: function (){
var self=this;
function $Example2Controller(){return $globals.Example2Controller||(typeof Example2Controller=="undefined"?nil:Example2Controller)}
function $JSObjectProxy(){return $globals.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ifAbsentAt_put_("example2",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Example2Controller())._for_on_appendingTo_($recv($JSObjectProxy())._on_($globals.HashedCollection._newFromPairs_([])),self,"#example2-wrapper"._asJQuery());
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
source: "example2\x0a\x0a\x09^ self ifAbsentAt: #example2 put: [\x0a\x09\x09Example2Controller \x0a\x09\x09\x09for: (JSObjectProxy on: #{}) \x22It's a binding controller, so we send a plain js object as model\x22\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#example2-wrapper' asJQuery ]",
referencedClasses: ["Example2Controller", "JSObjectProxy"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "on:", "asJQuery"]
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
return $recv($Example3Controller())._for_on_appendingTo_(self._model(),self,"#example3-wrapper"._asJQuery());
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
source: "example3\x0a\x0a\x09^ self ifAbsentAt: #example3 put: [\x0a\x09\x09Example3Controller \x0a\x09\x09\x09for:self model\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#example3-wrapper' asJQuery ]",
referencedClasses: ["Example3Controller"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "model", "asJQuery"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "example4",
protocol: 'accessing',
fn: function (){
var self=this;
function $Example4Controller(){return $globals.Example4Controller||(typeof Example4Controller=="undefined"?nil:Example4Controller)}
function $JSObjectProxy(){return $globals.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ifAbsentAt_put_("example4",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Example4Controller())._for_on_appendingTo_($recv($JSObjectProxy())._on_($globals.HashedCollection._newFromPairs_([])),self,"#example4-wrapper"._asJQuery());
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
source: "example4\x0a\x0a\x09^ self ifAbsentAt: #example4 put: [\x0a\x09\x09Example4Controller \x0a\x09\x09\x09for: (JSObjectProxy on: #{}) \x22It's a binding controller, so we send a plain js object as model\x22\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#example4-wrapper' asJQuery ]",
referencedClasses: ["Example4Controller", "JSObjectProxy"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "on:", "asJQuery"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "example5",
protocol: 'accessing',
fn: function (){
var self=this;
function $Example5Controller(){return $globals.Example5Controller||(typeof Example5Controller=="undefined"?nil:Example5Controller)}
function $JSObjectProxy(){return $globals.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._ifAbsentAt_put_("example5",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Example5Controller())._for_on_appendingTo_($recv($JSObjectProxy())._on_($globals.HashedCollection._newFromPairs_([])),self,"#example5-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example5",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example5\x0a\x0a\x09^ self ifAbsentAt: #example5 put: [\x0a\x09\x09Example5Controller \x0a\x09\x09\x09for: (JSObjectProxy on: #{}) \x22It's a binding controller, so we send a plain js object as model\x22\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#example5-wrapper' asJQuery ]",
referencedClasses: ["Example5Controller", "JSObjectProxy"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "on:", "asJQuery"]
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
$globals.MainController.superclass.fn.prototype._initialize.apply($recv(self), []));
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
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView do: [ \x0a\x09\x09\x09self observeEvents ];\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "observeEvents", "yourself"]
}),
$globals.MainController);

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
return $recv(window)._alert_("Is Helios open?");
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
source: "observeEvents\x0a\x0a\x09(view asJQuery find: 'a#inspect-main') \x0a\x09\x09on: #click \x0a\x09\x09do: [ [ self inspect ] on: Error do: [ :x | window alert: 'Is Helios open?' ] ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "find:", "asJQuery", "inspect", "alert:"]
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
$recv(console)._log_("MainController>>reset");
self._hideAll();
self._showThen_((function(){
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
source: "reset\x0a\x09\x22Hides all subcontrollers and shows the welcome message\x22\x0a\x0a\x09console log: 'MainController>>reset'.\x0a\x0a\x09self hideAll.\x0a\x09\x0a\x09self showThen: [ '#welcome' asJQuery show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", "hideAll", "showThen:", "show", "asJQuery"]
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
$recv(console)._log_("showExample1");
self._showThen_((function(){
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
source: "showExample1\x0a\x0a\x09console log: 'showExample1'.\x0a\x09\x0a\x09self showThen: [\x0a\x09\x09self hideAll.\x0a\x09\x09self example1 show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", "showThen:", "hideAll", "show", "example1"]
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
$recv(console)._log_("showExample2");
self._showThen_((function(){
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
source: "showExample2\x0a\x0a\x09console log: 'showExample2'.\x0a\x0a\x09self showThen: [\x0a\x09\x09self hideAll.\x0a\x09\x09self example2 show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", "showThen:", "hideAll", "show", "example2"]
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
$recv(console)._log_("showExample3");
self._showThen_((function(){
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
source: "showExample3\x0a\x0a\x09console log: 'showExample3'.\x0a\x09\x0a\x09self showThen: [\x0a\x09\x09self hideAll.\x0a\x09\x09self example3 show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", "showThen:", "hideAll", "show", "example3"]
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
$recv(console)._log_("showExample4");
self._showThen_((function(){
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
source: "showExample4\x0a\x0a\x09console log: 'showExample4'.\x0a\x09\x0a\x09self showThen: [\x0a\x09\x09self hideAll.\x0a\x09\x09self example4 show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", "showThen:", "hideAll", "show", "example4"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "showExample5",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(console)._log_("showExample5");
self._showThen_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._hideAll();
return $recv(self._example5())._show();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showExample5",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showExample5\x0a\x0a\x09console log: 'showExample5'.\x0a\x09\x0a\x09self showThen: [\x0a\x09\x09self hideAll.\x0a\x09\x09self example5 show ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", "showThen:", "hideAll", "show", "example5"]
}),
$globals.MainController);



$core.addClass('ThingDetailsController', $globals.BindingController, [], 'App');


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
