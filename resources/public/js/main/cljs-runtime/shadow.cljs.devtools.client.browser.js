goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61220 = arguments.length;
var i__4819__auto___61222 = (0);
while(true){
if((i__4819__auto___61222 < len__4818__auto___61220)){
args__4824__auto__.push((arguments[i__4819__auto___61222]));

var G__61223 = (i__4819__auto___61222 + (1));
i__4819__auto___61222 = G__61223;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq60910){
var G__60911 = cljs.core.first(seq60910);
var seq60910__$1 = cljs.core.next(seq60910);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60911,seq60910__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__60922 = cljs.core.seq(sources);
var chunk__60923 = null;
var count__60924 = (0);
var i__60925 = (0);
while(true){
if((i__60925 < count__60924)){
var map__60932 = chunk__60923.cljs$core$IIndexed$_nth$arity$2(null,i__60925);
var map__60932__$1 = cljs.core.__destructure_map(map__60932);
var src = map__60932__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60932__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e60934){var e_61227 = e60934;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61227);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61227.message)].join('')));
}

var G__61228 = seq__60922;
var G__61229 = chunk__60923;
var G__61230 = count__60924;
var G__61231 = (i__60925 + (1));
seq__60922 = G__61228;
chunk__60923 = G__61229;
count__60924 = G__61230;
i__60925 = G__61231;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60922);
if(temp__5753__auto__){
var seq__60922__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60922__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__60922__$1);
var G__61236 = cljs.core.chunk_rest(seq__60922__$1);
var G__61237 = c__4638__auto__;
var G__61238 = cljs.core.count(c__4638__auto__);
var G__61239 = (0);
seq__60922 = G__61236;
chunk__60923 = G__61237;
count__60924 = G__61238;
i__60925 = G__61239;
continue;
} else {
var map__60938 = cljs.core.first(seq__60922__$1);
var map__60938__$1 = cljs.core.__destructure_map(map__60938);
var src = map__60938__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e60939){var e_61249 = e60939;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61249);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61249.message)].join('')));
}

var G__61251 = cljs.core.next(seq__60922__$1);
var G__61252 = null;
var G__61253 = (0);
var G__61254 = (0);
seq__60922 = G__61251;
chunk__60923 = G__61252;
count__60924 = G__61253;
i__60925 = G__61254;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__60942 = cljs.core.seq(js_requires);
var chunk__60943 = null;
var count__60944 = (0);
var i__60945 = (0);
while(true){
if((i__60945 < count__60944)){
var js_ns = chunk__60943.cljs$core$IIndexed$_nth$arity$2(null,i__60945);
var require_str_61257 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61257);


var G__61260 = seq__60942;
var G__61261 = chunk__60943;
var G__61262 = count__60944;
var G__61263 = (i__60945 + (1));
seq__60942 = G__61260;
chunk__60943 = G__61261;
count__60944 = G__61262;
i__60945 = G__61263;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60942);
if(temp__5753__auto__){
var seq__60942__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60942__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__60942__$1);
var G__61266 = cljs.core.chunk_rest(seq__60942__$1);
var G__61267 = c__4638__auto__;
var G__61268 = cljs.core.count(c__4638__auto__);
var G__61269 = (0);
seq__60942 = G__61266;
chunk__60943 = G__61267;
count__60944 = G__61268;
i__60945 = G__61269;
continue;
} else {
var js_ns = cljs.core.first(seq__60942__$1);
var require_str_61270 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61270);


var G__61271 = cljs.core.next(seq__60942__$1);
var G__61272 = null;
var G__61273 = (0);
var G__61274 = (0);
seq__60942 = G__61271;
chunk__60943 = G__61272;
count__60944 = G__61273;
i__60945 = G__61274;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__60950){
var map__60951 = p__60950;
var map__60951__$1 = cljs.core.__destructure_map(map__60951);
var msg = map__60951__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60951__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60951__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60952(s__60953){
return (new cljs.core.LazySeq(null,(function (){
var s__60953__$1 = s__60953;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60953__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__60959 = cljs.core.first(xs__6308__auto__);
var map__60959__$1 = cljs.core.__destructure_map(map__60959);
var src = map__60959__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60959__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60959__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__60953__$1,map__60959,map__60959__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__60951,map__60951__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60952_$_iter__60954(s__60955){
return (new cljs.core.LazySeq(null,((function (s__60953__$1,map__60959,map__60959__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__60951,map__60951__$1,msg,info,reload_info){
return (function (){
var s__60955__$1 = s__60955;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__60955__$1);
if(temp__5753__auto____$1){
var s__60955__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60955__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__60955__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__60957 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__60956 = (0);
while(true){
if((i__60956 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__60956);
cljs.core.chunk_append(b__60957,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__61284 = (i__60956 + (1));
i__60956 = G__61284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60957),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60952_$_iter__60954(cljs.core.chunk_rest(s__60955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60957),null);
}
} else {
var warning = cljs.core.first(s__60955__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60952_$_iter__60954(cljs.core.rest(s__60955__$2)));
}
} else {
return null;
}
break;
}
});})(s__60953__$1,map__60959,map__60959__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__60951,map__60951__$1,msg,info,reload_info))
,null,null));
});})(s__60953__$1,map__60959,map__60959__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__60951,map__60951__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60952(cljs.core.rest(s__60953__$1)));
} else {
var G__61286 = cljs.core.rest(s__60953__$1);
s__60953__$1 = G__61286;
continue;
}
} else {
var G__61287 = cljs.core.rest(s__60953__$1);
s__60953__$1 = G__61287;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__60968_61288 = cljs.core.seq(warnings);
var chunk__60969_61289 = null;
var count__60970_61290 = (0);
var i__60971_61291 = (0);
while(true){
if((i__60971_61291 < count__60970_61290)){
var map__60977_61292 = chunk__60969_61289.cljs$core$IIndexed$_nth$arity$2(null,i__60971_61291);
var map__60977_61293__$1 = cljs.core.__destructure_map(map__60977_61292);
var w_61294 = map__60977_61293__$1;
var msg_61295__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60977_61293__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60977_61293__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60977_61293__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60977_61293__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61298)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61296),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61297),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61295__$1)].join(''));


var G__61303 = seq__60968_61288;
var G__61304 = chunk__60969_61289;
var G__61305 = count__60970_61290;
var G__61306 = (i__60971_61291 + (1));
seq__60968_61288 = G__61303;
chunk__60969_61289 = G__61304;
count__60970_61290 = G__61305;
i__60971_61291 = G__61306;
continue;
} else {
var temp__5753__auto___61307 = cljs.core.seq(seq__60968_61288);
if(temp__5753__auto___61307){
var seq__60968_61308__$1 = temp__5753__auto___61307;
if(cljs.core.chunked_seq_QMARK_(seq__60968_61308__$1)){
var c__4638__auto___61309 = cljs.core.chunk_first(seq__60968_61308__$1);
var G__61310 = cljs.core.chunk_rest(seq__60968_61308__$1);
var G__61311 = c__4638__auto___61309;
var G__61312 = cljs.core.count(c__4638__auto___61309);
var G__61313 = (0);
seq__60968_61288 = G__61310;
chunk__60969_61289 = G__61311;
count__60970_61290 = G__61312;
i__60971_61291 = G__61313;
continue;
} else {
var map__60979_61314 = cljs.core.first(seq__60968_61308__$1);
var map__60979_61315__$1 = cljs.core.__destructure_map(map__60979_61314);
var w_61316 = map__60979_61315__$1;
var msg_61317__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60979_61315__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60979_61315__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60979_61315__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60979_61315__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61320)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61318),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61319),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61317__$1)].join(''));


var G__61321 = cljs.core.next(seq__60968_61308__$1);
var G__61322 = null;
var G__61323 = (0);
var G__61324 = (0);
seq__60968_61288 = G__61321;
chunk__60969_61289 = G__61322;
count__60970_61290 = G__61323;
i__60971_61291 = G__61324;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__60949_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__60949_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__60984){
var map__60985 = p__60984;
var map__60985__$1 = cljs.core.__destructure_map(map__60985);
var msg = map__60985__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60985__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__60986 = cljs.core.seq(updates);
var chunk__60988 = null;
var count__60989 = (0);
var i__60990 = (0);
while(true){
if((i__60990 < count__60989)){
var path = chunk__60988.cljs$core$IIndexed$_nth$arity$2(null,i__60990);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61055_61331 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61059_61332 = null;
var count__61060_61333 = (0);
var i__61061_61334 = (0);
while(true){
if((i__61061_61334 < count__61060_61333)){
var node_61335 = chunk__61059_61332.cljs$core$IIndexed$_nth$arity$2(null,i__61061_61334);
if(cljs.core.not(node_61335.shadow$old)){
var path_match_61336 = shadow.cljs.devtools.client.browser.match_paths(node_61335.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61336)){
var new_link_61337 = (function (){var G__61081 = node_61335.cloneNode(true);
G__61081.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61336),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61081;
})();
(node_61335.shadow$old = true);

(new_link_61337.onload = ((function (seq__61055_61331,chunk__61059_61332,count__61060_61333,i__61061_61334,seq__60986,chunk__60988,count__60989,i__60990,new_link_61337,path_match_61336,node_61335,path,map__60985,map__60985__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61335);
});})(seq__61055_61331,chunk__61059_61332,count__61060_61333,i__61061_61334,seq__60986,chunk__60988,count__60989,i__60990,new_link_61337,path_match_61336,node_61335,path,map__60985,map__60985__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61336], 0));

goog.dom.insertSiblingAfter(new_link_61337,node_61335);


var G__61338 = seq__61055_61331;
var G__61339 = chunk__61059_61332;
var G__61340 = count__61060_61333;
var G__61341 = (i__61061_61334 + (1));
seq__61055_61331 = G__61338;
chunk__61059_61332 = G__61339;
count__61060_61333 = G__61340;
i__61061_61334 = G__61341;
continue;
} else {
var G__61343 = seq__61055_61331;
var G__61344 = chunk__61059_61332;
var G__61345 = count__61060_61333;
var G__61346 = (i__61061_61334 + (1));
seq__61055_61331 = G__61343;
chunk__61059_61332 = G__61344;
count__61060_61333 = G__61345;
i__61061_61334 = G__61346;
continue;
}
} else {
var G__61347 = seq__61055_61331;
var G__61348 = chunk__61059_61332;
var G__61349 = count__61060_61333;
var G__61350 = (i__61061_61334 + (1));
seq__61055_61331 = G__61347;
chunk__61059_61332 = G__61348;
count__61060_61333 = G__61349;
i__61061_61334 = G__61350;
continue;
}
} else {
var temp__5753__auto___61351 = cljs.core.seq(seq__61055_61331);
if(temp__5753__auto___61351){
var seq__61055_61353__$1 = temp__5753__auto___61351;
if(cljs.core.chunked_seq_QMARK_(seq__61055_61353__$1)){
var c__4638__auto___61354 = cljs.core.chunk_first(seq__61055_61353__$1);
var G__61355 = cljs.core.chunk_rest(seq__61055_61353__$1);
var G__61356 = c__4638__auto___61354;
var G__61357 = cljs.core.count(c__4638__auto___61354);
var G__61358 = (0);
seq__61055_61331 = G__61355;
chunk__61059_61332 = G__61356;
count__61060_61333 = G__61357;
i__61061_61334 = G__61358;
continue;
} else {
var node_61359 = cljs.core.first(seq__61055_61353__$1);
if(cljs.core.not(node_61359.shadow$old)){
var path_match_61360 = shadow.cljs.devtools.client.browser.match_paths(node_61359.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61360)){
var new_link_61361 = (function (){var G__61085 = node_61359.cloneNode(true);
G__61085.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61360),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61085;
})();
(node_61359.shadow$old = true);

(new_link_61361.onload = ((function (seq__61055_61331,chunk__61059_61332,count__61060_61333,i__61061_61334,seq__60986,chunk__60988,count__60989,i__60990,new_link_61361,path_match_61360,node_61359,seq__61055_61353__$1,temp__5753__auto___61351,path,map__60985,map__60985__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61359);
});})(seq__61055_61331,chunk__61059_61332,count__61060_61333,i__61061_61334,seq__60986,chunk__60988,count__60989,i__60990,new_link_61361,path_match_61360,node_61359,seq__61055_61353__$1,temp__5753__auto___61351,path,map__60985,map__60985__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61360], 0));

goog.dom.insertSiblingAfter(new_link_61361,node_61359);


var G__61362 = cljs.core.next(seq__61055_61353__$1);
var G__61363 = null;
var G__61364 = (0);
var G__61365 = (0);
seq__61055_61331 = G__61362;
chunk__61059_61332 = G__61363;
count__61060_61333 = G__61364;
i__61061_61334 = G__61365;
continue;
} else {
var G__61370 = cljs.core.next(seq__61055_61353__$1);
var G__61371 = null;
var G__61372 = (0);
var G__61373 = (0);
seq__61055_61331 = G__61370;
chunk__61059_61332 = G__61371;
count__61060_61333 = G__61372;
i__61061_61334 = G__61373;
continue;
}
} else {
var G__61374 = cljs.core.next(seq__61055_61353__$1);
var G__61375 = null;
var G__61376 = (0);
var G__61377 = (0);
seq__61055_61331 = G__61374;
chunk__61059_61332 = G__61375;
count__61060_61333 = G__61376;
i__61061_61334 = G__61377;
continue;
}
}
} else {
}
}
break;
}


var G__61378 = seq__60986;
var G__61379 = chunk__60988;
var G__61380 = count__60989;
var G__61381 = (i__60990 + (1));
seq__60986 = G__61378;
chunk__60988 = G__61379;
count__60989 = G__61380;
i__60990 = G__61381;
continue;
} else {
var G__61382 = seq__60986;
var G__61383 = chunk__60988;
var G__61384 = count__60989;
var G__61385 = (i__60990 + (1));
seq__60986 = G__61382;
chunk__60988 = G__61383;
count__60989 = G__61384;
i__60990 = G__61385;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60986);
if(temp__5753__auto__){
var seq__60986__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60986__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__60986__$1);
var G__61386 = cljs.core.chunk_rest(seq__60986__$1);
var G__61387 = c__4638__auto__;
var G__61388 = cljs.core.count(c__4638__auto__);
var G__61389 = (0);
seq__60986 = G__61386;
chunk__60988 = G__61387;
count__60989 = G__61388;
i__60990 = G__61389;
continue;
} else {
var path = cljs.core.first(seq__60986__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61090_61390 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61094_61391 = null;
var count__61095_61392 = (0);
var i__61096_61393 = (0);
while(true){
if((i__61096_61393 < count__61095_61392)){
var node_61394 = chunk__61094_61391.cljs$core$IIndexed$_nth$arity$2(null,i__61096_61393);
if(cljs.core.not(node_61394.shadow$old)){
var path_match_61395 = shadow.cljs.devtools.client.browser.match_paths(node_61394.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61395)){
var new_link_61396 = (function (){var G__61119 = node_61394.cloneNode(true);
G__61119.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61395),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61119;
})();
(node_61394.shadow$old = true);

(new_link_61396.onload = ((function (seq__61090_61390,chunk__61094_61391,count__61095_61392,i__61096_61393,seq__60986,chunk__60988,count__60989,i__60990,new_link_61396,path_match_61395,node_61394,path,seq__60986__$1,temp__5753__auto__,map__60985,map__60985__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61394);
});})(seq__61090_61390,chunk__61094_61391,count__61095_61392,i__61096_61393,seq__60986,chunk__60988,count__60989,i__60990,new_link_61396,path_match_61395,node_61394,path,seq__60986__$1,temp__5753__auto__,map__60985,map__60985__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61395], 0));

goog.dom.insertSiblingAfter(new_link_61396,node_61394);


var G__61398 = seq__61090_61390;
var G__61399 = chunk__61094_61391;
var G__61400 = count__61095_61392;
var G__61401 = (i__61096_61393 + (1));
seq__61090_61390 = G__61398;
chunk__61094_61391 = G__61399;
count__61095_61392 = G__61400;
i__61096_61393 = G__61401;
continue;
} else {
var G__61402 = seq__61090_61390;
var G__61403 = chunk__61094_61391;
var G__61404 = count__61095_61392;
var G__61405 = (i__61096_61393 + (1));
seq__61090_61390 = G__61402;
chunk__61094_61391 = G__61403;
count__61095_61392 = G__61404;
i__61096_61393 = G__61405;
continue;
}
} else {
var G__61406 = seq__61090_61390;
var G__61407 = chunk__61094_61391;
var G__61408 = count__61095_61392;
var G__61409 = (i__61096_61393 + (1));
seq__61090_61390 = G__61406;
chunk__61094_61391 = G__61407;
count__61095_61392 = G__61408;
i__61096_61393 = G__61409;
continue;
}
} else {
var temp__5753__auto___61411__$1 = cljs.core.seq(seq__61090_61390);
if(temp__5753__auto___61411__$1){
var seq__61090_61412__$1 = temp__5753__auto___61411__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61090_61412__$1)){
var c__4638__auto___61413 = cljs.core.chunk_first(seq__61090_61412__$1);
var G__61414 = cljs.core.chunk_rest(seq__61090_61412__$1);
var G__61415 = c__4638__auto___61413;
var G__61416 = cljs.core.count(c__4638__auto___61413);
var G__61417 = (0);
seq__61090_61390 = G__61414;
chunk__61094_61391 = G__61415;
count__61095_61392 = G__61416;
i__61096_61393 = G__61417;
continue;
} else {
var node_61418 = cljs.core.first(seq__61090_61412__$1);
if(cljs.core.not(node_61418.shadow$old)){
var path_match_61419 = shadow.cljs.devtools.client.browser.match_paths(node_61418.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61419)){
var new_link_61420 = (function (){var G__61123 = node_61418.cloneNode(true);
G__61123.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61419),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61123;
})();
(node_61418.shadow$old = true);

(new_link_61420.onload = ((function (seq__61090_61390,chunk__61094_61391,count__61095_61392,i__61096_61393,seq__60986,chunk__60988,count__60989,i__60990,new_link_61420,path_match_61419,node_61418,seq__61090_61412__$1,temp__5753__auto___61411__$1,path,seq__60986__$1,temp__5753__auto__,map__60985,map__60985__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61418);
});})(seq__61090_61390,chunk__61094_61391,count__61095_61392,i__61096_61393,seq__60986,chunk__60988,count__60989,i__60990,new_link_61420,path_match_61419,node_61418,seq__61090_61412__$1,temp__5753__auto___61411__$1,path,seq__60986__$1,temp__5753__auto__,map__60985,map__60985__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61419], 0));

goog.dom.insertSiblingAfter(new_link_61420,node_61418);


var G__61421 = cljs.core.next(seq__61090_61412__$1);
var G__61422 = null;
var G__61423 = (0);
var G__61424 = (0);
seq__61090_61390 = G__61421;
chunk__61094_61391 = G__61422;
count__61095_61392 = G__61423;
i__61096_61393 = G__61424;
continue;
} else {
var G__61425 = cljs.core.next(seq__61090_61412__$1);
var G__61426 = null;
var G__61427 = (0);
var G__61428 = (0);
seq__61090_61390 = G__61425;
chunk__61094_61391 = G__61426;
count__61095_61392 = G__61427;
i__61096_61393 = G__61428;
continue;
}
} else {
var G__61429 = cljs.core.next(seq__61090_61412__$1);
var G__61430 = null;
var G__61431 = (0);
var G__61432 = (0);
seq__61090_61390 = G__61429;
chunk__61094_61391 = G__61430;
count__61095_61392 = G__61431;
i__61096_61393 = G__61432;
continue;
}
}
} else {
}
}
break;
}


var G__61433 = cljs.core.next(seq__60986__$1);
var G__61434 = null;
var G__61435 = (0);
var G__61436 = (0);
seq__60986 = G__61433;
chunk__60988 = G__61434;
count__60989 = G__61435;
i__60990 = G__61436;
continue;
} else {
var G__61437 = cljs.core.next(seq__60986__$1);
var G__61438 = null;
var G__61439 = (0);
var G__61440 = (0);
seq__60986 = G__61437;
chunk__60988 = G__61438;
count__60989 = G__61439;
i__60990 = G__61440;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__61141){
var map__61142 = p__61141;
var map__61142__$1 = cljs.core.__destructure_map(map__61142);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61142__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__61172){
var map__61173 = p__61172;
var map__61173__$1 = cljs.core.__destructure_map(map__61173);
var _ = map__61173__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61173__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__61174,done,error){
var map__61175 = p__61174;
var map__61175__$1 = cljs.core.__destructure_map(map__61175);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61175__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__61183,done,error){
var map__61184 = p__61183;
var map__61184__$1 = cljs.core.__destructure_map(map__61184);
var msg = map__61184__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61184__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61184__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61184__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__61185){
var map__61186 = p__61185;
var map__61186__$1 = cljs.core.__destructure_map(map__61186);
var src = map__61186__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61186__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__61187 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__61187) : done.call(null,G__61187));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__61188){
var map__61189 = p__61188;
var map__61189__$1 = cljs.core.__destructure_map(map__61189);
var msg__$1 = map__61189__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61189__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e61190){var ex = e61190;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__61191){
var map__61192 = p__61191;
var map__61192__$1 = cljs.core.__destructure_map(map__61192);
var env = map__61192__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61192__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__61200){
var map__61201 = p__61200;
var map__61201__$1 = cljs.core.__destructure_map(map__61201);
var msg = map__61201__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61201__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__61204){
var map__61205 = p__61204;
var map__61205__$1 = cljs.core.__destructure_map(map__61205);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61205__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61205__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__61208){
var map__61211 = p__61208;
var map__61211__$1 = cljs.core.__destructure_map(map__61211);
var svc = map__61211__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61211__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
