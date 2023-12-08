/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 746:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(959),ca=__webpack_require__(962);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(a){var b=Mg.current;E(Mg);a._currentValue=b}
function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null)}
function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p(308));Og=a;Ng.dependencies={lanes:0,firstContext:a}}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a)}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function ch(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:$g=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q}}
function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var nh={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L(),d=
lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d))}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null)}
function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}
function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function th(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=zh(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p(174));return a}function Ih(a,b){G(Gh,b);G(Fh,a);G(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(Eh);G(Eh,b)}function Jh(){E(Eh);E(Fh);E(Gh)}
function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G(Fh,a),G(Eh,c))}function Lh(a){Fh.current===a&&(E(Eh),E(Fh))}var M=Uf(0);
function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Nh=[];
function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p(321));}function Wh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Xh(a,b,c,d,e,f){Rh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p(301));f+=1;P=O=null;b.updateQueue=null;Ph.current=$h;a=c(d,e)}while(Th)}Ph.current=ai;b=null!==O&&null!==O.next;Rh=0;P=O=N=null;Sh=!1;if(b)throw Error(p(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function di(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(p(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function ei(a,b){return"function"===typeof b?b(a):b}
function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N.lanes|=m;hh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function hi(){}
function ii(a,b){var c=N,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P&&P.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R)throw Error(p(349));0!==(Rh&30)||ni(c,b,e)}return e}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a)}function ki(a,b,c){return c(function(){oi(b)&&pi(a)})}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1)}
function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N,a);return[b.memoizedState,a]}
function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si(){return di().memoizedState}function ti(a,b,c,d){var e=ci();N.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d)}
function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return}}N.flags|=a;e.memoizedState=li(1|b,c,f,d)}function vi(a,b){return ti(8390656,8,a,b)}function ji(a,b){return ui(2048,8,a,b)}function wi(a,b){return ui(4,2,a,b)}function xi(a,b){return ui(4,4,a,b)}
function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b()}finally{C=c,Qh.transition=d}}function Fi(){return di().memoizedState}
function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L();mh(c,a,d,e);Ji(c,b,d)}}
function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L(),mh(c,a,d,e),Ji(c,b,d))}}
function Hi(a){var b=a.alternate;return a===N||null!==b&&b===N}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,
4,yi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti(4,2,a,b)},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=
ci();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N,e=ci();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===R)throw Error(p(349));0!==(Rh&30)||ni(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,
f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci(),b=R.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},
useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O.memoizedState,a)},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===
O?b.memoizedState=a:Di(b,O.memoizedState,a)},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
function Mi(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b)};return c}
function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a))}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d)}
function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(fj,gj);gj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return kj(a,b,c,d,f,e)}
function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo)}
function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function pj(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(M,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1))}uj();d=Li(Error(p(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c)}
function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(M,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(M,M.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G(M,M.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G(M,M.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(M,M.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bj=function(){};
Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Ej(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;Jh();E(Wf);E(H);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(M);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M.current&1)?0===T&&(T=3):uj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return Jh(),
Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return Rg(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(M);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(M,M.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304)}else{if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=M.current,G(M,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E(Wf),E(H),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E(M);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Nj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Oj=!1;
function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Oj;Oj=!1;return n}
function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f)}e=e.next}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}
function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling}var X=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling}
function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Mj(c,b);case 6:var d=X,e=Yj;X=null;Zj(a,b,c);X=d;Yj=e;null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Yj;X=c.stateNode.containerInfo;Yj=!0;
Zj(a,b,c);X=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next}while(e!==d)}Zj(a,b,c);break;case 1:if(!U&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Zj(a,b,c),U=d):Zj(a,b,c);break;default:Zj(a,b,c)}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Yj=!1;break a;case 3:X=h.stateNode.containerInfo;Yj=!0;break a;case 4:X=h.stateNode.containerInfo;Yj=!0;break a}h=h.return}if(null===X)throw Error(p(160));ak(f,g,e);X=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling}
function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a)}catch(t){W(a,a.return,t)}try{Qj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,dk(b,a),U=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V=y):hk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
a),fk(a)}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function ik(a,b,c){V=a;jk(a,b,c)}
function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Kj;var l=U;Kj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V=k):kk(e);for(;null!==f;)V=f,jk(f,b,c),f=f.sibling;V=e;Kj=h;U=l}lk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):lk(a,b,c)}}
function lk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}ih(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Sj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function hk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function kk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Sj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Sj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return 0!==(K&6)?B():-1!==Bk?Bk:Bk=B()}
function lh(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==R)a===R&&(0===(K&2)&&(rk|=c),4===T&&Dk(a,Z)),Ek(a,d),1===c&&0===K&&0===(b.mode&1)&&(Hj=B()+500,fg&&jg())}
function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Gk(c,Hk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Hk(a,b){Bk=-1;Ck=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else{b=d;var e=K;K|=2;var f=Kk();if(R!==a||Z!==b)vk=null,Hj=B()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h)}while(1);Qg();nk.current=f;K=e;null!==Y?b=0:(R=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;if(6===b)Dk(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p(329));}}}Ek(a,B());return a.callbackNode===c?Hk.bind(null,a):null}
function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a)}
function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Fk(a){if(0!==(K&6))throw Error(p(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d))}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B());return null}
function Rk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Hj=B()+500,fg&&jg())}}function Sk(a){null!==xk&&0===xk.tag&&0===(K&6)&&Ik();var b=K;K|=1;var c=pk.transition,d=C;try{if(pk.transition=null,C=1,a)return a()}finally{C=d,pk.transition=c,K=b,0===(K&6)&&jg()}}function Ij(){gj=fj.current;E(fj)}
function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E(Wf);E(H);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij()}c=c.return}R=a;Y=a=wh(a.current,null);Z=gj=b;T=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}Wg=null}return a}
function Nk(a,b){do{var c=Y;try{Qg();Ph.current=ai;if(Sh){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Sh=!1}Rh=0;P=O=N=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T=1;qk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T&&(T=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return}while(null!==f)}Tk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a}
function uj(){if(0===T||3===T||2===T)T=4;null===R||0===(hh&268435455)&&0===(rk&268435455)||Dk(R,Z)}function Jk(a,b){var c=K;K|=2;var d=Kk();if(R!==a||Z!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e)}while(1);Qg();K=c;nk.current=d;if(null!==Y)throw Error(p(261));R=null;Z=0;return T}function Uk(){for(;null!==Y;)Vk(Y)}function Mk(){for(;null!==Y&&!cc();)Vk(Y)}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y=b;ok.current=null}
function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y=c;return}}else{c=Jj(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Qk(a,b,c){var d=C,e=pk.transition;try{pk.transition=null,C=1,Xk(a,b,c,d)}finally{pk.transition=e,C=d}return null}
function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R&&(Y=R=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
var g=C;C=1;var h=K;K|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c,a,e);dc();K=h;C=g;pk.transition=f}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode,d);Ek(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C;try{pk.transition=null;C=16>a?16:a;if(null===xk)var d=!1;else{a=xk;xk=null;yk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Tj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,pk.transition=b}}return!1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L();null!==a&&(Ac(a,1,b),Ek(a,b))}
function W(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return}}
function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L();a.pingedLanes|=a.suspendedLanes&c;R===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-gk?Lk(a,0):sk|=c);Ek(a,b)}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c))}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c)}
function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Zk(a,c)}var Wk;
Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1}else Ug=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ki(Error(p(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c)}b=b.child}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Yi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p(156,b.tag));};function Gk(a,b){return ac(a,b)}
function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b)}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a)};function ml(a){this._internalRoot=a}
nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));gl(a,b,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null)});b[uf]=null}};function nl(a){this._internalRoot=a}
nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a)}}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a)}}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d)});return k}
function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a)}}gl(b,g,a,e)}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B()),0===(K&6)&&(Hj=B()+500,jg()))}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L();mh(b,a,1,c)}}),jl(a,1)}};
Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L();mh(b,a,134217728,c)}jl(a,134217728)}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L();mh(c,a,b,d)}jl(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Rk;Hb=Sk;
var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p(200));return dl(a,b,null,c)};exports.createRoot=function(a,b){if(!ol(a))throw Error(p(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Sk(a)};exports.hydrate=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new nl(b)};exports.render=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Rk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return sl(a,b,c,!1,d)};exports.version="18.2.0-next-9e3b772b8-20220608";


/***/ }),

/***/ 478:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__(422);
if (true) {
  exports.s = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(746);
} else {}


/***/ }),

/***/ 354:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(959),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 257:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.2.0";


/***/ }),

/***/ 959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(257);
} else {}


/***/ }),

/***/ 527:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(354);
} else {}


/***/ }),

/***/ 568:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 962:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(568);
} else {}


/***/ }),

/***/ 415:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(959);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),

/***/ 322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(415);
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(527);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(959);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js
var client = __webpack_require__(478);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-aria+ssr@3.9.0_react@18.2.0/node_modules/@react-aria/ssr/dist/import.mjs


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rulesdir/useLayoutEffectRule

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $b5e257d569688ac6$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $b5e257d569688ac6$var$SSRContext = /*#__PURE__*/ (0, react).createContext($b5e257d569688ac6$var$defaultContext);
const $b5e257d569688ac6$var$IsSSRContext = /*#__PURE__*/ (0, react).createContext(false);
// This is only used in React < 18.
function $b5e257d569688ac6$var$LegacySSRProvider(props) {
    let cur = (0, $73SJx$useContext)($b5e257d569688ac6$var$SSRContext);
    let counter = $b5e257d569688ac6$var$useCounter(cur === $b5e257d569688ac6$var$defaultContext);
    let [isSSR, setIsSSR] = (0, $73SJx$useState)(true);
    let value = (0, $73SJx$useMemo)(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $b5e257d569688ac6$var$defaultContext ? "" : `${cur.prefix}-${counter}`,
            current: 0
        }), [
        cur,
        counter
    ]);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof document !== "undefined") // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, $73SJx$useLayoutEffect)(()=>{
        setIsSSR(false);
    }, []);
    return /*#__PURE__*/ (0, $73SJx$react).createElement($b5e257d569688ac6$var$SSRContext.Provider, {
        value: value
    }, /*#__PURE__*/ (0, $73SJx$react).createElement($b5e257d569688ac6$var$IsSSRContext.Provider, {
        value: isSSR
    }, props.children));
}
let $b5e257d569688ac6$var$warnedAboutSSRProvider = false;
function $b5e257d569688ac6$export$9f8ac96af4b1b2ae(props) {
    if (typeof (0, $73SJx$react)["useId"] === "function") {
        if ( true && !$b5e257d569688ac6$var$warnedAboutSSRProvider) {
            console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.");
            $b5e257d569688ac6$var$warnedAboutSSRProvider = true;
        }
        return /*#__PURE__*/ (0, $73SJx$react).createElement((0, $73SJx$react).Fragment, null, props.children);
    }
    return /*#__PURE__*/ (0, $73SJx$react).createElement($b5e257d569688ac6$var$LegacySSRProvider, props);
}
let $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
let $b5e257d569688ac6$var$componentIds = new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
    let ctx = (0, react.useContext)($b5e257d569688ac6$var$SSRContext);
    let ref = (0, react.useRef)(null);
    // eslint-disable-next-line rulesdir/pure-render
    if (ref.current === null && !isDisabled) {
        var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        // In strict mode, React renders components twice, and the ref will be reset to null on the second render.
        // This means our id counter will be incremented twice instead of once. This is a problem because on the
        // server, components are only rendered once and so ids generated on the server won't match the client.
        // In React 18, useId was introduced to solve this, but it is not available in older versions. So to solve this
        // we need to use some React internals to access the underlying Fiber instance, which is stable between renders.
        // This is exposed as ReactCurrentOwner in development, which is all we need since StrictMode only runs in development.
        // To ensure that we only increment the global counter once, we store the starting id for this component in
        // a weak map associated with the Fiber. On the second render, we reset the global counter to this value.
        // Since React runs the second render immediately after the first, this is safe.
        // @ts-ignore
        let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, react).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
        if (currentOwner) {
            let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
            if (prevComponentValue == null) // On the first render, and first call to useId, store the id and state in our weak map.
            $b5e257d569688ac6$var$componentIds.set(currentOwner, {
                id: ctx.current,
                state: currentOwner.memoizedState
            });
            else if (currentOwner.memoizedState !== prevComponentValue.state) {
                // On the second render, the memoizedState gets reset by React.
                // Reset the counter, and remove from the weak map so we don't
                // do this for subsequent useId calls.
                ctx.current = prevComponentValue.id;
                $b5e257d569688ac6$var$componentIds.delete(currentOwner);
            }
        }
        // eslint-disable-next-line rulesdir/pure-render
        ref.current = ++ctx.current;
    }
    // eslint-disable-next-line rulesdir/pure-render
    return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
    let ctx = (0, react.useContext)($b5e257d569688ac6$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
    let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
    let prefix = ctx === $b5e257d569688ac6$var$defaultContext && "production" === "test" ? 0 : `react-aria${ctx.prefix}`;
    return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
    // @ts-ignore
    let id = (0, react).useId();
    let [didSSR] = (0, react.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
    let prefix = didSSR || "production" === "test" ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
    return defaultId || `${prefix}-${id}`;
}
const $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, react)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
    return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
    return true;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
    // noop
    return ()=>{};
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
    // In React 18, we can use useSyncExternalStore to detect if we're server rendering or hydrating.
    if (typeof (0, react)["useSyncExternalStore"] === "function") return (0, react)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, react.useContext)($b5e257d569688ac6$var$IsSSRContext);
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const clsx_m = (clsx);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-aria+utils@3.22.0_react@18.2.0/node_modules/@react-aria/utils/dist/import.mjs





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, react).useLayoutEffect : ()=>{};



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (0, react.useRef)(null);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, react.useCallback)((...args)=>{
        const f = ref.current;
        return f(...args);
    }, []);
}


function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0, react.useState)(defaultValue);
    let effect = (0, react.useRef)(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef();
        else setValue(newValue.value);
    });
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef();
    });
    let queue = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((fn)=>{
        effect.current = fn(value);
        nextRef();
    });
    return [
        value,
        queue
    ];
}


// copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
let $bdb11010cef70236$var$idsUpdaterMap = new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, react.useState)(defaultId);
    let nextId = (0, react.useRef)(null);
    let res = (0, $b5e257d569688ac6$export$619500959fc48b26)(value);
    let updateValue = (0, react.useCallback)((val)=>{
        nextId.current = val;
    }, []);
    if ($bdb11010cef70236$var$canUseDOM) $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        let r = res;
        return ()=>{
            $bdb11010cef70236$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is updated first.
    // eslint-disable-next-line
    (0, react.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) {
            nextId.current = null;
            setValue(newId);
        }
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
    if (setIdA) {
        setIdA(idB);
        return idB;
    }
    let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
    if (setIdB) {
        setIdB(idA);
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = (0, $1dbecbe27a04f9af$export$14d238f342723f25)(id);
    let updateId = (0, react.useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === "function") callback(...args);
    };
}


const $431fbd86ca7dc216$export$b204af158042fbac = (el)=>{
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el)=>{
    if (el && "window" in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
};


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === "function" && typeof b === "function" && // This is a lot faster than a regex.
            key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(a, b);
            else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = (0, clsx_m)(a, b);
            else if (key === "id" && a && b) result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $5dc95899b306f630$export$c9058316764c140e(...refs) {
    if (refs.length === 1) return refs[0];
    return (value)=>{
        for (let ref of refs){
            if (typeof ref === "function") ref(value);
            else if (ref != null) ref.current = value;
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    "id"
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-details"
]);
// See LinkDOMProps in dom.d.ts.
const $65484d02dcb7eb3e$var$linkPropNames = new Set([
    "href",
    "target",
    "rel",
    "download",
    "ping",
    "referrerPolicy"
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable, isLink: isLink, propNames: propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
        element.focus();
        $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
        $7215afc6de606d6b$var$supportsPreventScrollCached = false;
        try {
            var focusElem = document.createElement("div");
            focusElem.focus({
                get preventScroll () {
                    $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch (e) {
        // Ignore
        }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
    var parent = element.parentNode;
    var scrollableElements = [];
    var rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element, scrollTop: scrollTop, scrollLeft: scrollLeft } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $ab71dadb03a6fb2e$export$622cea445a1c5b7d(element, reverse, orientation = "horizontal") {
    let rect = element.getBoundingClientRect();
    if (reverse) return orientation === "horizontal" ? rect.right : rect.bottom;
    return orientation === "horizontal" ? rect.left : rect.top;
}


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === "undefined" || window.navigator == null) return false;
    return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand)=>re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$e1865c3bedcd822b() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
}
function $c87311424ea30a05$export$78551043582a6a98() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
}
function $c87311424ea30a05$export$b7d78993b74f766d() {
    return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
}




const $ea8dcbcb9ea1b556$var$RouterContext = /*#__PURE__*/ (0, react.createContext)({
    isNative: true,
    open: $ea8dcbcb9ea1b556$var$openSyntheticLink
});
function $ea8dcbcb9ea1b556$export$323e4fc2fa4753fb(props) {
    let { children: children, navigate: navigate } = props;
    let ctx = (0, $12uGp$useMemo)(()=>({
            isNative: false,
            open: (target, modifiers)=>{
                $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link)=>{
                    if ($ea8dcbcb9ea1b556$export$efa8c9099e530235(link, modifiers)) navigate(link.pathname + link.search + link.hash);
                    else $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers);
                });
            }
        }), [
        navigate
    ]);
    return /*#__PURE__*/ (0, $12uGp$react).createElement($ea8dcbcb9ea1b556$var$RouterContext.Provider, {
        value: ctx
    }, children);
}
function $ea8dcbcb9ea1b556$export$9a302a45f65d0572() {
    return (0, $12uGp$useContext)($ea8dcbcb9ea1b556$var$RouterContext);
}
function $ea8dcbcb9ea1b556$export$efa8c9099e530235(link, modifiers) {
    // Use getAttribute here instead of link.target. Firefox will default link.target to "_parent" when inside an iframe.
    let target = link.getAttribute("target");
    return (!target || target === "_self") && link.origin === location.origin && !link.hasAttribute("download") && !modifiers.metaKey && // open in new tab (mac)
    !modifiers.ctrlKey && // open in new tab (windows)
    !modifiers.altKey && // download
    !modifiers.shiftKey;
}
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
    var _window_event_type, _window_event;
    let { metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, shiftKey: shiftKey } = modifiers;
    // Firefox does not recognize keyboard events as a user action by default, and the popup blocker
    // will prevent links with target="_blank" from opening. However, it does allow the event if the
    // Command/Control key is held, which opens the link in a background tab. This seems like the best we can do.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=257870 and https://bugzilla.mozilla.org/show_bug.cgi?id=746640.
    if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
        if ((0, $c87311424ea30a05$export$9ac100e40613ea10)()) metaKey = true;
        else ctrlKey = true;
    }
    // WebKit does not support firing click events with modifier keys, but does support keyboard events.
    // https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
    let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
        keyIdentifier: "Enter",
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey
    }) : new MouseEvent("click", {
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey,
        bubbles: true,
        cancelable: true
    });
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
    (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
    target.dispatchEvent(event);
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
// https://github.com/parcel-bundler/parcel/issues/8724
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
    if (target instanceof HTMLAnchorElement) open(target);
    else if (target.hasAttribute("data-href")) {
        let link = document.createElement("a");
        link.href = target.getAttribute("data-href");
        if (target.hasAttribute("data-target")) link.target = target.getAttribute("data-target");
        if (target.hasAttribute("data-rel")) link.rel = target.getAttribute("data-rel");
        if (target.hasAttribute("data-download")) link.download = target.getAttribute("data-download");
        if (target.hasAttribute("data-ping")) link.ping = target.getAttribute("data-ping");
        if (target.hasAttribute("data-referrer-policy")) link.referrerPolicy = target.getAttribute("data-referrer-policy");
        target.appendChild(link);
        open(link);
        target.removeChild(link);
    }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
    $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link)=>$ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}
function $ea8dcbcb9ea1b556$export$51437d503373d223(props) {
    return {
        "data-href": props.href,
        "data-target": props.target,
        "data-rel": props.rel,
        "data-download": props.download,
        "data-ping": props.ping,
        "data-referrer-policy": props.referrerPolicy
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === "undefined") return;
    let onTransitionStart = (e)=>{
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener("transitioncancel", onTransitionEnd);
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener("transitioncancel", onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener("transitionrun", onTransitionStart);
    document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
    if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rulesdir/pure-render */ 

// Keep track of elements that we are currently handling dragging for via useDrag1D.
// If there's an ancestor and a descendant both using useDrag1D(), and the user starts
// dragging the descendant, we don't want useDrag1D events to fire for the ancestor.
const $9cc09df9fd7676be$var$draggingElements = (/* unused pure expression or super */ null && ([]));
function $9cc09df9fd7676be$export$7bbed75feba39706(props) {
    console.warn("useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html");
    let { containerRef: containerRef, reverse: reverse, orientation: orientation, onHover: onHover, onDrag: onDrag, onPositionChange: onPositionChange, onIncrement: onIncrement, onDecrement: onDecrement, onIncrementToMax: onIncrementToMax, onDecrementToMin: onDecrementToMin, onCollapseToggle: onCollapseToggle } = props;
    let getPosition = (e)=>orientation === "horizontal" ? e.clientX : e.clientY;
    let getNextOffset = (e)=>{
        let containerOffset = (0, $ab71dadb03a6fb2e$export$622cea445a1c5b7d)(containerRef.current, reverse, orientation);
        let mouseOffset = getPosition(e);
        let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
        return nextOffset;
    };
    let dragging = (0, $12uGp$useRef)(false);
    let prevPosition = (0, $12uGp$useRef)(0);
    // Keep track of the current handlers in a ref so that the events can access them.
    let handlers = (0, $12uGp$useRef)({
        onPositionChange: onPositionChange,
        onDrag: onDrag
    });
    handlers.current.onDrag = onDrag;
    handlers.current.onPositionChange = onPositionChange;
    let onMouseDragged = (e)=>{
        e.preventDefault();
        let nextOffset = getNextOffset(e);
        if (!dragging.current) {
            dragging.current = true;
            if (handlers.current.onDrag) handlers.current.onDrag(true);
            if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        }
        if (prevPosition.current === nextOffset) return;
        prevPosition.current = nextOffset;
        if (onPositionChange) onPositionChange(nextOffset);
    };
    let onMouseUp = (e)=>{
        const target = e.target;
        dragging.current = false;
        let nextOffset = getNextOffset(e);
        if (handlers.current.onDrag) handlers.current.onDrag(false);
        if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        $9cc09df9fd7676be$var$draggingElements.splice($9cc09df9fd7676be$var$draggingElements.indexOf(target), 1);
        window.removeEventListener("mouseup", onMouseUp, false);
        window.removeEventListener("mousemove", onMouseDragged, false);
    };
    let onMouseDown = (e)=>{
        const target = e.currentTarget;
        // If we're already handling dragging on a descendant with useDrag1D, then
        // we don't want to handle the drag motion on this target as well.
        if ($9cc09df9fd7676be$var$draggingElements.some((elt)=>target.contains(elt))) return;
        $9cc09df9fd7676be$var$draggingElements.push(target);
        window.addEventListener("mousemove", onMouseDragged, false);
        window.addEventListener("mouseup", onMouseUp, false);
    };
    let onMouseEnter = ()=>{
        if (onHover) onHover(true);
    };
    let onMouseOut = ()=>{
        if (onHover) onHover(false);
    };
    let onKeyDown = (e)=>{
        switch(e.key){
            case "Left":
            case "ArrowLeft":
                if (orientation === "horizontal") {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case "Up":
            case "ArrowUp":
                if (orientation === "vertical") {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case "Right":
            case "ArrowRight":
                if (orientation === "horizontal") {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case "Down":
            case "ArrowDown":
                if (orientation === "vertical") {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case "Home":
                e.preventDefault();
                if (onDecrementToMin) onDecrementToMin();
                break;
            case "End":
                e.preventDefault();
                if (onIncrementToMax) onIncrementToMax();
                break;
            case "Enter":
                e.preventDefault();
                if (onCollapseToggle) onCollapseToggle();
                break;
        }
    };
    return {
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseOut: onMouseOut,
        onKeyDown: onKeyDown
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, react.useRef)(new Map());
    let addGlobalListener = (0, react.useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, listener, options);
    }, []);
    let removeGlobalListener = (0, react.useCallback)((eventTarget, type, listener, options)=>{
        var _globalListeners_current_get;
        let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, react.useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    // eslint-disable-next-line arrow-body-style
    (0, react.useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id, "aria-label": label, "aria-labelledby": labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, $bdb11010cef70236$export$f680877a34711e37)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(" ");
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(" ");
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        "aria-label": label,
        "aria-labelledby": labelledBy
    };
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
    const objRef = (0, react.useRef)();
    return (0, react.useMemo)(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (typeof forwardedRef === "function") forwardedRef(value);
                else if (forwardedRef) forwardedRef.current = value;
            }
        }), [
        forwardedRef
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
    const isInitialMount = (0, $12uGp$useRef)(true);
    const lastDeps = (0, $12uGp$useRef)(null);
    (0, $12uGp$useEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, $12uGp$useEffect)(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!lastDeps.current || dependencies.some((dep, i)=>!Object.is(dep, lastDeps[i]))) effect();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}




function $9daab02d461809db$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== "undefined";
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
    const { ref: ref, onResize: onResize } = options;
    (0, $12uGp$useEffect)(()=>{
        let element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) return;
        if (!$9daab02d461809db$var$hasResizeObserver()) {
            window.addEventListener("resize", onResize, false);
            return ()=>{
                window.removeEventListener("resize", onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element);
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                context.ref.current = null;
            };
        }
    });
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $62d8ded9296f3872$export$cfa2225e87938781(node) {
    if ($62d8ded9296f3872$export$2bb74740c4e19def(node)) node = node.parentElement;
    while(node && !$62d8ded9296f3872$export$2bb74740c4e19def(node))node = node.parentElement;
    return node || document.scrollingElement || document.documentElement;
}
function $62d8ded9296f3872$export$2bb74740c4e19def(node) {
    let style = window.getComputedStyle(node);
    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

// @ts-ignore
let $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
function $5df64b3807dc15ee$export$d699905dd57c73ca() {
    let isSSR = (0, $12uGp$useIsSSR)();
    let [size, setSize] = (0, $12uGp$useState)(()=>isSSR ? {
            width: 0,
            height: 0
        } : $5df64b3807dc15ee$var$getViewportSize());
    (0, $12uGp$useEffect)(()=>{
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            setSize((size)=>{
                let newSize = $5df64b3807dc15ee$var$getViewportSize();
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        if (!$5df64b3807dc15ee$var$visualViewport) window.addEventListener("resize", onResize);
        else $5df64b3807dc15ee$var$visualViewport.addEventListener("resize", onResize);
        return ()=>{
            if (!$5df64b3807dc15ee$var$visualViewport) window.removeEventListener("resize", onResize);
            else $5df64b3807dc15ee$var$visualViewport.removeEventListener("resize", onResize);
        };
    }, []);
    return size;
}
function $5df64b3807dc15ee$var$getViewportSize() {
    return {
        width: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.width) || window.innerWidth,
        height: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.height) || window.innerHeight
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (0, $12uGp$useState)(undefined);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement("div");
            node.id = id;
            node.style.display = "none";
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (--desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        "aria-describedby": description ? id : undefined
    };
}



/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(handler);
    let isDisabled = handler == null;
    (0, $12uGp$useEffect)(()=>{
        if (isDisabled) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled,
        handleEvent
    ]);
}



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "left");
    let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "top");
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    // Account for top/left border offsetting the scroll top/Left
    let { borderTopWidth: borderTopWidth, borderLeftWidth: borderLeftWidth } = getComputedStyle(scrollView);
    let borderAdjustedX = scrollView.scrollLeft + parseInt(borderLeftWidth, 10);
    let borderAdjustedY = scrollView.scrollTop + parseInt(borderTopWidth, 10);
    // Ignore end/bottom border via clientHeight/Width instead of offsetHeight/Width
    let maxX = borderAdjustedX + scrollView.clientWidth;
    let maxY = borderAdjustedY + scrollView.clientHeight;
    if (offsetX <= x) x = offsetX - parseInt(borderLeftWidth, 10);
    else if (offsetX + width > maxX) x += offsetX + width - maxX;
    if (offsetY <= borderAdjustedY) y = offsetY - parseInt(borderTopWidth, 10);
    else if (offsetY + height > maxY) y += offsetY + height - maxY;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === "left" ? "offsetLeft" : "offsetTop";
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}
function $2f04cbc44ee30ce0$export$c826860796309d1b(targetElement, opts) {
    if (document.contains(targetElement)) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === "hidden";
        // If scrolling is not currently prevented then we aren’t in a overlay nor is a overlay open, just use element.scrollIntoView to bring the element into view
        if (!isScrollPrevented) {
            var // use scrollIntoView({block: 'nearest'}) instead of .focus to check if the element is fully in view or not since .focus()
            // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            _targetElement_scrollIntoView;
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            targetElement === null || targetElement === void 0 ? void 0 : (_targetElement_scrollIntoView = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView === void 0 ? void 0 : _targetElement_scrollIntoView.call(targetElement, {
                block: "nearest"
            });
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                var _opts_containingElement_scrollIntoView, _opts_containingElement, _targetElement_scrollIntoView1;
                opts === null || opts === void 0 ? void 0 : (_opts_containingElement = opts.containingElement) === null || _opts_containingElement === void 0 ? void 0 : (_opts_containingElement_scrollIntoView = _opts_containingElement.scrollIntoView) === null || _opts_containingElement_scrollIntoView === void 0 ? void 0 : _opts_containingElement_scrollIntoView.call(_opts_containingElement, {
                    block: "center",
                    inline: "center"
                });
                (_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 ? void 0 : _targetElement_scrollIntoView1.call(targetElement, {
                    block: "nearest"
                });
            }
        } else {
            let scrollParent = (0, $62d8ded9296f3872$export$cfa2225e87938781)(targetElement);
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            while(targetElement && scrollParent && targetElement !== root && scrollParent !== root){
                $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, targetElement);
                targetElement = scrollParent;
                scrollParent = (0, $62d8ded9296f3872$export$cfa2225e87938781)(targetElement);
            }
        }
    }
}



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $6a7db85432448f7f$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}



/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rulesdir/pure-render */ 
function $5a387cc49350e6db$export$722debc0e56fea39(value, isEqual) {
    // Using a ref during render is ok here because it's only an optimization – both values are equivalent.
    // If a render is thrown away, it'll still work the same no matter if the next render is the same or not.
    let lastValue = (0, $12uGp$useRef)(null);
    if (value && lastValue.current && isEqual(value, lastValue.current)) value = lastValue.current;
    lastValue.current = value;
    return value;
}


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $99facab73266f662$export$5add1d006293d136(ref, initialValue, onReset) {
    let resetValue = (0, react.useRef)(initialValue);
    let handleReset = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        if (onReset) onReset(resetValue.current);
    });
    (0, react.useEffect)(()=>{
        var _ref_current;
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        form === null || form === void 0 ? void 0 : form.addEventListener("reset", handleReset);
        return ()=>{
            form === null || form === void 0 ? void 0 : form.removeEventListener("reset", handleReset);
        };
    }, [
        ref,
        handleReset
    ]);
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.3/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);

    return descriptor.value;
}


;// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.3/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");

    return privateMap.get(receiver);
}


;// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.3/node_modules/@swc/helpers/esm/_class_private_field_get.js



function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}


;// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.3/node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}


;// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.3/node_modules/@swc/helpers/esm/_class_private_field_init.js


function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}


;// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.3/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}


;// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.3/node_modules/@swc/helpers/esm/_class_private_field_set.js



function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}


;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-aria+interactions@3.20.0_react@18.2.0/node_modules/@react-aria/interactions/dist/import.mjs







/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let $14c0b72509d70225$var$state = "default";
let $14c0b72509d70225$var$savedUserSelect = "";
let $14c0b72509d70225$var$modifiedElementMap = new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
    if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
        if ($14c0b72509d70225$var$state === "default") {
            // eslint-disable-next-line no-restricted-globals
            const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
            $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
            documentObject.documentElement.style.webkitUserSelect = "none";
        }
        $14c0b72509d70225$var$state = "disabled";
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
        target.style.userSelect = "none";
    }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
    if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if ($14c0b72509d70225$var$state !== "disabled") return;
        $14c0b72509d70225$var$state = "restoring";
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            (0, $bbed8b41f857bcc0$export$24490316f764c430)(()=>{
                // Avoid race conditions
                if ($14c0b72509d70225$var$state === "restoring") {
                    // eslint-disable-next-line no-restricted-globals
                    const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
                    if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
                    $14c0b72509d70225$var$savedUserSelect = "";
                    $14c0b72509d70225$var$state = "default";
                }
            });
        }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    {
        if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
            let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
            if (target.style.userSelect === "none" && targetOldUserSelect) target.style.userSelect = targetOldUserSelect;
            if (target.getAttribute("style") === "") target.removeAttribute("style");
            $14c0b72509d70225$var$modifiedElementMap.delete(target);
        }
    }
}



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, react).createContext({
    register: ()=>{}
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";



function $f6c31cce2adf654f$var$usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = (0, react.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
    if (context) {
        let { register: register, ...contextProps } = context;
        props = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
        register();
    }
    (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, props.ref);
    return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /*#__PURE__*/ new WeakMap();
class $f6c31cce2adf654f$var$PressEvent {
    continuePropagation() {
        (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
    }
    get shouldStopPropagation() {
        return (0, _class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
    }
    constructor(type, pointerType, originalEvent){
        (0, _class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
            writable: true,
            value: void 0
        });
        (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
        this.type = type;
        this.pointerType = pointerType;
        this.target = originalEvent.currentTarget;
        this.shiftKey = originalEvent.shiftKey;
        this.metaKey = originalEvent.metaKey;
        this.ctrlKey = originalEvent.ctrlKey;
        this.altKey = originalEvent.altKey;
    }
}
const $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
    let { onPress: onPress, onPressChange: onPressChange, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, isDisabled: isDisabled, isPressed: isPressedProp, preventFocusOnPress: preventFocusOnPress, shouldCancelOnPointerExit: shouldCancelOnPointerExit, allowTextSelectionOnPress: allowTextSelectionOnPress, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _, ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
    let [isPressed, setPressed] = (0, react.useState)(false);
    let ref = (0, react.useRef)({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        ignoreClickAfterPress: false,
        didFirePressStart: false,
        isTriggeringEvent: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    let triggerPressStart = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled || state.didFirePressStart) return false;
        let shouldStopPropagation = true;
        state.isTriggeringEvent = true;
        if (onPressStart) {
            let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
            onPressStart(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(true);
        state.isTriggeringEvent = false;
        state.didFirePressStart = true;
        setPressed(true);
        return shouldStopPropagation;
    });
    let triggerPressEnd = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType, wasPressed = true)=>{
        let state = ref.current;
        if (!state.didFirePressStart) return false;
        state.ignoreClickAfterPress = true;
        state.didFirePressStart = false;
        state.isTriggeringEvent = true;
        let shouldStopPropagation = true;
        if (onPressEnd) {
            let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
            onPressEnd(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(false);
        setPressed(false);
        if (onPress && wasPressed && !isDisabled) {
            let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
            onPress(event);
            shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
        }
        state.isTriggeringEvent = false;
        return shouldStopPropagation;
    });
    let triggerPressUp = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled) return false;
        if (onPressUp) {
            state.isTriggeringEvent = true;
            let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
            onPressUp(event);
            state.isTriggeringEvent = false;
            return event.shouldStopPropagation;
        }
        return true;
    });
    let cancel = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
        let state = ref.current;
        if (state.isPressed && state.target) {
            if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
            state.isPressed = false;
            state.isOverTarget = false;
            state.activePointerId = null;
            state.pointerType = null;
            removeAllGlobalListeners();
            if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        }
    });
    let cancelOnPointerExit = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
        if (shouldCancelOnPointerExit) cancel(e);
    });
    let pressProps = (0, react.useMemo)(()=>{
        let state = ref.current;
        let pressProps = {
            onKeyDown (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && e.currentTarget.contains(e.target)) {
                    var _state_metaKeyEvents;
                    if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    let shouldStopPropagation = true;
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        shouldStopPropagation = triggerPressStart(e, "keyboard");
                        // Focus may move before the key up event, so register the event on the document
                        // instead of the same element where the key down event occurred.
                        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), "keyup", onKeyUp, false);
                    }
                    if (shouldStopPropagation) e.stopPropagation();
                    // Keep track of the keydown events that occur while the Meta (e.g. Command) key is held.
                    // macOS has a bug where keyup events are not fired while the Meta key is down.
                    // When the Meta key itself is released we will get an event for that, and we'll act as if
                    // all of these other keys were released as well.
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1393524
                    // https://bugs.webkit.org/show_bug.cgi?id=55291
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=1299553
                    if (e.metaKey && (0, $c87311424ea30a05$export$9ac100e40613ea10)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e.key, e.nativeEvent);
                } else if (e.key === "Meta") state.metaKeyEvents = new Map();
            },
            onKeyUp (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && !e.repeat && e.currentTarget.contains(e.target) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard");
            },
            onClick (e) {
                if (e && !e.currentTarget.contains(e.target)) return;
                if (e && e.button === 0 && !state.isTriggeringEvent && !(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening) {
                    let shouldStopPropagation = true;
                    if (isDisabled) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0, $6a7db85432448f7f$export$60278871457622de)(e.nativeEvent))) {
                        // Ensure the element receives focus (VoiceOver on iOS does not do this)
                        if (!isDisabled && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e.currentTarget);
                        let stopPressStart = triggerPressStart(e, "virtual");
                        let stopPressUp = triggerPressUp(e, "virtual");
                        let stopPressEnd = triggerPressEnd(e, "virtual");
                        shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    state.ignoreClickAfterPress = false;
                    if (shouldStopPropagation) e.stopPropagation();
                }
            }
        };
        let onKeyUp = (e)=>{
            var _state_metaKeyEvents;
            if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
                var _state_metaKeyEvents1;
                if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
                let target = e.target;
                let shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard", state.target.contains(target));
                removeAllGlobalListeners();
                if (shouldStopPropagation) e.stopPropagation();
                // If a link was triggered with a key other than Enter, open the URL ourselves.
                // This means the link has a role override, and the default browser behavior
                // only applies when using the Enter key.
                if (e.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && state.target.contains(target) && !e[$f6c31cce2adf654f$var$LINK_CLICKED]) {
                    // Store a hidden property on the event so we only trigger link click once,
                    // even if there are multiple usePress instances attached to the element.
                    e[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
                    (0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7)(state.target, e, false);
                }
                state.isPressed = false;
                (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e.key);
            } else if (e.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
                var _state_target;
                // If we recorded keydown events that occurred while the Meta key was pressed,
                // and those haven't received keyup events already, fire keyup events ourselves.
                // See comment above for more info about the macOS bug causing this.
                let events = state.metaKeyEvents;
                state.metaKeyEvents = undefined;
                for (let event of events.values())(_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
            }
        };
        if (typeof PointerEvent !== "undefined") {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if ((0, $6a7db85432448f7f$export$29bf1b5f2c56cf63)(e.nativeEvent)) {
                    state.pointerType = "virtual";
                    return;
                }
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on pointer down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                state.pointerType = e.pointerType;
                let shouldStopPropagation = true;
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!isDisabled && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e.currentTarget);
                    if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), "pointermove", onPointerMove, false);
                    addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), "pointerup", onPointerUp, false);
                    addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), "pointercancel", onPointerCancel, false);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseDown = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (e.button === 0) {
                    // Chrome and Firefox on touch Windows devices require mouse down events
                    // to be canceled in addition to pointer events, or an extra asynchronous
                    // focus event will be fired.
                    if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!e.currentTarget.contains(e.target) || state.pointerType === "virtual") return;
                // Only handle left clicks
                // Safari on iOS sometimes fires pointerup events, even
                // when the touch isn't over the target, so double check.
                if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
            };
            // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
            // Use pointer move events instead to implement our own hit testing.
            // See https://bugs.webkit.org/show_bug.cgi?id=199803
            let onPointerMove = (e)=>{
                if (e.pointerId !== state.activePointerId) return;
                if (state.target && $f6c31cce2adf654f$var$isOverTarget(e, state.target)) {
                    if (!state.isOverTarget && state.pointerType != null) {
                        state.isOverTarget = true;
                        triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    }
                } else if (state.target && state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
                    if ($f6c31cce2adf654f$var$isOverTarget(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    else if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    state.isPressed = false;
                    state.isOverTarget = false;
                    state.activePointerId = null;
                    state.pointerType = null;
                    removeAllGlobalListeners();
                    if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                }
            };
            let onPointerCancel = (e)=>{
                cancel(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancel(e);
            };
        } else {
            pressProps.onMouseDown = (e)=>{
                // Only handle left clicks
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on mouse down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                if (state.ignoreEmulatedMouseEvents) {
                    e.stopPropagation();
                    return;
                }
                state.isPressed = true;
                state.isOverTarget = true;
                state.target = e.currentTarget;
                state.pointerType = (0, $6a7db85432448f7f$export$60278871457622de)(e.nativeEvent) ? "virtual" : "mouse";
                if (!isDisabled && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e.currentTarget);
                let shouldStopPropagation = triggerPressStart(e, state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), "mouseup", onMouseUp, false);
            };
            pressProps.onMouseEnter = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                    state.isOverTarget = true;
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseLeave = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                    cancelOnPointerExit(e);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseUp = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType || "mouse");
            };
            let onMouseUp = (e)=>{
                // Only handle left clicks
                if (e.button !== 0) return;
                state.isPressed = false;
                removeAllGlobalListeners();
                if (state.ignoreEmulatedMouseEvents) {
                    state.ignoreEmulatedMouseEvents = false;
                    return;
                }
                if (state.target && $f6c31cce2adf654f$var$isOverTarget(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                else if (state.target && state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                state.isOverTarget = false;
            };
            pressProps.onTouchStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
                if (!touch) return;
                state.activePointerId = touch.identifier;
                state.ignoreEmulatedMouseEvents = true;
                state.isOverTarget = true;
                state.isPressed = true;
                state.target = e.currentTarget;
                state.pointerType = "touch";
                // Due to browser inconsistencies, especially on mobile browsers, we prevent default
                // on the emulated mouse event and handle focusing the pressable element ourselves.
                if (!isDisabled && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e.currentTarget);
                if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
                let shouldStopPropagation = triggerPressStart(e, state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e.currentTarget), "scroll", onScroll, true);
            };
            pressProps.onTouchMove = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    if (!state.isOverTarget && state.pointerType != null) {
                        state.isOverTarget = true;
                        shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    }
                } else if (state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                    cancelOnPointerExit(e);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onTouchEnd = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget) && state.pointerType != null) {
                    triggerPressUp(e, state.pointerType);
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType);
                } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                if (shouldStopPropagation) e.stopPropagation();
                state.isPressed = false;
                state.activePointerId = null;
                state.isOverTarget = false;
                state.ignoreEmulatedMouseEvents = true;
                if (state.target && !allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                removeAllGlobalListeners();
            };
            pressProps.onTouchCancel = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed) cancel(e);
            };
            let onScroll = (e)=>{
                if (state.isPressed && e.target.contains(state.target)) cancel({
                    currentTarget: state.target,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false,
                    altKey: false
                });
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                cancel(e);
            };
        }
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress,
        cancel,
        cancelOnPointerExit,
        triggerPressEnd,
        triggerPressStart,
        triggerPressUp
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    // eslint-disable-next-line arrow-body-style
    (0, react.useEffect)(()=>{
        return ()=>{
            var _ref_current_target;
            if (!allowTextSelectionOnPress) // eslint-disable-next-line react-hooks/exhaustive-deps
            (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : undefined);
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        pressProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, pressProps)
    };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
    return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
    const { key: key, code: code } = event;
    const element = currentTarget;
    const role = element.getAttribute("role");
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
    !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
    const { targetTouches: targetTouches } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey
    };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
    let offsetX = 0;
    let offsetY = 0;
    if (point.width !== undefined) offsetX = point.width / 2;
    else if (point.radiusX !== undefined) offsetX = point.radiusX;
    if (point.height !== undefined) offsetY = point.height / 2;
    else if (point.radiusY !== undefined) offsetY = point.radiusY;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
    return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
    // We cannot prevent default if the target is a draggable element.
    return !(target instanceof HTMLElement) || !target.hasAttribute("draggable");
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
    if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
    if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
    if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
    return true;
}
const $f6c31cce2adf654f$var$nonTextInputTypes = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
    // Only space should toggle checkboxes and radios, not enter.
    return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}



const $3b117e43dc0ca95d$export$27c701ed9e449e99 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $bx7SL$react).forwardRef(({ children: children, ...props }, ref)=>{
    ref = (0, $bx7SL$useObjectRef)(ref);
    let { pressProps: pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
        ...props,
        ref: ref
    });
    let child = (0, $bx7SL$react).Children.only(children);
    return /*#__PURE__*/ (0, $bx7SL$react).cloneElement(child, // @ts-ignore
    {
        ref: ref,
        ...(0, $bx7SL$mergeProps)(child.props, pressProps)
    });
})));


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $f1ab8c75478c6f73$export$3351871ee4b288b8 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $bx7SL$react).forwardRef(({ children: children, ...props }, ref)=>{
    let isRegistered = (0, $bx7SL$useRef)(false);
    let prevContext = (0, $bx7SL$useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
    ref = (0, $bx7SL$useObjectRef)(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
    let context = (0, $bx7SL$mergeProps)(prevContext || {}, {
        ...props,
        ref: ref,
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    (0, $bx7SL$useSyncRef)(prevContext, ref);
    (0, $bx7SL$useEffect)(()=>{
        if (!isRegistered.current) {
            console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
            isRegistered.current = true; // only warn once in strict mode.
        }
    }, []);
    return /*#__PURE__*/ (0, $bx7SL$react).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
        value: context
    }, children);
})));
function $f1ab8c75478c6f73$export$cf75428e0b9ed1ea({ children: children }) {
    let context = (0, $bx7SL$useMemo)(()=>({
            register: ()=>{}
        }), []);
    return /*#__PURE__*/ (0, $bx7SL$react).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
        value: context
    }, children);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

class $8a9cb279dc87e130$export$905e7fc544a71f36 {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        this.defaultPrevented = true;
        this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation();
        this.isPropagationStopped = ()=>true;
    }
    isPropagationStopped() {
        return false;
    }
    persist() {}
    constructor(type, nativeEvent){
        this.nativeEvent = nativeEvent;
        this.target = nativeEvent.target;
        this.currentTarget = nativeEvent.currentTarget;
        this.relatedTarget = nativeEvent.relatedTarget;
        this.bubbles = nativeEvent.bubbles;
        this.cancelable = nativeEvent.cancelable;
        this.defaultPrevented = nativeEvent.defaultPrevented;
        this.eventPhase = nativeEvent.eventPhase;
        this.isTrusted = nativeEvent.isTrusted;
        this.timeStamp = nativeEvent.timeStamp;
        this.type = type;
    }
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = (0, react.useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    // eslint-disable-next-line arrow-body-style
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    let dispatchBlur = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    });
    // This function is called during a React onFocus event.
    return (0, react.useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = e.target;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) // For backward compatibility, dispatch a (fake) React synthetic event.
                dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e));
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener("focusout", onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    var _stateRef_current_observer;
                    (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
                    let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
                    target.dispatchEvent(new FocusEvent("blur", {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent("focusout", {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    "disabled"
                ]
            });
        }
    }, [
        dispatchBlur
    ]);
}


function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled: isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange: onFocusChange } = props;
    const onBlur = (0, react.useCallback)((e)=>{
        if (e.target === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    const onFocus = (0, react.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        if (e.target === e.currentTarget && document.activeElement === e.target) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$var$hasSetupGlobalListeners = false;
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $507fabe10e71c6fb$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e)) {
        $507fabe10e71c6fb$var$currentModality = "keyboard";
        $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e);
    }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
    $507fabe10e71c6fb$var$currentModality = "pointer";
    if (e.type === "mousedown" || e.type === "pointerdown") {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e);
    }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
    if ((0, $6a7db85432448f7f$export$60278871457622de)(e)) {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$currentModality = "virtual";
    }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
        $507fabe10e71c6fb$var$currentModality = "virtual";
        $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents() {
    if (typeof window === "undefined" || $507fabe10e71c6fb$var$hasSetupGlobalListeners) return;
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function() {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    document.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    document.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    document.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    window.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
    window.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
        document.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        document.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$var$hasSetupGlobalListeners = true;
}
if (typeof document !== "undefined") {
    if (document.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    else document.addEventListener("DOMContentLoaded", $507fabe10e71c6fb$var$setupGlobalFocusEvents);
}
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
    return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
    $507fabe10e71c6fb$var$currentModality = modality;
    $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    let [modality, setModality] = (0, $bx7SL$useState)($507fabe10e71c6fb$var$currentModality);
    (0, $bx7SL$useEffect)(()=>{
        let handler = ()=>{
            setModality($507fabe10e71c6fb$var$currentModality);
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    }, []);
    return (0, $bx7SL$useIsSSR)() ? null : modality;
}
const $507fabe10e71c6fb$var$nonTextInputTypes = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
]);
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    var _e_target;
    isTextInput = isTextInput || (e === null || e === void 0 ? void 0 : e.target) instanceof HTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e === null || e === void 0 ? void 0 : (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e === null || e === void 0 ? void 0 : e.target) instanceof HTMLTextAreaElement || (e === null || e === void 0 ? void 0 : e.target) instanceof HTMLElement && (e === null || e === void 0 ? void 0 : e.target.isContentEditable);
    return !(isTextInput && modality === "keyboard" && e instanceof KeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {}) {
    let { isTextInput: isTextInput, autoFocus: autoFocus } = props;
    let [isFocusVisibleState, setFocusVisible] = (0, $bx7SL$useState)(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
    $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible)=>{
        setFocusVisible(isFocusVisible);
    }, [
        isTextInput
    ], {
        isTextInput: isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    (0, react.useEffect)(()=>{
        let handler = (modality, e)=>{
            if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e)) return;
            fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled, onBlurWithin: onBlurWithin, onFocusWithin: onFocusWithin, onFocusWithinChange: onFocusWithinChange } = props;
    let state = (0, react.useRef)({
        isFocusWithin: false
    });
    let onBlur = (0, react.useCallback)((e)=>{
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            state.current.isFocusWithin = false;
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state
    ]);
    let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    let onFocus = (0, react.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        if (!state.current.isFocusWithin && document.activeElement === e.target) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            // These should not have been null, that would conflict in mergeProps
            onFocus: undefined,
            onBlur: undefined
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === "undefined") return;
    if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    $6179b936705e76d3$var$hoverCount++;
    return ()=>{
        $6179b936705e76d3$var$hoverCount--;
        if ($6179b936705e76d3$var$hoverCount > 0) return;
        if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
        else document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, isDisabled: isDisabled } = props;
    let [isHovered, setHovered] = (0, react.useState)(false);
    let state = (0, react.useRef)({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: "",
        target: null
    }).current;
    (0, react.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { hoverProps: hoverProps, triggerHoverEnd: triggerHoverEnd } = (0, react.useMemo)(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            if (onHoverStart) onHoverStart({
                type: "hoverstart",
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            state.pointerType = "";
            state.target = null;
            if (pointerType === "touch" || !state.isHovered) return;
            state.isHovered = false;
            let target = event.currentTarget;
            if (onHoverEnd) onHoverEnd({
                type: "hoverend",
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {};
        if (typeof PointerEvent !== "undefined") {
            hoverProps.onPointerEnter = (e)=>{
                if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
            };
        } else {
            hoverProps.onTouchStart = ()=>{
                state.ignoreEmulatedMouseEvents = true;
            };
            hoverProps.onMouseEnter = (e)=>{
                if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, "mouse");
                state.ignoreEmulatedMouseEvents = false;
            };
            hoverProps.onMouseLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, "mouse");
            };
        }
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state
    ]);
    (0, react.useEffect)(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd({
            currentTarget: state.target
        }, state.pointerType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps,
        isHovered: isHovered
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
    let { ref: ref, onInteractOutside: onInteractOutside, isDisabled: isDisabled, onInteractOutsideStart: onInteractOutsideStart } = props;
    let stateRef = (0, $bx7SL$useRef)({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    let onPointerDown = (0, $bx7SL$useEffectEvent)((e)=>{
        if (onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
            if (onInteractOutsideStart) onInteractOutsideStart(e);
            stateRef.current.isPointerDown = true;
        }
    });
    let triggerInteractOutside = (0, $bx7SL$useEffectEvent)((e)=>{
        if (onInteractOutside) onInteractOutside(e);
    });
    (0, $bx7SL$useEffect)(()=>{
        let state = stateRef.current;
        if (isDisabled) return;
        const element = ref.current;
        const documentObject = (0, $bx7SL$getOwnerDocument)(element);
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== "undefined") {
            let onPointerUp = (e)=>{
                if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            // changing these to capture phase fixed combobox
            documentObject.addEventListener("pointerdown", onPointerDown, true);
            documentObject.addEventListener("pointerup", onPointerUp, true);
            return ()=>{
                documentObject.removeEventListener("pointerdown", onPointerDown, true);
                documentObject.removeEventListener("pointerup", onPointerUp, true);
            };
        } else {
            let onMouseUp = (e)=>{
                if (state.ignoreEmulatedMouseEvents) state.ignoreEmulatedMouseEvents = false;
                else if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            let onTouchEnd = (e)=>{
                state.ignoreEmulatedMouseEvents = true;
                if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            documentObject.addEventListener("mousedown", onPointerDown, true);
            documentObject.addEventListener("mouseup", onMouseUp, true);
            documentObject.addEventListener("touchstart", onPointerDown, true);
            documentObject.addEventListener("touchend", onTouchEnd, true);
            return ()=>{
                documentObject.removeEventListener("mousedown", onPointerDown, true);
                documentObject.removeEventListener("mouseup", onMouseUp, true);
                documentObject.removeEventListener("touchstart", onPointerDown, true);
                documentObject.removeEventListener("touchend", onTouchEnd, true);
            };
        }
    }, [
        ref,
        isDisabled,
        onPointerDown,
        triggerInteractOutside
    ]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
    if (event.button > 0) return false;
    if (event.target) {
        // if the event target is no longer in the document, ignore
        const ownerDocument = event.target.ownerDocument;
        if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) return false;
        // If the target is within a top layer element (e.g. toasts), ignore.
        if (event.target.closest("[data-react-aria-top-layer]")) return false;
    }
    return ref.current && !ref.current.contains(event.target);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $93925083ecbb358c$export$48d1ea6320830260(handler) {
    if (!handler) return undefined;
    let shouldStopPropagation = true;
    return (e)=>{
        let event = {
            ...e,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
            },
            continuePropagation () {
                shouldStopPropagation = false;
            }
        };
        handler(event);
        if (shouldStopPropagation) e.stopPropagation();
    };
}


function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
    return {
        keyboardProps: props.isDisabled ? {} : {
            onKeyDown: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyDown),
            onKeyUp: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyUp)
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $e8a7022cf87cba2a$export$36da96379f79f245(props) {
    let { onMoveStart: onMoveStart, onMove: onMove, onMoveEnd: onMoveEnd } = props;
    let state = (0, $bx7SL$useRef)({
        didMove: false,
        lastPosition: null,
        id: null
    });
    let { addGlobalListener: addGlobalListener, removeGlobalListener: removeGlobalListener } = (0, $bx7SL$useGlobalListeners)();
    let move = (0, $bx7SL$useEffectEvent)((originalEvent, pointerType, deltaX, deltaY)=>{
        if (deltaX === 0 && deltaY === 0) return;
        if (!state.current.didMove) {
            state.current.didMove = true;
            onMoveStart === null || onMoveStart === void 0 ? void 0 : onMoveStart({
                type: "movestart",
                pointerType: pointerType,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        }
        onMove === null || onMove === void 0 ? void 0 : onMove({
            type: "move",
            pointerType: pointerType,
            deltaX: deltaX,
            deltaY: deltaY,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    });
    let end = (0, $bx7SL$useEffectEvent)((originalEvent, pointerType)=>{
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)();
        if (state.current.didMove) onMoveEnd === null || onMoveEnd === void 0 ? void 0 : onMoveEnd({
            type: "moveend",
            pointerType: pointerType,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    });
    let moveProps = (0, $bx7SL$useMemo)(()=>{
        let moveProps = {};
        let start = ()=>{
            (0, $14c0b72509d70225$export$16a4697467175487)();
            state.current.didMove = false;
        };
        if (typeof PointerEvent === "undefined") {
            let onMouseMove = (e)=>{
                if (e.button === 0) {
                    var _state_current_lastPosition, _state_current_lastPosition1;
                    var _state_current_lastPosition_pageX, _state_current_lastPosition_pageY;
                    move(e, "mouse", e.pageX - ((_state_current_lastPosition_pageX = (_state_current_lastPosition = state.current.lastPosition) === null || _state_current_lastPosition === void 0 ? void 0 : _state_current_lastPosition.pageX) !== null && _state_current_lastPosition_pageX !== void 0 ? _state_current_lastPosition_pageX : 0), e.pageY - ((_state_current_lastPosition_pageY = (_state_current_lastPosition1 = state.current.lastPosition) === null || _state_current_lastPosition1 === void 0 ? void 0 : _state_current_lastPosition1.pageY) !== null && _state_current_lastPosition_pageY !== void 0 ? _state_current_lastPosition_pageY : 0));
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onMouseUp = (e)=>{
                if (e.button === 0) {
                    end(e, "mouse");
                    removeGlobalListener(window, "mousemove", onMouseMove, false);
                    removeGlobalListener(window, "mouseup", onMouseUp, false);
                }
            };
            moveProps.onMouseDown = (e)=>{
                if (e.button === 0) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    addGlobalListener(window, "mousemove", onMouseMove, false);
                    addGlobalListener(window, "mouseup", onMouseUp, false);
                }
            };
            let onTouchMove = (e)=>{
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier })=>identifier === state.current.id);
                if (touch >= 0) {
                    var _state_current_lastPosition, _state_current_lastPosition1;
                    let { pageX: pageX, pageY: pageY } = e.changedTouches[touch];
                    var _state_current_lastPosition_pageX, _state_current_lastPosition_pageY;
                    move(e, "touch", pageX - ((_state_current_lastPosition_pageX = (_state_current_lastPosition = state.current.lastPosition) === null || _state_current_lastPosition === void 0 ? void 0 : _state_current_lastPosition.pageX) !== null && _state_current_lastPosition_pageX !== void 0 ? _state_current_lastPosition_pageX : 0), pageY - ((_state_current_lastPosition_pageY = (_state_current_lastPosition1 = state.current.lastPosition) === null || _state_current_lastPosition1 === void 0 ? void 0 : _state_current_lastPosition1.pageY) !== null && _state_current_lastPosition_pageY !== void 0 ? _state_current_lastPosition_pageY : 0));
                    state.current.lastPosition = {
                        pageX: pageX,
                        pageY: pageY
                    };
                }
            };
            let onTouchEnd = (e)=>{
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier })=>identifier === state.current.id);
                if (touch >= 0) {
                    end(e, "touch");
                    state.current.id = null;
                    removeGlobalListener(window, "touchmove", onTouchMove);
                    removeGlobalListener(window, "touchend", onTouchEnd);
                    removeGlobalListener(window, "touchcancel", onTouchEnd);
                }
            };
            moveProps.onTouchStart = (e)=>{
                if (e.changedTouches.length === 0 || state.current.id != null) return;
                let { pageX: pageX, pageY: pageY, identifier: identifier } = e.changedTouches[0];
                start();
                e.stopPropagation();
                e.preventDefault();
                state.current.lastPosition = {
                    pageX: pageX,
                    pageY: pageY
                };
                state.current.id = identifier;
                addGlobalListener(window, "touchmove", onTouchMove, false);
                addGlobalListener(window, "touchend", onTouchEnd, false);
                addGlobalListener(window, "touchcancel", onTouchEnd, false);
            };
        } else {
            let onPointerMove = (e)=>{
                if (e.pointerId === state.current.id) {
                    var _state_current_lastPosition, _state_current_lastPosition1;
                    let pointerType = e.pointerType || "mouse";
                    var _state_current_lastPosition_pageX, _state_current_lastPosition_pageY;
                    // Problems with PointerEvent#movementX/movementY:
                    // 1. it is always 0 on macOS Safari.
                    // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS
                    move(e, pointerType, e.pageX - ((_state_current_lastPosition_pageX = (_state_current_lastPosition = state.current.lastPosition) === null || _state_current_lastPosition === void 0 ? void 0 : _state_current_lastPosition.pageX) !== null && _state_current_lastPosition_pageX !== void 0 ? _state_current_lastPosition_pageX : 0), e.pageY - ((_state_current_lastPosition_pageY = (_state_current_lastPosition1 = state.current.lastPosition) === null || _state_current_lastPosition1 === void 0 ? void 0 : _state_current_lastPosition1.pageY) !== null && _state_current_lastPosition_pageY !== void 0 ? _state_current_lastPosition_pageY : 0));
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || "mouse";
                    end(e, pointerType);
                    state.current.id = null;
                    removeGlobalListener(window, "pointermove", onPointerMove, false);
                    removeGlobalListener(window, "pointerup", onPointerUp, false);
                    removeGlobalListener(window, "pointercancel", onPointerUp, false);
                }
            };
            moveProps.onPointerDown = (e)=>{
                if (e.button === 0 && state.current.id == null) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    state.current.id = e.pointerId;
                    addGlobalListener(window, "pointermove", onPointerMove, false);
                    addGlobalListener(window, "pointerup", onPointerUp, false);
                    addGlobalListener(window, "pointercancel", onPointerUp, false);
                }
            };
        }
        let triggerKeyboardMove = (e, deltaX, deltaY)=>{
            start();
            move(e, "keyboard", deltaX, deltaY);
            end(e, "keyboard");
        };
        moveProps.onKeyDown = (e)=>{
            switch(e.key){
                case "Left":
                case "ArrowLeft":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, -1, 0);
                    break;
                case "Right":
                case "ArrowRight":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 1, 0);
                    break;
                case "Up":
                case "ArrowUp":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, -1);
                    break;
                case "Down":
                case "ArrowDown":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, 1);
                    break;
            }
        };
        return moveProps;
    }, [
        state,
        addGlobalListener,
        removeGlobalListener,
        move,
        end
    ]);
    return {
        moveProps: moveProps
    };
}



/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $7d0a636d7a4dcefd$export$2123ff2b87c81ca(props, ref) {
    let { onScroll: onScroll, isDisabled: isDisabled } = props;
    let onScrollHandler = (0, $bx7SL$useCallback)((e)=>{
        // If the ctrlKey is pressed, this is a zoom event, do nothing.
        if (e.ctrlKey) return;
        // stop scrolling the page
        e.preventDefault();
        e.stopPropagation();
        if (onScroll) onScroll({
            deltaX: e.deltaX,
            deltaY: e.deltaY
        });
    }, [
        onScroll
    ]);
    (0, $bx7SL$useEvent)(ref, "wheel", isDisabled ? undefined : onScrollHandler);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;
function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
    let { isDisabled: isDisabled, onLongPressStart: onLongPressStart, onLongPressEnd: onLongPressEnd, onLongPress: onLongPress, threshold: threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD, accessibilityDescription: accessibilityDescription } = props;
    const timeRef = (0, $bx7SL$useRef)();
    let { addGlobalListener: addGlobalListener, removeGlobalListener: removeGlobalListener } = (0, $bx7SL$useGlobalListeners)();
    let { pressProps: pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
        isDisabled: isDisabled,
        onPressStart (e) {
            e.continuePropagation();
            if (e.pointerType === "mouse" || e.pointerType === "touch") {
                if (onLongPressStart) onLongPressStart({
                    ...e,
                    type: "longpressstart"
                });
                timeRef.current = setTimeout(()=>{
                    // Prevent other usePress handlers from also handling this event.
                    e.target.dispatchEvent(new PointerEvent("pointercancel", {
                        bubbles: true
                    }));
                    if (onLongPress) onLongPress({
                        ...e,
                        type: "longpress"
                    });
                    timeRef.current = undefined;
                }, threshold);
                // Prevent context menu, which may be opened on long press on touch devices
                if (e.pointerType === "touch") {
                    let onContextMenu = (e)=>{
                        e.preventDefault();
                    };
                    addGlobalListener(e.target, "contextmenu", onContextMenu, {
                        once: true
                    });
                    addGlobalListener(window, "pointerup", ()=>{
                        // If no contextmenu event is fired quickly after pointerup, remove the handler
                        // so future context menu events outside a long press are not prevented.
                        setTimeout(()=>{
                            removeGlobalListener(e.target, "contextmenu", onContextMenu);
                        }, 30);
                    }, {
                        once: true
                    });
                }
            }
        },
        onPressEnd (e) {
            if (timeRef.current) clearTimeout(timeRef.current);
            if (onLongPressEnd && (e.pointerType === "mouse" || e.pointerType === "touch")) onLongPressEnd({
                ...e,
                type: "longpressend"
            });
        }
    });
    let descriptionProps = (0, $bx7SL$useDescription)(onLongPress && !isDisabled ? accessibilityDescription : undefined);
    return {
        longPressProps: (0, $bx7SL$mergeProps)(pressProps, descriptionProps)
    };
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-aria+focus@3.15.0_react@18.2.0/node_modules/@react-aria/focus/dist/import.mjs





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $6a99195332edec8b$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    if ((0, $507fabe10e71c6fb$export$630ff653c5ada6a9)() === "virtual") {
        let lastFocusedElement = document.activeElement;
        (0, $bbed8b41f857bcc0$export$24490316f764c430)(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if (document.activeElement === lastFocusedElement && document.contains(element)) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(element);
        });
    } else (0, $7215afc6de606d6b$export$de79e2c695e052f3)(element);
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $645f2e67b85a24c9$var$isStyleVisible(element) {
    if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) return false;
    let { display: display, visibility: visibility } = element.style;
    let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
    if (isVisible) {
        const { getComputedStyle: getComputedStyle } = element.ownerDocument.defaultView;
        let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
        isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
    }
    return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
    return element.nodeName !== "#comment" && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}




const $9bf71ea28793e738$var$FocusContext = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $6nfFC$react).createContext(null)));
let $9bf71ea28793e738$var$activeScope = null;
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
    let { children: children, contain: contain, restoreFocus: restoreFocus, autoFocus: autoFocus } = props;
    let startRef = (0, $6nfFC$useRef)(null);
    let endRef = (0, $6nfFC$useRef)(null);
    let scopeRef = (0, $6nfFC$useRef)([]);
    let { parentNode: parentNode } = (0, $6nfFC$useContext)($9bf71ea28793e738$var$FocusContext) || {};
    // Create a tree node here so we can add children to it even before it is added to the tree.
    let node = (0, $6nfFC$useMemo)(()=>new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        }), [
        scopeRef
    ]);
    (0, $6nfFC$useLayoutEffect)(()=>{
        // If a new scope mounts outside the active scope, (e.g. DialogContainer launched from a menu),
        // use the active scope as the parent instead of the parent from context. Layout effects run bottom
        // up, so if the parent is not yet added to the tree, don't do this. Only the outer-most FocusScope
        // that is being added should get the activeScope as its parent.
        let parent = parentNode || $9bf71ea28793e738$export$d06fae2ee68b101e.root;
        if ($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parent.scopeRef) && $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, parent.scopeRef)) {
            let activeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
            if (activeNode) parent = activeNode;
        }
        // Add the node to the parent, and to the tree.
        parent.addChild(node);
        $9bf71ea28793e738$export$d06fae2ee68b101e.addNode(node);
    }, [
        node,
        parentNode
    ]);
    (0, $6nfFC$useLayoutEffect)(()=>{
        let node = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
        if (node) node.contain = !!contain;
    }, [
        contain
    ]);
    (0, $6nfFC$useLayoutEffect)(()=>{
        var _startRef_current;
        // Find all rendered nodes between the sentinels and add them to the scope.
        let node = (_startRef_current = startRef.current) === null || _startRef_current === void 0 ? void 0 : _startRef_current.nextSibling;
        let nodes = [];
        while(node && node !== endRef.current){
            nodes.push(node);
            node = node.nextSibling;
        }
        scopeRef.current = nodes;
    }, [
        children
    ]);
    $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
    $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
    // This needs to be an effect so that activeScope is updated after the FocusScope tree is complete.
    // It cannot be a useLayoutEffect because the parent of this node hasn't been attached in the tree yet.
    (0, $6nfFC$useEffect)(()=>{
        let activeElement = document.activeElement;
        let scope = null;
        if ($9bf71ea28793e738$var$isElementInScope(activeElement, scopeRef.current)) {
            // We need to traverse the focusScope tree and find the bottom most scope that
            // contains the active element and set that as the activeScope.
            for (let node of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse())if (node.scopeRef && $9bf71ea28793e738$var$isElementInScope(activeElement, node.scopeRef.current)) scope = node;
            if (scope === $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) $9bf71ea28793e738$var$activeScope = scope.scopeRef;
        }
    }, [
        scopeRef
    ]);
    // This layout effect cleanup is so that the tree node is removed synchronously with react before the RAF
    // in useRestoreFocus cleanup runs.
    (0, $6nfFC$useLayoutEffect)(()=>{
        return ()=>{
            var _focusScopeTree_getTreeNode_parent, _focusScopeTree_getTreeNode;
            var _focusScopeTree_getTreeNode_parent_scopeRef;
            // Scope may have been re-parented.
            let parentScope = (_focusScopeTree_getTreeNode_parent_scopeRef = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : (_focusScopeTree_getTreeNode_parent = _focusScopeTree_getTreeNode.parent) === null || _focusScopeTree_getTreeNode_parent === void 0 ? void 0 : _focusScopeTree_getTreeNode_parent.scopeRef) !== null && _focusScopeTree_getTreeNode_parent_scopeRef !== void 0 ? _focusScopeTree_getTreeNode_parent_scopeRef : null;
            if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parentScope))) $9bf71ea28793e738$var$activeScope = parentScope;
            $9bf71ea28793e738$export$d06fae2ee68b101e.removeTreeNode(scopeRef);
        };
    }, [
        scopeRef
    ]);
    let focusManager = (0, $6nfFC$useMemo)(()=>$9bf71ea28793e738$var$createFocusManagerForScope(scopeRef), []);
    let value = (0, $6nfFC$useMemo)(()=>({
            focusManager: focusManager,
            parentNode: node
        }), [
        node,
        focusManager
    ]);
    return /*#__PURE__*/ (0, $6nfFC$react).createElement($9bf71ea28793e738$var$FocusContext.Provider, {
        value: value
    }, /*#__PURE__*/ (0, $6nfFC$react).createElement("span", {
        "data-focus-scope-start": true,
        hidden: true,
        ref: startRef
    }), children, /*#__PURE__*/ (0, $6nfFC$react).createElement("span", {
        "data-focus-scope-end": true,
        hidden: true,
        ref: endRef
    }));
}
function $9bf71ea28793e738$export$10c5169755ce7bd7() {
    var _useContext;
    return (_useContext = (0, $6nfFC$useContext)($9bf71ea28793e738$var$FocusContext)) === null || _useContext === void 0 ? void 0 : _useContext.focusManager;
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
    return {
        focusNext (opts = {}) {
            let scope = scopeRef.current;
            let { from: from, tabbable: tabbable, wrap: wrap, accept: accept } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[0].previousElementSibling;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = sentinel;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {}) {
            let scope = scopeRef.current;
            let { from: from, tabbable: tabbable, wrap: wrap, accept: accept } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[scope.length - 1].nextElementSibling;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = sentinel;
                previousNode = walker.previousNode();
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable: tabbable, accept: accept } = opts;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = scope[0].previousElementSibling;
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable: tabbable, accept: accept } = opts;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = scope[scope.length - 1].nextElementSibling;
            let previousNode = walker.previousNode();
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        }
    };
}
const $9bf71ea28793e738$var$focusableElements = [
    "input:not([disabled]):not([type=hidden])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]"
];
const $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$getScopeRoot(scope) {
    return scope[0].parentElement;
}
function $9bf71ea28793e738$var$shouldContainFocus(scopeRef) {
    let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.contain) return false;
        scope = scope.parent;
    }
    return true;
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
    let focusedNode = (0, $6nfFC$useRef)();
    let raf = (0, $6nfFC$useRef)();
    (0, $6nfFC$useLayoutEffect)(()=>{
        let scope = scopeRef.current;
        if (!contain) {
            // if contain was changed, then we should cancel any ongoing waits to pull focus back into containment
            if (raf.current) {
                cancelAnimationFrame(raf.current);
                raf.current = undefined;
            }
            return;
        }
        // Handle the Tab key to contain focus within the scope
        let onKeyDown = (e)=>{
            if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef)) return;
            let focusedElement = document.activeElement;
            let scope = scopeRef.current;
            if (!scope || !$9bf71ea28793e738$var$isElementInScope(focusedElement, scope)) return;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: true
            }, scope);
            if (!focusedElement) return;
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nextElement) {
                walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
                nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            }
            e.preventDefault();
            if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
        };
        let onFocus = (e)=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(e.target, scopeRef.current)) {
                $9bf71ea28793e738$var$activeScope = scopeRef;
                focusedNode.current = e.target;
            } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(e.target, scopeRef)) {
                // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
                // restore focus to the previously focused node or the first tabbable element in the active scope.
                if (focusedNode.current) focusedNode.current.focus();
                else if ($9bf71ea28793e738$var$activeScope && $9bf71ea28793e738$var$activeScope.current) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
            } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef)) focusedNode.current = e.target;
        };
        let onBlur = (e)=>{
            // Firefox doesn't shift focus back to the Dialog properly without this
            if (raf.current) cancelAnimationFrame(raf.current);
            raf.current = requestAnimationFrame(()=>{
                // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
                if (document.activeElement && $9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(document.activeElement, scopeRef)) {
                    $9bf71ea28793e738$var$activeScope = scopeRef;
                    if (document.body.contains(e.target)) {
                        var _focusedNode_current;
                        focusedNode.current = e.target;
                        (_focusedNode_current = focusedNode.current) === null || _focusedNode_current === void 0 ? void 0 : _focusedNode_current.focus();
                    } else if ($9bf71ea28793e738$var$activeScope.current) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
                }
            });
        };
        document.addEventListener("keydown", onKeyDown, false);
        document.addEventListener("focusin", onFocus, false);
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener("focusin", onFocus, false));
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener("focusout", onBlur, false));
        return ()=>{
            document.removeEventListener("keydown", onKeyDown, false);
            document.removeEventListener("focusin", onFocus, false);
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener("focusin", onFocus, false));
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener("focusout", onBlur, false));
        };
    }, [
        scopeRef,
        contain
    ]);
    // This is a useLayoutEffect so it is guaranteed to run before our async synthetic blur
    // eslint-disable-next-line arrow-body-style
    (0, $6nfFC$useLayoutEffect)(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [
        raf
    ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
    return $9bf71ea28793e738$var$isElementInChildScope(element);
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
    if (!element) return false;
    if (!scope) return false;
    return scope.some((node)=>node.contains(element));
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope = null) {
    // If the element is within a top layer element (e.g. toasts), always allow moving focus there.
    if (element instanceof Element && element.closest("[data-react-aria-top-layer]")) return true;
    // node.contains in isElementInScope covers child scopes that are also DOM children,
    // but does not cover child scopes in portals.
    for (let { scopeRef: s } of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope))){
        if (s && $9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
    }
    return false;
}
function $9bf71ea28793e738$export$1258395f99bf9cbf(element) {
    return $9bf71ea28793e738$var$isElementInChildScope(element, $9bf71ea28793e738$var$activeScope);
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
    var _focusScopeTree_getTreeNode;
    let parent = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : _focusScopeTree_getTreeNode.parent;
    while(parent){
        if (parent.scopeRef === ancestor) return true;
        parent = parent.parent;
    }
    return false;
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        (0, $6a99195332edec8b$export$80f3e147d781571c)(element);
    } catch (err) {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch (err) {
    // ignore
    }
}
function $9bf71ea28793e738$var$focusFirstInScope(scope, tabbable = true) {
    let sentinel = scope[0].previousElementSibling;
    let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
    let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable: tabbable
    }, scope);
    walker.currentNode = sentinel;
    let nextNode = walker.nextNode();
    // If the scope does not contain a tabbable element, use the first focusable element.
    if (tabbable && !nextNode) {
        scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
        walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
            tabbable: false
        }, scope);
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
    }
    $9bf71ea28793e738$var$focusElement(nextNode);
}
function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
    const autoFocusRef = (0, $6nfFC$react).useRef(autoFocus);
    (0, $6nfFC$useEffect)(()=>{
        if (autoFocusRef.current) {
            $9bf71ea28793e738$var$activeScope = scopeRef;
            if (!$9bf71ea28793e738$var$isElementInScope(document.activeElement, $9bf71ea28793e738$var$activeScope.current) && scopeRef.current) $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
        }
        autoFocusRef.current = false;
    }, [
        scopeRef
    ]);
}
function $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restore, contain) {
    // tracks the active scope, in case restore and contain are both false.
    // if either are true, this is tracked in useRestoreFocus or useFocusContainment.
    (0, $6nfFC$useLayoutEffect)(()=>{
        if (restore || contain) return;
        let scope = scopeRef.current;
        let onFocus = (e)=>{
            let target = e.target;
            if ($9bf71ea28793e738$var$isElementInScope(target, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
            else if (!$9bf71ea28793e738$var$isElementInAnyScope(target)) $9bf71ea28793e738$var$activeScope = null;
        };
        document.addEventListener("focusin", onFocus, false);
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener("focusin", onFocus, false));
        return ()=>{
            document.removeEventListener("focusin", onFocus, false);
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener("focusin", onFocus, false));
        };
    }, [
        scopeRef,
        restore,
        contain
    ]);
}
function $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef) {
    let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.nodeToRestore) return false;
        scope = scope.parent;
    }
    return (scope === null || scope === void 0 ? void 0 : scope.scopeRef) === scopeRef;
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
    // create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
    const nodeToRestoreRef = (0, $6nfFC$useRef)(typeof document !== "undefined" ? document.activeElement : null);
    // restoring scopes should all track if they are active regardless of contain, but contain already tracks it plus logic to contain the focus
    // restoring-non-containing scopes should only care if they become active so they can perform the restore
    (0, $6nfFC$useLayoutEffect)(()=>{
        let scope = scopeRef.current;
        if (!restoreFocus || contain) return;
        let onFocus = ()=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(document.activeElement, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
        };
        document.addEventListener("focusin", onFocus, false);
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener("focusin", onFocus, false));
        return ()=>{
            document.removeEventListener("focusin", onFocus, false);
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener("focusin", onFocus, false));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        scopeRef,
        contain
    ]);
    (0, $6nfFC$useLayoutEffect)(()=>{
        if (!restoreFocus) return;
        // Handle the Tab key so that tabbing out of the scope goes to the next element
        // after the node that had focus when the scope mounted. This is important when
        // using portals for overlays, so that focus goes to the expected element when
        // tabbing out of the overlay.
        let onKeyDown = (e)=>{
            if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef)) return;
            let focusedElement = document.activeElement;
            if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scopeRef.current)) return;
            let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
            if (!treeNode) return;
            let nodeToRestore = treeNode.nodeToRestore;
            // Create a DOM tree walker that matches all tabbable elements
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(document.body, {
                tabbable: true
            });
            // Find the next tabbable element after the currently focused element
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nodeToRestore || !document.body.contains(nodeToRestore) || nodeToRestore === document.body) {
                nodeToRestore = undefined;
                treeNode.nodeToRestore = undefined;
            }
            // If there is no next element, or it is outside the current scope, move focus to the
            // next element after the node to restore to instead.
            if ((!nextElement || !$9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current)) && nodeToRestore) {
                walker.currentNode = nodeToRestore;
                // Skip over elements within the scope, in case the scope immediately follows the node to restore.
                do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
                while ($9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current));
                e.preventDefault();
                e.stopPropagation();
                if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
                else // If there is no next element and the nodeToRestore isn't within a FocusScope (i.e. we are leaving the top level focus scope)
                // then move focus to the body.
                // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
                if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
                else $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
            }
        };
        if (!contain) document.addEventListener("keydown", onKeyDown, true);
        return ()=>{
            if (!contain) document.removeEventListener("keydown", onKeyDown, true);
        };
    }, [
        scopeRef,
        restoreFocus,
        contain
    ]);
    // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
    (0, $6nfFC$useLayoutEffect)(()=>{
        if (!restoreFocus) return;
        let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
        if (!treeNode) return;
        var _nodeToRestoreRef_current;
        treeNode.nodeToRestore = (_nodeToRestoreRef_current = nodeToRestoreRef.current) !== null && _nodeToRestoreRef_current !== void 0 ? _nodeToRestoreRef_current : undefined;
        return ()=>{
            let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
            if (!treeNode) return;
            let nodeToRestore = treeNode.nodeToRestore;
            // if we already lost focus to the body and this was the active scope, then we should attempt to restore
            if (restoreFocus && nodeToRestore && // eslint-disable-next-line react-hooks/exhaustive-deps
            ($9bf71ea28793e738$var$isElementInScope(document.activeElement, scopeRef.current) || document.activeElement === document.body && $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef))) {
                // freeze the focusScopeTree so it persists after the raf, otherwise during unmount nodes are removed from it
                let clonedTree = $9bf71ea28793e738$export$d06fae2ee68b101e.clone();
                requestAnimationFrame(()=>{
                    // Only restore focus if we've lost focus to the body, the alternative is that focus has been purposefully moved elsewhere
                    if (document.activeElement === document.body) {
                        // look up the tree starting with our scope to find a nodeToRestore still in the DOM
                        let treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.nodeToRestore && document.body.contains(treeNode.nodeToRestore)) {
                                $9bf71ea28793e738$var$focusElement(treeNode.nodeToRestore);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                        // If no nodeToRestore was found, focus the first element in the nearest
                        // ancestor scope that is still in the tree.
                        treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.scopeRef && treeNode.scopeRef.current && $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(treeNode.scopeRef)) {
                                $9bf71ea28793e738$var$focusFirstInScope(treeNode.scopeRef.current, true);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                    }
                });
            }
        };
    }, [
        scopeRef,
        restoreFocus
    ]);
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
    let selector = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR : $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR;
    let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            var _opts_from;
            // Skip nodes inside the starting node.
            if (opts === null || opts === void 0 ? void 0 : (_opts_from = opts.from) === null || _opts_from === void 0 ? void 0 : _opts_from.contains(node)) return NodeFilter.FILTER_REJECT;
            if (node.matches(selector) && (0, $645f2e67b85a24c9$export$e989c0fffaa6b27a)(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)) && (!(opts === null || opts === void 0 ? void 0 : opts.accept) || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
    return walker;
}
function $9bf71ea28793e738$export$c5251b9e124bf29(ref, defaultOptions = {}) {
    return {
        focusNext (opts = {}) {
            let root = ref.current;
            if (!root) return null;
            let { from: from, tabbable: tabbable = defaultOptions.tabbable, wrap: wrap = defaultOptions.wrap, accept: accept = defaultOptions.accept } = opts;
            let node = from || document.activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { from: from, tabbable: tabbable = defaultOptions.tabbable, wrap: wrap = defaultOptions.wrap, accept: accept = defaultOptions.accept } = opts;
            let node = from || document.activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            else {
                let next = $9bf71ea28793e738$var$last(walker);
                if (next) $9bf71ea28793e738$var$focusElement(next, true);
                return next !== null && next !== void 0 ? next : null;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                let lastNode = $9bf71ea28793e738$var$last(walker);
                if (!lastNode) // couldn't wrap
                return null;
                previousNode = lastNode;
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode !== null && previousNode !== void 0 ? previousNode : null;
        },
        focusFirst (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { tabbable: tabbable = defaultOptions.tabbable, accept: accept = defaultOptions.accept } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { tabbable: tabbable = defaultOptions.tabbable, accept: accept = defaultOptions.accept } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let next = $9bf71ea28793e738$var$last(walker);
            if (next) $9bf71ea28793e738$var$focusElement(next, true);
            return next !== null && next !== void 0 ? next : null;
        }
    };
}
function $9bf71ea28793e738$var$last(walker) {
    let next = undefined;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}
class $9bf71ea28793e738$var$Tree {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(data) {
        return this.fastMap.get(data);
    }
    addTreeNode(scopeRef, parent, nodeToRestore) {
        let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
        if (!parentNode) return;
        let node = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        });
        parentNode.addChild(node);
        node.parent = parentNode;
        this.fastMap.set(scopeRef, node);
        if (nodeToRestore) node.nodeToRestore = nodeToRestore;
    }
    addNode(node) {
        this.fastMap.set(node.scopeRef, node);
    }
    removeTreeNode(scopeRef) {
        // never remove the root
        if (scopeRef === null) return;
        let node = this.fastMap.get(scopeRef);
        if (!node) return;
        let parentNode = node.parent;
        // when we remove a scope, check if any sibling scopes are trying to restore focus to something inside the scope we're removing
        // if we are, then replace the siblings restore with the restore from the scope we're removing
        for (let current of this.traverse())if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
        let children = node.children;
        if (parentNode) {
            parentNode.removeChild(node);
            if (children.size > 0) children.forEach((child)=>parentNode && parentNode.addChild(child));
        }
        this.fastMap.delete(node.scopeRef);
    }
    // Pre Order Depth First
    *traverse(node = this.root) {
        if (node.scopeRef != null) yield node;
        if (node.children.size > 0) for (let child of node.children)yield* this.traverse(child);
    }
    clone() {
        var _node_parent;
        let newTree = new $9bf71ea28793e738$var$Tree();
        var _node_parent_scopeRef;
        for (let node of this.traverse())newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
        return newTree;
    }
    constructor(){
        this.fastMap = new Map();
        this.root = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: null
        });
        this.fastMap.set(null, this.root);
    }
}
class $9bf71ea28793e738$var$TreeNode {
    addChild(node) {
        this.children.add(node);
        node.parent = this;
    }
    removeChild(node) {
        this.children.delete(node);
        node.parent = undefined;
    }
    constructor(props){
        this.children = new Set();
        this.contain = false;
        this.scopeRef = props.scopeRef;
    }
}
let $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
    let { autoFocus: autoFocus = false, isTextInput: isTextInput, within: within } = props;
    let state = (0, react.useRef)({
        isFocused: false,
        isFocusVisible: autoFocus || (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)()
    });
    let [isFocused, setFocused] = (0, react.useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (0, react.useState)(()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, react.useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, react.useCallback)((isFocused)=>{
        state.current.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    (0, $507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps } = (0, $9ab94262bd0047c7$export$420e68273165f4ec)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}


function $907718708eab68af$export$1a38b4ad7f578e1d(props) {
    let { children: children, focusClass: focusClass, focusRingClass: focusRingClass } = props;
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $f7dceffc5ad7768b$export$4e328f61c538687f)(props);
    let child = (0, $6nfFC$react).Children.only(children);
    return /*#__PURE__*/ (0, $6nfFC$react).cloneElement(child, (0, $6nfFC$mergeProps)(child.props, {
        ...focusProps,
        className: (0, $6nfFC$clsx)({
            [focusClass || ""]: isFocused,
            [focusRingClass || ""]: isFocusVisible
        })
    }));
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



let $e6afbd83fe6ebbd2$var$FocusableContext = /*#__PURE__*/ (0, react).createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
    let context = (0, react.useContext)($e6afbd83fe6ebbd2$var$FocusableContext) || {};
    (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, ref);
    // eslint-disable-next-line
    let { ref: _, ...otherProps } = context;
    return otherProps;
}
/**
 * Provides DOM props to the nearest focusable child.
 */ function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
    let { children: children, ...otherProps } = props;
    let objRef = (0, $6nfFC$useObjectRef)(ref);
    let context = {
        ...otherProps,
        ref: objRef
    };
    return /*#__PURE__*/ (0, $6nfFC$react).createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
        value: context
    }, children);
}
let $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $6nfFC$react).forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider)));
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)(props);
    let { keyboardProps: keyboardProps } = (0, $46d819fcbaf35654$export$8f71654801c2f7cd)(props);
    let interactions = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(focusProps, keyboardProps);
    let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {} : domProps;
    let autoFocusRef = (0, react.useRef)(props.autoFocus);
    (0, react.useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) (0, $6a99195332edec8b$export$80f3e147d781571c)(domRef.current);
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    return {
        focusableProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)({
            ...interactions,
            tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
        }, interactionProps)
    };
}




/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $83013635b024ae3d$export$eac1895992b9f3d6(ref, options) {
    let isDisabled = options === null || options === void 0 ? void 0 : options.isDisabled;
    let [hasTabbableChild, setHasTabbableChild] = (0, $6nfFC$useState)(false);
    (0, $6nfFC$useLayoutEffect)(()=>{
        if ((ref === null || ref === void 0 ? void 0 : ref.current) && !isDisabled) {
            let update = ()=>{
                if (ref.current) {
                    let walker = (0, $9bf71ea28793e738$export$2d6ec8fc375ceafa)(ref.current, {
                        tabbable: true
                    });
                    setHasTabbableChild(!!walker.nextNode());
                }
            };
            update();
            // Update when new elements are inserted, or the tabIndex/disabled attribute updates.
            let observer = new MutationObserver(update);
            observer.observe(ref.current, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: [
                    "tabIndex",
                    "disabled"
                ]
            });
            return ()=>{
                // Disconnect mutation observer when a React update occurs on the top-level component
                // so we update synchronously after re-rendering. Otherwise React will emit act warnings
                // in tests since mutation observers fire asynchronously. The mutation observer is necessary
                // so we also update if a child component re-renders and adds/removes something tabbable.
                observer.disconnect();
            };
        }
    });
    return isDisabled ? false : hasTabbableChild;
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-aria+button@3.9.0_react@18.2.0/node_modules/@react-aria/button/dist/import.mjs




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $701a24aa0da5b062$export$ea18c227d4417cc3(props, ref) {
    let { elementType: elementType = "button", isDisabled: isDisabled, onPress: onPress, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, onPressChange: onPressChange, preventFocusOnPress: // @ts-ignore - undocumented
    preventFocusOnPress, allowFocusWhenDisabled: // @ts-ignore - undocumented
    allowFocusWhenDisabled, // @ts-ignore
    onClick: deprecatedOnClick, href: href, target: target, rel: rel, type: type = "button" } = props;
    let additionalProps;
    if (elementType === "button") additionalProps = {
        type: type,
        disabled: isDisabled
    };
    else additionalProps = {
        role: "button",
        tabIndex: isDisabled ? undefined : 0,
        href: elementType === "a" && isDisabled ? undefined : href,
        target: elementType === "a" ? target : undefined,
        type: elementType === "input" ? type : undefined,
        disabled: elementType === "input" ? isDisabled : undefined,
        "aria-disabled": !isDisabled || elementType === "input" ? undefined : isDisabled,
        rel: elementType === "a" ? rel : undefined
    };
    let { pressProps: pressProps, isPressed: isPressed } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPress: onPress,
        onPressUp: onPressUp,
        isDisabled: isDisabled,
        preventFocusOnPress: preventFocusOnPress,
        ref: ref
    });
    let { focusableProps: focusableProps } = (0, $e6afbd83fe6ebbd2$export$4c014de7c8940b4c)(props, ref);
    if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(focusableProps, pressProps, (0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
        labelable: true
    }));
    return {
        isPressed: isPressed,
        buttonProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(additionalProps, buttonProps, {
            "aria-haspopup": props["aria-haspopup"],
            "aria-expanded": props["aria-expanded"],
            "aria-controls": props["aria-controls"],
            "aria-pressed": props["aria-pressed"],
            onClick: (e)=>{
                if (deprecatedOnClick) {
                    deprecatedOnClick(e);
                    console.warn("onClick is deprecated, please use onPress");
                }
            }
        })
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $55f54f7887471b58$export$51e84d46ca0bc451(props, state, ref) {
    const { isSelected: isSelected } = state;
    const { isPressed: isPressed, buttonProps: buttonProps } = (0, $701a24aa0da5b062$export$ea18c227d4417cc3)({
        ...props,
        onPress: (0, $cE0pI$chain)(state.toggle, props.onPress)
    }, ref);
    return {
        isPressed: isPressed,
        buttonProps: (0, $cE0pI$mergeProps)(buttonProps, {
            "aria-pressed": isSelected
        })
    };
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-stately+utils@3.9.0_react@18.2.0/node_modules/@react-stately/utils/dist/import.mjs


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, react.useState)(value || defaultValue);
    let isControlledRef = (0, react.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, react.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, react.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // If uncontrolled, mutate the currentValue local variable so that
            // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === "function") {
            console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $9446cca9a3875146$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor((max - min) / step) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor(max / step) * step;
    // correct floating point behavior by rounding to step precision
    let string = step.toString();
    let index = string.indexOf(".");
    let precision = index >= 0 ? string.length - index : 0;
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        snappedValue = Math.round(snappedValue * pow) / pow;
    }
    return snappedValue;
}
function $9446cca9a3875146$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-aria+label@3.7.3_react@18.2.0/node_modules/@react-aria/label/dist/import.mjs


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
    let { id: id, label: label, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, labelElementType: labelElementType = "label" } = props;
    id = (0, $bdb11010cef70236$export$f680877a34711e37)(id);
    let labelId = (0, $bdb11010cef70236$export$f680877a34711e37)();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === "label" ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel) console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
    let fieldProps = (0, $313b98861ee5dd6c$export$d6875122194c7b44)({
        id: id,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}



function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
    let { description: description, errorMessage: errorMessage, isInvalid: isInvalid, validationState: validationState } = props;
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, $d191a55c9702f145$export$8467354a121f1b9f)(props);
    let descriptionId = (0, $bdb11010cef70236$export$b4cc09c592e8fdb8)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = (0, $bdb11010cef70236$export$b4cc09c592e8fdb8)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(fieldProps, {
        "aria-describedby": [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props["aria-describedby"]
        ].filter(Boolean).join(" ") || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}






//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-aria+form@3.0.0_react@18.2.0/node_modules/@react-aria/form/dist/import.mjs




/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $e93e671b31057976$export$b8473d3665f3a75a(props, state, ref) {
    let { validationBehavior: validationBehavior, focus: focus } = props;
    // This is a useLayoutEffect so that it runs before the useEffect in useFormValidationState, which commits the validation change.
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (validationBehavior === "native" && (ref === null || ref === void 0 ? void 0 : ref.current)) {
            let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            ref.current.setCustomValidity(errorMessage);
            // Prevent default tooltip for validation message.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=605277
            if (!ref.current.hasAttribute("title")) ref.current.title = "";
            if (!state.realtimeValidation.isInvalid) state.updateValidation($e93e671b31057976$var$getNativeValidity(ref.current));
        }
    });
    let onReset = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        state.resetValidation();
    });
    let onInvalid = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
        var _ref_current;
        // Only commit validation if we are not already displaying one.
        // This avoids clearing server errors that the user didn't actually fix.
        if (!state.displayValidation.isInvalid) state.commitValidation();
        // Auto focus the first invalid input in a form, unless the error already had its default prevented.
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        if (!e.defaultPrevented && ref && form && $e93e671b31057976$var$getFirstInvalidInput(form) === ref.current) {
            var _ref_current1;
            if (focus) focus();
            else (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
            // Always show focus ring.
            (0, $507fabe10e71c6fb$export$8397ddfc504fdb9a)("keyboard");
        }
        // Prevent default browser error UI from appearing.
        e.preventDefault();
    });
    let onChange = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        state.commitValidation();
    });
    (0, react.useEffect)(()=>{
        let input = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!input) return;
        let form = input.form;
        input.addEventListener("invalid", onInvalid);
        input.addEventListener("change", onChange);
        form === null || form === void 0 ? void 0 : form.addEventListener("reset", onReset);
        return ()=>{
            input.removeEventListener("invalid", onInvalid);
            input.removeEventListener("change", onChange);
            form === null || form === void 0 ? void 0 : form.removeEventListener("reset", onReset);
        };
    }, [
        ref,
        onInvalid,
        onChange,
        onReset,
        validationBehavior
    ]);
}
function $e93e671b31057976$var$getValidity(input) {
    // The native ValidityState object is live, meaning each property is a getter that returns the current state.
    // We need to create a snapshot of the validity state at the time this function is called to avoid unpredictable React renders.
    let validity = input.validity;
    return {
        badInput: validity.badInput,
        customError: validity.customError,
        patternMismatch: validity.patternMismatch,
        rangeOverflow: validity.rangeOverflow,
        rangeUnderflow: validity.rangeUnderflow,
        stepMismatch: validity.stepMismatch,
        tooLong: validity.tooLong,
        tooShort: validity.tooShort,
        typeMismatch: validity.typeMismatch,
        valueMissing: validity.valueMissing,
        valid: validity.valid
    };
}
function $e93e671b31057976$var$getNativeValidity(input) {
    return {
        isInvalid: !input.validity.valid,
        validationDetails: $e93e671b31057976$var$getValidity(input),
        validationErrors: input.validationMessage ? [
            input.validationMessage
        ] : []
    };
}
function $e93e671b31057976$var$getFirstInvalidInput(form) {
    for(let i = 0; i < form.elements.length; i++){
        let element = form.elements[i];
        if (!element.validity.valid) return element;
    }
    return null;
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-stately+form@3.0.0_react@18.2.0/node_modules/@react-stately/form/dist/import.mjs


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $e5be200c675c3b3a$export$aca958c65c314e6c = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
    valid: true
};
const $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE = {
    ...$e5be200c675c3b3a$export$aca958c65c314e6c,
    customError: true,
    valid: false
};
const $e5be200c675c3b3a$export$dad6ae84456c676a = {
    isInvalid: false,
    validationDetails: $e5be200c675c3b3a$export$aca958c65c314e6c,
    validationErrors: []
};
const $e5be200c675c3b3a$export$571b5131b7e65c11 = (0, react.createContext)({});
const $e5be200c675c3b3a$export$a763b9476acd3eb = "__formValidationState" + Date.now();
function $e5be200c675c3b3a$export$fc1a364ae1f3ff10(props) {
    // Private prop for parent components to pass state to children.
    if (props[$e5be200c675c3b3a$export$a763b9476acd3eb]) {
        let { realtimeValidation: realtimeValidation, displayValidation: displayValidation, updateValidation: updateValidation, resetValidation: resetValidation, commitValidation: commitValidation } = props[$e5be200c675c3b3a$export$a763b9476acd3eb];
        return {
            realtimeValidation: realtimeValidation,
            displayValidation: displayValidation,
            updateValidation: updateValidation,
            resetValidation: resetValidation,
            commitValidation: commitValidation
        };
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return $e5be200c675c3b3a$var$useFormValidationStateImpl(props);
}
function $e5be200c675c3b3a$var$useFormValidationStateImpl(props) {
    let { isInvalid: isInvalid, validationState: validationState, name: name, value: value, builtinValidation: builtinValidation, validate: validate, validationBehavior: validationBehavior = "aria" } = props;
    // backward compatibility.
    if (validationState) isInvalid || (isInvalid = validationState === "invalid");
    // If the isInvalid prop is true, update validation result in realtime (controlled).
    let controlledError = isInvalid ? {
        isInvalid: true,
        validationErrors: [],
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
    // Perform custom client side validation.
    let clientError = (0, react.useMemo)(()=>$e5be200c675c3b3a$var$getValidationResult($e5be200c675c3b3a$var$runValidate(validate, value)), [
        validate,
        value
    ]);
    if (builtinValidation === null || builtinValidation === void 0 ? void 0 : builtinValidation.validationDetails.valid) builtinValidation = null;
    // Get relevant server errors from the form.
    let serverErrors = (0, react.useContext)($e5be200c675c3b3a$export$571b5131b7e65c11);
    let serverErrorMessages = (0, react.useMemo)(()=>{
        if (name) return Array.isArray(name) ? name.flatMap((name)=>$e5be200c675c3b3a$var$asArray(serverErrors[name])) : $e5be200c675c3b3a$var$asArray(serverErrors[name]);
        return [];
    }, [
        serverErrors,
        name
    ]);
    // Show server errors when the form gets a new value, and clear when the user changes the value.
    let [lastServerErrors, setLastServerErrors] = (0, react.useState)(serverErrors);
    let [isServerErrorCleared, setServerErrorCleared] = (0, react.useState)(false);
    if (serverErrors !== lastServerErrors) {
        setLastServerErrors(serverErrors);
        setServerErrorCleared(false);
    }
    let serverError = (0, react.useMemo)(()=>$e5be200c675c3b3a$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
        isServerErrorCleared,
        serverErrorMessages
    ]);
    // Track the next validation state in a ref until commitValidation is called.
    let nextValidation = (0, react.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let [currentValidity, setCurrentValidity] = (0, react.useState)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let lastError = (0, react.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let commitValidation = ()=>{
        if (!commitQueued) return;
        setCommitQueued(false);
        let error = clientError || builtinValidation || nextValidation.current;
        if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
            lastError.current = error;
            setCurrentValidity(error);
        }
    };
    let [commitQueued, setCommitQueued] = (0, react.useState)(false);
    (0, react.useEffect)(commitValidation);
    // realtimeValidation is used to update the native input element's state based on custom validation logic.
    // displayValidation is the currently displayed validation state that the user sees (e.g. on input change/form submit).
    // With validationBehavior="aria", all errors are displayed in realtime rather than on submit.
    let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $e5be200c675c3b3a$export$dad6ae84456c676a;
    let displayValidation = validationBehavior === "native" ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
    return {
        realtimeValidation: realtimeValidation,
        displayValidation: displayValidation,
        updateValidation (value) {
            // If validationBehavior is 'aria', update in realtime. Otherwise, store in a ref until commit.
            if (validationBehavior === "aria" && !$e5be200c675c3b3a$var$isEqualValidation(currentValidity, value)) setCurrentValidity(value);
            else nextValidation.current = value;
        },
        resetValidation () {
            // Update the currently displayed validation state to valid on form reset,
            // even if the native validity says it isn't. It'll show again on the next form submit.
            let error = $e5be200c675c3b3a$export$dad6ae84456c676a;
            if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
                lastError.current = error;
                setCurrentValidity(error);
            }
            // Do not commit validation after the next render. This avoids a condition where
            // useSelect calls commitValidation inside an onReset handler.
            if (validationBehavior === "native") setCommitQueued(false);
            setServerErrorCleared(true);
        },
        commitValidation () {
            // Commit validation state so the user sees it on blur/change/submit. Also clear any server errors.
            // Wait until after the next render to commit so that the latest value has been validated.
            if (validationBehavior === "native") setCommitQueued(true);
            setServerErrorCleared(true);
        }
    };
}
function $e5be200c675c3b3a$var$asArray(v) {
    if (!v) return [];
    return Array.isArray(v) ? v : [
        v
    ];
}
function $e5be200c675c3b3a$var$runValidate(validate, value) {
    if (typeof validate === "function") {
        let e = validate(value);
        if (e && typeof e !== "boolean") return $e5be200c675c3b3a$var$asArray(e);
    }
    return [];
}
function $e5be200c675c3b3a$var$getValidationResult(errors) {
    return errors.length ? {
        isInvalid: true,
        validationErrors: errors,
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
}
function $e5be200c675c3b3a$var$isEqualValidation(a, b) {
    if (a === b) return true;
    return a && b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a, i)=>a === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v])=>b.validationDetails[k] === v);
}
function $e5be200c675c3b3a$export$75ee7c75d68f5b0e(...results) {
    let errors = new Set();
    let isInvalid = false;
    let validationDetails = {
        ...$e5be200c675c3b3a$export$aca958c65c314e6c
    };
    for (let v of results){
        var _validationDetails, _key;
        for (let e of v.validationErrors)errors.add(e);
        // Only these properties apply for checkboxes.
        isInvalid || (isInvalid = v.isInvalid);
        for(let key in validationDetails)(_validationDetails = validationDetails)[_key = key] || (_validationDetails[_key] = v.validationDetails[key]);
    }
    validationDetails.valid = !isInvalid;
    return {
        isInvalid: isInvalid,
        validationErrors: [
            ...errors
        ],
        validationDetails: validationDetails
    };
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-aria+textfield@3.13.0_react@18.2.0/node_modules/@react-aria/textfield/dist/import.mjs








/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = "input", isDisabled: isDisabled = false, isRequired: isRequired = false, isReadOnly: isReadOnly = false, type: type = "text", validationBehavior: validationBehavior = "aria" } = props;
    let [value, setValue] = (0, $458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.value, props.defaultValue || "", props.onChange);
    let { focusableProps: focusableProps } = (0, $e6afbd83fe6ebbd2$export$4c014de7c8940b4c)(props, ref);
    let validationState = (0, $e5be200c675c3b3a$export$fc1a364ae1f3ff10)({
        ...props,
        value: value
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $2baaea4c71418dea$export$294aa081a6c6f55d)({
        ...props,
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    (0, $99facab73266f662$export$5add1d006293d136)(ref, value, setValue);
    (0, $e93e671b31057976$export$b8473d3665f3a75a)(props, validationState, ref);
    (0, react.useEffect)(()=>{
        // This works around a React/Chrome bug that prevents textarea elements from validating when controlled.
        // We prevent React from updating defaultValue (i.e. children) of textarea when `value` changes,
        // which causes Chrome to skip validation. Only updating `value` is ok in our case since our
        // textareas are always controlled. React is planning on removing this synchronization in a
        // future major version.
        // https://github.com/facebook/react/issues/19474
        // https://github.com/facebook/react/issues/11896
        if (ref.current instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(ref.current).HTMLTextAreaElement) {
            let input = ref.current;
            Object.defineProperty(input, "defaultValue", {
                get: ()=>input.value,
                set: ()=>{},
                configurable: true
            });
        }
    }, [
        ref
    ]);
    return {
        labelProps: labelProps,
        inputProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, inputElementType === "input" && inputOnlyProps, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired && validationBehavior === "native",
            "aria-required": isRequired && validationBehavior === "aria" || undefined,
            "aria-invalid": isInvalid || undefined,
            "aria-errormessage": props["aria-errormessage"],
            "aria-activedescendant": props["aria-activedescendant"],
            "aria-autocomplete": props["aria-autocomplete"],
            "aria-haspopup": props["aria-haspopup"],
            value: value,
            onChange: (e)=>setValue(e.target.value),
            autoComplete: props.autoComplete,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $d841c8010a73d545$var$supportsNativeBeforeInputEvent() {
    return typeof window !== "undefined" && window.InputEvent && // @ts-ignore
    typeof InputEvent.prototype.getTargetRanges === "function";
}
function $d841c8010a73d545$export$4f384c9210e583c3(props, state, inputRef) {
    // All browsers implement the 'beforeinput' event natively except Firefox
    // (currently behind a flag as of Firefox 84). React's polyfill does not
    // run in all cases that the native event fires, e.g. when deleting text.
    // Use the native event if available so that we can prevent invalid deletions.
    // We do not attempt to polyfill this in Firefox since it would be very complicated,
    // the benefit of doing so is fairly minor, and it's going to be natively supported soon.
    let onBeforeInputFallback = (0, $kOq5K$useEffectEvent)((e)=>{
        let input = inputRef.current;
        // Compute the next value of the input if the event is allowed to proceed.
        // See https://www.w3.org/TR/input-events-2/#interface-InputEvent-Attributes for a full list of input types.
        let nextValue;
        switch(e.inputType){
            case "historyUndo":
            case "historyRedo":
                // Explicitly allow undo/redo. e.data is null in this case, but there's no need to validate,
                // because presumably the input would have already been validated previously.
                return;
            case "deleteContent":
            case "deleteByCut":
            case "deleteByDrag":
                nextValue = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case "deleteContentForward":
                // This is potentially incorrect, since the browser may actually delete more than a single UTF-16
                // character. In reality, a full Unicode grapheme cluster consisting of multiple UTF-16 characters
                // or code points may be deleted. However, in our currently supported locales, there are no such cases.
                // If we support additional locales in the future, this may need to change.
                nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd + 1) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case "deleteContentBackward":
                nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart - 1) + input.value.slice(input.selectionStart) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case "deleteSoftLineBackward":
            case "deleteHardLineBackward":
                nextValue = input.value.slice(input.selectionStart);
                break;
            default:
                if (e.data != null) nextValue = input.value.slice(0, input.selectionStart) + e.data + input.value.slice(input.selectionEnd);
                break;
        }
        // If we did not compute a value, or the new value is invalid, prevent the event
        // so that the browser does not update the input text, move the selection, or add to
        // the undo/redo stack.
        if (nextValue == null || !state.validate(nextValue)) e.preventDefault();
    });
    (0, $kOq5K$useEffect)(()=>{
        if (!$d841c8010a73d545$var$supportsNativeBeforeInputEvent()) return;
        let input = inputRef.current;
        input.addEventListener("beforeinput", onBeforeInputFallback, false);
        return ()=>{
            input.removeEventListener("beforeinput", onBeforeInputFallback, false);
        };
    }, [
        inputRef,
        onBeforeInputFallback
    ]);
    let onBeforeInput = !$d841c8010a73d545$var$supportsNativeBeforeInputEvent() ? (e)=>{
        let nextValue = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
        if (!state.validate(nextValue)) e.preventDefault();
    } : null;
    let { labelProps: labelProps, inputProps: textFieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $2d73ec29415bd339$export$712718f7aec83d5)(props, inputRef);
    let compositionStartState = (0, $kOq5K$useRef)(null);
    return {
        inputProps: (0, $kOq5K$mergeProps)(textFieldProps, {
            onBeforeInput: onBeforeInput,
            onCompositionStart () {
                // Chrome does not implement Input Events Level 2, which specifies the insertFromComposition
                // and deleteByComposition inputType values for the beforeinput event. These are meant to occur
                // at the end of a composition (e.g. Pinyin IME, Android auto correct, etc.), and crucially, are
                // cancelable. The insertCompositionText and deleteCompositionText input types are not cancelable,
                // nor would we want to cancel them because the input from the user is incomplete at that point.
                // In Safari, insertFromComposition/deleteFromComposition will fire, however, allowing us to cancel
                // the final composition result if it is invalid. As a fallback for Chrome and Firefox, which either
                // don't support Input Events Level 2, or beforeinput at all, we store the state of the input when
                // the compositionstart event fires, and undo the changes in compositionend (below) if it is invalid.
                // Unfortunately, this messes up the undo/redo stack, but until insertFromComposition/deleteByComposition
                // are implemented, there is no other way to prevent composed input.
                // See https://bugs.chromium.org/p/chromium/issues/detail?id=1022204
                let { value: value, selectionStart: selectionStart, selectionEnd: selectionEnd } = inputRef.current;
                compositionStartState.current = {
                    value: value,
                    selectionStart: selectionStart,
                    selectionEnd: selectionEnd
                };
            },
            onCompositionEnd () {
                if (!state.validate(inputRef.current.value)) {
                    // Restore the input value in the DOM immediately so we can synchronously update the selection position.
                    // But also update the value in React state as well so it is correct for future updates.
                    let { value: value, selectionStart: selectionStart, selectionEnd: selectionEnd } = compositionStartState.current;
                    inputRef.current.value = value;
                    inputRef.current.setSelectionRange(selectionStart, selectionEnd);
                    state.setInputValue(value);
                }
            }
        }),
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        ...validation
    };
}





//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(422);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.2.0/node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(322);
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-aria-components@1.0.0-beta.1_react-dom@18.2.0_react@18.2.0/node_modules/react-aria-components/dist/import.mjs











function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



class $7135fc7d473fd974$export$f5d856d854e74713 {
    get childNodes() {
        throw new Error("childNodes is not supported");
    }
    clone() {
        let node = new $7135fc7d473fd974$export$f5d856d854e74713(this.type, this.key);
        node.value = this.value;
        node.level = this.level;
        node.hasChildNodes = this.hasChildNodes;
        node.rendered = this.rendered;
        node.textValue = this.textValue;
        node["aria-label"] = this["aria-label"];
        node.index = this.index;
        node.parentKey = this.parentKey;
        node.prevKey = this.prevKey;
        node.nextKey = this.nextKey;
        node.firstChildKey = this.firstChildKey;
        node.lastChildKey = this.lastChildKey;
        node.props = this.props;
        return node;
    }
    constructor(type, key){
        this.value = null;
        this.level = 0;
        this.hasChildNodes = false;
        this.rendered = null;
        this.textValue = "";
        this["aria-label"] = undefined;
        this.index = 0;
        this.parentKey = null;
        this.prevKey = null;
        this.nextKey = null;
        this.firstChildKey = null;
        this.lastChildKey = null;
        this.props = {};
        this.type = type;
        this.key = key;
    }
}
/**
 * A mutable node in the fake DOM tree. When mutated, it marks itself as dirty
 * and queues an update with the owner document.
 */ class $7135fc7d473fd974$var$BaseNode {
    *[Symbol.iterator]() {
        let node = this.firstChild;
        while(node){
            yield node;
            node = node.nextSibling;
        }
    }
    get firstChild() {
        return this._firstChild;
    }
    set firstChild(firstChild) {
        this._firstChild = firstChild;
        this.ownerDocument.markDirty(this);
    }
    get lastChild() {
        return this._lastChild;
    }
    set lastChild(lastChild) {
        this._lastChild = lastChild;
        this.ownerDocument.markDirty(this);
    }
    get previousSibling() {
        return this._previousSibling;
    }
    set previousSibling(previousSibling) {
        this._previousSibling = previousSibling;
        this.ownerDocument.markDirty(this);
    }
    get nextSibling() {
        return this._nextSibling;
    }
    set nextSibling(nextSibling) {
        this._nextSibling = nextSibling;
        this.ownerDocument.markDirty(this);
    }
    get parentNode() {
        return this._parentNode;
    }
    set parentNode(parentNode) {
        this._parentNode = parentNode;
        this.ownerDocument.markDirty(this);
    }
    appendChild(child) {
        this.ownerDocument.startTransaction();
        if (child.parentNode) child.parentNode.removeChild(child);
        if (this.firstChild == null) this.firstChild = child;
        if (this.lastChild) {
            this.lastChild.nextSibling = child;
            child.index = this.lastChild.index + 1;
            child.previousSibling = this.lastChild;
        } else {
            child.previousSibling = null;
            child.index = 0;
        }
        child.parentNode = this;
        child.nextSibling = null;
        this.lastChild = child;
        this.ownerDocument.markDirty(this);
        if (child.hasSetProps) // Only add the node to the collection if we already received props for it.
        // Otherwise wait until then so we have the correct id for the node.
        this.ownerDocument.addNode(child);
        this.ownerDocument.endTransaction();
        this.ownerDocument.queueUpdate();
    }
    insertBefore(newNode, referenceNode) {
        if (referenceNode == null) return this.appendChild(newNode);
        this.ownerDocument.startTransaction();
        if (newNode.parentNode) newNode.parentNode.removeChild(newNode);
        newNode.nextSibling = referenceNode;
        newNode.previousSibling = referenceNode.previousSibling;
        newNode.index = referenceNode.index;
        if (this.firstChild === referenceNode) this.firstChild = newNode;
        else if (referenceNode.previousSibling) referenceNode.previousSibling.nextSibling = newNode;
        referenceNode.previousSibling = newNode;
        newNode.parentNode = referenceNode.parentNode;
        let node = referenceNode;
        while(node){
            node.index++;
            node = node.nextSibling;
        }
        if (newNode.hasSetProps) this.ownerDocument.addNode(newNode);
        this.ownerDocument.endTransaction();
        this.ownerDocument.queueUpdate();
    }
    removeChild(child) {
        if (child.parentNode !== this) return;
        this.ownerDocument.startTransaction();
        let node = child.nextSibling;
        while(node){
            node.index--;
            node = node.nextSibling;
        }
        if (child.nextSibling) child.nextSibling.previousSibling = child.previousSibling;
        if (child.previousSibling) child.previousSibling.nextSibling = child.nextSibling;
        if (this.firstChild === child) this.firstChild = child.nextSibling;
        if (this.lastChild === child) this.lastChild = child.previousSibling;
        child.parentNode = null;
        child.nextSibling = null;
        child.previousSibling = null;
        child.index = 0;
        this.ownerDocument.removeNode(child);
        this.ownerDocument.endTransaction();
        this.ownerDocument.queueUpdate();
    }
    addEventListener() {}
    removeEventListener() {}
    constructor(ownerDocument){
        this._firstChild = null;
        this._lastChild = null;
        this._previousSibling = null;
        this._nextSibling = null;
        this._parentNode = null;
        this.ownerDocument = ownerDocument;
    }
}
class $7135fc7d473fd974$export$dc064fe9e59310fd extends (/* unused pure expression or super */ null && ($7135fc7d473fd974$var$BaseNode)) {
    get index() {
        return this._index;
    }
    set index(index) {
        this._index = index;
        this.ownerDocument.markDirty(this);
    }
    get level() {
        if (this.parentNode instanceof $7135fc7d473fd974$export$dc064fe9e59310fd) return this.parentNode.level + (this.node.type === "item" ? 1 : 0);
        return 0;
    }
    updateNode() {
        var _this_previousSibling, _this_nextSibling, _this_firstChild, _this_lastChild;
        let node = this.ownerDocument.getMutableNode(this);
        node.index = this.index;
        node.level = this.level;
        node.parentKey = this.parentNode instanceof $7135fc7d473fd974$export$dc064fe9e59310fd ? this.parentNode.node.key : null;
        var _this_previousSibling_node_key;
        node.prevKey = (_this_previousSibling_node_key = (_this_previousSibling = this.previousSibling) === null || _this_previousSibling === void 0 ? void 0 : _this_previousSibling.node.key) !== null && _this_previousSibling_node_key !== void 0 ? _this_previousSibling_node_key : null;
        var _this_nextSibling_node_key;
        node.nextKey = (_this_nextSibling_node_key = (_this_nextSibling = this.nextSibling) === null || _this_nextSibling === void 0 ? void 0 : _this_nextSibling.node.key) !== null && _this_nextSibling_node_key !== void 0 ? _this_nextSibling_node_key : null;
        node.hasChildNodes = !!this.firstChild;
        var _this_firstChild_node_key;
        node.firstChildKey = (_this_firstChild_node_key = (_this_firstChild = this.firstChild) === null || _this_firstChild === void 0 ? void 0 : _this_firstChild.node.key) !== null && _this_firstChild_node_key !== void 0 ? _this_firstChild_node_key : null;
        var _this_lastChild_node_key;
        node.lastChildKey = (_this_lastChild_node_key = (_this_lastChild = this.lastChild) === null || _this_lastChild === void 0 ? void 0 : _this_lastChild.node.key) !== null && _this_lastChild_node_key !== void 0 ? _this_lastChild_node_key : null;
    }
    setProps(obj, ref, rendered) {
        let node = this.ownerDocument.getMutableNode(this);
        let { value: value, textValue: textValue, id: id, ...props } = obj;
        props.ref = ref;
        node.props = props;
        node.rendered = rendered;
        node.value = value;
        node.textValue = textValue || (typeof rendered === "string" ? rendered : "") || obj["aria-label"] || "";
        if (id != null && id !== node.key) {
            if (this.hasSetProps) throw new Error("Cannot change the id of an item");
            node.key = id;
        }
        // If this is the first time props have been set, end the transaction started in the constructor
        // so this node can be emitted.
        if (!this.hasSetProps) {
            this.ownerDocument.addNode(this);
            this.ownerDocument.endTransaction();
            this.hasSetProps = true;
        }
        this.ownerDocument.queueUpdate();
    }
    get style() {
        return {};
    }
    hasAttribute() {}
    setAttribute() {}
    setAttributeNS() {}
    removeAttribute() {}
    constructor(type, ownerDocument){
        super(ownerDocument);
        this.nodeType = 8 // COMMENT_NODE (we'd use ELEMENT_NODE but React DevTools will fail to get its dimensions)
        ;
        this._index = 0;
        this.hasSetProps = false;
        this.node = new $7135fc7d473fd974$export$f5d856d854e74713(type, `react-aria-${++ownerDocument.nodeId}`);
        // Start a transaction so that no updates are emitted from the collection
        // until the props for this node are set. We don't know the real id for the
        // node until then, so we need to avoid emitting collections in an inconsistent state.
        this.ownerDocument.startTransaction();
    }
}
class $7135fc7d473fd974$export$408d25a4e12db025 {
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    *[Symbol.iterator]() {
        let node = this.firstKey != null ? this.keyMap.get(this.firstKey) : undefined;
        while(node){
            yield node;
            node = node.nextKey != null ? this.keyMap.get(node.nextKey) : undefined;
        }
    }
    getChildren(key) {
        let keyMap = this.keyMap;
        return {
            *[Symbol.iterator] () {
                let parent = keyMap.get(key);
                let node = (parent === null || parent === void 0 ? void 0 : parent.firstChildKey) != null ? keyMap.get(parent.firstChildKey) : null;
                while(node){
                    yield node;
                    node = node.nextKey != null ? keyMap.get(node.nextKey) : undefined;
                }
            }
        };
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        if (!node) return null;
        if (node.prevKey != null) {
            node = this.keyMap.get(node.prevKey);
            while(node && node.type !== "item" && node.lastChildKey != null)node = this.keyMap.get(node.lastChildKey);
            var _node_key;
            return (_node_key = node === null || node === void 0 ? void 0 : node.key) !== null && _node_key !== void 0 ? _node_key : null;
        }
        return node.parentKey;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        if (!node) return null;
        if (node.type !== "item" && node.firstChildKey != null) return node.firstChildKey;
        while(node){
            if (node.nextKey != null) return node.nextKey;
            if (node.parentKey != null) node = this.keyMap.get(node.parentKey);
            else return null;
        }
        return null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        let node = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
        while((node === null || node === void 0 ? void 0 : node.lastChildKey) != null)node = this.keyMap.get(node.lastChildKey);
        var _node_key;
        return (_node_key = node === null || node === void 0 ? void 0 : node.key) !== null && _node_key !== void 0 ? _node_key : null;
    }
    getItem(key) {
        var _this_keyMap_get;
        return (_this_keyMap_get = this.keyMap.get(key)) !== null && _this_keyMap_get !== void 0 ? _this_keyMap_get : null;
    }
    at() {
        throw new Error("Not implemented");
    }
    clone() {
        // We need to clone using this.constructor so that subclasses have the right prototype.
        // TypeScript isn't happy about this yet.
        // https://github.com/microsoft/TypeScript/issues/3841
        let Constructor = this.constructor;
        let collection = new Constructor();
        collection.keyMap = new Map(this.keyMap);
        collection.firstKey = this.firstKey;
        collection.lastKey = this.lastKey;
        return collection;
    }
    addNode(node) {
        if (this.frozen) throw new Error("Cannot add a node to a frozen collection");
        this.keyMap.set(node.key, node);
    }
    removeNode(key) {
        if (this.frozen) throw new Error("Cannot remove a node to a frozen collection");
        this.keyMap.delete(key);
    }
    commit(firstKey, lastKey, isSSR = false) {
        if (this.frozen) throw new Error("Cannot commit a frozen collection");
        this.firstKey = firstKey;
        this.lastKey = lastKey;
        this.frozen = !isSSR;
    }
    constructor(){
        this.keyMap = new Map();
        this.firstKey = null;
        this.lastKey = null;
        this.frozen = false;
    }
}
class $7135fc7d473fd974$export$b34a105447964f9f extends (/* unused pure expression or super */ null && ($7135fc7d473fd974$var$BaseNode)) {
    createElement(type) {
        return new $7135fc7d473fd974$export$dc064fe9e59310fd(type, this);
    }
    /**
   * Lazily gets a mutable instance of a Node. If the node has already
   * been cloned during this update cycle, it just returns the existing one.
   */ getMutableNode(element) {
        let node = element.node;
        if (!this.mutatedNodes.has(element)) {
            node = element.node.clone();
            this.mutatedNodes.add(element);
            element.node = node;
        }
        this.markDirty(element);
        return node;
    }
    getMutableCollection() {
        if (!this.isSSR && !this.collectionMutated) {
            this.collection = this.collection.clone();
            this.collectionMutated = true;
        }
        return this.collection;
    }
    markDirty(node) {
        this.dirtyNodes.add(node);
    }
    startTransaction() {
        this.transactionCount++;
    }
    endTransaction() {
        this.transactionCount--;
    }
    addNode(element) {
        let collection = this.getMutableCollection();
        if (!collection.getItem(element.node.key)) {
            collection.addNode(element.node);
            for (let child of element)this.addNode(child);
        }
        this.markDirty(element);
    }
    removeNode(node) {
        for (let child of node){
            child.parentNode = null;
            this.removeNode(child);
        }
        let collection = this.getMutableCollection();
        collection.removeNode(node.node.key);
        this.markDirty(node);
    }
    /** Finalizes the collection update, updating all nodes and freezing the collection. */ getCollection() {
        if (this.transactionCount > 0) return this.collection;
        this.updateCollection();
        return this.collection;
    }
    updateCollection() {
        for (let element of this.dirtyNodes)if (element instanceof $7135fc7d473fd974$export$dc064fe9e59310fd && element.parentNode) element.updateNode();
        this.dirtyNodes.clear();
        if (this.mutatedNodes.size) {
            var _this_firstChild, _this_lastChild;
            let collection = this.getMutableCollection();
            for (let element of this.mutatedNodes)if (element.parentNode) collection.addNode(element.node);
            var _this_firstChild_node_key, _this_lastChild_node_key;
            collection.commit((_this_firstChild_node_key = (_this_firstChild = this.firstChild) === null || _this_firstChild === void 0 ? void 0 : _this_firstChild.node.key) !== null && _this_firstChild_node_key !== void 0 ? _this_firstChild_node_key : null, (_this_lastChild_node_key = (_this_lastChild = this.lastChild) === null || _this_lastChild === void 0 ? void 0 : _this_lastChild.node.key) !== null && _this_lastChild_node_key !== void 0 ? _this_lastChild_node_key : null, this.isSSR);
            this.mutatedNodes.clear();
        }
        this.collectionMutated = false;
    }
    queueUpdate() {
        // Don't emit any updates if there is a transaction in progress.
        // queueUpdate should be called again after the transaction.
        if (this.dirtyNodes.size === 0 || this.transactionCount > 0) return;
        for (let fn of this.subscriptions)fn();
    }
    subscribe(fn) {
        this.subscriptions.add(fn);
        return ()=>this.subscriptions.delete(fn);
    }
    resetAfterSSR() {
        if (this.isSSR) {
            this.isSSR = false;
            this.firstChild = null;
            this.lastChild = null;
            this.nodeId = 0;
        }
    }
    constructor(collection){
        // @ts-ignore
        super(null);
        this.nodeType = 11 // DOCUMENT_FRAGMENT_NODE
        ;
        this.ownerDocument = this;
        this.dirtyNodes = new Set();
        this.isSSR = false;
        this.nodeId = 0;
        this.nodesByProps = new WeakMap();
        this.mutatedNodes = new Set();
        this.subscriptions = new Set();
        this.transactionCount = 0;
        this.collection = collection;
        this.collectionMutated = true;
    }
}
function $7135fc7d473fd974$export$727c8fc270210f13(props) {
    let { children: children, items: items, idScope: idScope, addIdAndValue: addIdAndValue } = props;
    let cache = (0, $dGqE5$useMemo)(()=>new WeakMap(), []);
    return (0, $dGqE5$useMemo)(()=>{
        if (items && typeof children === "function") {
            let res = [];
            for (let item of items){
                let rendered = cache.get(item);
                if (!rendered) {
                    rendered = children(item);
                    if (rendered.key == null) {
                        var _rendered_props_id, _ref;
                        // @ts-ignore
                        let key = (_ref = (_rendered_props_id = rendered.props.id) !== null && _rendered_props_id !== void 0 ? _rendered_props_id : item.key) !== null && _ref !== void 0 ? _ref : item.id;
                        // eslint-disable-next-line max-depth
                        if (key == null) throw new Error("Could not determine key for item");
                        // eslint-disable-next-line max-depth
                        if (idScope) key = idScope + ":" + key;
                        // TODO: only works if wrapped Item passes through id...
                        rendered = /*#__PURE__*/ (0, $dGqE5$cloneElement)(rendered, addIdAndValue ? {
                            key: key,
                            id: key,
                            value: item
                        } : {
                            key: key
                        });
                    }
                    cache.set(item, rendered);
                }
                res.push(rendered);
            }
            return res;
        } else if (typeof children !== "function") return children;
    }, [
        children,
        items,
        cache,
        idScope,
        addIdAndValue
    ]);
}
function $7135fc7d473fd974$export$901dbff4e54a6dd0(props) {
    return $7135fc7d473fd974$export$727c8fc270210f13({
        ...props,
        addIdAndValue: true
    });
}
const $7135fc7d473fd974$var$ShallowRenderContext = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(false)));
function $7135fc7d473fd974$export$6cd28814d92fa9c9(props, initialCollection) {
    let { collection: collection, document: document } = $7135fc7d473fd974$export$7cd71aa5ddd6dc4e(initialCollection);
    let portal = $7135fc7d473fd974$export$ad42d5efb4461b31(props, document);
    return {
        portal: portal,
        collection: collection
    };
}
// React 16 and 17 don't support useSyncExternalStore natively, and the shim provided by React does not support getServerSnapshot.
// This wrapper uses the shim, but additionally calls getServerSnapshot during SSR (according to SSRProvider).
function $7135fc7d473fd974$var$useSyncExternalStoreFallback(subscribe, getSnapshot, getServerSnapshot) {
    let isSSR = (0, $b5e257d569688ac6$export$535bd6ca7f90a273)();
    let isSSRRef = (0, react.useRef)(isSSR);
    // This is read immediately inside the wrapper, which also runs during render.
    // We just need a ref to avoid invalidating the callback itself, which
    // would cause React to re-run the callback more than necessary.
    // eslint-disable-next-line rulesdir/pure-render
    isSSRRef.current = isSSR;
    let getSnapshotWrapper = (0, react.useCallback)(()=>{
        return isSSRRef.current ? getServerSnapshot() : getSnapshot();
    }, [
        getSnapshot,
        getServerSnapshot
    ]);
    return (0, shim.useSyncExternalStore)(subscribe, getSnapshotWrapper);
}
const $7135fc7d473fd974$var$useSyncExternalStore = typeof (0, react)["useSyncExternalStore"] === "function" ? (0, react)["useSyncExternalStore"] : $7135fc7d473fd974$var$useSyncExternalStoreFallback;
function $7135fc7d473fd974$export$7cd71aa5ddd6dc4e(initialCollection) {
    // The document instance is mutable, and should never change between renders.
    // useSyncExternalStore is used to subscribe to updates, which vends immutable Collection objects.
    let document = (0, $dGqE5$useMemo)(()=>new $7135fc7d473fd974$export$b34a105447964f9f(initialCollection || new $7135fc7d473fd974$export$408d25a4e12db025()), [
        initialCollection
    ]);
    let subscribe = (0, $dGqE5$useCallback)((fn)=>document.subscribe(fn), [
        document
    ]);
    let getSnapshot = (0, $dGqE5$useCallback)(()=>{
        let collection = document.getCollection();
        if (document.isSSR) // After SSR is complete, reset the document to empty so it is ready for React to render the portal into.
        // We do this _after_ getting the collection above so that the collection still has content in it from SSR
        // during the current render, before React has finished the client render.
        document.resetAfterSSR();
        return collection;
    }, [
        document
    ]);
    let getServerSnapshot = (0, $dGqE5$useCallback)(()=>{
        document.isSSR = true;
        return document.getCollection();
    }, [
        document
    ]);
    let collection = $7135fc7d473fd974$var$useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    return {
        collection: collection,
        document: document
    };
}
const $7135fc7d473fd974$var$SSRContext = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $7135fc7d473fd974$export$8c25dea96356a8b6 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $7135fc7d473fd974$export$ad42d5efb4461b31(props, document) {
    let ctx = (0, $dGqE5$useContext)($7135fc7d473fd974$export$8c25dea96356a8b6);
    let doc = document !== null && document !== void 0 ? document : ctx;
    let children = $7135fc7d473fd974$export$901dbff4e54a6dd0(props);
    let wrappedChildren = (0, $dGqE5$useMemo)(()=>/*#__PURE__*/ (0, $dGqE5$react).createElement($7135fc7d473fd974$var$ShallowRenderContext.Provider, {
            value: true
        }, children), [
        children
    ]);
    // During SSR, we render the content directly, and append nodes to the document during render.
    // The collection children return null so that nothing is actually rendered into the HTML.
    return (0, $dGqE5$useIsSSR)() ? /*#__PURE__*/ (0, $dGqE5$react).createElement($7135fc7d473fd974$var$SSRContext.Provider, {
        value: doc
    }, wrappedChildren) : /*#__PURE__*/ (0, $dGqE5$createPortal)(wrappedChildren, doc);
}
function $7135fc7d473fd974$export$813b5978dd974d8(props) {
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, $7135fc7d473fd974$export$ad42d5efb4461b31(props));
}
function $7135fc7d473fd974$export$aeba0b1fb3dcd8b8(Element, props, ref) {
    let isShallow = (0, $dGqE5$useContext)($7135fc7d473fd974$var$ShallowRenderContext);
    var _useSSRCollectionNode;
    if (isShallow) // Elements cannot be re-parented, so the context will always be there.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (_useSSRCollectionNode = $7135fc7d473fd974$export$e7c29ae2353b16ea(Element, props, ref, "children" in props ? props.children : null)) !== null && _useSSRCollectionNode !== void 0 ? _useSSRCollectionNode : /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null);
    return null;
}
function $7135fc7d473fd974$export$636783d3732b5559(props, ref, rendered) {
    // Return a callback ref that sets the props object on the fake DOM node.
    return (0, $dGqE5$useCallback)((element)=>{
        element === null || element === void 0 ? void 0 : element.setProps(props, ref, rendered);
    }, [
        props,
        ref,
        rendered
    ]);
}
function $7135fc7d473fd974$export$e7c29ae2353b16ea(Type, props, ref, rendered, children) {
    // During SSR, portals are not supported, so the collection children will be wrapped in an SSRContext.
    // Since SSR occurs only once, we assume that the elements are rendered in order and never re-render.
    // Therefore we can create elements in our collection document during render so that they are in the
    // collection by the time we need to use the collection to render to the real DOM.
    // After hydration, we switch to client rendering using the portal.
    let itemRef = $7135fc7d473fd974$export$636783d3732b5559(props, ref, rendered);
    let parentNode = (0, $dGqE5$useContext)($7135fc7d473fd974$var$SSRContext);
    if (parentNode) {
        // Guard against double rendering in strict mode.
        let element = parentNode.ownerDocument.nodesByProps.get(props);
        if (!element) {
            element = parentNode.ownerDocument.createElement(Type);
            element.setProps(props, ref, rendered);
            parentNode.appendChild(element);
            parentNode.ownerDocument.updateCollection();
            parentNode.ownerDocument.nodesByProps.set(props, element);
        }
        return children ? /*#__PURE__*/ (0, $dGqE5$react).createElement($7135fc7d473fd974$var$SSRContext.Provider, {
            value: element
        }, children) : null;
    }
    // @ts-ignore
    return /*#__PURE__*/ (0, $dGqE5$react).createElement(Type, {
        ref: itemRef
    }, children);
}
function $7135fc7d473fd974$var$Item(props, ref) {
    return $7135fc7d473fd974$export$e7c29ae2353b16ea("item", props, ref, props.children);
}
const $7135fc7d473fd974$export$6d08773d2e66f8f2 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($7135fc7d473fd974$var$Item)));
function $7135fc7d473fd974$var$Section(props, ref) {
    let children = $7135fc7d473fd974$export$901dbff4e54a6dd0(props);
    return $7135fc7d473fd974$export$e7c29ae2353b16ea("section", props, ref, null, children);
}
const $7135fc7d473fd974$export$6e2c8f0811a474ce = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($7135fc7d473fd974$var$Section)));
const $7135fc7d473fd974$export$db36075d98ba73d3 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $7135fc7d473fd974$export$4feb769f8ddf26c5 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $7135fc7d473fd974$export$fb8073518f34e6ec(props) {
    let ctx = (0, $dGqE5$useContext)($7135fc7d473fd974$export$db36075d98ba73d3);
    props = (0, $dGqE5$mergeProps)(ctx, props);
    let renderer = typeof props.children === "function" ? props.children : null;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement($7135fc7d473fd974$export$4feb769f8ddf26c5.Provider, {
        value: renderer
    }, $7135fc7d473fd974$export$901dbff4e54a6dd0(props));
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $64fa3d84918910a7$export$91172ebb93c441a2 = Symbol("callback");
const $64fa3d84918910a7$export$8e0ef2c5844bfb6b = Symbol("default");
function $64fa3d84918910a7$export$2881499e37b75b9a({ values: values, children: children }) {
    for (let [Context, value] of values)// @ts-ignore
    children = /*#__PURE__*/ (0, react).createElement(Context.Provider, {
        value: value
    }, children);
    return children;
}
function $64fa3d84918910a7$export$4d86445c2cf5e3(props) {
    let { className: className, style: style, children: children, defaultClassName: defaultClassName, defaultChildren: defaultChildren, values: values } = props;
    return (0, react.useMemo)(()=>{
        let computedClassName;
        let computedStyle;
        let computedChildren;
        if (typeof className === "function") computedClassName = className(values);
        else computedClassName = className;
        if (typeof style === "function") computedStyle = style(values);
        else computedStyle = style;
        if (typeof children === "function") computedChildren = children(values);
        else if (children == null) computedChildren = defaultChildren;
        else computedChildren = children;
        return {
            className: computedClassName !== null && computedClassName !== void 0 ? computedClassName : defaultClassName,
            style: computedStyle,
            children: computedChildren,
            "data-rac": ""
        };
    }, [
        className,
        style,
        children,
        defaultClassName,
        defaultChildren,
        values
    ]);
}
function $64fa3d84918910a7$export$fabf2dc03a41866e(context, slot) {
    let ctx = (0, react.useContext)(context);
    if (slot === null) // An explicit `null` slot means don't use context.
    return null;
    if (ctx && typeof ctx === "object" && "slots" in ctx && ctx.slots) {
        if (!slot && !ctx.slots[$64fa3d84918910a7$export$8e0ef2c5844bfb6b]) throw new Error("A slot prop is required");
        let slotKey = slot || $64fa3d84918910a7$export$8e0ef2c5844bfb6b;
        if (!ctx.slots[slotKey]) // @ts-ignore
        throw new Error(`Invalid slot "${slot}". Valid slot names are ` + new Intl.ListFormat().format(Object.keys(ctx.slots).map((p)=>`"${p}"`)) + ".");
        return ctx.slots[slotKey];
    }
    // @ts-ignore
    return ctx;
}
function $64fa3d84918910a7$export$29f1550f4b0d4415(props, ref, context) {
    let ctx = $64fa3d84918910a7$export$fabf2dc03a41866e(context, props.slot) || {};
    // @ts-ignore - TS says "Type 'unique symbol' cannot be used as an index type." but not sure why.
    let { ref: contextRef, [$64fa3d84918910a7$export$91172ebb93c441a2]: callback, ...contextProps } = ctx;
    let mergedRef = (0, $df56164dff5785e2$export$4338b53315abf666)((0, react.useMemo)(()=>(0, $5dc95899b306f630$export$c9058316764c140e)(ref, contextRef), [
        ref,
        contextRef
    ]));
    let mergedProps = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
    // A parent component might need the props from a child, so call slot callback if needed.
    (0, react.useEffect)(()=>{
        if (callback) callback(props);
    }, [
        callback,
        props
    ]);
    return [
        mergedProps,
        mergedRef
    ];
}
function $64fa3d84918910a7$export$9d4c57ee4c6ffdd8() {
    // Assume we do have the slot in the initial render.
    let [hasSlot, setHasSlot] = (0, react.useState)(true);
    let hasRun = (0, react.useRef)(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (0, react.useCallback)((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (!hasRun.current) setHasSlot(false);
    }, []);
    return [
        ref,
        hasSlot
    ];
}
function $64fa3d84918910a7$export$6d3443f2c48bfc20(ref, isReady = true) {
    let [isEntering, setEntering] = (0, $dGqE5$useState)(true);
    $64fa3d84918910a7$var$useAnimation(ref, isEntering && isReady, (0, $dGqE5$useCallback)(()=>setEntering(false), []));
    return isEntering && isReady;
}
function $64fa3d84918910a7$export$45fda7c47f93fd48(ref, isOpen) {
    // State to trigger a re-render after animation is complete, which causes the element to be removed from the DOM.
    // Ref to track the state we're in, so we don't immediately reset isExiting to true after the animation.
    let [isExiting, setExiting] = (0, $dGqE5$useState)(false);
    let [exitState, setExitState] = (0, $dGqE5$useState)("idle");
    // If isOpen becomes false, set isExiting to true.
    if (!isOpen && ref.current && exitState === "idle") {
        isExiting = true;
        setExiting(true);
        setExitState("exiting");
    }
    // If we exited, and the element has been removed, reset exit state to idle.
    if (!ref.current && exitState === "exited") setExitState("idle");
    $64fa3d84918910a7$var$useAnimation(ref, isExiting, (0, $dGqE5$useCallback)(()=>{
        setExitState("exited");
        setExiting(false);
    }, []));
    return isExiting;
}
function $64fa3d84918910a7$var$useAnimation(ref, isActive, onEnd) {
    let prevAnimation = (0, $dGqE5$useRef)(null);
    if (isActive && ref.current) // This is ok because we only read it in the layout effect below, immediately after the commit phase.
    // We could move this to another effect that runs every render, but this would be unnecessarily slow.
    // We only need the computed style right before the animation becomes active.
    // eslint-disable-next-line rulesdir/pure-render
    prevAnimation.current = window.getComputedStyle(ref.current).animation;
    (0, $dGqE5$useLayoutEffect)(()=>{
        if (isActive && ref.current) {
            // Make sure there's actually an animation, and it wasn't there before we triggered the update.
            let computedStyle = window.getComputedStyle(ref.current);
            if (computedStyle.animationName !== "none" && computedStyle.animation !== prevAnimation.current) {
                let onAnimationEnd = (e)=>{
                    if (e.target === ref.current) {
                        element.removeEventListener("animationend", onAnimationEnd);
                        (0, $dGqE5$reactdom).flushSync(()=>{
                            onEnd();
                        });
                    }
                };
                let element = ref.current;
                element.addEventListener("animationend", onAnimationEnd);
                return ()=>{
                    element.removeEventListener("animationend", onAnimationEnd);
                };
            } else onEnd();
        }
    }, [
        ref,
        isActive,
        onEnd
    ]);
}
// React doesn't understand the <template> element, which doesn't have children like a normal element.
// It will throw an error during hydration when it expects the firstChild to contain content rendered
// on the server, when in reality, the browser will have placed this inside the `content` document fragment.
// This monkey patches the firstChild property for our special hidden template elements to work around this error.
// See https://github.com/facebook/react/issues/19932
if (typeof HTMLTemplateElement !== "undefined") {
    const getFirstChild = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild").get;
    Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
        configurable: true,
        enumerable: true,
        get: function() {
            if (this.dataset.reactAriaHidden) return this.content.firstChild;
            else return getFirstChild.call(this);
        }
    });
}
const $64fa3d84918910a7$export$94b6d0abf7d33e8c = /*#__PURE__*/ (0, react.createContext)(false);
// Portal to nowhere
const $64fa3d84918910a7$var$hiddenFragment = typeof DocumentFragment !== "undefined" ? new DocumentFragment() : null;
function $64fa3d84918910a7$export$8dc98ba7eadeaa56(props) {
    let isHidden = (0, $dGqE5$useContext)($64fa3d84918910a7$export$94b6d0abf7d33e8c);
    let isSSR = (0, $dGqE5$useIsSSR)();
    if (isHidden) // Don't hide again if we are already hidden.
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, props.children);
    let children = /*#__PURE__*/ (0, $dGqE5$react).createElement($64fa3d84918910a7$export$94b6d0abf7d33e8c.Provider, {
        value: true
    }, props.children);
    // In SSR, portals are not supported by React. Instead, render into a <template>
    // element, which the browser will never display to the user. In addition, the
    // content is not part of the DOM tree, so it won't affect ids or other accessibility attributes.
    return isSSR ? /*#__PURE__*/ (0, $dGqE5$react).createElement("template", {
        "data-react-aria-hidden": true
    }, children) : /*#__PURE__*/ (0, $dGqE5$reactdom).createPortal(children, $64fa3d84918910a7$var$hiddenFragment);
}
function $64fa3d84918910a7$export$86427a43e3e48ebb(fn) {
    let Wrapper = (props, ref)=>{
        let isHidden = (0, react.useContext)($64fa3d84918910a7$export$94b6d0abf7d33e8c);
        if (isHidden) return null;
        return fn(props, ref);
    };
    // @ts-ignore - for react dev tools
    Wrapper.displayName = fn.displayName || fn.name;
    return (0, react).forwardRef(Wrapper);
}
function $64fa3d84918910a7$export$ef03459518577ad4(props) {
    const prefix = /^(data-.*)$/;
    let filteredProps = {};
    for(const prop in props)if (!prefix.test(prop)) filteredProps[prop] = props[prop];
    return filteredProps;
}



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $4f118338184dc1d9$export$e2509388b49734e7 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $4f118338184dc1d9$var$Link(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $4f118338184dc1d9$export$e2509388b49734e7);
    let ElementType = props.href ? "a" : "span";
    let { linkProps: linkProps, isPressed: isPressed } = (0, $dGqE5$useLink)({
        ...props,
        elementType: ElementType
    }, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)(props);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)();
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-Link",
        values: {
            isCurrent: !!props["aria-current"],
            isDisabled: props.isDisabled || false,
            isPressed: isPressed,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement(ElementType, {
        ref: ref,
        slot: props.slot || undefined,
        ...(0, $dGqE5$mergeProps)(renderProps, linkProps, hoverProps, focusProps),
        "data-focused": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-pressed": isPressed || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-current": !!props["aria-current"] || undefined,
        "data-disabled": props.isDisabled || undefined
    }, renderProps.children);
}
/**
 * A link allows a user to navigate to another page or resource within a web page
 * or application.
 */ const $4f118338184dc1d9$export$a6c7ac8248d6e38a = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($4f118338184dc1d9$var$Link)));



const $778035c5624f61e7$export$65596d3621b0a4a0 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $778035c5624f61e7$var$Breadcrumbs(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $778035c5624f61e7$export$65596d3621b0a4a0);
    let { portal: portal, collection: collection } = (0, $7135fc7d473fd974$export$6cd28814d92fa9c9)(props);
    // Render the portal first so that we have the collection by the time we render the DOM in SSR
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, portal, /*#__PURE__*/ (0, $dGqE5$react).createElement($778035c5624f61e7$var$BreadcrumbsInner, {
        props: props,
        collection: collection,
        breadcrumbsRef: ref
    }));
}
function $778035c5624f61e7$var$BreadcrumbsInner({ props: props, collection: collection, breadcrumbsRef: ref }) {
    var _props_className;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("ol", {
        ref: ref,
        ...(0, $dGqE5$filterDOMProps)(props, {
            labelable: true
        }),
        slot: props.slot || undefined,
        style: props.style,
        className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : "react-aria-Breadcrumbs"
    }, [
        ...collection
    ].map((node, i)=>/*#__PURE__*/ (0, $dGqE5$react).createElement($778035c5624f61e7$var$BreadcrumbItem, {
            key: node.key,
            node: node,
            isCurrent: i === collection.size - 1,
            isDisabled: props.isDisabled,
            onAction: props.onAction
        })));
}
/**
 * Breadcrumbs display a hierarchy of links to the current page or resource in an application.
 */ const $778035c5624f61e7$export$2dc68d50d56fbbd = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($778035c5624f61e7$var$Breadcrumbs)));
function $778035c5624f61e7$var$Breadcrumb(props, ref) {
    return (0, $7135fc7d473fd974$export$e7c29ae2353b16ea)("item", props, ref, props.children);
}
/**
 * A Breadcrumb represents an individual item in a `<Breadcrumbs>` list.
 */ const $778035c5624f61e7$export$dabcc1ec9dd9d1cc = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($778035c5624f61e7$var$Breadcrumb)));
function $778035c5624f61e7$var$BreadcrumbItem({ node: node, isCurrent: isCurrent, isDisabled: isDisabled, onAction: onAction }) {
    // Recreating useBreadcrumbItem because we want to use composition instead of having the link builtin.
    let linkProps = {
        "aria-current": isCurrent ? "page" : null,
        isDisabled: isDisabled || isCurrent,
        onPress: ()=>{
            return onAction === null || onAction === void 0 ? void 0 : onAction(node.key);
        }
    };
    var _node_props_className;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("li", {
        ...(0, $dGqE5$filterDOMProps)(node.props),
        style: node.props.style,
        className: (_node_props_className = node.props.className) !== null && _node_props_className !== void 0 ? _node_props_className : "react-aria-Breadcrumb"
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $4f118338184dc1d9$export$e2509388b49734e7).Provider, {
        value: linkProps
    }, node.rendered));
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $d2b4bc8c273e7be6$var$additionalButtonHTMLAttributes = new Set([
    "form",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "name",
    "value"
]);
const $d2b4bc8c273e7be6$export$24d547caef80ccd1 = /*#__PURE__*/ (0, react.createContext)({});
function $d2b4bc8c273e7be6$var$Button(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $d2b4bc8c273e7be6$export$24d547caef80ccd1);
    let ctx = props;
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $701a24aa0da5b062$export$ea18c227d4417cc3)(props, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $f7dceffc5ad7768b$export$4e328f61c538687f)(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $6179b936705e76d3$export$ae780daf29e6d456)(props);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isHovered: isHovered,
            isPressed: isPressed,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.isDisabled || false
        },
        defaultClassName: "react-aria-Button"
    });
    return /*#__PURE__*/ (0, react).createElement("button", {
        ...(0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
            propNames: $d2b4bc8c273e7be6$var$additionalButtonHTMLAttributes
        }),
        ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(buttonProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-pressed": ctx.isPressed || isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined
    });
}
/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 */ const $d2b4bc8c273e7be6$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, $64fa3d84918910a7$export$86427a43e3e48ebb)($d2b4bc8c273e7be6$var$Button);


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $5cb03073d3f54797$export$d688439359537581 = /*#__PURE__*/ (0, react.createContext)({});
function $5cb03073d3f54797$var$Heading(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $5cb03073d3f54797$export$d688439359537581);
    let { children: children, level: level = 3, className: className, ...domProps } = props;
    let Element = `h${level}`;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement(Element, {
        ...domProps,
        className: className !== null && className !== void 0 ? className : "react-aria-Heading"
    }, children);
}
const $5cb03073d3f54797$export$a8a3e93435678ff9 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($5cb03073d3f54797$var$Heading)));



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $514c0188e459b4c0$export$9afb8bc826b033ea = /*#__PURE__*/ (0, react.createContext)({});
function $514c0188e459b4c0$var$Text(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $514c0188e459b4c0$export$9afb8bc826b033ea);
    let { elementType: ElementType = "span", ...domProps } = props;
    // @ts-ignore
    return /*#__PURE__*/ (0, $dGqE5$react).createElement(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
}
const $514c0188e459b4c0$export$5f1af8db9871e1d6 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($514c0188e459b4c0$var$Text)));


const $dfd62f934fc76fed$export$3b805cea1f178355 = /*#__PURE__*/ (0, react.createContext)({});
const $dfd62f934fc76fed$export$233dd9682e1ad64b = /*#__PURE__*/ (0, react.createContext)({});
const $dfd62f934fc76fed$export$9e31dcedda1dadc7 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $dfd62f934fc76fed$export$5e0fc348c00f87a0 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $dfd62f934fc76fed$var$Calendar(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $dfd62f934fc76fed$export$3b805cea1f178355);
    let { locale: locale } = (0, $dGqE5$useLocale)();
    let state = (0, $dGqE5$useCalendarState)({
        ...props,
        locale: locale,
        createCalendar: $dGqE5$createCalendar
    });
    let { calendarProps: calendarProps, prevButtonProps: prevButtonProps, nextButtonProps: nextButtonProps, errorMessageProps: errorMessageProps, title: title } = (0, $dGqE5$useCalendar)(props, state);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            state: state,
            isDisabled: props.isDisabled || false,
            isInvalid: state.isValueInvalid
        },
        defaultClassName: "react-aria-Calendar"
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...renderProps,
        ...calendarProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": state.isValueInvalid || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    slots: {
                        previous: prevButtonProps,
                        next: nextButtonProps
                    }
                }
            ],
            [
                (0, $5cb03073d3f54797$export$d688439359537581),
                {
                    "aria-hidden": true,
                    level: 2,
                    children: title
                }
            ],
            [
                $dfd62f934fc76fed$export$9e31dcedda1dadc7,
                state
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$VisuallyHidden), null, /*#__PURE__*/ (0, $dGqE5$react).createElement("h2", null, calendarProps["aria-label"])), renderProps.children, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$VisuallyHidden), null, /*#__PURE__*/ (0, $dGqE5$react).createElement("button", {
        "aria-label": nextButtonProps["aria-label"],
        disabled: nextButtonProps.isDisabled,
        onClick: ()=>state.focusNextPage(),
        tabIndex: -1
    }))));
}
/**
 * A calendar displays one or more date grids and allows users to select a single date.
 */ const $dfd62f934fc76fed$export$e1aef45b828286de = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($dfd62f934fc76fed$var$Calendar)));
function $dfd62f934fc76fed$var$RangeCalendar(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $dfd62f934fc76fed$export$233dd9682e1ad64b);
    let { locale: locale } = (0, $dGqE5$useLocale)();
    let state = (0, $dGqE5$useRangeCalendarState)({
        ...props,
        locale: locale,
        createCalendar: $dGqE5$createCalendar
    });
    let { calendarProps: calendarProps, prevButtonProps: prevButtonProps, nextButtonProps: nextButtonProps, errorMessageProps: errorMessageProps, title: title } = (0, $dGqE5$useRangeCalendar)(props, state, ref);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            state: state,
            isDisabled: props.isDisabled || false,
            isInvalid: state.isValueInvalid
        },
        defaultClassName: "react-aria-RangeCalendar"
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...renderProps,
        ...calendarProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": state.isValueInvalid || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    slots: {
                        previous: prevButtonProps,
                        next: nextButtonProps
                    }
                }
            ],
            [
                (0, $5cb03073d3f54797$export$d688439359537581),
                {
                    "aria-hidden": true,
                    level: 2,
                    children: title
                }
            ],
            [
                $dfd62f934fc76fed$export$5e0fc348c00f87a0,
                state
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$VisuallyHidden), null, /*#__PURE__*/ (0, $dGqE5$react).createElement("h2", null, calendarProps["aria-label"])), renderProps.children, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$VisuallyHidden), null, /*#__PURE__*/ (0, $dGqE5$react).createElement("button", {
        "aria-label": nextButtonProps["aria-label"],
        disabled: nextButtonProps.isDisabled,
        onClick: ()=>state.focusNextPage(),
        tabIndex: -1
    }))));
}
/**
 * A range calendar displays one or more date grids and allows users to select a contiguous range of dates.
 */ const $dfd62f934fc76fed$export$a4f5c8b89d277a8d = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($dfd62f934fc76fed$var$RangeCalendar)));
const $dfd62f934fc76fed$var$InternalCalendarGridContext = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $dfd62f934fc76fed$var$CalendarGrid(props, ref) {
    let calendarState = (0, $dGqE5$useContext)($dfd62f934fc76fed$export$9e31dcedda1dadc7);
    let rangeCalendarState = (0, $dGqE5$useContext)($dfd62f934fc76fed$export$5e0fc348c00f87a0);
    let state = calendarState !== null && calendarState !== void 0 ? calendarState : rangeCalendarState;
    let startDate = state.visibleRange.start;
    if (props.offset) startDate = startDate.add(props.offset);
    let { gridProps: gridProps, headerProps: headerProps, weekDays: weekDays } = (0, $dGqE5$useCalendarGrid)({
        startDate: startDate,
        endDate: (0, $dGqE5$endOfMonth)(startDate),
        weekdayStyle: props.weekdayStyle
    }, state);
    var _props_className;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement($dfd62f934fc76fed$var$InternalCalendarGridContext.Provider, {
        value: {
            headerProps: headerProps,
            weekDays: weekDays,
            startDate: startDate
        }
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("table", {
        ...(0, $dGqE5$filterDOMProps)(props),
        ...gridProps,
        ref: ref,
        style: props.style,
        className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : "react-aria-CalendarGrid"
    }, typeof props.children !== "function" ? props.children : /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, /*#__PURE__*/ (0, $dGqE5$react).createElement($dfd62f934fc76fed$export$22e2d15eaa4d2377, null, (day)=>/*#__PURE__*/ (0, $dGqE5$react).createElement($dfd62f934fc76fed$export$ad2135cac3a11b3d, null, day)), /*#__PURE__*/ (0, $dGqE5$react).createElement($dfd62f934fc76fed$export$e11f8ba65d857bff, null, props.children))));
}
/**
 * A calendar grid displays a single grid of days within a calendar or range calendar which
 * can be keyboard navigated and selected by the user.
 */ const $dfd62f934fc76fed$export$5bd780d491cfc46c = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($dfd62f934fc76fed$var$CalendarGrid)));
function $dfd62f934fc76fed$var$CalendarGridHeader(props, ref) {
    let { children: children, style: style, className: className } = props;
    let { headerProps: headerProps, weekDays: weekDays } = (0, $dGqE5$useContext)($dfd62f934fc76fed$var$InternalCalendarGridContext);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("thead", {
        ...(0, $dGqE5$filterDOMProps)(props),
        ...headerProps,
        ref: ref,
        style: style,
        className: className || "react-aria-CalendarGridHeader"
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("tr", null, weekDays.map((day, key)=>/*#__PURE__*/ (0, $dGqE5$react).cloneElement(children(day), {
            key: key
        }))));
}
/**
 * A calendar grid header displays a row of week day names at the top of a month.
 */ const $dfd62f934fc76fed$export$22e2d15eaa4d2377 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($dfd62f934fc76fed$var$CalendarGridHeader)));
function $dfd62f934fc76fed$var$CalendarHeaderCell(props, ref) {
    let { children: children, style: style, className: className } = props;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("th", {
        ...(0, $dGqE5$filterDOMProps)(props),
        ref: ref,
        style: style,
        className: className || "react-aria-CalendarHeaderCell"
    }, children);
}
/**
 * A calendar header cell displays a week day name at the top of a column within a calendar.
 */ const $dfd62f934fc76fed$export$ad2135cac3a11b3d = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($dfd62f934fc76fed$var$CalendarHeaderCell)));
function $dfd62f934fc76fed$var$CalendarGridBody(props, ref) {
    let { children: children, style: style, className: className } = props;
    let calendarState = (0, $dGqE5$useContext)($dfd62f934fc76fed$export$9e31dcedda1dadc7);
    let rangeCalendarState = (0, $dGqE5$useContext)($dfd62f934fc76fed$export$5e0fc348c00f87a0);
    let state = calendarState !== null && calendarState !== void 0 ? calendarState : rangeCalendarState;
    let { startDate: startDate } = (0, $dGqE5$useContext)($dfd62f934fc76fed$var$InternalCalendarGridContext);
    let { locale: locale } = (0, $dGqE5$useLocale)();
    let weeksInMonth = (0, $dGqE5$getWeeksInMonth)(startDate, locale);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("tbody", {
        ...(0, $dGqE5$filterDOMProps)(props),
        ref: ref,
        style: style,
        className: className || "react-aria-CalendarGridBody"
    }, [
        ...new Array(weeksInMonth).keys()
    ].map((weekIndex)=>/*#__PURE__*/ (0, $dGqE5$react).createElement("tr", {
            key: weekIndex
        }, state.getDatesInWeek(weekIndex, startDate).map((date, i)=>date ? /*#__PURE__*/ (0, $dGqE5$react).cloneElement(children(date), {
                key: i
            }) : /*#__PURE__*/ (0, $dGqE5$react).createElement("td", {
                key: i
            })))));
}
/**
 * A calendar grid body displays a grid of calendar cells within a month.
 */ const $dfd62f934fc76fed$export$e11f8ba65d857bff = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($dfd62f934fc76fed$var$CalendarGridBody)));
function $dfd62f934fc76fed$var$CalendarCell({ date: date, ...otherProps }, ref) {
    let calendarState = (0, $dGqE5$useContext)($dfd62f934fc76fed$export$9e31dcedda1dadc7);
    let rangeCalendarState = (0, $dGqE5$useContext)($dfd62f934fc76fed$export$5e0fc348c00f87a0);
    let state = calendarState !== null && calendarState !== void 0 ? calendarState : rangeCalendarState;
    var _useContext;
    let { startDate: currentMonth } = (_useContext = (0, $dGqE5$useContext)($dfd62f934fc76fed$var$InternalCalendarGridContext)) !== null && _useContext !== void 0 ? _useContext : {
        startDate: state.visibleRange.start
    };
    let objectRef = (0, $dGqE5$useObjectRef)(ref);
    let { cellProps: cellProps, buttonProps: buttonProps, ...states } = (0, $dGqE5$useCalendarCell)({
        date: date
    }, state, objectRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({
        isDisabled: states.isDisabled
    });
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)();
    let isOutsideMonth = !(0, $dGqE5$isSameMonth)(currentMonth, date);
    let isSelectionStart = false;
    let isSelectionEnd = false;
    if ("highlightedRange" in state && state.highlightedRange) {
        isSelectionStart = (0, $dGqE5$isSameDay)(date, state.highlightedRange.start);
        isSelectionEnd = (0, $dGqE5$isSameDay)(date, state.highlightedRange.end);
    }
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...otherProps,
        defaultChildren: states.formattedDate,
        defaultClassName: "react-aria-CalendarCell",
        values: {
            date: date,
            isHovered: isHovered,
            isOutsideMonth: isOutsideMonth,
            isFocusVisible: isFocusVisible,
            isSelectionStart: isSelectionStart,
            isSelectionEnd: isSelectionEnd,
            ...states
        }
    });
    let dataAttrs = {
        "data-focused": states.isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-unavailable": states.isUnavailable || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-outside-visible-range": states.isOutsideVisibleRange || undefined,
        "data-outside-month": isOutsideMonth || undefined,
        "data-selected": states.isSelected || undefined,
        "data-selection-start": isSelectionStart || undefined,
        "data-selection-end": isSelectionEnd || undefined,
        "data-invalid": states.isInvalid || undefined
    };
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("td", cellProps, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$mergeProps)((0, $dGqE5$filterDOMProps)(otherProps), buttonProps, focusProps, hoverProps, dataAttrs, renderProps),
        ref: objectRef
    }));
}
/**
 * A calendar cell displays a date cell within a calendar grid which can be selected by the user.
 */ const $dfd62f934fc76fed$export$5d847498420df57b = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($dfd62f934fc76fed$var$CalendarCell)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $01b77f81d0f07f68$export$75b6ee27786ba447 = /*#__PURE__*/ (0, react.createContext)({});
function $01b77f81d0f07f68$var$Label(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $01b77f81d0f07f68$export$75b6ee27786ba447);
    let { elementType: ElementType = "label", ...labelProps } = props;
    // @ts-ignore
    return /*#__PURE__*/ (0, $dGqE5$react).createElement(ElementType, {
        className: "react-aria-Label",
        ...labelProps,
        ref: ref
    });
}
const $01b77f81d0f07f68$export$b04be29aa201d4f5 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $64fa3d84918910a7$export$86427a43e3e48ebb)($01b77f81d0f07f68$var$Label)));




const $bc237834342dbd75$export$baf37c4be89255b8 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $bc237834342dbd75$export$139c5b8563afc1fc = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $bc237834342dbd75$var$CheckboxGroup(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $bc237834342dbd75$export$baf37c4be89255b8);
    let state = (0, $dGqE5$useCheckboxGroupState)(props);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { groupProps: groupProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $dGqE5$useCheckboxGroup)({
        ...props,
        label: label
    }, state);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isDisabled: state.isDisabled,
            isReadOnly: state.isReadOnly,
            isRequired: props.isRequired || false,
            isInvalid: state.isInvalid,
            state: state
        },
        defaultClassName: "react-aria-CheckboxGroup"
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...groupProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-readonly": state.isReadOnly || undefined,
        "data-required": props.isRequired || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-disabled": props.isDisabled || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $bc237834342dbd75$export$139c5b8563afc1fc,
                state
            ],
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: "span"
                }
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, renderProps.children));
}
const $bc237834342dbd75$export$b085522c77523c51 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $bc237834342dbd75$var$Checkbox(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $bc237834342dbd75$export$b085522c77523c51);
    let groupState = (0, $dGqE5$useContext)($bc237834342dbd75$export$139c5b8563afc1fc);
    let { inputProps: inputProps, isSelected: isSelected, isDisabled: isDisabled, isReadOnly: isReadOnly, isPressed: isPressedKeyboard } = groupState ? (0, $dGqE5$useCheckboxGroupItem)({
        ...props,
        // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
        // it's passed explicitly here to avoid typescript error (requires ignore).
        // @ts-ignore
        value: props.value,
        // ReactNode type doesn't allow function children.
        children: typeof props.children === "function" ? true : props.children
    }, groupState, ref) : (0, $dGqE5$useCheckbox)({
        ...props,
        children: typeof props.children === "function" ? true : props.children
    }, (0, $dGqE5$useToggleState)(props), ref);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dGqE5$useFocusRing)();
    let isInteractionDisabled = isDisabled || isReadOnly;
    // Handle press state for full label. Keyboard press state is returned by useCheckbox
    // since it is handled on the <input> element itself.
    let [isPressed, setPressed] = (0, $dGqE5$useState)(false);
    let { pressProps: pressProps } = (0, $dGqE5$usePress)({
        isDisabled: isInteractionDisabled,
        onPressStart (e) {
            if (e.pointerType !== "keyboard") setPressed(true);
        },
        onPressEnd (e) {
            if (e.pointerType !== "keyboard") setPressed(false);
        }
    });
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({
        isDisabled: isInteractionDisabled
    });
    let pressed = isInteractionDisabled ? false : isPressed || isPressedKeyboard;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        // TODO: should data attrs go on the label or on the <input>? useCheckbox passes them to the input...
        ...props,
        defaultClassName: "react-aria-Checkbox",
        values: {
            isSelected: isSelected,
            isIndeterminate: props.isIndeterminate || false,
            isPressed: pressed,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isInvalid: props.isInvalid || (groupState === null || groupState === void 0 ? void 0 : groupState.isInvalid) || false,
            isRequired: props.isRequired || false
        }
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("label", {
        ...(0, $dGqE5$mergeProps)(DOMProps, pressProps, hoverProps, renderProps),
        slot: props.slot || undefined,
        "data-selected": isSelected || undefined,
        "data-indeterminate": props.isIndeterminate || undefined,
        "data-pressed": pressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": isReadOnly || undefined,
        "data-invalid": props.isInvalid || (groupState === null || groupState === void 0 ? void 0 : groupState.isInvalid) || undefined,
        "data-required": props.isRequired || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$VisuallyHidden), {
        elementType: "span"
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("input", {
        ...inputProps,
        ...focusProps,
        ref: ref
    })), renderProps.children);
}
/**
 * A checkbox allows a user to select multiple items from a list of individual items, or
 * to mark one individual item as selected.
 */ const $bc237834342dbd75$export$48513f6b9f8ce62d = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($bc237834342dbd75$var$Checkbox)));
/**
 * A checkbox group allows a user to select multiple items from a list of options.
 */ const $bc237834342dbd75$export$4aa08d5625cb8ead = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($bc237834342dbd75$var$CheckboxGroup)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $3985021b0ad6602f$export$37fb8590cf2c088c = /*#__PURE__*/ (0, react.createContext)({});
function $3985021b0ad6602f$var$Input(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $3985021b0ad6602f$export$37fb8590cf2c088c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({});
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dGqE5$useFocusRing)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props["aria-invalid"] && props["aria-invalid"] !== "false";
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid: isInvalid
        },
        defaultClassName: "react-aria-Input"
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("input", {
        ...(0, $dGqE5$mergeProps)(props, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
}
/**
 * An input allows a user to input text.
 */ const $3985021b0ad6602f$export$f5b8910cec6cf069 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $64fa3d84918910a7$export$86427a43e3e48ebb)($3985021b0ad6602f$var$Input)));



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $d8f176866e6dc039$export$2cfc5be7a55829f6(options) {
    let dragAndDropHooks = (0, $dGqE5$useMemo)(()=>{
        let { onDrop: onDrop, onInsert: onInsert, onItemDrop: onItemDrop, onReorder: onReorder, onRootDrop: onRootDrop, getItems: getItems, renderDragPreview: renderDragPreview, renderDropIndicator: renderDropIndicator, dropTargetDelegate: dropTargetDelegate } = options;
        let isDraggable = !!getItems;
        let isDroppable = !!(onDrop || onInsert || onItemDrop || onReorder || onRootDrop);
        let hooks = {};
        if (isDraggable) {
            hooks.useDraggableCollectionState = function useDraggableCollectionStateOverride(props) {
                return (0, $dGqE5$useDraggableCollectionState)({
                    ...props,
                    ...options
                });
            };
            hooks.useDraggableCollection = (0, $dGqE5$useDraggableCollection);
            hooks.useDraggableItem = (0, $dGqE5$useDraggableItem);
            hooks.DragPreview = (0, $dGqE5$DragPreview);
            hooks.renderDragPreview = renderDragPreview;
        }
        if (isDroppable) {
            hooks.useDroppableCollectionState = function useDroppableCollectionStateOverride(props) {
                return (0, $dGqE5$useDroppableCollectionState)({
                    ...props,
                    ...options
                });
            }, hooks.useDroppableItem = (0, $dGqE5$useDroppableItem);
            hooks.useDroppableCollection = function useDroppableCollectionOverride(props, state, ref) {
                return (0, $dGqE5$useDroppableCollection)({
                    ...props,
                    ...options
                }, state, ref);
            };
            hooks.useDropIndicator = (0, $dGqE5$useDropIndicator);
            hooks.renderDropIndicator = renderDropIndicator;
            hooks.dropTargetDelegate = dropTargetDelegate;
            hooks.ListDropTargetDelegate = (0, $dGqE5$ListDropTargetDelegate);
        }
        return hooks;
    }, [
        options
    ]);
    return {
        dragAndDropHooks: dragAndDropHooks
    };
}
const $d8f176866e6dc039$export$f55761759794cf55 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $d8f176866e6dc039$var$DropIndicator(props, ref) {
    let { render: render } = (0, $dGqE5$useContext)($d8f176866e6dc039$export$f55761759794cf55);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, render(props, ref));
}
/**
 * A DropIndicator is rendered between items in a collection to indicate where dropped data will be inserted.
 */ const $d8f176866e6dc039$export$62ed72bc21f6b8a6 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($d8f176866e6dc039$var$DropIndicator)));
const $d8f176866e6dc039$export$d188a835a7bc5783 = /*#__PURE__*/ (0, react.createContext)({});




/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $72a5793c14baf454$export$e0e4026c12a8bdbb = /*#__PURE__*/ (0, react.createContext)({});
function $72a5793c14baf454$var$Header(originalProps, originalRef) {
    let [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(originalProps, originalRef, $72a5793c14baf454$export$e0e4026c12a8bdbb);
    let shallow = (0, $7135fc7d473fd974$export$aeba0b1fb3dcd8b8)("header", originalProps, originalRef);
    if (shallow) return shallow;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("header", {
        className: "react-aria-Header",
        ...props,
        ref: ref
    }, props.children);
}
const $72a5793c14baf454$export$8b251419efc915eb = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($72a5793c14baf454$var$Header)));



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




const $431f98aba6844401$export$6615d83f6de245ce = /*#__PURE__*/ (0, react.createContext)({});
function $431f98aba6844401$var$Separator(originalProps, originalRef) {
    let [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(originalProps, originalRef, $431f98aba6844401$export$6615d83f6de245ce);
    let { elementType: elementType, orientation: orientation, style: style, className: className } = props;
    let Element = elementType || "hr";
    if (Element === "hr" && orientation === "vertical") Element = "div";
    let { separatorProps: separatorProps } = (0, $dGqE5$useSeparator)({
        elementType: elementType,
        orientation: orientation
    });
    let shallow = (0, $7135fc7d473fd974$export$aeba0b1fb3dcd8b8)("separator", originalProps, originalRef);
    if (shallow) return shallow;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement(Element, {
        ...(0, $dGqE5$filterDOMProps)(props),
        ...separatorProps,
        style: style,
        className: className !== null && className !== void 0 ? className : "react-aria-Separator",
        ref: ref,
        slot: props.slot || undefined
    });
}
const $431f98aba6844401$export$1ff3c3f08ae963c0 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($431f98aba6844401$var$Separator)));



const $eed445e0843c11d0$export$7ff8f37d2d81a48d = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $eed445e0843c11d0$export$7c5906fe4f1f2af2 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $eed445e0843c11d0$var$ListBox(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $eed445e0843c11d0$export$7ff8f37d2d81a48d);
    let isHidden = (0, $dGqE5$useContext)((0, $64fa3d84918910a7$export$94b6d0abf7d33e8c));
    let state = (0, $dGqE5$useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
    let document = (0, $dGqE5$useContext)((0, $7135fc7d473fd974$export$8c25dea96356a8b6));
    // The structure of ListBox is a bit strange because it needs to work inside other components like ComboBox and Select.
    // Those components render two copies of their children so that the collection can be built even when the popover is closed.
    // The first copy sends a collection document via context which we render the collection portal into.
    // The second copy sends a ListState object via context which we use to render the ListBox without rebuilding the state.
    // Otherwise, we have a standalone ListBox, so we need to create a collection and state ourselves.
    if (document) return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $7135fc7d473fd974$export$813b5978dd974d8), props);
    if (state) return isHidden ? null : /*#__PURE__*/ (0, $dGqE5$react).createElement($eed445e0843c11d0$var$ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: ref
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement($eed445e0843c11d0$var$StandaloneListBox, {
        props: props,
        listBoxRef: ref
    });
}
function $eed445e0843c11d0$var$StandaloneListBox({ props: props, listBoxRef: listBoxRef }) {
    let { portal: portal, collection: collection } = (0, $7135fc7d473fd974$export$6cd28814d92fa9c9)(props);
    props = {
        ...props,
        collection: collection,
        children: null,
        items: null
    };
    let state = (0, $dGqE5$useListState)(props);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, portal, /*#__PURE__*/ (0, $dGqE5$react).createElement($eed445e0843c11d0$var$ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: listBoxRef
    }));
}
/**
 * A listbox displays a list of options and allows a user to select one or more of them.
 */ const $eed445e0843c11d0$export$41f133550aa26f48 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($eed445e0843c11d0$var$ListBox)));
function $eed445e0843c11d0$var$ListBoxInner({ state: state, props: props, listBoxRef: listBoxRef }) {
    let { dragAndDropHooks: dragAndDropHooks, layout: layout = "stack", orientation: orientation = "vertical" } = props;
    let { collection: collection, selectionManager: selectionManager } = state;
    let isListDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let isListDroppable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDroppableCollectionState);
    let { direction: direction } = (0, $dGqE5$useLocale)();
    let { disabledBehavior: disabledBehavior, disabledKeys: disabledKeys } = selectionManager;
    let collator = (0, $dGqE5$useCollator)({
        usage: "search",
        sensitivity: "base"
    });
    let keyboardDelegate = (0, $dGqE5$useMemo)(()=>props.keyboardDelegate || new (0, $dGqE5$ListKeyboardDelegate)({
            collection: collection,
            collator: collator,
            ref: listBoxRef,
            disabledKeys: disabledBehavior === "selection" ? new Set() : disabledKeys,
            layout: layout,
            orientation: orientation,
            direction: direction
        }), [
        collection,
        collator,
        listBoxRef,
        disabledBehavior,
        disabledKeys,
        orientation,
        direction,
        props.keyboardDelegate,
        layout
    ]);
    let { listBoxProps: listBoxProps } = (0, $dGqE5$useListBox)({
        ...props,
        shouldSelectOnPressUp: isListDraggable || props.shouldSelectOnPressUp,
        keyboardDelegate: keyboardDelegate
    }, state, listBoxRef);
    let children = (0, $7135fc7d473fd974$export$727c8fc270210f13)({
        items: collection,
        children: (item)=>{
            switch(item.type){
                case "section":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($eed445e0843c11d0$var$ListBoxSection, {
                        section: item
                    });
                case "separator":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $431f98aba6844401$export$1ff3c3f08ae963c0), item.props);
                case "item":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($eed445e0843c11d0$var$Option, {
                        item: item
                    });
                default:
                    throw new Error("Unsupported node type in Menu: " + item.type);
            }
        }
    });
    let dragHooksProvided = (0, $dGqE5$useRef)(isListDraggable);
    let dropHooksProvided = (0, $dGqE5$useRef)(isListDroppable);
    (0, $dGqE5$useEffect)(()=>{
        if (dragHooksProvided.current !== isListDraggable) console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
        if (dropHooksProvided.current !== isListDroppable) console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
    }, [
        isListDraggable,
        isListDroppable
    ]);
    let dragState = undefined;
    let dropState = undefined;
    let droppableCollection = undefined;
    let isRootDropTarget = false;
    let dragPreview = null;
    let preview = (0, $dGqE5$useRef)(null);
    if (isListDraggable && dragAndDropHooks) {
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: collection,
            selectionManager: selectionManager,
            preview: dragAndDropHooks.renderDragPreview ? preview : undefined
        });
        dragAndDropHooks.useDraggableCollection({}, dragState, listBoxRef);
        let DragPreview = dragAndDropHooks.DragPreview;
        dragPreview = dragAndDropHooks.renderDragPreview ? /*#__PURE__*/ (0, $dGqE5$react).createElement(DragPreview, {
            ref: preview
        }, dragAndDropHooks.renderDragPreview) : null;
    }
    if (isListDroppable && dragAndDropHooks) {
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: collection,
            selectionManager: selectionManager
        });
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection, listBoxRef, {
            orientation: orientation,
            layout: layout,
            direction: direction
        });
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate: keyboardDelegate,
            dropTargetDelegate: dropTargetDelegate
        }, dropState, listBoxRef);
        isRootDropTarget = dropState.isDropTarget({
            type: "root"
        });
    }
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)();
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        className: props.className,
        style: props.style,
        defaultClassName: "react-aria-ListBox",
        values: {
            isDropTarget: isRootDropTarget,
            isEmpty: state.collection.size === 0,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            layout: props.layout || "stack",
            state: state
        }
    });
    let emptyState = null;
    if (state.collection.size === 0 && props.renderEmptyState) emptyState = /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        // eslint-disable-next-line
        role: "option",
        style: {
            display: "contents"
        }
    }, props.renderEmptyState());
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$FocusScope), null, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$filterDOMProps)(props),
        ...(0, $dGqE5$mergeProps)(listBoxProps, focusProps, droppableCollection === null || droppableCollection === void 0 ? void 0 : droppableCollection.collectionProps),
        ...renderProps,
        ref: listBoxRef,
        slot: props.slot || undefined,
        "data-drop-target": isRootDropTarget || undefined,
        "data-empty": state.collection.size === 0 || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-layout": props.layout || "stack",
        "data-orientation": props.orientation || "vertical"
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $eed445e0843c11d0$export$7ff8f37d2d81a48d,
                props
            ],
            [
                $eed445e0843c11d0$export$7c5906fe4f1f2af2,
                state
            ],
            [
                (0, $d8f176866e6dc039$export$d188a835a7bc5783),
                {
                    dragAndDropHooks: dragAndDropHooks,
                    dragState: dragState,
                    dropState: dropState
                }
            ],
            [
                (0, $431f98aba6844401$export$6615d83f6de245ce),
                {
                    elementType: "div"
                }
            ],
            [
                (0, $d8f176866e6dc039$export$f55761759794cf55),
                {
                    render: $eed445e0843c11d0$var$ListBoxDropIndicatorWrapper
                }
            ]
        ]
    }, children), emptyState, dragPreview));
}
function $eed445e0843c11d0$var$ListBoxSection({ section: section, className: className, style: style }) {
    var _section_props, _section_props1;
    let state = (0, $dGqE5$useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
    let [headingRef, heading] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    var _section_arialabel;
    let { headingProps: headingProps, groupProps: groupProps } = (0, $dGqE5$useListBoxSection)({
        heading: heading,
        "aria-label": (_section_arialabel = section["aria-label"]) !== null && _section_arialabel !== void 0 ? _section_arialabel : undefined
    });
    let children = (0, $7135fc7d473fd974$export$727c8fc270210f13)({
        items: state.collection.getChildren(section.key),
        children: (item)=>{
            switch(item.type){
                case "header":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($eed445e0843c11d0$var$SectionHeader, {
                        item: item,
                        headingProps: headingProps,
                        headingRef: headingRef
                    });
                case "item":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($eed445e0843c11d0$var$Option, {
                        item: item
                    });
                default:
                    throw new Error("Unsupported element type in Section: " + item.type);
            }
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("section", {
        ...(0, $dGqE5$filterDOMProps)(section.props),
        ...groupProps,
        className: className || ((_section_props = section.props) === null || _section_props === void 0 ? void 0 : _section_props.className) || "react-aria-Section",
        style: style || ((_section_props1 = section.props) === null || _section_props1 === void 0 ? void 0 : _section_props1.style),
        ref: section.props.ref
    }, children);
}
// This is a separate component so that headingProps.id doesn't override the item key in useCachedChildren.
function $eed445e0843c11d0$var$SectionHeader({ item: item, headingProps: headingProps, headingRef: headingRef }) {
    let { ref: ref, ...otherProps } = item.props;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $72a5793c14baf454$export$8b251419efc915eb), {
        ...headingProps,
        ...otherProps,
        ref: (0, $dGqE5$mergeRefs)(headingRef, ref)
    }, item.rendered);
}
function $eed445e0843c11d0$var$Option({ item: item }) {
    let ref = (0, $dGqE5$useObjectRef)(item.props.ref);
    let state = (0, $dGqE5$useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
    let { shouldFocusOnHover: shouldFocusOnHover } = (0, $64fa3d84918910a7$export$fabf2dc03a41866e)($eed445e0843c11d0$export$7ff8f37d2d81a48d);
    let { dragAndDropHooks: dragAndDropHooks, dragState: dragState, dropState: dropState } = (0, $dGqE5$useContext)((0, $d8f176866e6dc039$export$d188a835a7bc5783));
    let { optionProps: optionProps, labelProps: labelProps, descriptionProps: descriptionProps, ...states } = (0, $dGqE5$useOption)({
        key: item.key
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({
        isDisabled: shouldFocusOnHover || !states.allowsSelection && !states.hasAction
    });
    if (shouldFocusOnHover) {
        hoverProps = {};
        isHovered = states.isFocused;
    }
    let draggableItem = null;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key
    }, dragState);
    let droppableItem = null;
    if (dropState && dragAndDropHooks) droppableItem = dragAndDropHooks.useDroppableItem({
        target: {
            type: "item",
            key: item.key,
            dropPosition: "on"
        }
    }, dropState, ref);
    let props = item.props;
    let isDragging = dragState && dragState.isDragging(item.key);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: "react-aria-Item",
        values: {
            ...states,
            isHovered: isHovered,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior,
            allowsDragging: !!dragState,
            isDragging: isDragging,
            isDropTarget: droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.isDropTarget
        }
    });
    let renderDropIndicator = (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.renderDropIndicator) || ((target)=>/*#__PURE__*/ (0, $dGqE5$react).createElement((0, $d8f176866e6dc039$export$62ed72bc21f6b8a6), {
            target: target
        }));
    (0, $dGqE5$useEffect)(()=>{
        if (!item.textValue) console.warn("A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.");
    }, [
        item.textValue
    ]);
    let ElementType = props.href ? "a" : "div";
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDropIndicator) && renderDropIndicator({
        type: "item",
        key: item.key,
        dropPosition: "before"
    }), /*#__PURE__*/ (0, $dGqE5$react).createElement(ElementType, {
        ...(0, $dGqE5$mergeProps)(optionProps, hoverProps, draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragProps, droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.dropProps),
        ...renderProps,
        ref: ref,
        "data-allows-dragging": !!dragState || undefined,
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": states.isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-dragging": isDragging || undefined,
        "data-drop-target": (droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.isDropTarget) || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === "none" ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        label: labelProps,
                        description: descriptionProps
                    }
                }
            ]
        ]
    }, renderProps.children)), (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDropIndicator) && state.collection.getKeyAfter(item.key) == null && renderDropIndicator({
        type: "item",
        key: item.key,
        dropPosition: "after"
    }));
}
function $eed445e0843c11d0$var$ListBoxDropIndicatorWrapper(props, ref) {
    ref = (0, $dGqE5$useObjectRef)(ref);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, $dGqE5$useContext)((0, $d8f176866e6dc039$export$d188a835a7bc5783));
    let { dropIndicatorProps: dropIndicatorProps, isHidden: isHidden, isDropTarget: isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, ref);
    if (isHidden) return null;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement($eed445e0843c11d0$var$ListBoxtDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        ref: ref
    });
}
function $eed445e0843c11d0$var$ListBoxtDropIndicator(props, ref) {
    let { dropIndicatorProps: dropIndicatorProps, isDropTarget: isDropTarget, ...otherProps } = props;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...otherProps,
        defaultClassName: "react-aria-DropIndicator",
        values: {
            isDropTarget: isDropTarget
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...dropIndicatorProps,
        ...renderProps,
        // eslint-disable-next-line
        role: "option",
        ref: ref,
        "data-drop-target": isDropTarget || undefined
    });
}
const $eed445e0843c11d0$var$ListBoxtDropIndicatorForwardRef = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($eed445e0843c11d0$var$ListBoxtDropIndicator)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $44f671af83e7d9e0$export$2de4954e8ae13b9f = /*#__PURE__*/ (0, react.createContext)({
    placement: "bottom"
});
function $44f671af83e7d9e0$var$OverlayArrow(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $44f671af83e7d9e0$export$2de4954e8ae13b9f);
    let placement = props.placement;
    let style = {
        position: "absolute",
        [placement]: "100%",
        transform: placement === "top" || placement === "bottom" ? "translateX(-50%)" : "translateY(-50%)"
    };
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-OverlayArrow",
        values: {
            placement: placement
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...props,
        ...renderProps,
        style: {
            ...renderProps.style,
            ...style
        },
        ref: ref,
        "data-placement": placement
    });
}
/**
 * An OverlayArrow renders a custom arrow element relative to an overlay element
 * such as a popover or tooltip such that it aligns with a trigger element.
 */ const $44f671af83e7d9e0$export$746d02f47f4d381 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($44f671af83e7d9e0$var$OverlayArrow)));





const $07b14b47974efb58$export$9b9a0cd73afb7ca4 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $07b14b47974efb58$var$Popover(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $07b14b47974efb58$export$9b9a0cd73afb7ca4);
    let contextState = (0, $dGqE5$useContext)((0, $de32f1b87079253c$export$d2f961adcb0afbe));
    let localState = (0, $dGqE5$useOverlayTriggerState)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let isExiting = (0, $64fa3d84918910a7$export$45fda7c47f93fd48)(ref, state.isOpen);
    let isHidden = (0, $dGqE5$useContext)((0, $64fa3d84918910a7$export$94b6d0abf7d33e8c));
    // If we are in a hidden tree, we still need to preserve our children.
    if (isHidden) {
        let children = props.children;
        if (typeof children === "function") children = children({
            placement: "bottom",
            isEntering: false,
            isExiting: false
        });
        return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, children);
    }
    if (state && !state.isOpen && !isExiting) return null;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement($07b14b47974efb58$var$PopoverInner, {
        ...props,
        triggerRef: props.triggerRef,
        state: state,
        popoverRef: ref,
        isExiting: isExiting
    });
}
/**
 * A popover is an overlay element positioned relative to a trigger.
 */ const $07b14b47974efb58$export$5b6b19405a83ff9d = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($07b14b47974efb58$var$Popover)));
function $07b14b47974efb58$var$PopoverInner({ state: state, isExiting: isExiting, ...props }) {
    var _props_offset;
    let { popoverProps: popoverProps, underlayProps: underlayProps, arrowProps: arrowProps, placement: placement } = (0, $dGqE5$usePopover)({
        ...props,
        offset: (_props_offset = props.offset) !== null && _props_offset !== void 0 ? _props_offset : 8
    }, state);
    let ref = props.popoverRef;
    let isEntering = (0, $64fa3d84918910a7$export$6d3443f2c48bfc20)(ref, !!placement);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-Popover",
        values: {
            placement: placement,
            isEntering: isEntering,
            isExiting: isExiting
        }
    });
    let style = {
        ...renderProps.style,
        ...popoverProps.style
    };
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$Overlay), {
        isExiting: isExiting
    }, !props.isNonModal && /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...underlayProps,
        style: {
            position: "fixed",
            inset: 0
        }
    }), /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$mergeProps1)((0, $dGqE5$filterDOMProps)(props), popoverProps),
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        style: style,
        "data-placement": placement,
        "data-entering": isEntering || undefined,
        "data-exiting": isExiting || undefined
    }, !props.isNonModal && /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$DismissButton), {
        onDismiss: state.close
    }), /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $44f671af83e7d9e0$export$2de4954e8ae13b9f).Provider, {
        value: {
            ...arrowProps,
            placement: placement
        }
    }, renderProps.children), /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$DismissButton), {
        onDismiss: state.close
    })));
}




const $de32f1b87079253c$export$8b93a07348a7730c = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $de32f1b87079253c$export$d2f961adcb0afbe = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $de32f1b87079253c$export$2e1e1122cf0cba88(props) {
    let state = (0, $dGqE5$useOverlayTriggerState)(props);
    let buttonRef = (0, $dGqE5$useRef)(null);
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, $dGqE5$useOverlayTrigger)({
        type: "dialog"
    }, state, buttonRef);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $de32f1b87079253c$export$d2f961adcb0afbe,
                state
            ],
            [
                $de32f1b87079253c$export$8b93a07348a7730c,
                overlayProps
            ],
            [
                (0, $07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
                    triggerRef: buttonRef
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$PressResponder), {
        ...triggerProps,
        ref: buttonRef,
        isPressed: state.isOpen
    }, props.children));
}
function $de32f1b87079253c$var$Dialog(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $de32f1b87079253c$export$8b93a07348a7730c);
    let { dialogProps: dialogProps, titleProps: titleProps } = (0, $dGqE5$useDialog)(props, ref);
    let state = (0, $dGqE5$useContext)($de32f1b87079253c$export$d2f961adcb0afbe);
    let children = props.children;
    if (typeof children === "function") children = children({
        close: (state === null || state === void 0 ? void 0 : state.close) || (()=>{})
    });
    var _props_className;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("section", {
        ...(0, $dGqE5$filterDOMProps)(props),
        ...dialogProps,
        ref: ref,
        slot: props.slot || undefined,
        style: props.style,
        className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : "react-aria-Dialog"
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            // TODO: clear context within dialog content?
            [
                (0, $5cb03073d3f54797$export$d688439359537581),
                {
                    ...titleProps,
                    level: 2
                }
            ]
        ]
    }, children));
}
/**
 * A dialog is an overlay shown above other content in an application.
 */ const $de32f1b87079253c$export$3ddf2d174ce01153 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($de32f1b87079253c$var$Dialog)));





const $d01f2c01039c0eec$export$d414ccceff7063c3 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $d01f2c01039c0eec$export$c02625b26074192c = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $d01f2c01039c0eec$var$ComboBox(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $d01f2c01039c0eec$export$d414ccceff7063c3);
    let { collection: collection, document: document } = (0, $7135fc7d473fd974$export$7cd71aa5ddd6dc4e)();
    let { children: children, isDisabled: isDisabled = false, isInvalid: isInvalid = false, isRequired: isRequired = false } = props;
    children = (0, $dGqE5$useMemo)(()=>typeof children === "function" ? children({
            isOpen: false,
            isDisabled: isDisabled,
            isInvalid: isInvalid,
            isRequired: isRequired
        }) : children, [
        children,
        isDisabled,
        isInvalid,
        isRequired
    ]);
    var _props_items;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$8dc98ba7eadeaa56), null, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $7135fc7d473fd974$export$8c25dea96356a8b6),
                document
            ],
            [
                (0, $eed445e0843c11d0$export$7ff8f37d2d81a48d),
                {
                    items: (_props_items = props.items) !== null && _props_items !== void 0 ? _props_items : props.defaultItems
                }
            ]
        ]
    }, children)), /*#__PURE__*/ (0, $dGqE5$react).createElement($d01f2c01039c0eec$var$ComboBoxInner, {
        props: props,
        collection: collection,
        comboBoxRef: ref
    }));
}
function $d01f2c01039c0eec$var$ComboBoxInner({ props: props, collection: collection, comboBoxRef: ref }) {
    let { name: name, formValue: formValue = "key", allowsCustomValue: allowsCustomValue } = props;
    if (allowsCustomValue) formValue = "text";
    let { contains: contains } = (0, $dGqE5$useFilter)({
        sensitivity: "base"
    });
    let state = (0, $dGqE5$useComboBoxState)({
        defaultFilter: props.defaultFilter || contains,
        ...props,
        // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
        items: props.items,
        children: undefined,
        collection: collection
    });
    // Only expose a subset of state to renderProps function to avoid infinite render loop
    let renderPropsState = (0, $dGqE5$useMemo)(()=>({
            isOpen: state.isOpen,
            isDisabled: props.isDisabled || false,
            isInvalid: props.isInvalid || false,
            isRequired: props.isRequired || false
        }), [
        state.isOpen,
        props.isDisabled,
        props.isInvalid,
        props.isRequired
    ]);
    let buttonRef = (0, $dGqE5$useRef)(null);
    let inputRef = (0, $dGqE5$useRef)(null);
    let listBoxRef = (0, $dGqE5$useRef)(null);
    let popoverRef = (0, $dGqE5$useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { buttonProps: buttonProps, inputProps: inputProps, listBoxProps: listBoxProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $dGqE5$useComboBox)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        label: label,
        inputRef: inputRef,
        buttonRef: buttonRef,
        listBoxRef: listBoxRef,
        popoverRef: popoverRef,
        name: formValue === "text" ? name : undefined
    }, state);
    // Make menu width match input + button
    let [menuWidth, setMenuWidth] = (0, $dGqE5$useState)(null);
    let onResize = (0, $dGqE5$useCallback)(()=>{
        if (inputRef.current) {
            var _buttonRef_current;
            let buttonRect = (_buttonRef_current = buttonRef.current) === null || _buttonRef_current === void 0 ? void 0 : _buttonRef_current.getBoundingClientRect();
            let inputRect = inputRef.current.getBoundingClientRect();
            let minX = buttonRect ? Math.min(buttonRect.left, inputRect.left) : inputRect.left;
            let maxX = buttonRect ? Math.max(buttonRect.right, inputRect.right) : inputRect.right;
            setMenuWidth(maxX - minX + "px");
        }
    }, [
        buttonRef,
        inputRef,
        setMenuWidth
    ]);
    (0, $dGqE5$useResizeObserver)({
        ref: inputRef,
        onResize: onResize
    });
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: renderPropsState,
        defaultClassName: "react-aria-ComboBox"
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $d01f2c01039c0eec$export$c02625b26074192c,
                state
            ],
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    ...buttonProps,
                    ref: buttonRef,
                    isPressed: state.isOpen
                }
            ],
            [
                (0, $3985021b0ad6602f$export$37fb8590cf2c088c),
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                state
            ],
            [
                (0, $07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
                    ref: popoverRef,
                    triggerRef: inputRef,
                    placement: "bottom start",
                    isNonModal: true,
                    style: {
                        "--trigger-width": menuWidth
                    }
                }
            ],
            [
                (0, $eed445e0843c11d0$export$7ff8f37d2d81a48d),
                {
                    ...listBoxProps,
                    ref: listBoxRef
                }
            ],
            [
                (0, $eed445e0843c11d0$export$7c5906fe4f1f2af2),
                state
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": state.isFocused || undefined,
        "data-open": state.isOpen || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": props.isInvalid || undefined,
        "data-required": props.isRequired || undefined
    }), name && formValue === "key" && /*#__PURE__*/ (0, $dGqE5$react).createElement("input", {
        type: "hidden",
        name: name,
        value: state.selectedKey
    }));
}
/**
 * A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 */ const $d01f2c01039c0eec$export$72b9695b8216309a = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($d01f2c01039c0eec$var$ComboBox)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $a049562f99e7db0e$export$f9c6924e160136d1 = /*#__PURE__*/ (0, react.createContext)({});
function $a049562f99e7db0e$var$Group(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $a049562f99e7db0e$export$f9c6924e160136d1);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({});
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dGqE5$useFocusRing)({
        within: true
    });
    let { isDisabled: isDisabled, isInvalid: isInvalid, ...otherProps } = props;
    isDisabled !== null && isDisabled !== void 0 ? isDisabled : isDisabled = !!props["aria-disabled"] && props["aria-disabled"] !== "false";
    isInvalid !== null && isInvalid !== void 0 ? isInvalid : isInvalid = !!props["aria-invalid"] && props["aria-invalid"] !== "false";
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isInvalid: isInvalid
        },
        defaultClassName: "react-aria-Group"
    });
    var _props_role;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$mergeProps)(otherProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        role: (_props_role = props.role) !== null && _props_role !== void 0 ? _props_role : "group",
        "data-focus-within": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined
    }, props.children);
}
/**
 * A group represents a set of related UI controls, and supports interactive states for styling.
 */ const $a049562f99e7db0e$export$eb2fcfdbd7ba97d4 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($a049562f99e7db0e$var$Group)));






const $40825cdb76e74f70$export$7b3e670c86da5fe8 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $40825cdb76e74f70$export$8e17ddc448e87c1e = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $40825cdb76e74f70$export$3b08bebcf796eea0 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $40825cdb76e74f70$export$5d8dc44abd10a920 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $40825cdb76e74f70$var$DateField(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $40825cdb76e74f70$export$7b3e670c86da5fe8);
    let { locale: locale } = (0, $dGqE5$useLocale)();
    let state = (0, $dGqE5$useDateFieldState)({
        ...props,
        locale: locale,
        createCalendar: $dGqE5$createCalendar
    });
    let fieldRef = (0, $dGqE5$useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let inputRef = (0, $dGqE5$useRef)(null);
    let { labelProps: labelProps, fieldProps: fieldProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $dGqE5$useDateField)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        label: label,
        inputRef: inputRef
    }, state, fieldRef);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        values: {
            state: state,
            isInvalid: state.isInvalid,
            isDisabled: state.isDisabled
        },
        defaultClassName: "react-aria-DateField"
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $40825cdb76e74f70$export$3b08bebcf796eea0,
                state
            ],
            [
                (0, $a049562f99e7db0e$export$f9c6924e160136d1),
                {
                    ...fieldProps,
                    ref: fieldRef
                }
            ],
            [
                (0, $3985021b0ad6602f$export$37fb8590cf2c088c),
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: "span"
                }
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-invalid": state.isInvalid || undefined
    }));
}
/**
 * A date field allows users to enter and edit date and time values using a keyboard.
 * Each part of a date value is displayed in an individually editable segment.
 */ const $40825cdb76e74f70$export$d9781c7894a82487 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($40825cdb76e74f70$var$DateField)));
function $40825cdb76e74f70$var$TimeField(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $40825cdb76e74f70$export$8e17ddc448e87c1e);
    let { locale: locale } = (0, $dGqE5$useLocale)();
    let state = (0, $dGqE5$useTimeFieldState)({
        ...props,
        locale: locale
    });
    let fieldRef = (0, $dGqE5$useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let inputRef = (0, $dGqE5$useRef)(null);
    let { labelProps: labelProps, fieldProps: fieldProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $dGqE5$useTimeField)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        label: label,
        inputRef: inputRef
    }, state, fieldRef);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            state: state,
            isInvalid: state.isInvalid,
            isDisabled: state.isDisabled
        },
        defaultClassName: "react-aria-TimeField"
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $40825cdb76e74f70$export$5d8dc44abd10a920,
                state
            ],
            [
                (0, $a049562f99e7db0e$export$f9c6924e160136d1),
                {
                    ...fieldProps,
                    ref: fieldRef
                }
            ],
            [
                (0, $3985021b0ad6602f$export$37fb8590cf2c088c),
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: "span"
                }
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-invalid": state.isInvalid || undefined
    }));
}
/**
 * A time field allows users to enter and edit time values using a keyboard.
 * Each part of a time value is displayed in an individually editable segment.
 */ const $40825cdb76e74f70$export$5eaee2322dd727eb = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($40825cdb76e74f70$var$TimeField)));
function $40825cdb76e74f70$var$DateInput(props, ref) {
    // If state is provided by DateField/TimeField, just render.
    // Otherwise (e.g. in DatePicker), we need to call hooks and create state ourselves.
    let dateFieldState = (0, $dGqE5$useContext)($40825cdb76e74f70$export$3b08bebcf796eea0);
    let timeFieldState = (0, $dGqE5$useContext)($40825cdb76e74f70$export$5d8dc44abd10a920);
    return dateFieldState || timeFieldState ? /*#__PURE__*/ (0, $dGqE5$react).createElement($40825cdb76e74f70$var$DateInputInner, {
        ...props,
        ref: ref
    }) : /*#__PURE__*/ (0, $dGqE5$react).createElement($40825cdb76e74f70$var$DateInputStandalone, {
        ...props,
        ref: ref
    });
}
const $40825cdb76e74f70$var$DateInputStandalone = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)((props, ref)=>{
    let [dateFieldProps, fieldRef] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)({
        slot: props.slot
    }, ref, $40825cdb76e74f70$export$7b3e670c86da5fe8);
    let { locale: locale } = (0, $dGqE5$useLocale)();
    let state = (0, $dGqE5$useDateFieldState)({
        ...dateFieldProps,
        locale: locale,
        createCalendar: $dGqE5$createCalendar
    });
    let inputRef = (0, $dGqE5$useRef)(null);
    let { fieldProps: fieldProps, inputProps: inputProps } = (0, $dGqE5$useDateField)({
        ...dateFieldProps,
        inputRef: inputRef
    }, state, fieldRef);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $40825cdb76e74f70$export$3b08bebcf796eea0,
                state
            ],
            [
                (0, $3985021b0ad6602f$export$37fb8590cf2c088c),
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                (0, $a049562f99e7db0e$export$f9c6924e160136d1),
                {
                    ...fieldProps,
                    ref: fieldRef
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement($40825cdb76e74f70$var$DateInputInner, props));
})));
const $40825cdb76e74f70$var$DateInputInner = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)((props, ref)=>{
    let { className: className, children: children } = props;
    let dateFieldState = (0, $dGqE5$useContext)($40825cdb76e74f70$export$3b08bebcf796eea0);
    let timeFieldState = (0, $dGqE5$useContext)($40825cdb76e74f70$export$5d8dc44abd10a920);
    let state = dateFieldState !== null && dateFieldState !== void 0 ? dateFieldState : timeFieldState;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $a049562f99e7db0e$export$eb2fcfdbd7ba97d4), {
        ...props,
        ref: ref,
        slot: props.slot || undefined,
        className: className !== null && className !== void 0 ? className : "react-aria-DateInput",
        isInvalid: state.isInvalid
    }, state.segments.map((segment, i)=>/*#__PURE__*/ (0, $dGqE5$cloneElement)(children(segment), {
            key: i
        }))), /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $3985021b0ad6602f$export$f5b8910cec6cf069), null));
})));
/**
 * A date input groups the editable date segments within a date field.
 */ const $40825cdb76e74f70$export$7edc06cf1783b30f = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($40825cdb76e74f70$var$DateInput)));
function $40825cdb76e74f70$var$DateSegment({ segment: segment, ...otherProps }, ref) {
    let dateFieldState = (0, $dGqE5$useContext)($40825cdb76e74f70$export$3b08bebcf796eea0);
    let timeFieldState = (0, $dGqE5$useContext)($40825cdb76e74f70$export$5d8dc44abd10a920);
    let state = dateFieldState !== null && dateFieldState !== void 0 ? dateFieldState : timeFieldState;
    let domRef = (0, $dGqE5$useObjectRef)(ref);
    let { segmentProps: segmentProps } = (0, $dGqE5$useDateSegment)(segment, state, domRef);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({
        isDisabled: state.isDisabled || segment.type === "literal"
    });
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...otherProps,
        values: {
            ...segment,
            isReadOnly: !segment.isEditable,
            isInvalid: state.isInvalid,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible
        },
        defaultChildren: segment.text,
        defaultClassName: "react-aria-DateSegment"
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$mergeProps)((0, $dGqE5$filterDOMProps)(otherProps), segmentProps, focusProps, hoverProps),
        ...renderProps,
        ref: domRef,
        "data-placeholder": segment.isPlaceholder || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-readonly": !segment.isEditable || undefined,
        "data-type": segment.type,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined
    });
}
/**
 * A date segment displays an individual unit of a date and time, and allows users to edit
 * the value by typing or using the arrow keys to increment and decrement.
 */ const $40825cdb76e74f70$export$336ab7fa954c4b5f = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($40825cdb76e74f70$var$DateSegment)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 












const $06d5b8ec9ee5d538$export$cf316c7f3b44c11e = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $06d5b8ec9ee5d538$export$8282edba42ee28a = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $06d5b8ec9ee5d538$export$50a10c048fdcdee9 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $06d5b8ec9ee5d538$export$80d7ae1f804790be = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $06d5b8ec9ee5d538$var$DatePicker(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $06d5b8ec9ee5d538$export$cf316c7f3b44c11e);
    let state = (0, $dGqE5$useDatePickerState)(props);
    let groupRef = (0, $dGqE5$useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { groupProps: groupProps, labelProps: labelProps, fieldProps: fieldProps, buttonProps: buttonProps, dialogProps: dialogProps, calendarProps: calendarProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $dGqE5$useDatePicker)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        label: label
    }, state, groupRef);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)({
        within: true
    });
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            state: state,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.isDisabled || false,
            isInvalid: state.isInvalid,
            isOpen: state.isOpen
        },
        defaultClassName: "react-aria-DatePicker"
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $06d5b8ec9ee5d538$export$50a10c048fdcdee9,
                state
            ],
            [
                (0, $a049562f99e7db0e$export$f9c6924e160136d1),
                {
                    ...groupProps,
                    ref: groupRef
                }
            ],
            [
                (0, $40825cdb76e74f70$export$7b3e670c86da5fe8),
                fieldProps
            ],
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    ...buttonProps,
                    isPressed: state.isOpen
                }
            ],
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: "span"
                }
            ],
            [
                (0, $dfd62f934fc76fed$export$3b805cea1f178355),
                calendarProps
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                state
            ],
            [
                (0, $07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
                    triggerRef: groupRef,
                    placement: "bottom start"
                }
            ],
            [
                (0, $de32f1b87079253c$export$8b93a07348a7730c),
                dialogProps
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...focusProps,
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focus-within": isFocused || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-open": state.isOpen || undefined
    }));
}
/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 */ const $06d5b8ec9ee5d538$export$5109c6dd95d8fb00 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($06d5b8ec9ee5d538$var$DatePicker)));
function $06d5b8ec9ee5d538$var$DateRangePicker(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $06d5b8ec9ee5d538$export$8282edba42ee28a);
    let state = (0, $dGqE5$useDateRangePickerState)(props);
    let groupRef = (0, $dGqE5$useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { groupProps: groupProps, labelProps: labelProps, startFieldProps: startFieldProps, endFieldProps: endFieldProps, buttonProps: buttonProps, dialogProps: dialogProps, calendarProps: calendarProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $dGqE5$useDateRangePicker)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        label: label
    }, state, groupRef);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)({
        within: true
    });
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            state: state,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.isDisabled || false,
            isInvalid: state.isInvalid,
            isOpen: state.isOpen
        },
        defaultClassName: "react-aria-DateRangePicker"
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $06d5b8ec9ee5d538$export$80d7ae1f804790be,
                state
            ],
            [
                (0, $a049562f99e7db0e$export$f9c6924e160136d1),
                {
                    ...groupProps,
                    ref: groupRef
                }
            ],
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    ...buttonProps,
                    isPressed: state.isOpen
                }
            ],
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: "span"
                }
            ],
            [
                (0, $dfd62f934fc76fed$export$233dd9682e1ad64b),
                calendarProps
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                state
            ],
            [
                (0, $07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
                    triggerRef: groupRef,
                    placement: "bottom start"
                }
            ],
            [
                (0, $de32f1b87079253c$export$8b93a07348a7730c),
                dialogProps
            ],
            [
                (0, $40825cdb76e74f70$export$7b3e670c86da5fe8),
                {
                    slots: {
                        start: startFieldProps,
                        end: endFieldProps
                    }
                }
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...focusProps,
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focus-within": isFocused || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-open": state.isOpen || undefined
    }));
}
/**
 * A date range picker combines two DateFields and a RangeCalendar popover to allow
 * users to enter or select a date and time range.
 */ const $06d5b8ec9ee5d538$export$17334619f3ac2224 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($06d5b8ec9ee5d538$var$DateRangePicker)));



/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


var $df39c1238ae2b5f3$exports = {};
var $e038a7e7a6d81989$exports = {};
$e038a7e7a6d81989$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"حدد عنصرًا","tableResizer":"أداة تغيير الحجم"}');


var $0ec14741b0133644$exports = {};
$0ec14741b0133644$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Изберете предмет","tableResizer":"Преоразмерител"}');


var $642f7badf2405784$exports = {};
$642f7badf2405784$exports = JSON.parse('{"dropzoneLabel":"M\xedsto pro přetažen\xed","selectPlaceholder":"Vyberte položku","tableResizer":"Změna velikosti"}');


var $30cee8d2535734ec$exports = {};
$30cee8d2535734ec$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"V\xe6lg et element","tableResizer":"St\xf8rrelses\xe6ndring"}');


var $c302d0504fca332a$exports = {};
$c302d0504fca332a$exports = JSON.parse('{"dropzoneLabel":"Ablegebereich","selectPlaceholder":"Element w\xe4hlen","tableResizer":"Gr\xf6\xdfenanpassung"}');


var $0d0703f2bd7e421c$exports = {};
$0d0703f2bd7e421c$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Επιλέξτε ένα αντικείμενο","tableResizer":"Αλλαγή μεγέθους"}');


var $cafa55beb2fc5ef3$exports = {};
$cafa55beb2fc5ef3$exports = JSON.parse('{"selectPlaceholder":"Select an item","tableResizer":"Resizer","dropzoneLabel":"DropZone"}');


var $18ac2ceede598103$exports = {};
$18ac2ceede598103$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Seleccionar un art\xedculo","tableResizer":"Cambiador de tama\xf1o"}');


var $718705a15b8a633a$exports = {};
$718705a15b8a633a$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Valige \xfcksus","tableResizer":"Suuruse muutja"}');


var $bf36dae9ecc81ce0$exports = {};
$bf36dae9ecc81ce0$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Valitse kohde","tableResizer":"Koon muuttaja"}');


var $0b4828edb010b855$exports = {};
$0b4828edb010b855$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"S\xe9lectionner un \xe9l\xe9ment","tableResizer":"Redimensionneur"}');


var $0030f210b040e540$exports = {};
$0030f210b040e540$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"בחר פריט","tableResizer":"שינוי גודל"}');


var $1f0ebacf5a0c0fa1$exports = {};
$1f0ebacf5a0c0fa1$exports = JSON.parse('{"dropzoneLabel":"Zona spuštanja","selectPlaceholder":"Odaberite stavku","tableResizer":"Promjena veličine"}');


var $3a706ba61f3d6bba$exports = {};
$3a706ba61f3d6bba$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"V\xe1lasszon ki egy elemet","tableResizer":"\xc1tm\xe9retező"}');


var $0d17809e74607796$exports = {};
$0d17809e74607796$exports = JSON.parse('{"dropzoneLabel":"Zona di rilascio","selectPlaceholder":"Seleziona un elemento","tableResizer":"Ridimensionamento"}');


var $65a71f9a56f1398f$exports = {};
$65a71f9a56f1398f$exports = JSON.parse('{"dropzoneLabel":"ドロップゾーン","selectPlaceholder":"項目を選択","tableResizer":"サイズ変更ツール"}');


var $e5efad074a74abef$exports = {};
$e5efad074a74abef$exports = JSON.parse('{"dropzoneLabel":"드롭 영역","selectPlaceholder":"항목 선택","tableResizer":"크기 조정기"}');


var $d70c2a849e55c607$exports = {};
$d70c2a849e55c607$exports = JSON.parse('{"dropzoneLabel":"„DropZone“","selectPlaceholder":"Pasirinkite elementą","tableResizer":"Dydžio keitiklis"}');


var $009bbbb440d0e907$exports = {};
$009bbbb440d0e907$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izvēlēties vienumu","tableResizer":"Izmēra mainītājs"}');


var $9366fe642464ee83$exports = {};
$9366fe642464ee83$exports = JSON.parse('{"dropzoneLabel":"Droppsone","selectPlaceholder":"Velg et element","tableResizer":"St\xf8rrelsesendrer"}');


var $62f9bc1f98ea21de$exports = {};
$62f9bc1f98ea21de$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecteer een item","tableResizer":"Resizer"}');


var $4ec2e5b6623b1b76$exports = {};
$4ec2e5b6623b1b76$exports = JSON.parse('{"dropzoneLabel":"Strefa upuszczania","selectPlaceholder":"Wybierz element","tableResizer":"Zmiana rozmiaru"}');


var $e25098e26647cc04$exports = {};
$e25098e26647cc04$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecione um item","tableResizer":"Redimensionador"}');


var $dd39c57d242c8156$exports = {};
$dd39c57d242c8156$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Selecione um item","tableResizer":"Redimensionador"}');


var $3b4c1ba5afd57b35$exports = {};
$3b4c1ba5afd57b35$exports = JSON.parse('{"dropzoneLabel":"Zonă de plasare","selectPlaceholder":"Selectați un element","tableResizer":"Instrument de redimensionare"}');


var $a455b2cda79eb746$exports = {};
$a455b2cda79eb746$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Выберите элемент","tableResizer":"Средство изменения размера"}');


var $b983ca1383d5b960$exports = {};
$b983ca1383d5b960$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Vyberte položku","tableResizer":"N\xe1stroj na zmenu veľkosti"}');


var $32a515ef673b0655$exports = {};
$32a515ef673b0655$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izberite element","tableResizer":"Spreminjanje velikosti"}');


var $89434176ab35446b$exports = {};
$89434176ab35446b$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Izaberite stavku","tableResizer":"Promena veličine"}');


var $727da781aca847f9$exports = {};
$727da781aca847f9$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"V\xe4lj en artikel","tableResizer":"Storleks\xe4ndrare"}');


var $fcd2d84b9a2d489c$exports = {};
$fcd2d84b9a2d489c$exports = JSON.parse('{"dropzoneLabel":"Bırakma B\xf6lgesi","selectPlaceholder":"Bir \xf6ğe se\xe7in","tableResizer":"Yeniden boyutlandırıcı"}');


var $2422ac328687ee23$exports = {};
$2422ac328687ee23$exports = JSON.parse('{"dropzoneLabel":"DropZone","selectPlaceholder":"Виберіть елемент","tableResizer":"Засіб змінення розміру"}');


var $c9a532d1c973af61$exports = {};
$c9a532d1c973af61$exports = JSON.parse('{"dropzoneLabel":"放置区域","selectPlaceholder":"选择一个项目","tableResizer":"尺寸调整器"}');


var $34de119f14549a4b$exports = {};
$34de119f14549a4b$exports = JSON.parse('{"dropzoneLabel":"放置區","selectPlaceholder":"選取項目","tableResizer":"大小調整器"}');


$df39c1238ae2b5f3$exports = {
    "ar-AE": $e038a7e7a6d81989$exports,
    "bg-BG": $0ec14741b0133644$exports,
    "cs-CZ": $642f7badf2405784$exports,
    "da-DK": $30cee8d2535734ec$exports,
    "de-DE": $c302d0504fca332a$exports,
    "el-GR": $0d0703f2bd7e421c$exports,
    "en-US": $cafa55beb2fc5ef3$exports,
    "es-ES": $18ac2ceede598103$exports,
    "et-EE": $718705a15b8a633a$exports,
    "fi-FI": $bf36dae9ecc81ce0$exports,
    "fr-FR": $0b4828edb010b855$exports,
    "he-IL": $0030f210b040e540$exports,
    "hr-HR": $1f0ebacf5a0c0fa1$exports,
    "hu-HU": $3a706ba61f3d6bba$exports,
    "it-IT": $0d17809e74607796$exports,
    "ja-JP": $65a71f9a56f1398f$exports,
    "ko-KR": $e5efad074a74abef$exports,
    "lt-LT": $d70c2a849e55c607$exports,
    "lv-LV": $009bbbb440d0e907$exports,
    "nb-NO": $9366fe642464ee83$exports,
    "nl-NL": $62f9bc1f98ea21de$exports,
    "pl-PL": $4ec2e5b6623b1b76$exports,
    "pt-BR": $e25098e26647cc04$exports,
    "pt-PT": $dd39c57d242c8156$exports,
    "ro-RO": $3b4c1ba5afd57b35$exports,
    "ru-RU": $a455b2cda79eb746$exports,
    "sk-SK": $b983ca1383d5b960$exports,
    "sl-SI": $32a515ef673b0655$exports,
    "sr-SP": $89434176ab35446b$exports,
    "sv-SE": $727da781aca847f9$exports,
    "tr-TR": $fcd2d84b9a2d489c$exports,
    "uk-UA": $2422ac328687ee23$exports,
    "zh-CN": $c9a532d1c973af61$exports,
    "zh-TW": $34de119f14549a4b$exports
};




const $cb088e721efb9218$export$14a72053295ff9a6 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $cb088e721efb9218$var$DropZone(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $cb088e721efb9218$export$14a72053295ff9a6);
    let buttonRef = (0, $dGqE5$useRef)(null);
    let { dropProps: dropProps, dropButtonProps: dropButtonProps, isDropTarget: isDropTarget } = (0, $dGqE5$useDrop)({
        ...props,
        ref: buttonRef,
        hasDropButton: true
    });
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({});
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)();
    let stringFormatter = (0, $dGqE5$useLocalizedStringFormatter)((0, (/*@__PURE__*/$parcel$interopDefault($df39c1238ae2b5f3$exports))));
    let textId = (0, $dGqE5$useSlotId)();
    let ariaLabel = props["aria-label"] || stringFormatter.format("dropzoneLabel");
    let messageId = isDropTarget && props["aria-labelledby"] ? props["aria-labelledby"] : null;
    let ariaLabelledby = [
        textId,
        messageId
    ].filter(Boolean).join(" ");
    let labelProps = (0, $dGqE5$useLabels)({
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby
    });
    let { clipboardProps: clipboardProps } = (0, $dGqE5$useClipboard)({
        onPaste: (items)=>{
            var _props_onDrop;
            return (_props_onDrop = props.onDrop) === null || _props_onDrop === void 0 ? void 0 : _props_onDrop.call(props, {
                type: "drop",
                items: items,
                x: 0,
                y: 0,
                dropOperation: "copy"
            });
        }
    });
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDropTarget: isDropTarget
        },
        defaultClassName: "react-aria-DropZone"
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    id: textId,
                    slot: "label"
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$mergeProps)(dropProps, hoverProps, DOMProps),
        ...renderProps,
        slot: props.slot || undefined,
        ref: ref,
        onClick: ()=>{
            var _buttonRef_current;
            return (_buttonRef_current = buttonRef.current) === null || _buttonRef_current === void 0 ? void 0 : _buttonRef_current.focus();
        },
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-drop-target": isDropTarget || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$VisuallyHidden), null, /*#__PURE__*/ (0, $dGqE5$react).createElement("button", {
        ...(0, $dGqE5$mergeProps)(dropButtonProps, focusProps, clipboardProps, labelProps),
        ref: buttonRef
    })), renderProps.children));
}
/**
 * A drop zone is an area into which one or multiple objects can be dragged and dropped.
 */ const $cb088e721efb9218$export$3c6489d84dc98b6 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($cb088e721efb9218$var$DropZone)));


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $1e2864c73f66a4da$var$FileTrigger(props, ref) {
    let { onSelect: onSelect, acceptedFileTypes: acceptedFileTypes, allowsMultiple: allowsMultiple, defaultCamera: defaultCamera, children: children, ...rest } = props;
    let inputRef = (0, $dGqE5$useObjectRef)(ref);
    let domProps = (0, $dGqE5$filterDOMProps)(rest);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$PressResponder), {
        onPress: ()=>{
            var _inputRef_current;
            if (inputRef.current.value) inputRef.current.value = "";
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.click();
        }
    }, children), /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $3985021b0ad6602f$export$f5b8910cec6cf069), {
        ...domProps,
        type: "file",
        ref: inputRef,
        style: {
            display: "none"
        },
        accept: acceptedFileTypes === null || acceptedFileTypes === void 0 ? void 0 : acceptedFileTypes.toString(),
        onChange: (e)=>{
            return onSelect === null || onSelect === void 0 ? void 0 : onSelect(e.target.files);
        },
        capture: defaultCamera,
        multiple: allowsMultiple
    }));
}
/**
 * A FileTrigger allows a user to access the file system with any pressable React Aria or React Spectrum component, or custom components built with usePress.
 */ const $1e2864c73f66a4da$export$6fb4a10d2c950550 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($1e2864c73f66a4da$var$FileTrigger)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 










const $72e60046c03fbe42$export$54fe942636b6416d = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $72e60046c03fbe42$var$GridList(props, ref) {
    // Render the portal first so that we have the collection by the time we render the DOM in SSR.
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $72e60046c03fbe42$export$54fe942636b6416d);
    let { collection: collection, portal: portal } = (0, $7135fc7d473fd974$export$6cd28814d92fa9c9)(props);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, portal, /*#__PURE__*/ (0, $dGqE5$react).createElement($72e60046c03fbe42$var$GridListInner, {
        props: props,
        collection: collection,
        gridListRef: ref
    }));
}
function $72e60046c03fbe42$var$GridListInner({ props: props, collection: collection, gridListRef: ref }) {
    let { dragAndDropHooks: dragAndDropHooks } = props;
    let state = (0, $dGqE5$useListState)({
        ...props,
        collection: collection,
        children: undefined
    });
    let { gridProps: gridProps } = (0, $dGqE5$useGridList)(props, state, ref);
    let children = (0, $7135fc7d473fd974$export$727c8fc270210f13)({
        items: collection,
        children: (item)=>{
            switch(item.type){
                case "item":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($72e60046c03fbe42$var$GridListItem, {
                        item: item
                    });
                default:
                    throw new Error("Unsupported node type in GridList: " + item.type);
            }
        }
    });
    let selectionManager = state.selectionManager;
    let isListDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let isListDroppable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDroppableCollectionState);
    let dragHooksProvided = (0, $dGqE5$useRef)(isListDraggable);
    let dropHooksProvided = (0, $dGqE5$useRef)(isListDroppable);
    (0, $dGqE5$useEffect)(()=>{
        if (dragHooksProvided.current !== isListDraggable) console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
        if (dropHooksProvided.current !== isListDroppable) console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
    }, [
        isListDraggable,
        isListDroppable
    ]);
    let dragState = undefined;
    let dropState = undefined;
    let droppableCollection = undefined;
    let isRootDropTarget = false;
    let dragPreview = null;
    let preview = (0, $dGqE5$useRef)(null);
    if (isListDraggable && dragAndDropHooks) {
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: collection,
            selectionManager: selectionManager,
            preview: dragAndDropHooks.renderDragPreview ? preview : undefined
        });
        dragAndDropHooks.useDraggableCollection({}, dragState, ref);
        let DragPreview = dragAndDropHooks.DragPreview;
        dragPreview = dragAndDropHooks.renderDragPreview ? /*#__PURE__*/ (0, $dGqE5$react).createElement(DragPreview, {
            ref: preview
        }, dragAndDropHooks.renderDragPreview) : null;
    }
    if (isListDroppable && dragAndDropHooks) {
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: collection,
            selectionManager: selectionManager
        });
        let keyboardDelegate = new (0, $dGqE5$ListKeyboardDelegate)(collection, selectionManager.disabledBehavior === "selection" ? new Set() : selectionManager.disabledKeys, ref);
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection, ref);
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate: keyboardDelegate,
            dropTargetDelegate: dropTargetDelegate
        }, dropState, ref);
        isRootDropTarget = dropState.isDropTarget({
            type: "root"
        });
    }
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)();
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        className: props.className,
        style: props.style,
        defaultClassName: "react-aria-GridList",
        values: {
            isDropTarget: isRootDropTarget,
            isEmpty: state.collection.size === 0,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            state: state
        }
    });
    let emptyState = null;
    let emptyStatePropOverrides = null;
    if (state.collection.size === 0 && props.renderEmptyState) {
        // Ideally we'd use `display: contents` on the row and cell elements so that
        // they don't affect the layout of the children. However, WebKit currently has
        // a bug that makes grid elements with display: contents hidden to screen readers.
        // https://bugs.webkit.org/show_bug.cgi?id=239479
        let content = props.renderEmptyState();
        if ((0, $dGqE5$isWebKit)()) {
            // For now, when in an empty state, swap the role to group in webkit.
            emptyStatePropOverrides = {
                role: "group",
                "aria-multiselectable": undefined
            };
            if ((0, $dGqE5$isIOS)()) // iOS VoiceOver also doesn't announce the aria-label of group elements
            // so try to add a visually hidden label element as well.
            emptyState = /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$VisuallyHidden), null, gridProps["aria-label"]), content);
            else emptyState = content;
        } else emptyState = /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
            role: "row",
            style: {
                display: "contents"
            }
        }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
            role: "gridcell",
            style: {
                display: "contents"
            }
        }, content));
    }
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$FocusScope), null, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$filterDOMProps)(props),
        ...renderProps,
        ...(0, $dGqE5$mergeProps)(gridProps, focusProps, droppableCollection === null || droppableCollection === void 0 ? void 0 : droppableCollection.collectionProps, emptyStatePropOverrides),
        ref: ref,
        slot: props.slot || undefined,
        "data-drop-target": isRootDropTarget || undefined,
        "data-empty": state.collection.size === 0 || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $eed445e0843c11d0$export$7c5906fe4f1f2af2),
                state
            ],
            [
                (0, $d8f176866e6dc039$export$d188a835a7bc5783),
                {
                    dragAndDropHooks: dragAndDropHooks,
                    dragState: dragState,
                    dropState: dropState
                }
            ],
            [
                (0, $d8f176866e6dc039$export$f55761759794cf55),
                {
                    render: $72e60046c03fbe42$var$GridListDropIndicatorWrapper
                }
            ]
        ]
    }, isListDroppable && /*#__PURE__*/ (0, $dGqE5$react).createElement($72e60046c03fbe42$var$RootDropIndicator, null), children), emptyState, dragPreview));
}
/**
 * A grid list displays a list of interactive items, with support for keyboard navigation,
 * single or multiple selection, and row actions.
 */ const $72e60046c03fbe42$export$a7bfbda1311ca015 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($72e60046c03fbe42$var$GridList)));
function $72e60046c03fbe42$var$GridListItem({ item: item }) {
    let state = (0, $dGqE5$useContext)((0, $eed445e0843c11d0$export$7c5906fe4f1f2af2));
    let { dragAndDropHooks: dragAndDropHooks, dragState: dragState, dropState: dropState } = (0, $dGqE5$useContext)((0, $d8f176866e6dc039$export$d188a835a7bc5783));
    let ref = (0, $dGqE5$useObjectRef)(item.props.ref);
    let { rowProps: rowProps, gridCellProps: gridCellProps, descriptionProps: descriptionProps, ...states } = (0, $dGqE5$useGridListItem)({
        node: item,
        shouldSelectOnPressUp: !!dragState
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({
        isDisabled: !states.allowsSelection && !states.hasAction
    });
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dGqE5$useFocusRing)();
    let { checkboxProps: checkboxProps } = (0, $dGqE5$useGridListSelectionCheckbox)({
        key: item.key
    }, state);
    let draggableItem = null;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key,
        hasDragButton: true
    }, dragState);
    let dropIndicator = null;
    let dropIndicatorRef = (0, $dGqE5$useRef)(null);
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $dGqE5$useVisuallyHidden)();
    if (dropState && dragAndDropHooks) dropIndicator = dragAndDropHooks.useDropIndicator({
        target: {
            type: "item",
            key: item.key,
            dropPosition: "on"
        }
    }, dropState, dropIndicatorRef);
    let props = item.props;
    let isDragging = dragState && dragState.isDragging(item.key);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: "react-aria-Item",
        values: {
            ...states,
            isHovered: isHovered,
            isFocusVisible: isFocusVisible,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior,
            allowsDragging: !!dragState,
            isDragging: isDragging,
            isDropTarget: dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.isDropTarget
        }
    });
    let renderDropIndicator = (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.renderDropIndicator) || ((target)=>/*#__PURE__*/ (0, $dGqE5$react).createElement((0, $d8f176866e6dc039$export$62ed72bc21f6b8a6), {
            target: target
        }));
    let dragButtonRef = (0, $dGqE5$useRef)(null);
    (0, $dGqE5$useEffect)(()=>{
        if (dragState && !dragButtonRef.current) console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
    // eslint-disable-next-line
    }, []);
    (0, $dGqE5$useEffect)(()=>{
        if (!item.textValue) console.warn("A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.");
    }, [
        item.textValue
    ]);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDropIndicator) && renderDropIndicator({
        type: "item",
        key: item.key,
        dropPosition: "before"
    }), dropIndicator && !dropIndicator.isHidden && /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        role: "row",
        style: {
            position: "absolute"
        }
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        role: "gridcell"
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.dropIndicatorProps,
        ref: dropIndicatorRef
    }))), /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$mergeProps)((0, $dGqE5$filterDOMProps)(props), rowProps, focusProps, hoverProps, draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragProps),
        ...renderProps,
        ref: ref,
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-allows-dragging": !!dragState || undefined,
        "data-dragging": isDragging || undefined,
        "data-drop-target": (dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.isDropTarget) || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === "none" ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", gridCellProps, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $bc237834342dbd75$export$b085522c77523c51),
                {
                    slots: {
                        selection: checkboxProps
                    }
                }
            ],
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    slots: {
                        [(0, $64fa3d84918910a7$export$8e0ef2c5844bfb6b)]: {},
                        drag: {
                            ...draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragButtonProps,
                            ref: dragButtonRef,
                            style: {
                                pointerEvents: "none"
                            }
                        }
                    }
                }
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps
                    }
                }
            ]
        ]
    }, renderProps.children))), (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDropIndicator) && state.collection.getKeyAfter(item.key) == null && renderDropIndicator({
        type: "item",
        key: item.key,
        dropPosition: "after"
    }));
}
function $72e60046c03fbe42$var$GridListDropIndicatorWrapper(props, ref) {
    ref = (0, $dGqE5$useObjectRef)(ref);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, $dGqE5$useContext)((0, $d8f176866e6dc039$export$d188a835a7bc5783));
    let buttonRef = (0, $dGqE5$useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps, isHidden: isHidden, isDropTarget: isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, buttonRef);
    if (isHidden) return null;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement($72e60046c03fbe42$var$GridListDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        buttonRef: buttonRef,
        ref: ref
    });
}
function $72e60046c03fbe42$var$GridListDropIndicator(props, ref) {
    let { dropIndicatorProps: dropIndicatorProps, isDropTarget: isDropTarget, buttonRef: buttonRef, ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $dGqE5$useVisuallyHidden)();
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...otherProps,
        defaultClassName: "react-aria-DropIndicator",
        values: {
            isDropTarget: isDropTarget
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...renderProps,
        role: "row",
        ref: ref,
        "data-drop-target": isDropTarget || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        role: "gridcell"
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...visuallyHiddenProps,
        role: "button",
        ...dropIndicatorProps,
        ref: buttonRef
    })));
}
const $72e60046c03fbe42$var$GridListDropIndicatorForwardRef = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($72e60046c03fbe42$var$GridListDropIndicator)));
function $72e60046c03fbe42$var$RootDropIndicator() {
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, $dGqE5$useContext)((0, $d8f176866e6dc039$export$d188a835a7bc5783));
    let ref = (0, $dGqE5$useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps } = dragAndDropHooks.useDropIndicator({
        target: {
            type: "root"
        }
    }, dropState, ref);
    let isDropTarget = dropState.isDropTarget({
        type: "root"
    });
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $dGqE5$useVisuallyHidden)();
    if (!isDropTarget && dropIndicatorProps["aria-hidden"]) return null;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        role: "row",
        "aria-hidden": dropIndicatorProps["aria-hidden"],
        style: {
            position: "absolute"
        }
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        role: "gridcell"
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicatorProps,
        ref: ref
    })));
}







/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $63df2425e2108aa8$export$744d98a3b8a94e1c = /*#__PURE__*/ (0, react.createContext)({});
function $63df2425e2108aa8$var$Keyboard(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $63df2425e2108aa8$export$744d98a3b8a94e1c);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("kbd", {
        dir: "ltr",
        ...props,
        ref: ref
    });
}
const $63df2425e2108aa8$export$16e4d70cc375e707 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($63df2425e2108aa8$var$Keyboard)));





/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 












const $3674c52c6b3c5bce$export$c7e742effb1c51e2 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $3674c52c6b3c5bce$export$24aad8519b95b41b = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $3674c52c6b3c5bce$export$27d2ad3c5815583e(props) {
    let state = (0, $dGqE5$useMenuTriggerState)(props);
    let ref = (0, $dGqE5$useRef)(null);
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, $dGqE5$useMenuTrigger)({
        ...props,
        type: "menu"
    }, state, ref);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $3674c52c6b3c5bce$export$c7e742effb1c51e2,
                menuProps
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                state
            ],
            [
                (0, $07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
                    triggerRef: ref,
                    placement: "bottom start"
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$PressResponder), {
        ...menuTriggerProps,
        ref: ref,
        isPressed: state.isOpen
    }, props.children));
}
function $3674c52c6b3c5bce$var$Menu(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $3674c52c6b3c5bce$export$c7e742effb1c51e2);
    let { portal: portal, collection: collection } = (0, $7135fc7d473fd974$export$6cd28814d92fa9c9)(props);
    // Delay rendering the actual menu until we have the collection so that auto focus works properly.
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, collection.size > 0 && /*#__PURE__*/ (0, $dGqE5$react).createElement($3674c52c6b3c5bce$var$MenuInner, {
        props: props,
        collection: collection,
        menuRef: ref
    }), portal);
}
function $3674c52c6b3c5bce$var$MenuInner({ props: props, collection: collection, menuRef: ref }) {
    let state = (0, $dGqE5$useTreeState)({
        ...props,
        collection: collection,
        children: undefined
    });
    let { menuProps: menuProps } = (0, $dGqE5$useMenu)(props, state, ref);
    let children = (0, $7135fc7d473fd974$export$727c8fc270210f13)({
        items: state.collection,
        children: (item)=>{
            switch(item.type){
                case "section":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($3674c52c6b3c5bce$var$MenuSection, {
                        section: item
                    });
                case "separator":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $431f98aba6844401$export$1ff3c3f08ae963c0), item.props);
                case "item":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($3674c52c6b3c5bce$var$MenuItem, {
                        item: item
                    });
                default:
                    throw new Error("Unsupported node type in Menu: " + item.type);
            }
        }
    });
    var _props_className;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$filterDOMProps)(props),
        ...menuProps,
        ref: ref,
        slot: props.slot || undefined,
        style: props.style,
        className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : "react-aria-Menu"
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $3674c52c6b3c5bce$export$24aad8519b95b41b,
                state
            ],
            [
                (0, $431f98aba6844401$export$6615d83f6de245ce),
                {
                    elementType: "div"
                }
            ]
        ]
    }, children));
}
/**
 * A menu displays a list of actions or options that a user can choose.
 */ const $3674c52c6b3c5bce$export$d9b273488cd8ce6f = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($3674c52c6b3c5bce$var$Menu)));
function $3674c52c6b3c5bce$var$MenuSection({ section: section, className: className, style: style, ...otherProps }) {
    var _section_props, _section_props1;
    let state = (0, $dGqE5$useContext)($3674c52c6b3c5bce$export$24aad8519b95b41b);
    let [headingRef, heading] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    var _section_arialabel;
    let { headingProps: headingProps, groupProps: groupProps } = (0, $dGqE5$useMenuSection)({
        heading: heading,
        "aria-label": (_section_arialabel = section["aria-label"]) !== null && _section_arialabel !== void 0 ? _section_arialabel : undefined
    });
    let children = (0, $7135fc7d473fd974$export$727c8fc270210f13)({
        items: state.collection.getChildren(section.key),
        children: (item)=>{
            switch(item.type){
                case "header":
                    {
                        let { ref: ref, ...otherProps } = item.props;
                        return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $72a5793c14baf454$export$8b251419efc915eb), {
                            ...headingProps,
                            ...otherProps,
                            ref: (0, $dGqE5$mergeRefs)(headingRef, ref)
                        }, item.rendered);
                    }
                case "item":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($3674c52c6b3c5bce$var$MenuItem, {
                        item: item
                    });
                default:
                    throw new Error("Unsupported element type in Section: " + item.type);
            }
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("section", {
        ...(0, $dGqE5$filterDOMProps)(otherProps),
        ...groupProps,
        className: className || ((_section_props = section.props) === null || _section_props === void 0 ? void 0 : _section_props.className) || "react-aria-Section",
        style: style || ((_section_props1 = section.props) === null || _section_props1 === void 0 ? void 0 : _section_props1.style),
        ref: section.props.ref
    }, children);
}
function $3674c52c6b3c5bce$var$MenuItem({ item: item }) {
    let state = (0, $dGqE5$useContext)($3674c52c6b3c5bce$export$24aad8519b95b41b);
    let ref = (0, $dGqE5$useObjectRef)(item.props.ref);
    let { menuItemProps: menuItemProps, labelProps: labelProps, descriptionProps: descriptionProps, keyboardShortcutProps: keyboardShortcutProps, ...states } = (0, $dGqE5$useMenuItem)({
        key: item.key
    }, state, ref);
    let props = item.props;
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dGqE5$useFocusRing)();
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: "react-aria-Item",
        values: {
            ...states,
            isHovered: states.isFocused,
            isFocusVisible: isFocusVisible,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior
        }
    });
    let ElementType = props.href ? "a" : "div";
    return /*#__PURE__*/ (0, $dGqE5$react).createElement(ElementType, {
        ...(0, $dGqE5$mergeProps)(menuItemProps, focusProps),
        ...renderProps,
        ref: ref,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": states.isFocused || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-selected": states.isSelected || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === "none" ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        label: labelProps,
                        description: descriptionProps
                    }
                }
            ],
            [
                (0, $63df2425e2108aa8$export$744d98a3b8a94e1c),
                keyboardShortcutProps
            ]
        ]
    }, renderProps.children));
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $c0c9ced265f3594c$export$8b645da15a96b44f = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $c0c9ced265f3594c$var$Meter(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $c0c9ced265f3594c$export$8b645da15a96b44f);
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100 } = props;
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { meterProps: meterProps, labelProps: labelProps } = (0, $dGqE5$useMeter)({
        ...props,
        label: label
    });
    // Calculate the width of the progress bar as a percentage
    let percentage = (value - minValue) / (maxValue - minValue) * 100;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-Meter",
        values: {
            percentage: percentage,
            valueText: meterProps["aria-valuetext"]
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...meterProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $01b77f81d0f07f68$export$75b6ee27786ba447).Provider, {
        value: {
            ...labelProps,
            ref: labelRef,
            elementType: "span"
        }
    }, renderProps.children));
}
/**
 * A meter represents a quantity within a known range, or a fractional value.
 */ const $c0c9ced265f3594c$export$62e3ae2a4090b879 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($c0c9ced265f3594c$var$Meter)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





const $f3f84453ead64de5$export$ab57792b9b6974a6 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $f3f84453ead64de5$var$InternalModalContext = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $f3f84453ead64de5$var$Modal(props, ref) {
    let ctx = (0, $dGqE5$useContext)($f3f84453ead64de5$var$InternalModalContext);
    if (ctx) return /*#__PURE__*/ (0, $dGqE5$react).createElement($f3f84453ead64de5$var$ModalContent, {
        ...props,
        modalRef: ref
    }, props.children);
    let { isDismissable: isDismissable, isKeyboardDismissDisabled: isKeyboardDismissDisabled, isOpen: isOpen, defaultOpen: defaultOpen, onOpenChange: onOpenChange, children: children, ...otherProps } = props;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement($f3f84453ead64de5$export$8948f78d83984c69, {
        isDismissable: isDismissable,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        isOpen: isOpen,
        defaultOpen: defaultOpen,
        onOpenChange: onOpenChange
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement($f3f84453ead64de5$var$ModalContent, {
        ...otherProps,
        modalRef: ref
    }, children));
}
/**
 * A modal is an overlay element which blocks interaction with elements outside it.
 */ const $f3f84453ead64de5$export$2b77a92f1a5ad772 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($f3f84453ead64de5$var$Modal)));
function $f3f84453ead64de5$var$ModalOverlayWithForwardRef(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $f3f84453ead64de5$export$ab57792b9b6974a6);
    let contextState = (0, $dGqE5$useContext)((0, $de32f1b87079253c$export$d2f961adcb0afbe));
    let localState = (0, $dGqE5$useOverlayTriggerState)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let objectRef = (0, $dGqE5$useObjectRef)(ref);
    let modalRef = (0, $dGqE5$useRef)(null);
    let isOverlayExiting = (0, $64fa3d84918910a7$export$45fda7c47f93fd48)(objectRef, state.isOpen);
    let isModalExiting = (0, $64fa3d84918910a7$export$45fda7c47f93fd48)(modalRef, state.isOpen);
    let isExiting = isOverlayExiting || isModalExiting;
    let isSSR = (0, $dGqE5$useIsSSR)();
    if (!state.isOpen && !isExiting || isSSR) return null;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement($f3f84453ead64de5$var$ModalOverlayInner, {
        ...props,
        state: state,
        isExiting: isExiting,
        overlayRef: objectRef,
        modalRef: modalRef
    });
}
const $f3f84453ead64de5$export$8948f78d83984c69 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($f3f84453ead64de5$var$ModalOverlayWithForwardRef)));
function $f3f84453ead64de5$var$ModalOverlayInner(props) {
    let modalRef = props.modalRef;
    let { state: state } = props;
    let { modalProps: modalProps, underlayProps: underlayProps } = (0, $dGqE5$useModalOverlay)(props, state, modalRef);
    let entering = (0, $64fa3d84918910a7$export$6d3443f2c48bfc20)(props.overlayRef);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-ModalOverlay",
        values: {
            isEntering: entering,
            isExiting: props.isExiting,
            state: state
        }
    });
    let viewport = (0, $dGqE5$useViewportSize)();
    let style = {
        ...renderProps.style,
        "--visual-viewport-height": viewport.height + "px"
    };
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$Overlay), {
        isExiting: props.isExiting
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$mergeProps1)((0, $dGqE5$filterDOMProps)(props), underlayProps),
        ...renderProps,
        style: style,
        ref: props.overlayRef,
        "data-entering": entering || undefined,
        "data-exiting": props.isExiting || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $f3f84453ead64de5$var$InternalModalContext,
                {
                    modalProps: modalProps,
                    modalRef: modalRef,
                    isExiting: props.isExiting,
                    isDismissable: props.isDismissable
                }
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                state
            ]
        ]
    }, renderProps.children)));
}
function $f3f84453ead64de5$var$ModalContent(props) {
    let { modalProps: modalProps, modalRef: modalRef, isExiting: isExiting, isDismissable: isDismissable } = (0, $dGqE5$useContext)($f3f84453ead64de5$var$InternalModalContext);
    let state = (0, $dGqE5$useContext)((0, $de32f1b87079253c$export$d2f961adcb0afbe));
    let mergedRefs = (0, $dGqE5$useMemo)(()=>(0, $dGqE5$mergeRefs)(props.modalRef, modalRef), [
        props.modalRef,
        modalRef
    ]);
    let ref = (0, $dGqE5$useObjectRef)(mergedRefs);
    let entering = (0, $64fa3d84918910a7$export$6d3443f2c48bfc20)(ref);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-Modal",
        values: {
            isEntering: entering,
            isExiting: isExiting,
            state: state
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$mergeProps1)((0, $dGqE5$filterDOMProps)(props), modalProps),
        ...renderProps,
        ref: ref,
        "data-entering": entering || undefined,
        "data-exiting": isExiting || undefined
    }, isDismissable && /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$DismissButton), {
        onDismiss: state.close
    }), renderProps.children);
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 









const $b91743d66a0ed188$export$b414a48cf5dcbc11 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $b91743d66a0ed188$export$6cc906c6cff9bec5 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $b91743d66a0ed188$var$NumberField(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $b91743d66a0ed188$export$b414a48cf5dcbc11);
    let { locale: locale } = (0, $dGqE5$useLocale)();
    let state = (0, $dGqE5$useNumberFieldState)({
        ...props,
        locale: locale
    });
    let inputRef = (0, $dGqE5$useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { labelProps: labelProps, groupProps: groupProps, inputProps: inputProps, incrementButtonProps: incrementButtonProps, decrementButtonProps: decrementButtonProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $dGqE5$useNumberField)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        label: label
    }, state, inputRef);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            state: state,
            isDisabled: props.isDisabled || false,
            isInvalid: props.isInvalid || false
        },
        defaultClassName: "react-aria-NumberField"
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $b91743d66a0ed188$export$6cc906c6cff9bec5,
                state
            ],
            [
                (0, $a049562f99e7db0e$export$f9c6924e160136d1),
                groupProps
            ],
            [
                (0, $3985021b0ad6602f$export$37fb8590cf2c088c),
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    slots: {
                        increment: incrementButtonProps,
                        decrement: decrementButtonProps
                    }
                }
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": props.isInvalid || undefined
    }), props.name && /*#__PURE__*/ (0, $dGqE5$react).createElement("input", {
        type: "hidden",
        name: props.name,
        value: isNaN(state.numberValue) ? "" : state.numberValue
    }));
}
/**
 * A number field allows a user to enter a number, and increment or decrement the value using stepper buttons.
 */ const $b91743d66a0ed188$export$63c5fa0b2fdccd2e = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($b91743d66a0ed188$var$NumberField)));




/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $0393f8ab869a0f1a$export$e9f3bf65a26ce129 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $0393f8ab869a0f1a$var$ProgressBar(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $0393f8ab869a0f1a$export$e9f3bf65a26ce129);
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100, isIndeterminate: isIndeterminate = false } = props;
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { progressBarProps: progressBarProps, labelProps: labelProps } = (0, $dGqE5$useProgressBar)({
        ...props,
        label: label
    });
    // Calculate the width of the progress bar as a percentage
    let percentage = isIndeterminate ? undefined : (value - minValue) / (maxValue - minValue) * 100;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-ProgressBar",
        values: {
            percentage: percentage,
            valueText: progressBarProps["aria-valuetext"],
            isIndeterminate: isIndeterminate
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...progressBarProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $01b77f81d0f07f68$export$75b6ee27786ba447).Provider, {
        value: {
            ...labelProps,
            ref: labelRef,
            elementType: "span"
        }
    }, renderProps.children));
}
/**
 * Progress bars show either determinate or indeterminate progress of an operation
 * over time.
 */ const $0393f8ab869a0f1a$export$c17561cb55d4db30 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($0393f8ab869a0f1a$var$ProgressBar)));



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






const $b6c3ddc6086f204d$export$a79eda4ff50e30b6 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $b6c3ddc6086f204d$export$b118023277d4a5c3 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $b6c3ddc6086f204d$export$29d84393af70866c = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $b6c3ddc6086f204d$var$RadioGroup(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $b6c3ddc6086f204d$export$a79eda4ff50e30b6);
    let state = (0, $dGqE5$useRadioGroupState)(props);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { radioGroupProps: radioGroupProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $dGqE5$useRadioGroup)({
        ...props,
        label: label
    }, state);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            orientation: props.orientation || "vertical",
            isDisabled: state.isDisabled,
            isReadOnly: state.isReadOnly,
            isRequired: state.isRequired,
            isInvalid: state.isInvalid,
            state: state
        },
        defaultClassName: "react-aria-RadioGroup"
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...radioGroupProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-orientation": props.orientation || "vertical",
        "data-invalid": state.isInvalid || undefined,
        "data-disabled": state.isDisabled || undefined,
        "data-readonly": state.isReadOnly || undefined,
        "data-required": state.isRequired || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $b6c3ddc6086f204d$export$29d84393af70866c,
                state
            ],
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: "span"
                }
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, renderProps.children));
}
function $b6c3ddc6086f204d$var$Radio(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $b6c3ddc6086f204d$export$b118023277d4a5c3);
    let state = (0, $dGqE5$react).useContext($b6c3ddc6086f204d$export$29d84393af70866c);
    let domRef = (0, $dGqE5$useObjectRef)(ref);
    let { inputProps: inputProps, isSelected: isSelected, isDisabled: isDisabled, isPressed: isPressedKeyboard } = (0, $dGqE5$useRadio)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        // ReactNode type doesn't allow function children.
        children: typeof props.children === "function" ? true : props.children
    }, state, domRef);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dGqE5$useFocusRing)();
    let interactionDisabled = isDisabled || state.isReadOnly;
    // Handle press state for full label. Keyboard press state is returned by useRadio
    // since it is handled on the <input> element itself.
    let [isPressed, setPressed] = (0, $dGqE5$useState)(false);
    let { pressProps: pressProps } = (0, $dGqE5$usePress)({
        isDisabled: interactionDisabled,
        onPressStart (e) {
            if (e.pointerType !== "keyboard") setPressed(true);
        },
        onPressEnd (e) {
            if (e.pointerType !== "keyboard") setPressed(false);
        }
    });
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({
        isDisabled: interactionDisabled
    });
    let pressed = interactionDisabled ? false : isPressed || isPressedKeyboard;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-Radio",
        values: {
            isSelected: isSelected,
            isPressed: pressed,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isReadOnly: state.isReadOnly,
            isInvalid: state.isInvalid,
            isRequired: state.isRequired
        }
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("label", {
        ...(0, $dGqE5$mergeProps1)(DOMProps, pressProps, hoverProps, renderProps),
        "data-selected": isSelected || undefined,
        "data-pressed": pressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": state.isReadOnly || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-required": state.isRequired || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$VisuallyHidden), {
        elementType: "span"
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("input", {
        ...(0, $dGqE5$mergeProps1)(inputProps, focusProps),
        ref: domRef
    })), renderProps.children);
}
/**
 * A radio group allows a user to select a single item from a list of mutually exclusive options.
 */ const $b6c3ddc6086f204d$export$a98f0dcb43a68a25 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($b6c3ddc6086f204d$var$RadioGroup)));
/**
 * A radio represents an individual option within a radio group.
 */ const $b6c3ddc6086f204d$export$d7b12c4107be0d61 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($b6c3ddc6086f204d$var$Radio)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 








const $440f4836bcb56932$export$d1c4e4c63cb03a11 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $440f4836bcb56932$var$SearchField(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $440f4836bcb56932$export$d1c4e4c63cb03a11);
    let inputRef = (0, $dGqE5$useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let state = (0, $dGqE5$useSearchFieldState)(props);
    let { labelProps: labelProps, inputProps: inputProps, clearButtonProps: clearButtonProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $dGqE5$useSearchField)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        label: label
    }, state, inputRef);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isEmpty: state.value === "",
            isDisabled: props.isDisabled || false,
            isInvalid: props.isInvalid || false,
            state: state
        },
        defaultClassName: "react-aria-SearchField"
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-empty": state.value === "" || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": props.isInvalid || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, $3985021b0ad6602f$export$37fb8590cf2c088c),
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                clearButtonProps
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, renderProps.children));
}
/**
 * A search field allows a user to enter and clear a search query.
 */ const $440f4836bcb56932$export$b94867ecbd698f21 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($440f4836bcb56932$var$SearchField)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 












const $82d7e5349645de74$export$7540cee5be7dc19b = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $82d7e5349645de74$export$ef445b55be0601bd = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $82d7e5349645de74$var$Select(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $82d7e5349645de74$export$7540cee5be7dc19b);
    let { collection: collection, document: document } = (0, $7135fc7d473fd974$export$7cd71aa5ddd6dc4e)();
    let state = (0, $dGqE5$useSelectState)({
        ...props,
        collection: collection,
        children: undefined
    });
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dGqE5$useFocusRing)({
        within: true
    });
    // Only expose a subset of state to renderProps function to avoid infinite render loop
    let renderPropsState = (0, $dGqE5$useMemo)(()=>({
            isOpen: state.isOpen,
            isFocused: state.isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.isDisabled || false,
            isInvalid: props.isInvalid || false,
            isRequired: props.isRequired || false
        }), [
        state.isOpen,
        state.isFocused,
        isFocusVisible,
        props.isDisabled,
        props.isInvalid,
        props.isRequired
    ]);
    // Get props for child elements from useSelect
    let buttonRef = (0, $dGqE5$useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { labelProps: labelProps, triggerProps: triggerProps, valueProps: valueProps, menuProps: menuProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $dGqE5$useSelect)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        label: label
    }, state, buttonRef);
    // Make menu width match input + button
    let [buttonWidth, setButtonWidth] = (0, $dGqE5$useState)(null);
    let onResize = (0, $dGqE5$useCallback)(()=>{
        if (buttonRef.current) setButtonWidth(buttonRef.current.offsetWidth + "px");
    }, [
        buttonRef
    ]);
    (0, $dGqE5$useResizeObserver)({
        ref: buttonRef,
        onResize: onResize
    });
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: renderPropsState,
        defaultClassName: "react-aria-Select"
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$8dc98ba7eadeaa56), null, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $82d7e5349645de74$export$7540cee5be7dc19b,
                props
            ],
            [
                $82d7e5349645de74$export$ef445b55be0601bd,
                state
            ],
            [
                (0, $7135fc7d473fd974$export$8c25dea96356a8b6),
                document
            ]
        ]
    }, renderProps.children)), /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $82d7e5349645de74$export$7540cee5be7dc19b,
                props
            ],
            [
                $82d7e5349645de74$export$ef445b55be0601bd,
                state
            ],
            [
                $82d7e5349645de74$export$f8f745c04421623f,
                valueProps
            ],
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: "span"
                }
            ],
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    ...triggerProps,
                    ref: buttonRef,
                    isPressed: state.isOpen
                }
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                state
            ],
            [
                (0, $07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
                    triggerRef: buttonRef,
                    placement: "bottom start",
                    style: {
                        "--trigger-width": buttonWidth
                    }
                }
            ],
            [
                (0, $eed445e0843c11d0$export$7ff8f37d2d81a48d),
                menuProps
            ],
            [
                (0, $eed445e0843c11d0$export$7c5906fe4f1f2af2),
                state
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ...focusProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": state.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-open": state.isOpen || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": props.isInvalid || undefined,
        "data-required": props.isRequired || undefined
    }), /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$HiddenSelect), {
        state: state,
        triggerRef: buttonRef,
        label: label,
        name: props.name,
        isDisabled: props.isDisabled
    })));
}
/**
 * A select displays a collapsible list of options and allows a user to select one of them.
 */ const $82d7e5349645de74$export$ef9b1a59e592288f = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($82d7e5349645de74$var$Select)));
const $82d7e5349645de74$export$f8f745c04421623f = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $82d7e5349645de74$var$SelectValue(props, ref) {
    var _state_selectedItem, _state_selectedItem1;
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $82d7e5349645de74$export$f8f745c04421623f);
    let state = (0, $dGqE5$useContext)($82d7e5349645de74$export$ef445b55be0601bd);
    let { placeholder: placeholder } = (0, $64fa3d84918910a7$export$fabf2dc03a41866e)($82d7e5349645de74$export$7540cee5be7dc19b);
    let selectedItem = state.selectedKey != null ? state.collection.getItem(state.selectedKey) : null;
    let rendered = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.rendered;
    if (typeof rendered === "function") {
        // If the selected item has a function as a child, we need to call it to render to JSX.
        let fn = rendered;
        rendered = fn({
            isHovered: false,
            isPressed: false,
            isSelected: false,
            isFocused: false,
            isFocusVisible: false,
            isDisabled: false,
            selectionMode: "single",
            selectionBehavior: "toggle"
        });
    }
    let stringFormatter = (0, $dGqE5$useLocalizedStringFormatter)((0, (/*@__PURE__*/$parcel$interopDefault($df39c1238ae2b5f3$exports))));
    var _state_selectedItem_value, _state_selectedItem_textValue;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultChildren: rendered || placeholder || stringFormatter.format("selectPlaceholder"),
        defaultClassName: "react-aria-SelectValue",
        values: {
            selectedItem: (_state_selectedItem_value = (_state_selectedItem = state.selectedItem) === null || _state_selectedItem === void 0 ? void 0 : _state_selectedItem.value) !== null && _state_selectedItem_value !== void 0 ? _state_selectedItem_value : null,
            selectedText: (_state_selectedItem_textValue = (_state_selectedItem1 = state.selectedItem) === null || _state_selectedItem1 === void 0 ? void 0 : _state_selectedItem1.textValue) !== null && _state_selectedItem_textValue !== void 0 ? _state_selectedItem_textValue : null,
            isPlaceholder: !selectedItem
        }
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("span", {
        ref: ref,
        ...DOMProps,
        ...renderProps,
        "data-placeholder": !selectedItem || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $514c0188e459b4c0$export$9afb8bc826b033ea).Provider, {
        value: undefined
    }, renderProps.children));
}
/**
 * SelectValue renders the current value of a Select, or a placeholder if no value is selected.
 * It is usually placed within the button element.
 */ const $82d7e5349645de74$export$e288731fd71264f0 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($82d7e5349645de74$var$SelectValue)));



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





const $6f909507e6374d18$export$e99164f0030f3bff = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $6f909507e6374d18$export$1e7083018727fa60 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $6f909507e6374d18$export$f1fce0420cc6d8ee = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $6f909507e6374d18$export$6189c2744041d8f8 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $6f909507e6374d18$var$Slider(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $6f909507e6374d18$export$e99164f0030f3bff);
    let trackRef = (0, $dGqE5$useRef)(null);
    let numberFormatter = (0, $dGqE5$useNumberFormatter)(props.formatOptions);
    let state = (0, $dGqE5$useSliderState)({
        ...props,
        numberFormatter: numberFormatter
    });
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { groupProps: groupProps, trackProps: trackProps, labelProps: labelProps, outputProps: outputProps } = (0, $dGqE5$useSlider)({
        ...props,
        label: label
    }, state, trackRef);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            orientation: state.orientation,
            isDisabled: state.isDisabled,
            state: state
        },
        defaultClassName: "react-aria-Slider"
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $6f909507e6374d18$export$1e7083018727fa60,
                state
            ],
            [
                $6f909507e6374d18$export$f1fce0420cc6d8ee,
                {
                    ...trackProps,
                    ref: trackRef
                }
            ],
            [
                $6f909507e6374d18$export$6189c2744041d8f8,
                outputProps
            ],
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...DOMProps,
        ...groupProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-orientation": state.orientation,
        "data-disabled": state.isDisabled || undefined
    }));
}
/**
 * A slider allows a user to select one or more values within a range.
 */ const $6f909507e6374d18$export$472062a354075cee = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($6f909507e6374d18$var$Slider)));
function $6f909507e6374d18$var$SliderOutput(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $6f909507e6374d18$export$6189c2744041d8f8);
    let { children: children, style: style, className: className, ...otherProps } = props;
    let state = (0, $dGqE5$useContext)($6f909507e6374d18$export$1e7083018727fa60);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        className: className,
        style: style,
        children: children,
        defaultChildren: state.getThumbValueLabel(0),
        defaultClassName: "react-aria-SliderOutput",
        values: {
            orientation: state.orientation,
            isDisabled: state.isDisabled,
            state: state
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("output", {
        ...otherProps,
        ...renderProps,
        ref: ref,
        "data-orientation": state.orientation || undefined,
        "data-disabled": state.isDisabled || undefined
    });
}
/**
 * A slider output displays the current value of a slider as text.
 */ const $6f909507e6374d18$export$a590f758a961cb5b = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($6f909507e6374d18$var$SliderOutput)));
function $6f909507e6374d18$var$SliderTrack(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $6f909507e6374d18$export$f1fce0420cc6d8ee);
    let state = (0, $dGqE5$useContext)($6f909507e6374d18$export$1e7083018727fa60);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({});
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-SliderTrack",
        values: {
            orientation: state.orientation,
            isDisabled: state.isDisabled,
            isHovered: isHovered,
            state: state
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$mergeProps)(props, hoverProps),
        ...renderProps,
        ref: ref,
        "data-hovered": isHovered || undefined,
        "data-orientation": state.orientation || undefined,
        "data-disabled": state.isDisabled || undefined
    });
}
/**
 * A slider track is a container for one or more slider thumbs.
 */ const $6f909507e6374d18$export$105594979f116971 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($6f909507e6374d18$var$SliderTrack)));
function $6f909507e6374d18$var$SliderThumb(props, ref) {
    let state = (0, $dGqE5$useContext)($6f909507e6374d18$export$1e7083018727fa60);
    let { ref: trackRef } = (0, $64fa3d84918910a7$export$fabf2dc03a41866e)($6f909507e6374d18$export$f1fce0420cc6d8ee);
    let { index: index = 0 } = props;
    let inputRef = (0, $dGqE5$useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { thumbProps: thumbProps, inputProps: inputProps, labelProps: labelProps, isDragging: isDragging, isFocused: isFocused, isDisabled: isDisabled } = (0, $dGqE5$useSliderThumb)({
        ...props,
        index: index,
        trackRef: trackRef,
        inputRef: inputRef,
        label: label
    }, state);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({});
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-SliderThumb",
        values: {
            state: state,
            isHovered: isHovered,
            isDragging: isDragging,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled
        }
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$mergeProps)(DOMProps, thumbProps, hoverProps),
        ...renderProps,
        ref: ref,
        style: {
            ...thumbProps.style,
            ...renderProps.style
        },
        "data-hovered": isHovered || undefined,
        "data-dragging": isDragging || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$VisuallyHidden), null, /*#__PURE__*/ (0, $dGqE5$react).createElement("input", {
        ref: inputRef,
        ...(0, $dGqE5$mergeProps)(inputProps, focusProps)
    })), /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ]
        ]
    }, renderProps.children));
}
/**
 * A slider thumb represents an individual value that the user can adjust within a slider track.
 */ const $6f909507e6374d18$export$2c1b491743890dec = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($6f909507e6374d18$var$SliderThumb)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




const $8e59e948500a8fe1$export$8699e3b644d5a28a = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $8e59e948500a8fe1$var$Switch(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $8e59e948500a8fe1$export$8699e3b644d5a28a);
    let state = (0, $dGqE5$useToggleState)(props);
    let { inputProps: inputProps, isSelected: isSelected, isDisabled: isDisabled, isReadOnly: isReadOnly, isPressed: isPressedKeyboard } = (0, $dGqE5$useSwitch)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        // ReactNode type doesn't allow function children.
        children: typeof props.children === "function" ? true : props.children
    }, state, ref);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dGqE5$useFocusRing)();
    let isInteractionDisabled = props.isDisabled || props.isReadOnly;
    // Handle press state for full label. Keyboard press state is returned by useSwitch
    // since it is handled on the <input> element itself.
    let [isPressed, setPressed] = (0, $dGqE5$useState)(false);
    let { pressProps: pressProps } = (0, $dGqE5$usePress)({
        isDisabled: isInteractionDisabled,
        onPressStart (e) {
            if (e.pointerType !== "keyboard") setPressed(true);
        },
        onPressEnd (e) {
            if (e.pointerType !== "keyboard") setPressed(false);
        }
    });
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({
        isDisabled: isInteractionDisabled
    });
    let pressed = isInteractionDisabled ? false : isPressed || isPressedKeyboard;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-Switch",
        values: {
            isSelected: isSelected,
            isPressed: pressed,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            state: state
        }
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("label", {
        ...(0, $dGqE5$mergeProps)(DOMProps, pressProps, hoverProps, renderProps),
        slot: props.slot || undefined,
        "data-selected": isSelected || undefined,
        "data-pressed": pressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": isReadOnly || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$VisuallyHidden), {
        elementType: "span"
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("input", {
        ...inputProps,
        ...focusProps,
        ref: ref
    })), renderProps.children);
}
/**
 * A switch allows a user to turn a setting on or off.
 */ const $8e59e948500a8fe1$export$b5d5cf8927ab7262 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($8e59e948500a8fe1$var$Switch)));














class $1910c06f0ca9905e$var$TableCollection extends ((/* unused pure expression or super */ null && (0, $7135fc7d473fd974$export$408d25a4e12db025))) {
    addNode(node) {
        super.addNode(node);
        this.columnsDirty || (this.columnsDirty = node.type === "column");
        if (node.type === "tableheader") this.head = node;
        if (node.type === "tablebody") this.body = node;
    }
    commit(firstKey, lastKey, isSSR = false) {
        this.updateColumns(isSSR);
        super.commit(firstKey, lastKey, isSSR);
    }
    updateColumns(isSSR) {
        if (!this.columnsDirty) return;
        this.rowHeaderColumnKeys = new Set();
        this.columns = [];
        let columnKeyMap = new Map();
        let visit = (node)=>{
            switch(node.type){
                case "column":
                    columnKeyMap.set(node.key, node);
                    if (!node.hasChildNodes) {
                        node.index = this.columns.length;
                        this.columns.push(node);
                        if (node.props.isRowHeader) this.rowHeaderColumnKeys.add(node.key);
                    }
                    break;
            }
            for (let child of this.getChildren(node.key))visit(child);
        };
        for (let node of this.getChildren(this.head.key))visit(node);
        this.headerRows = (0, $dGqE5$buildHeaderRows)(columnKeyMap, this.columns);
        this.columnsDirty = false;
        if (this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !isSSR) throw new Error("A table must have at least one Column with the isRowHeader prop set to true");
    }
    get columnCount() {
        return this.columns.length;
    }
    get rows() {
        return [
            ...this.getChildren(this.body.key)
        ];
    }
    *[Symbol.iterator]() {
        yield* this.getChildren(this.body.key);
    }
    get size() {
        return [
            ...this.getChildren(this.body.key)
        ].length;
    }
    getFirstKey() {
        var _;
        return (_ = [
            ...this.getChildren(this.body.key)
        ][0]) === null || _ === void 0 ? void 0 : _.key;
    }
    getLastKey() {
        var _rows_;
        let rows = [
            ...this.getChildren(this.body.key)
        ];
        return (_rows_ = rows[rows.length - 1]) === null || _rows_ === void 0 ? void 0 : _rows_.key;
    }
    getKeyAfter(key) {
        let node = this.getItem(key);
        var _node_nextKey;
        if ((node === null || node === void 0 ? void 0 : node.type) === "column") return (_node_nextKey = node.nextKey) !== null && _node_nextKey !== void 0 ? _node_nextKey : null;
        return super.getKeyAfter(key);
    }
    getKeyBefore(key) {
        var _this_getItem;
        let node = this.getItem(key);
        var _node_prevKey;
        if ((node === null || node === void 0 ? void 0 : node.type) === "column") return (_node_prevKey = node.prevKey) !== null && _node_prevKey !== void 0 ? _node_prevKey : null;
        let k = super.getKeyBefore(key);
        if (k != null && ((_this_getItem = this.getItem(k)) === null || _this_getItem === void 0 ? void 0 : _this_getItem.type) === "tablebody") return null;
        return k;
    }
    getChildren(key) {
        if (!this.getItem(key)) for (let row of this.headerRows){
            if (row.key === key) return row.childNodes;
        }
        return super.getChildren(key);
    }
    clone() {
        let collection = super.clone();
        collection.headerRows = this.headerRows;
        collection.columns = this.columns;
        collection.rowHeaderColumnKeys = this.rowHeaderColumnKeys;
        collection.head = this.head;
        collection.body = this.body;
        return collection;
    }
    getTextValue(key) {
        let row = this.getItem(key);
        if (!row) return "";
        // If the row has a textValue, use that.
        if (row.textValue) return row.textValue;
        // Otherwise combine the text of each of the row header columns.
        let rowHeaderColumnKeys = this.rowHeaderColumnKeys;
        let text = [];
        for (let cell of this.getChildren(key)){
            let column = this.columns[cell.index];
            if (rowHeaderColumnKeys.has(column.key) && cell.textValue) text.push(cell.textValue);
            if (text.length === rowHeaderColumnKeys.size) break;
        }
        return text.join(" ");
    }
    constructor(...args){
        super(...args);
        this.headerRows = [];
        this.columns = [];
        this.rowHeaderColumnKeys = new Set();
        this.head = new (0, $7135fc7d473fd974$export$f5d856d854e74713)("tableheader", -1);
        this.body = new (0, $7135fc7d473fd974$export$f5d856d854e74713)("tablebody", -2);
        this.columnsDirty = true;
    }
}
const $1910c06f0ca9905e$var$ResizableTableContainerContext = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $1910c06f0ca9905e$var$ResizableTableContainer(props, ref) {
    let objectRef = (0, $dGqE5$useObjectRef)(ref);
    let [width, setWidth] = (0, $dGqE5$useState)(0);
    (0, $dGqE5$useResizeObserver)({
        ref: objectRef,
        onResize () {
            var _objectRef_current;
            setWidth((_objectRef_current = objectRef.current) === null || _objectRef_current === void 0 ? void 0 : _objectRef_current.clientWidth);
        }
    });
    (0, $dGqE5$useLayoutEffect)(()=>{
        var _objectRef_current;
        setWidth((_objectRef_current = objectRef.current) === null || _objectRef_current === void 0 ? void 0 : _objectRef_current.clientWidth);
    }, [
        objectRef
    ]);
    let ctx = (0, $dGqE5$useMemo)(()=>({
            tableWidth: width,
            useTableColumnResizeState: $dGqE5$useTableColumnResizeState,
            onResizeStart: props.onResizeStart,
            onResize: props.onResize,
            onResizeEnd: props.onResizeEnd
        }), [
        width,
        props.onResizeStart,
        props.onResize,
        props.onResizeEnd
    ]);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$filterDOMProps)(props),
        ref: objectRef,
        className: props.className || "react-aria-ResizableTableContainer",
        style: props.style
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement($1910c06f0ca9905e$var$ResizableTableContainerContext.Provider, {
        value: ctx
    }, props.children));
}
const $1910c06f0ca9905e$export$7063e69b8a954175 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($1910c06f0ca9905e$var$ResizableTableContainer)));
const $1910c06f0ca9905e$export$93e4b0b2cc49b648 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $1910c06f0ca9905e$export$38de1cb0526c21fb = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $1910c06f0ca9905e$export$a2680a798823803c = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $1910c06f0ca9905e$var$Table(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $1910c06f0ca9905e$export$93e4b0b2cc49b648);
    let initialCollection = (0, $dGqE5$useMemo)(()=>new $1910c06f0ca9905e$var$TableCollection(), []);
    let { portal: portal, collection: collection } = (0, $7135fc7d473fd974$export$6cd28814d92fa9c9)(props, initialCollection);
    let state = (0, $dGqE5$useTableState)({
        ...props,
        collection: collection,
        children: undefined
    });
    let { gridProps: gridProps } = (0, $dGqE5$useTable)(props, state, ref);
    let { dragAndDropHooks: dragAndDropHooks } = props;
    let selectionManager = state.selectionManager;
    let isListDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let isListDroppable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDroppableCollectionState);
    let dragHooksProvided = (0, $dGqE5$useRef)(isListDraggable);
    let dropHooksProvided = (0, $dGqE5$useRef)(isListDroppable);
    (0, $dGqE5$useEffect)(()=>{
        if (dragHooksProvided.current !== isListDraggable) console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
        if (dropHooksProvided.current !== isListDroppable) console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
    }, [
        isListDraggable,
        isListDroppable
    ]);
    let dragState = undefined;
    let dropState = undefined;
    let droppableCollection = undefined;
    let isRootDropTarget = false;
    let dragPreview = null;
    let preview = (0, $dGqE5$useRef)(null);
    if (isListDraggable && dragAndDropHooks) {
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: collection,
            selectionManager: selectionManager,
            preview: dragAndDropHooks.renderDragPreview ? preview : undefined
        });
        dragAndDropHooks.useDraggableCollection({}, dragState, ref);
        let DragPreview = dragAndDropHooks.DragPreview;
        dragPreview = dragAndDropHooks.renderDragPreview ? /*#__PURE__*/ (0, $dGqE5$react).createElement(DragPreview, {
            ref: preview
        }, dragAndDropHooks.renderDragPreview) : null;
    }
    if (isListDroppable && dragAndDropHooks) {
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: collection,
            selectionManager: selectionManager
        });
        let keyboardDelegate = new (0, $dGqE5$ListKeyboardDelegate)(collection, selectionManager.disabledBehavior === "selection" ? new Set() : selectionManager.disabledKeys, ref);
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection, ref);
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate: keyboardDelegate,
            dropTargetDelegate: dropTargetDelegate
        }, dropState, ref);
        isRootDropTarget = dropState.isDropTarget({
            type: "root"
        });
    }
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)();
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        className: props.className,
        style: props.style,
        defaultClassName: "react-aria-Table",
        values: {
            isDropTarget: isRootDropTarget,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            state: state
        }
    });
    let { selectionBehavior: selectionBehavior, selectionMode: selectionMode, disallowEmptySelection: disallowEmptySelection } = state.selectionManager;
    let ctx = (0, $dGqE5$useMemo)(()=>({
            selectionBehavior: selectionMode === "none" ? null : selectionBehavior,
            selectionMode: selectionMode,
            disallowEmptySelection: disallowEmptySelection,
            allowsDragging: isListDraggable
        }), [
        selectionBehavior,
        selectionMode,
        disallowEmptySelection,
        isListDraggable
    ]);
    let style = renderProps.style;
    let tableContainerContext = (0, $dGqE5$useContext)($1910c06f0ca9905e$var$ResizableTableContainerContext);
    let layoutState = null;
    if (tableContainerContext) {
        layoutState = tableContainerContext.useTableColumnResizeState({
            tableWidth: tableContainerContext.tableWidth
        }, state);
        style = {
            ...style,
            tableLayout: "fixed",
            width: "fit-content"
        };
    }
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, /*#__PURE__*/ (0, $dGqE5$react).createElement($1910c06f0ca9905e$var$TableOptionsContext.Provider, {
        value: ctx
    }, portal), /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $1910c06f0ca9905e$export$38de1cb0526c21fb,
                state
            ],
            [
                $1910c06f0ca9905e$export$a2680a798823803c,
                layoutState
            ],
            [
                (0, $d8f176866e6dc039$export$d188a835a7bc5783),
                {
                    dragAndDropHooks: dragAndDropHooks,
                    dragState: dragState,
                    dropState: dropState
                }
            ],
            [
                (0, $d8f176866e6dc039$export$f55761759794cf55),
                {
                    render: $1910c06f0ca9905e$var$TableDropIndicatorWrapper
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$FocusScope), null, /*#__PURE__*/ (0, $dGqE5$react).createElement("table", {
        ...(0, $dGqE5$filterDOMProps)(props),
        ...renderProps,
        ...(0, $dGqE5$mergeProps)(gridProps, focusProps, droppableCollection === null || droppableCollection === void 0 ? void 0 : droppableCollection.collectionProps),
        style: style,
        ref: ref,
        slot: props.slot || undefined,
        "data-allows-dragging": isListDraggable || undefined,
        "data-drop-target": isRootDropTarget || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement($1910c06f0ca9905e$var$TableHeaderRowGroup, {
        collection: collection
    }), /*#__PURE__*/ (0, $dGqE5$react).createElement($1910c06f0ca9905e$var$TableBodyRowGroup, {
        collection: collection,
        isDroppable: isListDroppable
    }))), dragPreview));
}
/**
 * A table displays data in rows and columns and enables a user to navigate its contents via directional navigation keys,
 * and optionally supports row selection and sorting.
 */ const $1910c06f0ca9905e$export$54ec01a60f47d33d = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($1910c06f0ca9905e$var$Table)));
const $1910c06f0ca9905e$var$TableOptionsContext = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $1910c06f0ca9905e$export$fddc468cd8cb4db9() {
    return (0, $dGqE5$useContext)($1910c06f0ca9905e$var$TableOptionsContext);
}
function $1910c06f0ca9905e$var$TableHeader(props, ref) {
    let children = (0, $7135fc7d473fd974$export$901dbff4e54a6dd0)({
        children: props.children,
        items: props.columns
    });
    let renderer = typeof props.children === "function" ? props.children : null;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $7135fc7d473fd974$export$4feb769f8ddf26c5).Provider, {
        value: renderer
    }, (0, $7135fc7d473fd974$export$e7c29ae2353b16ea)("tableheader", props, ref, null, children));
}
/**
 * A header within a `<Table>`, containing the table columns.
 */ const $1910c06f0ca9905e$export$f850895b287ef28e = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($1910c06f0ca9905e$var$TableHeader)));
function $1910c06f0ca9905e$var$Column(props, ref) {
    let render = (0, $dGqE5$useContext)((0, $7135fc7d473fd974$export$4feb769f8ddf26c5));
    let childColumns;
    if (typeof render === "function") childColumns = render;
    else if (typeof props.children !== "function") childColumns = props.children;
    let children = (0, $7135fc7d473fd974$export$901dbff4e54a6dd0)({
        children: props.title || props.childColumns ? childColumns : null,
        items: props.childColumns
    });
    var _props_title;
    return (0, $7135fc7d473fd974$export$e7c29ae2353b16ea)("column", props, ref, (_props_title = props.title) !== null && _props_title !== void 0 ? _props_title : props.children, children);
}
/**
 * A column within a `<Table>`.
 */ const $1910c06f0ca9905e$export$816b5d811295e6bc = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($1910c06f0ca9905e$var$Column)));
function $1910c06f0ca9905e$var$TableBody(props, ref) {
    let children = (0, $7135fc7d473fd974$export$901dbff4e54a6dd0)(props);
    return (0, $7135fc7d473fd974$export$e7c29ae2353b16ea)("tablebody", props, ref, null, children);
}
/**
 * The body of a `<Table>`, containing the table rows.
 */ const $1910c06f0ca9905e$export$76ccd210b9029917 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($1910c06f0ca9905e$var$TableBody)));
function $1910c06f0ca9905e$var$Row(props, ref) {
    let children = (0, $7135fc7d473fd974$export$901dbff4e54a6dd0)({
        children: props.children,
        items: props.columns,
        idScope: props.id
    });
    let ctx = (0, $dGqE5$useMemo)(()=>({
            idScope: props.id
        }), [
        props.id
    ]);
    return (0, $7135fc7d473fd974$export$e7c29ae2353b16ea)("item", props, ref, null, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $7135fc7d473fd974$export$db36075d98ba73d3).Provider, {
        value: ctx
    }, children));
}
/**
 * A row within a `<Table>`.
 */ const $1910c06f0ca9905e$export$b59bdbef9ce70de2 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($1910c06f0ca9905e$var$Row)));
function $1910c06f0ca9905e$var$Cell(props, ref) {
    return (0, $7135fc7d473fd974$export$e7c29ae2353b16ea)("cell", props, ref, props.children);
}
/**
 * A cell within a table row.
 */ const $1910c06f0ca9905e$export$f6f0c3fe4ec306ea = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($1910c06f0ca9905e$var$Cell)));
function $1910c06f0ca9905e$var$TableHeaderRowGroup({ collection: collection }) {
    let headerRows = (0, $7135fc7d473fd974$export$727c8fc270210f13)({
        items: collection.headerRows,
        children: (0, $dGqE5$useCallback)((item)=>{
            switch(item.type){
                case "headerrow":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($1910c06f0ca9905e$var$TableHeaderRow, {
                        item: item
                    });
                default:
                    throw new Error("Unsupported node type in TableHeader: " + item.type);
            }
        }, [])
    });
    let { rowGroupProps: rowGroupProps } = (0, $dGqE5$useTableRowGroup)();
    var _collection_head_props_className;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("thead", {
        ...(0, $dGqE5$filterDOMProps)(collection.head.props),
        ...rowGroupProps,
        ref: collection.head.props.ref,
        className: (_collection_head_props_className = collection.head.props.className) !== null && _collection_head_props_className !== void 0 ? _collection_head_props_className : "react-aria-TableHeader",
        style: collection.head.props.style
    }, headerRows);
}
function $1910c06f0ca9905e$var$TableBodyRowGroup({ collection: collection, isDroppable: isDroppable }) {
    let bodyRows = (0, $7135fc7d473fd974$export$727c8fc270210f13)({
        items: collection.rows,
        children: (0, $dGqE5$useCallback)((item)=>{
            switch(item.type){
                case "item":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($1910c06f0ca9905e$var$TableRow, {
                        item: item
                    });
                default:
                    throw new Error("Unsupported node type in TableBody: " + item.type);
            }
        }, [])
    });
    let props = collection.body.props;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        id: undefined,
        children: undefined,
        defaultClassName: "react-aria-TableBody",
        values: {
            isEmpty: collection.size === 0
        }
    });
    let emptyState;
    if (collection.size === 0 && props.renderEmptyState) emptyState = /*#__PURE__*/ (0, $dGqE5$react).createElement("tr", {
        role: "row"
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("td", {
        role: "gridcell",
        colSpan: collection.columnCount
    }, props.renderEmptyState()));
    let { rowGroupProps: rowGroupProps } = (0, $dGqE5$useTableRowGroup)();
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("tbody", {
        ...(0, $dGqE5$mergeProps)((0, $dGqE5$filterDOMProps)(props), rowGroupProps),
        ...renderProps,
        ref: collection.body.props.ref,
        "data-empty": collection.size === 0 || undefined
    }, isDroppable && /*#__PURE__*/ (0, $dGqE5$react).createElement($1910c06f0ca9905e$var$RootDropIndicator, null), bodyRows, emptyState);
}
function $1910c06f0ca9905e$var$TableHeaderRow({ item: item }) {
    let ref = (0, $dGqE5$useRef)(null);
    let state = (0, $dGqE5$useContext)($1910c06f0ca9905e$export$38de1cb0526c21fb);
    let { rowProps: rowProps } = (0, $dGqE5$useTableHeaderRow)({
        node: item
    }, state, ref);
    let { checkboxProps: checkboxProps } = (0, $dGqE5$useTableSelectAllCheckbox)(state);
    let cells = (0, $7135fc7d473fd974$export$727c8fc270210f13)({
        items: state.collection.getChildren(item.key),
        children: (item)=>{
            switch(item.type){
                case "column":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($1910c06f0ca9905e$var$TableColumnHeader, {
                        column: item
                    });
                default:
                    throw new Error("Unsupported node type in Row: " + item.type);
            }
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("tr", {
        ...rowProps,
        ref: ref
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $bc237834342dbd75$export$b085522c77523c51),
                {
                    slots: {
                        selection: checkboxProps
                    }
                }
            ]
        ]
    }, cells));
}
const $1910c06f0ca9905e$var$ColumnResizerContext = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $1910c06f0ca9905e$var$TableColumnHeader({ column: column }) {
    var _state_sortDescriptor, _state_sortDescriptor1;
    let ref = (0, $dGqE5$useObjectRef)(column.props.ref);
    let state = (0, $dGqE5$useContext)($1910c06f0ca9905e$export$38de1cb0526c21fb);
    let { columnHeaderProps: columnHeaderProps } = (0, $dGqE5$useTableColumnHeader)({
        node: column
    }, state, ref);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dGqE5$useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({});
    let layoutState = (0, $dGqE5$useContext)($1910c06f0ca9905e$export$a2680a798823803c);
    let isResizing = false;
    if (layoutState) isResizing = layoutState.resizingColumn === column.key;
    else {
        for(let prop in [
            "width",
            "defaultWidth",
            "minWidth",
            "maxWidth"
        ])if (prop in column.props) console.warn(`The ${prop} prop on a <Column> only applies when a <Table> is wrapped in a <ResizableTableContainer>. If you aren't using column resizing, you can set the width of a column with CSS.`);
    }
    let props = column.props;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        id: undefined,
        children: column.rendered,
        defaultClassName: "react-aria-Column",
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            allowsSorting: column.props.allowsSorting,
            sortDirection: ((_state_sortDescriptor = state.sortDescriptor) === null || _state_sortDescriptor === void 0 ? void 0 : _state_sortDescriptor.column) === column.key ? state.sortDescriptor.direction : undefined,
            isResizing: isResizing,
            startResize: ()=>{
                if (layoutState) {
                    layoutState.startResize(column.key);
                    state.setKeyboardNavigationDisabled(true);
                } else throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
            },
            sort: (direction)=>{
                state.sort(column.key, direction);
            }
        }
    });
    let style = renderProps.style;
    if (layoutState) style = {
        ...style,
        width: layoutState.getColumnWidth(column.key)
    };
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("th", {
        ...(0, $dGqE5$mergeProps)((0, $dGqE5$filterDOMProps)(props), columnHeaderProps, focusProps, hoverProps),
        ...renderProps,
        style: style,
        colSpan: column.colspan,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-resizing": isResizing || undefined,
        "data-allows-sorting": column.props.allowsSorting || undefined,
        "data-sort-direction": ((_state_sortDescriptor1 = state.sortDescriptor) === null || _state_sortDescriptor1 === void 0 ? void 0 : _state_sortDescriptor1.column) === column.key ? state.sortDescriptor.direction : undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement($1910c06f0ca9905e$var$ColumnResizerContext.Provider, {
        value: {
            column: column,
            triggerRef: ref
        }
    }, renderProps.children));
}
function $1910c06f0ca9905e$var$ColumnResizer(props, ref) {
    let layoutState = (0, $dGqE5$useContext)($1910c06f0ca9905e$export$a2680a798823803c);
    if (!layoutState) throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
    let stringFormatter = (0, $dGqE5$useLocalizedStringFormatter)((0, (/*@__PURE__*/$parcel$interopDefault($df39c1238ae2b5f3$exports))));
    let { onResizeStart: onResizeStart, onResize: onResize, onResizeEnd: onResizeEnd } = (0, $dGqE5$useContext)($1910c06f0ca9905e$var$ResizableTableContainerContext);
    let { column: column, triggerRef: triggerRef } = (0, $dGqE5$useContext)($1910c06f0ca9905e$var$ColumnResizerContext);
    let inputRef = (0, $dGqE5$useRef)(null);
    let { resizerProps: resizerProps, inputProps: inputProps, isResizing: isResizing } = (0, $dGqE5$useTableColumnResize)({
        column: column,
        "aria-label": props["aria-label"] || stringFormatter.format("tableResizer"),
        onResizeStart: onResizeStart,
        onResize: onResize,
        onResizeEnd: onResizeEnd,
        triggerRef: triggerRef
    }, layoutState, inputRef);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({});
    let isEResizable = layoutState.getColumnMinWidth(column.key) >= layoutState.getColumnWidth(column.key);
    let isWResizable = layoutState.getColumnMaxWidth(column.key) <= layoutState.getColumnWidth(column.key);
    let { direction: direction } = (0, $dGqE5$useLocale)();
    let resizableDirection = "both";
    if (isEResizable) resizableDirection = direction === "rtl" ? "right" : "left";
    else if (isWResizable) resizableDirection = direction === "rtl" ? "left" : "right";
    else resizableDirection = "both";
    let objectRef = (0, $dGqE5$useObjectRef)(ref);
    let [cursor, setCursor] = (0, $dGqE5$useState)("");
    (0, $dGqE5$useEffect)(()=>{
        let style = window.getComputedStyle(objectRef.current);
        setCursor(style.cursor);
    }, [
        objectRef,
        resizableDirection
    ]);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-ColumnResizer",
        values: {
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isResizing: isResizing,
            isHovered: isHovered,
            resizableDirection: resizableDirection
        }
    });
    let [isMouseDown, setMouseDown] = (0, $dGqE5$useState)(false);
    let onPointerDown = (e)=>{
        if (e.pointerType === "mouse") setMouseDown(true);
    };
    if (!isResizing && isMouseDown) setMouseDown(false);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ref: objectRef,
        role: "presentation",
        ...renderProps,
        ...(0, $dGqE5$mergeProps)(resizerProps, {
            onPointerDown: onPointerDown
        }),
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-resizing": isResizing || undefined,
        "data-resizable-direction": resizableDirection
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("input", {
        ref: inputRef,
        ...(0, $dGqE5$mergeProps)(inputProps, focusProps, hoverProps)
    }), isResizing && isMouseDown && /*#__PURE__*/ (0, $dGqE5$reactdom).createPortal(/*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            cursor: cursor
        }
    }), document.body));
}
const $1910c06f0ca9905e$export$ee689e97a7664bfd = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($1910c06f0ca9905e$var$ColumnResizer)));
function $1910c06f0ca9905e$var$TableRow({ item: item }) {
    let ref = (0, $dGqE5$useObjectRef)(item.props.ref);
    let state = (0, $dGqE5$useContext)($1910c06f0ca9905e$export$38de1cb0526c21fb);
    let { dragAndDropHooks: dragAndDropHooks, dragState: dragState, dropState: dropState } = (0, $dGqE5$useContext)((0, $d8f176866e6dc039$export$d188a835a7bc5783));
    let { rowProps: rowProps, ...states } = (0, $dGqE5$useTableRow)({
        node: item,
        shouldSelectOnPressUp: !!dragState
    }, state, ref);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dGqE5$useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({
        isDisabled: !states.allowsSelection && !states.hasAction
    });
    let { checkboxProps: checkboxProps } = (0, $dGqE5$useTableSelectionCheckbox)({
        key: item.key
    }, state);
    let draggableItem = undefined;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key,
        hasDragButton: true
    }, dragState);
    let dropIndicator = undefined;
    let dropIndicatorRef = (0, $dGqE5$useRef)(null);
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $dGqE5$useVisuallyHidden)();
    if (dropState && dragAndDropHooks) dropIndicator = dragAndDropHooks.useDropIndicator({
        target: {
            type: "item",
            key: item.key,
            dropPosition: "on"
        }
    }, dropState, dropIndicatorRef);
    let renderDropIndicator = (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.renderDropIndicator) || ((target)=>/*#__PURE__*/ (0, $dGqE5$react).createElement((0, $d8f176866e6dc039$export$62ed72bc21f6b8a6), {
            target: target
        }));
    let dragButtonRef = (0, $dGqE5$useRef)(null);
    (0, $dGqE5$useEffect)(()=>{
        if (dragState && !dragButtonRef.current) console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
    // eslint-disable-next-line
    }, []);
    let props = item.props;
    let isDragging = dragState && dragState.isDragging(item.key);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        id: undefined,
        defaultClassName: "react-aria-Row",
        values: {
            ...states,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior,
            isDragging: isDragging,
            isDropTarget: dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.isDropTarget
        }
    });
    let cells = (0, $7135fc7d473fd974$export$727c8fc270210f13)({
        items: state.collection.getChildren(item.key),
        children: (item)=>{
            switch(item.type){
                case "cell":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($1910c06f0ca9905e$var$TableCell, {
                        cell: item
                    });
                default:
                    throw new Error("Unsupported node type in Row: " + item.type);
            }
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDropIndicator) && renderDropIndicator({
        type: "item",
        key: item.key,
        dropPosition: "before"
    }), dropIndicator && !dropIndicator.isHidden && /*#__PURE__*/ (0, $dGqE5$react).createElement("tr", {
        role: "row",
        style: {
            height: 0
        }
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("td", {
        role: "gridcell",
        colSpan: state.collection.columnCount,
        style: {
            padding: 0
        }
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicator.dropIndicatorProps,
        ref: dropIndicatorRef
    }))), /*#__PURE__*/ (0, $dGqE5$react).createElement("tr", {
        ...(0, $dGqE5$mergeProps)((0, $dGqE5$filterDOMProps)(props), rowProps, focusProps, hoverProps, draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragProps),
        ...renderProps,
        ref: ref,
        "data-disabled": states.isDisabled || undefined,
        "data-selected": states.isSelected || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-dragging": isDragging || undefined,
        "data-drop-target": (dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.isDropTarget) || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === "none" ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $bc237834342dbd75$export$b085522c77523c51),
                {
                    slots: {
                        selection: checkboxProps
                    }
                }
            ],
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    slots: {
                        [(0, $64fa3d84918910a7$export$8e0ef2c5844bfb6b)]: {},
                        drag: {
                            ...draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragButtonProps,
                            ref: dragButtonRef,
                            style: {
                                pointerEvents: "none"
                            }
                        }
                    }
                }
            ]
        ]
    }, cells)), (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDropIndicator) && state.collection.getKeyAfter(item.key) == null && renderDropIndicator({
        type: "item",
        key: item.key,
        dropPosition: "after"
    }));
}
function $1910c06f0ca9905e$var$TableCell({ cell: cell }) {
    let ref = (0, $dGqE5$useObjectRef)(cell.props.ref);
    let state = (0, $dGqE5$useContext)($1910c06f0ca9905e$export$38de1cb0526c21fb);
    let { dragState: dragState } = (0, $dGqE5$useContext)((0, $d8f176866e6dc039$export$d188a835a7bc5783));
    // @ts-ignore
    cell.column = state.collection.columns[cell.index];
    let { gridCellProps: gridCellProps, isPressed: isPressed } = (0, $dGqE5$useTableCell)({
        node: cell,
        shouldSelectOnPressUp: !!dragState
    }, state, ref);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dGqE5$useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({});
    let props = cell.props;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        id: undefined,
        defaultClassName: "react-aria-Cell",
        values: {
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isPressed: isPressed,
            isHovered: isHovered
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("td", {
        ...(0, $dGqE5$mergeProps)((0, $dGqE5$filterDOMProps)(props), gridCellProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": isPressed || undefined
    }, renderProps.children);
}
function $1910c06f0ca9905e$var$TableDropIndicatorWrapper(props, ref) {
    ref = (0, $dGqE5$useObjectRef)(ref);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, $dGqE5$useContext)((0, $d8f176866e6dc039$export$d188a835a7bc5783));
    let buttonRef = (0, $dGqE5$useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps, isHidden: isHidden, isDropTarget: isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, buttonRef);
    if (isHidden) return null;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement($1910c06f0ca9905e$var$TableDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        buttonRef: buttonRef,
        ref: ref
    });
}
function $1910c06f0ca9905e$var$TableDropIndicator(props, ref) {
    let { dropIndicatorProps: dropIndicatorProps, isDropTarget: isDropTarget, buttonRef: buttonRef, ...otherProps } = props;
    let state = (0, $dGqE5$useContext)($1910c06f0ca9905e$export$38de1cb0526c21fb);
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $dGqE5$useVisuallyHidden)();
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...otherProps,
        defaultClassName: "react-aria-DropIndicator",
        values: {
            isDropTarget: isDropTarget
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("tr", {
        ...(0, $dGqE5$filterDOMProps)(props),
        ...renderProps,
        role: "row",
        ref: ref,
        "data-drop-target": isDropTarget || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("td", {
        role: "gridcell",
        colSpan: state.collection.columnCount,
        style: {
            padding: 0
        }
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...visuallyHiddenProps,
        role: "button",
        ...dropIndicatorProps,
        ref: buttonRef
    })));
}
const $1910c06f0ca9905e$var$TableDropIndicatorForwardRef = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($1910c06f0ca9905e$var$TableDropIndicator)));
function $1910c06f0ca9905e$var$RootDropIndicator() {
    let state = (0, $dGqE5$useContext)($1910c06f0ca9905e$export$38de1cb0526c21fb);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, $dGqE5$useContext)((0, $d8f176866e6dc039$export$d188a835a7bc5783));
    let ref = (0, $dGqE5$useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps } = dragAndDropHooks.useDropIndicator({
        target: {
            type: "root"
        }
    }, dropState, ref);
    let isDropTarget = dropState.isDropTarget({
        type: "root"
    });
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, $dGqE5$useVisuallyHidden)();
    if (!isDropTarget && dropIndicatorProps["aria-hidden"]) return null;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("tr", {
        role: "row",
        "aria-hidden": dropIndicatorProps["aria-hidden"],
        style: {
            height: 0
        }
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("td", {
        role: "gridcell",
        colSpan: state.collection.columnCount,
        style: {
            padding: 0
        }
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicatorProps,
        ref: ref
    })));
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





const $5e8ad37a45e1c704$export$cfa7aa87c26e7d1f = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $5e8ad37a45e1c704$export$364712098d2aa57c = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $5e8ad37a45e1c704$var$Tabs(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $5e8ad37a45e1c704$export$cfa7aa87c26e7d1f);
    let { collection: collection, document: document } = (0, $7135fc7d473fd974$export$7cd71aa5ddd6dc4e)();
    let { children: children, orientation: orientation = "horizontal" } = props;
    children = (0, $dGqE5$useMemo)(()=>typeof children === "function" ? children({
            orientation: orientation
        }) : children, [
        children,
        orientation
    ]);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$8dc98ba7eadeaa56), null, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $7135fc7d473fd974$export$8c25dea96356a8b6).Provider, {
        value: document
    }, children)), /*#__PURE__*/ (0, $dGqE5$react).createElement($5e8ad37a45e1c704$var$TabsInner, {
        props: props,
        collection: collection,
        tabsRef: ref
    }));
}
function $5e8ad37a45e1c704$var$TabsInner({ props: props, tabsRef: ref, collection: collection }) {
    let { orientation: orientation = "horizontal" } = props;
    let state = (0, $dGqE5$useTabListState)({
        ...props,
        collection: collection,
        children: undefined
    });
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)({
        within: true
    });
    let values = (0, $dGqE5$useMemo)(()=>({
            orientation: orientation,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible
        }), [
        orientation,
        isFocused,
        isFocusVisible
    ]);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-Tabs",
        values: values
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$filterDOMProps)(props),
        ...focusProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": isFocused || undefined,
        "data-orientation": orientation,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": state.isDisabled || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $5e8ad37a45e1c704$export$cfa7aa87c26e7d1f,
                props
            ],
            [
                $5e8ad37a45e1c704$export$364712098d2aa57c,
                state
            ]
        ]
    }, renderProps.children));
}
/**
 * Tabs organize content into multiple sections and allow users to navigate between them.
 */ const $5e8ad37a45e1c704$export$b2539bed5023c21c = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($5e8ad37a45e1c704$var$Tabs)));
function $5e8ad37a45e1c704$var$TabList(props, ref) {
    let document = (0, $dGqE5$useContext)((0, $7135fc7d473fd974$export$8c25dea96356a8b6));
    return document ? /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $7135fc7d473fd974$export$813b5978dd974d8), props) : /*#__PURE__*/ (0, $dGqE5$react).createElement($5e8ad37a45e1c704$var$TabListInner, {
        props: props,
        forwardedRef: ref
    });
}
function $5e8ad37a45e1c704$var$TabListInner({ props: props, forwardedRef: ref }) {
    let state = (0, $dGqE5$useContext)($5e8ad37a45e1c704$export$364712098d2aa57c);
    let { orientation: orientation = "horizontal", keyboardActivation: keyboardActivation = "automatic" } = (0, $64fa3d84918910a7$export$fabf2dc03a41866e)($5e8ad37a45e1c704$export$cfa7aa87c26e7d1f);
    let objectRef = (0, $dGqE5$useObjectRef)(ref);
    let { tabListProps: tabListProps } = (0, $dGqE5$useTabList)({
        ...props,
        orientation: orientation,
        keyboardActivation: keyboardActivation
    }, state, objectRef);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        children: null,
        defaultClassName: "react-aria-TabList",
        values: {
            orientation: orientation,
            state: state
        }
    });
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...DOMProps,
        ...tabListProps,
        ref: objectRef,
        ...renderProps,
        "data-orientation": orientation || undefined
    }, [
        ...state.collection
    ].map((item)=>/*#__PURE__*/ (0, $dGqE5$react).createElement($5e8ad37a45e1c704$var$TabInner, {
            key: item.key,
            item: item,
            state: state
        })));
}
/**
 * A TabList is used within Tabs to group tabs that a user can switch between.
 * The ids of the items within the <TabList> must match up with a corresponding item inside the <TabPanels>.
 */ const $5e8ad37a45e1c704$export$e51a686c67fdaa2d = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($5e8ad37a45e1c704$var$TabList)));
function $5e8ad37a45e1c704$var$Tab(props, ref) {
    return (0, $7135fc7d473fd974$export$e7c29ae2353b16ea)("item", props, ref, props.children);
}
/**
 * A Tab provides a title for an individual item within a TabList.
 */ const $5e8ad37a45e1c704$export$3e41faf802a29e71 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($5e8ad37a45e1c704$var$Tab)));
function $5e8ad37a45e1c704$var$TabInner({ item: item, state: state }) {
    let { key: key } = item;
    let ref = (0, $dGqE5$useObjectRef)(item.props.ref);
    let { tabProps: tabProps, isSelected: isSelected, isDisabled: isDisabled, isPressed: isPressed } = (0, $dGqE5$useTab)({
        key: key
    }, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({
        isDisabled: isDisabled
    });
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...item.props,
        children: item.rendered,
        defaultClassName: "react-aria-Tab",
        values: {
            isSelected: isSelected,
            isDisabled: isDisabled,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isPressed: isPressed,
            isHovered: isHovered,
            state: state
        }
    });
    let ElementType = item.props.href ? "a" : "div";
    return /*#__PURE__*/ (0, $dGqE5$react).createElement(ElementType, {
        ...(0, $dGqE5$mergeProps)(tabProps, focusProps, hoverProps, renderProps),
        ref: ref,
        "data-selected": isSelected || undefined,
        "data-disabled": isDisabled || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": isPressed || undefined,
        "data-hovered": isHovered || undefined
    });
}
function $5e8ad37a45e1c704$var$TabPanel(props, forwardedRef) {
    const state = (0, $dGqE5$useContext)($5e8ad37a45e1c704$export$364712098d2aa57c);
    let ref = (0, $dGqE5$useObjectRef)(forwardedRef);
    let { tabPanelProps: tabPanelProps } = (0, $dGqE5$useTabPanel)(props, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)();
    let isSelected = state.selectedKey === props.id;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-TabPanel",
        values: {
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isInert: !isSelected,
            state: state
        }
    });
    if (!isSelected && !props.shouldForceMount) return null;
    let DOMProps = (0, $dGqE5$filterDOMProps)(props);
    delete DOMProps.id;
    let domProps = isSelected ? (0, $dGqE5$mergeProps)(DOMProps, tabPanelProps, focusProps, renderProps) : renderProps;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...domProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        // @ts-ignore
        inert: !isSelected ? "true" : undefined,
        "data-inert": !isSelected ? "true" : undefined
    });
}
/**
 * A TabPanel provides the content for a tab.
 */ const $5e8ad37a45e1c704$export$3d96ec278d3efce4 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $64fa3d84918910a7$export$86427a43e3e48ebb)($5e8ad37a45e1c704$var$TabPanel)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 









const $eaf9e70818b436db$export$5b07b5dd2cbd96e3 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $eaf9e70818b436db$export$e755ce3685dd0ca9 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $eaf9e70818b436db$var$TagGroup(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $eaf9e70818b436db$export$5b07b5dd2cbd96e3);
    let tagListRef = (0, $dGqE5$useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let { collection: collection, document: document } = (0, $7135fc7d473fd974$export$7cd71aa5ddd6dc4e)();
    let state = (0, $dGqE5$useListState)({
        ...props,
        children: undefined,
        collection: collection
    });
    // Prevent DOM props from going to two places.
    let domProps = (0, $dGqE5$filterDOMProps)(props);
    let domPropOverrides = Object.fromEntries(Object.entries(domProps).map(([k])=>[
            k,
            undefined
        ]));
    let { gridProps: gridProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $dGqE5$useTagGroup)({
        ...props,
        ...domPropOverrides,
        label: label
    }, state, tagListRef);
    var _props_className;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...domProps,
        ref: ref,
        slot: props.slot || undefined,
        className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : "react-aria-TagGroup",
        style: props.style
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    elementType: "span",
                    ref: labelRef
                }
            ],
            [
                $eaf9e70818b436db$export$e755ce3685dd0ca9,
                {
                    ...gridProps,
                    ref: tagListRef
                }
            ],
            [
                (0, $eed445e0843c11d0$export$7c5906fe4f1f2af2),
                state
            ],
            [
                (0, $7135fc7d473fd974$export$8c25dea96356a8b6),
                document
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, props.children));
}
/**
 * A tag group is a focusable list of labels, categories, keywords, filters, or other items, with support for keyboard navigation, selection, and removal.
 */ const $eaf9e70818b436db$export$67ea30858aaf75e3 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($eaf9e70818b436db$var$TagGroup)));
function $eaf9e70818b436db$var$TagList(props, forwardedRef) {
    // Render the portal first so that we have the collection by the time we render the DOM in SSR.
    let portal = (0, $7135fc7d473fd974$export$ad42d5efb4461b31)(props);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$react).Fragment, null, portal, /*#__PURE__*/ (0, $dGqE5$react).createElement($eaf9e70818b436db$var$TagListInner, {
        props: props,
        forwardedRef: forwardedRef
    }));
}
function $eaf9e70818b436db$var$TagListInner({ props: props, forwardedRef: forwardedRef }) {
    let state = (0, $dGqE5$useContext)((0, $eed445e0843c11d0$export$7c5906fe4f1f2af2));
    let [gridProps, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, forwardedRef, $eaf9e70818b436db$export$e755ce3685dd0ca9);
    delete gridProps.items;
    delete gridProps.renderEmptyState;
    let children = (0, $7135fc7d473fd974$export$727c8fc270210f13)({
        items: state.collection,
        children: (item)=>{
            switch(item.type){
                case "item":
                    return /*#__PURE__*/ (0, $dGqE5$react).createElement($eaf9e70818b436db$var$TagItem, {
                        item: item
                    });
                default:
                    throw new Error("Unsupported node type in TagList: " + item.type);
            }
        }
    });
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)();
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        className: props.className,
        style: props.style,
        defaultClassName: "react-aria-TagList",
        values: {
            isEmpty: state.collection.size === 0,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible
        }
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...(0, $dGqE5$mergeProps1)(gridProps, focusProps),
        ...renderProps,
        ref: ref,
        "data-empty": state.collection.size === 0 || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, state.collection.size === 0 && props.renderEmptyState ? props.renderEmptyState() : children);
}
/**
 * A tag list is a container for tags within a TagGroup.
 */ const $eaf9e70818b436db$export$f9fef0f55402315b = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($eaf9e70818b436db$var$TagList)));
function $eaf9e70818b436db$var$Tag(props, ref) {
    return (0, $7135fc7d473fd974$export$e7c29ae2353b16ea)("item", props, ref, props.children);
}
/**
 * A Tag is an individual item within a TagList.
 */ const $eaf9e70818b436db$export$3288d34c523a1192 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($eaf9e70818b436db$var$Tag)));
function $eaf9e70818b436db$var$TagItem({ item: item }) {
    let state = (0, $dGqE5$useContext)((0, $eed445e0843c11d0$export$7c5906fe4f1f2af2));
    let ref = (0, $dGqE5$useObjectRef)(item.props.ref);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)({
        within: true
    });
    let { rowProps: rowProps, gridCellProps: gridCellProps, removeButtonProps: removeButtonProps, ...states } = (0, $dGqE5$useTag)({
        item: item
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({
        isDisabled: !states.allowsSelection
    });
    let props = item.props;
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: "react-aria-Tag",
        values: {
            ...states,
            isFocusVisible: isFocusVisible,
            isHovered: isHovered,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior
        }
    });
    (0, $dGqE5$useEffect)(()=>{
        if (!item.textValue) console.warn("A `textValue` prop is required for <Tag> elements with non-plain text children for accessibility.");
    }, [
        item.textValue
    ]);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ref: ref,
        ...renderProps,
        ...(0, $dGqE5$mergeProps1)((0, $dGqE5$filterDOMProps)(props), rowProps, focusProps, hoverProps),
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-allows-removing": states.allowsRemoving || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === "none" ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement("div", gridCellProps, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $d2b4bc8c273e7be6$export$24d547caef80ccd1),
                {
                    slots: {
                        remove: removeButtonProps
                    }
                }
            ]
        ]
    }, renderProps.children)));
}






const $216918bed6669f72$export$2dc6166a7e65358c = /*#__PURE__*/ (0, react.createContext)({});
function $216918bed6669f72$var$TextArea(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $216918bed6669f72$export$2dc6166a7e65358c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)({});
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $dGqE5$useFocusRing)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props["aria-invalid"] && props["aria-invalid"] !== "false";
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid: isInvalid
        },
        defaultClassName: "react-aria-TextArea"
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("textarea", {
        ...(0, $dGqE5$mergeProps)(props, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
}
/**
 * A textarea allows a user to input mult-line text.
 */ const $216918bed6669f72$export$f5c9f3c2c4054eec = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($216918bed6669f72$var$TextArea)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 







const $bcdf0525bf22703d$export$2129e27b3ef0d483 = /*#__PURE__*/ (0, react.createContext)(null);
function $bcdf0525bf22703d$var$TextField(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $bcdf0525bf22703d$export$2129e27b3ef0d483);
    let inputRef = (0, react.useRef)(null);
    let [labelRef, label] = (0, $64fa3d84918910a7$export$9d4c57ee4c6ffdd8)();
    let [inputElementType, setInputElementType] = (0, react.useState)("input");
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $2d73ec29415bd339$export$712718f7aec83d5)({
        ...(0, $64fa3d84918910a7$export$ef03459518577ad4)(props),
        inputElementType: inputElementType,
        label: label
    }, inputRef);
    // Intercept setting the input ref so we can determine what kind of element we have.
    // useTextField uses this to determine what props to include.
    let inputOrTextAreaRef = (0, react.useCallback)((el)=>{
        inputRef.current = el;
        if (el) setInputElementType(el instanceof HTMLTextAreaElement ? "textarea" : "input");
    }, []);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isDisabled: props.isDisabled || false,
            isInvalid: props.isInvalid || false
        },
        defaultClassName: "react-aria-TextField"
    });
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props),
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": props.isInvalid || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                (0, $01b77f81d0f07f68$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, $3985021b0ad6602f$export$37fb8590cf2c088c),
                {
                    ...inputProps,
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, $216918bed6669f72$export$2dc6166a7e65358c),
                {
                    ...inputProps,
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, $514c0188e459b4c0$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, renderProps.children));
}
/**
 * A text field allows a user to enter a plain text value with a keyboard.
 */ const $bcdf0525bf22703d$export$2c73285ae9390cec = (0, react.forwardRef)($bcdf0525bf22703d$var$TextField);


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $efde0372d7a700fe$export$43506d75ebd2e218 = /*#__PURE__*/ (0, react.createContext)({});
function $efde0372d7a700fe$var$ToggleButton(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $efde0372d7a700fe$export$43506d75ebd2e218);
    let state = (0, $dGqE5$useToggleState)(props);
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, $dGqE5$useToggleButton)(props, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, $dGqE5$useFocusRing)(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $dGqE5$useHover)(props);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isHovered: isHovered,
            isPressed: isPressed,
            isFocused: isFocused,
            isSelected: state.isSelected,
            isFocusVisible: isFocusVisible,
            isDisabled: props.isDisabled || false,
            state: state
        },
        defaultClassName: "react-aria-ToggleButton"
    });
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("button", {
        ...(0, $dGqE5$mergeProps)(buttonProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": isFocused || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-pressed": isPressed || undefined,
        "data-selected": state.isSelected || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined
    });
}
/**
 * A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.
 */ const $efde0372d7a700fe$export$d2b052e7b4be1756 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($efde0372d7a700fe$var$ToggleButton)));


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





const $4e3b923658d69c60$export$7a7623236eec67fa = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
const $4e3b923658d69c60$export$39ae08fa83328b12 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$createContext)(null)));
function $4e3b923658d69c60$export$8c610744efcf8a1d(props) {
    let state = (0, $dGqE5$useTooltipTriggerState)(props);
    let ref = (0, $dGqE5$useRef)(null);
    let { triggerProps: triggerProps, tooltipProps: tooltipProps } = (0, $dGqE5$useTooltipTrigger)(props, state, ref);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $4e3b923658d69c60$export$7a7623236eec67fa,
                state
            ],
            [
                $4e3b923658d69c60$export$39ae08fa83328b12,
                {
                    ...tooltipProps,
                    triggerRef: ref
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$FocusableProvider), {
        ...triggerProps,
        ref: ref
    }, props.children));
}
function $4e3b923658d69c60$var$Tooltip(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $4e3b923658d69c60$export$39ae08fa83328b12);
    let contextState = (0, $dGqE5$useContext)($4e3b923658d69c60$export$7a7623236eec67fa);
    let localState = (0, $dGqE5$useTooltipTriggerState)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let isExiting = (0, $64fa3d84918910a7$export$45fda7c47f93fd48)(ref, state.isOpen);
    if (!state.isOpen && !isExiting) return null;
    return /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $dGqE5$OverlayContainer), null, /*#__PURE__*/ (0, $dGqE5$react).createElement($4e3b923658d69c60$var$TooltipInner, {
        ...props,
        tooltipRef: ref,
        isExiting: isExiting
    }));
}
/**
 * A tooltip displays a description of an element on hover or focus.
 */ const $4e3b923658d69c60$export$28c660c63b792dea = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $dGqE5$forwardRef)($4e3b923658d69c60$var$Tooltip)));
function $4e3b923658d69c60$var$TooltipInner(props) {
    let state = (0, $dGqE5$useContext)($4e3b923658d69c60$export$7a7623236eec67fa);
    let { overlayProps: overlayProps, arrowProps: arrowProps, placement: placement } = (0, $dGqE5$useOverlayPosition)({
        placement: props.placement || "top",
        targetRef: props.triggerRef,
        overlayRef: props.tooltipRef,
        offset: props.offset,
        crossOffset: props.crossOffset,
        isOpen: state.isOpen
    });
    let isEntering = (0, $64fa3d84918910a7$export$6d3443f2c48bfc20)(props.tooltipRef, !!placement);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: "react-aria-Tooltip",
        values: {
            placement: placement,
            isEntering: isEntering,
            isExiting: props.isExiting,
            state: state
        }
    });
    props = (0, $dGqE5$mergeProps)(props, overlayProps);
    let { tooltipProps: tooltipProps } = (0, $dGqE5$useTooltip)(props, state);
    return /*#__PURE__*/ (0, $dGqE5$react).createElement("div", {
        ...tooltipProps,
        ref: props.tooltipRef,
        ...renderProps,
        style: {
            ...renderProps.style,
            ...overlayProps.style
        },
        "data-placement": placement,
        "data-entering": isEntering || undefined,
        "data-exiting": props.isExiting || undefined
    }, /*#__PURE__*/ (0, $dGqE5$react).createElement((0, $44f671af83e7d9e0$export$2de4954e8ae13b9f).Provider, {
        value: {
            ...arrowProps,
            placement: placement
        }
    }, renderProps.children));
}







//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./src/index.jsx




let o = (0,client/* createRoot */.s)(document.getElementById("root"));
o.render((0,jsx_runtime.jsx)(react.StrictMode, {
    children: (0,jsx_runtime.jsxs)("div", {
        children: [
            (0,jsx_runtime.jsx)("h1", {
                children: "Testing React Aria Components tree-shaking with webpack"
            }),
            (0,jsx_runtime.jsx)("div", {
                children: (0,jsx_runtime.jsx)($d2b4bc8c273e7be6$export$353f5b6fc5456de1, {
                    onClick: ()=>{
                        alert("You clicked me!");
                    },
                    children: "Click me"
                })
            })
        ]
    })
}));

})();

/******/ })()
;