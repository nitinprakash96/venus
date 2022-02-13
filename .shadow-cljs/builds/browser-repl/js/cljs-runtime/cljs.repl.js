goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52533){
var map__52534 = p__52533;
var map__52534__$1 = cljs.core.__destructure_map(map__52534);
var m = map__52534__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52534__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52534__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__52540_52905 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52541_52906 = null;
var count__52542_52907 = (0);
var i__52543_52908 = (0);
while(true){
if((i__52543_52908 < count__52542_52907)){
var f_52909 = chunk__52541_52906.cljs$core$IIndexed$_nth$arity$2(null,i__52543_52908);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52909], 0));


var G__52911 = seq__52540_52905;
var G__52912 = chunk__52541_52906;
var G__52913 = count__52542_52907;
var G__52914 = (i__52543_52908 + (1));
seq__52540_52905 = G__52911;
chunk__52541_52906 = G__52912;
count__52542_52907 = G__52913;
i__52543_52908 = G__52914;
continue;
} else {
var temp__5753__auto___52915 = cljs.core.seq(seq__52540_52905);
if(temp__5753__auto___52915){
var seq__52540_52920__$1 = temp__5753__auto___52915;
if(cljs.core.chunked_seq_QMARK_(seq__52540_52920__$1)){
var c__4638__auto___52921 = cljs.core.chunk_first(seq__52540_52920__$1);
var G__52922 = cljs.core.chunk_rest(seq__52540_52920__$1);
var G__52923 = c__4638__auto___52921;
var G__52924 = cljs.core.count(c__4638__auto___52921);
var G__52925 = (0);
seq__52540_52905 = G__52922;
chunk__52541_52906 = G__52923;
count__52542_52907 = G__52924;
i__52543_52908 = G__52925;
continue;
} else {
var f_52928 = cljs.core.first(seq__52540_52920__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52928], 0));


var G__52929 = cljs.core.next(seq__52540_52920__$1);
var G__52930 = null;
var G__52931 = (0);
var G__52932 = (0);
seq__52540_52905 = G__52929;
chunk__52541_52906 = G__52930;
count__52542_52907 = G__52931;
i__52543_52908 = G__52932;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52934 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_52934], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_52934)))?cljs.core.second(arglists_52934):arglists_52934)], 0));
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
var seq__52560_52938 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52561_52939 = null;
var count__52562_52940 = (0);
var i__52563_52941 = (0);
while(true){
if((i__52563_52941 < count__52562_52940)){
var vec__52601_52943 = chunk__52561_52939.cljs$core$IIndexed$_nth$arity$2(null,i__52563_52941);
var name_52944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52601_52943,(0),null);
var map__52604_52945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52601_52943,(1),null);
var map__52604_52946__$1 = cljs.core.__destructure_map(map__52604_52945);
var doc_52947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52604_52946__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52604_52946__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52944], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52948], 0));

if(cljs.core.truth_(doc_52947)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52947], 0));
} else {
}


var G__52950 = seq__52560_52938;
var G__52951 = chunk__52561_52939;
var G__52952 = count__52562_52940;
var G__52953 = (i__52563_52941 + (1));
seq__52560_52938 = G__52950;
chunk__52561_52939 = G__52951;
count__52562_52940 = G__52952;
i__52563_52941 = G__52953;
continue;
} else {
var temp__5753__auto___52954 = cljs.core.seq(seq__52560_52938);
if(temp__5753__auto___52954){
var seq__52560_52955__$1 = temp__5753__auto___52954;
if(cljs.core.chunked_seq_QMARK_(seq__52560_52955__$1)){
var c__4638__auto___52957 = cljs.core.chunk_first(seq__52560_52955__$1);
var G__52958 = cljs.core.chunk_rest(seq__52560_52955__$1);
var G__52959 = c__4638__auto___52957;
var G__52960 = cljs.core.count(c__4638__auto___52957);
var G__52961 = (0);
seq__52560_52938 = G__52958;
chunk__52561_52939 = G__52959;
count__52562_52940 = G__52960;
i__52563_52941 = G__52961;
continue;
} else {
var vec__52614_52963 = cljs.core.first(seq__52560_52955__$1);
var name_52964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52614_52963,(0),null);
var map__52617_52965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52614_52963,(1),null);
var map__52617_52966__$1 = cljs.core.__destructure_map(map__52617_52965);
var doc_52967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52617_52966__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52617_52966__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52964], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52968], 0));

if(cljs.core.truth_(doc_52967)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52967], 0));
} else {
}


var G__52971 = cljs.core.next(seq__52560_52955__$1);
var G__52972 = null;
var G__52973 = (0);
var G__52974 = (0);
seq__52560_52938 = G__52971;
chunk__52561_52939 = G__52972;
count__52562_52940 = G__52973;
i__52563_52941 = G__52974;
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

var seq__52632 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52634 = null;
var count__52635 = (0);
var i__52636 = (0);
while(true){
if((i__52636 < count__52635)){
var role = chunk__52634.cljs$core$IIndexed$_nth$arity$2(null,i__52636);
var temp__5753__auto___52976__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___52976__$1)){
var spec_52977 = temp__5753__auto___52976__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52977)], 0));
} else {
}


var G__52978 = seq__52632;
var G__52979 = chunk__52634;
var G__52980 = count__52635;
var G__52981 = (i__52636 + (1));
seq__52632 = G__52978;
chunk__52634 = G__52979;
count__52635 = G__52980;
i__52636 = G__52981;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__52632);
if(temp__5753__auto____$1){
var seq__52632__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52632__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52632__$1);
var G__52987 = cljs.core.chunk_rest(seq__52632__$1);
var G__52988 = c__4638__auto__;
var G__52989 = cljs.core.count(c__4638__auto__);
var G__52990 = (0);
seq__52632 = G__52987;
chunk__52634 = G__52988;
count__52635 = G__52989;
i__52636 = G__52990;
continue;
} else {
var role = cljs.core.first(seq__52632__$1);
var temp__5753__auto___52992__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___52992__$2)){
var spec_52993 = temp__5753__auto___52992__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52993)], 0));
} else {
}


var G__52998 = cljs.core.next(seq__52632__$1);
var G__52999 = null;
var G__53000 = (0);
var G__53001 = (0);
seq__52632 = G__52998;
chunk__52634 = G__52999;
count__52635 = G__53000;
i__52636 = G__53001;
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
var G__53012 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53013 = cljs.core.ex_cause(t);
via = G__53012;
t = G__53013;
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
var map__52697 = datafied_throwable;
var map__52697__$1 = cljs.core.__destructure_map(map__52697);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52697__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52698 = cljs.core.last(via);
var map__52698__$1 = cljs.core.__destructure_map(map__52698);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52698__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52698__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52698__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52699 = data;
var map__52699__$1 = cljs.core.__destructure_map(map__52699);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52699__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52699__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52699__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__52700 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__52700__$1 = cljs.core.__destructure_map(map__52700);
var top_data = map__52700__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52700__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__52708 = phase;
var G__52708__$1 = (((G__52708 instanceof cljs.core.Keyword))?G__52708.fqn:null);
switch (G__52708__$1) {
case "read-source":
var map__52709 = data;
var map__52709__$1 = cljs.core.__destructure_map(map__52709);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52709__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52709__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__52715 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__52715__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52715,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52715);
var G__52715__$2 = (cljs.core.truth_((function (){var fexpr__52726 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52726.cljs$core$IFn$_invoke$arity$1 ? fexpr__52726.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52726.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52715__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52715__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52715__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52715__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__52733 = top_data;
var G__52733__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52733,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52733);
var G__52733__$2 = (cljs.core.truth_((function (){var fexpr__52754 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52754.cljs$core$IFn$_invoke$arity$1 ? fexpr__52754.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52754.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52733__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52733__$1);
var G__52733__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52733__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52733__$2);
var G__52733__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52733__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52733__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52733__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52733__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__52771 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52771,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52771,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52771,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52771,(3),null);
var G__52784 = top_data;
var G__52784__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52784,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__52784);
var G__52784__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52784__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__52784__$1);
var G__52784__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52784__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__52784__$2);
var G__52784__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52784__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52784__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52784__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52784__$4;
}

break;
case "execution":
var vec__52808 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52808,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52808,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52808,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52808,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52696_SHARP_){
var or__4212__auto__ = (p1__52696_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__52812 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52812.cljs$core$IFn$_invoke$arity$1 ? fexpr__52812.cljs$core$IFn$_invoke$arity$1(p1__52696_SHARP_) : fexpr__52812.call(null,p1__52696_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__52814 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__52814__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52814,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__52814);
var G__52814__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52814__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52814__$1);
var G__52814__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52814__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__52814__$2);
var G__52814__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52814__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__52814__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52814__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52814__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52708__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__52829){
var map__52831 = p__52829;
var map__52831__$1 = cljs.core.__destructure_map(map__52831);
var triage_data = map__52831__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52831__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52831__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52831__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52831__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52831__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52831__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52831__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52831__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__52846 = phase;
var G__52846__$1 = (((G__52846 instanceof cljs.core.Keyword))?G__52846.fqn:null);
switch (G__52846__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__52848 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__52849 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52850 = loc;
var G__52851 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52853_53055 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52854_53056 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52855_53057 = true;
var _STAR_print_fn_STAR__temp_val__52856_53058 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52855_53057);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52856_53058);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52823_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52823_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52854_53056);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52853_53055);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52848,G__52849,G__52850,G__52851) : format.call(null,G__52848,G__52849,G__52850,G__52851));

break;
case "macroexpansion":
var G__52862 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__52863 = cause_type;
var G__52864 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52865 = loc;
var G__52866 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52862,G__52863,G__52864,G__52865,G__52866) : format.call(null,G__52862,G__52863,G__52864,G__52865,G__52866));

break;
case "compile-syntax-check":
var G__52867 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__52868 = cause_type;
var G__52869 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52870 = loc;
var G__52871 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52867,G__52868,G__52869,G__52870,G__52871) : format.call(null,G__52867,G__52868,G__52869,G__52870,G__52871));

break;
case "compilation":
var G__52872 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__52873 = cause_type;
var G__52874 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52875 = loc;
var G__52876 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52872,G__52873,G__52874,G__52875,G__52876) : format.call(null,G__52872,G__52873,G__52874,G__52875,G__52876));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__52878 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__52879 = symbol;
var G__52880 = loc;
var G__52881 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52882_53069 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52883_53070 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52884_53071 = true;
var _STAR_print_fn_STAR__temp_val__52885_53072 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52884_53071);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52885_53072);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52826_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52826_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52883_53070);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52882_53069);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52878,G__52879,G__52880,G__52881) : format.call(null,G__52878,G__52879,G__52880,G__52881));
} else {
var G__52893 = "Execution error%s at %s(%s).\n%s\n";
var G__52894 = cause_type;
var G__52895 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52896 = loc;
var G__52897 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52893,G__52894,G__52895,G__52896,G__52897) : format.call(null,G__52893,G__52894,G__52895,G__52896,G__52897));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52846__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
