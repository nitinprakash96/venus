["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/reflect/reflect.js"],"~:js","goog.provide(\"goog.reflect\");\ngoog.reflect.object = function(type, object) {\n  return object;\n};\ngoog.reflect.objectProperty = function(prop, object) {\n  return prop;\n};\ngoog.reflect.sinkValue = function(x) {\n  goog.reflect.sinkValue[\" \"](x);\n  return x;\n};\ngoog.reflect.sinkValue[\" \"] = goog.nullFunction;\ngoog.reflect.canAccessProperty = function(obj, prop) {\n  try {\n    goog.reflect.sinkValue(obj[prop]);\n    return true;\n  } catch (e) {\n  }\n  return false;\n};\ngoog.reflect.cache = function(cacheObj, key, valueFn, opt_keyFn) {\n  const storedKey = opt_keyFn ? opt_keyFn(key) : key;\n  if (Object.prototype.hasOwnProperty.call(cacheObj, storedKey)) {\n    return cacheObj[storedKey];\n  }\n  return cacheObj[storedKey] = valueFn(key);\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Useful compiler idioms.\n */\n\ngoog.provide('goog.reflect');\n\n\n/**\n * Syntax for object literal casts.\n * @see http://go/jscompiler-renaming\n * @see https://goo.gl/CRs09P\n *\n * Use this if you have an object literal whose keys need to have the same names\n * as the properties of some class even after they are renamed by the compiler.\n *\n * @param {!Function} type Type to cast to.\n * @param {Object} object Object literal to cast.\n * @return {Object} The object literal.\n */\ngoog.reflect.object = function(type, object) {\n  'use strict';\n  return object;\n};\n\n/**\n * Syntax for renaming property strings.\n * @see http://go/jscompiler-renaming\n * @see https://goo.gl/CRs09P\n *\n * Use this if you have an need to access a property as a string, but want\n * to also have the property renamed by the compiler. In contrast to\n * goog.reflect.object, this method takes an instance of an object.\n *\n * Properties must be simple names (not qualified names).\n *\n * @param {string} prop Name of the property\n * @param {!Object} object Instance of the object whose type will be used\n *     for renaming\n * @return {string} The renamed property.\n */\ngoog.reflect.objectProperty = function(prop, object) {\n  'use strict';\n  return prop;\n};\n\n/**\n * To assert to the compiler that an operation is needed when it would\n * otherwise be stripped. For example:\n * <code>\n *     // Force a layout\n *     goog.reflect.sinkValue(dialog.offsetHeight);\n * </code>\n * @param {T} x\n * @return {T}\n * @template T\n */\ngoog.reflect.sinkValue = function(x) {\n  'use strict';\n  goog.reflect.sinkValue[' '](x);\n  return x;\n};\n\n\n/**\n * The compiler should optimize this function away iff no one ever uses\n * goog.reflect.sinkValue.\n */\ngoog.reflect.sinkValue[' '] = goog.nullFunction;\n\n\n/**\n * Check if a property can be accessed without throwing an exception.\n * @param {Object} obj The owner of the property.\n * @param {string} prop The property name.\n * @return {boolean} Whether the property is accessible. Will also return true\n *     if obj is null.\n */\ngoog.reflect.canAccessProperty = function(obj, prop) {\n  'use strict';\n  try {\n    goog.reflect.sinkValue(obj[prop]);\n    return true;\n  } catch (e) {\n  }\n  return false;\n};\n\n\n/**\n * Retrieves a value from a cache given a key. The compiler provides special\n * consideration for this call such that it is generally considered side-effect\n * free. However, if the `opt_keyFn` or `valueFn` have side-effects\n * then the entire call is considered to have side-effects.\n *\n * Conventionally storing the value on the cache would be considered a\n * side-effect and preclude unused calls from being pruned, ie. even if\n * the value was never used, it would still always be stored in the cache.\n *\n * Providing a side-effect free `valueFn` and `opt_keyFn`\n * allows unused calls to `goog.reflect.cache` to be pruned.\n *\n * @param {!Object<K, V>} cacheObj The object that contains the cached values.\n * @param {?} key The key to lookup in the cache. If it is not string or number\n *     then a `opt_keyFn` should be provided. The key is also used as the\n *     parameter to the `valueFn`.\n * @param {function(?):V} valueFn The value provider to use to calculate the\n *     value to store in the cache. This function should be side-effect free\n *     to take advantage of the optimization.\n * @param {function(?):K=} opt_keyFn The key provider to determine the cache\n *     map key. This should be used if the given key is not a string or number.\n *     If not provided then the given key is used. This function should be\n *     side-effect free to take advantage of the optimization.\n * @return {V} The cached or calculated value.\n * @template K\n * @template V\n */\ngoog.reflect.cache = function(cacheObj, key, valueFn, opt_keyFn) {\n  'use strict';\n  const storedKey = opt_keyFn ? opt_keyFn(key) : key;\n\n  if (Object.prototype.hasOwnProperty.call(cacheObj, storedKey)) {\n    return cacheObj[storedKey];\n  }\n\n  return (cacheObj[storedKey] = valueFn(key));\n};\n","~:compiled-at",1635908064544,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.reflect.reflect.js\",\n\"lineCount\":28,\n\"mappings\":\"AAUAA,IAAKC,CAAAA,OAAL,CAAa,cAAb,CAAA;AAeAD,IAAKE,CAAAA,OAAQC,CAAAA,MAAb,GAAsBC,QAAQ,CAACC,IAAD,EAAOF,MAAP,CAAe;AAE3C,SAAOA,MAAP;AAF2C,CAA7C;AAqBAH,IAAKE,CAAAA,OAAQI,CAAAA,cAAb,GAA8BC,QAAQ,CAACC,IAAD,EAAOL,MAAP,CAAe;AAEnD,SAAOK,IAAP;AAFmD,CAArD;AAgBAR,IAAKE,CAAAA,OAAQO,CAAAA,SAAb,GAAyBC,QAAQ,CAACC,CAAD,CAAI;AAEnCX,MAAKE,CAAAA,OAAQO,CAAAA,SAAb,CAAuB,GAAvB,CAAA,CAA4BE,CAA5B,CAAA;AACA,SAAOA,CAAP;AAHmC,CAArC;AAWAX,IAAKE,CAAAA,OAAQO,CAAAA,SAAb,CAAuB,GAAvB,CAAA,GAA8BT,IAAKY,CAAAA,YAAnC;AAUAZ,IAAKE,CAAAA,OAAQW,CAAAA,iBAAb,GAAiCC,QAAQ,CAACC,GAAD,EAAMP,IAAN,CAAY;AAEnD,KAAI;AACFR,QAAKE,CAAAA,OAAQO,CAAAA,SAAb,CAAuBM,GAAA,CAAIP,IAAJ,CAAvB,CAAA;AACA,WAAO,IAAP;AAFE,GAGF,QAAOQ,CAAP,CAAU;;AAEZ,SAAO,KAAP;AAPmD,CAArD;AAuCAhB,IAAKE,CAAAA,OAAQe,CAAAA,KAAb,GAAqBC,QAAQ,CAACC,QAAD,EAAWC,GAAX,EAAgBC,OAAhB,EAAyBC,SAAzB,CAAoC;AAE/D,QAAMC,YAAYD,SAAA,GAAYA,SAAA,CAAUF,GAAV,CAAZ,GAA6BA,GAA/C;AAEA,MAAII,MAAOC,CAAAA,SAAUC,CAAAA,cAAeC,CAAAA,IAAhC,CAAqCR,QAArC,EAA+CI,SAA/C,CAAJ;AACE,WAAOJ,QAAA,CAASI,SAAT,CAAP;AADF;AAIA,SAAQJ,QAAA,CAASI,SAAT,CAAR,GAA8BF,OAAA,CAAQD,GAAR,CAA9B;AAR+D,CAAjE;;\",\n\"sources\":[\"goog/reflect/reflect.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Useful compiler idioms.\\n */\\n\\ngoog.provide('goog.reflect');\\n\\n\\n/**\\n * Syntax for object literal casts.\\n * @see http://go/jscompiler-renaming\\n * @see https://goo.gl/CRs09P\\n *\\n * Use this if you have an object literal whose keys need to have the same names\\n * as the properties of some class even after they are renamed by the compiler.\\n *\\n * @param {!Function} type Type to cast to.\\n * @param {Object} object Object literal to cast.\\n * @return {Object} The object literal.\\n */\\ngoog.reflect.object = function(type, object) {\\n  'use strict';\\n  return object;\\n};\\n\\n/**\\n * Syntax for renaming property strings.\\n * @see http://go/jscompiler-renaming\\n * @see https://goo.gl/CRs09P\\n *\\n * Use this if you have an need to access a property as a string, but want\\n * to also have the property renamed by the compiler. In contrast to\\n * goog.reflect.object, this method takes an instance of an object.\\n *\\n * Properties must be simple names (not qualified names).\\n *\\n * @param {string} prop Name of the property\\n * @param {!Object} object Instance of the object whose type will be used\\n *     for renaming\\n * @return {string} The renamed property.\\n */\\ngoog.reflect.objectProperty = function(prop, object) {\\n  'use strict';\\n  return prop;\\n};\\n\\n/**\\n * To assert to the compiler that an operation is needed when it would\\n * otherwise be stripped. For example:\\n * <code>\\n *     // Force a layout\\n *     goog.reflect.sinkValue(dialog.offsetHeight);\\n * </code>\\n * @param {T} x\\n * @return {T}\\n * @template T\\n */\\ngoog.reflect.sinkValue = function(x) {\\n  'use strict';\\n  goog.reflect.sinkValue[' '](x);\\n  return x;\\n};\\n\\n\\n/**\\n * The compiler should optimize this function away iff no one ever uses\\n * goog.reflect.sinkValue.\\n */\\ngoog.reflect.sinkValue[' '] = goog.nullFunction;\\n\\n\\n/**\\n * Check if a property can be accessed without throwing an exception.\\n * @param {Object} obj The owner of the property.\\n * @param {string} prop The property name.\\n * @return {boolean} Whether the property is accessible. Will also return true\\n *     if obj is null.\\n */\\ngoog.reflect.canAccessProperty = function(obj, prop) {\\n  'use strict';\\n  try {\\n    goog.reflect.sinkValue(obj[prop]);\\n    return true;\\n  } catch (e) {\\n  }\\n  return false;\\n};\\n\\n\\n/**\\n * Retrieves a value from a cache given a key. The compiler provides special\\n * consideration for this call such that it is generally considered side-effect\\n * free. However, if the `opt_keyFn` or `valueFn` have side-effects\\n * then the entire call is considered to have side-effects.\\n *\\n * Conventionally storing the value on the cache would be considered a\\n * side-effect and preclude unused calls from being pruned, ie. even if\\n * the value was never used, it would still always be stored in the cache.\\n *\\n * Providing a side-effect free `valueFn` and `opt_keyFn`\\n * allows unused calls to `goog.reflect.cache` to be pruned.\\n *\\n * @param {!Object<K, V>} cacheObj The object that contains the cached values.\\n * @param {?} key The key to lookup in the cache. If it is not string or number\\n *     then a `opt_keyFn` should be provided. The key is also used as the\\n *     parameter to the `valueFn`.\\n * @param {function(?):V} valueFn The value provider to use to calculate the\\n *     value to store in the cache. This function should be side-effect free\\n *     to take advantage of the optimization.\\n * @param {function(?):K=} opt_keyFn The key provider to determine the cache\\n *     map key. This should be used if the given key is not a string or number.\\n *     If not provided then the given key is used. This function should be\\n *     side-effect free to take advantage of the optimization.\\n * @return {V} The cached or calculated value.\\n * @template K\\n * @template V\\n */\\ngoog.reflect.cache = function(cacheObj, key, valueFn, opt_keyFn) {\\n  'use strict';\\n  const storedKey = opt_keyFn ? opt_keyFn(key) : key;\\n\\n  if (Object.prototype.hasOwnProperty.call(cacheObj, storedKey)) {\\n    return cacheObj[storedKey];\\n  }\\n\\n  return (cacheObj[storedKey] = valueFn(key));\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"reflect\",\"object\",\"goog.reflect.object\",\"type\",\"objectProperty\",\"goog.reflect.objectProperty\",\"prop\",\"sinkValue\",\"goog.reflect.sinkValue\",\"x\",\"nullFunction\",\"canAccessProperty\",\"goog.reflect.canAccessProperty\",\"obj\",\"e\",\"cache\",\"goog.reflect.cache\",\"cacheObj\",\"key\",\"valueFn\",\"opt_keyFn\",\"storedKey\",\"Object\",\"prototype\",\"hasOwnProperty\",\"call\"]\n}\n"]