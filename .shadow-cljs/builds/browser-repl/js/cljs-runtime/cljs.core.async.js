goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50051 = arguments.length;
switch (G__50051) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50069 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50069 = (function (f,blockable,meta50070){
this.f = f;
this.blockable = blockable;
this.meta50070 = meta50070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50071,meta50070__$1){
var self__ = this;
var _50071__$1 = this;
return (new cljs.core.async.t_cljs$core$async50069(self__.f,self__.blockable,meta50070__$1));
}));

(cljs.core.async.t_cljs$core$async50069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50071){
var self__ = this;
var _50071__$1 = this;
return self__.meta50070;
}));

(cljs.core.async.t_cljs$core$async50069.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50069.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50070","meta50070",743757358,null)], null);
}));

(cljs.core.async.t_cljs$core$async50069.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50069");

(cljs.core.async.t_cljs$core$async50069.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async50069");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50069.
 */
cljs.core.async.__GT_t_cljs$core$async50069 = (function cljs$core$async$__GT_t_cljs$core$async50069(f__$1,blockable__$1,meta50070){
return (new cljs.core.async.t_cljs$core$async50069(f__$1,blockable__$1,meta50070));
});

}

return (new cljs.core.async.t_cljs$core$async50069(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__50117 = arguments.length;
switch (G__50117) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50120 = arguments.length;
switch (G__50120) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__50124 = arguments.length;
switch (G__50124) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_52280 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52280) : fn1.call(null,val_52280));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52280) : fn1.call(null,val_52280));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50148 = arguments.length;
switch (G__50148) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___52285 = n;
var x_52286 = (0);
while(true){
if((x_52286 < n__4695__auto___52285)){
(a[x_52286] = x_52286);

var G__52287 = (x_52286 + (1));
x_52286 = G__52287;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50151 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50151 = (function (flag,meta50152){
this.flag = flag;
this.meta50152 = meta50152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50153,meta50152__$1){
var self__ = this;
var _50153__$1 = this;
return (new cljs.core.async.t_cljs$core$async50151(self__.flag,meta50152__$1));
}));

(cljs.core.async.t_cljs$core$async50151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50153){
var self__ = this;
var _50153__$1 = this;
return self__.meta50152;
}));

(cljs.core.async.t_cljs$core$async50151.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50151.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50151.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50151.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50152","meta50152",-587670739,null)], null);
}));

(cljs.core.async.t_cljs$core$async50151.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50151");

(cljs.core.async.t_cljs$core$async50151.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async50151");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50151.
 */
cljs.core.async.__GT_t_cljs$core$async50151 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50151(flag__$1,meta50152){
return (new cljs.core.async.t_cljs$core$async50151(flag__$1,meta50152));
});

}

return (new cljs.core.async.t_cljs$core$async50151(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50155 = (function (flag,cb,meta50156){
this.flag = flag;
this.cb = cb;
this.meta50156 = meta50156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50157,meta50156__$1){
var self__ = this;
var _50157__$1 = this;
return (new cljs.core.async.t_cljs$core$async50155(self__.flag,self__.cb,meta50156__$1));
}));

(cljs.core.async.t_cljs$core$async50155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50157){
var self__ = this;
var _50157__$1 = this;
return self__.meta50156;
}));

(cljs.core.async.t_cljs$core$async50155.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50155.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50156","meta50156",1640219768,null)], null);
}));

(cljs.core.async.t_cljs$core$async50155.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50155");

(cljs.core.async.t_cljs$core$async50155.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async50155");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50155.
 */
cljs.core.async.__GT_t_cljs$core$async50155 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50155(flag__$1,cb__$1,meta50156){
return (new cljs.core.async.t_cljs$core$async50155(flag__$1,cb__$1,meta50156));
});

}

return (new cljs.core.async.t_cljs$core$async50155(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50159_SHARP_){
var G__50162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50159_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50162) : fret.call(null,G__50162));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50160_SHARP_){
var G__50163 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50160_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50163) : fret.call(null,G__50163));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52296 = (i + (1));
i = G__52296;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52297 = arguments.length;
var i__4819__auto___52298 = (0);
while(true){
if((i__4819__auto___52298 < len__4818__auto___52297)){
args__4824__auto__.push((arguments[i__4819__auto___52298]));

var G__52299 = (i__4819__auto___52298 + (1));
i__4819__auto___52298 = G__52299;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50167){
var map__50168 = p__50167;
var map__50168__$1 = cljs.core.__destructure_map(map__50168);
var opts = map__50168__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50164){
var G__50166 = cljs.core.first(seq50164);
var seq50164__$1 = cljs.core.next(seq50164);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50166,seq50164__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50171 = arguments.length;
switch (G__50171) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__49891__auto___52302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_50198){
var state_val_50199 = (state_50198[(1)]);
if((state_val_50199 === (7))){
var inst_50194 = (state_50198[(2)]);
var state_50198__$1 = state_50198;
var statearr_50200_52303 = state_50198__$1;
(statearr_50200_52303[(2)] = inst_50194);

(statearr_50200_52303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50199 === (1))){
var state_50198__$1 = state_50198;
var statearr_50201_52305 = state_50198__$1;
(statearr_50201_52305[(2)] = null);

(statearr_50201_52305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50199 === (4))){
var inst_50176 = (state_50198[(7)]);
var inst_50176__$1 = (state_50198[(2)]);
var inst_50177 = (inst_50176__$1 == null);
var state_50198__$1 = (function (){var statearr_50202 = state_50198;
(statearr_50202[(7)] = inst_50176__$1);

return statearr_50202;
})();
if(cljs.core.truth_(inst_50177)){
var statearr_50203_52309 = state_50198__$1;
(statearr_50203_52309[(1)] = (5));

} else {
var statearr_50204_52310 = state_50198__$1;
(statearr_50204_52310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50199 === (13))){
var state_50198__$1 = state_50198;
var statearr_50206_52311 = state_50198__$1;
(statearr_50206_52311[(2)] = null);

(statearr_50206_52311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50199 === (6))){
var inst_50176 = (state_50198[(7)]);
var state_50198__$1 = state_50198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50198__$1,(11),to,inst_50176);
} else {
if((state_val_50199 === (3))){
var inst_50196 = (state_50198[(2)]);
var state_50198__$1 = state_50198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50198__$1,inst_50196);
} else {
if((state_val_50199 === (12))){
var state_50198__$1 = state_50198;
var statearr_50207_52312 = state_50198__$1;
(statearr_50207_52312[(2)] = null);

(statearr_50207_52312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50199 === (2))){
var state_50198__$1 = state_50198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50198__$1,(4),from);
} else {
if((state_val_50199 === (11))){
var inst_50187 = (state_50198[(2)]);
var state_50198__$1 = state_50198;
if(cljs.core.truth_(inst_50187)){
var statearr_50209_52313 = state_50198__$1;
(statearr_50209_52313[(1)] = (12));

} else {
var statearr_50210_52314 = state_50198__$1;
(statearr_50210_52314[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50199 === (9))){
var state_50198__$1 = state_50198;
var statearr_50211_52315 = state_50198__$1;
(statearr_50211_52315[(2)] = null);

(statearr_50211_52315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50199 === (5))){
var state_50198__$1 = state_50198;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50212_52317 = state_50198__$1;
(statearr_50212_52317[(1)] = (8));

} else {
var statearr_50213_52318 = state_50198__$1;
(statearr_50213_52318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50199 === (14))){
var inst_50192 = (state_50198[(2)]);
var state_50198__$1 = state_50198;
var statearr_50215_52320 = state_50198__$1;
(statearr_50215_52320[(2)] = inst_50192);

(statearr_50215_52320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50199 === (10))){
var inst_50183 = (state_50198[(2)]);
var state_50198__$1 = state_50198;
var statearr_50216_52321 = state_50198__$1;
(statearr_50216_52321[(2)] = inst_50183);

(statearr_50216_52321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50199 === (8))){
var inst_50180 = cljs.core.async.close_BANG_(to);
var state_50198__$1 = state_50198;
var statearr_50217_52322 = state_50198__$1;
(statearr_50217_52322[(2)] = inst_50180);

(statearr_50217_52322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_50218 = [null,null,null,null,null,null,null,null];
(statearr_50218[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_50218[(1)] = (1));

return statearr_50218;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_50198){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50198);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50219){var ex__49509__auto__ = e50219;
var statearr_50220_52324 = state_50198;
(statearr_50220_52324[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_50198[(4)]))){
var statearr_50221_52326 = state_50198;
(statearr_50221_52326[(1)] = cljs.core.first((state_50198[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52327 = state_50198;
state_50198 = G__52327;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_50198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_50198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_50222 = f__49892__auto__();
(statearr_50222[(6)] = c__49891__auto___52302);

return statearr_50222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__50224){
var vec__50225 = p__50224;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50225,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50225,(1),null);
var job = vec__50225;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49891__auto___52328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_50233){
var state_val_50234 = (state_50233[(1)]);
if((state_val_50234 === (1))){
var state_50233__$1 = state_50233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50233__$1,(2),res,v);
} else {
if((state_val_50234 === (2))){
var inst_50230 = (state_50233[(2)]);
var inst_50231 = cljs.core.async.close_BANG_(res);
var state_50233__$1 = (function (){var statearr_50235 = state_50233;
(statearr_50235[(7)] = inst_50230);

return statearr_50235;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50233__$1,inst_50231);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0 = (function (){
var statearr_50236 = [null,null,null,null,null,null,null,null];
(statearr_50236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__);

(statearr_50236[(1)] = (1));

return statearr_50236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1 = (function (state_50233){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50233);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50237){var ex__49509__auto__ = e50237;
var statearr_50238_52329 = state_50233;
(statearr_50238_52329[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_50233[(4)]))){
var statearr_50239_52330 = state_50233;
(statearr_50239_52330[(1)] = cljs.core.first((state_50233[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52331 = state_50233;
state_50233 = G__52331;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = function(state_50233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1.call(this,state_50233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_50241 = f__49892__auto__();
(statearr_50241[(6)] = c__49891__auto___52328);

return statearr_50241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50242){
var vec__50243 = p__50242;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50243,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50243,(1),null);
var job = vec__50243;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___52334 = n;
var __52335 = (0);
while(true){
if((__52335 < n__4695__auto___52334)){
var G__50246_52336 = type;
var G__50246_52337__$1 = (((G__50246_52336 instanceof cljs.core.Keyword))?G__50246_52336.fqn:null);
switch (G__50246_52337__$1) {
case "compute":
var c__49891__auto___52339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52335,c__49891__auto___52339,G__50246_52336,G__50246_52337__$1,n__4695__auto___52334,jobs,results,process,async){
return (function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = ((function (__52335,c__49891__auto___52339,G__50246_52336,G__50246_52337__$1,n__4695__auto___52334,jobs,results,process,async){
return (function (state_50260){
var state_val_50261 = (state_50260[(1)]);
if((state_val_50261 === (1))){
var state_50260__$1 = state_50260;
var statearr_50262_52340 = state_50260__$1;
(statearr_50262_52340[(2)] = null);

(statearr_50262_52340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (2))){
var state_50260__$1 = state_50260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50260__$1,(4),jobs);
} else {
if((state_val_50261 === (3))){
var inst_50258 = (state_50260[(2)]);
var state_50260__$1 = state_50260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50260__$1,inst_50258);
} else {
if((state_val_50261 === (4))){
var inst_50249 = (state_50260[(2)]);
var inst_50250 = process(inst_50249);
var state_50260__$1 = state_50260;
if(cljs.core.truth_(inst_50250)){
var statearr_50263_52341 = state_50260__$1;
(statearr_50263_52341[(1)] = (5));

} else {
var statearr_50264_52342 = state_50260__$1;
(statearr_50264_52342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (5))){
var state_50260__$1 = state_50260;
var statearr_50265_52343 = state_50260__$1;
(statearr_50265_52343[(2)] = null);

(statearr_50265_52343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (6))){
var state_50260__$1 = state_50260;
var statearr_50267_52344 = state_50260__$1;
(statearr_50267_52344[(2)] = null);

(statearr_50267_52344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50261 === (7))){
var inst_50255 = (state_50260[(2)]);
var state_50260__$1 = state_50260;
var statearr_50268_52345 = state_50260__$1;
(statearr_50268_52345[(2)] = inst_50255);

(statearr_50268_52345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52335,c__49891__auto___52339,G__50246_52336,G__50246_52337__$1,n__4695__auto___52334,jobs,results,process,async))
;
return ((function (__52335,switch__49505__auto__,c__49891__auto___52339,G__50246_52336,G__50246_52337__$1,n__4695__auto___52334,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0 = (function (){
var statearr_50269 = [null,null,null,null,null,null,null];
(statearr_50269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__);

(statearr_50269[(1)] = (1));

return statearr_50269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1 = (function (state_50260){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50260);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50270){var ex__49509__auto__ = e50270;
var statearr_50271_52346 = state_50260;
(statearr_50271_52346[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_50260[(4)]))){
var statearr_50272_52347 = state_50260;
(statearr_50272_52347[(1)] = cljs.core.first((state_50260[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52348 = state_50260;
state_50260 = G__52348;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = function(state_50260){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1.call(this,state_50260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__;
})()
;})(__52335,switch__49505__auto__,c__49891__auto___52339,G__50246_52336,G__50246_52337__$1,n__4695__auto___52334,jobs,results,process,async))
})();
var state__49893__auto__ = (function (){var statearr_50273 = f__49892__auto__();
(statearr_50273[(6)] = c__49891__auto___52339);

return statearr_50273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
});})(__52335,c__49891__auto___52339,G__50246_52336,G__50246_52337__$1,n__4695__auto___52334,jobs,results,process,async))
);


break;
case "async":
var c__49891__auto___52349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52335,c__49891__auto___52349,G__50246_52336,G__50246_52337__$1,n__4695__auto___52334,jobs,results,process,async){
return (function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = ((function (__52335,c__49891__auto___52349,G__50246_52336,G__50246_52337__$1,n__4695__auto___52334,jobs,results,process,async){
return (function (state_50287){
var state_val_50288 = (state_50287[(1)]);
if((state_val_50288 === (1))){
var state_50287__$1 = state_50287;
var statearr_50289_52350 = state_50287__$1;
(statearr_50289_52350[(2)] = null);

(statearr_50289_52350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50288 === (2))){
var state_50287__$1 = state_50287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50287__$1,(4),jobs);
} else {
if((state_val_50288 === (3))){
var inst_50285 = (state_50287[(2)]);
var state_50287__$1 = state_50287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50287__$1,inst_50285);
} else {
if((state_val_50288 === (4))){
var inst_50277 = (state_50287[(2)]);
var inst_50278 = async(inst_50277);
var state_50287__$1 = state_50287;
if(cljs.core.truth_(inst_50278)){
var statearr_50290_52351 = state_50287__$1;
(statearr_50290_52351[(1)] = (5));

} else {
var statearr_50292_52353 = state_50287__$1;
(statearr_50292_52353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50288 === (5))){
var state_50287__$1 = state_50287;
var statearr_50293_52354 = state_50287__$1;
(statearr_50293_52354[(2)] = null);

(statearr_50293_52354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50288 === (6))){
var state_50287__$1 = state_50287;
var statearr_50294_52356 = state_50287__$1;
(statearr_50294_52356[(2)] = null);

(statearr_50294_52356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50288 === (7))){
var inst_50283 = (state_50287[(2)]);
var state_50287__$1 = state_50287;
var statearr_50295_52357 = state_50287__$1;
(statearr_50295_52357[(2)] = inst_50283);

(statearr_50295_52357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52335,c__49891__auto___52349,G__50246_52336,G__50246_52337__$1,n__4695__auto___52334,jobs,results,process,async))
;
return ((function (__52335,switch__49505__auto__,c__49891__auto___52349,G__50246_52336,G__50246_52337__$1,n__4695__auto___52334,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0 = (function (){
var statearr_50296 = [null,null,null,null,null,null,null];
(statearr_50296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__);

(statearr_50296[(1)] = (1));

return statearr_50296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1 = (function (state_50287){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50287);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50297){var ex__49509__auto__ = e50297;
var statearr_50298_52358 = state_50287;
(statearr_50298_52358[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_50287[(4)]))){
var statearr_50300_52360 = state_50287;
(statearr_50300_52360[(1)] = cljs.core.first((state_50287[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52361 = state_50287;
state_50287 = G__52361;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = function(state_50287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1.call(this,state_50287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__;
})()
;})(__52335,switch__49505__auto__,c__49891__auto___52349,G__50246_52336,G__50246_52337__$1,n__4695__auto___52334,jobs,results,process,async))
})();
var state__49893__auto__ = (function (){var statearr_50301 = f__49892__auto__();
(statearr_50301[(6)] = c__49891__auto___52349);

return statearr_50301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
});})(__52335,c__49891__auto___52349,G__50246_52336,G__50246_52337__$1,n__4695__auto___52334,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50246_52337__$1)].join('')));

}

var G__52365 = (__52335 + (1));
__52335 = G__52365;
continue;
} else {
}
break;
}

var c__49891__auto___52366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_50323){
var state_val_50324 = (state_50323[(1)]);
if((state_val_50324 === (7))){
var inst_50319 = (state_50323[(2)]);
var state_50323__$1 = state_50323;
var statearr_50326_52367 = state_50323__$1;
(statearr_50326_52367[(2)] = inst_50319);

(statearr_50326_52367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50324 === (1))){
var state_50323__$1 = state_50323;
var statearr_50327_52368 = state_50323__$1;
(statearr_50327_52368[(2)] = null);

(statearr_50327_52368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50324 === (4))){
var inst_50304 = (state_50323[(7)]);
var inst_50304__$1 = (state_50323[(2)]);
var inst_50305 = (inst_50304__$1 == null);
var state_50323__$1 = (function (){var statearr_50328 = state_50323;
(statearr_50328[(7)] = inst_50304__$1);

return statearr_50328;
})();
if(cljs.core.truth_(inst_50305)){
var statearr_50329_52370 = state_50323__$1;
(statearr_50329_52370[(1)] = (5));

} else {
var statearr_50330_52371 = state_50323__$1;
(statearr_50330_52371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50324 === (6))){
var inst_50304 = (state_50323[(7)]);
var inst_50309 = (state_50323[(8)]);
var inst_50309__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50310 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50311 = [inst_50304,inst_50309__$1];
var inst_50312 = (new cljs.core.PersistentVector(null,2,(5),inst_50310,inst_50311,null));
var state_50323__$1 = (function (){var statearr_50331 = state_50323;
(statearr_50331[(8)] = inst_50309__$1);

return statearr_50331;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50323__$1,(8),jobs,inst_50312);
} else {
if((state_val_50324 === (3))){
var inst_50321 = (state_50323[(2)]);
var state_50323__$1 = state_50323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50323__$1,inst_50321);
} else {
if((state_val_50324 === (2))){
var state_50323__$1 = state_50323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50323__$1,(4),from);
} else {
if((state_val_50324 === (9))){
var inst_50316 = (state_50323[(2)]);
var state_50323__$1 = (function (){var statearr_50333 = state_50323;
(statearr_50333[(9)] = inst_50316);

return statearr_50333;
})();
var statearr_50334_52376 = state_50323__$1;
(statearr_50334_52376[(2)] = null);

(statearr_50334_52376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50324 === (5))){
var inst_50307 = cljs.core.async.close_BANG_(jobs);
var state_50323__$1 = state_50323;
var statearr_50335_52377 = state_50323__$1;
(statearr_50335_52377[(2)] = inst_50307);

(statearr_50335_52377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50324 === (8))){
var inst_50309 = (state_50323[(8)]);
var inst_50314 = (state_50323[(2)]);
var state_50323__$1 = (function (){var statearr_50336 = state_50323;
(statearr_50336[(10)] = inst_50314);

return statearr_50336;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50323__$1,(9),results,inst_50309);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0 = (function (){
var statearr_50337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50337[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__);

(statearr_50337[(1)] = (1));

return statearr_50337;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1 = (function (state_50323){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50323);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50338){var ex__49509__auto__ = e50338;
var statearr_50339_52378 = state_50323;
(statearr_50339_52378[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_50323[(4)]))){
var statearr_50340_52379 = state_50323;
(statearr_50340_52379[(1)] = cljs.core.first((state_50323[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52381 = state_50323;
state_50323 = G__52381;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = function(state_50323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1.call(this,state_50323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_50342 = f__49892__auto__();
(statearr_50342[(6)] = c__49891__auto___52366);

return statearr_50342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


var c__49891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_50380){
var state_val_50381 = (state_50380[(1)]);
if((state_val_50381 === (7))){
var inst_50376 = (state_50380[(2)]);
var state_50380__$1 = state_50380;
var statearr_50383_52382 = state_50380__$1;
(statearr_50383_52382[(2)] = inst_50376);

(statearr_50383_52382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (20))){
var state_50380__$1 = state_50380;
var statearr_50384_52383 = state_50380__$1;
(statearr_50384_52383[(2)] = null);

(statearr_50384_52383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (1))){
var state_50380__$1 = state_50380;
var statearr_50385_52384 = state_50380__$1;
(statearr_50385_52384[(2)] = null);

(statearr_50385_52384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (4))){
var inst_50345 = (state_50380[(7)]);
var inst_50345__$1 = (state_50380[(2)]);
var inst_50346 = (inst_50345__$1 == null);
var state_50380__$1 = (function (){var statearr_50386 = state_50380;
(statearr_50386[(7)] = inst_50345__$1);

return statearr_50386;
})();
if(cljs.core.truth_(inst_50346)){
var statearr_50387_52385 = state_50380__$1;
(statearr_50387_52385[(1)] = (5));

} else {
var statearr_50388_52386 = state_50380__$1;
(statearr_50388_52386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (15))){
var inst_50358 = (state_50380[(8)]);
var state_50380__$1 = state_50380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50380__$1,(18),to,inst_50358);
} else {
if((state_val_50381 === (21))){
var inst_50371 = (state_50380[(2)]);
var state_50380__$1 = state_50380;
var statearr_50389_52387 = state_50380__$1;
(statearr_50389_52387[(2)] = inst_50371);

(statearr_50389_52387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (13))){
var inst_50373 = (state_50380[(2)]);
var state_50380__$1 = (function (){var statearr_50390 = state_50380;
(statearr_50390[(9)] = inst_50373);

return statearr_50390;
})();
var statearr_50392_52388 = state_50380__$1;
(statearr_50392_52388[(2)] = null);

(statearr_50392_52388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (6))){
var inst_50345 = (state_50380[(7)]);
var state_50380__$1 = state_50380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50380__$1,(11),inst_50345);
} else {
if((state_val_50381 === (17))){
var inst_50366 = (state_50380[(2)]);
var state_50380__$1 = state_50380;
if(cljs.core.truth_(inst_50366)){
var statearr_50393_52389 = state_50380__$1;
(statearr_50393_52389[(1)] = (19));

} else {
var statearr_50394_52390 = state_50380__$1;
(statearr_50394_52390[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (3))){
var inst_50378 = (state_50380[(2)]);
var state_50380__$1 = state_50380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50380__$1,inst_50378);
} else {
if((state_val_50381 === (12))){
var inst_50355 = (state_50380[(10)]);
var state_50380__$1 = state_50380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50380__$1,(14),inst_50355);
} else {
if((state_val_50381 === (2))){
var state_50380__$1 = state_50380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50380__$1,(4),results);
} else {
if((state_val_50381 === (19))){
var state_50380__$1 = state_50380;
var statearr_50396_52391 = state_50380__$1;
(statearr_50396_52391[(2)] = null);

(statearr_50396_52391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (11))){
var inst_50355 = (state_50380[(2)]);
var state_50380__$1 = (function (){var statearr_50397 = state_50380;
(statearr_50397[(10)] = inst_50355);

return statearr_50397;
})();
var statearr_50398_52392 = state_50380__$1;
(statearr_50398_52392[(2)] = null);

(statearr_50398_52392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (9))){
var state_50380__$1 = state_50380;
var statearr_50399_52393 = state_50380__$1;
(statearr_50399_52393[(2)] = null);

(statearr_50399_52393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (5))){
var state_50380__$1 = state_50380;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50400_52398 = state_50380__$1;
(statearr_50400_52398[(1)] = (8));

} else {
var statearr_50401_52400 = state_50380__$1;
(statearr_50401_52400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (14))){
var inst_50360 = (state_50380[(11)]);
var inst_50358 = (state_50380[(8)]);
var inst_50358__$1 = (state_50380[(2)]);
var inst_50359 = (inst_50358__$1 == null);
var inst_50360__$1 = cljs.core.not(inst_50359);
var state_50380__$1 = (function (){var statearr_50403 = state_50380;
(statearr_50403[(11)] = inst_50360__$1);

(statearr_50403[(8)] = inst_50358__$1);

return statearr_50403;
})();
if(inst_50360__$1){
var statearr_50404_52401 = state_50380__$1;
(statearr_50404_52401[(1)] = (15));

} else {
var statearr_50405_52402 = state_50380__$1;
(statearr_50405_52402[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (16))){
var inst_50360 = (state_50380[(11)]);
var state_50380__$1 = state_50380;
var statearr_50406_52403 = state_50380__$1;
(statearr_50406_52403[(2)] = inst_50360);

(statearr_50406_52403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (10))){
var inst_50352 = (state_50380[(2)]);
var state_50380__$1 = state_50380;
var statearr_50407_52404 = state_50380__$1;
(statearr_50407_52404[(2)] = inst_50352);

(statearr_50407_52404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (18))){
var inst_50363 = (state_50380[(2)]);
var state_50380__$1 = state_50380;
var statearr_50408_52405 = state_50380__$1;
(statearr_50408_52405[(2)] = inst_50363);

(statearr_50408_52405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (8))){
var inst_50349 = cljs.core.async.close_BANG_(to);
var state_50380__$1 = state_50380;
var statearr_50409_52406 = state_50380__$1;
(statearr_50409_52406[(2)] = inst_50349);

(statearr_50409_52406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0 = (function (){
var statearr_50410 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__);

(statearr_50410[(1)] = (1));

return statearr_50410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1 = (function (state_50380){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50380);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50411){var ex__49509__auto__ = e50411;
var statearr_50413_52407 = state_50380;
(statearr_50413_52407[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_50380[(4)]))){
var statearr_50414_52408 = state_50380;
(statearr_50414_52408[(1)] = cljs.core.first((state_50380[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52409 = state_50380;
state_50380 = G__52409;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__ = function(state_50380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1.call(this,state_50380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49506__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_50415 = f__49892__auto__();
(statearr_50415[(6)] = c__49891__auto__);

return statearr_50415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));

return c__49891__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50417 = arguments.length;
switch (G__50417) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__50420 = arguments.length;
switch (G__50420) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__50423 = arguments.length;
switch (G__50423) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__49891__auto___52416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_50451){
var state_val_50452 = (state_50451[(1)]);
if((state_val_50452 === (7))){
var inst_50447 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
var statearr_50453_52419 = state_50451__$1;
(statearr_50453_52419[(2)] = inst_50447);

(statearr_50453_52419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (1))){
var state_50451__$1 = state_50451;
var statearr_50454_52420 = state_50451__$1;
(statearr_50454_52420[(2)] = null);

(statearr_50454_52420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (4))){
var inst_50428 = (state_50451[(7)]);
var inst_50428__$1 = (state_50451[(2)]);
var inst_50429 = (inst_50428__$1 == null);
var state_50451__$1 = (function (){var statearr_50457 = state_50451;
(statearr_50457[(7)] = inst_50428__$1);

return statearr_50457;
})();
if(cljs.core.truth_(inst_50429)){
var statearr_50458_52421 = state_50451__$1;
(statearr_50458_52421[(1)] = (5));

} else {
var statearr_50459_52422 = state_50451__$1;
(statearr_50459_52422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (13))){
var state_50451__$1 = state_50451;
var statearr_50460_52423 = state_50451__$1;
(statearr_50460_52423[(2)] = null);

(statearr_50460_52423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (6))){
var inst_50428 = (state_50451[(7)]);
var inst_50434 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50428) : p.call(null,inst_50428));
var state_50451__$1 = state_50451;
if(cljs.core.truth_(inst_50434)){
var statearr_50461_52424 = state_50451__$1;
(statearr_50461_52424[(1)] = (9));

} else {
var statearr_50462_52425 = state_50451__$1;
(statearr_50462_52425[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (3))){
var inst_50449 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50451__$1,inst_50449);
} else {
if((state_val_50452 === (12))){
var state_50451__$1 = state_50451;
var statearr_50463_52426 = state_50451__$1;
(statearr_50463_52426[(2)] = null);

(statearr_50463_52426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (2))){
var state_50451__$1 = state_50451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50451__$1,(4),ch);
} else {
if((state_val_50452 === (11))){
var inst_50428 = (state_50451[(7)]);
var inst_50438 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50451__$1,(8),inst_50438,inst_50428);
} else {
if((state_val_50452 === (9))){
var state_50451__$1 = state_50451;
var statearr_50464_52427 = state_50451__$1;
(statearr_50464_52427[(2)] = tc);

(statearr_50464_52427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (5))){
var inst_50431 = cljs.core.async.close_BANG_(tc);
var inst_50432 = cljs.core.async.close_BANG_(fc);
var state_50451__$1 = (function (){var statearr_50465 = state_50451;
(statearr_50465[(8)] = inst_50431);

return statearr_50465;
})();
var statearr_50466_52428 = state_50451__$1;
(statearr_50466_52428[(2)] = inst_50432);

(statearr_50466_52428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (14))){
var inst_50445 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
var statearr_50467_52429 = state_50451__$1;
(statearr_50467_52429[(2)] = inst_50445);

(statearr_50467_52429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (10))){
var state_50451__$1 = state_50451;
var statearr_50468_52434 = state_50451__$1;
(statearr_50468_52434[(2)] = fc);

(statearr_50468_52434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50452 === (8))){
var inst_50440 = (state_50451[(2)]);
var state_50451__$1 = state_50451;
if(cljs.core.truth_(inst_50440)){
var statearr_50469_52438 = state_50451__$1;
(statearr_50469_52438[(1)] = (12));

} else {
var statearr_50470_52439 = state_50451__$1;
(statearr_50470_52439[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_50471 = [null,null,null,null,null,null,null,null,null];
(statearr_50471[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_50471[(1)] = (1));

return statearr_50471;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_50451){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50451);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50472){var ex__49509__auto__ = e50472;
var statearr_50473_52440 = state_50451;
(statearr_50473_52440[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_50451[(4)]))){
var statearr_50475_52444 = state_50451;
(statearr_50475_52444[(1)] = cljs.core.first((state_50451[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52445 = state_50451;
state_50451 = G__52445;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_50451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_50451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_50477 = f__49892__auto__();
(statearr_50477[(6)] = c__49891__auto___52416);

return statearr_50477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__49891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_50499){
var state_val_50500 = (state_50499[(1)]);
if((state_val_50500 === (7))){
var inst_50495 = (state_50499[(2)]);
var state_50499__$1 = state_50499;
var statearr_50501_52449 = state_50499__$1;
(statearr_50501_52449[(2)] = inst_50495);

(statearr_50501_52449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (1))){
var inst_50478 = init;
var inst_50479 = inst_50478;
var state_50499__$1 = (function (){var statearr_50502 = state_50499;
(statearr_50502[(7)] = inst_50479);

return statearr_50502;
})();
var statearr_50503_52453 = state_50499__$1;
(statearr_50503_52453[(2)] = null);

(statearr_50503_52453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (4))){
var inst_50482 = (state_50499[(8)]);
var inst_50482__$1 = (state_50499[(2)]);
var inst_50483 = (inst_50482__$1 == null);
var state_50499__$1 = (function (){var statearr_50507 = state_50499;
(statearr_50507[(8)] = inst_50482__$1);

return statearr_50507;
})();
if(cljs.core.truth_(inst_50483)){
var statearr_50508_52454 = state_50499__$1;
(statearr_50508_52454[(1)] = (5));

} else {
var statearr_50509_52455 = state_50499__$1;
(statearr_50509_52455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (6))){
var inst_50482 = (state_50499[(8)]);
var inst_50479 = (state_50499[(7)]);
var inst_50486 = (state_50499[(9)]);
var inst_50486__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50479,inst_50482) : f.call(null,inst_50479,inst_50482));
var inst_50487 = cljs.core.reduced_QMARK_(inst_50486__$1);
var state_50499__$1 = (function (){var statearr_50513 = state_50499;
(statearr_50513[(9)] = inst_50486__$1);

return statearr_50513;
})();
if(inst_50487){
var statearr_50514_52460 = state_50499__$1;
(statearr_50514_52460[(1)] = (8));

} else {
var statearr_50518_52461 = state_50499__$1;
(statearr_50518_52461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (3))){
var inst_50497 = (state_50499[(2)]);
var state_50499__$1 = state_50499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50499__$1,inst_50497);
} else {
if((state_val_50500 === (2))){
var state_50499__$1 = state_50499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50499__$1,(4),ch);
} else {
if((state_val_50500 === (9))){
var inst_50486 = (state_50499[(9)]);
var inst_50479 = inst_50486;
var state_50499__$1 = (function (){var statearr_50519 = state_50499;
(statearr_50519[(7)] = inst_50479);

return statearr_50519;
})();
var statearr_50520_52465 = state_50499__$1;
(statearr_50520_52465[(2)] = null);

(statearr_50520_52465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (5))){
var inst_50479 = (state_50499[(7)]);
var state_50499__$1 = state_50499;
var statearr_50522_52466 = state_50499__$1;
(statearr_50522_52466[(2)] = inst_50479);

(statearr_50522_52466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (10))){
var inst_50493 = (state_50499[(2)]);
var state_50499__$1 = state_50499;
var statearr_50523_52467 = state_50499__$1;
(statearr_50523_52467[(2)] = inst_50493);

(statearr_50523_52467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50500 === (8))){
var inst_50486 = (state_50499[(9)]);
var inst_50489 = cljs.core.deref(inst_50486);
var state_50499__$1 = state_50499;
var statearr_50527_52468 = state_50499__$1;
(statearr_50527_52468[(2)] = inst_50489);

(statearr_50527_52468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__49506__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49506__auto____0 = (function (){
var statearr_50529 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50529[(0)] = cljs$core$async$reduce_$_state_machine__49506__auto__);

(statearr_50529[(1)] = (1));

return statearr_50529;
});
var cljs$core$async$reduce_$_state_machine__49506__auto____1 = (function (state_50499){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50499);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50530){var ex__49509__auto__ = e50530;
var statearr_50532_52472 = state_50499;
(statearr_50532_52472[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_50499[(4)]))){
var statearr_50535_52473 = state_50499;
(statearr_50535_52473[(1)] = cljs.core.first((state_50499[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52474 = state_50499;
state_50499 = G__52474;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49506__auto__ = function(state_50499){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49506__auto____1.call(this,state_50499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49506__auto____0;
cljs$core$async$reduce_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49506__auto____1;
return cljs$core$async$reduce_$_state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_50537 = f__49892__auto__();
(statearr_50537[(6)] = c__49891__auto__);

return statearr_50537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));

return c__49891__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_50547){
var state_val_50548 = (state_50547[(1)]);
if((state_val_50548 === (1))){
var inst_50542 = cljs.core.async.reduce(f__$1,init,ch);
var state_50547__$1 = state_50547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50547__$1,(2),inst_50542);
} else {
if((state_val_50548 === (2))){
var inst_50544 = (state_50547[(2)]);
var inst_50545 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50544) : f__$1.call(null,inst_50544));
var state_50547__$1 = state_50547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50547__$1,inst_50545);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49506__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49506__auto____0 = (function (){
var statearr_50557 = [null,null,null,null,null,null,null];
(statearr_50557[(0)] = cljs$core$async$transduce_$_state_machine__49506__auto__);

(statearr_50557[(1)] = (1));

return statearr_50557;
});
var cljs$core$async$transduce_$_state_machine__49506__auto____1 = (function (state_50547){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50547);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50561){var ex__49509__auto__ = e50561;
var statearr_50562_52480 = state_50547;
(statearr_50562_52480[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_50547[(4)]))){
var statearr_50563_52481 = state_50547;
(statearr_50563_52481[(1)] = cljs.core.first((state_50547[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52483 = state_50547;
state_50547 = G__52483;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49506__auto__ = function(state_50547){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49506__auto____1.call(this,state_50547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49506__auto____0;
cljs$core$async$transduce_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49506__auto____1;
return cljs$core$async$transduce_$_state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_50567 = f__49892__auto__();
(statearr_50567[(6)] = c__49891__auto__);

return statearr_50567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));

return c__49891__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__50572 = arguments.length;
switch (G__50572) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_50607){
var state_val_50608 = (state_50607[(1)]);
if((state_val_50608 === (7))){
var inst_50586 = (state_50607[(2)]);
var state_50607__$1 = state_50607;
var statearr_50611_52488 = state_50607__$1;
(statearr_50611_52488[(2)] = inst_50586);

(statearr_50611_52488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (1))){
var inst_50579 = cljs.core.seq(coll);
var inst_50580 = inst_50579;
var state_50607__$1 = (function (){var statearr_50613 = state_50607;
(statearr_50613[(7)] = inst_50580);

return statearr_50613;
})();
var statearr_50615_52489 = state_50607__$1;
(statearr_50615_52489[(2)] = null);

(statearr_50615_52489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (4))){
var inst_50580 = (state_50607[(7)]);
var inst_50583 = cljs.core.first(inst_50580);
var state_50607__$1 = state_50607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50607__$1,(7),ch,inst_50583);
} else {
if((state_val_50608 === (13))){
var inst_50599 = (state_50607[(2)]);
var state_50607__$1 = state_50607;
var statearr_50617_52490 = state_50607__$1;
(statearr_50617_52490[(2)] = inst_50599);

(statearr_50617_52490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (6))){
var inst_50589 = (state_50607[(2)]);
var state_50607__$1 = state_50607;
if(cljs.core.truth_(inst_50589)){
var statearr_50619_52491 = state_50607__$1;
(statearr_50619_52491[(1)] = (8));

} else {
var statearr_50620_52492 = state_50607__$1;
(statearr_50620_52492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (3))){
var inst_50603 = (state_50607[(2)]);
var state_50607__$1 = state_50607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50607__$1,inst_50603);
} else {
if((state_val_50608 === (12))){
var state_50607__$1 = state_50607;
var statearr_50625_52494 = state_50607__$1;
(statearr_50625_52494[(2)] = null);

(statearr_50625_52494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (2))){
var inst_50580 = (state_50607[(7)]);
var state_50607__$1 = state_50607;
if(cljs.core.truth_(inst_50580)){
var statearr_50627_52495 = state_50607__$1;
(statearr_50627_52495[(1)] = (4));

} else {
var statearr_50628_52496 = state_50607__$1;
(statearr_50628_52496[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (11))){
var inst_50595 = cljs.core.async.close_BANG_(ch);
var state_50607__$1 = state_50607;
var statearr_50632_52497 = state_50607__$1;
(statearr_50632_52497[(2)] = inst_50595);

(statearr_50632_52497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (9))){
var state_50607__$1 = state_50607;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50635_52498 = state_50607__$1;
(statearr_50635_52498[(1)] = (11));

} else {
var statearr_50636_52499 = state_50607__$1;
(statearr_50636_52499[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (5))){
var inst_50580 = (state_50607[(7)]);
var state_50607__$1 = state_50607;
var statearr_50640_52500 = state_50607__$1;
(statearr_50640_52500[(2)] = inst_50580);

(statearr_50640_52500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (10))){
var inst_50601 = (state_50607[(2)]);
var state_50607__$1 = state_50607;
var statearr_50641_52501 = state_50607__$1;
(statearr_50641_52501[(2)] = inst_50601);

(statearr_50641_52501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (8))){
var inst_50580 = (state_50607[(7)]);
var inst_50591 = cljs.core.next(inst_50580);
var inst_50580__$1 = inst_50591;
var state_50607__$1 = (function (){var statearr_50644 = state_50607;
(statearr_50644[(7)] = inst_50580__$1);

return statearr_50644;
})();
var statearr_50647_52502 = state_50607__$1;
(statearr_50647_52502[(2)] = null);

(statearr_50647_52502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_50649 = [null,null,null,null,null,null,null,null];
(statearr_50649[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_50649[(1)] = (1));

return statearr_50649;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_50607){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50607);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e50652){var ex__49509__auto__ = e50652;
var statearr_50654_52503 = state_50607;
(statearr_50654_52503[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_50607[(4)]))){
var statearr_50655_52504 = state_50607;
(statearr_50655_52504[(1)] = cljs.core.first((state_50607[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52505 = state_50607;
state_50607 = G__52505;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_50607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_50607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_50659 = f__49892__auto__();
(statearr_50659[(6)] = c__49891__auto__);

return statearr_50659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));

return c__49891__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__50671 = arguments.length;
switch (G__50671) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_52507 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_52507(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52508 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_52508(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52513 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_52513(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52514 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_52514(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50718 = (function (ch,cs,meta50719){
this.ch = ch;
this.cs = cs;
this.meta50719 = meta50719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50720,meta50719__$1){
var self__ = this;
var _50720__$1 = this;
return (new cljs.core.async.t_cljs$core$async50718(self__.ch,self__.cs,meta50719__$1));
}));

(cljs.core.async.t_cljs$core$async50718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50720){
var self__ = this;
var _50720__$1 = this;
return self__.meta50719;
}));

(cljs.core.async.t_cljs$core$async50718.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50718.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50718.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50718.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50718.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50719","meta50719",1616504835,null)], null);
}));

(cljs.core.async.t_cljs$core$async50718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50718");

(cljs.core.async.t_cljs$core$async50718.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async50718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50718.
 */
cljs.core.async.__GT_t_cljs$core$async50718 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50718(ch__$1,cs__$1,meta50719){
return (new cljs.core.async.t_cljs$core$async50718(ch__$1,cs__$1,meta50719));
});

}

return (new cljs.core.async.t_cljs$core$async50718(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__49891__auto___52521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_50902){
var state_val_50903 = (state_50902[(1)]);
if((state_val_50903 === (7))){
var inst_50895 = (state_50902[(2)]);
var state_50902__$1 = state_50902;
var statearr_50907_52525 = state_50902__$1;
(statearr_50907_52525[(2)] = inst_50895);

(statearr_50907_52525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (20))){
var inst_50782 = (state_50902[(7)]);
var inst_50796 = cljs.core.first(inst_50782);
var inst_50797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50796,(0),null);
var inst_50798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50796,(1),null);
var state_50902__$1 = (function (){var statearr_50908 = state_50902;
(statearr_50908[(8)] = inst_50797);

return statearr_50908;
})();
if(cljs.core.truth_(inst_50798)){
var statearr_50909_52527 = state_50902__$1;
(statearr_50909_52527[(1)] = (22));

} else {
var statearr_50910_52528 = state_50902__$1;
(statearr_50910_52528[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (27))){
var inst_50832 = (state_50902[(9)]);
var inst_50830 = (state_50902[(10)]);
var inst_50745 = (state_50902[(11)]);
var inst_50840 = (state_50902[(12)]);
var inst_50840__$1 = cljs.core._nth(inst_50830,inst_50832);
var inst_50841 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50840__$1,inst_50745,done);
var state_50902__$1 = (function (){var statearr_50913 = state_50902;
(statearr_50913[(12)] = inst_50840__$1);

return statearr_50913;
})();
if(cljs.core.truth_(inst_50841)){
var statearr_50914_52529 = state_50902__$1;
(statearr_50914_52529[(1)] = (30));

} else {
var statearr_50915_52530 = state_50902__$1;
(statearr_50915_52530[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (1))){
var state_50902__$1 = state_50902;
var statearr_50916_52532 = state_50902__$1;
(statearr_50916_52532[(2)] = null);

(statearr_50916_52532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (24))){
var inst_50782 = (state_50902[(7)]);
var inst_50805 = (state_50902[(2)]);
var inst_50807 = cljs.core.next(inst_50782);
var inst_50756 = inst_50807;
var inst_50757 = null;
var inst_50758 = (0);
var inst_50759 = (0);
var state_50902__$1 = (function (){var statearr_50921 = state_50902;
(statearr_50921[(13)] = inst_50757);

(statearr_50921[(14)] = inst_50758);

(statearr_50921[(15)] = inst_50759);

(statearr_50921[(16)] = inst_50756);

(statearr_50921[(17)] = inst_50805);

return statearr_50921;
})();
var statearr_50926_52536 = state_50902__$1;
(statearr_50926_52536[(2)] = null);

(statearr_50926_52536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (39))){
var state_50902__$1 = state_50902;
var statearr_50931_52537 = state_50902__$1;
(statearr_50931_52537[(2)] = null);

(statearr_50931_52537[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (4))){
var inst_50745 = (state_50902[(11)]);
var inst_50745__$1 = (state_50902[(2)]);
var inst_50746 = (inst_50745__$1 == null);
var state_50902__$1 = (function (){var statearr_50932 = state_50902;
(statearr_50932[(11)] = inst_50745__$1);

return statearr_50932;
})();
if(cljs.core.truth_(inst_50746)){
var statearr_50933_52538 = state_50902__$1;
(statearr_50933_52538[(1)] = (5));

} else {
var statearr_50938_52539 = state_50902__$1;
(statearr_50938_52539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (15))){
var inst_50757 = (state_50902[(13)]);
var inst_50758 = (state_50902[(14)]);
var inst_50759 = (state_50902[(15)]);
var inst_50756 = (state_50902[(16)]);
var inst_50776 = (state_50902[(2)]);
var inst_50777 = (inst_50759 + (1));
var tmp50928 = inst_50757;
var tmp50929 = inst_50758;
var tmp50930 = inst_50756;
var inst_50756__$1 = tmp50930;
var inst_50757__$1 = tmp50928;
var inst_50758__$1 = tmp50929;
var inst_50759__$1 = inst_50777;
var state_50902__$1 = (function (){var statearr_50943 = state_50902;
(statearr_50943[(13)] = inst_50757__$1);

(statearr_50943[(14)] = inst_50758__$1);

(statearr_50943[(18)] = inst_50776);

(statearr_50943[(15)] = inst_50759__$1);

(statearr_50943[(16)] = inst_50756__$1);

return statearr_50943;
})();
var statearr_50944_52544 = state_50902__$1;
(statearr_50944_52544[(2)] = null);

(statearr_50944_52544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (21))){
var inst_50810 = (state_50902[(2)]);
var state_50902__$1 = state_50902;
var statearr_50951_52545 = state_50902__$1;
(statearr_50951_52545[(2)] = inst_50810);

(statearr_50951_52545[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (31))){
var inst_50840 = (state_50902[(12)]);
var inst_50845 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50840);
var state_50902__$1 = state_50902;
var statearr_50953_52546 = state_50902__$1;
(statearr_50953_52546[(2)] = inst_50845);

(statearr_50953_52546[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (32))){
var inst_50832 = (state_50902[(9)]);
var inst_50830 = (state_50902[(10)]);
var inst_50829 = (state_50902[(19)]);
var inst_50831 = (state_50902[(20)]);
var inst_50847 = (state_50902[(2)]);
var inst_50848 = (inst_50832 + (1));
var tmp50945 = inst_50830;
var tmp50946 = inst_50829;
var tmp50947 = inst_50831;
var inst_50829__$1 = tmp50946;
var inst_50830__$1 = tmp50945;
var inst_50831__$1 = tmp50947;
var inst_50832__$1 = inst_50848;
var state_50902__$1 = (function (){var statearr_50958 = state_50902;
(statearr_50958[(9)] = inst_50832__$1);

(statearr_50958[(10)] = inst_50830__$1);

(statearr_50958[(21)] = inst_50847);

(statearr_50958[(19)] = inst_50829__$1);

(statearr_50958[(20)] = inst_50831__$1);

return statearr_50958;
})();
var statearr_50959_52547 = state_50902__$1;
(statearr_50959_52547[(2)] = null);

(statearr_50959_52547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (40))){
var inst_50866 = (state_50902[(22)]);
var inst_50871 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50866);
var state_50902__$1 = state_50902;
var statearr_50960_52548 = state_50902__$1;
(statearr_50960_52548[(2)] = inst_50871);

(statearr_50960_52548[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (33))){
var inst_50853 = (state_50902[(23)]);
var inst_50856 = cljs.core.chunked_seq_QMARK_(inst_50853);
var state_50902__$1 = state_50902;
if(inst_50856){
var statearr_50965_52550 = state_50902__$1;
(statearr_50965_52550[(1)] = (36));

} else {
var statearr_50966_52551 = state_50902__$1;
(statearr_50966_52551[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (13))){
var inst_50770 = (state_50902[(24)]);
var inst_50773 = cljs.core.async.close_BANG_(inst_50770);
var state_50902__$1 = state_50902;
var statearr_50967_52555 = state_50902__$1;
(statearr_50967_52555[(2)] = inst_50773);

(statearr_50967_52555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (22))){
var inst_50797 = (state_50902[(8)]);
var inst_50802 = cljs.core.async.close_BANG_(inst_50797);
var state_50902__$1 = state_50902;
var statearr_50969_52556 = state_50902__$1;
(statearr_50969_52556[(2)] = inst_50802);

(statearr_50969_52556[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (36))){
var inst_50853 = (state_50902[(23)]);
var inst_50859 = cljs.core.chunk_first(inst_50853);
var inst_50860 = cljs.core.chunk_rest(inst_50853);
var inst_50861 = cljs.core.count(inst_50859);
var inst_50829 = inst_50860;
var inst_50830 = inst_50859;
var inst_50831 = inst_50861;
var inst_50832 = (0);
var state_50902__$1 = (function (){var statearr_50970 = state_50902;
(statearr_50970[(9)] = inst_50832);

(statearr_50970[(10)] = inst_50830);

(statearr_50970[(19)] = inst_50829);

(statearr_50970[(20)] = inst_50831);

return statearr_50970;
})();
var statearr_50971_52557 = state_50902__$1;
(statearr_50971_52557[(2)] = null);

(statearr_50971_52557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (41))){
var inst_50853 = (state_50902[(23)]);
var inst_50873 = (state_50902[(2)]);
var inst_50874 = cljs.core.next(inst_50853);
var inst_50829 = inst_50874;
var inst_50830 = null;
var inst_50831 = (0);
var inst_50832 = (0);
var state_50902__$1 = (function (){var statearr_50972 = state_50902;
(statearr_50972[(9)] = inst_50832);

(statearr_50972[(10)] = inst_50830);

(statearr_50972[(19)] = inst_50829);

(statearr_50972[(25)] = inst_50873);

(statearr_50972[(20)] = inst_50831);

return statearr_50972;
})();
var statearr_50977_52570 = state_50902__$1;
(statearr_50977_52570[(2)] = null);

(statearr_50977_52570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (43))){
var state_50902__$1 = state_50902;
var statearr_50981_52571 = state_50902__$1;
(statearr_50981_52571[(2)] = null);

(statearr_50981_52571[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (29))){
var inst_50882 = (state_50902[(2)]);
var state_50902__$1 = state_50902;
var statearr_50983_52572 = state_50902__$1;
(statearr_50983_52572[(2)] = inst_50882);

(statearr_50983_52572[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (44))){
var inst_50892 = (state_50902[(2)]);
var state_50902__$1 = (function (){var statearr_50984 = state_50902;
(statearr_50984[(26)] = inst_50892);

return statearr_50984;
})();
var statearr_50988_52577 = state_50902__$1;
(statearr_50988_52577[(2)] = null);

(statearr_50988_52577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (6))){
var inst_50821 = (state_50902[(27)]);
var inst_50820 = cljs.core.deref(cs);
var inst_50821__$1 = cljs.core.keys(inst_50820);
var inst_50822 = cljs.core.count(inst_50821__$1);
var inst_50823 = cljs.core.reset_BANG_(dctr,inst_50822);
var inst_50828 = cljs.core.seq(inst_50821__$1);
var inst_50829 = inst_50828;
var inst_50830 = null;
var inst_50831 = (0);
var inst_50832 = (0);
var state_50902__$1 = (function (){var statearr_50990 = state_50902;
(statearr_50990[(27)] = inst_50821__$1);

(statearr_50990[(9)] = inst_50832);

(statearr_50990[(10)] = inst_50830);

(statearr_50990[(19)] = inst_50829);

(statearr_50990[(28)] = inst_50823);

(statearr_50990[(20)] = inst_50831);

return statearr_50990;
})();
var statearr_50994_52587 = state_50902__$1;
(statearr_50994_52587[(2)] = null);

(statearr_50994_52587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (28))){
var inst_50829 = (state_50902[(19)]);
var inst_50853 = (state_50902[(23)]);
var inst_50853__$1 = cljs.core.seq(inst_50829);
var state_50902__$1 = (function (){var statearr_50996 = state_50902;
(statearr_50996[(23)] = inst_50853__$1);

return statearr_50996;
})();
if(inst_50853__$1){
var statearr_50997_52594 = state_50902__$1;
(statearr_50997_52594[(1)] = (33));

} else {
var statearr_50998_52595 = state_50902__$1;
(statearr_50998_52595[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (25))){
var inst_50832 = (state_50902[(9)]);
var inst_50831 = (state_50902[(20)]);
var inst_50836 = (inst_50832 < inst_50831);
var inst_50838 = inst_50836;
var state_50902__$1 = state_50902;
if(cljs.core.truth_(inst_50838)){
var statearr_51002_52596 = state_50902__$1;
(statearr_51002_52596[(1)] = (27));

} else {
var statearr_51003_52597 = state_50902__$1;
(statearr_51003_52597[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (34))){
var state_50902__$1 = state_50902;
var statearr_51005_52598 = state_50902__$1;
(statearr_51005_52598[(2)] = null);

(statearr_51005_52598[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (17))){
var state_50902__$1 = state_50902;
var statearr_51006_52600 = state_50902__$1;
(statearr_51006_52600[(2)] = null);

(statearr_51006_52600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (3))){
var inst_50897 = (state_50902[(2)]);
var state_50902__$1 = state_50902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50902__$1,inst_50897);
} else {
if((state_val_50903 === (12))){
var inst_50815 = (state_50902[(2)]);
var state_50902__$1 = state_50902;
var statearr_51008_52605 = state_50902__$1;
(statearr_51008_52605[(2)] = inst_50815);

(statearr_51008_52605[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (2))){
var state_50902__$1 = state_50902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50902__$1,(4),ch);
} else {
if((state_val_50903 === (23))){
var state_50902__$1 = state_50902;
var statearr_51009_52606 = state_50902__$1;
(statearr_51009_52606[(2)] = null);

(statearr_51009_52606[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (35))){
var inst_50880 = (state_50902[(2)]);
var state_50902__$1 = state_50902;
var statearr_51010_52607 = state_50902__$1;
(statearr_51010_52607[(2)] = inst_50880);

(statearr_51010_52607[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (19))){
var inst_50782 = (state_50902[(7)]);
var inst_50787 = cljs.core.chunk_first(inst_50782);
var inst_50788 = cljs.core.chunk_rest(inst_50782);
var inst_50790 = cljs.core.count(inst_50787);
var inst_50756 = inst_50788;
var inst_50757 = inst_50787;
var inst_50758 = inst_50790;
var inst_50759 = (0);
var state_50902__$1 = (function (){var statearr_51015 = state_50902;
(statearr_51015[(13)] = inst_50757);

(statearr_51015[(14)] = inst_50758);

(statearr_51015[(15)] = inst_50759);

(statearr_51015[(16)] = inst_50756);

return statearr_51015;
})();
var statearr_51019_52609 = state_50902__$1;
(statearr_51019_52609[(2)] = null);

(statearr_51019_52609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (11))){
var inst_50782 = (state_50902[(7)]);
var inst_50756 = (state_50902[(16)]);
var inst_50782__$1 = cljs.core.seq(inst_50756);
var state_50902__$1 = (function (){var statearr_51021 = state_50902;
(statearr_51021[(7)] = inst_50782__$1);

return statearr_51021;
})();
if(inst_50782__$1){
var statearr_51022_52610 = state_50902__$1;
(statearr_51022_52610[(1)] = (16));

} else {
var statearr_51023_52611 = state_50902__$1;
(statearr_51023_52611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (9))){
var inst_50817 = (state_50902[(2)]);
var state_50902__$1 = state_50902;
var statearr_51024_52613 = state_50902__$1;
(statearr_51024_52613[(2)] = inst_50817);

(statearr_51024_52613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (5))){
var inst_50753 = cljs.core.deref(cs);
var inst_50755 = cljs.core.seq(inst_50753);
var inst_50756 = inst_50755;
var inst_50757 = null;
var inst_50758 = (0);
var inst_50759 = (0);
var state_50902__$1 = (function (){var statearr_51029 = state_50902;
(statearr_51029[(13)] = inst_50757);

(statearr_51029[(14)] = inst_50758);

(statearr_51029[(15)] = inst_50759);

(statearr_51029[(16)] = inst_50756);

return statearr_51029;
})();
var statearr_51030_52618 = state_50902__$1;
(statearr_51030_52618[(2)] = null);

(statearr_51030_52618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (14))){
var state_50902__$1 = state_50902;
var statearr_51034_52619 = state_50902__$1;
(statearr_51034_52619[(2)] = null);

(statearr_51034_52619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (45))){
var inst_50889 = (state_50902[(2)]);
var state_50902__$1 = state_50902;
var statearr_51036_52627 = state_50902__$1;
(statearr_51036_52627[(2)] = inst_50889);

(statearr_51036_52627[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (26))){
var inst_50821 = (state_50902[(27)]);
var inst_50884 = (state_50902[(2)]);
var inst_50885 = cljs.core.seq(inst_50821);
var state_50902__$1 = (function (){var statearr_51040 = state_50902;
(statearr_51040[(29)] = inst_50884);

return statearr_51040;
})();
if(inst_50885){
var statearr_51042_52628 = state_50902__$1;
(statearr_51042_52628[(1)] = (42));

} else {
var statearr_51043_52629 = state_50902__$1;
(statearr_51043_52629[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (16))){
var inst_50782 = (state_50902[(7)]);
var inst_50785 = cljs.core.chunked_seq_QMARK_(inst_50782);
var state_50902__$1 = state_50902;
if(inst_50785){
var statearr_51044_52630 = state_50902__$1;
(statearr_51044_52630[(1)] = (19));

} else {
var statearr_51045_52631 = state_50902__$1;
(statearr_51045_52631[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (38))){
var inst_50877 = (state_50902[(2)]);
var state_50902__$1 = state_50902;
var statearr_51047_52633 = state_50902__$1;
(statearr_51047_52633[(2)] = inst_50877);

(statearr_51047_52633[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (30))){
var state_50902__$1 = state_50902;
var statearr_51048_52638 = state_50902__$1;
(statearr_51048_52638[(2)] = null);

(statearr_51048_52638[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (10))){
var inst_50757 = (state_50902[(13)]);
var inst_50759 = (state_50902[(15)]);
var inst_50768 = cljs.core._nth(inst_50757,inst_50759);
var inst_50770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50768,(0),null);
var inst_50771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50768,(1),null);
var state_50902__$1 = (function (){var statearr_51049 = state_50902;
(statearr_51049[(24)] = inst_50770);

return statearr_51049;
})();
if(cljs.core.truth_(inst_50771)){
var statearr_51050_52639 = state_50902__$1;
(statearr_51050_52639[(1)] = (13));

} else {
var statearr_51051_52640 = state_50902__$1;
(statearr_51051_52640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (18))){
var inst_50813 = (state_50902[(2)]);
var state_50902__$1 = state_50902;
var statearr_51052_52641 = state_50902__$1;
(statearr_51052_52641[(2)] = inst_50813);

(statearr_51052_52641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (42))){
var state_50902__$1 = state_50902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50902__$1,(45),dchan);
} else {
if((state_val_50903 === (37))){
var inst_50745 = (state_50902[(11)]);
var inst_50866 = (state_50902[(22)]);
var inst_50853 = (state_50902[(23)]);
var inst_50866__$1 = cljs.core.first(inst_50853);
var inst_50867 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50866__$1,inst_50745,done);
var state_50902__$1 = (function (){var statearr_51060 = state_50902;
(statearr_51060[(22)] = inst_50866__$1);

return statearr_51060;
})();
if(cljs.core.truth_(inst_50867)){
var statearr_51062_52642 = state_50902__$1;
(statearr_51062_52642[(1)] = (39));

} else {
var statearr_51063_52643 = state_50902__$1;
(statearr_51063_52643[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50903 === (8))){
var inst_50758 = (state_50902[(14)]);
var inst_50759 = (state_50902[(15)]);
var inst_50762 = (inst_50759 < inst_50758);
var inst_50763 = inst_50762;
var state_50902__$1 = state_50902;
if(cljs.core.truth_(inst_50763)){
var statearr_51064_52644 = state_50902__$1;
(statearr_51064_52644[(1)] = (10));

} else {
var statearr_51065_52645 = state_50902__$1;
(statearr_51065_52645[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__49506__auto__ = null;
var cljs$core$async$mult_$_state_machine__49506__auto____0 = (function (){
var statearr_51070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51070[(0)] = cljs$core$async$mult_$_state_machine__49506__auto__);

(statearr_51070[(1)] = (1));

return statearr_51070;
});
var cljs$core$async$mult_$_state_machine__49506__auto____1 = (function (state_50902){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_50902);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e51071){var ex__49509__auto__ = e51071;
var statearr_51072_52652 = state_50902;
(statearr_51072_52652[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_50902[(4)]))){
var statearr_51076_52653 = state_50902;
(statearr_51076_52653[(1)] = cljs.core.first((state_50902[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52654 = state_50902;
state_50902 = G__52654;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49506__auto__ = function(state_50902){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49506__auto____1.call(this,state_50902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49506__auto____0;
cljs$core$async$mult_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49506__auto____1;
return cljs$core$async$mult_$_state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_51078 = f__49892__auto__();
(statearr_51078[(6)] = c__49891__auto___52521);

return statearr_51078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__51084 = arguments.length;
switch (G__51084) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_52658 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_52658(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52660 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_52660(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52661 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52661(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52662 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_52662(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52664 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52664(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52672 = arguments.length;
var i__4819__auto___52673 = (0);
while(true){
if((i__4819__auto___52673 < len__4818__auto___52672)){
args__4824__auto__.push((arguments[i__4819__auto___52673]));

var G__52674 = (i__4819__auto___52673 + (1));
i__4819__auto___52673 = G__52674;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51096){
var map__51097 = p__51096;
var map__51097__$1 = cljs.core.__destructure_map(map__51097);
var opts = map__51097__$1;
var statearr_51098_52675 = state;
(statearr_51098_52675[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51099_52676 = state;
(statearr_51099_52676[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_51100_52677 = state;
(statearr_51100_52677[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51092){
var G__51093 = cljs.core.first(seq51092);
var seq51092__$1 = cljs.core.next(seq51092);
var G__51094 = cljs.core.first(seq51092__$1);
var seq51092__$2 = cljs.core.next(seq51092__$1);
var G__51095 = cljs.core.first(seq51092__$2);
var seq51092__$3 = cljs.core.next(seq51092__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51093,G__51094,G__51095,seq51092__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51103 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51104){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51104 = meta51104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51105,meta51104__$1){
var self__ = this;
var _51105__$1 = this;
return (new cljs.core.async.t_cljs$core$async51103(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51104__$1));
}));

(cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51105){
var self__ = this;
var _51105__$1 = this;
return self__.meta51104;
}));

(cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51103.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51104","meta51104",797145306,null)], null);
}));

(cljs.core.async.t_cljs$core$async51103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51103");

(cljs.core.async.t_cljs$core$async51103.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async51103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51103.
 */
cljs.core.async.__GT_t_cljs$core$async51103 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51103(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51104){
return (new cljs.core.async.t_cljs$core$async51103(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51104));
});

}

return (new cljs.core.async.t_cljs$core$async51103(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49891__auto___52716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_51179){
var state_val_51180 = (state_51179[(1)]);
if((state_val_51180 === (7))){
var inst_51137 = (state_51179[(2)]);
var state_51179__$1 = state_51179;
if(cljs.core.truth_(inst_51137)){
var statearr_51185_52727 = state_51179__$1;
(statearr_51185_52727[(1)] = (8));

} else {
var statearr_51186_52728 = state_51179__$1;
(statearr_51186_52728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (20))){
var inst_51130 = (state_51179[(7)]);
var state_51179__$1 = state_51179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51179__$1,(23),out,inst_51130);
} else {
if((state_val_51180 === (1))){
var inst_51113 = calc_state();
var inst_51114 = cljs.core.__destructure_map(inst_51113);
var inst_51115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51114,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51114,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51114,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51118 = inst_51113;
var state_51179__$1 = (function (){var statearr_51187 = state_51179;
(statearr_51187[(8)] = inst_51118);

(statearr_51187[(9)] = inst_51117);

(statearr_51187[(10)] = inst_51115);

(statearr_51187[(11)] = inst_51116);

return statearr_51187;
})();
var statearr_51189_52755 = state_51179__$1;
(statearr_51189_52755[(2)] = null);

(statearr_51189_52755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (24))){
var inst_51121 = (state_51179[(12)]);
var inst_51118 = inst_51121;
var state_51179__$1 = (function (){var statearr_51191 = state_51179;
(statearr_51191[(8)] = inst_51118);

return statearr_51191;
})();
var statearr_51192_52757 = state_51179__$1;
(statearr_51192_52757[(2)] = null);

(statearr_51192_52757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (4))){
var inst_51130 = (state_51179[(7)]);
var inst_51132 = (state_51179[(13)]);
var inst_51129 = (state_51179[(2)]);
var inst_51130__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51129,(0),null);
var inst_51131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51129,(1),null);
var inst_51132__$1 = (inst_51130__$1 == null);
var state_51179__$1 = (function (){var statearr_51194 = state_51179;
(statearr_51194[(7)] = inst_51130__$1);

(statearr_51194[(13)] = inst_51132__$1);

(statearr_51194[(14)] = inst_51131);

return statearr_51194;
})();
if(cljs.core.truth_(inst_51132__$1)){
var statearr_51197_52769 = state_51179__$1;
(statearr_51197_52769[(1)] = (5));

} else {
var statearr_51198_52770 = state_51179__$1;
(statearr_51198_52770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (15))){
var inst_51152 = (state_51179[(15)]);
var inst_51122 = (state_51179[(16)]);
var inst_51152__$1 = cljs.core.empty_QMARK_(inst_51122);
var state_51179__$1 = (function (){var statearr_51199 = state_51179;
(statearr_51199[(15)] = inst_51152__$1);

return statearr_51199;
})();
if(inst_51152__$1){
var statearr_51200_52774 = state_51179__$1;
(statearr_51200_52774[(1)] = (17));

} else {
var statearr_51201_52775 = state_51179__$1;
(statearr_51201_52775[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (21))){
var inst_51121 = (state_51179[(12)]);
var inst_51118 = inst_51121;
var state_51179__$1 = (function (){var statearr_51202 = state_51179;
(statearr_51202[(8)] = inst_51118);

return statearr_51202;
})();
var statearr_51203_52782 = state_51179__$1;
(statearr_51203_52782[(2)] = null);

(statearr_51203_52782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (13))){
var inst_51144 = (state_51179[(2)]);
var inst_51145 = calc_state();
var inst_51118 = inst_51145;
var state_51179__$1 = (function (){var statearr_51204 = state_51179;
(statearr_51204[(17)] = inst_51144);

(statearr_51204[(8)] = inst_51118);

return statearr_51204;
})();
var statearr_51208_52792 = state_51179__$1;
(statearr_51208_52792[(2)] = null);

(statearr_51208_52792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (22))){
var inst_51173 = (state_51179[(2)]);
var state_51179__$1 = state_51179;
var statearr_51209_52797 = state_51179__$1;
(statearr_51209_52797[(2)] = inst_51173);

(statearr_51209_52797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (6))){
var inst_51131 = (state_51179[(14)]);
var inst_51135 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51131,change);
var state_51179__$1 = state_51179;
var statearr_51210_52802 = state_51179__$1;
(statearr_51210_52802[(2)] = inst_51135);

(statearr_51210_52802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (25))){
var state_51179__$1 = state_51179;
var statearr_51211_52803 = state_51179__$1;
(statearr_51211_52803[(2)] = null);

(statearr_51211_52803[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (17))){
var inst_51131 = (state_51179[(14)]);
var inst_51123 = (state_51179[(18)]);
var inst_51155 = (inst_51123.cljs$core$IFn$_invoke$arity$1 ? inst_51123.cljs$core$IFn$_invoke$arity$1(inst_51131) : inst_51123.call(null,inst_51131));
var inst_51156 = cljs.core.not(inst_51155);
var state_51179__$1 = state_51179;
var statearr_51212_52811 = state_51179__$1;
(statearr_51212_52811[(2)] = inst_51156);

(statearr_51212_52811[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (3))){
var inst_51177 = (state_51179[(2)]);
var state_51179__$1 = state_51179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51179__$1,inst_51177);
} else {
if((state_val_51180 === (12))){
var state_51179__$1 = state_51179;
var statearr_51213_52813 = state_51179__$1;
(statearr_51213_52813[(2)] = null);

(statearr_51213_52813[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (2))){
var inst_51121 = (state_51179[(12)]);
var inst_51118 = (state_51179[(8)]);
var inst_51121__$1 = cljs.core.__destructure_map(inst_51118);
var inst_51122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51121__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51121__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51121__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51179__$1 = (function (){var statearr_51217 = state_51179;
(statearr_51217[(12)] = inst_51121__$1);

(statearr_51217[(18)] = inst_51123);

(statearr_51217[(16)] = inst_51122);

return statearr_51217;
})();
return cljs.core.async.ioc_alts_BANG_(state_51179__$1,(4),inst_51124);
} else {
if((state_val_51180 === (23))){
var inst_51164 = (state_51179[(2)]);
var state_51179__$1 = state_51179;
if(cljs.core.truth_(inst_51164)){
var statearr_51234_52817 = state_51179__$1;
(statearr_51234_52817[(1)] = (24));

} else {
var statearr_51235_52819 = state_51179__$1;
(statearr_51235_52819[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (19))){
var inst_51159 = (state_51179[(2)]);
var state_51179__$1 = state_51179;
var statearr_51236_52821 = state_51179__$1;
(statearr_51236_52821[(2)] = inst_51159);

(statearr_51236_52821[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (11))){
var inst_51131 = (state_51179[(14)]);
var inst_51141 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51131);
var state_51179__$1 = state_51179;
var statearr_51237_52822 = state_51179__$1;
(statearr_51237_52822[(2)] = inst_51141);

(statearr_51237_52822[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (9))){
var inst_51148 = (state_51179[(19)]);
var inst_51131 = (state_51179[(14)]);
var inst_51122 = (state_51179[(16)]);
var inst_51148__$1 = (inst_51122.cljs$core$IFn$_invoke$arity$1 ? inst_51122.cljs$core$IFn$_invoke$arity$1(inst_51131) : inst_51122.call(null,inst_51131));
var state_51179__$1 = (function (){var statearr_51242 = state_51179;
(statearr_51242[(19)] = inst_51148__$1);

return statearr_51242;
})();
if(cljs.core.truth_(inst_51148__$1)){
var statearr_51246_52824 = state_51179__$1;
(statearr_51246_52824[(1)] = (14));

} else {
var statearr_51247_52825 = state_51179__$1;
(statearr_51247_52825[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (5))){
var inst_51132 = (state_51179[(13)]);
var state_51179__$1 = state_51179;
var statearr_51251_52827 = state_51179__$1;
(statearr_51251_52827[(2)] = inst_51132);

(statearr_51251_52827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (14))){
var inst_51148 = (state_51179[(19)]);
var state_51179__$1 = state_51179;
var statearr_51252_52830 = state_51179__$1;
(statearr_51252_52830[(2)] = inst_51148);

(statearr_51252_52830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (26))){
var inst_51169 = (state_51179[(2)]);
var state_51179__$1 = state_51179;
var statearr_51253_52834 = state_51179__$1;
(statearr_51253_52834[(2)] = inst_51169);

(statearr_51253_52834[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (16))){
var inst_51161 = (state_51179[(2)]);
var state_51179__$1 = state_51179;
if(cljs.core.truth_(inst_51161)){
var statearr_51257_52835 = state_51179__$1;
(statearr_51257_52835[(1)] = (20));

} else {
var statearr_51258_52836 = state_51179__$1;
(statearr_51258_52836[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (10))){
var inst_51175 = (state_51179[(2)]);
var state_51179__$1 = state_51179;
var statearr_51259_52837 = state_51179__$1;
(statearr_51259_52837[(2)] = inst_51175);

(statearr_51259_52837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (18))){
var inst_51152 = (state_51179[(15)]);
var state_51179__$1 = state_51179;
var statearr_51260_52838 = state_51179__$1;
(statearr_51260_52838[(2)] = inst_51152);

(statearr_51260_52838[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51180 === (8))){
var inst_51130 = (state_51179[(7)]);
var inst_51139 = (inst_51130 == null);
var state_51179__$1 = state_51179;
if(cljs.core.truth_(inst_51139)){
var statearr_51261_52840 = state_51179__$1;
(statearr_51261_52840[(1)] = (11));

} else {
var statearr_51262_52841 = state_51179__$1;
(statearr_51262_52841[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__49506__auto__ = null;
var cljs$core$async$mix_$_state_machine__49506__auto____0 = (function (){
var statearr_51263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51263[(0)] = cljs$core$async$mix_$_state_machine__49506__auto__);

(statearr_51263[(1)] = (1));

return statearr_51263;
});
var cljs$core$async$mix_$_state_machine__49506__auto____1 = (function (state_51179){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_51179);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e51264){var ex__49509__auto__ = e51264;
var statearr_51265_52843 = state_51179;
(statearr_51265_52843[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_51179[(4)]))){
var statearr_51270_52844 = state_51179;
(statearr_51270_52844[(1)] = cljs.core.first((state_51179[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52845 = state_51179;
state_51179 = G__52845;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49506__auto__ = function(state_51179){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49506__auto____1.call(this,state_51179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49506__auto____0;
cljs$core$async$mix_$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49506__auto____1;
return cljs$core$async$mix_$_state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_51271 = f__49892__auto__();
(statearr_51271[(6)] = c__49891__auto___52716);

return statearr_51271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_52847 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_52847(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52857 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_52857(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52859 = (function() {
var G__52860 = null;
var G__52860__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__52860__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__52860 = function(p,v){
switch(arguments.length){
case 1:
return G__52860__1.call(this,p);
case 2:
return G__52860__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52860.cljs$core$IFn$_invoke$arity$1 = G__52860__1;
G__52860.cljs$core$IFn$_invoke$arity$2 = G__52860__2;
return G__52860;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51283 = arguments.length;
switch (G__51283) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52859(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52859(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51291 = arguments.length;
switch (G__51291) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51289_SHARP_){
if(cljs.core.truth_((p1__51289_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51289_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51289_SHARP_.call(null,topic)))){
return p1__51289_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51289_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51292 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51293){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51293 = meta51293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51294,meta51293__$1){
var self__ = this;
var _51294__$1 = this;
return (new cljs.core.async.t_cljs$core$async51292(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51293__$1));
}));

(cljs.core.async.t_cljs$core$async51292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51294){
var self__ = this;
var _51294__$1 = this;
return self__.meta51293;
}));

(cljs.core.async.t_cljs$core$async51292.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51292.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51292.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51292.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51292.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51292.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51293","meta51293",1797154522,null)], null);
}));

(cljs.core.async.t_cljs$core$async51292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51292");

(cljs.core.async.t_cljs$core$async51292.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async51292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51292.
 */
cljs.core.async.__GT_t_cljs$core$async51292 = (function cljs$core$async$__GT_t_cljs$core$async51292(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51293){
return (new cljs.core.async.t_cljs$core$async51292(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51293));
});

}

return (new cljs.core.async.t_cljs$core$async51292(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49891__auto___52900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_51378){
var state_val_51379 = (state_51378[(1)]);
if((state_val_51379 === (7))){
var inst_51374 = (state_51378[(2)]);
var state_51378__$1 = state_51378;
var statearr_51380_52902 = state_51378__$1;
(statearr_51380_52902[(2)] = inst_51374);

(statearr_51380_52902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (20))){
var state_51378__$1 = state_51378;
var statearr_51381_52903 = state_51378__$1;
(statearr_51381_52903[(2)] = null);

(statearr_51381_52903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (1))){
var state_51378__$1 = state_51378;
var statearr_51382_52904 = state_51378__$1;
(statearr_51382_52904[(2)] = null);

(statearr_51382_52904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (24))){
var inst_51357 = (state_51378[(7)]);
var inst_51366 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51357);
var state_51378__$1 = state_51378;
var statearr_51383_52910 = state_51378__$1;
(statearr_51383_52910[(2)] = inst_51366);

(statearr_51383_52910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (4))){
var inst_51304 = (state_51378[(8)]);
var inst_51304__$1 = (state_51378[(2)]);
var inst_51305 = (inst_51304__$1 == null);
var state_51378__$1 = (function (){var statearr_51384 = state_51378;
(statearr_51384[(8)] = inst_51304__$1);

return statearr_51384;
})();
if(cljs.core.truth_(inst_51305)){
var statearr_51386_52926 = state_51378__$1;
(statearr_51386_52926[(1)] = (5));

} else {
var statearr_51390_52927 = state_51378__$1;
(statearr_51390_52927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (15))){
var inst_51351 = (state_51378[(2)]);
var state_51378__$1 = state_51378;
var statearr_51391_52933 = state_51378__$1;
(statearr_51391_52933[(2)] = inst_51351);

(statearr_51391_52933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (21))){
var inst_51371 = (state_51378[(2)]);
var state_51378__$1 = (function (){var statearr_51392 = state_51378;
(statearr_51392[(9)] = inst_51371);

return statearr_51392;
})();
var statearr_51393_52935 = state_51378__$1;
(statearr_51393_52935[(2)] = null);

(statearr_51393_52935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (13))){
var inst_51333 = (state_51378[(10)]);
var inst_51335 = cljs.core.chunked_seq_QMARK_(inst_51333);
var state_51378__$1 = state_51378;
if(inst_51335){
var statearr_51394_52936 = state_51378__$1;
(statearr_51394_52936[(1)] = (16));

} else {
var statearr_51396_52937 = state_51378__$1;
(statearr_51396_52937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (22))){
var inst_51363 = (state_51378[(2)]);
var state_51378__$1 = state_51378;
if(cljs.core.truth_(inst_51363)){
var statearr_51400_52942 = state_51378__$1;
(statearr_51400_52942[(1)] = (23));

} else {
var statearr_51401_52949 = state_51378__$1;
(statearr_51401_52949[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (6))){
var inst_51304 = (state_51378[(8)]);
var inst_51357 = (state_51378[(7)]);
var inst_51359 = (state_51378[(11)]);
var inst_51357__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51304) : topic_fn.call(null,inst_51304));
var inst_51358 = cljs.core.deref(mults);
var inst_51359__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51358,inst_51357__$1);
var state_51378__$1 = (function (){var statearr_51402 = state_51378;
(statearr_51402[(7)] = inst_51357__$1);

(statearr_51402[(11)] = inst_51359__$1);

return statearr_51402;
})();
if(cljs.core.truth_(inst_51359__$1)){
var statearr_51403_52962 = state_51378__$1;
(statearr_51403_52962[(1)] = (19));

} else {
var statearr_51404_52969 = state_51378__$1;
(statearr_51404_52969[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (25))){
var inst_51368 = (state_51378[(2)]);
var state_51378__$1 = state_51378;
var statearr_51405_52970 = state_51378__$1;
(statearr_51405_52970[(2)] = inst_51368);

(statearr_51405_52970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (17))){
var inst_51333 = (state_51378[(10)]);
var inst_51342 = cljs.core.first(inst_51333);
var inst_51343 = cljs.core.async.muxch_STAR_(inst_51342);
var inst_51344 = cljs.core.async.close_BANG_(inst_51343);
var inst_51345 = cljs.core.next(inst_51333);
var inst_51315 = inst_51345;
var inst_51316 = null;
var inst_51317 = (0);
var inst_51318 = (0);
var state_51378__$1 = (function (){var statearr_51406 = state_51378;
(statearr_51406[(12)] = inst_51318);

(statearr_51406[(13)] = inst_51344);

(statearr_51406[(14)] = inst_51316);

(statearr_51406[(15)] = inst_51317);

(statearr_51406[(16)] = inst_51315);

return statearr_51406;
})();
var statearr_51407_52975 = state_51378__$1;
(statearr_51407_52975[(2)] = null);

(statearr_51407_52975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (3))){
var inst_51376 = (state_51378[(2)]);
var state_51378__$1 = state_51378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51378__$1,inst_51376);
} else {
if((state_val_51379 === (12))){
var inst_51353 = (state_51378[(2)]);
var state_51378__$1 = state_51378;
var statearr_51408_52982 = state_51378__$1;
(statearr_51408_52982[(2)] = inst_51353);

(statearr_51408_52982[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (2))){
var state_51378__$1 = state_51378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51378__$1,(4),ch);
} else {
if((state_val_51379 === (23))){
var state_51378__$1 = state_51378;
var statearr_51409_52991 = state_51378__$1;
(statearr_51409_52991[(2)] = null);

(statearr_51409_52991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (19))){
var inst_51304 = (state_51378[(8)]);
var inst_51359 = (state_51378[(11)]);
var inst_51361 = cljs.core.async.muxch_STAR_(inst_51359);
var state_51378__$1 = state_51378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51378__$1,(22),inst_51361,inst_51304);
} else {
if((state_val_51379 === (11))){
var inst_51333 = (state_51378[(10)]);
var inst_51315 = (state_51378[(16)]);
var inst_51333__$1 = cljs.core.seq(inst_51315);
var state_51378__$1 = (function (){var statearr_51411 = state_51378;
(statearr_51411[(10)] = inst_51333__$1);

return statearr_51411;
})();
if(inst_51333__$1){
var statearr_51413_53002 = state_51378__$1;
(statearr_51413_53002[(1)] = (13));

} else {
var statearr_51414_53004 = state_51378__$1;
(statearr_51414_53004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (9))){
var inst_51355 = (state_51378[(2)]);
var state_51378__$1 = state_51378;
var statearr_51415_53005 = state_51378__$1;
(statearr_51415_53005[(2)] = inst_51355);

(statearr_51415_53005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (5))){
var inst_51311 = cljs.core.deref(mults);
var inst_51312 = cljs.core.vals(inst_51311);
var inst_51313 = cljs.core.seq(inst_51312);
var inst_51315 = inst_51313;
var inst_51316 = null;
var inst_51317 = (0);
var inst_51318 = (0);
var state_51378__$1 = (function (){var statearr_51416 = state_51378;
(statearr_51416[(12)] = inst_51318);

(statearr_51416[(14)] = inst_51316);

(statearr_51416[(15)] = inst_51317);

(statearr_51416[(16)] = inst_51315);

return statearr_51416;
})();
var statearr_51417_53009 = state_51378__$1;
(statearr_51417_53009[(2)] = null);

(statearr_51417_53009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (14))){
var state_51378__$1 = state_51378;
var statearr_51424_53011 = state_51378__$1;
(statearr_51424_53011[(2)] = null);

(statearr_51424_53011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (16))){
var inst_51333 = (state_51378[(10)]);
var inst_51337 = cljs.core.chunk_first(inst_51333);
var inst_51338 = cljs.core.chunk_rest(inst_51333);
var inst_51339 = cljs.core.count(inst_51337);
var inst_51315 = inst_51338;
var inst_51316 = inst_51337;
var inst_51317 = inst_51339;
var inst_51318 = (0);
var state_51378__$1 = (function (){var statearr_51425 = state_51378;
(statearr_51425[(12)] = inst_51318);

(statearr_51425[(14)] = inst_51316);

(statearr_51425[(15)] = inst_51317);

(statearr_51425[(16)] = inst_51315);

return statearr_51425;
})();
var statearr_51426_53014 = state_51378__$1;
(statearr_51426_53014[(2)] = null);

(statearr_51426_53014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (10))){
var inst_51318 = (state_51378[(12)]);
var inst_51316 = (state_51378[(14)]);
var inst_51317 = (state_51378[(15)]);
var inst_51315 = (state_51378[(16)]);
var inst_51324 = cljs.core._nth(inst_51316,inst_51318);
var inst_51325 = cljs.core.async.muxch_STAR_(inst_51324);
var inst_51326 = cljs.core.async.close_BANG_(inst_51325);
var inst_51327 = (inst_51318 + (1));
var tmp51421 = inst_51316;
var tmp51422 = inst_51317;
var tmp51423 = inst_51315;
var inst_51315__$1 = tmp51423;
var inst_51316__$1 = tmp51421;
var inst_51317__$1 = tmp51422;
var inst_51318__$1 = inst_51327;
var state_51378__$1 = (function (){var statearr_51427 = state_51378;
(statearr_51427[(12)] = inst_51318__$1);

(statearr_51427[(14)] = inst_51316__$1);

(statearr_51427[(15)] = inst_51317__$1);

(statearr_51427[(17)] = inst_51326);

(statearr_51427[(16)] = inst_51315__$1);

return statearr_51427;
})();
var statearr_51428_53022 = state_51378__$1;
(statearr_51428_53022[(2)] = null);

(statearr_51428_53022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (18))){
var inst_51348 = (state_51378[(2)]);
var state_51378__$1 = state_51378;
var statearr_51429_53023 = state_51378__$1;
(statearr_51429_53023[(2)] = inst_51348);

(statearr_51429_53023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (8))){
var inst_51318 = (state_51378[(12)]);
var inst_51317 = (state_51378[(15)]);
var inst_51320 = (inst_51318 < inst_51317);
var inst_51321 = inst_51320;
var state_51378__$1 = state_51378;
if(cljs.core.truth_(inst_51321)){
var statearr_51430_53024 = state_51378__$1;
(statearr_51430_53024[(1)] = (10));

} else {
var statearr_51431_53025 = state_51378__$1;
(statearr_51431_53025[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_51432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51432[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_51432[(1)] = (1));

return statearr_51432;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_51378){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_51378);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e51433){var ex__49509__auto__ = e51433;
var statearr_51434_53034 = state_51378;
(statearr_51434_53034[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_51378[(4)]))){
var statearr_51435_53035 = state_51378;
(statearr_51435_53035[(1)] = cljs.core.first((state_51378[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53036 = state_51378;
state_51378 = G__53036;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_51378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_51378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_51436 = f__49892__auto__();
(statearr_51436[(6)] = c__49891__auto___52900);

return statearr_51436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51438 = arguments.length;
switch (G__51438) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51440 = arguments.length;
switch (G__51440) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51443 = arguments.length;
switch (G__51443) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__49891__auto___53044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_51489){
var state_val_51490 = (state_51489[(1)]);
if((state_val_51490 === (7))){
var state_51489__$1 = state_51489;
var statearr_51495_53048 = state_51489__$1;
(statearr_51495_53048[(2)] = null);

(statearr_51495_53048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (1))){
var state_51489__$1 = state_51489;
var statearr_51496_53049 = state_51489__$1;
(statearr_51496_53049[(2)] = null);

(statearr_51496_53049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (4))){
var inst_51446 = (state_51489[(7)]);
var inst_51447 = (state_51489[(8)]);
var inst_51452 = (inst_51447 < inst_51446);
var state_51489__$1 = state_51489;
if(cljs.core.truth_(inst_51452)){
var statearr_51497_53050 = state_51489__$1;
(statearr_51497_53050[(1)] = (6));

} else {
var statearr_51498_53051 = state_51489__$1;
(statearr_51498_53051[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (15))){
var inst_51475 = (state_51489[(9)]);
var inst_51480 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51475);
var state_51489__$1 = state_51489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51489__$1,(17),out,inst_51480);
} else {
if((state_val_51490 === (13))){
var inst_51475 = (state_51489[(9)]);
var inst_51475__$1 = (state_51489[(2)]);
var inst_51476 = cljs.core.some(cljs.core.nil_QMARK_,inst_51475__$1);
var state_51489__$1 = (function (){var statearr_51499 = state_51489;
(statearr_51499[(9)] = inst_51475__$1);

return statearr_51499;
})();
if(cljs.core.truth_(inst_51476)){
var statearr_51500_53053 = state_51489__$1;
(statearr_51500_53053[(1)] = (14));

} else {
var statearr_51501_53054 = state_51489__$1;
(statearr_51501_53054[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (6))){
var state_51489__$1 = state_51489;
var statearr_51502_53059 = state_51489__$1;
(statearr_51502_53059[(2)] = null);

(statearr_51502_53059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (17))){
var inst_51482 = (state_51489[(2)]);
var state_51489__$1 = (function (){var statearr_51504 = state_51489;
(statearr_51504[(10)] = inst_51482);

return statearr_51504;
})();
var statearr_51505_53062 = state_51489__$1;
(statearr_51505_53062[(2)] = null);

(statearr_51505_53062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (3))){
var inst_51487 = (state_51489[(2)]);
var state_51489__$1 = state_51489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51489__$1,inst_51487);
} else {
if((state_val_51490 === (12))){
var _ = (function (){var statearr_51506 = state_51489;
(statearr_51506[(4)] = cljs.core.rest((state_51489[(4)])));

return statearr_51506;
})();
var state_51489__$1 = state_51489;
var ex51503 = (state_51489__$1[(2)]);
var statearr_51507_53065 = state_51489__$1;
(statearr_51507_53065[(5)] = ex51503);


if((ex51503 instanceof Object)){
var statearr_51516_53066 = state_51489__$1;
(statearr_51516_53066[(1)] = (11));

(statearr_51516_53066[(5)] = null);

} else {
throw ex51503;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (2))){
var inst_51445 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51446 = cnt;
var inst_51447 = (0);
var state_51489__$1 = (function (){var statearr_51529 = state_51489;
(statearr_51529[(7)] = inst_51446);

(statearr_51529[(11)] = inst_51445);

(statearr_51529[(8)] = inst_51447);

return statearr_51529;
})();
var statearr_51530_53068 = state_51489__$1;
(statearr_51530_53068[(2)] = null);

(statearr_51530_53068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (11))){
var inst_51454 = (state_51489[(2)]);
var inst_51455 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51489__$1 = (function (){var statearr_51531 = state_51489;
(statearr_51531[(12)] = inst_51454);

return statearr_51531;
})();
var statearr_51532_53076 = state_51489__$1;
(statearr_51532_53076[(2)] = inst_51455);

(statearr_51532_53076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (9))){
var inst_51447 = (state_51489[(8)]);
var _ = (function (){var statearr_51533 = state_51489;
(statearr_51533[(4)] = cljs.core.cons((12),(state_51489[(4)])));

return statearr_51533;
})();
var inst_51461 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51447) : chs__$1.call(null,inst_51447));
var inst_51462 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51447) : done.call(null,inst_51447));
var inst_51463 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51461,inst_51462);
var ___$1 = (function (){var statearr_51534 = state_51489;
(statearr_51534[(4)] = cljs.core.rest((state_51489[(4)])));

return statearr_51534;
})();
var state_51489__$1 = state_51489;
var statearr_51535_53077 = state_51489__$1;
(statearr_51535_53077[(2)] = inst_51463);

(statearr_51535_53077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (5))){
var inst_51473 = (state_51489[(2)]);
var state_51489__$1 = (function (){var statearr_51544 = state_51489;
(statearr_51544[(13)] = inst_51473);

return statearr_51544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51489__$1,(13),dchan);
} else {
if((state_val_51490 === (14))){
var inst_51478 = cljs.core.async.close_BANG_(out);
var state_51489__$1 = state_51489;
var statearr_51551_53082 = state_51489__$1;
(statearr_51551_53082[(2)] = inst_51478);

(statearr_51551_53082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (16))){
var inst_51485 = (state_51489[(2)]);
var state_51489__$1 = state_51489;
var statearr_51552_53083 = state_51489__$1;
(statearr_51552_53083[(2)] = inst_51485);

(statearr_51552_53083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (10))){
var inst_51447 = (state_51489[(8)]);
var inst_51466 = (state_51489[(2)]);
var inst_51467 = (inst_51447 + (1));
var inst_51447__$1 = inst_51467;
var state_51489__$1 = (function (){var statearr_51559 = state_51489;
(statearr_51559[(8)] = inst_51447__$1);

(statearr_51559[(14)] = inst_51466);

return statearr_51559;
})();
var statearr_51560_53085 = state_51489__$1;
(statearr_51560_53085[(2)] = null);

(statearr_51560_53085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51490 === (8))){
var inst_51471 = (state_51489[(2)]);
var state_51489__$1 = state_51489;
var statearr_51561_53086 = state_51489__$1;
(statearr_51561_53086[(2)] = inst_51471);

(statearr_51561_53086[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_51562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51562[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_51562[(1)] = (1));

return statearr_51562;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_51489){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_51489);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e51565){var ex__49509__auto__ = e51565;
var statearr_51566_53087 = state_51489;
(statearr_51566_53087[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_51489[(4)]))){
var statearr_51567_53088 = state_51489;
(statearr_51567_53088[(1)] = cljs.core.first((state_51489[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53089 = state_51489;
state_51489 = G__53089;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_51489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_51489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_51568 = f__49892__auto__();
(statearr_51568[(6)] = c__49891__auto___53044);

return statearr_51568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51572 = arguments.length;
switch (G__51572) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49891__auto___53097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_51607){
var state_val_51608 = (state_51607[(1)]);
if((state_val_51608 === (7))){
var inst_51586 = (state_51607[(7)]);
var inst_51587 = (state_51607[(8)]);
var inst_51586__$1 = (state_51607[(2)]);
var inst_51587__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51586__$1,(0),null);
var inst_51588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51586__$1,(1),null);
var inst_51589 = (inst_51587__$1 == null);
var state_51607__$1 = (function (){var statearr_51609 = state_51607;
(statearr_51609[(9)] = inst_51588);

(statearr_51609[(7)] = inst_51586__$1);

(statearr_51609[(8)] = inst_51587__$1);

return statearr_51609;
})();
if(cljs.core.truth_(inst_51589)){
var statearr_51610_53099 = state_51607__$1;
(statearr_51610_53099[(1)] = (8));

} else {
var statearr_51611_53100 = state_51607__$1;
(statearr_51611_53100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51608 === (1))){
var inst_51576 = cljs.core.vec(chs);
var inst_51577 = inst_51576;
var state_51607__$1 = (function (){var statearr_51612 = state_51607;
(statearr_51612[(10)] = inst_51577);

return statearr_51612;
})();
var statearr_51613_53101 = state_51607__$1;
(statearr_51613_53101[(2)] = null);

(statearr_51613_53101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51608 === (4))){
var inst_51577 = (state_51607[(10)]);
var state_51607__$1 = state_51607;
return cljs.core.async.ioc_alts_BANG_(state_51607__$1,(7),inst_51577);
} else {
if((state_val_51608 === (6))){
var inst_51603 = (state_51607[(2)]);
var state_51607__$1 = state_51607;
var statearr_51614_53102 = state_51607__$1;
(statearr_51614_53102[(2)] = inst_51603);

(statearr_51614_53102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51608 === (3))){
var inst_51605 = (state_51607[(2)]);
var state_51607__$1 = state_51607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51607__$1,inst_51605);
} else {
if((state_val_51608 === (2))){
var inst_51577 = (state_51607[(10)]);
var inst_51579 = cljs.core.count(inst_51577);
var inst_51580 = (inst_51579 > (0));
var state_51607__$1 = state_51607;
if(cljs.core.truth_(inst_51580)){
var statearr_51616_53104 = state_51607__$1;
(statearr_51616_53104[(1)] = (4));

} else {
var statearr_51617_53105 = state_51607__$1;
(statearr_51617_53105[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51608 === (11))){
var inst_51577 = (state_51607[(10)]);
var inst_51596 = (state_51607[(2)]);
var tmp51615 = inst_51577;
var inst_51577__$1 = tmp51615;
var state_51607__$1 = (function (){var statearr_51618 = state_51607;
(statearr_51618[(11)] = inst_51596);

(statearr_51618[(10)] = inst_51577__$1);

return statearr_51618;
})();
var statearr_51619_53106 = state_51607__$1;
(statearr_51619_53106[(2)] = null);

(statearr_51619_53106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51608 === (9))){
var inst_51587 = (state_51607[(8)]);
var state_51607__$1 = state_51607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51607__$1,(11),out,inst_51587);
} else {
if((state_val_51608 === (5))){
var inst_51601 = cljs.core.async.close_BANG_(out);
var state_51607__$1 = state_51607;
var statearr_51620_53107 = state_51607__$1;
(statearr_51620_53107[(2)] = inst_51601);

(statearr_51620_53107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51608 === (10))){
var inst_51599 = (state_51607[(2)]);
var state_51607__$1 = state_51607;
var statearr_51621_53112 = state_51607__$1;
(statearr_51621_53112[(2)] = inst_51599);

(statearr_51621_53112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51608 === (8))){
var inst_51577 = (state_51607[(10)]);
var inst_51588 = (state_51607[(9)]);
var inst_51586 = (state_51607[(7)]);
var inst_51587 = (state_51607[(8)]);
var inst_51591 = (function (){var cs = inst_51577;
var vec__51582 = inst_51586;
var v = inst_51587;
var c = inst_51588;
return (function (p1__51570_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51570_SHARP_);
});
})();
var inst_51592 = cljs.core.filterv(inst_51591,inst_51577);
var inst_51577__$1 = inst_51592;
var state_51607__$1 = (function (){var statearr_51622 = state_51607;
(statearr_51622[(10)] = inst_51577__$1);

return statearr_51622;
})();
var statearr_51623_53113 = state_51607__$1;
(statearr_51623_53113[(2)] = null);

(statearr_51623_53113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_51624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51624[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_51624[(1)] = (1));

return statearr_51624;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_51607){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_51607);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e51625){var ex__49509__auto__ = e51625;
var statearr_51626_53116 = state_51607;
(statearr_51626_53116[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_51607[(4)]))){
var statearr_51627_53118 = state_51607;
(statearr_51627_53118[(1)] = cljs.core.first((state_51607[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53119 = state_51607;
state_51607 = G__53119;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_51607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_51607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_51628 = f__49892__auto__();
(statearr_51628[(6)] = c__49891__auto___53097);

return statearr_51628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51641 = arguments.length;
switch (G__51641) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49891__auto___53126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_51665){
var state_val_51666 = (state_51665[(1)]);
if((state_val_51666 === (7))){
var inst_51647 = (state_51665[(7)]);
var inst_51647__$1 = (state_51665[(2)]);
var inst_51648 = (inst_51647__$1 == null);
var inst_51649 = cljs.core.not(inst_51648);
var state_51665__$1 = (function (){var statearr_51667 = state_51665;
(statearr_51667[(7)] = inst_51647__$1);

return statearr_51667;
})();
if(inst_51649){
var statearr_51668_53130 = state_51665__$1;
(statearr_51668_53130[(1)] = (8));

} else {
var statearr_51669_53131 = state_51665__$1;
(statearr_51669_53131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51666 === (1))){
var inst_51642 = (0);
var state_51665__$1 = (function (){var statearr_51670 = state_51665;
(statearr_51670[(8)] = inst_51642);

return statearr_51670;
})();
var statearr_51671_53133 = state_51665__$1;
(statearr_51671_53133[(2)] = null);

(statearr_51671_53133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51666 === (4))){
var state_51665__$1 = state_51665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51665__$1,(7),ch);
} else {
if((state_val_51666 === (6))){
var inst_51660 = (state_51665[(2)]);
var state_51665__$1 = state_51665;
var statearr_51672_53136 = state_51665__$1;
(statearr_51672_53136[(2)] = inst_51660);

(statearr_51672_53136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51666 === (3))){
var inst_51662 = (state_51665[(2)]);
var inst_51663 = cljs.core.async.close_BANG_(out);
var state_51665__$1 = (function (){var statearr_51673 = state_51665;
(statearr_51673[(9)] = inst_51662);

return statearr_51673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51665__$1,inst_51663);
} else {
if((state_val_51666 === (2))){
var inst_51642 = (state_51665[(8)]);
var inst_51644 = (inst_51642 < n);
var state_51665__$1 = state_51665;
if(cljs.core.truth_(inst_51644)){
var statearr_51675_53137 = state_51665__$1;
(statearr_51675_53137[(1)] = (4));

} else {
var statearr_51677_53138 = state_51665__$1;
(statearr_51677_53138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51666 === (11))){
var inst_51642 = (state_51665[(8)]);
var inst_51652 = (state_51665[(2)]);
var inst_51653 = (inst_51642 + (1));
var inst_51642__$1 = inst_51653;
var state_51665__$1 = (function (){var statearr_51678 = state_51665;
(statearr_51678[(8)] = inst_51642__$1);

(statearr_51678[(10)] = inst_51652);

return statearr_51678;
})();
var statearr_51679_53142 = state_51665__$1;
(statearr_51679_53142[(2)] = null);

(statearr_51679_53142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51666 === (9))){
var state_51665__$1 = state_51665;
var statearr_51682_53144 = state_51665__$1;
(statearr_51682_53144[(2)] = null);

(statearr_51682_53144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51666 === (5))){
var state_51665__$1 = state_51665;
var statearr_51683_53145 = state_51665__$1;
(statearr_51683_53145[(2)] = null);

(statearr_51683_53145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51666 === (10))){
var inst_51657 = (state_51665[(2)]);
var state_51665__$1 = state_51665;
var statearr_51685_53146 = state_51665__$1;
(statearr_51685_53146[(2)] = inst_51657);

(statearr_51685_53146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51666 === (8))){
var inst_51647 = (state_51665[(7)]);
var state_51665__$1 = state_51665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51665__$1,(11),out,inst_51647);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_51687 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51687[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_51687[(1)] = (1));

return statearr_51687;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_51665){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_51665);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e51688){var ex__49509__auto__ = e51688;
var statearr_51689_53147 = state_51665;
(statearr_51689_53147[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_51665[(4)]))){
var statearr_51690_53148 = state_51665;
(statearr_51690_53148[(1)] = cljs.core.first((state_51665[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53149 = state_51665;
state_51665 = G__53149;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_51665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_51665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_51693 = f__49892__auto__();
(statearr_51693[(6)] = c__49891__auto___53126);

return statearr_51693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51695 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51695 = (function (f,ch,meta51696){
this.f = f;
this.ch = ch;
this.meta51696 = meta51696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51697,meta51696__$1){
var self__ = this;
var _51697__$1 = this;
return (new cljs.core.async.t_cljs$core$async51695(self__.f,self__.ch,meta51696__$1));
}));

(cljs.core.async.t_cljs$core$async51695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51697){
var self__ = this;
var _51697__$1 = this;
return self__.meta51696;
}));

(cljs.core.async.t_cljs$core$async51695.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51695.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51695.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51695.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51695.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51698 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51698 = (function (f,ch,meta51696,_,fn1,meta51699){
this.f = f;
this.ch = ch;
this.meta51696 = meta51696;
this._ = _;
this.fn1 = fn1;
this.meta51699 = meta51699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51700,meta51699__$1){
var self__ = this;
var _51700__$1 = this;
return (new cljs.core.async.t_cljs$core$async51698(self__.f,self__.ch,self__.meta51696,self__._,self__.fn1,meta51699__$1));
}));

(cljs.core.async.t_cljs$core$async51698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51700){
var self__ = this;
var _51700__$1 = this;
return self__.meta51699;
}));

(cljs.core.async.t_cljs$core$async51698.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51698.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51698.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51698.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51694_SHARP_){
var G__51701 = (((p1__51694_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51694_SHARP_) : self__.f.call(null,p1__51694_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51701) : f1.call(null,G__51701));
});
}));

(cljs.core.async.t_cljs$core$async51698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51696","meta51696",-913535166,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51695","cljs.core.async/t_cljs$core$async51695",461887489,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51699","meta51699",-1217960809,null)], null);
}));

(cljs.core.async.t_cljs$core$async51698.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51698");

(cljs.core.async.t_cljs$core$async51698.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async51698");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51698.
 */
cljs.core.async.__GT_t_cljs$core$async51698 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51698(f__$1,ch__$1,meta51696__$1,___$2,fn1__$1,meta51699){
return (new cljs.core.async.t_cljs$core$async51698(f__$1,ch__$1,meta51696__$1,___$2,fn1__$1,meta51699));
});

}

return (new cljs.core.async.t_cljs$core$async51698(self__.f,self__.ch,self__.meta51696,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51705 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51705) : self__.f.call(null,G__51705));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51695.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51695.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51696","meta51696",-913535166,null)], null);
}));

(cljs.core.async.t_cljs$core$async51695.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51695");

(cljs.core.async.t_cljs$core$async51695.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async51695");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51695.
 */
cljs.core.async.__GT_t_cljs$core$async51695 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51695(f__$1,ch__$1,meta51696){
return (new cljs.core.async.t_cljs$core$async51695(f__$1,ch__$1,meta51696));
});

}

return (new cljs.core.async.t_cljs$core$async51695(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51723 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51723 = (function (f,ch,meta51724){
this.f = f;
this.ch = ch;
this.meta51724 = meta51724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51725,meta51724__$1){
var self__ = this;
var _51725__$1 = this;
return (new cljs.core.async.t_cljs$core$async51723(self__.f,self__.ch,meta51724__$1));
}));

(cljs.core.async.t_cljs$core$async51723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51725){
var self__ = this;
var _51725__$1 = this;
return self__.meta51724;
}));

(cljs.core.async.t_cljs$core$async51723.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51723.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51723.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51723.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51723.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51723.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51724","meta51724",-872991833,null)], null);
}));

(cljs.core.async.t_cljs$core$async51723.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51723");

(cljs.core.async.t_cljs$core$async51723.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async51723");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51723.
 */
cljs.core.async.__GT_t_cljs$core$async51723 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51723(f__$1,ch__$1,meta51724){
return (new cljs.core.async.t_cljs$core$async51723(f__$1,ch__$1,meta51724));
});

}

return (new cljs.core.async.t_cljs$core$async51723(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51751 = (function (p,ch,meta51752){
this.p = p;
this.ch = ch;
this.meta51752 = meta51752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51753,meta51752__$1){
var self__ = this;
var _51753__$1 = this;
return (new cljs.core.async.t_cljs$core$async51751(self__.p,self__.ch,meta51752__$1));
}));

(cljs.core.async.t_cljs$core$async51751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51753){
var self__ = this;
var _51753__$1 = this;
return self__.meta51752;
}));

(cljs.core.async.t_cljs$core$async51751.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51751.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51751.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51751.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51751.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51751.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51751.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51752","meta51752",1304408010,null)], null);
}));

(cljs.core.async.t_cljs$core$async51751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51751");

(cljs.core.async.t_cljs$core$async51751.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async51751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51751.
 */
cljs.core.async.__GT_t_cljs$core$async51751 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51751(p__$1,ch__$1,meta51752){
return (new cljs.core.async.t_cljs$core$async51751(p__$1,ch__$1,meta51752));
});

}

return (new cljs.core.async.t_cljs$core$async51751(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__51755 = arguments.length;
switch (G__51755) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49891__auto___53172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_51776){
var state_val_51777 = (state_51776[(1)]);
if((state_val_51777 === (7))){
var inst_51772 = (state_51776[(2)]);
var state_51776__$1 = state_51776;
var statearr_51778_53173 = state_51776__$1;
(statearr_51778_53173[(2)] = inst_51772);

(statearr_51778_53173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51777 === (1))){
var state_51776__$1 = state_51776;
var statearr_51779_53174 = state_51776__$1;
(statearr_51779_53174[(2)] = null);

(statearr_51779_53174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51777 === (4))){
var inst_51758 = (state_51776[(7)]);
var inst_51758__$1 = (state_51776[(2)]);
var inst_51759 = (inst_51758__$1 == null);
var state_51776__$1 = (function (){var statearr_51780 = state_51776;
(statearr_51780[(7)] = inst_51758__$1);

return statearr_51780;
})();
if(cljs.core.truth_(inst_51759)){
var statearr_51781_53175 = state_51776__$1;
(statearr_51781_53175[(1)] = (5));

} else {
var statearr_51782_53176 = state_51776__$1;
(statearr_51782_53176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51777 === (6))){
var inst_51758 = (state_51776[(7)]);
var inst_51763 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51758) : p.call(null,inst_51758));
var state_51776__$1 = state_51776;
if(cljs.core.truth_(inst_51763)){
var statearr_51783_53179 = state_51776__$1;
(statearr_51783_53179[(1)] = (8));

} else {
var statearr_51784_53180 = state_51776__$1;
(statearr_51784_53180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51777 === (3))){
var inst_51774 = (state_51776[(2)]);
var state_51776__$1 = state_51776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51776__$1,inst_51774);
} else {
if((state_val_51777 === (2))){
var state_51776__$1 = state_51776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51776__$1,(4),ch);
} else {
if((state_val_51777 === (11))){
var inst_51766 = (state_51776[(2)]);
var state_51776__$1 = state_51776;
var statearr_51785_53182 = state_51776__$1;
(statearr_51785_53182[(2)] = inst_51766);

(statearr_51785_53182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51777 === (9))){
var state_51776__$1 = state_51776;
var statearr_51788_53188 = state_51776__$1;
(statearr_51788_53188[(2)] = null);

(statearr_51788_53188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51777 === (5))){
var inst_51761 = cljs.core.async.close_BANG_(out);
var state_51776__$1 = state_51776;
var statearr_51789_53189 = state_51776__$1;
(statearr_51789_53189[(2)] = inst_51761);

(statearr_51789_53189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51777 === (10))){
var inst_51769 = (state_51776[(2)]);
var state_51776__$1 = (function (){var statearr_51790 = state_51776;
(statearr_51790[(8)] = inst_51769);

return statearr_51790;
})();
var statearr_51791_53190 = state_51776__$1;
(statearr_51791_53190[(2)] = null);

(statearr_51791_53190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51777 === (8))){
var inst_51758 = (state_51776[(7)]);
var state_51776__$1 = state_51776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51776__$1,(11),out,inst_51758);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_51792 = [null,null,null,null,null,null,null,null,null];
(statearr_51792[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_51792[(1)] = (1));

return statearr_51792;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_51776){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_51776);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e51793){var ex__49509__auto__ = e51793;
var statearr_51794_53198 = state_51776;
(statearr_51794_53198[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_51776[(4)]))){
var statearr_51795_53199 = state_51776;
(statearr_51795_53199[(1)] = cljs.core.first((state_51776[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53202 = state_51776;
state_51776 = G__53202;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_51776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_51776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_51807 = f__49892__auto__();
(statearr_51807[(6)] = c__49891__auto___53172);

return statearr_51807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51809 = arguments.length;
switch (G__51809) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__49891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_51873){
var state_val_51874 = (state_51873[(1)]);
if((state_val_51874 === (7))){
var inst_51869 = (state_51873[(2)]);
var state_51873__$1 = state_51873;
var statearr_51875_53209 = state_51873__$1;
(statearr_51875_53209[(2)] = inst_51869);

(statearr_51875_53209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (20))){
var inst_51839 = (state_51873[(7)]);
var inst_51850 = (state_51873[(2)]);
var inst_51851 = cljs.core.next(inst_51839);
var inst_51825 = inst_51851;
var inst_51826 = null;
var inst_51827 = (0);
var inst_51828 = (0);
var state_51873__$1 = (function (){var statearr_51876 = state_51873;
(statearr_51876[(8)] = inst_51827);

(statearr_51876[(9)] = inst_51850);

(statearr_51876[(10)] = inst_51825);

(statearr_51876[(11)] = inst_51826);

(statearr_51876[(12)] = inst_51828);

return statearr_51876;
})();
var statearr_51877_53212 = state_51873__$1;
(statearr_51877_53212[(2)] = null);

(statearr_51877_53212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (1))){
var state_51873__$1 = state_51873;
var statearr_51878_53213 = state_51873__$1;
(statearr_51878_53213[(2)] = null);

(statearr_51878_53213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (4))){
var inst_51814 = (state_51873[(13)]);
var inst_51814__$1 = (state_51873[(2)]);
var inst_51815 = (inst_51814__$1 == null);
var state_51873__$1 = (function (){var statearr_51880 = state_51873;
(statearr_51880[(13)] = inst_51814__$1);

return statearr_51880;
})();
if(cljs.core.truth_(inst_51815)){
var statearr_51882_53216 = state_51873__$1;
(statearr_51882_53216[(1)] = (5));

} else {
var statearr_51883_53217 = state_51873__$1;
(statearr_51883_53217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (15))){
var state_51873__$1 = state_51873;
var statearr_51887_53218 = state_51873__$1;
(statearr_51887_53218[(2)] = null);

(statearr_51887_53218[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (21))){
var state_51873__$1 = state_51873;
var statearr_51888_53219 = state_51873__$1;
(statearr_51888_53219[(2)] = null);

(statearr_51888_53219[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (13))){
var inst_51827 = (state_51873[(8)]);
var inst_51825 = (state_51873[(10)]);
var inst_51826 = (state_51873[(11)]);
var inst_51828 = (state_51873[(12)]);
var inst_51835 = (state_51873[(2)]);
var inst_51836 = (inst_51828 + (1));
var tmp51884 = inst_51827;
var tmp51885 = inst_51825;
var tmp51886 = inst_51826;
var inst_51825__$1 = tmp51885;
var inst_51826__$1 = tmp51886;
var inst_51827__$1 = tmp51884;
var inst_51828__$1 = inst_51836;
var state_51873__$1 = (function (){var statearr_51890 = state_51873;
(statearr_51890[(8)] = inst_51827__$1);

(statearr_51890[(10)] = inst_51825__$1);

(statearr_51890[(11)] = inst_51826__$1);

(statearr_51890[(14)] = inst_51835);

(statearr_51890[(12)] = inst_51828__$1);

return statearr_51890;
})();
var statearr_51891_53220 = state_51873__$1;
(statearr_51891_53220[(2)] = null);

(statearr_51891_53220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (22))){
var state_51873__$1 = state_51873;
var statearr_51892_53221 = state_51873__$1;
(statearr_51892_53221[(2)] = null);

(statearr_51892_53221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (6))){
var inst_51814 = (state_51873[(13)]);
var inst_51823 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51814) : f.call(null,inst_51814));
var inst_51824 = cljs.core.seq(inst_51823);
var inst_51825 = inst_51824;
var inst_51826 = null;
var inst_51827 = (0);
var inst_51828 = (0);
var state_51873__$1 = (function (){var statearr_51893 = state_51873;
(statearr_51893[(8)] = inst_51827);

(statearr_51893[(10)] = inst_51825);

(statearr_51893[(11)] = inst_51826);

(statearr_51893[(12)] = inst_51828);

return statearr_51893;
})();
var statearr_51894_53222 = state_51873__$1;
(statearr_51894_53222[(2)] = null);

(statearr_51894_53222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (17))){
var inst_51839 = (state_51873[(7)]);
var inst_51843 = cljs.core.chunk_first(inst_51839);
var inst_51844 = cljs.core.chunk_rest(inst_51839);
var inst_51845 = cljs.core.count(inst_51843);
var inst_51825 = inst_51844;
var inst_51826 = inst_51843;
var inst_51827 = inst_51845;
var inst_51828 = (0);
var state_51873__$1 = (function (){var statearr_51904 = state_51873;
(statearr_51904[(8)] = inst_51827);

(statearr_51904[(10)] = inst_51825);

(statearr_51904[(11)] = inst_51826);

(statearr_51904[(12)] = inst_51828);

return statearr_51904;
})();
var statearr_51905_53225 = state_51873__$1;
(statearr_51905_53225[(2)] = null);

(statearr_51905_53225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (3))){
var inst_51871 = (state_51873[(2)]);
var state_51873__$1 = state_51873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51873__$1,inst_51871);
} else {
if((state_val_51874 === (12))){
var inst_51859 = (state_51873[(2)]);
var state_51873__$1 = state_51873;
var statearr_51907_53230 = state_51873__$1;
(statearr_51907_53230[(2)] = inst_51859);

(statearr_51907_53230[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (2))){
var state_51873__$1 = state_51873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51873__$1,(4),in$);
} else {
if((state_val_51874 === (23))){
var inst_51867 = (state_51873[(2)]);
var state_51873__$1 = state_51873;
var statearr_51908_53233 = state_51873__$1;
(statearr_51908_53233[(2)] = inst_51867);

(statearr_51908_53233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (19))){
var inst_51854 = (state_51873[(2)]);
var state_51873__$1 = state_51873;
var statearr_51909_53234 = state_51873__$1;
(statearr_51909_53234[(2)] = inst_51854);

(statearr_51909_53234[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (11))){
var inst_51825 = (state_51873[(10)]);
var inst_51839 = (state_51873[(7)]);
var inst_51839__$1 = cljs.core.seq(inst_51825);
var state_51873__$1 = (function (){var statearr_51910 = state_51873;
(statearr_51910[(7)] = inst_51839__$1);

return statearr_51910;
})();
if(inst_51839__$1){
var statearr_51911_53235 = state_51873__$1;
(statearr_51911_53235[(1)] = (14));

} else {
var statearr_51912_53236 = state_51873__$1;
(statearr_51912_53236[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (9))){
var inst_51861 = (state_51873[(2)]);
var inst_51862 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51873__$1 = (function (){var statearr_51913 = state_51873;
(statearr_51913[(15)] = inst_51861);

return statearr_51913;
})();
if(cljs.core.truth_(inst_51862)){
var statearr_51914_53239 = state_51873__$1;
(statearr_51914_53239[(1)] = (21));

} else {
var statearr_51915_53240 = state_51873__$1;
(statearr_51915_53240[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (5))){
var inst_51817 = cljs.core.async.close_BANG_(out);
var state_51873__$1 = state_51873;
var statearr_51916_53241 = state_51873__$1;
(statearr_51916_53241[(2)] = inst_51817);

(statearr_51916_53241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (14))){
var inst_51839 = (state_51873[(7)]);
var inst_51841 = cljs.core.chunked_seq_QMARK_(inst_51839);
var state_51873__$1 = state_51873;
if(inst_51841){
var statearr_51917_53246 = state_51873__$1;
(statearr_51917_53246[(1)] = (17));

} else {
var statearr_51918_53247 = state_51873__$1;
(statearr_51918_53247[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (16))){
var inst_51857 = (state_51873[(2)]);
var state_51873__$1 = state_51873;
var statearr_51921_53248 = state_51873__$1;
(statearr_51921_53248[(2)] = inst_51857);

(statearr_51921_53248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51874 === (10))){
var inst_51826 = (state_51873[(11)]);
var inst_51828 = (state_51873[(12)]);
var inst_51833 = cljs.core._nth(inst_51826,inst_51828);
var state_51873__$1 = state_51873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51873__$1,(13),out,inst_51833);
} else {
if((state_val_51874 === (18))){
var inst_51839 = (state_51873[(7)]);
var inst_51848 = cljs.core.first(inst_51839);
var state_51873__$1 = state_51873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51873__$1,(20),out,inst_51848);
} else {
if((state_val_51874 === (8))){
var inst_51827 = (state_51873[(8)]);
var inst_51828 = (state_51873[(12)]);
var inst_51830 = (inst_51828 < inst_51827);
var inst_51831 = inst_51830;
var state_51873__$1 = state_51873;
if(cljs.core.truth_(inst_51831)){
var statearr_51923_53249 = state_51873__$1;
(statearr_51923_53249[(1)] = (10));

} else {
var statearr_51924_53250 = state_51873__$1;
(statearr_51924_53250[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49506__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49506__auto____0 = (function (){
var statearr_51926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51926[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49506__auto__);

(statearr_51926[(1)] = (1));

return statearr_51926;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49506__auto____1 = (function (state_51873){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_51873);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e51927){var ex__49509__auto__ = e51927;
var statearr_51928_53254 = state_51873;
(statearr_51928_53254[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_51873[(4)]))){
var statearr_51929_53256 = state_51873;
(statearr_51929_53256[(1)] = cljs.core.first((state_51873[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53257 = state_51873;
state_51873 = G__53257;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49506__auto__ = function(state_51873){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49506__auto____1.call(this,state_51873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49506__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49506__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_51930 = f__49892__auto__();
(statearr_51930[(6)] = c__49891__auto__);

return statearr_51930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));

return c__49891__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51939 = arguments.length;
switch (G__51939) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__51952 = arguments.length;
switch (G__51952) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__51965 = arguments.length;
switch (G__51965) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49891__auto___53261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_52000){
var state_val_52001 = (state_52000[(1)]);
if((state_val_52001 === (7))){
var inst_51995 = (state_52000[(2)]);
var state_52000__$1 = state_52000;
var statearr_52003_53262 = state_52000__$1;
(statearr_52003_53262[(2)] = inst_51995);

(statearr_52003_53262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52001 === (1))){
var inst_51973 = null;
var state_52000__$1 = (function (){var statearr_52004 = state_52000;
(statearr_52004[(7)] = inst_51973);

return statearr_52004;
})();
var statearr_52005_53264 = state_52000__$1;
(statearr_52005_53264[(2)] = null);

(statearr_52005_53264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52001 === (4))){
var inst_51977 = (state_52000[(8)]);
var inst_51977__$1 = (state_52000[(2)]);
var inst_51978 = (inst_51977__$1 == null);
var inst_51979 = cljs.core.not(inst_51978);
var state_52000__$1 = (function (){var statearr_52006 = state_52000;
(statearr_52006[(8)] = inst_51977__$1);

return statearr_52006;
})();
if(inst_51979){
var statearr_52007_53267 = state_52000__$1;
(statearr_52007_53267[(1)] = (5));

} else {
var statearr_52008_53268 = state_52000__$1;
(statearr_52008_53268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52001 === (6))){
var state_52000__$1 = state_52000;
var statearr_52010_53269 = state_52000__$1;
(statearr_52010_53269[(2)] = null);

(statearr_52010_53269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52001 === (3))){
var inst_51997 = (state_52000[(2)]);
var inst_51998 = cljs.core.async.close_BANG_(out);
var state_52000__$1 = (function (){var statearr_52011 = state_52000;
(statearr_52011[(9)] = inst_51997);

return statearr_52011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52000__$1,inst_51998);
} else {
if((state_val_52001 === (2))){
var state_52000__$1 = state_52000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52000__$1,(4),ch);
} else {
if((state_val_52001 === (11))){
var inst_51977 = (state_52000[(8)]);
var inst_51986 = (state_52000[(2)]);
var inst_51973 = inst_51977;
var state_52000__$1 = (function (){var statearr_52019 = state_52000;
(statearr_52019[(7)] = inst_51973);

(statearr_52019[(10)] = inst_51986);

return statearr_52019;
})();
var statearr_52020_53271 = state_52000__$1;
(statearr_52020_53271[(2)] = null);

(statearr_52020_53271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52001 === (9))){
var inst_51977 = (state_52000[(8)]);
var state_52000__$1 = state_52000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52000__$1,(11),out,inst_51977);
} else {
if((state_val_52001 === (5))){
var inst_51973 = (state_52000[(7)]);
var inst_51977 = (state_52000[(8)]);
var inst_51981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51977,inst_51973);
var state_52000__$1 = state_52000;
if(inst_51981){
var statearr_52023_53275 = state_52000__$1;
(statearr_52023_53275[(1)] = (8));

} else {
var statearr_52024_53276 = state_52000__$1;
(statearr_52024_53276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52001 === (10))){
var inst_51992 = (state_52000[(2)]);
var state_52000__$1 = state_52000;
var statearr_52025_53279 = state_52000__$1;
(statearr_52025_53279[(2)] = inst_51992);

(statearr_52025_53279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52001 === (8))){
var inst_51973 = (state_52000[(7)]);
var tmp52022 = inst_51973;
var inst_51973__$1 = tmp52022;
var state_52000__$1 = (function (){var statearr_52026 = state_52000;
(statearr_52026[(7)] = inst_51973__$1);

return statearr_52026;
})();
var statearr_52027_53282 = state_52000__$1;
(statearr_52027_53282[(2)] = null);

(statearr_52027_53282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_52030 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52030[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_52030[(1)] = (1));

return statearr_52030;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_52000){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_52000);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e52031){var ex__49509__auto__ = e52031;
var statearr_52032_53286 = state_52000;
(statearr_52032_53286[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_52000[(4)]))){
var statearr_52033_53287 = state_52000;
(statearr_52033_53287[(1)] = cljs.core.first((state_52000[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53288 = state_52000;
state_52000 = G__53288;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_52000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_52000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_52036 = f__49892__auto__();
(statearr_52036[(6)] = c__49891__auto___53261);

return statearr_52036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52038 = arguments.length;
switch (G__52038) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49891__auto___53292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_52078){
var state_val_52079 = (state_52078[(1)]);
if((state_val_52079 === (7))){
var inst_52074 = (state_52078[(2)]);
var state_52078__$1 = state_52078;
var statearr_52080_53293 = state_52078__$1;
(statearr_52080_53293[(2)] = inst_52074);

(statearr_52080_53293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52079 === (1))){
var inst_52041 = (new Array(n));
var inst_52042 = inst_52041;
var inst_52043 = (0);
var state_52078__$1 = (function (){var statearr_52081 = state_52078;
(statearr_52081[(7)] = inst_52043);

(statearr_52081[(8)] = inst_52042);

return statearr_52081;
})();
var statearr_52086_53294 = state_52078__$1;
(statearr_52086_53294[(2)] = null);

(statearr_52086_53294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52079 === (4))){
var inst_52046 = (state_52078[(9)]);
var inst_52046__$1 = (state_52078[(2)]);
var inst_52047 = (inst_52046__$1 == null);
var inst_52048 = cljs.core.not(inst_52047);
var state_52078__$1 = (function (){var statearr_52087 = state_52078;
(statearr_52087[(9)] = inst_52046__$1);

return statearr_52087;
})();
if(inst_52048){
var statearr_52088_53295 = state_52078__$1;
(statearr_52088_53295[(1)] = (5));

} else {
var statearr_52089_53296 = state_52078__$1;
(statearr_52089_53296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52079 === (15))){
var inst_52068 = (state_52078[(2)]);
var state_52078__$1 = state_52078;
var statearr_52091_53297 = state_52078__$1;
(statearr_52091_53297[(2)] = inst_52068);

(statearr_52091_53297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52079 === (13))){
var state_52078__$1 = state_52078;
var statearr_52092_53298 = state_52078__$1;
(statearr_52092_53298[(2)] = null);

(statearr_52092_53298[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52079 === (6))){
var inst_52043 = (state_52078[(7)]);
var inst_52064 = (inst_52043 > (0));
var state_52078__$1 = state_52078;
if(cljs.core.truth_(inst_52064)){
var statearr_52093_53300 = state_52078__$1;
(statearr_52093_53300[(1)] = (12));

} else {
var statearr_52094_53301 = state_52078__$1;
(statearr_52094_53301[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52079 === (3))){
var inst_52076 = (state_52078[(2)]);
var state_52078__$1 = state_52078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52078__$1,inst_52076);
} else {
if((state_val_52079 === (12))){
var inst_52042 = (state_52078[(8)]);
var inst_52066 = cljs.core.vec(inst_52042);
var state_52078__$1 = state_52078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52078__$1,(15),out,inst_52066);
} else {
if((state_val_52079 === (2))){
var state_52078__$1 = state_52078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52078__$1,(4),ch);
} else {
if((state_val_52079 === (11))){
var inst_52058 = (state_52078[(2)]);
var inst_52059 = (new Array(n));
var inst_52042 = inst_52059;
var inst_52043 = (0);
var state_52078__$1 = (function (){var statearr_52101 = state_52078;
(statearr_52101[(7)] = inst_52043);

(statearr_52101[(8)] = inst_52042);

(statearr_52101[(10)] = inst_52058);

return statearr_52101;
})();
var statearr_52102_53306 = state_52078__$1;
(statearr_52102_53306[(2)] = null);

(statearr_52102_53306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52079 === (9))){
var inst_52042 = (state_52078[(8)]);
var inst_52056 = cljs.core.vec(inst_52042);
var state_52078__$1 = state_52078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52078__$1,(11),out,inst_52056);
} else {
if((state_val_52079 === (5))){
var inst_52043 = (state_52078[(7)]);
var inst_52046 = (state_52078[(9)]);
var inst_52042 = (state_52078[(8)]);
var inst_52051 = (state_52078[(11)]);
var inst_52050 = (inst_52042[inst_52043] = inst_52046);
var inst_52051__$1 = (inst_52043 + (1));
var inst_52052 = (inst_52051__$1 < n);
var state_52078__$1 = (function (){var statearr_52106 = state_52078;
(statearr_52106[(12)] = inst_52050);

(statearr_52106[(11)] = inst_52051__$1);

return statearr_52106;
})();
if(cljs.core.truth_(inst_52052)){
var statearr_52107_53309 = state_52078__$1;
(statearr_52107_53309[(1)] = (8));

} else {
var statearr_52108_53310 = state_52078__$1;
(statearr_52108_53310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52079 === (14))){
var inst_52071 = (state_52078[(2)]);
var inst_52072 = cljs.core.async.close_BANG_(out);
var state_52078__$1 = (function (){var statearr_52110 = state_52078;
(statearr_52110[(13)] = inst_52071);

return statearr_52110;
})();
var statearr_52111_53312 = state_52078__$1;
(statearr_52111_53312[(2)] = inst_52072);

(statearr_52111_53312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52079 === (10))){
var inst_52062 = (state_52078[(2)]);
var state_52078__$1 = state_52078;
var statearr_52116_53313 = state_52078__$1;
(statearr_52116_53313[(2)] = inst_52062);

(statearr_52116_53313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52079 === (8))){
var inst_52042 = (state_52078[(8)]);
var inst_52051 = (state_52078[(11)]);
var tmp52109 = inst_52042;
var inst_52042__$1 = tmp52109;
var inst_52043 = inst_52051;
var state_52078__$1 = (function (){var statearr_52117 = state_52078;
(statearr_52117[(7)] = inst_52043);

(statearr_52117[(8)] = inst_52042__$1);

return statearr_52117;
})();
var statearr_52118_53314 = state_52078__$1;
(statearr_52118_53314[(2)] = null);

(statearr_52118_53314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_52119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52119[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_52119[(1)] = (1));

return statearr_52119;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_52078){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_52078);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e52120){var ex__49509__auto__ = e52120;
var statearr_52121_53315 = state_52078;
(statearr_52121_53315[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_52078[(4)]))){
var statearr_52128_53316 = state_52078;
(statearr_52128_53316[(1)] = cljs.core.first((state_52078[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53317 = state_52078;
state_52078 = G__53317;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_52078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_52078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_52129 = f__49892__auto__();
(statearr_52129[(6)] = c__49891__auto___53292);

return statearr_52129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52138 = arguments.length;
switch (G__52138) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49891__auto___53319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49892__auto__ = (function (){var switch__49505__auto__ = (function (state_52194){
var state_val_52195 = (state_52194[(1)]);
if((state_val_52195 === (7))){
var inst_52185 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
var statearr_52196_53321 = state_52194__$1;
(statearr_52196_53321[(2)] = inst_52185);

(statearr_52196_53321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (1))){
var inst_52140 = [];
var inst_52141 = inst_52140;
var inst_52142 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52194__$1 = (function (){var statearr_52197 = state_52194;
(statearr_52197[(7)] = inst_52141);

(statearr_52197[(8)] = inst_52142);

return statearr_52197;
})();
var statearr_52198_53323 = state_52194__$1;
(statearr_52198_53323[(2)] = null);

(statearr_52198_53323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (4))){
var inst_52145 = (state_52194[(9)]);
var inst_52145__$1 = (state_52194[(2)]);
var inst_52146 = (inst_52145__$1 == null);
var inst_52147 = cljs.core.not(inst_52146);
var state_52194__$1 = (function (){var statearr_52200 = state_52194;
(statearr_52200[(9)] = inst_52145__$1);

return statearr_52200;
})();
if(inst_52147){
var statearr_52201_53324 = state_52194__$1;
(statearr_52201_53324[(1)] = (5));

} else {
var statearr_52202_53325 = state_52194__$1;
(statearr_52202_53325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (15))){
var inst_52141 = (state_52194[(7)]);
var inst_52177 = cljs.core.vec(inst_52141);
var state_52194__$1 = state_52194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52194__$1,(18),out,inst_52177);
} else {
if((state_val_52195 === (13))){
var inst_52167 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
var statearr_52204_53328 = state_52194__$1;
(statearr_52204_53328[(2)] = inst_52167);

(statearr_52204_53328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (6))){
var inst_52141 = (state_52194[(7)]);
var inst_52174 = inst_52141.length;
var inst_52175 = (inst_52174 > (0));
var state_52194__$1 = state_52194;
if(cljs.core.truth_(inst_52175)){
var statearr_52210_53329 = state_52194__$1;
(statearr_52210_53329[(1)] = (15));

} else {
var statearr_52211_53330 = state_52194__$1;
(statearr_52211_53330[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (17))){
var inst_52182 = (state_52194[(2)]);
var inst_52183 = cljs.core.async.close_BANG_(out);
var state_52194__$1 = (function (){var statearr_52212 = state_52194;
(statearr_52212[(10)] = inst_52182);

return statearr_52212;
})();
var statearr_52213_53333 = state_52194__$1;
(statearr_52213_53333[(2)] = inst_52183);

(statearr_52213_53333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (3))){
var inst_52187 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52194__$1,inst_52187);
} else {
if((state_val_52195 === (12))){
var inst_52141 = (state_52194[(7)]);
var inst_52160 = cljs.core.vec(inst_52141);
var state_52194__$1 = state_52194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52194__$1,(14),out,inst_52160);
} else {
if((state_val_52195 === (2))){
var state_52194__$1 = state_52194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52194__$1,(4),ch);
} else {
if((state_val_52195 === (11))){
var inst_52145 = (state_52194[(9)]);
var inst_52141 = (state_52194[(7)]);
var inst_52149 = (state_52194[(11)]);
var inst_52157 = inst_52141.push(inst_52145);
var tmp52214 = inst_52141;
var inst_52141__$1 = tmp52214;
var inst_52142 = inst_52149;
var state_52194__$1 = (function (){var statearr_52215 = state_52194;
(statearr_52215[(12)] = inst_52157);

(statearr_52215[(7)] = inst_52141__$1);

(statearr_52215[(8)] = inst_52142);

return statearr_52215;
})();
var statearr_52216_53336 = state_52194__$1;
(statearr_52216_53336[(2)] = null);

(statearr_52216_53336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (9))){
var inst_52142 = (state_52194[(8)]);
var inst_52153 = cljs.core.keyword_identical_QMARK_(inst_52142,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_52194__$1 = state_52194;
var statearr_52221_53337 = state_52194__$1;
(statearr_52221_53337[(2)] = inst_52153);

(statearr_52221_53337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (5))){
var inst_52150 = (state_52194[(13)]);
var inst_52145 = (state_52194[(9)]);
var inst_52142 = (state_52194[(8)]);
var inst_52149 = (state_52194[(11)]);
var inst_52149__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52145) : f.call(null,inst_52145));
var inst_52150__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52149__$1,inst_52142);
var state_52194__$1 = (function (){var statearr_52222 = state_52194;
(statearr_52222[(13)] = inst_52150__$1);

(statearr_52222[(11)] = inst_52149__$1);

return statearr_52222;
})();
if(inst_52150__$1){
var statearr_52223_53341 = state_52194__$1;
(statearr_52223_53341[(1)] = (8));

} else {
var statearr_52224_53343 = state_52194__$1;
(statearr_52224_53343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (14))){
var inst_52145 = (state_52194[(9)]);
var inst_52149 = (state_52194[(11)]);
var inst_52162 = (state_52194[(2)]);
var inst_52163 = [];
var inst_52164 = inst_52163.push(inst_52145);
var inst_52141 = inst_52163;
var inst_52142 = inst_52149;
var state_52194__$1 = (function (){var statearr_52225 = state_52194;
(statearr_52225[(14)] = inst_52164);

(statearr_52225[(7)] = inst_52141);

(statearr_52225[(15)] = inst_52162);

(statearr_52225[(8)] = inst_52142);

return statearr_52225;
})();
var statearr_52230_53352 = state_52194__$1;
(statearr_52230_53352[(2)] = null);

(statearr_52230_53352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (16))){
var state_52194__$1 = state_52194;
var statearr_52234_53353 = state_52194__$1;
(statearr_52234_53353[(2)] = null);

(statearr_52234_53353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (10))){
var inst_52155 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
if(cljs.core.truth_(inst_52155)){
var statearr_52238_53354 = state_52194__$1;
(statearr_52238_53354[(1)] = (11));

} else {
var statearr_52239_53355 = state_52194__$1;
(statearr_52239_53355[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (18))){
var inst_52179 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
var statearr_52240_53356 = state_52194__$1;
(statearr_52240_53356[(2)] = inst_52179);

(statearr_52240_53356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (8))){
var inst_52150 = (state_52194[(13)]);
var state_52194__$1 = state_52194;
var statearr_52241_53357 = state_52194__$1;
(statearr_52241_53357[(2)] = inst_52150);

(statearr_52241_53357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49506__auto__ = null;
var cljs$core$async$state_machine__49506__auto____0 = (function (){
var statearr_52242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52242[(0)] = cljs$core$async$state_machine__49506__auto__);

(statearr_52242[(1)] = (1));

return statearr_52242;
});
var cljs$core$async$state_machine__49506__auto____1 = (function (state_52194){
while(true){
var ret_value__49507__auto__ = (function (){try{while(true){
var result__49508__auto__ = switch__49505__auto__(state_52194);
if(cljs.core.keyword_identical_QMARK_(result__49508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49508__auto__;
}
break;
}
}catch (e52243){var ex__49509__auto__ = e52243;
var statearr_52244_53365 = state_52194;
(statearr_52244_53365[(2)] = ex__49509__auto__);


if(cljs.core.seq((state_52194[(4)]))){
var statearr_52245_53366 = state_52194;
(statearr_52245_53366[(1)] = cljs.core.first((state_52194[(4)])));

} else {
throw ex__49509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53367 = state_52194;
state_52194 = G__53367;
continue;
} else {
return ret_value__49507__auto__;
}
break;
}
});
cljs$core$async$state_machine__49506__auto__ = function(state_52194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49506__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49506__auto____1.call(this,state_52194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49506__auto____0;
cljs$core$async$state_machine__49506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49506__auto____1;
return cljs$core$async$state_machine__49506__auto__;
})()
})();
var state__49893__auto__ = (function (){var statearr_52249 = f__49892__auto__();
(statearr_52249[(6)] = c__49891__auto___53319);

return statearr_52249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49893__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
