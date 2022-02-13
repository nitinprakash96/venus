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
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__56495){
var vec__56496 = p__56495;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56496,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56496,(1),null);
var pair = vec__56496;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__56499){
var vec__56503 = p__56499;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56503,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56503,(1),null);
var pair = vec__56503;
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
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__56508){
var vec__56509 = p__56508;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56509,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56509,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__56512 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56512,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__56512;
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
var G__56519 = arguments.length;
switch (G__56519) {
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
var G__56520 = component.refs;
var G__56520__$1 = (((G__56520 == null))?null:goog.object.get(G__56520,name));
if((G__56520__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__56520__$1);
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
var G__56524 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__56525 = (function (){var G__56526 = r;
if((G__56526 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__56526);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__56525) : ref.call(null,G__56525));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__56524) : factory.call(null,G__56524));
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
var G__56533 = arguments.length;
switch (G__56533) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___57899 = arguments.length;
var i__4819__auto___57900 = (0);
while(true){
if((i__4819__auto___57900 < len__4818__auto___57899)){
args_arr__4839__auto__.push((arguments[i__4819__auto___57900]));

var G__57901 = (i__4819__auto___57900 + (1));
i__4819__auto___57900 = G__57901;
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
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq56530){
var G__56531 = cljs.core.first(seq56530);
var seq56530__$1 = cljs.core.next(seq56530);
var G__56532 = cljs.core.first(seq56530__$1);
var seq56530__$2 = cljs.core.next(seq56530__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56531,G__56532,seq56530__$2);
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
var G__56541 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56541) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__56541));
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

var x56543_57902 = ctor.prototype;
(x56543_57902.onChange = (function (event){
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

(x56543_57902.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__56542_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__56542_SHARP_);
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
}),null)),null,-980778257);
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

(x56543_57902.render = (function (){
var this$ = this;
return React.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__57903__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__57903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57904__i = 0, G__57904__a = new Array(arguments.length -  0);
while (G__57904__i < G__57904__a.length) {G__57904__a[G__57904__i] = arguments[G__57904__i + 0]; ++G__57904__i;}
  args = new cljs.core.IndexedSeq(G__57904__a,0,null);
} 
return G__57903__delegate.call(this,args);};
G__57903.cljs$lang$maxFixedArity = 0;
G__57903.cljs$lang$applyTo = (function (arglist__57905){
var args = cljs.core.seq(arglist__57905);
return G__57903__delegate(args);
});
G__57903.cljs$core$IFn$_invoke$arity$variadic = G__57903__delegate;
return G__57903;
})()
;
return (function() { 
var G__57906__delegate = function (props,children){
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
var G__57906 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__57907__i = 0, G__57907__a = new Array(arguments.length -  1);
while (G__57907__i < G__57907__a.length) {G__57907__a[G__57907__i] = arguments[G__57907__i + 1]; ++G__57907__i;}
  children = new cljs.core.IndexedSeq(G__57907__a,0,null);
} 
return G__57906__delegate.call(this,props,children);};
G__57906.cljs$lang$maxFixedArity = 1;
G__57906.cljs$lang$applyTo = (function (arglist__57908){
var props = cljs.core.first(arglist__57908);
var children = cljs.core.rest(arglist__57908);
return G__57906__delegate(props,children);
});
G__57906.cljs$core$IFn$_invoke$arity$variadic = G__57906__delegate;
return G__57906;
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
var G__56564 = tag;
switch (G__56564) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56564)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__56570 = arguments.length;
switch (G__56570) {
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
var vec__56575 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__56576 = cljs.core.seq(vec__56575);
var first__56577 = cljs.core.first(seq__56576);
var seq__56576__$1 = cljs.core.next(seq__56576);
var head = first__56577;
var tail = seq__56576__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__56580 = (function (){var G__56582 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56582,tail);

return G__56582;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56580) : f.call(null,G__56580));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__56583 = (function (){var G__56584 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56584,args);

return G__56584;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56583) : f.call(null,G__56583));
} else {
if(cljs.core.object_QMARK_(head)){
var G__56585 = (function (){var G__56586 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56586,tail);

return G__56586;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56585) : f.call(null,G__56585));
} else {
if(cljs.core.map_QMARK_(head)){
var G__56588 = (function (){var G__56589 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__56589,tail);

return G__56589;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56588) : f.call(null,G__56588));
} else {
var G__56590 = (function (){var G__56591 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56591,args);

return G__56591;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56590) : f.call(null,G__56590));

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
var G__56595 = arguments.length;
switch (G__56595) {
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
var vec__56602 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__56603 = cljs.core.seq(vec__56602);
var first__56604 = cljs.core.first(seq__56603);
var seq__56603__$1 = cljs.core.next(seq__56603);
var head = first__56604;
var tail = seq__56603__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56614 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56614,tail);

return G__56614;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56615 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56615,args);

return G__56615;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56616 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56616,tail);

return G__56616;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56619 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__56619,tail);

return G__56619;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56620 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56620,args);

return G__56620;
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
var len__4818__auto___57912 = arguments.length;
var i__4819__auto___57913 = (0);
while(true){
if((i__4819__auto___57913 < len__4818__auto___57912)){
args__4824__auto__.push((arguments[i__4819__auto___57913]));

var G__57914 = (i__4819__auto___57913 + (1));
i__4819__auto___57913 = G__57914;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56640 = conformed_args__48951__auto__;
var map__56640__$1 = cljs.core.__destructure_map(map__56640);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56640__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56640__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56640__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq56634){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56634));
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
var len__4818__auto___57915 = arguments.length;
var i__4819__auto___57916 = (0);
while(true){
if((i__4819__auto___57916 < len__4818__auto___57915)){
args__4824__auto__.push((arguments[i__4819__auto___57916]));

var G__57917 = (i__4819__auto___57916 + (1));
i__4819__auto___57916 = G__57917;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56651 = conformed_args__48951__auto__;
var map__56651__$1 = cljs.core.__destructure_map(map__56651);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56651__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56651__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56651__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq56642){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56642));
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
var len__4818__auto___57918 = arguments.length;
var i__4819__auto___57919 = (0);
while(true){
if((i__4819__auto___57919 < len__4818__auto___57918)){
args__4824__auto__.push((arguments[i__4819__auto___57919]));

var G__57920 = (i__4819__auto___57919 + (1));
i__4819__auto___57919 = G__57920;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56658 = conformed_args__48951__auto__;
var map__56658__$1 = cljs.core.__destructure_map(map__56658);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq56656){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56656));
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
var len__4818__auto___57921 = arguments.length;
var i__4819__auto___57922 = (0);
while(true){
if((i__4819__auto___57922 < len__4818__auto___57921)){
args__4824__auto__.push((arguments[i__4819__auto___57922]));

var G__57923 = (i__4819__auto___57922 + (1));
i__4819__auto___57922 = G__57923;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56669 = conformed_args__48951__auto__;
var map__56669__$1 = cljs.core.__destructure_map(map__56669);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq56663){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56663));
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
var len__4818__auto___57924 = arguments.length;
var i__4819__auto___57925 = (0);
while(true){
if((i__4819__auto___57925 < len__4818__auto___57924)){
args__4824__auto__.push((arguments[i__4819__auto___57925]));

var G__57926 = (i__4819__auto___57925 + (1));
i__4819__auto___57925 = G__57926;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56681 = conformed_args__48951__auto__;
var map__56681__$1 = cljs.core.__destructure_map(map__56681);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56681__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56681__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq56676){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56676));
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
var len__4818__auto___57927 = arguments.length;
var i__4819__auto___57928 = (0);
while(true){
if((i__4819__auto___57928 < len__4818__auto___57927)){
args__4824__auto__.push((arguments[i__4819__auto___57928]));

var G__57929 = (i__4819__auto___57928 + (1));
i__4819__auto___57928 = G__57929;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56692 = conformed_args__48951__auto__;
var map__56692__$1 = cljs.core.__destructure_map(map__56692);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56692__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56692__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq56687){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56687));
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
var len__4818__auto___57930 = arguments.length;
var i__4819__auto___57931 = (0);
while(true){
if((i__4819__auto___57931 < len__4818__auto___57930)){
args__4824__auto__.push((arguments[i__4819__auto___57931]));

var G__57932 = (i__4819__auto___57931 + (1));
i__4819__auto___57931 = G__57932;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56694 = conformed_args__48951__auto__;
var map__56694__$1 = cljs.core.__destructure_map(map__56694);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq56693){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56693));
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
var len__4818__auto___57933 = arguments.length;
var i__4819__auto___57934 = (0);
while(true){
if((i__4819__auto___57934 < len__4818__auto___57933)){
args__4824__auto__.push((arguments[i__4819__auto___57934]));

var G__57935 = (i__4819__auto___57934 + (1));
i__4819__auto___57934 = G__57935;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56698 = conformed_args__48951__auto__;
var map__56698__$1 = cljs.core.__destructure_map(map__56698);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56698__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56698__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56698__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq56696){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56696));
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
var len__4818__auto___57936 = arguments.length;
var i__4819__auto___57937 = (0);
while(true){
if((i__4819__auto___57937 < len__4818__auto___57936)){
args__4824__auto__.push((arguments[i__4819__auto___57937]));

var G__57938 = (i__4819__auto___57937 + (1));
i__4819__auto___57937 = G__57938;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56705 = conformed_args__48951__auto__;
var map__56705__$1 = cljs.core.__destructure_map(map__56705);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56705__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56705__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56705__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq56701){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56701));
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
var len__4818__auto___57939 = arguments.length;
var i__4819__auto___57940 = (0);
while(true){
if((i__4819__auto___57940 < len__4818__auto___57939)){
args__4824__auto__.push((arguments[i__4819__auto___57940]));

var G__57941 = (i__4819__auto___57940 + (1));
i__4819__auto___57940 = G__57941;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56714 = conformed_args__48951__auto__;
var map__56714__$1 = cljs.core.__destructure_map(map__56714);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56714__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56714__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56714__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq56709){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56709));
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
var len__4818__auto___57942 = arguments.length;
var i__4819__auto___57943 = (0);
while(true){
if((i__4819__auto___57943 < len__4818__auto___57942)){
args__4824__auto__.push((arguments[i__4819__auto___57943]));

var G__57944 = (i__4819__auto___57943 + (1));
i__4819__auto___57943 = G__57944;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56721 = conformed_args__48951__auto__;
var map__56721__$1 = cljs.core.__destructure_map(map__56721);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56721__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56721__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56721__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq56719){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56719));
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
var len__4818__auto___57945 = arguments.length;
var i__4819__auto___57946 = (0);
while(true){
if((i__4819__auto___57946 < len__4818__auto___57945)){
args__4824__auto__.push((arguments[i__4819__auto___57946]));

var G__57947 = (i__4819__auto___57946 + (1));
i__4819__auto___57946 = G__57947;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56727 = conformed_args__48951__auto__;
var map__56727__$1 = cljs.core.__destructure_map(map__56727);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq56726){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56726));
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
var len__4818__auto___57948 = arguments.length;
var i__4819__auto___57949 = (0);
while(true){
if((i__4819__auto___57949 < len__4818__auto___57948)){
args__4824__auto__.push((arguments[i__4819__auto___57949]));

var G__57950 = (i__4819__auto___57949 + (1));
i__4819__auto___57949 = G__57950;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56731 = conformed_args__48951__auto__;
var map__56731__$1 = cljs.core.__destructure_map(map__56731);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56731__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56731__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56731__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq56730){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56730));
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
var len__4818__auto___57951 = arguments.length;
var i__4819__auto___57952 = (0);
while(true){
if((i__4819__auto___57952 < len__4818__auto___57951)){
args__4824__auto__.push((arguments[i__4819__auto___57952]));

var G__57953 = (i__4819__auto___57952 + (1));
i__4819__auto___57952 = G__57953;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56738 = conformed_args__48951__auto__;
var map__56738__$1 = cljs.core.__destructure_map(map__56738);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq56734){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56734));
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
var len__4818__auto___57954 = arguments.length;
var i__4819__auto___57955 = (0);
while(true){
if((i__4819__auto___57955 < len__4818__auto___57954)){
args__4824__auto__.push((arguments[i__4819__auto___57955]));

var G__57956 = (i__4819__auto___57955 + (1));
i__4819__auto___57955 = G__57956;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56744 = conformed_args__48951__auto__;
var map__56744__$1 = cljs.core.__destructure_map(map__56744);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq56742){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56742));
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
var len__4818__auto___57957 = arguments.length;
var i__4819__auto___57958 = (0);
while(true){
if((i__4819__auto___57958 < len__4818__auto___57957)){
args__4824__auto__.push((arguments[i__4819__auto___57958]));

var G__57959 = (i__4819__auto___57958 + (1));
i__4819__auto___57958 = G__57959;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56754 = conformed_args__48951__auto__;
var map__56754__$1 = cljs.core.__destructure_map(map__56754);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq56750){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56750));
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
var len__4818__auto___57960 = arguments.length;
var i__4819__auto___57961 = (0);
while(true){
if((i__4819__auto___57961 < len__4818__auto___57960)){
args__4824__auto__.push((arguments[i__4819__auto___57961]));

var G__57962 = (i__4819__auto___57961 + (1));
i__4819__auto___57961 = G__57962;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56760 = conformed_args__48951__auto__;
var map__56760__$1 = cljs.core.__destructure_map(map__56760);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq56755){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56755));
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
var len__4818__auto___57963 = arguments.length;
var i__4819__auto___57964 = (0);
while(true){
if((i__4819__auto___57964 < len__4818__auto___57963)){
args__4824__auto__.push((arguments[i__4819__auto___57964]));

var G__57965 = (i__4819__auto___57964 + (1));
i__4819__auto___57964 = G__57965;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56765 = conformed_args__48951__auto__;
var map__56765__$1 = cljs.core.__destructure_map(map__56765);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq56762){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56762));
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
var len__4818__auto___57966 = arguments.length;
var i__4819__auto___57967 = (0);
while(true){
if((i__4819__auto___57967 < len__4818__auto___57966)){
args__4824__auto__.push((arguments[i__4819__auto___57967]));

var G__57968 = (i__4819__auto___57967 + (1));
i__4819__auto___57967 = G__57968;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56768 = conformed_args__48951__auto__;
var map__56768__$1 = cljs.core.__destructure_map(map__56768);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq56766){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56766));
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
var len__4818__auto___57969 = arguments.length;
var i__4819__auto___57970 = (0);
while(true){
if((i__4819__auto___57970 < len__4818__auto___57969)){
args__4824__auto__.push((arguments[i__4819__auto___57970]));

var G__57971 = (i__4819__auto___57970 + (1));
i__4819__auto___57970 = G__57971;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56772 = conformed_args__48951__auto__;
var map__56772__$1 = cljs.core.__destructure_map(map__56772);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq56770){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56770));
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
var len__4818__auto___57972 = arguments.length;
var i__4819__auto___57973 = (0);
while(true){
if((i__4819__auto___57973 < len__4818__auto___57972)){
args__4824__auto__.push((arguments[i__4819__auto___57973]));

var G__57974 = (i__4819__auto___57973 + (1));
i__4819__auto___57973 = G__57974;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56779 = conformed_args__48951__auto__;
var map__56779__$1 = cljs.core.__destructure_map(map__56779);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56779__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56779__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56779__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq56774){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56774));
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
var len__4818__auto___57975 = arguments.length;
var i__4819__auto___57976 = (0);
while(true){
if((i__4819__auto___57976 < len__4818__auto___57975)){
args__4824__auto__.push((arguments[i__4819__auto___57976]));

var G__57977 = (i__4819__auto___57976 + (1));
i__4819__auto___57976 = G__57977;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56784 = conformed_args__48951__auto__;
var map__56784__$1 = cljs.core.__destructure_map(map__56784);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56784__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56784__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq56782){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56782));
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
var len__4818__auto___57978 = arguments.length;
var i__4819__auto___57979 = (0);
while(true){
if((i__4819__auto___57979 < len__4818__auto___57978)){
args__4824__auto__.push((arguments[i__4819__auto___57979]));

var G__57980 = (i__4819__auto___57979 + (1));
i__4819__auto___57979 = G__57980;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56791 = conformed_args__48951__auto__;
var map__56791__$1 = cljs.core.__destructure_map(map__56791);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56791__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56791__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56791__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq56786){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56786));
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
var len__4818__auto___57981 = arguments.length;
var i__4819__auto___57982 = (0);
while(true){
if((i__4819__auto___57982 < len__4818__auto___57981)){
args__4824__auto__.push((arguments[i__4819__auto___57982]));

var G__57983 = (i__4819__auto___57982 + (1));
i__4819__auto___57982 = G__57983;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56795 = conformed_args__48951__auto__;
var map__56795__$1 = cljs.core.__destructure_map(map__56795);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56795__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56795__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56795__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq56793){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56793));
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
var len__4818__auto___57984 = arguments.length;
var i__4819__auto___57985 = (0);
while(true){
if((i__4819__auto___57985 < len__4818__auto___57984)){
args__4824__auto__.push((arguments[i__4819__auto___57985]));

var G__57986 = (i__4819__auto___57985 + (1));
i__4819__auto___57985 = G__57986;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56801 = conformed_args__48951__auto__;
var map__56801__$1 = cljs.core.__destructure_map(map__56801);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56801__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56801__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56801__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq56800){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56800));
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
var len__4818__auto___57987 = arguments.length;
var i__4819__auto___57988 = (0);
while(true){
if((i__4819__auto___57988 < len__4818__auto___57987)){
args__4824__auto__.push((arguments[i__4819__auto___57988]));

var G__57989 = (i__4819__auto___57988 + (1));
i__4819__auto___57988 = G__57989;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56808 = conformed_args__48951__auto__;
var map__56808__$1 = cljs.core.__destructure_map(map__56808);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq56807){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56807));
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
var len__4818__auto___57990 = arguments.length;
var i__4819__auto___57991 = (0);
while(true){
if((i__4819__auto___57991 < len__4818__auto___57990)){
args__4824__auto__.push((arguments[i__4819__auto___57991]));

var G__57992 = (i__4819__auto___57991 + (1));
i__4819__auto___57991 = G__57992;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56814 = conformed_args__48951__auto__;
var map__56814__$1 = cljs.core.__destructure_map(map__56814);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56814__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56814__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq56811){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56811));
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
var len__4818__auto___57993 = arguments.length;
var i__4819__auto___57994 = (0);
while(true){
if((i__4819__auto___57994 < len__4818__auto___57993)){
args__4824__auto__.push((arguments[i__4819__auto___57994]));

var G__57995 = (i__4819__auto___57994 + (1));
i__4819__auto___57994 = G__57995;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56819 = conformed_args__48951__auto__;
var map__56819__$1 = cljs.core.__destructure_map(map__56819);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq56817){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56817));
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
var len__4818__auto___57996 = arguments.length;
var i__4819__auto___57997 = (0);
while(true){
if((i__4819__auto___57997 < len__4818__auto___57996)){
args__4824__auto__.push((arguments[i__4819__auto___57997]));

var G__57998 = (i__4819__auto___57997 + (1));
i__4819__auto___57997 = G__57998;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56824 = conformed_args__48951__auto__;
var map__56824__$1 = cljs.core.__destructure_map(map__56824);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56824__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56824__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56824__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq56820){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56820));
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
var len__4818__auto___57999 = arguments.length;
var i__4819__auto___58000 = (0);
while(true){
if((i__4819__auto___58000 < len__4818__auto___57999)){
args__4824__auto__.push((arguments[i__4819__auto___58000]));

var G__58001 = (i__4819__auto___58000 + (1));
i__4819__auto___58000 = G__58001;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56828 = conformed_args__48951__auto__;
var map__56828__$1 = cljs.core.__destructure_map(map__56828);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56828__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56828__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56828__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq56827){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56827));
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
var len__4818__auto___58002 = arguments.length;
var i__4819__auto___58003 = (0);
while(true){
if((i__4819__auto___58003 < len__4818__auto___58002)){
args__4824__auto__.push((arguments[i__4819__auto___58003]));

var G__58004 = (i__4819__auto___58003 + (1));
i__4819__auto___58003 = G__58004;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56834 = conformed_args__48951__auto__;
var map__56834__$1 = cljs.core.__destructure_map(map__56834);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56834__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56834__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56834__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq56831){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56831));
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
var len__4818__auto___58005 = arguments.length;
var i__4819__auto___58006 = (0);
while(true){
if((i__4819__auto___58006 < len__4818__auto___58005)){
args__4824__auto__.push((arguments[i__4819__auto___58006]));

var G__58007 = (i__4819__auto___58006 + (1));
i__4819__auto___58006 = G__58007;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56840 = conformed_args__48951__auto__;
var map__56840__$1 = cljs.core.__destructure_map(map__56840);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56840__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56840__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq56837){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56837));
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
var len__4818__auto___58008 = arguments.length;
var i__4819__auto___58009 = (0);
while(true){
if((i__4819__auto___58009 < len__4818__auto___58008)){
args__4824__auto__.push((arguments[i__4819__auto___58009]));

var G__58010 = (i__4819__auto___58009 + (1));
i__4819__auto___58009 = G__58010;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56846 = conformed_args__48951__auto__;
var map__56846__$1 = cljs.core.__destructure_map(map__56846);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56846__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56846__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56846__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq56844){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56844));
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
var len__4818__auto___58011 = arguments.length;
var i__4819__auto___58012 = (0);
while(true){
if((i__4819__auto___58012 < len__4818__auto___58011)){
args__4824__auto__.push((arguments[i__4819__auto___58012]));

var G__58013 = (i__4819__auto___58012 + (1));
i__4819__auto___58012 = G__58013;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56851 = conformed_args__48951__auto__;
var map__56851__$1 = cljs.core.__destructure_map(map__56851);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq56849){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56849));
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
var len__4818__auto___58014 = arguments.length;
var i__4819__auto___58015 = (0);
while(true){
if((i__4819__auto___58015 < len__4818__auto___58014)){
args__4824__auto__.push((arguments[i__4819__auto___58015]));

var G__58016 = (i__4819__auto___58015 + (1));
i__4819__auto___58015 = G__58016;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56857 = conformed_args__48951__auto__;
var map__56857__$1 = cljs.core.__destructure_map(map__56857);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56857__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56857__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56857__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq56854){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56854));
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
var len__4818__auto___58017 = arguments.length;
var i__4819__auto___58018 = (0);
while(true){
if((i__4819__auto___58018 < len__4818__auto___58017)){
args__4824__auto__.push((arguments[i__4819__auto___58018]));

var G__58019 = (i__4819__auto___58018 + (1));
i__4819__auto___58018 = G__58019;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56870 = conformed_args__48951__auto__;
var map__56870__$1 = cljs.core.__destructure_map(map__56870);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56870__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56870__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56870__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq56860){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56860));
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
var len__4818__auto___58020 = arguments.length;
var i__4819__auto___58021 = (0);
while(true){
if((i__4819__auto___58021 < len__4818__auto___58020)){
args__4824__auto__.push((arguments[i__4819__auto___58021]));

var G__58022 = (i__4819__auto___58021 + (1));
i__4819__auto___58021 = G__58022;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56877 = conformed_args__48951__auto__;
var map__56877__$1 = cljs.core.__destructure_map(map__56877);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq56872){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56872));
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
var len__4818__auto___58023 = arguments.length;
var i__4819__auto___58024 = (0);
while(true){
if((i__4819__auto___58024 < len__4818__auto___58023)){
args__4824__auto__.push((arguments[i__4819__auto___58024]));

var G__58025 = (i__4819__auto___58024 + (1));
i__4819__auto___58024 = G__58025;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56887 = conformed_args__48951__auto__;
var map__56887__$1 = cljs.core.__destructure_map(map__56887);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq56882){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56882));
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
var len__4818__auto___58026 = arguments.length;
var i__4819__auto___58027 = (0);
while(true){
if((i__4819__auto___58027 < len__4818__auto___58026)){
args__4824__auto__.push((arguments[i__4819__auto___58027]));

var G__58028 = (i__4819__auto___58027 + (1));
i__4819__auto___58027 = G__58028;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56892 = conformed_args__48951__auto__;
var map__56892__$1 = cljs.core.__destructure_map(map__56892);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56892__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56892__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56892__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq56888){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56888));
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
var len__4818__auto___58029 = arguments.length;
var i__4819__auto___58030 = (0);
while(true){
if((i__4819__auto___58030 < len__4818__auto___58029)){
args__4824__auto__.push((arguments[i__4819__auto___58030]));

var G__58031 = (i__4819__auto___58030 + (1));
i__4819__auto___58030 = G__58031;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56896 = conformed_args__48951__auto__;
var map__56896__$1 = cljs.core.__destructure_map(map__56896);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56896__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56896__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56896__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq56894){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56894));
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
var len__4818__auto___58032 = arguments.length;
var i__4819__auto___58033 = (0);
while(true){
if((i__4819__auto___58033 < len__4818__auto___58032)){
args__4824__auto__.push((arguments[i__4819__auto___58033]));

var G__58034 = (i__4819__auto___58033 + (1));
i__4819__auto___58033 = G__58034;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56902 = conformed_args__48951__auto__;
var map__56902__$1 = cljs.core.__destructure_map(map__56902);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56902__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56902__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56902__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq56901){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56901));
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
var len__4818__auto___58035 = arguments.length;
var i__4819__auto___58036 = (0);
while(true){
if((i__4819__auto___58036 < len__4818__auto___58035)){
args__4824__auto__.push((arguments[i__4819__auto___58036]));

var G__58037 = (i__4819__auto___58036 + (1));
i__4819__auto___58036 = G__58037;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56906 = conformed_args__48951__auto__;
var map__56906__$1 = cljs.core.__destructure_map(map__56906);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56906__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56906__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56906__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq56905){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56905));
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
var len__4818__auto___58038 = arguments.length;
var i__4819__auto___58039 = (0);
while(true){
if((i__4819__auto___58039 < len__4818__auto___58038)){
args__4824__auto__.push((arguments[i__4819__auto___58039]));

var G__58040 = (i__4819__auto___58039 + (1));
i__4819__auto___58039 = G__58040;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56912 = conformed_args__48951__auto__;
var map__56912__$1 = cljs.core.__destructure_map(map__56912);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq56908){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56908));
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
var len__4818__auto___58041 = arguments.length;
var i__4819__auto___58042 = (0);
while(true){
if((i__4819__auto___58042 < len__4818__auto___58041)){
args__4824__auto__.push((arguments[i__4819__auto___58042]));

var G__58043 = (i__4819__auto___58042 + (1));
i__4819__auto___58042 = G__58043;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56914 = conformed_args__48951__auto__;
var map__56914__$1 = cljs.core.__destructure_map(map__56914);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56914__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56914__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56914__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq56913){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56913));
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
var len__4818__auto___58044 = arguments.length;
var i__4819__auto___58045 = (0);
while(true){
if((i__4819__auto___58045 < len__4818__auto___58044)){
args__4824__auto__.push((arguments[i__4819__auto___58045]));

var G__58046 = (i__4819__auto___58045 + (1));
i__4819__auto___58045 = G__58046;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56921 = conformed_args__48951__auto__;
var map__56921__$1 = cljs.core.__destructure_map(map__56921);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56921__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56921__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56921__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq56918){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56918));
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
var len__4818__auto___58047 = arguments.length;
var i__4819__auto___58048 = (0);
while(true){
if((i__4819__auto___58048 < len__4818__auto___58047)){
args__4824__auto__.push((arguments[i__4819__auto___58048]));

var G__58049 = (i__4819__auto___58048 + (1));
i__4819__auto___58048 = G__58049;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56928 = conformed_args__48951__auto__;
var map__56928__$1 = cljs.core.__destructure_map(map__56928);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56928__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56928__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56928__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq56925){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56925));
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
var len__4818__auto___58050 = arguments.length;
var i__4819__auto___58051 = (0);
while(true){
if((i__4819__auto___58051 < len__4818__auto___58050)){
args__4824__auto__.push((arguments[i__4819__auto___58051]));

var G__58052 = (i__4819__auto___58051 + (1));
i__4819__auto___58051 = G__58052;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56934 = conformed_args__48951__auto__;
var map__56934__$1 = cljs.core.__destructure_map(map__56934);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56934__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56934__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56934__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq56929){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56929));
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
var len__4818__auto___58053 = arguments.length;
var i__4819__auto___58054 = (0);
while(true){
if((i__4819__auto___58054 < len__4818__auto___58053)){
args__4824__auto__.push((arguments[i__4819__auto___58054]));

var G__58055 = (i__4819__auto___58054 + (1));
i__4819__auto___58054 = G__58055;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56939 = conformed_args__48951__auto__;
var map__56939__$1 = cljs.core.__destructure_map(map__56939);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq56936){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56936));
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
var len__4818__auto___58056 = arguments.length;
var i__4819__auto___58057 = (0);
while(true){
if((i__4819__auto___58057 < len__4818__auto___58056)){
args__4824__auto__.push((arguments[i__4819__auto___58057]));

var G__58058 = (i__4819__auto___58057 + (1));
i__4819__auto___58057 = G__58058;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56956 = conformed_args__48951__auto__;
var map__56956__$1 = cljs.core.__destructure_map(map__56956);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq56942){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56942));
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
var len__4818__auto___58059 = arguments.length;
var i__4819__auto___58060 = (0);
while(true){
if((i__4819__auto___58060 < len__4818__auto___58059)){
args__4824__auto__.push((arguments[i__4819__auto___58060]));

var G__58061 = (i__4819__auto___58060 + (1));
i__4819__auto___58060 = G__58061;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56961 = conformed_args__48951__auto__;
var map__56961__$1 = cljs.core.__destructure_map(map__56961);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq56959){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56959));
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
var len__4818__auto___58062 = arguments.length;
var i__4819__auto___58063 = (0);
while(true){
if((i__4819__auto___58063 < len__4818__auto___58062)){
args__4824__auto__.push((arguments[i__4819__auto___58063]));

var G__58064 = (i__4819__auto___58063 + (1));
i__4819__auto___58063 = G__58064;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56966 = conformed_args__48951__auto__;
var map__56966__$1 = cljs.core.__destructure_map(map__56966);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq56964){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56964));
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
var len__4818__auto___58065 = arguments.length;
var i__4819__auto___58066 = (0);
while(true){
if((i__4819__auto___58066 < len__4818__auto___58065)){
args__4824__auto__.push((arguments[i__4819__auto___58066]));

var G__58067 = (i__4819__auto___58066 + (1));
i__4819__auto___58066 = G__58067;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56972 = conformed_args__48951__auto__;
var map__56972__$1 = cljs.core.__destructure_map(map__56972);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56972__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56972__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56972__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq56969){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56969));
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
var len__4818__auto___58068 = arguments.length;
var i__4819__auto___58069 = (0);
while(true){
if((i__4819__auto___58069 < len__4818__auto___58068)){
args__4824__auto__.push((arguments[i__4819__auto___58069]));

var G__58070 = (i__4819__auto___58069 + (1));
i__4819__auto___58069 = G__58070;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56977 = conformed_args__48951__auto__;
var map__56977__$1 = cljs.core.__destructure_map(map__56977);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq56974){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56974));
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
var len__4818__auto___58071 = arguments.length;
var i__4819__auto___58072 = (0);
while(true){
if((i__4819__auto___58072 < len__4818__auto___58071)){
args__4824__auto__.push((arguments[i__4819__auto___58072]));

var G__58073 = (i__4819__auto___58072 + (1));
i__4819__auto___58072 = G__58073;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56982 = conformed_args__48951__auto__;
var map__56982__$1 = cljs.core.__destructure_map(map__56982);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56982__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56982__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56982__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq56979){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56979));
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
var len__4818__auto___58074 = arguments.length;
var i__4819__auto___58075 = (0);
while(true){
if((i__4819__auto___58075 < len__4818__auto___58074)){
args__4824__auto__.push((arguments[i__4819__auto___58075]));

var G__58076 = (i__4819__auto___58075 + (1));
i__4819__auto___58075 = G__58076;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56987 = conformed_args__48951__auto__;
var map__56987__$1 = cljs.core.__destructure_map(map__56987);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq56985){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56985));
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
var len__4818__auto___58077 = arguments.length;
var i__4819__auto___58078 = (0);
while(true){
if((i__4819__auto___58078 < len__4818__auto___58077)){
args__4824__auto__.push((arguments[i__4819__auto___58078]));

var G__58079 = (i__4819__auto___58078 + (1));
i__4819__auto___58078 = G__58079;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56992 = conformed_args__48951__auto__;
var map__56992__$1 = cljs.core.__destructure_map(map__56992);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56992__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56992__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq56990){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56990));
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
var len__4818__auto___58080 = arguments.length;
var i__4819__auto___58081 = (0);
while(true){
if((i__4819__auto___58081 < len__4818__auto___58080)){
args__4824__auto__.push((arguments[i__4819__auto___58081]));

var G__58082 = (i__4819__auto___58081 + (1));
i__4819__auto___58081 = G__58082;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56997 = conformed_args__48951__auto__;
var map__56997__$1 = cljs.core.__destructure_map(map__56997);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56997__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56997__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56997__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq56995){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56995));
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
var len__4818__auto___58083 = arguments.length;
var i__4819__auto___58084 = (0);
while(true){
if((i__4819__auto___58084 < len__4818__auto___58083)){
args__4824__auto__.push((arguments[i__4819__auto___58084]));

var G__58085 = (i__4819__auto___58084 + (1));
i__4819__auto___58084 = G__58085;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57002 = conformed_args__48951__auto__;
var map__57002__$1 = cljs.core.__destructure_map(map__57002);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57002__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57002__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57002__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq57000){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57000));
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
var len__4818__auto___58086 = arguments.length;
var i__4819__auto___58087 = (0);
while(true){
if((i__4819__auto___58087 < len__4818__auto___58086)){
args__4824__auto__.push((arguments[i__4819__auto___58087]));

var G__58088 = (i__4819__auto___58087 + (1));
i__4819__auto___58087 = G__58088;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57007 = conformed_args__48951__auto__;
var map__57007__$1 = cljs.core.__destructure_map(map__57007);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq57005){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57005));
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
var len__4818__auto___58089 = arguments.length;
var i__4819__auto___58090 = (0);
while(true){
if((i__4819__auto___58090 < len__4818__auto___58089)){
args__4824__auto__.push((arguments[i__4819__auto___58090]));

var G__58091 = (i__4819__auto___58090 + (1));
i__4819__auto___58090 = G__58091;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57012 = conformed_args__48951__auto__;
var map__57012__$1 = cljs.core.__destructure_map(map__57012);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57012__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57012__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57012__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq57010){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57010));
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
var len__4818__auto___58092 = arguments.length;
var i__4819__auto___58093 = (0);
while(true){
if((i__4819__auto___58093 < len__4818__auto___58092)){
args__4824__auto__.push((arguments[i__4819__auto___58093]));

var G__58094 = (i__4819__auto___58093 + (1));
i__4819__auto___58093 = G__58094;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57015 = conformed_args__48951__auto__;
var map__57015__$1 = cljs.core.__destructure_map(map__57015);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq57014){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57014));
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
var len__4818__auto___58095 = arguments.length;
var i__4819__auto___58096 = (0);
while(true){
if((i__4819__auto___58096 < len__4818__auto___58095)){
args__4824__auto__.push((arguments[i__4819__auto___58096]));

var G__58097 = (i__4819__auto___58096 + (1));
i__4819__auto___58096 = G__58097;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57020 = conformed_args__48951__auto__;
var map__57020__$1 = cljs.core.__destructure_map(map__57020);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57020__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57020__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57020__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq57016){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57016));
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
var len__4818__auto___58098 = arguments.length;
var i__4819__auto___58099 = (0);
while(true){
if((i__4819__auto___58099 < len__4818__auto___58098)){
args__4824__auto__.push((arguments[i__4819__auto___58099]));

var G__58100 = (i__4819__auto___58099 + (1));
i__4819__auto___58099 = G__58100;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57025 = conformed_args__48951__auto__;
var map__57025__$1 = cljs.core.__destructure_map(map__57025);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57025__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57025__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57025__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq57023){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57023));
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
var len__4818__auto___58101 = arguments.length;
var i__4819__auto___58102 = (0);
while(true){
if((i__4819__auto___58102 < len__4818__auto___58101)){
args__4824__auto__.push((arguments[i__4819__auto___58102]));

var G__58103 = (i__4819__auto___58102 + (1));
i__4819__auto___58102 = G__58103;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57031 = conformed_args__48951__auto__;
var map__57031__$1 = cljs.core.__destructure_map(map__57031);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57031__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57031__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57031__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq57028){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57028));
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
var len__4818__auto___58104 = arguments.length;
var i__4819__auto___58105 = (0);
while(true){
if((i__4819__auto___58105 < len__4818__auto___58104)){
args__4824__auto__.push((arguments[i__4819__auto___58105]));

var G__58106 = (i__4819__auto___58105 + (1));
i__4819__auto___58105 = G__58106;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57059 = conformed_args__48951__auto__;
var map__57059__$1 = cljs.core.__destructure_map(map__57059);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq57036){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57036));
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
var len__4818__auto___58107 = arguments.length;
var i__4819__auto___58108 = (0);
while(true){
if((i__4819__auto___58108 < len__4818__auto___58107)){
args__4824__auto__.push((arguments[i__4819__auto___58108]));

var G__58109 = (i__4819__auto___58108 + (1));
i__4819__auto___58108 = G__58109;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57093 = conformed_args__48951__auto__;
var map__57093__$1 = cljs.core.__destructure_map(map__57093);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57093__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57093__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq57082){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57082));
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
var len__4818__auto___58110 = arguments.length;
var i__4819__auto___58111 = (0);
while(true){
if((i__4819__auto___58111 < len__4818__auto___58110)){
args__4824__auto__.push((arguments[i__4819__auto___58111]));

var G__58112 = (i__4819__auto___58111 + (1));
i__4819__auto___58111 = G__58112;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57101 = conformed_args__48951__auto__;
var map__57101__$1 = cljs.core.__destructure_map(map__57101);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57101__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57101__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57101__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq57097){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57097));
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
var len__4818__auto___58113 = arguments.length;
var i__4819__auto___58114 = (0);
while(true){
if((i__4819__auto___58114 < len__4818__auto___58113)){
args__4824__auto__.push((arguments[i__4819__auto___58114]));

var G__58115 = (i__4819__auto___58114 + (1));
i__4819__auto___58114 = G__58115;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57112 = conformed_args__48951__auto__;
var map__57112__$1 = cljs.core.__destructure_map(map__57112);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57112__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57112__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57112__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq57106){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57106));
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
var len__4818__auto___58116 = arguments.length;
var i__4819__auto___58117 = (0);
while(true){
if((i__4819__auto___58117 < len__4818__auto___58116)){
args__4824__auto__.push((arguments[i__4819__auto___58117]));

var G__58118 = (i__4819__auto___58117 + (1));
i__4819__auto___58117 = G__58118;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57165 = conformed_args__48951__auto__;
var map__57165__$1 = cljs.core.__destructure_map(map__57165);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq57139){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57139));
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
var len__4818__auto___58119 = arguments.length;
var i__4819__auto___58120 = (0);
while(true){
if((i__4819__auto___58120 < len__4818__auto___58119)){
args__4824__auto__.push((arguments[i__4819__auto___58120]));

var G__58121 = (i__4819__auto___58120 + (1));
i__4819__auto___58120 = G__58121;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57176 = conformed_args__48951__auto__;
var map__57176__$1 = cljs.core.__destructure_map(map__57176);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq57168){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57168));
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
var len__4818__auto___58122 = arguments.length;
var i__4819__auto___58123 = (0);
while(true){
if((i__4819__auto___58123 < len__4818__auto___58122)){
args__4824__auto__.push((arguments[i__4819__auto___58123]));

var G__58124 = (i__4819__auto___58123 + (1));
i__4819__auto___58123 = G__58124;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57180 = conformed_args__48951__auto__;
var map__57180__$1 = cljs.core.__destructure_map(map__57180);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57180__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57180__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq57177){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57177));
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
var len__4818__auto___58125 = arguments.length;
var i__4819__auto___58126 = (0);
while(true){
if((i__4819__auto___58126 < len__4818__auto___58125)){
args__4824__auto__.push((arguments[i__4819__auto___58126]));

var G__58127 = (i__4819__auto___58126 + (1));
i__4819__auto___58126 = G__58127;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57195 = conformed_args__48951__auto__;
var map__57195__$1 = cljs.core.__destructure_map(map__57195);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq57187){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57187));
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
var len__4818__auto___58128 = arguments.length;
var i__4819__auto___58129 = (0);
while(true){
if((i__4819__auto___58129 < len__4818__auto___58128)){
args__4824__auto__.push((arguments[i__4819__auto___58129]));

var G__58130 = (i__4819__auto___58129 + (1));
i__4819__auto___58129 = G__58130;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57205 = conformed_args__48951__auto__;
var map__57205__$1 = cljs.core.__destructure_map(map__57205);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq57200){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57200));
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
var len__4818__auto___58131 = arguments.length;
var i__4819__auto___58132 = (0);
while(true){
if((i__4819__auto___58132 < len__4818__auto___58131)){
args__4824__auto__.push((arguments[i__4819__auto___58132]));

var G__58133 = (i__4819__auto___58132 + (1));
i__4819__auto___58132 = G__58133;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57215 = conformed_args__48951__auto__;
var map__57215__$1 = cljs.core.__destructure_map(map__57215);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq57209){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57209));
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
var len__4818__auto___58134 = arguments.length;
var i__4819__auto___58135 = (0);
while(true){
if((i__4819__auto___58135 < len__4818__auto___58134)){
args__4824__auto__.push((arguments[i__4819__auto___58135]));

var G__58136 = (i__4819__auto___58135 + (1));
i__4819__auto___58135 = G__58136;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57225 = conformed_args__48951__auto__;
var map__57225__$1 = cljs.core.__destructure_map(map__57225);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57225__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57225__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57225__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq57219){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57219));
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
var len__4818__auto___58137 = arguments.length;
var i__4819__auto___58138 = (0);
while(true){
if((i__4819__auto___58138 < len__4818__auto___58137)){
args__4824__auto__.push((arguments[i__4819__auto___58138]));

var G__58139 = (i__4819__auto___58138 + (1));
i__4819__auto___58138 = G__58139;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57235 = conformed_args__48951__auto__;
var map__57235__$1 = cljs.core.__destructure_map(map__57235);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq57232){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57232));
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
var len__4818__auto___58140 = arguments.length;
var i__4819__auto___58141 = (0);
while(true){
if((i__4819__auto___58141 < len__4818__auto___58140)){
args__4824__auto__.push((arguments[i__4819__auto___58141]));

var G__58142 = (i__4819__auto___58141 + (1));
i__4819__auto___58141 = G__58142;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57240 = conformed_args__48951__auto__;
var map__57240__$1 = cljs.core.__destructure_map(map__57240);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq57239){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57239));
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
var len__4818__auto___58143 = arguments.length;
var i__4819__auto___58144 = (0);
while(true){
if((i__4819__auto___58144 < len__4818__auto___58143)){
args__4824__auto__.push((arguments[i__4819__auto___58144]));

var G__58145 = (i__4819__auto___58144 + (1));
i__4819__auto___58144 = G__58145;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57246 = conformed_args__48951__auto__;
var map__57246__$1 = cljs.core.__destructure_map(map__57246);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq57245){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57245));
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
var len__4818__auto___58146 = arguments.length;
var i__4819__auto___58147 = (0);
while(true){
if((i__4819__auto___58147 < len__4818__auto___58146)){
args__4824__auto__.push((arguments[i__4819__auto___58147]));

var G__58148 = (i__4819__auto___58147 + (1));
i__4819__auto___58147 = G__58148;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57259 = conformed_args__48951__auto__;
var map__57259__$1 = cljs.core.__destructure_map(map__57259);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq57258){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57258));
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
var len__4818__auto___58149 = arguments.length;
var i__4819__auto___58150 = (0);
while(true){
if((i__4819__auto___58150 < len__4818__auto___58149)){
args__4824__auto__.push((arguments[i__4819__auto___58150]));

var G__58151 = (i__4819__auto___58150 + (1));
i__4819__auto___58150 = G__58151;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57262 = conformed_args__48951__auto__;
var map__57262__$1 = cljs.core.__destructure_map(map__57262);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57262__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq57261){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57261));
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
var len__4818__auto___58152 = arguments.length;
var i__4819__auto___58153 = (0);
while(true){
if((i__4819__auto___58153 < len__4818__auto___58152)){
args__4824__auto__.push((arguments[i__4819__auto___58153]));

var G__58154 = (i__4819__auto___58153 + (1));
i__4819__auto___58153 = G__58154;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57277 = conformed_args__48951__auto__;
var map__57277__$1 = cljs.core.__destructure_map(map__57277);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57277__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57277__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57277__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq57275){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57275));
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
var len__4818__auto___58155 = arguments.length;
var i__4819__auto___58156 = (0);
while(true){
if((i__4819__auto___58156 < len__4818__auto___58155)){
args__4824__auto__.push((arguments[i__4819__auto___58156]));

var G__58157 = (i__4819__auto___58156 + (1));
i__4819__auto___58156 = G__58157;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57298 = conformed_args__48951__auto__;
var map__57298__$1 = cljs.core.__destructure_map(map__57298);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq57280){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57280));
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
var len__4818__auto___58158 = arguments.length;
var i__4819__auto___58159 = (0);
while(true){
if((i__4819__auto___58159 < len__4818__auto___58158)){
args__4824__auto__.push((arguments[i__4819__auto___58159]));

var G__58160 = (i__4819__auto___58159 + (1));
i__4819__auto___58159 = G__58160;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57322 = conformed_args__48951__auto__;
var map__57322__$1 = cljs.core.__destructure_map(map__57322);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq57320){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57320));
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
var len__4818__auto___58161 = arguments.length;
var i__4819__auto___58162 = (0);
while(true){
if((i__4819__auto___58162 < len__4818__auto___58161)){
args__4824__auto__.push((arguments[i__4819__auto___58162]));

var G__58163 = (i__4819__auto___58162 + (1));
i__4819__auto___58162 = G__58163;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57328 = conformed_args__48951__auto__;
var map__57328__$1 = cljs.core.__destructure_map(map__57328);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq57324){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57324));
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
var len__4818__auto___58164 = arguments.length;
var i__4819__auto___58165 = (0);
while(true){
if((i__4819__auto___58165 < len__4818__auto___58164)){
args__4824__auto__.push((arguments[i__4819__auto___58165]));

var G__58166 = (i__4819__auto___58165 + (1));
i__4819__auto___58165 = G__58166;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57336 = conformed_args__48951__auto__;
var map__57336__$1 = cljs.core.__destructure_map(map__57336);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57336__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57336__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57336__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq57333){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57333));
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
var len__4818__auto___58167 = arguments.length;
var i__4819__auto___58168 = (0);
while(true){
if((i__4819__auto___58168 < len__4818__auto___58167)){
args__4824__auto__.push((arguments[i__4819__auto___58168]));

var G__58169 = (i__4819__auto___58168 + (1));
i__4819__auto___58168 = G__58169;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57344 = conformed_args__48951__auto__;
var map__57344__$1 = cljs.core.__destructure_map(map__57344);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57344__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57344__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57344__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq57339){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57339));
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
var len__4818__auto___58170 = arguments.length;
var i__4819__auto___58171 = (0);
while(true){
if((i__4819__auto___58171 < len__4818__auto___58170)){
args__4824__auto__.push((arguments[i__4819__auto___58171]));

var G__58172 = (i__4819__auto___58171 + (1));
i__4819__auto___58171 = G__58172;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57349 = conformed_args__48951__auto__;
var map__57349__$1 = cljs.core.__destructure_map(map__57349);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq57346){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57346));
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
var len__4818__auto___58173 = arguments.length;
var i__4819__auto___58174 = (0);
while(true){
if((i__4819__auto___58174 < len__4818__auto___58173)){
args__4824__auto__.push((arguments[i__4819__auto___58174]));

var G__58175 = (i__4819__auto___58174 + (1));
i__4819__auto___58174 = G__58175;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57359 = conformed_args__48951__auto__;
var map__57359__$1 = cljs.core.__destructure_map(map__57359);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq57350){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57350));
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
var len__4818__auto___58176 = arguments.length;
var i__4819__auto___58177 = (0);
while(true){
if((i__4819__auto___58177 < len__4818__auto___58176)){
args__4824__auto__.push((arguments[i__4819__auto___58177]));

var G__58178 = (i__4819__auto___58177 + (1));
i__4819__auto___58177 = G__58178;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57390 = conformed_args__48951__auto__;
var map__57390__$1 = cljs.core.__destructure_map(map__57390);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57390__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57390__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57390__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq57375){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57375));
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
var len__4818__auto___58179 = arguments.length;
var i__4819__auto___58180 = (0);
while(true){
if((i__4819__auto___58180 < len__4818__auto___58179)){
args__4824__auto__.push((arguments[i__4819__auto___58180]));

var G__58181 = (i__4819__auto___58180 + (1));
i__4819__auto___58180 = G__58181;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57414 = conformed_args__48951__auto__;
var map__57414__$1 = cljs.core.__destructure_map(map__57414);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57414__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57414__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57414__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq57400){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57400));
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
var len__4818__auto___58182 = arguments.length;
var i__4819__auto___58183 = (0);
while(true){
if((i__4819__auto___58183 < len__4818__auto___58182)){
args__4824__auto__.push((arguments[i__4819__auto___58183]));

var G__58184 = (i__4819__auto___58183 + (1));
i__4819__auto___58183 = G__58184;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57431 = conformed_args__48951__auto__;
var map__57431__$1 = cljs.core.__destructure_map(map__57431);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57431__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57431__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57431__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq57425){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57425));
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
var len__4818__auto___58185 = arguments.length;
var i__4819__auto___58186 = (0);
while(true){
if((i__4819__auto___58186 < len__4818__auto___58185)){
args__4824__auto__.push((arguments[i__4819__auto___58186]));

var G__58187 = (i__4819__auto___58186 + (1));
i__4819__auto___58186 = G__58187;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57437 = conformed_args__48951__auto__;
var map__57437__$1 = cljs.core.__destructure_map(map__57437);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq57436){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57436));
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
var len__4818__auto___58188 = arguments.length;
var i__4819__auto___58189 = (0);
while(true){
if((i__4819__auto___58189 < len__4818__auto___58188)){
args__4824__auto__.push((arguments[i__4819__auto___58189]));

var G__58190 = (i__4819__auto___58189 + (1));
i__4819__auto___58189 = G__58190;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57441 = conformed_args__48951__auto__;
var map__57441__$1 = cljs.core.__destructure_map(map__57441);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57441__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57441__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57441__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq57440){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57440));
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
var len__4818__auto___58191 = arguments.length;
var i__4819__auto___58192 = (0);
while(true){
if((i__4819__auto___58192 < len__4818__auto___58191)){
args__4824__auto__.push((arguments[i__4819__auto___58192]));

var G__58193 = (i__4819__auto___58192 + (1));
i__4819__auto___58192 = G__58193;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57443 = conformed_args__48951__auto__;
var map__57443__$1 = cljs.core.__destructure_map(map__57443);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq57442){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57442));
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
var len__4818__auto___58194 = arguments.length;
var i__4819__auto___58195 = (0);
while(true){
if((i__4819__auto___58195 < len__4818__auto___58194)){
args__4824__auto__.push((arguments[i__4819__auto___58195]));

var G__58196 = (i__4819__auto___58195 + (1));
i__4819__auto___58195 = G__58196;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57448 = conformed_args__48951__auto__;
var map__57448__$1 = cljs.core.__destructure_map(map__57448);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq57444){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57444));
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
var len__4818__auto___58197 = arguments.length;
var i__4819__auto___58198 = (0);
while(true){
if((i__4819__auto___58198 < len__4818__auto___58197)){
args__4824__auto__.push((arguments[i__4819__auto___58198]));

var G__58199 = (i__4819__auto___58198 + (1));
i__4819__auto___58198 = G__58199;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57456 = conformed_args__48951__auto__;
var map__57456__$1 = cljs.core.__destructure_map(map__57456);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57456__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57456__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq57452){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57452));
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
var len__4818__auto___58200 = arguments.length;
var i__4819__auto___58201 = (0);
while(true){
if((i__4819__auto___58201 < len__4818__auto___58200)){
args__4824__auto__.push((arguments[i__4819__auto___58201]));

var G__58202 = (i__4819__auto___58201 + (1));
i__4819__auto___58201 = G__58202;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57474 = conformed_args__48951__auto__;
var map__57474__$1 = cljs.core.__destructure_map(map__57474);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57474__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57474__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57474__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq57460){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57460));
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
var len__4818__auto___58203 = arguments.length;
var i__4819__auto___58204 = (0);
while(true){
if((i__4819__auto___58204 < len__4818__auto___58203)){
args__4824__auto__.push((arguments[i__4819__auto___58204]));

var G__58205 = (i__4819__auto___58204 + (1));
i__4819__auto___58204 = G__58205;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57494 = conformed_args__48951__auto__;
var map__57494__$1 = cljs.core.__destructure_map(map__57494);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57494__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57494__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57494__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq57489){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57489));
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
var len__4818__auto___58206 = arguments.length;
var i__4819__auto___58207 = (0);
while(true){
if((i__4819__auto___58207 < len__4818__auto___58206)){
args__4824__auto__.push((arguments[i__4819__auto___58207]));

var G__58208 = (i__4819__auto___58207 + (1));
i__4819__auto___58207 = G__58208;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57500 = conformed_args__48951__auto__;
var map__57500__$1 = cljs.core.__destructure_map(map__57500);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57500__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57500__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq57497){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57497));
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
var len__4818__auto___58209 = arguments.length;
var i__4819__auto___58210 = (0);
while(true){
if((i__4819__auto___58210 < len__4818__auto___58209)){
args__4824__auto__.push((arguments[i__4819__auto___58210]));

var G__58211 = (i__4819__auto___58210 + (1));
i__4819__auto___58210 = G__58211;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57504 = conformed_args__48951__auto__;
var map__57504__$1 = cljs.core.__destructure_map(map__57504);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57504__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57504__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq57501){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57501));
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
var len__4818__auto___58212 = arguments.length;
var i__4819__auto___58213 = (0);
while(true){
if((i__4819__auto___58213 < len__4818__auto___58212)){
args__4824__auto__.push((arguments[i__4819__auto___58213]));

var G__58214 = (i__4819__auto___58213 + (1));
i__4819__auto___58213 = G__58214;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57506 = conformed_args__48951__auto__;
var map__57506__$1 = cljs.core.__destructure_map(map__57506);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq57505){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57505));
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
var len__4818__auto___58215 = arguments.length;
var i__4819__auto___58216 = (0);
while(true){
if((i__4819__auto___58216 < len__4818__auto___58215)){
args__4824__auto__.push((arguments[i__4819__auto___58216]));

var G__58217 = (i__4819__auto___58216 + (1));
i__4819__auto___58216 = G__58217;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57564 = conformed_args__48951__auto__;
var map__57564__$1 = cljs.core.__destructure_map(map__57564);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq57538){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57538));
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
var len__4818__auto___58218 = arguments.length;
var i__4819__auto___58219 = (0);
while(true){
if((i__4819__auto___58219 < len__4818__auto___58218)){
args__4824__auto__.push((arguments[i__4819__auto___58219]));

var G__58220 = (i__4819__auto___58219 + (1));
i__4819__auto___58219 = G__58220;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57613 = conformed_args__48951__auto__;
var map__57613__$1 = cljs.core.__destructure_map(map__57613);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57613__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57613__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57613__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq57595){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57595));
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
var len__4818__auto___58221 = arguments.length;
var i__4819__auto___58222 = (0);
while(true){
if((i__4819__auto___58222 < len__4818__auto___58221)){
args__4824__auto__.push((arguments[i__4819__auto___58222]));

var G__58223 = (i__4819__auto___58222 + (1));
i__4819__auto___58222 = G__58223;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57630 = conformed_args__48951__auto__;
var map__57630__$1 = cljs.core.__destructure_map(map__57630);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq57628){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57628));
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
var len__4818__auto___58224 = arguments.length;
var i__4819__auto___58225 = (0);
while(true){
if((i__4819__auto___58225 < len__4818__auto___58224)){
args__4824__auto__.push((arguments[i__4819__auto___58225]));

var G__58226 = (i__4819__auto___58225 + (1));
i__4819__auto___58225 = G__58226;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57641 = conformed_args__48951__auto__;
var map__57641__$1 = cljs.core.__destructure_map(map__57641);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57641__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57641__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57641__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq57632){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57632));
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
var len__4818__auto___58227 = arguments.length;
var i__4819__auto___58228 = (0);
while(true){
if((i__4819__auto___58228 < len__4818__auto___58227)){
args__4824__auto__.push((arguments[i__4819__auto___58228]));

var G__58229 = (i__4819__auto___58228 + (1));
i__4819__auto___58228 = G__58229;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57648 = conformed_args__48951__auto__;
var map__57648__$1 = cljs.core.__destructure_map(map__57648);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq57645){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57645));
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
var len__4818__auto___58230 = arguments.length;
var i__4819__auto___58231 = (0);
while(true){
if((i__4819__auto___58231 < len__4818__auto___58230)){
args__4824__auto__.push((arguments[i__4819__auto___58231]));

var G__58232 = (i__4819__auto___58231 + (1));
i__4819__auto___58231 = G__58232;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57653 = conformed_args__48951__auto__;
var map__57653__$1 = cljs.core.__destructure_map(map__57653);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57653__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57653__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57653__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq57650){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57650));
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
var len__4818__auto___58233 = arguments.length;
var i__4819__auto___58234 = (0);
while(true){
if((i__4819__auto___58234 < len__4818__auto___58233)){
args__4824__auto__.push((arguments[i__4819__auto___58234]));

var G__58235 = (i__4819__auto___58234 + (1));
i__4819__auto___58234 = G__58235;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57657 = conformed_args__48951__auto__;
var map__57657__$1 = cljs.core.__destructure_map(map__57657);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57657__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57657__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq57656){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57656));
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
var len__4818__auto___58236 = arguments.length;
var i__4819__auto___58237 = (0);
while(true){
if((i__4819__auto___58237 < len__4818__auto___58236)){
args__4824__auto__.push((arguments[i__4819__auto___58237]));

var G__58238 = (i__4819__auto___58237 + (1));
i__4819__auto___58237 = G__58238;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57662 = conformed_args__48951__auto__;
var map__57662__$1 = cljs.core.__destructure_map(map__57662);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57662__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57662__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57662__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq57658){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57658));
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
var len__4818__auto___58239 = arguments.length;
var i__4819__auto___58240 = (0);
while(true){
if((i__4819__auto___58240 < len__4818__auto___58239)){
args__4824__auto__.push((arguments[i__4819__auto___58240]));

var G__58241 = (i__4819__auto___58240 + (1));
i__4819__auto___58240 = G__58241;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57667 = conformed_args__48951__auto__;
var map__57667__$1 = cljs.core.__destructure_map(map__57667);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57667__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57667__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57667__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq57664){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57664));
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
var len__4818__auto___58242 = arguments.length;
var i__4819__auto___58243 = (0);
while(true){
if((i__4819__auto___58243 < len__4818__auto___58242)){
args__4824__auto__.push((arguments[i__4819__auto___58243]));

var G__58244 = (i__4819__auto___58243 + (1));
i__4819__auto___58243 = G__58244;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57674 = conformed_args__48951__auto__;
var map__57674__$1 = cljs.core.__destructure_map(map__57674);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq57671){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57671));
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
var len__4818__auto___58245 = arguments.length;
var i__4819__auto___58246 = (0);
while(true){
if((i__4819__auto___58246 < len__4818__auto___58245)){
args__4824__auto__.push((arguments[i__4819__auto___58246]));

var G__58247 = (i__4819__auto___58246 + (1));
i__4819__auto___58246 = G__58247;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57679 = conformed_args__48951__auto__;
var map__57679__$1 = cljs.core.__destructure_map(map__57679);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57679__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57679__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57679__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq57677){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57677));
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
var len__4818__auto___58248 = arguments.length;
var i__4819__auto___58249 = (0);
while(true){
if((i__4819__auto___58249 < len__4818__auto___58248)){
args__4824__auto__.push((arguments[i__4819__auto___58249]));

var G__58250 = (i__4819__auto___58249 + (1));
i__4819__auto___58249 = G__58250;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57681 = conformed_args__48951__auto__;
var map__57681__$1 = cljs.core.__destructure_map(map__57681);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57681__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57681__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq57680){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57680));
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
var len__4818__auto___58251 = arguments.length;
var i__4819__auto___58252 = (0);
while(true){
if((i__4819__auto___58252 < len__4818__auto___58251)){
args__4824__auto__.push((arguments[i__4819__auto___58252]));

var G__58253 = (i__4819__auto___58252 + (1));
i__4819__auto___58252 = G__58253;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57685 = conformed_args__48951__auto__;
var map__57685__$1 = cljs.core.__destructure_map(map__57685);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq57684){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57684));
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
var len__4818__auto___58254 = arguments.length;
var i__4819__auto___58255 = (0);
while(true){
if((i__4819__auto___58255 < len__4818__auto___58254)){
args__4824__auto__.push((arguments[i__4819__auto___58255]));

var G__58256 = (i__4819__auto___58255 + (1));
i__4819__auto___58255 = G__58256;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57691 = conformed_args__48951__auto__;
var map__57691__$1 = cljs.core.__destructure_map(map__57691);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq57688){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57688));
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
var len__4818__auto___58257 = arguments.length;
var i__4819__auto___58258 = (0);
while(true){
if((i__4819__auto___58258 < len__4818__auto___58257)){
args__4824__auto__.push((arguments[i__4819__auto___58258]));

var G__58259 = (i__4819__auto___58258 + (1));
i__4819__auto___58258 = G__58259;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57695 = conformed_args__48951__auto__;
var map__57695__$1 = cljs.core.__destructure_map(map__57695);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57695__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57695__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57695__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq57694){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57694));
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
var len__4818__auto___58260 = arguments.length;
var i__4819__auto___58261 = (0);
while(true){
if((i__4819__auto___58261 < len__4818__auto___58260)){
args__4824__auto__.push((arguments[i__4819__auto___58261]));

var G__58262 = (i__4819__auto___58261 + (1));
i__4819__auto___58261 = G__58262;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57699 = conformed_args__48951__auto__;
var map__57699__$1 = cljs.core.__destructure_map(map__57699);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57699__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57699__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57699__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq57698){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57698));
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
var len__4818__auto___58263 = arguments.length;
var i__4819__auto___58264 = (0);
while(true){
if((i__4819__auto___58264 < len__4818__auto___58263)){
args__4824__auto__.push((arguments[i__4819__auto___58264]));

var G__58265 = (i__4819__auto___58264 + (1));
i__4819__auto___58264 = G__58265;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57702 = conformed_args__48951__auto__;
var map__57702__$1 = cljs.core.__destructure_map(map__57702);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq57700){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57700));
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
var len__4818__auto___58266 = arguments.length;
var i__4819__auto___58267 = (0);
while(true){
if((i__4819__auto___58267 < len__4818__auto___58266)){
args__4824__auto__.push((arguments[i__4819__auto___58267]));

var G__58268 = (i__4819__auto___58267 + (1));
i__4819__auto___58267 = G__58268;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57704 = conformed_args__48951__auto__;
var map__57704__$1 = cljs.core.__destructure_map(map__57704);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57704__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57704__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57704__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq57703){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57703));
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
var len__4818__auto___58269 = arguments.length;
var i__4819__auto___58270 = (0);
while(true){
if((i__4819__auto___58270 < len__4818__auto___58269)){
args__4824__auto__.push((arguments[i__4819__auto___58270]));

var G__58271 = (i__4819__auto___58270 + (1));
i__4819__auto___58270 = G__58271;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57721 = conformed_args__48951__auto__;
var map__57721__$1 = cljs.core.__destructure_map(map__57721);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57721__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57721__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57721__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq57717){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57717));
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
var len__4818__auto___58272 = arguments.length;
var i__4819__auto___58273 = (0);
while(true){
if((i__4819__auto___58273 < len__4818__auto___58272)){
args__4824__auto__.push((arguments[i__4819__auto___58273]));

var G__58274 = (i__4819__auto___58273 + (1));
i__4819__auto___58273 = G__58274;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57738 = conformed_args__48951__auto__;
var map__57738__$1 = cljs.core.__destructure_map(map__57738);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq57737){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57737));
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
var len__4818__auto___58275 = arguments.length;
var i__4819__auto___58276 = (0);
while(true){
if((i__4819__auto___58276 < len__4818__auto___58275)){
args__4824__auto__.push((arguments[i__4819__auto___58276]));

var G__58277 = (i__4819__auto___58276 + (1));
i__4819__auto___58276 = G__58277;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57741 = conformed_args__48951__auto__;
var map__57741__$1 = cljs.core.__destructure_map(map__57741);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57741__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57741__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57741__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq57740){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57740));
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
var len__4818__auto___58278 = arguments.length;
var i__4819__auto___58279 = (0);
while(true){
if((i__4819__auto___58279 < len__4818__auto___58278)){
args__4824__auto__.push((arguments[i__4819__auto___58279]));

var G__58280 = (i__4819__auto___58279 + (1));
i__4819__auto___58279 = G__58280;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57743 = conformed_args__48951__auto__;
var map__57743__$1 = cljs.core.__destructure_map(map__57743);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57743__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57743__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57743__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq57742){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57742));
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
var len__4818__auto___58281 = arguments.length;
var i__4819__auto___58282 = (0);
while(true){
if((i__4819__auto___58282 < len__4818__auto___58281)){
args__4824__auto__.push((arguments[i__4819__auto___58282]));

var G__58283 = (i__4819__auto___58282 + (1));
i__4819__auto___58282 = G__58283;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57746 = conformed_args__48951__auto__;
var map__57746__$1 = cljs.core.__destructure_map(map__57746);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq57745){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57745));
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
var len__4818__auto___58284 = arguments.length;
var i__4819__auto___58285 = (0);
while(true){
if((i__4819__auto___58285 < len__4818__auto___58284)){
args__4824__auto__.push((arguments[i__4819__auto___58285]));

var G__58286 = (i__4819__auto___58285 + (1));
i__4819__auto___58285 = G__58286;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57749 = conformed_args__48951__auto__;
var map__57749__$1 = cljs.core.__destructure_map(map__57749);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57749__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57749__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq57747){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57747));
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
var len__4818__auto___58287 = arguments.length;
var i__4819__auto___58288 = (0);
while(true){
if((i__4819__auto___58288 < len__4818__auto___58287)){
args__4824__auto__.push((arguments[i__4819__auto___58288]));

var G__58289 = (i__4819__auto___58288 + (1));
i__4819__auto___58288 = G__58289;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57752 = conformed_args__48951__auto__;
var map__57752__$1 = cljs.core.__destructure_map(map__57752);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq57750){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57750));
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
var len__4818__auto___58290 = arguments.length;
var i__4819__auto___58291 = (0);
while(true){
if((i__4819__auto___58291 < len__4818__auto___58290)){
args__4824__auto__.push((arguments[i__4819__auto___58291]));

var G__58292 = (i__4819__auto___58291 + (1));
i__4819__auto___58291 = G__58292;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57754 = conformed_args__48951__auto__;
var map__57754__$1 = cljs.core.__destructure_map(map__57754);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq57753){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57753));
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
var len__4818__auto___58293 = arguments.length;
var i__4819__auto___58294 = (0);
while(true){
if((i__4819__auto___58294 < len__4818__auto___58293)){
args__4824__auto__.push((arguments[i__4819__auto___58294]));

var G__58295 = (i__4819__auto___58294 + (1));
i__4819__auto___58294 = G__58295;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57756 = conformed_args__48951__auto__;
var map__57756__$1 = cljs.core.__destructure_map(map__57756);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57756__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57756__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57756__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq57755){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57755));
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
var len__4818__auto___58296 = arguments.length;
var i__4819__auto___58297 = (0);
while(true){
if((i__4819__auto___58297 < len__4818__auto___58296)){
args__4824__auto__.push((arguments[i__4819__auto___58297]));

var G__58298 = (i__4819__auto___58297 + (1));
i__4819__auto___58297 = G__58298;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57758 = conformed_args__48951__auto__;
var map__57758__$1 = cljs.core.__destructure_map(map__57758);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57758__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57758__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57758__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq57757){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57757));
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
var len__4818__auto___58299 = arguments.length;
var i__4819__auto___58300 = (0);
while(true){
if((i__4819__auto___58300 < len__4818__auto___58299)){
args__4824__auto__.push((arguments[i__4819__auto___58300]));

var G__58301 = (i__4819__auto___58300 + (1));
i__4819__auto___58300 = G__58301;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57760 = conformed_args__48951__auto__;
var map__57760__$1 = cljs.core.__destructure_map(map__57760);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq57759){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57759));
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
var len__4818__auto___58302 = arguments.length;
var i__4819__auto___58303 = (0);
while(true){
if((i__4819__auto___58303 < len__4818__auto___58302)){
args__4824__auto__.push((arguments[i__4819__auto___58303]));

var G__58304 = (i__4819__auto___58303 + (1));
i__4819__auto___58303 = G__58304;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57762 = conformed_args__48951__auto__;
var map__57762__$1 = cljs.core.__destructure_map(map__57762);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq57761){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57761));
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
var len__4818__auto___58305 = arguments.length;
var i__4819__auto___58306 = (0);
while(true){
if((i__4819__auto___58306 < len__4818__auto___58305)){
args__4824__auto__.push((arguments[i__4819__auto___58306]));

var G__58307 = (i__4819__auto___58306 + (1));
i__4819__auto___58306 = G__58307;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57764 = conformed_args__48951__auto__;
var map__57764__$1 = cljs.core.__destructure_map(map__57764);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57764__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57764__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57764__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq57763){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57763));
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
var len__4818__auto___58308 = arguments.length;
var i__4819__auto___58309 = (0);
while(true){
if((i__4819__auto___58309 < len__4818__auto___58308)){
args__4824__auto__.push((arguments[i__4819__auto___58309]));

var G__58310 = (i__4819__auto___58309 + (1));
i__4819__auto___58309 = G__58310;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57766 = conformed_args__48951__auto__;
var map__57766__$1 = cljs.core.__destructure_map(map__57766);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57766__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57766__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57766__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq57765){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57765));
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
var len__4818__auto___58311 = arguments.length;
var i__4819__auto___58312 = (0);
while(true){
if((i__4819__auto___58312 < len__4818__auto___58311)){
args__4824__auto__.push((arguments[i__4819__auto___58312]));

var G__58313 = (i__4819__auto___58312 + (1));
i__4819__auto___58312 = G__58313;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57768 = conformed_args__48951__auto__;
var map__57768__$1 = cljs.core.__destructure_map(map__57768);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq57767){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57767));
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
var len__4818__auto___58314 = arguments.length;
var i__4819__auto___58315 = (0);
while(true){
if((i__4819__auto___58315 < len__4818__auto___58314)){
args__4824__auto__.push((arguments[i__4819__auto___58315]));

var G__58316 = (i__4819__auto___58315 + (1));
i__4819__auto___58315 = G__58316;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57770 = conformed_args__48951__auto__;
var map__57770__$1 = cljs.core.__destructure_map(map__57770);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57770__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57770__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57770__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq57769){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57769));
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
var len__4818__auto___58317 = arguments.length;
var i__4819__auto___58318 = (0);
while(true){
if((i__4819__auto___58318 < len__4818__auto___58317)){
args__4824__auto__.push((arguments[i__4819__auto___58318]));

var G__58319 = (i__4819__auto___58318 + (1));
i__4819__auto___58318 = G__58319;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57772 = conformed_args__48951__auto__;
var map__57772__$1 = cljs.core.__destructure_map(map__57772);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq57771){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57771));
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
var len__4818__auto___58320 = arguments.length;
var i__4819__auto___58321 = (0);
while(true){
if((i__4819__auto___58321 < len__4818__auto___58320)){
args__4824__auto__.push((arguments[i__4819__auto___58321]));

var G__58322 = (i__4819__auto___58321 + (1));
i__4819__auto___58321 = G__58322;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57774 = conformed_args__48951__auto__;
var map__57774__$1 = cljs.core.__destructure_map(map__57774);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57774__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57774__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57774__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq57773){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57773));
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
var len__4818__auto___58323 = arguments.length;
var i__4819__auto___58324 = (0);
while(true){
if((i__4819__auto___58324 < len__4818__auto___58323)){
args__4824__auto__.push((arguments[i__4819__auto___58324]));

var G__58325 = (i__4819__auto___58324 + (1));
i__4819__auto___58324 = G__58325;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57776 = conformed_args__48951__auto__;
var map__57776__$1 = cljs.core.__destructure_map(map__57776);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq57775){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57775));
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
var len__4818__auto___58326 = arguments.length;
var i__4819__auto___58327 = (0);
while(true){
if((i__4819__auto___58327 < len__4818__auto___58326)){
args__4824__auto__.push((arguments[i__4819__auto___58327]));

var G__58328 = (i__4819__auto___58327 + (1));
i__4819__auto___58327 = G__58328;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57778 = conformed_args__48951__auto__;
var map__57778__$1 = cljs.core.__destructure_map(map__57778);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57778__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq57777){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57777));
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
var len__4818__auto___58329 = arguments.length;
var i__4819__auto___58330 = (0);
while(true){
if((i__4819__auto___58330 < len__4818__auto___58329)){
args__4824__auto__.push((arguments[i__4819__auto___58330]));

var G__58331 = (i__4819__auto___58330 + (1));
i__4819__auto___58330 = G__58331;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57780 = conformed_args__48951__auto__;
var map__57780__$1 = cljs.core.__destructure_map(map__57780);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57780__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57780__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq57779){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57779));
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
var len__4818__auto___58332 = arguments.length;
var i__4819__auto___58333 = (0);
while(true){
if((i__4819__auto___58333 < len__4818__auto___58332)){
args__4824__auto__.push((arguments[i__4819__auto___58333]));

var G__58334 = (i__4819__auto___58333 + (1));
i__4819__auto___58333 = G__58334;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57782 = conformed_args__48951__auto__;
var map__57782__$1 = cljs.core.__destructure_map(map__57782);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq57781){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57781));
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
var len__4818__auto___58335 = arguments.length;
var i__4819__auto___58336 = (0);
while(true){
if((i__4819__auto___58336 < len__4818__auto___58335)){
args__4824__auto__.push((arguments[i__4819__auto___58336]));

var G__58337 = (i__4819__auto___58336 + (1));
i__4819__auto___58336 = G__58337;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57784 = conformed_args__48951__auto__;
var map__57784__$1 = cljs.core.__destructure_map(map__57784);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57784__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57784__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq57783){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57783));
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
var len__4818__auto___58338 = arguments.length;
var i__4819__auto___58339 = (0);
while(true){
if((i__4819__auto___58339 < len__4818__auto___58338)){
args__4824__auto__.push((arguments[i__4819__auto___58339]));

var G__58340 = (i__4819__auto___58339 + (1));
i__4819__auto___58339 = G__58340;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57786 = conformed_args__48951__auto__;
var map__57786__$1 = cljs.core.__destructure_map(map__57786);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57786__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57786__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57786__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq57785){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57785));
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
var len__4818__auto___58341 = arguments.length;
var i__4819__auto___58342 = (0);
while(true){
if((i__4819__auto___58342 < len__4818__auto___58341)){
args__4824__auto__.push((arguments[i__4819__auto___58342]));

var G__58343 = (i__4819__auto___58342 + (1));
i__4819__auto___58342 = G__58343;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57788 = conformed_args__48951__auto__;
var map__57788__$1 = cljs.core.__destructure_map(map__57788);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57788__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57788__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57788__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq57787){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57787));
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
var len__4818__auto___58344 = arguments.length;
var i__4819__auto___58345 = (0);
while(true){
if((i__4819__auto___58345 < len__4818__auto___58344)){
args__4824__auto__.push((arguments[i__4819__auto___58345]));

var G__58346 = (i__4819__auto___58345 + (1));
i__4819__auto___58345 = G__58346;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57790 = conformed_args__48951__auto__;
var map__57790__$1 = cljs.core.__destructure_map(map__57790);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57790__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57790__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57790__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq57789){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57789));
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
var len__4818__auto___58347 = arguments.length;
var i__4819__auto___58348 = (0);
while(true){
if((i__4819__auto___58348 < len__4818__auto___58347)){
args__4824__auto__.push((arguments[i__4819__auto___58348]));

var G__58349 = (i__4819__auto___58348 + (1));
i__4819__auto___58348 = G__58349;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57792 = conformed_args__48951__auto__;
var map__57792__$1 = cljs.core.__destructure_map(map__57792);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq57791){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57791));
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
var len__4818__auto___58350 = arguments.length;
var i__4819__auto___58351 = (0);
while(true){
if((i__4819__auto___58351 < len__4818__auto___58350)){
args__4824__auto__.push((arguments[i__4819__auto___58351]));

var G__58352 = (i__4819__auto___58351 + (1));
i__4819__auto___58351 = G__58352;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57794 = conformed_args__48951__auto__;
var map__57794__$1 = cljs.core.__destructure_map(map__57794);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57794__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57794__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57794__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq57793){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57793));
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
var len__4818__auto___58353 = arguments.length;
var i__4819__auto___58354 = (0);
while(true){
if((i__4819__auto___58354 < len__4818__auto___58353)){
args__4824__auto__.push((arguments[i__4819__auto___58354]));

var G__58355 = (i__4819__auto___58354 + (1));
i__4819__auto___58354 = G__58355;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57796 = conformed_args__48951__auto__;
var map__57796__$1 = cljs.core.__destructure_map(map__57796);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57796__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57796__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57796__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq57795){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57795));
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
var len__4818__auto___58356 = arguments.length;
var i__4819__auto___58357 = (0);
while(true){
if((i__4819__auto___58357 < len__4818__auto___58356)){
args__4824__auto__.push((arguments[i__4819__auto___58357]));

var G__58358 = (i__4819__auto___58357 + (1));
i__4819__auto___58357 = G__58358;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57798 = conformed_args__48951__auto__;
var map__57798__$1 = cljs.core.__destructure_map(map__57798);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57798__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57798__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57798__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq57797){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57797));
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
var len__4818__auto___58359 = arguments.length;
var i__4819__auto___58360 = (0);
while(true){
if((i__4819__auto___58360 < len__4818__auto___58359)){
args__4824__auto__.push((arguments[i__4819__auto___58360]));

var G__58361 = (i__4819__auto___58360 + (1));
i__4819__auto___58360 = G__58361;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57800 = conformed_args__48951__auto__;
var map__57800__$1 = cljs.core.__destructure_map(map__57800);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57800__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57800__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57800__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq57799){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57799));
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
var len__4818__auto___58362 = arguments.length;
var i__4819__auto___58363 = (0);
while(true){
if((i__4819__auto___58363 < len__4818__auto___58362)){
args__4824__auto__.push((arguments[i__4819__auto___58363]));

var G__58364 = (i__4819__auto___58363 + (1));
i__4819__auto___58363 = G__58364;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57802 = conformed_args__48951__auto__;
var map__57802__$1 = cljs.core.__destructure_map(map__57802);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57802__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57802__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57802__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq57801){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57801));
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
var len__4818__auto___58365 = arguments.length;
var i__4819__auto___58366 = (0);
while(true){
if((i__4819__auto___58366 < len__4818__auto___58365)){
args__4824__auto__.push((arguments[i__4819__auto___58366]));

var G__58367 = (i__4819__auto___58366 + (1));
i__4819__auto___58366 = G__58367;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57804 = conformed_args__48951__auto__;
var map__57804__$1 = cljs.core.__destructure_map(map__57804);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57804__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57804__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57804__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq57803){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57803));
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
var len__4818__auto___58368 = arguments.length;
var i__4819__auto___58369 = (0);
while(true){
if((i__4819__auto___58369 < len__4818__auto___58368)){
args__4824__auto__.push((arguments[i__4819__auto___58369]));

var G__58370 = (i__4819__auto___58369 + (1));
i__4819__auto___58369 = G__58370;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57806 = conformed_args__48951__auto__;
var map__57806__$1 = cljs.core.__destructure_map(map__57806);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57806__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57806__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq57805){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57805));
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
var len__4818__auto___58371 = arguments.length;
var i__4819__auto___58372 = (0);
while(true){
if((i__4819__auto___58372 < len__4818__auto___58371)){
args__4824__auto__.push((arguments[i__4819__auto___58372]));

var G__58373 = (i__4819__auto___58372 + (1));
i__4819__auto___58372 = G__58373;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57808 = conformed_args__48951__auto__;
var map__57808__$1 = cljs.core.__destructure_map(map__57808);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq57807){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57807));
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
var len__4818__auto___58374 = arguments.length;
var i__4819__auto___58375 = (0);
while(true){
if((i__4819__auto___58375 < len__4818__auto___58374)){
args__4824__auto__.push((arguments[i__4819__auto___58375]));

var G__58376 = (i__4819__auto___58375 + (1));
i__4819__auto___58375 = G__58376;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57810 = conformed_args__48951__auto__;
var map__57810__$1 = cljs.core.__destructure_map(map__57810);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57810__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57810__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57810__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq57809){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57809));
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
var len__4818__auto___58377 = arguments.length;
var i__4819__auto___58378 = (0);
while(true){
if((i__4819__auto___58378 < len__4818__auto___58377)){
args__4824__auto__.push((arguments[i__4819__auto___58378]));

var G__58379 = (i__4819__auto___58378 + (1));
i__4819__auto___58378 = G__58379;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57812 = conformed_args__48951__auto__;
var map__57812__$1 = cljs.core.__destructure_map(map__57812);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57812__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57812__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57812__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq57811){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57811));
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
var len__4818__auto___58380 = arguments.length;
var i__4819__auto___58381 = (0);
while(true){
if((i__4819__auto___58381 < len__4818__auto___58380)){
args__4824__auto__.push((arguments[i__4819__auto___58381]));

var G__58382 = (i__4819__auto___58381 + (1));
i__4819__auto___58381 = G__58382;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57814 = conformed_args__48951__auto__;
var map__57814__$1 = cljs.core.__destructure_map(map__57814);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57814__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57814__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq57813){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57813));
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
var len__4818__auto___58383 = arguments.length;
var i__4819__auto___58384 = (0);
while(true){
if((i__4819__auto___58384 < len__4818__auto___58383)){
args__4824__auto__.push((arguments[i__4819__auto___58384]));

var G__58385 = (i__4819__auto___58384 + (1));
i__4819__auto___58384 = G__58385;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57816 = conformed_args__48951__auto__;
var map__57816__$1 = cljs.core.__destructure_map(map__57816);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57816__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57816__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq57815){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57815));
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
var len__4818__auto___58386 = arguments.length;
var i__4819__auto___58387 = (0);
while(true){
if((i__4819__auto___58387 < len__4818__auto___58386)){
args__4824__auto__.push((arguments[i__4819__auto___58387]));

var G__58388 = (i__4819__auto___58387 + (1));
i__4819__auto___58387 = G__58388;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57818 = conformed_args__48951__auto__;
var map__57818__$1 = cljs.core.__destructure_map(map__57818);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57818__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57818__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57818__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq57817){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57817));
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
var len__4818__auto___58389 = arguments.length;
var i__4819__auto___58390 = (0);
while(true){
if((i__4819__auto___58390 < len__4818__auto___58389)){
args__4824__auto__.push((arguments[i__4819__auto___58390]));

var G__58391 = (i__4819__auto___58390 + (1));
i__4819__auto___58390 = G__58391;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57820 = conformed_args__48951__auto__;
var map__57820__$1 = cljs.core.__destructure_map(map__57820);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57820__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57820__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57820__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq57819){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57819));
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
var len__4818__auto___58392 = arguments.length;
var i__4819__auto___58393 = (0);
while(true){
if((i__4819__auto___58393 < len__4818__auto___58392)){
args__4824__auto__.push((arguments[i__4819__auto___58393]));

var G__58394 = (i__4819__auto___58393 + (1));
i__4819__auto___58393 = G__58394;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57822 = conformed_args__48951__auto__;
var map__57822__$1 = cljs.core.__destructure_map(map__57822);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq57821){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57821));
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
var len__4818__auto___58395 = arguments.length;
var i__4819__auto___58396 = (0);
while(true){
if((i__4819__auto___58396 < len__4818__auto___58395)){
args__4824__auto__.push((arguments[i__4819__auto___58396]));

var G__58397 = (i__4819__auto___58396 + (1));
i__4819__auto___58396 = G__58397;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57824 = conformed_args__48951__auto__;
var map__57824__$1 = cljs.core.__destructure_map(map__57824);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57824__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57824__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57824__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq57823){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57823));
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
var len__4818__auto___58398 = arguments.length;
var i__4819__auto___58399 = (0);
while(true){
if((i__4819__auto___58399 < len__4818__auto___58398)){
args__4824__auto__.push((arguments[i__4819__auto___58399]));

var G__58400 = (i__4819__auto___58399 + (1));
i__4819__auto___58399 = G__58400;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57826 = conformed_args__48951__auto__;
var map__57826__$1 = cljs.core.__destructure_map(map__57826);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57826__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57826__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57826__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq57825){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57825));
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
var len__4818__auto___58401 = arguments.length;
var i__4819__auto___58402 = (0);
while(true){
if((i__4819__auto___58402 < len__4818__auto___58401)){
args__4824__auto__.push((arguments[i__4819__auto___58402]));

var G__58403 = (i__4819__auto___58402 + (1));
i__4819__auto___58402 = G__58403;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57828 = conformed_args__48951__auto__;
var map__57828__$1 = cljs.core.__destructure_map(map__57828);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57828__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57828__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57828__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq57827){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57827));
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
var len__4818__auto___58404 = arguments.length;
var i__4819__auto___58405 = (0);
while(true){
if((i__4819__auto___58405 < len__4818__auto___58404)){
args__4824__auto__.push((arguments[i__4819__auto___58405]));

var G__58406 = (i__4819__auto___58405 + (1));
i__4819__auto___58405 = G__58406;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57830 = conformed_args__48951__auto__;
var map__57830__$1 = cljs.core.__destructure_map(map__57830);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57830__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57830__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57830__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq57829){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57829));
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
var len__4818__auto___58407 = arguments.length;
var i__4819__auto___58408 = (0);
while(true){
if((i__4819__auto___58408 < len__4818__auto___58407)){
args__4824__auto__.push((arguments[i__4819__auto___58408]));

var G__58409 = (i__4819__auto___58408 + (1));
i__4819__auto___58408 = G__58409;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57832 = conformed_args__48951__auto__;
var map__57832__$1 = cljs.core.__destructure_map(map__57832);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57832__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57832__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57832__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq57831){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57831));
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
var len__4818__auto___58410 = arguments.length;
var i__4819__auto___58411 = (0);
while(true){
if((i__4819__auto___58411 < len__4818__auto___58410)){
args__4824__auto__.push((arguments[i__4819__auto___58411]));

var G__58412 = (i__4819__auto___58411 + (1));
i__4819__auto___58411 = G__58412;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57834 = conformed_args__48951__auto__;
var map__57834__$1 = cljs.core.__destructure_map(map__57834);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57834__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57834__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57834__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq57833){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57833));
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
var len__4818__auto___58413 = arguments.length;
var i__4819__auto___58414 = (0);
while(true){
if((i__4819__auto___58414 < len__4818__auto___58413)){
args__4824__auto__.push((arguments[i__4819__auto___58414]));

var G__58415 = (i__4819__auto___58414 + (1));
i__4819__auto___58414 = G__58415;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57836 = conformed_args__48951__auto__;
var map__57836__$1 = cljs.core.__destructure_map(map__57836);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57836__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57836__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57836__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq57835){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57835));
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
var len__4818__auto___58416 = arguments.length;
var i__4819__auto___58417 = (0);
while(true){
if((i__4819__auto___58417 < len__4818__auto___58416)){
args__4824__auto__.push((arguments[i__4819__auto___58417]));

var G__58418 = (i__4819__auto___58417 + (1));
i__4819__auto___58417 = G__58418;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57838 = conformed_args__48951__auto__;
var map__57838__$1 = cljs.core.__destructure_map(map__57838);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57838__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57838__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57838__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq57837){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57837));
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
var len__4818__auto___58419 = arguments.length;
var i__4819__auto___58420 = (0);
while(true){
if((i__4819__auto___58420 < len__4818__auto___58419)){
args__4824__auto__.push((arguments[i__4819__auto___58420]));

var G__58421 = (i__4819__auto___58420 + (1));
i__4819__auto___58420 = G__58421;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57840 = conformed_args__48951__auto__;
var map__57840__$1 = cljs.core.__destructure_map(map__57840);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57840__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57840__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq57839){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57839));
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
var len__4818__auto___58422 = arguments.length;
var i__4819__auto___58423 = (0);
while(true){
if((i__4819__auto___58423 < len__4818__auto___58422)){
args__4824__auto__.push((arguments[i__4819__auto___58423]));

var G__58424 = (i__4819__auto___58423 + (1));
i__4819__auto___58423 = G__58424;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57842 = conformed_args__48951__auto__;
var map__57842__$1 = cljs.core.__destructure_map(map__57842);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57842__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57842__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57842__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq57841){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57841));
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
var len__4818__auto___58425 = arguments.length;
var i__4819__auto___58426 = (0);
while(true){
if((i__4819__auto___58426 < len__4818__auto___58425)){
args__4824__auto__.push((arguments[i__4819__auto___58426]));

var G__58427 = (i__4819__auto___58426 + (1));
i__4819__auto___58426 = G__58427;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57844 = conformed_args__48951__auto__;
var map__57844__$1 = cljs.core.__destructure_map(map__57844);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq57843){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57843));
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
var len__4818__auto___58428 = arguments.length;
var i__4819__auto___58429 = (0);
while(true){
if((i__4819__auto___58429 < len__4818__auto___58428)){
args__4824__auto__.push((arguments[i__4819__auto___58429]));

var G__58430 = (i__4819__auto___58429 + (1));
i__4819__auto___58429 = G__58430;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57846 = conformed_args__48951__auto__;
var map__57846__$1 = cljs.core.__destructure_map(map__57846);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57846__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57846__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57846__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq57845){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57845));
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
var len__4818__auto___58431 = arguments.length;
var i__4819__auto___58432 = (0);
while(true){
if((i__4819__auto___58432 < len__4818__auto___58431)){
args__4824__auto__.push((arguments[i__4819__auto___58432]));

var G__58433 = (i__4819__auto___58432 + (1));
i__4819__auto___58432 = G__58433;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57848 = conformed_args__48951__auto__;
var map__57848__$1 = cljs.core.__destructure_map(map__57848);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57848__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57848__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57848__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq57847){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57847));
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
var len__4818__auto___58434 = arguments.length;
var i__4819__auto___58435 = (0);
while(true){
if((i__4819__auto___58435 < len__4818__auto___58434)){
args__4824__auto__.push((arguments[i__4819__auto___58435]));

var G__58436 = (i__4819__auto___58435 + (1));
i__4819__auto___58435 = G__58436;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57850 = conformed_args__48951__auto__;
var map__57850__$1 = cljs.core.__destructure_map(map__57850);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq57849){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57849));
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
var len__4818__auto___58437 = arguments.length;
var i__4819__auto___58438 = (0);
while(true){
if((i__4819__auto___58438 < len__4818__auto___58437)){
args__4824__auto__.push((arguments[i__4819__auto___58438]));

var G__58439 = (i__4819__auto___58438 + (1));
i__4819__auto___58438 = G__58439;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57852 = conformed_args__48951__auto__;
var map__57852__$1 = cljs.core.__destructure_map(map__57852);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57852__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57852__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57852__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq57851){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57851));
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
var len__4818__auto___58440 = arguments.length;
var i__4819__auto___58441 = (0);
while(true){
if((i__4819__auto___58441 < len__4818__auto___58440)){
args__4824__auto__.push((arguments[i__4819__auto___58441]));

var G__58442 = (i__4819__auto___58441 + (1));
i__4819__auto___58441 = G__58442;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57854 = conformed_args__48951__auto__;
var map__57854__$1 = cljs.core.__destructure_map(map__57854);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57854__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57854__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57854__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq57853){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57853));
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
var len__4818__auto___58443 = arguments.length;
var i__4819__auto___58444 = (0);
while(true){
if((i__4819__auto___58444 < len__4818__auto___58443)){
args__4824__auto__.push((arguments[i__4819__auto___58444]));

var G__58445 = (i__4819__auto___58444 + (1));
i__4819__auto___58444 = G__58445;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57856 = conformed_args__48951__auto__;
var map__57856__$1 = cljs.core.__destructure_map(map__57856);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57856__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57856__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57856__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq57855){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57855));
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
var len__4818__auto___58446 = arguments.length;
var i__4819__auto___58447 = (0);
while(true){
if((i__4819__auto___58447 < len__4818__auto___58446)){
args__4824__auto__.push((arguments[i__4819__auto___58447]));

var G__58448 = (i__4819__auto___58447 + (1));
i__4819__auto___58447 = G__58448;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57858 = conformed_args__48951__auto__;
var map__57858__$1 = cljs.core.__destructure_map(map__57858);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq57857){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57857));
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
var len__4818__auto___58449 = arguments.length;
var i__4819__auto___58450 = (0);
while(true){
if((i__4819__auto___58450 < len__4818__auto___58449)){
args__4824__auto__.push((arguments[i__4819__auto___58450]));

var G__58451 = (i__4819__auto___58450 + (1));
i__4819__auto___58450 = G__58451;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57860 = conformed_args__48951__auto__;
var map__57860__$1 = cljs.core.__destructure_map(map__57860);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq57859){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57859));
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
var len__4818__auto___58452 = arguments.length;
var i__4819__auto___58453 = (0);
while(true){
if((i__4819__auto___58453 < len__4818__auto___58452)){
args__4824__auto__.push((arguments[i__4819__auto___58453]));

var G__58454 = (i__4819__auto___58453 + (1));
i__4819__auto___58453 = G__58454;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57862 = conformed_args__48951__auto__;
var map__57862__$1 = cljs.core.__destructure_map(map__57862);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57862__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57862__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57862__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq57861){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57861));
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
var len__4818__auto___58455 = arguments.length;
var i__4819__auto___58456 = (0);
while(true){
if((i__4819__auto___58456 < len__4818__auto___58455)){
args__4824__auto__.push((arguments[i__4819__auto___58456]));

var G__58457 = (i__4819__auto___58456 + (1));
i__4819__auto___58456 = G__58457;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57864 = conformed_args__48951__auto__;
var map__57864__$1 = cljs.core.__destructure_map(map__57864);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57864__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57864__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57864__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq57863){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57863));
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
var len__4818__auto___58458 = arguments.length;
var i__4819__auto___58459 = (0);
while(true){
if((i__4819__auto___58459 < len__4818__auto___58458)){
args__4824__auto__.push((arguments[i__4819__auto___58459]));

var G__58460 = (i__4819__auto___58459 + (1));
i__4819__auto___58459 = G__58460;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57866 = conformed_args__48951__auto__;
var map__57866__$1 = cljs.core.__destructure_map(map__57866);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57866__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57866__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq57865){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57865));
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
var len__4818__auto___58461 = arguments.length;
var i__4819__auto___58462 = (0);
while(true){
if((i__4819__auto___58462 < len__4818__auto___58461)){
args__4824__auto__.push((arguments[i__4819__auto___58462]));

var G__58463 = (i__4819__auto___58462 + (1));
i__4819__auto___58462 = G__58463;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57868 = conformed_args__48951__auto__;
var map__57868__$1 = cljs.core.__destructure_map(map__57868);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57868__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq57867){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57867));
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
var len__4818__auto___58464 = arguments.length;
var i__4819__auto___58465 = (0);
while(true){
if((i__4819__auto___58465 < len__4818__auto___58464)){
args__4824__auto__.push((arguments[i__4819__auto___58465]));

var G__58466 = (i__4819__auto___58465 + (1));
i__4819__auto___58465 = G__58466;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57870 = conformed_args__48951__auto__;
var map__57870__$1 = cljs.core.__destructure_map(map__57870);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57870__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57870__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57870__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq57869){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57869));
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
var len__4818__auto___58467 = arguments.length;
var i__4819__auto___58468 = (0);
while(true){
if((i__4819__auto___58468 < len__4818__auto___58467)){
args__4824__auto__.push((arguments[i__4819__auto___58468]));

var G__58469 = (i__4819__auto___58468 + (1));
i__4819__auto___58468 = G__58469;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57872 = conformed_args__48951__auto__;
var map__57872__$1 = cljs.core.__destructure_map(map__57872);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq57871){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57871));
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
var len__4818__auto___58470 = arguments.length;
var i__4819__auto___58471 = (0);
while(true){
if((i__4819__auto___58471 < len__4818__auto___58470)){
args__4824__auto__.push((arguments[i__4819__auto___58471]));

var G__58472 = (i__4819__auto___58471 + (1));
i__4819__auto___58471 = G__58472;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57874 = conformed_args__48951__auto__;
var map__57874__$1 = cljs.core.__destructure_map(map__57874);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57874__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57874__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57874__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq57873){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57873));
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
var len__4818__auto___58473 = arguments.length;
var i__4819__auto___58474 = (0);
while(true){
if((i__4819__auto___58474 < len__4818__auto___58473)){
args__4824__auto__.push((arguments[i__4819__auto___58474]));

var G__58475 = (i__4819__auto___58474 + (1));
i__4819__auto___58474 = G__58475;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57876 = conformed_args__48951__auto__;
var map__57876__$1 = cljs.core.__destructure_map(map__57876);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57876__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57876__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq57875){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57875));
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
var len__4818__auto___58476 = arguments.length;
var i__4819__auto___58477 = (0);
while(true){
if((i__4819__auto___58477 < len__4818__auto___58476)){
args__4824__auto__.push((arguments[i__4819__auto___58477]));

var G__58478 = (i__4819__auto___58477 + (1));
i__4819__auto___58477 = G__58478;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57878 = conformed_args__48951__auto__;
var map__57878__$1 = cljs.core.__destructure_map(map__57878);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57878__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57878__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57878__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq57877){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57877));
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
var len__4818__auto___58479 = arguments.length;
var i__4819__auto___58480 = (0);
while(true){
if((i__4819__auto___58480 < len__4818__auto___58479)){
args__4824__auto__.push((arguments[i__4819__auto___58480]));

var G__58481 = (i__4819__auto___58480 + (1));
i__4819__auto___58480 = G__58481;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57880 = conformed_args__48951__auto__;
var map__57880__$1 = cljs.core.__destructure_map(map__57880);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57880__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57880__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57880__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq57879){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57879));
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
var len__4818__auto___58482 = arguments.length;
var i__4819__auto___58483 = (0);
while(true){
if((i__4819__auto___58483 < len__4818__auto___58482)){
args__4824__auto__.push((arguments[i__4819__auto___58483]));

var G__58484 = (i__4819__auto___58483 + (1));
i__4819__auto___58483 = G__58484;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57882 = conformed_args__48951__auto__;
var map__57882__$1 = cljs.core.__destructure_map(map__57882);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57882__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57882__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57882__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq57881){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57881));
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
var len__4818__auto___58485 = arguments.length;
var i__4819__auto___58486 = (0);
while(true){
if((i__4819__auto___58486 < len__4818__auto___58485)){
args__4824__auto__.push((arguments[i__4819__auto___58486]));

var G__58487 = (i__4819__auto___58486 + (1));
i__4819__auto___58486 = G__58487;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57884 = conformed_args__48951__auto__;
var map__57884__$1 = cljs.core.__destructure_map(map__57884);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57884__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq57883){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57883));
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
var len__4818__auto___58488 = arguments.length;
var i__4819__auto___58489 = (0);
while(true){
if((i__4819__auto___58489 < len__4818__auto___58488)){
args__4824__auto__.push((arguments[i__4819__auto___58489]));

var G__58490 = (i__4819__auto___58489 + (1));
i__4819__auto___58489 = G__58490;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57886 = conformed_args__48951__auto__;
var map__57886__$1 = cljs.core.__destructure_map(map__57886);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57886__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57886__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57886__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq57885){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57885));
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
var len__4818__auto___58491 = arguments.length;
var i__4819__auto___58492 = (0);
while(true){
if((i__4819__auto___58492 < len__4818__auto___58491)){
args__4824__auto__.push((arguments[i__4819__auto___58492]));

var G__58493 = (i__4819__auto___58492 + (1));
i__4819__auto___58492 = G__58493;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57888 = conformed_args__48951__auto__;
var map__57888__$1 = cljs.core.__destructure_map(map__57888);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57888__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57888__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57888__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq57887){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57887));
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
var len__4818__auto___58494 = arguments.length;
var i__4819__auto___58495 = (0);
while(true){
if((i__4819__auto___58495 < len__4818__auto___58494)){
args__4824__auto__.push((arguments[i__4819__auto___58495]));

var G__58496 = (i__4819__auto___58495 + (1));
i__4819__auto___58495 = G__58496;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57890 = conformed_args__48951__auto__;
var map__57890__$1 = cljs.core.__destructure_map(map__57890);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57890__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57890__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57890__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq57889){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57889));
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
var len__4818__auto___58497 = arguments.length;
var i__4819__auto___58498 = (0);
while(true){
if((i__4819__auto___58498 < len__4818__auto___58497)){
args__4824__auto__.push((arguments[i__4819__auto___58498]));

var G__58499 = (i__4819__auto___58498 + (1));
i__4819__auto___58498 = G__58499;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57892 = conformed_args__48951__auto__;
var map__57892__$1 = cljs.core.__destructure_map(map__57892);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57892__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57892__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57892__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq57891){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57891));
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
var len__4818__auto___58500 = arguments.length;
var i__4819__auto___58501 = (0);
while(true){
if((i__4819__auto___58501 < len__4818__auto___58500)){
args__4824__auto__.push((arguments[i__4819__auto___58501]));

var G__58502 = (i__4819__auto___58501 + (1));
i__4819__auto___58501 = G__58502;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57894 = conformed_args__48951__auto__;
var map__57894__$1 = cljs.core.__destructure_map(map__57894);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57894__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57894__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57894__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq57893){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57893));
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
var len__4818__auto___58503 = arguments.length;
var i__4819__auto___58504 = (0);
while(true){
if((i__4819__auto___58504 < len__4818__auto___58503)){
args__4824__auto__.push((arguments[i__4819__auto___58504]));

var G__58505 = (i__4819__auto___58504 + (1));
i__4819__auto___58504 = G__58505;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__48951__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__57896 = conformed_args__48951__auto__;
var map__57896__$1 = cljs.core.__destructure_map(map__57896);
var children__48953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57896__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__48952__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57896__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__48954__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57896__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__48953__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__48953__auto__);
var attrs_value__48955__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__48952__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__48955__auto__], null),children__48953__auto____$1),css__48954__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq57895){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57895));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
