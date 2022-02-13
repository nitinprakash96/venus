goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__58136){
var map__58139 = p__58136;
var map__58139__$1 = cljs.core.__destructure_map(map__58139);
var m = map__58139__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58139__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__58147_58429 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58148_58430 = null;
var count__58149_58431 = (0);
var i__58150_58432 = (0);
while(true){
if((i__58150_58432 < count__58149_58431)){
var f_58433 = chunk__58148_58430.cljs$core$IIndexed$_nth$arity$2(null,i__58150_58432);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_58433], 0));


var G__58434 = seq__58147_58429;
var G__58435 = chunk__58148_58430;
var G__58436 = count__58149_58431;
var G__58437 = (i__58150_58432 + (1));
seq__58147_58429 = G__58434;
chunk__58148_58430 = G__58435;
count__58149_58431 = G__58436;
i__58150_58432 = G__58437;
continue;
} else {
var temp__5753__auto___58438 = cljs.core.seq(seq__58147_58429);
if(temp__5753__auto___58438){
var seq__58147_58439__$1 = temp__5753__auto___58438;
if(cljs.core.chunked_seq_QMARK_(seq__58147_58439__$1)){
var c__4638__auto___58441 = cljs.core.chunk_first(seq__58147_58439__$1);
var G__58442 = cljs.core.chunk_rest(seq__58147_58439__$1);
var G__58443 = c__4638__auto___58441;
var G__58444 = cljs.core.count(c__4638__auto___58441);
var G__58445 = (0);
seq__58147_58429 = G__58442;
chunk__58148_58430 = G__58443;
count__58149_58431 = G__58444;
i__58150_58432 = G__58445;
continue;
} else {
var f_58447 = cljs.core.first(seq__58147_58439__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_58447], 0));


var G__58448 = cljs.core.next(seq__58147_58439__$1);
var G__58449 = null;
var G__58450 = (0);
var G__58451 = (0);
seq__58147_58429 = G__58448;
chunk__58148_58430 = G__58449;
count__58149_58431 = G__58450;
i__58150_58432 = G__58451;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_58452 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_58452], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_58452)))?cljs.core.second(arglists_58452):arglists_58452)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__58171_58456 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58172_58457 = null;
var count__58173_58458 = (0);
var i__58174_58459 = (0);
while(true){
if((i__58174_58459 < count__58173_58458)){
var vec__58185_58462 = chunk__58172_58457.cljs$core$IIndexed$_nth$arity$2(null,i__58174_58459);
var name_58463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58185_58462,(0),null);
var map__58188_58464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58185_58462,(1),null);
var map__58188_58465__$1 = cljs.core.__destructure_map(map__58188_58464);
var doc_58466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188_58465__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188_58465__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_58463], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_58467], 0));

if(cljs.core.truth_(doc_58466)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_58466], 0));
} else {
}


var G__58468 = seq__58171_58456;
var G__58469 = chunk__58172_58457;
var G__58470 = count__58173_58458;
var G__58471 = (i__58174_58459 + (1));
seq__58171_58456 = G__58468;
chunk__58172_58457 = G__58469;
count__58173_58458 = G__58470;
i__58174_58459 = G__58471;
continue;
} else {
var temp__5753__auto___58472 = cljs.core.seq(seq__58171_58456);
if(temp__5753__auto___58472){
var seq__58171_58473__$1 = temp__5753__auto___58472;
if(cljs.core.chunked_seq_QMARK_(seq__58171_58473__$1)){
var c__4638__auto___58474 = cljs.core.chunk_first(seq__58171_58473__$1);
var G__58475 = cljs.core.chunk_rest(seq__58171_58473__$1);
var G__58476 = c__4638__auto___58474;
var G__58477 = cljs.core.count(c__4638__auto___58474);
var G__58478 = (0);
seq__58171_58456 = G__58475;
chunk__58172_58457 = G__58476;
count__58173_58458 = G__58477;
i__58174_58459 = G__58478;
continue;
} else {
var vec__58193_58479 = cljs.core.first(seq__58171_58473__$1);
var name_58480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58193_58479,(0),null);
var map__58196_58481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58193_58479,(1),null);
var map__58196_58482__$1 = cljs.core.__destructure_map(map__58196_58481);
var doc_58484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196_58482__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196_58482__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_58480], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_58485], 0));

if(cljs.core.truth_(doc_58484)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_58484], 0));
} else {
}


var G__58487 = cljs.core.next(seq__58171_58473__$1);
var G__58488 = null;
var G__58489 = (0);
var G__58490 = (0);
seq__58171_58456 = G__58487;
chunk__58172_58457 = G__58488;
count__58173_58458 = G__58489;
i__58174_58459 = G__58490;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__58205 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__58206 = null;
var count__58207 = (0);
var i__58208 = (0);
while(true){
if((i__58208 < count__58207)){
var role = chunk__58206.cljs$core$IIndexed$_nth$arity$2(null,i__58208);
var temp__5753__auto___58494__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___58494__$1)){
var spec_58495 = temp__5753__auto___58494__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_58495)], 0));
} else {
}


var G__58496 = seq__58205;
var G__58497 = chunk__58206;
var G__58498 = count__58207;
var G__58499 = (i__58208 + (1));
seq__58205 = G__58496;
chunk__58206 = G__58497;
count__58207 = G__58498;
i__58208 = G__58499;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__58205);
if(temp__5753__auto____$1){
var seq__58205__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__58205__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58205__$1);
var G__58500 = cljs.core.chunk_rest(seq__58205__$1);
var G__58501 = c__4638__auto__;
var G__58502 = cljs.core.count(c__4638__auto__);
var G__58503 = (0);
seq__58205 = G__58500;
chunk__58206 = G__58501;
count__58207 = G__58502;
i__58208 = G__58503;
continue;
} else {
var role = cljs.core.first(seq__58205__$1);
var temp__5753__auto___58504__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___58504__$2)){
var spec_58505 = temp__5753__auto___58504__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_58505)], 0));
} else {
}


var G__58506 = cljs.core.next(seq__58205__$1);
var G__58507 = null;
var G__58508 = (0);
var G__58509 = (0);
seq__58205 = G__58506;
chunk__58206 = G__58507;
count__58207 = G__58508;
i__58208 = G__58509;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__58513 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__58514 = cljs.core.ex_cause(t);
via = G__58513;
t = G__58514;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__58268 = datafied_throwable;
var map__58268__$1 = cljs.core.__destructure_map(map__58268);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58268__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58268__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58268__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__58273 = cljs.core.last(via);
var map__58273__$1 = cljs.core.__destructure_map(map__58273);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58273__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58273__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58273__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__58274 = data;
var map__58274__$1 = cljs.core.__destructure_map(map__58274);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__58275 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__58275__$1 = cljs.core.__destructure_map(map__58275);
var top_data = map__58275__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__58294 = phase;
var G__58294__$1 = (((G__58294 instanceof cljs.core.Keyword))?G__58294.fqn:null);
switch (G__58294__$1) {
case "read-source":
var map__58296 = data;
var map__58296__$1 = cljs.core.__destructure_map(map__58296);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58296__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58296__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__58299 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__58299__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58299,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__58299);
var G__58299__$2 = (cljs.core.truth_((function (){var fexpr__58301 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__58301.cljs$core$IFn$_invoke$arity$1 ? fexpr__58301.cljs$core$IFn$_invoke$arity$1(source) : fexpr__58301.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__58299__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__58299__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58299__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__58299__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__58302 = top_data;
var G__58302__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58302,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__58302);
var G__58302__$2 = (cljs.core.truth_((function (){var fexpr__58305 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__58305.cljs$core$IFn$_invoke$arity$1 ? fexpr__58305.cljs$core$IFn$_invoke$arity$1(source) : fexpr__58305.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__58302__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__58302__$1);
var G__58302__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58302__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__58302__$2);
var G__58302__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58302__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__58302__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58302__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__58302__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__58310 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58310,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58310,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58310,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58310,(3),null);
var G__58313 = top_data;
var G__58313__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58313,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__58313);
var G__58313__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58313__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__58313__$1);
var G__58313__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58313__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__58313__$2);
var G__58313__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58313__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__58313__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58313__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__58313__$4;
}

break;
case "execution":
var vec__58320 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58320,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58320,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58320,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58320,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58259_SHARP_){
var or__4212__auto__ = (p1__58259_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__58323 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__58323.cljs$core$IFn$_invoke$arity$1 ? fexpr__58323.cljs$core$IFn$_invoke$arity$1(p1__58259_SHARP_) : fexpr__58323.call(null,p1__58259_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__58336 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__58336__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58336,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__58336);
var G__58336__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58336__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__58336__$1);
var G__58336__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58336__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__58336__$2);
var G__58336__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58336__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__58336__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58336__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__58336__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58294__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__58356){
var map__58357 = p__58356;
var map__58357__$1 = cljs.core.__destructure_map(map__58357);
var triage_data = map__58357__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__58369 = phase;
var G__58369__$1 = (((G__58369 instanceof cljs.core.Keyword))?G__58369.fqn:null);
switch (G__58369__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__58372 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__58373 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58374 = loc;
var G__58375 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58379_58541 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58380_58542 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58381_58543 = true;
var _STAR_print_fn_STAR__temp_val__58382_58544 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58381_58543);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58382_58544);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58351_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__58351_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58380_58542);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58379_58541);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__58372,G__58373,G__58374,G__58375) : format.call(null,G__58372,G__58373,G__58374,G__58375));

break;
case "macroexpansion":
var G__58385 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__58386 = cause_type;
var G__58387 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58388 = loc;
var G__58389 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58385,G__58386,G__58387,G__58388,G__58389) : format.call(null,G__58385,G__58386,G__58387,G__58388,G__58389));

break;
case "compile-syntax-check":
var G__58391 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__58392 = cause_type;
var G__58393 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58394 = loc;
var G__58395 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58391,G__58392,G__58393,G__58394,G__58395) : format.call(null,G__58391,G__58392,G__58393,G__58394,G__58395));

break;
case "compilation":
var G__58397 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__58398 = cause_type;
var G__58399 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58400 = loc;
var G__58401 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58397,G__58398,G__58399,G__58400,G__58401) : format.call(null,G__58397,G__58398,G__58399,G__58400,G__58401));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__58403 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__58404 = symbol;
var G__58405 = loc;
var G__58406 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58407_58560 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58408_58561 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58409_58562 = true;
var _STAR_print_fn_STAR__temp_val__58410_58563 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58409_58562);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58410_58563);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58352_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__58352_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58408_58561);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58407_58560);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__58403,G__58404,G__58405,G__58406) : format.call(null,G__58403,G__58404,G__58405,G__58406));
} else {
var G__58414 = "Execution error%s at %s(%s).\n%s\n";
var G__58415 = cause_type;
var G__58416 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58417 = loc;
var G__58418 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58414,G__58415,G__58416,G__58417,G__58418) : format.call(null,G__58414,G__58415,G__58416,G__58417,G__58418));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58369__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
