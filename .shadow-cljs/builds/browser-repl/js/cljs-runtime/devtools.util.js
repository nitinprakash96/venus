goog.provide('devtools.util');
devtools.util.lib_info_style = "color:black;font-weight:bold;";
devtools.util.reset_style = "color:black";
devtools.util.advanced_build_explanation_url = "https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-custom-formatters-do-not-work-for-advanced-builds";
devtools.util._STAR_custom_formatters_active_STAR_ = false;
devtools.util._STAR_console_open_STAR_ = false;
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = false;
devtools.util.pprint_str = (function devtools$util$pprint_str(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46588 = arguments.length;
var i__4819__auto___46590 = (0);
while(true){
if((i__4819__auto___46590 < len__4818__auto___46588)){
args__4824__auto__.push((arguments[i__4819__auto___46590]));

var G__46592 = (i__4819__auto___46590 + (1));
i__4819__auto___46590 = G__46592;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46421_46594 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46422_46595 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46423_46596 = true;
var _STAR_print_fn_STAR__temp_val__46424_46597 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46423_46596);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46424_46597);

try{var _STAR_print_level_STAR__orig_val__46425_46598 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__46426_46599 = (300);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46426_46599);

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pprint,args);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46425_46598);
}}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46422_46595);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46421_46594);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
}));

(devtools.util.pprint_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.util.pprint_str.cljs$lang$applyTo = (function (seq46420){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46420));
}));

devtools.util.make_version_info = (function devtools$util$make_version_info(){
return "0.9.10";
});
devtools.util.make_lib_info = (function devtools$util$make_lib_info(){
return ["CLJS DevTools ",devtools.util.make_version_info.call(null)].join('');
});
devtools.util.get_lib_info = (function devtools$util$get_lib_info(){
return devtools.util.make_lib_info.call(null);
});
devtools.util.get_node_info = (function devtools$util$get_node_info(root){
try{var process = (root["process"]);
var version = (process["version"]);
var platform = (process["platform"]);
if(cljs.core.truth_((function (){var and__4210__auto__ = version;
if(cljs.core.truth_(and__4210__auto__)){
return platform;
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"platform","platform",-1086422114),platform], null);
} else {
return null;
}
}catch (e46441){var _ = e46441;
return null;
}});
devtools.util.get_node_description = (function devtools$util$get_node_description(node_info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"platform","platform",-1086422114).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "?";
}
})()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "?";
}
})())].join('');
});
devtools.util.in_node_context_QMARK_ = (function devtools$util$in_node_context_QMARK_(){
return (!((devtools.util.get_node_info.call(null,devtools.context.get_root.call(null)) == null)));
});
devtools.util.get_js_context_description = (function devtools$util$get_js_context_description(){
var temp__5751__auto__ = devtools.util.get_node_info.call(null,devtools.context.get_root.call(null));
if(cljs.core.truth_(temp__5751__auto__)){
var node_info = temp__5751__auto__;
return ["node/",devtools.util.get_node_description.call(null,node_info)].join('');
} else {
var user_agent = goog.userAgent.getUserAgentString();
if(cljs.core.empty_QMARK_(user_agent)){
return "<unknown context>";
} else {
return user_agent;
}
}
});
devtools.util.unknown_feature_msg = (function devtools$util$unknown_feature_msg(feature,known_features,lib_info){
return ["No such feature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)," is currently available in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_info),". ","The list of supported features is ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([known_features], 0)),"."].join('');
});
devtools.util.feature_not_available_msg = (function devtools$util$feature_not_available_msg(feature){
return ["Feature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)," cannot be installed. ","Unsupported Javascript context: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_js_context_description.call(null)),"."].join('');
});
devtools.util.custom_formatters_not_active_msg = (function devtools$util$custom_formatters_not_active_msg(){
return ["CLJS DevTools: some custom formatters were not rendered.\n","https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-some-custom-formatters-were-not-rendered"].join('');
});
devtools.util.formatter_key = "devtoolsFormatters";
devtools.util.get_formatters_safe = (function devtools$util$get_formatters_safe(){
var formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_(formatters)){
return formatters;
} else {
return [];
}
});
devtools.util.set_formatters_safe_BANG_ = (function devtools$util$set_formatters_safe_BANG_(new_formatters){
if((((new_formatters == null)) || (cljs.core.array_QMARK_(new_formatters)))){
} else {
throw (new Error("Assert failed: (or (nil? new-formatters) (array? new-formatters))"));
}

return (devtools.context.get_root.call(null)[devtools.util.formatter_key] = ((cljs.core.empty_QMARK_(new_formatters))?null:new_formatters));
});
devtools.util.print_config_overrides_if_requested_BANG_ = (function devtools$util$print_config_overrides_if_requested_BANG_(msg){
if(cljs.core.truth_(devtools.prefs.pref(new cljs.core.Keyword(null,"print-config-overrides","print-config-overrides",-274716965)))){
var diff = cljs.core.second(clojure.data.diff(cljs.core.deref(devtools.prefs.default_config),devtools.prefs.get_prefs()));
if((!(cljs.core.empty_QMARK_(diff)))){
return devtools.context.get_console.call(null).info(msg,devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([diff], 0)));
} else {
return null;
}
} else {
return null;
}
});

/**
* @constructor
*/
devtools.util.CustomFormattersDetector = (function (){
});

(devtools.util.CustomFormattersDetector.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(devtools.util.CustomFormattersDetector.cljs$lang$type = true);

(devtools.util.CustomFormattersDetector.cljs$lang$ctorStr = "devtools.util/CustomFormattersDetector");

(devtools.util.CustomFormattersDetector.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"devtools.util/CustomFormattersDetector");
}));

/**
 * Positional factory function for devtools.util/CustomFormattersDetector.
 */
devtools.util.__GT_CustomFormattersDetector = (function devtools$util$__GT_CustomFormattersDetector(){
return (new devtools.util.CustomFormattersDetector());
});

devtools.util.make_detector = (function devtools$util$make_detector(){
var detector = (new devtools.util.CustomFormattersDetector());
(detector["header"] = (function (_object,_config){
(devtools.util._STAR_custom_formatters_active_STAR_ = true);

return null;
}));

(detector["hasBody"] = cljs.core.constantly(false));

(detector["body"] = cljs.core.constantly(null));

return detector;
});
devtools.util.install_detector_BANG_ = (function devtools$util$install_detector_BANG_(detector){
var formatters = devtools.util.get_formatters_safe();
formatters.push(detector);

return devtools.util.set_formatters_safe_BANG_(formatters);
});
devtools.util.uninstall_detector_BANG_ = (function devtools$util$uninstall_detector_BANG_(detector){
var current_formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_(current_formatters)){
var new_formatters = current_formatters.filter((function (p1__46504_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(detector,p1__46504_SHARP_)));
}));
return devtools.util.set_formatters_safe_BANG_(new_formatters);
} else {
return null;
}
});
devtools.util.check_custom_formatters_active_BANG_ = (function devtools$util$check_custom_formatters_active_BANG_(){
if(cljs.core.truth_((function (){var and__4210__auto__ = devtools.util._STAR_console_open_STAR_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(devtools.util._STAR_custom_formatters_active_STAR_);
} else {
return and__4210__auto__;
}
})())){
if(cljs.core.truth_(devtools.util._STAR_custom_formatters_warning_reported_STAR_)){
return null;
} else {
(devtools.util._STAR_custom_formatters_warning_reported_STAR_ = true);

return devtools.context.get_console.call(null).warn(devtools.util.custom_formatters_not_active_msg.call(null));
}
} else {
return null;
}
});
devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_ = (function devtools$util$uninstall_detector_and_check_custom_formatters_active_BANG_(detector){
devtools.util.uninstall_detector_BANG_(detector);

return devtools.util.check_custom_formatters_active_BANG_();
});
devtools.util.make_detection_printer = (function devtools$util$make_detection_printer(){
var f = (function (){
return null;
});
var G__46508_46619 = f;
var target__43929__auto___46620 = G__46508_46619;
if(cljs.core.truth_(target__43929__auto___46620)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46508_46619)].join(''),"\n","target__43929__auto__"].join('')));
}

(target__43929__auto___46620["toString"] = (function (){
(devtools.util._STAR_console_open_STAR_ = true);

setTimeout(devtools.util.check_custom_formatters_active_BANG_,(0));

return "";
}));


return f;
});
devtools.util.wrap_with_custom_formatter_detection_BANG_ = (function devtools$util$wrap_with_custom_formatter_detection_BANG_(f){
if(cljs.core.not(devtools.prefs.pref(new cljs.core.Keyword(null,"dont-detect-custom-formatters","dont-detect-custom-formatters",-29005804)))){
var detector = devtools.util.make_detector();
devtools.util.install_detector_BANG_(detector);

var G__46512_46627 = "%c%s";
var G__46513_46628 = "color:transparent";
var G__46514_46629 = devtools.util.make_detection_printer();
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__46512_46627,G__46513_46628,G__46514_46629) : f.call(null,G__46512_46627,G__46513_46628,G__46514_46629));

return setTimeout(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_,detector),(0));
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
devtools.util.feature_for_display = (function devtools$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)], null)], null);
});
devtools.util.feature_list_display = (function devtools$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.feature_for_display,installed_features),new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(accum))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(val))].join(''),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(accum),cljs.core.second(val))], null);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,cljs.core.first(labels),cljs.core.rest(labels));
});
devtools.util.display_banner_BANG_ = (function devtools$util$display_banner_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46635 = arguments.length;
var i__4819__auto___46636 = (0);
while(true){
if((i__4819__auto___46636 < len__4818__auto___46635)){
args__4824__auto__.push((arguments[i__4819__auto___46636]));

var G__46637 = (i__4819__auto___46636 + (1));
i__4819__auto___46636 = G__46637;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__46539 = devtools.util.feature_list_display(installed_features,feature_groups);
var fmt_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46539,(0),null);
var fmt_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46539,(1),null);
return devtools.util.wrap_with_custom_formatter_detection_BANG_((function() { 
var G__46639__delegate = function (add_fmt,add_args){
var items = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(add_fmt)].join('')], null),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_params,add_args], 0));
var console = devtools.context.get_console.call(null);
return console.info.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(items));
};
var G__46639 = function (add_fmt,var_args){
var add_args = null;
if (arguments.length > 1) {
var G__46641__i = 0, G__46641__a = new Array(arguments.length -  1);
while (G__46641__i < G__46641__a.length) {G__46641__a[G__46641__i] = arguments[G__46641__i + 1]; ++G__46641__i;}
  add_args = new cljs.core.IndexedSeq(G__46641__a,0,null);
} 
return G__46639__delegate.call(this,add_fmt,add_args);};
G__46639.cljs$lang$maxFixedArity = 1;
G__46639.cljs$lang$applyTo = (function (arglist__46642){
var add_fmt = cljs.core.first(arglist__46642);
var add_args = cljs.core.rest(arglist__46642);
return G__46639__delegate(add_fmt,add_args);
});
G__46639.cljs$core$IFn$_invoke$arity$variadic = G__46639__delegate;
return G__46639;
})()
);
}));

(devtools.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(devtools.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq46533){
var G__46534 = cljs.core.first(seq46533);
var seq46533__$1 = cljs.core.next(seq46533);
var G__46535 = cljs.core.first(seq46533__$1);
var seq46533__$2 = cljs.core.next(seq46533__$1);
var G__46536 = cljs.core.first(seq46533__$2);
var seq46533__$3 = cljs.core.next(seq46533__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46534,G__46535,G__46536,seq46533__$3);
}));

devtools.util.display_banner_if_needed_BANG_ = (function devtools$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.not(devtools.prefs.pref(new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
var banner = "Installing %c%s%c and enabling features";
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(features_to_install,feature_groups,banner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.util.lib_info_style,devtools.util.get_lib_info(),devtools.util.reset_style], 0));
} else {
return (devtools.util._STAR_custom_formatters_active_STAR_ = true);
}
});
devtools.util.report_unknown_features_BANG_ = (function devtools$util$report_unknown_features_BANG_(features,known_features){
var lib_info = devtools.util.get_lib_info();
var seq__46554 = cljs.core.seq(features);
var chunk__46555 = null;
var count__46556 = (0);
var i__46557 = (0);
while(true){
if((i__46557 < count__46556)){
var feature = chunk__46555.cljs$core$IIndexed$_nth$arity$2(null,i__46557);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
devtools.context.get_console.call(null).warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}


var G__46649 = seq__46554;
var G__46650 = chunk__46555;
var G__46651 = count__46556;
var G__46652 = (i__46557 + (1));
seq__46554 = G__46649;
chunk__46555 = G__46650;
count__46556 = G__46651;
i__46557 = G__46652;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46554);
if(temp__5753__auto__){
var seq__46554__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46554__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__46554__$1);
var G__46653 = cljs.core.chunk_rest(seq__46554__$1);
var G__46654 = c__4638__auto__;
var G__46655 = cljs.core.count(c__4638__auto__);
var G__46656 = (0);
seq__46554 = G__46653;
chunk__46555 = G__46654;
count__46556 = G__46655;
i__46557 = G__46656;
continue;
} else {
var feature = cljs.core.first(seq__46554__$1);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
devtools.context.get_console.call(null).warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}


var G__46658 = cljs.core.next(seq__46554__$1);
var G__46659 = null;
var G__46660 = (0);
var G__46661 = (0);
seq__46554 = G__46658;
chunk__46555 = G__46659;
count__46556 = G__46660;
i__46557 = G__46661;
continue;
}
} else {
return null;
}
}
break;
}
});
devtools.util.is_known_feature_QMARK_ = (function devtools$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features));
});
devtools.util.convert_legacy_feature = (function devtools$util$convert_legacy_feature(feature){
var G__46568 = feature;
var G__46568__$1 = (((G__46568 instanceof cljs.core.Keyword))?G__46568.fqn:null);
switch (G__46568__$1) {
case "custom-formatters":
return new cljs.core.Keyword(null,"formatters","formatters",-1875637118);

break;
case "sanity-hints":
return new cljs.core.Keyword(null,"hints","hints",-991113151);

break;
default:
return feature;

}
});
devtools.util.convert_legacy_features = (function devtools$util$convert_legacy_features(features){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.convert_legacy_feature,features);
});
devtools.util.sanititze_features_BANG_ = (function devtools$util$sanititze_features_BANG_(features,feature_groups){
var known_features = new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups);
var features__$1 = devtools.util.convert_legacy_features(features);
devtools.util.report_unknown_features_BANG_(features__$1,known_features);

return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.is_known_feature_QMARK_,known_features),features__$1);
});
devtools.util.resolve_features_BANG_ = (function devtools$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((function (){var and__4210__auto__ = (features_desc instanceof cljs.core.Keyword);
if(and__4210__auto__){
return (features_desc.cljs$core$IFn$_invoke$arity$1 ? features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups) : features_desc.call(null,feature_groups));
} else {
return and__4210__auto__;
}
})())?(features_desc.cljs$core$IFn$_invoke$arity$1 ? features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups) : features_desc.call(null,feature_groups)):(((features_desc == null))?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_(features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return devtools.util.sanititze_features_BANG_(features,feature_groups);
});
devtools.util.under_advanced_build_QMARK_ = (function devtools$util$under_advanced_build_QMARK_(){
if(cljs.core.not(devtools.prefs.pref(new cljs.core.Keyword(null,"disable-advanced-mode-check","disable-advanced-mode-check",-968346539)))){
return ((function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o46575 = temp__5751__auto__;
return (o46575["version"]);
} else {
return null;
}
})() == null);
} else {
return null;
}
});
devtools.util.display_advanced_build_warning_if_needed_BANG_ = (function devtools$util$display_advanced_build_warning_if_needed_BANG_(){
if(cljs.core.not(devtools.prefs.pref(new cljs.core.Keyword(null,"dont-display-advanced-build-warning","dont-display-advanced-build-warning",-91321563)))){
var banner = ["%cNOT%c installing %c%s%c under advanced build. See ",devtools.util.advanced_build_explanation_url,"."].join('');
return devtools.context.get_console.call(null).warn(banner,"font-weight:bold",devtools.util.reset_style,devtools.util.lib_info_style,devtools.util.get_lib_info(),devtools.util.reset_style);
} else {
return null;
}
});
devtools.util.install_feature_BANG_ = (function devtools$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),features_to_install))){
if(cljs.core.truth_((function (){var or__4212__auto__ = devtools.prefs.pref(new cljs.core.Keyword(null,"bypass-availability-checks","bypass-availability-checks",1934691680));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (available_fn.cljs$core$IFn$_invoke$arity$1 ? available_fn.cljs$core$IFn$_invoke$arity$1(feature) : available_fn.call(null,feature));
}
})())){
return (install_fn.cljs$core$IFn$_invoke$arity$0 ? install_fn.cljs$core$IFn$_invoke$arity$0() : install_fn.call(null));
} else {
return devtools.context.get_console.call(null).warn(devtools.util.feature_not_available_msg.call(null,feature));
}
} else {
return null;
}
});

//# sourceMappingURL=devtools.util.js.map
