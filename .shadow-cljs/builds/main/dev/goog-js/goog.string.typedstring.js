["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/string/typedstring.js"],"~:js","goog.provide(\"goog.string.TypedString\");\ngoog.string.TypedString = function() {\n};\ngoog.string.TypedString.prototype.implementsGoogStringTypedString;\ngoog.string.TypedString.prototype.getTypedStringValue;\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\ngoog.provide('goog.string.TypedString');\n\n\n\n/**\n * Wrapper for strings that conform to a data type or language.\n *\n * Implementations of this interface are wrappers for strings, and typically\n * associate a type contract with the wrapped string.  Concrete implementations\n * of this interface may choose to implement additional run-time type checking,\n * see for example `goog.html.SafeHtml`. If available, client code that\n * needs to ensure type membership of an object should use the type's function\n * to assert type membership, such as `goog.html.SafeHtml.unwrap`.\n * @interface\n */\ngoog.string.TypedString = function() {};\n\n\n/**\n * Interface marker of the TypedString interface.\n *\n * This property can be used to determine at runtime whether or not an object\n * implements this interface.  All implementations of this interface set this\n * property to `true`.\n * @type {boolean}\n */\ngoog.string.TypedString.prototype.implementsGoogStringTypedString;\n\n\n/**\n * Retrieves this wrapped string's value.\n * @return {string} The wrapped string's value.\n */\ngoog.string.TypedString.prototype.getTypedStringValue;\n","~:compiled-at",1635907777192,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.string.typedstring.js\",\n\"lineCount\":6,\n\"mappings\":\"AAMAA,IAAKC,CAAAA,OAAL,CAAa,yBAAb,CAAA;AAeAD,IAAKE,CAAAA,MAAOC,CAAAA,WAAZ,GAA0BC,QAAQ,EAAG;CAArC;AAWAJ,IAAKE,CAAAA,MAAOC,CAAAA,WAAYE,CAAAA,SAAUC,CAAAA,+BAAlC;AAOAN,IAAKE,CAAAA,MAAOC,CAAAA,WAAYE,CAAAA,SAAUE,CAAAA,mBAAlC;;\",\n\"sources\":[\"goog/string/typedstring.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\ngoog.provide('goog.string.TypedString');\\n\\n\\n\\n/**\\n * Wrapper for strings that conform to a data type or language.\\n *\\n * Implementations of this interface are wrappers for strings, and typically\\n * associate a type contract with the wrapped string.  Concrete implementations\\n * of this interface may choose to implement additional run-time type checking,\\n * see for example `goog.html.SafeHtml`. If available, client code that\\n * needs to ensure type membership of an object should use the type's function\\n * to assert type membership, such as `goog.html.SafeHtml.unwrap`.\\n * @interface\\n */\\ngoog.string.TypedString = function() {};\\n\\n\\n/**\\n * Interface marker of the TypedString interface.\\n *\\n * This property can be used to determine at runtime whether or not an object\\n * implements this interface.  All implementations of this interface set this\\n * property to `true`.\\n * @type {boolean}\\n */\\ngoog.string.TypedString.prototype.implementsGoogStringTypedString;\\n\\n\\n/**\\n * Retrieves this wrapped string's value.\\n * @return {string} The wrapped string's value.\\n */\\ngoog.string.TypedString.prototype.getTypedStringValue;\\n\"],\n\"names\":[\"goog\",\"provide\",\"string\",\"TypedString\",\"goog.string.TypedString\",\"prototype\",\"implementsGoogStringTypedString\",\"getTypedStringValue\"]\n}\n"]