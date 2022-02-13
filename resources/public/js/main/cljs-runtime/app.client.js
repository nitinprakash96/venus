goog.provide('app.client');
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}

var options__48287__auto___51390 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("car","model","car/model",331054627)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("car","id","car/id",-1388434848).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("car","model","car/model",331054627),new cljs.core.Keyword("param","model","param/model",275060462)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Car(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__51352 = com.fulcrologic.fulcro.components.props(this$);
var map__51352__$1 = cljs.core.__destructure_map(map__51352);
var props = map__51352__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51352__$1,new cljs.core.Keyword("car","id","car/id",-1388434848));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51352__$1,new cljs.core.Keyword("car","model","car/model",331054627));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Model: ",com.fulcrologic.fulcro.components.force_children(model)]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Car !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Car = (function app$client$Car(props__48288__auto__){
var this__48289__auto__ = this;
var temp__5751__auto___51391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48287__auto___51390,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___51391)){
var init_state__48290__auto___51392 = temp__5751__auto___51391;
(this__48289__auto__.state = (function (){var obj51354 = ({"fulcro$state":(function (){var G__51355 = this__48289__auto__;
var G__51356 = goog.object.get(props__48288__auto__,"fulcro$value");
return (init_state__48290__auto___51392.cljs$core$IFn$_invoke$arity$2 ? init_state__48290__auto___51392.cljs$core$IFn$_invoke$arity$2(G__51355,G__51356) : init_state__48290__auto___51392.call(null,G__51355,G__51356));
})()});
return obj51354;
})());
} else {
(this__48289__auto__.state = (function (){var obj51358 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj51358;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Car,new cljs.core.Keyword("app.client","Car","app.client/Car",-1786113179),options__48287__auto___51390);
app.client.ui_car = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Car,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("car","id","car/id",-1388434848)], null));
/**
 * 
 */
app.client.make_older = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client","make-older","app.client/make-older",-783907466,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client","make-older","app.client/make-older",-783907466,null),(function (fulcro_mutation_env_symbol){
var map__51359 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__51359__$1 = cljs.core.__destructure_map(map__51359);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51359__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function app$client$action(p__51360){
var map__51361 = p__51360;
var map__51361__$1 = cljs.core.__destructure_map(map__51361);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51361__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__51362_51393 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51363_51394 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51363_51394);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id,new cljs.core.Keyword("person","age","person/age",387881455)], null),cljs.core.inc);
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51362_51393);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__51364 = com.fulcrologic.fulcro.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51365 = true;
(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51365);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51364);
}})], null);
}));

var options__48287__auto___51395 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","cars","person/cars",1835683721),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Car)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("param","name","param/name",1598843068),new cljs.core.Keyword("person","age","person/age",387881455),(25),new cljs.core.Keyword("person","cars","person/cars",1835683721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(40),new cljs.core.Keyword(null,"model","model",331153215),"sypder"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(41),new cljs.core.Keyword(null,"model","model",331153215),"phantom"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(42),new cljs.core.Keyword(null,"model","model",331153215),"fiesta"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","cars","person/cars",1835683721),app.client.Car], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__51366 = com.fulcrologic.fulcro.components.props(this$);
var map__51366__$1 = cljs.core.__destructure_map(map__51366);
var props = map__51366__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51366__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51366__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51366__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var cars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51366__$1,new cljs.core.Keyword("person","cars","person/cars",1835683721));
var onClick = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"onClick","onClick",-1991238530));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClick], null),"Name: "], null),null),name], null),new cljs.core.Keyword(null,".field",".field",954681856)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),"Age: "]),age], null),new cljs.core.Keyword(null,".field",".field",954681856)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51367 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","id","person/id",-392409377),id], null);
return (app.client.make_older.cljs$core$IFn$_invoke$arity$1 ? app.client.make_older.cljs$core$IFn$_invoke$arity$1(G__51367) : app.client.make_older.call(null,G__51367));
})()], null));
})], null),"Make older"], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Cars"]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["ul",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_car,cars))])], null),new cljs.core.Keyword(null,".ui.form",".ui.form",158215099))], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Person !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Person = (function app$client$Person(props__48288__auto__){
var this__48289__auto__ = this;
var temp__5751__auto___51396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48287__auto___51395,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___51396)){
var init_state__48290__auto___51397 = temp__5751__auto___51396;
(this__48289__auto__.state = (function (){var obj51369 = ({"fulcro$state":(function (){var G__51370 = this__48289__auto__;
var G__51371 = goog.object.get(props__48288__auto__,"fulcro$value");
return (init_state__48290__auto___51397.cljs$core$IFn$_invoke$arity$2 ? init_state__48290__auto___51397.cljs$core$IFn$_invoke$arity$2(G__51370,G__51371) : init_state__48290__auto___51397.call(null,G__51370,G__51371));
})()});
return obj51369;
})());
} else {
(this__48289__auto__.state = (function (){var obj51373 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj51373;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Person,new cljs.core.Keyword("app.client","Person","app.client/Person",1752576162),options__48287__auto___51395);
app.client.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__48287__auto___51398 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Person)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(this$,p__51374,_,___$1){
var map__51375 = p__51374;
var map__51375__$1 = cljs.core.__destructure_map(map__51375);
var props = map__51375__$1;
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51375__$1,new cljs.core.Keyword("person-list","people","person-list/people",841524750));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("app.client","person-list","app.client/person-list",-987000171)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Nitin"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Brandon"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),app.client.Person], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__51376 = com.fulcrologic.fulcro.components.props(this$);
var map__51376__$1 = cljs.core.__destructure_map(map__51376);
var props = map__51376__$1;
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51376__$1,new cljs.core.Keyword("person-list","people","person-list/people",841524750));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"people"]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_person,people)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.PersonList = (function app$client$PersonList(props__48288__auto__){
var this__48289__auto__ = this;
var temp__5751__auto___51399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48287__auto___51398,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___51399)){
var init_state__48290__auto___51400 = temp__5751__auto___51399;
(this__48289__auto__.state = (function (){var obj51378 = ({"fulcro$state":(function (){var G__51379 = this__48289__auto__;
var G__51380 = goog.object.get(props__48288__auto__,"fulcro$value");
return (init_state__48290__auto___51400.cljs$core$IFn$_invoke$arity$2 ? init_state__48290__auto___51400.cljs$core$IFn$_invoke$arity$2(G__51379,G__51380) : init_state__48290__auto___51400.call(null,G__51379,G__51380));
})()});
return obj51378;
})());
} else {
(this__48289__auto__.state = (function (){var obj51382 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj51382;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.PersonList,new cljs.core.Keyword("app.client","PersonList","app.client/PersonList",746982741),options__48287__auto___51398);
app.client.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.PersonList);

var options__48287__auto___51401 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","people","root/people",1439769370),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.PersonList)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","people","root/people",1439769370),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","people","root/people",1439769370),app.client.PersonList], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Sample(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__51383 = com.fulcrologic.fulcro.components.props(this$);
var map__51383__$1 = cljs.core.__destructure_map(map__51383);
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51383__$1,new cljs.core.Keyword("root","people","root/people",1439769370));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(people)?(app.client.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person_list.cljs$core$IFn$_invoke$arity$1(people) : app.client.ui_person_list.call(null,people)):null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Sample !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Sample = (function app$client$Sample(props__48288__auto__){
var this__48289__auto__ = this;
var temp__5751__auto___51402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48287__auto___51401,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___51402)){
var init_state__48290__auto___51403 = temp__5751__auto___51402;
(this__48289__auto__.state = (function (){var obj51385 = ({"fulcro$state":(function (){var G__51386 = this__48289__auto__;
var G__51387 = goog.object.get(props__48288__auto__,"fulcro$value");
return (init_state__48290__auto___51403.cljs$core$IFn$_invoke$arity$2 ? init_state__48290__auto___51403.cljs$core$IFn$_invoke$arity$2(G__51386,G__51387) : init_state__48290__auto___51403.call(null,G__51386,G__51387));
})()});
return obj51385;
})());
} else {
(this__48289__auto__.state = (function (){var obj51389 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj51389;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Sample,new cljs.core.Keyword("app.client","Sample","app.client/Sample",-1058902991),options__48287__auto___51401);
app.client.init = (function app$client$init(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Sample,"app");

return console.log("Loaded");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
