goog.provide('com.fulcrologic.fulcro.application');
/**
 * Return the current basis time of the app.
 */
com.fulcrologic.fulcro.application.basis_t = (function com$fulcrologic$fulcro$application$basis_t(app){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","basis-t","com.fulcrologic.fulcro.application/basis-t",-1038783437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
});
/**
 * Get the current value of the application state database. If called without arguments it will attempt to find the app
 * in the dynamically-bound comp/*app*, which is bound during render.
 */
com.fulcrologic.fulcro.application.current_state = (function com$fulcrologic$fulcro$application$current_state(var_args){
var G__57462 = arguments.length;
switch (G__57462) {
case 1:
return com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1 = (function (app_or_component){
var app = com.fulcrologic.fulcro.components.any__GT_app(app_or_component);
return cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app));
}));

(com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__57488 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__57488__$1 = (((G__57488 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__57488));
if((G__57488__$1 == null)){
return null;
} else {
return cljs.core.deref(G__57488__$1);
}
}));

(com.fulcrologic.fulcro.application.current_state.cljs$lang$maxFixedArity = 1);

/**
 * Move the basis-t forward one tick. For internal use in internal algorithms. Fulcro
 *   uses this to add metadata to props so it can detect the newer of two version of props.
 */
com.fulcrologic.fulcro.application.tick_BANG_ = (function com$fulcrologic$fulcro$application$tick_BANG_(app){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app),cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","basis-t","com.fulcrologic.fulcro.application/basis-t",-1038783437),cljs.core.inc);
});
/**
 * Force shared props to be recalculated. This updates the shared props on the app, and future renders will see the
 * updated values. This is a no-op if no shared-fn is defined on the app. If you're using React 16+ consider using
 * Context instead of shared.
 */
com.fulcrologic.fulcro.application.update_shared_BANG_ = (function com$fulcrologic$fulcro$application$update_shared_BANG_(p__57495){
var map__57496 = p__57495;
var map__57496__$1 = cljs.core.__destructure_map(map__57496);
var app = map__57496__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57496__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
try{var temp__5751__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
if(cljs.core.truth_(temp__5751__auto__)){
var shared_fn = temp__5751__auto__;
var shared = new cljs.core.Keyword("com.fulcrologic.fulcro.application","static-shared-props","com.fulcrologic.fulcro.application/static-shared-props",2140623498).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
var state = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app);
var root_class = new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,state);
var v = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state,state);
var shared_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shared,(shared_fn.cljs$core$IFn$_invoke$arity$1 ? shared_fn.cljs$core$IFn$_invoke$arity$1(v) : shared_fn.call(null,v))], 0));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157),shared_props);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157),new cljs.core.Keyword("com.fulcrologic.fulcro.application","static-shared-props","com.fulcrologic.fulcro.application/static-shared-props",2140623498).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app))));
}
}catch (e57498){var e = e57498;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.application",null,70,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Cannot compute shared"], null);
}),null)),null,-938101078);
}});
/**
 * Returns true if the props queries directly by the root component of the app (if mounted) have changed since the last
 *   render.  This is a shallow analysis such that, for example, a join from root (in a normalized db) will be checked as a difference
 *   of idents that the root prop points to.  This can be used for determining if things like shared-fn need to be re-run,
 *   and if it would simply be quicker to keyframe render the entire tree.
 * 
 *   This is a naivé algorithm that is essentially `select-keys` on the root props. It does not interpret the query in
 *   any way.
 */
com.fulcrologic.fulcro.application.root_props_changed_QMARK_ = (function com$fulcrologic$fulcro$application$root_props_changed_QMARK_(app){
var map__57502 = app;
var map__57502__$1 = cljs.core.__destructure_map(map__57502);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57502__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57502__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__57503 = cljs.core.deref(runtime_atom);
var map__57503__$1 = cljs.core.__destructure_map(map__57503);
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57503__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57503__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
if(cljs.core.not(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,cljs.core.deref(state_atom)))){
return true;
} else {
var state_map = cljs.core.deref(state_atom);
var prior_state_map = new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var root_props = new cljs.core.Keyword(null,"root-props","root-props",-1015460595).cljs$core$IFn$_invoke$arity$1(indexes);
var root_old = cljs.core.select_keys(prior_state_map,root_props);
var root_new = cljs.core.select_keys(state_map,root_props);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(root_old,root_new);
}
});

/**
 * Render the application immediately.  Prefer `schedule-render!`, which will ensure no more than 60fps.
 * 
 *   This is the central processing for render and cannot be overridden. `schedule-render!` will always invoke
 *   this function.  The optimized render is called by this function, which does extra bookkeeping and
 *   other supporting features common to all rendering.
 * 
 *   Options include:
 *   - `force-root?`: boolean.  When true disables all optimizations and forces a full root re-render.
 *   - anything your selected rendering optization system allows.  Shared props are updated via `shared-fn`
 *   only on `force-root?` and when (shallow) root props change.
 *   
 */
com.fulcrologic.fulcro.application.render_BANG_ = (function com$fulcrologic$fulcro$application$render_BANG_(var_args){
var G__57512 = arguments.length;
switch (G__57512) {
case 1:
return com.fulcrologic.fulcro.application.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.application.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.application.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.application.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),false], null));
}));

(com.fulcrologic.fulcro.application.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__57530){
var map__57531 = p__57530;
var map__57531__$1 = cljs.core.__destructure_map(map__57531);
var options = map__57531__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57531__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
com.fulcrologic.fulcro.application.tick_BANG_(app);

var map__57539 = app;
var map__57539__$1 = cljs.core.__destructure_map(map__57539);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57539__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57539__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__57540 = (function (){var G__57545 = runtime_atom;
if((G__57545 == null)){
return null;
} else {
return cljs.core.deref(G__57545);
}
})();
var map__57540__$1 = cljs.core.__destructure_map(map__57540);
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57540__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
if(cljs.core.truth_(root_class)){
var optimized_render_BANG__57706 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"optimized-render!","optimized-render!",1504010964));
var shared_props_57707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157));
var root_props_changed_QMARK__57708 = com.fulcrologic.fulcro.application.root_props_changed_QMARK_(app);
var _STAR_denormalize_time_STAR__orig_val__57554_57709 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_app_STAR__orig_val__57555_57710 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__57556_57711 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_depth_STAR__orig_val__57557_57712 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_denormalize_time_STAR__temp_val__57558_57713 = com.fulcrologic.fulcro.application.basis_t(app);
var _STAR_app_STAR__temp_val__57559_57714 = app;
var _STAR_shared_STAR__temp_val__57560_57715 = shared_props_57707;
var _STAR_depth_STAR__temp_val__57561_57716 = (0);
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__57558_57713);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__57559_57714);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57560_57715);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57561_57716);

try{if(cljs.core.truth_((function (){var or__4212__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return root_props_changed_QMARK__57708;
}
})())){
com.fulcrologic.fulcro.application.update_shared_BANG_(app);
} else {
}

if(cljs.core.truth_(optimized_render_BANG__57706)){
var G__57581_57718 = app;
var G__57582_57719 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835),root_props_changed_QMARK__57708], null)], 0));
(optimized_render_BANG__57706.cljs$core$IFn$_invoke$arity$2 ? optimized_render_BANG__57706.cljs$core$IFn$_invoke$arity$2(G__57581_57718,G__57582_57719) : optimized_render_BANG__57706.call(null,G__57581_57718,G__57582_57719));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.application",null,127,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Render skipped. No optimized render is configured."], null);
}),null)),null,2037212614);
}
}finally {(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57557_57712);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57556_57711);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__57555_57710);

(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__57554_57709);
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441),cljs.core.deref(state_atom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),cljs.core.PersistentHashSet.EMPTY], 0));
} else {
}

var seq__57596 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword("com.fulcrologic.fulcro.application","render-listeners","com.fulcrologic.fulcro.application/render-listeners",-684979123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom))));
var chunk__57597 = null;
var count__57598 = (0);
var i__57599 = (0);
while(true){
if((i__57599 < count__57598)){
var render_listener = chunk__57597.cljs$core$IIndexed$_nth$arity$2(null,i__57599);
try{(render_listener.cljs$core$IFn$_invoke$arity$2 ? render_listener.cljs$core$IFn$_invoke$arity$2(app,options) : render_listener.call(null,app,options));
}catch (e57627){var e_57720 = e57627;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.application",null,137,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__57596,chunk__57597,count__57598,i__57599,e_57720,render_listener,map__57539,map__57539__$1,runtime_atom,state_atom,map__57540,map__57540__$1,root_class,map__57531,map__57531__$1,options,force_root_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_57720,"Render listener failed."], null);
});})(seq__57596,chunk__57597,count__57598,i__57599,e_57720,render_listener,map__57539,map__57539__$1,runtime_atom,state_atom,map__57540,map__57540__$1,root_class,map__57531,map__57531__$1,options,force_root_QMARK_))
,null)),null,-114783727);
}

var G__57722 = seq__57596;
var G__57723 = chunk__57597;
var G__57724 = count__57598;
var G__57725 = (i__57599 + (1));
seq__57596 = G__57722;
chunk__57597 = G__57723;
count__57598 = G__57724;
i__57599 = G__57725;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57596);
if(temp__5753__auto__){
var seq__57596__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57596__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__57596__$1);
var G__57726 = cljs.core.chunk_rest(seq__57596__$1);
var G__57727 = c__4638__auto__;
var G__57728 = cljs.core.count(c__4638__auto__);
var G__57729 = (0);
seq__57596 = G__57726;
chunk__57597 = G__57727;
count__57598 = G__57728;
i__57599 = G__57729;
continue;
} else {
var render_listener = cljs.core.first(seq__57596__$1);
try{(render_listener.cljs$core$IFn$_invoke$arity$2 ? render_listener.cljs$core$IFn$_invoke$arity$2(app,options) : render_listener.call(null,app,options));
}catch (e57629){var e_57730 = e57629;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.application",null,137,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__57596,chunk__57597,count__57598,i__57599,e_57730,render_listener,seq__57596__$1,temp__5753__auto__,map__57539,map__57539__$1,runtime_atom,state_atom,map__57540,map__57540__$1,root_class,map__57531,map__57531__$1,options,force_root_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_57730,"Render listener failed."], null);
});})(seq__57596,chunk__57597,count__57598,i__57599,e_57730,render_listener,seq__57596__$1,temp__5753__auto__,map__57539,map__57539__$1,runtime_atom,state_atom,map__57540,map__57540__$1,root_class,map__57531,map__57531__$1,options,force_root_QMARK_))
,null)),null,1504036859);
}

var G__57731 = cljs.core.next(seq__57596__$1);
var G__57732 = null;
var G__57733 = (0);
var G__57734 = (0);
seq__57596 = G__57731;
chunk__57597 = G__57732;
count__57598 = G__57733;
i__57599 = G__57734;
continue;
}
} else {
return null;
}
}
break;
}
}));

(com.fulcrologic.fulcro.application.render_BANG_.cljs$lang$maxFixedArity = 2);

var go_BANG__57735 = goog.functions.debounce((function (app,options){
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_animation_BANG_(app,new cljs.core.Keyword("com.fulcrologic.fulcro.application","render-scheduled?","com.fulcrologic.fulcro.application/render-scheduled?",1784576350),(function (){
return com.fulcrologic.fulcro.application.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,options);
}));
}),(16));
/**
 * Schedule a render on the next animation frame.
 */
com.fulcrologic.fulcro.application.schedule_render_BANG_ = (function com$fulcrologic$fulcro$application$schedule_render_BANG_(var_args){
var G__57633 = arguments.length;
switch (G__57633) {
case 1:
return com.fulcrologic.fulcro.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),false], null));
}));

(com.fulcrologic.fulcro.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,options){
return (go_BANG__57735.cljs$core$IFn$_invoke$arity$2 ? go_BANG__57735.cljs$core$IFn$_invoke$arity$2(app,options) : go_BANG__57735.call(null,app,options));
}));

(com.fulcrologic.fulcro.application.schedule_render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Default detection of network errors. Returns true if the status-code of the given result
 *   map is not 200.
 */
com.fulcrologic.fulcro.application.default_remote_error_QMARK_ = (function com$fulcrologic$fulcro$application$default_remote_error_QMARK_(p__57643){
var map__57644 = p__57643;
var map__57644__$1 = cljs.core.__destructure_map(map__57644);
var status_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57644__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code);
});
/**
 * The default query transform function.  It makes sure the following items on a component query
 *   are never sent to the server:
 * 
 *   - Props whose namespace is `ui`
 *   - Any prop or join that is namespaced to com.fulcrologic.fulcro*
 *   - Any ident (as a prop or join) whose table name is namespaced ui or com.fulcrologic.fulcro*
 * 
 *   Takes an AST and returns the modified AST.
 *   
 */
com.fulcrologic.fulcro.application.default_global_eql_transform = (function com$fulcrologic$fulcro$application$default_global_eql_transform(ast){
var kw_namespace = (function (k){
var and__4210__auto__ = (k instanceof cljs.core.Keyword);
if(and__4210__auto__){
return cljs.core.namespace(k);
} else {
return and__4210__auto__;
}
});
return com.fulcrologic.fulcro.data_fetch.elide_ast_nodes(ast,(function (k){
var ns = (function (){var G__57647 = k;
if((G__57647 == null)){
return null;
} else {
return kw_namespace(G__57647);
}
})();
var ident_ns = ((edn_query_language.core.ident_QMARK_(k))?(function (){var G__57649 = cljs.core.first(k);
if((G__57649 == null)){
return null;
} else {
return kw_namespace(G__57649);
}
})():null);
return ((((typeof ns === 'string') && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ui",ns)) || (clojure.string.starts_with_QMARK_(ns,"com.fulcrologic.fulcro.")))))) || (((typeof ident_ns === 'string') && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ui",ident_ns)) || (clojure.string.starts_with_QMARK_(ident_ns,"com.fulcrologic.fulcro.")))))));
}));
});
/**
 * Initialize the app state using `root` component's app state. This will deep merge against any data that is already
 *   in the state atom of the app. Can be called before `mount!`, in which case you should tell mount not to (re) initialize
 *   state.
 */
com.fulcrologic.fulcro.application.initialize_state_BANG_ = (function com$fulcrologic$fulcro$application$initialize_state_BANG_(app,root){
var initial_db = cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app));
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root,initial_db);
var initial_tree = com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$1(root);
var db_from_ui = (cljs.core.truth_(root_query)?com.fulcrologic.fulcro.algorithms.merge.merge_alternate_union_elements(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(root_query,initial_tree,true,com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$1(initial_tree)),root):initial_tree);
var db = com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_db,db_from_ui], 0));
return cljs.core.reset_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app),db);
});
com.fulcrologic.fulcro.application.default_tx_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_;
/**
 * Create a new Fulcro application.
 * 
 *   `options`: A map of initial options
 * 
 * * `:initial-db` a *map* containing a *normalized* Fulcro app db.  Normally Fulcro will populate app state with
 *   your component tree's initial state.  Use `mount!` options to toggle the initial state pull from root.
 * * `:optimized-render!` - A function that can analyze the state of the application and optimally refresh the screen.
 *   Defaults to `multiple-roots-renderer` (highly recommended), but other options are available in the rendering package.
 *   Further customizations are
 *   also possible.  Most applications will likely be best with the default. Standard Fulcro components are also pure
 *   (unless you supply `shouldComponentUpdate` to change that) to prevent rendering when props have not changed.
 * * `default-result-action!` - A `(fn [env])` that will be used in your mutations defined with `defmutation` as the
 *   default `:result-action` when none is supplied. Normally defaults to a function that supports mutation joins, targeting,
 *   and ok/error actions. WARNING: Overriding this is for advanced users and can break important functionality. The
 *   default is value for this option is `com.fulcrologic.fulcro.mutations/default-result-action!`, which could be used
 *   as an element of your own custom implementation.
 * * `:global-eql-transform` - A `(fn [AST] new-AST)` that will be asked to rewrite the AST of all transactions just
 *   before they are placed on the network layer.
 * * `:client-will-mount` - A `(fn [app])` that is called after the application is fully initialized, but just before
 * it mounts. This is triggered when you call `app/mount!`, but after all internals have been properly initialized.
 * * `:client-did-mount` - A `(fn [app])` that is called when the application mounts the first time. WARNING: Due to
 *   the async nature of js and React this function is not guaranteed to be called after the application is
 *   completely on the DOM.  If you need that guarantee then consider using `:componentDidMount` on your application's
 *   root component.
 * * `:remotes` - A map from remote name to a remote handler, which is defined as a map that contains at least
 *   a `:transmit!` key whose value is a `(fn [send-node])`. See `networking.http-remote`.
 * * `:shared` - A (static) map of data that should be visible in all components through `comp/shared`.
 * * `:shared-fn` - A function on root props that can select/augment shared whenever a forced root render
 *   or explicit call to `app/update-shared!` happens.
 * * `:props-middleware` - A function that can add data to the 4th (optional) argument of
 *   `defsc`.  Useful for allowing users to quickly destructure extra data created by
 *   component extensions. See the fulcro-garden-css project on github for an example usage.
 * * `:render-middleware` - A `(fn [this real-render])`. If supplied it will be called for every Fulcro component
 *   render, and *must* call (and return the result of) `real-render`.  This can be used to wrap the real render
 *   function in order to do things like measure performance, set dynamic vars, or augment the UI in arbitrary ways.
 *   `this` is the component being rendered.
 * * `:remote-error?` - A `(fn [result] boolean)`. It can examine the network result and should only return
 *   true when the result is an error. The `result` will contain both a `:body` and `:status-code` when using
 *   the normal remotes.  The default version of this returns true if the status code isn't 200.
 * * `:global-error-action` - A `(fn [env] ...)` that is run on any remote error (as defined by `remote-error?`).
 * * `:load-mutation` - A symbol. Defines which mutation to use as an implementation of low-level load operations. See
 *   Developer's Guide
 * * `:query-transform-default` - DEPRECATED. This will break things in unexpected ways. Prefer `:global-eql-transform`.
 * * `:load-marker-default` - A default value to use for load markers. Defaults to false.
 * * `:render-root!` - The function to call in order to render the root of your application. Defaults
 *   to `js/ReactDOM.render`.
 * * `:hydrate-root!` - The function to call in order to hydrate the root of your application. Defaults
 *   to `js/ReactDOM.hydrate`.
 * * `:unmount-root!` - The function to call in order to unmount the root of your application. Defaults
 *   to `js/ReactDOM.unmountComponentAtNode`.
 * * `:root-class` - The component class that will be the root. This can be specified just with `mount!`, but
 * giving it here allows you to do a number of tasks against the app before it is actually mounted. You can also use `app/set-root!`.
 * * `:submit-transaction!` - A function to implement how to submit transactions. This allows you to override how transactions
 *   are processed in Fulcro.  Calls to `comp/transact!` will come through this algorithm.
 * * `:abort-transaction!` - The function that can abort submitted transactions. Must be provided if you override
 *   `:submit-transaction!`, since the two are related.
 */
com.fulcrologic.fulcro.application.fulcro_app = (function com$fulcrologic$fulcro$application$fulcro_app(var_args){
var G__57652 = arguments.length;
switch (G__57652) {
case 0:
return com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1 = (function (p__57654){
var map__57655 = p__57654;
var map__57655__$1 = cljs.core.__destructure_map(map__57655);
var options = map__57655__$1;
var default_result_action_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
var external_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"external-config","external-config",-471423941));
var global_error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"global-error-action","global-error-action",-924822372));
var render_middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"render-middleware","render-middleware",1183628797));
var unmount_root_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"unmount-root!","unmount-root!",1516744861));
var client_did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226));
var initial_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"initial-db","initial-db",1939835102));
var query_transform_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273));
var props_middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"props-middleware","props-middleware",358176739));
var load_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"load-mutation","load-mutation",-2132703225));
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312));
var client_will_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"client-will-mount","client-will-mount",-2138714037));
var hydrate_root_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"hydrate-root!","hydrate-root!",-184171028));
var global_eql_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105));
var render_root_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"render-root!","render-root!",820937651));
var optimized_render_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"optimized-render!","optimized-render!",1504010964));
var submit_transaction_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"submit-transaction!","submit-transaction!",554065589));
var abort_transaction_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"abort-transaction!","abort-transaction!",-1430666634));
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"root-class","root-class",-267672298));
var remote_error_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57655__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var tx_BANG_ = (function (){var or__4212__auto__ = submit_transaction_BANG_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_;
}
})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625),com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = initial_db;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105),load_marker_default,new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),(function (){var or__4212__auto__ = client_did_mount;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951).cljs$core$IFn$_invoke$arity$1(options);
}
})(),new cljs.core.Keyword(null,"client-will-mount","client-will-mount",-2138714037),client_will_mount,new cljs.core.Keyword(null,"external-config","external-config",-471423941),external_config,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273),query_transform_default,new cljs.core.Keyword(null,"load-mutation","load-mutation",-2132703225),load_mutation], null),new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","initialize-state!","com.fulcrologic.fulcro.algorithm/initialize-state!",738545984),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","render!","com.fulcrologic.fulcro.algorithm/render!",-551944092),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","shared-fn","com.fulcrologic.fulcro.algorithm/shared-fn",1998173092),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","default-result-action!","com.fulcrologic.fulcro.algorithm/default-result-action!",762427430),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","props-middleware","com.fulcrologic.fulcro.algorithm/props-middleware",-1561487353),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","schedule-render!","com.fulcrologic.fulcro.algorithm/schedule-render!",-881414518),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","global-eql-transform","com.fulcrologic.fulcro.algorithm/global-eql-transform",2048820336),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","drop-component!","com.fulcrologic.fulcro.algorithm/drop-component!",2089631024),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","hydrate-root!","com.fulcrologic.fulcro.algorithm/hydrate-root!",-974092720),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","index-component!","com.fulcrologic.fulcro.algorithm/index-component!",1187330736),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","unmount-root!","com.fulcrologic.fulcro.algorithm/unmount-root!",-841125583),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","remote-error?","com.fulcrologic.fulcro.algorithm/remote-error?",-1675354477),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","render-root!","com.fulcrologic.fulcro.algorithm/render-root!",1033047),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","global-error-action","com.fulcrologic.fulcro.algorithm/global-error-action",1947538456),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","optimized-render!","com.fulcrologic.fulcro.algorithm/optimized-render!",-902323400),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","render-middleware","com.fulcrologic.fulcro.algorithm/render-middleware",-1105723495),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","index-root!","com.fulcrologic.fulcro.algorithm/index-root!",1394342330),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","merge*","com.fulcrologic.fulcro.algorithm/merge*",-1505158659)],[com.fulcrologic.fulcro.application.initialize_state_BANG_,com.fulcrologic.fulcro.application.render_BANG_,shared_fn,(function (){var or__4212__auto__ = default_result_action_BANG_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.mutations.default_result_action_BANG_;
}
})(),props_middleware,com.fulcrologic.fulcro.application.schedule_render_BANG_,(function (){var or__4212__auto__ = abort_transaction_BANG_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.abort_BANG_;
}
})(),tx_BANG_,(function (){var or__4212__auto__ = global_eql_transform;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.application.default_global_eql_transform;
}
})(),com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_,hydrate_root_BANG_,com.fulcrologic.fulcro.algorithms.indexing.index_component_BANG_,unmount_root_BANG_,(function (){var or__4212__auto__ = remote_error_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.application.default_remote_error_QMARK_;
}
})(),render_root_BANG_,global_error_action,(function (){var or__4212__auto__ = optimized_render_BANG_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_;
}
})(),render_middleware,com.fulcrologic.fulcro.algorithms.indexing.index_root_BANG_,com.fulcrologic.fulcro.algorithms.merge.merge_STAR_]),new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441),new cljs.core.Keyword("com.fulcrologic.fulcro.application","static-shared-props","com.fulcrologic.fulcro.application/static-shared-props",2140623498),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),new cljs.core.Keyword("com.fulcrologic.fulcro.application","render-listeners","com.fulcrologic.fulcro.application/render-listeners",-684979123),new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119),new cljs.core.Keyword("com.fulcrologic.fulcro.application","basis-t","com.fulcrologic.fulcro.application/basis-t",-1038783437),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new cljs.core.Keyword("com.fulcrologic.fulcro.application","mutate","com.fulcrologic.fulcro.application/mutate",-406635431),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-factory","com.fulcrologic.fulcro.application/root-factory",1202626682),new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005)],[null,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.PersistentArrayMap.EMPTY,shared,false,(function (){var G__57659 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_BANG_,com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57659,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","after-render","com.fulcrologic.fulcro.algorithms.tx-processing/after-render",349495132),com.fulcrologic.fulcro.algorithms.tx_processing.application_rendered_BANG_);
} else {
return G__57659;
}
})(),root_class,(1),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,com.fulcrologic.fulcro.mutations.mutate,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,false,(function (){var or__4212__auto__ = remotes;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transmit!","transmit!",-107149039),(function (p__57660){
var map__57661 = p__57660;
var map__57661__$1 = cljs.core.__destructure_map(map__57661);
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57661__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.application",null,324,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote requested, but no remote defined."], null);
}),null)),null,784333880);

var G__57663 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(418),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__57663) : result_handler.call(null,G__57663));
})], null)], null);
}
})(),null]))], null);
}));

(com.fulcrologic.fulcro.application.fulcro_app.cljs$lang$maxFixedArity = 1);

/**
 * Returns true if the given `x` is a Fulcro application.
 */
com.fulcrologic.fulcro.application.fulcro_app_QMARK_ = (function com$fulcrologic$fulcro$application$fulcro_app_QMARK_(x){
return cljs.core.boolean$(((cljs.core.map_QMARK_(x)) && (((cljs.core.contains_QMARK_(x,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366))) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772)))))));
});
/**
 * Is the given app currently mounted on the DOM?
 */
com.fulcrologic.fulcro.application.mounted_QMARK_ = (function com$fulcrologic$fulcro$application$mounted_QMARK_(p__57665){
var map__57666 = p__57665;
var map__57666__$1 = cljs.core.__destructure_map(map__57666);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57666__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.boolean$(new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
});
/**
 * Set a root class to use on the app. Doing so allows much of the API to work before mounting the app.
 */
com.fulcrologic.fulcro.application.set_root_BANG_ = (function com$fulcrologic$fulcro$application$set_root_BANG_(app,root,p__57668){
var map__57669 = p__57668;
var map__57669__$1 = cljs.core.__destructure_map(map__57669);
var initialize_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57669__$1,new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119),root);

if(cljs.core.truth_(initialize_state_QMARK_)){
return com.fulcrologic.fulcro.application.initialize_state_BANG_(app,root);
} else {
return null;
}
});
/**
 * Mount the app.  If called on an already-mounted app this will have the effect of re-installing the root node so that
 *   hot code reload will refresh the UI (useful for development).
 * 
 *   - `app`  The Fulcro app
 *   - `root`  The Root UI component
 *   - `node` The (string) ID or DOM node on which to mount.
 *   - `options` An optional map with additional mount options.
 * 
 * 
 *   `options` can include:
 * 
 *   - `:disable-client-did-mount?` (default false) - When false a true mount (as opposed to redundant) call of this function will
 *   invoke the application's `:client-did-mount` callback.
 *   - `:initialize-state?` (default true) - If NOT mounted already: Pulls the initial state tree from root component,
 *   normalizes it, and installs it as the application's state.  If there was data supplied as an initial-db, then this
 *   new initial state will be *merged* with that initial-db.
 *   - `:hydrate?` (default false) - Indicates that the DOM will already contain content from the
 *  server that should be attached instead of overwritten. See ReactDOM.hydrate.
 *   
 */
com.fulcrologic.fulcro.application.mount_BANG_ = (function com$fulcrologic$fulcro$application$mount_BANG_(var_args){
var G__57673 = arguments.length;
switch (G__57673) {
case 3:
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,root,node){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$4(app,root,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),true], null));
}));

(com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app,root,node,p__57675){
var map__57676 = p__57675;
var map__57676__$1 = cljs.core.__destructure_map(map__57676);
var initialize_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57676__$1,new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519));
var hydrate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57676__$1,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185));
var disable_client_did_mount_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57676__$1,new cljs.core.Keyword(null,"disable-client-did-mount?","disable-client-did-mount?",845242928));
if(com.fulcrologic.fulcro.components.has_ident_QMARK_(root)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.application",null,381,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Root is not allowed to have an `:ident`. It is a special node that is co-located over the entire database. If you\n    are tempted to do things like `merge!` against Root then that component should *not* be considered Root: make another layer in your UI."], null);
}),null)),null,-1415156713);
} else {
var initialize_state_QMARK___$1 = ((cljs.core.boolean_QMARK_(initialize_state_QMARK_))?initialize_state_QMARK_:true);
var map__57678 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684).cljs$core$IFn$_invoke$arity$1(app);
var map__57678__$1 = cljs.core.__destructure_map(map__57678);
var client_did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57678__$1,new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226));
var client_will_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57678__$1,new cljs.core.Keyword(null,"client-will-mount","client-will-mount",-2138714037));
var reset_mountpoint_BANG_ = (function (){
var dom_node = ((typeof node === 'string')?goog.dom.getElement(node):node);
var root_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(root);
if((dom_node == null)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.application",null,389,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mount cannot find DOM node",node,"to mount",com.fulcrologic.fulcro.components.class__GT_registry_key(root)], null);
}),null)),null,563718258);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672),dom_node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-factory","com.fulcrologic.fulcro.application/root-factory",1202626682),root_factory,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119),root], 0));

com.fulcrologic.fulcro.application.update_shared_BANG_(app);

com.fulcrologic.fulcro.algorithms.indexing.index_root_BANG_(app);

return com.fulcrologic.fulcro.application.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185),hydrate_QMARK_], null));
}
});
if(com.fulcrologic.fulcro.application.mounted_QMARK_(app)){
return reset_mountpoint_BANG_();
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app),(function (p1__57670_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.components.component_name(root)], null),p1__57670_SHARP_], 0));
}));

com.fulcrologic.fulcro.application.set_root_BANG_(app,root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),initialize_state_QMARK___$1], null));

com.fulcrologic.fulcro.inspect.inspect_client.app_started_BANG_(app);

if(cljs.core.truth_((function (){var and__4210__auto__ = client_will_mount;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(disable_client_did_mount_QMARK_);
} else {
return and__4210__auto__;
}
})())){
(client_will_mount.cljs$core$IFn$_invoke$arity$1 ? client_will_mount.cljs$core$IFn$_invoke$arity$1(app) : client_will_mount.call(null,app));
} else {
}

reset_mountpoint_BANG_();

if(cljs.core.truth_((function (){var and__4210__auto__ = client_did_mount;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(disable_client_did_mount_QMARK_);
} else {
return and__4210__auto__;
}
})())){
if(cljs.core.truth_(disable_client_did_mount_QMARK_)){
return null;
} else {
return (client_did_mount.cljs$core$IFn$_invoke$arity$1 ? client_did_mount.cljs$core$IFn$_invoke$arity$1(app) : client_did_mount.call(null,app));
}
} else {
return null;
}
}
}
}));

(com.fulcrologic.fulcro.application.mount_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Removes the app from its mount point. If you want to re-mount a running app, then you should pass
 * `:initialize-state? false` when you re-mount it and also consider the `:disable-client-did-mount?` option.
 */
com.fulcrologic.fulcro.application.unmount_BANG_ = (function com$fulcrologic$fulcro$application$unmount_BANG_(app){
var b2__44336__auto__ = (function (){var or__4212__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"unmount-root!","unmount-root!",1516744861));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var G__57682 = ReactDOM;
if((G__57682 == null)){
return null;
} else {
return G__57682.unmountComponentAtNode;
}
}
})();
if(cljs.core.truth_(b2__44336__auto__)){
var unmount = b2__44336__auto__;
var b2__44336__auto____$1 = (function (){var G__57683 = app;
var G__57683__$1 = (((G__57683 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__57683));
var G__57683__$2 = (((G__57683__$1 == null))?null:cljs.core.deref(G__57683__$1));
if((G__57683__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672).cljs$core$IFn$_invoke$arity$1(G__57683__$2);
}
})();
if(cljs.core.truth_(b2__44336__auto____$1)){
var node = b2__44336__auto____$1;
(unmount.cljs$core$IFn$_invoke$arity$1 ? unmount.cljs$core$IFn$_invoke$arity$1(node) : unmount.call(null,node));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005));

return true;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.application",null,423,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot umount application because either the umount function is missing or the node was not recorded. Perhaps it wasn't mounted?"], null);
}),null)),null,-1112283477);

return false;
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.application",null,423,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot umount application because either the umount function is missing or the node was not recorded. Perhaps it wasn't mounted?"], null);
}),null)),null,1763550316);

return false;
}
});
/**
 * Remount the currently-mounted root onto a new DOM node. This is a convenience for umount/mount.
 * The options map is sent to `mount!`, and defaults to:
 * 
 * ```
 * {:initialize-state? false
 *  :hydrate? false
 *  :disable-client-did-mount? true}
 * ```
 * 
 */
com.fulcrologic.fulcro.application.remount_BANG_ = (function com$fulcrologic$fulcro$application$remount_BANG_(var_args){
var G__57687 = arguments.length;
switch (G__57687) {
case 2:
return com.fulcrologic.fulcro.application.remount_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.application.remount_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.application.remount_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,new_node){
return com.fulcrologic.fulcro.application.remount_BANG_.cljs$core$IFn$_invoke$arity$3(app,new_node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),false,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185),false,new cljs.core.Keyword(null,"disable-client-did-mount?","disable-client-did-mount?",845242928),true], null));
}));

(com.fulcrologic.fulcro.application.remount_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,new_node,options){
var map__57689 = (function (){var G__57690 = app;
var G__57690__$1 = (((G__57690 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__57690));
if((G__57690__$1 == null)){
return null;
} else {
return cljs.core.deref(G__57690__$1);
}
})();
var map__57689__$1 = cljs.core.__destructure_map(map__57689);
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57689__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
com.fulcrologic.fulcro.application.unmount_BANG_(app);

return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$4(app,root_class,new_node,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),false,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185),false,new cljs.core.Keyword(null,"disable-client-did-mount?","disable-client-did-mount?",845242928),true], null),options], 0)));
}));

(com.fulcrologic.fulcro.application.remount_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns the current app root, if mounted. WARNING: The `:client-did-mount` in the app settings will *not* see a value
 * from this function due to the async nature of React. If you need to call this at app startup use the `:componentDidMount`
 * lifecycle method of your root component (at which point this will return the same thing as `this` in that method).
 */
com.fulcrologic.fulcro.application.app_root = (function com$fulcrologic$fulcro$application$app_root(app){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
});
/**
 * Returns the current app root class, if mounted.
 */
com.fulcrologic.fulcro.application.root_class = (function com$fulcrologic$fulcro$application$root_class(app){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
});
/**
 * Force a re-render of the root. Runs a root query, disables shouldComponentUpdate, and renders the root component.
 * This effectively forces React to do a full VDOM diff. Useful for things like UI refresh on hot code reload and
 * changing locales where there are no real data changes, but the UI still needs to refresh.
 * 
 * Argument can be anything that comp/any->app accepts.
 * 
 * WARNING: This disables all Fulcro rendering optimizations, so it is much slower than other ways of refreshing the app.
 * Use `schedule-render!` to request a normal optimized render.
 */
com.fulcrologic.fulcro.application.force_root_render_BANG_ = (function com$fulcrologic$fulcro$application$force_root_render_BANG_(app_ish){
var temp__5753__auto__ = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
if(cljs.core.truth_(temp__5753__auto__)){
var app = temp__5753__auto__;
com.fulcrologic.fulcro.application.update_shared_BANG_(app);

var _STAR_blindly_render_STAR__orig_val__57692 = com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_;
var _STAR_blindly_render_STAR__temp_val__57693 = true;
(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__temp_val__57693);

try{return com.fulcrologic.fulcro.application.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null));
}finally {(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__orig_val__57692);
}} else {
return null;
}
});
/**
 * Attempt to abort the send queue entries with the given abort ID.
 * 
 *   NOTE: This can be redefined on an application. If you change your transaction processing routing, then the built-in
 *   version will not work, and this docstring does not apply.
 * 
 *   Will notify any aborted operations (e.g. result-handler
 *   will be invoked, remote-error? will be used to decide if you consider that an error, etc.).
 *   The result map from an abort will include `{::txn/aborted? true}`, but will not include `:status-code` or `:body`.
 * 
 *   This function affects both started and non-started items in the send queues, but will not affect submissions that have not yet
 *   made it to the network processing layer (things still in top-level transaction submission queue).
 * 
 *   So the sequence of calls:
 * 
 *   ```
 *   (comp/transact! this `[(f)] {:abort-id :a})
 *   (app/abort! this :a)
 *   ```
 * 
 *   will cancel anything active with abort id `:a`, but since you've held the thread the entire time the submission of
 *   mutation `(f)` is still on the submission queue and will not be aborted.
 * 
 *   - `app-ish`: Anything that can be coerced to an app with comp/any->app.
 *   - `abort-id`: The abort ID of the operations to be aborted.
 *   
 */
com.fulcrologic.fulcro.application.abort_BANG_ = (function com$fulcrologic$fulcro$application$abort_BANG_(app_ish,abort_id){
var app = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
if(cljs.core.truth_(temp__5753__auto__)){
var abort_BANG_ = temp__5753__auto__;
return (abort_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_BANG_.cljs$core$IFn$_invoke$arity$2(app,abort_id) : abort_BANG_.call(null,app,abort_id));
} else {
return null;
}
});
/**
 * Add (or replace) a render listener named `nm`. `listener` is a `(fn [app options] )` that will be called
 * after each render.
 */
com.fulcrologic.fulcro.application.add_render_listener_BANG_ = (function com$fulcrologic$fulcro$application$add_render_listener_BANG_(app,nm,listener){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","render-listeners","com.fulcrologic.fulcro.application/render-listeners",-684979123),nm], null),listener);
});
/**
 * Returns a new instance from `fulcro-app` that is pre-configured to use synchronous transaction processing
 * and no rendering. This is particularly useful when you want to write integration tests around a Fulcro
 * app so that the tests need no async support. The `faux-root` must be a component (which need have no body).
 * 
 * The returned application will be properly initialized, and will have the initial state declared in `faux-component`
 * already merged into the app's state (i.e. the returned app is ready for operations).
 * 
 * `options` can be anything from `fulcro-app`, but :submit-transaction!, :render-root!, and
 * :optimized-render! are ignored.
 */
com.fulcrologic.fulcro.application.headless_synchronous_app = (function com$fulcrologic$fulcro$application$headless_synchronous_app(var_args){
var G__57697 = arguments.length;
switch (G__57697) {
case 1:
return com.fulcrologic.fulcro.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$1 = (function (faux_root){
return com.fulcrologic.fulcro.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$2(faux_root,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$2 = (function (faux_root,options){
var app = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions(com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-root!","render-root!",820937651),cljs.core.constantly(true),new cljs.core.Keyword(null,"optimized-render!","optimized-render!",1504010964),cljs.core.constantly(true)], null)], 0))));
com.fulcrologic.fulcro.application.initialize_state_BANG_(app,faux_root);

return app;
}));

(com.fulcrologic.fulcro.application.headless_synchronous_app.cljs$lang$maxFixedArity = 2);

/**
 * Add/replace a remote on the given app. `remote-name` is a keyword, and `remote` is a Fulcro remote (map containing
 *   at least `transmit!`).
 * 
 *   This function is *generally* safe to call at any time. Requests that are in-flight on an old version of the remote will complete
 *   on that remote, and any that are queued will be processed by the new one; however, if the old remote supported abort
 *   operations then an abort on in-flight requests of the old remote will not work (since you're replaced the remote that the details
 *   about that request).
 * 
 *   This function changes the content of the application's runtime atom so you do not need to capture the return value, which
 *   is the app you passed in.
 */
com.fulcrologic.fulcro.application.set_remote_BANG_ = (function com$fulcrologic$fulcro$application$set_remote_BANG_(app,remote_name,remote){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.keyword_QMARK_,cljs.core.map_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),remote_name], null),remote);

return app;
});

//# sourceMappingURL=com.fulcrologic.fulcro.application.js.map
