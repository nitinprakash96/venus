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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__58080,res){
var map__58081 = p__58080;
var map__58081__$1 = cljs.core.__destructure_map(map__58081);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58081__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58081__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__58082 = res;
var G__58082__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58082,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__58082);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58082__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__58082__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__58084 = arguments.length;
switch (G__58084) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__58085,msg,handlers,timeout_after_ms){
var map__58086 = p__58085;
var map__58086__$1 = cljs.core.__destructure_map(map__58086);
var runtime = map__58086__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58086__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___58255 = arguments.length;
var i__4819__auto___58256 = (0);
while(true){
if((i__4819__auto___58256 < len__4818__auto___58255)){
args__4824__auto__.push((arguments[i__4819__auto___58256]));

var G__58257 = (i__4819__auto___58256 + (1));
i__4819__auto___58256 = G__58257;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__58093,ev,args){
var map__58094 = p__58093;
var map__58094__$1 = cljs.core.__destructure_map(map__58094);
var runtime = map__58094__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__58095 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__58098 = null;
var count__58099 = (0);
var i__58100 = (0);
while(true){
if((i__58100 < count__58099)){
var ext = chunk__58098.cljs$core$IIndexed$_nth$arity$2(null,i__58100);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__58263 = seq__58095;
var G__58264 = chunk__58098;
var G__58265 = count__58099;
var G__58266 = (i__58100 + (1));
seq__58095 = G__58263;
chunk__58098 = G__58264;
count__58099 = G__58265;
i__58100 = G__58266;
continue;
} else {
var G__58267 = seq__58095;
var G__58269 = chunk__58098;
var G__58270 = count__58099;
var G__58271 = (i__58100 + (1));
seq__58095 = G__58267;
chunk__58098 = G__58269;
count__58099 = G__58270;
i__58100 = G__58271;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58095);
if(temp__5753__auto__){
var seq__58095__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58095__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58095__$1);
var G__58276 = cljs.core.chunk_rest(seq__58095__$1);
var G__58277 = c__4638__auto__;
var G__58278 = cljs.core.count(c__4638__auto__);
var G__58279 = (0);
seq__58095 = G__58276;
chunk__58098 = G__58277;
count__58099 = G__58278;
i__58100 = G__58279;
continue;
} else {
var ext = cljs.core.first(seq__58095__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__58280 = cljs.core.next(seq__58095__$1);
var G__58281 = null;
var G__58282 = (0);
var G__58283 = (0);
seq__58095 = G__58280;
chunk__58098 = G__58281;
count__58099 = G__58282;
i__58100 = G__58283;
continue;
} else {
var G__58284 = cljs.core.next(seq__58095__$1);
var G__58285 = null;
var G__58286 = (0);
var G__58287 = (0);
seq__58095 = G__58284;
chunk__58098 = G__58285;
count__58099 = G__58286;
i__58100 = G__58287;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq58088){
var G__58089 = cljs.core.first(seq58088);
var seq58088__$1 = cljs.core.next(seq58088);
var G__58090 = cljs.core.first(seq58088__$1);
var seq58088__$2 = cljs.core.next(seq58088__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58089,G__58090,seq58088__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__58119,p__58120){
var map__58121 = p__58119;
var map__58121__$1 = cljs.core.__destructure_map(map__58121);
var runtime = map__58121__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58121__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__58126 = p__58120;
var map__58126__$1 = cljs.core.__destructure_map(map__58126);
var msg = map__58126__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__58130 = cljs.core.deref(state_ref);
var map__58130__$1 = cljs.core.__destructure_map(map__58130);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58130__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__58138){
var map__58140 = p__58138;
var map__58140__$1 = cljs.core.__destructure_map(map__58140);
var runtime = map__58140__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58140__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__58145,msg){
var map__58146 = p__58145;
var map__58146__$1 = cljs.core.__destructure_map(map__58146);
var runtime = map__58146__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58146__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__58156,key,p__58157){
var map__58158 = p__58156;
var map__58158__$1 = cljs.core.__destructure_map(map__58158);
var state = map__58158__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58158__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__58159 = p__58157;
var map__58159__$1 = cljs.core.__destructure_map(map__58159);
var spec = map__58159__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58159__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__58160,key,spec){
var map__58161 = p__58160;
var map__58161__$1 = cljs.core.__destructure_map(map__58161);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58161__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__58162_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__58162_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__58163_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__58163_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__58164_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__58164_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__58165_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__58165_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__58166_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__58166_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__58179,key){
var map__58184 = p__58179;
var map__58184__$1 = cljs.core.__destructure_map(map__58184);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__58189,msg){
var map__58190 = p__58189;
var map__58190__$1 = cljs.core.__destructure_map(map__58190);
var runtime = map__58190__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__58200,p__58201){
var map__58202 = p__58200;
var map__58202__$1 = cljs.core.__destructure_map(map__58202);
var runtime = map__58202__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58202__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__58203 = p__58201;
var map__58203__$1 = cljs.core.__destructure_map(map__58203);
var msg = map__58203__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__58211 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__58213 = null;
var count__58214 = (0);
var i__58215 = (0);
while(true){
if((i__58215 < count__58214)){
var map__58223 = chunk__58213.cljs$core$IIndexed$_nth$arity$2(null,i__58215);
var map__58223__$1 = cljs.core.__destructure_map(map__58223);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__58324 = seq__58211;
var G__58325 = chunk__58213;
var G__58326 = count__58214;
var G__58327 = (i__58215 + (1));
seq__58211 = G__58324;
chunk__58213 = G__58325;
count__58214 = G__58326;
i__58215 = G__58327;
continue;
} else {
var G__58328 = seq__58211;
var G__58329 = chunk__58213;
var G__58330 = count__58214;
var G__58331 = (i__58215 + (1));
seq__58211 = G__58328;
chunk__58213 = G__58329;
count__58214 = G__58330;
i__58215 = G__58331;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58211);
if(temp__5753__auto__){
var seq__58211__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58211__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58211__$1);
var G__58332 = cljs.core.chunk_rest(seq__58211__$1);
var G__58333 = c__4638__auto__;
var G__58334 = cljs.core.count(c__4638__auto__);
var G__58335 = (0);
seq__58211 = G__58332;
chunk__58213 = G__58333;
count__58214 = G__58334;
i__58215 = G__58335;
continue;
} else {
var map__58229 = cljs.core.first(seq__58211__$1);
var map__58229__$1 = cljs.core.__destructure_map(map__58229);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__58337 = cljs.core.next(seq__58211__$1);
var G__58338 = null;
var G__58339 = (0);
var G__58340 = (0);
seq__58211 = G__58337;
chunk__58213 = G__58338;
count__58214 = G__58339;
i__58215 = G__58340;
continue;
} else {
var G__58341 = cljs.core.next(seq__58211__$1);
var G__58342 = null;
var G__58343 = (0);
var G__58344 = (0);
seq__58211 = G__58341;
chunk__58213 = G__58342;
count__58214 = G__58343;
i__58215 = G__58344;
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
