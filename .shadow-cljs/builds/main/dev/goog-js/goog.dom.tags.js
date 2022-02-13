["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/tags.js"],"~:js","goog.provide(\"goog.dom.tags\");\ngoog.require(\"goog.object\");\ngoog.dom.tags.VOID_TAGS_ = goog.object.createSet(\"area\", \"base\", \"br\", \"col\", \"command\", \"embed\", \"hr\", \"img\", \"input\", \"keygen\", \"link\", \"meta\", \"param\", \"source\", \"track\", \"wbr\");\ngoog.dom.tags.isVoidTag = function(tagName) {\n  return goog.dom.tags.VOID_TAGS_[tagName] === true;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Utilities for HTML element tag names.\n */\ngoog.provide('goog.dom.tags');\n\ngoog.require('goog.object');\n\n\n/**\n * The void elements specified by\n * http://www.w3.org/TR/html-markup/syntax.html#void-elements.\n * @const @private {!Object<string, boolean>}\n */\ngoog.dom.tags.VOID_TAGS_ = goog.object.createSet(\n    'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',\n    'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr');\n\n\n/**\n * Checks whether the tag is void (with no contents allowed and no legal end\n * tag), for example 'br'.\n * @param {string} tagName The tag name in lower case.\n * @return {boolean}\n */\ngoog.dom.tags.isVoidTag = function(tagName) {\n  'use strict';\n  return goog.dom.tags.VOID_TAGS_[tagName] === true;\n};\n","~:compiled-at",1635907777192,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.tags.js\",\n\"lineCount\":7,\n\"mappings\":\"AASAA,IAAKC,CAAAA,OAAL,CAAa,eAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,aAAb,CAAA;AAQAF,IAAKG,CAAAA,GAAIC,CAAAA,IAAKC,CAAAA,UAAd,GAA2BL,IAAKM,CAAAA,MAAOC,CAAAA,SAAZ,CACvB,MADuB,EACf,MADe,EACP,IADO,EACD,KADC,EACM,SADN,EACiB,OADjB,EAC0B,IAD1B,EACgC,KADhC,EACuC,OADvC,EAEvB,QAFuB,EAEb,MAFa,EAEL,MAFK,EAEG,OAFH,EAEY,QAFZ,EAEsB,OAFtB,EAE+B,KAF/B,CAA3B;AAWAP,IAAKG,CAAAA,GAAIC,CAAAA,IAAKI,CAAAA,SAAd,GAA0BC,QAAQ,CAACC,OAAD,CAAU;AAE1C,SAAOV,IAAKG,CAAAA,GAAIC,CAAAA,IAAKC,CAAAA,UAAd,CAAyBK,OAAzB,CAAP,KAA6C,IAA7C;AAF0C,CAA5C;;\",\n\"sources\":[\"goog/dom/tags.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Utilities for HTML element tag names.\\n */\\ngoog.provide('goog.dom.tags');\\n\\ngoog.require('goog.object');\\n\\n\\n/**\\n * The void elements specified by\\n * http://www.w3.org/TR/html-markup/syntax.html#void-elements.\\n * @const @private {!Object<string, boolean>}\\n */\\ngoog.dom.tags.VOID_TAGS_ = goog.object.createSet(\\n    'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',\\n    'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr');\\n\\n\\n/**\\n * Checks whether the tag is void (with no contents allowed and no legal end\\n * tag), for example 'br'.\\n * @param {string} tagName The tag name in lower case.\\n * @return {boolean}\\n */\\ngoog.dom.tags.isVoidTag = function(tagName) {\\n  'use strict';\\n  return goog.dom.tags.VOID_TAGS_[tagName] === true;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"dom\",\"tags\",\"VOID_TAGS_\",\"object\",\"createSet\",\"isVoidTag\",\"goog.dom.tags.isVoidTag\",\"tagName\"]\n}\n"]