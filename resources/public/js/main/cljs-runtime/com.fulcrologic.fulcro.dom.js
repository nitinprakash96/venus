goog.provide('com.fulcrologic.fulcro.dom');





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return React.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__64058){
var vec__64060 = p__64058;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64060,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64060,(1),null);
var pair = vec__64060;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__64069){
var vec__64070 = p__64069;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64070,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64070,(1),null);
var pair = vec__64070;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__64086){
var vec__64087 = p__64086;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64087,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64087,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__64090 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64090,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__64090;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__64097 = arguments.length;
switch (G__64097) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__64105 = component.refs;
var G__64105__$1 = (((G__64105 == null))?null:goog.object.get(G__64105,name));
if((G__64105__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__64105__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__64107 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__64109 = (function (){var G__64110 = r;
if((G__64110 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__64110);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__64109) : ref.call(null,G__64109));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__64107) : factory.call(null,G__64107));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__64116 = arguments.length;
switch (G__64116) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___66366 = arguments.length;
var i__4819__auto___66367 = (0);
while(true){
if((i__4819__auto___66367 < len__4818__auto___66366)){
args_arr__4839__auto__.push((arguments[i__4819__auto___66367]));

var G__66368 = (i__4819__auto___66367 + (1));
i__4819__auto___66367 = G__66368;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq64113){
var G__64114 = cljs.core.first(seq64113);
var seq64113__$1 = cljs.core.next(seq64113);
var G__64115 = cljs.core.first(seq64113__$1);
var seq64113__$2 = cljs.core.next(seq64113__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64114,G__64115,seq64113__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4210__auto__ = tag;
if(cljs.core.truth_(and__4210__auto__)){
var G__64128 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__64128) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__64128));
} else {
return and__4210__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

goog.object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return React.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,React.Component);

var x64132_66369 = ctor.prototype;
(x64132_66369.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = goog.object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x64132_66369.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__64129_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__64129_SHARP_);
})));
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4210__auto__ = state_value;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = element_value;
if(cljs.core.truth_(and__4210__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements."], null);
}),null)),null,124209854);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
}));

(x64132_66369.render = (function (){
var this$ = this;
return React.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__66376__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__66376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66377__i = 0, G__66377__a = new Array(arguments.length -  0);
while (G__66377__i < G__66377__a.length) {G__66377__a[G__66377__i] = arguments[G__66377__i + 0]; ++G__66377__i;}
  args = new cljs.core.IndexedSeq(G__66377__a,0,null);
} 
return G__66376__delegate.call(this,args);};
G__66376.cljs$lang$maxFixedArity = 0;
G__66376.cljs$lang$applyTo = (function (arglist__66378){
var args = cljs.core.seq(arglist__66378);
return G__66376__delegate(args);
});
G__66376.cljs$core$IFn$_invoke$arity$variadic = G__66376__delegate;
return G__66376;
})()
;
return (function() { 
var G__66379__delegate = function (props,children){
var t = goog.object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"input",props,children);
} else {
var temp__5751__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__66379 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__66381__i = 0, G__66381__a = new Array(arguments.length -  1);
while (G__66381__i < G__66381__a.length) {G__66381__a[G__66381__i] = arguments[G__66381__i + 1]; ++G__66381__i;}
  children = new cljs.core.IndexedSeq(G__66381__a,0,null);
} 
return G__66379__delegate.call(this,props,children);};
G__66379.cljs$lang$maxFixedArity = 1;
G__66379.cljs$lang$applyTo = (function (arglist__66382){
var props = cljs.core.first(arglist__66382);
var children = cljs.core.rest(arglist__66382);
return G__66379__delegate(props,children);
});
G__66379.cljs$core$IFn$_invoke$arity$variadic = G__66379__delegate;
return G__66379;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__64150 = tag;
switch (G__64150) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64150)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__64157 = arguments.length;
switch (G__64157) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__64158 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__64159 = cljs.core.seq(vec__64158);
var first__64160 = cljs.core.first(seq__64159);
var seq__64159__$1 = cljs.core.next(seq__64159);
var head = first__64160;
var tail = seq__64159__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__64161 = (function (){var G__64162 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64162,tail);

return G__64162;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64161) : f.call(null,G__64161));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__64163 = (function (){var G__64164 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64164,args);

return G__64164;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64163) : f.call(null,G__64163));
} else {
if(cljs.core.object_QMARK_(head)){
var G__64165 = (function (){var G__64166 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64166,tail);

return G__64166;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64165) : f.call(null,G__64165));
} else {
if(cljs.core.map_QMARK_(head)){
var G__64168 = (function (){var G__64170 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__64170,tail);

return G__64170;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64168) : f.call(null,G__64168));
} else {
var G__64171 = (function (){var G__64172 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64172,args);

return G__64172;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64171) : f.call(null,G__64171));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__64174 = arguments.length;
switch (G__64174) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__64175 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__64176 = cljs.core.seq(vec__64175);
var first__64177 = cljs.core.first(seq__64176);
var seq__64176__$1 = cljs.core.next(seq__64176);
var head = first__64177;
var tail = seq__64176__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__64180 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64180,tail);

return G__64180;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__64181 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64181,args);

return G__64181;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__64182 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64182,tail);

return G__64182;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__64185 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__64185,tail);

return G__64185;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__64187 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64187,args);

return G__64187;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66392 = arguments.length;
var i__4819__auto___66393 = (0);
while(true){
if((i__4819__auto___66393 < len__4818__auto___66392)){
args__4824__auto__.push((arguments[i__4819__auto___66393]));

var G__66394 = (i__4819__auto___66393 + (1));
i__4819__auto___66393 = G__66394;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64199 = conformed_args__62763__auto__;
var map__64199__$1 = cljs.core.__destructure_map(map__64199);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64199__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64199__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64199__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq64197){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64197));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66396 = arguments.length;
var i__4819__auto___66397 = (0);
while(true){
if((i__4819__auto___66397 < len__4818__auto___66396)){
args__4824__auto__.push((arguments[i__4819__auto___66397]));

var G__66398 = (i__4819__auto___66397 + (1));
i__4819__auto___66397 = G__66398;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64208 = conformed_args__62763__auto__;
var map__64208__$1 = cljs.core.__destructure_map(map__64208);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64208__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64208__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64208__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq64202){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64202));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66400 = arguments.length;
var i__4819__auto___66401 = (0);
while(true){
if((i__4819__auto___66401 < len__4818__auto___66400)){
args__4824__auto__.push((arguments[i__4819__auto___66401]));

var G__66402 = (i__4819__auto___66401 + (1));
i__4819__auto___66401 = G__66402;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64212 = conformed_args__62763__auto__;
var map__64212__$1 = cljs.core.__destructure_map(map__64212);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq64210){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64210));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66403 = arguments.length;
var i__4819__auto___66404 = (0);
while(true){
if((i__4819__auto___66404 < len__4818__auto___66403)){
args__4824__auto__.push((arguments[i__4819__auto___66404]));

var G__66405 = (i__4819__auto___66404 + (1));
i__4819__auto___66404 = G__66405;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64217 = conformed_args__62763__auto__;
var map__64217__$1 = cljs.core.__destructure_map(map__64217);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq64215){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64215));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66412 = arguments.length;
var i__4819__auto___66413 = (0);
while(true){
if((i__4819__auto___66413 < len__4818__auto___66412)){
args__4824__auto__.push((arguments[i__4819__auto___66413]));

var G__66414 = (i__4819__auto___66413 + (1));
i__4819__auto___66413 = G__66414;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64221 = conformed_args__62763__auto__;
var map__64221__$1 = cljs.core.__destructure_map(map__64221);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq64219){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64219));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66415 = arguments.length;
var i__4819__auto___66416 = (0);
while(true){
if((i__4819__auto___66416 < len__4818__auto___66415)){
args__4824__auto__.push((arguments[i__4819__auto___66416]));

var G__66417 = (i__4819__auto___66416 + (1));
i__4819__auto___66416 = G__66417;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64228 = conformed_args__62763__auto__;
var map__64228__$1 = cljs.core.__destructure_map(map__64228);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64228__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64228__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64228__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq64227){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64227));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66419 = arguments.length;
var i__4819__auto___66420 = (0);
while(true){
if((i__4819__auto___66420 < len__4818__auto___66419)){
args__4824__auto__.push((arguments[i__4819__auto___66420]));

var G__66421 = (i__4819__auto___66420 + (1));
i__4819__auto___66420 = G__66421;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64232 = conformed_args__62763__auto__;
var map__64232__$1 = cljs.core.__destructure_map(map__64232);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64232__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq64230){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64230));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66426 = arguments.length;
var i__4819__auto___66427 = (0);
while(true){
if((i__4819__auto___66427 < len__4818__auto___66426)){
args__4824__auto__.push((arguments[i__4819__auto___66427]));

var G__66428 = (i__4819__auto___66427 + (1));
i__4819__auto___66427 = G__66428;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64239 = conformed_args__62763__auto__;
var map__64239__$1 = cljs.core.__destructure_map(map__64239);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64239__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64239__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64239__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq64235){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64235));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66431 = arguments.length;
var i__4819__auto___66432 = (0);
while(true){
if((i__4819__auto___66432 < len__4818__auto___66431)){
args__4824__auto__.push((arguments[i__4819__auto___66432]));

var G__66433 = (i__4819__auto___66432 + (1));
i__4819__auto___66432 = G__66433;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64244 = conformed_args__62763__auto__;
var map__64244__$1 = cljs.core.__destructure_map(map__64244);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64244__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq64241){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64241));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66435 = arguments.length;
var i__4819__auto___66436 = (0);
while(true){
if((i__4819__auto___66436 < len__4818__auto___66435)){
args__4824__auto__.push((arguments[i__4819__auto___66436]));

var G__66437 = (i__4819__auto___66436 + (1));
i__4819__auto___66436 = G__66437;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64252 = conformed_args__62763__auto__;
var map__64252__$1 = cljs.core.__destructure_map(map__64252);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64252__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64252__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64252__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq64247){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64247));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66440 = arguments.length;
var i__4819__auto___66441 = (0);
while(true){
if((i__4819__auto___66441 < len__4818__auto___66440)){
args__4824__auto__.push((arguments[i__4819__auto___66441]));

var G__66442 = (i__4819__auto___66441 + (1));
i__4819__auto___66441 = G__66442;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64257 = conformed_args__62763__auto__;
var map__64257__$1 = cljs.core.__destructure_map(map__64257);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64257__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64257__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64257__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq64254){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64254));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66445 = arguments.length;
var i__4819__auto___66446 = (0);
while(true){
if((i__4819__auto___66446 < len__4818__auto___66445)){
args__4824__auto__.push((arguments[i__4819__auto___66446]));

var G__66448 = (i__4819__auto___66446 + (1));
i__4819__auto___66446 = G__66448;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64263 = conformed_args__62763__auto__;
var map__64263__$1 = cljs.core.__destructure_map(map__64263);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq64262){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64262));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66449 = arguments.length;
var i__4819__auto___66450 = (0);
while(true){
if((i__4819__auto___66450 < len__4818__auto___66449)){
args__4824__auto__.push((arguments[i__4819__auto___66450]));

var G__66451 = (i__4819__auto___66450 + (1));
i__4819__auto___66450 = G__66451;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64266 = conformed_args__62763__auto__;
var map__64266__$1 = cljs.core.__destructure_map(map__64266);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq64265){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64265));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66454 = arguments.length;
var i__4819__auto___66455 = (0);
while(true){
if((i__4819__auto___66455 < len__4818__auto___66454)){
args__4824__auto__.push((arguments[i__4819__auto___66455]));

var G__66456 = (i__4819__auto___66455 + (1));
i__4819__auto___66455 = G__66456;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64273 = conformed_args__62763__auto__;
var map__64273__$1 = cljs.core.__destructure_map(map__64273);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64273__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64273__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64273__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq64268){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64268));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66459 = arguments.length;
var i__4819__auto___66460 = (0);
while(true){
if((i__4819__auto___66460 < len__4818__auto___66459)){
args__4824__auto__.push((arguments[i__4819__auto___66460]));

var G__66462 = (i__4819__auto___66460 + (1));
i__4819__auto___66460 = G__66462;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64277 = conformed_args__62763__auto__;
var map__64277__$1 = cljs.core.__destructure_map(map__64277);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64277__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64277__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64277__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq64274){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64274));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66463 = arguments.length;
var i__4819__auto___66464 = (0);
while(true){
if((i__4819__auto___66464 < len__4818__auto___66463)){
args__4824__auto__.push((arguments[i__4819__auto___66464]));

var G__66465 = (i__4819__auto___66464 + (1));
i__4819__auto___66464 = G__66465;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64283 = conformed_args__62763__auto__;
var map__64283__$1 = cljs.core.__destructure_map(map__64283);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64283__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64283__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64283__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq64278){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64278));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66466 = arguments.length;
var i__4819__auto___66467 = (0);
while(true){
if((i__4819__auto___66467 < len__4818__auto___66466)){
args__4824__auto__.push((arguments[i__4819__auto___66467]));

var G__66468 = (i__4819__auto___66467 + (1));
i__4819__auto___66467 = G__66468;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64289 = conformed_args__62763__auto__;
var map__64289__$1 = cljs.core.__destructure_map(map__64289);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64289__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64289__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64289__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq64286){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64286));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66469 = arguments.length;
var i__4819__auto___66470 = (0);
while(true){
if((i__4819__auto___66470 < len__4818__auto___66469)){
args__4824__auto__.push((arguments[i__4819__auto___66470]));

var G__66471 = (i__4819__auto___66470 + (1));
i__4819__auto___66470 = G__66471;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64295 = conformed_args__62763__auto__;
var map__64295__$1 = cljs.core.__destructure_map(map__64295);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq64292){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64292));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66472 = arguments.length;
var i__4819__auto___66473 = (0);
while(true){
if((i__4819__auto___66473 < len__4818__auto___66472)){
args__4824__auto__.push((arguments[i__4819__auto___66473]));

var G__66474 = (i__4819__auto___66473 + (1));
i__4819__auto___66473 = G__66474;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64300 = conformed_args__62763__auto__;
var map__64300__$1 = cljs.core.__destructure_map(map__64300);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq64297){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64297));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66475 = arguments.length;
var i__4819__auto___66476 = (0);
while(true){
if((i__4819__auto___66476 < len__4818__auto___66475)){
args__4824__auto__.push((arguments[i__4819__auto___66476]));

var G__66477 = (i__4819__auto___66476 + (1));
i__4819__auto___66476 = G__66477;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64305 = conformed_args__62763__auto__;
var map__64305__$1 = cljs.core.__destructure_map(map__64305);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq64303){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64303));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66478 = arguments.length;
var i__4819__auto___66479 = (0);
while(true){
if((i__4819__auto___66479 < len__4818__auto___66478)){
args__4824__auto__.push((arguments[i__4819__auto___66479]));

var G__66480 = (i__4819__auto___66479 + (1));
i__4819__auto___66479 = G__66480;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64318 = conformed_args__62763__auto__;
var map__64318__$1 = cljs.core.__destructure_map(map__64318);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64318__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64318__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64318__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq64309){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64309));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66481 = arguments.length;
var i__4819__auto___66482 = (0);
while(true){
if((i__4819__auto___66482 < len__4818__auto___66481)){
args__4824__auto__.push((arguments[i__4819__auto___66482]));

var G__66483 = (i__4819__auto___66482 + (1));
i__4819__auto___66482 = G__66483;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64328 = conformed_args__62763__auto__;
var map__64328__$1 = cljs.core.__destructure_map(map__64328);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq64323){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64323));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66484 = arguments.length;
var i__4819__auto___66485 = (0);
while(true){
if((i__4819__auto___66485 < len__4818__auto___66484)){
args__4824__auto__.push((arguments[i__4819__auto___66485]));

var G__66486 = (i__4819__auto___66485 + (1));
i__4819__auto___66485 = G__66486;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64334 = conformed_args__62763__auto__;
var map__64334__$1 = cljs.core.__destructure_map(map__64334);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64334__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64334__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq64332){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64332));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66487 = arguments.length;
var i__4819__auto___66488 = (0);
while(true){
if((i__4819__auto___66488 < len__4818__auto___66487)){
args__4824__auto__.push((arguments[i__4819__auto___66488]));

var G__66489 = (i__4819__auto___66488 + (1));
i__4819__auto___66488 = G__66489;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64340 = conformed_args__62763__auto__;
var map__64340__$1 = cljs.core.__destructure_map(map__64340);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq64338){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64338));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66490 = arguments.length;
var i__4819__auto___66491 = (0);
while(true){
if((i__4819__auto___66491 < len__4818__auto___66490)){
args__4824__auto__.push((arguments[i__4819__auto___66491]));

var G__66492 = (i__4819__auto___66491 + (1));
i__4819__auto___66491 = G__66492;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64347 = conformed_args__62763__auto__;
var map__64347__$1 = cljs.core.__destructure_map(map__64347);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64347__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64347__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64347__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq64342){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64342));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66493 = arguments.length;
var i__4819__auto___66494 = (0);
while(true){
if((i__4819__auto___66494 < len__4818__auto___66493)){
args__4824__auto__.push((arguments[i__4819__auto___66494]));

var G__66495 = (i__4819__auto___66494 + (1));
i__4819__auto___66494 = G__66495;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64351 = conformed_args__62763__auto__;
var map__64351__$1 = cljs.core.__destructure_map(map__64351);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64351__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64351__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64351__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq64348){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64348));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66496 = arguments.length;
var i__4819__auto___66497 = (0);
while(true){
if((i__4819__auto___66497 < len__4818__auto___66496)){
args__4824__auto__.push((arguments[i__4819__auto___66497]));

var G__66498 = (i__4819__auto___66497 + (1));
i__4819__auto___66497 = G__66498;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64356 = conformed_args__62763__auto__;
var map__64356__$1 = cljs.core.__destructure_map(map__64356);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq64352){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64352));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66499 = arguments.length;
var i__4819__auto___66500 = (0);
while(true){
if((i__4819__auto___66500 < len__4818__auto___66499)){
args__4824__auto__.push((arguments[i__4819__auto___66500]));

var G__66501 = (i__4819__auto___66500 + (1));
i__4819__auto___66500 = G__66501;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64359 = conformed_args__62763__auto__;
var map__64359__$1 = cljs.core.__destructure_map(map__64359);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq64358){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64358));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66502 = arguments.length;
var i__4819__auto___66503 = (0);
while(true){
if((i__4819__auto___66503 < len__4818__auto___66502)){
args__4824__auto__.push((arguments[i__4819__auto___66503]));

var G__66504 = (i__4819__auto___66503 + (1));
i__4819__auto___66503 = G__66504;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64364 = conformed_args__62763__auto__;
var map__64364__$1 = cljs.core.__destructure_map(map__64364);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64364__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64364__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64364__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq64361){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64361));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66505 = arguments.length;
var i__4819__auto___66506 = (0);
while(true){
if((i__4819__auto___66506 < len__4818__auto___66505)){
args__4824__auto__.push((arguments[i__4819__auto___66506]));

var G__66507 = (i__4819__auto___66506 + (1));
i__4819__auto___66506 = G__66507;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64372 = conformed_args__62763__auto__;
var map__64372__$1 = cljs.core.__destructure_map(map__64372);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64372__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64372__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64372__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq64370){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64370));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66508 = arguments.length;
var i__4819__auto___66509 = (0);
while(true){
if((i__4819__auto___66509 < len__4818__auto___66508)){
args__4824__auto__.push((arguments[i__4819__auto___66509]));

var G__66510 = (i__4819__auto___66509 + (1));
i__4819__auto___66509 = G__66510;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64377 = conformed_args__62763__auto__;
var map__64377__$1 = cljs.core.__destructure_map(map__64377);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64377__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64377__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64377__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq64374){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64374));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66511 = arguments.length;
var i__4819__auto___66512 = (0);
while(true){
if((i__4819__auto___66512 < len__4818__auto___66511)){
args__4824__auto__.push((arguments[i__4819__auto___66512]));

var G__66513 = (i__4819__auto___66512 + (1));
i__4819__auto___66512 = G__66513;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64384 = conformed_args__62763__auto__;
var map__64384__$1 = cljs.core.__destructure_map(map__64384);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64384__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64384__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64384__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq64381){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64381));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66514 = arguments.length;
var i__4819__auto___66515 = (0);
while(true){
if((i__4819__auto___66515 < len__4818__auto___66514)){
args__4824__auto__.push((arguments[i__4819__auto___66515]));

var G__66516 = (i__4819__auto___66515 + (1));
i__4819__auto___66515 = G__66516;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64388 = conformed_args__62763__auto__;
var map__64388__$1 = cljs.core.__destructure_map(map__64388);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64388__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64388__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64388__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq64385){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64385));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66517 = arguments.length;
var i__4819__auto___66518 = (0);
while(true){
if((i__4819__auto___66518 < len__4818__auto___66517)){
args__4824__auto__.push((arguments[i__4819__auto___66518]));

var G__66519 = (i__4819__auto___66518 + (1));
i__4819__auto___66518 = G__66519;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64405 = conformed_args__62763__auto__;
var map__64405__$1 = cljs.core.__destructure_map(map__64405);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq64403){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64403));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66520 = arguments.length;
var i__4819__auto___66521 = (0);
while(true){
if((i__4819__auto___66521 < len__4818__auto___66520)){
args__4824__auto__.push((arguments[i__4819__auto___66521]));

var G__66522 = (i__4819__auto___66521 + (1));
i__4819__auto___66521 = G__66522;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64410 = conformed_args__62763__auto__;
var map__64410__$1 = cljs.core.__destructure_map(map__64410);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq64408){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64408));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66523 = arguments.length;
var i__4819__auto___66524 = (0);
while(true){
if((i__4819__auto___66524 < len__4818__auto___66523)){
args__4824__auto__.push((arguments[i__4819__auto___66524]));

var G__66525 = (i__4819__auto___66524 + (1));
i__4819__auto___66524 = G__66525;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64415 = conformed_args__62763__auto__;
var map__64415__$1 = cljs.core.__destructure_map(map__64415);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64415__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64415__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64415__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq64413){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64413));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66526 = arguments.length;
var i__4819__auto___66527 = (0);
while(true){
if((i__4819__auto___66527 < len__4818__auto___66526)){
args__4824__auto__.push((arguments[i__4819__auto___66527]));

var G__66528 = (i__4819__auto___66527 + (1));
i__4819__auto___66527 = G__66528;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64420 = conformed_args__62763__auto__;
var map__64420__$1 = cljs.core.__destructure_map(map__64420);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64420__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64420__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64420__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq64418){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64418));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66529 = arguments.length;
var i__4819__auto___66530 = (0);
while(true){
if((i__4819__auto___66530 < len__4818__auto___66529)){
args__4824__auto__.push((arguments[i__4819__auto___66530]));

var G__66531 = (i__4819__auto___66530 + (1));
i__4819__auto___66530 = G__66531;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64426 = conformed_args__62763__auto__;
var map__64426__$1 = cljs.core.__destructure_map(map__64426);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64426__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64426__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64426__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq64423){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64423));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66532 = arguments.length;
var i__4819__auto___66533 = (0);
while(true){
if((i__4819__auto___66533 < len__4818__auto___66532)){
args__4824__auto__.push((arguments[i__4819__auto___66533]));

var G__66534 = (i__4819__auto___66533 + (1));
i__4819__auto___66533 = G__66534;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64431 = conformed_args__62763__auto__;
var map__64431__$1 = cljs.core.__destructure_map(map__64431);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64431__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64431__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64431__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq64428){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64428));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66535 = arguments.length;
var i__4819__auto___66536 = (0);
while(true){
if((i__4819__auto___66536 < len__4818__auto___66535)){
args__4824__auto__.push((arguments[i__4819__auto___66536]));

var G__66537 = (i__4819__auto___66536 + (1));
i__4819__auto___66536 = G__66537;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64436 = conformed_args__62763__auto__;
var map__64436__$1 = cljs.core.__destructure_map(map__64436);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq64433){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64433));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66538 = arguments.length;
var i__4819__auto___66539 = (0);
while(true){
if((i__4819__auto___66539 < len__4818__auto___66538)){
args__4824__auto__.push((arguments[i__4819__auto___66539]));

var G__66540 = (i__4819__auto___66539 + (1));
i__4819__auto___66539 = G__66540;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64441 = conformed_args__62763__auto__;
var map__64441__$1 = cljs.core.__destructure_map(map__64441);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64441__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64441__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64441__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq64438){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64438));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66541 = arguments.length;
var i__4819__auto___66542 = (0);
while(true){
if((i__4819__auto___66542 < len__4818__auto___66541)){
args__4824__auto__.push((arguments[i__4819__auto___66542]));

var G__66543 = (i__4819__auto___66542 + (1));
i__4819__auto___66542 = G__66543;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64446 = conformed_args__62763__auto__;
var map__64446__$1 = cljs.core.__destructure_map(map__64446);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64446__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64446__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64446__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq64443){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64443));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66544 = arguments.length;
var i__4819__auto___66545 = (0);
while(true){
if((i__4819__auto___66545 < len__4818__auto___66544)){
args__4824__auto__.push((arguments[i__4819__auto___66545]));

var G__66546 = (i__4819__auto___66545 + (1));
i__4819__auto___66545 = G__66546;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64451 = conformed_args__62763__auto__;
var map__64451__$1 = cljs.core.__destructure_map(map__64451);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64451__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64451__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64451__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq64448){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64448));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66547 = arguments.length;
var i__4819__auto___66548 = (0);
while(true){
if((i__4819__auto___66548 < len__4818__auto___66547)){
args__4824__auto__.push((arguments[i__4819__auto___66548]));

var G__66549 = (i__4819__auto___66548 + (1));
i__4819__auto___66548 = G__66549;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64456 = conformed_args__62763__auto__;
var map__64456__$1 = cljs.core.__destructure_map(map__64456);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64456__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64456__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq64454){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64454));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66550 = arguments.length;
var i__4819__auto___66551 = (0);
while(true){
if((i__4819__auto___66551 < len__4818__auto___66550)){
args__4824__auto__.push((arguments[i__4819__auto___66551]));

var G__66552 = (i__4819__auto___66551 + (1));
i__4819__auto___66551 = G__66552;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64460 = conformed_args__62763__auto__;
var map__64460__$1 = cljs.core.__destructure_map(map__64460);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq64459){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64459));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66553 = arguments.length;
var i__4819__auto___66554 = (0);
while(true){
if((i__4819__auto___66554 < len__4818__auto___66553)){
args__4824__auto__.push((arguments[i__4819__auto___66554]));

var G__66555 = (i__4819__auto___66554 + (1));
i__4819__auto___66554 = G__66555;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64462 = conformed_args__62763__auto__;
var map__64462__$1 = cljs.core.__destructure_map(map__64462);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq64461){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64461));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66556 = arguments.length;
var i__4819__auto___66557 = (0);
while(true){
if((i__4819__auto___66557 < len__4818__auto___66556)){
args__4824__auto__.push((arguments[i__4819__auto___66557]));

var G__66558 = (i__4819__auto___66557 + (1));
i__4819__auto___66557 = G__66558;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64464 = conformed_args__62763__auto__;
var map__64464__$1 = cljs.core.__destructure_map(map__64464);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64464__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64464__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq64463){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64463));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66559 = arguments.length;
var i__4819__auto___66560 = (0);
while(true){
if((i__4819__auto___66560 < len__4818__auto___66559)){
args__4824__auto__.push((arguments[i__4819__auto___66560]));

var G__66561 = (i__4819__auto___66560 + (1));
i__4819__auto___66560 = G__66561;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64466 = conformed_args__62763__auto__;
var map__64466__$1 = cljs.core.__destructure_map(map__64466);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64466__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64466__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64466__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq64465){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64465));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66562 = arguments.length;
var i__4819__auto___66563 = (0);
while(true){
if((i__4819__auto___66563 < len__4818__auto___66562)){
args__4824__auto__.push((arguments[i__4819__auto___66563]));

var G__66564 = (i__4819__auto___66563 + (1));
i__4819__auto___66563 = G__66564;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64470 = conformed_args__62763__auto__;
var map__64470__$1 = cljs.core.__destructure_map(map__64470);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64470__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64470__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64470__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq64467){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64467));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66565 = arguments.length;
var i__4819__auto___66566 = (0);
while(true){
if((i__4819__auto___66566 < len__4818__auto___66565)){
args__4824__auto__.push((arguments[i__4819__auto___66566]));

var G__66567 = (i__4819__auto___66566 + (1));
i__4819__auto___66566 = G__66567;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64504 = conformed_args__62763__auto__;
var map__64504__$1 = cljs.core.__destructure_map(map__64504);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64504__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64504__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq64485){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64485));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66568 = arguments.length;
var i__4819__auto___66569 = (0);
while(true){
if((i__4819__auto___66569 < len__4818__auto___66568)){
args__4824__auto__.push((arguments[i__4819__auto___66569]));

var G__66570 = (i__4819__auto___66569 + (1));
i__4819__auto___66569 = G__66570;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64535 = conformed_args__62763__auto__;
var map__64535__$1 = cljs.core.__destructure_map(map__64535);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64535__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64535__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq64527){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64527));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66571 = arguments.length;
var i__4819__auto___66572 = (0);
while(true){
if((i__4819__auto___66572 < len__4818__auto___66571)){
args__4824__auto__.push((arguments[i__4819__auto___66572]));

var G__66573 = (i__4819__auto___66572 + (1));
i__4819__auto___66572 = G__66573;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64546 = conformed_args__62763__auto__;
var map__64546__$1 = cljs.core.__destructure_map(map__64546);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq64542){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64542));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66574 = arguments.length;
var i__4819__auto___66575 = (0);
while(true){
if((i__4819__auto___66575 < len__4818__auto___66574)){
args__4824__auto__.push((arguments[i__4819__auto___66575]));

var G__66576 = (i__4819__auto___66575 + (1));
i__4819__auto___66575 = G__66576;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64573 = conformed_args__62763__auto__;
var map__64573__$1 = cljs.core.__destructure_map(map__64573);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64573__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64573__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64573__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq64550){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64550));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66577 = arguments.length;
var i__4819__auto___66578 = (0);
while(true){
if((i__4819__auto___66578 < len__4818__auto___66577)){
args__4824__auto__.push((arguments[i__4819__auto___66578]));

var G__66579 = (i__4819__auto___66578 + (1));
i__4819__auto___66578 = G__66579;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64612 = conformed_args__62763__auto__;
var map__64612__$1 = cljs.core.__destructure_map(map__64612);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq64594){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64594));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66580 = arguments.length;
var i__4819__auto___66581 = (0);
while(true){
if((i__4819__auto___66581 < len__4818__auto___66580)){
args__4824__auto__.push((arguments[i__4819__auto___66581]));

var G__66582 = (i__4819__auto___66581 + (1));
i__4819__auto___66581 = G__66582;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64615 = conformed_args__62763__auto__;
var map__64615__$1 = cljs.core.__destructure_map(map__64615);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64615__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64615__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64615__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq64614){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64614));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66583 = arguments.length;
var i__4819__auto___66584 = (0);
while(true){
if((i__4819__auto___66584 < len__4818__auto___66583)){
args__4824__auto__.push((arguments[i__4819__auto___66584]));

var G__66585 = (i__4819__auto___66584 + (1));
i__4819__auto___66584 = G__66585;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64618 = conformed_args__62763__auto__;
var map__64618__$1 = cljs.core.__destructure_map(map__64618);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq64617){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64617));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66586 = arguments.length;
var i__4819__auto___66587 = (0);
while(true){
if((i__4819__auto___66587 < len__4818__auto___66586)){
args__4824__auto__.push((arguments[i__4819__auto___66587]));

var G__66588 = (i__4819__auto___66587 + (1));
i__4819__auto___66587 = G__66588;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64623 = conformed_args__62763__auto__;
var map__64623__$1 = cljs.core.__destructure_map(map__64623);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64623__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64623__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64623__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq64621){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64621));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66589 = arguments.length;
var i__4819__auto___66590 = (0);
while(true){
if((i__4819__auto___66590 < len__4818__auto___66589)){
args__4824__auto__.push((arguments[i__4819__auto___66590]));

var G__66591 = (i__4819__auto___66590 + (1));
i__4819__auto___66590 = G__66591;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64650 = conformed_args__62763__auto__;
var map__64650__$1 = cljs.core.__destructure_map(map__64650);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64650__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64650__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64650__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq64638){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64638));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66592 = arguments.length;
var i__4819__auto___66593 = (0);
while(true){
if((i__4819__auto___66593 < len__4818__auto___66592)){
args__4824__auto__.push((arguments[i__4819__auto___66593]));

var G__66594 = (i__4819__auto___66593 + (1));
i__4819__auto___66593 = G__66594;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64669 = conformed_args__62763__auto__;
var map__64669__$1 = cljs.core.__destructure_map(map__64669);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq64658){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64658));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66595 = arguments.length;
var i__4819__auto___66596 = (0);
while(true){
if((i__4819__auto___66596 < len__4818__auto___66595)){
args__4824__auto__.push((arguments[i__4819__auto___66596]));

var G__66597 = (i__4819__auto___66596 + (1));
i__4819__auto___66596 = G__66597;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64688 = conformed_args__62763__auto__;
var map__64688__$1 = cljs.core.__destructure_map(map__64688);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq64683){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64683));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66598 = arguments.length;
var i__4819__auto___66599 = (0);
while(true){
if((i__4819__auto___66599 < len__4818__auto___66598)){
args__4824__auto__.push((arguments[i__4819__auto___66599]));

var G__66600 = (i__4819__auto___66599 + (1));
i__4819__auto___66599 = G__66600;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64699 = conformed_args__62763__auto__;
var map__64699__$1 = cljs.core.__destructure_map(map__64699);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64699__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64699__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64699__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq64698){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64698));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66601 = arguments.length;
var i__4819__auto___66602 = (0);
while(true){
if((i__4819__auto___66602 < len__4818__auto___66601)){
args__4824__auto__.push((arguments[i__4819__auto___66602]));

var G__66603 = (i__4819__auto___66602 + (1));
i__4819__auto___66602 = G__66603;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64711 = conformed_args__62763__auto__;
var map__64711__$1 = cljs.core.__destructure_map(map__64711);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64711__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64711__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64711__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq64706){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64706));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66604 = arguments.length;
var i__4819__auto___66605 = (0);
while(true){
if((i__4819__auto___66605 < len__4818__auto___66604)){
args__4824__auto__.push((arguments[i__4819__auto___66605]));

var G__66606 = (i__4819__auto___66605 + (1));
i__4819__auto___66605 = G__66606;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64728 = conformed_args__62763__auto__;
var map__64728__$1 = cljs.core.__destructure_map(map__64728);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64728__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64728__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64728__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq64719){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64719));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66607 = arguments.length;
var i__4819__auto___66608 = (0);
while(true){
if((i__4819__auto___66608 < len__4818__auto___66607)){
args__4824__auto__.push((arguments[i__4819__auto___66608]));

var G__66609 = (i__4819__auto___66608 + (1));
i__4819__auto___66608 = G__66609;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64751 = conformed_args__62763__auto__;
var map__64751__$1 = cljs.core.__destructure_map(map__64751);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64751__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64751__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64751__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq64737){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64737));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66610 = arguments.length;
var i__4819__auto___66611 = (0);
while(true){
if((i__4819__auto___66611 < len__4818__auto___66610)){
args__4824__auto__.push((arguments[i__4819__auto___66611]));

var G__66612 = (i__4819__auto___66611 + (1));
i__4819__auto___66611 = G__66612;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64783 = conformed_args__62763__auto__;
var map__64783__$1 = cljs.core.__destructure_map(map__64783);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64783__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64783__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq64768){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64768));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66613 = arguments.length;
var i__4819__auto___66614 = (0);
while(true){
if((i__4819__auto___66614 < len__4818__auto___66613)){
args__4824__auto__.push((arguments[i__4819__auto___66614]));

var G__66615 = (i__4819__auto___66614 + (1));
i__4819__auto___66614 = G__66615;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64834 = conformed_args__62763__auto__;
var map__64834__$1 = cljs.core.__destructure_map(map__64834);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64834__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64834__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64834__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq64803){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64803));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66616 = arguments.length;
var i__4819__auto___66617 = (0);
while(true){
if((i__4819__auto___66617 < len__4818__auto___66616)){
args__4824__auto__.push((arguments[i__4819__auto___66617]));

var G__66618 = (i__4819__auto___66617 + (1));
i__4819__auto___66617 = G__66618;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64859 = conformed_args__62763__auto__;
var map__64859__$1 = cljs.core.__destructure_map(map__64859);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64859__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq64849){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64849));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66619 = arguments.length;
var i__4819__auto___66620 = (0);
while(true){
if((i__4819__auto___66620 < len__4818__auto___66619)){
args__4824__auto__.push((arguments[i__4819__auto___66620]));

var G__66621 = (i__4819__auto___66620 + (1));
i__4819__auto___66620 = G__66621;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64877 = conformed_args__62763__auto__;
var map__64877__$1 = cljs.core.__destructure_map(map__64877);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq64866){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64866));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66622 = arguments.length;
var i__4819__auto___66623 = (0);
while(true){
if((i__4819__auto___66623 < len__4818__auto___66622)){
args__4824__auto__.push((arguments[i__4819__auto___66623]));

var G__66624 = (i__4819__auto___66623 + (1));
i__4819__auto___66623 = G__66624;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64902 = conformed_args__62763__auto__;
var map__64902__$1 = cljs.core.__destructure_map(map__64902);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64902__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64902__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64902__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq64890){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64890));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66625 = arguments.length;
var i__4819__auto___66626 = (0);
while(true){
if((i__4819__auto___66626 < len__4818__auto___66625)){
args__4824__auto__.push((arguments[i__4819__auto___66626]));

var G__66627 = (i__4819__auto___66626 + (1));
i__4819__auto___66626 = G__66627;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64933 = conformed_args__62763__auto__;
var map__64933__$1 = cljs.core.__destructure_map(map__64933);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq64913){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64913));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66628 = arguments.length;
var i__4819__auto___66629 = (0);
while(true){
if((i__4819__auto___66629 < len__4818__auto___66628)){
args__4824__auto__.push((arguments[i__4819__auto___66629]));

var G__66630 = (i__4819__auto___66629 + (1));
i__4819__auto___66629 = G__66630;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64948 = conformed_args__62763__auto__;
var map__64948__$1 = cljs.core.__destructure_map(map__64948);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64948__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64948__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64948__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq64947){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64947));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66631 = arguments.length;
var i__4819__auto___66632 = (0);
while(true){
if((i__4819__auto___66632 < len__4818__auto___66631)){
args__4824__auto__.push((arguments[i__4819__auto___66632]));

var G__66633 = (i__4819__auto___66632 + (1));
i__4819__auto___66632 = G__66633;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64996 = conformed_args__62763__auto__;
var map__64996__$1 = cljs.core.__destructure_map(map__64996);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64996__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64996__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64996__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq64972){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64972));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66634 = arguments.length;
var i__4819__auto___66635 = (0);
while(true){
if((i__4819__auto___66635 < len__4818__auto___66634)){
args__4824__auto__.push((arguments[i__4819__auto___66635]));

var G__66636 = (i__4819__auto___66635 + (1));
i__4819__auto___66635 = G__66636;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65039 = conformed_args__62763__auto__;
var map__65039__$1 = cljs.core.__destructure_map(map__65039);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65039__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65039__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq65008){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65008));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66637 = arguments.length;
var i__4819__auto___66638 = (0);
while(true){
if((i__4819__auto___66638 < len__4818__auto___66637)){
args__4824__auto__.push((arguments[i__4819__auto___66638]));

var G__66639 = (i__4819__auto___66638 + (1));
i__4819__auto___66638 = G__66639;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65061 = conformed_args__62763__auto__;
var map__65061__$1 = cljs.core.__destructure_map(map__65061);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65061__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65061__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65061__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq65046){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65046));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66640 = arguments.length;
var i__4819__auto___66641 = (0);
while(true){
if((i__4819__auto___66641 < len__4818__auto___66640)){
args__4824__auto__.push((arguments[i__4819__auto___66641]));

var G__66642 = (i__4819__auto___66641 + (1));
i__4819__auto___66641 = G__66642;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65083 = conformed_args__62763__auto__;
var map__65083__$1 = cljs.core.__destructure_map(map__65083);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq65075){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65075));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66643 = arguments.length;
var i__4819__auto___66644 = (0);
while(true){
if((i__4819__auto___66644 < len__4818__auto___66643)){
args__4824__auto__.push((arguments[i__4819__auto___66644]));

var G__66645 = (i__4819__auto___66644 + (1));
i__4819__auto___66644 = G__66645;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65094 = conformed_args__62763__auto__;
var map__65094__$1 = cljs.core.__destructure_map(map__65094);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq65086){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65086));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66646 = arguments.length;
var i__4819__auto___66647 = (0);
while(true){
if((i__4819__auto___66647 < len__4818__auto___66646)){
args__4824__auto__.push((arguments[i__4819__auto___66647]));

var G__66648 = (i__4819__auto___66647 + (1));
i__4819__auto___66647 = G__66648;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65109 = conformed_args__62763__auto__;
var map__65109__$1 = cljs.core.__destructure_map(map__65109);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq65101){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65101));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66649 = arguments.length;
var i__4819__auto___66650 = (0);
while(true){
if((i__4819__auto___66650 < len__4818__auto___66649)){
args__4824__auto__.push((arguments[i__4819__auto___66650]));

var G__66651 = (i__4819__auto___66650 + (1));
i__4819__auto___66650 = G__66651;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65123 = conformed_args__62763__auto__;
var map__65123__$1 = cljs.core.__destructure_map(map__65123);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65123__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65123__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65123__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq65116){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65116));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66652 = arguments.length;
var i__4819__auto___66653 = (0);
while(true){
if((i__4819__auto___66653 < len__4818__auto___66652)){
args__4824__auto__.push((arguments[i__4819__auto___66653]));

var G__66654 = (i__4819__auto___66653 + (1));
i__4819__auto___66653 = G__66654;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65148 = conformed_args__62763__auto__;
var map__65148__$1 = cljs.core.__destructure_map(map__65148);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65148__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65148__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65148__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq65139){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65139));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66655 = arguments.length;
var i__4819__auto___66656 = (0);
while(true){
if((i__4819__auto___66656 < len__4818__auto___66655)){
args__4824__auto__.push((arguments[i__4819__auto___66656]));

var G__66657 = (i__4819__auto___66656 + (1));
i__4819__auto___66656 = G__66657;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65164 = conformed_args__62763__auto__;
var map__65164__$1 = cljs.core.__destructure_map(map__65164);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq65160){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65160));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66658 = arguments.length;
var i__4819__auto___66659 = (0);
while(true){
if((i__4819__auto___66659 < len__4818__auto___66658)){
args__4824__auto__.push((arguments[i__4819__auto___66659]));

var G__66660 = (i__4819__auto___66659 + (1));
i__4819__auto___66659 = G__66660;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65171 = conformed_args__62763__auto__;
var map__65171__$1 = cljs.core.__destructure_map(map__65171);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65171__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65171__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65171__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq65168){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65168));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66661 = arguments.length;
var i__4819__auto___66662 = (0);
while(true){
if((i__4819__auto___66662 < len__4818__auto___66661)){
args__4824__auto__.push((arguments[i__4819__auto___66662]));

var G__66663 = (i__4819__auto___66662 + (1));
i__4819__auto___66662 = G__66663;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65187 = conformed_args__62763__auto__;
var map__65187__$1 = cljs.core.__destructure_map(map__65187);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq65183){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65183));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66664 = arguments.length;
var i__4819__auto___66665 = (0);
while(true){
if((i__4819__auto___66665 < len__4818__auto___66664)){
args__4824__auto__.push((arguments[i__4819__auto___66665]));

var G__66666 = (i__4819__auto___66665 + (1));
i__4819__auto___66665 = G__66666;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65210 = conformed_args__62763__auto__;
var map__65210__$1 = cljs.core.__destructure_map(map__65210);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65210__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65210__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65210__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq65201){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65201));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66667 = arguments.length;
var i__4819__auto___66668 = (0);
while(true){
if((i__4819__auto___66668 < len__4818__auto___66667)){
args__4824__auto__.push((arguments[i__4819__auto___66668]));

var G__66669 = (i__4819__auto___66668 + (1));
i__4819__auto___66668 = G__66669;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65217 = conformed_args__62763__auto__;
var map__65217__$1 = cljs.core.__destructure_map(map__65217);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq65214){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65214));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66670 = arguments.length;
var i__4819__auto___66671 = (0);
while(true){
if((i__4819__auto___66671 < len__4818__auto___66670)){
args__4824__auto__.push((arguments[i__4819__auto___66671]));

var G__66672 = (i__4819__auto___66671 + (1));
i__4819__auto___66671 = G__66672;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65229 = conformed_args__62763__auto__;
var map__65229__$1 = cljs.core.__destructure_map(map__65229);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65229__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65229__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65229__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq65221){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65221));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66673 = arguments.length;
var i__4819__auto___66674 = (0);
while(true){
if((i__4819__auto___66674 < len__4818__auto___66673)){
args__4824__auto__.push((arguments[i__4819__auto___66674]));

var G__66675 = (i__4819__auto___66674 + (1));
i__4819__auto___66674 = G__66675;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65242 = conformed_args__62763__auto__;
var map__65242__$1 = cljs.core.__destructure_map(map__65242);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq65235){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65235));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66676 = arguments.length;
var i__4819__auto___66677 = (0);
while(true){
if((i__4819__auto___66677 < len__4818__auto___66676)){
args__4824__auto__.push((arguments[i__4819__auto___66677]));

var G__66678 = (i__4819__auto___66677 + (1));
i__4819__auto___66677 = G__66678;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65259 = conformed_args__62763__auto__;
var map__65259__$1 = cljs.core.__destructure_map(map__65259);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq65251){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65251));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66679 = arguments.length;
var i__4819__auto___66680 = (0);
while(true){
if((i__4819__auto___66680 < len__4818__auto___66679)){
args__4824__auto__.push((arguments[i__4819__auto___66680]));

var G__66681 = (i__4819__auto___66680 + (1));
i__4819__auto___66680 = G__66681;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65272 = conformed_args__62763__auto__;
var map__65272__$1 = cljs.core.__destructure_map(map__65272);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq65270){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65270));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66682 = arguments.length;
var i__4819__auto___66683 = (0);
while(true){
if((i__4819__auto___66683 < len__4818__auto___66682)){
args__4824__auto__.push((arguments[i__4819__auto___66683]));

var G__66684 = (i__4819__auto___66683 + (1));
i__4819__auto___66683 = G__66684;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65276 = conformed_args__62763__auto__;
var map__65276__$1 = cljs.core.__destructure_map(map__65276);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65276__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65276__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65276__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq65274){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65274));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66685 = arguments.length;
var i__4819__auto___66686 = (0);
while(true){
if((i__4819__auto___66686 < len__4818__auto___66685)){
args__4824__auto__.push((arguments[i__4819__auto___66686]));

var G__66687 = (i__4819__auto___66686 + (1));
i__4819__auto___66686 = G__66687;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65294 = conformed_args__62763__auto__;
var map__65294__$1 = cljs.core.__destructure_map(map__65294);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65294__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65294__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65294__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq65284){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65284));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66688 = arguments.length;
var i__4819__auto___66689 = (0);
while(true){
if((i__4819__auto___66689 < len__4818__auto___66688)){
args__4824__auto__.push((arguments[i__4819__auto___66689]));

var G__66690 = (i__4819__auto___66689 + (1));
i__4819__auto___66689 = G__66690;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65303 = conformed_args__62763__auto__;
var map__65303__$1 = cljs.core.__destructure_map(map__65303);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq65296){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65296));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66691 = arguments.length;
var i__4819__auto___66692 = (0);
while(true){
if((i__4819__auto___66692 < len__4818__auto___66691)){
args__4824__auto__.push((arguments[i__4819__auto___66692]));

var G__66693 = (i__4819__auto___66692 + (1));
i__4819__auto___66692 = G__66693;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65317 = conformed_args__62763__auto__;
var map__65317__$1 = cljs.core.__destructure_map(map__65317);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq65310){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65310));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66694 = arguments.length;
var i__4819__auto___66695 = (0);
while(true){
if((i__4819__auto___66695 < len__4818__auto___66694)){
args__4824__auto__.push((arguments[i__4819__auto___66695]));

var G__66696 = (i__4819__auto___66695 + (1));
i__4819__auto___66695 = G__66696;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65329 = conformed_args__62763__auto__;
var map__65329__$1 = cljs.core.__destructure_map(map__65329);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65329__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65329__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65329__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq65321){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65321));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66697 = arguments.length;
var i__4819__auto___66698 = (0);
while(true){
if((i__4819__auto___66698 < len__4818__auto___66697)){
args__4824__auto__.push((arguments[i__4819__auto___66698]));

var G__66699 = (i__4819__auto___66698 + (1));
i__4819__auto___66698 = G__66699;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65340 = conformed_args__62763__auto__;
var map__65340__$1 = cljs.core.__destructure_map(map__65340);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq65332){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65332));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66700 = arguments.length;
var i__4819__auto___66701 = (0);
while(true){
if((i__4819__auto___66701 < len__4818__auto___66700)){
args__4824__auto__.push((arguments[i__4819__auto___66701]));

var G__66702 = (i__4819__auto___66701 + (1));
i__4819__auto___66701 = G__66702;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65352 = conformed_args__62763__auto__;
var map__65352__$1 = cljs.core.__destructure_map(map__65352);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65352__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq65343){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65343));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66703 = arguments.length;
var i__4819__auto___66704 = (0);
while(true){
if((i__4819__auto___66704 < len__4818__auto___66703)){
args__4824__auto__.push((arguments[i__4819__auto___66704]));

var G__66705 = (i__4819__auto___66704 + (1));
i__4819__auto___66704 = G__66705;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65363 = conformed_args__62763__auto__;
var map__65363__$1 = cljs.core.__destructure_map(map__65363);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65363__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65363__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65363__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq65357){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65357));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66706 = arguments.length;
var i__4819__auto___66707 = (0);
while(true){
if((i__4819__auto___66707 < len__4818__auto___66706)){
args__4824__auto__.push((arguments[i__4819__auto___66707]));

var G__66708 = (i__4819__auto___66707 + (1));
i__4819__auto___66707 = G__66708;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65374 = conformed_args__62763__auto__;
var map__65374__$1 = cljs.core.__destructure_map(map__65374);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65374__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65374__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65374__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq65369){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65369));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66709 = arguments.length;
var i__4819__auto___66710 = (0);
while(true){
if((i__4819__auto___66710 < len__4818__auto___66709)){
args__4824__auto__.push((arguments[i__4819__auto___66710]));

var G__66711 = (i__4819__auto___66710 + (1));
i__4819__auto___66710 = G__66711;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65384 = conformed_args__62763__auto__;
var map__65384__$1 = cljs.core.__destructure_map(map__65384);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65384__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65384__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65384__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq65380){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65380));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66712 = arguments.length;
var i__4819__auto___66713 = (0);
while(true){
if((i__4819__auto___66713 < len__4818__auto___66712)){
args__4824__auto__.push((arguments[i__4819__auto___66713]));

var G__66714 = (i__4819__auto___66713 + (1));
i__4819__auto___66713 = G__66714;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65394 = conformed_args__62763__auto__;
var map__65394__$1 = cljs.core.__destructure_map(map__65394);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq65390){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65390));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66715 = arguments.length;
var i__4819__auto___66716 = (0);
while(true){
if((i__4819__auto___66716 < len__4818__auto___66715)){
args__4824__auto__.push((arguments[i__4819__auto___66716]));

var G__66717 = (i__4819__auto___66716 + (1));
i__4819__auto___66716 = G__66717;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65404 = conformed_args__62763__auto__;
var map__65404__$1 = cljs.core.__destructure_map(map__65404);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65404__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65404__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65404__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq65401){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65401));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66718 = arguments.length;
var i__4819__auto___66719 = (0);
while(true){
if((i__4819__auto___66719 < len__4818__auto___66718)){
args__4824__auto__.push((arguments[i__4819__auto___66719]));

var G__66720 = (i__4819__auto___66719 + (1));
i__4819__auto___66719 = G__66720;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65415 = conformed_args__62763__auto__;
var map__65415__$1 = cljs.core.__destructure_map(map__65415);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65415__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65415__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65415__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq65409){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65409));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66721 = arguments.length;
var i__4819__auto___66722 = (0);
while(true){
if((i__4819__auto___66722 < len__4818__auto___66721)){
args__4824__auto__.push((arguments[i__4819__auto___66722]));

var G__66723 = (i__4819__auto___66722 + (1));
i__4819__auto___66722 = G__66723;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65435 = conformed_args__62763__auto__;
var map__65435__$1 = cljs.core.__destructure_map(map__65435);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65435__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65435__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65435__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq65420){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65420));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66724 = arguments.length;
var i__4819__auto___66725 = (0);
while(true){
if((i__4819__auto___66725 < len__4818__auto___66724)){
args__4824__auto__.push((arguments[i__4819__auto___66725]));

var G__66726 = (i__4819__auto___66725 + (1));
i__4819__auto___66725 = G__66726;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65449 = conformed_args__62763__auto__;
var map__65449__$1 = cljs.core.__destructure_map(map__65449);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65449__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65449__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65449__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq65444){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65444));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66727 = arguments.length;
var i__4819__auto___66728 = (0);
while(true){
if((i__4819__auto___66728 < len__4818__auto___66727)){
args__4824__auto__.push((arguments[i__4819__auto___66728]));

var G__66729 = (i__4819__auto___66728 + (1));
i__4819__auto___66728 = G__66729;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65461 = conformed_args__62763__auto__;
var map__65461__$1 = cljs.core.__destructure_map(map__65461);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65461__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65461__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65461__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq65453){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65453));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66730 = arguments.length;
var i__4819__auto___66731 = (0);
while(true){
if((i__4819__auto___66731 < len__4818__auto___66730)){
args__4824__auto__.push((arguments[i__4819__auto___66731]));

var G__66732 = (i__4819__auto___66731 + (1));
i__4819__auto___66731 = G__66732;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65473 = conformed_args__62763__auto__;
var map__65473__$1 = cljs.core.__destructure_map(map__65473);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq65464){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65464));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66733 = arguments.length;
var i__4819__auto___66734 = (0);
while(true){
if((i__4819__auto___66734 < len__4818__auto___66733)){
args__4824__auto__.push((arguments[i__4819__auto___66734]));

var G__66735 = (i__4819__auto___66734 + (1));
i__4819__auto___66734 = G__66735;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65482 = conformed_args__62763__auto__;
var map__65482__$1 = cljs.core.__destructure_map(map__65482);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65482__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65482__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq65478){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65478));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66736 = arguments.length;
var i__4819__auto___66737 = (0);
while(true){
if((i__4819__auto___66737 < len__4818__auto___66736)){
args__4824__auto__.push((arguments[i__4819__auto___66737]));

var G__66738 = (i__4819__auto___66737 + (1));
i__4819__auto___66737 = G__66738;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65497 = conformed_args__62763__auto__;
var map__65497__$1 = cljs.core.__destructure_map(map__65497);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65497__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65497__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq65489){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65489));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66739 = arguments.length;
var i__4819__auto___66740 = (0);
while(true){
if((i__4819__auto___66740 < len__4818__auto___66739)){
args__4824__auto__.push((arguments[i__4819__auto___66740]));

var G__66741 = (i__4819__auto___66740 + (1));
i__4819__auto___66740 = G__66741;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65505 = conformed_args__62763__auto__;
var map__65505__$1 = cljs.core.__destructure_map(map__65505);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65505__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65505__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65505__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq65503){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65503));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66742 = arguments.length;
var i__4819__auto___66743 = (0);
while(true){
if((i__4819__auto___66743 < len__4818__auto___66742)){
args__4824__auto__.push((arguments[i__4819__auto___66743]));

var G__66744 = (i__4819__auto___66743 + (1));
i__4819__auto___66743 = G__66744;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65524 = conformed_args__62763__auto__;
var map__65524__$1 = cljs.core.__destructure_map(map__65524);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq65516){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65516));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66745 = arguments.length;
var i__4819__auto___66746 = (0);
while(true){
if((i__4819__auto___66746 < len__4818__auto___66745)){
args__4824__auto__.push((arguments[i__4819__auto___66746]));

var G__66747 = (i__4819__auto___66746 + (1));
i__4819__auto___66746 = G__66747;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65536 = conformed_args__62763__auto__;
var map__65536__$1 = cljs.core.__destructure_map(map__65536);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq65527){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65527));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66748 = arguments.length;
var i__4819__auto___66749 = (0);
while(true){
if((i__4819__auto___66749 < len__4818__auto___66748)){
args__4824__auto__.push((arguments[i__4819__auto___66749]));

var G__66750 = (i__4819__auto___66749 + (1));
i__4819__auto___66749 = G__66750;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65543 = conformed_args__62763__auto__;
var map__65543__$1 = cljs.core.__destructure_map(map__65543);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65543__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65543__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65543__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq65539){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65539));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66751 = arguments.length;
var i__4819__auto___66752 = (0);
while(true){
if((i__4819__auto___66752 < len__4818__auto___66751)){
args__4824__auto__.push((arguments[i__4819__auto___66752]));

var G__66753 = (i__4819__auto___66752 + (1));
i__4819__auto___66752 = G__66753;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65569 = conformed_args__62763__auto__;
var map__65569__$1 = cljs.core.__destructure_map(map__65569);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq65560){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65560));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66754 = arguments.length;
var i__4819__auto___66755 = (0);
while(true){
if((i__4819__auto___66755 < len__4818__auto___66754)){
args__4824__auto__.push((arguments[i__4819__auto___66755]));

var G__66756 = (i__4819__auto___66755 + (1));
i__4819__auto___66755 = G__66756;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65584 = conformed_args__62763__auto__;
var map__65584__$1 = cljs.core.__destructure_map(map__65584);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq65577){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65577));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66757 = arguments.length;
var i__4819__auto___66758 = (0);
while(true){
if((i__4819__auto___66758 < len__4818__auto___66757)){
args__4824__auto__.push((arguments[i__4819__auto___66758]));

var G__66759 = (i__4819__auto___66758 + (1));
i__4819__auto___66758 = G__66759;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65601 = conformed_args__62763__auto__;
var map__65601__$1 = cljs.core.__destructure_map(map__65601);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65601__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65601__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65601__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq65597){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65597));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66760 = arguments.length;
var i__4819__auto___66761 = (0);
while(true){
if((i__4819__auto___66761 < len__4818__auto___66760)){
args__4824__auto__.push((arguments[i__4819__auto___66761]));

var G__66762 = (i__4819__auto___66761 + (1));
i__4819__auto___66761 = G__66762;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65609 = conformed_args__62763__auto__;
var map__65609__$1 = cljs.core.__destructure_map(map__65609);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65609__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65609__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65609__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq65606){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65606));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66763 = arguments.length;
var i__4819__auto___66764 = (0);
while(true){
if((i__4819__auto___66764 < len__4818__auto___66763)){
args__4824__auto__.push((arguments[i__4819__auto___66764]));

var G__66765 = (i__4819__auto___66764 + (1));
i__4819__auto___66764 = G__66765;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65619 = conformed_args__62763__auto__;
var map__65619__$1 = cljs.core.__destructure_map(map__65619);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq65617){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65617));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66766 = arguments.length;
var i__4819__auto___66767 = (0);
while(true){
if((i__4819__auto___66767 < len__4818__auto___66766)){
args__4824__auto__.push((arguments[i__4819__auto___66767]));

var G__66768 = (i__4819__auto___66767 + (1));
i__4819__auto___66767 = G__66768;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65625 = conformed_args__62763__auto__;
var map__65625__$1 = cljs.core.__destructure_map(map__65625);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65625__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65625__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65625__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq65622){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65622));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66769 = arguments.length;
var i__4819__auto___66770 = (0);
while(true){
if((i__4819__auto___66770 < len__4818__auto___66769)){
args__4824__auto__.push((arguments[i__4819__auto___66770]));

var G__66771 = (i__4819__auto___66770 + (1));
i__4819__auto___66770 = G__66771;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65630 = conformed_args__62763__auto__;
var map__65630__$1 = cljs.core.__destructure_map(map__65630);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq65628){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65628));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66772 = arguments.length;
var i__4819__auto___66773 = (0);
while(true){
if((i__4819__auto___66773 < len__4818__auto___66772)){
args__4824__auto__.push((arguments[i__4819__auto___66773]));

var G__66774 = (i__4819__auto___66773 + (1));
i__4819__auto___66773 = G__66774;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65636 = conformed_args__62763__auto__;
var map__65636__$1 = cljs.core.__destructure_map(map__65636);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65636__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65636__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65636__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq65633){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65633));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66775 = arguments.length;
var i__4819__auto___66776 = (0);
while(true){
if((i__4819__auto___66776 < len__4818__auto___66775)){
args__4824__auto__.push((arguments[i__4819__auto___66776]));

var G__66777 = (i__4819__auto___66776 + (1));
i__4819__auto___66776 = G__66777;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65648 = conformed_args__62763__auto__;
var map__65648__$1 = cljs.core.__destructure_map(map__65648);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq65639){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65639));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66778 = arguments.length;
var i__4819__auto___66779 = (0);
while(true){
if((i__4819__auto___66779 < len__4818__auto___66778)){
args__4824__auto__.push((arguments[i__4819__auto___66779]));

var G__66780 = (i__4819__auto___66779 + (1));
i__4819__auto___66779 = G__66780;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65661 = conformed_args__62763__auto__;
var map__65661__$1 = cljs.core.__destructure_map(map__65661);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65661__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65661__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65661__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq65657){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65657));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66781 = arguments.length;
var i__4819__auto___66782 = (0);
while(true){
if((i__4819__auto___66782 < len__4818__auto___66781)){
args__4824__auto__.push((arguments[i__4819__auto___66782]));

var G__66783 = (i__4819__auto___66782 + (1));
i__4819__auto___66782 = G__66783;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65674 = conformed_args__62763__auto__;
var map__65674__$1 = cljs.core.__destructure_map(map__65674);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq65667){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65667));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66784 = arguments.length;
var i__4819__auto___66785 = (0);
while(true){
if((i__4819__auto___66785 < len__4818__auto___66784)){
args__4824__auto__.push((arguments[i__4819__auto___66785]));

var G__66786 = (i__4819__auto___66785 + (1));
i__4819__auto___66785 = G__66786;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65682 = conformed_args__62763__auto__;
var map__65682__$1 = cljs.core.__destructure_map(map__65682);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65682__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq65679){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65679));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66787 = arguments.length;
var i__4819__auto___66788 = (0);
while(true){
if((i__4819__auto___66788 < len__4818__auto___66787)){
args__4824__auto__.push((arguments[i__4819__auto___66788]));

var G__66789 = (i__4819__auto___66788 + (1));
i__4819__auto___66788 = G__66789;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65693 = conformed_args__62763__auto__;
var map__65693__$1 = cljs.core.__destructure_map(map__65693);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq65689){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65689));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66790 = arguments.length;
var i__4819__auto___66791 = (0);
while(true){
if((i__4819__auto___66791 < len__4818__auto___66790)){
args__4824__auto__.push((arguments[i__4819__auto___66791]));

var G__66792 = (i__4819__auto___66791 + (1));
i__4819__auto___66791 = G__66792;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65702 = conformed_args__62763__auto__;
var map__65702__$1 = cljs.core.__destructure_map(map__65702);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq65698){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65698));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66793 = arguments.length;
var i__4819__auto___66794 = (0);
while(true){
if((i__4819__auto___66794 < len__4818__auto___66793)){
args__4824__auto__.push((arguments[i__4819__auto___66794]));

var G__66795 = (i__4819__auto___66794 + (1));
i__4819__auto___66794 = G__66795;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65712 = conformed_args__62763__auto__;
var map__65712__$1 = cljs.core.__destructure_map(map__65712);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65712__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65712__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq65708){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65708));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66796 = arguments.length;
var i__4819__auto___66797 = (0);
while(true){
if((i__4819__auto___66797 < len__4818__auto___66796)){
args__4824__auto__.push((arguments[i__4819__auto___66797]));

var G__66798 = (i__4819__auto___66797 + (1));
i__4819__auto___66797 = G__66798;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65724 = conformed_args__62763__auto__;
var map__65724__$1 = cljs.core.__destructure_map(map__65724);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq65721){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65721));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66799 = arguments.length;
var i__4819__auto___66800 = (0);
while(true){
if((i__4819__auto___66800 < len__4818__auto___66799)){
args__4824__auto__.push((arguments[i__4819__auto___66800]));

var G__66801 = (i__4819__auto___66800 + (1));
i__4819__auto___66800 = G__66801;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65736 = conformed_args__62763__auto__;
var map__65736__$1 = cljs.core.__destructure_map(map__65736);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq65730){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65730));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66802 = arguments.length;
var i__4819__auto___66803 = (0);
while(true){
if((i__4819__auto___66803 < len__4818__auto___66802)){
args__4824__auto__.push((arguments[i__4819__auto___66803]));

var G__66804 = (i__4819__auto___66803 + (1));
i__4819__auto___66803 = G__66804;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65754 = conformed_args__62763__auto__;
var map__65754__$1 = cljs.core.__destructure_map(map__65754);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq65741){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65741));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66805 = arguments.length;
var i__4819__auto___66806 = (0);
while(true){
if((i__4819__auto___66806 < len__4818__auto___66805)){
args__4824__auto__.push((arguments[i__4819__auto___66806]));

var G__66807 = (i__4819__auto___66806 + (1));
i__4819__auto___66806 = G__66807;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65779 = conformed_args__62763__auto__;
var map__65779__$1 = cljs.core.__destructure_map(map__65779);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65779__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65779__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65779__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq65767){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65767));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66808 = arguments.length;
var i__4819__auto___66809 = (0);
while(true){
if((i__4819__auto___66809 < len__4818__auto___66808)){
args__4824__auto__.push((arguments[i__4819__auto___66809]));

var G__66810 = (i__4819__auto___66809 + (1));
i__4819__auto___66809 = G__66810;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65793 = conformed_args__62763__auto__;
var map__65793__$1 = cljs.core.__destructure_map(map__65793);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65793__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65793__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65793__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq65789){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65789));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66811 = arguments.length;
var i__4819__auto___66812 = (0);
while(true){
if((i__4819__auto___66812 < len__4818__auto___66811)){
args__4824__auto__.push((arguments[i__4819__auto___66812]));

var G__66813 = (i__4819__auto___66812 + (1));
i__4819__auto___66812 = G__66813;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65805 = conformed_args__62763__auto__;
var map__65805__$1 = cljs.core.__destructure_map(map__65805);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65805__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq65801){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65801));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66814 = arguments.length;
var i__4819__auto___66815 = (0);
while(true){
if((i__4819__auto___66815 < len__4818__auto___66814)){
args__4824__auto__.push((arguments[i__4819__auto___66815]));

var G__66816 = (i__4819__auto___66815 + (1));
i__4819__auto___66815 = G__66816;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65814 = conformed_args__62763__auto__;
var map__65814__$1 = cljs.core.__destructure_map(map__65814);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65814__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65814__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq65810){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65810));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66817 = arguments.length;
var i__4819__auto___66818 = (0);
while(true){
if((i__4819__auto___66818 < len__4818__auto___66817)){
args__4824__auto__.push((arguments[i__4819__auto___66818]));

var G__66819 = (i__4819__auto___66818 + (1));
i__4819__auto___66818 = G__66819;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65825 = conformed_args__62763__auto__;
var map__65825__$1 = cljs.core.__destructure_map(map__65825);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65825__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65825__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65825__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq65820){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65820));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66820 = arguments.length;
var i__4819__auto___66821 = (0);
while(true){
if((i__4819__auto___66821 < len__4818__auto___66820)){
args__4824__auto__.push((arguments[i__4819__auto___66821]));

var G__66822 = (i__4819__auto___66821 + (1));
i__4819__auto___66821 = G__66822;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65841 = conformed_args__62763__auto__;
var map__65841__$1 = cljs.core.__destructure_map(map__65841);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq65836){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65836));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66823 = arguments.length;
var i__4819__auto___66824 = (0);
while(true){
if((i__4819__auto___66824 < len__4818__auto___66823)){
args__4824__auto__.push((arguments[i__4819__auto___66824]));

var G__66825 = (i__4819__auto___66824 + (1));
i__4819__auto___66824 = G__66825;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65846 = conformed_args__62763__auto__;
var map__65846__$1 = cljs.core.__destructure_map(map__65846);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65846__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65846__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65846__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq65845){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65845));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66826 = arguments.length;
var i__4819__auto___66827 = (0);
while(true){
if((i__4819__auto___66827 < len__4818__auto___66826)){
args__4824__auto__.push((arguments[i__4819__auto___66827]));

var G__66828 = (i__4819__auto___66827 + (1));
i__4819__auto___66827 = G__66828;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65853 = conformed_args__62763__auto__;
var map__65853__$1 = cljs.core.__destructure_map(map__65853);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq65849){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65849));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66829 = arguments.length;
var i__4819__auto___66830 = (0);
while(true){
if((i__4819__auto___66830 < len__4818__auto___66829)){
args__4824__auto__.push((arguments[i__4819__auto___66830]));

var G__66831 = (i__4819__auto___66830 + (1));
i__4819__auto___66830 = G__66831;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65856 = conformed_args__62763__auto__;
var map__65856__$1 = cljs.core.__destructure_map(map__65856);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65856__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65856__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65856__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq65854){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65854));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66832 = arguments.length;
var i__4819__auto___66833 = (0);
while(true){
if((i__4819__auto___66833 < len__4818__auto___66832)){
args__4824__auto__.push((arguments[i__4819__auto___66833]));

var G__66834 = (i__4819__auto___66833 + (1));
i__4819__auto___66833 = G__66834;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65862 = conformed_args__62763__auto__;
var map__65862__$1 = cljs.core.__destructure_map(map__65862);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65862__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65862__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65862__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq65861){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65861));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66835 = arguments.length;
var i__4819__auto___66836 = (0);
while(true){
if((i__4819__auto___66836 < len__4818__auto___66835)){
args__4824__auto__.push((arguments[i__4819__auto___66836]));

var G__66837 = (i__4819__auto___66836 + (1));
i__4819__auto___66836 = G__66837;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65868 = conformed_args__62763__auto__;
var map__65868__$1 = cljs.core.__destructure_map(map__65868);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65868__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq65866){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65866));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66838 = arguments.length;
var i__4819__auto___66839 = (0);
while(true){
if((i__4819__auto___66839 < len__4818__auto___66838)){
args__4824__auto__.push((arguments[i__4819__auto___66839]));

var G__66840 = (i__4819__auto___66839 + (1));
i__4819__auto___66839 = G__66840;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65874 = conformed_args__62763__auto__;
var map__65874__$1 = cljs.core.__destructure_map(map__65874);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65874__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65874__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65874__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq65869){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65869));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66841 = arguments.length;
var i__4819__auto___66842 = (0);
while(true){
if((i__4819__auto___66842 < len__4818__auto___66841)){
args__4824__auto__.push((arguments[i__4819__auto___66842]));

var G__66843 = (i__4819__auto___66842 + (1));
i__4819__auto___66842 = G__66843;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65877 = conformed_args__62763__auto__;
var map__65877__$1 = cljs.core.__destructure_map(map__65877);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq65875){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65875));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66844 = arguments.length;
var i__4819__auto___66845 = (0);
while(true){
if((i__4819__auto___66845 < len__4818__auto___66844)){
args__4824__auto__.push((arguments[i__4819__auto___66845]));

var G__66846 = (i__4819__auto___66845 + (1));
i__4819__auto___66845 = G__66846;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65887 = conformed_args__62763__auto__;
var map__65887__$1 = cljs.core.__destructure_map(map__65887);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq65880){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65880));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66847 = arguments.length;
var i__4819__auto___66848 = (0);
while(true){
if((i__4819__auto___66848 < len__4818__auto___66847)){
args__4824__auto__.push((arguments[i__4819__auto___66848]));

var G__66849 = (i__4819__auto___66848 + (1));
i__4819__auto___66848 = G__66849;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65897 = conformed_args__62763__auto__;
var map__65897__$1 = cljs.core.__destructure_map(map__65897);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65897__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65897__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65897__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq65893){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65893));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66850 = arguments.length;
var i__4819__auto___66851 = (0);
while(true){
if((i__4819__auto___66851 < len__4818__auto___66850)){
args__4824__auto__.push((arguments[i__4819__auto___66851]));

var G__66852 = (i__4819__auto___66851 + (1));
i__4819__auto___66851 = G__66852;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65903 = conformed_args__62763__auto__;
var map__65903__$1 = cljs.core.__destructure_map(map__65903);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq65900){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65900));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66853 = arguments.length;
var i__4819__auto___66854 = (0);
while(true){
if((i__4819__auto___66854 < len__4818__auto___66853)){
args__4824__auto__.push((arguments[i__4819__auto___66854]));

var G__66855 = (i__4819__auto___66854 + (1));
i__4819__auto___66854 = G__66855;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65912 = conformed_args__62763__auto__;
var map__65912__$1 = cljs.core.__destructure_map(map__65912);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq65910){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65910));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66856 = arguments.length;
var i__4819__auto___66857 = (0);
while(true){
if((i__4819__auto___66857 < len__4818__auto___66856)){
args__4824__auto__.push((arguments[i__4819__auto___66857]));

var G__66858 = (i__4819__auto___66857 + (1));
i__4819__auto___66857 = G__66858;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65926 = conformed_args__62763__auto__;
var map__65926__$1 = cljs.core.__destructure_map(map__65926);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq65918){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65918));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66859 = arguments.length;
var i__4819__auto___66860 = (0);
while(true){
if((i__4819__auto___66860 < len__4818__auto___66859)){
args__4824__auto__.push((arguments[i__4819__auto___66860]));

var G__66861 = (i__4819__auto___66860 + (1));
i__4819__auto___66860 = G__66861;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65933 = conformed_args__62763__auto__;
var map__65933__$1 = cljs.core.__destructure_map(map__65933);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq65929){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65929));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66862 = arguments.length;
var i__4819__auto___66863 = (0);
while(true){
if((i__4819__auto___66863 < len__4818__auto___66862)){
args__4824__auto__.push((arguments[i__4819__auto___66863]));

var G__66864 = (i__4819__auto___66863 + (1));
i__4819__auto___66863 = G__66864;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65938 = conformed_args__62763__auto__;
var map__65938__$1 = cljs.core.__destructure_map(map__65938);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65938__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65938__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65938__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq65937){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65937));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66865 = arguments.length;
var i__4819__auto___66866 = (0);
while(true){
if((i__4819__auto___66866 < len__4818__auto___66865)){
args__4824__auto__.push((arguments[i__4819__auto___66866]));

var G__66867 = (i__4819__auto___66866 + (1));
i__4819__auto___66866 = G__66867;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65947 = conformed_args__62763__auto__;
var map__65947__$1 = cljs.core.__destructure_map(map__65947);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65947__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65947__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65947__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq65942){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65942));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66868 = arguments.length;
var i__4819__auto___66869 = (0);
while(true){
if((i__4819__auto___66869 < len__4818__auto___66868)){
args__4824__auto__.push((arguments[i__4819__auto___66869]));

var G__66870 = (i__4819__auto___66869 + (1));
i__4819__auto___66869 = G__66870;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65956 = conformed_args__62763__auto__;
var map__65956__$1 = cljs.core.__destructure_map(map__65956);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq65952){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65952));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66871 = arguments.length;
var i__4819__auto___66872 = (0);
while(true){
if((i__4819__auto___66872 < len__4818__auto___66871)){
args__4824__auto__.push((arguments[i__4819__auto___66872]));

var G__66873 = (i__4819__auto___66872 + (1));
i__4819__auto___66872 = G__66873;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65960 = conformed_args__62763__auto__;
var map__65960__$1 = cljs.core.__destructure_map(map__65960);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65960__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65960__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq65959){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65959));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66874 = arguments.length;
var i__4819__auto___66875 = (0);
while(true){
if((i__4819__auto___66875 < len__4818__auto___66874)){
args__4824__auto__.push((arguments[i__4819__auto___66875]));

var G__66876 = (i__4819__auto___66875 + (1));
i__4819__auto___66875 = G__66876;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65970 = conformed_args__62763__auto__;
var map__65970__$1 = cljs.core.__destructure_map(map__65970);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65970__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65970__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65970__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq65965){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65965));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66877 = arguments.length;
var i__4819__auto___66878 = (0);
while(true){
if((i__4819__auto___66878 < len__4818__auto___66877)){
args__4824__auto__.push((arguments[i__4819__auto___66878]));

var G__66879 = (i__4819__auto___66878 + (1));
i__4819__auto___66878 = G__66879;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65979 = conformed_args__62763__auto__;
var map__65979__$1 = cljs.core.__destructure_map(map__65979);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65979__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65979__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65979__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq65978){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65978));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66880 = arguments.length;
var i__4819__auto___66881 = (0);
while(true){
if((i__4819__auto___66881 < len__4818__auto___66880)){
args__4824__auto__.push((arguments[i__4819__auto___66881]));

var G__66882 = (i__4819__auto___66881 + (1));
i__4819__auto___66881 = G__66882;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65985 = conformed_args__62763__auto__;
var map__65985__$1 = cljs.core.__destructure_map(map__65985);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65985__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65985__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65985__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq65981){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65981));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66883 = arguments.length;
var i__4819__auto___66884 = (0);
while(true){
if((i__4819__auto___66884 < len__4818__auto___66883)){
args__4824__auto__.push((arguments[i__4819__auto___66884]));

var G__66885 = (i__4819__auto___66884 + (1));
i__4819__auto___66884 = G__66885;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65993 = conformed_args__62763__auto__;
var map__65993__$1 = cljs.core.__destructure_map(map__65993);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq65990){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65990));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66886 = arguments.length;
var i__4819__auto___66887 = (0);
while(true){
if((i__4819__auto___66887 < len__4818__auto___66886)){
args__4824__auto__.push((arguments[i__4819__auto___66887]));

var G__66888 = (i__4819__auto___66887 + (1));
i__4819__auto___66887 = G__66888;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66004 = conformed_args__62763__auto__;
var map__66004__$1 = cljs.core.__destructure_map(map__66004);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66004__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66004__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66004__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq65996){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65996));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66889 = arguments.length;
var i__4819__auto___66890 = (0);
while(true){
if((i__4819__auto___66890 < len__4818__auto___66889)){
args__4824__auto__.push((arguments[i__4819__auto___66890]));

var G__66891 = (i__4819__auto___66890 + (1));
i__4819__auto___66890 = G__66891;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66008 = conformed_args__62763__auto__;
var map__66008__$1 = cljs.core.__destructure_map(map__66008);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq66005){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66005));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66892 = arguments.length;
var i__4819__auto___66893 = (0);
while(true){
if((i__4819__auto___66893 < len__4818__auto___66892)){
args__4824__auto__.push((arguments[i__4819__auto___66893]));

var G__66894 = (i__4819__auto___66893 + (1));
i__4819__auto___66893 = G__66894;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66017 = conformed_args__62763__auto__;
var map__66017__$1 = cljs.core.__destructure_map(map__66017);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq66012){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66012));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66895 = arguments.length;
var i__4819__auto___66896 = (0);
while(true){
if((i__4819__auto___66896 < len__4818__auto___66895)){
args__4824__auto__.push((arguments[i__4819__auto___66896]));

var G__66897 = (i__4819__auto___66896 + (1));
i__4819__auto___66896 = G__66897;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66024 = conformed_args__62763__auto__;
var map__66024__$1 = cljs.core.__destructure_map(map__66024);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66024__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66024__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66024__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq66018){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66018));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66898 = arguments.length;
var i__4819__auto___66899 = (0);
while(true){
if((i__4819__auto___66899 < len__4818__auto___66898)){
args__4824__auto__.push((arguments[i__4819__auto___66899]));

var G__66900 = (i__4819__auto___66899 + (1));
i__4819__auto___66899 = G__66900;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66026 = conformed_args__62763__auto__;
var map__66026__$1 = cljs.core.__destructure_map(map__66026);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66026__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66026__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66026__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq66025){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66025));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66901 = arguments.length;
var i__4819__auto___66902 = (0);
while(true){
if((i__4819__auto___66902 < len__4818__auto___66901)){
args__4824__auto__.push((arguments[i__4819__auto___66902]));

var G__66903 = (i__4819__auto___66902 + (1));
i__4819__auto___66902 = G__66903;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66030 = conformed_args__62763__auto__;
var map__66030__$1 = cljs.core.__destructure_map(map__66030);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66030__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66030__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66030__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq66029){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66029));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66904 = arguments.length;
var i__4819__auto___66905 = (0);
while(true){
if((i__4819__auto___66905 < len__4818__auto___66904)){
args__4824__auto__.push((arguments[i__4819__auto___66905]));

var G__66906 = (i__4819__auto___66905 + (1));
i__4819__auto___66905 = G__66906;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66035 = conformed_args__62763__auto__;
var map__66035__$1 = cljs.core.__destructure_map(map__66035);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq66032){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66032));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66907 = arguments.length;
var i__4819__auto___66908 = (0);
while(true){
if((i__4819__auto___66908 < len__4818__auto___66907)){
args__4824__auto__.push((arguments[i__4819__auto___66908]));

var G__66909 = (i__4819__auto___66908 + (1));
i__4819__auto___66908 = G__66909;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66040 = conformed_args__62763__auto__;
var map__66040__$1 = cljs.core.__destructure_map(map__66040);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq66037){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66037));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66910 = arguments.length;
var i__4819__auto___66911 = (0);
while(true){
if((i__4819__auto___66911 < len__4818__auto___66910)){
args__4824__auto__.push((arguments[i__4819__auto___66911]));

var G__66912 = (i__4819__auto___66911 + (1));
i__4819__auto___66911 = G__66912;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66043 = conformed_args__62763__auto__;
var map__66043__$1 = cljs.core.__destructure_map(map__66043);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66043__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66043__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66043__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq66042){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66042));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66913 = arguments.length;
var i__4819__auto___66914 = (0);
while(true){
if((i__4819__auto___66914 < len__4818__auto___66913)){
args__4824__auto__.push((arguments[i__4819__auto___66914]));

var G__66915 = (i__4819__auto___66914 + (1));
i__4819__auto___66914 = G__66915;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66050 = conformed_args__62763__auto__;
var map__66050__$1 = cljs.core.__destructure_map(map__66050);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66050__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66050__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66050__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq66047){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66047));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66916 = arguments.length;
var i__4819__auto___66917 = (0);
while(true){
if((i__4819__auto___66917 < len__4818__auto___66916)){
args__4824__auto__.push((arguments[i__4819__auto___66917]));

var G__66918 = (i__4819__auto___66917 + (1));
i__4819__auto___66917 = G__66918;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66055 = conformed_args__62763__auto__;
var map__66055__$1 = cljs.core.__destructure_map(map__66055);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq66052){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66052));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66919 = arguments.length;
var i__4819__auto___66920 = (0);
while(true){
if((i__4819__auto___66920 < len__4818__auto___66919)){
args__4824__auto__.push((arguments[i__4819__auto___66920]));

var G__66921 = (i__4819__auto___66920 + (1));
i__4819__auto___66920 = G__66921;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66057 = conformed_args__62763__auto__;
var map__66057__$1 = cljs.core.__destructure_map(map__66057);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66057__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66057__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66057__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq66056){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66056));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66922 = arguments.length;
var i__4819__auto___66923 = (0);
while(true){
if((i__4819__auto___66923 < len__4818__auto___66922)){
args__4824__auto__.push((arguments[i__4819__auto___66923]));

var G__66924 = (i__4819__auto___66923 + (1));
i__4819__auto___66923 = G__66924;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66062 = conformed_args__62763__auto__;
var map__66062__$1 = cljs.core.__destructure_map(map__66062);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq66058){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66058));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66925 = arguments.length;
var i__4819__auto___66926 = (0);
while(true){
if((i__4819__auto___66926 < len__4818__auto___66925)){
args__4824__auto__.push((arguments[i__4819__auto___66926]));

var G__66927 = (i__4819__auto___66926 + (1));
i__4819__auto___66926 = G__66927;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66071 = conformed_args__62763__auto__;
var map__66071__$1 = cljs.core.__destructure_map(map__66071);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq66066){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66066));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66928 = arguments.length;
var i__4819__auto___66929 = (0);
while(true){
if((i__4819__auto___66929 < len__4818__auto___66928)){
args__4824__auto__.push((arguments[i__4819__auto___66929]));

var G__66930 = (i__4819__auto___66929 + (1));
i__4819__auto___66929 = G__66930;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66078 = conformed_args__62763__auto__;
var map__66078__$1 = cljs.core.__destructure_map(map__66078);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq66077){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66077));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66931 = arguments.length;
var i__4819__auto___66932 = (0);
while(true){
if((i__4819__auto___66932 < len__4818__auto___66931)){
args__4824__auto__.push((arguments[i__4819__auto___66932]));

var G__66933 = (i__4819__auto___66932 + (1));
i__4819__auto___66932 = G__66933;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66105 = conformed_args__62763__auto__;
var map__66105__$1 = cljs.core.__destructure_map(map__66105);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66105__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66105__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66105__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq66098){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66098));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66934 = arguments.length;
var i__4819__auto___66935 = (0);
while(true){
if((i__4819__auto___66935 < len__4818__auto___66934)){
args__4824__auto__.push((arguments[i__4819__auto___66935]));

var G__66936 = (i__4819__auto___66935 + (1));
i__4819__auto___66935 = G__66936;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66113 = conformed_args__62763__auto__;
var map__66113__$1 = cljs.core.__destructure_map(map__66113);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq66112){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66112));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66937 = arguments.length;
var i__4819__auto___66938 = (0);
while(true){
if((i__4819__auto___66938 < len__4818__auto___66937)){
args__4824__auto__.push((arguments[i__4819__auto___66938]));

var G__66939 = (i__4819__auto___66938 + (1));
i__4819__auto___66938 = G__66939;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66118 = conformed_args__62763__auto__;
var map__66118__$1 = cljs.core.__destructure_map(map__66118);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66118__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66118__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66118__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq66117){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66117));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66940 = arguments.length;
var i__4819__auto___66941 = (0);
while(true){
if((i__4819__auto___66941 < len__4818__auto___66940)){
args__4824__auto__.push((arguments[i__4819__auto___66941]));

var G__66942 = (i__4819__auto___66941 + (1));
i__4819__auto___66941 = G__66942;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66127 = conformed_args__62763__auto__;
var map__66127__$1 = cljs.core.__destructure_map(map__66127);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66127__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66127__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq66121){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66121));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66943 = arguments.length;
var i__4819__auto___66944 = (0);
while(true){
if((i__4819__auto___66944 < len__4818__auto___66943)){
args__4824__auto__.push((arguments[i__4819__auto___66944]));

var G__66945 = (i__4819__auto___66944 + (1));
i__4819__auto___66944 = G__66945;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66165 = conformed_args__62763__auto__;
var map__66165__$1 = cljs.core.__destructure_map(map__66165);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq66138){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66138));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66946 = arguments.length;
var i__4819__auto___66947 = (0);
while(true){
if((i__4819__auto___66947 < len__4818__auto___66946)){
args__4824__auto__.push((arguments[i__4819__auto___66947]));

var G__66948 = (i__4819__auto___66947 + (1));
i__4819__auto___66947 = G__66948;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66211 = conformed_args__62763__auto__;
var map__66211__$1 = cljs.core.__destructure_map(map__66211);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66211__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66211__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66211__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq66181){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66181));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66949 = arguments.length;
var i__4819__auto___66950 = (0);
while(true){
if((i__4819__auto___66950 < len__4818__auto___66949)){
args__4824__auto__.push((arguments[i__4819__auto___66950]));

var G__66951 = (i__4819__auto___66950 + (1));
i__4819__auto___66950 = G__66951;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66246 = conformed_args__62763__auto__;
var map__66246__$1 = cljs.core.__destructure_map(map__66246);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq66231){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66231));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66952 = arguments.length;
var i__4819__auto___66953 = (0);
while(true){
if((i__4819__auto___66953 < len__4818__auto___66952)){
args__4824__auto__.push((arguments[i__4819__auto___66953]));

var G__66954 = (i__4819__auto___66953 + (1));
i__4819__auto___66953 = G__66954;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66250 = conformed_args__62763__auto__;
var map__66250__$1 = cljs.core.__destructure_map(map__66250);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq66247){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66247));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66955 = arguments.length;
var i__4819__auto___66956 = (0);
while(true){
if((i__4819__auto___66956 < len__4818__auto___66955)){
args__4824__auto__.push((arguments[i__4819__auto___66956]));

var G__66957 = (i__4819__auto___66956 + (1));
i__4819__auto___66956 = G__66957;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66262 = conformed_args__62763__auto__;
var map__66262__$1 = cljs.core.__destructure_map(map__66262);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66262__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq66261){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66261));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66958 = arguments.length;
var i__4819__auto___66959 = (0);
while(true){
if((i__4819__auto___66959 < len__4818__auto___66958)){
args__4824__auto__.push((arguments[i__4819__auto___66959]));

var G__66960 = (i__4819__auto___66959 + (1));
i__4819__auto___66959 = G__66960;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66266 = conformed_args__62763__auto__;
var map__66266__$1 = cljs.core.__destructure_map(map__66266);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq66264){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66264));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66961 = arguments.length;
var i__4819__auto___66962 = (0);
while(true){
if((i__4819__auto___66962 < len__4818__auto___66961)){
args__4824__auto__.push((arguments[i__4819__auto___66962]));

var G__66963 = (i__4819__auto___66962 + (1));
i__4819__auto___66962 = G__66963;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66271 = conformed_args__62763__auto__;
var map__66271__$1 = cljs.core.__destructure_map(map__66271);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66271__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66271__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66271__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq66270){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66270));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66964 = arguments.length;
var i__4819__auto___66965 = (0);
while(true){
if((i__4819__auto___66965 < len__4818__auto___66964)){
args__4824__auto__.push((arguments[i__4819__auto___66965]));

var G__66966 = (i__4819__auto___66965 + (1));
i__4819__auto___66965 = G__66966;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66276 = conformed_args__62763__auto__;
var map__66276__$1 = cljs.core.__destructure_map(map__66276);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66276__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66276__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66276__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq66272){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66272));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66967 = arguments.length;
var i__4819__auto___66968 = (0);
while(true){
if((i__4819__auto___66968 < len__4818__auto___66967)){
args__4824__auto__.push((arguments[i__4819__auto___66968]));

var G__66969 = (i__4819__auto___66968 + (1));
i__4819__auto___66968 = G__66969;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66279 = conformed_args__62763__auto__;
var map__66279__$1 = cljs.core.__destructure_map(map__66279);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq66278){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66278));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66970 = arguments.length;
var i__4819__auto___66971 = (0);
while(true){
if((i__4819__auto___66971 < len__4818__auto___66970)){
args__4824__auto__.push((arguments[i__4819__auto___66971]));

var G__66972 = (i__4819__auto___66971 + (1));
i__4819__auto___66971 = G__66972;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66286 = conformed_args__62763__auto__;
var map__66286__$1 = cljs.core.__destructure_map(map__66286);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66286__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66286__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66286__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq66283){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66283));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66973 = arguments.length;
var i__4819__auto___66974 = (0);
while(true){
if((i__4819__auto___66974 < len__4818__auto___66973)){
args__4824__auto__.push((arguments[i__4819__auto___66974]));

var G__66975 = (i__4819__auto___66974 + (1));
i__4819__auto___66974 = G__66975;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66293 = conformed_args__62763__auto__;
var map__66293__$1 = cljs.core.__destructure_map(map__66293);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66293__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66293__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66293__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq66289){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66289));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66976 = arguments.length;
var i__4819__auto___66977 = (0);
while(true){
if((i__4819__auto___66977 < len__4818__auto___66976)){
args__4824__auto__.push((arguments[i__4819__auto___66977]));

var G__66978 = (i__4819__auto___66977 + (1));
i__4819__auto___66977 = G__66978;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66295 = conformed_args__62763__auto__;
var map__66295__$1 = cljs.core.__destructure_map(map__66295);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq66294){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66294));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66979 = arguments.length;
var i__4819__auto___66980 = (0);
while(true){
if((i__4819__auto___66980 < len__4818__auto___66979)){
args__4824__auto__.push((arguments[i__4819__auto___66980]));

var G__66981 = (i__4819__auto___66980 + (1));
i__4819__auto___66980 = G__66981;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66299 = conformed_args__62763__auto__;
var map__66299__$1 = cljs.core.__destructure_map(map__66299);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq66298){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66298));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66982 = arguments.length;
var i__4819__auto___66983 = (0);
while(true){
if((i__4819__auto___66983 < len__4818__auto___66982)){
args__4824__auto__.push((arguments[i__4819__auto___66983]));

var G__66984 = (i__4819__auto___66983 + (1));
i__4819__auto___66983 = G__66984;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66305 = conformed_args__62763__auto__;
var map__66305__$1 = cljs.core.__destructure_map(map__66305);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq66302){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66302));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66985 = arguments.length;
var i__4819__auto___66986 = (0);
while(true){
if((i__4819__auto___66986 < len__4818__auto___66985)){
args__4824__auto__.push((arguments[i__4819__auto___66986]));

var G__66987 = (i__4819__auto___66986 + (1));
i__4819__auto___66986 = G__66987;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66309 = conformed_args__62763__auto__;
var map__66309__$1 = cljs.core.__destructure_map(map__66309);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq66306){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66306));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66988 = arguments.length;
var i__4819__auto___66989 = (0);
while(true){
if((i__4819__auto___66989 < len__4818__auto___66988)){
args__4824__auto__.push((arguments[i__4819__auto___66989]));

var G__66990 = (i__4819__auto___66989 + (1));
i__4819__auto___66989 = G__66990;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66312 = conformed_args__62763__auto__;
var map__66312__$1 = cljs.core.__destructure_map(map__66312);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66312__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66312__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66312__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq66310){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66310));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66991 = arguments.length;
var i__4819__auto___66992 = (0);
while(true){
if((i__4819__auto___66992 < len__4818__auto___66991)){
args__4824__auto__.push((arguments[i__4819__auto___66992]));

var G__66993 = (i__4819__auto___66992 + (1));
i__4819__auto___66992 = G__66993;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66315 = conformed_args__62763__auto__;
var map__66315__$1 = cljs.core.__destructure_map(map__66315);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66315__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66315__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66315__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq66314){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66314));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66994 = arguments.length;
var i__4819__auto___66995 = (0);
while(true){
if((i__4819__auto___66995 < len__4818__auto___66994)){
args__4824__auto__.push((arguments[i__4819__auto___66995]));

var G__66996 = (i__4819__auto___66995 + (1));
i__4819__auto___66995 = G__66996;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66318 = conformed_args__62763__auto__;
var map__66318__$1 = cljs.core.__destructure_map(map__66318);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66318__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66318__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66318__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq66316){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66316));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4824__auto__ = [];
var len__4818__auto___66997 = arguments.length;
var i__4819__auto___66998 = (0);
while(true){
if((i__4819__auto___66998 < len__4818__auto___66997)){
args__4824__auto__.push((arguments[i__4819__auto___66998]));

var G__66999 = (i__4819__auto___66998 + (1));
i__4819__auto___66998 = G__66999;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66321 = conformed_args__62763__auto__;
var map__66321__$1 = cljs.core.__destructure_map(map__66321);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq66319){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66319));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4824__auto__ = [];
var len__4818__auto___67000 = arguments.length;
var i__4819__auto___67001 = (0);
while(true){
if((i__4819__auto___67001 < len__4818__auto___67000)){
args__4824__auto__.push((arguments[i__4819__auto___67001]));

var G__67002 = (i__4819__auto___67001 + (1));
i__4819__auto___67001 = G__67002;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66336 = conformed_args__62763__auto__;
var map__66336__$1 = cljs.core.__destructure_map(map__66336);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66336__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66336__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66336__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq66333){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66333));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4824__auto__ = [];
var len__4818__auto___67003 = arguments.length;
var i__4819__auto___67004 = (0);
while(true){
if((i__4819__auto___67004 < len__4818__auto___67003)){
args__4824__auto__.push((arguments[i__4819__auto___67004]));

var G__67005 = (i__4819__auto___67004 + (1));
i__4819__auto___67004 = G__67005;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66354 = conformed_args__62763__auto__;
var map__66354__$1 = cljs.core.__destructure_map(map__66354);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66354__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66354__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66354__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq66347){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66347));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4824__auto__ = [];
var len__4818__auto___67006 = arguments.length;
var i__4819__auto___67007 = (0);
while(true){
if((i__4819__auto___67007 < len__4818__auto___67006)){
args__4824__auto__.push((arguments[i__4819__auto___67007]));

var G__67008 = (i__4819__auto___67007 + (1));
i__4819__auto___67007 = G__67008;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66357 = conformed_args__62763__auto__;
var map__66357__$1 = cljs.core.__destructure_map(map__66357);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66357__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66357__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66357__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq66355){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66355));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4824__auto__ = [];
var len__4818__auto___67009 = arguments.length;
var i__4819__auto___67010 = (0);
while(true){
if((i__4819__auto___67010 < len__4818__auto___67009)){
args__4824__auto__.push((arguments[i__4819__auto___67010]));

var G__67011 = (i__4819__auto___67010 + (1));
i__4819__auto___67010 = G__67011;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62763__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66359 = conformed_args__62763__auto__;
var map__66359__$1 = cljs.core.__destructure_map(map__66359);
var children__62765__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62766__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__62764__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62765__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62765__auto__);
var attrs_value__62767__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__62764__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62767__auto__], null),children__62765__auto____$1),css__62766__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq66358){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66358));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
