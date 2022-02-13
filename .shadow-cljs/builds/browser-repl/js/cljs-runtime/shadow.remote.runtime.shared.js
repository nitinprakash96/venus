goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__49816,res){
var map__49817 = p__49816;
var map__49817__$1 = cljs.core.__destructure_map(map__49817);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__49818 = res;
var G__49818__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49818,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__49818);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49818__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__49818__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__49820 = arguments.length;
switch (G__49820) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__49821,msg,handlers,timeout_after_ms){
var map__49822 = p__49821;
var map__49822__$1 = cljs.core.__destructure_map(map__49822);
var runtime = map__49822__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49822__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___50086 = arguments.length;
var i__4819__auto___50087 = (0);
while(true){
if((i__4819__auto___50087 < len__4818__auto___50086)){
args__4824__auto__.push((arguments[i__4819__auto___50087]));

var G__50088 = (i__4819__auto___50087 + (1));
i__4819__auto___50087 = G__50088;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__49826,ev,args){
var map__49827 = p__49826;
var map__49827__$1 = cljs.core.__destructure_map(map__49827);
var runtime = map__49827__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49827__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__49828 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__49831 = null;
var count__49832 = (0);
var i__49833 = (0);
while(true){
if((i__49833 < count__49832)){
var ext = chunk__49831.cljs$core$IIndexed$_nth$arity$2(null,i__49833);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__50095 = seq__49828;
var G__50096 = chunk__49831;
var G__50097 = count__49832;
var G__50098 = (i__49833 + (1));
seq__49828 = G__50095;
chunk__49831 = G__50096;
count__49832 = G__50097;
i__49833 = G__50098;
continue;
} else {
var G__50100 = seq__49828;
var G__50101 = chunk__49831;
var G__50102 = count__49832;
var G__50103 = (i__49833 + (1));
seq__49828 = G__50100;
chunk__49831 = G__50101;
count__49832 = G__50102;
i__49833 = G__50103;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49828);
if(temp__5753__auto__){
var seq__49828__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49828__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49828__$1);
var G__50104 = cljs.core.chunk_rest(seq__49828__$1);
var G__50105 = c__4638__auto__;
var G__50106 = cljs.core.count(c__4638__auto__);
var G__50107 = (0);
seq__49828 = G__50104;
chunk__49831 = G__50105;
count__49832 = G__50106;
i__49833 = G__50107;
continue;
} else {
var ext = cljs.core.first(seq__49828__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__50108 = cljs.core.next(seq__49828__$1);
var G__50109 = null;
var G__50110 = (0);
var G__50111 = (0);
seq__49828 = G__50108;
chunk__49831 = G__50109;
count__49832 = G__50110;
i__49833 = G__50111;
continue;
} else {
var G__50112 = cljs.core.next(seq__49828__$1);
var G__50113 = null;
var G__50114 = (0);
var G__50115 = (0);
seq__49828 = G__50112;
chunk__49831 = G__50113;
count__49832 = G__50114;
i__49833 = G__50115;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq49823){
var G__49824 = cljs.core.first(seq49823);
var seq49823__$1 = cljs.core.next(seq49823);
var G__49825 = cljs.core.first(seq49823__$1);
var seq49823__$2 = cljs.core.next(seq49823__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49824,G__49825,seq49823__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__49837,p__49838){
var map__49839 = p__49837;
var map__49839__$1 = cljs.core.__destructure_map(map__49839);
var runtime = map__49839__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49839__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__49841 = p__49838;
var map__49841__$1 = cljs.core.__destructure_map(map__49841);
var msg = map__49841__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49841__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__49843 = cljs.core.deref(state_ref);
var map__49843__$1 = cljs.core.__destructure_map(map__49843);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49843__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49843__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__49846){
var map__49848 = p__49846;
var map__49848__$1 = cljs.core.__destructure_map(map__49848);
var runtime = map__49848__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49848__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__49859,msg){
var map__49861 = p__49859;
var map__49861__$1 = cljs.core.__destructure_map(map__49861);
var runtime = map__49861__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__49880,key,p__49881){
var map__49884 = p__49880;
var map__49884__$1 = cljs.core.__destructure_map(map__49884);
var state = map__49884__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49884__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__49886 = p__49881;
var map__49886__$1 = cljs.core.__destructure_map(map__49886);
var spec = map__49886__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49886__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__49906,key,spec){
var map__49909 = p__49906;
var map__49909__$1 = cljs.core.__destructure_map(map__49909);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49909__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__49926_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__49926_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__49928_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__49928_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__49929_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__49929_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__49931_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__49931_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__49932_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__49932_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__49968,key){
var map__49969 = p__49968;
var map__49969__$1 = cljs.core.__destructure_map(map__49969);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49969__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__49978,msg){
var map__49979 = p__49978;
var map__49979__$1 = cljs.core.__destructure_map(map__49979);
var runtime = map__49979__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49979__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__50005,p__50006){
var map__50007 = p__50005;
var map__50007__$1 = cljs.core.__destructure_map(map__50007);
var runtime = map__50007__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50007__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__50008 = p__50006;
var map__50008__$1 = cljs.core.__destructure_map(map__50008);
var msg = map__50008__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50008__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50008__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__50035 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__50040 = null;
var count__50041 = (0);
var i__50042 = (0);
while(true){
if((i__50042 < count__50041)){
var map__50072 = chunk__50040.cljs$core$IIndexed$_nth$arity$2(null,i__50042);
var map__50072__$1 = cljs.core.__destructure_map(map__50072);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50072__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__50125 = seq__50035;
var G__50126 = chunk__50040;
var G__50127 = count__50041;
var G__50128 = (i__50042 + (1));
seq__50035 = G__50125;
chunk__50040 = G__50126;
count__50041 = G__50127;
i__50042 = G__50128;
continue;
} else {
var G__50129 = seq__50035;
var G__50130 = chunk__50040;
var G__50131 = count__50041;
var G__50132 = (i__50042 + (1));
seq__50035 = G__50129;
chunk__50040 = G__50130;
count__50041 = G__50131;
i__50042 = G__50132;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50035);
if(temp__5753__auto__){
var seq__50035__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50035__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50035__$1);
var G__50133 = cljs.core.chunk_rest(seq__50035__$1);
var G__50134 = c__4638__auto__;
var G__50135 = cljs.core.count(c__4638__auto__);
var G__50136 = (0);
seq__50035 = G__50133;
chunk__50040 = G__50134;
count__50041 = G__50135;
i__50042 = G__50136;
continue;
} else {
var map__50074 = cljs.core.first(seq__50035__$1);
var map__50074__$1 = cljs.core.__destructure_map(map__50074);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50074__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__50137 = cljs.core.next(seq__50035__$1);
var G__50138 = null;
var G__50139 = (0);
var G__50140 = (0);
seq__50035 = G__50137;
chunk__50040 = G__50138;
count__50041 = G__50139;
i__50042 = G__50140;
continue;
} else {
var G__50141 = cljs.core.next(seq__50035__$1);
var G__50142 = null;
var G__50143 = (0);
var G__50144 = (0);
seq__50035 = G__50141;
chunk__50040 = G__50142;
count__50041 = G__50143;
i__50042 = G__50144;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map