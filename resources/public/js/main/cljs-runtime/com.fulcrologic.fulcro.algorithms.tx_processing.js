goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing');


/**
 * Returns the remotes map from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$app__GT_remotes(app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517)], null);

return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
});
/**
 * Returns a set of the names of the remotes from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names = (function com$fulcrologic$fulcro$algorithms$tx_processing$app__GT_remote_names(app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

return cljs.core.set(cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)))));
});
/**
 * Splits the given send queue into two send queues:
 *   [parallel-items sequential-items].
 */
com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel = (function com$fulcrologic$fulcro$algorithms$tx_processing$extract_parallel(sends){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__64015){
return cljs.core.vector_QMARK_(G__64015);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rest","rest",-1241696419)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null))], null);

var parallel_QMARK_ = (function (p__64018){
var map__64019 = p__64018;
var map__64019__$1 = cljs.core.__destructure_map(map__64019);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64019__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return cljs.core.boolean$((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535).cljs$core$IFn$_invoke$arity$1(options);
}
})());
});
var map__64017 = cljs.core.group_by(parallel_QMARK_,sends);
var map__64017__$1 = cljs.core.__destructure_map(map__64017);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64017__$1,true);
var sequential = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64017__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(parallel),cljs.core.vec(sequential)], null);
});
/**
 * Check if the given `test` predicate is true for an AST node or for all the immediate children of an AST tree.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$every_ast_QMARK_(ast_node_or_tree,test){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree))){
return cljs.core.every_QMARK_(test,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree));
} else {
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(ast_node_or_tree) : test.call(null,ast_node_or_tree));
}
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.mutation_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$mutation_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__64020_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__64020_SHARP_));
}));
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.query_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$query_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__64022_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__64022_SHARP_));
}));
});
/**
 * Sort function on a send queue. Leaves any active nodes in front, and sorts the remainder of the queue so that writes
 *   appear before reads, without changing the relative order in blocks of reads/writes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.sort_queue_writes_before_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$sort_queue_writes_before_reads(send_queue){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null);

var vec__64025 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64025,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64025,(1),null);
var id_sequence = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(n));
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),send_queue__$1));
var clusters = cljs.core.group_by(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.vec(send_queue__$1));
var map__64028 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,id){
var vec__64031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,id);
var seq__64032 = cljs.core.seq(vec__64031);
var first__64033 = cljs.core.first(seq__64032);
var seq__64032__$1 = cljs.core.next(seq__64032);
var map__64034 = first__64033;
var map__64034__$1 = cljs.core.__destructure_map(map__64034);
var n = map__64034__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64034__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var _ = seq__64032__$1;
var cluster = vec__64031;
if((ast == null)){
return result;
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.query_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.into,cluster);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.mutation_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.into,cluster);
} else {
return result;

}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentVector.EMPTY], null),id_sequence);
var map__64028__$1 = cljs.core.__destructure_map(map__64028);
var reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64028__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var writes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64028__$1,new cljs.core.Keyword(null,"writes","writes",-102226269));
var send_queue__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_queue,writes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reads], 0)));
return send_queue__$2;
});
com.fulcrologic.fulcro.algorithms.tx_processing.top_keys = (function com$fulcrologic$fulcro$algorithms$tx_processing$top_keys(p__64035){
var map__64036 = p__64035;
var map__64036__$1 = cljs.core.__destructure_map(map__64036);
var ast = map__64036__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64036__$1,new cljs.core.Keyword(null,"children","children",-940561982));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__64038){
return cljs.core.coll_QMARK_(G__64038);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796))], null),null)], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),children);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
}
});
/**
 * Takes a send queue and returns a map containing a new combined send node that can act as a single network request,
 *   along with the updated send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$combine_sends(app__$1,remote_name,send_queue){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__64041){
return cljs.core.map_QMARK_(G__64041);
}),(function (G__64041){
return cljs.core.contains_QMARK_(G__64041,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__64041){
return ((cljs.core.map_QMARK_(G__64041)) && (cljs.core.contains_QMARK_(G__64041,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

var vec__64063 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64063,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64063,(1),null);
var send_queue__$2 = com.fulcrologic.fulcro.algorithms.tx_processing.sort_queue_writes_before_reads(cljs.core.vec(send_queue__$1));
var id_to_send = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var options = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var vec__64066 = cljs.core.split_with((function (p1__64039_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_to_send,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__64039_SHARP_));
}),send_queue__$2);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64066,(0),null);
var to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64066,(1),null);
var tx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__64073){
var map__64074 = p__64073;
var map__64074__$1 = cljs.core.__destructure_map(map__64074);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64074__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var tx = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,tx);
}),cljs.core.PersistentVector.EMPTY,to_send);
var ast = edn_query_language.core.query__GT_ast(tx);
var combined_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var combined_node_idx = (0);
var combined_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),combined_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),combined_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),(function (p__64075){
var map__64076 = p__64075;
var map__64076__$1 = cljs.core.__destructure_map(map__64076);
var combined_result = map__64076__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64076__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__64077 = cljs.core.seq(to_send);
var chunk__64079 = null;
var count__64080 = (0);
var i__64081 = (0);
while(true){
if((i__64081 < count__64080)){
var map__64094 = chunk__64079.cljs$core$IIndexed$_nth$arity$2(null,i__64081);
var map__64094__$1 = cljs.core.__destructure_map(map__64094);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64094__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__64475 = seq__64077;
var G__64476 = chunk__64079;
var G__64477 = count__64080;
var G__64478 = (i__64081 + (1));
seq__64077 = G__64475;
chunk__64079 = G__64476;
count__64080 = G__64477;
i__64081 = G__64478;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64077);
if(temp__5753__auto__){
var seq__64077__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64077__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__64077__$1);
var G__64480 = cljs.core.chunk_rest(seq__64077__$1);
var G__64481 = c__4638__auto__;
var G__64482 = cljs.core.count(c__4638__auto__);
var G__64483 = (0);
seq__64077 = G__64480;
chunk__64079 = G__64481;
count__64080 = G__64482;
i__64081 = G__64483;
continue;
} else {
var map__64096 = cljs.core.first(seq__64077__$1);
var map__64096__$1 = cljs.core.__destructure_map(map__64096);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64096__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__64486 = cljs.core.next(seq__64077__$1);
var G__64487 = null;
var G__64488 = (0);
var G__64489 = (0);
seq__64077 = G__64486;
chunk__64079 = G__64487;
count__64080 = G__64488;
i__64081 = G__64489;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__64098){
var map__64099 = p__64098;
var map__64099__$1 = cljs.core.__destructure_map(map__64099);
var combined_result = map__64099__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64099__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__64100_64490 = cljs.core.seq(to_send);
var chunk__64101_64491 = null;
var count__64102_64492 = (0);
var i__64103_64493 = (0);
while(true){
if((i__64103_64493 < count__64102_64492)){
var map__64119_64494 = chunk__64101_64491.cljs$core$IIndexed$_nth$arity$2(null,i__64103_64493);
var map__64119_64495__$1 = cljs.core.__destructure_map(map__64119_64494);
var ast_64496__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64119_64495__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler_64497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64119_64495__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_64498 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.top_keys(ast_64496__$1)):body);
var result_64499 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_64498);
if(cljs.core.truth_((function (){var and__4210__auto__ = (function (){var or__4212__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4210__auto__;
}
})())){
try{var map__64122_64500 = result_64499;
var map__64122_64501__$1 = cljs.core.__destructure_map(map__64122_64500);
var status_code_64502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64122_64501__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_64503__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64122_64501__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_64502)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_64503__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_64502));
}
}catch (e64121){var e_64505 = e64121;
}} else {
}

(result_handler_64497.cljs$core$IFn$_invoke$arity$1 ? result_handler_64497.cljs$core$IFn$_invoke$arity$1(result_64499) : result_handler_64497.call(null,result_64499));


var G__64506 = seq__64100_64490;
var G__64507 = chunk__64101_64491;
var G__64508 = count__64102_64492;
var G__64509 = (i__64103_64493 + (1));
seq__64100_64490 = G__64506;
chunk__64101_64491 = G__64507;
count__64102_64492 = G__64508;
i__64103_64493 = G__64509;
continue;
} else {
var temp__5753__auto___64510 = cljs.core.seq(seq__64100_64490);
if(temp__5753__auto___64510){
var seq__64100_64511__$1 = temp__5753__auto___64510;
if(cljs.core.chunked_seq_QMARK_(seq__64100_64511__$1)){
var c__4638__auto___64512 = cljs.core.chunk_first(seq__64100_64511__$1);
var G__64513 = cljs.core.chunk_rest(seq__64100_64511__$1);
var G__64514 = c__4638__auto___64512;
var G__64515 = cljs.core.count(c__4638__auto___64512);
var G__64516 = (0);
seq__64100_64490 = G__64513;
chunk__64101_64491 = G__64514;
count__64102_64492 = G__64515;
i__64103_64493 = G__64516;
continue;
} else {
var map__64125_64517 = cljs.core.first(seq__64100_64511__$1);
var map__64125_64518__$1 = cljs.core.__destructure_map(map__64125_64517);
var ast_64519__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64125_64518__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler_64520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64125_64518__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_64521 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.top_keys(ast_64519__$1)):body);
var result_64522 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_64521);
if(cljs.core.truth_((function (){var and__4210__auto__ = (function (){var or__4212__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4210__auto__;
}
})())){
try{var map__64127_64523 = result_64522;
var map__64127_64524__$1 = cljs.core.__destructure_map(map__64127_64523);
var status_code_64525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64127_64524__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_64526__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64127_64524__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_64525)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_64526__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_64525));
}
}catch (e64126){var e_64528 = e64126;
}} else {
}

(result_handler_64520.cljs$core$IFn$_invoke$arity$1 ? result_handler_64520.cljs$core$IFn$_invoke$arity$1(result_64522) : result_handler_64520.call(null,result_64522));


var G__64529 = cljs.core.next(seq__64100_64511__$1);
var G__64530 = null;
var G__64531 = (0);
var G__64532 = (0);
seq__64100_64490 = G__64529;
chunk__64101_64491 = G__64530;
count__64102_64492 = G__64531;
i__64103_64493 = G__64532;
continue;
}
} else {
}
}
break;
}

return (com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,combined_node_id,combined_node_idx) : com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.call(null,app__$1,remote_name,combined_node_id,combined_node_idx));
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
if(cljs.core.seq(to_send)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),combined_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combined_node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to_defer], 0)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),send_queue__$2], null);
}
});
/**
 * Process the send against the user-defined remote. Catches exceptions and calls error handler with status code 500
 *   if the remote itself throws exceptions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$net_send_BANG_(app__$1,send_node,remote_name){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var b2__49185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__49185__auto__)){
var remote = b2__49185__auto__;
var b2__49185__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote,new cljs.core.Keyword(null,"transmit!","transmit!",-107149039));
if(cljs.core.truth_(b2__49185__auto____$1)){
var transmit_BANG_ = b2__49185__auto____$1;
try{if(cljs.core.truth_((function (){var and__4210__auto__ = (function (){var or__4212__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4210__auto__;
}
})())){
try{var tx_64543 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),tx_64543);
}catch (e64136){var e_64544 = e64136;
}} else {
}

return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(remote,send_node) : transmit_BANG_.call(null,remote,send_node));
}catch (e64130){var e = e64130;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Send threw an exception for tx:",com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node))], null);
}),null)),null,-1301577617);

try{if(cljs.core.truth_((function (){var and__4210__auto__ = (function (){var or__4212__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4210__auto__;
}
})())){
try{com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),"Transmit Exception");
}catch (e64133){var e_64545__$1 = e64133;
}} else {
}

var G__64135 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"client-exception","client-exception",-1357213384),e], null);
var fexpr__64134 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__64134.cljs$core$IFn$_invoke$arity$1 ? fexpr__64134.cljs$core$IFn$_invoke$arity$1(G__64135) : fexpr__64134.call(null,G__64135));
}catch (e64131){var e__$1 = e64131;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.algorithms.tx-processing",null,161,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,"Error handler failed to handle exception!"], null);
}),null)),null,434491957);
}}} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
}),null)),null,777329991);

var G__64138 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__64137 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__64137.cljs$core$IFn$_invoke$arity$1 ? fexpr__64137.cljs$core$IFn$_invoke$arity$1(G__64138) : fexpr__64137.call(null,G__64138));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
}),null)),null,550481933);

var G__64140 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__64139 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__64139.cljs$core$IFn$_invoke$arity$1 ? fexpr__64139.cljs$core$IFn$_invoke$arity$1(G__64140) : fexpr__64139.call(null,G__64140));
}
});
/**
 * Process the send queues against the remotes. Updates the send queues on the app and returns the updated send queues.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_send_queues_BANG_(p__64141){
var map__64142 = p__64141;
var map__64142__$1 = cljs.core.__destructure_map(map__64142);
var app__$1 = map__64142__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64142__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807)], null);

var send_queues = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_send_queues,remote){
var send_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$3(send_queues,remote,cljs.core.PersistentVector.EMPTY);
var vec__64143 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64143,(0),null);
var serial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64143,(1),null);
var front = cljs.core.first(serial);
var seq__64146_64552 = cljs.core.seq(p);
var chunk__64147_64553 = null;
var count__64148_64554 = (0);
var i__64149_64555 = (0);
while(true){
if((i__64149_64555 < count__64148_64554)){
var item_64557 = chunk__64147_64553.cljs$core$IIndexed$_nth$arity$2(null,i__64149_64555);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__64146_64552,chunk__64147_64553,count__64148_64554,i__64149_64555,item_64557,send_queue,vec__64143,p,serial,front,send_queues,remote_names,operations,map__64142,map__64142__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_64557,remote);
});})(seq__64146_64552,chunk__64147_64553,count__64148_64554,i__64149_64555,item_64557,send_queue,vec__64143,p,serial,front,send_queues,remote_names,operations,map__64142,map__64142__$1,app__$1,runtime_atom))
);


var G__64560 = seq__64146_64552;
var G__64561 = chunk__64147_64553;
var G__64562 = count__64148_64554;
var G__64563 = (i__64149_64555 + (1));
seq__64146_64552 = G__64560;
chunk__64147_64553 = G__64561;
count__64148_64554 = G__64562;
i__64149_64555 = G__64563;
continue;
} else {
var temp__5753__auto___64565 = cljs.core.seq(seq__64146_64552);
if(temp__5753__auto___64565){
var seq__64146_64566__$1 = temp__5753__auto___64565;
if(cljs.core.chunked_seq_QMARK_(seq__64146_64566__$1)){
var c__4638__auto___64567 = cljs.core.chunk_first(seq__64146_64566__$1);
var G__64568 = cljs.core.chunk_rest(seq__64146_64566__$1);
var G__64569 = c__4638__auto___64567;
var G__64570 = cljs.core.count(c__4638__auto___64567);
var G__64571 = (0);
seq__64146_64552 = G__64568;
chunk__64147_64553 = G__64569;
count__64148_64554 = G__64570;
i__64149_64555 = G__64571;
continue;
} else {
var item_64572 = cljs.core.first(seq__64146_64566__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__64146_64552,chunk__64147_64553,count__64148_64554,i__64149_64555,item_64572,seq__64146_64566__$1,temp__5753__auto___64565,send_queue,vec__64143,p,serial,front,send_queues,remote_names,operations,map__64142,map__64142__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_64572,remote);
});})(seq__64146_64552,chunk__64147_64553,count__64148_64554,i__64149_64555,item_64572,seq__64146_64566__$1,temp__5753__auto___64565,send_queue,vec__64143,p,serial,front,send_queues,remote_names,operations,map__64142,map__64142__$1,app__$1,runtime_atom))
);


var G__64574 = cljs.core.next(seq__64146_64566__$1);
var G__64575 = null;
var G__64576 = (0);
var G__64577 = (0);
seq__64146_64552 = G__64574;
chunk__64147_64553 = G__64575;
count__64148_64554 = G__64576;
i__64149_64555 = G__64577;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,serial);
} else {
var map__64151 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app__$1,remote,serial);
var map__64151__$1 = cljs.core.__destructure_map(map__64151);
var send_queue__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64151__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64151__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,(function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,send_node,remote);
}));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,send_queue__$1);
}
}),cljs.core.PersistentArrayMap.EMPTY,remote_names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);

var seq__64153_64579 = cljs.core.seq(cljs.core.deref(operations));
var chunk__64154_64580 = null;
var count__64155_64581 = (0);
var i__64156_64582 = (0);
while(true){
if((i__64156_64582 < count__64155_64581)){
var op_64585 = chunk__64154_64580.cljs$core$IIndexed$_nth$arity$2(null,i__64156_64582);
(op_64585.cljs$core$IFn$_invoke$arity$0 ? op_64585.cljs$core$IFn$_invoke$arity$0() : op_64585.call(null));


var G__64587 = seq__64153_64579;
var G__64588 = chunk__64154_64580;
var G__64589 = count__64155_64581;
var G__64590 = (i__64156_64582 + (1));
seq__64153_64579 = G__64587;
chunk__64154_64580 = G__64588;
count__64155_64581 = G__64589;
i__64156_64582 = G__64590;
continue;
} else {
var temp__5753__auto___64591 = cljs.core.seq(seq__64153_64579);
if(temp__5753__auto___64591){
var seq__64153_64592__$1 = temp__5753__auto___64591;
if(cljs.core.chunked_seq_QMARK_(seq__64153_64592__$1)){
var c__4638__auto___64593 = cljs.core.chunk_first(seq__64153_64592__$1);
var G__64595 = cljs.core.chunk_rest(seq__64153_64592__$1);
var G__64596 = c__4638__auto___64593;
var G__64597 = cljs.core.count(c__4638__auto___64593);
var G__64598 = (0);
seq__64153_64579 = G__64595;
chunk__64154_64580 = G__64596;
count__64155_64581 = G__64597;
i__64156_64582 = G__64598;
continue;
} else {
var op_64599 = cljs.core.first(seq__64153_64592__$1);
(op_64599.cljs$core$IFn$_invoke$arity$0 ? op_64599.cljs$core$IFn$_invoke$arity$0() : op_64599.call(null));


var G__64600 = cljs.core.next(seq__64153_64592__$1);
var G__64601 = null;
var G__64602 = (0);
var G__64603 = (0);
seq__64153_64579 = G__64600;
chunk__64154_64580 = G__64601;
count__64155_64581 = G__64602;
i__64156_64582 = G__64603;
continue;
}
} else {
}
}
break;
}

return new_send_queues;
});
com.fulcrologic.fulcro.algorithms.tx_processing.tx_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$tx_node(var_args){
var G__64169 = arguments.length;
switch (G__64169) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$1 = (function (tx){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2 = (function (tx,options){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var ast = edn_query_language.core.query__GT_ast(tx);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var elements = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$algorithms$tx_processing$txfilt_STAR_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n));
})),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$algorithms$tx_processing$__GT_txnode_STAR_(idx,ast_node){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477),ast_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),cljs.core.PersistentArrayMap.EMPTY], null);
}))),ast_nodes);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","created","com.fulcrologic.fulcro.algorithms.tx-processing/created",859806789),com.fulcrologic.fulcro.algorithms.do_not_use.now(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),tx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),elements], null);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.algorithms.tx_processing.build_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$build_env(var_args){
var G__64179 = arguments.length;
switch (G__64179) {
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3 = (function (app__$1,p__64183,addl){
var map__64184 = p__64183;
var map__64184__$1 = cljs.core.__destructure_map(map__64184);
var tx_node = map__64184__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64184__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

var map__64186 = options;
var map__64186__$1 = cljs.core.__destructure_map(map__64186);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64186__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64186__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__64188 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"app","app",-560961707),app__$1], null)], 0));
var G__64188__$1 = (cljs.core.truth_(options)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64188,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options):G__64188);
var G__64188__$2 = (cljs.core.truth_(ref)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64188__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref):G__64188__$1);
if(cljs.core.truth_(component)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64188__$2,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__64188__$2;
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__64189){
var map__64190 = p__64189;
var map__64190__$1 = cljs.core.__destructure_map(map__64190);
var tx_node = map__64190__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64190__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$lang$maxFixedArity = 3);

/**
 * Run through the elements on the given tx-node and do the side-effect-free dispatch. This generates the dispatch map
 *   of things to do on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements(tx_node,env,dispatch_fn){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var do_dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements_$_run_STAR_(env__$1){
try{return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(env__$1) : dispatch_fn.call(null,env__$1));
}catch (e64191){var e = e64191;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,247,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Dispatch for mutation",(function (){var G__64192 = env__$1;
var G__64192__$1 = (((G__64192 == null))?null:new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(G__64192));
if((G__64192__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(G__64192__$1);
}
})(),"failed with an exception. No dispatch generated."], null);
}),null)),null,53319846);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements_$_dispatch_STAR_(p__64193){
var map__64194 = p__64193;
var map__64194__$1 = cljs.core.__destructure_map(map__64194);
var ele = map__64194__$1;
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64194__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__64195 = original_ast_node;
var map__64195__$1 = cljs.core.__destructure_map(map__64195);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64195__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node);
var G__64196 = ele;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64196,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),do_dispatch(env__$1));
} else {
return G__64196;
}
});
var dispatch_all = (function (eles){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dispatch,eles);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),dispatch_all);
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.application_rendered_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$application_rendered_BANG_(p__64200,options){
var map__64201 = p__64200;
var map__64201__$1 = cljs.core.__destructure_map(map__64201);
var app__$1 = map__64201__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64201__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
if(cljs.core.truth_(cljs.core.some((function (p1__64198_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"after-render?","after-render?",595994030).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(p1__64198_SHARP_)));
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),(function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
}),queue);
}));

return (com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0)) : com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.call(null,app__$1,(0)));
} else {
return null;
}
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$activate_submissions_BANG_(p__64205){
var map__64206 = p__64205;
var map__64206__$1 = cljs.core.__destructure_map(map__64206);
var app__$1 = map__64206__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64206__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__64207 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var map__64207__$1 = cljs.core.__destructure_map(map__64207);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64207__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64207__$1,false);
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__64203_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(p1__64203_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__64203_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
}),ready);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),(function (p1__64204_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__64204_SHARP_,dispatched_nodes);
})),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),cljs.core.vec(blocked));
}));

return (com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.call(null,app__$1));
});
/**
 * Schedule activation of submitted transactions.  The default implementation copies all submitted transactions onto
 * the active queue and immediately does an active queue processing step.  If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_activation_BANG_(var_args){
var G__64211 = arguments.length;
switch (G__64211) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),com.fulcrologic.fulcro.algorithms.tx_processing.activate_submissions_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a processing of the active queue, which will advance the active transactions by a step.
 * If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_queue_processing_BANG_(var_args){
var G__64214 = arguments.length;
switch (G__64214) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule actual network activity. If `tm` is not supplied (in ms) it defaults to 0ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_sends_BANG_(var_args){
var G__64218 = arguments.length;
switch (G__64218) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),com.fulcrologic.fulcro.algorithms.tx_processing.process_send_queues_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Runs any incomplete and non-blocked optimistic operations on a node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.advance_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$advance_actions_BANG_(app__$1,p__64220){
var map__64222 = p__64220;
var map__64222__$1 = cljs.core.__destructure_map(map__64222);
var node = map__64222__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64222__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64222__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var reduction = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__64223,element){
var map__64224 = p__64223;
var map__64224__$1 = cljs.core.__destructure_map(map__64224);
var acc = map__64224__$1;
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64224__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var new_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64224__$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171));
if(cljs.core.truth_(done_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj,element);
} else {
var map__64225 = element;
var map__64225__$1 = cljs.core.__destructure_map(map__64225);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64225__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64225__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64225__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64225__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var map__64226 = dispatch;
var map__64226__$1 = cljs.core.__destructure_map(map__64226);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64226__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var remote_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.set(cljs.core.keys(dispatch)));
var exec_QMARK_ = (function (){var and__4210__auto__ = action;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not((function (){var or__4212__auto__ = done_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024)));
}
})());
} else {
return and__4210__auto__;
}
})();
var fully_complete_QMARK_ = (function (){var and__4210__auto__ = (function (){var or__4212__auto__ = exec_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024)));
}
})();
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remote_set,complete_QMARK_));
} else {
return and__4210__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var state_before = cljs.core.deref(state);
var updated_element = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var done_QMARK___$1 = cljs.core.not(fully_complete_QMARK_);
var new_acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),done_QMARK___$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_element)], null);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{if(cljs.core.truth_(action)){
(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
} else {
}
}catch (e64229){var e_64651 = e64229;
var mutation_symbol_64652 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,340,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64651,"The `action` section of mutation",mutation_symbol_64652,"threw an exception."], null);
}),null)),null,1483683956);
}
if(cljs.core.truth_((function (){var and__4210__auto__ = (function (){var or__4212__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4210__auto__;
}
})())){
try{var tx_64655 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_64655], null));
}catch (e64231){var e_64656 = e64231;
}} else {
}
} else {
}

return new_acc;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.PersistentVector.EMPTY], null),elements);
var new_elements = new cljs.core.Keyword(null,"new-elements","new-elements",-378003171).cljs$core$IFn$_invoke$arity$1(reduction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$run_actions_BANG_(app__$1,p__64233){
var map__64234 = p__64233;
var map__64234__$1 = cljs.core.__destructure_map(map__64234);
var node = map__64234__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64234__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64234__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var new_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_elements,element){
var map__64236 = element;
var map__64236__$1 = cljs.core.__destructure_map(map__64236);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64236__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64236__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64236__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64236__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__64237 = dispatch;
var map__64237__$1 = cljs.core.__destructure_map(map__64237);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64237__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var exec_QMARK_ = (function (){var and__4210__auto__ = action;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024))));
} else {
return and__4210__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var state_before = cljs.core.deref(state);
var updated_node = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var new_acc = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_node);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
}catch (e64238){var e_64670 = e64238;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,373,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64670,"The `action` section threw an exception for mutation: ",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node)], null);
}),null)),null,142487446);
}
if(cljs.core.truth_((function (){var and__4210__auto__ = (function (){var or__4212__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4210__auto__;
}
})())){
try{var tx_64678 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_64678], null));
}catch (e64240){var e_64682 = e64240;
}} else {
}
} else {
}

return new_acc;
}),cljs.core.PersistentVector.EMPTY,elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$fully_complete_QMARK_(app__$1,p__64242){
var map__64243 = p__64242;
var map__64243__$1 = cljs.core.__destructure_map(map__64243);
var tx_node = map__64243__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64243__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var element_complete_QMARK_ = (function (p__64245){
var map__64246 = p__64245;
var map__64246__$1 = cljs.core.__destructure_map(map__64246);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64246__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64246__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var active_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),remotes);
var desired_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(active_keys,cljs.core.set(cljs.core.keys(dispatch)));
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(desired_set,complete_QMARK_));
});
return cljs.core.every_QMARK_(element_complete_QMARK_,elements);
});
/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$remove_send_BANG_(p__64248,remote,txn_id,ele_idx){
var map__64249 = p__64248;
var map__64249__$1 = cljs.core.__destructure_map(map__64249);
var app__$1 = map__64249__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64249__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__64250 = cljs.core.deref(runtime_atom);
var map__64250__$1 = cljs.core.__destructure_map(map__64250);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64250__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var old_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var queue = cljs.core.filterv((function (p__64251){
var map__64253 = p__64251;
var map__64253__$1 = cljs.core.__destructure_map(map__64253);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64253__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64253__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
}),old_queue);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),queue);
});
/**
 * Record a network result on the given txn/element.
 * If result-key is given it is used, otherwise defaults to ::results. Also removes the network send from the send
 * queue so that remaining items can proceed, and schedules send processing.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$record_result_BANG_(var_args){
var G__64256 = arguments.length;
switch (G__64256) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (p__64258,txn_id,ele_idx,remote,result,result_key){
var map__64259 = p__64258;
var map__64259__$1 = cljs.core.__destructure_map(map__64259);
var app__$1 = map__64259__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64259__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var active_queue = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var txn_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__64260){
var map__64261 = p__64260;
var map__64261__$1 = cljs.core.__destructure_map(map__64261);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64261__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),active_queue);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,421,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue!"], null);
}),null)),null,-804160516);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Add the ::desired-ast-nodes and ::transmitted-ast-nodes for `remote` to the tx-element based on the dispatch for the `remote` of the original mutation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.compute_desired_ast_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$compute_desired_ast_node(app__$1,remote,tx_node,tx_element){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811)], null);

var map__64264 = tx_element;
var map__64264__$1 = cljs.core.__destructure_map(map__64264);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64264__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64264__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var state_before_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64264__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778));
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node,new cljs.core.Keyword(null,"state-before-action","state-before-action",104906671),state_before_action], null));
var remote_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,remote);
var remote_desire = (cljs.core.truth_(remote_fn)?(remote_fn.cljs$core$IFn$_invoke$arity$1 ? remote_fn.cljs$core$IFn$_invoke$arity$1(env) : remote_fn.call(null,env)):null);
var desired_ast = ((((remote_desire === false) || ((remote_desire == null))))?null:((remote_desire === true)?original_ast_node:((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"ast","ast",-860334068)))))?new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(remote_desire):((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"type","type",1174270348)))))?remote_desire:(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,442,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote dispatch for",remote,"returned an invalid value.",remote_desire], null);
}),null)),null,-1721167758);

return remote_desire;
})()

))));
var query_transform = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
var ast = (cljs.core.truth_((function (){var and__4210__auto__ = desired_ast;
if(cljs.core.truth_(and__4210__auto__)){
return query_transform;
} else {
return and__4210__auto__;
}
})())?(query_transform.cljs$core$IFn$_invoke$arity$1 ? query_transform.cljs$core$IFn$_invoke$arity$1(desired_ast) : query_transform.call(null,desired_ast)):desired_ast);
var G__64267 = tx_element;
var G__64267__$1 = (cljs.core.truth_(desired_ast)?cljs.core.assoc_in(G__64267,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425),remote], null),desired_ast):G__64267);
if(cljs.core.truth_(ast)){
return cljs.core.assoc_in(G__64267__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null),ast);
} else {
return G__64267__$1;
}
});
/**
 * Generate a new send node and add it to the appropriate send queue. Returns the new send node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG_(p__64269,p__64270,ele_idx,remote){
var map__64271 = p__64269;
var map__64271__$1 = cljs.core.__destructure_map(map__64271);
var app__$1 = map__64271__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64271__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__64272 = p__64270;
var map__64272__$1 = cljs.core.__destructure_map(map__64272);
var tx_node = map__64272__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64272__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64272__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),null)], null);

var update_handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG__$_progress_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG__$_result_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_(app__$1,remote,id,ele_idx);

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(1));

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([send_node], 0));

return send_node;
} else {
handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));

return null;
}
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_element_sends_BANG_(app__$1,tx_node,p__64275){
var map__64276 = p__64275;
var map__64276__$1 = cljs.core.__destructure_map(map__64276);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64276__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64276__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64276__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),(function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.compute_desired_ast_node(app__$1,remote,node,tx_element);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.add_send_BANG_(app__$1,updated_node,idx,remote);

return updated_node;
}
}),tx_node,to_dispatch);
});
/**
 * Returns true if the given node has no active network operations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.idle_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$idle_node_QMARK_(p__64279){
var map__64280 = p__64279;
var map__64280__$1 = cljs.core.__destructure_map(map__64280);
var tx_node = map__64280__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64280__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return cljs.core.every_QMARK_((function com$fulcrologic$fulcro$algorithms$tx_processing$idle_node_QMARK__$_idle_QMARK__STAR_(p__64281){
var map__64282 = p__64281;
var map__64282__$1 = cljs.core.__destructure_map(map__64282);
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64282__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64282__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var in_progress = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(started_QMARK_,complete_QMARK_);
return cljs.core.empty_QMARK_(in_progress);
}),elements);
});
/**
 * Returns a txnode element iff it has remaining (remote) work that has not been queued. Returns nil if there
 * is no such element.
 * 
 *   remote-names is the set of legal remote names.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.element_with_work = (function com$fulcrologic$fulcro$algorithms$tx_processing$element_with_work(remote_names,p__64284){
var map__64285 = p__64284;
var map__64285__$1 = cljs.core.__destructure_map(map__64285);
var element = map__64285__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64285__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64285__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),null)], null);

var todo = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remote_names,cljs.core.set(cljs.core.keys(dispatch)));
var remaining = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(todo,started_QMARK_);
if(cljs.core.seq(remaining)){
return element;
} else {
return null;
}
});
/**
 * Assumes tx-node is to be processed pessimistically. Queues the next send if the node is currently idle
 *   on the network and there are any sends left to do. Adds to the send queue, and returns the updated
 *   tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_next_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_next_send_BANG_(app__$1,p__64287){
var map__64288 = p__64287;
var map__64288__$1 = cljs.core.__destructure_map(map__64288);
var tx_node = map__64288__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64288__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

if(com.fulcrologic.fulcro.algorithms.tx_processing.idle_node_QMARK_(tx_node)){
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var with_work = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.element_with_work,remotes);
var element = cljs.core.some(with_work,elements);
if(cljs.core.truth_(element)){
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_(app__$1,tx_node,element);
} else {
return tx_node;
}
} else {
return tx_node;
}
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_sends_BANG_(app__$1,p__64290){
var map__64291 = p__64290;
var map__64291__$1 = cljs.core.__destructure_map(map__64291);
var tx_node = map__64291__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64291__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64291__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

if(optimistic_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_(app__$1,node,element);
}),tx_node,elements);
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_next_send_BANG_(app__$1,tx_node);
}
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_result_BANG_(app__$1,tx_node,p__64293,remote){
var map__64294 = p__64293;
var map__64294__$1 = cljs.core.__destructure_map(map__64294);
var tx_element = map__64294__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64294__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64294__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64294__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64294__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64294__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811)], null);

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

var result_64756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_64757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_64757)){
var env_64759 = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_64756], null));
try{(handler_64757.cljs$core$IFn$_invoke$arity$1 ? handler_64757.cljs$core$IFn$_invoke$arity$1(env_64759) : handler_64757.call(null,env_64759));
}catch (e64296){var e_64767 = e64296;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,574,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64767,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception."], null);
}),null)),null,1600819175);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$distribute_element_results_BANG_(app__$1,tx_node,p__64298){
var map__64299 = p__64298;
var map__64299__$1 = cljs.core.__destructure_map(map__64299);
var tx_element = map__64299__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64299__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64299__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
}),tx_element,cljs.core.keys(results));
});
/**
 * Walk all elements of the tx-node and call result dispatch handlers for any results that have
 *   not been distributed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$distribute_results_BANG_(app__$1,p__64301){
var map__64302 = p__64301;
var map__64302__$1 = cljs.core.__destructure_map(map__64302);
var tx_node = map__64302__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64302__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (element){
return com.fulcrologic.fulcro.algorithms.tx_processing.distribute_element_results_BANG_(app__$1,tx_node,element);
}),elements));
});
/**
 * Report all progress items to any registered progress dispatch and clear them from the tx-node.
 *   Returns the updated tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$update_progress_BANG_(app__$1,p__64304){
var map__64306 = p__64304;
var map__64306__$1 = cljs.core.__destructure_map(map__64306);
var tx_node = map__64306__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64306__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)], null);

var get_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$update_progress_BANG__$_get_env_STAR_(remote,progress){
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"progress","progress",244323547),progress], null));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,p__64307){
var map__64308 = p__64307;
var map__64308__$1 = cljs.core.__destructure_map(map__64308);
var element = map__64308__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64308__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64308__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64308__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64308__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var seq__64310_64793 = cljs.core.seq(progress);
var chunk__64311_64794 = null;
var count__64312_64795 = (0);
var i__64313_64796 = (0);
while(true){
if((i__64313_64796 < count__64312_64795)){
var vec__64324_64797 = chunk__64311_64794.cljs$core$IIndexed$_nth$arity$2(null,i__64313_64796);
var remote_64798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64324_64797,(0),null);
var value_64799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64324_64797,(1),null);
var env_64800 = get_env(remote_64798,value_64799);
var action_64801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_64801)){
try{(action_64801.cljs$core$IFn$_invoke$arity$1 ? action_64801.cljs$core$IFn$_invoke$arity$1(env_64800) : action_64801.call(null,env_64800));
}catch (e64327){var e_64802 = e64327;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,614,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64310_64793,chunk__64311_64794,count__64312_64795,i__64313_64796,e_64802,env_64800,action_64801,vec__64324_64797,remote_64798,value_64799,map__64308,map__64308__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__64306,map__64306__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64802,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node)], null);
});})(seq__64310_64793,chunk__64311_64794,count__64312_64795,i__64313_64796,e_64802,env_64800,action_64801,vec__64324_64797,remote_64798,value_64799,map__64308,map__64308__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__64306,map__64306__$1,tx_node,elements))
,null)),null,535122994);
}} else {
}


var G__64805 = seq__64310_64793;
var G__64806 = chunk__64311_64794;
var G__64807 = count__64312_64795;
var G__64808 = (i__64313_64796 + (1));
seq__64310_64793 = G__64805;
chunk__64311_64794 = G__64806;
count__64312_64795 = G__64807;
i__64313_64796 = G__64808;
continue;
} else {
var temp__5753__auto___64809 = cljs.core.seq(seq__64310_64793);
if(temp__5753__auto___64809){
var seq__64310_64811__$1 = temp__5753__auto___64809;
if(cljs.core.chunked_seq_QMARK_(seq__64310_64811__$1)){
var c__4638__auto___64813 = cljs.core.chunk_first(seq__64310_64811__$1);
var G__64814 = cljs.core.chunk_rest(seq__64310_64811__$1);
var G__64815 = c__4638__auto___64813;
var G__64816 = cljs.core.count(c__4638__auto___64813);
var G__64817 = (0);
seq__64310_64793 = G__64814;
chunk__64311_64794 = G__64815;
count__64312_64795 = G__64816;
i__64313_64796 = G__64817;
continue;
} else {
var vec__64329_64820 = cljs.core.first(seq__64310_64811__$1);
var remote_64821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64329_64820,(0),null);
var value_64822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64329_64820,(1),null);
var env_64825 = get_env(remote_64821,value_64822);
var action_64826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_64826)){
try{(action_64826.cljs$core$IFn$_invoke$arity$1 ? action_64826.cljs$core$IFn$_invoke$arity$1(env_64825) : action_64826.call(null,env_64825));
}catch (e64333){var e_64831 = e64333;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,614,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64310_64793,chunk__64311_64794,count__64312_64795,i__64313_64796,e_64831,env_64825,action_64826,vec__64329_64820,remote_64821,value_64822,seq__64310_64811__$1,temp__5753__auto___64809,map__64308,map__64308__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__64306,map__64306__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64831,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node)], null);
});})(seq__64310_64793,chunk__64311_64794,count__64312_64795,i__64313_64796,e_64831,env_64825,action_64826,vec__64329_64820,remote_64821,value_64822,seq__64310_64811__$1,temp__5753__auto___64809,map__64308,map__64308__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__64306,map__64306__$1,tx_node,elements))
,null)),null,417607075);
}} else {
}


var G__64838 = cljs.core.next(seq__64310_64811__$1);
var G__64839 = null;
var G__64840 = (0);
var G__64841 = (0);
seq__64310_64793 = G__64838;
chunk__64311_64794 = G__64839;
count__64312_64795 = G__64840;
i__64313_64796 = G__64841;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
}),tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_tx_node_BANG_(app__$1,p__64335){
var map__64336 = p__64335;
var map__64336__$1 = cljs.core.__destructure_map(map__64336);
var tx_node = map__64336__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64336__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),null)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
if(com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.distribute_results_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.queue_sends_BANG_(app__$1,(function (){var G__64337 = tx_node;
var G__64337__$1 = ((optimistic_QMARK_)?com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,G__64337):G__64337);
if((!(optimistic_QMARK_))){
return com.fulcrologic.fulcro.algorithms.tx_processing.advance_actions_BANG_(app__$1,G__64337__$1);
} else {
return G__64337__$1;
}
})())));
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes = (function com$fulcrologic$fulcro$algorithms$tx_processing$requested_refreshes(app__$1,queue){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__64339){
return cljs.core.coll_QMARK_(G__64339);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378))], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.set_QMARK_], null);


return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (outer_acc,tx_node){
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,tx_node);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,element){
var map__64341 = element;
var map__64341__$1 = cljs.core.__destructure_map(map__64341);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64341__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(dispatch);
if(cljs.core.truth_(refresh)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.set((refresh.cljs$core$IFn$_invoke$arity$1 ? refresh.cljs$core$IFn$_invoke$arity$1(env) : refresh.call(null,env))));
} else {
return acc;
}
}),outer_acc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330).cljs$core$IFn$_invoke$arity$1(tx_node));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Given a tx node and the set of legal remotes: returns a set of remotes that are active on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.remotes_active_on_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$remotes_active_on_node(p__64343,remotes){
var map__64344 = p__64343;
var map__64344__$1 = cljs.core.__destructure_map(map__64344);
var tx_node = map__64344__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64344__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

var active_on_element = (function (p__64345){
var map__64346 = p__64345;
var map__64346__$1 = cljs.core.__destructure_map(map__64346);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64346__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64346__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes__$1 = cljs.core.set(remotes);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes__$1,cljs.core.set(cljs.core.keys(dispatch))),complete_QMARK_);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,ele){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(acc,active_on_element(ele));
}),cljs.core.PersistentHashSet.EMPTY,elements);
});
/**
 * Calculate which remotes still have network activity to do on the given active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$active_remotes(queue,remotes){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ra,n){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(ra,com.fulcrologic.fulcro.algorithms.tx_processing.remotes_active_on_node(n,remotes));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_queue_BANG_(p__64349){
var map__64350 = p__64349;
var map__64350__$1 = cljs.core.__destructure_map(map__64350);
var app__$1 = map__64350__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64350__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64350__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$algorithms$tx_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5751__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5751__auto__)){
var new_node = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes(new_queue,remotes);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : schedule_render_BANG_.call(null,app__$1));

return null;
});
/**
 * Run the optimistic action(s) of a transaction synchronously. It is primarily used to deal with controlled inputs, since they
 * have issues working asynchronously, so ideally the mutation in question will *not* have remote action (though they
 * are allowed to).
 * 
 * NOTE: any *remote* behaviors of `tx` will *still be async*.
 * 
 * This function:
 * 
 * * Runs the optimistic side of the mutation(s)
 * * IF (and only if) one or more of the mutations has more sections than just an `action` then it submits the mutation to the normal transaction queue,
 *   but with the optimistic part already done.
 * * This functions *does not* queue a render refresh (though if the normal transaction queue is updated, it will queue tx remote processing, which will trigger a UI refresh).
 * 
 * If you pass it an on-screen instance that has a query and ident, then this function tunnel updated UI props synchronously to that
 * component so it can refresh immediately and avoid DOM input issues.
 * 
 * Returns the new component props or the final state map if no component was used in the transaction.
 * 
 */
com.fulcrologic.fulcro.algorithms.tx_processing.transact_sync_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$transact_sync_BANG_(app__$1,tx,p__64354){
var map__64355 = p__64354;
var map__64355__$1 = cljs.core.__destructure_map(map__64355);
var options = map__64355__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64355__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var mutation_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(tx));
var ast_node__GT_operation = cljs.core.zipmap(mutation_nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ast_node){
return com.fulcrologic.fulcro.mutations.mutate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast_node], null));
}),mutation_nodes));
var map__64357 = cljs.core.group_by((function (p1__64353_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),null], null), null),cljs.core.set(cljs.core.keys((ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1 ? ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1(p1__64353_SHARP_) : ast_node__GT_operation.call(null,p1__64353_SHARP_)))));
}),mutation_nodes);
var map__64357__$1 = cljs.core.__destructure_map(map__64357);
var optimistic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64357__$1,true);
var mixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64357__$1,false);
var optimistic_tx_node = ((cljs.core.seq(optimistic))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),optimistic], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var mixed_tx_node = ((cljs.core.seq(mixed))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),mixed], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var resulting_node_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(optimistic_tx_node)){
com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,optimistic_tx_node);
} else {
}

if(cljs.core.truth_(mixed_tx_node)){
var node_64891 = com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,mixed_tx_node);
var runtime_atom_64892 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.reset_BANG_(resulting_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node_64891));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom_64892,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_64891], 0));

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(20));
} else {
}

if(cljs.core.truth_((function (){var and__4210__auto__ = component;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = (com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,component));
if(cljs.core.truth_(and__4210__auto____$1)){
return com.fulcrologic.fulcro.components.has_ident_QMARK_(component);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
com.fulcrologic.fulcro.components.refresh_component_BANG_(component);
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,743,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Synchronous transaction was submitted on the app or a component without an ident. No UI refresh will happen."], null);
}),null)),null,-62043531);
} else {
}
}

return cljs.core.deref(resulting_node_id);
});
/**
 * Default (Fulcro-2 compatible) transaction submission. The options map can contain any additional options
 *   that might be used by the transaction processing (or UI refresh).
 * 
 *   Some that may be supported (depending on application settings):
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   WARNING: `:only-refresh` can cause missed refreshes because rendering is debounced. If you are using this for
 *         rapid-fire updates like drag-and-drop it is recommended that on the trailing edge (e.g. drop) of your sequence you
 *         force a normal refresh via `app/render!`.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   NOTE: Fulcro 2 'follow-on reads' are supported and are added to the `:refresh` entries. Your choice of rendering
 *   algorithm will influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$default_tx_BANG_(var_args){
var G__64363 = arguments.length;
switch (G__64363) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tx){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__64365,tx,p__64366){
var map__64367 = p__64365;
var map__64367__$1 = cljs.core.__destructure_map(map__64367);
var app__$1 = map__64367__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64367__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__64368 = p__64366;
var map__64368__$1 = cljs.core.__destructure_map(map__64368);
var options = map__64368__$1;
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64368__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

if(cljs.core.truth_(synchronous_QMARK_)){
return com.fulcrologic.fulcro.algorithms.tx_processing.transact_sync_BANG_(app__$1,tx,options);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1);

var map__64369 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),true], null),options], 0));
var map__64369__$1 = cljs.core.__destructure_map(map__64369);
var options__$1 = map__64369__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64369__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64369__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64369__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64360_SHARP_){
return (((p1__64360_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__64360_SHARP_)));
}),tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var refresh__$1 = (function (){var G__64371 = cljs.core.set(refresh);
var G__64371__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__64371,follow_on_reads):G__64371);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__64371__$1,ref);
} else {
return G__64371__$1;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
var G__64373 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),(function (v,n){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(v),n);
}),node);
var G__64373__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__64373,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__64373);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__64373__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__64373__$1;
}
}));

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Abort any elements in the given send-queue that have the given abort id.
 * 
 *   Aborting will cause the network to abort (which will report a result), or if the item is not yet active a
 *   virtual result will still be sent for that node.
 * 
 *   Returns a new send-queue that no longer contains the aborted nodes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.abort_elements_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$abort_elements_BANG_(p__64375,send_queue,abort_id){
var map__64376 = p__64375;
var map__64376__$1 = cljs.core.__destructure_map(map__64376);
var remote = map__64376__$1;
var abort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64376__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
if(cljs.core.truth_(abort_BANG_)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__64378){
var map__64379 = p__64378;
var map__64379__$1 = cljs.core.__destructure_map(map__64379);
var send_node = map__64379__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64379__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64379__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64379__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var aid = (function (){var or__4212__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(options);
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(aid,abort_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,send_node);
} else {
if(cljs.core.truth_(active_QMARK_)){
(abort_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_BANG_.cljs$core$IFn$_invoke$arity$2(remote,abort_id) : abort_BANG_.call(null,remote,abort_id));

return result;
} else {
var G__64380_64946 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Cancelled",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__64380_64946) : result_handler.call(null,G__64380_64946));

return result;

}
}
}),cljs.core.PersistentVector.EMPTY,send_queue);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,821,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot abort network requests. The remote has no abort support!"], null);
}),null)),null,1309900613);

return send_queue;
}
});
/**
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.abort_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$abort_BANG_(app__$1,abort_id){
var map__64382 = com.fulcrologic.fulcro.components.any__GT_app(app__$1);
var map__64382__$1 = cljs.core.__destructure_map(map__64382);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64382__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var runtime_state = cljs.core.deref(runtime_atom);
var map__64383 = runtime_state;
var map__64383__$1 = cljs.core.__destructure_map(map__64383);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64383__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64383__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var remote_names = cljs.core.keys(send_queues);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,remote_name){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,remote_name,com.fulcrologic.fulcro.algorithms.tx_processing.abort_elements_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(remotes,remote_name),cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote_name),abort_id));
}),cljs.core.PersistentArrayMap.EMPTY,remote_names);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);
});
/**
 * Cause everything in the active network queue for remote to be cancelled. Any result that (finally) appears for aborted
 *   items will be ignored. This will cause a hard error to be "received" as the result for everything
 *   that is in the send queue of the given remote.
 * 
 *   This function is mainly meant for use in development mode when dealing with a buggy remote implementation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.abort_remote_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$abort_remote_BANG_(app_ish,remote){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
var map__64386 = com.fulcrologic.fulcro.components.any__GT_app(app__$1);
var map__64386__$1 = cljs.core.__destructure_map(map__64386);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64386__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64386__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__64387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),remote], null));
var map__64387__$1 = cljs.core.__destructure_map(map__64387);
var the_remote = map__64387__$1;
var abort_network_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64387__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
var old_send_queue = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([remote], 0));

var seq__64389 = cljs.core.seq(old_send_queue);
var chunk__64394 = null;
var count__64395 = (0);
var i__64396 = (0);
while(true){
if((i__64396 < count__64395)){
var map__64430 = chunk__64394.cljs$core$IIndexed$_nth$arity$2(null,i__64396);
var map__64430__$1 = cljs.core.__destructure_map(map__64430);
var send_node = map__64430__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64430__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64430__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64430__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__64397_64954 = cljs.core.seq((function (){var or__4212__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(options);
}
})());
var chunk__64398_64955 = null;
var count__64399_64956 = (0);
var i__64400_64957 = (0);
while(true){
if((i__64400_64957 < count__64399_64956)){
var aid_64964 = chunk__64398_64955.cljs$core$IIndexed$_nth$arity$2(null,i__64400_64957);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_64964) : abort_network_BANG_.call(null,the_remote,aid_64964));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,861,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64397_64954,chunk__64398_64955,count__64399_64956,i__64400_64957,seq__64389,chunk__64394,count__64395,i__64396,aid_64964,map__64430,map__64430__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear."], null);
});})(seq__64397_64954,chunk__64398_64955,count__64399_64956,i__64400_64957,seq__64389,chunk__64394,count__64395,i__64396,aid_64964,map__64430,map__64430__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-177258143);
}
} else {
}

var G__64440_64978 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__64440_64978) : result_handler.call(null,G__64440_64978));
}catch (e64439){var e_64980 = e64439;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,867,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64397_64954,chunk__64398_64955,count__64399_64956,i__64400_64957,seq__64389,chunk__64394,count__64395,i__64396,e_64980,aid_64964,map__64430,map__64430__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64980,"Failed to abort send node"], null);
});})(seq__64397_64954,chunk__64398_64955,count__64399_64956,i__64400_64957,seq__64389,chunk__64394,count__64395,i__64396,e_64980,aid_64964,map__64430,map__64430__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-957072156);
}

var G__64992 = seq__64397_64954;
var G__64993 = chunk__64398_64955;
var G__64994 = count__64399_64956;
var G__64995 = (i__64400_64957 + (1));
seq__64397_64954 = G__64992;
chunk__64398_64955 = G__64993;
count__64399_64956 = G__64994;
i__64400_64957 = G__64995;
continue;
} else {
var temp__5753__auto___64997 = cljs.core.seq(seq__64397_64954);
if(temp__5753__auto___64997){
var seq__64397_64998__$1 = temp__5753__auto___64997;
if(cljs.core.chunked_seq_QMARK_(seq__64397_64998__$1)){
var c__4638__auto___64999 = cljs.core.chunk_first(seq__64397_64998__$1);
var G__65000 = cljs.core.chunk_rest(seq__64397_64998__$1);
var G__65001 = c__4638__auto___64999;
var G__65002 = cljs.core.count(c__4638__auto___64999);
var G__65003 = (0);
seq__64397_64954 = G__65000;
chunk__64398_64955 = G__65001;
count__64399_64956 = G__65002;
i__64400_64957 = G__65003;
continue;
} else {
var aid_65004 = cljs.core.first(seq__64397_64998__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_65004) : abort_network_BANG_.call(null,the_remote,aid_65004));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,861,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64397_64954,chunk__64398_64955,count__64399_64956,i__64400_64957,seq__64389,chunk__64394,count__64395,i__64396,aid_65004,seq__64397_64998__$1,temp__5753__auto___64997,map__64430,map__64430__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear."], null);
});})(seq__64397_64954,chunk__64398_64955,count__64399_64956,i__64400_64957,seq__64389,chunk__64394,count__64395,i__64396,aid_65004,seq__64397_64998__$1,temp__5753__auto___64997,map__64430,map__64430__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-2030218490);
}
} else {
}

var G__64444_65005 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__64444_65005) : result_handler.call(null,G__64444_65005));
}catch (e64442){var e_65006 = e64442;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,867,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64397_64954,chunk__64398_64955,count__64399_64956,i__64400_64957,seq__64389,chunk__64394,count__64395,i__64396,e_65006,aid_65004,seq__64397_64998__$1,temp__5753__auto___64997,map__64430,map__64430__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_65006,"Failed to abort send node"], null);
});})(seq__64397_64954,chunk__64398_64955,count__64399_64956,i__64400_64957,seq__64389,chunk__64394,count__64395,i__64396,e_65006,aid_65004,seq__64397_64998__$1,temp__5753__auto___64997,map__64430,map__64430__$1,send_node,active_QMARK_,options,result_handler,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,435776157);
}

var G__65011 = cljs.core.next(seq__64397_64998__$1);
var G__65012 = null;
var G__65013 = (0);
var G__65014 = (0);
seq__64397_64954 = G__65011;
chunk__64398_64955 = G__65012;
count__64399_64956 = G__65013;
i__64400_64957 = G__65014;
continue;
}
} else {
}
}
break;
}

var G__65015 = seq__64389;
var G__65016 = chunk__64394;
var G__65017 = count__64395;
var G__65018 = (i__64396 + (1));
seq__64389 = G__65015;
chunk__64394 = G__65016;
count__64395 = G__65017;
i__64396 = G__65018;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64389);
if(temp__5753__auto__){
var seq__64389__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64389__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__64389__$1);
var G__65024 = cljs.core.chunk_rest(seq__64389__$1);
var G__65025 = c__4638__auto__;
var G__65026 = cljs.core.count(c__4638__auto__);
var G__65027 = (0);
seq__64389 = G__65024;
chunk__64394 = G__65025;
count__64395 = G__65026;
i__64396 = G__65027;
continue;
} else {
var map__64445 = cljs.core.first(seq__64389__$1);
var map__64445__$1 = cljs.core.__destructure_map(map__64445);
var send_node = map__64445__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64445__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64445__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64445__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__64390_65034 = cljs.core.seq((function (){var or__4212__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(options);
}
})());
var chunk__64391_65035 = null;
var count__64392_65036 = (0);
var i__64393_65037 = (0);
while(true){
if((i__64393_65037 < count__64392_65036)){
var aid_65038 = chunk__64391_65035.cljs$core$IIndexed$_nth$arity$2(null,i__64393_65037);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_65038) : abort_network_BANG_.call(null,the_remote,aid_65038));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,861,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64390_65034,chunk__64391_65035,count__64392_65036,i__64393_65037,seq__64389,chunk__64394,count__64395,i__64396,aid_65038,map__64445,map__64445__$1,send_node,active_QMARK_,options,result_handler,seq__64389__$1,temp__5753__auto__,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear."], null);
});})(seq__64390_65034,chunk__64391_65035,count__64392_65036,i__64393_65037,seq__64389,chunk__64394,count__64395,i__64396,aid_65038,map__64445,map__64445__$1,send_node,active_QMARK_,options,result_handler,seq__64389__$1,temp__5753__auto__,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1529273596);
}
} else {
}

var G__64455_65040 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__64455_65040) : result_handler.call(null,G__64455_65040));
}catch (e64453){var e_65042 = e64453;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,867,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64390_65034,chunk__64391_65035,count__64392_65036,i__64393_65037,seq__64389,chunk__64394,count__64395,i__64396,e_65042,aid_65038,map__64445,map__64445__$1,send_node,active_QMARK_,options,result_handler,seq__64389__$1,temp__5753__auto__,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_65042,"Failed to abort send node"], null);
});})(seq__64390_65034,chunk__64391_65035,count__64392_65036,i__64393_65037,seq__64389,chunk__64394,count__64395,i__64396,e_65042,aid_65038,map__64445,map__64445__$1,send_node,active_QMARK_,options,result_handler,seq__64389__$1,temp__5753__auto__,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,358361144);
}

var G__65047 = seq__64390_65034;
var G__65048 = chunk__64391_65035;
var G__65049 = count__64392_65036;
var G__65050 = (i__64393_65037 + (1));
seq__64390_65034 = G__65047;
chunk__64391_65035 = G__65048;
count__64392_65036 = G__65049;
i__64393_65037 = G__65050;
continue;
} else {
var temp__5753__auto___65051__$1 = cljs.core.seq(seq__64390_65034);
if(temp__5753__auto___65051__$1){
var seq__64390_65052__$1 = temp__5753__auto___65051__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64390_65052__$1)){
var c__4638__auto___65053 = cljs.core.chunk_first(seq__64390_65052__$1);
var G__65054 = cljs.core.chunk_rest(seq__64390_65052__$1);
var G__65055 = c__4638__auto___65053;
var G__65056 = cljs.core.count(c__4638__auto___65053);
var G__65057 = (0);
seq__64390_65034 = G__65054;
chunk__64391_65035 = G__65055;
count__64392_65036 = G__65056;
i__64393_65037 = G__65057;
continue;
} else {
var aid_65058 = cljs.core.first(seq__64390_65052__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_65058) : abort_network_BANG_.call(null,the_remote,aid_65058));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing",null,861,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64390_65034,chunk__64391_65035,count__64392_65036,i__64393_65037,seq__64389,chunk__64394,count__64395,i__64396,aid_65058,seq__64390_65052__$1,temp__5753__auto___65051__$1,map__64445,map__64445__$1,send_node,active_QMARK_,options,result_handler,seq__64389__$1,temp__5753__auto__,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear."], null);
});})(seq__64390_65034,chunk__64391_65035,count__64392_65036,i__64393_65037,seq__64389,chunk__64394,count__64395,i__64396,aid_65058,seq__64390_65052__$1,temp__5753__auto___65051__$1,map__64445,map__64445__$1,send_node,active_QMARK_,options,result_handler,seq__64389__$1,temp__5753__auto__,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1436815873);
}
} else {
}

var G__64458_65060 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__64458_65060) : result_handler.call(null,G__64458_65060));
}catch (e64457){var e_65062 = e64457;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,867,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64390_65034,chunk__64391_65035,count__64392_65036,i__64393_65037,seq__64389,chunk__64394,count__64395,i__64396,e_65062,aid_65058,seq__64390_65052__$1,temp__5753__auto___65051__$1,map__64445,map__64445__$1,send_node,active_QMARK_,options,result_handler,seq__64389__$1,temp__5753__auto__,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_65062,"Failed to abort send node"], null);
});})(seq__64390_65034,chunk__64391_65035,count__64392_65036,i__64393_65037,seq__64389,chunk__64394,count__64395,i__64396,e_65062,aid_65058,seq__64390_65052__$1,temp__5753__auto___65051__$1,map__64445,map__64445__$1,send_node,active_QMARK_,options,result_handler,seq__64389__$1,temp__5753__auto__,app__$1,map__64386,map__64386__$1,state_atom,runtime_atom,map__64387,map__64387__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-1269445966);
}

var G__65064 = cljs.core.next(seq__64390_65052__$1);
var G__65065 = null;
var G__65066 = (0);
var G__65067 = (0);
seq__64390_65034 = G__65064;
chunk__64391_65035 = G__65065;
count__64392_65036 = G__65066;
i__64393_65037 = G__65067;
continue;
}
} else {
}
}
break;
}

var G__65068 = cljs.core.next(seq__64389__$1);
var G__65069 = null;
var G__65070 = (0);
var G__65071 = (0);
seq__64389 = G__65068;
chunk__64394 = G__65069;
count__64395 = G__65070;
i__64396 = G__65071;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.js.map
