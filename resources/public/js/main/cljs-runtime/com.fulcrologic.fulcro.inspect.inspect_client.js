goog.provide('com.fulcrologic.fulcro.inspect.inspect_client');
/**
 * @define {boolean}
 */
com.fulcrologic.fulcro.inspect.inspect_client.INSPECT = goog.define("com.fulcrologic.fulcro.inspect.inspect_client.INSPECT",false);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.run_picker !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.run_picker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.tools_app_STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.tools_app_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key = new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.send_ch !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((50000)));
}
com.fulcrologic.fulcro.inspect.inspect_client.post_message = (function com$fulcrologic$fulcro$inspect$inspect_client$post_message(type,data){
try{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.send_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,data], null));
}catch (e58607){var e = e58607;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,32,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot send to inspect. Channel closed."], null);
}),null)),null,-1976452536);
}});
/**
 * Returns true when env is a cljs macro &env
 */
com.fulcrologic.fulcro.inspect.inspect_client.cljs_QMARK_ = (function com$fulcrologic$fulcro$inspect$inspect_client$cljs_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
/**
 * Like get, but for js objects, and in CLJC. In clj, it is just `get`. In cljs it is
 *   `gobj/get`.
 */
com.fulcrologic.fulcro.inspect.inspect_client.isoget = (function com$fulcrologic$fulcro$inspect$inspect_client$isoget(var_args){
var G__58614 = arguments.length;
switch (G__58614) {
case 2:
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3(obj,k,null);
}));

(com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,default$){
var or__4212__auto__ = goog.object.get(obj,(function (){var G__58615 = k;
if((G__58615 == null)){
return null;
} else {
return cljs.core.name(G__58615);
}
})());
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.inspect.inspect_client.app_state = (function com$fulcrologic$fulcro$inspect$inspect_client$app_state(app__$1){
var G__58616 = app__$1;
var G__58616__$1 = (((G__58616 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__58616));
if((G__58616__$1 == null)){
return null;
} else {
return cljs.core.deref(G__58616__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom = (function com$fulcrologic$fulcro$inspect$inspect_client$runtime_atom(app__$1){
var G__58617 = app__$1;
if((G__58617 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__58617);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.state_atom = (function com$fulcrologic$fulcro$inspect$inspect_client$state_atom(app__$1){
var G__58622 = app__$1;
if((G__58622 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__58622);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.app_uuid = (function com$fulcrologic$fulcro$inspect$inspect_client$app_uuid(app__$1){
var G__58624 = app__$1;
var G__58624__$1 = (((G__58624 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__58624));
var G__58624__$2 = (((G__58624__$1 == null))?null:cljs.core.deref(G__58624__$1));
if((G__58624__$2 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__58624__$2,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.remotes = (function com$fulcrologic$fulcro$inspect$inspect_client$remotes(app__$1){
var G__58628 = com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1);
var G__58628__$1 = (((G__58628 == null))?null:cljs.core.deref(G__58628));
if((G__58628__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(G__58628__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.app_id = (function com$fulcrologic$fulcro$inspect$inspect_client$app_id(app__$1){
var G__58633 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
if((G__58633 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(G__58633);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.fulcro_app_id = (function com$fulcrologic$fulcro$inspect$inspect_client$fulcro_app_id(app__$1){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
});
com.fulcrologic.fulcro.inspect.inspect_client.get_component_name = (function com$fulcrologic$fulcro$inspect$inspect_client$get_component_name(component){
if(cljs.core.truth_(component)){
var G__58635 = com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
if((G__58635 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(G__58635);
}
} else {
return null;
}
});
com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$comp_transact_BANG_(app__$1,tx,options){
var tx_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"tx!","tx!",-1308106263));
return (tx_BANG_.cljs$core$IFn$_invoke$arity$3 ? tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,options) : tx_BANG_.call(null,app__$1,tx,options));
});
com.fulcrologic.fulcro.inspect.inspect_client.MAX_HISTORY_SIZE = (100);
/**
 * Current time in the recorded history of states
 */
com.fulcrologic.fulcro.inspect.inspect_client.current_history_id = (function com$fulcrologic$fulcro$inspect$inspect_client$current_history_id(app__$1){
var or__4212__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","time","com.fulcrologic.fulcro.inspect.inspect-client/time",-124222029).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1)));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
});
/**
 * Record a state change in this history. Returns the ID of the newly recorded entry.
 */
com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$record_history_entry_BANG_(app__$1,state){
var now = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1),(function (runtime){
var history = new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","history","com.fulcrologic.fulcro.inspect.inspect-client/history",1397701395).cljs$core$IFn$_invoke$arity$1(runtime);
var pruned_history = (((history == null))?cljs.core.PersistentVector.EMPTY:(((cljs.core.count(history) > com.fulcrologic.fulcro.inspect.inspect_client.MAX_HISTORY_SIZE))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(history,(1)):history
));
var new_history = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pruned_history,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),now,new cljs.core.Keyword(null,"value","value",305978217),state], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","time","com.fulcrologic.fulcro.inspect.inspect-client/time",-124222029),(now + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","history","com.fulcrologic.fulcro.inspect.inspect-client/history",1397701395),new_history], 0));
}));

return now;
});
com.fulcrologic.fulcro.inspect.inspect_client.get_history_entry = (function com$fulcrologic$fulcro$inspect$inspect_client$get_history_entry(app__$1,id){
var history = new cljs.core.Keyword("com.fulcrologic.fulcro.inspect.inspect-client","history","com.fulcrologic.fulcro.inspect.inspect-client/history",1397701395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1)));
var entry = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58642){
var map__58643 = p__58642;
var map__58643__$1 = cljs.core.__destructure_map(map__58643);
var entry_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,entry_id);
}),cljs.core.seq(history)));
return entry;
});
/**
 * Notify Inspect that the database changed
 */
com.fulcrologic.fulcro.inspect.inspect_client.db_changed_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$db_changed_BANG_(app__$1,old_state,new_state){
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
var state_id = com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_(app__$1,new_state);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","db-changed!","fulcro.inspect.client/db-changed!",1922305221),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","state-id","fulcro.inspect.client/state-id",-828161304),state_id]));
});
com.fulcrologic.fulcro.inspect.inspect_client.event_data = (function com$fulcrologic$fulcro$inspect$inspect_client$event_data(event){
var G__58645 = event;
var G__58645__$1 = (((G__58645 == null))?null:goog.object.getValueByKeys(G__58645,"data","fulcro-inspect-devtool-message"));
if((G__58645__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.inspect.transit.read(G__58645__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.start_send_message_loop = (function com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop(){
var c__53174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_58677){
var state_val_58678 = (state_58677[(1)]);
if((state_val_58678 === (1))){
var state_58677__$1 = state_58677;
var statearr_58684_58898 = state_58677__$1;
(statearr_58684_58898[(2)] = null);

(statearr_58684_58898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58678 === (2))){
var state_58677__$1 = state_58677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58677__$1,(4),com.fulcrologic.fulcro.inspect.inspect_client.send_ch);
} else {
if((state_val_58678 === (3))){
var inst_58675 = (state_58677[(2)]);
var state_58677__$1 = state_58677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58677__$1,inst_58675);
} else {
if((state_val_58678 === (4))){
var inst_58650 = (state_58677[(7)]);
var inst_58650__$1 = (state_58677[(2)]);
var state_58677__$1 = (function (){var statearr_58687 = state_58677;
(statearr_58687[(7)] = inst_58650__$1);

return statearr_58687;
})();
if(cljs.core.truth_(inst_58650__$1)){
var statearr_58688_58899 = state_58677__$1;
(statearr_58688_58899[(1)] = (5));

} else {
var statearr_58689_58906 = state_58677__$1;
(statearr_58689_58906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58678 === (5))){
var inst_58650 = (state_58677[(7)]);
var inst_58657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58650,(0),null);
var inst_58658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58650,(1),null);
var inst_58659 = [new cljs.core.Keyword(null,"fulcro-inspect-remote-message","fulcro-inspect-remote-message",1518065210)];
var inst_58661 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)];
var inst_58662 = (new Date());
var inst_58663 = [inst_58657,inst_58658,inst_58662];
var inst_58664 = cljs.core.PersistentHashMap.fromArrays(inst_58661,inst_58663);
var inst_58665 = com.fulcrologic.fulcro.inspect.transit.write(inst_58664);
var inst_58666 = [inst_58665];
var inst_58667 = cljs.core.PersistentHashMap.fromArrays(inst_58659,inst_58666);
var inst_58668 = cljs.core.clj__GT_js(inst_58667);
var inst_58669 = window.postMessage(inst_58668,"*");
var state_58677__$1 = (function (){var statearr_58690 = state_58677;
(statearr_58690[(8)] = inst_58669);

return statearr_58690;
})();
var statearr_58691_58907 = state_58677__$1;
(statearr_58691_58907[(2)] = null);

(statearr_58691_58907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58678 === (6))){
var state_58677__$1 = state_58677;
var statearr_58692_58908 = state_58677__$1;
(statearr_58692_58908[(2)] = null);

(statearr_58692_58908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58678 === (7))){
var inst_58673 = (state_58677[(2)]);
var state_58677__$1 = state_58677;
var statearr_58694_58909 = state_58677__$1;
(statearr_58694_58909[(2)] = inst_58673);

(statearr_58694_58909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__53101__auto__ = null;
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__53101__auto____0 = (function (){
var statearr_58695 = [null,null,null,null,null,null,null,null,null];
(statearr_58695[(0)] = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__53101__auto__);

(statearr_58695[(1)] = (1));

return statearr_58695;
});
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__53101__auto____1 = (function (state_58677){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_58677);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e58696){var ex__53104__auto__ = e58696;
var statearr_58697_58911 = state_58677;
(statearr_58697_58911[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_58677[(4)]))){
var statearr_58699_58912 = state_58677;
(statearr_58699_58912[(1)] = cljs.core.first((state_58677[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58913 = state_58677;
state_58677 = G__58913;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__53101__auto__ = function(state_58677){
switch(arguments.length){
case 0:
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__53101__auto____0.call(this);
case 1:
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__53101__auto____1.call(this,state_58677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__53101__auto____0;
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__53101__auto____1;
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_58700 = f__53175__auto__();
(statearr_58700[(6)] = c__53174__auto__);

return statearr_58700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));

return c__53174__auto__;
});
com.fulcrologic.fulcro.inspect.inspect_client.listen_local_messages = (function com$fulcrologic$fulcro$inspect$inspect_client$listen_local_messages(){
return window.addEventListener("message",(function (event){
if(cljs.core.truth_((function (){var and__4210__auto__ = (event.source === window);
if(and__4210__auto__){
return goog.object.getValueByKeys(event,"data","fulcro-inspect-devtool-message");
} else {
return and__4210__auto__;
}
})())){
var G__58707 = com.fulcrologic.fulcro.inspect.inspect_client.event_data(event);
return (com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1(G__58707) : com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.call(null,G__58707));
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = (event.source === window);
if(and__4210__auto__){
return goog.object.getValueByKeys(event,"data","fulcro-inspect-start-consume");
} else {
return and__4210__auto__;
}
})())){
return com.fulcrologic.fulcro.inspect.inspect_client.start_send_message_loop();
} else {
return null;
}
}
}),false);
});
com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$transact_inspector_BANG_(var_args){
var G__58711 = arguments.length;
switch (G__58711) {
case 1:
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tx){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
}));

(com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ref,tx){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","tx-ref","fulcro.inspect.client/tx-ref",-1370560773),ref,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
}));

(com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.inspect.inspect_client.dispose_app = (function com$fulcrologic$fulcro$inspect$inspect_client$dispose_app(app_uuid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_,cljs.core.dissoc,app_uuid);

return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","dispose-app","fulcro.inspect.client/dispose-app",-574872452),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid]));
});
com.fulcrologic.fulcro.inspect.inspect_client.set_active_app = (function com$fulcrologic$fulcro$inspect$inspect_client$set_active_app(app_uuid){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","set-active-app","fulcro.inspect.client/set-active-app",-2049837528),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid]));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_started_BANG_(app__$1,remote,tx_id,txn){
var start = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-start","fulcro.inspect.ui.network/request-start",-1415257884,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223),remote,new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),start,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),txn], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_finished_BANG_(app__$1,remote,tx_id,response){
var finished = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),response], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_failed_BANG_(app__$1,tx_id,error){
var finished = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909),error], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message = (function com$fulcrologic$fulcro$inspect$inspect_client$handle_devtool_message(p__58740){
var map__58745 = p__58740;
var map__58745__$1 = cljs.core.__destructure_map(map__58745);
var message = map__58745__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58745__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58745__$1,new cljs.core.Keyword(null,"data","data",-232669377));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.inspect.inspect-client",null,192,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Devtools Message received",message], null);
}),null)),null,283659655);

var G__58747 = type;
var G__58747__$1 = (((G__58747 instanceof cljs.core.Keyword))?G__58747.fqn:null);
switch (G__58747__$1) {
case "fulcro.inspect.client/request-page-apps":
var seq__58748 = cljs.core.seq(cljs.core.vals(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_)));
var chunk__58749 = null;
var count__58750 = (0);
var i__58751 = (0);
while(true){
if((i__58751 < count__58750)){
var app__$1 = chunk__58749.cljs$core$IIndexed$_nth$arity$2(null,i__58751);
var state_58934 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
var state_id_58935 = com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_(app__$1,state_58934);
var remote_names_58936 = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__58748,chunk__58749,count__58750,i__58751,state_58934,state_id_58935,remote_names_58936,app__$1,G__58747,G__58747__$1,map__58745,map__58745__$1,message,type,data){
return (function (p1__58734_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__58734_SHARP_);
});})(seq__58748,chunk__58749,count__58750,i__58751,state_58934,state_id_58935,remote_names_58936,app__$1,G__58747,G__58747__$1,map__58745,map__58745__$1,message,type,data))
,cljs.core.str),cljs.core.keys(remote_names_58936)),new cljs.core.Keyword("fulcro.inspect.client","initial-history-step","fulcro.inspect.client/initial-history-step",1169628321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),state_id_58935,new cljs.core.Keyword(null,"value","value",305978217),state_58934], null)]));


var G__58938 = seq__58748;
var G__58939 = chunk__58749;
var G__58940 = count__58750;
var G__58941 = (i__58751 + (1));
seq__58748 = G__58938;
chunk__58749 = G__58939;
count__58750 = G__58940;
i__58751 = G__58941;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58748);
if(temp__5753__auto__){
var seq__58748__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58748__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58748__$1);
var G__58943 = cljs.core.chunk_rest(seq__58748__$1);
var G__58944 = c__4638__auto__;
var G__58945 = cljs.core.count(c__4638__auto__);
var G__58946 = (0);
seq__58748 = G__58943;
chunk__58749 = G__58944;
count__58750 = G__58945;
i__58751 = G__58946;
continue;
} else {
var app__$1 = cljs.core.first(seq__58748__$1);
var state_58949 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
var state_id_58950 = com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_(app__$1,state_58949);
var remote_names_58951 = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__58748,chunk__58749,count__58750,i__58751,state_58949,state_id_58950,remote_names_58951,app__$1,seq__58748__$1,temp__5753__auto__,G__58747,G__58747__$1,map__58745,map__58745__$1,message,type,data){
return (function (p1__58734_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__58734_SHARP_);
});})(seq__58748,chunk__58749,count__58750,i__58751,state_58949,state_id_58950,remote_names_58951,app__$1,seq__58748__$1,temp__5753__auto__,G__58747,G__58747__$1,map__58745,map__58745__$1,message,type,data))
,cljs.core.str),cljs.core.keys(remote_names_58951)),new cljs.core.Keyword("fulcro.inspect.client","initial-history-step","fulcro.inspect.client/initial-history-step",1169628321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),state_id_58950,new cljs.core.Keyword(null,"value","value",305978217),state_58949], null)]));


var G__58956 = cljs.core.next(seq__58748__$1);
var G__58957 = null;
var G__58958 = (0);
var G__58959 = (0);
seq__58748 = G__58956;
chunk__58749 = G__58957;
count__58750 = G__58958;
i__58751 = G__58959;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "fulcro.inspect.client/reset-app-state":
var map__58763 = data;
var map__58763__$1 = cljs.core.__destructure_map(map__58763);
var target_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58763__$1,new cljs.core.Keyword(null,"target-state","target-state",-682429993));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58763__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5751__auto__)){
var app__$1 = temp__5751__auto__;
var render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
if(cljs.core.truth_(target_state)){
var target_state_58962__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target_state,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid);
cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.state_atom(app__$1),target_state_58962__$1);
} else {
}

var G__58764 = app__$1;
var G__58765 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__58764,G__58765) : render_BANG_.call(null,G__58764,G__58765));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.inspect-client",null,218,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reset app on invalid uuid",app_uuid], null);
}),null)),null,-143810467);
}

break;
case "fulcro.inspect.client/fetch-history-step":
var map__58766 = data;
var map__58766__$1 = cljs.core.__destructure_map(map__58766);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58766__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var based_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58766__$1,new cljs.core.Keyword(null,"based-on","based-on",1217703581));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58766__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__49185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(b2__49185__auto__)){
var app__$1 = b2__49185__auto__;
var b2__49185__auto____$1 = com.fulcrologic.fulcro.inspect.inspect_client.get_history_entry(app__$1,id);
if(cljs.core.truth_(b2__49185__auto____$1)){
var map__58770 = b2__49185__auto____$1;
var map__58770__$1 = cljs.core.__destructure_map(map__58770);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58770__$1,new cljs.core.Keyword(null,"value","value",305978217));
var prior_state = com.fulcrologic.fulcro.inspect.inspect_client.get_history_entry(app__$1,based_on);
var diff = (cljs.core.truth_(prior_state)?com.fulcrologic.fulcro.inspect.diff.diff(prior_state,value):null);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","history-entry","fulcro.inspect.client/history-entry",1162276680),(function (){var G__58771 = cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.core","state-id","fulcro.inspect.core/state-id",-89620020),id]);
var G__58771__$1 = (cljs.core.truth_(diff)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__58771,new cljs.core.Keyword("fulcro.inspect.client","diff","fulcro.inspect.client/diff",1522519471),diff,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"based-on","based-on",1217703581),based_on], 0)):G__58771);
if(cljs.core.not(diff)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58771__$1,new cljs.core.Keyword("fulcro.inspect.client","state","fulcro.inspect.client/state",-1243075171),value);
} else {
return G__58771__$1;
}
})());
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/transact":
var map__58776 = data;
var map__58776__$1 = cljs.core.__destructure_map(map__58776);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58776__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var tx_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58776__$1,new cljs.core.Keyword(null,"tx-ref","tx-ref",-216104949));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58776__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5751__auto__)){
var app__$1 = temp__5751__auto__;
if(cljs.core.truth_(tx_ref)){
return com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_(app__$1,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),tx_ref], null));
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,243,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transact on invalid uuid",app_uuid], null);
}),null)),null,903742646);
}

break;
case "fulcro.inspect.client/pick-element":
if(cljs.core.truth_(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.run_picker))){
var fexpr__58781 = cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.run_picker);
return (fexpr__58781.cljs$core$IFn$_invoke$arity$1 ? fexpr__58781.cljs$core$IFn$_invoke$arity$1(data) : fexpr__58781.call(null,data));
} else {
try{return alert("Element picker not installed. Add it to your preload.");
}catch (e58783){var _e = e58783;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,251,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Element picker not installed in app. You must add it to you preloads."], null);
}),null)),null,583866889);
}}

break;
case "fulcro.inspect.client/show-dom-preview":
var b2__49185__auto__ = data;
if(cljs.core.truth_(b2__49185__auto__)){
var map__58785 = b2__49185__auto__;
var map__58785__$1 = cljs.core.__destructure_map(map__58785);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58785__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__49185__auto____$1 = (function (){var G__58786 = cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_);
if((G__58786 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__58786,app_uuid);
}
})();
if(cljs.core.truth_(b2__49185__auto____$1)){
var app__$1 = b2__49185__auto____$1;
var b2__49185__auto____$2 = com.fulcrologic.fulcro.inspect.inspect_client.get_history_entry(app__$1,new cljs.core.Keyword("fulcro.inspect.client","state-id","fulcro.inspect.client/state-id",-828161304).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(b2__49185__auto____$2)){
var historical_state = b2__49185__auto____$2;
var b2__49185__auto____$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(historical_state));
if(cljs.core.truth_(b2__49185__auto____$3)){
var historical_app = b2__49185__auto____$3;
var b2__49185__auto____$4 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(b2__49185__auto____$4)){
var render_BANG_ = b2__49185__auto____$4;
var G__58787 = historical_app;
var G__58788 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__58787,G__58788) : render_BANG_.call(null,G__58787,G__58788));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,261,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
}),null)),null,-462576824);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,261,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
}),null)),null,-838567411);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,261,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
}),null)),null,-1784071382);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,261,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
}),null)),null,313249704);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,261,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
}),null)),null,-1473034859);
}

break;
case "fulcro.inspect.client/hide-dom-preview":
var b2__49185__auto__ = data;
if(cljs.core.truth_(b2__49185__auto__)){
var map__58797 = b2__49185__auto__;
var map__58797__$1 = cljs.core.__destructure_map(map__58797);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58797__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__49185__auto____$1 = (function (){var G__58798 = cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_);
if((G__58798 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__58798,app_uuid);
}
})();
if(cljs.core.truth_(b2__49185__auto____$1)){
var app__$1 = b2__49185__auto____$1;
var b2__49185__auto____$2 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(b2__49185__auto____$2)){
var render_BANG_ = b2__49185__auto____$2;
var G__58799 = app__$1;
var G__58800 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__58799,G__58800) : render_BANG_.call(null,G__58799,G__58800));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/network-request":
var map__58801 = data;
var map__58801__$1 = cljs.core.__destructure_map(map__58801);
var remote_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58801__$1,new cljs.core.Keyword("fulcro.inspect.client","remote","fulcro.inspect.client/remote",-306964848));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58801__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58801__$1,new cljs.core.Keyword(null,"mutation","mutation",-285823378));
var msg_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58801__$1,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58801__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__49185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(b2__49185__auto__)){
var app__$1 = b2__49185__auto__;
var b2__49185__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__49185__auto____$1)){
var remote = b2__49185__auto____$1;
var b2__49185__auto____$2 = new cljs.core.Keyword(null,"transmit!","transmit!",-107149039).cljs$core$IFn$_invoke$arity$1(remote);
if(cljs.core.truth_(b2__49185__auto____$2)){
var transmit_BANG_ = b2__49185__auto____$2;
var b2__49185__auto____$3 = edn_query_language.core.query__GT_ast((function (){var or__4212__auto__ = query;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return mutation;
}
})());
if(cljs.core.truth_(b2__49185__auto____$3)){
var ast = b2__49185__auto____$3;
var b2__49185__auto____$4 = cljs.core.random_uuid();
if(cljs.core.truth_(b2__49185__auto____$4)){
var tx_id = b2__49185__auto____$4;
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,tx_id,(function (){var or__4212__auto__ = query;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return mutation;
}
})());

var G__58806 = remote;
var G__58807 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),tx_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),(0),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),cljs.core.identity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__58808){
var map__58809 = p__58808;
var map__58809__$1 = cljs.core.__destructure_map(map__58809);
var result = map__58809__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58809__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var error_QMARK__59011 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((error_QMARK__59011.cljs$core$IFn$_invoke$arity$1 ? error_QMARK__59011.cljs$core$IFn$_invoke$arity$1(result) : error_QMARK__59011.call(null,result)))){
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,tx_id,result);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,tx_id,body);
}

return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","message-response","fulcro.inspect.client/message-response",587955053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998),msg_id,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-response","fulcro.inspect.ui-parser/msg-response",1721295840),body], null));
})], null);
return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(G__58806,G__58807) : transmit_BANG_.call(null,G__58806,G__58807));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/console-log":
var map__58814 = data;
var map__58814__$1 = cljs.core.__destructure_map(map__58814);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var log_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"log-js","log-js",-1565471667));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(log)){
return console.log(log);
} else {
if(cljs.core.truth_(log_js)){
return console.log(cljs.core.clj__GT_js(log_js));
} else {
if(cljs.core.truth_(warn)){
return console.warn(warn);
} else {
if(cljs.core.truth_(error)){
return console.error(error);
} else {
return null;
}
}
}
}

break;
case "fulcro.inspect.client/check-client-version":
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","client-version","fulcro.inspect.client/client-version",728119531),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),"3.0.0"], null));

break;
default:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.inspect.inspect-client",null,312,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown message",type], null);
}),null)),null,-1440244985);

}
});
com.fulcrologic.fulcro.inspect.inspect_client.install = (function com$fulcrologic$fulcro$inspect$inspect_client$install(_){
document.documentElement.setAttribute("__fulcro-inspect-remote-installed__",true);

if(cljs.core.truth_(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_))){
return null;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.inspect-client",null,321,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Installing Fulcro 3.x Inspect",cljs.core.PersistentArrayMap.EMPTY], null);
}),null)),null,2082867624);

cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_,true);

return com.fulcrologic.fulcro.inspect.inspect_client.listen_local_messages();
}
});
/**
 * Register the application with Inspect, if it is available.
 */
com.fulcrologic.fulcro.inspect.inspect_client.app_started_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$app_started_BANG_(app__$1){
if(cljs.core.truth_((function (){var and__4210__auto__ = (function (){var or__4212__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4210__auto__;
}
})())){
var networking = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
var state_STAR_ = com.fulcrologic.fulcro.inspect.inspect_client.state_atom(app__$1);
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.fulcro_app_id(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_,cljs.core.assoc,app_uuid,app__$1);

com.fulcrologic.fulcro.inspect.inspect_client.record_history_entry_BANG_(app__$1,cljs.core.deref(state_STAR_));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid);

com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__58829_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__58829_SHARP_);
}),cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(state_STAR_)]));

return cljs.core.add_watch(state_STAR_,app_uuid,(function (p1__58832_SHARP_,p2__58833_SHARP_,p3__58830_SHARP_,p4__58831_SHARP_){
return com.fulcrologic.fulcro.inspect.inspect_client.db_changed_BANG_(app__$1,p3__58830_SHARP_,p4__58831_SHARP_);
}));
} else {
return null;
}
});
/**
 * Notify inspect that a transaction finished.
 * 
 * app - The app
 * env - The mutation env that completed.
 */
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$optimistic_action_finished_BANG_(app__$1,p__58849,p__58850){
var map__58851 = p__58849;
var map__58851__$1 = cljs.core.__destructure_map(map__58851);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58851__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58851__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58851__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58851__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var map__58852 = p__58850;
var map__58852__$1 = cljs.core.__destructure_map(map__58852);
var tx_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58852__$1,new cljs.core.Keyword(null,"tx-id","tx-id",638275288));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58852__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var state_id_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58852__$1,new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055));
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58852__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58852__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var component_name = com.fulcrologic.fulcro.inspect.inspect_client.get_component_name(component);
var current_id = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var tx__$1 = (function (){var G__58857 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),tx_id,new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),(new Date()),new cljs.core.Keyword("fulcro.history","tx","fulcro.history/tx",1485693993),tx,new cljs.core.Keyword("fulcro.history","db-before-id","fulcro.history/db-before-id",1439381422),state_id_before,new cljs.core.Keyword("fulcro.history","db-after-id","fulcro.history/db-after-id",1928976932),current_id,new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options], null);
var G__58857__$1 = (cljs.core.truth_(component_name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58857,new cljs.core.Keyword(null,"component","component",1555936782),component_name):G__58857);
if(cljs.core.truth_(ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58857__$1,new cljs.core.Keyword(null,"ident-ref","ident-ref",663643478),ref);
} else {
return G__58857__$1;
}
})();
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","new-client-transaction","fulcro.inspect.client/new-client-transaction",-1086637148),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx__$1]));
});

//# sourceMappingURL=com.fulcrologic.fulcro.inspect.inspect_client.js.map
