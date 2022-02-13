goog.provide('shadow.cljs.devtools.client.browser_repl');
shadow.cljs.devtools.client.browser_repl.log_node = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1("log");
var actual_print_fn_53604 = cljs.core._STAR_print_fn_STAR_;
cljs.core.set_print_fn_BANG_((function (s){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser_repl.log_node,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n"].join(''));

return (actual_print_fn_53604.cljs$core$IFn$_invoke$arity$1 ? actual_print_fn_53604.cljs$core$IFn$_invoke$arity$1(s) : actual_print_fn_53604.call(null,s));
}));

//# sourceMappingURL=shadow.cljs.devtools.client.browser_repl.js.map
