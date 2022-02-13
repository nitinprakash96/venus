goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___54737 = arguments.length;
var i__4819__auto___54738 = (0);
while(true){
if((i__4819__auto___54738 < len__4818__auto___54737)){
args__4824__auto__.push((arguments[i__4819__auto___54738]));

var G__54739 = (i__4819__auto___54738 + (1));
i__4819__auto___54738 = G__54739;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq54606){
var G__54607 = cljs.core.first(seq54606);
var seq54606__$1 = cljs.core.next(seq54606);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54607,seq54606__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__54610 = cljs.core.seq(sources);
var chunk__54611 = null;
var count__54612 = (0);
var i__54613 = (0);
while(true){
if((i__54613 < count__54612)){
var map__54623 = chunk__54611.cljs$core$IIndexed$_nth$arity$2(null,i__54613);
var map__54623__$1 = cljs.core.__destructure_map(map__54623);
var src = map__54623__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54623__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54623__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54623__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54623__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54624){var e_54740 = e54624;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54740);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54740.message)].join('')));
}

var G__54741 = seq__54610;
var G__54742 = chunk__54611;
var G__54743 = count__54612;
var G__54744 = (i__54613 + (1));
seq__54610 = G__54741;
chunk__54611 = G__54742;
count__54612 = G__54743;
i__54613 = G__54744;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54610);
if(temp__5753__auto__){
var seq__54610__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54610__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__54610__$1);
var G__54745 = cljs.core.chunk_rest(seq__54610__$1);
var G__54746 = c__4638__auto__;
var G__54747 = cljs.core.count(c__4638__auto__);
var G__54748 = (0);
seq__54610 = G__54745;
chunk__54611 = G__54746;
count__54612 = G__54747;
i__54613 = G__54748;
continue;
} else {
var map__54625 = cljs.core.first(seq__54610__$1);
var map__54625__$1 = cljs.core.__destructure_map(map__54625);
var src = map__54625__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54625__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54625__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54625__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54625__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54626){var e_54749 = e54626;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54749);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54749.message)].join('')));
}

var G__54750 = cljs.core.next(seq__54610__$1);
var G__54751 = null;
var G__54752 = (0);
var G__54753 = (0);
seq__54610 = G__54750;
chunk__54611 = G__54751;
count__54612 = G__54752;
i__54613 = G__54753;
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
var seq__54629 = cljs.core.seq(js_requires);
var chunk__54630 = null;
var count__54631 = (0);
var i__54632 = (0);
while(true){
if((i__54632 < count__54631)){
var js_ns = chunk__54630.cljs$core$IIndexed$_nth$arity$2(null,i__54632);
var require_str_54754 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54754);


var G__54755 = seq__54629;
var G__54756 = chunk__54630;
var G__54757 = count__54631;
var G__54758 = (i__54632 + (1));
seq__54629 = G__54755;
chunk__54630 = G__54756;
count__54631 = G__54757;
i__54632 = G__54758;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54629);
if(temp__5753__auto__){
var seq__54629__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54629__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__54629__$1);
var G__54759 = cljs.core.chunk_rest(seq__54629__$1);
var G__54760 = c__4638__auto__;
var G__54761 = cljs.core.count(c__4638__auto__);
var G__54762 = (0);
seq__54629 = G__54759;
chunk__54630 = G__54760;
count__54631 = G__54761;
i__54632 = G__54762;
continue;
} else {
var js_ns = cljs.core.first(seq__54629__$1);
var require_str_54763 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54763);


var G__54764 = cljs.core.next(seq__54629__$1);
var G__54765 = null;
var G__54766 = (0);
var G__54767 = (0);
seq__54629 = G__54764;
chunk__54630 = G__54765;
count__54631 = G__54766;
i__54632 = G__54767;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__54634){
var map__54635 = p__54634;
var map__54635__$1 = cljs.core.__destructure_map(map__54635);
var msg = map__54635__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54635__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54635__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54636(s__54637){
return (new cljs.core.LazySeq(null,(function (){
var s__54637__$1 = s__54637;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__54637__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__54642 = cljs.core.first(xs__6308__auto__);
var map__54642__$1 = cljs.core.__destructure_map(map__54642);
var src = map__54642__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54642__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54642__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__54637__$1,map__54642,map__54642__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54635,map__54635__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54636_$_iter__54638(s__54639){
return (new cljs.core.LazySeq(null,((function (s__54637__$1,map__54642,map__54642__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54635,map__54635__$1,msg,info,reload_info){
return (function (){
var s__54639__$1 = s__54639;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__54639__$1);
if(temp__5753__auto____$1){
var s__54639__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54639__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__54639__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__54641 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__54640 = (0);
while(true){
if((i__54640 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__54640);
cljs.core.chunk_append(b__54641,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__54768 = (i__54640 + (1));
i__54640 = G__54768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54641),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54636_$_iter__54638(cljs.core.chunk_rest(s__54639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54641),null);
}
} else {
var warning = cljs.core.first(s__54639__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54636_$_iter__54638(cljs.core.rest(s__54639__$2)));
}
} else {
return null;
}
break;
}
});})(s__54637__$1,map__54642,map__54642__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54635,map__54635__$1,msg,info,reload_info))
,null,null));
});})(s__54637__$1,map__54642,map__54642__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54635,map__54635__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54636(cljs.core.rest(s__54637__$1)));
} else {
var G__54769 = cljs.core.rest(s__54637__$1);
s__54637__$1 = G__54769;
continue;
}
} else {
var G__54770 = cljs.core.rest(s__54637__$1);
s__54637__$1 = G__54770;
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
var seq__54643_54771 = cljs.core.seq(warnings);
var chunk__54644_54772 = null;
var count__54645_54773 = (0);
var i__54646_54774 = (0);
while(true){
if((i__54646_54774 < count__54645_54773)){
var map__54649_54775 = chunk__54644_54772.cljs$core$IIndexed$_nth$arity$2(null,i__54646_54774);
var map__54649_54776__$1 = cljs.core.__destructure_map(map__54649_54775);
var w_54777 = map__54649_54776__$1;
var msg_54778__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54649_54776__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54649_54776__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54649_54776__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54649_54776__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54781)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54779),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54780),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54778__$1)].join(''));


var G__54782 = seq__54643_54771;
var G__54783 = chunk__54644_54772;
var G__54784 = count__54645_54773;
var G__54785 = (i__54646_54774 + (1));
seq__54643_54771 = G__54782;
chunk__54644_54772 = G__54783;
count__54645_54773 = G__54784;
i__54646_54774 = G__54785;
continue;
} else {
var temp__5753__auto___54786 = cljs.core.seq(seq__54643_54771);
if(temp__5753__auto___54786){
var seq__54643_54787__$1 = temp__5753__auto___54786;
if(cljs.core.chunked_seq_QMARK_(seq__54643_54787__$1)){
var c__4638__auto___54788 = cljs.core.chunk_first(seq__54643_54787__$1);
var G__54789 = cljs.core.chunk_rest(seq__54643_54787__$1);
var G__54790 = c__4638__auto___54788;
var G__54791 = cljs.core.count(c__4638__auto___54788);
var G__54792 = (0);
seq__54643_54771 = G__54789;
chunk__54644_54772 = G__54790;
count__54645_54773 = G__54791;
i__54646_54774 = G__54792;
continue;
} else {
var map__54650_54793 = cljs.core.first(seq__54643_54787__$1);
var map__54650_54794__$1 = cljs.core.__destructure_map(map__54650_54793);
var w_54795 = map__54650_54794__$1;
var msg_54796__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54650_54794__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54650_54794__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54650_54794__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54650_54794__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54799)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54797),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54798),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54796__$1)].join(''));


var G__54800 = cljs.core.next(seq__54643_54787__$1);
var G__54801 = null;
var G__54802 = (0);
var G__54803 = (0);
seq__54643_54771 = G__54800;
chunk__54644_54772 = G__54801;
count__54645_54773 = G__54802;
i__54646_54774 = G__54803;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__54633_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__54633_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__54651){
var map__54652 = p__54651;
var map__54652__$1 = cljs.core.__destructure_map(map__54652);
var msg = map__54652__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54652__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__54653 = cljs.core.seq(updates);
var chunk__54655 = null;
var count__54656 = (0);
var i__54657 = (0);
while(true){
if((i__54657 < count__54656)){
var path = chunk__54655.cljs$core$IIndexed$_nth$arity$2(null,i__54657);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54687_54804 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54691_54805 = null;
var count__54692_54806 = (0);
var i__54693_54807 = (0);
while(true){
if((i__54693_54807 < count__54692_54806)){
var node_54808 = chunk__54691_54805.cljs$core$IIndexed$_nth$arity$2(null,i__54693_54807);
if(cljs.core.not(node_54808.shadow$old)){
var path_match_54809 = shadow.cljs.devtools.client.browser.match_paths(node_54808.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54809)){
var new_link_54810 = (function (){var G__54699 = node_54808.cloneNode(true);
G__54699.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54809),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54699;
})();
(node_54808.shadow$old = true);

(new_link_54810.onload = ((function (seq__54687_54804,chunk__54691_54805,count__54692_54806,i__54693_54807,seq__54653,chunk__54655,count__54656,i__54657,new_link_54810,path_match_54809,node_54808,path,map__54652,map__54652__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54808);
});})(seq__54687_54804,chunk__54691_54805,count__54692_54806,i__54693_54807,seq__54653,chunk__54655,count__54656,i__54657,new_link_54810,path_match_54809,node_54808,path,map__54652,map__54652__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54809], 0));

goog.dom.insertSiblingAfter(new_link_54810,node_54808);


var G__54811 = seq__54687_54804;
var G__54812 = chunk__54691_54805;
var G__54813 = count__54692_54806;
var G__54814 = (i__54693_54807 + (1));
seq__54687_54804 = G__54811;
chunk__54691_54805 = G__54812;
count__54692_54806 = G__54813;
i__54693_54807 = G__54814;
continue;
} else {
var G__54815 = seq__54687_54804;
var G__54816 = chunk__54691_54805;
var G__54817 = count__54692_54806;
var G__54818 = (i__54693_54807 + (1));
seq__54687_54804 = G__54815;
chunk__54691_54805 = G__54816;
count__54692_54806 = G__54817;
i__54693_54807 = G__54818;
continue;
}
} else {
var G__54819 = seq__54687_54804;
var G__54820 = chunk__54691_54805;
var G__54821 = count__54692_54806;
var G__54822 = (i__54693_54807 + (1));
seq__54687_54804 = G__54819;
chunk__54691_54805 = G__54820;
count__54692_54806 = G__54821;
i__54693_54807 = G__54822;
continue;
}
} else {
var temp__5753__auto___54823 = cljs.core.seq(seq__54687_54804);
if(temp__5753__auto___54823){
var seq__54687_54824__$1 = temp__5753__auto___54823;
if(cljs.core.chunked_seq_QMARK_(seq__54687_54824__$1)){
var c__4638__auto___54825 = cljs.core.chunk_first(seq__54687_54824__$1);
var G__54826 = cljs.core.chunk_rest(seq__54687_54824__$1);
var G__54827 = c__4638__auto___54825;
var G__54828 = cljs.core.count(c__4638__auto___54825);
var G__54829 = (0);
seq__54687_54804 = G__54826;
chunk__54691_54805 = G__54827;
count__54692_54806 = G__54828;
i__54693_54807 = G__54829;
continue;
} else {
var node_54830 = cljs.core.first(seq__54687_54824__$1);
if(cljs.core.not(node_54830.shadow$old)){
var path_match_54831 = shadow.cljs.devtools.client.browser.match_paths(node_54830.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54831)){
var new_link_54832 = (function (){var G__54700 = node_54830.cloneNode(true);
G__54700.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54831),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54700;
})();
(node_54830.shadow$old = true);

(new_link_54832.onload = ((function (seq__54687_54804,chunk__54691_54805,count__54692_54806,i__54693_54807,seq__54653,chunk__54655,count__54656,i__54657,new_link_54832,path_match_54831,node_54830,seq__54687_54824__$1,temp__5753__auto___54823,path,map__54652,map__54652__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54830);
});})(seq__54687_54804,chunk__54691_54805,count__54692_54806,i__54693_54807,seq__54653,chunk__54655,count__54656,i__54657,new_link_54832,path_match_54831,node_54830,seq__54687_54824__$1,temp__5753__auto___54823,path,map__54652,map__54652__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54831], 0));

goog.dom.insertSiblingAfter(new_link_54832,node_54830);


var G__54833 = cljs.core.next(seq__54687_54824__$1);
var G__54834 = null;
var G__54835 = (0);
var G__54836 = (0);
seq__54687_54804 = G__54833;
chunk__54691_54805 = G__54834;
count__54692_54806 = G__54835;
i__54693_54807 = G__54836;
continue;
} else {
var G__54837 = cljs.core.next(seq__54687_54824__$1);
var G__54838 = null;
var G__54839 = (0);
var G__54840 = (0);
seq__54687_54804 = G__54837;
chunk__54691_54805 = G__54838;
count__54692_54806 = G__54839;
i__54693_54807 = G__54840;
continue;
}
} else {
var G__54841 = cljs.core.next(seq__54687_54824__$1);
var G__54842 = null;
var G__54843 = (0);
var G__54844 = (0);
seq__54687_54804 = G__54841;
chunk__54691_54805 = G__54842;
count__54692_54806 = G__54843;
i__54693_54807 = G__54844;
continue;
}
}
} else {
}
}
break;
}


var G__54845 = seq__54653;
var G__54846 = chunk__54655;
var G__54847 = count__54656;
var G__54848 = (i__54657 + (1));
seq__54653 = G__54845;
chunk__54655 = G__54846;
count__54656 = G__54847;
i__54657 = G__54848;
continue;
} else {
var G__54849 = seq__54653;
var G__54850 = chunk__54655;
var G__54851 = count__54656;
var G__54852 = (i__54657 + (1));
seq__54653 = G__54849;
chunk__54655 = G__54850;
count__54656 = G__54851;
i__54657 = G__54852;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54653);
if(temp__5753__auto__){
var seq__54653__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54653__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__54653__$1);
var G__54853 = cljs.core.chunk_rest(seq__54653__$1);
var G__54854 = c__4638__auto__;
var G__54855 = cljs.core.count(c__4638__auto__);
var G__54856 = (0);
seq__54653 = G__54853;
chunk__54655 = G__54854;
count__54656 = G__54855;
i__54657 = G__54856;
continue;
} else {
var path = cljs.core.first(seq__54653__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54701_54857 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54705_54858 = null;
var count__54706_54859 = (0);
var i__54707_54860 = (0);
while(true){
if((i__54707_54860 < count__54706_54859)){
var node_54861 = chunk__54705_54858.cljs$core$IIndexed$_nth$arity$2(null,i__54707_54860);
if(cljs.core.not(node_54861.shadow$old)){
var path_match_54862 = shadow.cljs.devtools.client.browser.match_paths(node_54861.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54862)){
var new_link_54863 = (function (){var G__54713 = node_54861.cloneNode(true);
G__54713.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54862),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54713;
})();
(node_54861.shadow$old = true);

(new_link_54863.onload = ((function (seq__54701_54857,chunk__54705_54858,count__54706_54859,i__54707_54860,seq__54653,chunk__54655,count__54656,i__54657,new_link_54863,path_match_54862,node_54861,path,seq__54653__$1,temp__5753__auto__,map__54652,map__54652__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54861);
});})(seq__54701_54857,chunk__54705_54858,count__54706_54859,i__54707_54860,seq__54653,chunk__54655,count__54656,i__54657,new_link_54863,path_match_54862,node_54861,path,seq__54653__$1,temp__5753__auto__,map__54652,map__54652__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54862], 0));

goog.dom.insertSiblingAfter(new_link_54863,node_54861);


var G__54864 = seq__54701_54857;
var G__54865 = chunk__54705_54858;
var G__54866 = count__54706_54859;
var G__54867 = (i__54707_54860 + (1));
seq__54701_54857 = G__54864;
chunk__54705_54858 = G__54865;
count__54706_54859 = G__54866;
i__54707_54860 = G__54867;
continue;
} else {
var G__54868 = seq__54701_54857;
var G__54869 = chunk__54705_54858;
var G__54870 = count__54706_54859;
var G__54871 = (i__54707_54860 + (1));
seq__54701_54857 = G__54868;
chunk__54705_54858 = G__54869;
count__54706_54859 = G__54870;
i__54707_54860 = G__54871;
continue;
}
} else {
var G__54872 = seq__54701_54857;
var G__54873 = chunk__54705_54858;
var G__54874 = count__54706_54859;
var G__54875 = (i__54707_54860 + (1));
seq__54701_54857 = G__54872;
chunk__54705_54858 = G__54873;
count__54706_54859 = G__54874;
i__54707_54860 = G__54875;
continue;
}
} else {
var temp__5753__auto___54876__$1 = cljs.core.seq(seq__54701_54857);
if(temp__5753__auto___54876__$1){
var seq__54701_54877__$1 = temp__5753__auto___54876__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54701_54877__$1)){
var c__4638__auto___54878 = cljs.core.chunk_first(seq__54701_54877__$1);
var G__54879 = cljs.core.chunk_rest(seq__54701_54877__$1);
var G__54880 = c__4638__auto___54878;
var G__54881 = cljs.core.count(c__4638__auto___54878);
var G__54882 = (0);
seq__54701_54857 = G__54879;
chunk__54705_54858 = G__54880;
count__54706_54859 = G__54881;
i__54707_54860 = G__54882;
continue;
} else {
var node_54883 = cljs.core.first(seq__54701_54877__$1);
if(cljs.core.not(node_54883.shadow$old)){
var path_match_54884 = shadow.cljs.devtools.client.browser.match_paths(node_54883.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54884)){
var new_link_54885 = (function (){var G__54714 = node_54883.cloneNode(true);
G__54714.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54884),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54714;
})();
(node_54883.shadow$old = true);

(new_link_54885.onload = ((function (seq__54701_54857,chunk__54705_54858,count__54706_54859,i__54707_54860,seq__54653,chunk__54655,count__54656,i__54657,new_link_54885,path_match_54884,node_54883,seq__54701_54877__$1,temp__5753__auto___54876__$1,path,seq__54653__$1,temp__5753__auto__,map__54652,map__54652__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54883);
});})(seq__54701_54857,chunk__54705_54858,count__54706_54859,i__54707_54860,seq__54653,chunk__54655,count__54656,i__54657,new_link_54885,path_match_54884,node_54883,seq__54701_54877__$1,temp__5753__auto___54876__$1,path,seq__54653__$1,temp__5753__auto__,map__54652,map__54652__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54884], 0));

goog.dom.insertSiblingAfter(new_link_54885,node_54883);


var G__54886 = cljs.core.next(seq__54701_54877__$1);
var G__54887 = null;
var G__54888 = (0);
var G__54889 = (0);
seq__54701_54857 = G__54886;
chunk__54705_54858 = G__54887;
count__54706_54859 = G__54888;
i__54707_54860 = G__54889;
continue;
} else {
var G__54890 = cljs.core.next(seq__54701_54877__$1);
var G__54891 = null;
var G__54892 = (0);
var G__54893 = (0);
seq__54701_54857 = G__54890;
chunk__54705_54858 = G__54891;
count__54706_54859 = G__54892;
i__54707_54860 = G__54893;
continue;
}
} else {
var G__54894 = cljs.core.next(seq__54701_54877__$1);
var G__54895 = null;
var G__54896 = (0);
var G__54897 = (0);
seq__54701_54857 = G__54894;
chunk__54705_54858 = G__54895;
count__54706_54859 = G__54896;
i__54707_54860 = G__54897;
continue;
}
}
} else {
}
}
break;
}


var G__54898 = cljs.core.next(seq__54653__$1);
var G__54899 = null;
var G__54900 = (0);
var G__54901 = (0);
seq__54653 = G__54898;
chunk__54655 = G__54899;
count__54656 = G__54900;
i__54657 = G__54901;
continue;
} else {
var G__54902 = cljs.core.next(seq__54653__$1);
var G__54903 = null;
var G__54904 = (0);
var G__54905 = (0);
seq__54653 = G__54902;
chunk__54655 = G__54903;
count__54656 = G__54904;
i__54657 = G__54905;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__54715){
var map__54716 = p__54715;
var map__54716__$1 = cljs.core.__destructure_map(map__54716);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54716__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__54717){
var map__54718 = p__54717;
var map__54718__$1 = cljs.core.__destructure_map(map__54718);
var _ = map__54718__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54718__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__54719,done,error){
var map__54720 = p__54719;
var map__54720__$1 = cljs.core.__destructure_map(map__54720);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54720__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__54721,done,error){
var map__54722 = p__54721;
var map__54722__$1 = cljs.core.__destructure_map(map__54722);
var msg = map__54722__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54722__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54722__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54722__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54723){
var map__54724 = p__54723;
var map__54724__$1 = cljs.core.__destructure_map(map__54724);
var src = map__54724__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54724__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__54725 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__54725) : done.call(null,G__54725));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__54726){
var map__54727 = p__54726;
var map__54727__$1 = cljs.core.__destructure_map(map__54727);
var msg__$1 = map__54727__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54727__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e54728){var ex = e54728;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__54729){
var map__54730 = p__54729;
var map__54730__$1 = cljs.core.__destructure_map(map__54730);
var env = map__54730__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54730__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__54731){
var map__54732 = p__54731;
var map__54732__$1 = cljs.core.__destructure_map(map__54732);
var msg = map__54732__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54732__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__54733){
var map__54734 = p__54733;
var map__54734__$1 = cljs.core.__destructure_map(map__54734);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54734__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54734__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__54735){
var map__54736 = p__54735;
var map__54736__$1 = cljs.core.__destructure_map(map__54736);
var svc = map__54736__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54736__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
