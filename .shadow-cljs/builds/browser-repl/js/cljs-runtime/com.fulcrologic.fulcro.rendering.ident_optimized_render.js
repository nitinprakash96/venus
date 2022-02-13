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
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app,ident,c){
if(cljs.core.truth_((function (){var and__4210__auto__ = c;
if(cljs.core.truth_(and__4210__auto__)){
return ident;
} else {
return and__4210__auto__;
}
})())){
var map__55864 = app;
var map__55864__$1 = cljs.core.__destructure_map(map__55864);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55864__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
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
}),null)),null,-2125348190);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident."], null);
}),null)),null,860192941);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app,ident){
var seq__55867 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app,ident));
var chunk__55868 = null;
var count__55869 = (0);
var i__55870 = (0);
while(true){
if((i__55870 < count__55869)){
var c = chunk__55868.cljs$core$IIndexed$_nth$arity$2(null,i__55870);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__56034 = seq__55867;
var G__56035 = chunk__55868;
var G__56036 = count__55869;
var G__56037 = (i__55870 + (1));
seq__55867 = G__56034;
chunk__55868 = G__56035;
count__55869 = G__56036;
i__55870 = G__56037;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55867);
if(temp__5753__auto__){
var seq__55867__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55867__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__55867__$1);
var G__56038 = cljs.core.chunk_rest(seq__55867__$1);
var G__56039 = c__4638__auto__;
var G__56040 = cljs.core.count(c__4638__auto__);
var G__56041 = (0);
seq__55867 = G__56038;
chunk__55868 = G__56039;
count__55869 = G__56040;
i__55870 = G__56041;
continue;
} else {
var c = cljs.core.first(seq__55867__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__56042 = cljs.core.next(seq__55867__$1);
var G__56043 = null;
var G__56044 = (0);
var G__56045 = (0);
seq__55867 = G__56042;
chunk__55868 = G__56043;
count__55869 = G__56044;
i__55870 = G__56045;
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
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,ident);

var map__55879 = app;
var map__55879__$1 = cljs.core.__destructure_map(map__55879);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55879__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__55880 = cljs.core.deref(runtime_atom);
var map__55880__$1 = cljs.core.__destructure_map(map__55880);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55880__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__55881 = indexes;
var map__55881__$1 = cljs.core.__destructure_map(map__55881);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
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
var seq__55887 = cljs.core.seq(classes);
var chunk__55888 = null;
var count__55889 = (0);
var i__55890 = (0);
while(true){
if((i__55890 < count__55889)){
var class$ = chunk__55888.cljs$core$IIndexed$_nth$arity$2(null,i__55890);
var seq__55917_56046 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__55919_56047 = null;
var count__55920_56048 = (0);
var i__55921_56049 = (0);
while(true){
if((i__55921_56049 < count__55920_56048)){
var component_56050 = chunk__55919_56047.cljs$core$IIndexed$_nth$arity$2(null,i__55921_56049);
var component_ident_56051 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_56050);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_56051,component_56050);


var G__56054 = seq__55917_56046;
var G__56055 = chunk__55919_56047;
var G__56056 = count__55920_56048;
var G__56057 = (i__55921_56049 + (1));
seq__55917_56046 = G__56054;
chunk__55919_56047 = G__56055;
count__55920_56048 = G__56056;
i__55921_56049 = G__56057;
continue;
} else {
var temp__5753__auto___56058 = cljs.core.seq(seq__55917_56046);
if(temp__5753__auto___56058){
var seq__55917_56060__$1 = temp__5753__auto___56058;
if(cljs.core.chunked_seq_QMARK_(seq__55917_56060__$1)){
var c__4638__auto___56062 = cljs.core.chunk_first(seq__55917_56060__$1);
var G__56063 = cljs.core.chunk_rest(seq__55917_56060__$1);
var G__56064 = c__4638__auto___56062;
var G__56065 = cljs.core.count(c__4638__auto___56062);
var G__56066 = (0);
seq__55917_56046 = G__56063;
chunk__55919_56047 = G__56064;
count__55920_56048 = G__56065;
i__55921_56049 = G__56066;
continue;
} else {
var component_56067 = cljs.core.first(seq__55917_56060__$1);
var component_ident_56068 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_56067);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_56068,component_56067);


var G__56069 = cljs.core.next(seq__55917_56060__$1);
var G__56070 = null;
var G__56071 = (0);
var G__56072 = (0);
seq__55917_56046 = G__56069;
chunk__55919_56047 = G__56070;
count__55920_56048 = G__56071;
i__55921_56049 = G__56072;
continue;
}
} else {
}
}
break;
}


var G__56074 = seq__55887;
var G__56075 = chunk__55888;
var G__56076 = count__55889;
var G__56077 = (i__55890 + (1));
seq__55887 = G__56074;
chunk__55888 = G__56075;
count__55889 = G__56076;
i__55890 = G__56077;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55887);
if(temp__5753__auto__){
var seq__55887__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55887__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__55887__$1);
var G__56082 = cljs.core.chunk_rest(seq__55887__$1);
var G__56083 = c__4638__auto__;
var G__56084 = cljs.core.count(c__4638__auto__);
var G__56085 = (0);
seq__55887 = G__56082;
chunk__55888 = G__56083;
count__55889 = G__56084;
i__55890 = G__56085;
continue;
} else {
var class$ = cljs.core.first(seq__55887__$1);
var seq__55925_56086 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__55927_56087 = null;
var count__55928_56088 = (0);
var i__55929_56089 = (0);
while(true){
if((i__55929_56089 < count__55928_56088)){
var component_56090 = chunk__55927_56087.cljs$core$IIndexed$_nth$arity$2(null,i__55929_56089);
var component_ident_56091 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_56090);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_56091,component_56090);


var G__56092 = seq__55925_56086;
var G__56093 = chunk__55927_56087;
var G__56094 = count__55928_56088;
var G__56095 = (i__55929_56089 + (1));
seq__55925_56086 = G__56092;
chunk__55927_56087 = G__56093;
count__55928_56088 = G__56094;
i__55929_56089 = G__56095;
continue;
} else {
var temp__5753__auto___56097__$1 = cljs.core.seq(seq__55925_56086);
if(temp__5753__auto___56097__$1){
var seq__55925_56103__$1 = temp__5753__auto___56097__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55925_56103__$1)){
var c__4638__auto___56104 = cljs.core.chunk_first(seq__55925_56103__$1);
var G__56106 = cljs.core.chunk_rest(seq__55925_56103__$1);
var G__56107 = c__4638__auto___56104;
var G__56108 = cljs.core.count(c__4638__auto___56104);
var G__56109 = (0);
seq__55925_56086 = G__56106;
chunk__55927_56087 = G__56107;
count__55928_56088 = G__56108;
i__55929_56089 = G__56109;
continue;
} else {
var component_56112 = cljs.core.first(seq__55925_56103__$1);
var component_ident_56113 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_56112);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_56113,component_56112);


var G__56114 = cljs.core.next(seq__55925_56103__$1);
var G__56115 = null;
var G__56116 = (0);
var G__56117 = (0);
seq__55925_56086 = G__56114;
chunk__55927_56087 = G__56115;
count__55928_56088 = G__56116;
i__55929_56089 = G__56117;
continue;
}
} else {
}
}
break;
}


var G__56118 = cljs.core.next(seq__55887__$1);
var G__56119 = null;
var G__56120 = (0);
var G__56121 = (0);
seq__55887 = G__56118;
chunk__55888 = G__56119;
count__55889 = G__56120;
i__55890 = G__56121;
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
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app,property_set){
if(cljs.core.seq(property_set)){
var map__55954 = app;
var map__55954__$1 = cljs.core.__destructure_map(map__55954);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55954__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__55955 = cljs.core.deref(runtime_atom);
var map__55955__$1 = cljs.core.__destructure_map(map__55955);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55955__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__55956 = indexes;
var map__55956__$1 = cljs.core.__destructure_map(map__55956);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55956__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55956__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__55949_SHARP_,p2__55950_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__55949_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__55950_SHARP_) : class__GT_components.call(null,p2__55950_SHARP_)));
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
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app){
var map__55961 = app;
var map__55961__$1 = cljs.core.__destructure_map(map__55961);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__55962 = cljs.core.deref(runtime_atom);
var map__55962__$1 = cljs.core.__destructure_map(map__55962);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__55963 = indexes;
var map__55963__$1 = cljs.core.__destructure_map(map__55963);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55963__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55963__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55963__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55963__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__55965 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__55965__$1 = cljs.core.__destructure_map(map__55965);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55965__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55965__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,limited_props);
var seq__55966_56143 = cljs.core.seq(limited_to_render);
var chunk__55968_56144 = null;
var count__55969_56145 = (0);
var i__55970_56146 = (0);
while(true){
if((i__55970_56146 < count__55969_56145)){
var c_56147 = chunk__55968_56144.cljs$core$IIndexed$_nth$arity$2(null,i__55970_56146);
var ident_56148 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_56147);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_56148,c_56147);


var G__56149 = seq__55966_56143;
var G__56150 = chunk__55968_56144;
var G__56151 = count__55969_56145;
var G__56152 = (i__55970_56146 + (1));
seq__55966_56143 = G__56149;
chunk__55968_56144 = G__56150;
count__55969_56145 = G__56151;
i__55970_56146 = G__56152;
continue;
} else {
var temp__5753__auto___56153 = cljs.core.seq(seq__55966_56143);
if(temp__5753__auto___56153){
var seq__55966_56154__$1 = temp__5753__auto___56153;
if(cljs.core.chunked_seq_QMARK_(seq__55966_56154__$1)){
var c__4638__auto___56155 = cljs.core.chunk_first(seq__55966_56154__$1);
var G__56156 = cljs.core.chunk_rest(seq__55966_56154__$1);
var G__56157 = c__4638__auto___56155;
var G__56158 = cljs.core.count(c__4638__auto___56155);
var G__56159 = (0);
seq__55966_56143 = G__56156;
chunk__55968_56144 = G__56157;
count__55969_56145 = G__56158;
i__55970_56146 = G__56159;
continue;
} else {
var c_56160 = cljs.core.first(seq__55966_56154__$1);
var ident_56161 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_56160);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_56161,c_56160);


var G__56162 = cljs.core.next(seq__55966_56154__$1);
var G__56163 = null;
var G__56164 = (0);
var G__56165 = (0);
seq__55966_56143 = G__56162;
chunk__55968_56144 = G__56163;
count__55969_56145 = G__56164;
i__55970_56146 = G__56165;
continue;
}
} else {
}
}
break;
}

var seq__55976 = cljs.core.seq(limited_idents);
var chunk__55977 = null;
var count__55978 = (0);
var i__55979 = (0);
while(true){
if((i__55979 < count__55978)){
var i = chunk__55977.cljs$core$IIndexed$_nth$arity$2(null,i__55979);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__56166 = seq__55976;
var G__56167 = chunk__55977;
var G__56168 = count__55978;
var G__56169 = (i__55979 + (1));
seq__55976 = G__56166;
chunk__55977 = G__56167;
count__55978 = G__56168;
i__55979 = G__56169;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55976);
if(temp__5753__auto__){
var seq__55976__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55976__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__55976__$1);
var G__56172 = cljs.core.chunk_rest(seq__55976__$1);
var G__56173 = c__4638__auto__;
var G__56174 = cljs.core.count(c__4638__auto__);
var G__56175 = (0);
seq__55976 = G__56172;
chunk__55977 = G__56173;
count__55978 = G__56174;
i__55979 = G__56175;
continue;
} else {
var i = cljs.core.first(seq__55976__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__56177 = cljs.core.next(seq__55976__$1);
var G__56178 = null;
var G__56179 = (0);
var G__56180 = (0);
seq__55976 = G__56177;
chunk__55977 = G__56178;
count__55978 = G__56179;
i__55979 = G__56180;
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
var map__55984 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__55984__$1 = cljs.core.__destructure_map(map__55984);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55984__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55984__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__55989_56182 = cljs.core.seq(all_idents);
var chunk__55990_56183 = null;
var count__55991_56184 = (0);
var i__55992_56185 = (0);
while(true){
if((i__55992_56185 < count__55991_56184)){
var i_56190 = chunk__55990_56183.cljs$core$IIndexed$_nth$arity$2(null,i__55992_56185);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_56190);


var G__56192 = seq__55989_56182;
var G__56193 = chunk__55990_56183;
var G__56194 = count__55991_56184;
var G__56195 = (i__55992_56185 + (1));
seq__55989_56182 = G__56192;
chunk__55990_56183 = G__56193;
count__55991_56184 = G__56194;
i__55992_56185 = G__56195;
continue;
} else {
var temp__5753__auto___56197 = cljs.core.seq(seq__55989_56182);
if(temp__5753__auto___56197){
var seq__55989_56198__$1 = temp__5753__auto___56197;
if(cljs.core.chunked_seq_QMARK_(seq__55989_56198__$1)){
var c__4638__auto___56199 = cljs.core.chunk_first(seq__55989_56198__$1);
var G__56200 = cljs.core.chunk_rest(seq__55989_56198__$1);
var G__56201 = c__4638__auto___56199;
var G__56202 = cljs.core.count(c__4638__auto___56199);
var G__56203 = (0);
seq__55989_56182 = G__56200;
chunk__55990_56183 = G__56201;
count__55991_56184 = G__56202;
i__55992_56185 = G__56203;
continue;
} else {
var i_56204 = cljs.core.first(seq__55989_56198__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_56204);


var G__56205 = cljs.core.next(seq__55989_56198__$1);
var G__56206 = null;
var G__56207 = (0);
var G__56208 = (0);
seq__55989_56182 = G__56205;
chunk__55990_56183 = G__56206;
count__55991_56184 = G__56207;
i__55992_56185 = G__56208;
continue;
}
} else {
}
}
break;
}

var seq__56002 = cljs.core.seq(extra_to_force);
var chunk__56003 = null;
var count__56004 = (0);
var i__56005 = (0);
while(true){
if((i__56005 < count__56004)){
var c = chunk__56003.cljs$core$IIndexed$_nth$arity$2(null,i__56005);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__56210 = seq__56002;
var G__56211 = chunk__56003;
var G__56212 = count__56004;
var G__56213 = (i__56005 + (1));
seq__56002 = G__56210;
chunk__56003 = G__56211;
count__56004 = G__56212;
i__56005 = G__56213;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56002);
if(temp__5753__auto__){
var seq__56002__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56002__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__56002__$1);
var G__56214 = cljs.core.chunk_rest(seq__56002__$1);
var G__56215 = c__4638__auto__;
var G__56216 = cljs.core.count(c__4638__auto__);
var G__56217 = (0);
seq__56002 = G__56214;
chunk__56003 = G__56215;
count__56004 = G__56216;
i__56005 = G__56217;
continue;
} else {
var c = cljs.core.first(seq__56002__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__56222 = cljs.core.next(seq__56002__$1);
var G__56223 = null;
var G__56224 = (0);
var G__56225 = (0);
seq__56002 = G__56222;
chunk__56003 = G__56223;
count__56004 = G__56224;
i__56005 = G__56225;
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
var G__56016 = arguments.length;
switch (G__56016) {
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

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__56018){
var map__56019 = p__56018;
var map__56019__$1 = cljs.core.__destructure_map(map__56019);
var options = map__56019__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56019__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56019__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4212__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app);
}catch (e56024){var e = e56024;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,1256038690);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
