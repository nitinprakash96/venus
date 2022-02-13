goog.provide('expound.paths');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound","path","expound/path",-1026376555),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
expound.paths.KeyPathSegment = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(expound.paths.KeyPathSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k48700,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__48712 = k48700;
var G__48712__$1 = (((G__48712 instanceof cljs.core.Keyword))?G__48712.fqn:null);
switch (G__48712__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48700,else__4464__auto__);

}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__48715){
var vec__48717 = p__48715;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48717,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48717,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#expound.paths.KeyPathSegment{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48699){
var self__ = this;
var G__48699__$1 = this;
return (new cljs.core.RecordIter((0),G__48699__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (233526946 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48701,other48702){
var self__ = this;
var this48701__$1 = this;
return (((!((other48702 == null)))) && ((((this48701__$1.constructor === other48702.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48701__$1.key,other48702.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48701__$1.__extmap,other48702.__extmap)))))));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k48700){
var self__ = this;
var this__4468__auto____$1 = this;
var G__48741 = k48700;
var G__48741__$1 = (((G__48741 instanceof cljs.core.Keyword))?G__48741.fqn:null);
switch (G__48741__$1) {
case "key":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48700);

}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__48699){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__48744 = cljs.core.keyword_identical_QMARK_;
var expr__48745 = k__4470__auto__;
if(cljs.core.truth_((pred__48744.cljs$core$IFn$_invoke$arity$2 ? pred__48744.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__48745) : pred__48744.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__48745)))){
return (new expound.paths.KeyPathSegment(G__48699,self__.__meta,self__.__extmap,null));
} else {
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__48699),null));
}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__48699){
var self__ = this;
var this__4460__auto____$1 = this;
return (new expound.paths.KeyPathSegment(self__.key,G__48699,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(expound.paths.KeyPathSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(expound.paths.KeyPathSegment.cljs$lang$type = true);

(expound.paths.KeyPathSegment.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"expound.paths/KeyPathSegment",null,(1),null));
}));

(expound.paths.KeyPathSegment.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"expound.paths/KeyPathSegment");
}));

/**
 * Positional factory function for expound.paths/KeyPathSegment.
 */
expound.paths.__GT_KeyPathSegment = (function expound$paths$__GT_KeyPathSegment(key){
return (new expound.paths.KeyPathSegment(key,null,null,null));
});

/**
 * Factory function for expound.paths/KeyPathSegment, taking a map of keywords to field values.
 */
expound.paths.map__GT_KeyPathSegment = (function expound$paths$map__GT_KeyPathSegment(G__48705){
var extmap__4501__auto__ = (function (){var G__48752 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48705,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.record_QMARK_(G__48705)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48752);
} else {
return G__48752;
}
})();
return (new expound.paths.KeyPathSegment(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__48705),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
expound.paths.KeyValuePathSegment = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(expound.paths.KeyValuePathSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k48754,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__48759 = k48754;
var G__48759__$1 = (((G__48759 instanceof cljs.core.Keyword))?G__48759.fqn:null);
switch (G__48759__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48754,else__4464__auto__);

}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__48766){
var vec__48767 = p__48766;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48767,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48767,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#expound.paths.KeyValuePathSegment{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48753){
var self__ = this;
var G__48753__$1 = this;
return (new cljs.core.RecordIter((0),G__48753__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (1269438429 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48755,other48756){
var self__ = this;
var this48755__$1 = this;
return (((!((other48756 == null)))) && ((((this48755__$1.constructor === other48756.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48755__$1.idx,other48756.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48755__$1.__extmap,other48756.__extmap)))))));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k48754){
var self__ = this;
var this__4468__auto____$1 = this;
var G__48803 = k48754;
var G__48803__$1 = (((G__48803 instanceof cljs.core.Keyword))?G__48803.fqn:null);
switch (G__48803__$1) {
case "idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48754);

}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__48753){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__48808 = cljs.core.keyword_identical_QMARK_;
var expr__48809 = k__4470__auto__;
if(cljs.core.truth_((pred__48808.cljs$core$IFn$_invoke$arity$2 ? pred__48808.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx","idx",1053688473),expr__48809) : pred__48808.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__48809)))){
return (new expound.paths.KeyValuePathSegment(G__48753,self__.__meta,self__.__extmap,null));
} else {
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__48753),null));
}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx,null))], null),self__.__extmap));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__48753){
var self__ = this;
var this__4460__auto____$1 = this;
return (new expound.paths.KeyValuePathSegment(self__.idx,G__48753,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(expound.paths.KeyValuePathSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
}));

(expound.paths.KeyValuePathSegment.cljs$lang$type = true);

(expound.paths.KeyValuePathSegment.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"expound.paths/KeyValuePathSegment",null,(1),null));
}));

(expound.paths.KeyValuePathSegment.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"expound.paths/KeyValuePathSegment");
}));

/**
 * Positional factory function for expound.paths/KeyValuePathSegment.
 */
expound.paths.__GT_KeyValuePathSegment = (function expound$paths$__GT_KeyValuePathSegment(idx){
return (new expound.paths.KeyValuePathSegment(idx,null,null,null));
});

/**
 * Factory function for expound.paths/KeyValuePathSegment, taking a map of keywords to field values.
 */
expound.paths.map__GT_KeyValuePathSegment = (function expound$paths$map__GT_KeyValuePathSegment(G__48757){
var extmap__4501__auto__ = (function (){var G__48845 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48757,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.record_QMARK_(G__48757)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48845);
} else {
return G__48845;
}
})();
return (new expound.paths.KeyValuePathSegment(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__48757),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

expound.paths.kps_QMARK_ = (function expound$paths$kps_QMARK_(x){
return (x instanceof expound.paths.KeyPathSegment);
});
expound.paths.kvps_QMARK_ = (function expound$paths$kvps_QMARK_(x){
return (x instanceof expound.paths.KeyValuePathSegment);
});
expound.paths.fn_equal = (function expound$paths$fn_equal(x,y){
return ((cljs.core.fn_QMARK_(x)) && (((cljs.core.fn_QMARK_(y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0)))))));
});
expound.paths.both_nan_QMARK_ = (function expound$paths$both_nan_QMARK_(x,y){
var and__4210__auto__ = expound.util.nan_QMARK_(x);
if(cljs.core.truth_(and__4210__auto__)){
return expound.util.nan_QMARK_(y);
} else {
return and__4210__auto__;
}
});
expound.paths.equalish_QMARK_ = (function expound$paths$equalish_QMARK_(x,y){
var or__4212__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = expound.paths.fn_equal(x,y);
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
return expound.paths.both_nan_QMARK_(x,y);
}
}
});
expound.paths.in_with_kps_maps_as_seqs = (function expound$paths$in_with_kps_maps_as_seqs(form,val,in$,in_SINGLEQUOTE_){
var vec__48899 = in$;
var seq__48900 = cljs.core.seq(vec__48899);
var first__48901 = cljs.core.first(seq__48900);
var seq__48900__$1 = cljs.core.next(seq__48900);
var k = first__48901;
var rst = seq__48900__$1;
var vec__48902 = rst;
var seq__48903 = cljs.core.seq(vec__48902);
var first__48904 = cljs.core.first(seq__48903);
var seq__48903__$1 = cljs.core.next(seq__48903);
var idx = first__48904;
var rst2 = seq__48903__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),form)){
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.empty_QMARK_(in$);
if(and__4210__auto__){
return expound.paths.equalish_QMARK_(form,val);
} else {
return and__4210__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.map_QMARK_(form)) && (((cljs.core.nat_int_QMARK_(k)) && ((cljs.core.long$(k) < cljs.core.count(cljs.core.seq(form)))))))){
var G__48910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__48911 = val;
var G__48912 = rst;
var G__48913 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,expound.paths.__GT_KeyValuePathSegment(k));
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__48910,G__48911,G__48912,G__48913) : expound.paths.in_with_kps_STAR_.call(null,G__48910,G__48911,G__48912,G__48913));
} else {
if(((cljs.core.map_QMARK_(form)) && (((cljs.core.nat_int_QMARK_(k)) && (((cljs.core.int_QMARK_(idx)) && ((((cljs.core.long$(k) < cljs.core.count(cljs.core.seq(form)))) && ((cljs.core.long$(idx) < cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k)))))))))))){
var G__48919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k),idx);
var G__48920 = val;
var G__48921 = rst2;
var G__48922 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(in_SINGLEQUOTE_,expound.paths.__GT_KeyValuePathSegment(k),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idx], 0));
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__48919,G__48920,G__48921,G__48922) : expound.paths.in_with_kps_STAR_.call(null,G__48919,G__48920,G__48921,G__48922));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_fuzzy_match_for_regex_failures = (function expound$paths$in_with_kps_fuzzy_match_for_regex_failures(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__48938 = in$;
var seq__48939 = cljs.core.seq(vec__48938);
var first__48940 = cljs.core.first(seq__48939);
var seq__48939__$1 = cljs.core.next(seq__48939);
var k = first__48940;
var rst = seq__48939__$1;
if(((cljs.core.empty_QMARK_(in$)) && (((cljs.core.seqable_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,cljs.core.List.EMPTY)))))){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.empty_QMARK_(in$)) && (((cljs.core.seq_QMARK_(val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.first(val))))))){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.nat_int_QMARK_(k)) && (cljs.core.seqable_QMARK_(form)))){
var G__48944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.seq(form),k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795));
var G__48945 = val;
var G__48946 = rst;
var G__48947 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,k);
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__48944,G__48945,G__48946,G__48947) : expound.paths.in_with_kps_STAR_.call(null,G__48944,G__48945,G__48946,G__48947));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_ints_are_keys = (function expound$paths$in_with_kps_ints_are_keys(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__48948 = in$;
var seq__48949 = cljs.core.seq(vec__48948);
var first__48950 = cljs.core.first(seq__48949);
var seq__48949__$1 = cljs.core.next(seq__48949);
var k = first__48950;
var rst = seq__48949__$1;
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.empty_QMARK_(in$);
if(and__4210__auto__){
return expound.paths.equalish_QMARK_(form,val);
} else {
return and__4210__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(cljs.core.associative_QMARK_(form)){
var G__48951 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(form,k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795));
var G__48952 = val;
var G__48953 = rst;
var G__48954 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,k);
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__48951,G__48952,G__48953,G__48954) : expound.paths.in_with_kps_STAR_.call(null,G__48951,G__48952,G__48953,G__48954));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.seqable_QMARK_(form)))){
var G__48955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.seq(form),k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795));
var G__48956 = val;
var G__48957 = rst;
var G__48958 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,k);
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__48955,G__48956,G__48957,G__48958) : expound.paths.in_with_kps_STAR_.call(null,G__48955,G__48956,G__48957,G__48958));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_ints_are_key_value_indicators = (function expound$paths$in_with_kps_ints_are_key_value_indicators(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__48960 = in$;
var seq__48961 = cljs.core.seq(vec__48960);
var first__48962 = cljs.core.first(seq__48961);
var seq__48961__$1 = cljs.core.next(seq__48961);
var k = first__48962;
var rst = seq__48961__$1;
var vec__48963 = rst;
var seq__48964 = cljs.core.seq(vec__48963);
var first__48965 = cljs.core.first(seq__48964);
var seq__48964__$1 = cljs.core.next(seq__48964);
var idx = first__48965;
var rst2 = seq__48964__$1;
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.empty_QMARK_(in$);
if(and__4210__auto__){
return expound.paths.equalish_QMARK_(form,val);
} else {
return and__4210__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.map_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),idx)))){
var G__48966 = k;
var G__48967 = val;
var G__48968 = rst2;
var G__48969 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,expound.paths.__GT_KeyPathSegment(k));
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__48966,G__48967,G__48968,G__48969) : expound.paths.in_with_kps_STAR_.call(null,G__48966,G__48967,G__48968,G__48969));
} else {
if(((cljs.core.map_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),idx)))){
var G__48970 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(form,k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795));
var G__48971 = val;
var G__48972 = rst2;
var G__48973 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,k);
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__48970,G__48971,G__48972,G__48973) : expound.paths.in_with_kps_STAR_.call(null,G__48970,G__48971,G__48972,G__48973));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_STAR_ = (function expound$paths$in_with_kps_STAR_(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core.fn_QMARK_(form)){
return in_SINGLEQUOTE_;
} else {
var br1 = expound.paths.in_with_kps_ints_are_key_value_indicators(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br1)){
return br1;
} else {
var br2 = expound.paths.in_with_kps_maps_as_seqs(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br2)){
return br2;
} else {
var br3 = expound.paths.in_with_kps_ints_are_keys(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br3)){
return br3;
} else {
var br4 = expound.paths.in_with_kps_fuzzy_match_for_regex_failures(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br4)){
return br4;
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);
}
}
}
}
}
});
expound.paths.paths_to_value = (function expound$paths$paths_to_value(form,val,path,paths){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,val)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths,path);
} else {
if(((cljs.core.sequential_QMARK_(form)) || (cljs.core.set_QMARK_(form)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ps,p__49015){
var vec__49019 = p__49015;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49019,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49019,(1),null);
var G__49026 = x;
var G__49027 = val;
var G__49028 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
var G__49029 = ps;
return (expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4 ? expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4(G__49026,G__49027,G__49028,G__49029) : expound.paths.paths_to_value.call(null,G__49026,G__49027,G__49028,G__49029));
}),paths,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,form,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
} else {
if(cljs.core.map_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ps,p__49030){
var vec__49031 = p__49030;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49031,(1),null);
var G__49035 = v;
var G__49036 = val;
var G__49037 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
var G__49038 = (function (){var G__49039 = k;
var G__49040 = val;
var G__49041 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,expound.paths.__GT_KeyPathSegment(k));
var G__49042 = ps;
return (expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4 ? expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4(G__49039,G__49040,G__49041,G__49042) : expound.paths.paths_to_value.call(null,G__49039,G__49040,G__49041,G__49042));
})();
return (expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4 ? expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4(G__49035,G__49036,G__49037,G__49038) : expound.paths.paths_to_value.call(null,G__49035,G__49036,G__49037,G__49038));
}),paths,form);
} else {
return paths;

}
}
}
});
expound.paths.in_with_kps = (function expound$paths$in_with_kps(form,val,in$,in_SINGLEQUOTE_){
var res = expound.paths.in_with_kps_STAR_(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),res)){
return null;
} else {
return res;
}
});
expound.paths.compare_path_segment = (function expound$paths$compare_path_segment(x,y){
if(((cljs.core.int_QMARK_(x)) && (expound.paths.kvps_QMARK_(y)))){
return cljs.core.compare(x,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(y));
} else {
if(((expound.paths.kvps_QMARK_(x)) && (cljs.core.int_QMARK_(y)))){
return cljs.core.compare(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(x),y);
} else {
if(((expound.paths.kps_QMARK_(x)) && ((!(expound.paths.kps_QMARK_(y)))))){
return (-1);
} else {
if((((!(expound.paths.kps_QMARK_(x)))) && (expound.paths.kps_QMARK_(y)))){
return (1);
} else {
if(((cljs.core.vector_QMARK_(x)) && (cljs.core.vector_QMARK_(y)))){
return (expound.paths.compare_paths.cljs$core$IFn$_invoke$arity$2 ? expound.paths.compare_paths.cljs$core$IFn$_invoke$arity$2(x,y) : expound.paths.compare_paths.call(null,x,y));
} else {
return cljs.core.compare(x,y);

}
}
}
}
}
});
expound.paths.compare_paths = (function expound$paths$compare_paths(path1,path2){
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(expound.paths.compare_path_segment,path1,path2)));
});
/**
 * Similar to get-in, but works with paths that reference map keys
 */
expound.paths.value_in = (function expound$paths$value_in(form,in$){
while(true){
if((in$ == null)){
return form;
} else {
var vec__49056 = in$;
var seq__49057 = cljs.core.seq(vec__49056);
var first__49058 = cljs.core.first(seq__49057);
var seq__49057__$1 = cljs.core.next(seq__49057);
var k = first__49058;
var rst = seq__49057__$1;
if(cljs.core.empty_QMARK_(in$)){
return form;
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kps_QMARK_(k)))){
var G__49155 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k);
var G__49156 = rst;
form = G__49155;
in$ = G__49156;
continue;
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kvps_QMARK_(k)))){
var G__49157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(k));
var G__49158 = rst;
form = G__49157;
in$ = G__49158;
continue;
} else {
if(cljs.core.associative_QMARK_(form)){
var G__49159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k);
var G__49160 = rst;
form = G__49159;
in$ = G__49160;
continue;
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.seqable_QMARK_(form)))){
var G__49161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__49162 = rst;
form = G__49161;
in$ = G__49162;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No value found",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=expound.paths.js.map
