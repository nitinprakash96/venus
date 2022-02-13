goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_59031 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_59031(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_59032 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_59032(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__58018 = coll;
var G__58019 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__58018,G__58019) : shadow.dom.lazy_native_coll_seq.call(null,G__58018,G__58019));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__58046 = arguments.length;
switch (G__58046) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__58050 = arguments.length;
switch (G__58050) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__58053 = arguments.length;
switch (G__58053) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__58059 = arguments.length;
switch (G__58059) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__58062 = arguments.length;
switch (G__58062) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__58068 = arguments.length;
switch (G__58068) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e58072){if((e58072 instanceof Object)){
var e = e58072;
return console.log("didnt support attachEvent",el,e);
} else {
throw e58072;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__58076 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__58077 = null;
var count__58078 = (0);
var i__58079 = (0);
while(true){
if((i__58079 < count__58078)){
var el = chunk__58077.cljs$core$IIndexed$_nth$arity$2(null,i__58079);
var handler_59043__$1 = ((function (seq__58076,chunk__58077,count__58078,i__58079,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58076,chunk__58077,count__58078,i__58079,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_59043__$1);


var G__59044 = seq__58076;
var G__59045 = chunk__58077;
var G__59046 = count__58078;
var G__59047 = (i__58079 + (1));
seq__58076 = G__59044;
chunk__58077 = G__59045;
count__58078 = G__59046;
i__58079 = G__59047;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58076);
if(temp__5753__auto__){
var seq__58076__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58076__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58076__$1);
var G__59048 = cljs.core.chunk_rest(seq__58076__$1);
var G__59049 = c__4638__auto__;
var G__59050 = cljs.core.count(c__4638__auto__);
var G__59051 = (0);
seq__58076 = G__59048;
chunk__58077 = G__59049;
count__58078 = G__59050;
i__58079 = G__59051;
continue;
} else {
var el = cljs.core.first(seq__58076__$1);
var handler_59052__$1 = ((function (seq__58076,chunk__58077,count__58078,i__58079,el,seq__58076__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58076,chunk__58077,count__58078,i__58079,el,seq__58076__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_59052__$1);


var G__59053 = cljs.core.next(seq__58076__$1);
var G__59054 = null;
var G__59055 = (0);
var G__59056 = (0);
seq__58076 = G__59053;
chunk__58077 = G__59054;
count__58078 = G__59055;
i__58079 = G__59056;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__58091 = arguments.length;
switch (G__58091) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__58103 = cljs.core.seq(events);
var chunk__58104 = null;
var count__58105 = (0);
var i__58106 = (0);
while(true){
if((i__58106 < count__58105)){
var vec__58113 = chunk__58104.cljs$core$IIndexed$_nth$arity$2(null,i__58106);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58113,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58113,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59059 = seq__58103;
var G__59060 = chunk__58104;
var G__59061 = count__58105;
var G__59062 = (i__58106 + (1));
seq__58103 = G__59059;
chunk__58104 = G__59060;
count__58105 = G__59061;
i__58106 = G__59062;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58103);
if(temp__5753__auto__){
var seq__58103__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58103__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58103__$1);
var G__59063 = cljs.core.chunk_rest(seq__58103__$1);
var G__59064 = c__4638__auto__;
var G__59065 = cljs.core.count(c__4638__auto__);
var G__59066 = (0);
seq__58103 = G__59063;
chunk__58104 = G__59064;
count__58105 = G__59065;
i__58106 = G__59066;
continue;
} else {
var vec__58116 = cljs.core.first(seq__58103__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58116,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58116,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59067 = cljs.core.next(seq__58103__$1);
var G__59068 = null;
var G__59069 = (0);
var G__59070 = (0);
seq__58103 = G__59067;
chunk__58104 = G__59068;
count__58105 = G__59069;
i__58106 = G__59070;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__58122 = cljs.core.seq(styles);
var chunk__58123 = null;
var count__58124 = (0);
var i__58125 = (0);
while(true){
if((i__58125 < count__58124)){
var vec__58142 = chunk__58123.cljs$core$IIndexed$_nth$arity$2(null,i__58125);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58142,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__59074 = seq__58122;
var G__59075 = chunk__58123;
var G__59076 = count__58124;
var G__59077 = (i__58125 + (1));
seq__58122 = G__59074;
chunk__58123 = G__59075;
count__58124 = G__59076;
i__58125 = G__59077;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58122);
if(temp__5753__auto__){
var seq__58122__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58122__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58122__$1);
var G__59078 = cljs.core.chunk_rest(seq__58122__$1);
var G__59079 = c__4638__auto__;
var G__59080 = cljs.core.count(c__4638__auto__);
var G__59081 = (0);
seq__58122 = G__59078;
chunk__58123 = G__59079;
count__58124 = G__59080;
i__58125 = G__59081;
continue;
} else {
var vec__58151 = cljs.core.first(seq__58122__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58151,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__59082 = cljs.core.next(seq__58122__$1);
var G__59083 = null;
var G__59084 = (0);
var G__59085 = (0);
seq__58122 = G__59082;
chunk__58123 = G__59083;
count__58124 = G__59084;
i__58125 = G__59085;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__58154_59086 = key;
var G__58154_59087__$1 = (((G__58154_59086 instanceof cljs.core.Keyword))?G__58154_59086.fqn:null);
switch (G__58154_59087__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_59091 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_59091,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_59091,"aria-");
}
})())){
el.setAttribute(ks_59091,value);
} else {
(el[ks_59091] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__58191){
var map__58192 = p__58191;
var map__58192__$1 = cljs.core.__destructure_map(map__58192);
var props = map__58192__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__58197 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58197,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58197,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58197,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__58204 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__58204,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__58204;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__58210 = arguments.length;
switch (G__58210) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__58219){
var vec__58220 = p__58219;
var seq__58221 = cljs.core.seq(vec__58220);
var first__58222 = cljs.core.first(seq__58221);
var seq__58221__$1 = cljs.core.next(seq__58221);
var nn = first__58222;
var first__58222__$1 = cljs.core.first(seq__58221__$1);
var seq__58221__$2 = cljs.core.next(seq__58221__$1);
var np = first__58222__$1;
var nc = seq__58221__$2;
var node = vec__58220;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58224 = nn;
var G__58225 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58224,G__58225) : create_fn.call(null,G__58224,G__58225));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58226 = nn;
var G__58227 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58226,G__58227) : create_fn.call(null,G__58226,G__58227));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__58233 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58233,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58233,(1),null);
var seq__58237_59099 = cljs.core.seq(node_children);
var chunk__58238_59100 = null;
var count__58239_59101 = (0);
var i__58240_59102 = (0);
while(true){
if((i__58240_59102 < count__58239_59101)){
var child_struct_59103 = chunk__58238_59100.cljs$core$IIndexed$_nth$arity$2(null,i__58240_59102);
var children_59104 = shadow.dom.dom_node(child_struct_59103);
if(cljs.core.seq_QMARK_(children_59104)){
var seq__58314_59105 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59104));
var chunk__58316_59106 = null;
var count__58317_59107 = (0);
var i__58318_59108 = (0);
while(true){
if((i__58318_59108 < count__58317_59107)){
var child_59109 = chunk__58316_59106.cljs$core$IIndexed$_nth$arity$2(null,i__58318_59108);
if(cljs.core.truth_(child_59109)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59109);


var G__59110 = seq__58314_59105;
var G__59111 = chunk__58316_59106;
var G__59112 = count__58317_59107;
var G__59113 = (i__58318_59108 + (1));
seq__58314_59105 = G__59110;
chunk__58316_59106 = G__59111;
count__58317_59107 = G__59112;
i__58318_59108 = G__59113;
continue;
} else {
var G__59114 = seq__58314_59105;
var G__59115 = chunk__58316_59106;
var G__59116 = count__58317_59107;
var G__59117 = (i__58318_59108 + (1));
seq__58314_59105 = G__59114;
chunk__58316_59106 = G__59115;
count__58317_59107 = G__59116;
i__58318_59108 = G__59117;
continue;
}
} else {
var temp__5753__auto___59118 = cljs.core.seq(seq__58314_59105);
if(temp__5753__auto___59118){
var seq__58314_59119__$1 = temp__5753__auto___59118;
if(cljs.core.chunked_seq_QMARK_(seq__58314_59119__$1)){
var c__4638__auto___59120 = cljs.core.chunk_first(seq__58314_59119__$1);
var G__59121 = cljs.core.chunk_rest(seq__58314_59119__$1);
var G__59122 = c__4638__auto___59120;
var G__59123 = cljs.core.count(c__4638__auto___59120);
var G__59124 = (0);
seq__58314_59105 = G__59121;
chunk__58316_59106 = G__59122;
count__58317_59107 = G__59123;
i__58318_59108 = G__59124;
continue;
} else {
var child_59125 = cljs.core.first(seq__58314_59119__$1);
if(cljs.core.truth_(child_59125)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59125);


var G__59127 = cljs.core.next(seq__58314_59119__$1);
var G__59128 = null;
var G__59129 = (0);
var G__59130 = (0);
seq__58314_59105 = G__59127;
chunk__58316_59106 = G__59128;
count__58317_59107 = G__59129;
i__58318_59108 = G__59130;
continue;
} else {
var G__59131 = cljs.core.next(seq__58314_59119__$1);
var G__59132 = null;
var G__59133 = (0);
var G__59134 = (0);
seq__58314_59105 = G__59131;
chunk__58316_59106 = G__59132;
count__58317_59107 = G__59133;
i__58318_59108 = G__59134;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59104);
}


var G__59135 = seq__58237_59099;
var G__59136 = chunk__58238_59100;
var G__59137 = count__58239_59101;
var G__59138 = (i__58240_59102 + (1));
seq__58237_59099 = G__59135;
chunk__58238_59100 = G__59136;
count__58239_59101 = G__59137;
i__58240_59102 = G__59138;
continue;
} else {
var temp__5753__auto___59139 = cljs.core.seq(seq__58237_59099);
if(temp__5753__auto___59139){
var seq__58237_59140__$1 = temp__5753__auto___59139;
if(cljs.core.chunked_seq_QMARK_(seq__58237_59140__$1)){
var c__4638__auto___59141 = cljs.core.chunk_first(seq__58237_59140__$1);
var G__59142 = cljs.core.chunk_rest(seq__58237_59140__$1);
var G__59143 = c__4638__auto___59141;
var G__59144 = cljs.core.count(c__4638__auto___59141);
var G__59145 = (0);
seq__58237_59099 = G__59142;
chunk__58238_59100 = G__59143;
count__58239_59101 = G__59144;
i__58240_59102 = G__59145;
continue;
} else {
var child_struct_59146 = cljs.core.first(seq__58237_59140__$1);
var children_59147 = shadow.dom.dom_node(child_struct_59146);
if(cljs.core.seq_QMARK_(children_59147)){
var seq__58345_59148 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59147));
var chunk__58347_59149 = null;
var count__58348_59150 = (0);
var i__58349_59151 = (0);
while(true){
if((i__58349_59151 < count__58348_59150)){
var child_59152 = chunk__58347_59149.cljs$core$IIndexed$_nth$arity$2(null,i__58349_59151);
if(cljs.core.truth_(child_59152)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59152);


var G__59153 = seq__58345_59148;
var G__59154 = chunk__58347_59149;
var G__59155 = count__58348_59150;
var G__59156 = (i__58349_59151 + (1));
seq__58345_59148 = G__59153;
chunk__58347_59149 = G__59154;
count__58348_59150 = G__59155;
i__58349_59151 = G__59156;
continue;
} else {
var G__59159 = seq__58345_59148;
var G__59160 = chunk__58347_59149;
var G__59161 = count__58348_59150;
var G__59162 = (i__58349_59151 + (1));
seq__58345_59148 = G__59159;
chunk__58347_59149 = G__59160;
count__58348_59150 = G__59161;
i__58349_59151 = G__59162;
continue;
}
} else {
var temp__5753__auto___59164__$1 = cljs.core.seq(seq__58345_59148);
if(temp__5753__auto___59164__$1){
var seq__58345_59165__$1 = temp__5753__auto___59164__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58345_59165__$1)){
var c__4638__auto___59166 = cljs.core.chunk_first(seq__58345_59165__$1);
var G__59168 = cljs.core.chunk_rest(seq__58345_59165__$1);
var G__59169 = c__4638__auto___59166;
var G__59170 = cljs.core.count(c__4638__auto___59166);
var G__59171 = (0);
seq__58345_59148 = G__59168;
chunk__58347_59149 = G__59169;
count__58348_59150 = G__59170;
i__58349_59151 = G__59171;
continue;
} else {
var child_59172 = cljs.core.first(seq__58345_59165__$1);
if(cljs.core.truth_(child_59172)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59172);


var G__59174 = cljs.core.next(seq__58345_59165__$1);
var G__59175 = null;
var G__59176 = (0);
var G__59177 = (0);
seq__58345_59148 = G__59174;
chunk__58347_59149 = G__59175;
count__58348_59150 = G__59176;
i__58349_59151 = G__59177;
continue;
} else {
var G__59178 = cljs.core.next(seq__58345_59165__$1);
var G__59179 = null;
var G__59180 = (0);
var G__59181 = (0);
seq__58345_59148 = G__59178;
chunk__58347_59149 = G__59179;
count__58348_59150 = G__59180;
i__58349_59151 = G__59181;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59147);
}


var G__59182 = cljs.core.next(seq__58237_59140__$1);
var G__59183 = null;
var G__59184 = (0);
var G__59185 = (0);
seq__58237_59099 = G__59182;
chunk__58238_59100 = G__59183;
count__58239_59101 = G__59184;
i__58240_59102 = G__59185;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58421 = cljs.core.seq(node);
var chunk__58422 = null;
var count__58423 = (0);
var i__58424 = (0);
while(true){
if((i__58424 < count__58423)){
var n = chunk__58422.cljs$core$IIndexed$_nth$arity$2(null,i__58424);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__59194 = seq__58421;
var G__59195 = chunk__58422;
var G__59196 = count__58423;
var G__59197 = (i__58424 + (1));
seq__58421 = G__59194;
chunk__58422 = G__59195;
count__58423 = G__59196;
i__58424 = G__59197;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58421);
if(temp__5753__auto__){
var seq__58421__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58421__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58421__$1);
var G__59198 = cljs.core.chunk_rest(seq__58421__$1);
var G__59199 = c__4638__auto__;
var G__59200 = cljs.core.count(c__4638__auto__);
var G__59201 = (0);
seq__58421 = G__59198;
chunk__58422 = G__59199;
count__58423 = G__59200;
i__58424 = G__59201;
continue;
} else {
var n = cljs.core.first(seq__58421__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__59203 = cljs.core.next(seq__58421__$1);
var G__59204 = null;
var G__59205 = (0);
var G__59206 = (0);
seq__58421 = G__59203;
chunk__58422 = G__59204;
count__58423 = G__59205;
i__58424 = G__59206;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58455 = arguments.length;
switch (G__58455) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__58491 = arguments.length;
switch (G__58491) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__58521 = arguments.length;
switch (G__58521) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___59232 = arguments.length;
var i__4819__auto___59233 = (0);
while(true){
if((i__4819__auto___59233 < len__4818__auto___59232)){
args__4824__auto__.push((arguments[i__4819__auto___59233]));

var G__59234 = (i__4819__auto___59233 + (1));
i__4819__auto___59233 = G__59234;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__58547_59235 = cljs.core.seq(nodes);
var chunk__58548_59236 = null;
var count__58549_59237 = (0);
var i__58550_59239 = (0);
while(true){
if((i__58550_59239 < count__58549_59237)){
var node_59240 = chunk__58548_59236.cljs$core$IIndexed$_nth$arity$2(null,i__58550_59239);
fragment.appendChild(shadow.dom._to_dom(node_59240));


var G__59241 = seq__58547_59235;
var G__59242 = chunk__58548_59236;
var G__59243 = count__58549_59237;
var G__59244 = (i__58550_59239 + (1));
seq__58547_59235 = G__59241;
chunk__58548_59236 = G__59242;
count__58549_59237 = G__59243;
i__58550_59239 = G__59244;
continue;
} else {
var temp__5753__auto___59246 = cljs.core.seq(seq__58547_59235);
if(temp__5753__auto___59246){
var seq__58547_59248__$1 = temp__5753__auto___59246;
if(cljs.core.chunked_seq_QMARK_(seq__58547_59248__$1)){
var c__4638__auto___59252 = cljs.core.chunk_first(seq__58547_59248__$1);
var G__59253 = cljs.core.chunk_rest(seq__58547_59248__$1);
var G__59254 = c__4638__auto___59252;
var G__59255 = cljs.core.count(c__4638__auto___59252);
var G__59256 = (0);
seq__58547_59235 = G__59253;
chunk__58548_59236 = G__59254;
count__58549_59237 = G__59255;
i__58550_59239 = G__59256;
continue;
} else {
var node_59257 = cljs.core.first(seq__58547_59248__$1);
fragment.appendChild(shadow.dom._to_dom(node_59257));


var G__59258 = cljs.core.next(seq__58547_59248__$1);
var G__59259 = null;
var G__59260 = (0);
var G__59261 = (0);
seq__58547_59235 = G__59258;
chunk__58548_59236 = G__59259;
count__58549_59237 = G__59260;
i__58550_59239 = G__59261;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58537){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58537));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58570_59263 = cljs.core.seq(scripts);
var chunk__58571_59264 = null;
var count__58572_59265 = (0);
var i__58573_59266 = (0);
while(true){
if((i__58573_59266 < count__58572_59265)){
var vec__58585_59267 = chunk__58571_59264.cljs$core$IIndexed$_nth$arity$2(null,i__58573_59266);
var script_tag_59268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58585_59267,(0),null);
var script_body_59269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58585_59267,(1),null);
eval(script_body_59269);


var G__59272 = seq__58570_59263;
var G__59273 = chunk__58571_59264;
var G__59274 = count__58572_59265;
var G__59275 = (i__58573_59266 + (1));
seq__58570_59263 = G__59272;
chunk__58571_59264 = G__59273;
count__58572_59265 = G__59274;
i__58573_59266 = G__59275;
continue;
} else {
var temp__5753__auto___59277 = cljs.core.seq(seq__58570_59263);
if(temp__5753__auto___59277){
var seq__58570_59278__$1 = temp__5753__auto___59277;
if(cljs.core.chunked_seq_QMARK_(seq__58570_59278__$1)){
var c__4638__auto___59280 = cljs.core.chunk_first(seq__58570_59278__$1);
var G__59281 = cljs.core.chunk_rest(seq__58570_59278__$1);
var G__59282 = c__4638__auto___59280;
var G__59283 = cljs.core.count(c__4638__auto___59280);
var G__59284 = (0);
seq__58570_59263 = G__59281;
chunk__58571_59264 = G__59282;
count__58572_59265 = G__59283;
i__58573_59266 = G__59284;
continue;
} else {
var vec__58593_59285 = cljs.core.first(seq__58570_59278__$1);
var script_tag_59286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58593_59285,(0),null);
var script_body_59287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58593_59285,(1),null);
eval(script_body_59287);


var G__59288 = cljs.core.next(seq__58570_59278__$1);
var G__59289 = null;
var G__59290 = (0);
var G__59291 = (0);
seq__58570_59263 = G__59288;
chunk__58571_59264 = G__59289;
count__58572_59265 = G__59290;
i__58573_59266 = G__59291;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58596){
var vec__58597 = p__58596;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58597,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58597,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58612 = arguments.length;
switch (G__58612) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__58618 = cljs.core.seq(style_keys);
var chunk__58619 = null;
var count__58620 = (0);
var i__58621 = (0);
while(true){
if((i__58621 < count__58620)){
var it = chunk__58619.cljs$core$IIndexed$_nth$arity$2(null,i__58621);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__59302 = seq__58618;
var G__59303 = chunk__58619;
var G__59304 = count__58620;
var G__59305 = (i__58621 + (1));
seq__58618 = G__59302;
chunk__58619 = G__59303;
count__58620 = G__59304;
i__58621 = G__59305;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58618);
if(temp__5753__auto__){
var seq__58618__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58618__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58618__$1);
var G__59308 = cljs.core.chunk_rest(seq__58618__$1);
var G__59309 = c__4638__auto__;
var G__59310 = cljs.core.count(c__4638__auto__);
var G__59311 = (0);
seq__58618 = G__59308;
chunk__58619 = G__59309;
count__58620 = G__59310;
i__58621 = G__59311;
continue;
} else {
var it = cljs.core.first(seq__58618__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__59312 = cljs.core.next(seq__58618__$1);
var G__59313 = null;
var G__59314 = (0);
var G__59315 = (0);
seq__58618 = G__59312;
chunk__58619 = G__59313;
count__58620 = G__59314;
i__58621 = G__59315;
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k58630,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__58636 = k58630;
var G__58636__$1 = (((G__58636 instanceof cljs.core.Keyword))?G__58636.fqn:null);
switch (G__58636__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58630,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__58638){
var vec__58639 = p__58638;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58639,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58639,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58629){
var self__ = this;
var G__58629__$1 = this;
return (new cljs.core.RecordIter((0),G__58629__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58631,other58632){
var self__ = this;
var this58631__$1 = this;
return (((!((other58632 == null)))) && ((((this58631__$1.constructor === other58632.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58631__$1.x,other58632.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58631__$1.y,other58632.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58631__$1.__extmap,other58632.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k58630){
var self__ = this;
var this__4468__auto____$1 = this;
var G__58660 = k58630;
var G__58660__$1 = (((G__58660 instanceof cljs.core.Keyword))?G__58660.fqn:null);
switch (G__58660__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58630);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__58629){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__58680 = cljs.core.keyword_identical_QMARK_;
var expr__58681 = k__4470__auto__;
if(cljs.core.truth_((pred__58680.cljs$core$IFn$_invoke$arity$2 ? pred__58680.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__58681) : pred__58680.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__58681)))){
return (new shadow.dom.Coordinate(G__58629,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58680.cljs$core$IFn$_invoke$arity$2 ? pred__58680.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__58681) : pred__58680.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__58681)))){
return (new shadow.dom.Coordinate(self__.x,G__58629,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__58629),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__58629){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58629,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58634){
var extmap__4501__auto__ = (function (){var G__58693 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58634,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58634)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58693);
} else {
return G__58693;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58634),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58634),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k58703,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__58713 = k58703;
var G__58713__$1 = (((G__58713 instanceof cljs.core.Keyword))?G__58713.fqn:null);
switch (G__58713__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58703,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__58717){
var vec__58718 = p__58717;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58718,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58718,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58702){
var self__ = this;
var G__58702__$1 = this;
return (new cljs.core.RecordIter((0),G__58702__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58704,other58705){
var self__ = this;
var this58704__$1 = this;
return (((!((other58705 == null)))) && ((((this58704__$1.constructor === other58705.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58704__$1.w,other58705.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58704__$1.h,other58705.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58704__$1.__extmap,other58705.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k58703){
var self__ = this;
var this__4468__auto____$1 = this;
var G__58737 = k58703;
var G__58737__$1 = (((G__58737 instanceof cljs.core.Keyword))?G__58737.fqn:null);
switch (G__58737__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58703);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__58702){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__58741 = cljs.core.keyword_identical_QMARK_;
var expr__58742 = k__4470__auto__;
if(cljs.core.truth_((pred__58741.cljs$core$IFn$_invoke$arity$2 ? pred__58741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__58742) : pred__58741.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__58742)))){
return (new shadow.dom.Size(G__58702,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58741.cljs$core$IFn$_invoke$arity$2 ? pred__58741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__58742) : pred__58741.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__58742)))){
return (new shadow.dom.Size(self__.w,G__58702,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__58702),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__58702){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58702,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58706){
var extmap__4501__auto__ = (function (){var G__58758 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58706,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58706)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58758);
} else {
return G__58758;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58706),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58706),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__59359 = (i + (1));
var G__59360 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__59359;
ret = G__59360;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58777){
var vec__58778 = p__58777;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58778,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58784 = arguments.length;
switch (G__58784) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__59376 = ps;
var G__59377 = (i + (1));
el__$1 = G__59376;
i = G__59377;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58815 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58815,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58815,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58815,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58818_59382 = cljs.core.seq(props);
var chunk__58819_59383 = null;
var count__58820_59384 = (0);
var i__58821_59385 = (0);
while(true){
if((i__58821_59385 < count__58820_59384)){
var vec__58839_59386 = chunk__58819_59383.cljs$core$IIndexed$_nth$arity$2(null,i__58821_59385);
var k_59387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58839_59386,(0),null);
var v_59388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58839_59386,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_59387);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59387),v_59388);


var G__59393 = seq__58818_59382;
var G__59394 = chunk__58819_59383;
var G__59395 = count__58820_59384;
var G__59396 = (i__58821_59385 + (1));
seq__58818_59382 = G__59393;
chunk__58819_59383 = G__59394;
count__58820_59384 = G__59395;
i__58821_59385 = G__59396;
continue;
} else {
var temp__5753__auto___59397 = cljs.core.seq(seq__58818_59382);
if(temp__5753__auto___59397){
var seq__58818_59398__$1 = temp__5753__auto___59397;
if(cljs.core.chunked_seq_QMARK_(seq__58818_59398__$1)){
var c__4638__auto___59399 = cljs.core.chunk_first(seq__58818_59398__$1);
var G__59400 = cljs.core.chunk_rest(seq__58818_59398__$1);
var G__59401 = c__4638__auto___59399;
var G__59402 = cljs.core.count(c__4638__auto___59399);
var G__59403 = (0);
seq__58818_59382 = G__59400;
chunk__58819_59383 = G__59401;
count__58820_59384 = G__59402;
i__58821_59385 = G__59403;
continue;
} else {
var vec__58846_59404 = cljs.core.first(seq__58818_59398__$1);
var k_59405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58846_59404,(0),null);
var v_59406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58846_59404,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_59405);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59405),v_59406);


var G__59408 = cljs.core.next(seq__58818_59398__$1);
var G__59409 = null;
var G__59410 = (0);
var G__59411 = (0);
seq__58818_59382 = G__59408;
chunk__58819_59383 = G__59409;
count__58820_59384 = G__59410;
i__58821_59385 = G__59411;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__58860 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58860,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58860,(1),null);
var seq__58866_59414 = cljs.core.seq(node_children);
var chunk__58869_59415 = null;
var count__58870_59416 = (0);
var i__58871_59417 = (0);
while(true){
if((i__58871_59417 < count__58870_59416)){
var child_struct_59418 = chunk__58869_59415.cljs$core$IIndexed$_nth$arity$2(null,i__58871_59417);
if((!((child_struct_59418 == null)))){
if(typeof child_struct_59418 === 'string'){
var text_59419 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59419),child_struct_59418].join(''));
} else {
var children_59420 = shadow.dom.svg_node(child_struct_59418);
if(cljs.core.seq_QMARK_(children_59420)){
var seq__58900_59421 = cljs.core.seq(children_59420);
var chunk__58902_59422 = null;
var count__58903_59423 = (0);
var i__58904_59424 = (0);
while(true){
if((i__58904_59424 < count__58903_59423)){
var child_59425 = chunk__58902_59422.cljs$core$IIndexed$_nth$arity$2(null,i__58904_59424);
if(cljs.core.truth_(child_59425)){
node.appendChild(child_59425);


var G__59426 = seq__58900_59421;
var G__59427 = chunk__58902_59422;
var G__59428 = count__58903_59423;
var G__59429 = (i__58904_59424 + (1));
seq__58900_59421 = G__59426;
chunk__58902_59422 = G__59427;
count__58903_59423 = G__59428;
i__58904_59424 = G__59429;
continue;
} else {
var G__59430 = seq__58900_59421;
var G__59431 = chunk__58902_59422;
var G__59432 = count__58903_59423;
var G__59433 = (i__58904_59424 + (1));
seq__58900_59421 = G__59430;
chunk__58902_59422 = G__59431;
count__58903_59423 = G__59432;
i__58904_59424 = G__59433;
continue;
}
} else {
var temp__5753__auto___59434 = cljs.core.seq(seq__58900_59421);
if(temp__5753__auto___59434){
var seq__58900_59435__$1 = temp__5753__auto___59434;
if(cljs.core.chunked_seq_QMARK_(seq__58900_59435__$1)){
var c__4638__auto___59436 = cljs.core.chunk_first(seq__58900_59435__$1);
var G__59437 = cljs.core.chunk_rest(seq__58900_59435__$1);
var G__59438 = c__4638__auto___59436;
var G__59439 = cljs.core.count(c__4638__auto___59436);
var G__59440 = (0);
seq__58900_59421 = G__59437;
chunk__58902_59422 = G__59438;
count__58903_59423 = G__59439;
i__58904_59424 = G__59440;
continue;
} else {
var child_59441 = cljs.core.first(seq__58900_59435__$1);
if(cljs.core.truth_(child_59441)){
node.appendChild(child_59441);


var G__59442 = cljs.core.next(seq__58900_59435__$1);
var G__59443 = null;
var G__59444 = (0);
var G__59445 = (0);
seq__58900_59421 = G__59442;
chunk__58902_59422 = G__59443;
count__58903_59423 = G__59444;
i__58904_59424 = G__59445;
continue;
} else {
var G__59446 = cljs.core.next(seq__58900_59435__$1);
var G__59447 = null;
var G__59448 = (0);
var G__59449 = (0);
seq__58900_59421 = G__59446;
chunk__58902_59422 = G__59447;
count__58903_59423 = G__59448;
i__58904_59424 = G__59449;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59420);
}
}


var G__59451 = seq__58866_59414;
var G__59452 = chunk__58869_59415;
var G__59453 = count__58870_59416;
var G__59454 = (i__58871_59417 + (1));
seq__58866_59414 = G__59451;
chunk__58869_59415 = G__59452;
count__58870_59416 = G__59453;
i__58871_59417 = G__59454;
continue;
} else {
var G__59455 = seq__58866_59414;
var G__59456 = chunk__58869_59415;
var G__59457 = count__58870_59416;
var G__59458 = (i__58871_59417 + (1));
seq__58866_59414 = G__59455;
chunk__58869_59415 = G__59456;
count__58870_59416 = G__59457;
i__58871_59417 = G__59458;
continue;
}
} else {
var temp__5753__auto___59459 = cljs.core.seq(seq__58866_59414);
if(temp__5753__auto___59459){
var seq__58866_59460__$1 = temp__5753__auto___59459;
if(cljs.core.chunked_seq_QMARK_(seq__58866_59460__$1)){
var c__4638__auto___59462 = cljs.core.chunk_first(seq__58866_59460__$1);
var G__59463 = cljs.core.chunk_rest(seq__58866_59460__$1);
var G__59464 = c__4638__auto___59462;
var G__59465 = cljs.core.count(c__4638__auto___59462);
var G__59466 = (0);
seq__58866_59414 = G__59463;
chunk__58869_59415 = G__59464;
count__58870_59416 = G__59465;
i__58871_59417 = G__59466;
continue;
} else {
var child_struct_59467 = cljs.core.first(seq__58866_59460__$1);
if((!((child_struct_59467 == null)))){
if(typeof child_struct_59467 === 'string'){
var text_59468 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59468),child_struct_59467].join(''));
} else {
var children_59469 = shadow.dom.svg_node(child_struct_59467);
if(cljs.core.seq_QMARK_(children_59469)){
var seq__58916_59470 = cljs.core.seq(children_59469);
var chunk__58918_59471 = null;
var count__58919_59472 = (0);
var i__58920_59473 = (0);
while(true){
if((i__58920_59473 < count__58919_59472)){
var child_59474 = chunk__58918_59471.cljs$core$IIndexed$_nth$arity$2(null,i__58920_59473);
if(cljs.core.truth_(child_59474)){
node.appendChild(child_59474);


var G__59478 = seq__58916_59470;
var G__59479 = chunk__58918_59471;
var G__59480 = count__58919_59472;
var G__59481 = (i__58920_59473 + (1));
seq__58916_59470 = G__59478;
chunk__58918_59471 = G__59479;
count__58919_59472 = G__59480;
i__58920_59473 = G__59481;
continue;
} else {
var G__59482 = seq__58916_59470;
var G__59483 = chunk__58918_59471;
var G__59484 = count__58919_59472;
var G__59485 = (i__58920_59473 + (1));
seq__58916_59470 = G__59482;
chunk__58918_59471 = G__59483;
count__58919_59472 = G__59484;
i__58920_59473 = G__59485;
continue;
}
} else {
var temp__5753__auto___59486__$1 = cljs.core.seq(seq__58916_59470);
if(temp__5753__auto___59486__$1){
var seq__58916_59489__$1 = temp__5753__auto___59486__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58916_59489__$1)){
var c__4638__auto___59490 = cljs.core.chunk_first(seq__58916_59489__$1);
var G__59491 = cljs.core.chunk_rest(seq__58916_59489__$1);
var G__59492 = c__4638__auto___59490;
var G__59493 = cljs.core.count(c__4638__auto___59490);
var G__59494 = (0);
seq__58916_59470 = G__59491;
chunk__58918_59471 = G__59492;
count__58919_59472 = G__59493;
i__58920_59473 = G__59494;
continue;
} else {
var child_59495 = cljs.core.first(seq__58916_59489__$1);
if(cljs.core.truth_(child_59495)){
node.appendChild(child_59495);


var G__59496 = cljs.core.next(seq__58916_59489__$1);
var G__59497 = null;
var G__59498 = (0);
var G__59499 = (0);
seq__58916_59470 = G__59496;
chunk__58918_59471 = G__59497;
count__58919_59472 = G__59498;
i__58920_59473 = G__59499;
continue;
} else {
var G__59500 = cljs.core.next(seq__58916_59489__$1);
var G__59501 = null;
var G__59502 = (0);
var G__59503 = (0);
seq__58916_59470 = G__59500;
chunk__58918_59471 = G__59501;
count__58919_59472 = G__59502;
i__58920_59473 = G__59503;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59469);
}
}


var G__59505 = cljs.core.next(seq__58866_59460__$1);
var G__59506 = null;
var G__59507 = (0);
var G__59508 = (0);
seq__58866_59414 = G__59505;
chunk__58869_59415 = G__59506;
count__58870_59416 = G__59507;
i__58871_59417 = G__59508;
continue;
} else {
var G__59510 = cljs.core.next(seq__58866_59460__$1);
var G__59511 = null;
var G__59512 = (0);
var G__59513 = (0);
seq__58866_59414 = G__59510;
chunk__58869_59415 = G__59511;
count__58870_59416 = G__59512;
i__58871_59417 = G__59513;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___59514 = arguments.length;
var i__4819__auto___59515 = (0);
while(true){
if((i__4819__auto___59515 < len__4818__auto___59514)){
args__4824__auto__.push((arguments[i__4819__auto___59515]));

var G__59516 = (i__4819__auto___59515 + (1));
i__4819__auto___59515 = G__59516;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58965){
var G__58966 = cljs.core.first(seq58965);
var seq58965__$1 = cljs.core.next(seq58965);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58966,seq58965__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__58988 = arguments.length;
switch (G__58988) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__53174__auto___59528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_59005){
var state_val_59006 = (state_59005[(1)]);
if((state_val_59006 === (1))){
var state_59005__$1 = state_59005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59005__$1,(2),once_or_cleanup);
} else {
if((state_val_59006 === (2))){
var inst_59002 = (state_59005[(2)]);
var inst_59003 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_59005__$1 = (function (){var statearr_59010 = state_59005;
(statearr_59010[(7)] = inst_59002);

return statearr_59010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59005__$1,inst_59003);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__53101__auto__ = null;
var shadow$dom$state_machine__53101__auto____0 = (function (){
var statearr_59012 = [null,null,null,null,null,null,null,null];
(statearr_59012[(0)] = shadow$dom$state_machine__53101__auto__);

(statearr_59012[(1)] = (1));

return statearr_59012;
});
var shadow$dom$state_machine__53101__auto____1 = (function (state_59005){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_59005);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e59013){var ex__53104__auto__ = e59013;
var statearr_59015_59534 = state_59005;
(statearr_59015_59534[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_59005[(4)]))){
var statearr_59017_59535 = state_59005;
(statearr_59017_59535[(1)] = cljs.core.first((state_59005[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59536 = state_59005;
state_59005 = G__59536;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
shadow$dom$state_machine__53101__auto__ = function(state_59005){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__53101__auto____0.call(this);
case 1:
return shadow$dom$state_machine__53101__auto____1.call(this,state_59005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__53101__auto____0;
shadow$dom$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__53101__auto____1;
return shadow$dom$state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_59018 = f__53175__auto__();
(statearr_59018[(6)] = c__53174__auto___59528);

return statearr_59018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
