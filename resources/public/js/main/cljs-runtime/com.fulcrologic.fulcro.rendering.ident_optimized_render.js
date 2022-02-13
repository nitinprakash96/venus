goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4210__auto__ = c;
if(cljs.core.truth_(and__4210__auto__)){
return ident;
} else {
return and__4210__auto__;
}
})())){
var map__61100 = app__$1;
var map__61100__$1 = cljs.core.__destructure_map(map__61100);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61100__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4212__auto__ = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = com.fulcrologic.fulcro.components.computed(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident),prior_computed);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
}),null)),null,518497111);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-1871504340);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__61113 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__61114 = null;
var count__61115 = (0);
var i__61116 = (0);
while(true){
if((i__61116 < count__61115)){
var c = chunk__61114.cljs$core$IIndexed$_nth$arity$2(null,i__61116);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__61479 = seq__61113;
var G__61480 = chunk__61114;
var G__61481 = count__61115;
var G__61482 = (i__61116 + (1));
seq__61113 = G__61479;
chunk__61114 = G__61480;
count__61115 = G__61481;
i__61116 = G__61482;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61113);
if(temp__5753__auto__){
var seq__61113__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61113__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__61113__$1);
var G__61484 = cljs.core.chunk_rest(seq__61113__$1);
var G__61485 = c__4638__auto__;
var G__61486 = cljs.core.count(c__4638__auto__);
var G__61487 = (0);
seq__61113 = G__61484;
chunk__61114 = G__61485;
count__61115 = G__61486;
i__61116 = G__61487;
continue;
} else {
var c = cljs.core.first(seq__61113__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__61489 = cljs.core.next(seq__61113__$1);
var G__61490 = null;
var G__61491 = (0);
var G__61492 = (0);
seq__61113 = G__61489;
chunk__61114 = G__61490;
count__61115 = G__61491;
i__61116 = G__61492;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__61120 = app__$1;
var map__61120__$1 = cljs.core.__destructure_map(map__61120);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61120__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__61121 = cljs.core.deref(runtime_atom);
var map__61121__$1 = cljs.core.__destructure_map(map__61121);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61121__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__61122 = indexes;
var map__61122__$1 = cljs.core.__destructure_map(map__61122);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61122__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61122__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61122__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4212__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__61124 = cljs.core.seq(classes);
var chunk__61125 = null;
var count__61126 = (0);
var i__61127 = (0);
while(true){
if((i__61127 < count__61126)){
var class$ = chunk__61125.cljs$core$IIndexed$_nth$arity$2(null,i__61127);
var seq__61177_61495 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__61179_61496 = null;
var count__61180_61497 = (0);
var i__61181_61498 = (0);
while(true){
if((i__61181_61498 < count__61180_61497)){
var component_61499 = chunk__61179_61496.cljs$core$IIndexed$_nth$arity$2(null,i__61181_61498);
var component_ident_61500 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_61499);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_61500,component_61499);


var G__61501 = seq__61177_61495;
var G__61502 = chunk__61179_61496;
var G__61503 = count__61180_61497;
var G__61504 = (i__61181_61498 + (1));
seq__61177_61495 = G__61501;
chunk__61179_61496 = G__61502;
count__61180_61497 = G__61503;
i__61181_61498 = G__61504;
continue;
} else {
var temp__5753__auto___61506 = cljs.core.seq(seq__61177_61495);
if(temp__5753__auto___61506){
var seq__61177_61507__$1 = temp__5753__auto___61506;
if(cljs.core.chunked_seq_QMARK_(seq__61177_61507__$1)){
var c__4638__auto___61511 = cljs.core.chunk_first(seq__61177_61507__$1);
var G__61513 = cljs.core.chunk_rest(seq__61177_61507__$1);
var G__61514 = c__4638__auto___61511;
var G__61515 = cljs.core.count(c__4638__auto___61511);
var G__61516 = (0);
seq__61177_61495 = G__61513;
chunk__61179_61496 = G__61514;
count__61180_61497 = G__61515;
i__61181_61498 = G__61516;
continue;
} else {
var component_61518 = cljs.core.first(seq__61177_61507__$1);
var component_ident_61519 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_61518);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_61519,component_61518);


var G__61520 = cljs.core.next(seq__61177_61507__$1);
var G__61521 = null;
var G__61522 = (0);
var G__61523 = (0);
seq__61177_61495 = G__61520;
chunk__61179_61496 = G__61521;
count__61180_61497 = G__61522;
i__61181_61498 = G__61523;
continue;
}
} else {
}
}
break;
}


var G__61524 = seq__61124;
var G__61525 = chunk__61125;
var G__61526 = count__61126;
var G__61527 = (i__61127 + (1));
seq__61124 = G__61524;
chunk__61125 = G__61525;
count__61126 = G__61526;
i__61127 = G__61527;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61124);
if(temp__5753__auto__){
var seq__61124__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61124__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__61124__$1);
var G__61532 = cljs.core.chunk_rest(seq__61124__$1);
var G__61533 = c__4638__auto__;
var G__61534 = cljs.core.count(c__4638__auto__);
var G__61535 = (0);
seq__61124 = G__61532;
chunk__61125 = G__61533;
count__61126 = G__61534;
i__61127 = G__61535;
continue;
} else {
var class$ = cljs.core.first(seq__61124__$1);
var seq__61194_61538 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__61196_61539 = null;
var count__61197_61540 = (0);
var i__61198_61541 = (0);
while(true){
if((i__61198_61541 < count__61197_61540)){
var component_61546 = chunk__61196_61539.cljs$core$IIndexed$_nth$arity$2(null,i__61198_61541);
var component_ident_61547 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_61546);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_61547,component_61546);


var G__61549 = seq__61194_61538;
var G__61550 = chunk__61196_61539;
var G__61551 = count__61197_61540;
var G__61552 = (i__61198_61541 + (1));
seq__61194_61538 = G__61549;
chunk__61196_61539 = G__61550;
count__61197_61540 = G__61551;
i__61198_61541 = G__61552;
continue;
} else {
var temp__5753__auto___61554__$1 = cljs.core.seq(seq__61194_61538);
if(temp__5753__auto___61554__$1){
var seq__61194_61555__$1 = temp__5753__auto___61554__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61194_61555__$1)){
var c__4638__auto___61556 = cljs.core.chunk_first(seq__61194_61555__$1);
var G__61557 = cljs.core.chunk_rest(seq__61194_61555__$1);
var G__61558 = c__4638__auto___61556;
var G__61559 = cljs.core.count(c__4638__auto___61556);
var G__61560 = (0);
seq__61194_61538 = G__61557;
chunk__61196_61539 = G__61558;
count__61197_61540 = G__61559;
i__61198_61541 = G__61560;
continue;
} else {
var component_61562 = cljs.core.first(seq__61194_61555__$1);
var component_ident_61563 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_61562);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_61563,component_61562);


var G__61564 = cljs.core.next(seq__61194_61555__$1);
var G__61565 = null;
var G__61566 = (0);
var G__61567 = (0);
seq__61194_61538 = G__61564;
chunk__61196_61539 = G__61565;
count__61197_61540 = G__61566;
i__61198_61541 = G__61567;
continue;
}
} else {
}
}
break;
}


var G__61568 = cljs.core.next(seq__61124__$1);
var G__61569 = null;
var G__61570 = (0);
var G__61571 = (0);
seq__61124 = G__61568;
chunk__61125 = G__61569;
count__61126 = G__61570;
i__61127 = G__61571;
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
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__61216 = app__$1;
var map__61216__$1 = cljs.core.__destructure_map(map__61216);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61216__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__61217 = cljs.core.deref(runtime_atom);
var map__61217__$1 = cljs.core.__destructure_map(map__61217);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61217__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__61218 = indexes;
var map__61218__$1 = cljs.core.__destructure_map(map__61218);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61218__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61218__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__61212_SHARP_,p2__61213_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__61212_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__61213_SHARP_) : class__GT_components.call(null,p2__61213_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__61224 = app__$1;
var map__61224__$1 = cljs.core.__destructure_map(map__61224);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61224__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61224__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__61225 = cljs.core.deref(runtime_atom);
var map__61225__$1 = cljs.core.__destructure_map(map__61225);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61225__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61225__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61225__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61225__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__61226 = indexes;
var map__61226__$1 = cljs.core.__destructure_map(map__61226);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61226__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61226__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61226__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61226__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__61242 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__61242__$1 = cljs.core.__destructure_map(map__61242);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61242__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61242__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__61243_61582 = cljs.core.seq(limited_to_render);
var chunk__61245_61583 = null;
var count__61246_61584 = (0);
var i__61247_61585 = (0);
while(true){
if((i__61247_61585 < count__61246_61584)){
var c_61587 = chunk__61245_61583.cljs$core$IIndexed$_nth$arity$2(null,i__61247_61585);
var ident_61588 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_61587);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_61588,c_61587);


var G__61589 = seq__61243_61582;
var G__61590 = chunk__61245_61583;
var G__61591 = count__61246_61584;
var G__61592 = (i__61247_61585 + (1));
seq__61243_61582 = G__61589;
chunk__61245_61583 = G__61590;
count__61246_61584 = G__61591;
i__61247_61585 = G__61592;
continue;
} else {
var temp__5753__auto___61594 = cljs.core.seq(seq__61243_61582);
if(temp__5753__auto___61594){
var seq__61243_61595__$1 = temp__5753__auto___61594;
if(cljs.core.chunked_seq_QMARK_(seq__61243_61595__$1)){
var c__4638__auto___61597 = cljs.core.chunk_first(seq__61243_61595__$1);
var G__61598 = cljs.core.chunk_rest(seq__61243_61595__$1);
var G__61599 = c__4638__auto___61597;
var G__61600 = cljs.core.count(c__4638__auto___61597);
var G__61601 = (0);
seq__61243_61582 = G__61598;
chunk__61245_61583 = G__61599;
count__61246_61584 = G__61600;
i__61247_61585 = G__61601;
continue;
} else {
var c_61603 = cljs.core.first(seq__61243_61595__$1);
var ident_61604 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_61603);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_61604,c_61603);


var G__61605 = cljs.core.next(seq__61243_61595__$1);
var G__61606 = null;
var G__61607 = (0);
var G__61608 = (0);
seq__61243_61582 = G__61605;
chunk__61245_61583 = G__61606;
count__61246_61584 = G__61607;
i__61247_61585 = G__61608;
continue;
}
} else {
}
}
break;
}

var seq__61280 = cljs.core.seq(limited_idents);
var chunk__61281 = null;
var count__61282 = (0);
var i__61283 = (0);
while(true){
if((i__61283 < count__61282)){
var i = chunk__61281.cljs$core$IIndexed$_nth$arity$2(null,i__61283);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__61610 = seq__61280;
var G__61611 = chunk__61281;
var G__61612 = count__61282;
var G__61613 = (i__61283 + (1));
seq__61280 = G__61610;
chunk__61281 = G__61611;
count__61282 = G__61612;
i__61283 = G__61613;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61280);
if(temp__5753__auto__){
var seq__61280__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61280__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__61280__$1);
var G__61614 = cljs.core.chunk_rest(seq__61280__$1);
var G__61615 = c__4638__auto__;
var G__61616 = cljs.core.count(c__4638__auto__);
var G__61617 = (0);
seq__61280 = G__61614;
chunk__61281 = G__61615;
count__61282 = G__61616;
i__61283 = G__61617;
continue;
} else {
var i = cljs.core.first(seq__61280__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__61618 = cljs.core.next(seq__61280__$1);
var G__61619 = null;
var G__61620 = (0);
var G__61621 = (0);
seq__61280 = G__61618;
chunk__61281 = G__61619;
count__61282 = G__61620;
i__61283 = G__61621;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4212__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__61325 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__61325__$1 = cljs.core.__destructure_map(map__61325);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61325__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61325__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__61326_61629 = cljs.core.seq(all_idents);
var chunk__61327_61630 = null;
var count__61328_61631 = (0);
var i__61329_61632 = (0);
while(true){
if((i__61329_61632 < count__61328_61631)){
var i_61633 = chunk__61327_61630.cljs$core$IIndexed$_nth$arity$2(null,i__61329_61632);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_61633);


var G__61635 = seq__61326_61629;
var G__61636 = chunk__61327_61630;
var G__61637 = count__61328_61631;
var G__61638 = (i__61329_61632 + (1));
seq__61326_61629 = G__61635;
chunk__61327_61630 = G__61636;
count__61328_61631 = G__61637;
i__61329_61632 = G__61638;
continue;
} else {
var temp__5753__auto___61642 = cljs.core.seq(seq__61326_61629);
if(temp__5753__auto___61642){
var seq__61326_61643__$1 = temp__5753__auto___61642;
if(cljs.core.chunked_seq_QMARK_(seq__61326_61643__$1)){
var c__4638__auto___61644 = cljs.core.chunk_first(seq__61326_61643__$1);
var G__61645 = cljs.core.chunk_rest(seq__61326_61643__$1);
var G__61646 = c__4638__auto___61644;
var G__61647 = cljs.core.count(c__4638__auto___61644);
var G__61648 = (0);
seq__61326_61629 = G__61645;
chunk__61327_61630 = G__61646;
count__61328_61631 = G__61647;
i__61329_61632 = G__61648;
continue;
} else {
var i_61651 = cljs.core.first(seq__61326_61643__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_61651);


var G__61652 = cljs.core.next(seq__61326_61643__$1);
var G__61653 = null;
var G__61654 = (0);
var G__61655 = (0);
seq__61326_61629 = G__61652;
chunk__61327_61630 = G__61653;
count__61328_61631 = G__61654;
i__61329_61632 = G__61655;
continue;
}
} else {
}
}
break;
}

var seq__61366 = cljs.core.seq(extra_to_force);
var chunk__61367 = null;
var count__61368 = (0);
var i__61369 = (0);
while(true){
if((i__61369 < count__61368)){
var c = chunk__61367.cljs$core$IIndexed$_nth$arity$2(null,i__61369);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__61661 = seq__61366;
var G__61662 = chunk__61367;
var G__61663 = count__61368;
var G__61664 = (i__61369 + (1));
seq__61366 = G__61661;
chunk__61367 = G__61662;
count__61368 = G__61663;
i__61369 = G__61664;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61366);
if(temp__5753__auto__){
var seq__61366__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61366__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__61366__$1);
var G__61665 = cljs.core.chunk_rest(seq__61366__$1);
var G__61666 = c__4638__auto__;
var G__61667 = cljs.core.count(c__4638__auto__);
var G__61668 = (0);
seq__61366 = G__61665;
chunk__61367 = G__61666;
count__61368 = G__61667;
i__61369 = G__61668;
continue;
} else {
var c = cljs.core.first(seq__61366__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__61669 = cljs.core.next(seq__61366__$1);
var G__61670 = null;
var G__61671 = (0);
var G__61672 = (0);
seq__61366 = G__61669;
chunk__61367 = G__61670;
count__61368 = G__61671;
i__61369 = G__61672;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__61442 = arguments.length;
switch (G__61442) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__61443){
var map__61444 = p__61443;
var map__61444__$1 = cljs.core.__destructure_map(map__61444);
var options = map__61444__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61444__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61444__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4212__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e61447){var e = e61447;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,1264792987);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
