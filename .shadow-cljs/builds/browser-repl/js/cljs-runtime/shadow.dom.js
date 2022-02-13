goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_53540 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_53540(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_53541 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_53541(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__52283 = coll;
var G__52284 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__52283,G__52284) : shadow.dom.lazy_native_coll_seq.call(null,G__52283,G__52284));
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
var G__52306 = arguments.length;
switch (G__52306) {
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
var G__52319 = arguments.length;
switch (G__52319) {
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
var G__52325 = arguments.length;
switch (G__52325) {
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
var G__52333 = arguments.length;
switch (G__52333) {
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
var G__52355 = arguments.length;
switch (G__52355) {
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
var G__52375 = arguments.length;
switch (G__52375) {
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
}catch (e52380){if((e52380 instanceof Object)){
var e = e52380;
return console.log("didnt support attachEvent",el,e);
} else {
throw e52380;

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
var seq__52394 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__52395 = null;
var count__52396 = (0);
var i__52397 = (0);
while(true){
if((i__52397 < count__52396)){
var el = chunk__52395.cljs$core$IIndexed$_nth$arity$2(null,i__52397);
var handler_53550__$1 = ((function (seq__52394,chunk__52395,count__52396,i__52397,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__52394,chunk__52395,count__52396,i__52397,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53550__$1);


var G__53551 = seq__52394;
var G__53552 = chunk__52395;
var G__53553 = count__52396;
var G__53554 = (i__52397 + (1));
seq__52394 = G__53551;
chunk__52395 = G__53552;
count__52396 = G__53553;
i__52397 = G__53554;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52394);
if(temp__5753__auto__){
var seq__52394__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52394__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52394__$1);
var G__53555 = cljs.core.chunk_rest(seq__52394__$1);
var G__53556 = c__4638__auto__;
var G__53557 = cljs.core.count(c__4638__auto__);
var G__53558 = (0);
seq__52394 = G__53555;
chunk__52395 = G__53556;
count__52396 = G__53557;
i__52397 = G__53558;
continue;
} else {
var el = cljs.core.first(seq__52394__$1);
var handler_53559__$1 = ((function (seq__52394,chunk__52395,count__52396,i__52397,el,seq__52394__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__52394,chunk__52395,count__52396,i__52397,el,seq__52394__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53559__$1);


var G__53560 = cljs.core.next(seq__52394__$1);
var G__53561 = null;
var G__53562 = (0);
var G__53563 = (0);
seq__52394 = G__53560;
chunk__52395 = G__53561;
count__52396 = G__53562;
i__52397 = G__53563;
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
var G__52418 = arguments.length;
switch (G__52418) {
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
var seq__52430 = cljs.core.seq(events);
var chunk__52431 = null;
var count__52432 = (0);
var i__52433 = (0);
while(true){
if((i__52433 < count__52432)){
var vec__52446 = chunk__52431.cljs$core$IIndexed$_nth$arity$2(null,i__52433);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52446,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52446,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53567 = seq__52430;
var G__53568 = chunk__52431;
var G__53569 = count__52432;
var G__53570 = (i__52433 + (1));
seq__52430 = G__53567;
chunk__52431 = G__53568;
count__52432 = G__53569;
i__52433 = G__53570;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52430);
if(temp__5753__auto__){
var seq__52430__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52430__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52430__$1);
var G__53572 = cljs.core.chunk_rest(seq__52430__$1);
var G__53573 = c__4638__auto__;
var G__53574 = cljs.core.count(c__4638__auto__);
var G__53575 = (0);
seq__52430 = G__53572;
chunk__52431 = G__53573;
count__52432 = G__53574;
i__52433 = G__53575;
continue;
} else {
var vec__52450 = cljs.core.first(seq__52430__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52450,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52450,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53576 = cljs.core.next(seq__52430__$1);
var G__53577 = null;
var G__53578 = (0);
var G__53579 = (0);
seq__52430 = G__53576;
chunk__52431 = G__53577;
count__52432 = G__53578;
i__52433 = G__53579;
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
var seq__52456 = cljs.core.seq(styles);
var chunk__52457 = null;
var count__52458 = (0);
var i__52459 = (0);
while(true){
if((i__52459 < count__52458)){
var vec__52476 = chunk__52457.cljs$core$IIndexed$_nth$arity$2(null,i__52459);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52476,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52476,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53582 = seq__52456;
var G__53583 = chunk__52457;
var G__53584 = count__52458;
var G__53585 = (i__52459 + (1));
seq__52456 = G__53582;
chunk__52457 = G__53583;
count__52458 = G__53584;
i__52459 = G__53585;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52456);
if(temp__5753__auto__){
var seq__52456__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52456__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52456__$1);
var G__53586 = cljs.core.chunk_rest(seq__52456__$1);
var G__53587 = c__4638__auto__;
var G__53588 = cljs.core.count(c__4638__auto__);
var G__53589 = (0);
seq__52456 = G__53586;
chunk__52457 = G__53587;
count__52458 = G__53588;
i__52459 = G__53589;
continue;
} else {
var vec__52485 = cljs.core.first(seq__52456__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52485,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52485,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53591 = cljs.core.next(seq__52456__$1);
var G__53592 = null;
var G__53593 = (0);
var G__53594 = (0);
seq__52456 = G__53591;
chunk__52457 = G__53592;
count__52458 = G__53593;
i__52459 = G__53594;
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
var G__52493_53595 = key;
var G__52493_53596__$1 = (((G__52493_53595 instanceof cljs.core.Keyword))?G__52493_53595.fqn:null);
switch (G__52493_53596__$1) {
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
var ks_53598 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_53598,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_53598,"aria-");
}
})())){
el.setAttribute(ks_53598,value);
} else {
(el[ks_53598] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__52519){
var map__52520 = p__52519;
var map__52520__$1 = cljs.core.__destructure_map(map__52520);
var props = map__52520__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52520__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__52522 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52522,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52522,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52522,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__52526 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__52526,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__52526;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__52535 = arguments.length;
switch (G__52535) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__52549){
var vec__52552 = p__52549;
var seq__52553 = cljs.core.seq(vec__52552);
var first__52554 = cljs.core.first(seq__52553);
var seq__52553__$1 = cljs.core.next(seq__52553);
var nn = first__52554;
var first__52554__$1 = cljs.core.first(seq__52553__$1);
var seq__52553__$2 = cljs.core.next(seq__52553__$1);
var np = first__52554__$1;
var nc = seq__52553__$2;
var node = vec__52552;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52558 = nn;
var G__52559 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__52558,G__52559) : create_fn.call(null,G__52558,G__52559));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52568 = nn;
var G__52569 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__52568,G__52569) : create_fn.call(null,G__52568,G__52569));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__52574 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52574,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52574,(1),null);
var seq__52578_53605 = cljs.core.seq(node_children);
var chunk__52579_53606 = null;
var count__52580_53607 = (0);
var i__52581_53608 = (0);
while(true){
if((i__52581_53608 < count__52580_53607)){
var child_struct_53609 = chunk__52579_53606.cljs$core$IIndexed$_nth$arity$2(null,i__52581_53608);
var children_53611 = shadow.dom.dom_node(child_struct_53609);
if(cljs.core.seq_QMARK_(children_53611)){
var seq__52646_53613 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53611));
var chunk__52648_53614 = null;
var count__52649_53615 = (0);
var i__52650_53616 = (0);
while(true){
if((i__52650_53616 < count__52649_53615)){
var child_53617 = chunk__52648_53614.cljs$core$IIndexed$_nth$arity$2(null,i__52650_53616);
if(cljs.core.truth_(child_53617)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53617);


var G__53619 = seq__52646_53613;
var G__53620 = chunk__52648_53614;
var G__53621 = count__52649_53615;
var G__53622 = (i__52650_53616 + (1));
seq__52646_53613 = G__53619;
chunk__52648_53614 = G__53620;
count__52649_53615 = G__53621;
i__52650_53616 = G__53622;
continue;
} else {
var G__53623 = seq__52646_53613;
var G__53624 = chunk__52648_53614;
var G__53625 = count__52649_53615;
var G__53626 = (i__52650_53616 + (1));
seq__52646_53613 = G__53623;
chunk__52648_53614 = G__53624;
count__52649_53615 = G__53625;
i__52650_53616 = G__53626;
continue;
}
} else {
var temp__5753__auto___53627 = cljs.core.seq(seq__52646_53613);
if(temp__5753__auto___53627){
var seq__52646_53628__$1 = temp__5753__auto___53627;
if(cljs.core.chunked_seq_QMARK_(seq__52646_53628__$1)){
var c__4638__auto___53629 = cljs.core.chunk_first(seq__52646_53628__$1);
var G__53630 = cljs.core.chunk_rest(seq__52646_53628__$1);
var G__53631 = c__4638__auto___53629;
var G__53632 = cljs.core.count(c__4638__auto___53629);
var G__53633 = (0);
seq__52646_53613 = G__53630;
chunk__52648_53614 = G__53631;
count__52649_53615 = G__53632;
i__52650_53616 = G__53633;
continue;
} else {
var child_53634 = cljs.core.first(seq__52646_53628__$1);
if(cljs.core.truth_(child_53634)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53634);


var G__53635 = cljs.core.next(seq__52646_53628__$1);
var G__53636 = null;
var G__53637 = (0);
var G__53638 = (0);
seq__52646_53613 = G__53635;
chunk__52648_53614 = G__53636;
count__52649_53615 = G__53637;
i__52650_53616 = G__53638;
continue;
} else {
var G__53639 = cljs.core.next(seq__52646_53628__$1);
var G__53640 = null;
var G__53641 = (0);
var G__53642 = (0);
seq__52646_53613 = G__53639;
chunk__52648_53614 = G__53640;
count__52649_53615 = G__53641;
i__52650_53616 = G__53642;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53611);
}


var G__53643 = seq__52578_53605;
var G__53644 = chunk__52579_53606;
var G__53645 = count__52580_53607;
var G__53646 = (i__52581_53608 + (1));
seq__52578_53605 = G__53643;
chunk__52579_53606 = G__53644;
count__52580_53607 = G__53645;
i__52581_53608 = G__53646;
continue;
} else {
var temp__5753__auto___53647 = cljs.core.seq(seq__52578_53605);
if(temp__5753__auto___53647){
var seq__52578_53648__$1 = temp__5753__auto___53647;
if(cljs.core.chunked_seq_QMARK_(seq__52578_53648__$1)){
var c__4638__auto___53649 = cljs.core.chunk_first(seq__52578_53648__$1);
var G__53650 = cljs.core.chunk_rest(seq__52578_53648__$1);
var G__53651 = c__4638__auto___53649;
var G__53652 = cljs.core.count(c__4638__auto___53649);
var G__53653 = (0);
seq__52578_53605 = G__53650;
chunk__52579_53606 = G__53651;
count__52580_53607 = G__53652;
i__52581_53608 = G__53653;
continue;
} else {
var child_struct_53654 = cljs.core.first(seq__52578_53648__$1);
var children_53655 = shadow.dom.dom_node(child_struct_53654);
if(cljs.core.seq_QMARK_(children_53655)){
var seq__52665_53656 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53655));
var chunk__52667_53657 = null;
var count__52668_53658 = (0);
var i__52669_53659 = (0);
while(true){
if((i__52669_53659 < count__52668_53658)){
var child_53661 = chunk__52667_53657.cljs$core$IIndexed$_nth$arity$2(null,i__52669_53659);
if(cljs.core.truth_(child_53661)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53661);


var G__53663 = seq__52665_53656;
var G__53664 = chunk__52667_53657;
var G__53665 = count__52668_53658;
var G__53666 = (i__52669_53659 + (1));
seq__52665_53656 = G__53663;
chunk__52667_53657 = G__53664;
count__52668_53658 = G__53665;
i__52669_53659 = G__53666;
continue;
} else {
var G__53667 = seq__52665_53656;
var G__53668 = chunk__52667_53657;
var G__53669 = count__52668_53658;
var G__53670 = (i__52669_53659 + (1));
seq__52665_53656 = G__53667;
chunk__52667_53657 = G__53668;
count__52668_53658 = G__53669;
i__52669_53659 = G__53670;
continue;
}
} else {
var temp__5753__auto___53671__$1 = cljs.core.seq(seq__52665_53656);
if(temp__5753__auto___53671__$1){
var seq__52665_53672__$1 = temp__5753__auto___53671__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52665_53672__$1)){
var c__4638__auto___53673 = cljs.core.chunk_first(seq__52665_53672__$1);
var G__53674 = cljs.core.chunk_rest(seq__52665_53672__$1);
var G__53675 = c__4638__auto___53673;
var G__53676 = cljs.core.count(c__4638__auto___53673);
var G__53677 = (0);
seq__52665_53656 = G__53674;
chunk__52667_53657 = G__53675;
count__52668_53658 = G__53676;
i__52669_53659 = G__53677;
continue;
} else {
var child_53678 = cljs.core.first(seq__52665_53672__$1);
if(cljs.core.truth_(child_53678)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53678);


var G__53679 = cljs.core.next(seq__52665_53672__$1);
var G__53680 = null;
var G__53681 = (0);
var G__53682 = (0);
seq__52665_53656 = G__53679;
chunk__52667_53657 = G__53680;
count__52668_53658 = G__53681;
i__52669_53659 = G__53682;
continue;
} else {
var G__53683 = cljs.core.next(seq__52665_53672__$1);
var G__53684 = null;
var G__53685 = (0);
var G__53686 = (0);
seq__52665_53656 = G__53683;
chunk__52667_53657 = G__53684;
count__52668_53658 = G__53685;
i__52669_53659 = G__53686;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53655);
}


var G__53687 = cljs.core.next(seq__52578_53648__$1);
var G__53688 = null;
var G__53689 = (0);
var G__53690 = (0);
seq__52578_53605 = G__53687;
chunk__52579_53606 = G__53688;
count__52580_53607 = G__53689;
i__52581_53608 = G__53690;
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
var seq__52762 = cljs.core.seq(node);
var chunk__52763 = null;
var count__52764 = (0);
var i__52765 = (0);
while(true){
if((i__52765 < count__52764)){
var n = chunk__52763.cljs$core$IIndexed$_nth$arity$2(null,i__52765);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53698 = seq__52762;
var G__53699 = chunk__52763;
var G__53700 = count__52764;
var G__53701 = (i__52765 + (1));
seq__52762 = G__53698;
chunk__52763 = G__53699;
count__52764 = G__53700;
i__52765 = G__53701;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52762);
if(temp__5753__auto__){
var seq__52762__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52762__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52762__$1);
var G__53703 = cljs.core.chunk_rest(seq__52762__$1);
var G__53704 = c__4638__auto__;
var G__53705 = cljs.core.count(c__4638__auto__);
var G__53706 = (0);
seq__52762 = G__53703;
chunk__52763 = G__53704;
count__52764 = G__53705;
i__52765 = G__53706;
continue;
} else {
var n = cljs.core.first(seq__52762__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53709 = cljs.core.next(seq__52762__$1);
var G__53710 = null;
var G__53711 = (0);
var G__53712 = (0);
seq__52762 = G__53709;
chunk__52763 = G__53710;
count__52764 = G__53711;
i__52765 = G__53712;
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
var G__52818 = arguments.length;
switch (G__52818) {
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
var G__52832 = arguments.length;
switch (G__52832) {
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
var G__52861 = arguments.length;
switch (G__52861) {
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
var len__4818__auto___53724 = arguments.length;
var i__4819__auto___53725 = (0);
while(true){
if((i__4819__auto___53725 < len__4818__auto___53724)){
args__4824__auto__.push((arguments[i__4819__auto___53725]));

var G__53726 = (i__4819__auto___53725 + (1));
i__4819__auto___53725 = G__53726;
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
var seq__52916_53727 = cljs.core.seq(nodes);
var chunk__52917_53728 = null;
var count__52918_53729 = (0);
var i__52919_53730 = (0);
while(true){
if((i__52919_53730 < count__52918_53729)){
var node_53732 = chunk__52917_53728.cljs$core$IIndexed$_nth$arity$2(null,i__52919_53730);
fragment.appendChild(shadow.dom._to_dom(node_53732));


var G__53734 = seq__52916_53727;
var G__53735 = chunk__52917_53728;
var G__53736 = count__52918_53729;
var G__53737 = (i__52919_53730 + (1));
seq__52916_53727 = G__53734;
chunk__52917_53728 = G__53735;
count__52918_53729 = G__53736;
i__52919_53730 = G__53737;
continue;
} else {
var temp__5753__auto___53738 = cljs.core.seq(seq__52916_53727);
if(temp__5753__auto___53738){
var seq__52916_53739__$1 = temp__5753__auto___53738;
if(cljs.core.chunked_seq_QMARK_(seq__52916_53739__$1)){
var c__4638__auto___53740 = cljs.core.chunk_first(seq__52916_53739__$1);
var G__53741 = cljs.core.chunk_rest(seq__52916_53739__$1);
var G__53742 = c__4638__auto___53740;
var G__53743 = cljs.core.count(c__4638__auto___53740);
var G__53744 = (0);
seq__52916_53727 = G__53741;
chunk__52917_53728 = G__53742;
count__52918_53729 = G__53743;
i__52919_53730 = G__53744;
continue;
} else {
var node_53746 = cljs.core.first(seq__52916_53739__$1);
fragment.appendChild(shadow.dom._to_dom(node_53746));


var G__53747 = cljs.core.next(seq__52916_53739__$1);
var G__53748 = null;
var G__53749 = (0);
var G__53750 = (0);
seq__52916_53727 = G__53747;
chunk__52917_53728 = G__53748;
count__52918_53729 = G__53749;
i__52919_53730 = G__53750;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq52901){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52901));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__52994_53752 = cljs.core.seq(scripts);
var chunk__52995_53753 = null;
var count__52996_53754 = (0);
var i__52997_53755 = (0);
while(true){
if((i__52997_53755 < count__52996_53754)){
var vec__53019_53756 = chunk__52995_53753.cljs$core$IIndexed$_nth$arity$2(null,i__52997_53755);
var script_tag_53757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53019_53756,(0),null);
var script_body_53758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53019_53756,(1),null);
eval(script_body_53758);


var G__53760 = seq__52994_53752;
var G__53761 = chunk__52995_53753;
var G__53762 = count__52996_53754;
var G__53763 = (i__52997_53755 + (1));
seq__52994_53752 = G__53760;
chunk__52995_53753 = G__53761;
count__52996_53754 = G__53762;
i__52997_53755 = G__53763;
continue;
} else {
var temp__5753__auto___53764 = cljs.core.seq(seq__52994_53752);
if(temp__5753__auto___53764){
var seq__52994_53765__$1 = temp__5753__auto___53764;
if(cljs.core.chunked_seq_QMARK_(seq__52994_53765__$1)){
var c__4638__auto___53767 = cljs.core.chunk_first(seq__52994_53765__$1);
var G__53768 = cljs.core.chunk_rest(seq__52994_53765__$1);
var G__53769 = c__4638__auto___53767;
var G__53770 = cljs.core.count(c__4638__auto___53767);
var G__53771 = (0);
seq__52994_53752 = G__53768;
chunk__52995_53753 = G__53769;
count__52996_53754 = G__53770;
i__52997_53755 = G__53771;
continue;
} else {
var vec__53031_53772 = cljs.core.first(seq__52994_53765__$1);
var script_tag_53773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53031_53772,(0),null);
var script_body_53774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53031_53772,(1),null);
eval(script_body_53774);


var G__53775 = cljs.core.next(seq__52994_53765__$1);
var G__53776 = null;
var G__53777 = (0);
var G__53778 = (0);
seq__52994_53752 = G__53775;
chunk__52995_53753 = G__53776;
count__52996_53754 = G__53777;
i__52997_53755 = G__53778;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__53037){
var vec__53038 = p__53037;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53038,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53038,(1),null);
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
var G__53047 = arguments.length;
switch (G__53047) {
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
var seq__53078 = cljs.core.seq(style_keys);
var chunk__53079 = null;
var count__53080 = (0);
var i__53081 = (0);
while(true){
if((i__53081 < count__53080)){
var it = chunk__53079.cljs$core$IIndexed$_nth$arity$2(null,i__53081);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53785 = seq__53078;
var G__53786 = chunk__53079;
var G__53787 = count__53080;
var G__53788 = (i__53081 + (1));
seq__53078 = G__53785;
chunk__53079 = G__53786;
count__53080 = G__53787;
i__53081 = G__53788;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53078);
if(temp__5753__auto__){
var seq__53078__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53078__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__53078__$1);
var G__53789 = cljs.core.chunk_rest(seq__53078__$1);
var G__53790 = c__4638__auto__;
var G__53791 = cljs.core.count(c__4638__auto__);
var G__53792 = (0);
seq__53078 = G__53789;
chunk__53079 = G__53790;
count__53080 = G__53791;
i__53081 = G__53792;
continue;
} else {
var it = cljs.core.first(seq__53078__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53801 = cljs.core.next(seq__53078__$1);
var G__53802 = null;
var G__53803 = (0);
var G__53804 = (0);
seq__53078 = G__53801;
chunk__53079 = G__53802;
count__53080 = G__53803;
i__53081 = G__53804;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k53092,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__53103 = k53092;
var G__53103__$1 = (((G__53103 instanceof cljs.core.Keyword))?G__53103.fqn:null);
switch (G__53103__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53092,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__53108){
var vec__53109 = p__53108;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53109,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53109,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53091){
var self__ = this;
var G__53091__$1 = this;
return (new cljs.core.RecordIter((0),G__53091__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53093,other53094){
var self__ = this;
var this53093__$1 = this;
return (((!((other53094 == null)))) && ((((this53093__$1.constructor === other53094.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53093__$1.x,other53094.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53093__$1.y,other53094.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53093__$1.__extmap,other53094.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k53092){
var self__ = this;
var this__4468__auto____$1 = this;
var G__53150 = k53092;
var G__53150__$1 = (((G__53150 instanceof cljs.core.Keyword))?G__53150.fqn:null);
switch (G__53150__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53092);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__53091){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__53151 = cljs.core.keyword_identical_QMARK_;
var expr__53152 = k__4470__auto__;
if(cljs.core.truth_((pred__53151.cljs$core$IFn$_invoke$arity$2 ? pred__53151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__53152) : pred__53151.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__53152)))){
return (new shadow.dom.Coordinate(G__53091,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53151.cljs$core$IFn$_invoke$arity$2 ? pred__53151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__53152) : pred__53151.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__53152)))){
return (new shadow.dom.Coordinate(self__.x,G__53091,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__53091),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__53091){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__53091,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__53098){
var extmap__4501__auto__ = (function (){var G__53156 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53098,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__53098)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53156);
} else {
return G__53156;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__53098),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__53098),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k53166,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__53183 = k53166;
var G__53183__$1 = (((G__53183 instanceof cljs.core.Keyword))?G__53183.fqn:null);
switch (G__53183__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53166,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__53194){
var vec__53195 = p__53194;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53195,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53195,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53165){
var self__ = this;
var G__53165__$1 = this;
return (new cljs.core.RecordIter((0),G__53165__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53167,other53168){
var self__ = this;
var this53167__$1 = this;
return (((!((other53168 == null)))) && ((((this53167__$1.constructor === other53168.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53167__$1.w,other53168.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53167__$1.h,other53168.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53167__$1.__extmap,other53168.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k53166){
var self__ = this;
var this__4468__auto____$1 = this;
var G__53223 = k53166;
var G__53223__$1 = (((G__53223 instanceof cljs.core.Keyword))?G__53223.fqn:null);
switch (G__53223__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53166);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__53165){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__53227 = cljs.core.keyword_identical_QMARK_;
var expr__53228 = k__4470__auto__;
if(cljs.core.truth_((pred__53227.cljs$core$IFn$_invoke$arity$2 ? pred__53227.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__53228) : pred__53227.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__53228)))){
return (new shadow.dom.Size(G__53165,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53227.cljs$core$IFn$_invoke$arity$2 ? pred__53227.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__53228) : pred__53227.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__53228)))){
return (new shadow.dom.Size(self__.w,G__53165,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__53165),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__53165){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__53165,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__53171){
var extmap__4501__auto__ = (function (){var G__53251 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53171,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__53171)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53251);
} else {
return G__53251;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__53171),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__53171),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var G__53827 = (i + (1));
var G__53828 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__53827;
ret = G__53828;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53281){
var vec__53283 = p__53281;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53283,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53283,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__53291 = arguments.length;
switch (G__53291) {
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
var G__53837 = ps;
var G__53838 = (i + (1));
el__$1 = G__53837;
i = G__53838;
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
var vec__53338 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53338,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53338,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53338,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__53345_53839 = cljs.core.seq(props);
var chunk__53346_53840 = null;
var count__53347_53841 = (0);
var i__53348_53842 = (0);
while(true){
if((i__53348_53842 < count__53347_53841)){
var vec__53368_53843 = chunk__53346_53840.cljs$core$IIndexed$_nth$arity$2(null,i__53348_53842);
var k_53844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53368_53843,(0),null);
var v_53845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53368_53843,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_53844);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53844),v_53845);


var G__53846 = seq__53345_53839;
var G__53847 = chunk__53346_53840;
var G__53848 = count__53347_53841;
var G__53849 = (i__53348_53842 + (1));
seq__53345_53839 = G__53846;
chunk__53346_53840 = G__53847;
count__53347_53841 = G__53848;
i__53348_53842 = G__53849;
continue;
} else {
var temp__5753__auto___53850 = cljs.core.seq(seq__53345_53839);
if(temp__5753__auto___53850){
var seq__53345_53851__$1 = temp__5753__auto___53850;
if(cljs.core.chunked_seq_QMARK_(seq__53345_53851__$1)){
var c__4638__auto___53852 = cljs.core.chunk_first(seq__53345_53851__$1);
var G__53853 = cljs.core.chunk_rest(seq__53345_53851__$1);
var G__53854 = c__4638__auto___53852;
var G__53855 = cljs.core.count(c__4638__auto___53852);
var G__53856 = (0);
seq__53345_53839 = G__53853;
chunk__53346_53840 = G__53854;
count__53347_53841 = G__53855;
i__53348_53842 = G__53856;
continue;
} else {
var vec__53375_53857 = cljs.core.first(seq__53345_53851__$1);
var k_53858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53375_53857,(0),null);
var v_53859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53375_53857,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_53858);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53858),v_53859);


var G__53860 = cljs.core.next(seq__53345_53851__$1);
var G__53861 = null;
var G__53862 = (0);
var G__53863 = (0);
seq__53345_53839 = G__53860;
chunk__53346_53840 = G__53861;
count__53347_53841 = G__53862;
i__53348_53842 = G__53863;
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
var vec__53384 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53384,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53384,(1),null);
var seq__53387_53865 = cljs.core.seq(node_children);
var chunk__53389_53866 = null;
var count__53390_53867 = (0);
var i__53391_53868 = (0);
while(true){
if((i__53391_53868 < count__53390_53867)){
var child_struct_53869 = chunk__53389_53866.cljs$core$IIndexed$_nth$arity$2(null,i__53391_53868);
if((!((child_struct_53869 == null)))){
if(typeof child_struct_53869 === 'string'){
var text_53870 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53870),child_struct_53869].join(''));
} else {
var children_53872 = shadow.dom.svg_node(child_struct_53869);
if(cljs.core.seq_QMARK_(children_53872)){
var seq__53426_53873 = cljs.core.seq(children_53872);
var chunk__53428_53874 = null;
var count__53429_53875 = (0);
var i__53430_53876 = (0);
while(true){
if((i__53430_53876 < count__53429_53875)){
var child_53877 = chunk__53428_53874.cljs$core$IIndexed$_nth$arity$2(null,i__53430_53876);
if(cljs.core.truth_(child_53877)){
node.appendChild(child_53877);


var G__53878 = seq__53426_53873;
var G__53879 = chunk__53428_53874;
var G__53880 = count__53429_53875;
var G__53881 = (i__53430_53876 + (1));
seq__53426_53873 = G__53878;
chunk__53428_53874 = G__53879;
count__53429_53875 = G__53880;
i__53430_53876 = G__53881;
continue;
} else {
var G__53882 = seq__53426_53873;
var G__53883 = chunk__53428_53874;
var G__53884 = count__53429_53875;
var G__53885 = (i__53430_53876 + (1));
seq__53426_53873 = G__53882;
chunk__53428_53874 = G__53883;
count__53429_53875 = G__53884;
i__53430_53876 = G__53885;
continue;
}
} else {
var temp__5753__auto___53886 = cljs.core.seq(seq__53426_53873);
if(temp__5753__auto___53886){
var seq__53426_53887__$1 = temp__5753__auto___53886;
if(cljs.core.chunked_seq_QMARK_(seq__53426_53887__$1)){
var c__4638__auto___53888 = cljs.core.chunk_first(seq__53426_53887__$1);
var G__53889 = cljs.core.chunk_rest(seq__53426_53887__$1);
var G__53890 = c__4638__auto___53888;
var G__53891 = cljs.core.count(c__4638__auto___53888);
var G__53892 = (0);
seq__53426_53873 = G__53889;
chunk__53428_53874 = G__53890;
count__53429_53875 = G__53891;
i__53430_53876 = G__53892;
continue;
} else {
var child_53893 = cljs.core.first(seq__53426_53887__$1);
if(cljs.core.truth_(child_53893)){
node.appendChild(child_53893);


var G__53894 = cljs.core.next(seq__53426_53887__$1);
var G__53895 = null;
var G__53896 = (0);
var G__53897 = (0);
seq__53426_53873 = G__53894;
chunk__53428_53874 = G__53895;
count__53429_53875 = G__53896;
i__53430_53876 = G__53897;
continue;
} else {
var G__53898 = cljs.core.next(seq__53426_53887__$1);
var G__53899 = null;
var G__53900 = (0);
var G__53901 = (0);
seq__53426_53873 = G__53898;
chunk__53428_53874 = G__53899;
count__53429_53875 = G__53900;
i__53430_53876 = G__53901;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53872);
}
}


var G__53902 = seq__53387_53865;
var G__53903 = chunk__53389_53866;
var G__53904 = count__53390_53867;
var G__53905 = (i__53391_53868 + (1));
seq__53387_53865 = G__53902;
chunk__53389_53866 = G__53903;
count__53390_53867 = G__53904;
i__53391_53868 = G__53905;
continue;
} else {
var G__53906 = seq__53387_53865;
var G__53907 = chunk__53389_53866;
var G__53908 = count__53390_53867;
var G__53909 = (i__53391_53868 + (1));
seq__53387_53865 = G__53906;
chunk__53389_53866 = G__53907;
count__53390_53867 = G__53908;
i__53391_53868 = G__53909;
continue;
}
} else {
var temp__5753__auto___53910 = cljs.core.seq(seq__53387_53865);
if(temp__5753__auto___53910){
var seq__53387_53911__$1 = temp__5753__auto___53910;
if(cljs.core.chunked_seq_QMARK_(seq__53387_53911__$1)){
var c__4638__auto___53912 = cljs.core.chunk_first(seq__53387_53911__$1);
var G__53913 = cljs.core.chunk_rest(seq__53387_53911__$1);
var G__53914 = c__4638__auto___53912;
var G__53915 = cljs.core.count(c__4638__auto___53912);
var G__53916 = (0);
seq__53387_53865 = G__53913;
chunk__53389_53866 = G__53914;
count__53390_53867 = G__53915;
i__53391_53868 = G__53916;
continue;
} else {
var child_struct_53919 = cljs.core.first(seq__53387_53911__$1);
if((!((child_struct_53919 == null)))){
if(typeof child_struct_53919 === 'string'){
var text_53920 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53920),child_struct_53919].join(''));
} else {
var children_53921 = shadow.dom.svg_node(child_struct_53919);
if(cljs.core.seq_QMARK_(children_53921)){
var seq__53441_53922 = cljs.core.seq(children_53921);
var chunk__53443_53923 = null;
var count__53444_53924 = (0);
var i__53446_53925 = (0);
while(true){
if((i__53446_53925 < count__53444_53924)){
var child_53926 = chunk__53443_53923.cljs$core$IIndexed$_nth$arity$2(null,i__53446_53925);
if(cljs.core.truth_(child_53926)){
node.appendChild(child_53926);


var G__53927 = seq__53441_53922;
var G__53928 = chunk__53443_53923;
var G__53929 = count__53444_53924;
var G__53930 = (i__53446_53925 + (1));
seq__53441_53922 = G__53927;
chunk__53443_53923 = G__53928;
count__53444_53924 = G__53929;
i__53446_53925 = G__53930;
continue;
} else {
var G__53932 = seq__53441_53922;
var G__53933 = chunk__53443_53923;
var G__53934 = count__53444_53924;
var G__53935 = (i__53446_53925 + (1));
seq__53441_53922 = G__53932;
chunk__53443_53923 = G__53933;
count__53444_53924 = G__53934;
i__53446_53925 = G__53935;
continue;
}
} else {
var temp__5753__auto___53936__$1 = cljs.core.seq(seq__53441_53922);
if(temp__5753__auto___53936__$1){
var seq__53441_53939__$1 = temp__5753__auto___53936__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53441_53939__$1)){
var c__4638__auto___53940 = cljs.core.chunk_first(seq__53441_53939__$1);
var G__53941 = cljs.core.chunk_rest(seq__53441_53939__$1);
var G__53942 = c__4638__auto___53940;
var G__53943 = cljs.core.count(c__4638__auto___53940);
var G__53944 = (0);
seq__53441_53922 = G__53941;
chunk__53443_53923 = G__53942;
count__53444_53924 = G__53943;
i__53446_53925 = G__53944;
continue;
} else {
var child_53945 = cljs.core.first(seq__53441_53939__$1);
if(cljs.core.truth_(child_53945)){
node.appendChild(child_53945);


var G__53946 = cljs.core.next(seq__53441_53939__$1);
var G__53947 = null;
var G__53948 = (0);
var G__53949 = (0);
seq__53441_53922 = G__53946;
chunk__53443_53923 = G__53947;
count__53444_53924 = G__53948;
i__53446_53925 = G__53949;
continue;
} else {
var G__53950 = cljs.core.next(seq__53441_53939__$1);
var G__53951 = null;
var G__53952 = (0);
var G__53953 = (0);
seq__53441_53922 = G__53950;
chunk__53443_53923 = G__53951;
count__53444_53924 = G__53952;
i__53446_53925 = G__53953;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53921);
}
}


var G__53957 = cljs.core.next(seq__53387_53911__$1);
var G__53958 = null;
var G__53959 = (0);
var G__53960 = (0);
seq__53387_53865 = G__53957;
chunk__53389_53866 = G__53958;
count__53390_53867 = G__53959;
i__53391_53868 = G__53960;
continue;
} else {
var G__53961 = cljs.core.next(seq__53387_53911__$1);
var G__53962 = null;
var G__53963 = (0);
var G__53964 = (0);
seq__53387_53865 = G__53961;
chunk__53389_53866 = G__53962;
count__53390_53867 = G__53963;
i__53391_53868 = G__53964;
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
var len__4818__auto___53965 = arguments.length;
var i__4819__auto___53966 = (0);
while(true){
if((i__4819__auto___53966 < len__4818__auto___53965)){
args__4824__auto__.push((arguments[i__4819__auto___53966]));

var G__53967 = (i__4819__auto___53966 + (1));
i__4819__auto___53966 = G__53967;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq53488){
var G__53489 = cljs.core.first(seq53488);
var seq53488__$1 = cljs.core.next(seq53488);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53489,seq53488__$1);
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
var G__53505 = arguments.length;
switch (G__53505) {
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
var c__49891__auto___53976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_53512){
var state_val_53513 = (state_53512[(1)]);
if((state_val_53513 === (1))){
var state_53512__$1 = state_53512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53512__$1,(2),once_or_cleanup);
} else {
if((state_val_53513 === (2))){
var inst_53509 = (state_53512[(2)]);
var inst_53510 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_53512__$1 = (function (){var statearr_53517 = state_53512;
(statearr_53517[(7)] = inst_53509);

return statearr_53517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53512__$1,inst_53510);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__49506__auto__ = null;
var shadow$dom$state_machine__49506__auto____0 = (function (){
var statearr_53518 = [null,null,null,null,null,null,null,null];
(statearr_53518[(0)] = shadow$dom$state_machine__49506__auto__);

(statearr_53518[(1)] = (1));

return statearr_53518;
});
var shadow$dom$state_machine__49506__auto____1 = (function (state_53512){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_53512);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e53523){var ex__49509__auto__ = e53523;
var statearr_53528_53978 = state_53512;
(statearr_53528_53978[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_53512[(4)]))){
var statearr_53529_53982 = state_53512;
(statearr_53529_53982[(1)] = cljs.core.first((state_53512[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53983 = state_53512;
state_53512 = G__53983;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
shadow$dom$state_machine__49506__auto__ = function(state_53512){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__49506__auto____0.call(this);
case 1:
return shadow$dom$state_machine__49506__auto____1.call(this,state_53512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__49506__auto____0;
shadow$dom$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__49506__auto____1;
return shadow$dom$state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_53534 = f__49892__auto__();
(statearr_53534[(6)] = c__49891__auto___53976);

return statearr_53534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
