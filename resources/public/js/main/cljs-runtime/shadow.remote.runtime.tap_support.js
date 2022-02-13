goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__58926,p__58927){
var map__58928 = p__58926;
var map__58928__$1 = cljs.core.__destructure_map(map__58928);
var svc = map__58928__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58928__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58928__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58928__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__58929 = p__58927;
var map__58929__$1 = cljs.core.__destructure_map(map__58929);
var msg = map__58929__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58929__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58929__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58929__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58929__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__58947,p__58948){
var map__58952 = p__58947;
var map__58952__$1 = cljs.core.__destructure_map(map__58952);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58952__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__58953 = p__58948;
var map__58953__$1 = cljs.core.__destructure_map(map__58953);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58953__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__58960,p__58961){
var map__58963 = p__58960;
var map__58963__$1 = cljs.core.__destructure_map(map__58963);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58963__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58963__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__58964 = p__58961;
var map__58964__$1 = cljs.core.__destructure_map(map__58964);
var msg = map__58964__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58964__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__58969,tid){
var map__58972 = p__58969;
var map__58972__$1 = cljs.core.__destructure_map(map__58972);
var svc = map__58972__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58972__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__58980 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__58981 = null;
var count__58982 = (0);
var i__58983 = (0);
while(true){
if((i__58983 < count__58982)){
var vec__58994 = chunk__58981.cljs$core$IIndexed$_nth$arity$2(null,i__58983);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58994,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58994,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__59019 = seq__58980;
var G__59020 = chunk__58981;
var G__59021 = count__58982;
var G__59022 = (i__58983 + (1));
seq__58980 = G__59019;
chunk__58981 = G__59020;
count__58982 = G__59021;
i__58983 = G__59022;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58980);
if(temp__5753__auto__){
var seq__58980__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58980__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58980__$1);
var G__59023 = cljs.core.chunk_rest(seq__58980__$1);
var G__59024 = c__4638__auto__;
var G__59025 = cljs.core.count(c__4638__auto__);
var G__59026 = (0);
seq__58980 = G__59023;
chunk__58981 = G__59024;
count__58982 = G__59025;
i__58983 = G__59026;
continue;
} else {
var vec__58998 = cljs.core.first(seq__58980__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58998,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58998,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__59027 = cljs.core.next(seq__58980__$1);
var G__59028 = null;
var G__59029 = (0);
var G__59030 = (0);
seq__58980 = G__59027;
chunk__58981 = G__59028;
count__58982 = G__59029;
i__58983 = G__59030;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__58974_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__58974_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__58975_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__58975_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__58976_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__58976_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__58977_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__58977_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__59014){
var map__59016 = p__59014;
var map__59016__$1 = cljs.core.__destructure_map(map__59016);
var svc = map__59016__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59016__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59016__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
