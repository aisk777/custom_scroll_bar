parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QkqI":[function(require,module,exports) {

},{}],"GMAy":[function(require,module,exports) {
"use strict";var e,t="object"==typeof Reflect?Reflect:null,n=t&&"function"==typeof t.apply?t.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};function r(e){console&&console.warn&&console.warn(e)}e=t&&"function"==typeof t.ownKeys?t.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}module.exports=o,module.exports.once=m,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function f(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function v(e,t,n,i){var o,s,v;if(u(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),v=s[t]),void 0===v)v=s[t]=n,++e._eventsCount;else if("function"==typeof v?v=s[t]=i?[n,v]:[v,n]:i?v.unshift(n):v.push(n),(o=f(e))>0&&v.length>o&&!v.warned){v.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+v.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=v.length,r(l)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function c(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=l.bind(r);return i.listener=n,r.wrapFn=i,i}function a(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?d(i):p(i,i.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function y(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function d(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function m(e,t){return new Promise(function(n,r){function i(){void 0!==o&&e.removeListener("error",o),n([].slice.call(arguments))}var o;"error"!==t&&(o=function(n){e.removeListener(t,i),r(n)},e.once("error",o)),e.once(t,i)})}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return f(this)},o.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var f=o[e];if(void 0===f)return!1;if("function"==typeof f)n(f,this,t);else{var v=f.length,l=p(f,v);for(r=0;r<v;++r)n(l[r],this,t)}return!0},o.prototype.addListener=function(e,t){return v(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return v(this,e,t,!0)},o.prototype.once=function(e,t){return u(t),this.on(e,c(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,c(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,s;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():y(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return a(this,e,!0)},o.prototype.rawListeners=function(e){return a(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},o.prototype.listenerCount=h,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]};
},{}],"noDf":[function(require,module,exports) {
var define;
var i;!function(s,e){"use strict";var o="model",r="name",a="type",n="vendor",d="version",t="mobile",l="tablet",w="smarttv",u={extend:function(i,s){var e={};for(var o in i)s[o]&&s[o].length%2==0?e[o]=s[o].concat(i[o]):e[o]=i[o];return e},has:function(i,s){return"string"==typeof i&&-1!==s.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},c={rgx:function(i,s){for(var e,o,r,a,n,d,t=0;t<s.length&&!n;){var l=s[t],w=s[t+1];for(e=o=0;e<l.length&&!n;)if(n=l[e++].exec(i))for(r=0;r<w.length;r++)d=n[++o],"object"==typeof(a=w[r])&&a.length>0?2==a.length?"function"==typeof a[1]?this[a[0]]=a[1].call(this,d):this[a[0]]=a[1]:3==a.length?"function"!=typeof a[1]||a[1].exec&&a[1].test?this[a[0]]=d?d.replace(a[1],a[2]):void 0:this[a[0]]=d?a[1].call(this,d,a[2]):void 0:4==a.length&&(this[a[0]]=d?a[3].call(this,d.replace(a[1],a[2])):void 0):this[a]=d||void 0;t+=2}},str:function(i,s){for(var e in s)if("object"==typeof s[e]&&s[e].length>0){for(var o=0;o<s[e].length;o++)if(u.has(s[e][o],i))return"?"===e?void 0:e}else if(u.has(s[e],i))return"?"===e?void 0:e;return i}},b={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},m={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[r,d],[/(opios)[\/\s]+([\w\.]+)/i],[[r,"Opera Mini"],d],[/\s(opr)\/([\w\.]+)/i],[[r,"Opera"],d],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[r,d],[/(konqueror)\/([\w\.]+)/i],[[r,"Konqueror"],d],[/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],[[r,"IE"],d],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[r,"Edge"],d],[/(yabrowser)\/([\w\.]+)/i],[[r,"Yandex"],d],[/(Avast)\/([\w\.]+)/i],[[r,"Avast Secure Browser"],d],[/(AVG)\/([\w\.]+)/i],[[r,"AVG Secure Browser"],d],[/(puffin)\/([\w\.]+)/i],[[r,"Puffin"],d],[/(focus)\/([\w\.]+)/i],[[r,"Firefox Focus"],d],[/(opt)\/([\w\.]+)/i],[[r,"Opera Touch"],d],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[r,"UCBrowser"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[r,/_/g," "],d],[/(windowswechat qbcore)\/([\w\.]+)/i],[[r,"WeChat(Win) Desktop"],d],[/(micromessenger)\/([\w\.]+)/i],[[r,"WeChat"],d],[/(brave)\/([\w\.]+)/i],[[r,"Brave"],d],[/(whale)\/([\w\.]+)/i],[[r,"Whale"],d],[/(qqbrowserlite)\/([\w\.]+)/i],[r,d],[/(QQ)\/([\d\.]+)/i],[r,d],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[r,d],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[r,d],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[r,d],[/(MetaSr)[\/\s]?([\w\.]+)/i],[r],[/(LBBROWSER)/i],[r],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[d,[r,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[d,[r,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[r,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[r,d],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[d,[r,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[r,/(.+)/,"$1 WebView"],d],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[r,/(.+(?:g|us))(.+)/,"$1 $2"],d],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[d,[r,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[r,"Sailfish Browser"],d],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[r,d],[/(dolfin)\/([\w\.]+)/i],[[r,"Dolphin"],d],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[r,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[r,"Chrome"],d],[/(coast)\/([\w\.]+)/i],[[r,"Opera Coast"],d],[/fxios\/([\w\.-]+)/i],[d,[r,"Firefox"]],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[d,[r,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[d,r],[/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],[[r,"GSA"],d],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[r,[d,c.str,b.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[r,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[r,"Netscape"],d],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[r,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",u.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",u.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",u.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[o,n,[a,l]],[/applecoremedia\/[\w\.]+ \((ipad)/],[o,[n,"Apple"],[a,l]],[/(apple\s{0,1}tv)/i],[[o,"Apple TV"],[n,"Apple"],[a,w]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[n,o,[a,l]],[/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],[o,[n,"Amazon"],[a,l]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[o,c.str,b.device.amazon.model],[n,"Amazon"],[a,t]],[/android.+aft([bms])\sbuild/i],[o,[n,"Amazon"],[a,w]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[o,n,[a,t]],[/\((ip[honed|\s\w*]+);/i],[o,[n,"Apple"],[a,t]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[n,o,[a,t]],[/\(bb10;\s(\w+)/i],[o,[n,"BlackBerry"],[a,t]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[o,[n,"Asus"],[a,l]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[n,"Sony"],[o,"Xperia Tablet"],[a,l]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[o,[n,"Sony"],[a,t]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[n,o,[a,"console"]],[/android.+;\s(shield)\sbuild/i],[o,[n,"Nvidia"],[a,"console"]],[/(playstation\s[34portablevi]+)/i],[o,[n,"Sony"],[a,"console"]],[/(sprint\s(\w+))/i],[[n,c.str,b.device.sprint.vendor],[o,c.str,b.device.sprint.model],[a,t]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[n,[o,/_/g," "],[a,t]],[/(nexus\s9)/i],[o,[n,"HTC"],[a,l]],[/d\/huawei([\w\s-]+)[;\)]/i,/android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],[o,[n,"Huawei"],[a,t]],[/android.+(bah2?-a?[lw]\d{2})/i],[o,[n,"Huawei"],[a,l]],[/(microsoft);\s(lumia[\s\w]+)/i],[n,o,[a,t]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[o,[n,"Microsoft"],[a,"console"]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[n,"Microsoft"],[a,t]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[o,[n,"Motorola"],[a,t]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[o,[n,"Motorola"],[a,l]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[n,u.trim],[o,u.trim],[a,w]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[n,"Samsung"],[a,w]],[/\(dtv[\);].+(aquos)/i],[o,[n,"Sharp"],[a,w]],[/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[n,"Samsung"],o,[a,l]],[/smart-tv.+(samsung)/i],[n,[a,w],o],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[n,"Samsung"],o,[a,t]],[/sie-(\w*)/i],[o,[n,"Siemens"],[a,t]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[n,"Nokia"],o,[a,t]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[o,[n,"Acer"],[a,l]],[/android.+([vl]k\-?\d{3})\s+build/i],[o,[n,"LG"],[a,l]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[n,"LG"],o,[a,l]],[/linux;\snetcast.+smarttv/i,/lg\snetcast\.tv-201\d/i],[[n,"LG"],o,[a,w]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[o,[n,"LG"],[a,t]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[n,o,[a,l]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[o,[n,"Lenovo"],[a,l]],[/(lenovo)[_\s-]?([\w-]+)/i],[n,o,[a,t]],[/linux;.+((jolla));/i],[n,o,[a,t]],[/((pebble))app\/[\d\.]+\s/i],[n,o,[a,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[n,o,[a,t]],[/crkey/i],[[o,"Chromecast"],[n,"Google"],[a,w]],[/android.+;\s(glass)\s\d/i],[o,[n,"Google"],[a,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[o,[n,"Google"],[a,l]],[/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],[o,[n,"Google"],[a,t]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,/android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[o,/_/g," "],[n,"Xiaomi"],[a,t]],[/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],[[o,/_/g," "],[n,"Xiaomi"],[a,l]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[o,[n,"Meizu"],[a,t]],[/(mz)-([\w-]{2,})/i],[[n,"Meizu"],o,[a,t]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[o,[n,"OnePlus"],[a,t]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[o,[n,"RCA"],[a,l]],[/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],[o,[n,"Dell"],[a,l]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[o,[n,"Verizon"],[a,l]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[n,"Barnes & Noble"],o,[a,l]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[o,[n,"NuVision"],[a,l]],[/android.+;\s(k88)\sbuild/i],[o,[n,"ZTE"],[a,l]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[o,[n,"Swiss"],[a,t]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[o,[n,"Swiss"],[a,l]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[o,[n,"Zeki"],[a,l]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[n,"Dragon Touch"],o,[a,l]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[o,[n,"Insignia"],[a,l]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[o,[n,"NextBook"],[a,l]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[n,"Voice"],o,[a,t]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[n,"LvTel"],o,[a,t]],[/android.+;\s(PH-1)\s/i],[o,[n,"Essential"],[a,t]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[o,[n,"Envizen"],[a,l]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[n,o,[a,l]],[/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],[o,[n,"MachSpeed"],[a,l]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[n,o,[a,l]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[o,[n,"Rotor"],[a,l]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[n,o,[a,l]],[/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[o,[a,t]],[/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[o,[a,l]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[a,u.lowerize],n,o],[/[\s\/\(](smart-?tv)[;\)]/i],[[a,w]],[/(android[\w\.\s\-]{0,9});.+build/i],[o,[n,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[r,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[d,[r,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[r,d],[/rv\:([\w\.]{1,9}).+(gecko)/i],[d,r]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[r,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[r,[d,c.str,b.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[r,"Windows"],[d,c.str,b.os.windows.version]],[/\((bb)(10);/i],[[r,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[r,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[r,"Symbian"],d],[/\((series40);/i],[r],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[r,"Firefox OS"],d],[/crkey\/([\d\.]+)/i],[d,[r,"Chromecast"]],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[r,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[r,"Chromium OS"],d],[/(sunos)\s?([\w\.\d]*)/i],[[r,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[r,d],[/(haiku)\s(\w+)/i],[r,d],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[d,/_/g,"."],[r,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[r,"Mac OS"],[d,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[r,d]]},p=function(i,e){if("object"==typeof i&&(e=i,i=void 0),!(this instanceof p))return new p(i,e).getResult();var o=i||(s&&s.navigator&&s.navigator.userAgent?s.navigator.userAgent:""),r=e?u.extend(m,e):m;return this.getBrowser=function(){var i={name:void 0,version:void 0};return c.rgx.call(i,o,r.browser),i.major=u.major(i.version),i},this.getCPU=function(){var i={architecture:void 0};return c.rgx.call(i,o,r.cpu),i},this.getDevice=function(){var i={vendor:void 0,model:void 0,type:void 0};return c.rgx.call(i,o,r.device),i},this.getEngine=function(){var i={name:void 0,version:void 0};return c.rgx.call(i,o,r.engine),i},this.getOS=function(){var i={name:void 0,version:void 0};return c.rgx.call(i,o,r.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(i){return o=i,this},this};p.VERSION="0.7.23",p.BROWSER={NAME:r,MAJOR:"major",VERSION:d},p.CPU={ARCHITECTURE:"architecture"},p.DEVICE={MODEL:o,VENDOR:n,TYPE:a,CONSOLE:"console",MOBILE:t,SMARTTV:w,TABLET:l,WEARABLE:"wearable",EMBEDDED:"embedded"},p.ENGINE={NAME:r,VERSION:d},p.OS={NAME:r,VERSION:d},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=p),exports.UAParser=p):"function"==typeof i&&i.amd?i(function(){return p}):s&&(s.UAParser=p);var h=s&&(s.jQuery||s.Zepto);if(h&&!h.ua){var f=new p;h.ua=f.getResult(),h.ua.get=function(){return f.getUA()},h.ua.set=function(i){f.setUA(i);var s=f.getResult();for(var e in s)h.ua[e]=s[e]}}}("object"==typeof window?window:this);
},{}],"iPJ4":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),e=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var i=Array(t),r=0;for(e=0;e<n;e++)for(var o=arguments[e],s=0,c=o.length;s<c;s++,r++)i[r]=o[s];return i};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("events"),i=require("ua-parser-js"),r=(new i.UAParser).getDevice(),o=function(e){function n(t){var n=e.call(this)||this;return n.DOM={el:t,inner:t.children[0]},n._enabled(),n}return t(n,e),Object.defineProperty(n.prototype,"getPercent",{get:function(){return this.DOM.el.clientWidth/this.DOM.inner.clientWidth},enumerable:!1,configurable:!0}),n.prototype._enabled=function(){var t=this;this.DOM.el.addEventListener("scroll",function(){return t._scroll()},!1)},n.prototype._scroll=function(){var t=this.DOM.el.scrollLeft/this.DOM.inner.clientWidth;this.emit("scroll",t)},n.prototype.scrollEvent=function(t){var e=this.DOM.inner.clientWidth*t;this.DOM.el.scrollTo(e,0)},n}(n.EventEmitter),s=function(e){function n(t,n){var i=e.call(this)||this;return i.DOM={el:t.children[0],parent:t},i.isMove=!1,i.parentWidth=i.DOM.parent.clientWidth,i.knobWidth=n,i.point={x:0,_x:0},i.x=0,i.DOM.el.style.width=100*i.knobWidth+"%",i.DOM.el.style.left=i.x+"%",i._enabled(),1===i.knobWidth&&i.DOM.parent.classList.add("is-hide"),i}return t(n,e),n.prototype._enabled=function(){var t=this,e=void 0!==r.type?["touchstart","touchmove","touchend"]:["mousedown","mousemove","mouseup"];this.DOM.el.addEventListener(e[0],function(e){return t._enter(e)},!1),document.addEventListener(e[1],function(e){return t._scroll(e)},!1),document.addEventListener(e[2],function(){return t._leave()},!1)},n.prototype._enter=function(t){t=void 0!==r.type?t.changedTouches[0]:t,this.isMove=!0,this.point={x:this.x,_x:t.pageX},document.body.classList.add("is-move")},n.prototype._leave=function(){this.isMove=!1,document.body.classList.remove("is-move")},n.prototype._scroll=function(t){if(!1!==this.isMove){var e=(t=void 0!==r.type?t.changedTouches[0]:t).pageX-this.point._x;e=this.point.x+e/this.parentWidth,e=Math.max(0,Math.min(e,1-this.knobWidth)),this.scrollEvent(e),this.emit("scroll",this.x)}},n.prototype.scrollEvent=function(t){this.x=t,this.DOM.el.style.left=100*this.x+"%"},n.prototype._resize=function(t){this.parentWidth=this.DOM.parent.clientWidth,this.knobWidth=t,this.DOM.el.style.width=100*this.knobWidth+"%",1===this.knobWidth?this.DOM.parent.classList.add("is-hide"):this.DOM.parent.classList.remove("is-hide")},n}(n.EventEmitter),c=function(){function t(t){this.List=e(t).map(this._init.bind(this)),this._enabled()}return t.prototype._init=function(t){t.insertAdjacentHTML("afterend",'<div class="knob"><span></span></div>');var e=new o(t),n=new s(t.nextElementSibling,e.getPercent);return e.on("scroll",function(t){return n.scrollEvent(t)}),n.on("scroll",function(t){return e.scrollEvent(t)}),{scrollCtrl:e,knobCtrl:n}},t.prototype._enabled=function(){var t=this,e=void 0!==r.type?"orientationchange":"resize";window.addEventListener(e,function(){return t._resize()})},t.prototype._resize=function(){this.List.forEach(function(t){t.knobCtrl._resize(t.scrollCtrl.getPercent)})},t}();exports.default=c;
},{"events":"GMAy","ua-parser-js":"noDf"}],"LQOA":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),require("destyle.css"),require("../scss/style.scss");var r=e(require("./_ScrollCtrl")),t=function(){new r.default(document.querySelectorAll(".js-scroll"))};window.addEventListener("load",t);
},{"destyle.css":"QkqI","../scss/style.scss":"QkqI","./_ScrollCtrl":"iPJ4"}]},{},["LQOA"], null)