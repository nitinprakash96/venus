goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
/**
 * Register a mounted react component as a new root that should be managed. The
 *   options map can contain:
 * 
 *   - `:initialize?`: Should the initial state be pushed into the app state (if not already present)? Defaults
 *   to true, which causes it to happen once (on initial mount).
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$register_root_BANG_(var_args){
var G__56061 = arguments.length;
switch (G__56061) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__56096){
var map__56098 = p__56096;
var map__56098__$1 = cljs.core.__destructure_map(map__56098);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56098__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56098__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$1 = (function (){var or__4212__auto__ = app;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$1)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = com.fulcrologic.fulcro.components.class__GT_registry_key(class$);
var initialize_state_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"initialize-state!","initialize-state!",-1114074844));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var known_roots = (function (){var G__56136 = app__$1;
var G__56136__$1 = (((G__56136 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__56136));
var G__56136__$2 = (((G__56136__$1 == null))?null:cljs.core.deref(G__56136__$1));
if((G__56136__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__56136__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__4210__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (!(initialized_QMARK_));
} else {
return and__4210__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,class$) : initialize_state_BANG_.call(null,app__$1,class$));

var G__56141_56338 = app__$1;
var G__56142_56339 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__56141_56338,G__56142_56339) : schedule_render_BANG_.call(null,G__56141_56338,G__56142_56339));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,2083505288);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,92,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options."], null);
}),null)),null,-828338194);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__56171 = arguments.length;
switch (G__56171) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__56181){
var map__56187 = p__56181;
var map__56187__$1 = cljs.core.__destructure_map(map__56187);
var options = map__56187__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56187__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$1 = (function (){var or__4212__auto__ = app;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$1)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = com.fulcrologic.fulcro.components.class__GT_registry_key(class$);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,-1685503018);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,105,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options."], null);
}),null)),null,-1796560193);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app,options){
var state_map = (function (){var G__56228 = app;
var G__56228__$1 = (((G__56228 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__56228));
if((G__56228__$1 == null)){
return null;
} else {
return cljs.core.deref(G__56228__$1);
}
})();
var known_roots = (function (){var G__56229 = app;
var G__56229__$1 = (((G__56229 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__56229));
var G__56229__$2 = (((G__56229__$1 == null))?null:cljs.core.deref(G__56229__$1));
if((G__56229__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__56229__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);

var seq__56232 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__56234 = null;
var count__56235 = (0);
var i__56236 = (0);
while(true){
if((i__56236 < count__56235)){
var k = chunk__56234.cljs$core$IIndexed$_nth$arity$2(null,i__56236);
var cls_56346 = com.fulcrologic.fulcro.components.registry_key__GT_class(k);
var query_56347 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_56346,state_map);
var root_props_56348 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_56347,state_map,state_map);
var seq__56269_56349 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__56270_56350 = null;
var count__56271_56351 = (0);
var i__56272_56352 = (0);
while(true){
if((i__56272_56352 < count__56271_56351)){
var root_56353 = chunk__56270_56350.cljs$core$IIndexed$_nth$arity$2(null,i__56272_56352);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_56353,root_props_56348);


var G__56354 = seq__56269_56349;
var G__56355 = chunk__56270_56350;
var G__56356 = count__56271_56351;
var G__56357 = (i__56272_56352 + (1));
seq__56269_56349 = G__56354;
chunk__56270_56350 = G__56355;
count__56271_56351 = G__56356;
i__56272_56352 = G__56357;
continue;
} else {
var temp__5753__auto___56358 = cljs.core.seq(seq__56269_56349);
if(temp__5753__auto___56358){
var seq__56269_56359__$1 = temp__5753__auto___56358;
if(cljs.core.chunked_seq_QMARK_(seq__56269_56359__$1)){
var c__4638__auto___56360 = cljs.core.chunk_first(seq__56269_56359__$1);
var G__56362 = cljs.core.chunk_rest(seq__56269_56359__$1);
var G__56363 = c__4638__auto___56360;
var G__56364 = cljs.core.count(c__4638__auto___56360);
var G__56365 = (0);
seq__56269_56349 = G__56362;
chunk__56270_56350 = G__56363;
count__56271_56351 = G__56364;
i__56272_56352 = G__56365;
continue;
} else {
var root_56366 = cljs.core.first(seq__56269_56359__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_56366,root_props_56348);


var G__56367 = cljs.core.next(seq__56269_56359__$1);
var G__56368 = null;
var G__56369 = (0);
var G__56370 = (0);
seq__56269_56349 = G__56367;
chunk__56270_56350 = G__56368;
count__56271_56351 = G__56369;
i__56272_56352 = G__56370;
continue;
}
} else {
}
}
break;
}


var G__56371 = seq__56232;
var G__56372 = chunk__56234;
var G__56373 = count__56235;
var G__56374 = (i__56236 + (1));
seq__56232 = G__56371;
chunk__56234 = G__56372;
count__56235 = G__56373;
i__56236 = G__56374;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56232);
if(temp__5753__auto__){
var seq__56232__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56232__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__56232__$1);
var G__56375 = cljs.core.chunk_rest(seq__56232__$1);
var G__56376 = c__4638__auto__;
var G__56377 = cljs.core.count(c__4638__auto__);
var G__56378 = (0);
seq__56232 = G__56375;
chunk__56234 = G__56376;
count__56235 = G__56377;
i__56236 = G__56378;
continue;
} else {
var k = cljs.core.first(seq__56232__$1);
var cls_56379 = com.fulcrologic.fulcro.components.registry_key__GT_class(k);
var query_56380 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_56379,state_map);
var root_props_56381 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_56380,state_map,state_map);
var seq__56284_56382 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__56285_56383 = null;
var count__56286_56384 = (0);
var i__56287_56385 = (0);
while(true){
if((i__56287_56385 < count__56286_56384)){
var root_56386 = chunk__56285_56383.cljs$core$IIndexed$_nth$arity$2(null,i__56287_56385);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_56386,root_props_56381);


var G__56387 = seq__56284_56382;
var G__56388 = chunk__56285_56383;
var G__56389 = count__56286_56384;
var G__56390 = (i__56287_56385 + (1));
seq__56284_56382 = G__56387;
chunk__56285_56383 = G__56388;
count__56286_56384 = G__56389;
i__56287_56385 = G__56390;
continue;
} else {
var temp__5753__auto___56391__$1 = cljs.core.seq(seq__56284_56382);
if(temp__5753__auto___56391__$1){
var seq__56284_56392__$1 = temp__5753__auto___56391__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56284_56392__$1)){
var c__4638__auto___56393 = cljs.core.chunk_first(seq__56284_56392__$1);
var G__56394 = cljs.core.chunk_rest(seq__56284_56392__$1);
var G__56395 = c__4638__auto___56393;
var G__56396 = cljs.core.count(c__4638__auto___56393);
var G__56397 = (0);
seq__56284_56382 = G__56394;
chunk__56285_56383 = G__56395;
count__56286_56384 = G__56396;
i__56287_56385 = G__56397;
continue;
} else {
var root_56398 = cljs.core.first(seq__56284_56392__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_56398,root_props_56381);


var G__56399 = cljs.core.next(seq__56284_56392__$1);
var G__56400 = null;
var G__56401 = (0);
var G__56402 = (0);
seq__56284_56382 = G__56399;
chunk__56285_56383 = G__56400;
count__56286_56384 = G__56401;
i__56287_56385 = G__56402;
continue;
}
} else {
}
}
break;
}


var G__56403 = cljs.core.next(seq__56232__$1);
var G__56404 = null;
var G__56405 = (0);
var G__56406 = (0);
seq__56232 = G__56403;
chunk__56234 = G__56404;
count__56235 = G__56405;
i__56236 = G__56406;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_stale_components_BANG_(app,options){
var map__56292 = app;
var map__56292__$1 = cljs.core.__destructure_map(map__56292);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56292__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56293 = cljs.core.deref(runtime_atom);
var map__56293__$1 = cljs.core.__destructure_map(map__56293);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56293__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__56299 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__56299__$1 = cljs.core.__destructure_map(map__56299);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56299__$1,true);
var seq__56300 = cljs.core.seq(limited_idents);
var chunk__56301 = null;
var count__56302 = (0);
var i__56303 = (0);
while(true){
if((i__56303 < count__56302)){
var i = chunk__56301.cljs$core$IIndexed$_nth$arity$2(null,i__56303);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,i);


var G__56421 = seq__56300;
var G__56422 = chunk__56301;
var G__56423 = count__56302;
var G__56424 = (i__56303 + (1));
seq__56300 = G__56421;
chunk__56301 = G__56422;
count__56302 = G__56423;
i__56303 = G__56424;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56300);
if(temp__5753__auto__){
var seq__56300__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56300__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__56300__$1);
var G__56425 = cljs.core.chunk_rest(seq__56300__$1);
var G__56426 = c__4638__auto__;
var G__56427 = cljs.core.count(c__4638__auto__);
var G__56428 = (0);
seq__56300 = G__56425;
chunk__56301 = G__56426;
count__56302 = G__56427;
i__56303 = G__56428;
continue;
} else {
var i = cljs.core.first(seq__56300__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,i);


var G__56429 = cljs.core.next(seq__56300__$1);
var G__56430 = null;
var G__56431 = (0);
var G__56432 = (0);
seq__56300 = G__56429;
chunk__56301 = G__56430;
count__56302 = G__56431;
i__56303 = G__56432;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app,options);
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render.
 * 
 *   This renderer always does a keyframe render *unless* an `:only-refresh` option is passed to the stack
 *   (usually as an option on `(transact! this [(f)] {:only-refresh [...idents...]})`. In that case the renderer
 *   will ignore *all* data diffing and will target refresh only to the on-screen components that have the listed
 *   ident(s). This allows you to get component-local state refresh rates on transactions that are responding to
 *   events that should really only affect a known set of components (like the input field).
 * 
 *   This option does *not* currently support using query keywords in the refresh set. Only idents.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_BANG_(var_args){
var G__56307 = arguments.length;
switch (G__56307) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__56308){
var map__56309 = p__56308;
var map__56309__$1 = cljs.core.__destructure_map(map__56309);
var options = map__56309__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56309__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56309__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4212__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app,options);
}catch (e56310){var e = e56310;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,152,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,240020945);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app,options);
}}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Generate a plain React class that can render a Fulcro UIRoot. NOTE: The UIRoot must register/deregister itself
 *   in the component lifecycle:
 * 
 *   ```
 *   (defsc UIRoot [this props]
 *  {:componentDidMount     (fn [this] (mroot/register-root! this))
 *   :componentWillUnmount  (fn [this] (mroot/deregister-root! this))
 *   :initial-state {}
 *   :query [root-like-query]}
 *  ...)
 *   ```
 * 
 *   The `fulcro-app` is the app under which this root will be rendered. Create different factories if you have more than
 *   one mounted app.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_react_class = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_react_class(UIRoot,fulcro_app){
var cls = (function (){
return null;
});
var ui_root = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIRoot);
goog.object.extend(cls.prototype,React.Component.prototype,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this$ = this;
var js_props = this$.props;
var app__50861__auto__ = (function (){var or__4212__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return fulcro_app;
}
})();
var d__50862__auto__ = (function (){var or__4212__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})();
var _STAR_app_STAR__orig_val__56314 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__56315 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_depth_STAR__orig_val__56316 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_app_STAR__temp_val__56317 = app__50861__auto__;
var _STAR_shared_STAR__temp_val__56318 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__50861__auto__);
var _STAR_depth_STAR__temp_val__56319 = d__50862__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__56317);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__56318);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__56319);

try{var _STAR_denormalize_time_STAR__orig_val__56320 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__56321 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(fulcro_app)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__56321);

try{var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(UIRoot);
var state_map = (function (){var G__56322 = fulcro_app;
var G__56322__$1 = (((G__56322 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__56322));
if((G__56322__$1 == null)){
return null;
} else {
return cljs.core.deref(G__56322__$1);
}
})();
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__56323 = props;
var G__56324 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__56323,G__56324) : ui_root.call(null,G__56323,G__56324));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__56320);
}}finally {(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__56316);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__56315);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__56314);
}})], null)));

return cls;
});
/**
 * Create a factory that renders a floating root in a normal Fulcro context (body of a Fulcro component). This factory
 * has the same sync constraints as normal `component/factory` functions. See `components/with-parent-context`.
 * 
 *   `UIClass`: A class that will behave as a floating root. NOTE: that class MUST have a mount/unmount hook
 *   to regsiter/deregister itself as a root.
 * 
 *   `options`: An options map. Same as for `component/factory`. Note, however, that this factory will *not* receive
 *   props, so a `:keyfn` would have to be based on something else.
 * 
 *   You normally do not pass any props to this factory because it is controlling the component and feeding props from
 *   the database. Props sent to this factory are only used by the wrapper, however, `:react-key` is useful if you
 *   have a bunch of sibling roots and need to set the react key for each.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_factory(var_args){
var G__56326 = arguments.length;
switch (G__56326) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = (function (this$){
var _STAR_denormalize_time_STAR__orig_val__56328 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__56329 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components._STAR_app_STAR_)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__56329);

try{var state_map = (function (){var G__56331 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__56331__$1 = (((G__56331 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__56331));
if((G__56331__$1 == null)){
return null;
} else {
return cljs.core.deref(G__56331__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__56332 = (function (){var or__4212__auto__ = props;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__56333 = com.fulcrologic.fulcro.components.props(this$);
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__56332,G__56333) : ui_factory.call(null,G__56332,G__56333));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__56328);
}});
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
