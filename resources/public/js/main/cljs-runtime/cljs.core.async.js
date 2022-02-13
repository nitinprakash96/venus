goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__53245 = arguments.length;
switch (G__53245) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53246 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53246 = (function (f,blockable,meta53247){
this.f = f;
this.blockable = blockable;
this.meta53247 = meta53247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53248,meta53247__$1){
var self__ = this;
var _53248__$1 = this;
return (new cljs.core.async.t_cljs$core$async53246(self__.f,self__.blockable,meta53247__$1));
}));

(cljs.core.async.t_cljs$core$async53246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53248){
var self__ = this;
var _53248__$1 = this;
return self__.meta53247;
}));

(cljs.core.async.t_cljs$core$async53246.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53246.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53246.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async53246.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async53246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta53247","meta53247",-1054629267,null)], null);
}));

(cljs.core.async.t_cljs$core$async53246.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53246");

(cljs.core.async.t_cljs$core$async53246.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async53246");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53246.
 */
cljs.core.async.__GT_t_cljs$core$async53246 = (function cljs$core$async$__GT_t_cljs$core$async53246(f__$1,blockable__$1,meta53247){
return (new cljs.core.async.t_cljs$core$async53246(f__$1,blockable__$1,meta53247));
});

}

return (new cljs.core.async.t_cljs$core$async53246(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__53262 = arguments.length;
switch (G__53262) {
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
var G__53265 = arguments.length;
switch (G__53265) {
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
var G__53269 = arguments.length;
switch (G__53269) {
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
var val_56295 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56295) : fn1.call(null,val_56295));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56295) : fn1.call(null,val_56295));
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
var G__53273 = arguments.length;
switch (G__53273) {
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
var n__4695__auto___56306 = n;
var x_56307 = (0);
while(true){
if((x_56307 < n__4695__auto___56306)){
(a[x_56307] = x_56307);

var G__56310 = (x_56307 + (1));
x_56307 = G__56310;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53274 = (function (flag,meta53275){
this.flag = flag;
this.meta53275 = meta53275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53276,meta53275__$1){
var self__ = this;
var _53276__$1 = this;
return (new cljs.core.async.t_cljs$core$async53274(self__.flag,meta53275__$1));
}));

(cljs.core.async.t_cljs$core$async53274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53276){
var self__ = this;
var _53276__$1 = this;
return self__.meta53275;
}));

(cljs.core.async.t_cljs$core$async53274.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async53274.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async53274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta53275","meta53275",-2015913965,null)], null);
}));

(cljs.core.async.t_cljs$core$async53274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53274");

(cljs.core.async.t_cljs$core$async53274.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async53274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53274.
 */
cljs.core.async.__GT_t_cljs$core$async53274 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async53274(flag__$1,meta53275){
return (new cljs.core.async.t_cljs$core$async53274(flag__$1,meta53275));
});

}

return (new cljs.core.async.t_cljs$core$async53274(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53277 = (function (flag,cb,meta53278){
this.flag = flag;
this.cb = cb;
this.meta53278 = meta53278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53279,meta53278__$1){
var self__ = this;
var _53279__$1 = this;
return (new cljs.core.async.t_cljs$core$async53277(self__.flag,self__.cb,meta53278__$1));
}));

(cljs.core.async.t_cljs$core$async53277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53279){
var self__ = this;
var _53279__$1 = this;
return self__.meta53278;
}));

(cljs.core.async.t_cljs$core$async53277.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async53277.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async53277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta53278","meta53278",-101076583,null)], null);
}));

(cljs.core.async.t_cljs$core$async53277.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53277");

(cljs.core.async.t_cljs$core$async53277.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async53277");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53277.
 */
cljs.core.async.__GT_t_cljs$core$async53277 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async53277(flag__$1,cb__$1,meta53278){
return (new cljs.core.async.t_cljs$core$async53277(flag__$1,cb__$1,meta53278));
});

}

return (new cljs.core.async.t_cljs$core$async53277(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__53286_SHARP_){
var G__53290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53286_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__53290) : fret.call(null,G__53290));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__53287_SHARP_){
var G__53291 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53287_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__53291) : fret.call(null,G__53291));
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
var G__56321 = (i + (1));
i = G__56321;
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
var len__4818__auto___56324 = arguments.length;
var i__4819__auto___56325 = (0);
while(true){
if((i__4819__auto___56325 < len__4818__auto___56324)){
args__4824__auto__.push((arguments[i__4819__auto___56325]));

var G__56326 = (i__4819__auto___56325 + (1));
i__4819__auto___56325 = G__56326;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__53294){
var map__53296 = p__53294;
var map__53296__$1 = cljs.core.__destructure_map(map__53296);
var opts = map__53296__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq53292){
var G__53293 = cljs.core.first(seq53292);
var seq53292__$1 = cljs.core.next(seq53292);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53293,seq53292__$1);
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
var G__53310 = arguments.length;
switch (G__53310) {
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
var c__53174__auto___56331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_53361){
var state_val_53363 = (state_53361[(1)]);
if((state_val_53363 === (7))){
var inst_53356 = (state_53361[(2)]);
var state_53361__$1 = state_53361;
var statearr_53370_56332 = state_53361__$1;
(statearr_53370_56332[(2)] = inst_53356);

(statearr_53370_56332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53363 === (1))){
var state_53361__$1 = state_53361;
var statearr_53371_56333 = state_53361__$1;
(statearr_53371_56333[(2)] = null);

(statearr_53371_56333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53363 === (4))){
var inst_53331 = (state_53361[(7)]);
var inst_53331__$1 = (state_53361[(2)]);
var inst_53336 = (inst_53331__$1 == null);
var state_53361__$1 = (function (){var statearr_53373 = state_53361;
(statearr_53373[(7)] = inst_53331__$1);

return statearr_53373;
})();
if(cljs.core.truth_(inst_53336)){
var statearr_53377_56336 = state_53361__$1;
(statearr_53377_56336[(1)] = (5));

} else {
var statearr_53378_56337 = state_53361__$1;
(statearr_53378_56337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53363 === (13))){
var state_53361__$1 = state_53361;
var statearr_53382_56338 = state_53361__$1;
(statearr_53382_56338[(2)] = null);

(statearr_53382_56338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53363 === (6))){
var inst_53331 = (state_53361[(7)]);
var state_53361__$1 = state_53361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53361__$1,(11),to,inst_53331);
} else {
if((state_val_53363 === (3))){
var inst_53358 = (state_53361[(2)]);
var state_53361__$1 = state_53361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53361__$1,inst_53358);
} else {
if((state_val_53363 === (12))){
var state_53361__$1 = state_53361;
var statearr_53385_56341 = state_53361__$1;
(statearr_53385_56341[(2)] = null);

(statearr_53385_56341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53363 === (2))){
var state_53361__$1 = state_53361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53361__$1,(4),from);
} else {
if((state_val_53363 === (11))){
var inst_53347 = (state_53361[(2)]);
var state_53361__$1 = state_53361;
if(cljs.core.truth_(inst_53347)){
var statearr_53386_56344 = state_53361__$1;
(statearr_53386_56344[(1)] = (12));

} else {
var statearr_53387_56345 = state_53361__$1;
(statearr_53387_56345[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53363 === (9))){
var state_53361__$1 = state_53361;
var statearr_53388_56347 = state_53361__$1;
(statearr_53388_56347[(2)] = null);

(statearr_53388_56347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53363 === (5))){
var state_53361__$1 = state_53361;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53391_56348 = state_53361__$1;
(statearr_53391_56348[(1)] = (8));

} else {
var statearr_53394_56350 = state_53361__$1;
(statearr_53394_56350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53363 === (14))){
var inst_53354 = (state_53361[(2)]);
var state_53361__$1 = state_53361;
var statearr_53397_56351 = state_53361__$1;
(statearr_53397_56351[(2)] = inst_53354);

(statearr_53397_56351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53363 === (10))){
var inst_53344 = (state_53361[(2)]);
var state_53361__$1 = state_53361;
var statearr_53398_56352 = state_53361__$1;
(statearr_53398_56352[(2)] = inst_53344);

(statearr_53398_56352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53363 === (8))){
var inst_53340 = cljs.core.async.close_BANG_(to);
var state_53361__$1 = state_53361;
var statearr_53399_56353 = state_53361__$1;
(statearr_53399_56353[(2)] = inst_53340);

(statearr_53399_56353[(1)] = (10));


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
var cljs$core$async$state_machine__53101__auto__ = null;
var cljs$core$async$state_machine__53101__auto____0 = (function (){
var statearr_53406 = [null,null,null,null,null,null,null,null];
(statearr_53406[(0)] = cljs$core$async$state_machine__53101__auto__);

(statearr_53406[(1)] = (1));

return statearr_53406;
});
var cljs$core$async$state_machine__53101__auto____1 = (function (state_53361){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_53361);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e53407){var ex__53104__auto__ = e53407;
var statearr_53408_56354 = state_53361;
(statearr_53408_56354[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_53361[(4)]))){
var statearr_53411_56355 = state_53361;
(statearr_53411_56355[(1)] = cljs.core.first((state_53361[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56356 = state_53361;
state_53361 = G__56356;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$state_machine__53101__auto__ = function(state_53361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53101__auto____1.call(this,state_53361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53101__auto____0;
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53101__auto____1;
return cljs$core$async$state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_53412 = f__53175__auto__();
(statearr_53412[(6)] = c__53174__auto___56331);

return statearr_53412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
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
var process = (function (p__53427){
var vec__53428 = p__53427;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53428,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53428,(1),null);
var job = vec__53428;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__53174__auto___56359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_53438){
var state_val_53439 = (state_53438[(1)]);
if((state_val_53439 === (1))){
var state_53438__$1 = state_53438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53438__$1,(2),res,v);
} else {
if((state_val_53439 === (2))){
var inst_53435 = (state_53438[(2)]);
var inst_53436 = cljs.core.async.close_BANG_(res);
var state_53438__$1 = (function (){var statearr_53443 = state_53438;
(statearr_53443[(7)] = inst_53435);

return statearr_53443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53438__$1,inst_53436);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0 = (function (){
var statearr_53445 = [null,null,null,null,null,null,null,null];
(statearr_53445[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__);

(statearr_53445[(1)] = (1));

return statearr_53445;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1 = (function (state_53438){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_53438);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e53448){var ex__53104__auto__ = e53448;
var statearr_53449_56363 = state_53438;
(statearr_53449_56363[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_53438[(4)]))){
var statearr_53450_56365 = state_53438;
(statearr_53450_56365[(1)] = cljs.core.first((state_53438[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56366 = state_53438;
state_53438 = G__56366;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__ = function(state_53438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1.call(this,state_53438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_53451 = f__53175__auto__();
(statearr_53451[(6)] = c__53174__auto___56359);

return statearr_53451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__53452){
var vec__53453 = p__53452;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53453,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53453,(1),null);
var job = vec__53453;
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
var n__4695__auto___56369 = n;
var __56370 = (0);
while(true){
if((__56370 < n__4695__auto___56369)){
var G__53458_56371 = type;
var G__53458_56372__$1 = (((G__53458_56371 instanceof cljs.core.Keyword))?G__53458_56371.fqn:null);
switch (G__53458_56372__$1) {
case "compute":
var c__53174__auto___56374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56370,c__53174__auto___56374,G__53458_56371,G__53458_56372__$1,n__4695__auto___56369,jobs,results,process,async){
return (function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = ((function (__56370,c__53174__auto___56374,G__53458_56371,G__53458_56372__$1,n__4695__auto___56369,jobs,results,process,async){
return (function (state_53471){
var state_val_53472 = (state_53471[(1)]);
if((state_val_53472 === (1))){
var state_53471__$1 = state_53471;
var statearr_53473_56375 = state_53471__$1;
(statearr_53473_56375[(2)] = null);

(statearr_53473_56375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53472 === (2))){
var state_53471__$1 = state_53471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53471__$1,(4),jobs);
} else {
if((state_val_53472 === (3))){
var inst_53469 = (state_53471[(2)]);
var state_53471__$1 = state_53471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53471__$1,inst_53469);
} else {
if((state_val_53472 === (4))){
var inst_53461 = (state_53471[(2)]);
var inst_53462 = process(inst_53461);
var state_53471__$1 = state_53471;
if(cljs.core.truth_(inst_53462)){
var statearr_53476_56378 = state_53471__$1;
(statearr_53476_56378[(1)] = (5));

} else {
var statearr_53477_56379 = state_53471__$1;
(statearr_53477_56379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53472 === (5))){
var state_53471__$1 = state_53471;
var statearr_53478_56380 = state_53471__$1;
(statearr_53478_56380[(2)] = null);

(statearr_53478_56380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53472 === (6))){
var state_53471__$1 = state_53471;
var statearr_53479_56381 = state_53471__$1;
(statearr_53479_56381[(2)] = null);

(statearr_53479_56381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53472 === (7))){
var inst_53467 = (state_53471[(2)]);
var state_53471__$1 = state_53471;
var statearr_53480_56384 = state_53471__$1;
(statearr_53480_56384[(2)] = inst_53467);

(statearr_53480_56384[(1)] = (3));


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
});})(__56370,c__53174__auto___56374,G__53458_56371,G__53458_56372__$1,n__4695__auto___56369,jobs,results,process,async))
;
return ((function (__56370,switch__53100__auto__,c__53174__auto___56374,G__53458_56371,G__53458_56372__$1,n__4695__auto___56369,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0 = (function (){
var statearr_53481 = [null,null,null,null,null,null,null];
(statearr_53481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__);

(statearr_53481[(1)] = (1));

return statearr_53481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1 = (function (state_53471){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_53471);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e53484){var ex__53104__auto__ = e53484;
var statearr_53485_56387 = state_53471;
(statearr_53485_56387[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_53471[(4)]))){
var statearr_53486_56388 = state_53471;
(statearr_53486_56388[(1)] = cljs.core.first((state_53471[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56390 = state_53471;
state_53471 = G__56390;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__ = function(state_53471){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1.call(this,state_53471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__;
})()
;})(__56370,switch__53100__auto__,c__53174__auto___56374,G__53458_56371,G__53458_56372__$1,n__4695__auto___56369,jobs,results,process,async))
})();
var state__53176__auto__ = (function (){var statearr_53487 = f__53175__auto__();
(statearr_53487[(6)] = c__53174__auto___56374);

return statearr_53487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
});})(__56370,c__53174__auto___56374,G__53458_56371,G__53458_56372__$1,n__4695__auto___56369,jobs,results,process,async))
);


break;
case "async":
var c__53174__auto___56392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56370,c__53174__auto___56392,G__53458_56371,G__53458_56372__$1,n__4695__auto___56369,jobs,results,process,async){
return (function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = ((function (__56370,c__53174__auto___56392,G__53458_56371,G__53458_56372__$1,n__4695__auto___56369,jobs,results,process,async){
return (function (state_53501){
var state_val_53502 = (state_53501[(1)]);
if((state_val_53502 === (1))){
var state_53501__$1 = state_53501;
var statearr_53507_56393 = state_53501__$1;
(statearr_53507_56393[(2)] = null);

(statearr_53507_56393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53502 === (2))){
var state_53501__$1 = state_53501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53501__$1,(4),jobs);
} else {
if((state_val_53502 === (3))){
var inst_53499 = (state_53501[(2)]);
var state_53501__$1 = state_53501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53501__$1,inst_53499);
} else {
if((state_val_53502 === (4))){
var inst_53491 = (state_53501[(2)]);
var inst_53492 = async(inst_53491);
var state_53501__$1 = state_53501;
if(cljs.core.truth_(inst_53492)){
var statearr_53508_56394 = state_53501__$1;
(statearr_53508_56394[(1)] = (5));

} else {
var statearr_53509_56395 = state_53501__$1;
(statearr_53509_56395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53502 === (5))){
var state_53501__$1 = state_53501;
var statearr_53510_56396 = state_53501__$1;
(statearr_53510_56396[(2)] = null);

(statearr_53510_56396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53502 === (6))){
var state_53501__$1 = state_53501;
var statearr_53511_56397 = state_53501__$1;
(statearr_53511_56397[(2)] = null);

(statearr_53511_56397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53502 === (7))){
var inst_53497 = (state_53501[(2)]);
var state_53501__$1 = state_53501;
var statearr_53515_56398 = state_53501__$1;
(statearr_53515_56398[(2)] = inst_53497);

(statearr_53515_56398[(1)] = (3));


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
});})(__56370,c__53174__auto___56392,G__53458_56371,G__53458_56372__$1,n__4695__auto___56369,jobs,results,process,async))
;
return ((function (__56370,switch__53100__auto__,c__53174__auto___56392,G__53458_56371,G__53458_56372__$1,n__4695__auto___56369,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0 = (function (){
var statearr_53516 = [null,null,null,null,null,null,null];
(statearr_53516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__);

(statearr_53516[(1)] = (1));

return statearr_53516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1 = (function (state_53501){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_53501);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e53517){var ex__53104__auto__ = e53517;
var statearr_53519_56401 = state_53501;
(statearr_53519_56401[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_53501[(4)]))){
var statearr_53523_56404 = state_53501;
(statearr_53523_56404[(1)] = cljs.core.first((state_53501[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56405 = state_53501;
state_53501 = G__56405;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__ = function(state_53501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1.call(this,state_53501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__;
})()
;})(__56370,switch__53100__auto__,c__53174__auto___56392,G__53458_56371,G__53458_56372__$1,n__4695__auto___56369,jobs,results,process,async))
})();
var state__53176__auto__ = (function (){var statearr_53528 = f__53175__auto__();
(statearr_53528[(6)] = c__53174__auto___56392);

return statearr_53528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
});})(__56370,c__53174__auto___56392,G__53458_56371,G__53458_56372__$1,n__4695__auto___56369,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53458_56372__$1)].join('')));

}

var G__56409 = (__56370 + (1));
__56370 = G__56409;
continue;
} else {
}
break;
}

var c__53174__auto___56410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_53561){
var state_val_53562 = (state_53561[(1)]);
if((state_val_53562 === (7))){
var inst_53556 = (state_53561[(2)]);
var state_53561__$1 = state_53561;
var statearr_53566_56412 = state_53561__$1;
(statearr_53566_56412[(2)] = inst_53556);

(statearr_53566_56412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53562 === (1))){
var state_53561__$1 = state_53561;
var statearr_53567_56413 = state_53561__$1;
(statearr_53567_56413[(2)] = null);

(statearr_53567_56413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53562 === (4))){
var inst_53541 = (state_53561[(7)]);
var inst_53541__$1 = (state_53561[(2)]);
var inst_53542 = (inst_53541__$1 == null);
var state_53561__$1 = (function (){var statearr_53571 = state_53561;
(statearr_53571[(7)] = inst_53541__$1);

return statearr_53571;
})();
if(cljs.core.truth_(inst_53542)){
var statearr_53575_56414 = state_53561__$1;
(statearr_53575_56414[(1)] = (5));

} else {
var statearr_53576_56415 = state_53561__$1;
(statearr_53576_56415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53562 === (6))){
var inst_53541 = (state_53561[(7)]);
var inst_53546 = (state_53561[(8)]);
var inst_53546__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_53547 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53548 = [inst_53541,inst_53546__$1];
var inst_53549 = (new cljs.core.PersistentVector(null,2,(5),inst_53547,inst_53548,null));
var state_53561__$1 = (function (){var statearr_53578 = state_53561;
(statearr_53578[(8)] = inst_53546__$1);

return statearr_53578;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53561__$1,(8),jobs,inst_53549);
} else {
if((state_val_53562 === (3))){
var inst_53558 = (state_53561[(2)]);
var state_53561__$1 = state_53561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53561__$1,inst_53558);
} else {
if((state_val_53562 === (2))){
var state_53561__$1 = state_53561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53561__$1,(4),from);
} else {
if((state_val_53562 === (9))){
var inst_53553 = (state_53561[(2)]);
var state_53561__$1 = (function (){var statearr_53582 = state_53561;
(statearr_53582[(9)] = inst_53553);

return statearr_53582;
})();
var statearr_53583_56420 = state_53561__$1;
(statearr_53583_56420[(2)] = null);

(statearr_53583_56420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53562 === (5))){
var inst_53544 = cljs.core.async.close_BANG_(jobs);
var state_53561__$1 = state_53561;
var statearr_53585_56421 = state_53561__$1;
(statearr_53585_56421[(2)] = inst_53544);

(statearr_53585_56421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53562 === (8))){
var inst_53546 = (state_53561[(8)]);
var inst_53551 = (state_53561[(2)]);
var state_53561__$1 = (function (){var statearr_53587 = state_53561;
(statearr_53587[(10)] = inst_53551);

return statearr_53587;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53561__$1,(9),results,inst_53546);
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
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0 = (function (){
var statearr_53588 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__);

(statearr_53588[(1)] = (1));

return statearr_53588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1 = (function (state_53561){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_53561);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e53589){var ex__53104__auto__ = e53589;
var statearr_53590_56425 = state_53561;
(statearr_53590_56425[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_53561[(4)]))){
var statearr_53592_56428 = state_53561;
(statearr_53592_56428[(1)] = cljs.core.first((state_53561[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56430 = state_53561;
state_53561 = G__56430;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__ = function(state_53561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1.call(this,state_53561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_53596 = f__53175__auto__();
(statearr_53596[(6)] = c__53174__auto___56410);

return statearr_53596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));


var c__53174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_53634){
var state_val_53635 = (state_53634[(1)]);
if((state_val_53635 === (7))){
var inst_53630 = (state_53634[(2)]);
var state_53634__$1 = state_53634;
var statearr_53637_56431 = state_53634__$1;
(statearr_53637_56431[(2)] = inst_53630);

(statearr_53637_56431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (20))){
var state_53634__$1 = state_53634;
var statearr_53639_56433 = state_53634__$1;
(statearr_53639_56433[(2)] = null);

(statearr_53639_56433[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (1))){
var state_53634__$1 = state_53634;
var statearr_53640_56434 = state_53634__$1;
(statearr_53640_56434[(2)] = null);

(statearr_53640_56434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (4))){
var inst_53599 = (state_53634[(7)]);
var inst_53599__$1 = (state_53634[(2)]);
var inst_53600 = (inst_53599__$1 == null);
var state_53634__$1 = (function (){var statearr_53641 = state_53634;
(statearr_53641[(7)] = inst_53599__$1);

return statearr_53641;
})();
if(cljs.core.truth_(inst_53600)){
var statearr_53643_56436 = state_53634__$1;
(statearr_53643_56436[(1)] = (5));

} else {
var statearr_53647_56437 = state_53634__$1;
(statearr_53647_56437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (15))){
var inst_53612 = (state_53634[(8)]);
var state_53634__$1 = state_53634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53634__$1,(18),to,inst_53612);
} else {
if((state_val_53635 === (21))){
var inst_53625 = (state_53634[(2)]);
var state_53634__$1 = state_53634;
var statearr_53648_56438 = state_53634__$1;
(statearr_53648_56438[(2)] = inst_53625);

(statearr_53648_56438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (13))){
var inst_53627 = (state_53634[(2)]);
var state_53634__$1 = (function (){var statearr_53649 = state_53634;
(statearr_53649[(9)] = inst_53627);

return statearr_53649;
})();
var statearr_53650_56439 = state_53634__$1;
(statearr_53650_56439[(2)] = null);

(statearr_53650_56439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (6))){
var inst_53599 = (state_53634[(7)]);
var state_53634__$1 = state_53634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53634__$1,(11),inst_53599);
} else {
if((state_val_53635 === (17))){
var inst_53620 = (state_53634[(2)]);
var state_53634__$1 = state_53634;
if(cljs.core.truth_(inst_53620)){
var statearr_53651_56442 = state_53634__$1;
(statearr_53651_56442[(1)] = (19));

} else {
var statearr_53652_56443 = state_53634__$1;
(statearr_53652_56443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (3))){
var inst_53632 = (state_53634[(2)]);
var state_53634__$1 = state_53634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53634__$1,inst_53632);
} else {
if((state_val_53635 === (12))){
var inst_53609 = (state_53634[(10)]);
var state_53634__$1 = state_53634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53634__$1,(14),inst_53609);
} else {
if((state_val_53635 === (2))){
var state_53634__$1 = state_53634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53634__$1,(4),results);
} else {
if((state_val_53635 === (19))){
var state_53634__$1 = state_53634;
var statearr_53653_56444 = state_53634__$1;
(statearr_53653_56444[(2)] = null);

(statearr_53653_56444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (11))){
var inst_53609 = (state_53634[(2)]);
var state_53634__$1 = (function (){var statearr_53654 = state_53634;
(statearr_53654[(10)] = inst_53609);

return statearr_53654;
})();
var statearr_53655_56445 = state_53634__$1;
(statearr_53655_56445[(2)] = null);

(statearr_53655_56445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (9))){
var state_53634__$1 = state_53634;
var statearr_53656_56447 = state_53634__$1;
(statearr_53656_56447[(2)] = null);

(statearr_53656_56447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (5))){
var state_53634__$1 = state_53634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53660_56449 = state_53634__$1;
(statearr_53660_56449[(1)] = (8));

} else {
var statearr_53661_56451 = state_53634__$1;
(statearr_53661_56451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (14))){
var inst_53612 = (state_53634[(8)]);
var inst_53614 = (state_53634[(11)]);
var inst_53612__$1 = (state_53634[(2)]);
var inst_53613 = (inst_53612__$1 == null);
var inst_53614__$1 = cljs.core.not(inst_53613);
var state_53634__$1 = (function (){var statearr_53662 = state_53634;
(statearr_53662[(8)] = inst_53612__$1);

(statearr_53662[(11)] = inst_53614__$1);

return statearr_53662;
})();
if(inst_53614__$1){
var statearr_53663_56453 = state_53634__$1;
(statearr_53663_56453[(1)] = (15));

} else {
var statearr_53664_56454 = state_53634__$1;
(statearr_53664_56454[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (16))){
var inst_53614 = (state_53634[(11)]);
var state_53634__$1 = state_53634;
var statearr_53665_56455 = state_53634__$1;
(statearr_53665_56455[(2)] = inst_53614);

(statearr_53665_56455[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (10))){
var inst_53606 = (state_53634[(2)]);
var state_53634__$1 = state_53634;
var statearr_53666_56456 = state_53634__$1;
(statearr_53666_56456[(2)] = inst_53606);

(statearr_53666_56456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (18))){
var inst_53617 = (state_53634[(2)]);
var state_53634__$1 = state_53634;
var statearr_53667_56460 = state_53634__$1;
(statearr_53667_56460[(2)] = inst_53617);

(statearr_53667_56460[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53635 === (8))){
var inst_53603 = cljs.core.async.close_BANG_(to);
var state_53634__$1 = state_53634;
var statearr_53668_56465 = state_53634__$1;
(statearr_53668_56465[(2)] = inst_53603);

(statearr_53668_56465[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0 = (function (){
var statearr_53669 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__);

(statearr_53669[(1)] = (1));

return statearr_53669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1 = (function (state_53634){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_53634);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e53670){var ex__53104__auto__ = e53670;
var statearr_53674_56467 = state_53634;
(statearr_53674_56467[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_53634[(4)]))){
var statearr_53675_56468 = state_53634;
(statearr_53675_56468[(1)] = cljs.core.first((state_53634[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56469 = state_53634;
state_53634 = G__56469;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__ = function(state_53634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1.call(this,state_53634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_53676 = f__53175__auto__();
(statearr_53676[(6)] = c__53174__auto__);

return statearr_53676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));

return c__53174__auto__;
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
var G__53680 = arguments.length;
switch (G__53680) {
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
var G__53685 = arguments.length;
switch (G__53685) {
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
var G__53697 = arguments.length;
switch (G__53697) {
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
var c__53174__auto___56480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_53730){
var state_val_53731 = (state_53730[(1)]);
if((state_val_53731 === (7))){
var inst_53726 = (state_53730[(2)]);
var state_53730__$1 = state_53730;
var statearr_53734_56483 = state_53730__$1;
(statearr_53734_56483[(2)] = inst_53726);

(statearr_53734_56483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53731 === (1))){
var state_53730__$1 = state_53730;
var statearr_53735_56484 = state_53730__$1;
(statearr_53735_56484[(2)] = null);

(statearr_53735_56484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53731 === (4))){
var inst_53707 = (state_53730[(7)]);
var inst_53707__$1 = (state_53730[(2)]);
var inst_53708 = (inst_53707__$1 == null);
var state_53730__$1 = (function (){var statearr_53736 = state_53730;
(statearr_53736[(7)] = inst_53707__$1);

return statearr_53736;
})();
if(cljs.core.truth_(inst_53708)){
var statearr_53737_56485 = state_53730__$1;
(statearr_53737_56485[(1)] = (5));

} else {
var statearr_53738_56486 = state_53730__$1;
(statearr_53738_56486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53731 === (13))){
var state_53730__$1 = state_53730;
var statearr_53739_56489 = state_53730__$1;
(statearr_53739_56489[(2)] = null);

(statearr_53739_56489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53731 === (6))){
var inst_53707 = (state_53730[(7)]);
var inst_53713 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53707) : p.call(null,inst_53707));
var state_53730__$1 = state_53730;
if(cljs.core.truth_(inst_53713)){
var statearr_53743_56491 = state_53730__$1;
(statearr_53743_56491[(1)] = (9));

} else {
var statearr_53744_56493 = state_53730__$1;
(statearr_53744_56493[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53731 === (3))){
var inst_53728 = (state_53730[(2)]);
var state_53730__$1 = state_53730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53730__$1,inst_53728);
} else {
if((state_val_53731 === (12))){
var state_53730__$1 = state_53730;
var statearr_53745_56494 = state_53730__$1;
(statearr_53745_56494[(2)] = null);

(statearr_53745_56494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53731 === (2))){
var state_53730__$1 = state_53730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53730__$1,(4),ch);
} else {
if((state_val_53731 === (11))){
var inst_53707 = (state_53730[(7)]);
var inst_53717 = (state_53730[(2)]);
var state_53730__$1 = state_53730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53730__$1,(8),inst_53717,inst_53707);
} else {
if((state_val_53731 === (9))){
var state_53730__$1 = state_53730;
var statearr_53746_56498 = state_53730__$1;
(statearr_53746_56498[(2)] = tc);

(statearr_53746_56498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53731 === (5))){
var inst_53710 = cljs.core.async.close_BANG_(tc);
var inst_53711 = cljs.core.async.close_BANG_(fc);
var state_53730__$1 = (function (){var statearr_53747 = state_53730;
(statearr_53747[(8)] = inst_53710);

return statearr_53747;
})();
var statearr_53748_56504 = state_53730__$1;
(statearr_53748_56504[(2)] = inst_53711);

(statearr_53748_56504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53731 === (14))){
var inst_53724 = (state_53730[(2)]);
var state_53730__$1 = state_53730;
var statearr_53749_56505 = state_53730__$1;
(statearr_53749_56505[(2)] = inst_53724);

(statearr_53749_56505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53731 === (10))){
var state_53730__$1 = state_53730;
var statearr_53754_56506 = state_53730__$1;
(statearr_53754_56506[(2)] = fc);

(statearr_53754_56506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53731 === (8))){
var inst_53719 = (state_53730[(2)]);
var state_53730__$1 = state_53730;
if(cljs.core.truth_(inst_53719)){
var statearr_53755_56507 = state_53730__$1;
(statearr_53755_56507[(1)] = (12));

} else {
var statearr_53756_56508 = state_53730__$1;
(statearr_53756_56508[(1)] = (13));

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
var cljs$core$async$state_machine__53101__auto__ = null;
var cljs$core$async$state_machine__53101__auto____0 = (function (){
var statearr_53759 = [null,null,null,null,null,null,null,null,null];
(statearr_53759[(0)] = cljs$core$async$state_machine__53101__auto__);

(statearr_53759[(1)] = (1));

return statearr_53759;
});
var cljs$core$async$state_machine__53101__auto____1 = (function (state_53730){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_53730);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e53760){var ex__53104__auto__ = e53760;
var statearr_53761_56511 = state_53730;
(statearr_53761_56511[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_53730[(4)]))){
var statearr_53762_56513 = state_53730;
(statearr_53762_56513[(1)] = cljs.core.first((state_53730[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56515 = state_53730;
state_53730 = G__56515;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$state_machine__53101__auto__ = function(state_53730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53101__auto____1.call(this,state_53730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53101__auto____0;
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53101__auto____1;
return cljs$core$async$state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_53763 = f__53175__auto__();
(statearr_53763[(6)] = c__53174__auto___56480);

return statearr_53763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
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
var c__53174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_53792){
var state_val_53793 = (state_53792[(1)]);
if((state_val_53793 === (7))){
var inst_53788 = (state_53792[(2)]);
var state_53792__$1 = state_53792;
var statearr_53797_56517 = state_53792__$1;
(statearr_53797_56517[(2)] = inst_53788);

(statearr_53797_56517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53793 === (1))){
var inst_53767 = init;
var inst_53768 = inst_53767;
var state_53792__$1 = (function (){var statearr_53802 = state_53792;
(statearr_53802[(7)] = inst_53768);

return statearr_53802;
})();
var statearr_53803_56518 = state_53792__$1;
(statearr_53803_56518[(2)] = null);

(statearr_53803_56518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53793 === (4))){
var inst_53775 = (state_53792[(8)]);
var inst_53775__$1 = (state_53792[(2)]);
var inst_53776 = (inst_53775__$1 == null);
var state_53792__$1 = (function (){var statearr_53804 = state_53792;
(statearr_53804[(8)] = inst_53775__$1);

return statearr_53804;
})();
if(cljs.core.truth_(inst_53776)){
var statearr_53805_56520 = state_53792__$1;
(statearr_53805_56520[(1)] = (5));

} else {
var statearr_53806_56521 = state_53792__$1;
(statearr_53806_56521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53793 === (6))){
var inst_53775 = (state_53792[(8)]);
var inst_53768 = (state_53792[(7)]);
var inst_53779 = (state_53792[(9)]);
var inst_53779__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_53768,inst_53775) : f.call(null,inst_53768,inst_53775));
var inst_53780 = cljs.core.reduced_QMARK_(inst_53779__$1);
var state_53792__$1 = (function (){var statearr_53807 = state_53792;
(statearr_53807[(9)] = inst_53779__$1);

return statearr_53807;
})();
if(inst_53780){
var statearr_53808_56523 = state_53792__$1;
(statearr_53808_56523[(1)] = (8));

} else {
var statearr_53809_56524 = state_53792__$1;
(statearr_53809_56524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53793 === (3))){
var inst_53790 = (state_53792[(2)]);
var state_53792__$1 = state_53792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53792__$1,inst_53790);
} else {
if((state_val_53793 === (2))){
var state_53792__$1 = state_53792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53792__$1,(4),ch);
} else {
if((state_val_53793 === (9))){
var inst_53779 = (state_53792[(9)]);
var inst_53768 = inst_53779;
var state_53792__$1 = (function (){var statearr_53810 = state_53792;
(statearr_53810[(7)] = inst_53768);

return statearr_53810;
})();
var statearr_53811_56528 = state_53792__$1;
(statearr_53811_56528[(2)] = null);

(statearr_53811_56528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53793 === (5))){
var inst_53768 = (state_53792[(7)]);
var state_53792__$1 = state_53792;
var statearr_53812_56529 = state_53792__$1;
(statearr_53812_56529[(2)] = inst_53768);

(statearr_53812_56529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53793 === (10))){
var inst_53786 = (state_53792[(2)]);
var state_53792__$1 = state_53792;
var statearr_53813_56530 = state_53792__$1;
(statearr_53813_56530[(2)] = inst_53786);

(statearr_53813_56530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53793 === (8))){
var inst_53779 = (state_53792[(9)]);
var inst_53782 = cljs.core.deref(inst_53779);
var state_53792__$1 = state_53792;
var statearr_53814_56533 = state_53792__$1;
(statearr_53814_56533[(2)] = inst_53782);

(statearr_53814_56533[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__53101__auto__ = null;
var cljs$core$async$reduce_$_state_machine__53101__auto____0 = (function (){
var statearr_53816 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53816[(0)] = cljs$core$async$reduce_$_state_machine__53101__auto__);

(statearr_53816[(1)] = (1));

return statearr_53816;
});
var cljs$core$async$reduce_$_state_machine__53101__auto____1 = (function (state_53792){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_53792);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e53817){var ex__53104__auto__ = e53817;
var statearr_53818_56535 = state_53792;
(statearr_53818_56535[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_53792[(4)]))){
var statearr_53823_56538 = state_53792;
(statearr_53823_56538[(1)] = cljs.core.first((state_53792[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56539 = state_53792;
state_53792 = G__56539;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__53101__auto__ = function(state_53792){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__53101__auto____1.call(this,state_53792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__53101__auto____0;
cljs$core$async$reduce_$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__53101__auto____1;
return cljs$core$async$reduce_$_state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_53829 = f__53175__auto__();
(statearr_53829[(6)] = c__53174__auto__);

return statearr_53829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));

return c__53174__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__53174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_53835){
var state_val_53836 = (state_53835[(1)]);
if((state_val_53836 === (1))){
var inst_53830 = cljs.core.async.reduce(f__$1,init,ch);
var state_53835__$1 = state_53835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53835__$1,(2),inst_53830);
} else {
if((state_val_53836 === (2))){
var inst_53832 = (state_53835[(2)]);
var inst_53833 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_53832) : f__$1.call(null,inst_53832));
var state_53835__$1 = state_53835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53835__$1,inst_53833);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__53101__auto__ = null;
var cljs$core$async$transduce_$_state_machine__53101__auto____0 = (function (){
var statearr_53839 = [null,null,null,null,null,null,null];
(statearr_53839[(0)] = cljs$core$async$transduce_$_state_machine__53101__auto__);

(statearr_53839[(1)] = (1));

return statearr_53839;
});
var cljs$core$async$transduce_$_state_machine__53101__auto____1 = (function (state_53835){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_53835);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e53843){var ex__53104__auto__ = e53843;
var statearr_53844_56554 = state_53835;
(statearr_53844_56554[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_53835[(4)]))){
var statearr_53846_56555 = state_53835;
(statearr_53846_56555[(1)] = cljs.core.first((state_53835[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56556 = state_53835;
state_53835 = G__56556;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__53101__auto__ = function(state_53835){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__53101__auto____1.call(this,state_53835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__53101__auto____0;
cljs$core$async$transduce_$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__53101__auto____1;
return cljs$core$async$transduce_$_state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_53848 = f__53175__auto__();
(statearr_53848[(6)] = c__53174__auto__);

return statearr_53848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));

return c__53174__auto__;
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
var G__53856 = arguments.length;
switch (G__53856) {
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
var c__53174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_53885){
var state_val_53886 = (state_53885[(1)]);
if((state_val_53886 === (7))){
var inst_53865 = (state_53885[(2)]);
var state_53885__$1 = state_53885;
var statearr_53889_56561 = state_53885__$1;
(statearr_53889_56561[(2)] = inst_53865);

(statearr_53889_56561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (1))){
var inst_53858 = cljs.core.seq(coll);
var inst_53859 = inst_53858;
var state_53885__$1 = (function (){var statearr_53893 = state_53885;
(statearr_53893[(7)] = inst_53859);

return statearr_53893;
})();
var statearr_53894_56563 = state_53885__$1;
(statearr_53894_56563[(2)] = null);

(statearr_53894_56563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (4))){
var inst_53859 = (state_53885[(7)]);
var inst_53863 = cljs.core.first(inst_53859);
var state_53885__$1 = state_53885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53885__$1,(7),ch,inst_53863);
} else {
if((state_val_53886 === (13))){
var inst_53877 = (state_53885[(2)]);
var state_53885__$1 = state_53885;
var statearr_53896_56569 = state_53885__$1;
(statearr_53896_56569[(2)] = inst_53877);

(statearr_53896_56569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (6))){
var inst_53868 = (state_53885[(2)]);
var state_53885__$1 = state_53885;
if(cljs.core.truth_(inst_53868)){
var statearr_53897_56570 = state_53885__$1;
(statearr_53897_56570[(1)] = (8));

} else {
var statearr_53900_56571 = state_53885__$1;
(statearr_53900_56571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (3))){
var inst_53881 = (state_53885[(2)]);
var state_53885__$1 = state_53885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53885__$1,inst_53881);
} else {
if((state_val_53886 === (12))){
var state_53885__$1 = state_53885;
var statearr_53903_56572 = state_53885__$1;
(statearr_53903_56572[(2)] = null);

(statearr_53903_56572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (2))){
var inst_53859 = (state_53885[(7)]);
var state_53885__$1 = state_53885;
if(cljs.core.truth_(inst_53859)){
var statearr_53906_56576 = state_53885__$1;
(statearr_53906_56576[(1)] = (4));

} else {
var statearr_53907_56577 = state_53885__$1;
(statearr_53907_56577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (11))){
var inst_53874 = cljs.core.async.close_BANG_(ch);
var state_53885__$1 = state_53885;
var statearr_53910_56579 = state_53885__$1;
(statearr_53910_56579[(2)] = inst_53874);

(statearr_53910_56579[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (9))){
var state_53885__$1 = state_53885;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53911_56582 = state_53885__$1;
(statearr_53911_56582[(1)] = (11));

} else {
var statearr_53912_56583 = state_53885__$1;
(statearr_53912_56583[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (5))){
var inst_53859 = (state_53885[(7)]);
var state_53885__$1 = state_53885;
var statearr_53913_56584 = state_53885__$1;
(statearr_53913_56584[(2)] = inst_53859);

(statearr_53913_56584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (10))){
var inst_53879 = (state_53885[(2)]);
var state_53885__$1 = state_53885;
var statearr_53914_56585 = state_53885__$1;
(statearr_53914_56585[(2)] = inst_53879);

(statearr_53914_56585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53886 === (8))){
var inst_53859 = (state_53885[(7)]);
var inst_53870 = cljs.core.next(inst_53859);
var inst_53859__$1 = inst_53870;
var state_53885__$1 = (function (){var statearr_53915 = state_53885;
(statearr_53915[(7)] = inst_53859__$1);

return statearr_53915;
})();
var statearr_53916_56586 = state_53885__$1;
(statearr_53916_56586[(2)] = null);

(statearr_53916_56586[(1)] = (2));


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
var cljs$core$async$state_machine__53101__auto__ = null;
var cljs$core$async$state_machine__53101__auto____0 = (function (){
var statearr_53919 = [null,null,null,null,null,null,null,null];
(statearr_53919[(0)] = cljs$core$async$state_machine__53101__auto__);

(statearr_53919[(1)] = (1));

return statearr_53919;
});
var cljs$core$async$state_machine__53101__auto____1 = (function (state_53885){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_53885);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e53920){var ex__53104__auto__ = e53920;
var statearr_53923_56594 = state_53885;
(statearr_53923_56594[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_53885[(4)]))){
var statearr_53924_56598 = state_53885;
(statearr_53924_56598[(1)] = cljs.core.first((state_53885[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56599 = state_53885;
state_53885 = G__56599;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$state_machine__53101__auto__ = function(state_53885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53101__auto____1.call(this,state_53885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53101__auto____0;
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53101__auto____1;
return cljs$core$async$state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_53928 = f__53175__auto__();
(statearr_53928[(6)] = c__53174__auto__);

return statearr_53928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));

return c__53174__auto__;
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
var G__53931 = arguments.length;
switch (G__53931) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_56602 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_56602(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_56608 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_56608(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_56616 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_56616(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_56619 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_56619(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54001 = (function (ch,cs,meta54002){
this.ch = ch;
this.cs = cs;
this.meta54002 = meta54002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54003,meta54002__$1){
var self__ = this;
var _54003__$1 = this;
return (new cljs.core.async.t_cljs$core$async54001(self__.ch,self__.cs,meta54002__$1));
}));

(cljs.core.async.t_cljs$core$async54001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54003){
var self__ = this;
var _54003__$1 = this;
return self__.meta54002;
}));

(cljs.core.async.t_cljs$core$async54001.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54001.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54001.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54001.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async54001.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async54001.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async54001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54002","meta54002",115470881,null)], null);
}));

(cljs.core.async.t_cljs$core$async54001.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54001");

(cljs.core.async.t_cljs$core$async54001.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async54001");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54001.
 */
cljs.core.async.__GT_t_cljs$core$async54001 = (function cljs$core$async$mult_$___GT_t_cljs$core$async54001(ch__$1,cs__$1,meta54002){
return (new cljs.core.async.t_cljs$core$async54001(ch__$1,cs__$1,meta54002));
});

}

return (new cljs.core.async.t_cljs$core$async54001(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__53174__auto___56628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_54165){
var state_val_54166 = (state_54165[(1)]);
if((state_val_54166 === (7))){
var inst_54161 = (state_54165[(2)]);
var state_54165__$1 = state_54165;
var statearr_54174_56629 = state_54165__$1;
(statearr_54174_56629[(2)] = inst_54161);

(statearr_54174_56629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (20))){
var inst_54055 = (state_54165[(7)]);
var inst_54070 = cljs.core.first(inst_54055);
var inst_54071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54070,(0),null);
var inst_54072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54070,(1),null);
var state_54165__$1 = (function (){var statearr_54177 = state_54165;
(statearr_54177[(8)] = inst_54071);

return statearr_54177;
})();
if(cljs.core.truth_(inst_54072)){
var statearr_54178_56630 = state_54165__$1;
(statearr_54178_56630[(1)] = (22));

} else {
var statearr_54180_56634 = state_54165__$1;
(statearr_54180_56634[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (27))){
var inst_54113 = (state_54165[(9)]);
var inst_54017 = (state_54165[(10)]);
var inst_54107 = (state_54165[(11)]);
var inst_54105 = (state_54165[(12)]);
var inst_54113__$1 = cljs.core._nth(inst_54105,inst_54107);
var inst_54114 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54113__$1,inst_54017,done);
var state_54165__$1 = (function (){var statearr_54186 = state_54165;
(statearr_54186[(9)] = inst_54113__$1);

return statearr_54186;
})();
if(cljs.core.truth_(inst_54114)){
var statearr_54188_56635 = state_54165__$1;
(statearr_54188_56635[(1)] = (30));

} else {
var statearr_54192_56637 = state_54165__$1;
(statearr_54192_56637[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (1))){
var state_54165__$1 = state_54165;
var statearr_54194_56641 = state_54165__$1;
(statearr_54194_56641[(2)] = null);

(statearr_54194_56641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (24))){
var inst_54055 = (state_54165[(7)]);
var inst_54079 = (state_54165[(2)]);
var inst_54080 = cljs.core.next(inst_54055);
var inst_54028 = inst_54080;
var inst_54029 = null;
var inst_54030 = (0);
var inst_54031 = (0);
var state_54165__$1 = (function (){var statearr_54196 = state_54165;
(statearr_54196[(13)] = inst_54028);

(statearr_54196[(14)] = inst_54030);

(statearr_54196[(15)] = inst_54029);

(statearr_54196[(16)] = inst_54031);

(statearr_54196[(17)] = inst_54079);

return statearr_54196;
})();
var statearr_54201_56642 = state_54165__$1;
(statearr_54201_56642[(2)] = null);

(statearr_54201_56642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (39))){
var state_54165__$1 = state_54165;
var statearr_54209_56643 = state_54165__$1;
(statearr_54209_56643[(2)] = null);

(statearr_54209_56643[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (4))){
var inst_54017 = (state_54165[(10)]);
var inst_54017__$1 = (state_54165[(2)]);
var inst_54018 = (inst_54017__$1 == null);
var state_54165__$1 = (function (){var statearr_54214 = state_54165;
(statearr_54214[(10)] = inst_54017__$1);

return statearr_54214;
})();
if(cljs.core.truth_(inst_54018)){
var statearr_54215_56644 = state_54165__$1;
(statearr_54215_56644[(1)] = (5));

} else {
var statearr_54216_56645 = state_54165__$1;
(statearr_54216_56645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (15))){
var inst_54028 = (state_54165[(13)]);
var inst_54030 = (state_54165[(14)]);
var inst_54029 = (state_54165[(15)]);
var inst_54031 = (state_54165[(16)]);
var inst_54048 = (state_54165[(2)]);
var inst_54049 = (inst_54031 + (1));
var tmp54204 = inst_54028;
var tmp54205 = inst_54030;
var tmp54206 = inst_54029;
var inst_54028__$1 = tmp54204;
var inst_54029__$1 = tmp54206;
var inst_54030__$1 = tmp54205;
var inst_54031__$1 = inst_54049;
var state_54165__$1 = (function (){var statearr_54219 = state_54165;
(statearr_54219[(13)] = inst_54028__$1);

(statearr_54219[(14)] = inst_54030__$1);

(statearr_54219[(18)] = inst_54048);

(statearr_54219[(15)] = inst_54029__$1);

(statearr_54219[(16)] = inst_54031__$1);

return statearr_54219;
})();
var statearr_54225_56650 = state_54165__$1;
(statearr_54225_56650[(2)] = null);

(statearr_54225_56650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (21))){
var inst_54084 = (state_54165[(2)]);
var state_54165__$1 = state_54165;
var statearr_54230_56651 = state_54165__$1;
(statearr_54230_56651[(2)] = inst_54084);

(statearr_54230_56651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (31))){
var inst_54113 = (state_54165[(9)]);
var inst_54117 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54113);
var state_54165__$1 = state_54165;
var statearr_54231_56652 = state_54165__$1;
(statearr_54231_56652[(2)] = inst_54117);

(statearr_54231_56652[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (32))){
var inst_54106 = (state_54165[(19)]);
var inst_54104 = (state_54165[(20)]);
var inst_54107 = (state_54165[(11)]);
var inst_54105 = (state_54165[(12)]);
var inst_54119 = (state_54165[(2)]);
var inst_54120 = (inst_54107 + (1));
var tmp54226 = inst_54106;
var tmp54227 = inst_54104;
var tmp54228 = inst_54105;
var inst_54104__$1 = tmp54227;
var inst_54105__$1 = tmp54228;
var inst_54106__$1 = tmp54226;
var inst_54107__$1 = inst_54120;
var state_54165__$1 = (function (){var statearr_54243 = state_54165;
(statearr_54243[(19)] = inst_54106__$1);

(statearr_54243[(20)] = inst_54104__$1);

(statearr_54243[(11)] = inst_54107__$1);

(statearr_54243[(12)] = inst_54105__$1);

(statearr_54243[(21)] = inst_54119);

return statearr_54243;
})();
var statearr_54248_56653 = state_54165__$1;
(statearr_54248_56653[(2)] = null);

(statearr_54248_56653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (40))){
var inst_54133 = (state_54165[(22)]);
var inst_54137 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54133);
var state_54165__$1 = state_54165;
var statearr_54252_56656 = state_54165__$1;
(statearr_54252_56656[(2)] = inst_54137);

(statearr_54252_56656[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (33))){
var inst_54123 = (state_54165[(23)]);
var inst_54126 = cljs.core.chunked_seq_QMARK_(inst_54123);
var state_54165__$1 = state_54165;
if(inst_54126){
var statearr_54262_56657 = state_54165__$1;
(statearr_54262_56657[(1)] = (36));

} else {
var statearr_54265_56658 = state_54165__$1;
(statearr_54265_56658[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (13))){
var inst_54041 = (state_54165[(24)]);
var inst_54045 = cljs.core.async.close_BANG_(inst_54041);
var state_54165__$1 = state_54165;
var statearr_54270_56661 = state_54165__$1;
(statearr_54270_56661[(2)] = inst_54045);

(statearr_54270_56661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (22))){
var inst_54071 = (state_54165[(8)]);
var inst_54076 = cljs.core.async.close_BANG_(inst_54071);
var state_54165__$1 = state_54165;
var statearr_54272_56662 = state_54165__$1;
(statearr_54272_56662[(2)] = inst_54076);

(statearr_54272_56662[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (36))){
var inst_54123 = (state_54165[(23)]);
var inst_54128 = cljs.core.chunk_first(inst_54123);
var inst_54129 = cljs.core.chunk_rest(inst_54123);
var inst_54130 = cljs.core.count(inst_54128);
var inst_54104 = inst_54129;
var inst_54105 = inst_54128;
var inst_54106 = inst_54130;
var inst_54107 = (0);
var state_54165__$1 = (function (){var statearr_54274 = state_54165;
(statearr_54274[(19)] = inst_54106);

(statearr_54274[(20)] = inst_54104);

(statearr_54274[(11)] = inst_54107);

(statearr_54274[(12)] = inst_54105);

return statearr_54274;
})();
var statearr_54276_56663 = state_54165__$1;
(statearr_54276_56663[(2)] = null);

(statearr_54276_56663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (41))){
var inst_54123 = (state_54165[(23)]);
var inst_54139 = (state_54165[(2)]);
var inst_54140 = cljs.core.next(inst_54123);
var inst_54104 = inst_54140;
var inst_54105 = null;
var inst_54106 = (0);
var inst_54107 = (0);
var state_54165__$1 = (function (){var statearr_54278 = state_54165;
(statearr_54278[(19)] = inst_54106);

(statearr_54278[(20)] = inst_54104);

(statearr_54278[(11)] = inst_54107);

(statearr_54278[(12)] = inst_54105);

(statearr_54278[(25)] = inst_54139);

return statearr_54278;
})();
var statearr_54279_56666 = state_54165__$1;
(statearr_54279_56666[(2)] = null);

(statearr_54279_56666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (43))){
var state_54165__$1 = state_54165;
var statearr_54281_56667 = state_54165__$1;
(statearr_54281_56667[(2)] = null);

(statearr_54281_56667[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (29))){
var inst_54148 = (state_54165[(2)]);
var state_54165__$1 = state_54165;
var statearr_54285_56668 = state_54165__$1;
(statearr_54285_56668[(2)] = inst_54148);

(statearr_54285_56668[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (44))){
var inst_54158 = (state_54165[(2)]);
var state_54165__$1 = (function (){var statearr_54288 = state_54165;
(statearr_54288[(26)] = inst_54158);

return statearr_54288;
})();
var statearr_54290_56669 = state_54165__$1;
(statearr_54290_56669[(2)] = null);

(statearr_54290_56669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (6))){
var inst_54096 = (state_54165[(27)]);
var inst_54095 = cljs.core.deref(cs);
var inst_54096__$1 = cljs.core.keys(inst_54095);
var inst_54097 = cljs.core.count(inst_54096__$1);
var inst_54098 = cljs.core.reset_BANG_(dctr,inst_54097);
var inst_54103 = cljs.core.seq(inst_54096__$1);
var inst_54104 = inst_54103;
var inst_54105 = null;
var inst_54106 = (0);
var inst_54107 = (0);
var state_54165__$1 = (function (){var statearr_54293 = state_54165;
(statearr_54293[(19)] = inst_54106);

(statearr_54293[(27)] = inst_54096__$1);

(statearr_54293[(20)] = inst_54104);

(statearr_54293[(28)] = inst_54098);

(statearr_54293[(11)] = inst_54107);

(statearr_54293[(12)] = inst_54105);

return statearr_54293;
})();
var statearr_54297_56671 = state_54165__$1;
(statearr_54297_56671[(2)] = null);

(statearr_54297_56671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (28))){
var inst_54123 = (state_54165[(23)]);
var inst_54104 = (state_54165[(20)]);
var inst_54123__$1 = cljs.core.seq(inst_54104);
var state_54165__$1 = (function (){var statearr_54298 = state_54165;
(statearr_54298[(23)] = inst_54123__$1);

return statearr_54298;
})();
if(inst_54123__$1){
var statearr_54299_56673 = state_54165__$1;
(statearr_54299_56673[(1)] = (33));

} else {
var statearr_54300_56674 = state_54165__$1;
(statearr_54300_56674[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (25))){
var inst_54106 = (state_54165[(19)]);
var inst_54107 = (state_54165[(11)]);
var inst_54110 = (inst_54107 < inst_54106);
var inst_54111 = inst_54110;
var state_54165__$1 = state_54165;
if(cljs.core.truth_(inst_54111)){
var statearr_54302_56675 = state_54165__$1;
(statearr_54302_56675[(1)] = (27));

} else {
var statearr_54303_56676 = state_54165__$1;
(statearr_54303_56676[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (34))){
var state_54165__$1 = state_54165;
var statearr_54305_56677 = state_54165__$1;
(statearr_54305_56677[(2)] = null);

(statearr_54305_56677[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (17))){
var state_54165__$1 = state_54165;
var statearr_54309_56678 = state_54165__$1;
(statearr_54309_56678[(2)] = null);

(statearr_54309_56678[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (3))){
var inst_54163 = (state_54165[(2)]);
var state_54165__$1 = state_54165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54165__$1,inst_54163);
} else {
if((state_val_54166 === (12))){
var inst_54090 = (state_54165[(2)]);
var state_54165__$1 = state_54165;
var statearr_54316_56680 = state_54165__$1;
(statearr_54316_56680[(2)] = inst_54090);

(statearr_54316_56680[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (2))){
var state_54165__$1 = state_54165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54165__$1,(4),ch);
} else {
if((state_val_54166 === (23))){
var state_54165__$1 = state_54165;
var statearr_54319_56681 = state_54165__$1;
(statearr_54319_56681[(2)] = null);

(statearr_54319_56681[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (35))){
var inst_54146 = (state_54165[(2)]);
var state_54165__$1 = state_54165;
var statearr_54320_56683 = state_54165__$1;
(statearr_54320_56683[(2)] = inst_54146);

(statearr_54320_56683[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (19))){
var inst_54055 = (state_54165[(7)]);
var inst_54061 = cljs.core.chunk_first(inst_54055);
var inst_54062 = cljs.core.chunk_rest(inst_54055);
var inst_54063 = cljs.core.count(inst_54061);
var inst_54028 = inst_54062;
var inst_54029 = inst_54061;
var inst_54030 = inst_54063;
var inst_54031 = (0);
var state_54165__$1 = (function (){var statearr_54321 = state_54165;
(statearr_54321[(13)] = inst_54028);

(statearr_54321[(14)] = inst_54030);

(statearr_54321[(15)] = inst_54029);

(statearr_54321[(16)] = inst_54031);

return statearr_54321;
})();
var statearr_54322_56684 = state_54165__$1;
(statearr_54322_56684[(2)] = null);

(statearr_54322_56684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (11))){
var inst_54028 = (state_54165[(13)]);
var inst_54055 = (state_54165[(7)]);
var inst_54055__$1 = cljs.core.seq(inst_54028);
var state_54165__$1 = (function (){var statearr_54325 = state_54165;
(statearr_54325[(7)] = inst_54055__$1);

return statearr_54325;
})();
if(inst_54055__$1){
var statearr_54326_56688 = state_54165__$1;
(statearr_54326_56688[(1)] = (16));

} else {
var statearr_54327_56689 = state_54165__$1;
(statearr_54327_56689[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (9))){
var inst_54092 = (state_54165[(2)]);
var state_54165__$1 = state_54165;
var statearr_54331_56690 = state_54165__$1;
(statearr_54331_56690[(2)] = inst_54092);

(statearr_54331_56690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (5))){
var inst_54026 = cljs.core.deref(cs);
var inst_54027 = cljs.core.seq(inst_54026);
var inst_54028 = inst_54027;
var inst_54029 = null;
var inst_54030 = (0);
var inst_54031 = (0);
var state_54165__$1 = (function (){var statearr_54334 = state_54165;
(statearr_54334[(13)] = inst_54028);

(statearr_54334[(14)] = inst_54030);

(statearr_54334[(15)] = inst_54029);

(statearr_54334[(16)] = inst_54031);

return statearr_54334;
})();
var statearr_54336_56691 = state_54165__$1;
(statearr_54336_56691[(2)] = null);

(statearr_54336_56691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (14))){
var state_54165__$1 = state_54165;
var statearr_54338_56692 = state_54165__$1;
(statearr_54338_56692[(2)] = null);

(statearr_54338_56692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (45))){
var inst_54155 = (state_54165[(2)]);
var state_54165__$1 = state_54165;
var statearr_54340_56696 = state_54165__$1;
(statearr_54340_56696[(2)] = inst_54155);

(statearr_54340_56696[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (26))){
var inst_54096 = (state_54165[(27)]);
var inst_54150 = (state_54165[(2)]);
var inst_54151 = cljs.core.seq(inst_54096);
var state_54165__$1 = (function (){var statearr_54346 = state_54165;
(statearr_54346[(29)] = inst_54150);

return statearr_54346;
})();
if(inst_54151){
var statearr_54349_56697 = state_54165__$1;
(statearr_54349_56697[(1)] = (42));

} else {
var statearr_54351_56698 = state_54165__$1;
(statearr_54351_56698[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (16))){
var inst_54055 = (state_54165[(7)]);
var inst_54059 = cljs.core.chunked_seq_QMARK_(inst_54055);
var state_54165__$1 = state_54165;
if(inst_54059){
var statearr_54352_56699 = state_54165__$1;
(statearr_54352_56699[(1)] = (19));

} else {
var statearr_54357_56700 = state_54165__$1;
(statearr_54357_56700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (38))){
var inst_54143 = (state_54165[(2)]);
var state_54165__$1 = state_54165;
var statearr_54362_56704 = state_54165__$1;
(statearr_54362_56704[(2)] = inst_54143);

(statearr_54362_56704[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (30))){
var state_54165__$1 = state_54165;
var statearr_54363_56705 = state_54165__$1;
(statearr_54363_56705[(2)] = null);

(statearr_54363_56705[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (10))){
var inst_54029 = (state_54165[(15)]);
var inst_54031 = (state_54165[(16)]);
var inst_54040 = cljs.core._nth(inst_54029,inst_54031);
var inst_54041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54040,(0),null);
var inst_54042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54040,(1),null);
var state_54165__$1 = (function (){var statearr_54368 = state_54165;
(statearr_54368[(24)] = inst_54041);

return statearr_54368;
})();
if(cljs.core.truth_(inst_54042)){
var statearr_54369_56706 = state_54165__$1;
(statearr_54369_56706[(1)] = (13));

} else {
var statearr_54371_56707 = state_54165__$1;
(statearr_54371_56707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (18))){
var inst_54087 = (state_54165[(2)]);
var state_54165__$1 = state_54165;
var statearr_54377_56708 = state_54165__$1;
(statearr_54377_56708[(2)] = inst_54087);

(statearr_54377_56708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (42))){
var state_54165__$1 = state_54165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54165__$1,(45),dchan);
} else {
if((state_val_54166 === (37))){
var inst_54017 = (state_54165[(10)]);
var inst_54123 = (state_54165[(23)]);
var inst_54133 = (state_54165[(22)]);
var inst_54133__$1 = cljs.core.first(inst_54123);
var inst_54134 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54133__$1,inst_54017,done);
var state_54165__$1 = (function (){var statearr_54388 = state_54165;
(statearr_54388[(22)] = inst_54133__$1);

return statearr_54388;
})();
if(cljs.core.truth_(inst_54134)){
var statearr_54389_56711 = state_54165__$1;
(statearr_54389_56711[(1)] = (39));

} else {
var statearr_54393_56712 = state_54165__$1;
(statearr_54393_56712[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54166 === (8))){
var inst_54030 = (state_54165[(14)]);
var inst_54031 = (state_54165[(16)]);
var inst_54033 = (inst_54031 < inst_54030);
var inst_54034 = inst_54033;
var state_54165__$1 = state_54165;
if(cljs.core.truth_(inst_54034)){
var statearr_54402_56714 = state_54165__$1;
(statearr_54402_56714[(1)] = (10));

} else {
var statearr_54406_56716 = state_54165__$1;
(statearr_54406_56716[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__53101__auto__ = null;
var cljs$core$async$mult_$_state_machine__53101__auto____0 = (function (){
var statearr_54411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54411[(0)] = cljs$core$async$mult_$_state_machine__53101__auto__);

(statearr_54411[(1)] = (1));

return statearr_54411;
});
var cljs$core$async$mult_$_state_machine__53101__auto____1 = (function (state_54165){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_54165);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e54413){var ex__53104__auto__ = e54413;
var statearr_54415_56717 = state_54165;
(statearr_54415_56717[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_54165[(4)]))){
var statearr_54419_56718 = state_54165;
(statearr_54419_56718[(1)] = cljs.core.first((state_54165[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56720 = state_54165;
state_54165 = G__56720;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__53101__auto__ = function(state_54165){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__53101__auto____1.call(this,state_54165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__53101__auto____0;
cljs$core$async$mult_$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__53101__auto____1;
return cljs$core$async$mult_$_state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_54425 = f__53175__auto__();
(statearr_54425[(6)] = c__53174__auto___56628);

return statearr_54425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
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
var G__54436 = arguments.length;
switch (G__54436) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_56725 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_56725(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_56727 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_56727(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_56728 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_56728(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_56731 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_56731(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_56735 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_56735(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___56739 = arguments.length;
var i__4819__auto___56740 = (0);
while(true){
if((i__4819__auto___56740 < len__4818__auto___56739)){
args__4824__auto__.push((arguments[i__4819__auto___56740]));

var G__56741 = (i__4819__auto___56740 + (1));
i__4819__auto___56740 = G__56741;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__54497){
var map__54498 = p__54497;
var map__54498__$1 = cljs.core.__destructure_map(map__54498);
var opts = map__54498__$1;
var statearr_54499_56746 = state;
(statearr_54499_56746[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_54500_56748 = state;
(statearr_54500_56748[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_54508_56750 = state;
(statearr_54508_56750[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq54489){
var G__54490 = cljs.core.first(seq54489);
var seq54489__$1 = cljs.core.next(seq54489);
var G__54491 = cljs.core.first(seq54489__$1);
var seq54489__$2 = cljs.core.next(seq54489__$1);
var G__54492 = cljs.core.first(seq54489__$2);
var seq54489__$3 = cljs.core.next(seq54489__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54490,G__54491,G__54492,seq54489__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54543 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54544){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta54544 = meta54544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54545,meta54544__$1){
var self__ = this;
var _54545__$1 = this;
return (new cljs.core.async.t_cljs$core$async54543(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta54544__$1));
}));

(cljs.core.async.t_cljs$core$async54543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54545){
var self__ = this;
var _54545__$1 = this;
return self__.meta54544;
}));

(cljs.core.async.t_cljs$core$async54543.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54543.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async54543.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54543.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54543.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54543.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54543.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54543.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta54544","meta54544",1531279108,null)], null);
}));

(cljs.core.async.t_cljs$core$async54543.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54543");

(cljs.core.async.t_cljs$core$async54543.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async54543");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54543.
 */
cljs.core.async.__GT_t_cljs$core$async54543 = (function cljs$core$async$mix_$___GT_t_cljs$core$async54543(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54544){
return (new cljs.core.async.t_cljs$core$async54543(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54544));
});

}

return (new cljs.core.async.t_cljs$core$async54543(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53174__auto___56759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_54652){
var state_val_54653 = (state_54652[(1)]);
if((state_val_54653 === (7))){
var inst_54608 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
if(cljs.core.truth_(inst_54608)){
var statearr_54661_56760 = state_54652__$1;
(statearr_54661_56760[(1)] = (8));

} else {
var statearr_54662_56761 = state_54652__$1;
(statearr_54662_56761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (20))){
var inst_54601 = (state_54652[(7)]);
var state_54652__$1 = state_54652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54652__$1,(23),out,inst_54601);
} else {
if((state_val_54653 === (1))){
var inst_54576 = calc_state();
var inst_54579 = cljs.core.__destructure_map(inst_54576);
var inst_54583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54579,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54579,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54579,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_54586 = inst_54576;
var state_54652__$1 = (function (){var statearr_54667 = state_54652;
(statearr_54667[(8)] = inst_54584);

(statearr_54667[(9)] = inst_54586);

(statearr_54667[(10)] = inst_54585);

(statearr_54667[(11)] = inst_54583);

return statearr_54667;
})();
var statearr_54669_56765 = state_54652__$1;
(statearr_54669_56765[(2)] = null);

(statearr_54669_56765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (24))){
var inst_54591 = (state_54652[(12)]);
var inst_54586 = inst_54591;
var state_54652__$1 = (function (){var statearr_54671 = state_54652;
(statearr_54671[(9)] = inst_54586);

return statearr_54671;
})();
var statearr_54672_56767 = state_54652__$1;
(statearr_54672_56767[(2)] = null);

(statearr_54672_56767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (4))){
var inst_54601 = (state_54652[(7)]);
var inst_54603 = (state_54652[(13)]);
var inst_54600 = (state_54652[(2)]);
var inst_54601__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54600,(0),null);
var inst_54602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54600,(1),null);
var inst_54603__$1 = (inst_54601__$1 == null);
var state_54652__$1 = (function (){var statearr_54679 = state_54652;
(statearr_54679[(7)] = inst_54601__$1);

(statearr_54679[(13)] = inst_54603__$1);

(statearr_54679[(14)] = inst_54602);

return statearr_54679;
})();
if(cljs.core.truth_(inst_54603__$1)){
var statearr_54680_56771 = state_54652__$1;
(statearr_54680_56771[(1)] = (5));

} else {
var statearr_54681_56772 = state_54652__$1;
(statearr_54681_56772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (15))){
var inst_54625 = (state_54652[(15)]);
var inst_54593 = (state_54652[(16)]);
var inst_54625__$1 = cljs.core.empty_QMARK_(inst_54593);
var state_54652__$1 = (function (){var statearr_54688 = state_54652;
(statearr_54688[(15)] = inst_54625__$1);

return statearr_54688;
})();
if(inst_54625__$1){
var statearr_54689_56774 = state_54652__$1;
(statearr_54689_56774[(1)] = (17));

} else {
var statearr_54690_56775 = state_54652__$1;
(statearr_54690_56775[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (21))){
var inst_54591 = (state_54652[(12)]);
var inst_54586 = inst_54591;
var state_54652__$1 = (function (){var statearr_54692 = state_54652;
(statearr_54692[(9)] = inst_54586);

return statearr_54692;
})();
var statearr_54693_56776 = state_54652__$1;
(statearr_54693_56776[(2)] = null);

(statearr_54693_56776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (13))){
var inst_54615 = (state_54652[(2)]);
var inst_54619 = calc_state();
var inst_54586 = inst_54619;
var state_54652__$1 = (function (){var statearr_54694 = state_54652;
(statearr_54694[(9)] = inst_54586);

(statearr_54694[(17)] = inst_54615);

return statearr_54694;
})();
var statearr_54695_56778 = state_54652__$1;
(statearr_54695_56778[(2)] = null);

(statearr_54695_56778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (22))){
var inst_54646 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
var statearr_54702_56781 = state_54652__$1;
(statearr_54702_56781[(2)] = inst_54646);

(statearr_54702_56781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (6))){
var inst_54602 = (state_54652[(14)]);
var inst_54606 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54602,change);
var state_54652__$1 = state_54652;
var statearr_54707_56783 = state_54652__$1;
(statearr_54707_56783[(2)] = inst_54606);

(statearr_54707_56783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (25))){
var state_54652__$1 = state_54652;
var statearr_54708_56784 = state_54652__$1;
(statearr_54708_56784[(2)] = null);

(statearr_54708_56784[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (17))){
var inst_54594 = (state_54652[(18)]);
var inst_54602 = (state_54652[(14)]);
var inst_54628 = (inst_54594.cljs$core$IFn$_invoke$arity$1 ? inst_54594.cljs$core$IFn$_invoke$arity$1(inst_54602) : inst_54594.call(null,inst_54602));
var inst_54629 = cljs.core.not(inst_54628);
var state_54652__$1 = state_54652;
var statearr_54716_56785 = state_54652__$1;
(statearr_54716_56785[(2)] = inst_54629);

(statearr_54716_56785[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (3))){
var inst_54650 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54652__$1,inst_54650);
} else {
if((state_val_54653 === (12))){
var state_54652__$1 = state_54652;
var statearr_54722_56786 = state_54652__$1;
(statearr_54722_56786[(2)] = null);

(statearr_54722_56786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (2))){
var inst_54586 = (state_54652[(9)]);
var inst_54591 = (state_54652[(12)]);
var inst_54591__$1 = cljs.core.__destructure_map(inst_54586);
var inst_54593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54591__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54591__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54591__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_54652__$1 = (function (){var statearr_54724 = state_54652;
(statearr_54724[(18)] = inst_54594);

(statearr_54724[(12)] = inst_54591__$1);

(statearr_54724[(16)] = inst_54593);

return statearr_54724;
})();
return cljs.core.async.ioc_alts_BANG_(state_54652__$1,(4),inst_54595);
} else {
if((state_val_54653 === (23))){
var inst_54637 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
if(cljs.core.truth_(inst_54637)){
var statearr_54726_56789 = state_54652__$1;
(statearr_54726_56789[(1)] = (24));

} else {
var statearr_54727_56790 = state_54652__$1;
(statearr_54727_56790[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (19))){
var inst_54632 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
var statearr_54731_56791 = state_54652__$1;
(statearr_54731_56791[(2)] = inst_54632);

(statearr_54731_56791[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (11))){
var inst_54602 = (state_54652[(14)]);
var inst_54612 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_54602);
var state_54652__$1 = state_54652;
var statearr_54739_56793 = state_54652__$1;
(statearr_54739_56793[(2)] = inst_54612);

(statearr_54739_56793[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (9))){
var inst_54622 = (state_54652[(19)]);
var inst_54602 = (state_54652[(14)]);
var inst_54593 = (state_54652[(16)]);
var inst_54622__$1 = (inst_54593.cljs$core$IFn$_invoke$arity$1 ? inst_54593.cljs$core$IFn$_invoke$arity$1(inst_54602) : inst_54593.call(null,inst_54602));
var state_54652__$1 = (function (){var statearr_54741 = state_54652;
(statearr_54741[(19)] = inst_54622__$1);

return statearr_54741;
})();
if(cljs.core.truth_(inst_54622__$1)){
var statearr_54742_56795 = state_54652__$1;
(statearr_54742_56795[(1)] = (14));

} else {
var statearr_54743_56796 = state_54652__$1;
(statearr_54743_56796[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (5))){
var inst_54603 = (state_54652[(13)]);
var state_54652__$1 = state_54652;
var statearr_54746_56798 = state_54652__$1;
(statearr_54746_56798[(2)] = inst_54603);

(statearr_54746_56798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (14))){
var inst_54622 = (state_54652[(19)]);
var state_54652__$1 = state_54652;
var statearr_54750_56802 = state_54652__$1;
(statearr_54750_56802[(2)] = inst_54622);

(statearr_54750_56802[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (26))){
var inst_54642 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
var statearr_54752_56803 = state_54652__$1;
(statearr_54752_56803[(2)] = inst_54642);

(statearr_54752_56803[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (16))){
var inst_54634 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
if(cljs.core.truth_(inst_54634)){
var statearr_54754_56804 = state_54652__$1;
(statearr_54754_56804[(1)] = (20));

} else {
var statearr_54756_56805 = state_54652__$1;
(statearr_54756_56805[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (10))){
var inst_54648 = (state_54652[(2)]);
var state_54652__$1 = state_54652;
var statearr_54760_56806 = state_54652__$1;
(statearr_54760_56806[(2)] = inst_54648);

(statearr_54760_56806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (18))){
var inst_54625 = (state_54652[(15)]);
var state_54652__$1 = state_54652;
var statearr_54762_56808 = state_54652__$1;
(statearr_54762_56808[(2)] = inst_54625);

(statearr_54762_56808[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54653 === (8))){
var inst_54601 = (state_54652[(7)]);
var inst_54610 = (inst_54601 == null);
var state_54652__$1 = state_54652;
if(cljs.core.truth_(inst_54610)){
var statearr_54763_56810 = state_54652__$1;
(statearr_54763_56810[(1)] = (11));

} else {
var statearr_54766_56811 = state_54652__$1;
(statearr_54766_56811[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__53101__auto__ = null;
var cljs$core$async$mix_$_state_machine__53101__auto____0 = (function (){
var statearr_54771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54771[(0)] = cljs$core$async$mix_$_state_machine__53101__auto__);

(statearr_54771[(1)] = (1));

return statearr_54771;
});
var cljs$core$async$mix_$_state_machine__53101__auto____1 = (function (state_54652){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_54652);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e54773){var ex__53104__auto__ = e54773;
var statearr_54774_56813 = state_54652;
(statearr_54774_56813[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_54652[(4)]))){
var statearr_54775_56814 = state_54652;
(statearr_54775_56814[(1)] = cljs.core.first((state_54652[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56815 = state_54652;
state_54652 = G__56815;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__53101__auto__ = function(state_54652){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__53101__auto____1.call(this,state_54652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__53101__auto____0;
cljs$core$async$mix_$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__53101__auto____1;
return cljs$core$async$mix_$_state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_54777 = f__53175__auto__();
(statearr_54777[(6)] = c__53174__auto___56759);

return statearr_54777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_56820 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_56820(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_56824 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_56824(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_56826 = (function() {
var G__56827 = null;
var G__56827__1 = (function (p){
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
var G__56827__2 = (function (p,v){
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
G__56827 = function(p,v){
switch(arguments.length){
case 1:
return G__56827__1.call(this,p);
case 2:
return G__56827__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56827.cljs$core$IFn$_invoke$arity$1 = G__56827__1;
G__56827.cljs$core$IFn$_invoke$arity$2 = G__56827__2;
return G__56827;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__54832 = arguments.length;
switch (G__54832) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56826(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56826(p,v);
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
var G__54856 = arguments.length;
switch (G__54856) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__54845_SHARP_){
if(cljs.core.truth_((p1__54845_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__54845_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__54845_SHARP_.call(null,topic)))){
return p1__54845_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54845_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54867 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta54868){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta54868 = meta54868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54869,meta54868__$1){
var self__ = this;
var _54869__$1 = this;
return (new cljs.core.async.t_cljs$core$async54867(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta54868__$1));
}));

(cljs.core.async.t_cljs$core$async54867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54869){
var self__ = this;
var _54869__$1 = this;
return self__.meta54868;
}));

(cljs.core.async.t_cljs$core$async54867.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54867.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54867.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54867.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async54867.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async54867.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async54867.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async54867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta54868","meta54868",-2082043199,null)], null);
}));

(cljs.core.async.t_cljs$core$async54867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54867");

(cljs.core.async.t_cljs$core$async54867.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async54867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54867.
 */
cljs.core.async.__GT_t_cljs$core$async54867 = (function cljs$core$async$__GT_t_cljs$core$async54867(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54868){
return (new cljs.core.async.t_cljs$core$async54867(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54868));
});

}

return (new cljs.core.async.t_cljs$core$async54867(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53174__auto___56855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_54994){
var state_val_54995 = (state_54994[(1)]);
if((state_val_54995 === (7))){
var inst_54987 = (state_54994[(2)]);
var state_54994__$1 = state_54994;
var statearr_55002_56858 = state_54994__$1;
(statearr_55002_56858[(2)] = inst_54987);

(statearr_55002_56858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (20))){
var state_54994__$1 = state_54994;
var statearr_55006_56859 = state_54994__$1;
(statearr_55006_56859[(2)] = null);

(statearr_55006_56859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (1))){
var state_54994__$1 = state_54994;
var statearr_55007_56860 = state_54994__$1;
(statearr_55007_56860[(2)] = null);

(statearr_55007_56860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (24))){
var inst_54965 = (state_54994[(7)]);
var inst_54977 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_54965);
var state_54994__$1 = state_54994;
var statearr_55008_56861 = state_54994__$1;
(statearr_55008_56861[(2)] = inst_54977);

(statearr_55008_56861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (4))){
var inst_54915 = (state_54994[(8)]);
var inst_54915__$1 = (state_54994[(2)]);
var inst_54916 = (inst_54915__$1 == null);
var state_54994__$1 = (function (){var statearr_55009 = state_54994;
(statearr_55009[(8)] = inst_54915__$1);

return statearr_55009;
})();
if(cljs.core.truth_(inst_54916)){
var statearr_55010_56868 = state_54994__$1;
(statearr_55010_56868[(1)] = (5));

} else {
var statearr_55011_56871 = state_54994__$1;
(statearr_55011_56871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (15))){
var inst_54959 = (state_54994[(2)]);
var state_54994__$1 = state_54994;
var statearr_55015_56872 = state_54994__$1;
(statearr_55015_56872[(2)] = inst_54959);

(statearr_55015_56872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (21))){
var inst_54982 = (state_54994[(2)]);
var state_54994__$1 = (function (){var statearr_55018 = state_54994;
(statearr_55018[(9)] = inst_54982);

return statearr_55018;
})();
var statearr_55020_56874 = state_54994__$1;
(statearr_55020_56874[(2)] = null);

(statearr_55020_56874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (13))){
var inst_54941 = (state_54994[(10)]);
var inst_54943 = cljs.core.chunked_seq_QMARK_(inst_54941);
var state_54994__$1 = state_54994;
if(inst_54943){
var statearr_55024_56881 = state_54994__$1;
(statearr_55024_56881[(1)] = (16));

} else {
var statearr_55026_56882 = state_54994__$1;
(statearr_55026_56882[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (22))){
var inst_54971 = (state_54994[(2)]);
var state_54994__$1 = state_54994;
if(cljs.core.truth_(inst_54971)){
var statearr_55031_56884 = state_54994__$1;
(statearr_55031_56884[(1)] = (23));

} else {
var statearr_55032_56885 = state_54994__$1;
(statearr_55032_56885[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (6))){
var inst_54915 = (state_54994[(8)]);
var inst_54965 = (state_54994[(7)]);
var inst_54967 = (state_54994[(11)]);
var inst_54965__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_54915) : topic_fn.call(null,inst_54915));
var inst_54966 = cljs.core.deref(mults);
var inst_54967__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54966,inst_54965__$1);
var state_54994__$1 = (function (){var statearr_55033 = state_54994;
(statearr_55033[(7)] = inst_54965__$1);

(statearr_55033[(11)] = inst_54967__$1);

return statearr_55033;
})();
if(cljs.core.truth_(inst_54967__$1)){
var statearr_55036_56887 = state_54994__$1;
(statearr_55036_56887[(1)] = (19));

} else {
var statearr_55038_56889 = state_54994__$1;
(statearr_55038_56889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (25))){
var inst_54979 = (state_54994[(2)]);
var state_54994__$1 = state_54994;
var statearr_55040_56893 = state_54994__$1;
(statearr_55040_56893[(2)] = inst_54979);

(statearr_55040_56893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (17))){
var inst_54941 = (state_54994[(10)]);
var inst_54950 = cljs.core.first(inst_54941);
var inst_54951 = cljs.core.async.muxch_STAR_(inst_54950);
var inst_54952 = cljs.core.async.close_BANG_(inst_54951);
var inst_54953 = cljs.core.next(inst_54941);
var inst_54925 = inst_54953;
var inst_54926 = null;
var inst_54927 = (0);
var inst_54928 = (0);
var state_54994__$1 = (function (){var statearr_55044 = state_54994;
(statearr_55044[(12)] = inst_54927);

(statearr_55044[(13)] = inst_54926);

(statearr_55044[(14)] = inst_54928);

(statearr_55044[(15)] = inst_54952);

(statearr_55044[(16)] = inst_54925);

return statearr_55044;
})();
var statearr_55048_56898 = state_54994__$1;
(statearr_55048_56898[(2)] = null);

(statearr_55048_56898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (3))){
var inst_54989 = (state_54994[(2)]);
var state_54994__$1 = state_54994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54994__$1,inst_54989);
} else {
if((state_val_54995 === (12))){
var inst_54961 = (state_54994[(2)]);
var state_54994__$1 = state_54994;
var statearr_55057_56904 = state_54994__$1;
(statearr_55057_56904[(2)] = inst_54961);

(statearr_55057_56904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (2))){
var state_54994__$1 = state_54994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54994__$1,(4),ch);
} else {
if((state_val_54995 === (23))){
var state_54994__$1 = state_54994;
var statearr_55059_56906 = state_54994__$1;
(statearr_55059_56906[(2)] = null);

(statearr_55059_56906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (19))){
var inst_54915 = (state_54994[(8)]);
var inst_54967 = (state_54994[(11)]);
var inst_54969 = cljs.core.async.muxch_STAR_(inst_54967);
var state_54994__$1 = state_54994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54994__$1,(22),inst_54969,inst_54915);
} else {
if((state_val_54995 === (11))){
var inst_54941 = (state_54994[(10)]);
var inst_54925 = (state_54994[(16)]);
var inst_54941__$1 = cljs.core.seq(inst_54925);
var state_54994__$1 = (function (){var statearr_55066 = state_54994;
(statearr_55066[(10)] = inst_54941__$1);

return statearr_55066;
})();
if(inst_54941__$1){
var statearr_55068_56909 = state_54994__$1;
(statearr_55068_56909[(1)] = (13));

} else {
var statearr_55071_56912 = state_54994__$1;
(statearr_55071_56912[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (9))){
var inst_54963 = (state_54994[(2)]);
var state_54994__$1 = state_54994;
var statearr_55073_56915 = state_54994__$1;
(statearr_55073_56915[(2)] = inst_54963);

(statearr_55073_56915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (5))){
var inst_54922 = cljs.core.deref(mults);
var inst_54923 = cljs.core.vals(inst_54922);
var inst_54924 = cljs.core.seq(inst_54923);
var inst_54925 = inst_54924;
var inst_54926 = null;
var inst_54927 = (0);
var inst_54928 = (0);
var state_54994__$1 = (function (){var statearr_55076 = state_54994;
(statearr_55076[(12)] = inst_54927);

(statearr_55076[(13)] = inst_54926);

(statearr_55076[(14)] = inst_54928);

(statearr_55076[(16)] = inst_54925);

return statearr_55076;
})();
var statearr_55077_56924 = state_54994__$1;
(statearr_55077_56924[(2)] = null);

(statearr_55077_56924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (14))){
var state_54994__$1 = state_54994;
var statearr_55087_56925 = state_54994__$1;
(statearr_55087_56925[(2)] = null);

(statearr_55087_56925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (16))){
var inst_54941 = (state_54994[(10)]);
var inst_54945 = cljs.core.chunk_first(inst_54941);
var inst_54946 = cljs.core.chunk_rest(inst_54941);
var inst_54947 = cljs.core.count(inst_54945);
var inst_54925 = inst_54946;
var inst_54926 = inst_54945;
var inst_54927 = inst_54947;
var inst_54928 = (0);
var state_54994__$1 = (function (){var statearr_55090 = state_54994;
(statearr_55090[(12)] = inst_54927);

(statearr_55090[(13)] = inst_54926);

(statearr_55090[(14)] = inst_54928);

(statearr_55090[(16)] = inst_54925);

return statearr_55090;
})();
var statearr_55093_56928 = state_54994__$1;
(statearr_55093_56928[(2)] = null);

(statearr_55093_56928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (10))){
var inst_54927 = (state_54994[(12)]);
var inst_54926 = (state_54994[(13)]);
var inst_54928 = (state_54994[(14)]);
var inst_54925 = (state_54994[(16)]);
var inst_54933 = cljs.core._nth(inst_54926,inst_54928);
var inst_54934 = cljs.core.async.muxch_STAR_(inst_54933);
var inst_54935 = cljs.core.async.close_BANG_(inst_54934);
var inst_54936 = (inst_54928 + (1));
var tmp55078 = inst_54927;
var tmp55079 = inst_54926;
var tmp55080 = inst_54925;
var inst_54925__$1 = tmp55080;
var inst_54926__$1 = tmp55079;
var inst_54927__$1 = tmp55078;
var inst_54928__$1 = inst_54936;
var state_54994__$1 = (function (){var statearr_55096 = state_54994;
(statearr_55096[(12)] = inst_54927__$1);

(statearr_55096[(13)] = inst_54926__$1);

(statearr_55096[(14)] = inst_54928__$1);

(statearr_55096[(16)] = inst_54925__$1);

(statearr_55096[(17)] = inst_54935);

return statearr_55096;
})();
var statearr_55101_56932 = state_54994__$1;
(statearr_55101_56932[(2)] = null);

(statearr_55101_56932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (18))){
var inst_54956 = (state_54994[(2)]);
var state_54994__$1 = state_54994;
var statearr_55103_56934 = state_54994__$1;
(statearr_55103_56934[(2)] = inst_54956);

(statearr_55103_56934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54995 === (8))){
var inst_54927 = (state_54994[(12)]);
var inst_54928 = (state_54994[(14)]);
var inst_54930 = (inst_54928 < inst_54927);
var inst_54931 = inst_54930;
var state_54994__$1 = state_54994;
if(cljs.core.truth_(inst_54931)){
var statearr_55107_56938 = state_54994__$1;
(statearr_55107_56938[(1)] = (10));

} else {
var statearr_55108_56939 = state_54994__$1;
(statearr_55108_56939[(1)] = (11));

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
var cljs$core$async$state_machine__53101__auto__ = null;
var cljs$core$async$state_machine__53101__auto____0 = (function (){
var statearr_55110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55110[(0)] = cljs$core$async$state_machine__53101__auto__);

(statearr_55110[(1)] = (1));

return statearr_55110;
});
var cljs$core$async$state_machine__53101__auto____1 = (function (state_54994){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_54994);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e55114){var ex__53104__auto__ = e55114;
var statearr_55115_56942 = state_54994;
(statearr_55115_56942[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_54994[(4)]))){
var statearr_55116_56944 = state_54994;
(statearr_55116_56944[(1)] = cljs.core.first((state_54994[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56945 = state_54994;
state_54994 = G__56945;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$state_machine__53101__auto__ = function(state_54994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53101__auto____1.call(this,state_54994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53101__auto____0;
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53101__auto____1;
return cljs$core$async$state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_55124 = f__53175__auto__();
(statearr_55124[(6)] = c__53174__auto___56855);

return statearr_55124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
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
var G__55132 = arguments.length;
switch (G__55132) {
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
var G__55145 = arguments.length;
switch (G__55145) {
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
var G__55157 = arguments.length;
switch (G__55157) {
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
var c__53174__auto___56958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_55238){
var state_val_55239 = (state_55238[(1)]);
if((state_val_55239 === (7))){
var state_55238__$1 = state_55238;
var statearr_55242_56959 = state_55238__$1;
(statearr_55242_56959[(2)] = null);

(statearr_55242_56959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (1))){
var state_55238__$1 = state_55238;
var statearr_55243_56960 = state_55238__$1;
(statearr_55243_56960[(2)] = null);

(statearr_55243_56960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (4))){
var inst_55179 = (state_55238[(7)]);
var inst_55177 = (state_55238[(8)]);
var inst_55181 = (inst_55179 < inst_55177);
var state_55238__$1 = state_55238;
if(cljs.core.truth_(inst_55181)){
var statearr_55250_56962 = state_55238__$1;
(statearr_55250_56962[(1)] = (6));

} else {
var statearr_55252_56963 = state_55238__$1;
(statearr_55252_56963[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (15))){
var inst_55218 = (state_55238[(9)]);
var inst_55225 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_55218);
var state_55238__$1 = state_55238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55238__$1,(17),out,inst_55225);
} else {
if((state_val_55239 === (13))){
var inst_55218 = (state_55238[(9)]);
var inst_55218__$1 = (state_55238[(2)]);
var inst_55221 = cljs.core.some(cljs.core.nil_QMARK_,inst_55218__$1);
var state_55238__$1 = (function (){var statearr_55260 = state_55238;
(statearr_55260[(9)] = inst_55218__$1);

return statearr_55260;
})();
if(cljs.core.truth_(inst_55221)){
var statearr_55261_56969 = state_55238__$1;
(statearr_55261_56969[(1)] = (14));

} else {
var statearr_55263_56970 = state_55238__$1;
(statearr_55263_56970[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (6))){
var state_55238__$1 = state_55238;
var statearr_55269_56971 = state_55238__$1;
(statearr_55269_56971[(2)] = null);

(statearr_55269_56971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (17))){
var inst_55227 = (state_55238[(2)]);
var state_55238__$1 = (function (){var statearr_55288 = state_55238;
(statearr_55288[(10)] = inst_55227);

return statearr_55288;
})();
var statearr_55289_56972 = state_55238__$1;
(statearr_55289_56972[(2)] = null);

(statearr_55289_56972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (3))){
var inst_55233 = (state_55238[(2)]);
var state_55238__$1 = state_55238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55238__$1,inst_55233);
} else {
if((state_val_55239 === (12))){
var _ = (function (){var statearr_55292 = state_55238;
(statearr_55292[(4)] = cljs.core.rest((state_55238[(4)])));

return statearr_55292;
})();
var state_55238__$1 = state_55238;
var ex55284 = (state_55238__$1[(2)]);
var statearr_55299_56978 = state_55238__$1;
(statearr_55299_56978[(5)] = ex55284);


if((ex55284 instanceof Object)){
var statearr_55300_56979 = state_55238__$1;
(statearr_55300_56979[(1)] = (11));

(statearr_55300_56979[(5)] = null);

} else {
throw ex55284;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (2))){
var inst_55176 = cljs.core.reset_BANG_(dctr,cnt);
var inst_55177 = cnt;
var inst_55179 = (0);
var state_55238__$1 = (function (){var statearr_55311 = state_55238;
(statearr_55311[(7)] = inst_55179);

(statearr_55311[(8)] = inst_55177);

(statearr_55311[(11)] = inst_55176);

return statearr_55311;
})();
var statearr_55312_56980 = state_55238__$1;
(statearr_55312_56980[(2)] = null);

(statearr_55312_56980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (11))){
var inst_55194 = (state_55238[(2)]);
var inst_55195 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_55238__$1 = (function (){var statearr_55316 = state_55238;
(statearr_55316[(12)] = inst_55194);

return statearr_55316;
})();
var statearr_55320_56981 = state_55238__$1;
(statearr_55320_56981[(2)] = inst_55195);

(statearr_55320_56981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (9))){
var inst_55179 = (state_55238[(7)]);
var _ = (function (){var statearr_55326 = state_55238;
(statearr_55326[(4)] = cljs.core.cons((12),(state_55238[(4)])));

return statearr_55326;
})();
var inst_55202 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_55179) : chs__$1.call(null,inst_55179));
var inst_55203 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_55179) : done.call(null,inst_55179));
var inst_55204 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55202,inst_55203);
var ___$1 = (function (){var statearr_55327 = state_55238;
(statearr_55327[(4)] = cljs.core.rest((state_55238[(4)])));

return statearr_55327;
})();
var state_55238__$1 = state_55238;
var statearr_55329_56984 = state_55238__$1;
(statearr_55329_56984[(2)] = inst_55204);

(statearr_55329_56984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (5))){
var inst_55216 = (state_55238[(2)]);
var state_55238__$1 = (function (){var statearr_55334 = state_55238;
(statearr_55334[(13)] = inst_55216);

return statearr_55334;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55238__$1,(13),dchan);
} else {
if((state_val_55239 === (14))){
var inst_55223 = cljs.core.async.close_BANG_(out);
var state_55238__$1 = state_55238;
var statearr_55337_56989 = state_55238__$1;
(statearr_55337_56989[(2)] = inst_55223);

(statearr_55337_56989[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (16))){
var inst_55230 = (state_55238[(2)]);
var state_55238__$1 = state_55238;
var statearr_55340_56993 = state_55238__$1;
(statearr_55340_56993[(2)] = inst_55230);

(statearr_55340_56993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (10))){
var inst_55179 = (state_55238[(7)]);
var inst_55207 = (state_55238[(2)]);
var inst_55210 = (inst_55179 + (1));
var inst_55179__$1 = inst_55210;
var state_55238__$1 = (function (){var statearr_55345 = state_55238;
(statearr_55345[(14)] = inst_55207);

(statearr_55345[(7)] = inst_55179__$1);

return statearr_55345;
})();
var statearr_55346_56994 = state_55238__$1;
(statearr_55346_56994[(2)] = null);

(statearr_55346_56994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55239 === (8))){
var inst_55214 = (state_55238[(2)]);
var state_55238__$1 = state_55238;
var statearr_55347_56995 = state_55238__$1;
(statearr_55347_56995[(2)] = inst_55214);

(statearr_55347_56995[(1)] = (5));


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
var cljs$core$async$state_machine__53101__auto__ = null;
var cljs$core$async$state_machine__53101__auto____0 = (function (){
var statearr_55351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55351[(0)] = cljs$core$async$state_machine__53101__auto__);

(statearr_55351[(1)] = (1));

return statearr_55351;
});
var cljs$core$async$state_machine__53101__auto____1 = (function (state_55238){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_55238);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e55356){var ex__53104__auto__ = e55356;
var statearr_55357_57001 = state_55238;
(statearr_55357_57001[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_55238[(4)]))){
var statearr_55361_57002 = state_55238;
(statearr_55361_57002[(1)] = cljs.core.first((state_55238[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57004 = state_55238;
state_55238 = G__57004;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$state_machine__53101__auto__ = function(state_55238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53101__auto____1.call(this,state_55238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53101__auto____0;
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53101__auto____1;
return cljs$core$async$state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_55369 = f__53175__auto__();
(statearr_55369[(6)] = c__53174__auto___56958);

return statearr_55369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
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
var G__55375 = arguments.length;
switch (G__55375) {
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
var c__53174__auto___57006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_55425){
var state_val_55426 = (state_55425[(1)]);
if((state_val_55426 === (7))){
var inst_55399 = (state_55425[(7)]);
var inst_55398 = (state_55425[(8)]);
var inst_55398__$1 = (state_55425[(2)]);
var inst_55399__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55398__$1,(0),null);
var inst_55400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55398__$1,(1),null);
var inst_55401 = (inst_55399__$1 == null);
var state_55425__$1 = (function (){var statearr_55440 = state_55425;
(statearr_55440[(7)] = inst_55399__$1);

(statearr_55440[(8)] = inst_55398__$1);

(statearr_55440[(9)] = inst_55400);

return statearr_55440;
})();
if(cljs.core.truth_(inst_55401)){
var statearr_55443_57012 = state_55425__$1;
(statearr_55443_57012[(1)] = (8));

} else {
var statearr_55445_57013 = state_55425__$1;
(statearr_55445_57013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55426 === (1))){
var inst_55386 = cljs.core.vec(chs);
var inst_55387 = inst_55386;
var state_55425__$1 = (function (){var statearr_55447 = state_55425;
(statearr_55447[(10)] = inst_55387);

return statearr_55447;
})();
var statearr_55448_57015 = state_55425__$1;
(statearr_55448_57015[(2)] = null);

(statearr_55448_57015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55426 === (4))){
var inst_55387 = (state_55425[(10)]);
var state_55425__$1 = state_55425;
return cljs.core.async.ioc_alts_BANG_(state_55425__$1,(7),inst_55387);
} else {
if((state_val_55426 === (6))){
var inst_55420 = (state_55425[(2)]);
var state_55425__$1 = state_55425;
var statearr_55452_57016 = state_55425__$1;
(statearr_55452_57016[(2)] = inst_55420);

(statearr_55452_57016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55426 === (3))){
var inst_55422 = (state_55425[(2)]);
var state_55425__$1 = state_55425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55425__$1,inst_55422);
} else {
if((state_val_55426 === (2))){
var inst_55387 = (state_55425[(10)]);
var inst_55390 = cljs.core.count(inst_55387);
var inst_55391 = (inst_55390 > (0));
var state_55425__$1 = state_55425;
if(cljs.core.truth_(inst_55391)){
var statearr_55468_57018 = state_55425__$1;
(statearr_55468_57018[(1)] = (4));

} else {
var statearr_55471_57019 = state_55425__$1;
(statearr_55471_57019[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55426 === (11))){
var inst_55387 = (state_55425[(10)]);
var inst_55413 = (state_55425[(2)]);
var tmp55453 = inst_55387;
var inst_55387__$1 = tmp55453;
var state_55425__$1 = (function (){var statearr_55472 = state_55425;
(statearr_55472[(10)] = inst_55387__$1);

(statearr_55472[(11)] = inst_55413);

return statearr_55472;
})();
var statearr_55475_57020 = state_55425__$1;
(statearr_55475_57020[(2)] = null);

(statearr_55475_57020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55426 === (9))){
var inst_55399 = (state_55425[(7)]);
var state_55425__$1 = state_55425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55425__$1,(11),out,inst_55399);
} else {
if((state_val_55426 === (5))){
var inst_55418 = cljs.core.async.close_BANG_(out);
var state_55425__$1 = state_55425;
var statearr_55478_57024 = state_55425__$1;
(statearr_55478_57024[(2)] = inst_55418);

(statearr_55478_57024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55426 === (10))){
var inst_55416 = (state_55425[(2)]);
var state_55425__$1 = state_55425;
var statearr_55483_57026 = state_55425__$1;
(statearr_55483_57026[(2)] = inst_55416);

(statearr_55483_57026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55426 === (8))){
var inst_55387 = (state_55425[(10)]);
var inst_55399 = (state_55425[(7)]);
var inst_55398 = (state_55425[(8)]);
var inst_55400 = (state_55425[(9)]);
var inst_55405 = (function (){var cs = inst_55387;
var vec__55394 = inst_55398;
var v = inst_55399;
var c = inst_55400;
return (function (p1__55370_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__55370_SHARP_);
});
})();
var inst_55407 = cljs.core.filterv(inst_55405,inst_55387);
var inst_55387__$1 = inst_55407;
var state_55425__$1 = (function (){var statearr_55489 = state_55425;
(statearr_55489[(10)] = inst_55387__$1);

return statearr_55489;
})();
var statearr_55491_57027 = state_55425__$1;
(statearr_55491_57027[(2)] = null);

(statearr_55491_57027[(1)] = (2));


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
var cljs$core$async$state_machine__53101__auto__ = null;
var cljs$core$async$state_machine__53101__auto____0 = (function (){
var statearr_55492 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55492[(0)] = cljs$core$async$state_machine__53101__auto__);

(statearr_55492[(1)] = (1));

return statearr_55492;
});
var cljs$core$async$state_machine__53101__auto____1 = (function (state_55425){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_55425);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e55497){var ex__53104__auto__ = e55497;
var statearr_55498_57029 = state_55425;
(statearr_55498_57029[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_55425[(4)]))){
var statearr_55499_57030 = state_55425;
(statearr_55499_57030[(1)] = cljs.core.first((state_55425[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57031 = state_55425;
state_55425 = G__57031;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$state_machine__53101__auto__ = function(state_55425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53101__auto____1.call(this,state_55425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53101__auto____0;
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53101__auto____1;
return cljs$core$async$state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_55501 = f__53175__auto__();
(statearr_55501[(6)] = c__53174__auto___57006);

return statearr_55501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
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
var G__55512 = arguments.length;
switch (G__55512) {
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
var c__53174__auto___57035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_55544){
var state_val_55545 = (state_55544[(1)]);
if((state_val_55545 === (7))){
var inst_55523 = (state_55544[(7)]);
var inst_55523__$1 = (state_55544[(2)]);
var inst_55525 = (inst_55523__$1 == null);
var inst_55526 = cljs.core.not(inst_55525);
var state_55544__$1 = (function (){var statearr_55549 = state_55544;
(statearr_55549[(7)] = inst_55523__$1);

return statearr_55549;
})();
if(inst_55526){
var statearr_55552_57040 = state_55544__$1;
(statearr_55552_57040[(1)] = (8));

} else {
var statearr_55553_57041 = state_55544__$1;
(statearr_55553_57041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55545 === (1))){
var inst_55518 = (0);
var state_55544__$1 = (function (){var statearr_55556 = state_55544;
(statearr_55556[(8)] = inst_55518);

return statearr_55556;
})();
var statearr_55557_57044 = state_55544__$1;
(statearr_55557_57044[(2)] = null);

(statearr_55557_57044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55545 === (4))){
var state_55544__$1 = state_55544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55544__$1,(7),ch);
} else {
if((state_val_55545 === (6))){
var inst_55537 = (state_55544[(2)]);
var state_55544__$1 = state_55544;
var statearr_55561_57050 = state_55544__$1;
(statearr_55561_57050[(2)] = inst_55537);

(statearr_55561_57050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55545 === (3))){
var inst_55539 = (state_55544[(2)]);
var inst_55540 = cljs.core.async.close_BANG_(out);
var state_55544__$1 = (function (){var statearr_55564 = state_55544;
(statearr_55564[(9)] = inst_55539);

return statearr_55564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55544__$1,inst_55540);
} else {
if((state_val_55545 === (2))){
var inst_55518 = (state_55544[(8)]);
var inst_55520 = (inst_55518 < n);
var state_55544__$1 = state_55544;
if(cljs.core.truth_(inst_55520)){
var statearr_55566_57054 = state_55544__$1;
(statearr_55566_57054[(1)] = (4));

} else {
var statearr_55567_57055 = state_55544__$1;
(statearr_55567_57055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55545 === (11))){
var inst_55518 = (state_55544[(8)]);
var inst_55529 = (state_55544[(2)]);
var inst_55530 = (inst_55518 + (1));
var inst_55518__$1 = inst_55530;
var state_55544__$1 = (function (){var statearr_55572 = state_55544;
(statearr_55572[(8)] = inst_55518__$1);

(statearr_55572[(10)] = inst_55529);

return statearr_55572;
})();
var statearr_55573_57056 = state_55544__$1;
(statearr_55573_57056[(2)] = null);

(statearr_55573_57056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55545 === (9))){
var state_55544__$1 = state_55544;
var statearr_55575_57058 = state_55544__$1;
(statearr_55575_57058[(2)] = null);

(statearr_55575_57058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55545 === (5))){
var state_55544__$1 = state_55544;
var statearr_55578_57060 = state_55544__$1;
(statearr_55578_57060[(2)] = null);

(statearr_55578_57060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55545 === (10))){
var inst_55534 = (state_55544[(2)]);
var state_55544__$1 = state_55544;
var statearr_55581_57063 = state_55544__$1;
(statearr_55581_57063[(2)] = inst_55534);

(statearr_55581_57063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55545 === (8))){
var inst_55523 = (state_55544[(7)]);
var state_55544__$1 = state_55544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55544__$1,(11),out,inst_55523);
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
var cljs$core$async$state_machine__53101__auto__ = null;
var cljs$core$async$state_machine__53101__auto____0 = (function (){
var statearr_55582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55582[(0)] = cljs$core$async$state_machine__53101__auto__);

(statearr_55582[(1)] = (1));

return statearr_55582;
});
var cljs$core$async$state_machine__53101__auto____1 = (function (state_55544){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_55544);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e55584){var ex__53104__auto__ = e55584;
var statearr_55585_57067 = state_55544;
(statearr_55585_57067[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_55544[(4)]))){
var statearr_55588_57069 = state_55544;
(statearr_55588_57069[(1)] = cljs.core.first((state_55544[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57070 = state_55544;
state_55544 = G__57070;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$state_machine__53101__auto__ = function(state_55544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53101__auto____1.call(this,state_55544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53101__auto____0;
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53101__auto____1;
return cljs$core$async$state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_55591 = f__53175__auto__();
(statearr_55591[(6)] = c__53174__auto___57035);

return statearr_55591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55598 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55598 = (function (f,ch,meta55599){
this.f = f;
this.ch = ch;
this.meta55599 = meta55599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55600,meta55599__$1){
var self__ = this;
var _55600__$1 = this;
return (new cljs.core.async.t_cljs$core$async55598(self__.f,self__.ch,meta55599__$1));
}));

(cljs.core.async.t_cljs$core$async55598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55600){
var self__ = this;
var _55600__$1 = this;
return self__.meta55599;
}));

(cljs.core.async.t_cljs$core$async55598.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55598.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55598.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55598.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55598.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55611 = (function (f,ch,meta55599,_,fn1,meta55612){
this.f = f;
this.ch = ch;
this.meta55599 = meta55599;
this._ = _;
this.fn1 = fn1;
this.meta55612 = meta55612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55613,meta55612__$1){
var self__ = this;
var _55613__$1 = this;
return (new cljs.core.async.t_cljs$core$async55611(self__.f,self__.ch,self__.meta55599,self__._,self__.fn1,meta55612__$1));
}));

(cljs.core.async.t_cljs$core$async55611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55613){
var self__ = this;
var _55613__$1 = this;
return self__.meta55612;
}));

(cljs.core.async.t_cljs$core$async55611.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async55611.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__55595_SHARP_){
var G__55624 = (((p1__55595_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__55595_SHARP_) : self__.f.call(null,p1__55595_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__55624) : f1.call(null,G__55624));
});
}));

(cljs.core.async.t_cljs$core$async55611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55599","meta55599",-486158318,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55598","cljs.core.async/t_cljs$core$async55598",53454405,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55612","meta55612",-1491023400,null)], null);
}));

(cljs.core.async.t_cljs$core$async55611.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55611");

(cljs.core.async.t_cljs$core$async55611.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async55611");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55611.
 */
cljs.core.async.__GT_t_cljs$core$async55611 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55611(f__$1,ch__$1,meta55599__$1,___$2,fn1__$1,meta55612){
return (new cljs.core.async.t_cljs$core$async55611(f__$1,ch__$1,meta55599__$1,___$2,fn1__$1,meta55612));
});

}

return (new cljs.core.async.t_cljs$core$async55611(self__.f,self__.ch,self__.meta55599,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__55631 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__55631) : self__.f.call(null,G__55631));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async55598.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55598.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async55598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55599","meta55599",-486158318,null)], null);
}));

(cljs.core.async.t_cljs$core$async55598.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55598");

(cljs.core.async.t_cljs$core$async55598.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async55598");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55598.
 */
cljs.core.async.__GT_t_cljs$core$async55598 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55598(f__$1,ch__$1,meta55599){
return (new cljs.core.async.t_cljs$core$async55598(f__$1,ch__$1,meta55599));
});

}

return (new cljs.core.async.t_cljs$core$async55598(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55642 = (function (f,ch,meta55643){
this.f = f;
this.ch = ch;
this.meta55643 = meta55643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55644,meta55643__$1){
var self__ = this;
var _55644__$1 = this;
return (new cljs.core.async.t_cljs$core$async55642(self__.f,self__.ch,meta55643__$1));
}));

(cljs.core.async.t_cljs$core$async55642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55644){
var self__ = this;
var _55644__$1 = this;
return self__.meta55643;
}));

(cljs.core.async.t_cljs$core$async55642.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55642.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55642.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async55642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55643","meta55643",1549886853,null)], null);
}));

(cljs.core.async.t_cljs$core$async55642.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55642");

(cljs.core.async.t_cljs$core$async55642.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async55642");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55642.
 */
cljs.core.async.__GT_t_cljs$core$async55642 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async55642(f__$1,ch__$1,meta55643){
return (new cljs.core.async.t_cljs$core$async55642(f__$1,ch__$1,meta55643));
});

}

return (new cljs.core.async.t_cljs$core$async55642(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55662 = (function (p,ch,meta55663){
this.p = p;
this.ch = ch;
this.meta55663 = meta55663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55664,meta55663__$1){
var self__ = this;
var _55664__$1 = this;
return (new cljs.core.async.t_cljs$core$async55662(self__.p,self__.ch,meta55663__$1));
}));

(cljs.core.async.t_cljs$core$async55662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55664){
var self__ = this;
var _55664__$1 = this;
return self__.meta55663;
}));

(cljs.core.async.t_cljs$core$async55662.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55662.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55662.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55662.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55662.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55662.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55662.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async55662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55663","meta55663",550413371,null)], null);
}));

(cljs.core.async.t_cljs$core$async55662.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55662");

(cljs.core.async.t_cljs$core$async55662.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async55662");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55662.
 */
cljs.core.async.__GT_t_cljs$core$async55662 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async55662(p__$1,ch__$1,meta55663){
return (new cljs.core.async.t_cljs$core$async55662(p__$1,ch__$1,meta55663));
});

}

return (new cljs.core.async.t_cljs$core$async55662(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__55690 = arguments.length;
switch (G__55690) {
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
var c__53174__auto___57097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_55719){
var state_val_55720 = (state_55719[(1)]);
if((state_val_55720 === (7))){
var inst_55715 = (state_55719[(2)]);
var state_55719__$1 = state_55719;
var statearr_55722_57099 = state_55719__$1;
(statearr_55722_57099[(2)] = inst_55715);

(statearr_55722_57099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (1))){
var state_55719__$1 = state_55719;
var statearr_55725_57100 = state_55719__$1;
(statearr_55725_57100[(2)] = null);

(statearr_55725_57100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (4))){
var inst_55700 = (state_55719[(7)]);
var inst_55700__$1 = (state_55719[(2)]);
var inst_55701 = (inst_55700__$1 == null);
var state_55719__$1 = (function (){var statearr_55728 = state_55719;
(statearr_55728[(7)] = inst_55700__$1);

return statearr_55728;
})();
if(cljs.core.truth_(inst_55701)){
var statearr_55729_57101 = state_55719__$1;
(statearr_55729_57101[(1)] = (5));

} else {
var statearr_55730_57102 = state_55719__$1;
(statearr_55730_57102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (6))){
var inst_55700 = (state_55719[(7)]);
var inst_55705 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55700) : p.call(null,inst_55700));
var state_55719__$1 = state_55719;
if(cljs.core.truth_(inst_55705)){
var statearr_55731_57108 = state_55719__$1;
(statearr_55731_57108[(1)] = (8));

} else {
var statearr_55732_57109 = state_55719__$1;
(statearr_55732_57109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (3))){
var inst_55717 = (state_55719[(2)]);
var state_55719__$1 = state_55719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55719__$1,inst_55717);
} else {
if((state_val_55720 === (2))){
var state_55719__$1 = state_55719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55719__$1,(4),ch);
} else {
if((state_val_55720 === (11))){
var inst_55708 = (state_55719[(2)]);
var state_55719__$1 = state_55719;
var statearr_55734_57112 = state_55719__$1;
(statearr_55734_57112[(2)] = inst_55708);

(statearr_55734_57112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (9))){
var state_55719__$1 = state_55719;
var statearr_55737_57113 = state_55719__$1;
(statearr_55737_57113[(2)] = null);

(statearr_55737_57113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (5))){
var inst_55703 = cljs.core.async.close_BANG_(out);
var state_55719__$1 = state_55719;
var statearr_55740_57115 = state_55719__$1;
(statearr_55740_57115[(2)] = inst_55703);

(statearr_55740_57115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (10))){
var inst_55711 = (state_55719[(2)]);
var state_55719__$1 = (function (){var statearr_55742 = state_55719;
(statearr_55742[(8)] = inst_55711);

return statearr_55742;
})();
var statearr_55743_57116 = state_55719__$1;
(statearr_55743_57116[(2)] = null);

(statearr_55743_57116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (8))){
var inst_55700 = (state_55719[(7)]);
var state_55719__$1 = state_55719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55719__$1,(11),out,inst_55700);
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
var cljs$core$async$state_machine__53101__auto__ = null;
var cljs$core$async$state_machine__53101__auto____0 = (function (){
var statearr_55748 = [null,null,null,null,null,null,null,null,null];
(statearr_55748[(0)] = cljs$core$async$state_machine__53101__auto__);

(statearr_55748[(1)] = (1));

return statearr_55748;
});
var cljs$core$async$state_machine__53101__auto____1 = (function (state_55719){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_55719);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e55750){var ex__53104__auto__ = e55750;
var statearr_55751_57121 = state_55719;
(statearr_55751_57121[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_55719[(4)]))){
var statearr_55752_57122 = state_55719;
(statearr_55752_57122[(1)] = cljs.core.first((state_55719[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57123 = state_55719;
state_55719 = G__57123;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$state_machine__53101__auto__ = function(state_55719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53101__auto____1.call(this,state_55719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53101__auto____0;
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53101__auto____1;
return cljs$core$async$state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_55756 = f__53175__auto__();
(statearr_55756[(6)] = c__53174__auto___57097);

return statearr_55756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__55760 = arguments.length;
switch (G__55760) {
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
var c__53174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_55837){
var state_val_55838 = (state_55837[(1)]);
if((state_val_55838 === (7))){
var inst_55833 = (state_55837[(2)]);
var state_55837__$1 = state_55837;
var statearr_55842_57132 = state_55837__$1;
(statearr_55842_57132[(2)] = inst_55833);

(statearr_55842_57132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (20))){
var inst_55800 = (state_55837[(7)]);
var inst_55814 = (state_55837[(2)]);
var inst_55815 = cljs.core.next(inst_55800);
var inst_55783 = inst_55815;
var inst_55784 = null;
var inst_55785 = (0);
var inst_55786 = (0);
var state_55837__$1 = (function (){var statearr_55843 = state_55837;
(statearr_55843[(8)] = inst_55814);

(statearr_55843[(9)] = inst_55784);

(statearr_55843[(10)] = inst_55786);

(statearr_55843[(11)] = inst_55785);

(statearr_55843[(12)] = inst_55783);

return statearr_55843;
})();
var statearr_55845_57136 = state_55837__$1;
(statearr_55845_57136[(2)] = null);

(statearr_55845_57136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (1))){
var state_55837__$1 = state_55837;
var statearr_55846_57137 = state_55837__$1;
(statearr_55846_57137[(2)] = null);

(statearr_55846_57137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (4))){
var inst_55769 = (state_55837[(13)]);
var inst_55769__$1 = (state_55837[(2)]);
var inst_55770 = (inst_55769__$1 == null);
var state_55837__$1 = (function (){var statearr_55851 = state_55837;
(statearr_55851[(13)] = inst_55769__$1);

return statearr_55851;
})();
if(cljs.core.truth_(inst_55770)){
var statearr_55852_57141 = state_55837__$1;
(statearr_55852_57141[(1)] = (5));

} else {
var statearr_55853_57142 = state_55837__$1;
(statearr_55853_57142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (15))){
var state_55837__$1 = state_55837;
var statearr_55858_57145 = state_55837__$1;
(statearr_55858_57145[(2)] = null);

(statearr_55858_57145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (21))){
var state_55837__$1 = state_55837;
var statearr_55859_57149 = state_55837__$1;
(statearr_55859_57149[(2)] = null);

(statearr_55859_57149[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (13))){
var inst_55784 = (state_55837[(9)]);
var inst_55786 = (state_55837[(10)]);
var inst_55785 = (state_55837[(11)]);
var inst_55783 = (state_55837[(12)]);
var inst_55793 = (state_55837[(2)]);
var inst_55794 = (inst_55786 + (1));
var tmp55854 = inst_55784;
var tmp55855 = inst_55785;
var tmp55856 = inst_55783;
var inst_55783__$1 = tmp55856;
var inst_55784__$1 = tmp55854;
var inst_55785__$1 = tmp55855;
var inst_55786__$1 = inst_55794;
var state_55837__$1 = (function (){var statearr_55862 = state_55837;
(statearr_55862[(9)] = inst_55784__$1);

(statearr_55862[(10)] = inst_55786__$1);

(statearr_55862[(11)] = inst_55785__$1);

(statearr_55862[(12)] = inst_55783__$1);

(statearr_55862[(14)] = inst_55793);

return statearr_55862;
})();
var statearr_55865_57153 = state_55837__$1;
(statearr_55865_57153[(2)] = null);

(statearr_55865_57153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (22))){
var state_55837__$1 = state_55837;
var statearr_55868_57157 = state_55837__$1;
(statearr_55868_57157[(2)] = null);

(statearr_55868_57157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (6))){
var inst_55769 = (state_55837[(13)]);
var inst_55780 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55769) : f.call(null,inst_55769));
var inst_55781 = cljs.core.seq(inst_55780);
var inst_55783 = inst_55781;
var inst_55784 = null;
var inst_55785 = (0);
var inst_55786 = (0);
var state_55837__$1 = (function (){var statearr_55872 = state_55837;
(statearr_55872[(9)] = inst_55784);

(statearr_55872[(10)] = inst_55786);

(statearr_55872[(11)] = inst_55785);

(statearr_55872[(12)] = inst_55783);

return statearr_55872;
})();
var statearr_55875_57161 = state_55837__$1;
(statearr_55875_57161[(2)] = null);

(statearr_55875_57161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (17))){
var inst_55800 = (state_55837[(7)]);
var inst_55804 = cljs.core.chunk_first(inst_55800);
var inst_55805 = cljs.core.chunk_rest(inst_55800);
var inst_55806 = cljs.core.count(inst_55804);
var inst_55783 = inst_55805;
var inst_55784 = inst_55804;
var inst_55785 = inst_55806;
var inst_55786 = (0);
var state_55837__$1 = (function (){var statearr_55877 = state_55837;
(statearr_55877[(9)] = inst_55784);

(statearr_55877[(10)] = inst_55786);

(statearr_55877[(11)] = inst_55785);

(statearr_55877[(12)] = inst_55783);

return statearr_55877;
})();
var statearr_55878_57164 = state_55837__$1;
(statearr_55878_57164[(2)] = null);

(statearr_55878_57164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (3))){
var inst_55835 = (state_55837[(2)]);
var state_55837__$1 = state_55837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55837__$1,inst_55835);
} else {
if((state_val_55838 === (12))){
var inst_55823 = (state_55837[(2)]);
var state_55837__$1 = state_55837;
var statearr_55883_57166 = state_55837__$1;
(statearr_55883_57166[(2)] = inst_55823);

(statearr_55883_57166[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (2))){
var state_55837__$1 = state_55837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55837__$1,(4),in$);
} else {
if((state_val_55838 === (23))){
var inst_55831 = (state_55837[(2)]);
var state_55837__$1 = state_55837;
var statearr_55885_57167 = state_55837__$1;
(statearr_55885_57167[(2)] = inst_55831);

(statearr_55885_57167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (19))){
var inst_55818 = (state_55837[(2)]);
var state_55837__$1 = state_55837;
var statearr_55886_57168 = state_55837__$1;
(statearr_55886_57168[(2)] = inst_55818);

(statearr_55886_57168[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (11))){
var inst_55783 = (state_55837[(12)]);
var inst_55800 = (state_55837[(7)]);
var inst_55800__$1 = cljs.core.seq(inst_55783);
var state_55837__$1 = (function (){var statearr_55891 = state_55837;
(statearr_55891[(7)] = inst_55800__$1);

return statearr_55891;
})();
if(inst_55800__$1){
var statearr_55892_57169 = state_55837__$1;
(statearr_55892_57169[(1)] = (14));

} else {
var statearr_55893_57170 = state_55837__$1;
(statearr_55893_57170[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (9))){
var inst_55825 = (state_55837[(2)]);
var inst_55826 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_55837__$1 = (function (){var statearr_55894 = state_55837;
(statearr_55894[(15)] = inst_55825);

return statearr_55894;
})();
if(cljs.core.truth_(inst_55826)){
var statearr_55895_57172 = state_55837__$1;
(statearr_55895_57172[(1)] = (21));

} else {
var statearr_55896_57173 = state_55837__$1;
(statearr_55896_57173[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (5))){
var inst_55773 = cljs.core.async.close_BANG_(out);
var state_55837__$1 = state_55837;
var statearr_55899_57174 = state_55837__$1;
(statearr_55899_57174[(2)] = inst_55773);

(statearr_55899_57174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (14))){
var inst_55800 = (state_55837[(7)]);
var inst_55802 = cljs.core.chunked_seq_QMARK_(inst_55800);
var state_55837__$1 = state_55837;
if(inst_55802){
var statearr_55904_57175 = state_55837__$1;
(statearr_55904_57175[(1)] = (17));

} else {
var statearr_55906_57176 = state_55837__$1;
(statearr_55906_57176[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (16))){
var inst_55821 = (state_55837[(2)]);
var state_55837__$1 = state_55837;
var statearr_55908_57177 = state_55837__$1;
(statearr_55908_57177[(2)] = inst_55821);

(statearr_55908_57177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55838 === (10))){
var inst_55784 = (state_55837[(9)]);
var inst_55786 = (state_55837[(10)]);
var inst_55791 = cljs.core._nth(inst_55784,inst_55786);
var state_55837__$1 = state_55837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55837__$1,(13),out,inst_55791);
} else {
if((state_val_55838 === (18))){
var inst_55800 = (state_55837[(7)]);
var inst_55810 = cljs.core.first(inst_55800);
var state_55837__$1 = state_55837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55837__$1,(20),out,inst_55810);
} else {
if((state_val_55838 === (8))){
var inst_55786 = (state_55837[(10)]);
var inst_55785 = (state_55837[(11)]);
var inst_55788 = (inst_55786 < inst_55785);
var inst_55789 = inst_55788;
var state_55837__$1 = state_55837;
if(cljs.core.truth_(inst_55789)){
var statearr_55916_57179 = state_55837__$1;
(statearr_55916_57179[(1)] = (10));

} else {
var statearr_55917_57180 = state_55837__$1;
(statearr_55917_57180[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__53101__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__53101__auto____0 = (function (){
var statearr_55924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55924[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__53101__auto__);

(statearr_55924[(1)] = (1));

return statearr_55924;
});
var cljs$core$async$mapcat_STAR__$_state_machine__53101__auto____1 = (function (state_55837){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_55837);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e55926){var ex__53104__auto__ = e55926;
var statearr_55927_57183 = state_55837;
(statearr_55927_57183[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_55837[(4)]))){
var statearr_55929_57184 = state_55837;
(statearr_55929_57184[(1)] = cljs.core.first((state_55837[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57185 = state_55837;
state_55837 = G__57185;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__53101__auto__ = function(state_55837){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__53101__auto____1.call(this,state_55837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__53101__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__53101__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_55937 = f__53175__auto__();
(statearr_55937[(6)] = c__53174__auto__);

return statearr_55937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));

return c__53174__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__55945 = arguments.length;
switch (G__55945) {
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
var G__55960 = arguments.length;
switch (G__55960) {
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
var G__55967 = arguments.length;
switch (G__55967) {
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
var c__53174__auto___57192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_55992){
var state_val_55993 = (state_55992[(1)]);
if((state_val_55993 === (7))){
var inst_55987 = (state_55992[(2)]);
var state_55992__$1 = state_55992;
var statearr_56002_57195 = state_55992__$1;
(statearr_56002_57195[(2)] = inst_55987);

(statearr_56002_57195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55993 === (1))){
var inst_55969 = null;
var state_55992__$1 = (function (){var statearr_56006 = state_55992;
(statearr_56006[(7)] = inst_55969);

return statearr_56006;
})();
var statearr_56007_57198 = state_55992__$1;
(statearr_56007_57198[(2)] = null);

(statearr_56007_57198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55993 === (4))){
var inst_55972 = (state_55992[(8)]);
var inst_55972__$1 = (state_55992[(2)]);
var inst_55973 = (inst_55972__$1 == null);
var inst_55974 = cljs.core.not(inst_55973);
var state_55992__$1 = (function (){var statearr_56009 = state_55992;
(statearr_56009[(8)] = inst_55972__$1);

return statearr_56009;
})();
if(inst_55974){
var statearr_56010_57199 = state_55992__$1;
(statearr_56010_57199[(1)] = (5));

} else {
var statearr_56011_57200 = state_55992__$1;
(statearr_56011_57200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55993 === (6))){
var state_55992__$1 = state_55992;
var statearr_56012_57201 = state_55992__$1;
(statearr_56012_57201[(2)] = null);

(statearr_56012_57201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55993 === (3))){
var inst_55989 = (state_55992[(2)]);
var inst_55990 = cljs.core.async.close_BANG_(out);
var state_55992__$1 = (function (){var statearr_56014 = state_55992;
(statearr_56014[(9)] = inst_55989);

return statearr_56014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55992__$1,inst_55990);
} else {
if((state_val_55993 === (2))){
var state_55992__$1 = state_55992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55992__$1,(4),ch);
} else {
if((state_val_55993 === (11))){
var inst_55972 = (state_55992[(8)]);
var inst_55981 = (state_55992[(2)]);
var inst_55969 = inst_55972;
var state_55992__$1 = (function (){var statearr_56016 = state_55992;
(statearr_56016[(7)] = inst_55969);

(statearr_56016[(10)] = inst_55981);

return statearr_56016;
})();
var statearr_56017_57204 = state_55992__$1;
(statearr_56017_57204[(2)] = null);

(statearr_56017_57204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55993 === (9))){
var inst_55972 = (state_55992[(8)]);
var state_55992__$1 = state_55992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55992__$1,(11),out,inst_55972);
} else {
if((state_val_55993 === (5))){
var inst_55972 = (state_55992[(8)]);
var inst_55969 = (state_55992[(7)]);
var inst_55976 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55972,inst_55969);
var state_55992__$1 = state_55992;
if(inst_55976){
var statearr_56019_57206 = state_55992__$1;
(statearr_56019_57206[(1)] = (8));

} else {
var statearr_56020_57207 = state_55992__$1;
(statearr_56020_57207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55993 === (10))){
var inst_55984 = (state_55992[(2)]);
var state_55992__$1 = state_55992;
var statearr_56021_57208 = state_55992__$1;
(statearr_56021_57208[(2)] = inst_55984);

(statearr_56021_57208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55993 === (8))){
var inst_55969 = (state_55992[(7)]);
var tmp56018 = inst_55969;
var inst_55969__$1 = tmp56018;
var state_55992__$1 = (function (){var statearr_56022 = state_55992;
(statearr_56022[(7)] = inst_55969__$1);

return statearr_56022;
})();
var statearr_56023_57211 = state_55992__$1;
(statearr_56023_57211[(2)] = null);

(statearr_56023_57211[(1)] = (2));


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
var cljs$core$async$state_machine__53101__auto__ = null;
var cljs$core$async$state_machine__53101__auto____0 = (function (){
var statearr_56024 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56024[(0)] = cljs$core$async$state_machine__53101__auto__);

(statearr_56024[(1)] = (1));

return statearr_56024;
});
var cljs$core$async$state_machine__53101__auto____1 = (function (state_55992){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_55992);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e56025){var ex__53104__auto__ = e56025;
var statearr_56026_57213 = state_55992;
(statearr_56026_57213[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_55992[(4)]))){
var statearr_56027_57214 = state_55992;
(statearr_56027_57214[(1)] = cljs.core.first((state_55992[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57215 = state_55992;
state_55992 = G__57215;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$state_machine__53101__auto__ = function(state_55992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53101__auto____1.call(this,state_55992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53101__auto____0;
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53101__auto____1;
return cljs$core$async$state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_56028 = f__53175__auto__();
(statearr_56028[(6)] = c__53174__auto___57192);

return statearr_56028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__56031 = arguments.length;
switch (G__56031) {
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
var c__53174__auto___57221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_56084){
var state_val_56085 = (state_56084[(1)]);
if((state_val_56085 === (7))){
var inst_56080 = (state_56084[(2)]);
var state_56084__$1 = state_56084;
var statearr_56086_57222 = state_56084__$1;
(statearr_56086_57222[(2)] = inst_56080);

(statearr_56086_57222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56085 === (1))){
var inst_56042 = (new Array(n));
var inst_56043 = inst_56042;
var inst_56044 = (0);
var state_56084__$1 = (function (){var statearr_56088 = state_56084;
(statearr_56088[(7)] = inst_56043);

(statearr_56088[(8)] = inst_56044);

return statearr_56088;
})();
var statearr_56090_57224 = state_56084__$1;
(statearr_56090_57224[(2)] = null);

(statearr_56090_57224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56085 === (4))){
var inst_56047 = (state_56084[(9)]);
var inst_56047__$1 = (state_56084[(2)]);
var inst_56048 = (inst_56047__$1 == null);
var inst_56049 = cljs.core.not(inst_56048);
var state_56084__$1 = (function (){var statearr_56092 = state_56084;
(statearr_56092[(9)] = inst_56047__$1);

return statearr_56092;
})();
if(inst_56049){
var statearr_56093_57225 = state_56084__$1;
(statearr_56093_57225[(1)] = (5));

} else {
var statearr_56096_57226 = state_56084__$1;
(statearr_56096_57226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56085 === (15))){
var inst_56074 = (state_56084[(2)]);
var state_56084__$1 = state_56084;
var statearr_56098_57227 = state_56084__$1;
(statearr_56098_57227[(2)] = inst_56074);

(statearr_56098_57227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56085 === (13))){
var state_56084__$1 = state_56084;
var statearr_56099_57229 = state_56084__$1;
(statearr_56099_57229[(2)] = null);

(statearr_56099_57229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56085 === (6))){
var inst_56044 = (state_56084[(8)]);
var inst_56069 = (inst_56044 > (0));
var state_56084__$1 = state_56084;
if(cljs.core.truth_(inst_56069)){
var statearr_56100_57230 = state_56084__$1;
(statearr_56100_57230[(1)] = (12));

} else {
var statearr_56101_57231 = state_56084__$1;
(statearr_56101_57231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56085 === (3))){
var inst_56082 = (state_56084[(2)]);
var state_56084__$1 = state_56084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56084__$1,inst_56082);
} else {
if((state_val_56085 === (12))){
var inst_56043 = (state_56084[(7)]);
var inst_56072 = cljs.core.vec(inst_56043);
var state_56084__$1 = state_56084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56084__$1,(15),out,inst_56072);
} else {
if((state_val_56085 === (2))){
var state_56084__$1 = state_56084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56084__$1,(4),ch);
} else {
if((state_val_56085 === (11))){
var inst_56063 = (state_56084[(2)]);
var inst_56064 = (new Array(n));
var inst_56043 = inst_56064;
var inst_56044 = (0);
var state_56084__$1 = (function (){var statearr_56106 = state_56084;
(statearr_56106[(7)] = inst_56043);

(statearr_56106[(10)] = inst_56063);

(statearr_56106[(8)] = inst_56044);

return statearr_56106;
})();
var statearr_56107_57237 = state_56084__$1;
(statearr_56107_57237[(2)] = null);

(statearr_56107_57237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56085 === (9))){
var inst_56043 = (state_56084[(7)]);
var inst_56061 = cljs.core.vec(inst_56043);
var state_56084__$1 = state_56084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56084__$1,(11),out,inst_56061);
} else {
if((state_val_56085 === (5))){
var inst_56043 = (state_56084[(7)]);
var inst_56047 = (state_56084[(9)]);
var inst_56053 = (state_56084[(11)]);
var inst_56044 = (state_56084[(8)]);
var inst_56052 = (inst_56043[inst_56044] = inst_56047);
var inst_56053__$1 = (inst_56044 + (1));
var inst_56054 = (inst_56053__$1 < n);
var state_56084__$1 = (function (){var statearr_56110 = state_56084;
(statearr_56110[(12)] = inst_56052);

(statearr_56110[(11)] = inst_56053__$1);

return statearr_56110;
})();
if(cljs.core.truth_(inst_56054)){
var statearr_56111_57239 = state_56084__$1;
(statearr_56111_57239[(1)] = (8));

} else {
var statearr_56112_57240 = state_56084__$1;
(statearr_56112_57240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56085 === (14))){
var inst_56077 = (state_56084[(2)]);
var inst_56078 = cljs.core.async.close_BANG_(out);
var state_56084__$1 = (function (){var statearr_56114 = state_56084;
(statearr_56114[(13)] = inst_56077);

return statearr_56114;
})();
var statearr_56115_57245 = state_56084__$1;
(statearr_56115_57245[(2)] = inst_56078);

(statearr_56115_57245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56085 === (10))){
var inst_56067 = (state_56084[(2)]);
var state_56084__$1 = state_56084;
var statearr_56116_57247 = state_56084__$1;
(statearr_56116_57247[(2)] = inst_56067);

(statearr_56116_57247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56085 === (8))){
var inst_56043 = (state_56084[(7)]);
var inst_56053 = (state_56084[(11)]);
var tmp56113 = inst_56043;
var inst_56043__$1 = tmp56113;
var inst_56044 = inst_56053;
var state_56084__$1 = (function (){var statearr_56117 = state_56084;
(statearr_56117[(7)] = inst_56043__$1);

(statearr_56117[(8)] = inst_56044);

return statearr_56117;
})();
var statearr_56118_57248 = state_56084__$1;
(statearr_56118_57248[(2)] = null);

(statearr_56118_57248[(1)] = (2));


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
var cljs$core$async$state_machine__53101__auto__ = null;
var cljs$core$async$state_machine__53101__auto____0 = (function (){
var statearr_56119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56119[(0)] = cljs$core$async$state_machine__53101__auto__);

(statearr_56119[(1)] = (1));

return statearr_56119;
});
var cljs$core$async$state_machine__53101__auto____1 = (function (state_56084){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_56084);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e56121){var ex__53104__auto__ = e56121;
var statearr_56122_57251 = state_56084;
(statearr_56122_57251[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_56084[(4)]))){
var statearr_56124_57252 = state_56084;
(statearr_56124_57252[(1)] = cljs.core.first((state_56084[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57253 = state_56084;
state_56084 = G__57253;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$state_machine__53101__auto__ = function(state_56084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53101__auto____1.call(this,state_56084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53101__auto____0;
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53101__auto____1;
return cljs$core$async$state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_56125 = f__53175__auto__();
(statearr_56125[(6)] = c__53174__auto___57221);

return statearr_56125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__56127 = arguments.length;
switch (G__56127) {
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
var c__53174__auto___57261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53175__auto__ = (function (){var switch__53100__auto__ = (function (state_56174){
var state_val_56175 = (state_56174[(1)]);
if((state_val_56175 === (7))){
var inst_56170 = (state_56174[(2)]);
var state_56174__$1 = state_56174;
var statearr_56177_57262 = state_56174__$1;
(statearr_56177_57262[(2)] = inst_56170);

(statearr_56177_57262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (1))){
var inst_56130 = [];
var inst_56131 = inst_56130;
var inst_56132 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56174__$1 = (function (){var statearr_56178 = state_56174;
(statearr_56178[(7)] = inst_56131);

(statearr_56178[(8)] = inst_56132);

return statearr_56178;
})();
var statearr_56179_57264 = state_56174__$1;
(statearr_56179_57264[(2)] = null);

(statearr_56179_57264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (4))){
var inst_56135 = (state_56174[(9)]);
var inst_56135__$1 = (state_56174[(2)]);
var inst_56136 = (inst_56135__$1 == null);
var inst_56137 = cljs.core.not(inst_56136);
var state_56174__$1 = (function (){var statearr_56180 = state_56174;
(statearr_56180[(9)] = inst_56135__$1);

return statearr_56180;
})();
if(inst_56137){
var statearr_56181_57270 = state_56174__$1;
(statearr_56181_57270[(1)] = (5));

} else {
var statearr_56182_57271 = state_56174__$1;
(statearr_56182_57271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (15))){
var inst_56131 = (state_56174[(7)]);
var inst_56162 = cljs.core.vec(inst_56131);
var state_56174__$1 = state_56174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56174__$1,(18),out,inst_56162);
} else {
if((state_val_56175 === (13))){
var inst_56157 = (state_56174[(2)]);
var state_56174__$1 = state_56174;
var statearr_56183_57273 = state_56174__$1;
(statearr_56183_57273[(2)] = inst_56157);

(statearr_56183_57273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (6))){
var inst_56131 = (state_56174[(7)]);
var inst_56159 = inst_56131.length;
var inst_56160 = (inst_56159 > (0));
var state_56174__$1 = state_56174;
if(cljs.core.truth_(inst_56160)){
var statearr_56184_57274 = state_56174__$1;
(statearr_56184_57274[(1)] = (15));

} else {
var statearr_56185_57276 = state_56174__$1;
(statearr_56185_57276[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (17))){
var inst_56167 = (state_56174[(2)]);
var inst_56168 = cljs.core.async.close_BANG_(out);
var state_56174__$1 = (function (){var statearr_56186 = state_56174;
(statearr_56186[(10)] = inst_56167);

return statearr_56186;
})();
var statearr_56188_57281 = state_56174__$1;
(statearr_56188_57281[(2)] = inst_56168);

(statearr_56188_57281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (3))){
var inst_56172 = (state_56174[(2)]);
var state_56174__$1 = state_56174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56174__$1,inst_56172);
} else {
if((state_val_56175 === (12))){
var inst_56131 = (state_56174[(7)]);
var inst_56150 = cljs.core.vec(inst_56131);
var state_56174__$1 = state_56174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56174__$1,(14),out,inst_56150);
} else {
if((state_val_56175 === (2))){
var state_56174__$1 = state_56174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56174__$1,(4),ch);
} else {
if((state_val_56175 === (11))){
var inst_56135 = (state_56174[(9)]);
var inst_56131 = (state_56174[(7)]);
var inst_56139 = (state_56174[(11)]);
var inst_56147 = inst_56131.push(inst_56135);
var tmp56189 = inst_56131;
var inst_56131__$1 = tmp56189;
var inst_56132 = inst_56139;
var state_56174__$1 = (function (){var statearr_56190 = state_56174;
(statearr_56190[(12)] = inst_56147);

(statearr_56190[(7)] = inst_56131__$1);

(statearr_56190[(8)] = inst_56132);

return statearr_56190;
})();
var statearr_56196_57284 = state_56174__$1;
(statearr_56196_57284[(2)] = null);

(statearr_56196_57284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (9))){
var inst_56132 = (state_56174[(8)]);
var inst_56143 = cljs.core.keyword_identical_QMARK_(inst_56132,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_56174__$1 = state_56174;
var statearr_56197_57285 = state_56174__$1;
(statearr_56197_57285[(2)] = inst_56143);

(statearr_56197_57285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (5))){
var inst_56135 = (state_56174[(9)]);
var inst_56140 = (state_56174[(13)]);
var inst_56132 = (state_56174[(8)]);
var inst_56139 = (state_56174[(11)]);
var inst_56139__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_56135) : f.call(null,inst_56135));
var inst_56140__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56139__$1,inst_56132);
var state_56174__$1 = (function (){var statearr_56198 = state_56174;
(statearr_56198[(13)] = inst_56140__$1);

(statearr_56198[(11)] = inst_56139__$1);

return statearr_56198;
})();
if(inst_56140__$1){
var statearr_56199_57286 = state_56174__$1;
(statearr_56199_57286[(1)] = (8));

} else {
var statearr_56200_57287 = state_56174__$1;
(statearr_56200_57287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (14))){
var inst_56135 = (state_56174[(9)]);
var inst_56139 = (state_56174[(11)]);
var inst_56152 = (state_56174[(2)]);
var inst_56153 = [];
var inst_56154 = inst_56153.push(inst_56135);
var inst_56131 = inst_56153;
var inst_56132 = inst_56139;
var state_56174__$1 = (function (){var statearr_56204 = state_56174;
(statearr_56204[(14)] = inst_56154);

(statearr_56204[(7)] = inst_56131);

(statearr_56204[(8)] = inst_56132);

(statearr_56204[(15)] = inst_56152);

return statearr_56204;
})();
var statearr_56208_57290 = state_56174__$1;
(statearr_56208_57290[(2)] = null);

(statearr_56208_57290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (16))){
var state_56174__$1 = state_56174;
var statearr_56210_57291 = state_56174__$1;
(statearr_56210_57291[(2)] = null);

(statearr_56210_57291[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (10))){
var inst_56145 = (state_56174[(2)]);
var state_56174__$1 = state_56174;
if(cljs.core.truth_(inst_56145)){
var statearr_56211_57292 = state_56174__$1;
(statearr_56211_57292[(1)] = (11));

} else {
var statearr_56212_57293 = state_56174__$1;
(statearr_56212_57293[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (18))){
var inst_56164 = (state_56174[(2)]);
var state_56174__$1 = state_56174;
var statearr_56213_57294 = state_56174__$1;
(statearr_56213_57294[(2)] = inst_56164);

(statearr_56213_57294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56175 === (8))){
var inst_56140 = (state_56174[(13)]);
var state_56174__$1 = state_56174;
var statearr_56214_57296 = state_56174__$1;
(statearr_56214_57296[(2)] = inst_56140);

(statearr_56214_57296[(1)] = (10));


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
var cljs$core$async$state_machine__53101__auto__ = null;
var cljs$core$async$state_machine__53101__auto____0 = (function (){
var statearr_56216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56216[(0)] = cljs$core$async$state_machine__53101__auto__);

(statearr_56216[(1)] = (1));

return statearr_56216;
});
var cljs$core$async$state_machine__53101__auto____1 = (function (state_56174){
while(true){
var ret_value__53102__auto__ = (function (){try{while(true){
var result__53103__auto__ = switch__53100__auto__(state_56174);
if(cljs.core.keyword_identical_QMARK_(result__53103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53103__auto__;
}
break;
}
}catch (e56218){var ex__53104__auto__ = e56218;
var statearr_56221_57297 = state_56174;
(statearr_56221_57297[(2)] = ex__53104__auto__);


if(cljs.core.seq((state_56174[(4)]))){
var statearr_56223_57299 = state_56174;
(statearr_56223_57299[(1)] = cljs.core.first((state_56174[(4)])));

} else {
throw ex__53104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57301 = state_56174;
state_56174 = G__57301;
continue;
} else {
return ret_value__53102__auto__;
}
break;
}
});
cljs$core$async$state_machine__53101__auto__ = function(state_56174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53101__auto____1.call(this,state_56174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53101__auto____0;
cljs$core$async$state_machine__53101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53101__auto____1;
return cljs$core$async$state_machine__53101__auto__;
})()
})();
var state__53176__auto__ = (function (){var statearr_56238 = f__53175__auto__();
(statearr_56238[(6)] = c__53174__auto___57261);

return statearr_56238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53176__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
