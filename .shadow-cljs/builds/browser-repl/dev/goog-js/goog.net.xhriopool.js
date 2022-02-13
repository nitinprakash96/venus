["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/net/xhriopool.js"],"~:js","goog.provide(\"goog.net.XhrIoPool\");\ngoog.require(\"goog.net.XhrIo\");\ngoog.require(\"goog.structs.PriorityPool\");\ngoog.requireType(\"goog.structs.Map\");\ngoog.net.XhrIoPool = function(opt_headers, opt_minCount, opt_maxCount, opt_withCredentials) {\n  this.headers_ = opt_headers;\n  this.withCredentials_ = !!opt_withCredentials;\n  goog.structs.PriorityPool.call(this, opt_minCount, opt_maxCount);\n};\ngoog.inherits(goog.net.XhrIoPool, goog.structs.PriorityPool);\ngoog.net.XhrIoPool.prototype.createObject = function() {\n  const xhrIo = new goog.net.XhrIo;\n  const headers = this.headers_;\n  if (headers) {\n    headers.forEach(function(value, key) {\n      xhrIo.headers.set(key, value);\n    });\n  }\n  if (this.withCredentials_) {\n    xhrIo.setWithCredentials(true);\n  }\n  return xhrIo;\n};\ngoog.net.XhrIoPool.prototype.objectCanBeReused = function(obj) {\n  const xhr = obj;\n  return !xhr.isDisposed() && !xhr.isActive();\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Creates a pool of XhrIo objects to use. This allows multiple\n * XhrIo objects to be grouped together and requests will use next available\n * XhrIo object.\n */\n\ngoog.provide('goog.net.XhrIoPool');\n\ngoog.require('goog.net.XhrIo');\ngoog.require('goog.structs.PriorityPool');\ngoog.requireType('goog.structs.Map');\n\n\n\n/**\n * A pool of XhrIo objects.\n * @param {goog.structs.Map=} opt_headers Map of default headers to add to every\n *     request.\n * @param {number=} opt_minCount Minimum number of objects (Default: 0).\n * @param {number=} opt_maxCount Maximum number of objects (Default: 10).\n * @param {boolean=} opt_withCredentials Add credentials to every request\n *     (Default: false).\n * @constructor\n * @extends {goog.structs.PriorityPool}\n */\ngoog.net.XhrIoPool = function(\n    opt_headers, opt_minCount, opt_maxCount, opt_withCredentials) {\n  'use strict';\n  /**\n   * Map of default headers to add to every request.\n   * @type {goog.structs.Map|undefined}\n   * @private\n   */\n  this.headers_ = opt_headers;\n\n  /**\n   * Whether a \"credentialed\" requests are to be sent (ones that is aware of\n   * cookies and authentication). This is applicable only for cross-domain\n   * requests and more recent browsers that support this part of the HTTP Access\n   * Control standard.\n   *\n   * @see http://www.w3.org/TR/XMLHttpRequest/#the-withcredentials-attribute\n   *\n   * @private {boolean}\n   */\n  this.withCredentials_ = !!opt_withCredentials;\n\n  // Must break convention of putting the super-class's constructor first. This\n  // is because the super-class constructor calls adjustForMinMax, which calls\n  // this class' createObject. In this class's implementation, it assumes that\n  // there is a headers_, and will lack those if not yet present.\n  goog.structs.PriorityPool.call(this, opt_minCount, opt_maxCount);\n};\ngoog.inherits(goog.net.XhrIoPool, goog.structs.PriorityPool);\n\n\n/**\n * Creates an instance of an XhrIo object to use in the pool.\n * @return {!goog.net.XhrIo} The created object.\n * @override\n */\ngoog.net.XhrIoPool.prototype.createObject = function() {\n  'use strict';\n  const xhrIo = new goog.net.XhrIo();\n  const headers = this.headers_;\n  if (headers) {\n    headers.forEach(function(value, key) {\n      'use strict';\n      xhrIo.headers.set(key, value);\n    });\n  }\n  if (this.withCredentials_) {\n    xhrIo.setWithCredentials(true);\n  }\n  return xhrIo;\n};\n\n\n/**\n * Determine if an object has become unusable and should not be used.\n * @param {Object} obj The object to test.\n * @return {boolean} Whether the object can be reused, which is true if the\n *     object is not disposed and not active.\n * @override\n */\ngoog.net.XhrIoPool.prototype.objectCanBeReused = function(obj) {\n  'use strict';\n  // An active XhrIo object should never be used.\n  const xhr = /** @type {goog.net.XhrIo} */ (obj);\n  return !xhr.isDisposed() && !xhr.isActive();\n};\n","~:compiled-at",1636231893949,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.net.xhriopool.js\",\n\"lineCount\":28,\n\"mappings\":\"AAYAA,IAAKC,CAAAA,OAAL,CAAa,oBAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,gBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,2BAAb,CAAA;AACAF,IAAKG,CAAAA,WAAL,CAAiB,kBAAjB,CAAA;AAeAH,IAAKI,CAAAA,GAAIC,CAAAA,SAAT,GAAqBC,QAAQ,CACzBC,WADyB,EACZC,YADY,EACEC,YADF,EACgBC,mBADhB,CACqC;AAOhE,MAAKC,CAAAA,QAAL,GAAgBJ,WAAhB;AAYA,MAAKK,CAAAA,gBAAL,GAAwB,CAAC,CAACF,mBAA1B;AAMAV,MAAKa,CAAAA,OAAQC,CAAAA,YAAaC,CAAAA,IAA1B,CAA+B,IAA/B,EAAqCP,YAArC,EAAmDC,YAAnD,CAAA;AAzBgE,CADlE;AA4BAT,IAAKgB,CAAAA,QAAL,CAAchB,IAAKI,CAAAA,GAAIC,CAAAA,SAAvB,EAAkCL,IAAKa,CAAAA,OAAQC,CAAAA,YAA/C,CAAA;AAQAd,IAAKI,CAAAA,GAAIC,CAAAA,SAAUY,CAAAA,SAAUC,CAAAA,YAA7B,GAA4CC,QAAQ,EAAG;AAErD,QAAMC,QAAQ,IAAIpB,IAAKI,CAAAA,GAAIiB,CAAAA,KAA3B;AACA,QAAMC,UAAU,IAAKX,CAAAA,QAArB;AACA,MAAIW,OAAJ;AACEA,WAAQC,CAAAA,OAAR,CAAgB,QAAQ,CAACC,KAAD,EAAQC,GAAR,CAAa;AAEnCL,WAAME,CAAAA,OAAQI,CAAAA,GAAd,CAAkBD,GAAlB,EAAuBD,KAAvB,CAAA;AAFmC,KAArC,CAAA;AADF;AAMA,MAAI,IAAKZ,CAAAA,gBAAT;AACEQ,SAAMO,CAAAA,kBAAN,CAAyB,IAAzB,CAAA;AADF;AAGA,SAAOP,KAAP;AAbqD,CAAvD;AAwBApB,IAAKI,CAAAA,GAAIC,CAAAA,SAAUY,CAAAA,SAAUW,CAAAA,iBAA7B,GAAiDC,QAAQ,CAACC,GAAD,CAAM;AAG7D,QAAMC,MAAqCD,GAA3C;AACA,SAAO,CAACC,GAAIC,CAAAA,UAAJ,EAAR,IAA4B,CAACD,GAAIE,CAAAA,QAAJ,EAA7B;AAJ6D,CAA/D;;\",\n\"sources\":[\"goog/net/xhriopool.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Creates a pool of XhrIo objects to use. This allows multiple\\n * XhrIo objects to be grouped together and requests will use next available\\n * XhrIo object.\\n */\\n\\ngoog.provide('goog.net.XhrIoPool');\\n\\ngoog.require('goog.net.XhrIo');\\ngoog.require('goog.structs.PriorityPool');\\ngoog.requireType('goog.structs.Map');\\n\\n\\n\\n/**\\n * A pool of XhrIo objects.\\n * @param {goog.structs.Map=} opt_headers Map of default headers to add to every\\n *     request.\\n * @param {number=} opt_minCount Minimum number of objects (Default: 0).\\n * @param {number=} opt_maxCount Maximum number of objects (Default: 10).\\n * @param {boolean=} opt_withCredentials Add credentials to every request\\n *     (Default: false).\\n * @constructor\\n * @extends {goog.structs.PriorityPool}\\n */\\ngoog.net.XhrIoPool = function(\\n    opt_headers, opt_minCount, opt_maxCount, opt_withCredentials) {\\n  'use strict';\\n  /**\\n   * Map of default headers to add to every request.\\n   * @type {goog.structs.Map|undefined}\\n   * @private\\n   */\\n  this.headers_ = opt_headers;\\n\\n  /**\\n   * Whether a \\\"credentialed\\\" requests are to be sent (ones that is aware of\\n   * cookies and authentication). This is applicable only for cross-domain\\n   * requests and more recent browsers that support this part of the HTTP Access\\n   * Control standard.\\n   *\\n   * @see http://www.w3.org/TR/XMLHttpRequest/#the-withcredentials-attribute\\n   *\\n   * @private {boolean}\\n   */\\n  this.withCredentials_ = !!opt_withCredentials;\\n\\n  // Must break convention of putting the super-class's constructor first. This\\n  // is because the super-class constructor calls adjustForMinMax, which calls\\n  // this class' createObject. In this class's implementation, it assumes that\\n  // there is a headers_, and will lack those if not yet present.\\n  goog.structs.PriorityPool.call(this, opt_minCount, opt_maxCount);\\n};\\ngoog.inherits(goog.net.XhrIoPool, goog.structs.PriorityPool);\\n\\n\\n/**\\n * Creates an instance of an XhrIo object to use in the pool.\\n * @return {!goog.net.XhrIo} The created object.\\n * @override\\n */\\ngoog.net.XhrIoPool.prototype.createObject = function() {\\n  'use strict';\\n  const xhrIo = new goog.net.XhrIo();\\n  const headers = this.headers_;\\n  if (headers) {\\n    headers.forEach(function(value, key) {\\n      'use strict';\\n      xhrIo.headers.set(key, value);\\n    });\\n  }\\n  if (this.withCredentials_) {\\n    xhrIo.setWithCredentials(true);\\n  }\\n  return xhrIo;\\n};\\n\\n\\n/**\\n * Determine if an object has become unusable and should not be used.\\n * @param {Object} obj The object to test.\\n * @return {boolean} Whether the object can be reused, which is true if the\\n *     object is not disposed and not active.\\n * @override\\n */\\ngoog.net.XhrIoPool.prototype.objectCanBeReused = function(obj) {\\n  'use strict';\\n  // An active XhrIo object should never be used.\\n  const xhr = /** @type {goog.net.XhrIo} */ (obj);\\n  return !xhr.isDisposed() && !xhr.isActive();\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"net\",\"XhrIoPool\",\"goog.net.XhrIoPool\",\"opt_headers\",\"opt_minCount\",\"opt_maxCount\",\"opt_withCredentials\",\"headers_\",\"withCredentials_\",\"structs\",\"PriorityPool\",\"call\",\"inherits\",\"prototype\",\"createObject\",\"goog.net.XhrIoPool.prototype.createObject\",\"xhrIo\",\"XhrIo\",\"headers\",\"forEach\",\"value\",\"key\",\"set\",\"setWithCredentials\",\"objectCanBeReused\",\"goog.net.XhrIoPool.prototype.objectCanBeReused\",\"obj\",\"xhr\",\"isDisposed\",\"isActive\"]\n}\n"]