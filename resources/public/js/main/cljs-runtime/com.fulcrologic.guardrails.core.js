goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__57988 = data;
var map__57988__$1 = cljs.core.__destructure_map(map__57988);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57988__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57988__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57988__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57988__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57988__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57988__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57988__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57988__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return ["\n",taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,cljs.core.PersistentArrayMap.EMPTY)].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(args_QMARK_,p__57996,spec,value){
var map__57998 = p__57996;
var map__57998__$1 = cljs.core.__destructure_map(map__57998);
var log_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57998__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57998__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57998__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57998__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var vargs_QMARK__58032 = (function (){var and__4210__auto__ = args_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return vararg_QMARK_;
} else {
return and__4210__auto__;
}
})();
var varg_58033 = (cljs.core.truth_(vargs_QMARK__58032)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_58034 = (cljs.core.truth_(vargs_QMARK__58032)?((cljs.core.map_QMARK_(varg_58033))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_58033))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_58033))):value);
var valid_exception_58035 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_58034)){
} else {
var config_58038 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),com.fulcrologic.guardrails.core.output_fn);
var problem_58039 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$2(spec,specable_args_58034);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(config_58038,(function (){var or__4212__auto__ = log_level;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"error","error",-978969032);
}
})(),"com.fulcrologic.guardrails.core",null,50,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n"].join(''),problem_58039], null);
}),null)),null,-25735840);

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_58035,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(problem_58039,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)], null)));
} else {
}
}
}catch (e58005){var e_58043 = e58005;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.guardrails.core",null,54,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_58043,"BUG: Internal error in expound or clojure spec."], null);
}),null)),null,1568615400);
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_58035))){
throw cljs.core.deref(valid_exception_58035);
} else {
}

return null;
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
