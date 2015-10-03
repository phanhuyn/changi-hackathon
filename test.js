function FastClick(a){"use strict";var b,c=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=a,!a||!a.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(c,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(c,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(c,arguments)},this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(c,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(c,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(c,arguments)},FastClick.notNeeded(a)||(this.deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(b=a.onclick,a.addEventListener("click",function(a){b(a)},!1),a.onclick=null))}!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=eb.type(a);return"function"===c||eb.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(eb.isFunction(b))return eb.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return eb.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(mb.test(b))return eb.filter(b,a,c);b=eb.filter(b,a)}return eb.grep(a,function(a){return eb.inArray(a,b)>=0!==c})}function e(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}function f(a){var b=ub[a]={};return eb.each(a.match(tb)||[],function(a,c){b[c]=!0}),b}function g(){ob.addEventListener?(ob.removeEventListener("DOMContentLoaded",h,!1),a.removeEventListener("load",h,!1)):(ob.detachEvent("onreadystatechange",h),a.detachEvent("onload",h))}function h(){(ob.addEventListener||"load"===event.type||"complete"===ob.readyState)&&(g(),eb.ready())}function i(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(zb,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:yb.test(c)?eb.parseJSON(c):c}catch(e){}eb.data(a,b,c)}else c=void 0}return c}function j(a){var b;for(b in a)if(("data"!==b||!eb.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function k(a,b,c,d){if(eb.acceptData(a)){var e,f,g=eb.expando,h=a.nodeType,i=h?eb.cache:a,j=h?a[g]:a[g]&&g;if(j&&i[j]&&(d||i[j].data)||void 0!==c||"string"!=typeof b)return j||(j=h?a[g]=W.pop()||eb.guid++:g),i[j]||(i[j]=h?{}:{toJSON:eb.noop}),("object"==typeof b||"function"==typeof b)&&(d?i[j]=eb.extend(i[j],b):i[j].data=eb.extend(i[j].data,b)),f=i[j],d||(f.data||(f.data={}),f=f.data),void 0!==c&&(f[eb.camelCase(b)]=c),"string"==typeof b?(e=f[b],null==e&&(e=f[eb.camelCase(b)])):e=f,e}}function l(a,b,c){if(eb.acceptData(a)){var d,e,f=a.nodeType,g=f?eb.cache:a,h=f?a[eb.expando]:eb.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){eb.isArray(b)?b=b.concat(eb.map(b,eb.camelCase)):b in d?b=[b]:(b=eb.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;for(;e--;)delete d[b[e]];if(c?!j(d):!eb.isEmptyObject(d))return}(c||(delete g[h].data,j(g[h])))&&(f?eb.cleanData([a],!0):cb.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}function m(){return!0}function n(){return!1}function o(){try{return ob.activeElement}catch(a){}}function p(a){var b=Kb.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function q(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==xb?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==xb?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||eb.nodeName(d,b)?f.push(d):eb.merge(f,q(d,b));return void 0===b||b&&eb.nodeName(a,b)?eb.merge([a],f):f}function r(a){Eb.test(a.type)&&(a.defaultChecked=a.checked)}function s(a,b){return eb.nodeName(a,"table")&&eb.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function t(a){return a.type=(null!==eb.find.attr(a,"type"))+"/"+a.type,a}function u(a){var b=Vb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function v(a,b){for(var c,d=0;null!=(c=a[d]);d++)eb._data(c,"globalEval",!b||eb._data(b[d],"globalEval"))}function w(a,b){if(1===b.nodeType&&eb.hasData(a)){var c,d,e,f=eb._data(a),g=eb._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)eb.event.add(b,c,h[c][d])}g.data&&(g.data=eb.extend({},g.data))}}function x(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!cb.noCloneEvent&&b[eb.expando]){e=eb._data(b);for(d in e.events)eb.removeEvent(b,d,e.handle);b.removeAttribute(eb.expando)}"script"===c&&b.text!==a.text?(t(b).text=a.text,u(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),cb.html5Clone&&a.innerHTML&&!eb.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Eb.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function y(b,c){var d,e=eb(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:eb.css(e[0],"display");return e.detach(),f}function z(a){var b=ob,c=_b[a];return c||(c=y(a,b),"none"!==c&&c||($b=($b||eb("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=($b[0].contentWindow||$b[0].contentDocument).document,b.write(),b.close(),c=y(a,b),$b.detach()),_b[a]=c),c}function A(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}function B(a,b){if(b in a)return b;for(var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=mc.length;e--;)if(b=mc[e]+c,b in a)return b;return d}function C(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=eb._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&Cb(d)&&(f[g]=eb._data(d,"olddisplay",z(d.nodeName)))):(e=Cb(d),(c&&"none"!==c||!e)&&eb._data(d,"olddisplay",e?c:eb.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function D(a,b,c){var d=ic.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function E(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=eb.css(a,c+Bb[f],!0,e)),d?("content"===c&&(g-=eb.css(a,"padding"+Bb[f],!0,e)),"margin"!==c&&(g-=eb.css(a,"border"+Bb[f]+"Width",!0,e))):(g+=eb.css(a,"padding"+Bb[f],!0,e),"padding"!==c&&(g+=eb.css(a,"border"+Bb[f]+"Width",!0,e)));return g}function F(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=ac(a),g=cb.boxSizing&&"border-box"===eb.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=bc(a,b,f),(0>e||null==e)&&(e=a.style[b]),dc.test(e))return e;d=g&&(cb.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+E(a,b,c||(g?"border":"content"),d,f)+"px"}function G(a,b,c,d,e){return new G.prototype.init(a,b,c,d,e)}function H(){return setTimeout(function(){nc=void 0}),nc=eb.now()}function I(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=Bb[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function J(a,b,c){for(var d,e=(tc[b]||[]).concat(tc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function K(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&Cb(a),p=eb._data(a,"fxshow");c.queue||(h=eb._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,eb.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=eb.css(a,"display"),k="none"===j?eb._data(a,"olddisplay")||z(a.nodeName):j,"inline"===k&&"none"===eb.css(a,"float")&&(cb.inlineBlockNeedsLayout&&"inline"!==z(a.nodeName)?n.zoom=1:n.display="inline-block")),c.overflow&&(n.overflow="hidden",cb.shrinkWrapBlocks()||l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],pc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||eb.style(a,d)}else j=void 0;if(eb.isEmptyObject(m))"inline"===("none"===j?z(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=eb._data(a,"fxshow",{}),f&&(p.hidden=!o),o?eb(a).show():l.done(function(){eb(a).hide()}),l.done(function(){var b;eb._removeData(a,"fxshow");for(b in m)eb.style(a,b,m[b])});for(d in m)g=J(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function L(a,b){var c,d,e,f,g;for(c in a)if(d=eb.camelCase(c),e=b[d],f=a[c],eb.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=eb.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function M(a,b,c){var d,e,f=0,g=sc.length,h=eb.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=nc||H(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:eb.extend({},b),opts:eb.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:nc||H(),duration:c.duration,tweens:[],createTween:function(b,c){var d=eb.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(L(k,j.opts.specialEasing);g>f;f++)if(d=sc[f].call(j,a,k,j.opts))return d;return eb.map(k,J,j),eb.isFunction(j.opts.start)&&j.opts.start.call(a,j),eb.fx.timer(eb.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function N(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(tb)||[];if(eb.isFunction(c))for(;d=f[e++];)"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function O(a,b,c,d){function e(h){var i;return f[h]=!0,eb.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===Rc;return e(b.dataTypes[0])||!f["*"]&&e("*")}function P(a,b){var c,d,e=eb.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&eb.extend(!0,a,c),a}function Q(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function R(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function S(a,b,c,d){var e;if(eb.isArray(b))eb.each(b,function(b,e){c||Vc.test(a)?d(a,e):S(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==eb.type(b))d(a,b);else for(e in b)S(a+"["+e+"]",b[e],c,d)}function T(){try{return new a.XMLHttpRequest}catch(b){}}function U(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function V(a){return eb.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}var W=[],X=W.slice,Y=W.concat,Z=W.push,$=W.indexOf,_={},ab=_.toString,bb=_.hasOwnProperty,cb={},db="1.11.2",eb=function(a,b){return new eb.fn.init(a,b)},fb=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,gb=/^-ms-/,hb=/-([\da-z])/gi,ib=function(a,b){return b.toUpperCase()};eb.fn=eb.prototype={jquery:db,constructor:eb,selector:"",length:0,toArray:function(){return X.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:X.call(this)},pushStack:function(a){var b=eb.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return eb.each(this,a,b)},map:function(a){return this.pushStack(eb.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(X.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Z,sort:W.sort,splice:W.splice},eb.extend=eb.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||eb.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(eb.isPlainObject(c)||(b=eb.isArray(c)))?(b?(b=!1,f=a&&eb.isArray(a)?a:[]):f=a&&eb.isPlainObject(a)?a:{},g[d]=eb.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},eb.extend({expando:"jQuery"+(db+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===eb.type(a)},isArray:Array.isArray||function(a){return"array"===eb.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!eb.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==eb.type(a)||a.nodeType||eb.isWindow(a))return!1;try{if(a.constructor&&!bb.call(a,"constructor")&&!bb.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(cb.ownLast)for(b in a)return bb.call(a,b);for(b in a);return void 0===b||bb.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?_[ab.call(a)]||"object":typeof a},globalEval:function(b){b&&eb.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(gb,"ms-").replace(hb,ib)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(fb,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?eb.merge(d,"string"==typeof a?[a]:a):Z.call(d,a)),d},inArray:function(a,b,c){var d;if(b){if($)return $.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return Y.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(e=a[b],b=a,a=e),eb.isFunction(a)?(c=X.call(arguments,2),d=function(){return a.apply(b||this,c.concat(X.call(arguments)))},d.guid=a.guid=a.guid||eb.guid++,d):void 0},now:function(){return+new Date},support:cb}),eb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){_["[object "+b+"]"]=b.toLowerCase()});var jb=function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],h=b.nodeType,"string"!=typeof a||!a||1!==h&&9!==h&&11!==h)return c;if(!d&&I){if(11!==h&&(e=sb.exec(a)))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return $.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName)return $.apply(c,b.getElementsByClassName(g)),c}if(v.qsa&&(!J||!J.test(a))){if(n=l=N,o=b,p=1!==h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute("id"))?n=l.replace(ub,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=tb.test(a)&&k(b.parentNode)||b,p=j.join(",")}if(p)try{return $.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute("id")}}}return B(a.replace(ib,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||V)-(~a.sourceIndex||V);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?ab(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return ab(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d));return b=null,e}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ib,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Y.call(i));r=q(r)}$.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+1*new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V=1<<31,W={}.hasOwnProperty,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,ab=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},bb="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",cb="[\\x20\\t\\r\\n\\f]",db="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",eb=db.replace("w","w#"),fb="\\["+cb+"*("+db+")(?:"+cb+"*([*^$|!~]?=)"+cb+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+eb+"))|)"+cb+"*\\]",gb=":("+db+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+fb+")*)|.*)\\)|)",hb=new RegExp(cb+"+","g"),ib=new RegExp("^"+cb+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cb+"+$","g"),jb=new RegExp("^"+cb+"*,"+cb+"*"),kb=new RegExp("^"+cb+"*([>+~]|"+cb+")"+cb+"*"),lb=new RegExp("="+cb+"*([^\\]'\"]*?)"+cb+"*\\]","g"),mb=new RegExp(gb),nb=new RegExp("^"+eb+"$"),ob={ID:new RegExp("^#("+db+")"),CLASS:new RegExp("^\\.("+db+")"),TAG:new RegExp("^("+db.replace("w","w*")+")"),ATTR:new RegExp("^"+fb),PSEUDO:new RegExp("^"+gb),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+cb+"*(even|odd|(([+-]|)(\\d*)n|)"+cb+"*(?:([+-]|)"+cb+"*(\\d+)|))"+cb+"*\\)|)","i"),bool:new RegExp("^(?:"+bb+")$","i"),needsContext:new RegExp("^"+cb+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+cb+"*((?:-\\d)?\\d*)"+cb+"*\\)|)(?=[^-]|$)","i")},pb=/^(?:input|select|textarea|button)$/i,qb=/^h\d$/i,rb=/^[^{]+\{\s*\[native \w/,sb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tb=/[+~]/,ub=/'|\\/g,vb=new RegExp("\\\\([\\da-f]{1,6}"+cb+"?|("+cb+")|.)","ig"),wb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},xb=function(){F()};try{$.apply(X=_.call(O.childNodes),O.childNodes),X[O.childNodes.length].nodeType}catch(yb){$={apply:X.length?function(a,b){Z.apply(a,_.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:O;return d!==G&&9===d.nodeType&&d.documentElement?(G=d,H=d.documentElement,c=d.defaultView,c&&c!==c.top&&(c.addEventListener?c.addEventListener("unload",xb,!1):c.attachEvent&&c.attachEvent("onunload",xb)),I=!y(d),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(d.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=rb.test(d.getElementsByClassName),v.getById=e(function(a){return H.appendChild(a).id=N,!d.getElementsByName||!d.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):v.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=rb.test(d.querySelectorAll))&&(e(function(a){H.appendChild(a).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&J.push("[*^$]="+cb+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+cb+"*(?:value|"+bb+")"),a.querySelectorAll("[id~="+N+"-]").length||J.push("~="),a.querySelectorAll(":checked").length||J.push(":checked"),a.querySelectorAll("a#"+N+"+*").length||J.push(".#.+[+~]")}),e(function(a){var b=d.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+cb+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=rb.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",gb)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=rb.test(H.compareDocumentPosition),M=b||rb.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c?c:(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!v.sortDetached&&b.compareDocumentPosition(a)===c?a===d||a.ownerDocument===O&&M(O,a)?-1:b===d||b.ownerDocument===O&&M(O,b)?1:D?ab(D,a)-ab(D,b):0:4&c?-1:1)}:function(a,b){if(a===b)return E=!0,0;var c,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===d?-1:b===d?1:f?-1:h?1:D?ab(D,a)-ab(D,b):0;if(f===h)return g(a,b);for(c=a;c=c.parentNode;)i.unshift(c);for(c=b;c=c.parentNode;)j.unshift(c);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},d):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(lb,"='$1']"),!(!v.matchesSelector||!I||K&&K.test(c)||J&&J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&W.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:ob,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(vb,wb),a[3]=(a[3]||a[4]||a[5]||"").replace(vb,wb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return ob.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&mb.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(vb,wb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+cb+")"+a+"("+cb+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(hb," ")+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=ab(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ib,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(vb,wb),function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return nb.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(vb,wb).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return qb.test(a.nodeName)},input:function(a){return pb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=jb.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=kb.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ib," ")}),h=h.slice(d.length));for(g in w.filter)!(e=ob[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(vb,wb),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=ob.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(vb,wb),tb.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return $.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,tb.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(bb,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);eb.find=jb,eb.expr=jb.selectors,eb.expr[":"]=eb.expr.pseudos,eb.unique=jb.uniqueSort,eb.text=jb.getText,eb.isXMLDoc=jb.isXML,eb.contains=jb.contains;var kb=eb.expr.match.needsContext,lb=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,mb=/^.[^:#\[\.,]*$/;eb.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?eb.find.matchesSelector(d,a)?[d]:[]:eb.find.matches(a,eb.grep(b,function(a){return 1===a.nodeType}))},eb.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(eb(a).filter(function(){for(b=0;e>b;b++)if(eb.contains(d[b],this))return!0}));for(b=0;e>b;b++)eb.find(a,d[b],c);return c=this.pushStack(e>1?eb.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&kb.test(a)?eb(a):a||[],!1).length}});var nb,ob=a.document,pb=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,qb=eb.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:pb.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||nb).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof eb?b[0]:b,eb.merge(this,eb.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:ob,!0)),lb.test(c[1])&&eb.isPlainObject(b))for(c in b)eb.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=ob.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return nb.find(a);this.length=1,this[0]=d}return this.context=ob,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):eb.isFunction(a)?"undefined"!=typeof nb.ready?nb.ready(a):a(eb):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),eb.makeArray(a,this))};qb.prototype=eb.fn,nb=eb(ob);var rb=/^(?:parents|prev(?:Until|All))/,sb={children:!0,contents:!0,next:!0,prev:!0};eb.extend({dir:function(a,b,c){for(var d=[],e=a[b];e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!eb(e).is(c));)1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),eb.fn.extend({has:function(a){var b,c=eb(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(eb.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=kb.test(a)||"string"!=typeof a?eb(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&eb.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?eb.unique(f):f)},index:function(a){return a?"string"==typeof a?eb.inArray(this[0],eb(a)):eb.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(eb.unique(eb.merge(this.get(),eb(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),eb.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return eb.dir(a,"parentNode")},parentsUntil:function(a,b,c){return eb.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return eb.dir(a,"nextSibling")},prevAll:function(a){return eb.dir(a,"previousSibling")},nextUntil:function(a,b,c){return eb.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return eb.dir(a,"previousSibling",c)},siblings:function(a){return eb.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return eb.sibling(a.firstChild)},contents:function(a){return eb.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:eb.merge([],a.childNodes)}},function(a,b){eb.fn[a]=function(c,d){var e=eb.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=eb.filter(d,e)),this.length>1&&(sb[a]||(e=eb.unique(e)),rb.test(a)&&(e=e.reverse())),this.pushStack(e)}});var tb=/\S+/g,ub={};eb.Callbacks=function(a){a="string"==typeof a?ub[a]||f(a):eb.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(c=a.memory&&f,d=!0,g=h||0,h=0,e=i.length,b=!0;i&&e>g;g++)if(i[g].apply(f[0],f[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var d=i.length;!function f(b){eb.each(b,function(b,c){var d=eb.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=i.length:c&&(h=d,k(c))}return this},remove:function(){return i&&eb.each(arguments,function(a,c){for(var d;(d=eb.inArray(c,i,d))>-1;)i.splice(d,1),b&&(e>=d&&e--,g>=d&&g--)}),this},has:function(a){return a?eb.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],e=0,this},disable:function(){return i=j=c=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,c){return!i||d&&!j||(c=c||[],c=[a,c.slice?c.slice():c],b?j.push(c):k(c)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},eb.extend({Deferred:function(a){var b=[["resolve","done",eb.Callbacks("once memory"),"resolved"],["reject","fail",eb.Callbacks("once memory"),"rejected"],["notify","progress",eb.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return eb.Deferred(function(c){eb.each(b,function(b,f){var g=eb.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&eb.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?eb.extend(a,d):d}},e={};return d.pipe=d.then,eb.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=X.call(arguments),g=f.length,h=1!==g||a&&eb.isFunction(a.promise)?g:0,i=1===h?a:eb.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?X.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&eb.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var vb;eb.fn.ready=function(a){return eb.ready.promise().done(a),this},eb.extend({isReady:!1,readyWait:1,holdReady:function(a){a?eb.readyWait++:eb.ready(!0)},ready:function(a){if(a===!0?!--eb.readyWait:!eb.isReady){if(!ob.body)return setTimeout(eb.ready);eb.isReady=!0,a!==!0&&--eb.readyWait>0||(vb.resolveWith(ob,[eb]),eb.fn.triggerHandler&&(eb(ob).triggerHandler("ready"),eb(ob).off("ready")))}}}),eb.ready.promise=function(b){if(!vb)if(vb=eb.Deferred(),"complete"===ob.readyState)setTimeout(eb.ready);else if(ob.addEventListener)ob.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1);else{ob.attachEvent("onreadystatechange",h),a.attachEvent("onload",h);var c=!1;try{c=null==a.frameElement&&ob.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!eb.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}g(),eb.ready()}}()}return vb.promise(b)};var wb,xb="undefined";for(wb in eb(cb))break;cb.ownLast="0"!==wb,cb.inlineBlockNeedsLayout=!1,eb(function(){var a,b,c,d;c=ob.getElementsByTagName("body")[0],c&&c.style&&(b=ob.createElement("div"),d=ob.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==xb&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",cb.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=ob.createElement("div");if(null==cb.deleteExpando){cb.deleteExpando=!0;try{delete a.test}catch(b){cb.deleteExpando=!1}}a=null}(),eb.acceptData=function(a){var b=eb.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var yb=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,zb=/([A-Z])/g;eb.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?eb.cache[a[eb.expando]]:a[eb.expando],!!a&&!j(a)},data:function(a,b,c){return k(a,b,c)},removeData:function(a,b){return l(a,b)},_data:function(a,b,c){return k(a,b,c,!0)},_removeData:function(a,b){return l(a,b,!0)}}),eb.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=eb.data(f),1===f.nodeType&&!eb._data(f,"parsedAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=eb.camelCase(d.slice(5)),i(f,d,e[d])));eb._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){eb.data(this,a)}):arguments.length>1?this.each(function(){eb.data(this,a,b)}):f?i(f,a,eb.data(f,a)):void 0},removeData:function(a){return this.each(function(){eb.removeData(this,a)})}}),eb.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=eb._data(a,b),c&&(!d||eb.isArray(c)?d=eb._data(a,b,eb.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=eb.queue(a,b),d=c.length,e=c.shift(),f=eb._queueHooks(a,b),g=function(){eb.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return eb._data(a,c)||eb._data(a,c,{empty:eb.Callbacks("once memory").add(function(){eb._removeData(a,b+"queue"),eb._removeData(a,c)})})}}),eb.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?eb.queue(this[0],a):void 0===b?this:this.each(function(){var c=eb.queue(this,a,b);eb._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&eb.dequeue(this,a)})},dequeue:function(a){return this.each(function(){eb.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=eb.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=eb._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Ab=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Bb=["Top","Right","Bottom","Left"],Cb=function(a,b){return a=b||a,"none"===eb.css(a,"display")||!eb.contains(a.ownerDocument,a)},Db=eb.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===eb.type(c)){e=!0;for(h in c)eb.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,eb.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(eb(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Eb=/^(?:checkbox|radio)$/i;!function(){var a=ob.createElement("input"),b=ob.createElement("div"),c=ob.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",cb.leadingWhitespace=3===b.firstChild.nodeType,cb.tbody=!b.getElementsByTagName("tbody").length,cb.htmlSerialize=!!b.getElementsByTagName("link").length,cb.html5Clone="<:nav></:nav>"!==ob.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),cb.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",cb.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",cb.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,cb.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){cb.noCloneEvent=!1}),b.cloneNode(!0).click()),null==cb.deleteExpando){cb.deleteExpando=!0;try{delete b.test}catch(d){cb.deleteExpando=!1}}}(),function(){var b,c,d=ob.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(cb[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),cb[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Fb=/^(?:input|select|textarea)$/i,Gb=/^key/,Hb=/^(?:mouse|pointer|contextmenu)|click/,Ib=/^(?:focusinfocus|focusoutblur)$/,Jb=/^([^.]*)(?:\.(.+)|)$/;eb.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=eb._data(a);if(q){for(c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=eb.guid++),(g=q.events)||(g=q.events={}),(k=q.handle)||(k=q.handle=function(a){return typeof eb===xb||a&&eb.event.triggered===a.type?void 0:eb.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(tb)||[""],h=b.length;h--;)f=Jb.exec(b[h])||[],n=p=f[1],o=(f[2]||"").split(".").sort(),n&&(j=eb.event.special[n]||{},n=(e?j.delegateType:j.bindType)||n,j=eb.event.special[n]||{},l=eb.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&eb.expr.match.needsContext.test(e),namespace:o.join(".")},i),(m=g[n])||(m=g[n]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,o,k)!==!1||(a.addEventListener?a.addEventListener(n,k,!1):a.attachEvent&&a.attachEvent("on"+n,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),eb.event.global[n]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=eb.hasData(a)&&eb._data(a);if(q&&(k=q.events)){for(b=(b||"").match(tb)||[""],j=b.length;j--;)if(h=Jb.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=eb.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=k[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;f--;)g=m[f],!e&&p!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||eb.removeEvent(a,n,q.handle),delete k[n])}else for(n in k)eb.event.remove(a,n+b[j],c,d,!0);eb.isEmptyObject(k)&&(delete q.handle,eb._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||ob],n=bb.call(b,"type")?b.type:b,o=bb.call(b,"namespace")?b.namespace.split("."):[];if(h=k=d=d||ob,3!==d.nodeType&&8!==d.nodeType&&!Ib.test(n+eb.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),g=n.indexOf(":")<0&&"on"+n,b=b[eb.expando]?b:new eb.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:eb.makeArray(c,[b]),j=eb.event.special[n]||{},e||!j.trigger||j.trigger.apply(d,c)!==!1)){if(!e&&!j.noBubble&&!eb.isWindow(d)){for(i=j.delegateType||n,Ib.test(i+n)||(h=h.parentNode);h;h=h.parentNode)m.push(h),k=h;k===(d.ownerDocument||ob)&&m.push(k.defaultView||k.parentWindow||a)}for(l=0;(h=m[l++])&&!b.isPropagationStopped();)b.type=l>1?i:j.bindType||n,f=(eb._data(h,"events")||{})[b.type]&&eb._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&eb.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=n,!e&&!b.isDefaultPrevented()&&(!j._default||j._default.apply(m.pop(),c)===!1)&&eb.acceptData(d)&&g&&d[n]&&!eb.isWindow(d)){k=d[g],k&&(d[g]=null),eb.event.triggered=n;try{d[n]()}catch(p){}eb.event.triggered=void 0,k&&(d[g]=k)}return b.result}},dispatch:function(a){a=eb.event.fix(a);var b,c,d,e,f,g=[],h=X.call(arguments),i=(eb._data(this,"events")||{})[a.type]||[],j=eb.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=eb.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,f=0;(d=e.handlers[f++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(d.namespace))&&(a.handleObj=d,a.data=d.data,c=((eb.event.special[d.origType]||{}).handle||d.handler).apply(e.elem,h),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?eb(c,this).index(i)>=0:eb.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[eb.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Hb.test(e)?this.mouseHooks:Gb.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new eb.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||ob),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||ob,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==o()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===o()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return eb.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return eb.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=eb.extend(new eb.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?eb.event.trigger(e,null,b):eb.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},eb.removeEvent=ob.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===xb&&(a[d]=null),a.detachEvent(d,c))},eb.Event=function(a,b){return this instanceof eb.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?m:n):this.type=a,b&&eb.extend(this,b),this.timeStamp=a&&a.timeStamp||eb.now(),void(this[eb.expando]=!0)):new eb.Event(a,b)},eb.Event.prototype={isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=m,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=m,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=m,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},eb.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){eb.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!eb.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),cb.submitBubbles||(eb.event.special.submit={setup:function(){return eb.nodeName(this,"form")?!1:void eb.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=eb.nodeName(b,"input")||eb.nodeName(b,"button")?b.form:void 0;c&&!eb._data(c,"submitBubbles")&&(eb.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),eb._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&eb.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return eb.nodeName(this,"form")?!1:void eb.event.remove(this,"._submit")}}),cb.changeBubbles||(eb.event.special.change={setup:function(){return Fb.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(eb.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),eb.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),eb.event.simulate("change",this,a,!0)})),!1):void eb.event.add(this,"beforeactivate._change",function(a){var b=a.target;Fb.test(b.nodeName)&&!eb._data(b,"changeBubbles")&&(eb.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||eb.event.simulate("change",this.parentNode,a,!0)}),eb._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return eb.event.remove(this,"._change"),!Fb.test(this.nodeName)}}),cb.focusinBubbles||eb.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){eb.event.simulate(b,a.target,eb.event.fix(a),!0)};eb.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=eb._data(d,b);e||d.addEventListener(a,c,!0),eb._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=eb._data(d,b)-1;e?eb._data(d,b,e):(d.removeEventListener(a,c,!0),eb._removeData(d,b))}}}),eb.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=n;else if(!d)return this;return 1===e&&(g=d,d=function(a){return eb().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=eb.guid++)),this.each(function(){eb.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,eb(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=n),this.each(function(){eb.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){eb.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?eb.event.trigger(a,b,c,!0):void 0}});var Kb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Lb=/ jQuery\d+="(?:null|\d+)"/g,Mb=new RegExp("<(?:"+Kb+")[\\s/>]","i"),Nb=/^\s+/,Ob=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Pb=/<([\w:]+)/,Qb=/<tbody/i,Rb=/<|&#?\w+;/,Sb=/<(?:script|style|link)/i,Tb=/checked\s*(?:[^=]|=\s*.checked.)/i,Ub=/^$|\/(?:java|ecma)script/i,Vb=/^true\/(.*)/,Wb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Xb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:cb.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Yb=p(ob),Zb=Yb.appendChild(ob.createElement("div"));Xb.optgroup=Xb.option,Xb.tbody=Xb.tfoot=Xb.colgroup=Xb.caption=Xb.thead,Xb.th=Xb.td,eb.extend({clone:function(a,b,c){var d,e,f,g,h,i=eb.contains(a.ownerDocument,a);if(cb.html5Clone||eb.isXMLDoc(a)||!Mb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Zb.innerHTML=a.outerHTML,Zb.removeChild(f=Zb.firstChild)),!(cb.noCloneEvent&&cb.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||eb.isXMLDoc(a)))for(d=q(f),h=q(a),g=0;null!=(e=h[g]);++g)d[g]&&x(e,d[g]);if(b)if(c)for(h=h||q(a),d=d||q(f),g=0;null!=(e=h[g]);g++)w(e,d[g]);else w(a,f);return d=q(f,"script"),d.length>0&&v(d,!i&&q(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,l=a.length,m=p(b),n=[],o=0;l>o;o++)if(f=a[o],f||0===f)if("object"===eb.type(f))eb.merge(n,f.nodeType?[f]:f);else if(Rb.test(f)){for(h=h||m.appendChild(b.createElement("div")),i=(Pb.exec(f)||["",""])[1].toLowerCase(),k=Xb[i]||Xb._default,h.innerHTML=k[1]+f.replace(Ob,"<$1></$2>")+k[2],e=k[0];e--;)h=h.lastChild;if(!cb.leadingWhitespace&&Nb.test(f)&&n.push(b.createTextNode(Nb.exec(f)[0])),!cb.tbody)for(f="table"!==i||Qb.test(f)?"<table>"!==k[1]||Qb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;e--;)eb.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j);for(eb.merge(n,h.childNodes),h.textContent="";h.firstChild;)h.removeChild(h.firstChild);h=m.lastChild}else n.push(b.createTextNode(f));for(h&&m.removeChild(h),cb.appendChecked||eb.grep(q(n,"input"),r),o=0;f=n[o++];)if((!d||-1===eb.inArray(f,d))&&(g=eb.contains(f.ownerDocument,f),h=q(m.appendChild(f),"script"),g&&v(h),c))for(e=0;f=h[e++];)Ub.test(f.type||"")&&c.push(f);return h=null,m},cleanData:function(a,b){for(var c,d,e,f,g=0,h=eb.expando,i=eb.cache,j=cb.deleteExpando,k=eb.event.special;null!=(c=a[g]);g++)if((b||eb.acceptData(c))&&(e=c[h],f=e&&i[e])){if(f.events)for(d in f.events)k[d]?eb.event.remove(c,d):eb.removeEvent(c,d,f.handle);i[e]&&(delete i[e],j?delete c[h]:typeof c.removeAttribute!==xb?c.removeAttribute(h):c[h]=null,W.push(e))}}}),eb.fn.extend({text:function(a){return Db(this,function(a){return void 0===a?eb.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ob).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=s(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=s(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?eb.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||eb.cleanData(q(c)),c.parentNode&&(b&&eb.contains(c.ownerDocument,c)&&v(q(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){for(1===a.nodeType&&eb.cleanData(q(a,!1));a.firstChild;)a.removeChild(a.firstChild);a.options&&eb.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return eb.clone(this,a,b)})},html:function(a){return Db(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(Lb,""):void 0;if(!("string"!=typeof a||Sb.test(a)||!cb.htmlSerialize&&Mb.test(a)||!cb.leadingWhitespace&&Nb.test(a)||Xb[(Pb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(Ob,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(eb.cleanData(q(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,eb.cleanData(q(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=Y.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],n=eb.isFunction(m);if(n||j>1&&"string"==typeof m&&!cb.checkClone&&Tb.test(m))return this.each(function(c){var d=k.eq(c);n&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(h=eb.buildFragment(a,this[0].ownerDocument,!1,this),c=h.firstChild,1===h.childNodes.length&&(h=c),c)){for(f=eb.map(q(h,"script"),t),e=f.length;j>i;i++)d=h,i!==l&&(d=eb.clone(d,!0,!0),e&&eb.merge(f,q(d,"script"))),b.call(this[i],d,i);
if(e)for(g=f[f.length-1].ownerDocument,eb.map(f,u),i=0;e>i;i++)d=f[i],Ub.test(d.type||"")&&!eb._data(d,"globalEval")&&eb.contains(g,d)&&(d.src?eb._evalUrl&&eb._evalUrl(d.src):eb.globalEval((d.text||d.textContent||d.innerHTML||"").replace(Wb,"")));h=c=null}return this}}),eb.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){eb.fn[a]=function(a){for(var c,d=0,e=[],f=eb(a),g=f.length-1;g>=d;d++)c=d===g?this:this.clone(!0),eb(f[d])[b](c),Z.apply(e,c.get());return this.pushStack(e)}});var $b,_b={};!function(){var a;cb.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=ob.getElementsByTagName("body")[0],c&&c.style?(b=ob.createElement("div"),d=ob.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==xb&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(ob.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var ac,bc,cc=/^margin/,dc=new RegExp("^("+Ab+")(?!px)[a-z%]+$","i"),ec=/^(top|right|bottom|left)$/;a.getComputedStyle?(ac=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},bc=function(a,b,c){var d,e,f,g,h=a.style;return c=c||ac(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||eb.contains(a.ownerDocument,a)||(g=eb.style(a,b)),dc.test(g)&&cc.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):ob.documentElement.currentStyle&&(ac=function(a){return a.currentStyle},bc=function(a,b,c){var d,e,f,g,h=a.style;return c=c||ac(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),dc.test(g)&&!ec.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"}),function(){function b(){var b,c,d,e;c=ob.getElementsByTagName("body")[0],c&&c.style&&(b=ob.createElement("div"),d=ob.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f=g=!1,i=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(b,null)||{}).top,g="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,e=b.appendChild(ob.createElement("div")),e.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",e.style.marginRight=e.style.width="0",b.style.width="1px",i=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(e)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",e=b.getElementsByTagName("td"),e[0].style.cssText="margin:0;border:0;padding:0;display:none",h=0===e[0].offsetHeight,h&&(e[0].style.display="",e[1].style.display="none",h=0===e[0].offsetHeight),c.removeChild(d))}var c,d,e,f,g,h,i;c=ob.createElement("div"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=c.getElementsByTagName("a")[0],d=e&&e.style,d&&(d.cssText="float:left;opacity:.5",cb.opacity="0.5"===d.opacity,cb.cssFloat=!!d.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",cb.clearCloneStyle="content-box"===c.style.backgroundClip,cb.boxSizing=""===d.boxSizing||""===d.MozBoxSizing||""===d.WebkitBoxSizing,eb.extend(cb,{reliableHiddenOffsets:function(){return null==h&&b(),h},boxSizingReliable:function(){return null==g&&b(),g},pixelPosition:function(){return null==f&&b(),f},reliableMarginRight:function(){return null==i&&b(),i}}))}(),eb.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var fc=/alpha\([^)]*\)/i,gc=/opacity\s*=\s*([^)]*)/,hc=/^(none|table(?!-c[ea]).+)/,ic=new RegExp("^("+Ab+")(.*)$","i"),jc=new RegExp("^([+-])=("+Ab+")","i"),kc={position:"absolute",visibility:"hidden",display:"block"},lc={letterSpacing:"0",fontWeight:"400"},mc=["Webkit","O","Moz","ms"];eb.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bc(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":cb.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=eb.camelCase(b),i=a.style;if(b=eb.cssProps[h]||(eb.cssProps[h]=B(i,h)),g=eb.cssHooks[b]||eb.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=jc.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(eb.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||eb.cssNumber[h]||(c+="px"),cb.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=eb.camelCase(b);return b=eb.cssProps[h]||(eb.cssProps[h]=B(a.style,h)),g=eb.cssHooks[b]||eb.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=bc(a,b,d)),"normal"===f&&b in lc&&(f=lc[b]),""===c||c?(e=parseFloat(f),c===!0||eb.isNumeric(e)?e||0:f):f}}),eb.each(["height","width"],function(a,b){eb.cssHooks[b]={get:function(a,c,d){return c?hc.test(eb.css(a,"display"))&&0===a.offsetWidth?eb.swap(a,kc,function(){return F(a,b,d)}):F(a,b,d):void 0},set:function(a,c,d){var e=d&&ac(a);return D(a,c,d?E(a,b,d,cb.boxSizing&&"border-box"===eb.css(a,"boxSizing",!1,e),e):0)}}}),cb.opacity||(eb.cssHooks.opacity={get:function(a,b){return gc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=eb.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===eb.trim(f.replace(fc,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=fc.test(f)?f.replace(fc,e):f+" "+e)}}),eb.cssHooks.marginRight=A(cb.reliableMarginRight,function(a,b){return b?eb.swap(a,{display:"inline-block"},bc,[a,"marginRight"]):void 0}),eb.each({margin:"",padding:"",border:"Width"},function(a,b){eb.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+Bb[d]+b]=f[d]||f[d-2]||f[0];return e}},cc.test(a)||(eb.cssHooks[a+b].set=D)}),eb.fn.extend({css:function(a,b){return Db(this,function(a,b,c){var d,e,f={},g=0;if(eb.isArray(b)){for(d=ac(a),e=b.length;e>g;g++)f[b[g]]=eb.css(a,b[g],!1,d);return f}return void 0!==c?eb.style(a,b,c):eb.css(a,b)},a,b,arguments.length>1)},show:function(){return C(this,!0)},hide:function(){return C(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Cb(this)?eb(this).show():eb(this).hide()})}}),eb.Tween=G,G.prototype={constructor:G,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(eb.cssNumber[c]?"":"px")},cur:function(){var a=G.propHooks[this.prop];return a&&a.get?a.get(this):G.propHooks._default.get(this)},run:function(a){var b,c=G.propHooks[this.prop];return this.pos=b=this.options.duration?eb.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):G.propHooks._default.set(this),this}},G.prototype.init.prototype=G.prototype,G.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=eb.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){eb.fx.step[a.prop]?eb.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[eb.cssProps[a.prop]]||eb.cssHooks[a.prop])?eb.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},G.propHooks.scrollTop=G.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},eb.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},eb.fx=G.prototype.init,eb.fx.step={};var nc,oc,pc=/^(?:toggle|show|hide)$/,qc=new RegExp("^(?:([+-])=|)("+Ab+")([a-z%]*)$","i"),rc=/queueHooks$/,sc=[K],tc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=qc.exec(b),f=e&&e[3]||(eb.cssNumber[a]?"":"px"),g=(eb.cssNumber[a]||"px"!==f&&+d)&&qc.exec(eb.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,eb.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};eb.Animation=eb.extend(M,{tweener:function(a,b){eb.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],tc[c]=tc[c]||[],tc[c].unshift(b)},prefilter:function(a,b){b?sc.unshift(a):sc.push(a)}}),eb.speed=function(a,b,c){var d=a&&"object"==typeof a?eb.extend({},a):{complete:c||!c&&b||eb.isFunction(a)&&a,duration:a,easing:c&&b||b&&!eb.isFunction(b)&&b};return d.duration=eb.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in eb.fx.speeds?eb.fx.speeds[d.duration]:eb.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){eb.isFunction(d.old)&&d.old.call(this),d.queue&&eb.dequeue(this,d.queue)},d},eb.fn.extend({fadeTo:function(a,b,c,d){return this.filter(Cb).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=eb.isEmptyObject(a),f=eb.speed(b,c,d),g=function(){var b=M(this,eb.extend({},a),f);(e||eb._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=eb.timers,g=eb._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&rc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&eb.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=eb._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=eb.timers,g=d?d.length:0;for(c.finish=!0,eb.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),eb.each(["toggle","show","hide"],function(a,b){var c=eb.fn[b];eb.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(I(b,!0),a,d,e)}}),eb.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){eb.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),eb.timers=[],eb.fx.tick=function(){var a,b=eb.timers,c=0;for(nc=eb.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||eb.fx.stop(),nc=void 0},eb.fx.timer=function(a){eb.timers.push(a),a()?eb.fx.start():eb.timers.pop()},eb.fx.interval=13,eb.fx.start=function(){oc||(oc=setInterval(eb.fx.tick,eb.fx.interval))},eb.fx.stop=function(){clearInterval(oc),oc=null},eb.fx.speeds={slow:600,fast:200,_default:400},eb.fn.delay=function(a,b){return a=eb.fx?eb.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=ob.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=ob.createElement("select"),e=c.appendChild(ob.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",cb.getSetAttribute="t"!==b.className,cb.style=/top/.test(d.getAttribute("style")),cb.hrefNormalized="/a"===d.getAttribute("href"),cb.checkOn=!!a.value,cb.optSelected=e.selected,cb.enctype=!!ob.createElement("form").enctype,c.disabled=!0,cb.optDisabled=!e.disabled,a=ob.createElement("input"),a.setAttribute("value",""),cb.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),cb.radioValue="t"===a.value}();var uc=/\r/g;eb.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=eb.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,eb(this).val()):a,null==e?e="":"number"==typeof e?e+="":eb.isArray(e)&&(e=eb.map(e,function(a){return null==a?"":a+""})),b=eb.valHooks[this.type]||eb.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=eb.valHooks[e.type]||eb.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(uc,""):null==c?"":c)}}}),eb.extend({valHooks:{option:{get:function(a){var b=eb.find.attr(a,"value");return null!=b?b:eb.trim(eb.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(cb.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&eb.nodeName(c.parentNode,"optgroup"))){if(b=eb(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=eb.makeArray(b),g=e.length;g--;)if(d=e[g],eb.inArray(eb.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),eb.each(["radio","checkbox"],function(){eb.valHooks[this]={set:function(a,b){return eb.isArray(b)?a.checked=eb.inArray(eb(a).val(),b)>=0:void 0}},cb.checkOn||(eb.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var vc,wc,xc=eb.expr.attrHandle,yc=/^(?:checked|selected)$/i,zc=cb.getSetAttribute,Ac=cb.input;eb.fn.extend({attr:function(a,b){return Db(this,eb.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){eb.removeAttr(this,a)})}}),eb.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===xb?eb.prop(a,b,c):(1===f&&eb.isXMLDoc(a)||(b=b.toLowerCase(),d=eb.attrHooks[b]||(eb.expr.match.bool.test(b)?wc:vc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=eb.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void eb.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(tb);if(f&&1===a.nodeType)for(;c=f[e++];)d=eb.propFix[c]||c,eb.expr.match.bool.test(c)?Ac&&zc||!yc.test(c)?a[d]=!1:a[eb.camelCase("default-"+c)]=a[d]=!1:eb.attr(a,c,""),a.removeAttribute(zc?c:d)},attrHooks:{type:{set:function(a,b){if(!cb.radioValue&&"radio"===b&&eb.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),wc={set:function(a,b,c){return b===!1?eb.removeAttr(a,c):Ac&&zc||!yc.test(c)?a.setAttribute(!zc&&eb.propFix[c]||c,c):a[eb.camelCase("default-"+c)]=a[c]=!0,c}},eb.each(eb.expr.match.bool.source.match(/\w+/g),function(a,b){var c=xc[b]||eb.find.attr;xc[b]=Ac&&zc||!yc.test(b)?function(a,b,d){var e,f;return d||(f=xc[b],xc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,xc[b]=f),e}:function(a,b,c){return c?void 0:a[eb.camelCase("default-"+b)]?b.toLowerCase():null}}),Ac&&zc||(eb.attrHooks.value={set:function(a,b,c){return eb.nodeName(a,"input")?void(a.defaultValue=b):vc&&vc.set(a,b,c)}}),zc||(vc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},xc.id=xc.name=xc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},eb.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:vc.set},eb.attrHooks.contenteditable={set:function(a,b,c){vc.set(a,""===b?!1:b,c)}},eb.each(["width","height"],function(a,b){eb.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),cb.style||(eb.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var Bc=/^(?:input|select|textarea|button|object)$/i,Cc=/^(?:a|area)$/i;eb.fn.extend({prop:function(a,b){return Db(this,eb.prop,a,b,arguments.length>1)},removeProp:function(a){return a=eb.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),eb.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!eb.isXMLDoc(a),f&&(b=eb.propFix[b]||b,e=eb.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=eb.find.attr(a,"tabindex");return b?parseInt(b,10):Bc.test(a.nodeName)||Cc.test(a.nodeName)&&a.href?0:-1}}}}),cb.hrefNormalized||eb.each(["href","src"],function(a,b){eb.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),cb.optSelected||(eb.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),eb.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){eb.propFix[this.toLowerCase()]=this}),cb.enctype||(eb.propFix.enctype="encoding");var Dc=/[\t\r\n\f]/g;eb.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(eb.isFunction(a))return this.each(function(b){eb(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(tb)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Dc," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=eb.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(eb.isFunction(a))return this.each(function(b){eb(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(tb)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(Dc," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");g=a?eb.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(eb.isFunction(a)?function(c){eb(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(var b,d=0,e=eb(this),f=a.match(tb)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===xb||"boolean"===c)&&(this.className&&eb._data(this,"__className__",this.className),this.className=this.className||a===!1?"":eb._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(Dc," ").indexOf(b)>=0)return!0;return!1}}),eb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){eb.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),eb.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var Ec=eb.now(),Fc=/\?/,Gc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;eb.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=eb.trim(b+"");return e&&!eb.trim(e.replace(Gc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():eb.error("Invalid JSON: "+b)},eb.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||eb.error("Invalid XML: "+b),c};var Hc,Ic,Jc=/#.*$/,Kc=/([?&])_=[^&]*/,Lc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Mc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nc=/^(?:GET|HEAD)$/,Oc=/^\/\//,Pc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Qc={},Rc={},Sc="*/".concat("*");try{Ic=location.href}catch(Tc){Ic=ob.createElement("a"),Ic.href="",Ic=Ic.href}Hc=Pc.exec(Ic.toLowerCase())||[],eb.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ic,type:"GET",isLocal:Mc.test(Hc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Sc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":eb.parseJSON,"text xml":eb.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?P(P(a,eb.ajaxSettings),b):P(eb.ajaxSettings,a)},ajaxPrefilter:N(Qc),ajaxTransport:N(Rc),ajax:function(a,b){function c(a,b,c,d){var e,k,r,s,u,w=b;2!==t&&(t=2,h&&clearTimeout(h),j=void 0,g=d||"",v.readyState=a>0?4:0,e=a>=200&&300>a||304===a,c&&(s=Q(l,v,c)),s=R(l,s,v,e),e?(l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(eb.lastModified[f]=u),u=v.getResponseHeader("etag"),u&&(eb.etag[f]=u)),204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,e=!r)):(r=w,(a||!w)&&(w="error",0>a&&(a=0))),v.status=a,v.statusText=(b||w)+"",e?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,i&&n.trigger(e?"ajaxSuccess":"ajaxError",[v,l,e?k:r]),p.fireWith(m,[v,w]),i&&(n.trigger("ajaxComplete",[v,l]),--eb.active||eb.event.trigger("ajaxStop")))}"object"==typeof a&&(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=eb.ajaxSetup({},b),m=l.context||l,n=l.context&&(m.nodeType||m.jquery)?eb(m):eb.event,o=eb.Deferred(),p=eb.Callbacks("once memory"),q=l.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!k)for(k={};b=Lc.exec(g);)k[b[1].toLowerCase()]=b[2];b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return j&&j.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||Ic)+"").replace(Jc,"").replace(Oc,Hc[1]+"//"),l.type=b.method||b.type||l.method||l.type,l.dataTypes=eb.trim(l.dataType||"*").toLowerCase().match(tb)||[""],null==l.crossDomain&&(d=Pc.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Hc[1]&&d[2]===Hc[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Hc[3]||("http:"===Hc[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=eb.param(l.data,l.traditional)),O(Qc,l,b,v),2===t)return v;i=eb.event&&l.global,i&&0===eb.active++&&eb.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Nc.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fc.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Kc.test(f)?f.replace(Kc,"$1_="+Ec++):f+(Fc.test(f)?"&":"?")+"_="+Ec++)),l.ifModified&&(eb.lastModified[f]&&v.setRequestHeader("If-Modified-Since",eb.lastModified[f]),eb.etag[f]&&v.setRequestHeader("If-None-Match",eb.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Sc+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)v.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();u="abort";for(e in{success:1,error:1,complete:1})v[e](l[e]);if(j=O(Rc,l,b,v)){v.readyState=1,i&&n.trigger("ajaxSend",[v,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,j.send(r,c)}catch(w){if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return eb.get(a,b,c,"json")},getScript:function(a,b){return eb.get(a,void 0,b,"script")}}),eb.each(["get","post"],function(a,b){eb[b]=function(a,c,d,e){return eb.isFunction(c)&&(e=e||d,d=c,c=void 0),eb.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),eb._evalUrl=function(a){return eb.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},eb.fn.extend({wrapAll:function(a){if(eb.isFunction(a))return this.each(function(b){eb(this).wrapAll(a.call(this,b))});if(this[0]){var b=eb(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(eb.isFunction(a)?function(b){eb(this).wrapInner(a.call(this,b))}:function(){var b=eb(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=eb.isFunction(a);return this.each(function(c){eb(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){eb.nodeName(this,"body")||eb(this).replaceWith(this.childNodes)}).end()}}),eb.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!cb.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||eb.css(a,"display"))},eb.expr.filters.visible=function(a){return!eb.expr.filters.hidden(a)};var Uc=/%20/g,Vc=/\[\]$/,Wc=/\r?\n/g,Xc=/^(?:submit|button|image|reset|file)$/i,Yc=/^(?:input|select|textarea|keygen)/i;eb.param=function(a,b){var c,d=[],e=function(a,b){b=eb.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=eb.ajaxSettings&&eb.ajaxSettings.traditional),eb.isArray(a)||a.jquery&&!eb.isPlainObject(a))eb.each(a,function(){e(this.name,this.value)});else for(c in a)S(c,a[c],b,e);return d.join("&").replace(Uc,"+")},eb.fn.extend({serialize:function(){return eb.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=eb.prop(this,"elements");return a?eb.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!eb(this).is(":disabled")&&Yc.test(this.nodeName)&&!Xc.test(a)&&(this.checked||!Eb.test(a))}).map(function(a,b){var c=eb(this).val();return null==c?null:eb.isArray(c)?eb.map(c,function(a){return{name:b.name,value:a.replace(Wc,"\r\n")}}):{name:b.name,value:c.replace(Wc,"\r\n")}}).get()}}),eb.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&T()||U()}:T;var Zc=0,$c={},_c=eb.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in $c)$c[a](void 0,!0)}),cb.cors=!!_c&&"withCredentials"in _c,_c=cb.ajax=!!_c,_c&&eb.ajaxTransport(function(a){if(!a.crossDomain||cb.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Zc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete $c[g],b=void 0,f.onreadystatechange=eb.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=$c[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}}),eb.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return eb.globalEval(a),a}}}),eb.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),eb.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=ob.head||eb("head")[0]||ob.documentElement;return{send:function(d,e){b=ob.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;eb.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||eb.expando+"_"+Ec++;return this[a]=!0,a}}),eb.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=eb.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(Fc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||eb.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&eb.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),eb.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||ob;var d=lb.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=eb.buildFragment([a],b,e),e&&e.length&&eb(e).remove(),eb.merge([],d.childNodes))};var cd=eb.fn.load;eb.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=eb.trim(a.slice(h,a.length)),a=a.slice(0,h)),eb.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&eb.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?eb("<div>").append(eb.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},eb.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){eb.fn[b]=function(a){return this.on(b,a)}}),eb.expr.filters.animated=function(a){return eb.grep(eb.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;eb.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=eb.css(a,"position"),l=eb(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=eb.css(a,"top"),i=eb.css(a,"left"),j=("absolute"===k||"fixed"===k)&&eb.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),eb.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},eb.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){eb.offset.setOffset(this,a,b)
});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,eb.contains(b,e)?(typeof e.getBoundingClientRect!==xb&&(d=e.getBoundingClientRect()),c=V(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===eb.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),eb.nodeName(a[0],"html")||(c=a.offset()),c.top+=eb.css(a[0],"borderTopWidth",!0),c.left+=eb.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-eb.css(d,"marginTop",!0),left:b.left-c.left-eb.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||dd;a&&!eb.nodeName(a,"html")&&"static"===eb.css(a,"position");)a=a.offsetParent;return a||dd})}}),eb.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);eb.fn[a]=function(d){return Db(this,function(a,d,e){var f=V(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?eb(f).scrollLeft():e,c?e:eb(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),eb.each(["top","left"],function(a,b){eb.cssHooks[b]=A(cb.pixelPosition,function(a,c){return c?(c=bc(a,b),dc.test(c)?eb(a).position()[b]+"px":c):void 0})}),eb.each({Height:"height",Width:"width"},function(a,b){eb.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){eb.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Db(this,function(b,c,d){var e;return eb.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?eb.css(b,c,g):eb.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),eb.fn.size=function(){return this.length},eb.fn.andSelf=eb.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return eb});var ed=a.jQuery,fd=a.$;return eb.noConflict=function(b){return a.$===eb&&(a.$=fd),b&&a.jQuery===eb&&(a.jQuery=ed),eb},typeof b===xb&&(a.jQuery=a.$=eb),eb}),function(a,b,c){"use strict";function d(a){return function(){var b,c,d=arguments[0],e="["+(a?a+":":"")+d+"] ",f=arguments[1],g=arguments,h=function(a){return"function"==typeof a?a.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof a?"undefined":"string"!=typeof a?JSON.stringify(a):a};for(b=e+f.replace(/\{\d+\}/g,function(a){var b,c=+a.slice(1,-1);return c+2<g.length?(b=g[c+2],"function"==typeof b?b.toString().replace(/ ?\{[\s\S]*$/,""):"undefined"==typeof b?"undefined":"string"!=typeof b?R(b):b):a}),b=b+"\nhttp://errors.angularjs.org/1.2.16/"+(a?a+"/":"")+d,c=2;c<arguments.length;c++)b=b+(2==c?"?":"&")+"p"+(c-2)+"="+encodeURIComponent(h(arguments[c]));return new Error(b)}}function e(a){if(null==a||A(a))return!1;var b=a.length;return 1===a.nodeType&&b?!0:u(a)||x(a)||0===b||"number"==typeof b&&b>0&&b-1 in a}function f(a,b,c){var d;if(a)if(y(a))for(d in a)"prototype"==d||"length"==d||"name"==d||a.hasOwnProperty&&!a.hasOwnProperty(d)||b.call(c,a[d],d);else if(a.forEach&&a.forEach!==f)a.forEach(b,c);else if(e(a))for(d=0;d<a.length;d++)b.call(c,a[d],d);else for(d in a)a.hasOwnProperty(d)&&b.call(c,a[d],d);return a}function g(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort()}function h(a,b,c){for(var d=g(a),e=0;e<d.length;e++)b.call(c,a[d[e]],d[e]);return d}function i(a){return function(b,c){a(c,b)}}function j(){for(var a,b=Bd.length;b;){if(b--,a=Bd[b].charCodeAt(0),57==a)return Bd[b]="A",Bd.join("");if(90!=a)return Bd[b]=String.fromCharCode(a+1),Bd.join("");Bd[b]="0"}return Bd.unshift("0"),Bd.join("")}function k(a,b){b?a.$$hashKey=b:delete a.$$hashKey}function l(a){var b=a.$$hashKey;return f(arguments,function(b){b!==a&&f(b,function(b,c){a[c]=b})}),k(a,b),a}function m(a){return parseInt(a,10)}function n(a,b){return l(new(l(function(){},{prototype:a})),b)}function o(){}function p(a){return a}function q(a){return function(){return a}}function r(a){return"undefined"==typeof a}function s(a){return"undefined"!=typeof a}function t(a){return null!=a&&"object"==typeof a}function u(a){return"string"==typeof a}function v(a){return"number"==typeof a}function w(a){return"[object Date]"===yd.call(a)}function x(a){return"[object Array]"===yd.call(a)}function y(a){return"function"==typeof a}function z(a){return"[object RegExp]"===yd.call(a)}function A(a){return a&&a.document&&a.location&&a.alert&&a.setInterval}function B(a){return a&&a.$evalAsync&&a.$watch}function C(a){return"[object File]"===yd.call(a)}function D(a){return"[object Blob]"===yd.call(a)}function E(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function F(a,b,c){var d=[];return f(a,function(a,e,f){d.push(b.call(c,a,e,f))}),d}function G(a,b){return-1!=H(a,b)}function H(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c++)if(b===a[c])return c;return-1}function I(a,b){var c=H(a,b);return c>=0&&a.splice(c,1),b}function J(a,b){if(A(a)||B(a))throw zd("cpws","Can't copy! Making copies of Window or Scope instances is not supported.");if(b){if(a===b)throw zd("cpi","Can't copy! Source and destination are identical.");if(x(a)){b.length=0;for(var c=0;c<a.length;c++)b.push(J(a[c]))}else{var d=b.$$hashKey;f(b,function(a,c){delete b[c]});for(var e in a)b[e]=J(a[e]);k(b,d)}}else b=a,a&&(x(a)?b=J(a,[]):w(a)?b=new Date(a.getTime()):z(a)?b=new RegExp(a.source):t(a)&&(b=J(a,{})));return b}function K(a,b){b=b||{};for(var c in a)!a.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(b[c]=a[c]);return b}function L(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d,e,f,g=typeof a,h=typeof b;if(g==h&&"object"==g){if(!x(a)){if(w(a))return w(b)&&a.getTime()==b.getTime();if(z(a)&&z(b))return a.toString()==b.toString();if(B(a)||B(b)||A(a)||A(b)||x(b))return!1;f={};for(e in a)if("$"!==e.charAt(0)&&!y(a[e])){if(!L(a[e],b[e]))return!1;f[e]=!0}for(e in b)if(!f.hasOwnProperty(e)&&"$"!==e.charAt(0)&&b[e]!==c&&!y(b[e]))return!1;return!0}if(!x(b))return!1;if((d=a.length)==b.length){for(e=0;d>e;e++)if(!L(a[e],b[e]))return!1;return!0}}return!1}function M(){return b.securityPolicy&&b.securityPolicy.isActive||b.querySelector&&!(!b.querySelector("[ng-csp]")&&!b.querySelector("[data-ng-csp]"))}function N(a,b,c){return a.concat(wd.call(b,c))}function O(a,b){return wd.call(a,b||0)}function P(a,b){var c=arguments.length>2?O(arguments,2):[];return!y(b)||b instanceof RegExp?b:c.length?function(){return arguments.length?b.apply(a,c.concat(wd.call(arguments,0))):b.apply(a,c)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Q(a,d){var e=d;return"string"==typeof a&&"$"===a.charAt(0)?e=c:A(d)?e="$WINDOW":d&&b===d?e="$DOCUMENT":B(d)&&(e="$SCOPE"),e}function R(a,b){return"undefined"==typeof a?c:JSON.stringify(a,Q,b?"  ":null)}function S(a){return u(a)?JSON.parse(a):a}function T(a){if("function"==typeof a)a=!0;else if(a&&0!==a.length){var b=md(""+a);a=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)}else a=!1;return a}function U(a){a=sd(a).clone();try{a.empty()}catch(b){}var c=3,d=sd("<div>").append(a).html();try{return a[0].nodeType===c?md(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+md(b)})}catch(b){return md(d)}}function V(a){try{return decodeURIComponent(a)}catch(b){}}function W(a){var b,c,d={};return f((a||"").split("&"),function(a){if(a&&(b=a.split("="),c=V(b[0]),s(c))){var e=s(b[1])?V(b[1]):!0;d[c]?x(d[c])?d[c].push(e):d[c]=[d[c],e]:d[c]=e}}),d}function X(a){var b=[];return f(a,function(a,c){x(a)?f(a,function(a){b.push(Z(c,!0)+(a===!0?"":"="+Z(a,!0)))}):b.push(Z(c,!0)+(a===!0?"":"="+Z(a,!0)))}),b.length?b.join("&"):""}function Y(a){return Z(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Z(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}function $(a,c){function d(a){a&&h.push(a)}var e,g,h=[a],i=["ng:app","ng-app","x-ng-app","data-ng-app"],j=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;f(i,function(c){i[c]=!0,d(b.getElementById(c)),c=c.replace(":","\\:"),a.querySelectorAll&&(f(a.querySelectorAll("."+c),d),f(a.querySelectorAll("."+c+"\\:"),d),f(a.querySelectorAll("["+c+"]"),d))}),f(h,function(a){if(!e){var b=" "+a.className+" ",c=j.exec(b);c?(e=a,g=(c[2]||"").replace(/\s+/g,",")):f(a.attributes,function(b){!e&&i[b.name]&&(e=a,g=b.value)})}}),e&&c(e,g?[g]:[])}function _(c,d){var e=function(){if(c=sd(c),c.injector()){var a=c[0]===b?"document":U(c);throw zd("btstrpd","App Already Bootstrapped with this Element '{0}'",a)}d=d||[],d.unshift(["$provide",function(a){a.value("$rootElement",c)}]),d.unshift("ng");var e=Ib(d);return e.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d){a.$apply(function(){b.data("$injector",d),c(b)(a)})}]),e},g=/^NG_DEFER_BOOTSTRAP!/;return a&&!g.test(a.name)?e():(a.name=a.name.replace(g,""),void(Ad.resumeBootstrap=function(a){f(a,function(a){d.push(a)}),e()}))}function ab(a,b){return b=b||"_",a.replace(Dd,function(a,c){return(c?b:"")+a.toLowerCase()})}function bb(){td=a.jQuery,td?(sd=td,l(td.fn,{scope:Sd.scope,isolateScope:Sd.isolateScope,controller:Sd.controller,injector:Sd.injector,inheritedData:Sd.inheritedData}),lb("remove",!0,!0,!1),lb("empty",!1,!1,!1),lb("html",!1,!1,!0)):sd=pb,Ad.element=sd}function cb(a,b,c){if(!a)throw zd("areq","Argument '{0}' is {1}",b||"?",c||"required");return a}function db(a,b,c){return c&&x(a)&&(a=a[a.length-1]),cb(y(a),b,"not a function, got "+(a&&"object"==typeof a?a.constructor.name||"Object":typeof a)),a}function eb(a,b){if("hasOwnProperty"===a)throw zd("badname","hasOwnProperty is not a valid {0} name",b)}function fb(a,b,c){if(!b)return a;for(var d,e=b.split("."),f=a,g=e.length,h=0;g>h;h++)d=e[h],a&&(a=(f=a)[d]);return!c&&y(a)?P(f,a):a}function gb(a){var b=a[0],c=a[a.length-1];if(b===c)return sd(b);var d=b,e=[d];do{if(d=d.nextSibling,!d)break;e.push(d)}while(d!==c);return sd(e)}function hb(a){function b(a,b,c){return a[b]||(a[b]=c())}var c=d("$injector"),e=d("ng"),f=b(a,"angular",Object);return f.$$minErr=f.$$minErr||d,b(f,"module",function(){var a={};return function(d,f,g){var h=function(a,b){if("hasOwnProperty"===a)throw e("badname","hasOwnProperty is not a valid {0} name",b)};return h(d,"module"),f&&a.hasOwnProperty(d)&&(a[d]=null),b(a,d,function(){function a(a,c,d){return function(){return b[d||"push"]([a,c,arguments]),i}}if(!f)throw c("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",d);var b=[],e=[],h=a("$injector","invoke"),i={_invokeQueue:b,_runBlocks:e,requires:f,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:h,run:function(a){return e.push(a),this}};return g&&h(g),i})}})}function ib(b){l(b,{bootstrap:_,copy:J,extend:l,equals:L,element:sd,forEach:f,injector:Ib,noop:o,bind:P,toJson:R,fromJson:S,identity:p,isUndefined:r,isDefined:s,isString:u,isFunction:y,isObject:t,isNumber:v,isElement:E,isArray:x,version:Ed,isDate:w,lowercase:md,uppercase:od,callbacks:{counter:0},$$minErr:d,$$csp:M}),ud=hb(a);try{ud("ngLocale")}catch(c){ud("ngLocale",[]).provider("$locale",dc)}ud("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ec}),a.provider("$compile",Pb).directive({a:ye,input:Ie,textarea:Ie,form:Ce,script:qf,select:tf,style:vf,option:uf,ngBind:Ue,ngBindHtml:We,ngBindTemplate:Ve,ngClass:Xe,ngClassEven:Ze,ngClassOdd:Ye,ngCloak:$e,ngController:_e,ngForm:De,ngHide:kf,ngIf:bf,ngInclude:cf,ngInit:ef,ngNonBindable:ff,ngPluralize:gf,ngRepeat:hf,ngShow:jf,ngStyle:lf,ngSwitch:mf,ngSwitchWhen:nf,ngSwitchDefault:of,ngOptions:sf,ngTransclude:pf,ngModel:Oe,ngList:Re,ngChange:Pe,required:Qe,ngRequired:Qe,ngValue:Te}).directive({ngInclude:df}).directive(ze).directive(af),a.provider({$anchorScroll:Jb,$animate:_d,$browser:Mb,$cacheFactory:Nb,$controller:Sb,$document:Tb,$exceptionHandler:Ub,$filter:Pc,$interpolate:bc,$interval:cc,$http:Zb,$httpBackend:_b,$location:qc,$log:rc,$parse:zc,$rootScope:Dc,$q:Ac,$sce:Jc,$sceDelegate:Ic,$sniffer:Kc,$templateCache:Ob,$timeout:Lc,$window:Oc,$$rAF:Cc,$$asyncCallback:Kb})}])}function jb(){return++Hd}function kb(a){return a.replace(Kd,function(a,b,c,d){return d?c.toUpperCase():c}).replace(Ld,"Moz$1")}function lb(a,b,c,d){function e(a){var e,g,h,i,j,k,l,m=c&&a?[this.filter(a)]:[this],n=b;if(!d||null!=a)for(;m.length;)for(e=m.shift(),g=0,h=e.length;h>g;g++)for(i=sd(e[g]),n?i.triggerHandler("$destroy"):n=!n,j=0,k=(l=i.children()).length;k>j;j++)m.push(td(l[j]));return f.apply(this,arguments)}var f=td.fn[a];f=f.$original||f,e.$original=f,td.fn[a]=e}function mb(a){return!Od.test(a)}function nb(a,b){var c,d,e,f,g,h,i=b.createDocumentFragment(),j=[];if(mb(a))j.push(b.createTextNode(a));else{for(c=i.appendChild(b.createElement("div")),d=(Pd.exec(a)||["",""])[1].toLowerCase(),e=Rd[d]||Rd._default,c.innerHTML="<div>&#160;</div>"+e[1]+a.replace(Qd,"<$1></$2>")+e[2],c.removeChild(c.firstChild),f=e[0];f--;)c=c.lastChild;for(g=0,h=c.childNodes.length;h>g;++g)j.push(c.childNodes[g]);c=i.firstChild,c.textContent=""}return i.textContent="",i.innerHTML="",j}function ob(a,c){c=c||b;var d;return(d=Nd.exec(a))?[c.createElement(d[1])]:nb(a,c)}function pb(a){if(a instanceof pb)return a;if(u(a)&&(a=Cd(a)),!(this instanceof pb)){if(u(a)&&"<"!=a.charAt(0))throw Md("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");return new pb(a)}if(u(a)){zb(this,ob(a));var c=sd(b.createDocumentFragment());c.append(this)}else zb(this,a)}function qb(a){return a.cloneNode(!0)}function rb(a){tb(a);for(var b=0,c=a.childNodes||[];b<c.length;b++)rb(c[b])}function sb(a,b,c,d){if(s(d))throw Md("offargs","jqLite#off() does not support the `selector` argument");var e=ub(a,"events"),g=ub(a,"handle");g&&(r(b)?f(e,function(b,c){Jd(a,c,b),delete e[c]}):f(b.split(" "),function(b){r(c)?(Jd(a,b,e[b]),delete e[b]):I(e[b]||[],c)}))}function tb(a,b){var d=a[Gd],e=Fd[d];if(e){if(b)return void delete Fd[d].data[b];e.handle&&(e.events.$destroy&&e.handle({},"$destroy"),sb(a)),delete Fd[d],a[Gd]=c}}function ub(a,b,c){var d=a[Gd],e=Fd[d||-1];return s(c)?(e||(a[Gd]=d=jb(),e=Fd[d]={}),void(e[b]=c)):e&&e[b]}function vb(a,b,c){var d=ub(a,"data"),e=s(c),f=!e&&s(b),g=f&&!t(b);if(d||g||ub(a,"data",d={}),e)d[b]=c;else{if(!f)return d;if(g)return d&&d[b];l(d,b)}}function wb(a,b){return a.getAttribute?(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" ")>-1:!1}function xb(a,b){b&&a.setAttribute&&f(b.split(" "),function(b){a.setAttribute("class",Cd((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Cd(b)+" "," ")))})}function yb(a,b){if(b&&a.setAttribute){var c=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");f(b.split(" "),function(a){a=Cd(a),-1===c.indexOf(" "+a+" ")&&(c+=a+" ")}),a.setAttribute("class",Cd(c))}}function zb(a,b){if(b){b=b.nodeName||!s(b.length)||A(b)?[b]:b;for(var c=0;c<b.length;c++)a.push(b[c])}}function Ab(a,b){return Bb(a,"$"+(b||"ngController")+"Controller")}function Bb(a,b,d){a=sd(a),9==a[0].nodeType&&(a=a.find("html"));for(var e=x(b)?b:[b];a.length;){for(var f=a[0],g=0,h=e.length;h>g;g++)if((d=a.data(e[g]))!==c)return d;a=sd(f.parentNode||11===f.nodeType&&f.host)}}function Cb(a){for(var b=0,c=a.childNodes;b<c.length;b++)rb(c[b]);for(;a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){var c=Td[b.toLowerCase()];return c&&Ud[a.nodeName]&&c}function Eb(a,c){var d=function(d,e){if(d.preventDefault||(d.preventDefault=function(){d.returnValue=!1}),d.stopPropagation||(d.stopPropagation=function(){d.cancelBubble=!0}),d.target||(d.target=d.srcElement||b),r(d.defaultPrevented)){var g=d.preventDefault;d.preventDefault=function(){d.defaultPrevented=!0,g.call(d)},d.defaultPrevented=!1}d.isDefaultPrevented=function(){return d.defaultPrevented||d.returnValue===!1};var h=K(c[e||d.type]||[]);f(h,function(b){b.call(a,d)}),8>=rd?(d.preventDefault=null,d.stopPropagation=null,d.isDefaultPrevented=null):(delete d.preventDefault,delete d.stopPropagation,delete d.isDefaultPrevented)};return d.elem=a,d}function Fb(a){var b,d=typeof a;return"object"==d&&null!==a?"function"==typeof(b=a.$$hashKey)?b=a.$$hashKey():b===c&&(b=a.$$hashKey=j()):b=a,d+":"+b}function Gb(a){f(a,this.put,this)}function Hb(a){var b,c,d,e;return"function"==typeof a?(b=a.$inject)||(b=[],a.length&&(c=a.toString().replace(Yd,""),d=c.match(Vd),f(d[1].split(Wd),function(a){a.replace(Xd,function(a,c,d){b.push(d)})})),a.$inject=b):x(a)?(e=a.length-1,db(a[e],"fn"),b=a.slice(0,e)):db(a,"fn",!0),b}function Ib(a){function b(a){return function(b,c){return t(b)?void f(b,i(a)):a(b,c)}}function c(a,b){if(eb(a,"service"),(y(b)||x(b))&&(b=v.instantiate(b)),!b.$get)throw Zd("pget","Provider '{0}' must define $get factory method.",a);return s[a+n]=b}function d(a,b){return c(a,{$get:b})}function e(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}function g(a,b){return d(a,q(b))}function h(a,b){eb(a,"constant"),s[a]=b,w[a]=b}function j(a,b){var c=v.get(a+n),d=c.$get;c.$get=function(){var a=z.invoke(d,c);return z.invoke(b,null,{$delegate:a})}}function k(a){var b,c,d,e,g=[];return f(a,function(a){if(!r.get(a)){r.put(a,!0);try{if(u(a))for(b=ud(a),g=g.concat(k(b.requires)).concat(b._runBlocks),c=b._invokeQueue,d=0,e=c.length;e>d;d++){var f=c[d],h=v.get(f[0]);h[f[1]].apply(h,f[2])}else y(a)?g.push(v.invoke(a)):x(a)?g.push(v.invoke(a)):db(a,"module")}catch(i){throw x(a)&&(a=a[a.length-1]),i.message&&i.stack&&-1==i.stack.indexOf(i.message)&&(i=i.message+"\n"+i.stack),Zd("modulerr","Failed to instantiate module {0} due to:\n{1}",a,i.stack||i.message||i)}}}),g}function l(a,b){function c(c){if(a.hasOwnProperty(c)){if(a[c]===m)throw Zd("cdep","Circular dependency found: {0}",p.join(" <- "));return a[c]}try{return p.unshift(c),a[c]=m,a[c]=b(c)}catch(d){throw a[c]===m&&delete a[c],d}finally{p.shift()}}function d(a,b,d){var e,f,g,h=[],i=Hb(a);for(f=0,e=i.length;e>f;f++){if(g=i[f],"string"!=typeof g)throw Zd("itkn","Incorrect injection token! Expected service name as string, got {0}",g);h.push(d&&d.hasOwnProperty(g)?d[g]:c(g))}return a.$inject||(a=a[e]),a.apply(b,h)}function e(a,b){var c,e,f=function(){};return f.prototype=(x(a)?a[a.length-1]:a).prototype,c=new f,e=d(a,c,b),t(e)||y(e)?e:c}return{invoke:d,instantiate:e,get:c,annotate:Hb,has:function(b){return s.hasOwnProperty(b+n)||a.hasOwnProperty(b)}}}var m={},n="Provider",p=[],r=new Gb,s={$provide:{provider:b(c),factory:b(d),service:b(e),value:b(g),constant:b(h),decorator:j}},v=s.$injector=l(s,function(){throw Zd("unpr","Unknown provider: {0}",p.join(" <- "))}),w={},z=w.$injector=l(w,function(a){var b=v.get(a+n);return z.invoke(b.$get,b)});return f(k(a),function(a){z.invoke(a||o)}),z}function Jb(){var a=!0;this.disableAutoScrolling=function(){a=!1},this.$get=["$window","$location","$rootScope",function(b,c,d){function e(a){var b=null;return f(a,function(a){b||"a"!==md(a.nodeName)||(b=a)}),b}function g(){var a,d=c.hash();d?(a=h.getElementById(d))?a.scrollIntoView():(a=e(h.getElementsByName(d)))?a.scrollIntoView():"top"===d&&b.scrollTo(0,0):b.scrollTo(0,0)}var h=b.document;return a&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)}),g}]}function Kb(){this.$get=["$$rAF","$timeout",function(a,b){return a.supported?function(b){return a(b)}:function(a){return b(a,0,!1)}}]}function Lb(a,b,d,e){function g(a){try{a.apply(null,O(arguments,1))}finally{if(s--,0===s)for(;t.length;)try{t.pop()()}catch(b){d.error(b)}}}function h(a,b){!function c(){f(w,function(a){a()}),v=b(c,a)}()}function i(){z=null,x!=j.url()&&(x=j.url(),f(A,function(a){a(j.url())}))}var j=this,k=b[0],l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,q={};j.isMock=!1;var s=0,t=[];j.$$completeOutstandingRequest=g,j.$$incOutstandingRequestCount=function(){s++},j.notifyWhenNoOutstandingRequests=function(a){f(w,function(a){a()}),0===s?a():t.push(a)};var v,w=[];j.addPollFn=function(a){return r(v)&&h(100,n),w.push(a),a};var x=l.href,y=b.find("base"),z=null;j.url=function(b,c){if(l!==a.location&&(l=a.location),m!==a.history&&(m=a.history),b){if(x==b)return;return x=b,e.history?c?m.replaceState(null,"",b):(m.pushState(null,"",b),y.attr("href",y.attr("href"))):(z=b,c?l.replace(b):l.href=b),j}return z||l.href.replace(/%27/g,"'")};var A=[],B=!1;j.onUrlChange=function(b){return B||(e.history&&sd(a).on("popstate",i),e.hashchange?sd(a).on("hashchange",i):j.addPollFn(i),B=!0),A.push(b),b},j.baseHref=function(){var a=y.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var C={},D="",E=j.baseHref();j.cookies=function(a,b){var e,f,g,h,i;if(!a){if(k.cookie!==D)for(D=k.cookie,f=D.split("; "),C={},h=0;h<f.length;h++)g=f[h],i=g.indexOf("="),i>0&&(a=unescape(g.substring(0,i)),C[a]===c&&(C[a]=unescape(g.substring(i+1))));return C}b===c?k.cookie=escape(a)+"=;path="+E+";expires=Thu, 01 Jan 1970 00:00:00 GMT":u(b)&&(e=(k.cookie=escape(a)+"="+escape(b)+";path="+E).length+1,e>4096&&d.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+e+" > 4096 bytes)!"))},j.defer=function(a,b){var c;return s++,c=n(function(){delete q[c],g(a)},b||0),q[c]=!0,c},j.defer.cancel=function(a){return q[a]?(delete q[a],p(a),g(o),!0):!1}}function Mb(){this.$get=["$window","$log","$sniffer","$document",function(a,b,c,d){return new Lb(a,d,b,c)}]}function Nb(){this.$get=function(){function a(a,c){function e(a){a!=m&&(n?n==a&&(n=a.n):n=a,f(a.n,a.p),f(a,m),m=a,m.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw d("$cacheFactory")("iid","CacheId '{0}' is already taken!",a);var g=0,h=l({},c,{id:a}),i={},j=c&&c.capacity||Number.MAX_VALUE,k={},m=null,n=null;return b[a]={put:function(a,b){if(j<Number.MAX_VALUE){var c=k[a]||(k[a]={key:a});e(c)}if(!r(b))return a in i||g++,i[a]=b,g>j&&this.remove(n.key),b},get:function(a){if(j<Number.MAX_VALUE){var b=k[a];if(!b)return;e(b)}return i[a]},remove:function(a){if(j<Number.MAX_VALUE){var b=k[a];if(!b)return;b==m&&(m=b.p),b==n&&(n=b.n),f(b.n,b.p),delete k[a]}delete i[a],g--},removeAll:function(){i={},g=0,k={},m=n=null},destroy:function(){i=null,h=null,k=null,delete b[a]},info:function(){return l({},h,{size:g})}}}var b={};return a.info=function(){var a={};return f(b,function(b,c){a[c]=b.info()}),a},a.get=function(a){return b[a]},a}}function Ob(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Pb(a,d){var e={},g="Directive",h=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,j=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,k=/^(on[a-z]+|formaction)$/;this.directive=function m(b,c){return eb(b,"directive"),u(b)?(cb(c,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+g,["$injector","$exceptionHandler",function(a,c){var d=[];return f(e[b],function(e,f){try{var g=a.invoke(e);y(g)?g={compile:q(g)}:!g.compile&&g.link&&(g.compile=q(g.link)),g.priority=g.priority||0,g.index=f,g.name=g.name||b,g.require=g.require||g.controller&&g.name,g.restrict=g.restrict||"A",d.push(g)}catch(h){c(h)}}),d}])),e[b].push(c)):f(b,i(m)),this},this.aHrefSanitizationWhitelist=function(a){return s(a)?(d.aHrefSanitizationWhitelist(a),this):d.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(a){return s(a)?(d.imgSrcSanitizationWhitelist(a),this):d.imgSrcSanitizationWhitelist()},this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,d,i,m,o,r,s,v,w,z,A,B){function C(a,b,c,d,e){a instanceof sd||(a=sd(a)),f(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=b=sd(b).wrap("<span></span>").parent()[0])});var g=E(a,b,a,c,d,e);return D(a,"ng-scope"),function(b,c,d){cb(b,"scope");var e=c?Sd.clone.call(a):a;f(d,function(a,b){e.data("$"+b+"Controller",a)});for(var h=0,i=e.length;i>h;h++){var j=e[h],k=j.nodeType;(1===k||9===k)&&e.eq(h).data("$scope",b)}return c&&c(e,b),g&&g(b,e,e),e}}function D(a,b){try{a.addClass(b)}catch(c){}}function E(a,b,d,e,f,g){function h(a,d,e,f){var g,h,i,j,k,l,m,n,p,q=d.length,r=new Array(q);for(m=0;q>m;m++)r[m]=d[m];for(m=0,p=0,n=o.length;n>m;p++)i=r[p],g=o[m++],h=o[m++],j=sd(i),g?(g.scope?(k=a.$new(),j.data("$scope",k)):k=a,l=g.transclude,l||!f&&b?g(h,k,i,e,F(a,l||b)):g(h,k,i,e,f)):h&&h(a,i.childNodes,c,f)}for(var i,j,k,l,m,n,o=[],p=0;p<a.length;p++)i=new $,j=G(a[p],[],i,0===p?e:c,f),k=j.length?J(j,a[p],i,b,d,null,[],[],g):null,k&&k.scope&&D(sd(a[p]),"ng-scope"),m=k&&k.terminal||!(l=a[p].childNodes)||!l.length?null:E(l,k?k.transclude:b),o.push(k,m),n=n||k||m,g=null;return n?h:null}function F(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),c.$$transcluded=!0,f=!0);var g=b(c,d,e);return f&&g.on("$destroy",P(c,c.$destroy)),g}}function G(a,b,c,d,e){var f,g,i=a.nodeType,k=c.$attr;switch(i){case 1:N(b,Qb(vd(a).toLowerCase()),"E",d,e);for(var l,m,n,o,p,q=a.attributes,r=0,s=q&&q.length;s>r;r++){var t=!1,v=!1;if(l=q[r],!rd||rd>=8||l.specified){m=l.name,o=Qb(m),eb.test(o)&&(m=ab(o.substr(6),"-"));var w=o.replace(/(Start|End)$/,"");o===w+"Start"&&(t=m,v=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6)),n=Qb(m.toLowerCase()),k[n]=m,c[n]=p=Cd(l.value),Db(a,n)&&(c[n]=!0),X(a,b,p,n),N(b,n,"A",d,e,t,v)}}if(g=a.className,u(g)&&""!==g)for(;f=j.exec(g);)n=Qb(f[2]),N(b,n,"C",d,e)&&(c[n]=Cd(f[3])),g=g.substr(f.index+f[0].length);break;case 3:V(b,a.nodeValue);break;case 8:try{f=h.exec(a.nodeValue),f&&(n=Qb(f[1]),N(b,n,"M",d,e)&&(c[n]=Cd(f[2])))}catch(x){}}return b.sort(S),b}function H(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ae("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--),d.push(a),a=a.nextSibling}while(e>0)}else d.push(a);return sd(d)}function I(a,b,c){return function(d,e,f,g,h){return e=H(e[0],b,c),a(d,e,f,g,h)}}function J(a,e,g,h,j,k,l,m,n){function o(a,b,c,d){a&&(c&&(a=I(a,c,d)),a.require=w.require,(N===w||w.$$isolateScope)&&(a=Z(a,{isolateScope:!0})),l.push(a)),b&&(c&&(b=I(b,c,d)),b.require=w.require,(N===w||w.$$isolateScope)&&(b=Z(b,{isolateScope:!0})),m.push(b))}function p(a,b,c){var d,e="data",g=!1;if(u(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),g=g||"?"==d;if(d=null,c&&"data"===e&&(d=c[a]),d=d||b[e]("$"+a+"Controller"),!d&&!g)throw ae("ctreq","Controller '{0}', required by directive '{1}', can't be found!",a,z);return d}return x(a)&&(d=[],f(a,function(a){d.push(p(a,b,c))})),d}function q(a,b,h,j,k){function n(a,b){var d;return arguments.length<2&&(b=a,a=c),W&&(d=z),k(a,b,d)}var o,q,t,u,v,w,x,y,z={};if(o=e===h?g:K(g,new $(sd(h),g.$attr)),q=o.$$element,N){var A=/^\s*([@=&])(\??)\s*(\w*)\s*$/,B=sd(h);x=b.$new(!0),P&&P===N.$$originalDirective?B.data("$isolateScope",x):B.data("$isolateScopeNoTemplate",x),D(B,"ng-isolate-scope"),f(N.scope,function(a,c){var e,f,g,h,i=a.match(A)||[],j=i[3]||c,k="?"==i[2],l=i[1];switch(x.$$isolateBindings[c]=l+j,l){case"@":o.$observe(j,function(a){x[c]=a}),o.$$observers[j].$$scope=b,o[j]&&(x[c]=d(o[j])(b));break;case"=":if(k&&!o[j])return;f=r(o[j]),h=f.literal?L:function(a,b){return a===b},g=f.assign||function(){throw e=x[c]=f(b),ae("nonassign","Expression '{0}' used with directive '{1}' is non-assignable!",o[j],N.name)},e=x[c]=f(b),x.$watch(function(){var a=f(b);return h(a,x[c])||(h(a,e)?g(b,a=x[c]):x[c]=a),e=a},null,f.literal);break;case"&":f=r(o[j]),x[c]=function(a){return f(b,a)};break;default:throw ae("iscp","Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}",N.name,c,a)}})}for(y=k&&n,J&&f(J,function(a){var c,d={$scope:a===N||a.$$isolateScope?x:b,$element:q,$attrs:o,$transclude:y};w=a.controller,"@"==w&&(w=o[a.name]),c=s(w,d),z[a.name]=c,W||q.data("$"+a.name+"Controller",c),a.controllerAs&&(d.$scope[a.controllerAs]=c)}),t=0,u=l.length;u>t;t++)try{v=l[t],v(v.isolateScope?x:b,q,o,v.require&&p(v.require,q,z),y)}catch(C){i(C,U(q))}var E=b;for(N&&(N.template||null===N.templateUrl)&&(E=x),a&&a(E,h.childNodes,c,k),t=m.length-1;t>=0;t--)try{v=m[t],v(v.isolateScope?x:b,q,o,v.require&&p(v.require,q,z),y)}catch(C){i(C,U(q))}}n=n||{};for(var v,w,z,A,B,E,F=-Number.MAX_VALUE,J=n.controllerDirectives,N=n.newIsolateScopeDirective,P=n.templateDirective,S=n.nonTlbTranscludeDirective,V=!1,W=n.hasElementTranscludeDirective,X=g.$$element=sd(e),_=k,ab=h,bb=0,cb=a.length;cb>bb;bb++){w=a[bb];var eb=w.$$start,fb=w.$$end;if(eb&&(X=H(e,eb,fb)),A=c,F>w.priority)break;if((E=w.scope)&&(v=v||w,w.templateUrl||(T("new/isolated scope",N,w,X),t(E)&&(N=w))),z=w.name,!w.templateUrl&&w.controller&&(E=w.controller,J=J||{},T("'"+z+"' controller",J[z],w,X),J[z]=w),(E=w.transclude)&&(V=!0,w.$$tlb||(T("transclusion",S,w,X),S=w),"element"==E?(W=!0,F=w.priority,A=H(e,eb,fb),X=g.$$element=sd(b.createComment(" "+z+": "+g[z]+" ")),e=X[0],Y(j,sd(O(A)),e),ab=C(A,h,F,_&&_.name,{nonTlbTranscludeDirective:S})):(A=sd(qb(e)).contents(),X.empty(),ab=C(A,h))),w.template)if(T("template",P,w,X),P=w,E=y(w.template)?w.template(X,g):w.template,E=db(E),w.replace){if(_=w,A=mb(E)?[]:sd(E),e=A[0],1!=A.length||1!==e.nodeType)throw ae("tplrt","Template for directive '{0}' must have exactly one root element. {1}",z,"");Y(j,X,e);var gb={$attr:{}},hb=G(e,[],gb),ib=a.splice(bb+1,a.length-(bb+1));N&&M(hb),a=a.concat(hb).concat(ib),Q(g,gb),cb=a.length}else X.html(E);if(w.templateUrl)T("template",P,w,X),P=w,w.replace&&(_=w),q=R(a.splice(bb,a.length-bb),X,g,j,ab,l,m,{controllerDirectives:J,newIsolateScopeDirective:N,templateDirective:P,nonTlbTranscludeDirective:S}),cb=a.length;else if(w.compile)try{B=w.compile(X,g,ab),y(B)?o(null,B,eb,fb):B&&o(B.pre,B.post,eb,fb)}catch(jb){i(jb,U(X))}w.terminal&&(q.terminal=!0,F=Math.max(F,w.priority))}return q.scope=v&&v.scope===!0,q.transclude=V&&ab,n.hasElementTranscludeDirective=W,q}function M(a){for(var b=0,c=a.length;c>b;b++)a[b]=n(a[b],{$$isolateScope:!0})}function N(b,d,f,h,j,k,l){if(d===j)return null;var m=null;if(e.hasOwnProperty(d))for(var o,p=a.get(d+g),q=0,r=p.length;r>q;q++)try{o=p[q],(h===c||h>o.priority)&&-1!=o.restrict.indexOf(f)&&(k&&(o=n(o,{$$start:k,$$end:l})),b.push(o),m=o)}catch(s){i(s)}return m}function Q(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;f(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))}),f(b,function(b,f){"class"==f?(D(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function R(a,b,c,d,e,g,h,i){var j,k,n=[],p=b[0],q=a.shift(),r=l({},q,{templateUrl:null,transclude:null,replace:null,$$originalDirective:q}),s=y(q.templateUrl)?q.templateUrl(b,c):q.templateUrl;return b.empty(),m.get(z.getTrustedResourceUrl(s),{cache:o}).success(function(l){var m,o,u,v;if(l=db(l),q.replace){if(u=mb(l)?[]:sd(l),m=u[0],1!=u.length||1!==m.nodeType)throw ae("tplrt","Template for directive '{0}' must have exactly one root element. {1}",q.name,s);o={$attr:{}},Y(d,b,m);var w=G(m,[],o);t(q.scope)&&M(w),a=w.concat(a),Q(c,o)}else m=p,b.html(l);for(a.unshift(r),j=J(a,m,c,e,b,q,g,h,i),f(d,function(a,c){a==m&&(d[c]=b[0])}),k=E(b[0].childNodes,e);n.length;){var x=n.shift(),y=n.shift(),z=n.shift(),A=n.shift(),B=b[0];if(y!==p){var C=y.className;i.hasElementTranscludeDirective&&q.replace||(B=qb(m)),Y(z,sd(y),B),D(sd(B),C)}v=j.transclude?F(x,j.transclude):A,j(k,x,B,d,v)}n=null}).error(function(a,b,c,d){throw ae("tpload","Failed to load template: {0}",d.url)}),function(a,b,c,d,e){n?(n.push(b),n.push(c),n.push(d),n.push(e)):j(k,b,c,d,e)}}function S(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index
}function T(a,b,c,d){if(b)throw ae("multidir","Multiple directives [{0}, {1}] asking for {2} on: {3}",b.name,c.name,a,U(d))}function V(a,b){var c=d(b,!0);c&&a.push({priority:0,compile:q(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c),D(d.data("$binding",e),"ng-binding"),a.$watch(c,function(a){b[0].nodeValue=a})})})}function W(a,b){if("srcdoc"==b)return z.HTML;var c=vd(a);return"xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b)?z.RESOURCE_URL:void 0}function X(a,b,c,e){var f=d(c,!0);if(f){if("multiple"===e&&"SELECT"===vd(a))throw ae("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",U(a));b.push({priority:100,compile:function(){return{pre:function(b,c,g){var h=g.$$observers||(g.$$observers={});if(k.test(e))throw ae("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");f=d(g[e],!0,W(a,e)),f&&(g[e]=f(b),(h[e]||(h[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||b).$watch(f,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function Y(a,c,d){var e,f,g=c[0],h=c.length,i=g.parentNode;if(a)for(e=0,f=a.length;f>e;e++)if(a[e]==g){a[e++]=d;for(var j=e,k=j+h-1,l=a.length;l>j;j++,k++)l>k?a[j]=a[k]:delete a[j];a.length-=h-1;break}i&&i.replaceChild(d,g);var m=b.createDocumentFragment();m.appendChild(g),d[sd.expando]=g[sd.expando];for(var n=1,o=c.length;o>n;n++){var p=c[n];sd(p).remove(),m.appendChild(p),delete c[n]}c[0]=d,c.length=1}function Z(a,b){return l(function(){return a.apply(null,arguments)},a,b)}var $=function(a,b){this.$$element=a,this.$attr=b||{}};$.prototype={$normalize:Qb,$addClass:function(a){a&&a.length>0&&A.addClass(this.$$element,a)},$removeClass:function(a){a&&a.length>0&&A.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Rb(a,b),d=Rb(b,a);0===c.length?A.removeClass(this.$$element,d):0===d.length?A.addClass(this.$$element,c):A.setClass(this.$$element,c,d)},$set:function(a,b,d,e){var g,h=Db(this.$$element[0],a);h&&(this.$$element.prop(a,b),e=h),this[a]=b,e?this.$attr[a]=e:(e=this.$attr[a],e||(this.$attr[a]=e=ab(a,"-"))),g=vd(this.$$element),("A"===g&&"href"===a||"IMG"===g&&"src"===a)&&(this[a]=b=B(b,"src"===a)),d!==!1&&(null===b||b===c?this.$$element.removeAttr(e):this.$$element.attr(e,b));var j=this.$$observers;j&&f(j[a],function(a){try{a(b)}catch(c){i(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);return e.push(b),v.$evalAsync(function(){e.$$inter||b(c[a])}),b}};var _=d.startSymbol(),bb=d.endSymbol(),db="{{"==_||"}}"==bb?p:function(a){return a.replace(/\{\{/g,_).replace(/}}/g,bb)},eb=/^ngAttr[A-Z]/;return C}]}function Qb(a){return kb(a.replace(be,""))}function Rb(a,b){var c="",d=a.split(/\s+/),e=b.split(/\s+/);a:for(var f=0;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(c.length>0?" ":"")+g}return c}function Sb(){var a={},b=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(b,c){eb(b,"controller"),t(b)?l(a,b):a[b]=c},this.$get=["$injector","$window",function(c,e){return function(f,g){var h,i,j,k;if(u(f)&&(i=f.match(b),j=i[1],k=i[3],f=a.hasOwnProperty(j)?a[j]:fb(g.$scope,j,!0)||fb(e,j,!0),db(f,j,!0)),h=c.instantiate(f,g),k){if(!g||"object"!=typeof g.$scope)throw d("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",j||f.name,k);g.$scope[k]=h}return h}}]}function Tb(){this.$get=["$window",function(a){return sd(a.document)}]}function Ub(){this.$get=["$log",function(a){return function(){a.error.apply(a,arguments)}}]}function Vb(a){var b,c,d,e={};return a?(f(a.split("\n"),function(a){d=a.indexOf(":"),b=md(Cd(a.substr(0,d))),c=Cd(a.substr(d+1)),b&&(e[b]?e[b]+=", "+c:e[b]=c)}),e):e}function Wb(a){var b=t(a)?a:c;return function(c){return b||(b=Vb(a)),c?b[md(c)]||null:b}}function Xb(a,b,c){return y(c)?c(a,b):(f(c,function(c){a=c(a,b)}),a)}function Yb(a){return a>=200&&300>a}function Zb(){var a=/^\s*(\[|\{[^\{])/,b=/[\}\]]\s*$/,d=/^\)\]\}',?\n/,e={"Content-Type":"application/json;charset=utf-8"},g=this.defaults={transformResponse:[function(c){return u(c)&&(c=c.replace(d,""),a.test(c)&&b.test(c)&&(c=S(c))),c}],transformRequest:[function(a){return!t(a)||C(a)||D(a)?a:R(a)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:J(e),put:J(e),patch:J(e)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},i=this.interceptors=[],j=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,d,e,k,m){function n(a){function d(a){var b=l({},a,{data:Xb(a.data,a.headers,h.transformResponse)});return Yb(a.status)?b:k.reject(b)}function e(a){function b(a){var b;f(a,function(c,d){y(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})}var c,d,e,h=g.headers,i=l({},a.headers);h=l({},h.common,h[md(a.method)]),b(h),b(i);a:for(c in h){d=md(c);for(e in i)if(md(e)===d)continue a;i[c]=h[c]}return i}var h={method:"get",transformRequest:g.transformRequest,transformResponse:g.transformResponse},i=e(a);l(h,a),h.headers=i,h.method=od(h.method);var j=Nc(h.url)?b.cookies()[h.xsrfCookieName||g.xsrfCookieName]:c;j&&(i[h.xsrfHeaderName||g.xsrfHeaderName]=j);var m=function(a){i=a.headers;var b=Xb(a.data,Wb(i),a.transformRequest);return r(a.data)&&f(i,function(a,b){"content-type"===md(b)&&delete i[b]}),r(a.withCredentials)&&!r(g.withCredentials)&&(a.withCredentials=g.withCredentials),q(a,b,i).then(d,d)},n=[m,c],o=k.when(h);for(f(z,function(a){(a.request||a.requestError)&&n.unshift(a.request,a.requestError),(a.response||a.responseError)&&n.push(a.response,a.responseError)});n.length;){var p=n.shift(),s=n.shift();o=o.then(p,s)}return o.success=function(a){return o.then(function(b){a(b.data,b.status,b.headers,h)}),o},o.error=function(a){return o.then(null,function(b){a(b.data,b.status,b.headers,h)}),o},o}function o(){f(arguments,function(a){n[a]=function(b,c){return n(l(c||{},{method:a,url:b}))}})}function p(){f(arguments,function(a){n[a]=function(b,c,d){return n(l(d||{},{method:a,url:b,data:c}))}})}function q(b,c,d){function f(a,b,c,d){j&&(Yb(a)?j.put(p,[a,b,Vb(c),d]):j.remove(p)),h(b,a,c,d),e.$$phase||e.$apply()}function h(a,c,d,e){c=Math.max(c,0),(Yb(c)?m.resolve:m.reject)({data:a,status:c,headers:Wb(d),config:b,statusText:e})}function i(){var a=H(n.pendingRequests,b);-1!==a&&n.pendingRequests.splice(a,1)}var j,l,m=k.defer(),o=m.promise,p=v(b.url,b.params);if(n.pendingRequests.push(b),o.then(i,i),(b.cache||g.cache)&&b.cache!==!1&&"GET"==b.method&&(j=t(b.cache)?b.cache:t(g.cache)?g.cache:w),j)if(l=j.get(p),s(l)){if(l.then)return l.then(i,i),l;x(l)?h(l[1],l[0],J(l[2]),l[3]):h(l,200,{},"OK")}else j.put(p,o);return r(l)&&a(b.method,p,c,f,d,b.timeout,b.withCredentials,b.responseType),o}function v(a,b){if(!b)return a;var c=[];return h(b,function(a,b){null===a||r(a)||(x(a)||(a=[a]),f(a,function(a){t(a)&&(a=R(a)),c.push(Z(b)+"="+Z(a))}))}),c.length>0&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&")),a}var w=d("$http"),z=[];return f(i,function(a){z.unshift(u(a)?m.get(a):m.invoke(a))}),f(j,function(a,b){var c=u(a)?m.get(a):m.invoke(a);z.splice(b,0,{response:function(a){return c(k.when(a))},responseError:function(a){return c(k.reject(a))}})}),n.pendingRequests=[],o("get","delete","head","jsonp"),p("post","put"),n.defaults=g,n}]}function $b(b){if(8>=rd&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!a.XMLHttpRequest))return new a.ActiveXObject("Microsoft.XMLHTTP");if(a.XMLHttpRequest)return new a.XMLHttpRequest;throw d("$httpBackend")("noxhr","This browser does not support XMLHttpRequest.")}function _b(){this.$get=["$browser","$window","$document",function(a,b,c){return ac(a,$b,a.defer,b.angular.callbacks,c[0])}]}function ac(a,b,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null,e.body.removeChild(c),b&&b()};return c.type="text/javascript",c.src=a,rd&&8>=rd?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()},e.body.appendChild(c),d}var h=-1;return function(e,i,j,k,l,m,n,p){function q(){t=h,v&&v(),w&&w.abort()}function r(b,d,e,f,g){y&&c.cancel(y),v=w=null,0===d&&(d=e?200:"file"==Mc(i).protocol?404:0),d=1223===d?204:d,g=g||"",b(d,e,f,g),a.$$completeOutstandingRequest(o)}var t;if(a.$$incOutstandingRequestCount(),i=i||a.url(),"jsonp"==md(e)){var u="_"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a};var v=g(i.replace("JSON_CALLBACK","angular.callbacks."+u),function(){d[u].data?r(k,200,d[u].data):r(k,t||-2),d[u]=Ad.noop})}else{var w=b(e);if(w.open(e,i,!0),f(l,function(a,b){s(a)&&w.setRequestHeader(b,a)}),w.onreadystatechange=function(){if(w&&4==w.readyState){var a=null,b=null;t!==h&&(a=w.getAllResponseHeaders(),b="response"in w?w.response:w.responseText),r(k,t||w.status,b,a,w.statusText||"")}},n&&(w.withCredentials=!0),p)try{w.responseType=p}catch(x){if("json"!==p)throw x}w.send(j||null)}if(m>0)var y=c(q,m);else m&&m.then&&m.then(q)}}function bc(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a},this.endSymbol=function(a){return a?(b=a,this):b},this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,i,j){for(var k,l,m,n,o=0,p=[],q=f.length,s=!1,t=[];q>o;)-1!=(k=f.indexOf(a,o))&&-1!=(l=f.indexOf(b,k+g))?(o!=k&&p.push(f.substring(o,k)),p.push(m=c(n=f.substring(k+g,l))),m.exp=n,o=l+h,s=!0):(o!=q&&p.push(f.substring(o)),o=q);if((q=p.length)||(p.push(""),q=1),j&&p.length>1)throw ce("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",f);return!i||s?(t.length=q,m=function(a){try{for(var b,c=0,g=q;g>c;c++)"function"==typeof(b=p[c])&&(b=b(a),b=j?e.getTrusted(j,b):e.valueOf(b),null===b||r(b)?b="":"string"!=typeof b&&(b=R(b))),t[c]=b;return t.join("")}catch(h){var i=ce("interr","Can't interpolate: {0}\n{1}",f,h.toString());d(i)}},m.exp=f,m.parts=p,m):void 0}var g=a.length,h=b.length;return f.startSymbol=function(){return a},f.endSymbol=function(){return b},f}]}function cc(){this.$get=["$rootScope","$window","$q",function(a,b,c){function d(d,f,g,h){var i=b.setInterval,j=b.clearInterval,k=c.defer(),l=k.promise,m=0,n=s(h)&&!h;return g=s(g)?g:0,l.then(null,null,d),l.$$intervalId=i(function(){k.notify(m++),g>0&&m>=g&&(k.resolve(m),j(l.$$intervalId),delete e[l.$$intervalId]),n||a.$apply()},f),e[l.$$intervalId]=k,l}var e={};return d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1},d}]}function dc(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"¤",posSuf:"",negPre:"(¤",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(a){return 1===a?"one":"other"}}}}function ec(a){for(var b=a.split("/"),c=b.length;c--;)b[c]=Y(b[c]);return b.join("/")}function fc(a,b,c){var d=Mc(a,c);b.$$protocol=d.protocol,b.$$host=d.hostname,b.$$port=m(d.port)||ee[d.protocol]||null}function gc(a,b,c){var d="/"!==a.charAt(0);d&&(a="/"+a);var e=Mc(a,c);b.$$path=decodeURIComponent(d&&"/"===e.pathname.charAt(0)?e.pathname.substring(1):e.pathname),b.$$search=W(e.search),b.$$hash=decodeURIComponent(e.hash),b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function hc(a,b){return 0===b.indexOf(a)?b.substr(a.length):void 0}function ic(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function jc(a){return a.substr(0,ic(a).lastIndexOf("/")+1)}function kc(a){return a.substring(0,a.indexOf("/",a.indexOf("//")+2))}function lc(a,b){this.$$html5=!0,b=b||"";var d=jc(a);fc(a,this,a),this.$$parse=function(b){var c=hc(d,b);if(!u(c))throw fe("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',b,d);gc(c,this,a),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var a=X(this.$$search),b=this.$$hash?"#"+Y(this.$$hash):"";this.$$url=ec(this.$$path)+(a?"?"+a:"")+b,this.$$absUrl=d+this.$$url.substr(1)},this.$$rewrite=function(e){var f,g;return(f=hc(a,e))!==c?(g=f,(f=hc(b,f))!==c?d+(hc("/",f)||f):a+g):(f=hc(d,e))!==c?d+f:d==e+"/"?d:void 0}}function mc(a,b){var c=jc(a);fc(a,this,a),this.$$parse=function(d){function e(a,b,c){var d,e=/^\/?.*?:(\/.*)/;return 0===b.indexOf(c)&&(b=b.replace(c,"")),e.exec(b)?a:(d=e.exec(a),d?d[1]:a)}var f=hc(a,d)||hc(c,d),g="#"==f.charAt(0)?hc(b,f):this.$$html5?f:"";if(!u(g))throw fe("ihshprfx",'Invalid url "{0}", missing hash prefix "{1}".',d,b);gc(g,this,a),this.$$path=e(this.$$path,g,a),this.$$compose()},this.$$compose=function(){var c=X(this.$$search),d=this.$$hash?"#"+Y(this.$$hash):"";this.$$url=ec(this.$$path)+(c?"?"+c:"")+d,this.$$absUrl=a+(this.$$url?b+this.$$url:"")},this.$$rewrite=function(b){return ic(a)==ic(b)?b:void 0}}function nc(a,b){this.$$html5=!0,mc.apply(this,arguments);var c=jc(a);this.$$rewrite=function(d){var e;return a==ic(d)?d:(e=hc(c,d))?a+b+e:c===d+"/"?c:void 0}}function oc(a){return function(){return this[a]}}function pc(a,b){return function(c){return r(c)?this[a]:(this[a]=b(c),this.$$compose(),this)}}function qc(){var b="",c=!1;this.hashPrefix=function(a){return s(a)?(b=a,this):b},this.html5Mode=function(a){return s(a)?(c=a,this):c},this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(d,e,f,g){function h(a){d.$broadcast("$locationChangeSuccess",i.absUrl(),a)}var i,j,k,l=e.baseHref(),m=e.url();c?(k=kc(m)+(l||"/"),j=f.history?lc:nc):(k=ic(m),j=mc),i=new j(k,"#"+b),i.$$parse(i.$$rewrite(m)),g.on("click",function(b){if(!b.ctrlKey&&!b.metaKey&&2!=b.which){for(var c=sd(b.target);"a"!==md(c[0].nodeName);)if(c[0]===g[0]||!(c=c.parent())[0])return;var f=c.prop("href");t(f)&&"[object SVGAnimatedString]"===f.toString()&&(f=Mc(f.animVal).href);var h=i.$$rewrite(f);f&&!c.attr("target")&&h&&!b.isDefaultPrevented()&&(b.preventDefault(),h!=e.url()&&(i.$$parse(h),d.$apply(),a.angular["ff-684208-preventDefault"]=!0))}}),i.absUrl()!=m&&e.url(i.absUrl(),!0),e.onUrlChange(function(a){i.absUrl()!=a&&(d.$evalAsync(function(){var b=i.absUrl();i.$$parse(a),d.$broadcast("$locationChangeStart",a,b).defaultPrevented?(i.$$parse(b),e.url(b)):h(b)}),d.$$phase||d.$digest())});var n=0;return d.$watch(function(){var a=e.url(),b=i.$$replace;return n&&a==i.absUrl()||(n++,d.$evalAsync(function(){d.$broadcast("$locationChangeStart",i.absUrl(),a).defaultPrevented?i.$$parse(a):(e.url(i.absUrl(),b),h(a))})),i.$$replace=!1,n}),i}]}function rc(){var a=!0,b=this;this.debugEnabled=function(b){return s(b)?(a=b,this):a},this.$get=["$window",function(c){function d(a){return a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line)),a}function e(a){var b=c.console||{},e=b[a]||b.log||o,g=!1;try{g=!!e.apply}catch(h){}return g?function(){var a=[];return f(arguments,function(b){a.push(d(b))}),e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function sc(a,b){if("constructor"===a)throw he("isecfld",'Referencing "constructor" field in Angular expressions is disallowed! Expression: {0}',b);return a}function tc(a,b){if(a){if(a.constructor===a)throw he("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",b);if(a.document&&a.location&&a.alert&&a.setInterval)throw he("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw he("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",b)}return a}function uc(a,b,d,e,f){f=f||{};for(var g,h=b.split("."),i=0;h.length>1;i++){g=sc(h.shift(),e);var j=a[g];j||(j={},a[g]=j),a=j,a.then&&f.unwrapPromises&&(ge(e),"$$v"in a||!function(a){a.then(function(b){a.$$v=b})}(a),a.$$v===c&&(a.$$v={}),a=a.$$v)}return g=sc(h.shift(),e),a[g]=d,d}function vc(a,b,d,e,f,g,h){return sc(a,g),sc(b,g),sc(d,g),sc(e,g),sc(f,g),h.unwrapPromises?function(h,i){var j,k=i&&i.hasOwnProperty(a)?i:h;return null==k?k:(k=k[a],k&&k.then&&(ge(g),"$$v"in k||(j=k,j.$$v=c,j.then(function(a){j.$$v=a})),k=k.$$v),b?null==k?c:(k=k[b],k&&k.then&&(ge(g),"$$v"in k||(j=k,j.$$v=c,j.then(function(a){j.$$v=a})),k=k.$$v),d?null==k?c:(k=k[d],k&&k.then&&(ge(g),"$$v"in k||(j=k,j.$$v=c,j.then(function(a){j.$$v=a})),k=k.$$v),e?null==k?c:(k=k[e],k&&k.then&&(ge(g),"$$v"in k||(j=k,j.$$v=c,j.then(function(a){j.$$v=a})),k=k.$$v),f?null==k?c:(k=k[f],k&&k.then&&(ge(g),"$$v"in k||(j=k,j.$$v=c,j.then(function(a){j.$$v=a})),k=k.$$v),k):k):k):k):k)}:function(g,h){var i=h&&h.hasOwnProperty(a)?h:g;return null==i?i:(i=i[a],b?null==i?c:(i=i[b],d?null==i?c:(i=i[d],e?null==i?c:(i=i[e],f?null==i?c:i=i[f]:i):i):i):i)}}function wc(a,b){return sc(a,b),function(b,d){return null==b?c:(d&&d.hasOwnProperty(a)?d:b)[a]}}function xc(a,b,d){return sc(a,d),sc(b,d),function(d,e){return null==d?c:(d=(e&&e.hasOwnProperty(a)?e:d)[a],null==d?c:d[b])}}function yc(a,b,d){if(ne.hasOwnProperty(a))return ne[a];var e,g=a.split("."),h=g.length;if(b.unwrapPromises||1!==h)if(b.unwrapPromises||2!==h)if(b.csp)e=6>h?vc(g[0],g[1],g[2],g[3],g[4],d,b):function(a,e){var f,i=0;do f=vc(g[i++],g[i++],g[i++],g[i++],g[i++],d,b)(a,e),e=c,a=f;while(h>i);return f};else{var i="var p;\n";f(g,function(a,c){sc(a,d),i+="if(s == null) return undefined;\ns="+(c?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\n'+(b.unwrapPromises?'if (s && s.then) {\n pw("'+d.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")}),i+="return s;";var j=new Function("s","k","pw",i);j.toString=q(i),e=b.unwrapPromises?function(a,b){return j(a,b,ge)}:j}else e=xc(g[0],g[1],d);else e=wc(g[0],d);return"hasOwnProperty"!==a&&(ne[a]=e),e}function zc(){var a={},b={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(a){return s(a)?(b.unwrapPromises=!!a,this):b.unwrapPromises},this.logPromiseWarnings=function(a){return s(a)?(b.logPromiseWarnings=a,this):b.logPromiseWarnings},this.$get=["$filter","$sniffer","$log",function(c,d,e){return b.csp=d.csp,ge=function(a){b.logPromiseWarnings&&!ie.hasOwnProperty(a)&&(ie[a]=!0,e.warn("[$parse] Promise found in the expression `"+a+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))},function(d){var e;switch(typeof d){case"string":if(a.hasOwnProperty(d))return a[d];var f=new le(b),g=new me(f,c,b);return e=g.parse(d,!1),"hasOwnProperty"!==d&&(a[d]=e),e;case"function":return d;default:return o}}}]}function Ac(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return Bc(function(b){a.$evalAsync(b)},b)}]}function Bc(a,b){function d(a){return a}function e(a){return j(a)}function g(a){var b=h(),c=0,d=x(a)?[]:{};return f(a,function(a,e){c++,i(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})}),0===c&&b.resolve(d),b.promise}var h=function(){var f,g,j=[];return g={resolve:function(b){if(j){var d=j;j=c,f=i(b),d.length&&a(function(){for(var a,b=0,c=d.length;c>b;b++)a=d[b],f.then(a[0],a[1],a[2])})}},reject:function(a){g.resolve(k(a))},notify:function(b){if(j){var c=j;j.length&&a(function(){for(var a,d=0,e=c.length;e>d;d++)a=c[d],a[2](b)})}},promise:{then:function(a,c,g){var i=h(),k=function(c){try{i.resolve((y(a)?a:d)(c))}catch(e){i.reject(e),b(e)}},l=function(a){try{i.resolve((y(c)?c:e)(a))}catch(d){i.reject(d),b(d)}},m=function(a){try{i.notify((y(g)?g:d)(a))}catch(c){b(c)}};return j?j.push([k,l,m]):f.then(k,l,m),i.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,b){var c=h();return b?c.resolve(a):c.reject(a),c.promise}function c(c,e){var f=null;try{f=(a||d)()}catch(g){return b(g,!1)}return f&&y(f.then)?f.then(function(){return b(c,e)},function(a){return b(a,!1)}):b(c,e)}return this.then(function(a){return c(a,!0)},function(a){return c(a,!1)})}}}},i=function(b){return b&&y(b.then)?b:{then:function(c){var d=h();return a(function(){d.resolve(c(b))}),d.promise}}},j=function(a){var b=h();return b.reject(a),b.promise},k=function(c){return{then:function(d,f){var g=h();return a(function(){try{g.resolve((y(f)?f:e)(c))}catch(a){g.reject(a),b(a)}}),g.promise}}},l=function(c,f,g,k){var l,m=h(),n=function(a){try{return(y(f)?f:d)(a)}catch(c){return b(c),j(c)}},o=function(a){try{return(y(g)?g:e)(a)}catch(c){return b(c),j(c)}},p=function(a){try{return(y(k)?k:d)(a)}catch(c){b(c)}};return a(function(){i(c).then(function(a){l||(l=!0,m.resolve(i(a).then(n,o,p)))},function(a){l||(l=!0,m.resolve(o(a)))},function(a){l||m.notify(p(a))})}),m.promise};return{defer:h,reject:j,when:l,all:g}}function Cc(){this.$get=["$window","$timeout",function(a,b){var c=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,d=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};return f.supported=e,f}]}function Dc(){var a=10,b=d("$rootScope"),c=null;this.digestTtl=function(b){return arguments.length&&(a=b),a},this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,g,h,i){function k(){this.$id=j(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this["this"]=this.$root=this,this.$$destroyed=!1,this.$$asyncQueue=[],this.$$postDigestQueue=[],this.$$listeners={},this.$$listenerCount={},this.$$isolateBindings={}}function l(a){if(r.$$phase)throw b("inprog","{0} already in progress",r.$$phase);r.$$phase=a}function m(){r.$$phase=null}function n(a,b){var c=h(a);return db(c,b),c}function p(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}k.prototype={constructor:k,$new:function(a){var b,c;return a?(c=new k,c.$root=this.$root,c.$$asyncQueue=this.$$asyncQueue,c.$$postDigestQueue=this.$$postDigestQueue):(b=function(){},b.prototype=this,c=new b,c.$id=j()),c["this"]=c,c.$$listeners={},c.$$listenerCount={},c.$parent=this,c.$$watchers=c.$$nextSibling=c.$$childHead=c.$$childTail=null,c.$$prevSibling=this.$$childTail,this.$$childHead?(this.$$childTail.$$nextSibling=c,this.$$childTail=c):this.$$childHead=this.$$childTail=c,c},$watch:function(a,b,d){var e=this,f=n(a,"watch"),g=e.$$watchers,h={fn:b,last:q,get:f,exp:a,eq:!!d};if(c=null,!y(b)){var i=n(b||o,"listener");h.fn=function(a,b,c){i(c)}}if("string"==typeof a&&f.constant){var j=h.fn;h.fn=function(a,b,c){j.call(this,a,b,c),I(g,h)}}return g||(g=e.$$watchers=[]),g.unshift(h),function(){I(g,h),c=null}},$watchCollection:function(a,b){function c(){f=m(j);var a,b;if(t(f))if(e(f)){g!==n&&(g=n,q=g.length=0,l++),a=f.length,q!==a&&(l++,g.length=q=a);for(var c=0;a>c;c++){var d=g[c]!==g[c]&&f[c]!==f[c];d||g[c]===f[c]||(l++,g[c]=f[c])}}else{g!==o&&(g=o={},q=0,l++),a=0;for(b in f)f.hasOwnProperty(b)&&(a++,g.hasOwnProperty(b)?g[b]!==f[b]&&(l++,g[b]=f[b]):(q++,g[b]=f[b],l++));if(q>a){l++;for(b in g)g.hasOwnProperty(b)&&!f.hasOwnProperty(b)&&(q--,delete g[b])}}else g!==f&&(g=f,l++);return l}function d(){if(p?(p=!1,b(f,f,j)):b(f,i,j),k)if(t(f))if(e(f)){i=new Array(f.length);for(var a=0;a<f.length;a++)i[a]=f[a]}else{i={};for(var c in f)nd.call(f,c)&&(i[c]=f[c])}else i=f}var f,g,i,j=this,k=b.length>1,l=0,m=h(a),n=[],o={},p=!0,q=0;return this.$watch(c,d)},$digest:function(){var d,e,f,h,i,j,k,n,o,p,r,s=this.$$asyncQueue,t=this.$$postDigestQueue,u=a,v=this,w=[];l("$digest"),c=null;do{for(j=!1,n=v;s.length;){try{r=s.shift(),r.scope.$eval(r.expression)}catch(x){m(),g(x)}c=null}a:do{if(h=n.$$watchers)for(i=h.length;i--;)try{if(d=h[i])if((e=d.get(n))===(f=d.last)||(d.eq?L(e,f):"number"==typeof e&&"number"==typeof f&&isNaN(e)&&isNaN(f))){if(d===c){j=!1;break a}}else j=!0,c=d,d.last=d.eq?J(e):e,d.fn(e,f===q?e:f,n),5>u&&(o=4-u,w[o]||(w[o]=[]),p=y(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,p+="; newVal: "+R(e)+"; oldVal: "+R(f),w[o].push(p))}catch(x){m(),g(x)}if(!(k=n.$$childHead||n!==v&&n.$$nextSibling))for(;n!==v&&!(k=n.$$nextSibling);)n=n.$parent}while(n=k);if((j||s.length)&&!u--)throw m(),b("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",a,R(w))}while(j||s.length);for(m();t.length;)try{t.shift()()}catch(x){g(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy"),this.$$destroyed=!0,this!==r&&(f(this.$$listenerCount,P(null,p,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=o,this.$on=this.$watch=function(){return o})}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a){r.$$phase||r.$$asyncQueue.length||i.defer(function(){r.$$asyncQueue.length&&r.$digest()}),this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){g(b)}finally{m();try{r.$digest()}catch(b){throw g(b),b}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]),c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[H(c,b)]=null,p(e,1,a)}},$emit:function(a){var b,c,d,e=[],f=this,h=!1,i={name:a,targetScope:f,stopPropagation:function(){h=!0},preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},j=N([i],arguments,1);do{for(b=f.$$listeners[a]||e,i.currentScope=f,c=0,d=b.length;d>c;c++)if(b[c])try{b[c].apply(null,j)}catch(k){g(k)}else b.splice(c,1),c--,d--;if(h)return i;f=f.$parent}while(f);return i},$broadcast:function(a){for(var b,c,d,e=this,f=e,h=e,i={name:a,targetScope:e,preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},j=N([i],arguments,1);f=h;){for(i.currentScope=f,b=f.$$listeners[a]||[],c=0,d=b.length;d>c;c++)if(b[c])try{b[c].apply(null,j)}catch(k){g(k)}else b.splice(c,1),c--,d--;if(!(h=f.$$listenerCount[a]&&f.$$childHead||f!==e&&f.$$nextSibling))for(;f!==e&&!(h=f.$$nextSibling);)f=f.$parent}return i}};var r=new k;return r}]}function Ec(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(b){return s(b)?(a=b,this):a},this.imgSrcSanitizationWhitelist=function(a){return s(a)?(b=a,this):b},this.$get=function(){return function(c,d){var e,f=d?b:a;return rd&&!(rd>=8)||(e=Mc(c).href,""===e||e.match(f))?c:"unsafe:"+e}}}function Fc(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")}function Gc(a){if("self"===a)return a;if(u(a)){if(a.indexOf("***")>-1)throw oe("iwcard","Illegal sequence *** in string matcher.  String: {0}",a);return a=Fc(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+a+"$")}if(z(a))return new RegExp("^"+a.source+"$");throw oe("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function Hc(a){var b=[];return s(a)&&f(a,function(a){b.push(Gc(a))}),b}function Ic(){this.SCE_CONTEXTS=pe;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){return arguments.length&&(a=Hc(b)),a},this.resourceUrlBlacklist=function(a){return arguments.length&&(b=Hc(a)),b},this.$get=["$injector",function(d){function e(a,b){return"self"===a?Nc(b):!!a.exec(b.href)}function f(c){var d,f,g=Mc(c.toString()),h=!1;for(d=0,f=a.length;f>d;d++)if(e(a[d],g)){h=!0;break}if(h)for(d=0,f=b.length;f>d;d++)if(e(b[d],g)){h=!1;break}return h}function g(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};return a&&(b.prototype=new a),b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},b}function h(a,b){var d=m.hasOwnProperty(a)?m[a]:null;if(!d)throw oe("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",a,b);if(null===b||b===c||""===b)return b;if("string"!=typeof b)throw oe("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",a);return new d(b)}function i(a){return a instanceof l?a.$$unwrapTrustedValue():a}function j(a,b){if(null===b||b===c||""===b)return b;var d=m.hasOwnProperty(a)?m[a]:null;if(d&&b instanceof d)return b.$$unwrapTrustedValue();if(a===pe.RESOURCE_URL){if(f(b))return b;throw oe("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",b.toString())}if(a===pe.HTML)return k(b);throw oe("unsafe","Attempting to use an unsafe value in a safe context.")}var k=function(){throw oe("unsafe","Attempting to use an unsafe value in a safe context.")};d.has("$sanitize")&&(k=d.get("$sanitize"));var l=g(),m={};return m[pe.HTML]=g(l),m[pe.CSS]=g(l),m[pe.URL]=g(l),m[pe.JS]=g(l),m[pe.RESOURCE_URL]=g(m[pe.URL]),{trustAs:h,getTrusted:j,valueOf:i}}]}function Jc(){var a=!0;this.enabled=function(b){return arguments.length&&(a=!!b),a},this.$get=["$parse","$sniffer","$sceDelegate",function(b,c,d){if(a&&c.msie&&c.msieDocumentMode<8)throw oe("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");var e=J(pe);e.isEnabled=function(){return a},e.trustAs=d.trustAs,e.getTrusted=d.getTrusted,e.valueOf=d.valueOf,a||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=p),e.parseAs=function(a,c){var d=b(c);return d.literal&&d.constant?d:function(b,c){return e.getTrusted(a,d(b,c))}};var g=e.parseAs,h=e.getTrusted,i=e.trustAs;return f(pe,function(a,b){var c=md(b);e[kb("parse_as_"+c)]=function(b){return g(a,b)},e[kb("get_trusted_"+c)]=function(b){return h(a,b)},e[kb("trust_as_"+c)]=function(b){return i(a,b)}}),e}]}function Kc(){this.$get=["$window","$document",function(a,b){var c,d,e={},f=m((/android (\d+)/.exec(md((a.navigator||{}).userAgent))||[])[1]),g=/Boxee/i.test((a.navigator||{}).userAgent),h=b[0]||{},i=h.documentMode,j=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=h.body&&h.body.style,l=!1,n=!1;if(k){for(var o in k)if(d=j.exec(o)){c=d[0],c=c.substr(0,1).toUpperCase()+c.substr(1);break}c||(c="WebkitOpacity"in k&&"webkit"),l=!!("transition"in k||c+"Transition"in k),n=!!("animation"in k||c+"Animation"in k),!f||l&&n||(l=u(h.body.style.webkitTransition),n=u(h.body.style.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>f||g),hashchange:"onhashchange"in a&&(!i||i>7),hasEvent:function(a){if("input"==a&&9==rd)return!1;if(r(e[a])){var b=h.createElement("div");e[a]="on"+a in b}return e[a]},csp:M(),vendorPrefix:c,transitions:l,animations:n,android:f,msie:rd,msieDocumentMode:i}}]}function Lc(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(a,b,c,d){function e(e,g,h){var i,j=c.defer(),k=j.promise,l=s(h)&&!h;return i=b.defer(function(){try{j.resolve(e())
}catch(b){j.reject(b),d(b)}finally{delete f[k.$$timeoutId]}l||a.$apply()},g),k.$$timeoutId=i,f[i]=j,k}var f={};return e.cancel=function(a){return a&&a.$$timeoutId in f?(f[a.$$timeoutId].reject("canceled"),delete f[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1},e}]}function Mc(a){var b=a;return rd&&(qe.setAttribute("href",b),b=qe.href),qe.setAttribute("href",b),{href:qe.href,protocol:qe.protocol?qe.protocol.replace(/:$/,""):"",host:qe.host,search:qe.search?qe.search.replace(/^\?/,""):"",hash:qe.hash?qe.hash.replace(/^#/,""):"",hostname:qe.hostname,port:qe.port,pathname:"/"===qe.pathname.charAt(0)?qe.pathname:"/"+qe.pathname}}function Nc(a){var b=u(a)?Mc(a):a;return b.protocol===re.protocol&&b.host===re.host}function Oc(){this.$get=q(a)}function Pc(a){function b(d,e){if(t(d)){var g={};return f(d,function(a,c){g[c]=b(c,a)}),g}return a.factory(d+c,e)}var c="Filter";this.register=b,this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}],b("currency",Rc),b("date",Zc),b("filter",Qc),b("json",$c),b("limitTo",_c),b("lowercase",we),b("number",Sc),b("orderBy",ad),b("uppercase",xe)}function Qc(){return function(a,b,c){if(!x(a))return a;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0},"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ad.equals(a,b)}:function(a,b){if(a&&b&&"object"==typeof a&&"object"==typeof b){for(var d in a)if("$"!==d.charAt(0)&&nd.call(a,d)&&c(a[d],b[d]))return!0;return!1}return b=(""+b).toLowerCase(),(""+a).toLowerCase().indexOf(b)>-1});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case"boolean":case"number":case"string":return c(a,b);case"object":switch(typeof b){case"object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case"array":for(var e=0;e<a.length;e++)if(f(a[e],b))return!0;return!1;default:return!1}};switch(typeof b){case"boolean":case"number":case"string":b={$:b};case"object":for(var g in b)!function(a){"undefined"!=typeof b[a]&&e.push(function(c){return f("$"==a?c:c&&c[a],b[a])})}(g);break;case"function":e.push(b);break;default:return a}for(var h=[],i=0;i<a.length;i++){var j=a[i];e.check(j)&&h.push(j)}return h}}function Rc(a){var b=a.NUMBER_FORMATS;return function(a,c){return r(c)&&(c=b.CURRENCY_SYM),Tc(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,2).replace(/\u00A4/g,c)}}function Sc(a){var b=a.NUMBER_FORMATS;return function(a,c){return Tc(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Tc(a,b,c,d,e){if(null==a||!isFinite(a)||t(a))return"";var f=0>a;a=Math.abs(a);var g=a+"",h="",i=[],j=!1;if(-1!==g.indexOf("e")){var k=g.match(/([\d\.]+)e(-?)(\d+)/);k&&"-"==k[2]&&k[3]>e+1?g="0":(h=g,j=!0)}if(j)e>0&&a>-1&&1>a&&(h=a.toFixed(e));else{var l=(g.split(se)[1]||"").length;r(e)&&(e=Math.min(Math.max(b.minFrac,l),b.maxFrac));var m=Math.pow(10,e);a=Math.round(a*m)/m;var n=(""+a).split(se),o=n[0];n=n[1]||"";var p,q=0,s=b.lgSize,u=b.gSize;if(o.length>=s+u)for(q=o.length-s,p=0;q>p;p++)(q-p)%u===0&&0!==p&&(h+=c),h+=o.charAt(p);for(p=q;p<o.length;p++)(o.length-p)%s===0&&0!==p&&(h+=c),h+=o.charAt(p);for(;n.length<e;)n+="0";e&&"0"!==e&&(h+=d+n.substr(0,e))}return i.push(f?b.negPre:b.posPre),i.push(h),i.push(f?b.negSuf:b.posSuf),i.join("")}function Uc(a,b,c){var d="";for(0>a&&(d="-",a=-a),a=""+a;a.length<b;)a="0"+a;return c&&(a=a.substr(a.length-b)),d+a}function Vc(a,b,c,d){return c=c||0,function(e){var f=e["get"+a]();return(c>0||f>-c)&&(f+=c),0===f&&-12==c&&(f=12),Uc(f,b,d)}}function Wc(a,b){return function(c,d){var e=c["get"+a](),f=od(b?"SHORT"+a:a);return d[f][e]}}function Xc(a){var b=-1*a.getTimezoneOffset(),c=b>=0?"+":"";return c+=Uc(Math[b>0?"floor":"ceil"](b/60),2)+Uc(Math.abs(b%60),2)}function Yc(a,b){return a.getHours()<12?b.AMPMS[0]:b.AMPMS[1]}function Zc(a){function b(a){var b;if(b=a.match(c)){var d=new Date(0),e=0,f=0,g=b[8]?d.setUTCFullYear:d.setFullYear,h=b[8]?d.setUTCHours:d.setHours;b[9]&&(e=m(b[9]+b[10]),f=m(b[9]+b[11])),g.call(d,m(b[1]),m(b[2])-1,m(b[3]));var i=m(b[4]||0)-e,j=m(b[5]||0)-f,k=m(b[6]||0),l=Math.round(1e3*parseFloat("0."+(b[7]||0)));return h.call(d,i,j,k,l),d}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d){var e,g,h="",i=[];if(d=d||"mediumDate",d=a.DATETIME_FORMATS[d]||d,u(c)&&(c=ve.test(c)?m(c):b(c)),v(c)&&(c=new Date(c)),!w(c))return c;for(;d;)g=ue.exec(d),g?(i=N(i,g,1),d=i.pop()):(i.push(d),d=null);return f(i,function(b){e=te[b],h+=e?e(c,a.DATETIME_FORMATS):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),h}}function $c(){return function(a){return R(a,!0)}}function _c(){return function(a,b){if(!x(a)&&!u(a))return a;if(b=m(b),u(a))return b?b>=0?a.slice(0,b):a.slice(b,a.length):"";var c,d,e=[];for(b>a.length?b=a.length:b<-a.length&&(b=-a.length),b>0?(c=0,d=b):(c=a.length+b,d=a.length);d>c;c++)e.push(a[c]);return e}}function ad(a){return function(b,c,d){function e(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0}function f(a,b){return T(b)?function(b,c){return a(c,b)}:a}function g(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:b>a?-1:1):d>c?-1:1}if(!x(b))return b;if(!c)return b;c=x(c)?c:[c],c=F(c,function(b){var c=!1,d=b||p;if(u(b)&&(("+"==b.charAt(0)||"-"==b.charAt(0))&&(c="-"==b.charAt(0),b=b.substring(1)),d=a(b),d.constant)){var e=d();return f(function(a,b){return g(a[e],b[e])},c)}return f(function(a,b){return g(d(a),d(b))},c)});for(var h=[],i=0;i<b.length;i++)h.push(b[i]);return h.sort(f(e,d))}}function bd(a){return y(a)&&(a={link:a}),a.restrict=a.restrict||"AC",q(a)}function cd(a,b,c,d){function e(b,c){c=c?"-"+ab(c,"-"):"",d.removeClass(a,(b?Ke:Je)+c),d.addClass(a,(b?Je:Ke)+c)}var g=this,h=a.parent().controller("form")||Ae,i=0,j=g.$error={},k=[];g.$name=b.name||b.ngForm,g.$dirty=!1,g.$pristine=!0,g.$valid=!0,g.$invalid=!1,h.$addControl(g),a.addClass(Le),e(!0),g.$addControl=function(a){eb(a.$name,"input"),k.push(a),a.$name&&(g[a.$name]=a)},g.$removeControl=function(a){a.$name&&g[a.$name]===a&&delete g[a.$name],f(j,function(b,c){g.$setValidity(c,!0,a)}),I(k,a)},g.$setValidity=function(a,b,c){var d=j[a];if(b)d&&(I(d,c),d.length||(i--,i||(e(b),g.$valid=!0,g.$invalid=!1),j[a]=!1,e(!0,a),h.$setValidity(a,!0,g)));else{if(i||e(b),d){if(G(d,c))return}else j[a]=d=[],i++,e(!1,a),h.$setValidity(a,!1,g);d.push(c),g.$valid=!1,g.$invalid=!0}},g.$setDirty=function(){d.removeClass(a,Le),d.addClass(a,Me),g.$dirty=!0,g.$pristine=!1,h.$setDirty()},g.$setPristine=function(){d.removeClass(a,Me),d.addClass(a,Le),g.$dirty=!1,g.$pristine=!0,f(k,function(a){a.$setPristine()})}}function dd(a,b,d,e){return a.$setValidity(b,d),d?e:c}function ed(a,b,c){var d=c.prop("validity");if(t(d)){var e=function(c){return a.$error[b]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing?c:void a.$setValidity(b,!1)};a.$parsers.push(e)}}function fd(a,b,c,e,f,g){var h=b.prop("validity");if(!f.android){var i=!1;b.on("compositionstart",function(){i=!0}),b.on("compositionend",function(){i=!1,j()})}var j=function(){if(!i){var d=b.val();T(c.ngTrim||"T")&&(d=Cd(d)),(e.$viewValue!==d||h&&""===d&&!h.valueMissing)&&(a.$$phase?e.$setViewValue(d):a.$apply(function(){e.$setViewValue(d)}))}};if(f.hasEvent("input"))b.on("input",j);else{var k,l=function(){k||(k=g.defer(function(){j(),k=null}))};b.on("keydown",function(a){var b=a.keyCode;91===b||b>15&&19>b||b>=37&&40>=b||l()}),f.hasEvent("paste")&&b.on("paste cut",l)}b.on("change",j),e.$render=function(){b.val(e.$isEmpty(e.$viewValue)?"":e.$viewValue)};var n,o,p=c.ngPattern;if(p){var q=function(a,b){return dd(e,"pattern",e.$isEmpty(b)||a.test(b),b)};o=p.match(/^\/(.*)\/([gim]*)$/),o?(p=new RegExp(o[1],o[2]),n=function(a){return q(p,a)}):n=function(c){var e=a.$eval(p);if(!e||!e.test)throw d("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",p,e,U(b));return q(e,c)},e.$formatters.push(n),e.$parsers.push(n)}if(c.ngMinlength){var r=m(c.ngMinlength),s=function(a){return dd(e,"minlength",e.$isEmpty(a)||a.length>=r,a)};e.$parsers.push(s),e.$formatters.push(s)}if(c.ngMaxlength){var t=m(c.ngMaxlength),u=function(a){return dd(e,"maxlength",e.$isEmpty(a)||a.length<=t,a)};e.$parsers.push(u),e.$formatters.push(u)}}function gd(a,b,d,e,f,g){if(fd(a,b,d,e,f,g),e.$parsers.push(function(a){var b=e.$isEmpty(a);return b||Ge.test(a)?(e.$setValidity("number",!0),""===a?null:b?a:parseFloat(a)):(e.$setValidity("number",!1),c)}),ed(e,"number",b),e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a}),d.min){var h=function(a){var b=parseFloat(d.min);return dd(e,"min",e.$isEmpty(a)||a>=b,a)};e.$parsers.push(h),e.$formatters.push(h)}if(d.max){var i=function(a){var b=parseFloat(d.max);return dd(e,"max",e.$isEmpty(a)||b>=a,a)};e.$parsers.push(i),e.$formatters.push(i)}e.$formatters.push(function(a){return dd(e,"number",e.$isEmpty(a)||v(a),a)})}function hd(a,b,c,d,e,f){fd(a,b,c,d,e,f);var g=function(a){return dd(d,"url",d.$isEmpty(a)||Ee.test(a),a)};d.$formatters.push(g),d.$parsers.push(g)}function id(a,b,c,d,e,f){fd(a,b,c,d,e,f);var g=function(a){return dd(d,"email",d.$isEmpty(a)||Fe.test(a),a)};d.$formatters.push(g),d.$parsers.push(g)}function jd(a,b,c,d){r(c.name)&&b.attr("name",j()),b.on("click",function(){b[0].checked&&a.$apply(function(){d.$setViewValue(c.value)})}),d.$render=function(){var a=c.value;b[0].checked=a==d.$viewValue},c.$observe("value",d.$render)}function kd(a,b,c,d){var e=c.ngTrueValue,f=c.ngFalseValue;u(e)||(e=!0),u(f)||(f=!1),b.on("click",function(){a.$apply(function(){d.$setViewValue(b[0].checked)})}),d.$render=function(){b[0].checked=d.$viewValue},d.$isEmpty=function(a){return a!==e},d.$formatters.push(function(a){return a===e}),d.$parsers.push(function(a){return a?e:f})}function ld(a,b){return a="ngClass"+a,["$animate",function(c){function d(a,b){var c=[];a:for(var d=0;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e==b[f])continue a;c.push(e)}return c}function e(a){if(x(a))return a;if(u(a))return a.split(" ");if(t(a)){var b=[];return f(a,function(a,c){a&&b.push(c)}),b}return a}return{restrict:"AC",link:function(g,h,i){function j(a){var b=l(a,1);i.$addClass(b)}function k(a){var b=l(a,-1);i.$removeClass(b)}function l(a,b){var c=h.data("$classCounts")||{},d=[];return f(a,function(a){(b>0||c[a])&&(c[a]=(c[a]||0)+b,c[a]===+(b>0)&&d.push(a))}),h.data("$classCounts",c),d.join(" ")}function m(a,b){var e=d(b,a),f=d(a,b);f=l(f,-1),e=l(e,1),0===e.length?c.removeClass(h,f):0===f.length?c.addClass(h,e):c.setClass(h,e,f)}function n(a){if(b===!0||g.$index%2===b){var c=e(a||[]);if(o){if(!L(a,o)){var d=e(o);m(d,c)}}else j(c)}o=J(a)}var o;g.$watch(i[a],n,!0),i.$observe("class",function(){n(g.$eval(i[a]))}),"ngClass"!==a&&g.$watch("$index",function(c,d){var f=1&c;if(f!==d&1){var h=e(g.$eval(i[a]));f===b?j(h):k(h)}})}}}]}var md=function(a){return u(a)?a.toLowerCase():a},nd=Object.prototype.hasOwnProperty,od=function(a){return u(a)?a.toUpperCase():a},pd=function(a){return u(a)?a.replace(/[A-Z]/g,function(a){return String.fromCharCode(32|a.charCodeAt(0))}):a},qd=function(a){return u(a)?a.replace(/[a-z]/g,function(a){return String.fromCharCode(-33&a.charCodeAt(0))}):a};"i"!=="I".toLowerCase()&&(md=pd,od=qd);var rd,sd,td,ud,vd,wd=[].slice,xd=[].push,yd=Object.prototype.toString,zd=d("ng"),Ad=(a.angular,a.angular||(a.angular={})),Bd=["0","0","0"];rd=m((/msie (\d+)/.exec(md(navigator.userAgent))||[])[1]),isNaN(rd)&&(rd=m((/trident\/.*; rv:(\d+)/.exec(md(navigator.userAgent))||[])[1])),o.$inject=[],p.$inject=[];var Cd=function(){return String.prototype.trim?function(a){return u(a)?a.trim():a}:function(a){return u(a)?a.replace(/^\s\s*/,"").replace(/\s\s*$/,""):a}}();vd=9>rd?function(a){return a=a.nodeName?a:a[0],a.scopeName&&"HTML"!=a.scopeName?od(a.scopeName+":"+a.nodeName):a.nodeName}:function(a){return a.nodeName?a.nodeName:a[0].nodeName};var Dd=/[A-Z]/g,Ed={full:"1.2.16",major:1,minor:2,dot:16,codeName:"badger-enumeration"},Fd=pb.cache={},Gd=pb.expando="ng-"+(new Date).getTime(),Hd=1,Id=a.document.addEventListener?function(a,b,c){a.addEventListener(b,c,!1)}:function(a,b,c){a.attachEvent("on"+b,c)},Jd=a.document.removeEventListener?function(a,b,c){a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent("on"+b,c)},Kd=(pb._data=function(a){return this.cache[a[this.expando]]||{}},/([\:\-\_]+(.))/g),Ld=/^moz([A-Z])/,Md=d("jqLite"),Nd=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Od=/<|&#?\w+;/,Pd=/<([\w:]+)/,Qd=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Rd={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Rd.optgroup=Rd.option,Rd.tbody=Rd.tfoot=Rd.colgroup=Rd.caption=Rd.thead,Rd.th=Rd.td;var Sd=pb.prototype={ready:function(c){function d(){e||(e=!0,c())}var e=!1;"complete"===b.readyState?setTimeout(d):(this.on("DOMContentLoaded",d),pb(a).on("load",d))},toString:function(){var a=[];return f(this,function(b){a.push(""+b)}),"["+a.join(", ")+"]"},eq:function(a){return sd(a>=0?this[a]:this[this.length+a])},length:0,push:xd,sort:[].sort,splice:[].splice},Td={};f("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(a){Td[md(a)]=a});var Ud={};f("input,select,option,textarea,button,form,details".split(","),function(a){Ud[od(a)]=!0}),f({data:vb,inheritedData:Bb,scope:function(a){return sd(a).data("$scope")||Bb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return sd(a).data("$isolateScope")||sd(a).data("$isolateScopeNoTemplate")},controller:Ab,injector:function(a){return Bb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:wb,css:function(a,b,d){if(b=kb(b),!s(d)){var e;return 8>=rd&&(e=a.currentStyle&&a.currentStyle[b],""===e&&(e="auto")),e=e||a.style[b],8>=rd&&(e=""===e?c:e),e}a.style[b]=d},attr:function(a,b,d){var e=md(b);if(Td[e]){if(!s(d))return a[b]||(a.attributes.getNamedItem(b)||o).specified?e:c;d?(a[b]=!0,a.setAttribute(b,e)):(a[b]=!1,a.removeAttribute(e))}else if(s(d))a.setAttribute(b,d);else if(a.getAttribute){var f=a.getAttribute(b,2);return null===f?c:f}},prop:function(a,b,c){return s(c)?void(a[b]=c):a[b]},text:function(){function a(a,c){var d=b[a.nodeType];return r(c)?d?a[d]:"":void(a[d]=c)}var b=[];return 9>rd?(b[1]="innerText",b[3]="nodeValue"):b[1]=b[3]="textContent",a.$dv="",a}(),val:function(a,b){if(r(b)){if("SELECT"===vd(a)&&a.multiple){var c=[];return f(a.options,function(a){a.selected&&c.push(a.value||a.text)}),0===c.length?null:c}return a.value}a.value=b},html:function(a,b){if(r(b))return a.innerHTML;for(var c=0,d=a.childNodes;c<d.length;c++)rb(d[c]);a.innerHTML=b},empty:Cb},function(a,b){pb.prototype[b]=function(b,d){var e,f;if(a!==Cb&&(2==a.length&&a!==wb&&a!==Ab?b:d)===c){if(t(b)){for(e=0;e<this.length;e++)if(a===vb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}for(var g=a.$dv,h=g===c?Math.min(this.length,1):this.length,i=0;h>i;i++){var j=a(this[i],b,d);g=g?g+j:j}return g}for(e=0;e<this.length;e++)a(this[e],b,d);return this}}),f({removeData:tb,dealoc:rb,on:function wf(a,c,d,e){if(s(e))throw Md("onargs","jqLite#on() does not support the `selector` or `eventData` parameters");var g=ub(a,"events"),h=ub(a,"handle");g||ub(a,"events",g={}),h||ub(a,"handle",h=Eb(a,g)),f(c.split(" "),function(c){var e=g[c];if(!e){if("mouseenter"==c||"mouseleave"==c){var f=b.body.contains||b.body.compareDocumentPosition?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1};g[c]=[];var i={mouseleave:"mouseout",mouseenter:"mouseover"};wf(a,i[c],function(a){var b=this,d=a.relatedTarget;(!d||d!==b&&!f(b,d))&&h(a,c)})}else Id(a,c,h),g[c]=[];e=g[c]}e.push(d)})},off:sb,one:function(a,b,c){a=sd(a),a.on(b,function d(){a.off(b,c),a.off(b,d)}),a.on(b,c)},replaceWith:function(a,b){var c,d=a.parentNode;rb(a),f(new pb(b),function(b){c?d.insertBefore(b,c.nextSibling):d.replaceChild(b,a),c=b})},children:function(a){var b=[];return f(a.childNodes,function(a){1===a.nodeType&&b.push(a)}),b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){f(new pb(b),function(b){(1===a.nodeType||11===a.nodeType)&&a.appendChild(b)})},prepend:function(a,b){if(1===a.nodeType){var c=a.firstChild;f(new pb(b),function(b){a.insertBefore(b,c)})}},wrap:function(a,b){b=sd(b)[0];var c=a.parentNode;c&&c.replaceChild(b,a),b.appendChild(a)},remove:function(a){rb(a);var b=a.parentNode;b&&b.removeChild(a)},after:function(a,b){var c=a,d=a.parentNode;f(new pb(b),function(a){d.insertBefore(a,c.nextSibling),c=a})},addClass:yb,removeClass:xb,toggleClass:function(a,b,c){b&&f(b.split(" "),function(b){var d=c;r(d)&&(d=!wb(a,b)),(d?yb:xb)(a,b)})},parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(var b=a.nextSibling;null!=b&&1!==b.nodeType;)b=b.nextSibling;return b},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:qb,triggerHandler:function(a,b,c){var d=(ub(a,"events")||{})[b];c=c||[];var e=[{preventDefault:o,stopPropagation:o}];f(d,function(b){b.apply(a,e.concat(c))})}},function(a,b){pb.prototype[b]=function(b,c,d){for(var e,f=0;f<this.length;f++)r(e)?(e=a(this[f],b,c,d),s(e)&&(e=sd(e))):zb(e,a(this[f],b,c,d));return s(e)?e:this},pb.prototype.bind=pb.prototype.on,pb.prototype.unbind=pb.prototype.off}),Gb.prototype={put:function(a,b){this[Fb(a)]=b},get:function(a){return this[Fb(a)]},remove:function(a){var b=this[a=Fb(a)];return delete this[a],b}};var Vd=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Wd=/,/,Xd=/^\s*(_?)(\S+?)\1\s*$/,Yd=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,Zd=d("$injector"),$d=d("$animate"),_d=["$provide",function(a){this.$$selectors={},this.register=function(b,c){var d=b+"-animation";if(b&&"."!=b.charAt(0))throw $d("notcsel","Expecting class selector starting with '.' got '{0}'.",b);this.$$selectors[b.substr(1)]=d,a.factory(d,c)},this.classNameFilter=function(a){return 1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null),this.$$classNameFilter},this.$get=["$timeout","$$asyncCallback",function(a,b){function c(a){a&&b(a)}return{enter:function(a,b,d,e){d?d.after(a):(b&&b[0]||(b=d.parent()),b.append(a)),c(e)},leave:function(a,b){a.remove(),c(b)},move:function(a,b,c,d){this.enter(a,b,c,d)},addClass:function(a,b,d){b=u(b)?b:x(b)?b.join(" "):"",f(a,function(a){yb(a,b)}),c(d)},removeClass:function(a,b,d){b=u(b)?b:x(b)?b.join(" "):"",f(a,function(a){xb(a,b)}),c(d)},setClass:function(a,b,d,e){f(a,function(a){yb(a,b),xb(a,d)}),c(e)},enabled:o}}]}],ae=d("$compile");Pb.$inject=["$provide","$$sanitizeUriProvider"];var be=/^(x[\:\-_]|data[\:\-_])/i,ce=d("$interpolate"),de=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,ee={http:80,https:443,ftp:21},fe=d("$location");nc.prototype=mc.prototype=lc.prototype={$$html5:!1,$$replace:!1,absUrl:oc("$$absUrl"),url:function(a,b){if(r(a))return this.$$url;var c=de.exec(a);return c[1]&&this.path(decodeURIComponent(c[1])),(c[2]||c[1])&&this.search(c[3]||""),this.hash(c[5]||"",b),this},protocol:oc("$$protocol"),host:oc("$$host"),port:oc("$$port"),path:pc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(u(a))this.$$search=W(a);else{if(!t(a))throw fe("isrcharg","The first argument of the `$location#search()` call must be a string or an object.");this.$$search=a}break;default:r(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}return this.$$compose(),this},hash:pc("$$hash",p),replace:function(){return this.$$replace=!0,this}};var ge,he=d("$parse"),ie={},je={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:o,"+":function(a,b,d,e){return d=d(a,b),e=e(a,b),s(d)?s(e)?d+e:d:s(e)?e:c},"-":function(a,b,c,d){return c=c(a,b),d=d(a,b),(s(c)?c:0)-(s(d)?d:0)},"*":function(a,b,c,d){return c(a,b)*d(a,b)},"/":function(a,b,c,d){return c(a,b)/d(a,b)},"%":function(a,b,c,d){return c(a,b)%d(a,b)},"^":function(a,b,c,d){return c(a,b)^d(a,b)},"=":o,"===":function(a,b,c,d){return c(a,b)===d(a,b)},"!==":function(a,b,c,d){return c(a,b)!==d(a,b)},"==":function(a,b,c,d){return c(a,b)==d(a,b)},"!=":function(a,b,c,d){return c(a,b)!=d(a,b)},"<":function(a,b,c,d){return c(a,b)<d(a,b)},">":function(a,b,c,d){return c(a,b)>d(a,b)},"<=":function(a,b,c,d){return c(a,b)<=d(a,b)},">=":function(a,b,c,d){return c(a,b)>=d(a,b)},"&&":function(a,b,c,d){return c(a,b)&&d(a,b)},"||":function(a,b,c,d){return c(a,b)||d(a,b)},"&":function(a,b,c,d){return c(a,b)&d(a,b)},"|":function(a,b,c,d){return d(a,b)(a,b,c(a,b))},"!":function(a,b,c){return!c(a,b)}},ke={n:"\n",f:"\f",r:"\r",t:"	",v:"","'":"'",'"':'"'},le=function(a){this.options=a};le.prototype={constructor:le,lex:function(a){this.text=a,this.index=0,this.ch=c,this.lastCh=":",this.tokens=[];for(var b,d=[];this.index<this.text.length;){if(this.ch=this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&"{"===d[0]&&(b=this.tokens[this.tokens.length-1])&&(b.json=-1===b.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&d.unshift(this.ch),this.is("}]")&&d.shift(),this.index++;else{if(this.isWhitespace(this.ch)){this.index++;continue}var e=this.ch+this.peek(),f=e+this.peek(2),g=je[this.ch],h=je[e],i=je[f];i?(this.tokens.push({index:this.index,text:f,fn:i}),this.index+=3):h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=2):g?(this.tokens.push({index:this.index,text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){var b=a||1;return this.index+b<this.text.length?this.text.charAt(this.index+b):!1},isNumber:function(a){return a>="0"&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"	"===a||"\n"===a||""===a||" "===a},isIdent:function(a){return a>="a"&&"z">=a||a>="A"&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,c){c=c||this.index;var d=s(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,c)+"]":" "+c;throw he("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",a,d,this.text)},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var c=md(this.text.charAt(this.index));if("."==c||this.isNumber(c))a+=c;else{var d=this.peek();if("e"==c&&this.isExpOperator(d))a+=c;else if(this.isExpOperator(c)&&d&&this.isNumber(d)&&"e"==a.charAt(a.length-1))a+=c;else{if(!this.isExpOperator(c)||d&&this.isNumber(d)||"e"!=a.charAt(a.length-1))break;this.throwError("Invalid exponent")}}this.index++}a=1*a,this.tokens.push({index:b,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a,b,c,d,e=this,f="",g=this.index;this.index<this.text.length&&(d=this.text.charAt(this.index),"."===d||this.isIdent(d)||this.isNumber(d));)"."===d&&(a=this.index),f+=d,this.index++;if(a)for(b=this.index;b<this.text.length;){if(d=this.text.charAt(b),"("===d){c=f.substr(a-g+1),f=f.substr(0,a-g),this.index=b;break}if(!this.isWhitespace(d))break;b++}var h={index:g,text:f};if(je.hasOwnProperty(f))h.fn=je[f],h.json=je[f];else{var i=yc(f,this.options,this.text);h.fn=l(function(a,b){return i(a,b)},{assign:function(a,b){return uc(a,f,b,e.text,e.options)}})}this.tokens.push(h),c&&(this.tokens.push({index:a,text:".",json:!1}),this.tokens.push({index:a+1,text:c,json:!1}))},readString:function(a){var b=this.index;this.index++;for(var c="",d=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index);if(d+=f,e){if("u"===f){var g=this.text.substring(this.index+1,this.index+5);g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,c+=String.fromCharCode(parseInt(g,16))}else{var h=ke[f];c+=h?h:f}e=!1}else if("\\"===f)e=!0;else{if(f===a)return this.index++,void this.tokens.push({index:b,text:d,string:c,json:!0,fn:function(){return c}});c+=f}this.index++}this.throwError("Unterminated quote",b)}};var me=function(a,b,c){this.lexer=a,this.$filter=b,this.options=c};me.ZERO=l(function(){return 0},{constant:!0}),me.prototype={constructor:me,parse:function(a,b){this.text=a,this.json=b,this.tokens=this.lexer.lex(a),b&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var c=b?this.primary():this.statements();return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),c.literal=!!c.literal,c.constant=!!c.constant,c},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var b=this.expect();a=b.fn,a||this.throwError("not a primary expression",b),b.json&&(a.constant=!0,a.literal=!0)}for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,b){throw he("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",b.text,a,b.index+1,this.text,this.text.substring(b.index))},peekToken:function(){if(0===this.tokens.length)throw he("ueoe","Unexpected end of expression: {0}",this.text);return this.tokens[0]},peek:function(a,b,c,d){if(this.tokens.length>0){var e=this.tokens[0],f=e.text;if(f===a||f===b||f===c||f===d||!a&&!b&&!c&&!d)return e}return!1},expect:function(a,b,c,d){var e=this.peek(a,b,c,d);return e?(this.json&&!e.json&&this.throwError("is not valid json",e),this.tokens.shift(),e):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,b){return l(function(c,d){return a(c,d,b)},{constant:b.constant})},ternaryFn:function(a,b,c){return l(function(d,e){return a(d,e)?b(d,e):c(d,e)},{constant:a.constant&&b.constant&&c.constant})},binaryFn:function(a,b,c){return l(function(d,e){return b(d,e,a,c)},{constant:a.constant&&c.constant})},statements:function(){for(var a=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var f=a[e];f&&(d=f(b,c))}return d}},filterChain:function(){for(var a,b=this.expression();;){if(!(a=this.expect("|")))return b;b=this.binaryFn(b,a.fn,this.filter())}},filter:function(){for(var a=this.expect(),b=this.$filter(a.text),c=[];;){if(!(a=this.expect(":"))){var d=function(a,d,e){for(var f=[e],g=0;g<c.length;g++)f.push(c[g](a,d));return b.apply(a,f)};return function(){return d}}c.push(this.expression())}},expression:function(){return this.assignment()},assignment:function(){var a,b,c=this.ternary();return(b=this.expect("="))?(c.assign||this.throwError("implies assignment but ["+this.text.substring(0,b.index)+"] can not be assigned to",b),a=this.ternary(),function(b,d){return c.assign(b,a(b,d),d)}):c},ternary:function(){var a,b,c=this.logicalOR();return(b=this.expect("?"))?(a=this.ternary(),(b=this.expect(":"))?this.ternaryFn(c,a,this.ternary()):void this.throwError("expected :",b)):c},logicalOR:function(){for(var a,b=this.logicalAND();;){if(!(a=this.expect("||")))return b;b=this.binaryFn(b,a.fn,this.logicalAND())}},logicalAND:function(){var a,b=this.equality();return(a=this.expect("&&"))&&(b=this.binaryFn(b,a.fn,this.logicalAND())),b},equality:function(){var a,b=this.relational();return(a=this.expect("==","!=","===","!=="))&&(b=this.binaryFn(b,a.fn,this.equality())),b},relational:function(){var a,b=this.additive();return(a=this.expect("<",">","<=",">="))&&(b=this.binaryFn(b,a.fn,this.relational())),b},additive:function(){for(var a,b=this.multiplicative();a=this.expect("+","-");)b=this.binaryFn(b,a.fn,this.multiplicative());return b},multiplicative:function(){for(var a,b=this.unary();a=this.expect("*","/","%");)b=this.binaryFn(b,a.fn,this.unary());return b},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(me.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var b=this,c=this.expect().text,d=yc(c,this.options,this.text);return l(function(b,c,e){return d(e||a(b,c))},{assign:function(d,e,f){return uc(a(d,f),c,e,b.text,b.options)}})},objectIndex:function(a){var b=this,d=this.expression();return this.consume("]"),l(function(e,f){var g,h,i=a(e,f),j=d(e,f);return i?(g=tc(i[j],b.text),g&&g.then&&b.options.unwrapPromises&&(h=g,"$$v"in g||(h.$$v=c,h.then(function(a){h.$$v=a})),g=g.$$v),g):c},{assign:function(c,e,f){var g=d(c,f),h=tc(a(c,f),b.text);return h[g]=e}})},functionCall:function(a,b){var c=[];if(")"!==this.peekToken().text)do c.push(this.expression());while(this.expect(","));this.consume(")");var d=this;return function(e,f){for(var g=[],h=b?b(e,f):e,i=0;i<c.length;i++)g.push(c[i](e,f));var j=a(e,f,h)||o;tc(h,d.text),tc(j,d.text);var k=j.apply?j.apply(h,g):j(g[0],g[1],g[2],g[3],g[4]);return tc(k,d.text)}},arrayDeclaration:function(){var a=[],b=!0;if("]"!==this.peekToken().text)do{if(this.peek("]"))break;var c=this.expression();a.push(c),c.constant||(b=!1)}while(this.expect(","));return this.consume("]"),l(function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d},{literal:!0,constant:b})},object:function(){var a=[],b=!0;if("}"!==this.peekToken().text)do{if(this.peek("}"))break;var c=this.expect(),d=c.string||c.text;this.consume(":");var e=this.expression();a.push({key:d,value:e}),e.constant||(b=!1)}while(this.expect(","));return this.consume("}"),l(function(b,c){for(var d={},e=0;e<a.length;e++){var f=a[e];d[f.key]=f.value(b,c)}return d},{literal:!0,constant:b})}};var ne={},oe=d("$sce"),pe={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},qe=b.createElement("a"),re=Mc(a.location.href,!0);Pc.$inject=["$provide"],Rc.$inject=["$locale"],Sc.$inject=["$locale"];var se=".",te={yyyy:Vc("FullYear",4),yy:Vc("FullYear",2,0,!0),y:Vc("FullYear",1),MMMM:Wc("Month"),MMM:Wc("Month",!0),MM:Vc("Month",2,1),M:Vc("Month",1,1),dd:Vc("Date",2),d:Vc("Date",1),HH:Vc("Hours",2),H:Vc("Hours",1),hh:Vc("Hours",2,-12),h:Vc("Hours",1,-12),mm:Vc("Minutes",2),m:Vc("Minutes",1),ss:Vc("Seconds",2),s:Vc("Seconds",1),sss:Vc("Milliseconds",3),EEEE:Wc("Day"),EEE:Wc("Day",!0),a:Yc,Z:Xc},ue=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,ve=/^\-?\d+$/;Zc.$inject=["$locale"];var we=q(md),xe=q(od);ad.$inject=["$parse"];var ye=q({restrict:"E",compile:function(a,c){return 8>=rd&&(c.href||c.name||c.$set("href",""),a.append(b.createComment("IE fix"))),c.href||c.xlinkHref||c.name?void 0:function(a,b){var c="[object SVGAnimatedString]"===yd.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(c)||a.preventDefault()})}}}),ze={};f(Td,function(a,b){if("multiple"!=a){var c=Qb("ng-"+b);ze[c]=function(){return{priority:100,link:function(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}}}}}),f(["src","srcset","href"],function(a){var b=Qb("ng-"+a);ze[b]=function(){return{priority:99,link:function(c,d,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===yd.call(d.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null),e.$observe(b,function(a){a&&(e.$set(g,a),rd&&f&&d.prop(f,e[g]))})}}}});var Ae={$addControl:o,$removeControl:o,$setValidity:o,$setDirty:o,$setPristine:o};cd.$inject=["$element","$attrs","$scope","$animate"];
var Be=function(a){return["$timeout",function(b){var d={name:"form",restrict:a?"EAC":"E",controller:cd,compile:function(){return{pre:function(a,d,e,f){if(!e.action){var g=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Id(d[0],"submit",g),d.on("$destroy",function(){b(function(){Jd(d[0],"submit",g)},0,!1)})}var h=d.parent().controller("form"),i=e.name||e.ngForm;i&&uc(a,i,f,i),h&&d.on("$destroy",function(){h.$removeControl(f),i&&uc(a,i,c,i),l(f,Ae)})}}}};return d}]},Ce=Be(),De=Be(!0),Ee=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Fe=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Ge=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,He={text:fd,number:gd,url:hd,email:id,radio:jd,checkbox:kd,hidden:o,button:o,submit:o,reset:o,file:o},Ie=["$browser","$sniffer",function(a,b){return{restrict:"E",require:"?ngModel",link:function(c,d,e,f){f&&(He[md(e.type)]||He.text)(c,d,e,f,b,a)}}}],Je="ng-valid",Ke="ng-invalid",Le="ng-pristine",Me="ng-dirty",Ne=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,b,c,e,g,h){function i(a,b){b=b?"-"+ab(b,"-"):"",h.removeClass(e,(a?Ke:Je)+b),h.addClass(e,(a?Je:Ke)+b)}this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$name=c.name;var j=g(c.ngModel),k=j.assign;if(!k)throw d("ngModel")("nonassign","Expression '{0}' is non-assignable. Element: {1}",c.ngModel,U(e));this.$render=o,this.$isEmpty=function(a){return r(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||Ae,m=0,n=this.$error={};e.addClass(Le),i(!0),this.$setValidity=function(a,b){n[a]!==!b&&(b?(n[a]&&m--,m||(i(!0),this.$valid=!0,this.$invalid=!1)):(i(!1),this.$invalid=!0,this.$valid=!1,m++),n[a]=!b,i(b,a),l.$setValidity(a,b,this))},this.$setPristine=function(){this.$dirty=!1,this.$pristine=!0,h.removeClass(e,Me),h.addClass(e,Le)},this.$setViewValue=function(c){this.$viewValue=c,this.$pristine&&(this.$dirty=!0,this.$pristine=!1,h.removeClass(e,Le),h.addClass(e,Me),l.$setDirty()),f(this.$parsers,function(a){c=a(c)}),this.$modelValue!==c&&(this.$modelValue=c,k(a,c),f(this.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}}))};var p=this;a.$watch(function(){var b=j(a);if(p.$modelValue!==b){var c=p.$formatters,d=c.length;for(p.$modelValue=b;d--;)b=c[d](b);p.$viewValue!==b&&(p.$viewValue=b,p.$render())}return b})}],Oe=function(){return{require:["ngModel","^?form"],controller:Ne,link:function(a,b,c,d){var e=d[0],f=d[1]||Ae;f.$addControl(e),a.$on("$destroy",function(){f.$removeControl(e)})}}},Pe=q({require:"ngModel",link:function(a,b,c,d){d.$viewChangeListeners.push(function(){a.$eval(c.ngChange)})}}),Qe=function(){return{require:"?ngModel",link:function(a,b,c,d){if(d){c.required=!0;var e=function(a){return c.required&&d.$isEmpty(a)?void d.$setValidity("required",!1):(d.$setValidity("required",!0),a)};d.$formatters.push(e),d.$parsers.unshift(e),c.$observe("required",function(){e(d.$viewValue)})}}}},Re=function(){return{require:"ngModel",link:function(a,b,d,e){var g=/\/(.*)\//.exec(d.ngList),h=g&&new RegExp(g[1])||d.ngList||",",i=function(a){if(!r(a)){var b=[];return a&&f(a.split(h),function(a){a&&b.push(Cd(a))}),b}};e.$parsers.push(i),e.$formatters.push(function(a){return x(a)?a.join(", "):c}),e.$isEmpty=function(a){return!a||!a.length}}}},Se=/^(true|false|\d+)$/,Te=function(){return{priority:100,compile:function(a,b){return Se.test(b.ngValue)?function(a,b,c){c.$set("value",a.$eval(c.ngValue))}:function(a,b,c){a.$watch(c.ngValue,function(a){c.$set("value",a)})}}}},Ue=bd(function(a,b,d){b.addClass("ng-binding").data("$binding",d.ngBind),a.$watch(d.ngBind,function(a){b.text(a==c?"":a)})}),Ve=["$interpolate",function(a){return function(b,c,d){var e=a(c.attr(d.$attr.ngBindTemplate));c.addClass("ng-binding").data("$binding",e),d.$observe("ngBindTemplate",function(a){c.text(a)})}}],We=["$sce","$parse",function(a,b){return function(c,d,e){function f(){return(g(c)||"").toString()}d.addClass("ng-binding").data("$binding",e.ngBindHtml);var g=b(e.ngBindHtml);c.$watch(f,function(){d.html(a.getTrustedHtml(g(c))||"")})}}],Xe=ld("",!0),Ye=ld("Odd",0),Ze=ld("Even",1),$e=bd({compile:function(a,b){b.$set("ngCloak",c),a.removeClass("ng-cloak")}}),_e=[function(){return{scope:!0,controller:"@",priority:500}}],af={};f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=Qb("ng-"+a);af[b]=["$parse",function(c){return{compile:function(d,e){var f=c(e[b]);return function(b,c){c.on(md(a),function(a){b.$apply(function(){f(b,{$event:a})})})}}}}]});var bf=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,i,j;c.$watch(e.ngIf,function(f){T(f)?i||(i=c.$new(),g(i,function(c){c[c.length++]=b.createComment(" end ngIf: "+e.ngIf+" "),h={clone:c},a.enter(c,d.parent(),d)})):(j&&(j.remove(),j=null),i&&(i.$destroy(),i=null),h&&(j=gb(h.clone),a.leave(j,function(){j=null}),h=null))})}}}],cf=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,b,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ad.noop,compile:function(f,g){var h=g.ngInclude||g.src,i=g.onload||"",j=g.autoscroll;return function(f,g,k,l,m){var n,o,p,q=0,r=function(){o&&(o.remove(),o=null),n&&(n.$destroy(),n=null),p&&(d.leave(p,function(){o=null}),o=p,p=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!s(j)||j&&!f.$eval(j)||c()},k=++q;e?(a.get(e,{cache:b}).success(function(a){if(k===q){var b=f.$new();l.template=a;var c=m(b,function(a){r(),d.enter(a,null,g,h)});n=b,p=c,n.$emit("$includeContentLoaded"),f.$eval(i)}}).error(function(){k===q&&r()}),f.$emit("$includeContentRequested")):(r(),l.template=null)})}}}}],df=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,c,d,e){c.html(e.template),a(c.contents())(b)}}}],ef=bd({priority:450,compile:function(){return{pre:function(a,b,c){a.$eval(c.ngInit)}}}}),ff=bd({terminal:!0,priority:1e3}),gf=["$locale","$interpolate",function(a,b){var c=/{}/g;return{restrict:"EA",link:function(d,e,g){var h=g.count,i=g.$attr.when&&e.attr(g.$attr.when),j=g.offset||0,k=d.$eval(i)||{},l={},m=b.startSymbol(),n=b.endSymbol(),o=/^when(Minus)?(.+)$/;f(g,function(a,b){o.test(b)&&(k[md(b.replace("when","").replace("Minus","-"))]=e.attr(g.$attr[b]))}),f(k,function(a,d){l[d]=b(a.replace(c,m+h+"-"+j+n))}),d.$watch(function(){var b=parseFloat(d.$eval(h));return isNaN(b)?"":(b in k||(b=a.pluralCat(b-j)),l[b](d,e,!0))},function(a){e.text(a)})}}}],hf=["$parse","$animate",function(a,c){function g(a){return a.clone[0]}function h(a){return a.clone[a.clone.length-1]}var i="$$NG_REMOVED",j=d("ngRepeat");return{transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,link:function(d,k,l,m,n){var o,p,q,r,s,t,u,v,w,x=l.ngRepeat,y=x.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),z={$id:Fb};if(!y)throw j("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",x);if(t=y[1],u=y[2],o=y[3],o?(p=a(o),q=function(a,b,c){return w&&(z[w]=a),z[v]=b,z.$index=c,p(d,z)}):(r=function(a,b){return Fb(b)},s=function(a){return a}),y=t.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/),!y)throw j("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",t);v=y[3]||y[1],w=y[2];var A={};d.$watchCollection(u,function(a){var l,m,o,p,t,u,y,z,B,C,D,E,F=k[0],G={},H=[];if(e(a))C=a,B=q||r;else{B=q||s,C=[];for(u in a)a.hasOwnProperty(u)&&"$"!=u.charAt(0)&&C.push(u);C.sort()}for(p=C.length,m=H.length=C.length,l=0;m>l;l++)if(u=a===C?l:C[l],y=a[u],z=B(u,y,l),eb(z,"`track by` id"),A.hasOwnProperty(z))D=A[z],delete A[z],G[z]=D,H[l]=D;else{if(G.hasOwnProperty(z))throw f(H,function(a){a&&a.scope&&(A[a.id]=a)}),j("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}",x,z);H[l]={id:z},G[z]=!1}for(u in A)A.hasOwnProperty(u)&&(D=A[u],E=gb(D.clone),c.leave(E),f(E,function(a){a[i]=!0}),D.scope.$destroy());for(l=0,m=C.length;m>l;l++){if(u=a===C?l:C[l],y=a[u],D=H[l],H[l-1]&&(F=h(H[l-1])),D.scope){t=D.scope,o=F;do o=o.nextSibling;while(o&&o[i]);g(D)!=o&&c.move(gb(D.clone),null,sd(F)),F=h(D)}else t=d.$new();t[v]=y,w&&(t[w]=u),t.$index=l,t.$first=0===l,t.$last=l===p-1,t.$middle=!(t.$first||t.$last),t.$odd=!(t.$even=0===(1&l)),D.scope||n(t,function(a){a[a.length++]=b.createComment(" end ngRepeat: "+x+" "),c.enter(a,null,sd(F)),F=a,D.scope=t,D.clone=a,G[D.id]=D})}A=G})}}}],jf=["$animate",function(a){return function(b,c,d){b.$watch(d.ngShow,function(b){a[T(b)?"removeClass":"addClass"](c,"ng-hide")})}}],kf=["$animate",function(a){return function(b,c,d){b.$watch(d.ngHide,function(b){a[T(b)?"addClass":"removeClass"](c,"ng-hide")})}}],lf=bd(function(a,b,c){a.$watch(c.ngStyle,function(a,c){c&&a!==c&&f(c,function(a,c){b.css(c,"")}),a&&b.css(a)},!0)}),mf=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,c,d,e){var g,h,i,j=d.ngSwitch||d.on,k=[];b.$watch(j,function(c){var j,l=k.length;if(l>0){if(i){for(j=0;l>j;j++)i[j].remove();i=null}for(i=[],j=0;l>j;j++){var m=h[j];k[j].$destroy(),i[j]=m,a.leave(m,function(){i.splice(j,1),0===i.length&&(i=null)})}}h=[],k=[],(g=e.cases["!"+c]||e.cases["?"])&&(b.$eval(d.change),f(g,function(c){var d=b.$new();k.push(d),c.transclude(d,function(b){var d=c.element;h.push(b),a.enter(b,d.parent(),d)})}))})}}}],nf=bd({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,b,c,d,e){d.cases["!"+c.ngSwitchWhen]=d.cases["!"+c.ngSwitchWhen]||[],d.cases["!"+c.ngSwitchWhen].push({transclude:e,element:b})}}),of=bd({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,b,c,d,e){d.cases["?"]=d.cases["?"]||[],d.cases["?"].push({transclude:e,element:b})}}),pf=bd({link:function(a,b,c,e,f){if(!f)throw d("ngTransclude")("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",U(b));f(function(a){b.empty(),b.append(a)})}}),qf=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,c){if("text/ng-template"==c.type){var d=c.id,e=b[0].text;a.put(d,e)}}}}],rf=d("ngOptions"),sf=q({terminal:!0}),tf=["$compile","$parse",function(a,d){var e=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,h={$setViewValue:o};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,b,c){var d,e,f=this,g={},i=h;f.databound=c.ngModel,f.init=function(a,b,c){i=a,d=b,e=c},f.addOption=function(b){eb(b,'"option value"'),g[b]=!0,i.$viewValue==b&&(a.val(b),e.parent()&&e.remove())},f.removeOption=function(a){this.hasOption(a)&&(delete g[a],i.$viewValue==a&&this.renderUnknownOption(a))},f.renderUnknownOption=function(b){var c="? "+Fb(b)+" ?";e.val(c),a.prepend(e),a.val(c),e.prop("selected",!0)},f.hasOption=function(a){return g.hasOwnProperty(a)},b.$on("$destroy",function(){f.renderUnknownOption=o})}],link:function(h,i,j,k){function l(a,b,c,d){c.$render=function(){var a=c.$viewValue;d.hasOption(a)?(z.parent()&&z.remove(),b.val(a),""===a&&o.prop("selected",!0)):r(a)&&o?b.val(""):d.renderUnknownOption(a)},b.on("change",function(){a.$apply(function(){z.parent()&&z.remove(),c.$setViewValue(b.val())})})}function m(a,b,c){var d;c.$render=function(){var a=new Gb(c.$viewValue);f(b.find("option"),function(b){b.selected=s(a.get(b.value))})},a.$watch(function(){L(d,c.$viewValue)||(d=J(c.$viewValue),c.$render())}),b.on("change",function(){a.$apply(function(){var a=[];f(b.find("option"),function(b){b.selected&&a.push(b.value)}),c.$setViewValue(a)})})}function n(b,f,h){function i(){var a,c,d,e,i,j,q,u,A,B,C,D,E,F,G,H={"":[]},I=[""],J=h.$modelValue,K=p(b)||[],L=m?g(K):K,M={},N=!1;if(t)if(r&&x(J)){N=new Gb([]);for(var O=0;O<J.length;O++)M[l]=J[O],N.put(r(b,M),J[O])}else N=new Gb(J);for(C=0;A=L.length,A>C;C++){if(q=C,m){if(q=L[C],"$"===q.charAt(0))continue;M[m]=q}if(M[l]=K[q],a=n(b,M)||"",(c=H[a])||(c=H[a]=[],I.push(a)),t)D=s(N.remove(r?r(b,M):o(b,M)));else{if(r){var P={};P[l]=J,D=r(b,P)===r(b,M)}else D=J===o(b,M);N=N||D}G=k(b,M),G=s(G)?G:"",c.push({id:r?r(b,M):m?L[C]:C,label:G,selected:D})}for(t||(v||null===J?H[""].unshift({id:"",label:"",selected:!N}):N||H[""].unshift({id:"?",label:"",selected:!0})),B=0,u=I.length;u>B;B++){for(a=I[B],c=H[a],z.length<=B?(e={element:y.clone().attr("label",a),label:c.label},i=[e],z.push(i),f.append(e.element)):(i=z[B],e=i[0],e.label!=a&&e.element.attr("label",e.label=a)),E=null,C=0,A=c.length;A>C;C++)d=c[C],(j=i[C+1])?(E=j.element,j.label!==d.label&&E.text(j.label=d.label),j.id!==d.id&&E.val(j.id=d.id),j.selected!==d.selected&&E.prop("selected",j.selected=d.selected)):(""===d.id&&v?F=v:(F=w.clone()).val(d.id).attr("selected",d.selected).text(d.label),i.push(j={element:F,label:d.label,id:d.id,selected:d.selected}),E?E.after(F):e.element.append(F),E=F);for(C++;i.length>C;)i.pop().element.remove()}for(;z.length>B;)z.pop()[0].element.remove()}var j;if(!(j=u.match(e)))throw rf("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",u,U(f));var k=d(j[2]||j[1]),l=j[4]||j[6],m=j[5],n=d(j[3]||""),o=d(j[2]?j[1]:l),p=d(j[7]),q=j[8],r=q?d(j[8]):null,z=[[{element:f,label:""}]];v&&(a(v)(b),v.removeClass("ng-scope"),v.remove()),f.empty(),f.on("change",function(){b.$apply(function(){var a,d,e,g,i,j,k,n,q,s=p(b)||[],u={};if(t){for(e=[],j=0,n=z.length;n>j;j++)for(a=z[j],i=1,k=a.length;k>i;i++)if((g=a[i].element)[0].selected){if(d=g.val(),m&&(u[m]=d),r)for(q=0;q<s.length&&(u[l]=s[q],r(b,u)!=d);q++);else u[l]=s[d];e.push(o(b,u))}}else{if(d=f.val(),"?"==d)e=c;else if(""===d)e=null;else if(r){for(q=0;q<s.length;q++)if(u[l]=s[q],r(b,u)==d){e=o(b,u);break}}else u[l]=s[d],m&&(u[m]=d),e=o(b,u);z[0].length>1&&z[0][1].id!==d&&(z[0][1].selected=!1)}h.$setViewValue(e)})}),h.$render=i,b.$watch(i)}if(k[1]){for(var o,p=k[0],q=k[1],t=j.multiple,u=j.ngOptions,v=!1,w=sd(b.createElement("option")),y=sd(b.createElement("optgroup")),z=w.clone(),A=0,B=i.children(),C=B.length;C>A;A++)if(""===B[A].value){o=v=B.eq(A);break}p.init(q,v,z),t&&(q.$isEmpty=function(a){return!a||0===a.length}),u?n(h,i,q):t?m(h,i,q):l(h,i,q,p)}}}}],uf=["$interpolate",function(a){var b={addOption:o,removeOption:o};return{restrict:"E",priority:100,compile:function(c,d){if(r(d.value)){var e=a(c.text(),!0);e||d.$set("value",c.text())}return function(a,c,d){var f="$selectController",g=c.parent(),h=g.data(f)||g.parent().data(f);h&&h.databound?c.prop("selected",!1):h=b,e?a.$watch(e,function(a,b){d.$set("value",a),a!==b&&h.removeOption(b),h.addOption(a)}):h.addOption(d.value),c.on("$destroy",function(){h.removeOption(d.value)})}}}}],vf=q({restrict:"E",terminal:!0});return a.angular.bootstrap?void console.log("WARNING: Tried to load angular more than once."):(bb(),ib(Ad),void sd(b).ready(function(){$(b,_)}))}(window,document),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>'),function(){function a(b,d){function f(a){if(f[a]!==q)return f[a];var b;if("bug-string-char-index"==a)b="a"!="a"[0];else if("json"==a)b=f("json-stringify")&&f("json-parse");else{var c,e='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==a){var i=d.stringify,k="function"==typeof i&&t;if(k){(c=function(){return 1}).toJSON=c;try{k="0"===i(0)&&"0"===i(new g)&&'""'==i(new h)&&i(s)===q&&i(q)===q&&i()===q&&"1"===i(c)&&"[1]"==i([c])&&"[null]"==i([q])&&"null"==i(null)&&"[null,null,null]"==i([q,s,null])&&i({a:[c,!0,!1,null,"\x00\b\n\f\r	"]})==e&&"1"===i(null,c)&&"[\n 1,\n 2\n]"==i([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==i(new j(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==i(new j(864e13))&&'"-000001-01-01T00:00:00.000Z"'==i(new j(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==i(new j(-1))}catch(l){k=!1}}b=k}if("json-parse"==a){var m=d.parse;if("function"==typeof m)try{if(0===m("0")&&!m(!1)){c=m(e);var n=5==c.a.length&&1===c.a[0];if(n){try{n=!m('"	"')}catch(l){}if(n)try{n=1!==m("01")}catch(l){}if(n)try{n=1!==m("1.")}catch(l){}}}}catch(l){n=!1}b=n}}return f[a]=!!b}b||(b=e.Object()),d||(d=e.Object());var g=b.Number||e.Number,h=b.String||e.String,i=b.Object||e.Object,j=b.Date||e.Date,k=b.SyntaxError||e.SyntaxError,l=b.TypeError||e.TypeError,m=b.Math||e.Math,n=b.JSON||e.JSON;"object"==typeof n&&n&&(d.stringify=n.stringify,d.parse=n.parse);var o,p,q,r=i.prototype,s=r.toString,t=new j(-0xc782b5b800cec);try{t=-109252==t.getUTCFullYear()&&0===t.getUTCMonth()&&1===t.getUTCDate()&&10==t.getUTCHours()&&37==t.getUTCMinutes()&&6==t.getUTCSeconds()&&708==t.getUTCMilliseconds()}catch(u){}if(!f("json")){var v="[object Function]",w="[object Date]",x="[object Number]",y="[object String]",z="[object Array]",A="[object Boolean]",B=f("bug-string-char-index");if(!t)var C=m.floor,D=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,b){return D[b]+365*(a-1970)+C((a-1969+(b=+(b>1)))/4)-C((a-1901+b)/100)+C((a-1601+b)/400)};if((o=r.hasOwnProperty)||(o=function(a){var b,c={};return(c.__proto__=null,c.__proto__={toString:1},c).toString!=s?o=function(a){var b=this.__proto__,c=a in(this.__proto__=null,this);return this.__proto__=b,c}:(b=c.constructor,o=function(a){var c=(this.constructor||b).prototype;return a in this&&!(a in c&&this[a]===c[a])}),c=null,o.call(this,a)}),p=function(a,b){var d,e,f,g=0;(d=function(){this.valueOf=0}).prototype.valueOf=0,e=new d;for(f in e)o.call(e,f)&&g++;return d=e=null,g?p=2==g?function(a,b){var c,d={},e=s.call(a)==v;for(c in a)e&&"prototype"==c||o.call(d,c)||!(d[c]=1)||!o.call(a,c)||b(c)}:function(a,b){var c,d,e=s.call(a)==v;for(c in a)e&&"prototype"==c||!o.call(a,c)||(d="constructor"===c)||b(c);(d||o.call(a,c="constructor"))&&b(c)}:(e=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],p=function(a,b){var d,f,g=s.call(a)==v,h=!g&&"function"!=typeof a.constructor&&c[typeof a.hasOwnProperty]&&a.hasOwnProperty||o;for(d in a)g&&"prototype"==d||!h.call(a,d)||b(d);for(f=e.length;d=e[--f];h.call(a,d)&&b(d));}),p(a,b)},!f("json-stringify")){var F={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},G="000000",H=function(a,b){return(G+(b||0)).slice(-a)},I="\\u00",J=function(a){for(var b='"',c=0,d=a.length,e=!B||d>10,f=e&&(B?a.split(""):a);d>c;c++){var g=a.charCodeAt(c);switch(g){case 8:case 9:case 10:case 12:case 13:case 34:case 92:b+=F[g];break;default:if(32>g){b+=I+H(2,g.toString(16));break}b+=e?f[c]:a.charAt(c)}}return b+'"'},K=function(a,b,c,d,e,f,g){var h,i,j,k,m,n,r,t,u,v,B,D,F,G,I,L;try{h=b[a]}catch(M){}if("object"==typeof h&&h)if(i=s.call(h),i!=w||o.call(h,"toJSON"))"function"==typeof h.toJSON&&(i!=x&&i!=y&&i!=z||o.call(h,"toJSON"))&&(h=h.toJSON(a));else if(h>-1/0&&1/0>h){if(E){for(m=C(h/864e5),j=C(m/365.2425)+1970-1;E(j+1,0)<=m;j++);for(k=C((m-E(j,0))/30.42);E(j,k+1)<=m;k++);m=1+m-E(j,k),n=(h%864e5+864e5)%864e5,r=C(n/36e5)%24,t=C(n/6e4)%60,u=C(n/1e3)%60,v=n%1e3}else j=h.getUTCFullYear(),k=h.getUTCMonth(),m=h.getUTCDate(),r=h.getUTCHours(),t=h.getUTCMinutes(),u=h.getUTCSeconds(),v=h.getUTCMilliseconds();h=(0>=j||j>=1e4?(0>j?"-":"+")+H(6,0>j?-j:j):H(4,j))+"-"+H(2,k+1)+"-"+H(2,m)+"T"+H(2,r)+":"+H(2,t)+":"+H(2,u)+"."+H(3,v)+"Z"}else h=null;if(c&&(h=c.call(b,a,h)),null===h)return"null";if(i=s.call(h),i==A)return""+h;if(i==x)return h>-1/0&&1/0>h?""+h:"null";if(i==y)return J(""+h);if("object"==typeof h){for(G=g.length;G--;)if(g[G]===h)throw l();if(g.push(h),B=[],I=f,f+=e,i==z){for(F=0,G=h.length;G>F;F++)D=K(F,h,c,d,e,f,g),B.push(D===q?"null":D);L=B.length?e?"[\n"+f+B.join(",\n"+f)+"\n"+I+"]":"["+B.join(",")+"]":"[]"}else p(d||h,function(a){var b=K(a,h,c,d,e,f,g);b!==q&&B.push(J(a)+":"+(e?" ":"")+b)}),L=B.length?e?"{\n"+f+B.join(",\n"+f)+"\n"+I+"}":"{"+B.join(",")+"}":"{}";return g.pop(),L}};d.stringify=function(a,b,d){var e,f,g,h;if(c[typeof b]&&b)if((h=s.call(b))==v)f=b;else if(h==z){g={};for(var i,j=0,k=b.length;k>j;i=b[j++],h=s.call(i),(h==y||h==x)&&(g[i]=1));}if(d)if((h=s.call(d))==x){if((d-=d%1)>0)for(e="",d>10&&(d=10);e.length<d;e+=" ");}else h==y&&(e=d.length<=10?d:d.slice(0,10));return K("",(i={},i[""]=a,i),f,g,e,"",[])}}if(!f("json-parse")){var L,M,N=h.fromCharCode,O={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},P=function(){throw L=M=null,k()},Q=function(){for(var a,b,c,d,e,f=M,g=f.length;g>L;)switch(e=f.charCodeAt(L)){case 9:case 10:case 13:case 32:L++;break;case 123:case 125:case 91:case 93:case 58:case 44:return a=B?f.charAt(L):f[L],L++,a;case 34:for(a="@",L++;g>L;)if(e=f.charCodeAt(L),32>e)P();else if(92==e)switch(e=f.charCodeAt(++L)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:a+=O[e],L++;break;case 117:for(b=++L,c=L+4;c>L;L++)e=f.charCodeAt(L),e>=48&&57>=e||e>=97&&102>=e||e>=65&&70>=e||P();a+=N("0x"+f.slice(b,L));break;default:P()}else{if(34==e)break;for(e=f.charCodeAt(L),b=L;e>=32&&92!=e&&34!=e;)e=f.charCodeAt(++L);a+=f.slice(b,L)}if(34==f.charCodeAt(L))return L++,a;P();default:if(b=L,45==e&&(d=!0,e=f.charCodeAt(++L)),e>=48&&57>=e){for(48==e&&(e=f.charCodeAt(L+1),e>=48&&57>=e)&&P(),d=!1;g>L&&(e=f.charCodeAt(L),e>=48&&57>=e);L++);if(46==f.charCodeAt(L)){for(c=++L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}if(e=f.charCodeAt(L),101==e||69==e){for(e=f.charCodeAt(++L),(43==e||45==e)&&L++,c=L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}return+f.slice(b,L)}if(d&&P(),"true"==f.slice(L,L+4))return L+=4,!0;if("false"==f.slice(L,L+5))return L+=5,!1;if("null"==f.slice(L,L+4))return L+=4,null;P()}return"$"},R=function(a){var b,c;if("$"==a&&P(),"string"==typeof a){if("@"==(B?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(b=[];a=Q(),"]"!=a;c||(c=!0))c&&(","==a?(a=Q(),"]"==a&&P()):P()),","==a&&P(),b.push(R(a));return b}if("{"==a){for(b={};a=Q(),"}"!=a;c||(c=!0))c&&(","==a?(a=Q(),"}"==a&&P()):P()),(","==a||"string"!=typeof a||"@"!=(B?a.charAt(0):a[0])||":"!=Q())&&P(),b[a.slice(1)]=R(Q());return b}P()}return a},S=function(a,b,c){var d=T(a,b,c);d===q?delete a[b]:a[b]=d},T=function(a,b,c){var d,e=a[b];if("object"==typeof e&&e)if(s.call(e)==z)for(d=e.length;d--;)S(e,d,c);else p(e,function(a){S(e,a,c)});return c.call(a,b,e)};d.parse=function(a,b){var c,d;return L=0,M=""+a,c=R(Q()),"$"!=Q()&&P(),L=M=null,b&&s.call(b)==v?T((d={},d[""]=c,d),"",b):c}}}return d.runInContext=a,d}var b="function"==typeof define&&define.amd,c={"function":!0,object:!0},d=c[typeof exports]&&exports&&!exports.nodeType&&exports,e=c[typeof window]&&window||this,f=d&&c[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!f||f.global!==f&&f.window!==f&&f.self!==f||(e=f),d&&!b)a(e,d);else{var g=e.JSON,h=e.JSON3,i=!1,j=a(e,e.JSON3={noConflict:function(){return i||(i=!0,e.JSON=g,e.JSON3=h,g=h=null),j}});e.JSON={parse:j.parse,stringify:j.stringify}}b&&define(function(){return j})}.call(this),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()
};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),function(a,b){"use strict";function c(){this.$get=["$$sanitizeUri",function(a){return function(b){var c=[];return f(b,i(c,function(b,c){return!/^unsafe/.test(a(b,c))})),c.join("")}}]}function d(a){var c=[],d=i(c,b.noop);return d.chars(a),c.join("")}function e(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}function f(a,c){function d(a,d,f,h){if(d=b.lowercase(d),x[d])for(;s.last()&&y[s.last()];)e("",s.last());w[d]&&s.last()==d&&e("",d),h=t[d]||!!h,h||s.push(d);var i={};f.replace(m,function(a,b,c,d,e){var f=c||d||e||"";i[b]=g(f)}),c.start&&c.start(d,i,h)}function e(a,d){var e,f=0;if(d=b.lowercase(d))for(f=s.length-1;f>=0&&s[f]!=d;f--);if(f>=0){for(e=s.length-1;e>=f;e--)c.end&&c.end(s[e]);s.length=f}}var f,h,i,s=[],u=a;for(s.last=function(){return s[s.length-1]};a;){if(h=!0,s.last()&&z[s.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+s.last()+"[^>]*>","i"),function(a,b){return b=b.replace(p,"$1").replace(r,"$1"),c.chars&&c.chars(g(b)),""}),e("",s.last());else if(0===a.indexOf("<!--")?(f=a.indexOf("--",4),f>=0&&a.lastIndexOf("-->",f)===f&&(c.comment&&c.comment(a.substring(4,f)),a=a.substring(f+3),h=!1)):q.test(a)?(i=a.match(q),i&&(a=a.replace(i[0],""),h=!1)):o.test(a)?(i=a.match(l),i&&(a=a.substring(i[0].length),i[0].replace(l,e),h=!1)):n.test(a)&&(i=a.match(k),i&&(a=a.substring(i[0].length),i[0].replace(k,d),h=!1)),h){f=a.indexOf("<");var v=0>f?a:a.substring(0,f);a=0>f?"":a.substring(f),c.chars&&c.chars(g(v))}if(a==u)throw j("badparse","The sanitizer was unable to parse the following block of html: {0}",a);u=a}e()}function g(a){if(!a)return"";var b=E.exec(a),c=b[1],d=b[3],e=b[2];return e&&(D.innerHTML=e.replace(/</g,"&lt;"),e="textContent"in D?D.textContent:D.innerText),c+e+d}function h(a){return a.replace(/&/g,"&amp;").replace(s,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i(a,c){var d=!1,e=b.bind(a,a.push);return{start:function(a,f,g){a=b.lowercase(a),!d&&z[a]&&(d=a),d||A[a]!==!0||(e("<"),e(a),b.forEach(f,function(d,f){var g=b.lowercase(f),i="img"===a&&"src"===g||"background"===g;C[g]!==!0||B[g]===!0&&!c(d,i)||(e(" "),e(f),e('="'),e(h(d)),e('"'))}),e(g?"/>":">"))},end:function(a){a=b.lowercase(a),d||A[a]!==!0||(e("</"),e(a),e(">")),a==d&&(d=!1)},chars:function(a){d||e(h(a))}}}var j=b.$$minErr("$sanitize"),k=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,l=/^<\s*\/\s*([\w:-]+)[^>]*>/,m=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,n=/^</,o=/^<\s*\//,p=/<!--(.*?)-->/g,q=/<!DOCTYPE([^>]*?)>/i,r=/<!\[CDATA\[(.*?)]]>/g,s=/([^\#-~| |!])/g,t=e("area,br,col,hr,img,wbr"),u=e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),v=e("rp,rt"),w=b.extend({},v,u),x=b.extend({},u,e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),y=b.extend({},v,e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),z=e("script,style"),A=b.extend({},t,x,y,w),B=e("background,cite,href,longdesc,src,usemap"),C=b.extend({},B,e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),D=document.createElement("pre"),E=/^(\s*)([\s\S]*?)(\s*)$/;b.module("ngSanitize",[]).provider("$sanitize",c),b.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,e=/^mailto:/;return function(f,g){function h(a){a&&n.push(d(a))}function i(a,c){n.push("<a "),b.isDefined(g)&&(n.push('target="'),n.push(g),n.push('" ')),n.push('href="'),n.push(a),n.push('">'),h(c),n.push("</a>")}if(!f)return f;for(var j,k,l,m=f,n=[];j=m.match(c);)k=j[0],j[2]==j[3]&&(k="mailto:"+k),l=j.index,h(m.substr(0,l)),i(k,j[0].replace(e,"")),m=m.substring(l+j[0].length);return h(m),a(n.join(""))}}])}(window,window.angular);var hinclude;!function(){"use strict";hinclude={classprefix:"include_",set_content_async:function(a,b){4===b.readyState&&((200===b.status||304===b.status)&&(a.innerHTML=b.responseText),a.className=hinclude.classprefix+b.status)},buffer:[],set_content_buffered:function(a,b){4===b.readyState&&(hinclude.buffer.push([a,b]),hinclude.outstanding-=1,0===hinclude.outstanding&&hinclude.show_buffered_content())},show_buffered_content:function(){for(;hinclude.buffer.length>0;){var a=hinclude.buffer.pop();(200===a[1].status||304===a[1].status)&&(a[0].innerHTML=a[1].responseText),a[0].className=hinclude.classprefix+a[1].status}},outstanding:0,includes:[],run:function(){var a=0,b=this.get_meta("include_mode","buffered"),c=function(){};if(this.includes=document.getElementsByTagName("hx:include"),0===this.includes.length&&(this.includes=document.getElementsByTagName("include")),"async"===b)c=this.set_content_async;else if("buffered"===b){c=this.set_content_buffered;var d=1e3*this.get_meta("include_timeout",2.5);setTimeout(hinclude.show_buffered_content,d)}for(a;a<this.includes.length;a+=1)this.include(this.includes[a],this.includes[a].getAttribute("src"),c)},include:function(a,b,c){var d=b.substring(0,b.indexOf(":"));if("data"===d.toLowerCase()){var e=decodeURIComponent(b.substring(b.indexOf(",")+1,b.length));a.innerHTML=e}else{var f=!1;if(window.XMLHttpRequest)try{f=new XMLHttpRequest}catch(g){f=!1}else if(window.ActiveXObject)try{f=new ActiveXObject("Microsoft.XMLHTTP")}catch(h){f=!1}if(f){this.outstanding+=1,f.onreadystatechange=function(){c(a,f)};try{f.open("GET",b,!0),f.send("")}catch(i){this.outstanding-=1,alert("Include error: "+b+" ("+i+")")}}}},refresh:function(a){var b=0,c=(this.get_meta("include_mode","buffered"),function(){});for(c=this.set_content_buffered,b;b<this.includes.length;b+=1)this.includes[b].getAttribute("id")===a&&this.include(this.includes[b],this.includes[b].getAttribute("src"),c)},get_meta:function(a,b){var c=0,d=document.getElementsByTagName("meta");for(c;c<d.length;c+=1){var e=d[c].getAttribute("name");if(e===a)return d[c].getAttribute("content")}return b},addDOMLoadEvent:function(a){if(!window.__load_events){var b=function(){var a=0;if(!hinclude.addDOMLoadEvent.done){for(hinclude.addDOMLoadEvent.done=!0,window.__load_timer&&(clearInterval(window.__load_timer),window.__load_timer=null),a;a<window.__load_events.length;a+=1)window.__load_events[a]();window.__load_events=null}};document.addEventListener&&document.addEventListener("DOMContentLoaded",b,!1),/WebKit/i.test(navigator.userAgent)&&(window.__load_timer=setInterval(function(){/loaded|complete/.test(document.readyState)&&b()},10)),window.onload=b,window.__load_events=[]}window.__load_events.push(a)}},hinclude.addDOMLoadEvent(function(){hinclude.run()})}(),function(a,b){"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.Handlebars=a.Handlebars||b()}(this,function(){var a=function(){"use strict";function a(a){this.string=a}var b;return a.prototype.toString=function(){return""+this.string},b=a}(),b=function(a){"use strict";function b(a){return i[a]}function c(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function d(a){return a instanceof h?a.toString():null==a?"":a?(a=""+a,k.test(a)?a.replace(j,b):a):a+""}function e(a){return a||0===a?n(a)&&0===a.length?!0:!1:!0}function f(a,b){return(a?a+".":"")+b}var g={},h=a,i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},j=/[&<>"'`]/g,k=/[&<>"'`]/;g.extend=c;var l=Object.prototype.toString;g.toString=l;var m=function(a){return"function"==typeof a};m(/x/)&&(m=function(a){return"function"==typeof a&&"[object Function]"===l.call(a)});var m;g.isFunction=m;var n=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===l.call(a):!1};return g.isArray=n,g.escapeExpression=d,g.isEmpty=e,g.appendContextPath=f,g}(a),c=function(){"use strict";function a(a,b){var d;b&&b.firstLine&&(d=b.firstLine,a+=" - "+d+":"+b.firstColumn);for(var e=Error.prototype.constructor.call(this,a),f=0;f<c.length;f++)this[c[f]]=e[c[f]];d&&(this.lineNumber=d,this.column=b.firstColumn)}var b,c=["description","fileName","lineNumber","message","name","number","stack"];return a.prototype=new Error,b=a}(),d=function(a,b){"use strict";function c(a,b){this.helpers=a||{},this.partials=b||{},d(this)}function d(a){a.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new g("Missing helper: '"+arguments[arguments.length-1].name+"'")}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse,e=c.fn;if(b===!0)return e(this);if(b===!1||null==b)return d(this);if(k(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):d(this);
if(c.data&&c.ids){var g=q(c.data);g.contextPath=f.appendContextPath(c.data.contextPath,c.name),c={data:g}}return e(b,c)}),a.registerHelper("each",function(a,b){if(!b)throw new g("Must pass iterator to #each");var c,d,e=b.fn,h=b.inverse,i=0,j="";if(b.data&&b.ids&&(d=f.appendContextPath(b.data.contextPath,b.ids[0])+"."),l(a)&&(a=a.call(this)),b.data&&(c=q(b.data)),a&&"object"==typeof a)if(k(a))for(var m=a.length;m>i;i++)c&&(c.index=i,c.first=0===i,c.last=i===a.length-1,d&&(c.contextPath=d+i)),j+=e(a[i],{data:c});else for(var n in a)a.hasOwnProperty(n)&&(c&&(c.key=n,c.index=i,c.first=0===i,d&&(c.contextPath=d+n)),j+=e(a[n],{data:c}),i++);return 0===i&&(j=h(this)),j}),a.registerHelper("if",function(a,b){return l(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||f.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){l(a)&&(a=a.call(this));var c=b.fn;if(f.isEmpty(a))return b.inverse(this);if(b.data&&b.ids){var d=q(b.data);d.contextPath=f.appendContextPath(b.data.contextPath,b.ids[0]),b={data:d}}return c(a,b)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)}),a.registerHelper("lookup",function(a,b){return a&&a[b]})}var e={},f=a,g=b,h="2.0.0";e.VERSION=h;var i=6;e.COMPILER_REVISION=i;var j={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};e.REVISION_CHANGES=j;var k=f.isArray,l=f.isFunction,m=f.toString,n="[object Object]";e.HandlebarsEnvironment=c,c.prototype={constructor:c,logger:o,log:p,registerHelper:function(a,b){if(m.call(a)===n){if(b)throw new g("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){m.call(a)===n?f.extend(this.partials,a):this.partials[a]=b},unregisterPartial:function(a){delete this.partials[a]}};var o={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(o.level<=a){var c=o.methodMap[a];"undefined"!=typeof console&&console[c]&&console[c].call(console,b)}}};e.logger=o;var p=o.log;e.log=p;var q=function(a){var b=f.extend({},a);return b._parent=a,b};return e.createFrame=q,e}(b,c),e=function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=m;if(b!==c){if(c>b){var d=n[c],e=n[b];throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){if(!b)throw new l("No environment passed to template");if(!a||!a.main)throw new l("Unknown template object: "+typeof a);b.VM.checkRevision(a.compiler);var c=function(c,d,e,f,g,h,i,j,m){g&&(f=k.extend({},f,g));var n=b.VM.invokePartial.call(this,c,e,f,h,i,j,m);if(null==n&&b.compile){var o={helpers:h,partials:i,data:j,depths:m};i[e]=b.compile(c,{data:void 0!==j,compat:a.compat},b),n=i[e](f,o)}if(null!=n){if(d){for(var p=n.split("\n"),q=0,r=p.length;r>q&&(p[q]||q+1!==r);q++)p[q]=d+p[q];n=p.join("\n")}return n}throw new l("The partial "+e+" could not be compiled when running in runtime-only mode")},d={lookup:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:k.escapeExpression,invokePartial:c,fn:function(b){return a[b]},programs:[],program:function(a,b,c){var d=this.programs[a],e=this.fn(a);return b||c?d=f(this,a,e,b,c):d||(d=this.programs[a]=f(this,a,e)),d},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=k.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler},e=function(b,c){c=c||{};var f=c.data;e._setup(c),!c.partial&&a.useData&&(f=i(b,f));var g;return a.useDepths&&(g=c.depths?[b].concat(c.depths):[b]),a.main.call(d,b,d.helpers,d.partials,f,g)};return e.isTop=!0,e._setup=function(c){c.partial?(d.helpers=c.helpers,d.partials=c.partials):(d.helpers=d.merge(c.helpers,b.helpers),a.usePartial&&(d.partials=d.merge(c.partials,b.partials)))},e._child=function(b,c,e){if(a.useDepths&&!e)throw new l("must pass parent depths");return f(d,b,a[b],c,e)},e}function f(a,b,c,d,e){var f=function(b,f){return f=f||{},c.call(a,b,a.helpers,a.partials,f.data||d,e&&[b].concat(e))};return f.program=b,f.depth=e?e.length:0,f}function g(a,b,c,d,e,f,g){var h={partial:!0,helpers:d,partials:e,data:f,depths:g};if(void 0===a)throw new l("The partial "+b+" could not be found");return a instanceof Function?a(c,h):void 0}function h(){return""}function i(a,b){return b&&"root"in b||(b=b?o(b):{},b.root=a),b}var j={},k=a,l=b,m=c.COMPILER_REVISION,n=c.REVISION_CHANGES,o=c.createFrame;return j.checkRevision=d,j.template=e,j.program=f,j.invokePartial=g,j.noop=h,j}(b,c,d),f=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c,j=d,k=e,l=function(){var a=new g.HandlebarsEnvironment;return j.extend(a,g),a.SafeString=h,a.Exception=i,a.Utils=j,a.escapeExpression=j.escapeExpression,a.VM=k,a.template=function(b){return k.template(b,a)},a},m=l();return m.create=l,m["default"]=m,f=m}(d,a,c,b,e),g=function(a){"use strict";function b(a){a=a||{},this.firstLine=a.first_line,this.firstColumn=a.first_column,this.lastColumn=a.last_column,this.lastLine=a.last_line}var c,d=a,e={ProgramNode:function(a,c,d){b.call(this,d),this.type="program",this.statements=a,this.strip=c},MustacheNode:function(a,c,d,f,g){if(b.call(this,g),this.type="mustache",this.strip=f,null!=d&&d.charAt){var h=d.charAt(3)||d.charAt(2);this.escaped="{"!==h&&"&"!==h}else this.escaped=!!d;this.sexpr=a instanceof e.SexprNode?a:new e.SexprNode(a,c),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(a,c,d){b.call(this,d),this.type="sexpr",this.hash=c;var e=this.id=a[0],f=this.params=a.slice(1);this.isHelper=!(!f.length&&!c),this.eligibleHelper=this.isHelper||e.isSimple},PartialNode:function(a,c,d,e,f){b.call(this,f),this.type="partial",this.partialName=a,this.context=c,this.hash=d,this.strip=e,this.strip.inlineStandalone=!0},BlockNode:function(a,c,d,e,f){b.call(this,f),this.type="block",this.mustache=a,this.program=c,this.inverse=d,this.strip=e,d&&!c&&(this.isInverse=!0)},RawBlockNode:function(a,c,f,g){if(b.call(this,g),a.sexpr.id.original!==f)throw new d(a.sexpr.id.original+" doesn't match "+f,this);c=new e.ContentNode(c,g),this.type="block",this.mustache=a,this.program=new e.ProgramNode([c],{},g)},ContentNode:function(a,c){b.call(this,c),this.type="content",this.original=this.string=a},HashNode:function(a,c){b.call(this,c),this.type="hash",this.pairs=a},IdNode:function(a,c){b.call(this,c),this.type="ID";for(var e="",f=[],g=0,h="",i=0,j=a.length;j>i;i++){var k=a[i].part;if(e+=(a[i].separator||"")+k,".."===k||"."===k||"this"===k){if(f.length>0)throw new d("Invalid path: "+e,this);".."===k?(g++,h+="../"):this.isScoped=!0}else f.push(k)}this.original=e,this.parts=f,this.string=f.join("."),this.depth=g,this.idName=h+this.string,this.isSimple=1===a.length&&!this.isScoped&&0===g,this.stringModeValue=this.string},PartialNameNode:function(a,c){b.call(this,c),this.type="PARTIAL_NAME",this.name=a.original},DataNode:function(a,c){b.call(this,c),this.type="DATA",this.id=a,this.stringModeValue=a.stringModeValue,this.idName="@"+a.stringModeValue},StringNode:function(a,c){b.call(this,c),this.type="STRING",this.original=this.string=this.stringModeValue=a},NumberNode:function(a,c){b.call(this,c),this.type="NUMBER",this.original=this.number=a,this.stringModeValue=Number(a)},BooleanNode:function(a,c){b.call(this,c),this.type="BOOLEAN",this.bool=a,this.stringModeValue="true"===a},CommentNode:function(a,c){b.call(this,c),this.type="comment",this.comment=a,this.strip={inlineStandalone:!0}}};return c=e}(c),h=function(){"use strict";var a,b=function(){function a(){this.yy={}}var b={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(a,b,c,d,e,f){var g=f.length-1;switch(e){case 1:return d.prepareProgram(f[g-1].statements,!0),f[g-1];case 2:this.$=new d.ProgramNode(d.prepareProgram(f[g]),{},this._$);break;case 3:this.$=f[g];break;case 4:this.$=f[g];break;case 5:this.$=f[g];break;case 6:this.$=f[g];break;case 7:this.$=new d.ContentNode(f[g],this._$);break;case 8:this.$=new d.CommentNode(f[g],this._$);break;case 9:this.$=new d.RawBlockNode(f[g-2],f[g-1],f[g],this._$);break;case 10:this.$=new d.MustacheNode(f[g-1],null,"","",this._$);break;case 11:this.$=d.prepareBlock(f[g-3],f[g-2],f[g-1],f[g],!1,this._$);break;case 12:this.$=d.prepareBlock(f[g-3],f[g-2],f[g-1],f[g],!0,this._$);break;case 13:this.$=new d.MustacheNode(f[g-1],null,f[g-2],d.stripFlags(f[g-2],f[g]),this._$);break;case 14:this.$=new d.MustacheNode(f[g-1],null,f[g-2],d.stripFlags(f[g-2],f[g]),this._$);break;case 15:this.$={strip:d.stripFlags(f[g-1],f[g-1]),program:f[g]};break;case 16:this.$={path:f[g-1],strip:d.stripFlags(f[g-2],f[g])};break;case 17:this.$=new d.MustacheNode(f[g-1],null,f[g-2],d.stripFlags(f[g-2],f[g]),this._$);break;case 18:this.$=new d.MustacheNode(f[g-1],null,f[g-2],d.stripFlags(f[g-2],f[g]),this._$);break;case 19:this.$=new d.PartialNode(f[g-3],f[g-2],f[g-1],d.stripFlags(f[g-4],f[g]),this._$);break;case 20:this.$=new d.PartialNode(f[g-2],void 0,f[g-1],d.stripFlags(f[g-3],f[g]),this._$);break;case 21:this.$=new d.SexprNode([f[g-2]].concat(f[g-1]),f[g],this._$);break;case 22:this.$=new d.SexprNode([f[g]],null,this._$);break;case 23:this.$=f[g];break;case 24:this.$=new d.StringNode(f[g],this._$);break;case 25:this.$=new d.NumberNode(f[g],this._$);break;case 26:this.$=new d.BooleanNode(f[g],this._$);break;case 27:this.$=f[g];break;case 28:f[g-1].isHelper=!0,this.$=f[g-1];break;case 29:this.$=new d.HashNode(f[g],this._$);break;case 30:this.$=[f[g-2],f[g]];break;case 31:this.$=new d.PartialNameNode(f[g],this._$);break;case 32:this.$=new d.PartialNameNode(new d.StringNode(f[g],this._$),this._$);break;case 33:this.$=new d.PartialNameNode(new d.NumberNode(f[g],this._$));break;case 34:this.$=new d.DataNode(f[g],this._$);break;case 35:this.$=new d.IdNode(f[g],this._$);break;case 36:f[g-2].push({part:f[g],separator:f[g-1]}),this.$=f[g-2];break;case 37:this.$=[{part:f[g]}];break;case 38:this.$=[];break;case 39:f[g-1].push(f[g]);break;case 48:this.$=[];break;case 49:f[g-1].push(f[g]);break;case 52:this.$=[f[g]];break;case 53:f[g-1].push(f[g])}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(a){throw new Error(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||1,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;f.push(l);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,o,p,q,r,s,t,u,v,w={};;){if(p=d[d.length-1],this.defaultActions[p]?q=this.defaultActions[p]:((null===n||"undefined"==typeof n)&&(n=b()),q=g[p]&&g[p][n]),"undefined"==typeof q||!q.length||!q[0]){var x="";if(!k){v=[];for(s in g[p])this.terminals_[s]&&s>2&&v.push("'"+this.terminals_[s]+"'");x=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[n]||n)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:l,expected:v})}}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:d.push(n),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(q[1]),n=null,o?(n=o,o=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,l=this.lexer.yylloc,k>0&&k--);break;case 2:if(t=this.productions_[q[1]][1],w.$=e[e.length-t],w._$={first_line:f[f.length-(t||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(t||1)].first_column,last_column:f[f.length-1].last_column},m&&(w._$.range=[f[f.length-(t||1)].range[0],f[f.length-1].range[1]]),r=this.performAction.call(w,h,j,i,this.yy,q[1],e,f),"undefined"!=typeof r)return r;t&&(d=d.slice(0,-1*t*2),e=e.slice(0,-1*t),f=f.slice(0,-1*t)),d.push(this.productions_[q[1]][0]),e.push(w.$),f.push(w._$),u=g[d[d.length-2]][d[d.length-1]],d.push(u);break;case 3:return!0}}return!0}},c=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),g=0;g<f.length&&(c=this._input.match(this.rules[f[g]]),!c||b&&!(c[0].length>b[0].length)||(b=c,d=g,this.options.flex));g++);return b?(e=b[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,f[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a?a:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!=typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return a.options={},a.performAction=function(a,b,c,d){function e(a,c){return b.yytext=b.yytext.substr(a,b.yyleng-c)}switch(c){case 0:if("\\\\"===b.yytext.slice(-2)?(e(0,1),this.begin("mu")):"\\"===b.yytext.slice(-1)?(e(0,1),this.begin("emu")):this.begin("mu"),b.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;case 3:return b.yytext=b.yytext.substr(5,b.yyleng-9),this.popState(),15;case 4:return 12;case 5:return e(0,4),this.popState(),13;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;case 14:return this.popState(),28;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return e(3,5),this.popState(),13;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;case 28:return this.popState(),25;case 29:return b.yytext=e(1,2).replace(/\\"/g,'"'),42;case 30:return b.yytext=e(1,2).replace(/\\'/g,"'"),42;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return b.yytext=e(1,2),50;case 37:return"INVALID";case 38:return 5}},a.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],a.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},a}();return b.lexer=c,a.prototype=b,b.Parser=a,new a}();return a=b}(),i=function(a){"use strict";function b(a,b){return{left:"~"===a.charAt(2),right:"~"===b.charAt(b.length-3)}}function c(a,b,c,d,i,k){if(a.sexpr.id.original!==d.path.original)throw new j(a.sexpr.id.original+" doesn't match "+d.path.original,a);var l=c&&c.program,m={left:a.strip.left,right:d.strip.right,openStandalone:f(b.statements),closeStandalone:e((l||b).statements)};if(a.strip.right&&g(b.statements,null,!0),l){var n=c.strip;n.left&&h(b.statements,null,!0),n.right&&g(l.statements,null,!0),d.strip.left&&h(l.statements,null,!0),e(b.statements)&&f(l.statements)&&(h(b.statements),g(l.statements))}else d.strip.left&&h(b.statements,null,!0);return i?new this.BlockNode(a,l,b,m,k):new this.BlockNode(a,b,l,m,k)}function d(a,b){for(var c=0,d=a.length;d>c;c++){var i=a[c],j=i.strip;if(j){var k=e(a,c,b,"partial"===i.type),l=f(a,c,b),m=j.openStandalone&&k,n=j.closeStandalone&&l,o=j.inlineStandalone&&k&&l;j.right&&g(a,c,!0),j.left&&h(a,c,!0),o&&(g(a,c),h(a,c)&&"partial"===i.type&&(i.indent=/([ \t]+$)/.exec(a[c-1].original)?RegExp.$1:"")),m&&(g((i.program||i.inverse).statements),h(a,c)),n&&(g(a,c),h((i.inverse||i.program).statements))}}return a}function e(a,b,c){void 0===b&&(b=a.length);var d=a[b-1],e=a[b-2];return d?"content"===d.type?(e||!c?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(d.original):void 0:c}function f(a,b,c){void 0===b&&(b=-1);var d=a[b+1],e=a[b+2];return d?"content"===d.type?(e||!c?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(d.original):void 0:c}function g(a,b,c){var d=a[null==b?0:b+1];if(d&&"content"===d.type&&(c||!d.rightStripped)){var e=d.string;d.string=d.string.replace(c?/^\s+/:/^[ \t]*\r?\n?/,""),d.rightStripped=d.string!==e}}function h(a,b,c){var d=a[null==b?a.length-1:b-1];if(d&&"content"===d.type&&(c||!d.leftStripped)){var e=d.string;return d.string=d.string.replace(c?/\s+$/:/[ \t]+$/,""),d.leftStripped=d.string!==e,d.leftStripped}}var i={},j=a;return i.stripFlags=b,i.prepareBlock=c,i.prepareProgram=d,i}(c),j=function(a,b,c,d){"use strict";function e(a){return a.constructor===h.ProgramNode?a:(g.yy=k,g.parse(a))}var f={},g=a,h=b,i=c,j=d.extend;f.parser=g;var k={};return j(k,i,h),f.parse=e,f}(h,g,i,b),k=function(a,b){"use strict";function c(){}function d(a,b,c){if(null==a||"string"!=typeof a&&a.constructor!==c.AST.ProgramNode)throw new h("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var d=c.parse(a),e=(new c.Compiler).compile(d,b);return(new c.JavaScriptCompiler).compile(e,b)}function e(a,b,c){function d(){var d=c.parse(a),e=(new c.Compiler).compile(d,b),f=(new c.JavaScriptCompiler).compile(e,b,void 0,!0);return c.template(f)}if(null==a||"string"!=typeof a&&a.constructor!==c.AST.ProgramNode)throw new h("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var e,f=function(a,b){return e||(e=d()),e.call(this,a,b)};return f._setup=function(a){return e||(e=d()),e._setup(a)},f._child=function(a,b,c){return e||(e=d()),e._child(a,b,c)},f}function f(a,b){if(a===b)return!0;if(i(a)&&i(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!f(a[c],b[c]))return!1;return!0}}var g={},h=a,i=b.isArray,j=[].slice;return g.Compiler=c,c.prototype={compiler:c,equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;b>c;c++){var d=this.opcodes[c],e=a.opcodes[c];if(d.opcode!==e.opcode||!f(d.args,e.args))return!1}for(b=this.children.length,c=0;b>c;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds;var c=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},c)for(var d in c)this.options.knownHelpers[d]=c[d];return this.accept(a)},accept:function(a){return this[a.type](a)},program:function(a){for(var b=a.statements,c=0,d=b.length;d>c;c++)this.accept(b[c]);return this.isSimple=1===d,this.depths.list=this.depths.list.sort(function(a,b){return a-b}),this},compileProgram:function(a){var b,c=(new this.compiler).compile(a,this.options),d=this.guid++;this.usePartial=this.usePartial||c.usePartial,this.children[d]=c;for(var e=0,f=c.depths.list.length;f>e;e++)b=c.depths.list[e],2>b||this.addDepth(b-1);return d},block:function(a){var b=a.mustache,c=a.program,d=a.inverse;c&&(c=this.compileProgram(c)),d&&(d=this.compileProgram(d));var e=b.sexpr,f=this.classifySexpr(e);"helper"===f?this.helperSexpr(e,c,d):"simple"===f?(this.simpleSexpr(e),this.opcode("pushProgram",c),this.opcode("pushProgram",d),this.opcode("emptyHash"),this.opcode("blockValue",e.id.original)):(this.ambiguousSexpr(e,c,d),this.opcode("pushProgram",c),this.opcode("pushProgram",d),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(a){var b,c,d=a.pairs;for(this.opcode("pushHash"),b=0,c=d.length;c>b;b++)this.pushParam(d[b][1]);for(;b--;)this.opcode("assignToHash",d[b][0]);this.opcode("popHash")},partial:function(a){var b=a.partialName;this.usePartial=!0,a.hash?this.accept(a.hash):this.opcode("push","undefined"),a.context?this.accept(a.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",b.name,a.indent||""),this.opcode("append")},content:function(a){a.string&&this.opcode("appendContent",a.string)},mustache:function(a){this.sexpr(a.sexpr),this.opcode(a.escaped&&!this.options.noEscape?"appendEscaped":"append")},ambiguousSexpr:function(a,b,c){var d=a.id,e=d.parts[0],f=null!=b||null!=c;this.opcode("getContext",d.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.ID(d),this.opcode("invokeAmbiguous",e,f)},simpleSexpr:function(a){var b=a.id;"DATA"===b.type?this.DATA(b):b.parts.length?this.ID(b):(this.addDepth(b.depth),this.opcode("getContext",b.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(a,b,c){var d=this.setupFullMustacheParams(a,b,c),e=a.id,f=e.parts[0];if(this.options.knownHelpers[f])this.opcode("invokeKnownHelper",d.length,f);else{if(this.options.knownHelpersOnly)throw new h("You specified knownHelpersOnly, but used the unknown helper "+f,a);
e.falsy=!0,this.ID(e),this.opcode("invokeHelper",d.length,e.original,e.isSimple)}},sexpr:function(a){var b=this.classifySexpr(a);"simple"===b?this.simpleSexpr(a):"helper"===b?this.helperSexpr(a):this.ambiguousSexpr(a)},ID:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth);var b=a.parts[0];b?this.opcode("lookupOnContext",a.parts,a.falsy,a.isScoped):this.opcode("pushContext")},DATA:function(a){this.options.data=!0,this.opcode("lookupData",a.id.depth,a.id.parts)},STRING:function(a){this.opcode("pushString",a.string)},NUMBER:function(a){this.opcode("pushLiteral",a.number)},BOOLEAN:function(a){this.opcode("pushLiteral",a.bool)},comment:function(){},opcode:function(a){this.opcodes.push({opcode:a,args:j.call(arguments,1)})},addDepth:function(a){0!==a&&(this.depths[a]||(this.depths[a]=!0,this.depths.list.push(a)))},classifySexpr:function(a){var b=a.isHelper,c=a.eligibleHelper,d=this.options;if(c&&!b){var e=a.id.parts[0];d.knownHelpers[e]?b=!0:d.knownHelpersOnly&&(c=!1)}return b?"helper":c?"ambiguous":"simple"},pushParams:function(a){for(var b=0,c=a.length;c>b;b++)this.pushParam(a[b])},pushParam:function(a){this.stringParams?(a.depth&&this.addDepth(a.depth),this.opcode("getContext",a.depth||0),this.opcode("pushStringParam",a.stringModeValue,a.type),"sexpr"===a.type&&this.sexpr(a)):(this.trackIds&&this.opcode("pushId",a.type,a.idName||a.stringModeValue),this.accept(a))},setupFullMustacheParams:function(a,b,c){var d=a.params;return this.pushParams(d),this.opcode("pushProgram",b),this.opcode("pushProgram",c),a.hash?this.hash(a.hash):this.opcode("emptyHash"),d}},g.precompile=d,g.compile=e,g}(c,b),l=function(a,b){"use strict";function c(a){this.value=a}function d(){}var e,f=a.COMPILER_REVISION,g=a.REVISION_CHANGES,h=b;d.prototype={nameLookup:function(a,b){return d.isValidJavaScriptVariableName(b)?a+"."+b:a+"['"+b+"']"},depthedLookup:function(a){return this.aliases.lookup="this.lookup",'lookup(depths, "'+a+'")'},compilerInfo:function(){var a=f,b=g[a];return[a,b]},appendToBuffer:function(a){return this.environment.isSimple?"return "+a+";":{appendToBuffer:!0,content:a,toString:function(){return"buffer += "+a+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(a,b,c,d){this.environment=a,this.options=b,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!d,this.name=this.environment.name,this.isChild=!!c,this.context=c||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(a,b),this.useDepths=this.useDepths||a.depths.list.length||this.options.compat;var e,f,g,i=a.opcodes;for(f=0,g=i.length;g>f;f++)e=i[f],this[e.opcode].apply(this,e.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new h("Compile completed with content left on stack");var j=this.createFunctionContext(d);if(this.isChild)return j;var k={compiler:this.compilerInfo(),main:j},l=this.context.programs;for(f=0,g=l.length;g>f;f++)l[f]&&(k[f]=l[f]);return this.environment.usePartial&&(k.usePartial=!0),this.options.data&&(k.useData=!0),this.useDepths&&(k.useDepths=!0),this.options.compat&&(k.compat=!0),d||(k.compiler=JSON.stringify(k.compiler),k=this.objectLiteral(k)),k},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(a){var b="",c=this.stackVars.concat(this.registers.list);c.length>0&&(b+=", "+c.join(", "));for(var d in this.aliases)this.aliases.hasOwnProperty(d)&&(b+=", "+d+"="+this.aliases[d]);var e=["depth0","helpers","partials","data"];this.useDepths&&e.push("depths");var f=this.mergeSource(b);return a?(e.push(f),Function.apply(this,e)):"function("+e.join(",")+") {\n  "+f+"}"},mergeSource:function(a){for(var b,c,d="",e=!this.forceBuffer,f=0,g=this.source.length;g>f;f++){var h=this.source[f];h.appendToBuffer?b=b?b+"\n    + "+h.content:h.content:(b&&(d?d+="buffer += "+b+";\n  ":(c=!0,d=b+";\n  "),b=void 0),d+=h+"\n  ",this.environment.isSimple||(e=!1))}return e?(b||!d)&&(d+="return "+(b||'""')+";\n"):(a+=", buffer = "+(c?"":this.initializeBuffer()),d+=b?"return buffer + "+b+";\n":"return buffer;\n"),a&&(d="var "+a.substring(2)+(c?"":";\n  ")+d),d},blockValue:function(a){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var b=[this.contextName(0)];this.setupParams(a,0,b);var c=this.popStack();b.splice(1,0,c),this.push("blockHelperMissing.call("+b.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=[this.contextName(0)];this.setupParams("",0,a,!0),this.flushInline();var b=this.topStack();a.splice(1,0,b),this.pushSource("if (!"+this.lastHelper+") { "+b+" = blockHelperMissing.call("+a.join(", ")+"); }")},appendContent:function(a){this.pendingContent&&(a=this.pendingContent+a),this.pendingContent=a},append:function(){this.flushInline();var a=this.popStack();this.pushSource("if ("+a+" != null) { "+this.appendToBuffer(a)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(a){this.lastContext=a},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(a,b,c){var d=0,e=a.length;for(c||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(a[d++]));e>d;d++)this.replaceStack(function(c){var e=this.nameLookup(c,a[d],"context");return b?" && "+e:" != null ? "+e+" : "+c})},lookupData:function(a,b){this.pushStackLiteral(a?"this.data(data, "+a+")":"data");for(var c=b.length,d=0;c>d;d++)this.replaceStack(function(a){return" && "+this.nameLookup(a,b[d],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(a,b){this.pushContext(),this.pushString(b),"sexpr"!==b&&("string"==typeof a?this.pushString(a):this.pushStackLiteral(a))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var a=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+a.ids.join(",")+"}"),this.stringParams&&(this.push("{"+a.contexts.join(",")+"}"),this.push("{"+a.types.join(",")+"}")),this.push("{\n    "+a.values.join(",\n    ")+"\n  }")},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},push:function(a){return this.inlineStack.push(a),a},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){this.pushStackLiteral(null!=a?this.programExpression(a):null)},invokeHelper:function(a,b,c){this.aliases.helperMissing="helpers.helperMissing";var d=this.popStack(),e=this.setupHelper(a,b),f=(c?e.name+" || ":"")+d+" || helperMissing";this.push("(("+f+").call("+e.callParams+"))")},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(c.name+".call("+c.callParams+")")},invokeAmbiguous:function(a,b){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var c=this.popStack();this.emptyHash();var d=this.setupHelper(0,a,b),e=this.lastHelper=this.nameLookup("helpers",a,"helper");this.push("((helper = (helper = "+e+" || "+c+") != null ? helper : helperMissing"+(d.paramsInit?"),("+d.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+d.callParams+") : helper))")},invokePartial:function(a,b){var c=[this.nameLookup("partials",a,"partial"),"'"+b+"'","'"+a+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?c.push("data"):this.options.compat&&c.push("undefined"),this.options.compat&&c.push("depths"),this.push("this.invokePartial("+c.join(", ")+")")},assignToHash:function(a){var b,c,d,e=this.popStack();this.trackIds&&(d=this.popStack()),this.stringParams&&(c=this.popStack(),b=this.popStack());var f=this.hash;b&&f.contexts.push("'"+a+"': "+b),c&&f.types.push("'"+a+"': "+c),d&&f.ids.push("'"+a+"': "+d),f.values.push("'"+a+"': ("+e+")")},pushId:function(a,b){"ID"===a||"DATA"===a?this.pushString(b):this.pushStackLiteral("sexpr"===a?"true":"null")},compiler:d,compileChildren:function(a,b){for(var c,d,e=a.children,f=0,g=e.length;g>f;f++){c=e[f],d=new this.compiler;var h=this.matchExistingProgram(c);null==h?(this.context.programs.push(""),h=this.context.programs.length,c.index=h,c.name="program"+h,this.context.programs[h]=d.compile(c,b,this.context,!this.precompile),this.context.environments[h]=c,this.useDepths=this.useDepths||d.useDepths):(c.index=h,c.name="program"+h)}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;c>b;b++){var d=this.context.environments[b];if(d&&d.equals(a))return b}},programExpression:function(a){var b=this.environment.children[a],c=(b.depths.list,this.useDepths),d=[b.index,"data"];return c&&d.push("depths"),"this.program("+d.join(", ")+")"},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},pushStackLiteral:function(a){return this.push(new c(a))},pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),a&&this.source.push(a)},pushStack:function(a){this.flushInline();var b=this.incrStack();return this.pushSource(b+" = "+a+";"),this.compileStack.push(b),b},replaceStack:function(a){{var b,d,e,f="";this.isInline()}if(!this.isInline())throw new h("replaceStack on non-inline");var g=this.popStack(!0);if(g instanceof c)f=b=g.value,e=!0;else{d=!this.stackSlot;var i=d?this.incrStack():this.topStackName();f="("+this.push(i)+" = "+g+")",b=this.topStack()}var j=a.call(this,b);e||this.popStack(),d&&this.stackSlot--,this.push("("+f+j+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;if(a.length){this.inlineStack=[];for(var b=0,d=a.length;d>b;b++){var e=a[b];e instanceof c?this.compileStack.push(e):this.pushStack(e)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),d=(b?this.inlineStack:this.compileStack).pop();if(!a&&d instanceof c)return d.value;if(!b){if(!this.stackSlot)throw new h("Invalid stack pop");this.stackSlot--}return d},topStack:function(){var a=this.isInline()?this.inlineStack:this.compileStack,b=a[a.length-1];return b instanceof c?b.value:b},contextName:function(a){return this.useDepths&&a?"depths["+a+"]":"depth"+a},quotedString:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(this.quotedString(c)+":"+a[c]);return"{"+b.join(",")+"}"},setupHelper:function(a,b,c){var d=[],e=this.setupParams(b,a,d,c),f=this.nameLookup("helpers",b,"helper");return{params:d,paramsInit:e,name:f,callParams:[this.contextName(0)].concat(d).join(", ")}},setupOptions:function(a,b,c){var d,e,f,g={},h=[],i=[],j=[];g.name=this.quotedString(a),g.hash=this.popStack(),this.trackIds&&(g.hashIds=this.popStack()),this.stringParams&&(g.hashTypes=this.popStack(),g.hashContexts=this.popStack()),e=this.popStack(),f=this.popStack(),(f||e)&&(f||(f="this.noop"),e||(e="this.noop"),g.fn=f,g.inverse=e);for(var k=b;k--;)d=this.popStack(),c[k]=d,this.trackIds&&(j[k]=this.popStack()),this.stringParams&&(i[k]=this.popStack(),h[k]=this.popStack());return this.trackIds&&(g.ids="["+j.join(",")+"]"),this.stringParams&&(g.types="["+i.join(",")+"]",g.contexts="["+h.join(",")+"]"),this.options.data&&(g.data="data"),g},setupParams:function(a,b,c,d){var e=this.objectLiteral(this.setupOptions(a,b,c));return d?(this.useRegister("options"),c.push("options"),"options="+e):(c.push(e),"")}};for(var i="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),j=d.RESERVED_WORDS={},k=0,l=i.length;l>k;k++)j[i[k]]=!0;return d.isValidJavaScriptVariableName=function(a){return!d.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)},e=d}(d,c),m=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c.parser,j=c.parse,k=d.Compiler,l=d.compile,m=d.precompile,n=e,o=g.create,p=function(){var a=o();return a.compile=function(b,c){return l(b,c,a)},a.precompile=function(b,c){return m(b,c,a)},a.AST=h,a.Compiler=k,a.JavaScriptCompiler=n,a.Parser=i,a.parse=j,a};return g=p(),g.create=p,g["default"]=g,f=g}(f,g,j,k,l);return m}),function(a){var b=function(){"use strict";return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1},isBlankString:function(a){return!a||/^\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},toStr:function(a){return b.isUndefined(a)||null===a?"":a+""},bind:a.proxy,each:function(b,c){function d(a,b){return c(b,a)}a.each(b,d)},map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,getUniqueId:function(){var a=0;return function(){return a++}}(),templatify:function(b){function c(){return String(b)}return a.isFunction(b)?b:c},defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},noop:function(){}}}(),c="0.10.5",d=function(){"use strict";function a(a){return a=b.toStr(a),a?a.split(/\s+/):[]}function c(a){return a=b.toStr(a),a?a.split(/\W+/):[]}function d(a){return function(){var c=[].slice.call(arguments,0);return function(d){var e=[];return b.each(c,function(c){e=e.concat(a(b.toStr(d[c])))}),e}}}return{nonword:c,whitespace:a,obj:{nonword:d(c),whitespace:d(a)}}}(),e=function(){"use strict";function c(c){this.maxSize=b.isNumber(c)?c:100,this.reset(),this.maxSize<=0&&(this.set=this.get=a.noop)}function d(){this.head=this.tail=null}function e(a,b){this.key=a,this.val=b,this.prev=this.next=null}return b.mixin(c.prototype,{set:function(a,b){var c,d=this.list.tail;this.size>=this.maxSize&&(this.list.remove(d),delete this.hash[d.key]),(c=this.hash[a])?(c.val=b,this.list.moveToFront(c)):(c=new e(a,b),this.list.add(c),this.hash[a]=c,this.size++)},get:function(a){var b=this.hash[a];return b?(this.list.moveToFront(b),b.val):void 0},reset:function(){this.size=0,this.hash={},this.list=new d}}),b.mixin(d.prototype,{add:function(a){this.head&&(a.next=this.head,this.head.prev=a),this.head=a,this.tail=this.tail||a},remove:function(a){a.prev?a.prev.next=a.next:this.head=a.next,a.next?a.next.prev=a.prev:this.tail=a.prev},moveToFront:function(a){this.remove(a),this.add(a)}}),c}(),f=function(){"use strict";function a(a){this.prefix=["__",a,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+b.escapeRegExChars(this.prefix))}function c(){return(new Date).getTime()}function d(a){return JSON.stringify(b.isUndefined(a)?null:a)}function e(a){return JSON.parse(a)}var f,g;try{f=window.localStorage,f.setItem("~~~","!"),f.removeItem("~~~")}catch(h){f=null}return g=f&&window.JSON?{_prefix:function(a){return this.prefix+a},_ttlKey:function(a){return this._prefix(a)+this.ttlKey},get:function(a){return this.isExpired(a)&&this.remove(a),e(f.getItem(this._prefix(a)))},set:function(a,e,g){return b.isNumber(g)?f.setItem(this._ttlKey(a),d(c()+g)):f.removeItem(this._ttlKey(a)),f.setItem(this._prefix(a),d(e))},remove:function(a){return f.removeItem(this._ttlKey(a)),f.removeItem(this._prefix(a)),this},clear:function(){var a,b,c=[],d=f.length;for(a=0;d>a;a++)(b=f.key(a)).match(this.keyMatcher)&&c.push(b.replace(this.keyMatcher,""));for(a=c.length;a--;)this.remove(c[a]);return this},isExpired:function(a){var d=e(f.getItem(this._ttlKey(a)));return b.isNumber(d)&&c()>d?!0:!1}}:{get:b.noop,set:b.noop,remove:b.noop,clear:b.noop,isExpired:b.noop},b.mixin(a.prototype,g),a}(),g=function(){"use strict";function c(b){b=b||{},this.cancelled=!1,this.lastUrl=null,this._send=b.transport?d(b.transport):a.ajax,this._get=b.rateLimiter?b.rateLimiter(this._get):this._get,this._cache=b.cache===!1?new e(0):i}function d(c){return function(d,e){function f(a){b.defer(function(){h.resolve(a)})}function g(a){b.defer(function(){h.reject(a)})}var h=a.Deferred();return c(d,e,f,g),h}}var f=0,g={},h=6,i=new e(10);return c.setMaxPendingRequests=function(a){h=a},c.resetCache=function(){i.reset()},b.mixin(c.prototype,{_get:function(a,b,c){function d(b){c&&c(null,b),k._cache.set(a,b)}function e(){c&&c(!0)}function i(){f--,delete g[a],k.onDeckRequestArgs&&(k._get.apply(k,k.onDeckRequestArgs),k.onDeckRequestArgs=null)}var j,k=this;this.cancelled||a!==this.lastUrl||((j=g[a])?j.done(d).fail(e):h>f?(f++,g[a]=this._send(a,b).done(d).fail(e).always(i)):this.onDeckRequestArgs=[].slice.call(arguments,0))},get:function(a,c,d){var e;return b.isFunction(c)&&(d=c,c={}),this.cancelled=!1,this.lastUrl=a,(e=this._cache.get(a))?b.defer(function(){d&&d(null,e)}):this._get(a,c,d),!!e},cancel:function(){this.cancelled=!0}}),c}(),h=function(){"use strict";function c(b){b=b||{},b.datumTokenizer&&b.queryTokenizer||a.error("datumTokenizer and queryTokenizer are both required"),this.datumTokenizer=b.datumTokenizer,this.queryTokenizer=b.queryTokenizer,this.reset()}function d(a){return a=b.filter(a,function(a){return!!a}),a=b.map(a,function(a){return a.toLowerCase()})}function e(){return{ids:[],children:{}}}function f(a){for(var b={},c=[],d=0,e=a.length;e>d;d++)b[a[d]]||(b[a[d]]=!0,c.push(a[d]));return c}function g(a,b){function c(a,b){return a-b}var d=0,e=0,f=[];a=a.sort(c),b=b.sort(c);for(var g=a.length,h=b.length;g>d&&h>e;)a[d]<b[e]?d++:a[d]>b[e]?e++:(f.push(a[d]),d++,e++);return f}return b.mixin(c.prototype,{bootstrap:function(a){this.datums=a.datums,this.trie=a.trie},add:function(a){var c=this;a=b.isArray(a)?a:[a],b.each(a,function(a){var f,g;f=c.datums.push(a)-1,g=d(c.datumTokenizer(a)),b.each(g,function(a){var b,d,g;for(b=c.trie,d=a.split("");g=d.shift();)b=b.children[g]||(b.children[g]=e()),b.ids.push(f)})})},get:function(a){var c,e,h=this;return c=d(this.queryTokenizer(a)),b.each(c,function(a){var b,c,d,f;if(e&&0===e.length)return!1;for(b=h.trie,c=a.split("");b&&(d=c.shift());)b=b.children[d];return b&&0===c.length?(f=b.ids.slice(0),void(e=e?g(e,f):f)):(e=[],!1)}),e?b.map(f(e),function(a){return h.datums[a]}):[]},reset:function(){this.datums=[],this.trie=e()},serialize:function(){return{datums:this.datums,trie:this.trie}}}),c}(),i=function(){"use strict";function d(a){return a.local||null}function e(d){var e,f;return f={url:null,thumbprint:"",ttl:864e5,filter:null,ajax:{}},(e=d.prefetch||null)&&(e=b.isString(e)?{url:e}:e,e=b.mixin(f,e),e.thumbprint=c+e.thumbprint,e.ajax.type=e.ajax.type||"GET",e.ajax.dataType=e.ajax.dataType||"json",!e.url&&a.error("prefetch requires url to be set")),e}function f(c){function d(a){return function(c){return b.debounce(c,a)}}function e(a){return function(c){return b.throttle(c,a)}}var f,g;return g={url:null,cache:!0,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}},(f=c.remote||null)&&(f=b.isString(f)?{url:f}:f,f=b.mixin(g,f),f.rateLimiter=/^throttle$/i.test(f.rateLimitBy)?e(f.rateLimitWait):d(f.rateLimitWait),f.ajax.type=f.ajax.type||"GET",f.ajax.dataType=f.ajax.dataType||"json",delete f.rateLimitBy,delete f.rateLimitWait,!f.url&&a.error("remote requires url to be set")),f}return{local:d,prefetch:e,remote:f}}();!function(c){"use strict";function e(b){b&&(b.local||b.prefetch||b.remote)||a.error("one of local, prefetch, or remote is required"),this.limit=b.limit||5,this.sorter=j(b.sorter),this.dupDetector=b.dupDetector||k,this.local=i.local(b),this.prefetch=i.prefetch(b),this.remote=i.remote(b),this.cacheKey=this.prefetch?this.prefetch.cacheKey||this.prefetch.url:null,this.index=new h({datumTokenizer:b.datumTokenizer,queryTokenizer:b.queryTokenizer}),this.storage=this.cacheKey?new f(this.cacheKey):null}function j(a){function c(b){return b.sort(a)}function d(a){return a}return b.isFunction(a)?c:d}function k(){return!1}var l,m;return l=c.Bloodhound,m={data:"data",protocol:"protocol",thumbprint:"thumbprint"},c.Bloodhound=e,e.noConflict=function(){return c.Bloodhound=l,e},e.tokenizers=d,b.mixin(e.prototype,{_loadPrefetch:function(b){function c(a){f.clear(),f.add(b.filter?b.filter(a):a),f._saveToStorage(f.index.serialize(),b.thumbprint,b.ttl)}var d,e,f=this;return(d=this._readFromStorage(b.thumbprint))?(this.index.bootstrap(d),e=a.Deferred().resolve()):e=a.ajax(b.url,b.ajax).done(c),e},_getFromRemote:function(a,b){function c(a,c){b(a?[]:f.remote.filter?f.remote.filter(c):c)}var d,e,f=this;if(this.transport)return a=a||"",e=encodeURIComponent(a),d=this.remote.replace?this.remote.replace(this.remote.url,a):this.remote.url.replace(this.remote.wildcard,e),this.transport.get(d,this.remote.ajax,c)},_cancelLastRemoteRequest:function(){this.transport&&this.transport.cancel()},_saveToStorage:function(a,b,c){this.storage&&(this.storage.set(m.data,a,c),this.storage.set(m.protocol,location.protocol,c),this.storage.set(m.thumbprint,b,c))},_readFromStorage:function(a){var b,c={};return this.storage&&(c.data=this.storage.get(m.data),c.protocol=this.storage.get(m.protocol),c.thumbprint=this.storage.get(m.thumbprint)),b=c.thumbprint!==a||c.protocol!==location.protocol,c.data&&!b?c.data:null},_initialize:function(){function c(){e.add(b.isFunction(f)?f():f)}var d,e=this,f=this.local;return d=this.prefetch?this._loadPrefetch(this.prefetch):a.Deferred().resolve(),f&&d.done(c),this.transport=this.remote?new g(this.remote):null,this.initPromise=d.promise()},initialize:function(a){return!this.initPromise||a?this._initialize():this.initPromise},add:function(a){this.index.add(a)},get:function(a,c){function d(a){var d=f.slice(0);b.each(a,function(a){var c;return c=b.some(d,function(b){return e.dupDetector(a,b)}),!c&&d.push(a),d.length<e.limit}),c&&c(e.sorter(d))}var e=this,f=[],g=!1;f=this.index.get(a),f=this.sorter(f).slice(0,this.limit),f.length<this.limit?g=this._getFromRemote(a,d):this._cancelLastRemoteRequest(),g||(f.length>0||!this.transport)&&c&&c(f)},clear:function(){this.index.reset()},clearPrefetchCache:function(){this.storage&&this.storage.clear()},clearRemoteCache:function(){this.transport&&g.resetCache()},ttAdapter:function(){return b.bind(this.get,this)}}),e}(this);var j=function(){return{wrapper:'<span class="twitter-typeahead"></span>',dropdown:'<span class="tt-dropdown-menu"></span>',dataset:'<div class="tt-dataset-%CLASS%"></div>',suggestions:'<span class="tt-suggestions"></span>',suggestion:'<div class="tt-suggestion"></div>'}}(),k=function(){"use strict";var a={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};return b.isMsie()&&b.mixin(a.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),b.isMsie()&&b.isMsie()<=7&&b.mixin(a.input,{marginTop:"-1px"}),a}(),l=function(){"use strict";function c(b){b&&b.el||a.error("EventBus initialized without el"),this.$el=a(b.el)}var d="typeahead:";return b.mixin(c.prototype,{trigger:function(a){var b=[].slice.call(arguments,1);this.$el.trigger(d+a,b)}}),c}(),m=function(){"use strict";function a(a,b,c,d){var e;if(!c)return this;for(b=b.split(i),c=d?h(c,d):c,this._callbacks=this._callbacks||{};e=b.shift();)this._callbacks[e]=this._callbacks[e]||{sync:[],async:[]},this._callbacks[e][a].push(c);return this}function b(b,c,d){return a.call(this,"async",b,c,d)}function c(b,c,d){return a.call(this,"sync",b,c,d)}function d(a){var b;if(!this._callbacks)return this;for(a=a.split(i);b=a.shift();)delete this._callbacks[b];return this}function e(a){var b,c,d,e,g;if(!this._callbacks)return this;for(a=a.split(i),d=[].slice.call(arguments,1);(b=a.shift())&&(c=this._callbacks[b]);)e=f(c.sync,this,[b].concat(d)),g=f(c.async,this,[b].concat(d)),e()&&j(g);return this}function f(a,b,c){function d(){for(var d,e=0,f=a.length;!d&&f>e;e+=1)d=a[e].apply(b,c)===!1;return!d}return d}function g(){var a;return a=window.setImmediate?function(a){setImmediate(function(){a()})}:function(a){setTimeout(function(){a()},0)}}function h(a,b){return a.bind?a.bind(b):function(){a.apply(b,[].slice.call(arguments,0))}}var i=/\s+/,j=g();return{onSync:c,onAsync:b,off:d,trigger:e}}(),n=function(a){"use strict";function c(a,c,d){for(var e,f=[],g=0,h=a.length;h>g;g++)f.push(b.escapeRegExChars(a[g]));return e=d?"\\b("+f.join("|")+")\\b":"("+f.join("|")+")",c?new RegExp(e):new RegExp(e,"i")}var d={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function(e){function f(b){var c,d,f;return(c=h.exec(b.data))&&(f=a.createElement(e.tagName),e.className&&(f.className=e.className),d=b.splitText(c.index),d.splitText(c[0].length),f.appendChild(d.cloneNode(!0)),b.parentNode.replaceChild(f,d)),!!c}function g(a,b){for(var c,d=3,e=0;e<a.childNodes.length;e++)c=a.childNodes[e],c.nodeType===d?e+=b(c)?1:0:g(c,b)}var h;e=b.mixin({},d,e),e.node&&e.pattern&&(e.pattern=b.isArray(e.pattern)?e.pattern:[e.pattern],h=c(e.pattern,e.caseSensitive,e.wordsOnly),g(e.node,f))}}(window.document),o=function(){"use strict";function c(c){var e,f,h,i,j=this;c=c||{},c.input||a.error("input is missing"),e=b.bind(this._onBlur,this),f=b.bind(this._onFocus,this),h=b.bind(this._onKeydown,this),i=b.bind(this._onInput,this),this.$hint=a(c.hint),this.$input=a(c.input).on("blur.tt",e).on("focus.tt",f).on("keydown.tt",h),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=b.noop),b.isMsie()?this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(a){g[a.which||a.keyCode]||b.defer(b.bind(j._onInput,j,a))}):this.$input.on("input.tt",i),this.query=this.$input.val(),this.$overflowHelper=d(this.$input)}function d(b){return a('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:b.css("font-family"),fontSize:b.css("font-size"),fontStyle:b.css("font-style"),fontVariant:b.css("font-variant"),fontWeight:b.css("font-weight"),wordSpacing:b.css("word-spacing"),letterSpacing:b.css("letter-spacing"),textIndent:b.css("text-indent"),textRendering:b.css("text-rendering"),textTransform:b.css("text-transform")}).insertAfter(b)}function e(a,b){return c.normalizeQuery(a)===c.normalizeQuery(b)}function f(a){return a.altKey||a.ctrlKey||a.metaKey||a.shiftKey}var g;return g={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},c.normalizeQuery=function(a){return(a||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")},b.mixin(c.prototype,m,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.trigger("focused")},_onKeydown:function(a){var b=g[a.which||a.keyCode];this._managePreventDefault(b,a),b&&this._shouldTrigger(b,a)&&this.trigger(b+"Keyed",a)},_onInput:function(){this._checkInputValue()},_managePreventDefault:function(a,b){var c,d,e;switch(a){case"tab":d=this.getHint(),e=this.getInputValue(),c=d&&d!==e&&!f(b);break;case"up":case"down":c=!f(b);break;default:c=!1}c&&b.preventDefault()},_shouldTrigger:function(a,b){var c;switch(a){case"tab":c=!f(b);break;default:c=!0}return c},_checkInputValue:function(){var a,b,c;a=this.getInputValue(),b=e(a,this.query),c=b?this.query.length!==a.length:!1,this.query=a,b?c&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(a){this.query=a},getInputValue:function(){return this.$input.val()},setInputValue:function(a,b){this.$input.val(a),b?this.clearHint():this._checkInputValue()},resetInputValue:function(){this.setInputValue(this.query,!0)},getHint:function(){return this.$hint.val()},setHint:function(a){this.$hint.val(a)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var a,b,c,d;a=this.getInputValue(),b=this.getHint(),c=a!==b&&0===b.indexOf(a),d=""!==a&&c&&!this.hasOverflow(),!d&&this.clearHint()},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function(){var a=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=a},isCursorAtEnd:function(){var a,c,d;return a=this.$input.val().length,c=this.$input[0].selectionStart,b.isNumber(c)?c===a:document.selection?(d=document.selection.createRange(),d.moveStart("character",-a),a===d.text.length):!0},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$hint=this.$input=this.$overflowHelper=null}}),c}(),p=function(){"use strict";function c(c){c=c||{},c.templates=c.templates||{},c.source||a.error("missing source"),c.name&&!f(c.name)&&a.error("invalid dataset name: "+c.name),this.query=null,this.highlight=!!c.highlight,this.name=c.name||b.getUniqueId(),this.source=c.source,this.displayFn=d(c.display||c.displayKey),this.templates=e(c.templates,this.displayFn),this.$el=a(j.dataset.replace("%CLASS%",this.name))}function d(a){function c(b){return b[a]}return a=a||"value",b.isFunction(a)?a:c}function e(a,c){function d(a){return"<p>"+c(a)+"</p>"}return{empty:a.empty&&b.templatify(a.empty),header:a.header&&b.templatify(a.header),footer:a.footer&&b.templatify(a.footer),suggestion:a.suggestion||d}}function f(a){return/^[_a-zA-Z0-9-]+$/.test(a)}var g="ttDataset",h="ttValue",i="ttDatum";return c.extractDatasetName=function(b){return a(b).data(g)},c.extractValue=function(b){return a(b).data(h)},c.extractDatum=function(b){return a(b).data(i)},b.mixin(c.prototype,m,{_render:function(c,d){function e(){return p.templates.empty({query:c,isEmpty:!0})}function f(){function e(b){var c;return c=a(j.suggestion).append(p.templates.suggestion(b)).data(g,p.name).data(h,p.displayFn(b)).data(i,b),c.children().each(function(){a(this).css(k.suggestionChild)}),c}var f,l;return f=a(j.suggestions).css(k.suggestions),l=b.map(d,e),f.append.apply(f,l),p.highlight&&n({className:"tt-highlight",node:f[0],pattern:c}),f}function l(){return p.templates.header({query:c,isEmpty:!o})}function m(){return p.templates.footer({query:c,isEmpty:!o})}if(this.$el){var o,p=this;this.$el.empty(),o=d&&d.length,!o&&this.templates.empty?this.$el.html(e()).prepend(p.templates.header?l():null).append(p.templates.footer?m():null):o&&this.$el.html(f()).prepend(p.templates.header?l():null).append(p.templates.footer?m():null),this.trigger("rendered")
}},getRoot:function(){return this.$el},update:function(a){function b(b){c.canceled||a!==c.query||c._render(a,b)}var c=this;this.query=a,this.canceled=!1,this.source(a,b)},cancel:function(){this.canceled=!0},clear:function(){this.cancel(),this.$el.empty(),this.trigger("rendered")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=null}}),c}(),q=function(){"use strict";function c(c){var e,f,g,h=this;c=c||{},c.menu||a.error("menu is required"),this.isOpen=!1,this.isEmpty=!0,this.datasets=b.map(c.datasets,d),e=b.bind(this._onSuggestionClick,this),f=b.bind(this._onSuggestionMouseEnter,this),g=b.bind(this._onSuggestionMouseLeave,this),this.$menu=a(c.menu).on("click.tt",".tt-suggestion",e).on("mouseenter.tt",".tt-suggestion",f).on("mouseleave.tt",".tt-suggestion",g),b.each(this.datasets,function(a){h.$menu.append(a.getRoot()),a.onSync("rendered",h._onRendered,h)})}function d(a){return new p(a)}return b.mixin(c.prototype,m,{_onSuggestionClick:function(b){this.trigger("suggestionClicked",a(b.currentTarget))},_onSuggestionMouseEnter:function(b){this._removeCursor(),this._setCursor(a(b.currentTarget),!0)},_onSuggestionMouseLeave:function(){this._removeCursor()},_onRendered:function(){function a(a){return a.isEmpty()}this.isEmpty=b.every(this.datasets,a),this.isEmpty?this._hide():this.isOpen&&this._show(),this.trigger("datasetRendered")},_hide:function(){this.$menu.hide()},_show:function(){this.$menu.css("display","block")},_getSuggestions:function(){return this.$menu.find(".tt-suggestion")},_getCursor:function(){return this.$menu.find(".tt-cursor").first()},_setCursor:function(a,b){a.first().addClass("tt-cursor"),!b&&this.trigger("cursorMoved")},_removeCursor:function(){this._getCursor().removeClass("tt-cursor")},_moveCursor:function(a){var b,c,d,e;if(this.isOpen){if(c=this._getCursor(),b=this._getSuggestions(),this._removeCursor(),d=b.index(c)+a,d=(d+1)%(b.length+1)-1,-1===d)return void this.trigger("cursorRemoved");-1>d&&(d=b.length-1),this._setCursor(e=b.eq(d)),this._ensureVisible(e)}},_ensureVisible:function(a){var b,c,d,e;b=a.position().top,c=b+a.outerHeight(!0),d=this.$menu.scrollTop(),e=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),0>b?this.$menu.scrollTop(d+b):c>e&&this.$menu.scrollTop(d+(c-e))},close:function(){this.isOpen&&(this.isOpen=!1,this._removeCursor(),this._hide(),this.trigger("closed"))},open:function(){this.isOpen||(this.isOpen=!0,!this.isEmpty&&this._show(),this.trigger("opened"))},setLanguageDirection:function(a){this.$menu.css("ltr"===a?k.ltr:k.rtl)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getDatumForSuggestion:function(a){var b=null;return a.length&&(b={raw:p.extractDatum(a),value:p.extractValue(a),datasetName:p.extractDatasetName(a)}),b},getDatumForCursor:function(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function(){return this.getDatumForSuggestion(this._getSuggestions().first())},update:function(a){function c(b){b.update(a)}b.each(this.datasets,c)},empty:function(){function a(a){a.clear()}b.each(this.datasets,a),this.isEmpty=!0},isVisible:function(){return this.isOpen&&!this.isEmpty},destroy:function(){function a(a){a.destroy()}this.$menu.off(".tt"),this.$menu=null,b.each(this.datasets,a)}}),c}(),r=function(){"use strict";function c(c){var e,f,g;c=c||{},c.input||a.error("missing input"),this.isActivated=!1,this.autoselect=!!c.autoselect,this.minLength=b.isNumber(c.minLength)?c.minLength:1,this.$node=d(c.input,c.withHint),e=this.$node.find(".tt-dropdown-menu"),f=this.$node.find(".tt-input"),g=this.$node.find(".tt-hint"),f.on("blur.tt",function(a){var c,d,g;c=document.activeElement,d=e.is(c),g=e.has(c).length>0,b.isMsie()&&(d||g)&&(a.preventDefault(),a.stopImmediatePropagation(),b.defer(function(){f.focus()}))}),e.on("mousedown.tt",function(a){a.preventDefault()}),this.eventBus=c.eventBus||new l({el:f}),this.dropdown=new q({menu:e,datasets:c.datasets}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onAsync("datasetRendered",this._onDatasetRendered,this),this.input=new o({input:f,hint:g}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this),this._setLanguageDirection()}function d(b,c){var d,f,h,i;d=a(b),f=a(j.wrapper).css(k.wrapper),h=a(j.dropdown).css(k.dropdown),i=d.clone().css(k.hint).css(e(d)),i.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly",!0).attr({autocomplete:"off",spellcheck:"false",tabindex:-1}),d.data(g,{dir:d.attr("dir"),autocomplete:d.attr("autocomplete"),spellcheck:d.attr("spellcheck"),style:d.attr("style")}),d.addClass("tt-input").attr({autocomplete:"off",spellcheck:!1}).css(c?k.input:k.inputWithNoHint);try{!d.attr("dir")&&d.attr("dir","auto")}catch(l){}return d.wrap(f).parent().prepend(c?i:null).append(h)}function e(a){return{backgroundAttachment:a.css("background-attachment"),backgroundClip:a.css("background-clip"),backgroundColor:a.css("background-color"),backgroundImage:a.css("background-image"),backgroundOrigin:a.css("background-origin"),backgroundPosition:a.css("background-position"),backgroundRepeat:a.css("background-repeat"),backgroundSize:a.css("background-size")}}function f(a){var c=a.find(".tt-input");b.each(c.data(g),function(a,d){b.isUndefined(a)?c.removeAttr(d):c.attr(d,a)}),c.detach().removeData(g).removeClass("tt-input").insertAfter(a),a.remove()}var g="ttAttrs";return b.mixin(c.prototype,{_onSuggestionClicked:function(a,b){var c;(c=this.dropdown.getDatumForSuggestion(b))&&this._select(c)},_onCursorMoved:function(){var a=this.dropdown.getDatumForCursor();this.input.setInputValue(a.value,!0),this.eventBus.trigger("cursorchanged",a.raw,a.datasetName)},_onCursorRemoved:function(){this.input.resetInputValue(),this._updateHint()},_onDatasetRendered:function(){this._updateHint()},_onOpened:function(){this._updateHint(),this.eventBus.trigger("opened")},_onClosed:function(){this.input.clearHint(),this.eventBus.trigger("closed")},_onFocused:function(){this.isActivated=!0,this.dropdown.open()},_onBlurred:function(){this.isActivated=!1,this.dropdown.empty(),this.dropdown.close()},_onEnterKeyed:function(a,b){var c,d;c=this.dropdown.getDatumForCursor(),d=this.dropdown.getDatumForTopSuggestion(),c?(this._select(c),b.preventDefault()):this.autoselect&&d&&(this._select(d),b.preventDefault())},_onTabKeyed:function(a,b){var c;(c=this.dropdown.getDatumForCursor())?(this._select(c),b.preventDefault()):this._autocomplete(!0)},_onEscKeyed:function(){this.dropdown.close(),this.input.resetInputValue()},_onUpKeyed:function(){var a=this.input.getQuery();this.dropdown.isEmpty&&a.length>=this.minLength?this.dropdown.update(a):this.dropdown.moveCursorUp(),this.dropdown.open()},_onDownKeyed:function(){var a=this.input.getQuery();this.dropdown.isEmpty&&a.length>=this.minLength?this.dropdown.update(a):this.dropdown.moveCursorDown(),this.dropdown.open()},_onLeftKeyed:function(){"rtl"===this.dir&&this._autocomplete()},_onRightKeyed:function(){"ltr"===this.dir&&this._autocomplete()},_onQueryChanged:function(a,b){this.input.clearHintIfInvalid(),b.length>=this.minLength?this.dropdown.update(b):this.dropdown.empty(),this.dropdown.open(),this._setLanguageDirection()},_onWhitespaceChanged:function(){this._updateHint(),this.dropdown.open()},_setLanguageDirection:function(){var a;this.dir!==(a=this.input.getLanguageDirection())&&(this.dir=a,this.$node.css("direction",a),this.dropdown.setLanguageDirection(a))},_updateHint:function(){var a,c,d,e,f,g;a=this.dropdown.getDatumForTopSuggestion(),a&&this.dropdown.isVisible()&&!this.input.hasOverflow()?(c=this.input.getInputValue(),d=o.normalizeQuery(c),e=b.escapeRegExChars(d),f=new RegExp("^(?:"+e+")(.+$)","i"),g=f.exec(a.value),g?this.input.setHint(c+g[1]):this.input.clearHint()):this.input.clearHint()},_autocomplete:function(a){var b,c,d,e;b=this.input.getHint(),c=this.input.getQuery(),d=a||this.input.isCursorAtEnd(),b&&c!==b&&d&&(e=this.dropdown.getDatumForTopSuggestion(),e&&this.input.setInputValue(e.value),this.eventBus.trigger("autocompleted",e.raw,e.datasetName))},_select:function(a){this.input.setQuery(a.value),this.input.setInputValue(a.value,!0),this._setLanguageDirection(),this.eventBus.trigger("selected",a.raw,a.datasetName),this.dropdown.close(),b.defer(b.bind(this.dropdown.empty,this.dropdown))},open:function(){this.dropdown.open()},close:function(){this.dropdown.close()},setVal:function(a){a=b.toStr(a),this.isActivated?this.input.setInputValue(a):(this.input.setQuery(a),this.input.setInputValue(a,!0)),this._setLanguageDirection()},getVal:function(){return this.input.getQuery()},destroy:function(){this.input.destroy(),this.dropdown.destroy(),f(this.$node),this.$node=null}}),c}();!function(){"use strict";var c,d,e;c=a.fn.typeahead,d="ttTypeahead",e={initialize:function(c,e){function f(){var f,g,h=a(this);b.each(e,function(a){a.highlight=!!c.highlight}),g=new r({input:h,eventBus:f=new l({el:h}),withHint:b.isUndefined(c.hint)?!0:!!c.hint,minLength:c.minLength,autoselect:c.autoselect,datasets:e}),h.data(d,g)}return e=b.isArray(e)?e:[].slice.call(arguments,1),c=c||{},this.each(f)},open:function(){function b(){var b,c=a(this);(b=c.data(d))&&b.open()}return this.each(b)},close:function(){function b(){var b,c=a(this);(b=c.data(d))&&b.close()}return this.each(b)},val:function(b){function c(){var c,e=a(this);(c=e.data(d))&&c.setVal(b)}function e(a){var b,c;return(b=a.data(d))&&(c=b.getVal()),c}return arguments.length?this.each(c):e(this.first())},destroy:function(){function b(){var b,c=a(this);(b=c.data(d))&&(b.destroy(),c.removeData(d))}return this.each(b)}},a.fn.typeahead=function(b){var c;return e[b]&&"initialize"!==b?(c=this.filter(function(){return!!a(this).data(d)}),e[b].apply(c,[].slice.call(arguments,1))):e.initialize.apply(this,arguments)},a.fn.typeahead.noConflict=function(){return a.fn.typeahead=c,this}}()}(window.jQuery),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(a){return a.replace(/(:|\.|\/)/g,"\\$1")}var c="1.5.4",d={},e={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},f=function(b){var c=[],d=!1,e=b.dir&&"left"===b.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!==document&&this!==window){var b=a(this);b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,d&&c.push(this),b[e](0))}}),c.length||this.each(function(){"BODY"===this.nodeName&&(c=[this])}),"first"===b.el&&c.length>1&&(c=[c[0]]),c};a.fn.extend({scrollable:function(a){var b=f.call(this,{dir:a});return this.pushStack(b)},firstScrollable:function(a){var b=f.call(this,{el:"first",dir:a});return this.pushStack(b)},smoothScroll:function(c,d){if(c=c||{},"options"===c)return d?this.each(function(){var b=a(this),c=a.extend(b.data("ssOpts")||{},d);a(this).data("ssOpts",c)}):this.first().data("ssOpts");var e=a.extend({},a.fn.smoothScroll.defaults,c),f=a.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(c){var d=this,g=a(this),h=a.extend({},e,g.data("ssOpts")||{}),i=e.exclude,j=h.excludeWithin,k=0,l=0,m=!0,n={},o=location.hostname===d.hostname||!d.hostname,p=h.scrollTarget||a.smoothScroll.filterPath(d.pathname)===f,q=b(d.hash);if(h.scrollTarget||o&&p&&q){for(;m&&k<i.length;)g.is(b(i[k++]))&&(m=!1);for(;m&&l<j.length;)g.closest(j[l++]).length&&(m=!1)}else m=!1;m&&(h.preventDefault&&c.preventDefault(),a.extend(n,h,{scrollTarget:h.scrollTarget||q,link:d}),a.smoothScroll(n))}),this}}),a.smoothScroll=function(b,c){if("options"===b&&"object"==typeof c)return a.extend(d,c);var e,f,g,h,i,j=0,k="offset",l="scrollTop",m={},n={};"number"==typeof b?(e=a.extend({link:null},a.fn.smoothScroll.defaults,d),g=b):(e=a.extend({link:null},a.fn.smoothScroll.defaults,b||{},d),e.scrollElement&&(k="position","static"===e.scrollElement.css("position")&&e.scrollElement.css("position","relative"))),l="left"===e.direction?"scrollLeft":l,e.scrollElement?(f=e.scrollElement,/^(?:HTML|BODY)$/.test(f[0].nodeName)||(j=f[l]())):f=a("html, body").firstScrollable(e.direction),e.beforeScroll.call(f,e),g="number"==typeof b?b:c||a(e.scrollTarget)[k]()&&a(e.scrollTarget)[k]()[e.direction]||0,m[l]=g+j+e.offset,h=e.speed,"auto"===h&&(i=m[l]-f.scrollTop(),0>i&&(i*=-1),h=i/e.autoCoefficient),n={duration:h,easing:e.easing,complete:function(){e.afterScroll.call(e.link,e)}},e.step&&(n.step=e.step),f.length?f.stop().animate(m,n):e.afterScroll.call(e.link,e)},a.smoothScroll.version=c,a.smoothScroll.filterPath=function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},a.fn.smoothScroll.defaults=e}),function(){function a(b,c,d){var e=a.resolve(b);if(null==e){d=d||b,c=c||"root";var f=new Error('Failed to require "'+d+'" from "'+c+'"');throw f.path=d,f.parent=c,f.require=!0,f}var g=a.modules[e];if(!g._resolving&&!g.exports){var h={};h.exports={},h.client=h.component=!0,g._resolving=!0,g.call(this,h.exports,a.relative(e),h),delete g._resolving,g.exports=h.exports}return g.exports}a.modules={},a.aliases={},a.resolve=function(b){"/"===b.charAt(0)&&(b=b.slice(1));for(var c=[b,b+".js",b+".json",b+"/index.js",b+"/index.json"],d=0;d<c.length;d++){var b=c[d];if(a.modules.hasOwnProperty(b))return b;if(a.aliases.hasOwnProperty(b))return a.aliases[b]}},a.normalize=function(a,b){var c=[];if("."!=b.charAt(0))return b;a=a.split("/"),b=b.split("/");for(var d=0;d<b.length;++d)".."==b[d]?a.pop():"."!=b[d]&&""!=b[d]&&c.push(b[d]);return a.concat(c).join("/")},a.register=function(b,c){a.modules[b]=c},a.alias=function(b,c){if(!a.modules.hasOwnProperty(b))throw new Error('Failed to alias "'+b+'", it does not exist');a.aliases[c]=b},a.relative=function(b){function c(a,b){for(var c=a.length;c--;)if(a[c]===b)return c;return-1}function d(c){var e=d.resolve(c);return a(e,b,c)}var e=a.normalize(b,"..");return d.resolve=function(d){var f=d.charAt(0);if("/"==f)return d.slice(1);if("."==f)return a.normalize(e,d);var g=b.split("/"),h=c(g,"deps")+1;return h||(h=0),d=g.slice(0,h+1).join("/")+"/deps/"+d},d.exists=function(b){return a.modules.hasOwnProperty(d.resolve(b))},d},a.register("transitionize/transitionize.js",function(a,b,c){function d(a,b){return this instanceof d?(this.element=a,this.props=b||{},void this.init()):new d(a,b)}c.exports=d,d.prototype.isSafari=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)},d.prototype.init=function(){var a=[];for(var b in this.props)a.push(b+" "+this.props[b]);this.element.style.transition=a.join(", "),this.isSafari()&&(this.element.style.webkitTransition=a.join(", "))}}),a.alias("transitionize/transitionize.js","transitionize/index.js"),"object"==typeof exports?module.exports=a("transitionize"):"function"==typeof define&&define.amd?define(function(){return a("transitionize")}):this.Transitionize=a("transitionize")}(),FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!this.deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){"use strict";var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.determineEventType=function(a){"use strict";return this.deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(a){"use strict";var b;this.deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){"use strict";var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){"use strict";return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){"use strict";var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],this.deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!this.deviceIsIOS4){if(c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<200&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){"use strict";var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},FastClick.prototype.onTouchMove=function(a){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(a){"use strict";return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){"use strict";var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),this.deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||this.deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.deviceIsIOS4&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(e=g.fastClickScrollParent,e&&e.fastClickLastScrollTop!==e.scrollTop)?!0:(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){"use strict";return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(a){"use strict";var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){"use strict";var a=this.layer;this.deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){"use strict";var b,c;if("undefined"==typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!FastClick.prototype.deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(c>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a){"use strict";return new FastClick(a)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,function(){function a(b){var c=a.modules[b];if(!c)throw new Error('failed to require "'+b+'"');return"exports"in c||"function"!=typeof c.definition||(c.client=c.component=!0,c.definition.call(this,c.exports={},c),delete c.definition),c.exports}a.loader="component",a.helper={},a.helper.semVerSort=function(a,b){for(var c=a.version.split("."),d=b.version.split("."),e=0;e<c.length;++e){var f=parseInt(c[e],10),g=parseInt(d[e],10);if(f!==g)return f>g?1:-1;var h=c[e].substr((""+f).length),i=d[e].substr((""+g).length);if(""===h&&""!==i)return 1;if(""!==h&&""===i)return-1;if(""!==h&&""!==i)return h>i?1:-1}return 0},a.latest=function(b,c){function d(a){throw new Error('failed to find latest module of "'+a+'"')}var e=/(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/,f=/(.*)~(.*)/;f.test(b)||d(b);for(var g=Object.keys(a.modules),h=[],i=[],j=0;j<g.length;j++){var k=g[j];if(new RegExp(b+"@").test(k)){var l=k.substr(b.length+1),m=e.exec(k);null!=m?h.push({version:l,name:k}):i.push({version:l,name:k})}}if(0===h.concat(i).length&&d(b),h.length>0){var n=h.sort(a.helper.semVerSort).pop().name;return c===!0?n:a(n)}var n=i.pop().name;return c===!0?n:a(n)},a.modules={},a.register=function(b,c){a.modules[b]={definition:c}},a.define=function(b,c){a.modules[b]={exports:c}},a.register("abpetkov~transitionize@0.0.3",function(a,b){function c(a,b){return this instanceof c?(this.element=a,this.props=b||{},void this.init()):new c(a,b)}b.exports=c,c.prototype.isSafari=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)},c.prototype.init=function(){var a=[];for(var b in this.props)a.push(b+" "+this.props[b]);this.element.style.transition=a.join(", "),this.isSafari()&&(this.element.style.webkitTransition=a.join(", "))}}),a.register("ftlabs~fastclick@v0.6.11",function(a,b){function c(a){"use strict";var b,d=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=a,!a||!a.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return c.prototype.onClick.apply(d,arguments)},this.onMouse=function(){return c.prototype.onMouse.apply(d,arguments)},this.onTouchStart=function(){return c.prototype.onTouchStart.apply(d,arguments)},this.onTouchMove=function(){return c.prototype.onTouchMove.apply(d,arguments)},this.onTouchEnd=function(){return c.prototype.onTouchEnd.apply(d,arguments)},this.onTouchCancel=function(){return c.prototype.onTouchCancel.apply(d,arguments)},c.notNeeded(a)||(this.deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(b=a.onclick,a.addEventListener("click",function(a){b(a)},!1),a.onclick=null))}c.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,c.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),c.prototype.deviceIsIOS4=c.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),c.prototype.deviceIsIOSWithBadTarget=c.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),c.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},c.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!this.deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},c.prototype.sendClick=function(a,b){"use strict";var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},c.prototype.determineEventType=function(a){"use strict";return this.deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},c.prototype.focus=function(a){"use strict";var b;this.deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},c.prototype.updateScrollParent=function(a){"use strict";var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},c.prototype.getTargetElementFromEventTarget=function(a){"use strict";return a.nodeType===Node.TEXT_NODE?a.parentNode:a},c.prototype.onTouchStart=function(a){"use strict";var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],this.deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!this.deviceIsIOS4){if(c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<200&&a.preventDefault(),!0},c.prototype.touchHasMoved=function(a){"use strict";var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},c.prototype.onTouchMove=function(a){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},c.prototype.findControl=function(a){"use strict";return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},c.prototype.onTouchEnd=function(a){"use strict";var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),this.deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||this.deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.deviceIsIOS4&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(e=g.fastClickScrollParent,e&&e.fastClickLastScrollTop!==e.scrollTop)?!0:(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},c.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},c.prototype.onMouse=function(a){"use strict";return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},c.prototype.onClick=function(a){"use strict";var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},c.prototype.destroy=function(){"use strict";var a=this.layer;this.deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},c.notNeeded=function(a){"use strict";var b,d;if("undefined"==typeof window.ontouchstart)return!0;if(d=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!c.prototype.deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(d>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===a.style.msTouchAction?!0:!1},c.attach=function(a){"use strict";return new c(a)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return c}):"undefined"!=typeof b&&b.exports?(b.exports=c.attach,b.exports.FastClick=c):window.FastClick=c}),a.register("component~indexof@0.0.3",function(a,b){b.exports=function(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;++c)if(a[c]===b)return c;return-1}}),a.register("component~classes@1.2.1",function(b,c){function d(a){if(!a)throw new Error("A DOM element reference is required");this.el=a,this.list=a.classList}var e=a("component~indexof@0.0.3"),f=/\s+/,g=Object.prototype.toString;c.exports=function(a){return new d(a)
},d.prototype.add=function(a){if(this.list)return this.list.add(a),this;var b=this.array(),c=e(b,a);return~c||b.push(a),this.el.className=b.join(" "),this},d.prototype.remove=function(a){if("[object RegExp]"==g.call(a))return this.removeMatching(a);if(this.list)return this.list.remove(a),this;var b=this.array(),c=e(b,a);return~c&&b.splice(c,1),this.el.className=b.join(" "),this},d.prototype.removeMatching=function(a){for(var b=this.array(),c=0;c<b.length;c++)a.test(b[c])&&this.remove(b[c]);return this},d.prototype.toggle=function(a,b){return this.list?("undefined"!=typeof b?b!==this.list.toggle(a,b)&&this.list.toggle(a):this.list.toggle(a),this):("undefined"!=typeof b?b?this.add(a):this.remove(a):this.has(a)?this.remove(a):this.add(a),this)},d.prototype.array=function(){var a=this.el.className.replace(/^\s+|\s+$/g,""),b=a.split(f);return""===b[0]&&b.shift(),b},d.prototype.has=d.prototype.contains=function(a){return this.list?this.list.contains(a):!!~e(this.array(),a)}}),a.register("switchery",function(b,c){function d(a,b){if(!(this instanceof d))return new d(a,b);this.element=a,this.options=b||{};for(var c in h)null==this.options[c]&&(this.options[c]=h[c]);null!=this.element&&"checkbox"==this.element.type&&this.init()}var e=a("abpetkov~transitionize@0.0.3"),f=a("ftlabs~fastclick@v0.6.11"),g=a("component~classes@1.2.1");c.exports=d;var h={color:"#64bd63",secondaryColor:"#dfdfdf",jackColor:"#fff",className:"switchery",disabled:!1,disabledOpacity:.5,speed:"0.4s",size:"default"};d.prototype.hide=function(){this.element.style.display="none"},d.prototype.show=function(){var a=this.create();this.insertAfter(this.element,a)},d.prototype.create=function(){return this.switcher=document.createElement("span"),this.jack=document.createElement("small"),this.switcher.appendChild(this.jack),this.switcher.className=this.options.className,this.switcher},d.prototype.insertAfter=function(a,b){a.parentNode.insertBefore(b,a.nextSibling)},d.prototype.isChecked=function(){return this.element.checked},d.prototype.isDisabled=function(){return this.options.disabled||this.element.disabled||this.element.readOnly},d.prototype.setPosition=function(a){var b=this.isChecked(),c=this.switcher,d=this.jack;a&&b?b=!1:a&&!b&&(b=!0),b===!0?(this.element.checked=!0,d.style.left=window.getComputedStyle?parseInt(window.getComputedStyle(c).width)-parseInt(window.getComputedStyle(d).width)+"px":parseInt(c.currentStyle.width)-parseInt(d.currentStyle.width)+"px",this.options.color&&this.colorize(),this.setSpeed()):(d.style.left=0,this.element.checked=!1,this.switcher.style.boxShadow="inset 0 0 0 0 "+this.options.secondaryColor,this.switcher.style.borderColor=this.options.secondaryColor,this.switcher.style.backgroundColor=this.options.secondaryColor!==h.secondaryColor?this.options.secondaryColor:"#fff",this.jack.style.backgroundColor=this.options.jackColor,this.setSpeed())},d.prototype.setSpeed=function(){var a={},b={left:this.options.speed.replace(/[a-z]/,"")/2+"s"};a=this.isChecked()?{border:this.options.speed,"box-shadow":this.options.speed,"background-color":3*this.options.speed.replace(/[a-z]/,"")+"s"}:{border:this.options.speed,"box-shadow":this.options.speed},e(this.switcher,a),e(this.jack,b)},d.prototype.setSize=function(){var a="switchery-small",b="switchery-default",c="switchery-large";switch(this.options.size){case"small":g(this.switcher).add(a);break;case"large":g(this.switcher).add(c);break;default:g(this.switcher).add(b)}},d.prototype.colorize=function(){var a=this.switcher.offsetHeight/2;this.switcher.style.backgroundColor=this.options.color,this.switcher.style.borderColor=this.options.color,this.switcher.style.boxShadow="inset 0 0 0 "+a+"px "+this.options.color,this.jack.style.backgroundColor=this.options.jackColor},d.prototype.handleOnchange=function(){if(document.dispatchEvent){var a=document.createEvent("HTMLEvents");a.initEvent("change",!0,!0),this.element.dispatchEvent(a)}else this.element.fireEvent("onchange")},d.prototype.handleChange=function(){var a=this,b=this.element;b.addEventListener?b.addEventListener("change",function(){a.setPosition()}):b.attachEvent("onchange",function(){a.setPosition()})},d.prototype.handleClick=function(){var a=this,b=this.switcher,c=a.element.parentNode.tagName.toLowerCase(),d="label"===c?!1:!0;this.isDisabled()===!1?(f(b),b.addEventListener?b.addEventListener("click",function(){a.setPosition(d),a.handleOnchange(a.element.checked)}):b.attachEvent("onclick",function(){a.setPosition(d),a.handleOnchange(a.element.checked)})):(this.element.disabled=!0,this.switcher.style.opacity=this.options.disabledOpacity)},d.prototype.markAsSwitched=function(){this.element.setAttribute("data-switchery",!0)},d.prototype.markedAsSwitched=function(){return this.element.getAttribute("data-switchery")},d.prototype.init=function(){this.hide(),this.show(),this.setSize(),this.setPosition(),this.markAsSwitched(),this.handleChange(),this.handleClick()}}),"object"==typeof exports?module.exports=a("switchery"):"function"==typeof define&&define.amd?define("Switchery",[],function(){return a("switchery")}):(this||window).Switchery=a("switchery")}(),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}}),function(a,b){a(function(){"use strict";function a(a){for(var b in a)o.call(a,b)&&(a[b]=new RegExp(a[b],"i"))}function c(a,b){for(var c in a)if(o.call(a,c)&&a[c].test(b))return c;return null}function d(a,b){var c,d,e,f,g=m.props;if(o.call(g,a))for(c=g[a],e=c.length,d=0;e>d;++d)if(f=c[d].exec(b),null!==f)return f[1];return null}function e(a,b){var c=d(a,b);return c?f(c):0/0}function f(a){var b;return b=a.split(/[a-z._ \/\-]/i),1===b.length&&(a=b[0]),b.length>1&&(a=b[0]+".",b.shift(),a+=b.join("")),Number(a)}function g(a,b){return null!=a&&null!=b&&a.toLowerCase()===b.toLowerCase()}function h(a){return n.fullPattern.test(a)||n.shortPattern.test(a.substr(0,4))}function i(a,d,e){if(a.mobile===b){var f,g,i;return(g=c(m.tablets,d))?(a.mobile=a.tablet=g,void(a.phone=null)):(f=c(m.phones,d))?(a.mobile=a.phone=f,void(a.tablet=null)):void(h(d)?(i=k.isPhoneSized(e),i===b?a.mobile=a.tablet=a.phone=r:i?(a.mobile=a.phone=p,a.tablet=null):(a.mobile=a.tablet=q,a.phone=null)):a.mobile=a.tablet=a.phone=null)}}function j(a){var b=null!==a.mobile();return a.os("iOS")&&a.version("iPad")>=4.3||a.os("iOS")&&a.version("iPhone")>=3.1||a.os("iOS")&&a.version("iPod")>=3.1||a.version("Android")>2.1&&a.is("Webkit")||a.version("Windows Phone OS")>=7||a.is("BlackBerry")&&a.version("BlackBerry")>=6||a.match("Playbook.*Tablet")||a.version("webOS")>=1.4&&a.match("Palm|Pre|Pixi")||a.match("hp.*TouchPad")||a.is("Firefox")&&a.version("Firefox")>=12||a.is("Chrome")&&a.is("AndroidOS")&&a.version("Android")>=4||a.is("Skyfire")&&a.version("Skyfire")>=4.1&&a.is("AndroidOS")&&a.version("Android")>=2.3||a.is("Opera")&&a.version("Opera Mobi")>11&&a.is("AndroidOS")||a.is("MeeGoOS")||a.is("Tizen")||a.is("Dolfin")&&a.version("Bada")>=2||(a.is("UC Browser")||a.is("Dolfin"))&&a.version("Android")>=2.3||a.match("Kindle Fire")||a.is("Kindle")&&a.version("Kindle")>=3||a.is("AndroidOS")&&a.is("NookTablet")||a.version("Chrome")>=11&&!b||a.version("Safari")>=5&&!b||a.version("Firefox")>=4&&!b||a.version("MSIE")>=7&&!b||a.version("Opera")>=10&&!b?"A":a.os("iOS")&&a.version("iPad")<4.3||a.os("iOS")&&a.version("iPhone")<3.1||a.os("iOS")&&a.version("iPod")<3.1||a.is("Blackberry")&&a.version("BlackBerry")>=5&&a.version("BlackBerry")<6||a.version("Opera Mini")>=5&&a.version("Opera Mini")<=6.5&&(a.version("Android")>=2.3||a.is("iOS"))||a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3")||a.version("Opera Mobi")>=11&&a.is("SymbianOS")?"B":(a.version("BlackBerry")<5||a.match("MSIEMobile|Windows CE.*Mobile")||a.version("Windows Mobile")<=5.2,"C")}function k(a,b){this.ua=a||"",this._cache={},this.maxPhoneWidth=b||650}var l,m={phones:{iPhone:"\\biPhone\\b|\\biPod\\b",BlackBerry:"BlackBerry|\\bBB10\\b|rim[0-9]+",HTC:"HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",Nexus:"Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",Dell:"Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",Motorola:"Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925",Samsung:"Samsung|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750",LG:"\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)",Sony:"SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",Asus:"Asus.*Galaxy|PadFone.*Mobile",Micromax:"Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",Palm:"PalmSource|Palm",Vertu:"Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",Pantech:"PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",Fly:"IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",iMobile:"i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",SimValley:"\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",Wolfgang:"AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",Alcatel:"Alcatel",Nintendo:"Nintendo 3DS",Amoi:"Amoi",INQ:"INQ",GenericPhone:"Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"},tablets:{iPad:"iPad|iPad.*Mobile",NexusTablet:"Android.*Nexus[\\s]+(7|9|10)|^.*Android.*Nexus(?:(?!Mobile).)*$",SamsungTablet:"SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-I9205|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T707A|SM-T807A|SM-T237P|SM-T807P|SM-P607T|SM-T217T|SM-T337T",Kindle:"Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\\b",SurfaceTablet:"Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",HPTablet:"HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",AsusTablet:"^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG",BlackBerryTablet:"PlayBook|RIM Tablet",HTCtablet:"HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",MotorolaTablet:"xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",NookTablet:"Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",AcerTablet:"Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b",ToshibaTablet:"Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",LGTablet:"\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",FujitsuTablet:"Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",PrestigioTablet:"PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD",LenovoTablet:"Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",DellTablet:"Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",YarvikTablet:"Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",MedionTablet:"Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",ArnovaTablet:"AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",IntensoTablet:"INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",IRUTablet:"M702pro",MegafonTablet:"MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",EbodaTablet:"E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",AllViewTablet:"Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",ArchosTablet:"\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",AinolTablet:"NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",SonyTablet:"Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551",PhilipsTablet:"\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",CubeTablet:"Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",CobyTablet:"MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",MIDTablet:"M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733",MSITablet:"MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",SMiTTablet:"Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",RockChipTablet:"Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",FlyTablet:"IQ310|Fly Vision",bqTablet:"bq.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant)|Maxwell.*Lite|Maxwell.*Plus",HuaweiTablet:"MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",NecTablet:"\\bN-06D|\\bN-08D",PantechTablet:"Pantech.*P4100",BronchoTablet:"Broncho.*(N701|N708|N802|a710)",VersusTablet:"TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",ZyncTablet:"z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",PositivoTablet:"TB07STA|TB10STA|TB07FTA|TB10FTA",NabiTablet:"Android.*\\bNabi",KoboTablet:"Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",DanewTablet:"DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",TexetTablet:"NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",PlaystationTablet:"Playstation.*(Portable|Vita)",TrekstorTablet:"ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",PyleAudioTablet:"\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",AdvanTablet:"Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",DanyTechTablet:"Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",GalapadTablet:"Android.*\\bG1\\b",MicromaxTablet:"Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",KarbonnTablet:"Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",AllFineTablet:"Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",PROSCANTablet:"\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",YONESTablet:"BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",ChangJiaTablet:"TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",GUTablet:"TX-A1301|TX-M9002|Q702|kf026",PointOfViewTablet:"TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",OvermaxTablet:"OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",HCLTablet:"HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",DPSTablet:"DPS Dream 9|DPS Dual 7",VistureTablet:"V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",CrestaTablet:"CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",MediatekTablet:"\\bMT8125|MT8389|MT8135|MT8377\\b",ConcordeTablet:"Concorde([ ]+)?Tab|ConCorde ReadMan",GoCleverTablet:"GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",ModecomTablet:"FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",VoninoTablet:"\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",ECSTablet:"V07OT2|TM105A|S10OT1|TR10CS1",StorexTablet:"eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",VodafoneTablet:"SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",EssentielBTablet:"Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",RossMoorTablet:"RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",iMobileTablet:"i-mobile i-note",TolinoTablet:"tolino tab [0-9.]+|tolino shine",AudioSonicTablet:"\\bC-22Q|T7-QC|T-17B|T-17P\\b",AMPETablet:"Android.* A78 ",SkkTablet:"Android.* (SKYPAD|PHOENIX|CYCLOPS)",TecnoTablet:"TECNO P9",JXDTablet:"Android.*\\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",iJoyTablet:"Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",FX2Tablet:"FX2 PAD7|FX2 PAD10",XoroTablet:"KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",ViewsonicTablet:"ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",OdysTablet:"LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",CaptivaTablet:"CAPTIVA PAD",IconbitTablet:"NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",TeclastTablet:"T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",JaytechTablet:"TPC-PA762",BlaupunktTablet:"Endeavour 800NG|Endeavour 1010",DigmaTablet:"\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",EvolioTablet:"ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",LavaTablet:"QPAD E704|\\bIvoryS\\b|E-TAB IVORY",CelkonTablet:"CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",MiTablet:"\\bMI PAD\\b|\\bHM NOTE 1W\\b",NibiruTablet:"Nibiru M1|Nibiru Jupiter One",NexoTablet:"NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",UbislateTablet:"UbiSlate[\\s]?7C",PocketBookTablet:"Pocketbook",Hudl:"Hudl HT7S3",TelstraTablet:"T-Hub2",GenericTablet:"Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b"},oss:{AndroidOS:"Android",BlackBerryOS:"blackberry|\\bBB10\\b|rim tablet os",PalmOS:"PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",SymbianOS:"Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",WindowsMobileOS:"Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",WindowsPhoneOS:"Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",iOS:"\\biPhone.*Mobile|\\biPod|\\biPad",MeeGoOS:"MeeGo",MaemoOS:"Maemo",JavaOS:"J2ME/|\\bMIDP\\b|\\bCLDC\\b",webOS:"webOS|hpwOS",badaOS:"\\bBada\\b",BREWOS:"BREW"},uas:{Chrome:"\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",Dolfin:"\\bDolfin\\b",Opera:"Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",Skyfire:"Skyfire",IE:"IEMobile|MSIEMobile",Firefox:"fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",Bolt:"bolt",TeaShark:"teashark",Blazer:"Blazer",Safari:"Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",Tizen:"Tizen",UCBrowser:"UC.*Browser|UCWEB",baiduboxapp:"baiduboxapp",baidubrowser:"baidubrowser",DiigoBrowser:"DiigoBrowser",Puffin:"Puffin",Mercury:"\\bMercury\\b",ObigoBrowser:"Obigo",NetFront:"NF-Browser",GenericBrowser:"NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"},props:{Mobile:"Mobile/[VER]",Build:"Build/[VER]",Version:"Version/[VER]",VendorID:"VendorID/[VER]",iPad:"iPad.*CPU[a-z ]+[VER]",iPhone:"iPhone.*CPU[a-z ]+[VER]",iPod:"iPod.*CPU[a-z ]+[VER]",Kindle:"Kindle/[VER]",Chrome:["Chrome/[VER]","CriOS/[VER]","CrMo/[VER]"],Coast:["Coast/[VER]"],Dolfin:"Dolfin/[VER]",Firefox:"Firefox/[VER]",Fennec:"Fennec/[VER]",IE:["IEMobile/[VER];","IEMobile [VER]","MSIE [VER];"],NetFront:"NetFront/[VER]",NokiaBrowser:"NokiaBrowser/[VER]",Opera:[" OPR/[VER]","Opera Mini/[VER]","Version/[VER]"],"Opera Mini":"Opera Mini/[VER]","Opera Mobi":"Version/[VER]","UC Browser":"UC Browser[VER]",MQQBrowser:"MQQBrowser/[VER]",MicroMessenger:"MicroMessenger/[VER]",baiduboxapp:"baiduboxapp/[VER]",baidubrowser:"baidubrowser/[VER]",Iron:"Iron/[VER]",Safari:["Version/[VER]","Safari/[VER]"],Skyfire:"Skyfire/[VER]",Tizen:"Tizen/[VER]",Webkit:"webkit[ /][VER]",Gecko:"Gecko/[VER]",Trident:"Trident/[VER]",Presto:"Presto/[VER]",iOS:" \\bOS\\b [VER] ",Android:"Android [VER]",BlackBerry:["BlackBerry[\\w]+/[VER]","BlackBerry.*Version/[VER]","Version/[VER]"],BREW:"BREW [VER]",Java:"Java/[VER]","Windows Phone OS":["Windows Phone OS [VER]","Windows Phone [VER]"],"Windows Phone":"Windows Phone [VER]","Windows CE":"Windows CE/[VER]","Windows NT":"Windows NT [VER]",Symbian:["SymbianOS/[VER]","Symbian/[VER]"],webOS:["webOS/[VER]","hpwOS/[VER];"]},utils:{DesktopMode:"WPDesktop",TV:"SonyDTV|HbbTV",WebKit:"(webkit)[ /]([\\w.]+)",Bot:"Googlebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|facebookexternalhit",MobileBot:"Googlebot-Mobile|YahooSeeker/M1A1-R2D2",Console:"\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",Watch:"SM-V700"}},n={fullPattern:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,shortPattern:/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i},o=Object.prototype.hasOwnProperty,p="UnknownPhone",q="UnknownTablet",r="UnknownMobile";
return l="isArray"in Array?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},function(){var b,c,d,e,f,g;for(b in m.props)if(o.call(m.props,b)){for(c=m.props[b],l(c)||(c=[c]),f=c.length,e=0;f>e;++e)d=c[e],g=d.indexOf("[VER]"),g>=0&&(d=d.substring(0,g)+"([\\w._\\+]+)"+d.substring(g+5)),c[e]=new RegExp(d,"i");m.props[b]=c}a(m.oss),a(m.phones),a(m.tablets),a(m.uas),a(m.utils),m.oss0={WindowsPhoneOS:m.oss.WindowsPhoneOS,WindowsMobileOS:m.oss.WindowsMobileOS}}(),k.prototype={constructor:k,mobile:function(){return i(this._cache,this.ua,this.maxPhoneWidth),this._cache.mobile},phone:function(){return i(this._cache,this.ua,this.maxPhoneWidth),this._cache.phone},tablet:function(){return i(this._cache,this.ua,this.maxPhoneWidth),this._cache.tablet},userAgent:function(){return this._cache.userAgent===b&&(this._cache.userAgent=c(m.uas,this.ua)),this._cache.userAgent},os:function(){return this._cache.os===b&&(this._cache.os=c(m.oss0,this.ua)||c(m.oss,this.ua)),this._cache.os},version:function(a){return e(a,this.ua)},versionStr:function(a){return d(a,this.ua)},is:function(a){return g(a,this.userAgent())||g(a,this.os())||g(a,this.phone())||g(a,this.tablet())||g(a,c(m.utils,this.ua))},match:function(a){return a instanceof RegExp||(a=new RegExp(a,"i")),a.test(this.ua)},isPhoneSized:function(a){return k.isPhoneSized(a||this.maxPhoneWidth)},mobileGrade:function(){return this._cache.grade===b&&(this._cache.grade=j(this)),this._cache.grade}},k.isPhoneSized="undefined"!=typeof window&&window.screen&&window.screen.width?function(a){if(0>a)return b;var c=window.screen.width,d=window.devicePixelRatio||1,e=c/d;return a>=e}:function(){},k})}(function(){if("function"==typeof define&&define.amd)return define;if("undefined"!=typeof module&&module.exports)return function(a){module.exports=a()};if("undefined"!=typeof window)return function(a){window.MobileDetect=a()};throw new Error("unknown environment")}()),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})}),function(a){function b(a,b,c){if(8==i){var d=n.width(),e=g.debounce(function(){var a=n.width();d!=a&&(d=a,c())},a);n.on(b,e)}else n.on(b,g.debounce(c,a))}function c(a){window.console&&window.console&&window.console.log&&window.console.log("jQuery.floatThead: "+a)}function d(){var b=a('<div style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;width:100%"></div>');a("body").append(b);var c=b.innerWidth(),d=a("div",b).innerWidth();return b.remove(),c-d}function e(a){if(a.dataTableSettings)for(var b=0;b<a.dataTableSettings.length;b++){var c=a.dataTableSettings[b].nTable;if(a[0]==c)return!0}return!1}function f(a,b,c){var d=c?"outerWidth":"width";if(l&&a.css("max-width")){var e=0;c&&(e+=parseInt(a.css("borderLeft"),10),e+=parseInt(a.css("borderRight"),10));for(var f=0;f<b.length;f++)e+=b.get(f).offsetWidth;return e}return a[d]()}a.floatThead=a.floatThead||{},a.floatThead.defaults={cellTag:null,headerCellSelector:"tr:visible:first>*:visible",zIndex:1001,debounceResizeMs:10,useAbsolutePositioning:!0,scrollingTop:0,scrollingBottom:0,scrollContainer:function(){return a([])},getSizingRow:function(a){return a.find("tbody tr:visible:first>*:visible")},floatTableClass:"floatThead-table",floatWrapperClass:"floatThead-wrapper",floatContainerClass:"floatThead-container",copyTableClass:!0,enableAria:!1,autoReflow:!1,debug:!1};var g=window._,h="undefined"!=typeof MutationObserver,i=function(){for(var a=3,b=document.createElement("b"),c=b.all||[];a=1+a,b.innerHTML="<!--[if gt IE "+a+"]><i><![endif]-->",c[0];);return a>4?a:document.documentMode}(),j=/Gecko\//.test(navigator.userAgent),k=/WebKit\//.test(navigator.userAgent),l=function(){if(k){var b=a('<div style="width:0px"><table style="max-width:100%"><tr><th><div style="min-width:100px;">X</div></th></tr></table></div>');a("body").append(b);var c=0==b.find("table").width();return b.remove(),c}return!1},m=!j&&!i,n=a(window);a.fn.floatThead=function(j){if(j=j||{},!g&&(g=window._||a.floatThead._,!g))throw new Error("jquery.floatThead-slim.js requires underscore. You should use the non-lite version since you do not have underscore.");if(8>i)return this;m&&(document.createElement("fthtr"),document.createElement("fthtd"),document.createElement("fthfoot"));var o=null;if(g.isFunction(l)&&(l=l()),g.isString(j)){var p=j,q=this;return this.filter("table").each(function(){var b=a(this).data("floatThead-attached");if(b&&g.isFunction(b[p])){var c=b[p]();"undefined"!=typeof c&&(q=c)}}),q}var r=a.extend({},a.floatThead.defaults||{},j);if(a.each(j,function(b){b in a.floatThead.defaults||!r.debug||c("Used ["+b+"] key to init plugin, but that param is not an option for the plugin. Valid options are: "+g.keys(a.floatThead.defaults).join(", "))}),r.debug){var s=a.fn.jquery.split(".");1==parseInt(s[0],10)&&parseInt(s[1],10)<=7&&c("jQuery version "+a.fn.jquery+" detected! This plugin supports 1.8 or better, or 1.7.x with jQuery UI 1.8.24 -> http://jqueryui.com/resources/download/jquery-ui-1.8.24.zip")}return this.filter(":not(."+r.floatTableClass+")").each(function(){function c(a){return a+".fth-"+B+".floatTHead"}function j(){var b=0;D.find("tr:visible").each(function(){b+=a(this).outerHeight(!0)}),bb.outerHeight(b),cb.outerHeight(b)}function l(){var a=f(C,fb,!0),b=L.width()||a,c="hidden"!=L.css("overflow-y")?b-I.vertical:b;if($.width(c),R){var d=100*a/c;V.css("width",d+"%")}else V.outerWidth(a)}function p(){F=(g.isFunction(r.scrollingTop)?r.scrollingTop(C):r.scrollingTop)||0,G=(g.isFunction(r.scrollingBottom)?r.scrollingBottom(C):r.scrollingBottom)||0}function q(){var b,c;if(Y)b=X.find("col").length;else{var d;if(d=null==r.cellTag&&r.headerCellSelector?r.headerCellSelector:"tr:first>"+r.cellTag,g.isNumber(d))return d;c=D.find(d),b=0,c.each(function(){b+=parseInt(a(this).attr("colspan")||1,10)})}if(b!=K){K=b;for(var e,f=[],h=[],i=[],j=0;b>j;j++)f.push(r.enableAria&&(e=c.eq(j).text())?'<th scope="col" class="floatThead-col">'+e+"</th>":'<th class="floatThead-col"/>'),h.push("<col/>"),i.push("<fthtd style='display:table-cell;height:0;width:auto;'/>");h=h.join(""),f=f.join(""),m&&(i=i.join(""),Z.html(i),fb=Z.find("fthtd")),bb.html(f),cb=bb.find("th"),Y||X.html(h),db=X.find("col"),W.html(h),eb=W.find("col")}return b}function s(){if(!H){if(H=!0,M){var a=f(C,fb),b=T.width();a>b&&C.css("minWidth",a)}C.css(ib),V.css(ib),V.append(D),E.before(ab),j()}}function t(){H&&(H=!1,M&&C.width(kb),ab.detach(),C.prepend(D),C.css(jb),V.css(jb),C.css("minWidth",lb),C.css("minWidth",f(C,fb)))}function u(a){M!=a&&(M=a,$.css({position:M?"absolute":"fixed"}))}function v(a,b,c,d){return m?c:d?r.getSizingRow(a,b,c):b}function w(){var a,b=q();return function(){db=X.find("col");var c=v(C,db,fb,i);if(c.length==b&&b>0){if(!Y)for(a=0;b>a;a++)db.eq(a).css("width","");t();var d=[];for(a=0;b>a;a++)d[a]=c.get(a).offsetWidth;for(a=0;b>a;a++)eb.eq(a).width(d[a]),db.eq(a).width(d[a]);s()}else V.append(D),C.css(jb),V.css(jb),j()}}function x(a){var b=L.css("border-"+a+"-width"),c=0;return b&&~b.indexOf("px")&&(c=parseInt(b,10)),c}function y(){var a,b=L.scrollTop(),c=0,d=O?N.outerHeight(!0):0,e=P?d:-d,f=$.height(),g=C.offset(),h=0;if(R){var i=L.offset();c=g.top-i.top+b,O&&P&&(c+=d),c-=x("top"),h=x("left")}else a=g.top-F-f+G+I.horizontal;var j=n.scrollTop(),l=n.scrollLeft(),m=L.scrollLeft();return b=L.scrollTop(),function(i){var o=C[0].offsetWidth<=0&&C[0].offsetHeight<=0;if(!o&&_)return _=!1,setTimeout(function(){C.trigger("reflow")},1),null;if(o&&(_=!0,!M))return null;if("windowScroll"==i?(j=n.scrollTop(),l=n.scrollLeft()):"containerScroll"==i?(b=L.scrollTop(),m=L.scrollLeft()):"init"!=i&&(j=n.scrollTop(),l=n.scrollLeft(),b=L.scrollTop(),m=L.scrollLeft()),!k||!(0>j||0>l)){if(U)u("windowScrollDone"==i?!0:!1);else if("windowScrollDone"==i)return null;g=C.offset(),O&&P&&(g.top+=d);var p,q,r=C.outerHeight();if(R&&M){if(c>=b){var v=c-b;p=v>0?v:0}else p=S?0:b;q=h}else!R&&M?(j>a+r+e?p=r-f+e:g.top>j+F?(p=0,t()):(p=F+j-g.top+c+(P?d:0),s()),q=0):R&&!M?(c>b||b-c>r?(p=g.top-j,t()):(p=g.top+b-j-c,s()),q=g.left+m-l):R||M||(j>a+r+e?p=r+F-j+a+e:g.top>j+F?(p=g.top-j,s()):p=F,q=g.left-l);return{top:p,left:q}}}}function z(){var a=null,b=null,c=null;return function(d,e,f){null==d||a==d.top&&b==d.left||($.css({top:d.top,left:d.left}),a=d.top,b=d.left),e&&l(),f&&j();var g=L.scrollLeft();M&&c==g||($.scrollLeft(g),c=g)}}function A(){if(L.length)if(L.data().perfectScrollbar)I={horizontal:0,vertical:0};else{var a=L.width(),b=L.height(),c=C.height(),d=f(C,fb),e=d>a?J:0,g=c>b?J:0;I.horizontal=d>a-g?J:0,I.vertical=c>b-e?J:0}}var B=g.uniqueId(),C=a(this);if(C.data("floatThead-attached"))return!0;if(!C.is("table"))throw new Error('jQuery.floatThead must be run on a table element. ex: $("table").floatThead();');h=r.autoReflow&&h;var D=C.find("thead:first"),E=C.find("tbody:first");if(0==D.length)throw new Error("jQuery.floatThead must be run on a table that contains a <thead> element");var F,G,H=!1,I={vertical:0,horizontal:0},J=d(),K=0,L=r.scrollContainer(C)||a([]),M=r.useAbsolutePositioning;null==M&&(M=r.scrollContainer(C).length),M||(H=!0);var N=C.find("caption"),O=1==N.length;if(O)var P="top"===(N.css("caption-side")||N.attr("align")||"top");var Q=a('<fthfoot style="display:table-footer-group;border-spacing:0;height:0;border-collapse:collapse;"/>'),R=L.length>0,S=!1,T=a([]),U=9>=i&&!R&&M,V=a("<table/>"),W=a("<colgroup/>"),X=C.find("colgroup:first"),Y=!0;0==X.length&&(X=a("<colgroup/>"),Y=!1);var Z=a('<fthrow style="display:table-row;border-spacing:0;height:0;border-collapse:collapse"/>'),$=a('<div style="overflow: hidden;" aria-hidden="true" class="floatThead-floatContainer"></div>'),_=!1,ab=a("<thead/>"),bb=a('<tr class="size-row"/>'),cb=a([]),db=a([]),eb=a([]),fb=a([]);ab.append(bb),C.prepend(X),m&&(Q.append(Z),C.append(Q)),V.append(W),$.append(V),r.copyTableClass&&V.attr("class",C.attr("class")),V.attr({cellpadding:C.attr("cellpadding"),cellspacing:C.attr("cellspacing"),border:C.attr("border")});var gb=C.css("display");if(V.css({borderCollapse:C.css("borderCollapse"),border:C.css("border"),display:gb}),"none"==gb&&(_=!0),V.addClass(r.floatTableClass).css("margin",0),M){var hb=function(a,b){var c=a.css("position"),d="relative"==c||"absolute"==c;if(!d||b){var e={paddingLeft:a.css("paddingLeft"),paddingRight:a.css("paddingRight")};$.css(e),a=a.wrap("<div class='"+r.floatWrapperClass+"' style='position: relative; clear:both;'></div>").parent(),S=!0}return a};R?(T=hb(L,!0),T.append($)):(T=hb(C),C.after($))}else C.after($);$.css({position:M?"absolute":"fixed",marginTop:0,top:M?0:"auto",zIndex:r.zIndex}),$.addClass(r.floatContainerClass),p();var ib={"table-layout":"fixed"},jb={"table-layout":C.css("tableLayout")||"auto"},kb=C[0].style.width||"",lb=C.css("minWidth")||"";
A();var mb,nb=function(){(mb=w())()};nb();var ob=y(),pb=z();pb(ob("init"),!0);var qb=g.debounce(function(){pb(ob("windowScrollDone"),!1)},300),rb=function(){pb(ob("windowScroll"),!1),qb()},sb=function(){pb(ob("containerScroll"),!1)},tb=function(){p(),A(),nb(),ob=y(),(pb=z())(ob("resize"),!0,!0)},ub=g.debounce(function(){A(),p(),nb(),ob=y(),pb(ob("reflow"),!0)},1);if(R?M?L.on(c("scroll"),sb):(L.on(c("scroll"),sb),n.on(c("scroll"),rb)):n.on(c("scroll"),rb),n.on(c("load"),ub),b(r.debounceResizeMs,c("resize"),tb),C.on("reflow",ub),e(C)&&C.on("filter",ub).on("sort",ub).on("page",ub),h){var vb=L.length?L[0]:C[0];o=new MutationObserver(function(a){for(var b=function(a){return a&&a[0]&&"THEAD"==a[0].nodeName},c=0;c<a.length;c++)if(!b(a[c].addedNodes)&&!b(a[c].removedNodes)){ub();break}}),o.observe(vb,{childList:!0,subtree:!0})}C.data("floatThead-attached",{destroy:function(){var a=".fth-"+B;t(),C.css(jb),X.remove(),m&&Q.remove(),ab.parent().length&&ab.replaceWith(D),h&&(o.disconnect(),o=null),C.off("reflow"),L.off(a),S&&(L.length?L.unwrap():C.unwrap()),C.css("minWidth",lb),$.remove(),C.data("floatThead-attached",!1),n.off(a)},reflow:function(){ub()},setHeaderHeight:function(){j()},getFloatContainer:function(){return $},getRowGroups:function(){return H?$.find("thead").add(C.find("tbody,tfoot")):C.find("thead,tbody,tfoot")}})}),this}}(jQuery),function(a){a.floatThead=a.floatThead||{},a.floatThead._=window._||function(){var b={},c=Object.prototype.hasOwnProperty,d=["Arguments","Function","String","Number","Date","RegExp"];b.has=function(a,b){return c.call(a,b)},b.keys=function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[];for(var d in a)b.has(a,d)&&c.push(d);return c};var e=0;return b.uniqueId=function(a){var b=++e+"";return a?a+b:b},a.each(d,function(){var a=this;b["is"+a]=function(b){return Object.prototype.toString.call(b)=="[object "+a+"]"}}),b.debounce=function(a,b,c){var d,e,f,g,h;return function(){f=this,e=arguments,g=new Date;var i=function(){var j=new Date-g;b>j?d=setTimeout(i,b-j):(d=null,c||(h=a.apply(f,e)))},j=c&&!d;return d||(d=setTimeout(i,b)),j&&(h=a.apply(f,e)),h}},b}()}(jQuery),!function(a){function b(a,b,c){if(8==i){var d=n.width(),e=g.debounce(function(){var a=n.width();d!=a&&(d=a,c())},a);n.on(b,e)}else n.on(b,g.debounce(c,a))}function c(a){window.console&&window.console&&window.console.log&&window.console.log("jQuery.floatThead: "+a)}function d(){var b=a('<div style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;width:100%"></div>');a("body").append(b);var c=b.innerWidth(),d=a("div",b).innerWidth();return b.remove(),c-d}function e(a){if(a.dataTableSettings)for(var b=0;b<a.dataTableSettings.length;b++){var c=a.dataTableSettings[b].nTable;if(a[0]==c)return!0}return!1}function f(a,b,c){var d=c?"outerWidth":"width";if(l&&a.css("max-width")){var e=0;c&&(e+=parseInt(a.css("borderLeft"),10),e+=parseInt(a.css("borderRight"),10));for(var f=0;f<b.length;f++)e+=b.get(f).offsetWidth;return e}return a[d]()}a.floatThead=a.floatThead||{},a.floatThead.defaults={cellTag:null,headerCellSelector:"tr:visible:first>*:visible",zIndex:1001,debounceResizeMs:10,useAbsolutePositioning:!0,scrollingTop:0,scrollingBottom:0,scrollContainer:function(){return a([])},getSizingRow:function(a){return a.find("tbody tr:visible:first>*:visible")},floatTableClass:"floatThead-table",floatWrapperClass:"floatThead-wrapper",floatContainerClass:"floatThead-container",copyTableClass:!0,enableAria:!1,autoReflow:!1,debug:!1};var g=window._,h="undefined"!=typeof MutationObserver,i=function(){for(var a=3,b=document.createElement("b"),c=b.all||[];a=1+a,b.innerHTML="<!--[if gt IE "+a+"]><i><![endif]-->",c[0];);return a>4?a:document.documentMode}(),j=/Gecko\//.test(navigator.userAgent),k=/WebKit\//.test(navigator.userAgent),l=function(){if(k){var b=a('<div style="width:0px"><table style="max-width:100%"><tr><th><div style="min-width:100px;">X</div></th></tr></table></div>');a("body").append(b);var c=0==b.find("table").width();return b.remove(),c}return!1},m=!j&&!i,n=a(window);a.fn.floatThead=function(j){if(j=j||{},!g&&(g=window._||a.floatThead._,!g))throw new Error("jquery.floatThead-slim.js requires underscore. You should use the non-lite version since you do not have underscore.");if(8>i)return this;m&&(document.createElement("fthtr"),document.createElement("fthtd"),document.createElement("fthfoot"));var o=null;if(g.isFunction(l)&&(l=l()),g.isString(j)){var p=j,q=this;return this.filter("table").each(function(){var b=a(this).data("floatThead-attached");if(b&&g.isFunction(b[p])){var c=b[p]();"undefined"!=typeof c&&(q=c)}}),q}var r=a.extend({},a.floatThead.defaults||{},j);if(a.each(j,function(b){b in a.floatThead.defaults||!r.debug||c("Used ["+b+"] key to init plugin, but that param is not an option for the plugin. Valid options are: "+g.keys(a.floatThead.defaults).join(", "))}),r.debug){var s=a.fn.jquery.split(".");1==parseInt(s[0],10)&&parseInt(s[1],10)<=7&&c("jQuery version "+a.fn.jquery+" detected! This plugin supports 1.8 or better, or 1.7.x with jQuery UI 1.8.24 -> http://jqueryui.com/resources/download/jquery-ui-1.8.24.zip")}return this.filter(":not(."+r.floatTableClass+")").each(function(){function c(a){return a+".fth-"+B+".floatTHead"}function j(){var b=0;D.find("tr:visible").each(function(){b+=a(this).outerHeight(!0)}),bb.outerHeight(b),cb.outerHeight(b)}function l(){var a=f(C,fb,!0),b=L.width()||a,c="hidden"!=L.css("overflow-y")?b-I.vertical:b;if($.width(c),R){var d=100*a/c;V.css("width",d+"%")}else V.outerWidth(a)}function p(){F=(g.isFunction(r.scrollingTop)?r.scrollingTop(C):r.scrollingTop)||0,G=(g.isFunction(r.scrollingBottom)?r.scrollingBottom(C):r.scrollingBottom)||0}function q(){var b,c;if(Y)b=X.find("col").length;else{var d;if(d=null==r.cellTag&&r.headerCellSelector?r.headerCellSelector:"tr:first>"+r.cellTag,g.isNumber(d))return d;c=D.find(d),b=0,c.each(function(){b+=parseInt(a(this).attr("colspan")||1,10)})}if(b!=K){K=b;for(var e,f=[],h=[],i=[],j=0;b>j;j++)f.push(r.enableAria&&(e=c.eq(j).text())?'<th scope="col" class="floatThead-col">'+e+"</th>":'<th class="floatThead-col"/>'),h.push("<col/>"),i.push("<fthtd style='display:table-cell;height:0;width:auto;'/>");h=h.join(""),f=f.join(""),m&&(i=i.join(""),Z.html(i),fb=Z.find("fthtd")),bb.html(f),cb=bb.find("th"),Y||X.html(h),db=X.find("col"),W.html(h),eb=W.find("col")}return b}function s(){if(!H){if(H=!0,M){var a=f(C,fb),b=T.width();a>b&&C.css("minWidth",a)}C.css(ib),V.css(ib),V.append(D),E.before(ab),j()}}function t(){H&&(H=!1,M&&C.width(kb),ab.detach(),C.prepend(D),C.css(jb),V.css(jb),C.css("minWidth",lb),C.css("minWidth",f(C,fb)))}function u(a){M!=a&&(M=a,$.css({position:M?"absolute":"fixed"}))}function v(a,b,c,d){return m?c:d?r.getSizingRow(a,b,c):b}function w(){var a,b=q();return function(){db=X.find("col");var c=v(C,db,fb,i);if(c.length==b&&b>0){if(!Y)for(a=0;b>a;a++)db.eq(a).css("width","");t();var d=[];for(a=0;b>a;a++)d[a]=c.get(a).offsetWidth;for(a=0;b>a;a++)eb.eq(a).width(d[a]),db.eq(a).width(d[a]);s()}else V.append(D),C.css(jb),V.css(jb),j()}}function x(a){var b=L.css("border-"+a+"-width"),c=0;return b&&~b.indexOf("px")&&(c=parseInt(b,10)),c}function y(){var a,b=L.scrollTop(),c=0,d=O?N.outerHeight(!0):0,e=P?d:-d,f=$.height(),g=C.offset(),h=0;if(R){var i=L.offset();c=g.top-i.top+b,O&&P&&(c+=d),c-=x("top"),h=x("left")}else a=g.top-F-f+G+I.horizontal;var j=n.scrollTop(),l=n.scrollLeft(),m=L.scrollLeft();return b=L.scrollTop(),function(i){var o=C[0].offsetWidth<=0&&C[0].offsetHeight<=0;if(!o&&_)return _=!1,setTimeout(function(){C.trigger("reflow")},1),null;if(o&&(_=!0,!M))return null;if("windowScroll"==i?(j=n.scrollTop(),l=n.scrollLeft()):"containerScroll"==i?(b=L.scrollTop(),m=L.scrollLeft()):"init"!=i&&(j=n.scrollTop(),l=n.scrollLeft(),b=L.scrollTop(),m=L.scrollLeft()),!k||!(0>j||0>l)){if(U)u("windowScrollDone"==i?!0:!1);else if("windowScrollDone"==i)return null;g=C.offset(),O&&P&&(g.top+=d);var p,q,r=C.outerHeight();if(R&&M){if(c>=b){var v=c-b;p=v>0?v:0}else p=S?0:b;q=h}else!R&&M?(j>a+r+e?p=r-f+e:g.top>j+F?(p=0,t()):(p=F+j-g.top+c+(P?d:0),s()),q=0):R&&!M?(c>b||b-c>r?(p=g.top-j,t()):(p=g.top+b-j-c,s()),q=g.left+m-l):R||M||(j>a+r+e?p=r+F-j+a+e:g.top>j+F?(p=g.top-j,s()):p=F,q=g.left-l);return{top:p,left:q}}}}function z(){var a=null,b=null,c=null;return function(d,e,f){null==d||a==d.top&&b==d.left||($.css({top:d.top,left:d.left}),a=d.top,b=d.left),e&&l(),f&&j();var g=L.scrollLeft();M&&c==g||($.scrollLeft(g),c=g)}}function A(){if(L.length)if(L.data().perfectScrollbar)I={horizontal:0,vertical:0};else{var a=L.width(),b=L.height(),c=C.height(),d=f(C,fb),e=d>a?J:0,g=c>b?J:0;I.horizontal=d>a-g?J:0,I.vertical=c>b-e?J:0}}var B=g.uniqueId(),C=a(this);if(C.data("floatThead-attached"))return!0;if(!C.is("table"))throw new Error('jQuery.floatThead must be run on a table element. ex: $("table").floatThead();');h=r.autoReflow&&h;var D=C.find("thead:first"),E=C.find("tbody:first");if(0==D.length)throw new Error("jQuery.floatThead must be run on a table that contains a <thead> element");var F,G,H=!1,I={vertical:0,horizontal:0},J=d(),K=0,L=r.scrollContainer(C)||a([]),M=r.useAbsolutePositioning;null==M&&(M=r.scrollContainer(C).length),M||(H=!0);var N=C.find("caption"),O=1==N.length;if(O)var P="top"===(N.css("caption-side")||N.attr("align")||"top");var Q=a('<fthfoot style="display:table-footer-group;border-spacing:0;height:0;border-collapse:collapse;"/>'),R=L.length>0,S=!1,T=a([]),U=9>=i&&!R&&M,V=a("<table/>"),W=a("<colgroup/>"),X=C.find("colgroup:first"),Y=!0;0==X.length&&(X=a("<colgroup/>"),Y=!1);var Z=a('<fthrow style="display:table-row;border-spacing:0;height:0;border-collapse:collapse"/>'),$=a('<div style="overflow: hidden;" aria-hidden="true" class="floatThead-floatContainer"></div>'),_=!1,ab=a("<thead/>"),bb=a('<tr class="size-row"/>'),cb=a([]),db=a([]),eb=a([]),fb=a([]);ab.append(bb),C.prepend(X),m&&(Q.append(Z),C.append(Q)),V.append(W),$.append(V),r.copyTableClass&&V.attr("class",C.attr("class")),V.attr({cellpadding:C.attr("cellpadding"),cellspacing:C.attr("cellspacing"),border:C.attr("border")});var gb=C.css("display");if(V.css({borderCollapse:C.css("borderCollapse"),border:C.css("border"),display:gb}),"none"==gb&&(_=!0),V.addClass(r.floatTableClass).css("margin",0),M){var hb=function(a,b){var c=a.css("position"),d="relative"==c||"absolute"==c;if(!d||b){var e={paddingLeft:a.css("paddingLeft"),paddingRight:a.css("paddingRight")};$.css(e),a=a.wrap("<div class='"+r.floatWrapperClass+"' style='position: relative; clear:both;'></div>").parent(),S=!0}return a};R?(T=hb(L,!0),T.append($)):(T=hb(C),C.after($))}else C.after($);$.css({position:M?"absolute":"fixed",marginTop:0,top:M?0:"auto",zIndex:r.zIndex}),$.addClass(r.floatContainerClass),p();var ib={"table-layout":"fixed"},jb={"table-layout":C.css("tableLayout")||"auto"},kb=C[0].style.width||"",lb=C.css("minWidth")||"";A();var mb,nb=function(){(mb=w())()};nb();var ob=y(),pb=z();pb(ob("init"),!0);var qb=g.debounce(function(){pb(ob("windowScrollDone"),!1)},300),rb=function(){pb(ob("windowScroll"),!1),qb()},sb=function(){pb(ob("containerScroll"),!1)},tb=function(){p(),A(),nb(),ob=y(),(pb=z())(ob("resize"),!0,!0)},ub=g.debounce(function(){A(),p(),nb(),ob=y(),pb(ob("reflow"),!0)},1);if(R?M?L.on(c("scroll"),sb):(L.on(c("scroll"),sb),n.on(c("scroll"),rb)):n.on(c("scroll"),rb),n.on(c("load"),ub),b(r.debounceResizeMs,c("resize"),tb),C.on("reflow",ub),e(C)&&C.on("filter",ub).on("sort",ub).on("page",ub),h){var vb=L.length?L[0]:C[0];o=new MutationObserver(function(a){for(var b=function(a){return a&&a[0]&&"THEAD"==a[0].nodeName},c=0;c<a.length;c++)if(!b(a[c].addedNodes)&&!b(a[c].removedNodes)){ub();break}}),o.observe(vb,{childList:!0,subtree:!0})}C.data("floatThead-attached",{destroy:function(){var a=".fth-"+B;t(),C.css(jb),X.remove(),m&&Q.remove(),ab.parent().length&&ab.replaceWith(D),h&&(o.disconnect(),o=null),C.off("reflow"),L.off(a),S&&(L.length?L.unwrap():C.unwrap()),C.css("minWidth",lb),$.remove(),C.data("floatThead-attached",!1),n.off(a)},reflow:function(){ub()},setHeaderHeight:function(){j()},getFloatContainer:function(){return $},getRowGroups:function(){return H?$.find("thead").add(C.find("tbody,tfoot")):C.find("thead,tbody,tfoot")}})}),this}}(jQuery),function(a){a.floatThead=a.floatThead||{},a.floatThead._=window._||function(){var b={},c=Object.prototype.hasOwnProperty,d=["Arguments","Function","String","Number","Date","RegExp"];b.has=function(a,b){return c.call(a,b)},b.keys=function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[];for(var d in a)b.has(a,d)&&c.push(d);return c};var e=0;return b.uniqueId=function(a){var b=++e+"";return a?a+b:b},a.each(d,function(){var a=this;b["is"+a]=function(b){return Object.prototype.toString.call(b)=="[object "+a+"]"}}),b.debounce=function(a,b,c){var d,e,f,g,h;return function(){f=this,e=arguments,g=new Date;var i=function(){var j=new Date-g;b>j?d=setTimeout(i,b-j):(d=null,c||(h=a.apply(f,e)))},j=c&&!d;return d||(d=setTimeout(i,b)),j&&(h=a.apply(f,e)),h}},b}()}(jQuery),function(a){"function"==typeof define&&define.amd?define("object"!=typeof document||"loading"!==document.readyState?[]:"html5-history-api",a):a()}(function(){function a(){}function b(a,c,d){var e=/(?:(\w+\:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/;if(null==a||""===a||c)a=c?a:w.href,(!B||d)&&(a=a.replace(/^[^#]*/,"")||"#",a=w.protocol.replace(/:.*$|$/,":")+"//"+w.host+M.basepath+a.replace(new RegExp("^#[/]?(?:"+M.type+")?"),""));else{var f=b(),g=s.getElementsByTagName("base")[0];!d&&g&&g.getAttribute("href")&&(g.href=g.href,f=b(g.href,null,!0));var h=f._pathname,i=f._protocol;a=""+a,a=/^(?:\w+\:)?\/\//.test(a)?0===a.indexOf("/")?i+a:a:i+"//"+f._host+(0===a.indexOf("/")?a:0===a.indexOf("?")?h+a:0===a.indexOf("#")?h+f._search+a:h.replace(/[^\/]+$/g,"")+a)}O.href=a;var j=e.exec(O.href),k=j[2]+(j[3]?":"+j[3]:""),l=j[4]||"/",m=j[5]||"",n="#"===j[6]?"":j[6]||"",o=l+m+n,p=l.replace(new RegExp("^"+M.basepath,"i"),M.type)+m;return{_href:j[1]+"//"+k+o,_protocol:j[1],_host:k,_hostname:j[2],_port:j[3]||"",_pathname:l,_search:m,_hash:n,_relative:o,_nohash:p,_special:p+n}}function c(){var a;try{a=r.sessionStorage,a.setItem(N+"t","1"),a.removeItem(N+"t")}catch(b){a={getItem:function(a){var b=s.cookie.split(a+"=");return b.length>1&&b.pop().split(";").shift()||"null"},setItem:function(a){var b={};(b[w.href]=y.state)&&(s.cookie=a+"="+v.stringify(b))}}}try{U=v.parse(a.getItem(N))||{}}catch(b){U={}}J(F+"unload",function(){a.setItem(N,v.stringify(U))},!1)}function d(b,c,d,e){var f=0;d||(d={set:a},f=1);var g=!d.set,h=!d.get,i={configurable:!0,set:function(){g=1},get:function(){h=1}};try{D(b,c,i),b[c]=b[c],D(b,c,d)}catch(j){}if(!(g&&h||(b.__defineGetter__&&(b.__defineGetter__(c,i.get),b.__defineSetter__(c,i.set),b[c]=b[c],d.get&&b.__defineGetter__(c,d.get),d.set&&b.__defineSetter__(c,d.set)),g&&h))){if(f)return!1;if(b===r){try{var k=b[c];b[c]=null}catch(j){}if("execScript"in r)r.execScript("Public "+c,"VBScript"),r.execScript("var "+c+";","JavaScript");else try{D(b,c,{value:a})}catch(j){"onpopstate"===c&&(J("popstate",d=function(){K("popstate",d,!1);var a=b.onpopstate;b.onpopstate=null,setTimeout(function(){b.onpopstate=a},1)},!1),R=0)}b[c]=k}else try{try{var l=u.create(b);D(u.getPrototypeOf(l)===b?l:b,c,d);for(var m in b)"function"==typeof b[m]&&(l[m]=b[m].bind(b));try{e.call(l,l,b)}catch(j){}b=l}catch(j){D(b.constructor.prototype,c,d)}}catch(j){return!1}}return b}function e(a,b,c){return c=c||{},a=a===$?w:a,c.set=c.set||function(c){a[b]=c},c.get=c.get||function(){return a[b]},c}function f(a,b,c){a in V?V[a].push(b):arguments.length>3?J(a,b,c,arguments[3]):J(a,b,c)}function g(a,b,c){var d=V[a];if(d){for(var e=d.length;e--;)if(d[e]===b){d.splice(e,1);break}}else K(a,b,c)}function h(b,c){var e=(""+("string"==typeof b?b:b.type)).replace(/^on/,""),f=V[e];if(f){if(c="string"==typeof b?c:b,null==c.target)for(var g=["target","currentTarget","srcElement","type"];b=g.pop();)c=d(c,b,{get:"type"===b?function(){return e}:function(){return r}});R&&(("popstate"===e?r.onpopstate:r.onhashchange)||a).call(r,c);for(var h=0,i=f.length;i>h;h++)f[h].call(r,c);return!0}return L(b,c)}function i(){var a=s.createEvent?s.createEvent("Event"):s.createEventObject();a.initEvent?a.initEvent("popstate",!1,!1):a.type="popstate",a.state=y.state,h(a)}function j(){S&&(S=!1,i())}function k(a,c,d,e){if(B)P=w.href;else{0===T&&(T=2);var f=b(c,2===T&&-1!==(""+c).indexOf("#"));f._relative!==b()._relative&&(P=e,d?w.replace("#"+f._special):w.hash=f._special)}!C&&a&&(U[w.href]=a),S=!1}function l(a){var c=P;if(P=w.href,c){Q!==w.href&&i(),a=a||r.event;var d=b(c,!0),e=b();a.oldURL||(a.oldURL=d._href,a.newURL=e._href),d._hash!==e._hash&&h(a)}}function m(a){setTimeout(function(){J("popstate",function(a){Q=w.href,C||(a=d(a,"state",{get:function(){return y.state}})),h(a)},!1)},0),!B&&a!==!0&&"location"in y&&(p(E.hash),j())}function n(a){for(;a;){if("A"===a.nodeName)return a;a=a.parentNode}}function o(a){var c=a||r.event,d=n(c.target||c.srcElement),e="defaultPrevented"in c?c.defaultPrevented:c.returnValue===!1;if(d&&"A"===d.nodeName&&!e){var f=b(),g=b(d.getAttribute("href",2)),h=f._href.split("#").shift()===g._href.split("#").shift();h&&g._hash&&(f._hash!==g._hash&&(E.hash=g._hash),p(g._hash),c.preventDefault?c.preventDefault():c.returnValue=!1)}}function p(a){var b=s.getElementById(a=(a||"").replace(/^#/,""));if(b&&b.id===a&&"A"===b.nodeName){var c=b.getBoundingClientRect();r.scrollTo(t.scrollLeft||0,c.top+(t.scrollTop||0)-(t.clientTop||0))}}function q(){var a=s.getElementsByTagName("script"),f=(a[a.length-1]||{}).src||"",g=-1!==f.indexOf("?")?f.split("?").pop():"";g.replace(/(\w+)(?:=([^&]*))?/g,function(a,b,c){M[b]=(c||"").replace(/^(0|false)$/,"")}),J(F+"hashchange",l,!1);var h=[$,E,X,r,Z,y];C&&delete Z.state;for(var i=0;i<h.length;i+=2)for(var j in h[i])if(h[i].hasOwnProperty(j))if("function"==typeof h[i][j])h[i+1][j]=h[i][j];else{var k=e(h[i],j,h[i][j]);if(!d(h[i+1],j,k,function(a,b){b===y&&(r.history=y=h[i+1]=a)}))return K(F+"hashchange",l,!1),!1;h[i+1]===r&&(V[j]=V[j.substr(2)]=[])}return y.setup(),M.redirect&&y.redirect(),M.init&&(T=1),!C&&v&&c(),B||s[G](F+"click",o,!1),"complete"===s.readyState?m(!0):(B||b()._relative===M.basepath||(S=!0),J(F+"load",m,!1)),!0}var r=("object"==typeof window?window:this)||{};if(!r.history||"emulate"in r.history)return r.history;var s=r.document,t=s.documentElement,u=r.Object,v=r.JSON,w=r.location,x=r.history,y=x,z=x.pushState,A=x.replaceState,B=!!z,C="state"in x,D=u.defineProperty,E=d({},"t")?{}:s.createElement("a"),F="",G=r.addEventListener?"addEventListener":(F="on")&&"attachEvent",H=r.removeEventListener?"removeEventListener":"detachEvent",I=r.dispatchEvent?"dispatchEvent":"fireEvent",J=r[G],K=r[H],L=r[I],M={basepath:"/",redirect:0,type:"/",init:0},N="__historyAPI__",O=s.createElement("a"),P=w.href,Q="",R=1,S=!1,T=0,U={},V={},W=s.title,X={onhashchange:null,onpopstate:null},Y=function(a,b){var c=r.history!==x;c&&(r.history=x),a.apply(x,b),c&&(r.history=y)},Z={setup:function(a,b,c){M.basepath=(""+(null==a?M.basepath:a)).replace(/(?:^|\/)[^\/]*$/,"/"),M.type=null==b?M.type:b,M.redirect=null==c?M.redirect:!!c},redirect:function(a,c){if(y.setup(c,a),c=M.basepath,r.top==r.self){var d=b(null,!1,!0)._relative,e=w.pathname+w.search;B?(e=e.replace(/([^\/])$/,"$1/"),d!=c&&new RegExp("^"+c+"$","i").test(e)&&w.replace(d)):e!=c&&(e=e.replace(/([^\/])\?/,"$1/?"),new RegExp("^"+c,"i").test(e)&&w.replace(c+"#"+e.replace(new RegExp("^"+c,"i"),M.type)+w.hash))}},pushState:function(a,b,c){var d=s.title;null!=W&&(s.title=W),z&&Y(z,arguments),k(a,c),s.title=d,W=b},replaceState:function(a,b,c){var d=s.title;null!=W&&(s.title=W),delete U[w.href],A&&Y(A,arguments),k(a,c,!0),s.title=d,W=b},location:{set:function(a){0===T&&(T=1),r.location=a},get:function(){return 0===T&&(T=1),B?w:E}},state:{get:function(){return U[w.href]||null}}},$={assign:function(a){0===(""+a).indexOf("#")?k(null,a):w.assign(a)},reload:function(){w.reload()},replace:function(a){0===(""+a).indexOf("#")?k(null,a,!0):w.replace(a)},toString:function(){return this.href},href:{get:function(){return b()._href}},protocol:null,host:null,hostname:null,port:null,pathname:{get:function(){return b()._pathname}},search:{get:function(){return b()._search}},hash:{set:function(a){k(null,(""+a).replace(/^(#|)/,"#"),!1,P)},get:function(){return b()._hash}}};return q()?(y.emulate=!B,r[G]=f,r[H]=g,r[I]=h,y):void 0});
window.cag = window.cag || {
    properties: {}
};
cag.properties                                      = cag.properties || {};
cag.properties.cq_publisher_url                     = "";
cag.properties.web_url                              = "";
cag.properties.ac_json                              = cag.properties.web_url + "/cag-web/flights/autocompletesearch?integrated=false&searchField=%QUERY&lang=" + $('html').attr('lang') + "&callback=callback",
cag.properties.ac_json_search                       = cag.properties.web_url + "/cag-web/search/suggest?searchstr=%QUERY&lang=" + $('html').attr('lang') + "&callback=callback",
cag.properties.ac_json_arrival                      = cag.properties.web_url + "/cag-web/flights/arrivalautocompletesearch?searchField=%QUERY&lang=" + $('html').attr('lang') + "&callback=callback",
cag.properties.ac_json_departure                    = cag.properties.web_url + "/cag-web/flights/departureautocompletesearch?searchField=%QUERY&lang=" + $('html').attr('lang') + "&callback=callback",
cag.properties.sgt_json                             = cag.properties.web_url + "/cag-web/flights/filterdates?lang=" + $('html').attr('lang'),
cag.properties.tpl_search_autocomplete_datasource   = cag.properties.web_url + "/cag-web/search/suggest?searchstr=";
cag.properties.tpl_search_flight_datasource         = cag.properties.web_url + "/cag-web/search/fulltextsearch?searchField=";
cag.properties.tpl_search_crosssell_datasource      = cag.properties.cq_publisher_url + "/content/cag/" + $('html').attr('lang').substr(0, 2) + "/search/jcr:content/searchcrossselling.{QUERY}.data";
cag.properties.shop_names_json_url                  = cag.properties.cq_publisher_url + "/content/cag/" + $('html').attr('lang').substr(0, 2) + "/shop-and-dine/shopping.shopnames.fields.data",
cag.properties.dine_names_json_url                  = cag.properties.cq_publisher_url + "/content/cag/" + $('html').attr('lang').substr(0, 2) + "/shop-and-dine/dining.shopnames.fields.data",
cag.properties.map_shop_details                     = cag.properties.cq_publisher_url + "/content/cag/" + $('html').attr('lang').substr(0, 2) + "/shop-and-dine/shopping.shoplist.data",
cag.properties.map_dine_details                     = cag.properties.cq_publisher_url + "/content/cag/" + $('html').attr('lang').substr(0, 2) + "/shop-and-dine/dining.shoplist.data",
cag.properties.map_metadata_details                 = cag.properties.cq_publisher_url + "/proxy/maps.cag.wwprojects.com",
cag.properties.flight_icon_image_path               = "http://apps.changiairportgroup.com/fids/images/airlines/";
cag.properties.freighter_icon_image_path            = "http://apps.changiairportgroup.com/fids/images/ftr/";
cag.properties.gigyaAPIKey							= "3_UMWSPS511xTy5Yu7LTmlEm0j2jRQVqzCqjDKvS8_LaA7LfBUMLQ7Nh3GvxWEddCU";
cag.properties.gigyaShareButtons					= "Facebook,Twitter,Sina";
"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(a,b,c){var d={init:function(b,c){this.$elem=a(c),this.options=a.extend({},a.fn.owlCarousel.options,this.$elem.data(),b),this.userOptions=b,this.loadContent()},loadContent:function(){function b(a){var b,c="";if("function"==typeof d.options.jsonSuccess)d.options.jsonSuccess.apply(this,[a]);else{for(b in a.owl)a.owl.hasOwnProperty(b)&&(c+=a.owl[b].item);d.$elem.html(c)}d.logIn()}var c,d=this;"function"==typeof d.options.beforeInit&&d.options.beforeInit.apply(this,[d.$elem]),"string"==typeof d.options.jsonPath?(c=d.options.jsonPath,a.getJSON(c,b)):d.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style")),this.$elem.data("owl-originalClasses",this.$elem.attr("class")),this.$elem.css({opacity:0}),this.orignalItems=this.options.items,this.checkBrowser(),this.wrapperWidth=0,this.checkVisible=null,this.setVars()},setVars:function(){return 0===this.$elem.children().length?!1:(this.baseClass(),this.eventTypes(),this.$userItems=this.$elem.children(),this.itemsAmount=this.$userItems.length,this.wrapItems(),this.$owlItems=this.$elem.find(".owl-item"),this.$owlWrapper=this.$elem.find(".owl-wrapper"),this.playDirection="next",this.prevItem=0,this.prevArr=[0],this.currentItem=0,this.customEvents(),void this.onStartup())},onStartup:function(){this.updateItems(),this.calculateAll(),this.buildControls(),this.updateControls(),this.response(),this.moveEvents(),this.stopOnHover(),this.owlStatus(),!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle),!0===this.options.autoPlay&&(this.options.autoPlay=5e3),this.play(),this.$elem.find(".owl-wrapper").css("display","block"),this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility(),this.onstartup=!1,this.eachMoveUpdate(),"function"==typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad(),!0===this.options.autoHeight&&this.autoHeight(),this.onVisibleItems(),"function"==typeof this.options.afterAction&&this.options.afterAction.apply(this,[this.$elem])},updateVars:function(){"function"==typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]),this.watchVisibility(),this.updateItems(),this.calculateAll(),this.updatePosition(),this.updateControls(),this.eachMoveUpdate(),"function"==typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;b.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;return!1!==a.$elem.is(":visible")?!1:(a.$elem.css({opacity:0}),b.clearInterval(a.autoPlayInterval),b.clearInterval(a.checkVisible),void(a.checkVisible=b.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),b.clearInterval(a.checkVisible))},500)))},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),this.wrapperOuter=this.$elem.find(".owl-wrapper-outer"),this.$elem.css("display","block")},baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass),b||this.$elem.addClass(this.options.theme)},updateItems:function(){var b,c;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=!1,this.options.itemsMobile=!1;if(b=a(this.options.responsiveBaseWidth).width(),b>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems),!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),c=0;c<this.options.itemsCustom.length;c+=1)this.options.itemsCustom[c][0]<=b&&(this.options.items=this.options.itemsCustom[c][1]);else b<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),b<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),b<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),b<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),b<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var c,d,e=this;return!0!==e.options.responsive?!1:(d=a(b).width(),e.resizer=function(){a(b).width()!==d&&(!1!==e.options.autoPlay&&b.clearInterval(e.autoPlayInterval),b.clearTimeout(c),c=b.setTimeout(function(){d=a(b).width(),e.updateVars()},e.options.responsiveRefreshRate))},void a(b).resize(e.resizer))},updatePosition:function(){this.jumpTo(this.currentItem),!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var b=this,c=0,d=b.itemsAmount-b.options.items;b.$owlItems.each(function(e){var f=a(this);f.css({width:b.itemWidth}).data("owl-item",Number(e)),(0===e%b.options.items||e===d)&&(e>d||(c+=1)),f.data("owl-roundPages",c)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0}),this.appendItemsSizes()},calculateAll:function(){this.calculateWidth(),this.appendWrapperSizes(),this.loops(),this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);return this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a),a},min:function(){return 0},loops:function(){var b,c,d=0,e=0;for(this.positionsInArray=[0],this.pagesInArray=[],b=0;b<this.itemsAmount;b+=1)e+=this.itemWidth,this.positionsInArray.push(-e),!0===this.options.scrollPerPage&&(c=a(this.$owlItems[b]),c=c.data("owl-roundPages"),c!==d&&(this.pagesInArray[d]=this.positionsInArray[b],d=c))},buildControls:function(){(!0===this.options.navigation||!0===this.options.pagination)&&(this.owlControls=a('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem)),!0===this.options.pagination&&this.buildPagination(),!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var b=this,c=a('<div class="owl-buttons"/>');b.owlControls.append(c),b.buttonPrev=a("<div/>",{"class":"owl-prev",html:b.options.navigationText[0]||""}),b.buttonNext=a("<div/>",{"class":"owl-next",html:b.options.navigationText[1]||""}),c.append(b.buttonPrev).append(b.buttonNext),c.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()}),c.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(c){c.preventDefault(),a(this).hasClass("owl-next")?b.next():b.prev()})},buildPagination:function(){var b=this;b.paginationWrapper=a('<div class="owl-pagination"/>'),b.owlControls.append(b.paginationWrapper),b.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(c){c.preventDefault(),Number(a(this).data("owl-page"))!==b.currentItem&&b.goTo(Number(a(this).data("owl-page")),!0)})},updatePagination:function(){var b,c,d,e,f,g;if(!1===this.options.pagination)return!1;for(this.paginationWrapper.html(""),b=0,c=this.itemsAmount-this.itemsAmount%this.options.items,e=0;e<this.itemsAmount;e+=1)0===e%this.options.items&&(b+=1,c===e&&(d=this.itemsAmount-this.options.items),f=a("<div/>",{"class":"owl-page"}),g=a("<span></span>",{text:!0===this.options.paginationNumbers?b:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),f.append(g),f.data("owl-page",c===e?d:e),f.data("owl-roundPages",b),this.paginationWrapper.append(f));this.checkPagination()},checkPagination:function(){var b=this;return!1===b.options.pagination?!1:void b.paginationWrapper.find(".owl-page").each(function(){a(this).data("owl-roundPages")===a(b.$owlItems[b.currentItem]).data("owl-roundPages")&&(b.paginationWrapper.find(".owl-page").removeClass("active"),a(this).addClass("active"))})},checkNavigation:function(){return!1===this.options.navigation?!1:void(!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled"))))},updateControls:function(){this.updatePagination(),this.checkNavigation(),this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;if(this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1,this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0)){if(!0!==this.options.rewindNav)return this.currentItem=this.maximumItem,!1;this.currentItem=0,a="rewind"}this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;if(this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?this.options.items:1),0>this.currentItem){if(!0!==this.options.rewindNav)return this.currentItem=0,!1;this.currentItem=this.maximumItem,a="rewind"}this.goTo(this.currentItem,a)},goTo:function(a,c,d){var e=this;return e.isTransition?!1:("function"==typeof e.options.beforeMove&&e.options.beforeMove.apply(this,[e.$elem]),a>=e.maximumItem?a=e.maximumItem:0>=a&&(a=0),e.currentItem=e.owl.currentItem=a,!1!==e.options.transitionStyle&&"drag"!==d&&1===e.options.items&&!0===e.browser.support3d?(e.swapSpeed(0),!0===e.browser.support3d?e.transition3d(e.positionsInArray[a]):e.css2slide(e.positionsInArray[a],1),e.afterGo(),e.singleItemTransition(),!1):(a=e.positionsInArray[a],!0===e.browser.support3d?(e.isCss3Finish=!1,!0===c?(e.swapSpeed("paginationSpeed"),b.setTimeout(function(){e.isCss3Finish=!0},e.options.paginationSpeed)):"rewind"===c?(e.swapSpeed(e.options.rewindSpeed),b.setTimeout(function(){e.isCss3Finish=!0},e.options.rewindSpeed)):(e.swapSpeed("slideSpeed"),b.setTimeout(function(){e.isCss3Finish=!0},e.options.slideSpeed)),e.transition3d(a)):!0===c?e.css2slide(a,e.options.paginationSpeed):"rewind"===c?e.css2slide(a,e.options.rewindSpeed):e.css2slide(a,e.options.slideSpeed),void e.afterGo()))},jumpTo:function(a){"function"==typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]),a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0),this.swapSpeed(0),!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1),this.currentItem=this.owl.currentItem=a,this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem),this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2],this.prevArr.shift(0),this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp()),"function"==typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop",b.clearInterval(this.autoPlayInterval)},checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;return a.apStatus="play",!1===a.options.autoPlay?!1:(b.clearInterval(a.autoPlayInterval),void(a.autoPlayInterval=b.setInterval(function(){a.next(!0)},a.options.autoPlay)))},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!=typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var c=this;c.isCssFinish=!1,c.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||c.options.slideSpeed,complete:function(){c.isCssFinish=!0}})},checkBrowser:function(){var a=c.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)",a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g),this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in b||b.navigator.msMaxTouchPoints}},moveEvents:function(){(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)&&(this.gestures(),this.disabledEvents())},eventTypes:function(){var a=["s","e","x"];this.ev_types={},!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]),this.ev_types.start=a[0],this.ev_types.move=a[1],this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()}),this.$elem.on("mousedown.disableTextSelect",function(b){return a(b.target).is("input, textarea, select, option")})},gestures:function(){function d(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function e(b){"on"===b?(a(c).on(h.ev_types.move,f),a(c).on(h.ev_types.end,g)):"off"===b&&(a(c).off(h.ev_types.move),a(c).off(h.ev_types.end))}function f(e){e=e.originalEvent||e||b.event,h.newPosX=d(e).x-i.offsetX,h.newPosY=d(e).y-i.offsetY,h.newRelativeX=h.newPosX-i.relativePos,"function"==typeof h.options.startDragging&&!0!==i.dragging&&0!==h.newRelativeX&&(i.dragging=!0,h.options.startDragging.apply(h,[h.$elem])),(8<h.newRelativeX||-8>h.newRelativeX)&&!0===h.browser.isTouch&&(void 0!==e.preventDefault?e.preventDefault():e.returnValue=!1,i.sliding=!0),(10<h.newPosY||-10>h.newPosY)&&!1===i.sliding&&a(c).off("touchmove.owl"),h.newPosX=Math.max(Math.min(h.newPosX,h.newRelativeX/5),h.maximumPixels+h.newRelativeX/5),!0===h.browser.support3d?h.transition3d(h.newPosX):h.css2move(h.newPosX)}function g(c){c=c.originalEvent||c||b.event;var d;c.target=c.target||c.srcElement,i.dragging=!1,!0!==h.browser.isTouch&&h.$owlWrapper.removeClass("grabbing"),h.dragDirection=0>h.newRelativeX?h.owl.dragDirection="left":h.owl.dragDirection="right",0!==h.newRelativeX&&(d=h.getNewPosition(),h.goTo(d,!1,"drag"),i.targetElement===c.target&&!0!==h.browser.isTouch&&(a(c.target).on("click.disable",function(b){b.stopImmediatePropagation(),b.stopPropagation(),b.preventDefault(),a(b.target).off("click.disable")}),c=a._data(c.target,"events").click,d=c.pop(),c.splice(0,0,d))),e("off")}var h=this,i={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};h.isCssFinish=!0,h.$elem.on(h.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||b.event;var f;if(3===c.which)return!1;if(!(h.itemsAmount<=h.options.items)){if(!1===h.isCssFinish&&!h.options.dragBeforeAnimFinish||!1===h.isCss3Finish&&!h.options.dragBeforeAnimFinish)return!1;!1!==h.options.autoPlay&&b.clearInterval(h.autoPlayInterval),!0===h.browser.isTouch||h.$owlWrapper.hasClass("grabbing")||h.$owlWrapper.addClass("grabbing"),h.newPosX=0,h.newRelativeX=0,a(this).css(h.removeTransition()),f=a(this).position(),i.relativePos=f.left,i.offsetX=d(c).x-f.left,i.offsetY=d(c).y-f.top,e("on"),i.sliding=!1,i.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();return a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=a=0),a},closestItem:function(){var b=this,c=!0===b.options.scrollPerPage?b.pagesInArray:b.positionsInArray,d=b.newPosX,e=null;return a.each(c,function(f,g){d-b.itemWidth/20>c[f+1]&&d-b.itemWidth/20<g&&"left"===b.moveDirection()?(e=g,b.currentItem=!0===b.options.scrollPerPage?a.inArray(e,b.positionsInArray):f):d+b.itemWidth/20<g&&d+b.itemWidth/20>(c[f+1]||c[f]-b.itemWidth)&&"right"===b.moveDirection()&&(!0===b.options.scrollPerPage?(e=c[f+1]||c[c.length-1],b.currentItem=a.inArray(e,b.positionsInArray)):(e=c[f+1],b.currentItem=f+1))}),b.currentItem},moveDirection:function(){var a;return 0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev"),a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()}),a.$elem.on("owl.prev",function(){a.prev()}),a.$elem.on("owl.play",function(b,c){a.options.autoPlay=c,a.play(),a.hoverStatus="play"}),a.$elem.on("owl.stop",function(){a.stop(),a.hoverStatus="stop"}),a.$elem.on("owl.goTo",function(b,c){a.goTo(c)}),a.$elem.on("owl.jumpTo",function(b,c){a.jumpTo(c)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var b,c,d,e,f;if(!1===this.options.lazyLoad)return!1;for(b=0;b<this.itemsAmount;b+=1)c=a(this.$owlItems[b]),"loaded"!==c.data("owl-loaded")&&(d=c.data("owl-item"),e=c.find(".lazyOwl"),"string"!=typeof e.data("src")?c.data("owl-loaded","loaded"):(void 0===c.data("owl-loaded")&&(e.hide(),c.addClass("loading").data("owl-loaded","checked")),(f=!0===this.options.lazyFollow?d>=this.currentItem:!0)&&d<this.currentItem+this.options.items&&e.length&&this.lazyPreload(c,e)))},lazyPreload:function(a,c){function d(){a.data("owl-loaded","loaded").removeClass("loading"),c.removeAttr("data-src"),"fade"===g.options.lazyEffect?c.fadeIn(400):c.show(),"function"==typeof g.options.afterLazyLoad&&g.options.afterLazyLoad.apply(this,[g.$elem])}function e(){h+=1,g.completeImg(c.get(0))||!0===f?d():100>=h?b.setTimeout(e,100):d()}var f,g=this,h=0;"DIV"===c.prop("tagName")?(c.css("background-image","url("+c.data("src")+")"),f=!0):c[0].src=c.data("src"),e()},autoHeight:function(){function c(){var c=a(f.$owlItems[f.currentItem]).height();f.wrapperOuter.css("height",c+"px"),f.wrapperOuter.hasClass("autoHeight")||b.setTimeout(function(){f.wrapperOuter.addClass("autoHeight")},0)}function d(){e+=1,f.completeImg(g.get(0))?c():100>=e?b.setTimeout(d,100):f.wrapperOuter.css("height","")}var e,f=this,g=a(f.$owlItems[f.currentItem]).find("img");void 0!==g.get(0)?(e=0,d()):c()},completeImg:function(a){return!a.complete||"undefined"!=typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var b;for(!0===this.options.addClassActive&&this.$owlItems.removeClass("active"),this.visibleItems=[],b=this.currentItem;b<this.currentItem+this.options.items;b+=1)this.visibleItems.push(b),!0===this.options.addClassActive&&a(this.$owlItems[b]).addClass("active");this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out",this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,c=a.inClass,d=a.$owlItems.eq(a.currentItem),e=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0,a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+"px","perspective-origin":g+"px"}),e.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0,e.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"),a.clearTransStyle(e,b)}),d.addClass(c).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0,d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"),a.clearTransStyle(d,c)})},clearTransStyle:function(a,b){a.css({position:"",left:""}).removeClass(b),this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect"),a(c).off(".owl owl"),a(b).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove()),this.clearEvents(),this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop(),b.clearInterval(this.checkVisible),this.unWrap(),this.$elem.removeData()},reinit:function(b){b=a.extend({},this.userOptions,b),this.unWrap(),this.init(b,this.$elem)},addItem:function(a,b){var c;return a?0===this.$elem.children().length?(this.$elem.append(a),this.setVars(),!1):(this.unWrap(),c=void 0===b||-1===b?-1:b,c>=this.$userItems.length||-1===c?this.$userItems.eq(-1).after(a):this.$userItems.eq(c).before(a),void this.setVars()):!1},removeItem:function(a){return 0===this.$elem.children().length?!1:(a=void 0===a||-1===a?-1:a,this.unWrap(),this.$userItems.eq(a).remove(),void this.setVars())}};a.fn.owlCarousel=function(b){return this.each(function(){if(!0===a(this).data("owl-init"))return!1;a(this).data("owl-init",!0);var c=Object.create(d);c.init(b,this),a.data(this,"owlCarousel",c)})},a.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:b,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document),jQuery.fn.ytplaylist=function(a){var a=jQuery.extend({holderId:"ytvideo",playerHeight:"1000",playerWidth:"450",addThumbs:!1,thumbSize:0,showInline:!1,autoPlay:!0,showRelated:!0,allowFullScreen:!1,afterLoad:null},a);return this.each(function(){function b(b){var c="",d=window.navigator.userAgent,e=d.indexOf("MSIE ");return e>0||navigator.userAgent.match(/Trident.*rv\:11\./)?c+='<iframe width="'+a.playerWidth+'" height="'+a.playerHeight+'" src="//www.youtube.com/embed/'+b+'?wmode=transparent" frameborder="0" allowfullscreen></iframe>':(c+='<object height="'+a.playerHeight+'" width="'+a.playerWidth+'"',c+='<param name="movie" value="http://www.youtube.com/v/'+b+h+i+j+'"> </param>',c+='<param name="wmode" value="transparent"> </param>',c+='<param name="allowscriptaccess" value="always"> </param>',a.allowFullScreen&&(c+='<param name="allowfullscreen" value="true"> </param>'),c+='<embed src="http://www.youtube.com/v/'+b+h+i+j+'"',a.allowFullScreen&&(c+=' allowfullscreen="true" '),c+='type="application/x-shockwave-flash" wmode="transparent" allowscriptaccess="always" height="'+a.playerHeight+'" width="'+a.playerWidth+'"></embed>',c+="</object>"),c}function c(a){var b=a.match("[\\?&]v=([^&#]*)");return b=b[1]}function d(a){var b=a.match(/\d+/g);return a.indexOf("M")>=0&&-1==a.indexOf("H")&&-1==a.indexOf("S")&&(b=[0,b[0],0]),a.indexOf("H")>=0&&-1==a.indexOf("M")&&(b=[b[0],0,b[1]]),a.indexOf("H")>=0&&-1==a.indexOf("M")&&-1==a.indexOf("S")&&(b=[b[0],0,0]),a=0,3==b.length&&(a+=3600*parseInt(b[0]),a+=60*parseInt(b[1]),a+=parseInt(b[2])),2==b.length&&(a+=60*parseInt(b[0]),a+=parseInt(b[1])),1==b.length&&(a+=parseInt(b[0])),a}function e(a,b){$.ajax({url:"https://www.googleapis.com/youtube/v3/videos?id="+a+"&key=AIzaSyC2HDVZZdgUHu839KlQta6OgMkToS6cV9U&part=snippet,contentDetails",global:!1,dataType:"jsonp",error:function(a,b,c){console.log("error: "+c)},success:function(a){f(a,b)}})}function f(b,c){var e=b.items[0].snippet.title,f=b.items[0].snippet.thumbnails.medium.url,g=l(d(b.items[0].contentDetails.duration)),h=e.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"-");a.addThumbs?c.append("<img src='"+f+"' alt='"+e+"' title='"+e+"' /><span class='title'>"+e+"</span><span class='duration'>"+g+"</span>").attr("data-hash","video="+h):c.append("<span class='title'>"+e+"</span><span class='duration'>"+g+"</span>").attr("data-hash","video="+h)}var g=$(this),h="",i="&rel=0",j="";a.autoPlay&&(h="&autoplay=1"),a.showRelated&&(i="&rel=1"),a.allowFullScreen&&(j="&fs=1");var k=g.find(".yt-video:first").addClass("currentvideo").attr("href");$("#"+a.holderId).html(b(c(k))),g.find(".yt-video").click(function(){return a.showInline?(g.find(".currentvideo").removeClass("currentvideo active"),$(this).addClass("currentvideo").html(b(c($(this).attr("href"))))):($("#"+a.holderId).html(b(c($(this).attr("href")))),g.find(".currentvideo").removeClass("currentvideo active"),$(this).addClass("currentvideo")),!1});var l=function(a){var b=Math.floor(a/3600),c=Math.floor((a-3600*b)/60),d=Math.floor(a-3600*b-60*c);return 10>b&&(b="0"+b),10>c&&(c="0"+c),10>d&&(d="0"+d),a>=3600?b+":"+c+":"+d:c+":"+d},m=g.find(".yt-video").length-1;g.find(".yt-video").each(function(b){var d=c($(this).attr("href"));console.log(d),e(d,$(this)),b==m&&$.isFunction(a.afterLoad)&&a.afterLoad.call(this)})})};
/* Chosen v1.3.0 | (c) 2011-2014 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
!function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),children:0,disabled:a.disabled,classes:a.className}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(c.text));return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match?this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.style.cssText=a.style,c.setAttribute("data-option-array-index",a.array_index),c.innerHTML=a.search_text,this.outerHTML(c)):"":""},AbstractChosen.prototype.result_add_group=function(a){var b,c;return a.search_match||a.group_match?a.active_options>0?(b=[],b.push("group-result"),a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.innerHTML=a.search_text,this.outerHTML(c)):"":""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.reset_single_select_options=function(){var a,b,c,d,e;for(d=this.results_data,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.selected?e.push(a.selected=!1):e.push(void 0);return e},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l;for(this.no_results_clear(),d=0,f=this.get_search_text(),a=f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),i=new RegExp(a,"i"),c=this.get_search_regex(a),l=this.results_data,j=0,k=l.length;k>j;j++)b=l[j],b.search_match=!1,e=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(e=this.results_data[b.group_array_index],0===e.active_options&&e.search_match&&(d+=1),e.active_options+=1),(!b.group||this.group_search)&&(b.search_text=b.group?b.label:b.text,b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(d+=1),b.search_match?(f.length&&(g=b.search_text.search(i),h=b.search_text.substr(0,g+f.length)+"</em>"+b.search_text.substr(g+f.length),b.search_text=h.substr(0,g)+"<em>"+h.substr(g)),null!=e&&(e.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>d&&f.length?(this.update_results_content(""),this.no_results(f)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.get_search_regex=function(a){var b;return b=this.search_contains?"":"^",new RegExp(b+a,"i")},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.clipboard_event_checker=function(){var a=this;return setTimeout(function(){return a.results_search()},50)},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0},AbstractChosen.prototype.search_results_touchstart=function(a){return this.touch_started=!0,this.search_results_mouseover(a)},AbstractChosen.prototype.search_results_touchmove=function(a){return this.touch_started=!1,this.search_results_mouseout(a)},AbstractChosen.prototype.search_results_touchend=function(a){return this.touch_started?this.search_results_mouseup(a):void 0},AbstractChosen.prototype.outerHTML=function(a){var b;return a.outerHTML?a.outerHTML:(b=document.createElement("div"),b.appendChild(a),b.innerHTML)},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c,d;c=a(this),d=c.data("chosen"),"destroy"===b&&d instanceof Chosen?d.destroy():d instanceof Chosen||c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},Chosen.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("touchstart.chosen",function(b){a.container_mousedown(b)}),this.container.bind("touchend.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.search_results.bind("touchstart.chosen",function(b){a.search_results_touchstart(b)}),this.search_results.bind("touchmove.chosen",function(b){a.search_results_touchmove(b)}),this.search_results.bind("touchend.chosen",function(b){a.search_results_touchend(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.form_field_jq.bind("chosen:close.chosen",function(b){a.input_blur(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.search_field.bind("cut.chosen",function(b){a.clipboard_event_checker(b)}),this.search_field.bind("paste.chosen",function(b){a.clipboard_event_checker(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b;return a.originalEvent&&(b=a.originalEvent.deltaY||-a.originalEvent.wheelDelta||a.originalEvent.detail),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){var c;return c=a(b.target).closest(".chosen-container"),c.length&&this.container[0]===c[0]?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+b.html+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):this.reset_single_select_options(),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(c.text),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").text(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:this.results_showing&&a.preventDefault();break;case 32:this.disable_search&&a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}.call(this);

/*! bootstrap-touch-carousel v0.7.1 | https://github.com/ixisio/bootstrap-touch-carousel.git | Copyright (c) 2014 (ixisio) Andreas Klein | Licensed under the MIT license | Including Hammer.js@1.0.6dev, http://eightmedia.github.com/hammer.js */
if (!$('body').hasClass('pg-aboutus')) {
+function(a){"use strict";function b(a,b){var c=document.createElement("div").style;for(var d in a)if(void 0!==c[a[d]])return"pfx"==b?a[d]:!0;return!1}function c(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}function d(){var a=["transformProperty","WebkitTransform","MozTransform","msTransform"];return!!b(a)}function e(){return"WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix}if(!("ontouchstart"in window||navigator.msMaxTouchPoints))return!1;a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=c(),a.support.csstransforms=d(),a.support.csstransforms3d=e()});var f="touch-carousel",g=function(b,c){return this.$element=a(b),this.$itemsWrapper=this.$element.find(".carousel-inner"),this.$items=this.$element.find(".item"),this.$indicators=this.$element.find(".carousel-indicators"),this.pane_width=this.pane_count=this.current_pane=0,this.onGesture=!1,this.options=c,this._setPaneDimensions(),this.$items.length<=1?this.disable():(this._regTouchGestures(),a(window).on("orientationchange resize",a.proxy(this._setPaneDimensions,this)),void 0)};g.DEFAULTS={interval:!1,toughness:.25},g.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},g.prototype.to=function(a){return a>this.$items.length-1||0>a?void 0:this._showPane(a)},g.prototype.pause=function(a){return a||(this.paused=!0),clearInterval(this.interval),this.interval=null,this},g.prototype._regTouchGestures=function(){this.$itemsWrapper.add(this.$indicators).hammer({drag_lock_to_axis:!0}).on("release dragleft dragright swipeleft swiperight",a.proxy(this._handleGestures,this))},g.prototype._setPaneDimensions=function(){this.pane_width=this.$element.width(),this.pane_count=this.$items.length,this.$itemsWrapper.width(this.pane_width*this.pane_count),this.$items.width(this.pane_width)},g.prototype._showPane=function(a){this.$items.eq(this.current_pane).toggleClass("active"),a>=this.pane_count&&this.pause(),a=Math.max(0,Math.min(a,this.pane_count-1)),this.$items.eq(a).toggleClass("active"),this.current_pane=a;var b=-(100/this.pane_count*this.current_pane);return this._setContainerOffset(b,!0,a),this},g.prototype._setContainerOffset=function(b,c,d){var e=this;if(this.$itemsWrapper.removeClass("animate"),c&&this.$itemsWrapper.addClass("animate"),a.support.csstransforms3d)this.onGesture=!0,this.$itemsWrapper.css("transform","translate3d("+b+"%,0,0) scale3d(1,1,1)");else if(a.support.csstransforms)this.onGesture=!0,this.$itemsWrapper.css("transform","translate("+b+"%,0)");else{var f=this.pane_width*this.pane_count/100*b;this.$itemsWrapper.css("left",f+"px")}a.support.transition?this.$itemsWrapper.one(a.support.transition.end,function(){e.$itemsWrapper.removeClass("animate"),e.onGesture=!1,e._updateIndicators(d)}):(this.$itemsWrapper.removeClass("animate"),this.onGesture=!1,this._updateIndicators(d))},g.prototype.next=function(){return this._showPane(this.current_pane+1)},g.prototype.prev=function(){return this._showPane(this.current_pane-1)},g.prototype._handleGestures=function(a){if(a.gesture.preventDefault(),!this.sliding)switch(this.pause(),a.type){case"dragright":case"dragleft":var b=-(100/this.pane_count)*this.current_pane,c=100/this.pane_width*a.gesture.deltaX/this.pane_count;(0===this.current_pane&&a.gesture.direction==Hammer.DIRECTION_RIGHT||this.current_pane==this.pane_count-1&&a.gesture.direction==Hammer.DIRECTION_LEFT)&&(c*=this.options.toughness),this._setContainerOffset(c+b);break;case"swipeleft":this.next(),a.gesture.stopDetect();break;case"swiperight":this.prev(),a.gesture.stopDetect();break;case"release":Math.abs(a.gesture.deltaX)>this.pane_width/2?"right"==a.gesture.direction?this.prev():this.next():this._showPane(this.current_pane,!0)}},g.prototype.disable=function(){return this.$indicators.hide(),this.$element.removeData(f),!1},g.prototype._updateIndicators=function(a){return this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$indicators.children().eq(a).addClass("active")),this};var h=a.fn.carousel;a.fn.carousel=function(b){return this.each(function(){var c=a(this),d=c.data(f),e=a.extend({},g.DEFAULTS,c.data(),"object"==typeof b&&b),h="string"==typeof b?b:e.slide;d||c.data(f,d=new g(this,e)).addClass(f),"number"==typeof b?d.to(b):h?d[h]():e.interval&&d.pause().cycle()})},a.fn.carousel.Constructor=g,a.fn.carousel.noConflict=function(){return a.fn.carousel=h,this},a(document).off("click.bs.carousel").on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),g=a.extend({},e.data(),d.data()),h=d.attr("data-slide-to");h&&(g.interval=!1),e.carousel(g),(h=d.attr("data-slide-to"))&&e.data(f).to(h),b.preventDefault()})}(window.jQuery),function(a,b){"use strict";function c(){if(!d.READY){d.event.determineEventTypes();for(var a in d.gestures)d.gestures.hasOwnProperty(a)&&d.detection.register(d.gestures[a]);d.event.onTouch(d.DOCUMENT,d.EVENT_MOVE,d.detection.detect),d.event.onTouch(d.DOCUMENT,d.EVENT_END,d.detection.detect),d.READY=!0}}var d=function(a,b){return new d.Instance(a,b||{})};d.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},d.HAS_POINTEREVENTS=a.navigator.pointerEnabled||a.navigator.msPointerEnabled,d.HAS_TOUCHEVENTS="ontouchstart"in a,d.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,d.NO_MOUSEEVENTS=d.HAS_TOUCHEVENTS&&a.navigator.userAgent.match(d.MOBILE_REGEX),d.EVENT_TYPES={},d.DIRECTION_DOWN="down",d.DIRECTION_LEFT="left",d.DIRECTION_UP="up",d.DIRECTION_RIGHT="right",d.POINTER_MOUSE="mouse",d.POINTER_TOUCH="touch",d.POINTER_PEN="pen",d.EVENT_START="start",d.EVENT_MOVE="move",d.EVENT_END="end",d.DOCUMENT=a.document,d.plugins={},d.READY=!1,d.Instance=function(a,b){var e=this;return c(),this.element=a,this.enabled=!0,this.options=d.utils.extend(d.utils.extend({},d.defaults),b||{}),this.options.stop_browser_behavior&&d.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),d.event.onTouch(a,d.EVENT_START,function(a){e.enabled&&d.detection.startDetect(e,a)}),this},d.Instance.prototype={on:function(a,b){for(var c=a.split(" "),d=0;d<c.length;d++)this.element.addEventListener(c[d],b,!1);return this},off:function(a,b){for(var c=a.split(" "),d=0;d<c.length;d++)this.element.removeEventListener(c[d],b,!1);return this},trigger:function(a,b){b||(b={});var c=d.DOCUMENT.createEvent("Event");c.initEvent(a,!0,!0),c.gesture=b;var e=this.element;return d.utils.hasParent(b.target,e)&&(e=b.target),e.dispatchEvent(c),this},enable:function(a){return this.enabled=a,this}};var e=null,f=!1,g=!1;d.event={bindDom:function(a,b,c){for(var d=b.split(" "),e=0;e<d.length;e++)a.addEventListener(d[e],c,!1)},onTouch:function(a,b,c){var h=this;this.bindDom(a,d.EVENT_TYPES[b],function(i){var j=i.type.toLowerCase();if(!j.match(/mouse/)||!g){j.match(/touch/)||j.match(/pointerdown/)||j.match(/mouse/)&&1===i.which?f=!0:j.match(/mouse/)&&1!==i.which&&(f=!1),j.match(/touch|pointer/)&&(g=!0);var k=0;f&&(d.HAS_POINTEREVENTS&&b!=d.EVENT_END?k=d.PointerEvent.updatePointer(b,i):j.match(/touch/)?k=i.touches.length:g||(k=j.match(/up/)?0:1),k>0&&b==d.EVENT_END?b=d.EVENT_MOVE:k||(b=d.EVENT_END),(k||null===e)&&(e=i),c.call(d.detection,h.collectEventData(a,b,h.getTouchList(e,b),i)),d.HAS_POINTEREVENTS&&b==d.EVENT_END&&(k=d.PointerEvent.updatePointer(b,i))),k||(e=null,f=!1,g=!1,d.PointerEvent.reset())}})},determineEventTypes:function(){var a;a=d.HAS_POINTEREVENTS?d.PointerEvent.getEvents():d.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],d.EVENT_TYPES[d.EVENT_START]=a[0],d.EVENT_TYPES[d.EVENT_MOVE]=a[1],d.EVENT_TYPES[d.EVENT_END]=a[2]},getTouchList:function(a){return d.HAS_POINTEREVENTS?d.PointerEvent.getTouchList():a.touches?a.touches:(a.indentifier=1,[a])},collectEventData:function(a,b,c,e){var f=d.POINTER_TOUCH;return(e.type.match(/mouse/)||d.PointerEvent.matchType(d.POINTER_MOUSE,e))&&(f=d.POINTER_MOUSE),{center:d.utils.getCenter(c),timeStamp:(new Date).getTime(),target:e.target,touches:c,eventType:b,pointerType:f,srcEvent:e,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return d.detection.stopDetect()}}}},d.PointerEvent={pointers:{},getTouchList:function(){var a=this,b=[];return Object.keys(a.pointers).sort().forEach(function(c){b.push(a.pointers[c])}),b},updatePointer:function(a,b){return a==d.EVENT_END?this.pointers={}:(b.identifier=b.pointerId,this.pointers[b.pointerId]=b),Object.keys(this.pointers).length},matchType:function(a,b){if(!b.pointerType)return!1;var c={};return c[d.POINTER_MOUSE]=b.pointerType==b.MSPOINTER_TYPE_MOUSE||b.pointerType==d.POINTER_MOUSE,c[d.POINTER_TOUCH]=b.pointerType==b.MSPOINTER_TYPE_TOUCH||b.pointerType==d.POINTER_TOUCH,c[d.POINTER_PEN]=b.pointerType==b.MSPOINTER_TYPE_PEN||b.pointerType==d.POINTER_PEN,c[a]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},d.utils={extend:function(a,c,d){for(var e in c)a[e]!==b&&d||(a[e]=c[e]);return a},hasParent:function(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1},getCenter:function(a){for(var b=[],c=[],d=0,e=a.length;e>d;d++)b.push(a[d].pageX),c.push(a[d].pageY);return{pageX:(Math.min.apply(Math,b)+Math.max.apply(Math,b))/2,pageY:(Math.min.apply(Math,c)+Math.max.apply(Math,c))/2}},getVelocity:function(a,b,c){return{x:Math.abs(b/a)||0,y:Math.abs(c/a)||0}},getAngle:function(a,b){var c=b.pageY-a.pageY,d=b.pageX-a.pageX;return 180*Math.atan2(c,d)/Math.PI},getDirection:function(a,b){var c=Math.abs(a.pageX-b.pageX),e=Math.abs(a.pageY-b.pageY);return c>=e?a.pageX-b.pageX>0?d.DIRECTION_LEFT:d.DIRECTION_RIGHT:a.pageY-b.pageY>0?d.DIRECTION_UP:d.DIRECTION_DOWN},getDistance:function(a,b){var c=b.pageX-a.pageX,d=b.pageY-a.pageY;return Math.sqrt(c*c+d*d)},getScale:function(a,b){return a.length>=2&&b.length>=2?this.getDistance(b[0],b[1])/this.getDistance(a[0],a[1]):1},getRotation:function(a,b){return a.length>=2&&b.length>=2?this.getAngle(b[1],b[0])-this.getAngle(a[1],a[0]):0},isVertical:function(a){return a==d.DIRECTION_UP||a==d.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(a,b){var c,d=["webkit","khtml","moz","Moz","ms","o",""];if(b&&a.style){for(var e=0;e<d.length;e++)for(var f in b)b.hasOwnProperty(f)&&(c=f,d[e]&&(c=d[e]+c.substring(0,1).toUpperCase()+c.substring(1)),a.style[c]=b[f]);"none"==b.userSelect&&(a.onselectstart=function(){return!1}),"none"==b.userDrag&&(a.ondragstart=function(){return!1})}}},d.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(a,b){this.current||(this.stopped=!1,this.current={inst:a,startEvent:d.utils.extend({},b),lastEvent:!1,name:""},this.detect(b))},detect:function(a){if(this.current&&!this.stopped){a=this.extendEventData(a);for(var b=this.current.inst.options,c=0,e=this.gestures.length;e>c;c++){var f=this.gestures[c];if(!this.stopped&&b[f.name]!==!1&&f.handler.call(f,a,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=a),a.eventType==d.EVENT_END&&!a.touches.length-1&&this.stopDetect(),a}},stopDetect:function(){this.previous=d.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(a){var b=this.current.startEvent;if(b&&(a.touches.length!=b.touches.length||a.touches===b.touches)){b.touches=[];for(var c=0,e=a.touches.length;e>c;c++)b.touches.push(d.utils.extend({},a.touches[c]))}var f=a.timeStamp-b.timeStamp,g=a.center.pageX-b.center.pageX,h=a.center.pageY-b.center.pageY,i=d.utils.getVelocity(f,g,h);return d.utils.extend(a,{deltaTime:f,deltaX:g,deltaY:h,velocityX:i.x,velocityY:i.y,distance:d.utils.getDistance(b.center,a.center),angle:d.utils.getAngle(b.center,a.center),interimAngle:this.current.lastEvent&&d.utils.getAngle(this.current.lastEvent.center,a.center),direction:d.utils.getDirection(b.center,a.center),interimDirection:this.current.lastEvent&&d.utils.getDirection(this.current.lastEvent.center,a.center),scale:d.utils.getScale(b.touches,a.touches),rotation:d.utils.getRotation(b.touches,a.touches),startEvent:b}),a},register:function(a){var c=a.defaults||{};return c[a.name]===b&&(c[a.name]=!0),d.utils.extend(d.defaults,c,!0),a.index=a.index||1e3,this.gestures.push(a),this.gestures.sort(function(a,b){return a.index<b.index?-1:a.index>b.index?1:0}),this.gestures}},d.gestures=d.gestures||{},d.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(a,b){switch(a.eventType){case d.EVENT_START:clearTimeout(this.timer),d.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==d.detection.current.name&&b.trigger("hold",a)},b.options.hold_timeout);break;case d.EVENT_MOVE:a.distance>b.options.hold_threshold&&clearTimeout(this.timer);break;case d.EVENT_END:clearTimeout(this.timer)}}},d.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(a,b){if(a.eventType==d.EVENT_END&&"touchcancel"!=a.srcEvent.type){var c=d.detection.previous,e=!1;if(a.deltaTime>b.options.tap_max_touchtime||a.distance>b.options.tap_max_distance)return;c&&"tap"==c.name&&a.timeStamp-c.lastEvent.timeStamp<b.options.doubletap_interval&&a.distance<b.options.doubletap_distance&&(b.trigger("doubletap",a),e=!0),(!e||b.options.tap_always)&&(d.detection.current.name="tap",b.trigger(d.detection.current.name,a))}}},d.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(a,b){if(a.eventType==d.EVENT_END){if(b.options.swipe_max_touches>0&&a.touches.length>b.options.swipe_max_touches)return;(a.velocityX>b.options.swipe_velocity||a.velocityY>b.options.swipe_velocity)&&(b.trigger(this.name,a),b.trigger(this.name+a.direction,a))}}},d.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(a,b){if(d.detection.current.name!=this.name&&this.triggered)return b.trigger(this.name+"end",a),this.triggered=!1,void 0;if(!(b.options.drag_max_touches>0&&a.touches.length>b.options.drag_max_touches))switch(a.eventType){case d.EVENT_START:this.triggered=!1;break;case d.EVENT_MOVE:if(a.distance<b.options.drag_min_distance&&d.detection.current.name!=this.name)return;if(d.detection.current.name!=this.name&&(d.detection.current.name=this.name,b.options.correct_for_drag_min_distance)){var c=Math.abs(b.options.drag_min_distance/a.distance);d.detection.current.startEvent.center.pageX+=a.deltaX*c,d.detection.current.startEvent.center.pageY+=a.deltaY*c,a=d.detection.extendEventData(a)}(d.detection.current.lastEvent.drag_locked_to_axis||b.options.drag_lock_to_axis&&b.options.drag_lock_min_distance<=a.distance)&&(a.drag_locked_to_axis=!0);var e=d.detection.current.lastEvent.direction;a.drag_locked_to_axis&&e!==a.direction&&(a.direction=d.utils.isVertical(e)?a.deltaY<0?d.DIRECTION_UP:d.DIRECTION_DOWN:a.deltaX<0?d.DIRECTION_LEFT:d.DIRECTION_RIGHT),this.triggered||(b.trigger(this.name+"start",a),this.triggered=!0),b.trigger(this.name,a),b.trigger(this.name+a.direction,a),(b.options.drag_block_vertical&&d.utils.isVertical(a.direction)||b.options.drag_block_horizontal&&!d.utils.isVertical(a.direction))&&a.preventDefault();break;case d.EVENT_END:this.triggered&&b.trigger(this.name+"end",a),this.triggered=!1}}},d.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(a,b){if(d.detection.current.name!=this.name&&this.triggered)return b.trigger(this.name+"end",a),this.triggered=!1,void 0;if(!(a.touches.length<2))switch(b.options.transform_always_block&&a.preventDefault(),a.eventType){case d.EVENT_START:this.triggered=!1;break;case d.EVENT_MOVE:var c=Math.abs(1-a.scale),e=Math.abs(a.rotation);if(c<b.options.transform_min_scale&&e<b.options.transform_min_rotation)return;d.detection.current.name=this.name,this.triggered||(b.trigger(this.name+"start",a),this.triggered=!0),b.trigger(this.name,a),e>b.options.transform_min_rotation&&b.trigger("rotate",a),c>b.options.transform_min_scale&&(b.trigger("pinch",a),b.trigger("pinch"+(a.scale<1?"in":"out"),a));break;case d.EVENT_END:this.triggered&&b.trigger(this.name+"end",a),this.triggered=!1}}},d.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(a,b){return b.options.prevent_mouseevents&&a.pointerType==d.POINTER_MOUSE?(a.stopDetect(),void 0):(b.options.prevent_default&&a.preventDefault(),a.eventType==d.EVENT_START&&b.trigger(this.name,a),void 0)}},d.gestures.Release={name:"release",index:1/0,handler:function(a,b){a.eventType==d.EVENT_END&&b.trigger(this.name,a)}},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return d}):"object"==typeof module&&"object"==typeof module.exports?module.exports=d:a.Hammer=d}(this),function(a){"use strict";var b=function(b,c){return c===a?b:(b.event.bindDom=function(b,d,e){c(b).on(d,function(b){var c=b.originalEvent||b;c.pageX===a&&(c.pageX=b.pageX,c.pageY=b.pageY),c.target||(c.target=b.target),c.which===a&&(c.which=c.button),c.preventDefault||(c.preventDefault=b.preventDefault),c.stopPropagation||(c.stopPropagation=b.stopPropagation),e.call(this,c)})},b.Instance.prototype.on=function(a,b){return c(this.element).on(a,b)},b.Instance.prototype.off=function(a,b){return c(this.element).off(a,b)},b.Instance.prototype.trigger=function(a,b){var d=c(this.element);return d.has(b.target).length&&(d=c(b.target)),d.trigger({type:a,gesture:b})},c.fn.hammer=function(a){return this.each(function(){var d=c(this),e=d.data("hammer");e?e&&a&&b.utils.extend(e.options,a):d.data("hammer",new b(this,a||{}))})},b)};"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("hammer-jquery",["hammer","jquery"],b):b(window.Hammer,window.jQuery||window.Zepto)}();
}

/*! Lazy Load 1.9.4 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/* Protect window.console method calls, e.g. console is not defined on IE unless dev tools are open, and IE doesn't define console.debug */
(function(){if(!window.console){window.console={};}var m=["log","info","warn","error","debug","trace","dir","group","groupCollapsed","groupEnd","time","timeEnd","profile","profileEnd","dirxml","assert","count","markTimeline","timeStamp","clear"];for(var i=0;i<m.length;i++){if(!window.console[m[i]]){window.console[m[i]]=function(){};}}})();

/* jQuery Smart Banner - Copyright (c) 2012 Arnold Daniels <arnold@jasny.net> | Based on 'jQuery Smart Web App Banner' by Kurt Zenisek @ kzeni.com */
// !function(t){function s(){var t=document.createElement("smartbanner"),s={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in s)if(void 0!==t.style[i])return{end:s[i]};return!1}var i=function(s){this.origHtmlMargin=parseFloat(t("html").css("margin-top")),this.options=t.extend({},t.smartbanner.defaults,s);var i=navigator.standalone,n=navigator.userAgent;if(this.options.force?this.type=this.options.force:null!=n.match(/Windows Phone 8/i)&&null!==n.match(/Touch/i)?this.type="windows":null!=n.match(/iPhone|iPod/i)||n.match(/iPad/)&&this.options.iOSUniversalApp?null!=n.match(/Safari/i)&&(null!=n.match(/CriOS/i)||window.Number(n.substr(n.indexOf("OS ")+3,3).replace("_","."))<6)&&(this.type="ios"):n.match(/\bSilk\/(.*\bMobile Safari\b)?/)||n.match(/\bKF\w/)||n.match("Kindle Fire")?this.type="kindle":null!=n.match(/Android/i)&&(this.type="android"),this.type&&!i&&!this.getCookie("sb-closed")&&!this.getCookie("sb-installed")){this.scale="auto"==this.options.scale?t(window).width()/window.screen.width:this.options.scale,this.scale<1&&(this.scale=1);var e=t("android"==this.type?'meta[name="google-play-app"]':"ios"==this.type?'meta[name="apple-itunes-app"]':"kindle"==this.type?'meta[name="kindle-fire-app"]':'meta[name="msApplication-ID"]');if(0!=e.length){if("windows"==this.type)this.appId=t('meta[name="msApplication-PackageFamilyName"]').attr("content");else{var o=/app-id=([^\s,]+)/.exec(e.attr("content"));if(!o)return;this.appId=o[1]}this.title=this.options.title?this.options.title:e.data("title")||t("title").text().replace(/\s*[|\-·].*$/,""),this.author=this.options.author?this.options.author:e.data("author")||(t('meta[name="author"]').length?t('meta[name="author"]').attr("content"):window.location.hostname),this.iconUrl=e.data("icon-url"),this.price=e.data("price"),this.create(),this.show(),this.listen()}}};i.prototype={constructor:i,create:function(){var s,i=this.options.url?this.options.url:("windows"==this.type?"ms-windows-store:navigate?appid=":"android"==this.type?"market://details?id=":"kindle"==this.type?"amzn://apps/android?asin=":"https://itunes.apple.com/"+this.options.appStoreLanguage+"/app/id")+this.appId,n=this.price||this.options.price,e=n?n+" - "+("android"==this.type?this.options.inGooglePlay:"kindle"==this.type?this.options.inAmazonAppStore:"ios"==this.type?this.options.inAppStore:this.options.inWindowsStore):"",o=null===this.options.iconGloss?"ios"==this.type:this.options.iconGloss;"android"==this.type&&this.options.GooglePlayParams&&(i=i+"&referrer="+this.options.GooglePlayParams);var a='<div id="smartbanner" class="'+this.type+'"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>'+this.title+"</strong><span>"+this.author+"</span><span>"+e+'</span></div><a href="'+i+'" class="sb-button"><span>'+this.options.button+"</span></a></div></div>";this.options.layer?t(this.options.appendToSelector).append(a):t(this.options.appendToSelector).prepend(a),this.options.icon?s=this.options.icon:this.iconUrl?s=this.iconUrl:t('link[rel="apple-touch-icon-precomposed"]').length>0?(s=t('link[rel="apple-touch-icon-precomposed"]').attr("href"),null===this.options.iconGloss&&(o=!1)):t('link[rel="apple-touch-icon"]').length>0?s=t('link[rel="apple-touch-icon"]').attr("href"):t('meta[name="msApplication-TileImage"]').length>0?s=t('meta[name="msApplication-TileImage"]').attr("content"):t('meta[name="msapplication-TileImage"]').length>0&&(s=t('meta[name="msapplication-TileImage"]').attr("content")),s?(t("#smartbanner .sb-icon").css("background-image","url("+s+")"),o&&t("#smartbanner .sb-icon").addClass("gloss")):t("#smartbanner").addClass("no-icon"),this.bannerHeight=t("#smartbanner").outerHeight()+2,this.scale>1&&(t("#smartbanner").css("top",parseFloat(t("#smartbanner").css("top"))*this.scale).css("height",parseFloat(t("#smartbanner").css("height"))*this.scale).hide(),t("#smartbanner .sb-container").css("-webkit-transform","scale("+this.scale+")").css("-msie-transform","scale("+this.scale+")").css("-moz-transform","scale("+this.scale+")").css("width",t(window).width()/this.scale)),t("#smartbanner").css("position",this.options.layer?"absolute":"static")},listen:function(){t("#smartbanner .sb-close").on("click",t.proxy(this.close,this)),t("#smartbanner .sb-button").on("click",t.proxy(this.install,this))},show:function(s){var i=t("#smartbanner");if(i.stop(),this.options.layer)i.animate({top:0,display:"block"},this.options.speedIn).addClass("shown").show(),t(this.pushSelector).animate({paddingTop:this.origHtmlMargin+this.bannerHeight*this.scale},this.options.speedIn,"swing",s);else if(t.support.transition){i.animate({top:0},this.options.speedIn).addClass("shown");var n=function(){t("html").removeClass("sb-animation"),s&&s()};t(this.pushSelector).addClass("sb-animation").one(t.support.transition.end,n).emulateTransitionEnd(this.options.speedIn).css("margin-top",this.origHtmlMargin+this.bannerHeight*this.scale)}else i.slideDown(this.options.speedIn).addClass("shown")},hide:function(s){var i=t("#smartbanner");if(i.stop(),this.options.layer)i.animate({top:-1*this.bannerHeight*this.scale,display:"block"},this.options.speedIn).removeClass("shown"),t(this.pushSelector).animate({paddingTop:this.origHtmlMargin},this.options.speedIn,"swing",s);else if(t.support.transition){"android"!==this.type?i.css("top",-1*this.bannerHeight*this.scale).removeClass("shown"):i.css({display:"none"}).removeClass("shown");var n=function(){t("html").removeClass("sb-animation"),s&&s()};t(this.pushSelector).addClass("sb-animation").one(t.support.transition.end,n).emulateTransitionEnd(this.options.speedOut).css("margin-top",this.origHtmlMargin)}else i.slideUp(this.options.speedOut).removeClass("shown")},close:function(t){t.preventDefault(),this.hide(),this.setCookie("sb-closed","true",this.options.daysHidden)},install:function(){this.options.hideOnInstall&&this.hide(),this.setCookie("sb-installed","true",this.options.daysReminder)},setCookie:function(t,s,i){var n=new Date;n.setDate(n.getDate()+i),s=encodeURI(s)+(null==i?"":"; expires="+n.toUTCString()),document.cookie=t+"="+s+"; path=/;"},getCookie:function(t){var s,i,n,e=document.cookie.split(";");for(s=0;s<e.length;s++)if(i=e[s].substr(0,e[s].indexOf("=")),n=e[s].substr(e[s].indexOf("=")+1),i=i.replace(/^\s+|\s+$/g,""),i==t)return decodeURI(n);return null},switchType:function(){var s=this;this.hide(function(){s.type="android"==s.type?"ios":"android";var i=t("android"==s.type?'meta[name="google-play-app"]':'meta[name="apple-itunes-app"]').attr("content");s.appId=/app-id=([^\s,]+)/.exec(i)[1],t("#smartbanner").detach(),s.create(),s.show()})}},t.smartbanner=function(s){var n=t(window),e=n.data("smartbanner"),o="object"==typeof s&&s;e||n.data("smartbanner",e=new i(o)),"string"==typeof s&&e[s]()},t.smartbanner.defaults={title:null,author:null,price:"FREE",appStoreLanguage:"us",inAppStore:"On the App Store",inGooglePlay:"In Google Play",inAmazonAppStore:"In the Amazon Appstore",inWindowsStore:"In the Windows Store",GooglePlayParams:null,icon:null,iconGloss:null,button:"VIEW",url:null,scale:"auto",speedIn:300,speedOut:400,daysHidden:15,daysReminder:90,force:null,hideOnInstall:!0,layer:!1,iOSUniversalApp:!0,appendToSelector:"body",pushSelector:"html"},t.smartbanner.Constructor=i,void 0===t.support.transition&&(t.fn.emulateTransitionEnd=function(s){var i=!1,n=this;t(this).one(t.support.transition.end,function(){i=!0});var e=function(){i||t(n).trigger(t.support.transition.end)};return setTimeout(e,s),this},t(function(){t.support.transition=s()}))}(window.jQuery);


var site = {
	// Global variables
	ac_json: 								cag.properties.ac_json,
	ac_json_search:                         cag.properties.ac_json_search,
	ac_json_arrival: 						cag.properties.ac_json_arrival,
	ac_json_departure: 						cag.properties.ac_json_departure,
	sgt_json: 								cag.properties.sgt_json,
	tpl_search_autocomplete_datasource: 	cag.properties.tpl_search_autocomplete_datasource,
	tpl_search_flight_datasource: 			cag.properties.tpl_search_flight_datasource,
	tpl_search_crosssell_datasource: 		cag.properties.tpl_search_crosssell_datasource,
	shop_names_json_url:                    cag.properties.shop_names_json_url,
	dine_names_json_url:                    cag.properties.dine_names_json_url,
	map_shop_details: 						cag.properties.map_shop_details,
	map_dine_details: 						cag.properties.map_dine_details,
	map_metadata_details: 					cag.properties.map_metadata_details,
	clientlibs:                             $('meta[name="google-site-verification"]').length > 0 ? "/etc/designs/cag/clientlibs/" : "",
	md_iOS_M:                               false,
	md_iOS_T:                               false,
	md_Droid_M:                             false,
	md_Droid_T:                             false,
	md_others:                              false,
	debug: 									false,
	freighterTimeOptionsMap:                {"00":["00","01","02","03","04","05","06","07"],"08":["08","09","10","11","12","13","14","15"],"16":["16","17","18","19","20","21","22","23"]},

	// initialises
	init: function(){
		'use strict';

		//
		site.globalInit.init();
		//
		site.pageInit.init();
		//
		site.misc.init();
		// GA tracking
		site.analytics.init();
		// Mobile scripts
		if ($('header .visible-xs').is(":visible")) site.mobile.init();
		// IE8/9 CSS Fixes
		if ($('body.lt-ie10').length > 0) site.ieFixes.init();
		/* FOR TESTING */
		jQuery.fn.keyupDelay = function(cb, delay){
			if (delay == null){ delay = 2000; }
			var timer = 0;
			return $(this).on('keyup',function(){
				clearTimeout(timer);
				timer = setTimeout(cb, delay);
			});
		};
		$('#filterByFlight').keyupDelay(function(){
			//console.log($('#filterByFlight').val());
		});	
	},
	globalInit: {
		init: function(){
			'use strict';

			// cookies
			$.cookie.json = true;
			// JS detection for mobile/tablet/desktop
			if (typeof MobileDetect !== 'undefined') site.mobileDetect.init();
			// Emergency Notice
			if (site.misc.emergency_container.length > 0) site.misc.emergencyNotice();
			// Cookies Alert
			if (site.misc.cookies_container.length > 0) site.misc.cookiesAlert();
			// Tabs
			if ($('ul[role="tablist"]').length > 0) site.misc.tabs();
			// Autocomplete
			if ($('input.typeahead').length > 0) site.autoComplete.init();
			// Global Search
			if ($('#global-search').length > 0) site.misc.globalSearch();
			// Quick Flight Search
			if ($('div[role="quick-search"]').length > 0) site.quickFlightSearch.init();
			// Bootstrap touch carousel
			if ($('.carousel').length > 0) site.misc.carousel();
			// lazyLoad
			site.misc.lazyLoad();
			// activates touch events for carousel
			if (typeof Hammer != 'undefined') Hammer.defaults.stop_browser_behavior.touchAction = 'pan-y';
			// initiates floating links
			if ($('#floating-shortcuts').length > 0) site.misc.floatingLinks();
			// initiates survey popup
			if ( site.misc.survey_modal.length > 0 ) site.misc.surveyPopup.init();
			// Smooth Scrolling
			if ($('.anchors').length > 0 || $('.list-inline.list-type-1').length > 0) site.misc.smoothScroll();
			// Anchors/Tabs sharing
			if ($('.anchors').length > 0 || $('.list-inline.list-type-1').length > 0 || $('.cq-anchor-link').length > 0 ||
				($('section[role="main"] ul[role="tablist"]').length > 0) || $('.common-section ul[role="tablist"]').length > 0)
				site.anchorTab.init();

			// MISC
			// 3rd parties: Instagram
			if ($('.instagram-feed').length > 0) {
				// loads only on homepage
				site.thirdParty.loadInstagram();
				site.thirdParty.loadSGTTime(function(){ $('[role="quick-search"] select').trigger("chosen:updated"); });
			}
			// Switchery
			site.thirdParty.switchery();
			// Chosen
			site.thirdParty.chosen();
			// Gigya
			site.thirdParty.gigya();
			// Weather
			if ($(".weather-box-wrapper").length > 0) site.thirdParty.getWeather();
			// Go back
			if ($('#back_to_previous_page').length > 0) site.misc.goBack(); //site.misc.back_to_previous_page();
			// Back to top
			site.misc.back_to_top();
			// Transport: drop-down linking
			if ($("#link-drop-down").length > 0) site.misc.dropdownLink();
			// Newsletter
			site.misc.newsletterForm();
			// Popups / Menus
			site.misc.hideAll();
			// Update collapsed/expanded icons
			site.misc.collapseExpand();
			/* custom carousel that that displays multiple items */
			site.misc.carousel_multiple_items();
			//
			site.misc.cq_recommendation();
			/* Initialization of CQ Check In Component */
			site.misc.cq_checkin();
			/* Initialization of CQ Accordion Component */
			site.misc.cq_accordion();
			/* Initialization of Smart Banner */
			// site.misc.smartBanner();
			/* News Ticker */
			site.misc.newsTicker();
		}
	},
	pageInit: {
		init: function(){
			'use strict';

			site.pageInit.pageFlightStatus();
			site.pageInit.pageAboutUs();
			site.pageInit.pageLanding();
			site.pageInit.pageMaps();
			site.pageInit.pageShopping();
			site.pageInit.pageDining();
			site.pageInit.pageDestination();
			site.pageInit.pageOthers();
		},
		pageFlightStatus: function(){
			// Flight Status
			if ($('#tabArrDep').length > 0) site.flightStatus.init();
			// Floating table head <thead>
			if (typeof $.floatThead !== 'undefined' /*&& $('body.lt-ie9').length < 1*/) site.misc.dockableThead();
			// Attractions
			if ($('.frm-travel-type').length > 0) site.attractionFilter.init();
			// Plan Holiday
			if ($('div[role="filter"].frm-holiday-plan').length > 0) site.holidayPlan.init();
		},
		pageAboutUs: function(){
			// ABOUT US
			// disables 2015 tab
			site.misc.tabSpecial();
			if ($("#timeline-carousel").length > 0) site.aboutUs.timelinesCarousel.init(); //site.timelinesCarousel.init();
			// Smooth Scroll
			if ($("div[role='block-anchor'] a").length > 0) site.aboutUs.checkBlockAnchor("div[role='block-anchor']"); //site.checkBlockAnchor.init();
			// Load More button
			if ($(".load-more-btn a").length > 0) site.aboutUs.loadMoreAward(); //site.loadMoreAward.init();
			site.aboutUs.videoGalleries.init(); //site.videoGalleries.init();
			site.aboutUs.checkParamScrollToEle.init(); //site.checkParamScrollToEle.init();
			site.aboutUs.pushStateFormEle.init(); //site.pushStateFormEle.init();
			site.misc.checkFirstLastItems.init(); //site.checkFirstLastItems.init();
		},
		pageLanding: function(){
			// List page template
			if ($('.frm.frm-filter .row#listpageselectorfilter').length > 0){
				/* JS targeted specifically for CQ template services and facilities */
				site.tpl_services_facilities.init();
				site.listPagesFilter.init();
			}
		},
		pageMaps: function(){
			// Maps
			site.mapInit.init();
		},
		pageShopping: function(){
			//
			if ($(".cq-shop-finder-box ").length > 0) site.shop_search_button.init();
			//
			if ($('.frm.frm-filter .row#listpageselectorfilter .typeahead#shopping_shop_name_field').length > 0) site.shoplisting_shop__names_auto_complete.init();
		},
		pageDining: function(){
			//
			if ($(".cq-shop-finder-box ").length > 0) site.shop_dine_names_auto_complete.init();
			//
			if ($('.frm.frm-filter .row#listpageselectorfilter .typeahead#dining_shop_name_field').length > 0) site.dinelisting_shop__names_auto_complete.init();
		},
		pageDestination: function(){
			//
			if ($('body').hasClass('pg-destinations')) {
				$('.common-section.conblk.borderedbtm').addClass('separator').removeClass('borderedbtm');
				$('.col-lg-4.col-sm-4.col-xs-12').each(function(){
					if ($(this).find('.cq-destination-box').length < 1 && $(this).find('.img-responsive').length < 1) $(this).empty().remove();
				});
			}
		},
		pageOthers: function(){
			//
			if ($(".cq-tab-table").length > 0) site.cq_tab_table.init();
			//
			if ($('#tabPassCargo').length > 0) site.cq_airlinetable.init();
			/* JS targeted specifically for CQ template search */
			site.tpl_search.init();
			//
			if ($('#radio_selector_container #radio_selector_form').length > 0) site.misc.radio_selector_view_button();
			//
			if ($('body.lt-ie10').length < 1) $('html, body').addClass('modern');
			if ($('body.ie6').length > 0 || $('body.ie7').length > 0 || $('body.ie8').length > 0 || $('body.ie9').length > 0) $('html, body').removeClass('modern');

			if ($('body.modern.pg-errors').length > 0 || $('body.modern.page-search-noresults').length > 0)
				site.misc.shortPages();
		}
	},
	mobileDetect: {
		init: function(){
			'use strict';

			var md = new MobileDetect(window.navigator.userAgent);
			if (md.is('iOS') && md.is('iPhone')) site.md_iOS_M = true;
			if (md.is('iOS') && md.is('iPad')) site.md_iOS_T = true;
			if (md.is('AndroidOS') && md.mobile()) { site.md_Droid_M = true; site.md_Droid_T = true; }
			if (!md.mobile()) site.md_others = true;

			// fixed Android Tablet 4.3 issue
			if (md.is('AndroidOS') && md.mobile() && parseInt(md.version('Webkit')) <= 534){
				$('ul.nav').each(function(){
					$(this).find('li').css({ 'width': 100/($(this).find('li').length) + '%' });
				});
			}
		}
	},
	utils: {
		get: function(param){
			if (param = (new RegExp('[?&]' + encodeURIComponent(param) + '=([^&]*)')).exec(location.search)) return decodeURIComponent(param[1]).replace(/[+]/g," ");
		},
		getHash: function(param){
			var query = window.location.href.substring(window.location.href.indexOf('?') + 1);
			var vars = query.split('&');
			for (var i = 0; i < vars.length; i++){
				var pair = vars[i].split('=');
				if (decodeURIComponent(pair[0]) == param){
					return decodeURIComponent(pair[1]);
				}
			}
		},
		getParameterByName: function(name){
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		},
		compare: function(){
			var output = [], cntObj = {}, array, item, cnt;

			// for each array passed as an argument to the function
			for (var i in arguments){
				array = arguments[i];
				// for each element in the array
				for (var j in array){
					item = "-" + array[j];
					cnt = cntObj[item] || 0;
					// if cnt is exactly the number of previous arrays,
					// then increment by one so we count only one per array
					if (cnt == i){ cntObj[item] = cnt + 1; }
				}
			}
			// now collect all results that are in all arrays
			for (item in cntObj){
				if (cntObj.hasOwnProperty(item) && cntObj[item] === arguments.length){ output.push(item.substr(1)); }
			}

			return (output);
		},
		getPreviousHour: function(currentHour) {
			var prevHour = "00";
			if($.isNumeric(currentHour)) {
				currentHour = parseInt(currentHour);
				if(currentHour < 0 || currentHour > 23) {
					prevHour = "00";
				} else if(currentHour == 0) {
					prevHour = "23";
				} else {
					prevHour = currentHour - 1;
					if(prevHour < 10) {
						prevHour = "0"+prevHour;
					} else {
						prevHour = ""+prevHour; //just a type cast
					}
				}
			}
			return prevHour;
		},
		getToday: function(today) {
			var date = new Date(1970,0,1);
			var todayArr = today.split(" ")[0].split("-");
			date.setFullYear(parseInt(todayArr[0]));
			date.setMonth(parseInt(todayArr[1]));
			date.setDate(parseInt(todayArr[2]));
		},
		getYesterday: function(today) {
			var date = site.utils.getToday(today);
			date.setDate(date.getDate() - 1);
			return date;
		},
		random: function(min, max){
			return Math.floor( Math.random() * (max - min) + min );
		},
		formatDate: function(dateStr){
			if(angular) {
				var _date = new Date(1970,0,1);
				_date.setFullYear(parseInt(dateStr.substr(0,4)));
				_date.setMonth(parseInt(dateStr.substr(4,2)) - 1);
				_date.setDate(parseInt(dateStr.substr(6,2)));
				return angular.injector(["ng"]).get("dateFilter")(_date, "d MMMM yyyy");
			} else {
				var m = "";
				switch (dateStr.substr(4,2)) {
					case "01": m = "January"; break;
					case "02": m = "February"; break;
					case "03": m = "March"; break;
					case "04": m = "April"; break;
					case "05": m = "May"; break;
					case "06": m = "June"; break;
					case "07": m = "July"; break;
					case "08": m = "August"; break;
					case "09": m = "September"; break;
					case "10": m = "October"; break;
					case "11": m = "November"; break;
					case "12": m = "December"; break;
				}
				return dateStr.substr(6,2) + " " + m + " " +dateStr.substr(0,4);
			}
		},
		addOne: function(clazz){
			var arr = $(clazz);
			if(arr.length > 0) {
				var str = $(clazz).html();
				$(clazz).html(parseInt(str)+1);
			}
		}
	},
	misc: {
		mainnav_container: $('header .navbar'),
		subnav_container: $('nav[role="sub-navigation"]'),
		emergency_container: $('#important-notice'),
		cookies_container: $('#cookies-msg'),
		floating_container: $('#floating-shortcuts'),
		survey_modal: $('#surveyModal'),

		init: function(){
			'use strict';

			site.misc._dev();

			// 3 columns
			$('.bordered').each(function(idx, itm){
				if ($(itm).find('.col-lg-4.col-sm-4.col-xs-12').length === 3){
					$(itm).find('.row').addClass('three-cols');
					$('body.lt-ie10 .three-cols div:last-child').css({ 'background': 'none !important' });
				}
			});

			// 5 columns
			// $('.bordered').each(function(idx, itm){
			// 	if ($(itm).find('.col-lg-2.col-sm-2.col-xs-12').length === 3)
			// 		$(itm).find('.row').addClass('five-cols');
			// });
			$('.col-lg-2.col-sm-2.col-xs-12').each(function(idx, itm){
				if ($(itm).parent('.row').find('.col-lg-2').length === 5){
					$(itm).parent('.row').addClass('five-cols');
					$('body.lt-ie10 .five-cols div:last-child').css({ 'background': 'none !important' });
				}
			});
			//
			if ($('.section-background-image').children().length < 1) $('.section-background-image').addClass('hidden');
		},
		skyTrax: function(){
			$('.skytrax-container').css({ 'margin-left': '-' + $('.skytrax-container').outerWidth()/2 + 'px' }).addClass('hidden-xs').show();
		},
		emergencyNotice: function(){ // writes 'emergency' cookie to memorize shown/hidden status
			//$.removeCookie('emergency');
			//console.log('notice: ' + $.cookie('emergency'));
			if ($.cookie('emergency') === undefined) site.misc.emergency_container.css({ 'display': 'block' });
			if (site.misc.emergency_container.is(':visible')){
				$('section[role="highlight"]').css({ 'border-top': (site.misc.emergency_container.outerHeight(true) + 'px solid #fff') });
				$('section[role="banner"]').css({ 'border-top': (site.misc.emergency_container.outerHeight(true) + 'px solid #fff') });
				$('#modal-wrapper').css({ 'border-top': (site.misc.emergency_container.outerHeight(true) + 'px solid #fff') });
			}
			else {
				$('section[role="highlight"]').css({ 'border-top': '0' });
				$('section[role="banner"]').css({ 'border-top': '0' });
				$('#modal-wrapper').css({ 'border-top': '0' });
			}
			if ($.cookie('emergency') === 'hidden') {
				$('section[role="highlight"]').css({ 'border-top': '0' });
				$('section[role="banner"]').css({ 'border-top': '0' });
				$('#modal-wrapper').css({ 'border-top': '0' });
				site.misc.emergency_container.hide();
			}
			site.misc.emergency_container.find('button').on('click', function(evt){
				$('section[role="highlight"]').css({ 'border-top': '0' });
				$('section[role="banner"]').css({ 'border-top': '0' });
				$('#modal-wrapper').css({ 'border-top': '0' });
				site.misc.emergency_container.hide();
				$.cookie('emergency', 'hidden', { expires: 1, path: '/' });
			});
			site.misc.emergency_container.find('.btn-expand').on('click', function(){
				$(this).toggleClass('opened');
				if ($(this).hasClass('opened')){
					$(this).find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
					site.misc.emergency_container.find('.msg .default').removeClass('visible-xs').hide();
					site.misc.emergency_container.find('.msg .extra').removeClass('hidden-xs').show();
					$('section[role="highlight"]').css({ 'border-top': (site.misc.emergency_container.outerHeight(true) + 'px solid #fff') });
					$('section[role="banner"]').css({ 'border-top': (site.misc.emergency_container.outerHeight(true) + 'px solid #fff') });
					$('#modal-wrapper').css({ 'border-top': (site.misc.emergency_container.outerHeight(true) + 'px solid #fff') });
				}
				else {
					$(this).find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
					site.misc.emergency_container.find('.msg .default').addClass('visible-xs').show();
					site.misc.emergency_container.find('.msg .extra').addClass('hidden-xs').hide();
					$('section[role="highlight"]').css({ 'border-top': (site.misc.emergency_container.outerHeight(true) + 'px solid #fff') });
					$('section[role="banner"]').css({ 'border-top': (site.misc.emergency_container.outerHeight(true) + 'px solid #fff') });
					$('#modal-wrapper').css({ 'border-top': (site.misc.emergency_container.outerHeight(true) + 'px solid #fff') });
				}
			});
		},
		cookiesAlert: function(){
			'use strict';

			//$.removeCookie('cookies');
			//console.log('cookies: ' + $.cookie('cookies'));
			if ($.cookie('cookies') === undefined) {
				site.misc.cookies_container.css({ 'display': 'block' });
				$('footer').css({ 'margin-bottom': site.misc.cookies_container.outerHeight(true) - 1 });
				if ($('body.lt-ie9').length > 0) $('footer').css({ 'border-bottom': '0 none' });
			}
			if ($.cookie('cookies') === 'hidden') {
				site.misc.cookies_container.hide();
				$('footer').css({ 'margin-bottom': '0' });
				if ($('body.lt-ie9').length > 0) $('footer').css({ 'border-bottom': '0 none' });
			}
			site.misc.cookies_container.find('button').on('click', function(evt){
				site.misc.cookies_container.hide();
				$('footer').css({ 'margin-bottom': '0' });
				if ($('body.lt-ie9').length > 0) $('footer').css({ 'border-bottom': '0 none' });
				$.cookie('cookies', 'hidden', { expires: 365, path: '/' });
			});
		},
		shortPages: function(){
			//
			if ($('#lev1-mobile').is(':hidden')){
				if ($('body.modern.pg-search.short_page').length > 0){
					//$('footer, section[role="social"]').hide();
					$('html.modern, body.modern').removeClass('short_page');
					$('html.modern, body.modern').css({ 'height':'auto' });
					$('body.modern [role="social"]').css({ 'bottom':'auto' });
				}
				//
				if ($('body.modern').height() < $(window).height()){
					$('html.modern, body.modern').addClass('short_page');
					$('body.modern').css({ 'height': $(window).height() - $('footer').outerHeight() });
					$('html.modern').css({ 'height': $(window).height() });
					$('body.modern [role="social"]').css({ 'bottom':$('footer').outerHeight() + $('#cookies-msg').outerHeight() });
					$('body.modern footer, body.modern section[role="social"]').show();
				}
				else {
					$('html.modern, body.modern').removeClass('short_page');
					$('html.modern, body.modern').css({ 'height':'auto' });
					$('body.modern [role="social"]').css({ 'bottom':'auto' });
					$('body.modern footer, body.modern section[role="social"]').show();
				}
				/* */
				$(window).resize(function(){
					$('body.modern').css({ 'height': $(window).height() - $('footer').outerHeight() });
					$('html.modern').css({ 'height': $(window).height() });
				});
			}
		},
		carousel: function(){
			$(".carousel").carousel();

			// fixes button not clickable
			$('#carousel-hili-home .carousel-indicators li').bind('touchstart', function(evt){
				$(this).trigger('click');
			});
			// fixes button not clickable
			$('#carousel-hili-home .item a.more-btn').bind('touchstart', function(evt){
				//window.open($(this).attr('href'));
				evt.stopPropagation();
				$(this).trigger('click');
			});

			// hides next/prev & indicators
			$('.carousel').each(function(idx, itm){
				if ($(itm).find('.carousel-inner .item').length <= 1) {
					$(itm).find('.carousel-control').hide();
					$(itm).find('.carousel-indicators').hide();
				}
			});
		},
		carousel_multiple_items: function(){
			var carousel = $(".carousel-multiple-items"),
				carousel_children = carousel.find(".carousel-inner").children(),
				carousel_inner = carousel.find(".carousel-inner"),
				carousel_indicators = carousel.find(".carousel-indicators"),
				docWidth  = $(document).width(),
				items_shown = 5;
			if ( carousel.length == 0 ) return;
			// lg 5 items, md 5 items, s 4 items , xs 2 items
			items_shown = (docWidth >= 1170) ? 5 : ( (docWidth >= 992) ? 5 : ( (docWidth >= 768) ? 4 : 2 ) ) ;
			$.each(carousel_children,function(i,item){
				if ( i % items_shown == 0 ) {
					$('<div class="item"></div>').appendTo( carousel_inner );
				}
				carousel_inner.find(".item").last().append( carousel_children.eq(i) );
			});
			$.each( carousel_inner.find(".item") ,function(i){
				$('<li data-target="#carousel-multiple-items" data-slide-to="'+i+'" class="'+(i==0 ? "active" : "")+'"></li>').on("click",function(){
					carousel.carousel(i);
				}).appendTo( carousel_indicators );
			});
			carousel_indicators.insertAfter(carousel_inner);

			carousel_inner.find(".item").first().addClass("active");
			carousel.carousel()
				.find(".left.carousel-control").on("click",function(){
					carousel.carousel('prev');
					return false;
				}).end()
				.find(".right.carousel-control").on("click",function(){
					carousel.carousel('next');
					return false;
				}).end();
		},
		globalSearch: function(){
			$('#global-search').on('shown.bs.modal', function(){
				$('#frmSearch input.typeahead').focus();
			});
		},
		floatingLinks: function(){
			// hides if no items
			if (site.misc.floating_container.find('ul li').length < 1) site.misc.floating_container.hide();
			// always displays expanded floating shortcuts on desktop
			if ($('header .visible-lg').is(":visible")){
				site.misc.floating_container.addClass('expanded');
				site.misc.floating_container.find('.pull-left .fa').removeClass('fa-angle-left').addClass('fa-angle-right');
				site.misc.floating_container.animate({ 'right': 0 }, 'fast');
			}
			// on 'click': toggles .expanded class then show/hide floating shortcut links
			site.misc.floating_container.find('.pull-left').off('click').on('click', function(){
				site.misc.floating_container.toggleClass('expanded');
				if (site.misc.floating_container.hasClass('expanded')){
					site.misc.floating_container.find('.pull-left .fa').removeClass('fa-angle-left').addClass('fa-angle-right');
					site.misc.floating_container.animate({ 'right': 0 }, 'fast');
				}
				else {
					site.misc.floating_container.find('.pull-left .fa').removeClass('fa-angle-right').addClass('fa-angle-left');
					site.misc.floating_container.animate({ 'right': -80 }, 'fast');
				}
			});
		},
		surveyPopup: {
			init: function(){
				var appearsIn = site.misc.survey_modal.data("appears-in") || 120;
				if ( site.misc.survey_modal.length == 0 ) return;

				if ($.cookie('surveyPopup') === undefined) {
					$.cookie('surveyPopup', 'show', { expires: 30, path: '/' });
					$.cookie('surveyTimestamp', ( new Date() ).getTime() , { expires: 30, path: '/' });
					$.cookie('surveyAppearsIn',  appearsIn , { expires: 30, path: '/' });
				}
				if ( $.cookie('surveyPopup') == 'show' ) { site.misc.surveyPopup.checkSurveyFunction();	}

				site.misc.survey_modal.on('hidden.bs.modal', function (e) {
					if ( $.cookie('surveyPopup') == 'show' ) {
						$.cookie('surveyPopup', 'dismiss', { expires: 30, path: '/' });
					}
				});
				site.misc.survey_modal.on("click",".btn-take-survey",function(){
					if ( $.cookie('surveyPopup') == 'show' ) {
						$.cookie('surveyPopup', 'survey-taken', { expires: 30, path: '/' });
						site.misc.survey_modal.modal('hide');
					}

				});
				site.misc.survey_modal.on("click",".btn-nope",function(){
					if ( $.cookie('surveyPopup') == 'show' ) {
						$.cookie('surveyPopup', 'survey-nope', { expires: 30, path: '/' });
						site.misc.survey_modal.modal('hide');
					}
				});
			},
			checkSurveyFunction: function(){
				var timer = setInterval(function(){
					if ( ( (new Date()).getTime() - $.cookie('surveyTimestamp') ) / 1000 >= $.cookie('surveyAppearsIn') ) {
						site.misc.survey_modal.modal();
						clearInterval( timer );
					}
					//console.log( ( (new Date()).getTime() - (new Date( $.cookie('surveyTimestamp') )).getTime() ) / 1000 );
				},1000)
			}
		},
		tabs: function(){ // Tabs
			'use strict';

			$('ul[role="tablist"] a, #tabPassCargo .nav-tabs a').on('click', function(evt){
				evt.preventDefault();
				$(this).tab('show');
				//return false;
			});
			//
			$('ul[role="tablist"].list-type-2 li').on('click', function(evt){
				evt.preventDefault();
				$(this).find('a').tab('show');
			});
		},
		tabSpecial: function(){
			var currentTab = $('.awards-accolades ul[role="tablist"] li.active');

			$('.awards-accolades ul[role="tablist"] a').on('click', function(e){
				if ($(this).parent('li').hasClass('disabled')) {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					$(this).parent('li').removeClass('active');
					$(currentTab).addClass('active');
					return false;
				}
				else {
					currentTab = $(this).parent('li');
				}
			});
		},
		lazyLoad: function(){
			$("img.lazyload").lazyload({
				threshold: 100,
				event: "sporty",
				effect: "fadeIn"
			});
		},
		hideAll: function(){ // Global: closes opened menu
			//
			$(document).mouseup(function(evt){
				// closes mainnav_container
				if ( !site.misc.mainnav_container.is(evt.target) && site.misc.mainnav_container.has(evt.target).length === 0 && site.misc.mainnav_container.find('.in').length > 0 && $(evt.target).closest("#CQ").length==0 ){
					site.misc.mainnav_container.find('.collapse').each(function(idx, val){
						if ($(val).hasClass('in')){
							$(val).collapse('hide');
						}
					});
				}
				// closes subnav_container
				if (site.misc.subnav_container.find('.collapsed').length > 0 && !site.misc.subnav_container.is(evt.target)
					&& site.misc.subnav_container.has(evt.target).length === 0 && site.misc.subnav_container.find('.in').length > 0){
					site.misc.subnav_container.find('.collapse').each(function(idx, val){
						if ($(val).hasClass('in')){
							site.misc.subnav_container.find('a[data-toggle="collapse"]').eq(idx).click();
						}
					});
				}
			});
		},
		collapseExpand: function(){	// updates up/down icons when clicked
			//
			$('#lev2-nav').on({
				'show.bs.collapse': function(evt){
					$('a[href=#' + $(evt.target).attr('id') + '] i.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
				},
				'hide.bs.collapse': function(evt){
					$('a[href=#' + $(evt.target).attr('id') + '] i.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
				}
			});
			//
			$('div[role="quick-search"] .collapse').on({
				'show.bs.collapse': function(evt){
					$('a[href=#' + $(evt.target).attr('id') + '] i.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
				},
				'hide.bs.collapse': function(evt){
					$('a[href=#' + $(evt.target).attr('id') + '] i.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
				}
			});
			$('div[role="quick-search"] a.btn-toggle').on("click", function(){
				$( $('div[role="quick-search"] a.btn-toggle').not( $(this) ).attr("href") ).collapse("toggle");
			});
		},
		smoothScroll: function(){
			'use strict';

			$('.list-inline.list-type-1 a, .list-inline.anchors a').on('click', function(event){
				event.preventDefault();
				var link = this;
				$.smoothScroll({
					offset:-90,
					speed:400,
					easing:'swing',
					autoCoefficient:2,
					scrollTarget:link.hash
				});
			});
		},
		dockableThead: function(){
			var $table = $('table.dockableThead');

			if (site.md_iOS_M) $table.floatThead({ scrollingTop: 48, useAbsolutePositioning: true });
			else if (site.md_iOS_T) $table.floatThead({ scrollingTop: 110, useAbsolutePositioning: true });

			else if (site.md_Droid_M) $table.floatThead({ scrollingTop: 48, useAbsolutePositioning: true });
			else if (site.md_Droid_T) $table.floatThead({ scrollingTop: 110, useAbsolutePositioning: true });

			else $table.floatThead({ scrollingTop: 62, useAbsolutePositioning: false });

			$table.floatThead('reflow');
		},
		dropdownLink: function(){
			$("#link-drop-down").on("change", function(){
				var val = $(this).val();
				if (val && val != "") window.location.href = val;
			});
		},
		back_to_top: function(){
			var scope = $("body.cagApp");
			back_to_top_button = $('<a href="#top" class="back-to-top"><i class="icon-cag-backtop"></i></a>');
			if (scope.length==0) return;
			if (typeof $.fn.smoothScroll != 'undefined') back_to_top_button.smoothScroll(); else { if(site.debug) {console.log("ERR: SmoothScroll is not defined")} };
			back_to_top_button.appendTo( scope );

			$(document).on( "scroll", function(){
				var doc = $(this);
				if ( doc.scrollTop() > 800 && !back_to_top_button.hasClass("shown") ) {
					back_to_top_button.addClass("shown").stop().fadeIn();
				} else
				if ( doc.scrollTop() < 800 && back_to_top_button.hasClass("shown") ) {
					back_to_top_button.removeClass("shown").stop().fadeOut();
				}
			});
		},
		back_to_previous_page: function(){
			$('#back_to_previous_page').on('click', function(e){
				e.preventDefault();
				var backUrl = window.backUrl;
				if(backUrl && backUrl.trim() != "") {
					window.location.href = backUrl;
				} else {
					window.location.href = document.referrer;
				}
			});
		},
		goBack: function(){
			$('#back_to_previous_page').on('click', function(){
				//parent.history.back();
				var backUrl = window.backUrl;
				if(backUrl && backUrl.trim() != "") {
					window.location.href = backUrl;
				} else {
				   parent.history.go(-1);
				}
				return false;
			});
		},
		radio_selector_view_button: function(){
			if ($('#radio_selector_container #radio_selector_form #radio_selector_view_button').length){
				$('#radio_selector_container #radio_selector_form #radio_selector_view_button').on('click', function(){
					var tagName = $('#radio_selector_container #radio_selector_form a.active').attr('href');
					tagName = tagName.substring(1);
					$('#radio_selector_container #radio_selector_form input[name="tagfilter"]').val(tagName);
					$('#radio_selector_container #radio_selector_form').serialize();
					$('#radio_selector_container #radio_selector_form').submit();
				});
			}
		},
		newsletterForm: function(){
			var scope = $("#mc_embed_signup"),
				input_email = scope.find("#mce-EMAIL");
			if (scope.length == 0) return;
			$(".registration-form").fadeIn();
			if ( typeof site.utils.get("email") != 'undefined' ){
				if (input_email.val()=="") input_email.val( site.utils.get("email") );
			}
			$.validator.setDefaults({ ignore: [] });
			scope.find("#mc-embedded-subscribe-form").validate({
				submitHandler: function(form) {
					$.ajax({
						type: "GET",
						url: $(form).attr("action").replace("subscribe/post","subscribe/post-json"),
						data: $(form).serialize() ,
						cache       : false,
						dataType    : 'jsonp',
						jsonp       : 'c',
						contentType: "application/json; charset=utf-8"
					})
					.done(function(response){
						if (response.result == "success") {
							scope.find(".registration-form").addClass("hidden").end().find(".registration-done").removeClass("hidden");
						} else if (response.result == "error" ) {
							$("#mce-responses").empty().append('<label class="error spacing-3x">'+response.msg+'</label>');
						}
					});
				},
				errorPlacement: function(error, element) {
					if ( $(element).closest(".mc-field-group").find(".chosen-wrap").length > 0 && element.attr("name") == "MERGE5"){
						error.insertAfter( $(element).closest(".mc-field-group").find(".chosen-wrap") );
					} else error.insertAfter(element);
				}
			});
		},
		cq_recommendation: function(){
			var scope = $(".recommendation"),
				dropdown = scope.find("select.selection"),
				recommendation_nav = scope.find("ul.selection");

			if (scope.length==0) return;

			if (typeof $.fn.packery != 'undefined')
				scope.find(".packery").packery({ itemSelector: '.product-cell' });
			else {
				if ( site.debug ) console.log("ERR: Packery is not defined");
			}
			dropdown.on("change",function(){
				recommendation_nav.find("a[href="+$(this).val()+"]").click();
			});
		},
		cq_checkin: function(){
			var scope = $(".check-in"),
				button = scope.find(".trigger-overlay");
			if (scope.length==0) return;

			button.on("click",function(){
				var _self = $(this),
					overlay_content = _self.closest(".thumbnail").siblings(".overlay-content").clone().unwrap().html();

				scope.closest(".row").children("div").not(".overlay-wrapper").addClass("hidden");
				$('<div class="overlay-wrapper"></div>')
					.append( '<button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' )
					.append(
						$('<div class="overlay-content"></div>')
							.append( overlay_content )
					)
					.appendTo( scope.closest(".row") );
				return false;
			});
			scope.closest(".row").on("click","button.close",function(){
				$(this).closest(".overlay-wrapper").remove();
				scope.closest(".row").children("div").not(".overlay-wrapper").removeClass("hidden");

			});
		},
		cq_accordion: function(){
			var scope = $(".cq-accordion"),
				item = scope.find(".panel");
			if (scope.length==0) return;

			scope.find(".panel-heading").on("click",function(){
				if ( !$(this).closest(".panel").hasClass("active") ) {
					item.removeClass("active");
					$(this).closest(".panel").addClass("active");
				} else $(this).closest(".panel").removeClass("active");
			});
		},
		checkFirstLastItems: {
			init: function(){
				'use strict';
				site.misc.checkFirstLastItems.elements();
			},
			elements: function(){
				function isIE() {
					var myNav = navigator.userAgent.toLowerCase();
					return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
				}
				if (isIE() != false && isIE() < 9) {
					setTimeout(function(){
						$("li:first-child,tr:first-child,td:first-child,dl:first-child,ol:first-child,ul:first-child,.row > div:first-child").addClass("first-child");
						$("li:last-child,tr:last-child,td:last-child,dl:last-child,ol:last-child,ul:last-child,.row > div:last-child").addClass("last-child");
					},1500);
				}
			}
		},
		_dev: function(){
			'use strict';

			//
			var dropdown = $(".link-drop-down");
			dropdown.on("change", function() {
				var val = $(this).val();
				if(val && val != "") window.location.href = val;
			});

			// smooth scroll anchors in transport page
			// (function( selector ){
			// 	var scope = $(selector),
			// 		items = scope.find("li a");
			// 	if (scope.length==0) return;
			// 	if (typeof $.fn.smoothScroll != 'undefined') items.smoothScroll({offset: -100}); else console.log("ERR: SmoothScroll is not defined");
			// })( "ul.anchors" );

			// timeline scope
			(function( selector ){
				var scope = $(selector),
					timeline_row = scope.find(".timeline-row");
				if (scope.length==0) return;
				timeline_row.first().addClass("first-child");
				timeline_row.last().addClass("last-child");
			})( ".timeline" );


			// navigation scope
			(function( selector ){
				var scope = $(selector).closest(".navbar"),
					panel = scope.find(".collapse"),
					navigation = scope.find("ul[role=navigation]");

				if (scope.length==0) return;

				if (typeof MobileDetect != 'undefined') {
					var md = new MobileDetect(window.navigator.userAgent);
				}
				// clicking menu in tablet mode will expand and collapse the panel, does not follow the href
				navigation.on("click","a[role=button]",function(event){
					if ( typeof md != 'undefined' && md.tablet() ) {
						var selected_item = typeof $(this).data("target") != 'undefined' ? $( $(this).data("target") ) : $( $(this).attr("href") );
						if ( selected_item.length > 0 ) {
							var support = $.support.transition;
							if ( selected_item.hasClass("in") ) {
								$.support.transition=false;
								panel.collapse('hide');
								$.support.transition = support;
							} else {
								$.support.transition=false;
								panel.collapse('hide');
								selected_item.collapse("show");
								$.support.transition = support;
							}
						}
						return false;
					}
				});

				navigation.on("mouseenter","a[role=button]",function(){
					if (!md.tablet() && !md.mobile()) {
						var selected_item = $( $(this).data("target") );
						if ( selected_item.length > 0 ) {
							var support = $.support.transition;
							$.support.transition=false;
							panel.collapse('hide');
							selected_item.collapse("show");
							$.support.transition = support;
						}
					}
				});

				// Added by SA 2015-07-08
				navigation.on("mouseenter","a.direct-link",function(){
					if (!md.tablet() && !md.mobile()) {
						panel.removeClass('in');
						//panel.collapse('hide');
					}
				});

				if ( !( $("body").hasClass("author-mode") || $("body").hasClass("design-mode") ) ) {
					scope.on("mouseleave",function(){
						navigation.find("li.active").removeClass("active");
						$(this).find(".collapse.in").removeClass("in");
					})
				} else {

				}
			})(".hidden-xs .navbar #lev1-nav");

			/*
				IE 8 doesn't have indexOf, this will enable indexOf in IE 8
				https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
			*/
			if (!Array.prototype.indexOf) {
				Array.prototype.indexOf = function(searchElement, fromIndex) {
					var k;
					if (this == null) {
						throw new TypeError('"this" is null or not defined');
					}
					var O = Object(this);
					var len = O.length >>> 0;
					if (len === 0) { return -1; }
					var n = +fromIndex || 0;
					if (Math.abs(n) === Infinity) { n = 0; }
					if (n >= len) { return -1; }
					k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
					while (k < len) {
						if (k in O && O[k] === searchElement) { return k; }
						k++;
					}
					return -1;
				};
			}
		},
		smartResize: function($, sr){ //Smart Resize
			var debounce = function(func, threshold, execAsap){
				var timeout;
				return function debounced () {
					var obj = this, args = arguments;
					function delayed () {
						if (!execAsap)
							func.apply(obj, args);
						timeout = null;
					};
					if (timeout)
						clearTimeout(timeout);
					else if (execAsap)
						func.apply(obj, args);
					timeout = setTimeout(delayed, threshold || 200);
				};
			};
			// smartresize
			jQuery.fn[sr] = function(fn){ return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
		},
		equalHeight: function(container){
			var currentTallest = 0,
				currentRowStart = 0,
				rowDivs = new Array(),
				$el,
				topPosition = 0;
			$(container).each(function(){
				$el = $(this);
				$($el).height('auto');
				topPostion = $el.position().top;

				if (currentRowStart != topPostion) {
					for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
						rowDivs[currentDiv].height(currentTallest);
					}
					rowDivs.length = 0; // empty the array
					currentRowStart = topPostion;
					currentTallest = $el.height();
					rowDivs.push($el);
				} else {
					rowDivs.push($el);
					currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
				}
				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
			});
		},
		newsTicker: function() {
			setInterval(function() {
				$('.ticker li:first').slideUp(function() { 
					$(this).appendTo($('#ticker')).slideDown(); 
				});
			}, 4000);
		} 
		// smartBanner: function(){
		// 	$.smartbanner();
		// 	// $.smartbanner({
		// 	//   title: 'iChangi', // What the title of the app should be in the banner (defaults to <title>)
		// 	//   author: 'Changi Airport Singapore', // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
		// 	//   price: 'FREE', // Price of the app
		// 	//   appStoreLanguage: 'us', // Language code for App Store
		// 	//   inAppStore: 'On the App Store', // Text of price for iOS
		// 	//   inGooglePlay: 'In Google Play', // Text of price for Android
		// 	//   inAmazonAppStore: 'In the Amazon Appstore',
		// 	//   inWindowsStore: 'In the Windows Store', // Text of price for Windows
		// 	//   GooglePlayParams: null, // Aditional parameters for the market
		// 	//   icon: null, // The URL of the icon (defaults to <meta name="apple-touch-icon">)
		// 	//   iconGloss: null, // Force gloss effect for iOS even for precomposed
		// 	//   url: null, // The URL for the button. Keep null if you want the button to link to the app store.
		// 	//   button: 'VIEW', // Text for the install button
		// 	//   scale: 'auto', // Scale based on viewport size (set to 1 to disable)
		// 	//   speedIn: 300, // Show animation speed of the banner
		// 	//   speedOut: 400, // Close animation speed of the banner
		// 	//   daysHidden: 15, // Duration to hide the banner after being closed (0 = always show banner)
		// 	//   daysReminder: 90, // Duration to hide the banner after "VIEW" is clicked *separate from when the close button is clicked* (0 = always show banner)
		// 	//   force: null, // Choose 'ios', 'android' or 'windows'. Don't do a browser check, just always show this banner
		// 	//   hideOnInstall: true, // Hide the banner after "VIEW" is clicked.
		// 	//   layer: false, // Display as overlay layer or slide down the page
		// 	//   iOSUniversalApp: true // If the iOS App is a universal app for both iPad and iPhone, display Smart Banner to iPad users, too.      
		// 	//   appendToSelector: 'body' //Append the banner to a specific selector
		// 	// })
		// }
	},
	anchorTab: {
		anchorOrTab: false,

		init: function(){
			'use strict';

			site.anchorTab.updateHash();
			site.anchorTab.showTabs();
			if ($('body.lt-ie10').length > 0) site.anchorTab.smoothScrollToEle();
			else site.anchorTab.scrollToEle();
		},
		updateHash: function(){
			if ($('body.lt-ie10').length > 0){
				var location = window.history.location || window.location;
			}
			// Tabs
			$('ul[role="tablist"]').each(function(idx, itm){
				$(itm).find('a').on('click', function(evt){
					evt.preventDefault();
					var hash1 = 'tab=' + $(this).attr("href").substr(1);
					if ($(this).parents('.tab-pane').length > 0) {
						hash1 = 'tabParent=' + $(this).parents('.tab-pane').attr('id') + '&' + hash1;
					}
					if ($(this).parents('#tabArrDep').length > 0) {
						hash1 += '&inout=' + $(this).data('air');
					}
					if ($('body.lt-ie10').length > 0){
						window.location.hash = '#/';
						history.pushState('', document.title, '?' + hash1);
					}
					else {
						window.location.hash = '#nogo';
						history.pushState('', document.title, window.location.pathname + '?' + hash1);
					}
					evt.preventDefault();
				})
			});
			// Anchors
			$('ul.list-inline.list-type-1, ul.list-inline.anchors').each(function(idx, itm){
				$(itm).find('a').on('click', function(evt){
					evt.preventDefault();
					var hash2 = 'anchor=' + $(this).attr("href").substr(1);
					if ($(this).parents('.tab-pane').length > 0) {
						hash2 = 'tabParent=' + $(this).parents('.tab-pane').attr('id') + '&' + hash2;
					}
					if ($('body.lt-ie10').length > 0){
						window.location.hash = '#/';
						history.pushState('', document.title, '?' + hash2);
					}
					else {
						window.location.hash = '#nogo';
						history.pushState('', document.title, window.location.pathname + '?' + hash2);
					}
					evt.preventDefault();
				})
			});
		},
		showTabs: function(){
			// if there is parent tab, show parent first
			if (site.utils.getHash('tabParent') !== undefined && site.utils.getHash('tabParent') !== ''){
				$('a[href=#' + site.utils.getHash('tabParent') + ']').tab('show');
				site.anchorTab.anchorOrTab = true;
			}
			// then shows current tab
			if (site.utils.getHash('tab') !== undefined && site.utils.getHash('tab') !== ''){
				$('a[href=#' + site.utils.getHash('tab') + ']').tab('show');
				site.anchorTab.anchorOrTab = true;
			}
		},
		scrollToEle: function(){
			// if sharing anchors, scrolls to the anchor
			if (site.utils.get('anchor') !== undefined && site.utils.get('anchor') !== ''){
				$('a[href="#' + site.utils.get('anchor') + '"]').trigger('click');
			}
			// or else, scrolls to the current tab
			else if (site.utils.getHash('tab') !== undefined && site.utils.getHash('tab') !== ''){
				$('html,body').animate({
					scrollTop: $('a[href=#' + site.utils.getHash('tab') + ']').parents('ul[role="tablist"]').offset().top - 180
				}, 'fast');
			}
		},
		smoothScrollToEle: function(){
			if (site.utils.getHash('anchor') !== undefined && site.utils.getHash('anchor') !== ''){
				$('a[href="#' + site.utils.getHash('anchor') + '"]').trigger('click');
			}
			else if (site.utils.getHash('tab') !== undefined && site.utils.getHash('tab') !== ''){
				var element       = $('a[href="#' + site.utils.getHash('tab') + '"]').closest('ul[role="tablist"]');
				var elementHeight = element.height();
				var windowHeight  = $(window).height();

				var offset = Math.min(elementHeight, windowHeight) + element.offset().top - 180;
				$('html, body').animate({ scrollTop: offset }, 1000);
			}
		}
	},
	autoComplete: {
		init: function(){
			'use strict';

			if ($('div[role="quick-search"]').length > 0){
				site.autoComplete.doArrival();
				site.autoComplete.doDeparture();
			}
			//
			site.autoComplete.doGlobalSearch();
			//
			site.autoComplete.submitOnSelected();
		},
		doArrival: function(){ // Quick Flight Search Autocomplete - Arrivals
			var ac_arrivals = new Bloodhound({
				datumTokenizer: function(datum) { return Bloodhound.tokenizers.whitespace(datum.value); },
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				//prefetch: '../data/films/post_1960.json',
				remote: {
					url: site.ac_json_arrival,
					filter: function(list){
						return $.map(list.autoCompleteResults, function(item){ return { val1: item.flightNo, val2: item.airportCode, val3: item.city, val5: item.airlineDesc, val6: item.scheduledTime }; });
					}
				}
			});
			ac_arrivals.initialize();
			//
			$('#sArrivals .typeahead').typeahead({ highlight:true , minLength:2 }, {
				name: 'ac_arrivals',
				displayKey: 'val1',
				templates: {
					//header: '<h5>Heading</h5>',
					suggestion: Handlebars.compile('<p>{{val1}} - {{val3}} ({{val2}}) - {{val6}}</p>')
				},
				source: ac_arrivals.ttAdapter()
			}).on('typeahead:selected', function(event, data){
				var currentHour = data.val6.split(":")[0];
				$("#sArrivals").find("[name=schtime]").val(currentHour);
			});
		},
		doDeparture: function(){ // Quick Flight Search Autocomplete - Departures
			var ac_departures = new Bloodhound({
				datumTokenizer: function(datum) { return Bloodhound.tokenizers.whitespace(datum.value); },
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				//prefetch: '../data/films/post_1960.json',
				remote: {
					url: site.ac_json_departure,
					filter: function(list){
						return $.map(list.autoCompleteResults, function(item){ return { val1: item.flightNo, val2: item.airportCode, val3: item.city, val5: item.airlineDesc, val6: item.scheduledTime }; });
					}
				}
			});
			ac_departures.initialize();
			//
			$('#sDepartures .typeahead').typeahead({ highlight:true , minLength:2 }, {
				name: 'ac_departures',
				displayKey: 'val1',
				templates: {
					//header: '<h5>Heading</h5>',
					suggestion: Handlebars.compile('<p>{{val1}} - {{val3}} ({{val2}}) - {{val6}}</p>')
				},
				source: ac_departures.ttAdapter()
			}).on('typeahead:selected', function(event, data){
				var currentHour = data.val6.split(":")[0];
				$("#sDepartures").find("[name=schtime]").val(currentHour);
			});
		},
		doGlobalSearch: function(){
			var ac_arrivals = new Bloodhound({
				datumTokenizer: function(datum) { return Bloodhound.tokenizers.whitespace(datum.value); },
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				limit:10,
				//prefetch: '../data/films/post_1960.json',
				remote: {
					url: site.ac_json_search,
					filter: function(list){
						return $.map(list, function(item){ return { val1: item.suggestion, val2: item.type }; });
					}
				}
			});
			ac_arrivals.initialize();
			//
			var minlen = 3;
			$('html').hasClass("en_US") ? minlen = 3 : minlen = 2;
			$('#site-search .typeahead').typeahead({ highlight:true, minLength:minlen }, {
				name: 'ac_search',
				displayKey: 'val1',
				templates: {
					//header: '<h5>Heading</h5>',
					suggestion: Handlebars.compile('<p>{{val1}}</p>')
				},
				source: ac_arrivals.ttAdapter()
			});

			/*$('#site-search #txtSearch').keypress(function(event) {
				if (event.which == 13) {
					event.preventDefault();
					$('#site-search .frm button.btn').click();
				}
			});
			$('#site-search button.btn').on('click', function(){
				var orgaction = $('#frmSearch').attr('action');
				var term = $('#site-search #txtSearch').val() || '',
					action = orgaction.replace("search.html", 'search.'+ term + '.html');
				if (term !== ''){
					$('#frmSearch').attr('action', action).submit();
				}
			});*/
			$('#site-search #frmSearch').on("submit",function(){
				var term = $('#site-search #txtSearch').val() || '';
				term = term.replace(/\//g, "__SLASH__").replace(/\./g, "__DOT__");
				window.location = $(this).attr("action").replace("search.html", 'search.'+ term + '.html');
				return false;
			});
		},
		submitOnSelected: function(){
			$('input.typeahead').bind('typeahead:selected', function(obj, datum, name){
				$(this).parents('.frm-filter').find('button.btn').trigger('click');
				$(this).parents('#site-search').find('button.btn').trigger('click');
				$(this).parents('.search-form').find('button.btn').trigger('click');
			});
		}
	},
	quickFlightSearch: {
		init: function(){
			'use strict';

			site.quickFlightSearch.serializeArrivals();
			site.quickFlightSearch.serializeDepartures();
		},
		/*isSearchEvent: function isSearchEvent(evt) {
			return ($(evt.target).is($('.fa-search')) || evt.which == 13);
		},*/
		serializeArrivals: function(){
			var scope = $('div[role="quick-search"] #sArrivals');
			scope.find('.frmArrivals').on("submit",function(){
				var txtVal = $("#txtSearchArrivals").val();
				$("#txtSearchArrivals").val(txtVal.trim());
				var form = $(this);
				window.location = form.attr("action")+"?"+scope.find("input,select").serialize();
				return false;
			});

			/*$('div[role="quick-search"] #sArrivals').on('click', function(evt){
				if (site.quickFlightSearch.isSearchEvent(evt)
							&& $("#txtSearchArrivals").val() !== '') {
					var queries_arr = $(this).find('form').serialize();
					$(this).find('form').submit();
				}
				else if ($(evt.target).is($('.btns button'))) {
					$(this).find('input[name="term"]').val('');
					var queries_arr = $(this).find('form').serialize();
					$(this).find('form').submit();
				}
			});*/
		},
		serializeDepartures: function(){
			var scope = $('div[role="quick-search"] #sDepartures');
			scope.find('.frmDepartures').on("submit",function(){
				var txtVal = $("#txtSearchDepartures").val();
				$("#txtSearchDepartures").val(txtVal.trim());
				var form = $(this);
				window.location = form.attr("action")+"?"+scope.find("input,select").serialize();
				return false;
			});

			/*$('div[role="quick-search"] #sDepartures').on('click', function(evt){
				if (site.quickFlightSearch.isSearchEvent(evt)
							&& $("#txtSearchDepartures").val() !== '') {
					var queries_dep = $(this).find('form').serialize();
					$(this).find('form').submit();
				}
				else if ($(evt.target).is($('.btns button'))) {
					$(this).find('input[name="term"]').val('');
					var queries_dep = $(this).find('form').serialize();
					$(this).find('form').submit();
				}
			});*/
		}
	},
	flightStatus: {
		init: function(){
			'use strict';

			var setTimeFilterToThePrevHour = function(now){
				var selectedtime = site.utils.get('time');
				var schtime = site.utils.get('schtime');
				var currentHour = '';
				if(schtime !== undefined && schtime !== '' ){
				  currentHour = schtime.split(":")[0];
				}
				//Removed all check based on defect feedback
				if(selectedtime !== undefined && selectedtime !== ''){
				  currentHour = selectedtime;
				}

				if((!currentHour || currentHour === '') && (site.utils.get('term') === undefined || site.utils.get('term') === '' )) {
					//currentHour = now.split(" ")[1].split(":")[0];
					currentHour = ''
				}
				
				if(currentHour === "all") {
					currentHour = '';
				}
				$('#passengerOptFilterByTime').val(currentHour).trigger("change");
				$.each(site.freighterTimeOptionsMap,function(key, value){
					if (value.indexOf(currentHour) != -1) {
						currentHour = key;
					}
				});
				$('#freighterOptFilterByTime').val(currentHour).trigger("change");

				if (site.flightStatus.isFreighter()){
					$('#freighterOptFilterByTime').trigger("change");
				}
				else {
					$('#passengerOptFilterByTime').trigger("change");
				}
				$("#tabArrDep select").trigger("chosen:updated");
			}
			site.thirdParty.loadSGTTime(setTimeFilterToThePrevHour);

			// filterByFlight:
			$('#filterByFlight').on('keyup', function(){
				site.flightStatus.resetData();
			});

			site.flightStatus.setDefaults();
			site.flightStatus.reloadJSON();

		},
		setDefaults: function(){
			// matches search terms
			if (site.utils.get('term') !== undefined && site.utils.get('term') !== ''){
				$('#filterByFlight').val(site.utils.get('term')).trigger('change');
			}

			// Arrivals/Depatures
			if (site.utils.get('inout') === 'departures'){
				$('#tabArrDep ul[role="tablist"] li').removeClass('active');
				$('#tabArrDep ul[role="tablist"] li').eq(1).addClass('active');
				$('#tabArrDep .tab-pane').removeClass('active');
				$('#tabArrDep .tab-pane').eq(1).addClass('active');
				$('#txtFilterByAir').val('departures');
			}
			else {
				$('#tabArrDep ul[role="tablist"] li').removeClass('active');
				$('#tabArrDep ul[role="tablist"] li').eq(0).addClass('active');
				$('#tabArrDep .tab-pane').removeClass('active');
				$('#tabArrDep .tab-pane').eq(0).addClass('active');
				$('#txtFilterByAir').val('arrivals');
			}
			// Passengers/Freighters
			if (site.utils.get('air') === 'freighters'){
				$('#chkFilterByAirType').prop('checked', true);
				$('#txtFilterByAirType').val('freighters');
				$('#iconImagePath').val(cag.properties.freighter_icon_image_path);
				$("#passengerOptFilterByTimeDiv").hide();
				$("#freighterOptFilterByTimeDiv").show();
			}
			else {
				$('#chkFilterByAirType').prop('checked', false);
				$('#txtFilterByAirType').val('flights');
				$('#iconImagePath').val(cag.properties.flight_icon_image_path);
				$("#freighterOptFilterByTimeDiv").hide();
				$("#passengerOptFilterByTimeDiv").show();
			}

			// matches time
			if (site.utils.get('time') !== undefined &&  site.utils.get('time') !== ''){
				if (site.flightStatus.isFreighter()){
					var freighterTime = "";
					$.each(site.freighterTimeOptionsMap,function(key, value){
						if (value.indexOf(site.utils.get('time')) != -1) {
							freighterTime = key;
						}
					});
					$('#freighterOptFilterByTime option').each(function(idx, val){
						if ($(val).val() === freighterTime){
							$('#freighterOptFilterByTime option').eq(idx).prop('selected', true);
							$('#txtFilterByTime').val("("+ site.freighterTimeOptionsMap[freighterTime].join("|")+")");
						}
					});
				}
				else {
					$('#passengerOptFilterByTime option').each(function(idx, val){
						if ($(val).val() === site.utils.get('time')){
							$('#passengerOptFilterByTime option').eq(idx).prop('selected', true);
							$('#txtFilterByTime').val($(val).val())//.trigger('change');
						}
					});
				}
			}
			// matches schtime for flight widget search
			if (site.utils.get('schtime') !== undefined && site.utils.get('schtime') !== ''){
				if (site.flightStatus.isFreighter()){
					var freighterTime = "";
					$.each(site.freighterTimeOptionsMap,function(key, value){
						if (value.indexOf(site.utils.get('schtime')) != -1){
							freighterTime = key;
						}
					});
					$('#freighterOptFilterByTime option').each(function(idx, val){
						if ($(val).val() === freighterTime){
							$('#freighterOptFilterByTime option').eq(idx).prop('selected', true);
							$('#txtFilterByTime').val("("+ site.freighterTimeOptionsMap[freighterTime].join("|")+")");
						}
					});
				}
				else {
					$('#passengerOptFilterByTime option').each(function(idx, val){
						if ($(val).val() === site.utils.get('schtime')){
							$('#passengerOptFilterByTime option').eq(idx).prop('selected', true);
							$('#txtFilterByTime').val($(val).val())//.trigger('change');
						}
					});
				}
			}

			// FilterByDate: yesterday/today/tomorrow
			if (site.utils.get('date') === 'yesterday'){
				$('#optFilterByDate option').eq(0).prop('selected', true);
				$('#txtFilterByDate').val('yesterday');
			}
			else if (site.utils.get('date') === 'tomorrow'){
				$('#optFilterByDate option').eq(2).prop('selected', true);
				$('#txtFilterByDate').val('tomorrow');
			}
			else {
				$('#optFilterByDate option').eq(1).prop('selected', true);
				$('#txtFilterByDate').val('today');
			}

			// triggers reloading if queries are entered
			if (site.utils.get('inout') !== undefined && site.utils.get('inout') !== '') $('#txtFilterByAir').trigger('change');
			else if (site.utils.get('air') !== undefined && site.utils.get('air') !== '') $('#txtFilterByAirType').trigger('change');

			$("#tabArrDep select").trigger("chosen:updated");
		},
		reloadJSON: function(){
			// Arrivals/Depatures
			$('#tabArrDep ul[role="tablist"] a').on('click', function(evt){
				evt.preventDefault();
				$('#tabArrDep .tbl-flight').hide();
				$('#tabArrDep .counts-btm').hide();
				$('#tabArrDep .load-more').hide();
				$('#tabArrDep .loading').show();
				$(this).tab('show');
				site.flightStatus.resetData();
				$('#txtFilterByAir').val($(this).data('air')).trigger('change');
			});
			// Passengers/Freighters
			$('#chkFilterByAirType').on('change', function(){
				$('#tabArrDep .tbl-flight').hide();
				$('#tabArrDep .counts-btm').hide();
				$('#tabArrDep .load-more').hide();
				$('#tabArrDep .loading').show();
				if ($(this).prop('checked') == true) {
					$('#txtFilterByAirType').val('freighters');
					$('#optFilterByTerminal')[0].selectedIndex = 0;
					// Update time
					if ($('#freighterOptFilterByTime').val() != null && $('#freighterOptFilterByTime').val() != ''){
						$('#txtFilterByTime').val("("+site.freighterTimeOptionsMap[$('#freighterOptFilterByTime').val()].join("|")+")").trigger('change');
					}
					else {
						$('#txtFilterByTime').val($('#freighterOptFilterByTime').val()).trigger('change');
					}
					$('#optFilterByTerminal').trigger('change');
					$(this).parents('.row').next('.row').find('.col-lg-4:last').hide();
					//$('#optFilterByTerminal_chosen').hide();
					$('#iconImagePath').val(cag.properties.freighter_icon_image_path);
					$("#passengerOptFilterByTimeDiv").hide();
					$("#freighterOptFilterByTimeDiv").show();
				}
				else {
					$('#txtFilterByAirType').val('flights');
					$(this).parents('.row').next('.row').find('.col-lg-4:last').show();
					//$('#optFilterByTerminal_chosen').show();
					$('#iconImagePath').val(cag.properties.flight_icon_image_path);
					//Update time
					$('#txtFilterByTime').val($('#passengerOptFilterByTime').val()).trigger('change');
					$("#freighterOptFilterByTimeDiv").hide();
					$("#passengerOptFilterByTimeDiv").show();
				}
				$('#iconImagePath').trigger('change');
				site.flightStatus.resetData();
				$('#txtFilterByAirType').trigger('change');
			});

			// FilterByDate: yesterday/today/tomorrow
			$('#optFilterByDate').on('change', function(){
				$('#tabArrDep .tbl-flight').hide();
				$('#tabArrDep .counts-btm').hide();
				$('#tabArrDep .load-more').hide();
				$('#tabArrDep .loading').show();
				site.flightStatus.resetData();
				$('#txtFilterByDate').val($(this).val()).trigger('change');
			});
			// FilterByTime
			$('#passengerOptFilterByTime').on('change', function(){
			  site.flightStatus.resetData();
				$('#txtFilterByTime').val($(this).val()).trigger('change');
			});
			$('#freighterOptFilterByTime').on('change', function(){
				site.flightStatus.resetData();
				if ($(this).val() != null && $(this).val() !=''){
					$('#txtFilterByTime').val("("+site.freighterTimeOptionsMap[$(this).val()].join("|")+")").trigger('change');
				}
				else {
					$('#txtFilterByTime').val($(this).val()).trigger('change');
				}
			});
			// FilterByTerminal
			$('#optFilterByTerminal').on('change', function(){
				site.flightStatus.resetData();
				$('#txtFilterByTerminal').val($(this).val()).trigger('change');
			});

			// Activate the no-results container
			$('.no-results').css('display', 'block');

			// Add this attr to the data table
			$('.tbl-flight').attr('ng-show', 'tableData.length');
			$("#tabArrDep select").trigger("chosen:updated");

		},
		resetData: function(){
			$('#pagesShown').val(1).trigger('change');
			$('#currentPageSize').val(50).trigger('change');
			$("#tabArrDep select").trigger("chosen:updated");
		},
		isFreighter: function(){
			if ($('#chkFilterByAirType').prop('checked') === true ){
				return true;
			}
			return false;
		}
	},
	attractionFilter: {
		json: '',
		count: 0,
		filter: 0,

		init: function(){
			"use strict";
			$('div.default').hide();
			$.cookie.json = true;
			site.attractionFilter.count = $('.frm-travel-type .desktop .col-lg-2 ul').length;

			var cookies = site.attractionFilter.getCookies(),
				matches = site.attractionFilter.validateURL();

			//$('div[role="extras"]').hide();
			//if (cookies.length > 0){
			//	$('div[role="extras"]').show();
			//	$('div.default').hide();
			//}
			$('div[ng-app=cagApp]').show();
			// scans through cookies & validates URL to set default values for filters
			for (var i = 0; i < site.attractionFilter.count; i++){
				// reads from stored cookies
				if (cookies[i] !== undefined){
					$.each(cookies[i], function(idx, val){
						$('.frm-travel-type .desktop input').each(function(){
							if ($(this).val() == val) { $(this).prop('checked', true); }
						});
					});
					/* responsive */
					$('.frm-travel-type .mobile select').eq(i).val($(cookies[i]).first());
				}
				// validates URL
				if (matches[i] !== undefined && matches[i].length > 0){
					$('.frm-travel-type .desktop ul').eq(i).find('input').prop('checked', false);
					$.each(matches[i], function(idx, val){
						$('.frm-travel-type .desktop input').each(function(){
							if ($(this).val().toLowerCase() == val) $(this).prop('checked', true);
						});
					});
					/* responsive */
				}
			};

			//
			site.attractionFilter.filter = $('.frm-travel-type .desktop .col-lg-2 ul').find('input:checked').length;
			site.attractionFilter.setCookies();
			site.attractionFilter.convertToJSON();
			// triggers AngularJS to reload JSON
			site.attractionFilter.reloadJSON();

			// binds reset event to reset button
			$('.frm-travel-type .btn-reset').on('click', function(){ site.attractionFilter.reset(); return false; });
			//
			$('.frm-travel-type .desktop .col-lg-2 ul').each(function(idx, val){
				// listens to click event for all groups
				$(val).find('input').on('click', function(evt){
					//
					if (cookies.length < 1){
						$('div[role="extras"]').show();
						$('div.default').hide();
					}
					//
					site.attractionFilter.filter = $('.frm-travel-type .desktop .col-lg-2 ul').find('input:checked').length;
					site.attractionFilter.setCookies();
					site.attractionFilter.convertToJSON();
					// triggers AngularJS to reload JSON
					site.attractionFilter.reloadJSON();
				});
			});
			//
			$('.frm-travel-type .mobile .col-lg-2 select').each(function(idx, val){
				$(val).on('change', function(evt){
					if ($(val).val() !== ''){
						if (idx == 1 || idx == 3) {
							$('.frm-travel-type .desktop .col-lg-2 ul').eq(idx).find('input:checked').prop('checked', false);
							$('.frm-travel-type .desktop .col-lg-2 ul').eq(idx).find('input').each(function(){
								if ($(this).val() == $(val).val()) { $(this).click(); }
							});
						}
						else {
							$('.frm-travel-type .desktop .col-lg-2 ul').eq(idx).find('input').each(function(){
								if ($(this).val() == $(val).val()) { $(this).prop('checked', true).click(); }
							});
						}
					}
				});
			});
		},
		getCookies: function(){ // checks for stored cookies, then fetches values into filters and triggers AngularJS to reload JSON
			"use strict";

			var cookies = [], hasCookies = false;

			for (var i = 0; i < site.attractionFilter.count && $.cookie('hasFilters'); i++) {
				if ($.cookie('attractionFilter' + i) !== undefined && $.cookie('attractionFilter' + i) !== ''){
					hasCookies = true;
					cookies[i] = ($.cookie('attractionFilter' + i) || '').split('+');
				}
			};
			hasCookies ? $.cookie('hasFilters', true) : $.removeCookie('hasFilters');

			return cookies;
		},
		setCookies: function(){
			'use strict';

			var group = [], tmp = [];

			$('.frm-travel-type .desktop .col-lg-2 ul').each(function(idx, val){
				// resets JSON path
				site.attractionFilter.json = '', group[idx] = '';
				// checks if any filter is selected
				(site.attractionFilter.filter > 0) ? $.cookie('hasFilters', true) : $.removeCookie('hasFilters');
				// stores value from each selected filter temporarily
				$(val).find('input:checked').each(function(i, v){ tmp[i] = $(v).val(); });
				// concatenates values of all selected checkboxes per group, appends '+'
				for (var x = 0; x < $(val).find('input:checked').length && tmp[x] !== ''; x++){ group[idx] += tmp[x] + '+'; }
				// updates hidden input for each group
				$('input#txtAttractionFilter' + idx).val(group[idx].substr(0, group[idx].length-1));
				// saves to cookie
				if (group[idx] !== '') $.cookie('attractionFilter' + idx, group[idx].substr(0, group[idx].length-1))
				else $.removeCookie('attractionFilter' + idx);
			});
		},
		validateURL: function(){
			"use strict";

			var filters = [], matches = [],
				hashes = [	(site.utils.get('type') || '').toLowerCase().split('+'),
							(site.utils.get('terminal') || '').toLowerCase().split('+'),
							(site.utils.get('status') || '').toLowerCase().split('+'),
							(site.utils.get('time') || '').toLowerCase().split('+')];

			// reads values from all filters and stores into groups
			$.each($('.frm-travel-type .desktop .col-lg-2 ul'), function(idx, val){
				filters[idx] = [];
				$.each($(val).find('input'), function(i, v){ filters[idx].push($(v).val().toLowerCase()); });
			});
			// compares values between queries and filters set
			for (var i = 0; i < site.attractionFilter.count; i++){ matches[i] = site.utils.compare(hashes[i], filters[i]); }

			// returns all matches
			return matches;
		},
		convertToJSON: function(){ // combines all filters into one, then saves them to JSON path
			'use strict';

			for (var i = 0; i < site.attractionFilter.count; i++){
				if ($('input#txtAttractionFilter' + i).val() !== '') {
					site.attractionFilter.json += $('input#txtAttractionFilter' + i).val() + '.';
				}
			}
			site.attractionFilter.json = site.attractionFilter.json.substr(0, site.attractionFilter.json.length-1);
		},
		reloadJSON: function(){ // updates hidden input for the final filter string, then triggers change event to AngularJS model
			"use strict";
			if (site.attractionFilter.json === undefined || site.attractionFilter.json === '')
				site.attractionFilter.json = '';
			$('input#txtAttractionFilter').val(site.attractionFilter.json).trigger('change');
		},
		reset: function(){ // resets filter
			"use strict";

			for (var i = 0; i < site.attractionFilter.count; i++){ $.removeCookie('attractionFilter' + i); };
			$.removeCookie('hasFilters'); site.attractionFilter.json = '';
			$('.frm-travel-type .desktop .col-lg-2 input:checked').prop('checked', false);
			$('.frm-travel-type .mobile .col-lg-2 select').each(function(){
				$(this).find('option:first').attr('selected', 'selected');
			});
			$('input[id^=txtAttractionFilter]').val('');
			$('input#txtAttractionFilter').val('').trigger('change');
			//$('div[role="extras"]').hide();
			//$('div.default').show();
			$('.cq-multi-selector').trigger('chosen:updated');
		}
	},
	holidayPlan: {
		init: function(){
			'use strict';

			$('.frm-holiday-plan a').each(function(idx, val){
				$(this).on('click', function(evt){
					$(val).closest('ul').find('.active').removeClass('active').find('.fa-check-circle').removeClass('fa-check-circle').addClass('fa-circle-o');
					$(val).addClass('active').find('.fa').removeClass('fa-circle-o').addClass('fa-check-circle');
					// hides alls
					for (var i = 0; i < $('.frm-holiday-plan a').length; i++)
						$('.container').find('.' + $('.frm-holiday-plan a').eq(i).attr('href').substr(1, $('.frm-holiday-plan a').eq(i).attr('href').length-1)).addClass('hidden');
					// shows current selected
					$('.container').find('.' + $(val).attr('href').substr(1, $(val).attr('href').length-1)).removeClass('hidden');
				});
			});
		}
	},
	mapInit: {
		init: function(){
			/*var scope = $("div.map-app"),
				js_array = ["map/js/plugins.js", "map/js/config.js","map/js/libs/require.js"];
			if ( scope.length == 0 ) return;

			scope.data("basehref", site.clientlibs + "map/" );
			if ( $('div.map-js-root').length == 0 ) {
				$("body").append('<div class="map-js-root"></div>');
			}
			if (js_array.length > 0) {
				for( i=0; i<js_array.length; i++ ){
					var script = $("<script type='text/javascript'></script>").prop( "src" , site.clientlibs + js_array[i] );
					if (js_array[i] == "map/js/libs/require.js") { script.attr("data-main","app"); }
					script.appendTo( $('div.map-js-root') );
				}
			}*/
		}
	},
	aboutUs: {
		init: function(){
			'use strict';
		},
		checkBlockAnchor: function(ele){
			$(ele).find("a").on("click", function(){
				var blockId = $.attr(this, 'href').substr(1);
				$('html, body').animate({
					scrollTop: $('[id="' + blockId + '"]').offset().top
				}, 1000, function() {
					window.location.hash = blockId;
				});
				return false;
			});
		},
		loadMoreAward: function(){
			$(".load-more-btn a").on("click",function(){
				$(this).parent().hide().prev(".row").find(" > div").show();
				site.misc.equalHeight('#awards-accolades-2011 .thumbnail h3');
				return false;
			});
		},
		checkParamScrollToEle: {
			init: function(){
				'use strict';
				site.aboutUs.checkParamScrollToEle.beforeAction();
				site.aboutUs.checkParamScrollToEle.checkVideoHash();
				site.aboutUs.checkParamScrollToEle.checkTimelineHash();
			},
			getParameterByName: function(name){
				name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
					results = regex.exec(location.search);
				return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
			},
			beforeAction: function(){
				site.aboutUs.hideLoadingIcon.init();
			},
			checkTimelineHash: function(){
				var timelineHashVal = site.aboutUs.checkParamScrollToEle.getParameterByName('year');
				if (timelineHashVal != "") {
					var timeHash = "year=" + timelineHashVal;
					$("[data-slide-hash='" + timeHash + "']").trigger("click");
					var timeHashEle = $("[data-slide-hash='" + timeHash + "']").offset();
					//console.log(ele.top);
					$('html,body').animate({
						scrollTop: timeHashEle.top
					}, 1000);
				}
			},
			checkVideoHash: function(){
				var videoTabVal = site.aboutUs.checkParamScrollToEle.getParameterByName('videotab');
				var videoHashVal = site.aboutUs.checkParamScrollToEle.getParameterByName('video');
				site.aboutUs.hideLoadingIcon.init();
				if (videoHashVal != "" && videoTabVal === "") {
					var currentHash = "video=" + videoHashVal;
					var currentVideoTab = $("[data-hash='" + currentHash + "']").attr("data-video-tab");
					$("[data-anchor-tab='" + currentVideoTab + "']").trigger("click");
					$("[data-hash='" + currentHash + "']").trigger("click");
					var videoTabOffset = $("[data-anchor-tab='" + currentVideoTab + "']").offset();
					//console.log(ele.top);
					$('html,body').animate({
						//scrollTop: videoTabOffset.top
						scrollTop: $('#lights-camera-action .videos-wrapper').offset().top
					}, 1000);
				} else if (videoHashVal === "" && videoTabVal != "") {
					var currentVideoTab = "videotab=" + videoTabVal;
					$("[data-anchor-tab='" + currentVideoTab + "']").trigger("click");
					var videoTabOffset = $("[data-anchor-tab='" + currentVideoTab + "']").offset();
					$('html,body').animate({
						//scrollTop: videoTabOffset.top
						scrollTop: $('#lights-camera-action .videos-wrapper').offset().top
					}, 1000);
				} else if (videoHashVal != "" && videoTabVal != "") {
					var currentVideoTab = "videotab=" + videoTabVal;
					var currentHash = "video=" + videoHashVal;
					$("[data-anchor-tab='" + currentVideoTab + "']").trigger("click");
					$("[data-hash='" + currentHash + "']").trigger("click");
					var videoTabOffset = $("[data-anchor-tab='" + currentVideoTab + "']").offset();
					$('html,body').animate({
						//scrollTop: videoTabOffset.top
						scrollTop: $('#lights-camera-action .videos-wrapper').offset().top
					}, 1000);
				}
			}
		},
		hideLoadingIcon: {
			init: function(){
				'use strict';
				site.aboutUs.hideLoadingIcon.loadingElement(".videos-wrapper");
				site.aboutUs.hideLoadingIcon.loadingElement("#timeline-carousel");
			},
			loadingElement: function(ele){
				if($(ele).length > 0){
					$(ele).removeAttr("style").prev(".loading-icon").hide();
				}
			}
		},
		timelinesCarousel: {
			init: function(){
				'use strict';
				site.aboutUs.timelinesCarousel.crouselInit();
			},
			crouselInit: function(){
				$('#timeline-carousel').carousel({
					interval: false,
					wrap: false
				});
				$('#timeline-carousel .timeline-owl-carousel').each(function(index){
					site.aboutUs.timelinesCarousel.timelineOwlCarousel($(this));
				});
			},
			timelineOwlCarousel: function(ele){
				$(ele).owlCarousel({
					items:1,
					margin:0,
					nav:true,
					dots:true,
					loop:false,
					singleItem:true,
					autoHeight:true,
					onInitialized:owlStatus,
					onTranslated:owlStatus,
					onResized:owlStatus
				});
				function owlStatus(){
					var totalItem = $(ele).find(".owl-stage .owl-item").length;
					var navActive = $(ele).find(".owl-stage .owl-item.active").length;
					var currentSHow = $(ele).find(".owl-stage .owl-item.active:last").index() + 1;
					if(currentSHow == totalItem){
						$(ele).find(".owl-next").addClass("nav-disable");
					} else {
						$(ele).find(".owl-next").removeClass("nav-disable");
					}
					if(navActive == currentSHow){
						$(ele).find(".owl-prev").addClass("nav-disable");
					} else {
						$(ele).find(".owl-prev").removeClass("nav-disable");
					}
				}
			}
		},
		videoGalleries: {
			init: function(){
				'use strict';
				site.aboutUs.videoGalleries.videoGalleriesContainer();
				site.aboutUs.videoGalleries.afterAction();
			},
			afterAction: function(){
				site.aboutUs.hideLoadingIcon.init();
				$('.video-galleries .nav-tabs a[data-toggle="tab"]').on('show.bs.tab', function(e) {
					$(".video-galleries .tab-content > div").each(function(){
						if($(this).not('.avtive')){
							$(this).find(".item .currentvideo").trigger("click");
						}
					});
				});
			},
			videoGalleriesContainer: function(){
				if ($("#video-carousel-01 .owl-carousel").length > 0){
					$("#video-carousel-01 .owl-carousel").ytplaylist({
						addThumbs: true,
						thumbSize: 0, // init : 0, 1 , 2
						autoPlay: false,
						holderId: 'yt_main_01',
						afterLoad: function(){
							site.aboutUs.videoGalleries.videoCarouselSlide("#video-carousel-01 .owl-carousel", "#video-carousel-01 .showing");
						}
					});
				}
				if ($("#video-carousel-02 .owl-carousel").length > 0){
					$("#video-carousel-02 .owl-carousel").ytplaylist({
						addThumbs: true,
						thumbSize: 0, // init : 0, 1 , 2
						autoPlay: false,
						holderId: 'yt_main_02',
						afterLoad: function(){
							site.aboutUs.videoGalleries.videoCarouselSlide("#video-carousel-02 .owl-carousel", "#video-carousel-02 .showing");
						}
					});
				}
				if ($("#video-carousel-03 .owl-carousel").length > 0){
					$("#video-carousel-03 .owl-carousel").ytplaylist({
						addThumbs: true,
						thumbSize: 0, // init : 0, 1 , 2
						autoPlay: false,
						holderId: 'yt_main_03',
						afterLoad: function(){
							site.aboutUs.videoGalleries.videoCarouselSlide("#video-carousel-03 .owl-carousel", "#video-carousel-03 .showing");
						}
					});
				}
			},
			videoCarouselSlide: function(ele, eleStatus){
				$(ele).owlCarousel({
					items:5,
					margin:0,
					nav:true,
					dots:true,
					loop:false,
					onInitialized:owlStatus,
					onTranslated:owlStatus,
					onResized:owlStatus,
					responsive:{
						0:{
							items:2
						},
						768:{
							items:4
						},
						1140:{
							items:5
						}
					}
				});
				function owlStatus(){
					var totalItem = $(ele).find(".owl-stage .owl-item").length;
					var navActive = $(ele).find(".owl-stage .owl-item.active").length;
					var currentSHow = $(ele).find(".owl-stage .owl-item.active:last").index() + 1;
					$(eleStatus).find(".cr").text(currentSHow);
					$(eleStatus).find(".tt").text(totalItem);
					if(currentSHow == totalItem){
						$(ele).find(".owl-next").addClass("nav-disable");
					} else {
						$(ele).find(".owl-next").removeClass("nav-disable");
					}
					if(navActive == currentSHow){
						$(ele).find(".owl-prev").addClass("nav-disable");
					} else {
						$(ele).find(".owl-prev").removeClass("nav-disable");
					}
				}
			}
		},
		pushStateFormEle: {
			init: function(){
				'use strict';
				site.aboutUs.pushStateFormEle.putUrl();
			},
			putUrl: function(){
				if($(".yt-video").length > 0){
					site.aboutUs.pushStateFormEle.getHashVal(".yt-video", "data-hash", "data-video-tab");
				}
				if($(".videos-wrapper .nav-tabs a").length > 0){
					site.aboutUs.pushStateFormEle.getHashVal(".videos-wrapper .nav-tabs a", "data-anchor-tab");
				}
				if($("#timeline-carousel .carousel-indicators > li").length > 0){
					site.aboutUs.pushStateFormEle.getHashVal("#timeline-carousel .carousel-indicators > li", "data-slide-hash");
				}
			},
			getHashVal: function(ele, attr_val, attr_tab){
				var $param;
				$(ele).on("click", function () {
					if (attr_tab != null) {
						var $param = "?" + $(this).attr(attr_tab) + "&" + $(this).attr(attr_val);
					} else {
						var $param = "?" + $(this).attr(attr_val);
					}
					history.pushState(null, null, $param);
				});
			}
		}
	},
	cq_tab_table: {
		init: function(){
			var tab  = site.utils.get('tab');
			if (typeof tab !== "undefined" && tab !=='' ){
				var scope = $(".cq-tab-table"),
				tabList =  scope.find("ul[role='tablist']"),tabElement = tabList.find("li a");
				tabElement.each(function(idx, val){
					if ($(val).attr('href') == "#"+tab) {
						var tempTable = $(val).parents(".cq-tab-table");
						tempTable.find("ul[role='tablist']").find("li").removeClass("active");
						tempTable.find(".tab-content").find(".tab-pane").removeClass("active");
						$(val).parent().addClass("active")  ;
						tempTable.find("#"+tab).addClass("active");
					}
				});
			}
			else return;
		}
	},
	cq_airlinetable: {
		init:function(){
			var scope = $("#tbl-passenger, #tbl-cargo"),
			tabs = scope.closest(".tab-pane");

			if (scope.length==0) return;

			// for each tab, initialize the handler for filter
			$.each(tabs,function(i,tab_pane){
				var tab = $(tab_pane),
					counter_panel = tab.find(".counts-top,.counts-btm"),
					airline = tab.find(".airline-item"),
					load_more = tab.find(".load-more"),
					displayed = 0,
					total = 0,
					shown =  tab.data("default-shown") || 30;

				load_more.find("span").text(shown);

				load_more.on("click",function(){
					if ( shown < airline.length ) shown += tab.data("default-shown");
					if ( tab.data("filter") != "" ) {
						total = airline.siblings( tab.data("filter") ).length;
						displayed = airline.siblings( tab.data("filter") ).slice( 0, shown ).removeClass("hidden").length;
					}
					else {
						total = airline.length;
						displayed = airline.slice( 0, shown ).removeClass("hidden").length;
					}
					counter_panel.find(".displayed").text(displayed).end().find(".total").text(total);
					if (displayed==total) load_more.addClass("hidden"); else load_more.removeClass("hidden");
					return false;
				});

				tab.find(".filter-AZ a").on("click",function(){
					var filterBy = $(this);

					tab.find(".filter-AZ a").removeClass("active");
					filterBy.addClass("active");

					// reset back number items shown
					shown =  tab.data("default-shown");
					tab.data("filter", filterBy.prop("rel") ? "."+filterBy.prop("rel") : "" );
					if ( tab.data("filter")=="" ) {
						total = airline.length;
						displayed = airline.addClass("hidden").removeClass("even odd")
										.filter(":even").addClass("odd").end()
										.filter(":odd").addClass("even").end()
										.slice( shown ).addClass("hidden").end()
										.slice( 0, shown ).removeClass("hidden").length;
					} else {
						total = airline.siblings( tab.data("filter") ).length;
						displayed = airline.addClass("hidden").removeClass("even odd")
										.siblings( tab.data("filter") )
										.filter(":even").addClass("odd").end()
										.filter(":odd").addClass("even").end()
										.slice( shown ).addClass("hidden").end()
										.slice( 0, shown ).removeClass("hidden").length;
					}
					counter_panel.find(".displayed").text(displayed).end().find(".total").text(total);
					if (displayed==total) load_more.addClass("hidden"); else load_more.removeClass("hidden");
					return false;
				});

				// popover
				tab.find(".popover-info-trigger").on("mouseenter",function(){ if ( typeof $(this).attr("aria-describedby") == 'undefined') $(this).popover('show'); })
				tab.find(".popover-info-trigger").popover({
					trigger: 'manual click',
					placement: 'bottom',
					template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
					html: true,
					container: 'body',
					content: function(){
						return $('#' + $(this).attr("rel") ).html();
					}
				});
				// dismiss popover upon clicking outside, or mouse leave popover content
				$('body').on('click', function(e) {
					if (typeof $(e.target).data('original-title') == 'undefined' && !$(e.target).parents().is('.popover.in')) {
						$('[data-original-title]').popover('hide');
					}
				})
				.on("mouseleave",".popover",function(){
					tab.find(".popover-info-trigger[aria-describedby=" + $(this).attr("id") + "]").popover("hide");
				});

				// more airline-information
				tab.find(".airline-more-info-cta").on("click",function(){
					var table = $(this).closest("table"),
						icon = $(this).find("i");
					if ( !table.hasClass("expanded") ) {
						icon.removeClass("icon-cag-plus-button").addClass("icon-cag-minus-button");
						table.addClass("expanded").find(".airline-more-info").show();
					} else {
						icon.removeClass("icon-cag-minus-button").addClass("icon-cag-plus-button");
						table.removeClass("expanded").find(".airline-more-info").hide();
					}
					return false;
				});
				tab.find(".filter-AZ a").first().click();
			});
		}
	},
	tpl_services_facilities: {
		scope : '',
		section_terminal:'',
		dropdown:'',

		init: function(){
			site.tpl_services_facilities.scope = $(".services-facilities-template");
			site.tpl_services_facilities.section_terminal = site.tpl_services_facilities.scope.find(".section-terminal");
			site.tpl_services_facilities.dropdown =  site.tpl_services_facilities.scope.find(".frm-filter").find("select");
			var button = site.tpl_services_facilities.scope.find("button[type=submit]");
			if (site.tpl_services_facilities.scope.length==0) return;
			button.on("click",function(){
				var terminal = $(this).data("terminal");
				if (site.tpl_services_facilities.dropdown.length >= 1) site.tpl_services_facilities.dropdown.eq(1).val( terminal ).change();
				$(".frm.frm-filter .row select").trigger("chosen:updated");
			});
		},
		isServiceFacility: function(selector){
			if (selector === "services_facilities_cookie_name"){
				return true;
			}
			return false;
		},
		update:function(filterJson){
			$('input#listFilter').val(site.listPagesFilter.json).trigger('change');
			if(filterJson =='' || filterJson =='..'){
				$('div[ng-app=cagApp]').hide();
				site.tpl_services_facilities.scope.find("button[type='submit']").show();
				site.tpl_services_facilities.section_terminal.show();
			}
			else {
				site.tpl_services_facilities.section_terminal.hide();
				var terminal = site.tpl_services_facilities.dropdown.eq(1).val();
				if (terminal !=null && terminal != ''){
					var cls = 'sf_container_'+terminal;
					var terminalContainer = site.tpl_services_facilities.scope.find('#'+cls);
					site.tpl_services_facilities.scope.find("button[data-terminal='"+terminal+"']").hide();
					//terminalContainer.show();
				}
				$('div[ng-app=cagApp]').show();
			}
		}
	},
	tpl_search: {
		init:function(){
			site.tpl_search.autocomplete();
			site.tpl_search.extra_information();
		},
		autocomplete:function(){
			var scope = $(".search-page"),
				search_input = scope.find("input[name=s]"),
				typeahead_options = {
					name: 'search_data',
					displayKey: 'suggestion'
				};
			if ( scope.length == 0 || search_input.length == 0 ) return;


			if (typeof Bloodhound != 'undefined'){
				var search_data = new Bloodhound({
					datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
					queryTokenizer: Bloodhound.tokenizers.whitespace,
					limit:10,
					remote: site.tpl_search_autocomplete_datasource+'%QUERY'
				});
				search_data.initialize();
				typeahead_options.source = search_data.ttAdapter();
			} else {
				if ( site.debug ) console.log("ERR: Bloodhound is not defined");
			}

			if (typeof $.fn.typeahead != 'undefined'){
				search_input.typeahead( null , typeahead_options );
				search_input
					.on('typeahead:selected', function(inputObj,searchObj){
						search_input.closest("form").submit();
					});
			} else {
				if ( site.debug ) console.log("ERR: typeahead is not defined");
			}

			search_input.closest("form").on("submit",function(e){
				var search_query_url = scope.data("search-query-url") ;
				if ( $('html').hasClass('en_US') && search_input.val().length >= 3  ) {
					var search_url = search_query_url.replace( "{QUERY}", search_input.val().trim().replace(/\//g, "__SLASH__").replace(/\./g, "__DOT__").replace(/^data$/i, "__DATA__") );
					window.location = search_url;
				}
				else if ( $('html').hasClass('zh_CN') && search_input.val().length >= 2  ) {
					var search_url = search_query_url.replace( "{QUERY}", search_input.val().trim().replace(/\//g, "__SLASH__").replace(/\./g, "__DOT__").replace(/^data$/i, "__DATA__") );
					window.location = search_url;
				}
				e.preventDefault();
			});
		},
		extra_information:function(){
			var scope = $(".search-page"),
				search_input = scope.find("input[name=s]"),
				extra_information = scope.find(".extra-information"),
				xsell_template = scope.find(".xsell_template"),
				xsell_item_template = scope.find(".xsell_item_template"),
				exact_flight_arrival_template = scope.find(".exact_flight_arrival_template"),
				exact_flight_departure_template = scope.find(".exact_flight_departure_template"),
				suggest_flight_template = scope.find(".suggest_flight_template"),
				suggest_flight_arrival_template = scope.find(".suggest_flight_arrival_template"),
				suggest_flight_departure_template = scope.find(".suggest_flight_departure_template"),
				_lang = $('html').attr('lang'),
				updateSearchPagination = function updateSearchPagination() {
					var searchControllerScope = angular.element($("#ng-app")[0]).scope();
					if(searchControllerScope.displayOfStarting !== 1) {
						searchControllerScope.displayOfStarting = searchControllerScope.displayOfStarting + 1;
					}
					searchControllerScope.displayOfEnding = searchControllerScope.displayOfEnding + 1;
					searchControllerScope.totalCount = searchControllerScope.totalCount + 1;
				};

			_lang = (_lang && _lang.length > 0) ? _lang : "en_US";

			if ( scope.length == 0 || search_input.length == 0 || search_input.val() == "" || extra_information.length == 0 ) return;
			window.flightSearchInProgress = true;
			window.flightSearchCount = 0;
			$('#ng-app .loading').show();
			$("#cqsearch_noresults_section").hide();
			$('html, body').removeClass('page-search-noresults');
			$.ajax({
				type: "GET",
				dataType: "json",
				url: site.tpl_search_flight_datasource + search_input.val() + "&lang="+ _lang
			})
			.done(function( data ) {
				window.flightSearchInProgress = false;
				if(!window.cqSearchInProgress) {
					$('#ng-app .loading').hide();
					if((window.totalSearchResults === 0) && ((data.success != true) 
						 || ((data.flightArrivals.length === 0) && (data.flightDepartures.length === 0))
					  )) {
						$("#searchresults").hide();
						$("#cqsearch_noresults_section").show();
						$('html, body').addClass('page-search-noresults');
					}
				}
				if ( data.success == true ) {
					if ( data.exactMatch == true ){
						var template = xsell_template,
							xsell = template.find(".xsell"),
							xsell_url = "";

						if ( data.flightArrivals.length > 0 ) {
							window.flightSearchCount = data.flightArrivals.length;
							var record = data.flightArrivals[0];
							xsell.eq(0).append(
								exact_flight_arrival_template.html()
								.replace(/\{DATE\}/g, site.utils.formatDate( record.scheduledDatetime ) )
								.replace(/\{FLIGHTNO\}/g, record.flightNo )
								.replace(/\{FLIGHTIMG\}/g, '<img alt="'+record.airlineDesc+'" src="'+cag.properties.flight_icon_image_path+record.airlineCode+'.gif">' )
								.replace(/\{TIME\}/g, record.scheduledTime)
								.replace(/\{FROM\}/g, record.from)
								.replace(/\{TERMINAL\}/g, record.terminal)
								.replace(/\{BELT\}/g, record.belt)
								.replace(/\{STATUS\}/g, ( record.status ? record.status : "" ) )
								.replace(/\{STATUS_CLASS\}/g,(record.statusCode ? "fids-"+record.statusCode : "") )
							);
							xsell_url = site.tpl_search_crosssell_datasource.replace("{QUERY}", "ta" + record.terminal.trim() );
						}
						if ( data.flightDepartures.length > 0 ) {
							window.flightSearchCount = data.flightDepartures.length;
							var record = data.flightDepartures[0];
							xsell.eq(0).append(
								exact_flight_departure_template.html()
								.replace(/\{DATE\}/g, site.utils.formatDate( record.scheduledDatetime ) )
								.replace(/\{FLIGHTNO\}/g, record.flightNo )
								.replace(/\{FLIGHTIMG\}/g, '<img alt="'+record.airlineDesc+'" src="'+cag.properties.flight_icon_image_path+record.airlineCode+'.gif">' )
								.replace(/\{TIME\}/g, record.scheduledTime)
								.replace(/\{TO\}/g, record.to)
								.replace(/\{TERMINAL\}/g, record.terminal)
								.replace(/\{ROW\}/g, record.checkInRow)
								.replace(/\{STATUS\}/g, ( record.status ? record.status : "" ) )
								.replace(/\{STATUS_CLASS\}/g,(record.statusCode ? "fids-"+record.statusCode : "") )
							);
							xsell_url = site.tpl_search_crosssell_datasource.replace("{QUERY}", "td" + record.terminal.trim() );
						}

						$.ajax({
							type: "GET",
							dataType: "json",
							url: xsell_url
						})
						.done(function( xsell_data ) {
							if ( xsell_data.promotionPages.length > 0 ){
								var random = site.utils.random( 0 , xsell_data.promotionPages.length );

								xsell.eq(1).append(
									xsell_item_template.html()
									.replace(/\{TITLE\}/g, xsell_data.promotionPages[random].title )
									.replace(/\{IMAGE\}/g, '<img class="illus" src="'+xsell_data.promotionPages[random].image+'">' )
									.replace(/\{DESCRIPTION\}/g, xsell_data.promotionPages[random].description ? xsell_data.promotionPages[random].description : "" )
									.replace(/\{LINK\}/g, '<a href="'+xsell_data.promotionPages[random].path+'">' ).replace(/\{\/LINK\}/g, '</a>' )
								);
							}
							if ( xsell_data.facilityPages.length > 0 ){
								var random = site.utils.random( 0, xsell_data.facilityPages.length );

								xsell.eq(2).append(
									xsell_item_template.html()
									.replace(/\{TITLE\}/g, xsell_data.facilityPages[random].title )
									.replace(/\{IMAGE\}/g, '<img class="illus" src="'+xsell_data.facilityPages[random].image+'">' )
									.replace(/\{DESCRIPTION\}/g, xsell_data.facilityPages[random].description ? xsell_data.facilityPages[random].description : "" )
									.replace(/\{LINK\}/g, '<a href="'+xsell_data.facilityPages[random].path+'">' ).replace(/\{\/LINK\}/g, '</a>' )
								);
							}

						}).always(function(){
							if ( data.flightArrivals.length > 0 || data.flightDepartures.length > 0 ) {
								template.appendTo( extra_information );
								extra_information.show();
								$("#cqsearch_noresults_section").hide();
								$('html, body').removeClass('page-search-noresults');
							} else {
								var showerrormessage = $("#showerrormessage");
								if(showerrormessage){
									$("#cqsearch_noresults_section").show();
									$('html, body').addClass('page-search-noresults');
								}
							}
						});
						site.ieFixes.search_result();
					} else {
						var template = suggest_flight_template,
							arriving = template.find(".suggest-arriving"),
							departing = template.find(".suggest-departing");

						if ( data.flightArrivals.length > 0 ) {
							window.flightSearchCount = data.flightArrivals.length;
							// Iterate arriving flights
							$.each( data.flightArrivals ,function( i , flight ){
								arriving.append(
									suggest_flight_arrival_template.html()
									.replace(/\{DATE\}/g,site.utils.formatDate( flight.scheduledDatetime ) )
									.replace(/\{FLIGHTNO\}/g,flight.flightNo)
									.replace(/\{TIME\}/g,flight.scheduledTime)
									.replace(/\{FROM\}/g,flight.from)
									.replace(/\{TERMINAL\}/g,flight.terminal)
									.replace(/\{BELT\}/g,flight.belt)
									.replace(/\{STATUS\}/g,( flight.status ? flight.status : "" ) )
									.replace(/\{STATUS_CLASS\}/g,(flight.statusCode ? "fids-"+flight.statusCode : "") )
								)
							});
						} else arriving.remove();

						if ( data.flightDepartures.length > 0 ) {
							window.flightSearchCount = data.flightDepartures.length;
							// Iterate departing flights
							$.each( data.flightDepartures ,function( i , flight ){
								departing.append(
									suggest_flight_departure_template.html()
									.replace(/\{DATE\}/g,site.utils.formatDate( flight.scheduledDatetime ) )
									.replace(/\{FLIGHTNO\}/g,flight.flightNo)
									.replace(/\{TIME\}/g,flight.scheduledTime)
									.replace(/\{TO\}/g,flight.to)
									.replace(/\{TERMINAL\}/g,flight.terminal)
									.replace(/\{ROW\}/g,flight.checkInRow)
									.replace(/\{STATUS\}/g,( flight.status ? flight.status : "" ) )
									.replace(/\{STATUS_CLASS\}/g,(flight.statusCode ? "fids-"+flight.statusCode : "") )
								)
							});
						} else departing.remove();
						if ( data.flightArrivals.length > 0 || data.flightDepartures.length > 0 ) {
							template.appendTo( extra_information );
							extra_information.show();
							$("#cqsearch_noresults_section").hide();
							$('html, body').removeClass('page-search-noresults');
						} else {
							var showerrormessage = $("#showerrormessage");
							if(showerrormessage){
								$("#cqsearch_noresults_section").show();
								$('html, body').addClass('page-search-noresults');
							}
						}
						site.ieFixes.search_result();
					}
				} else {
					if ( site.debug ) console.log("ERR: data.success == false , errorCode : " + data.errorCode );
				}
			});

			//Make this call only for non-refinement and on first page
			if(/\.0\.*\.html$/.test(window.location.href) ||
				new RegExp("search\\."+search_input.val()+"\\.*\\.html$").test(decodeURI(window.location.href))) {

				var capitalizeFirstLetter = function capitalizeFirstLetter (text) {
					return (text && text.length > 1) ? text.substr(0,1).toUpperCase()+text.substr(1) : text;
				}

				$.removeCookie('hasFlightStatusInSearch');

				$.ajax({
					type: "GET",
					dataType: "json",
					url: site.ac_json_search.replace("%QUERY", search_input.val())
				}).done(function(data) {
					if (data) {
						if(data.length > 0) {
							var isSearchTermAirline = false;
							for(var idx = 0; idx < data.length; ++idx) {
								if(data[idx].type === "airline") {
									isSearchTermAirline = true;
									break;
								}
							}
							if(isSearchTermAirline) {
								updateSearchPagination();
								$(".airline-result").append(
									scope.find(".airline-result-template").html()
										.replace(/\{LANG\}/g, $('html').attr('lang').substr(0, 2))
										.replace(/\{TERM\}/g, window.encodeURI(search_input.val()))
										.replace(/\{TIME\}/g, "all")
										.replace(/\{EXCERPT\}/g, '<b>'+capitalizeFirstLetter(search_input.val())+'</b>')
										.replace(/\{HOST\}/g, window.location.protocol + "//" + window.location.host)
								);
								$(".airline-result").removeClass("hidden");
								$.cookie('hasFlightStatusInSearch', true);
								//we need this to update page numbers in SearchController
								window.pageHasFlightStatusInSearch = true;
							}
						}
					} else {
						if(site.debug) {
							console.log("ERR: data.success == false , errorCode : " + data.errorCode );
						}
					}
				});
			}

		}
	},
	listPagesFilter: {
		json: '',
		count: 0,
		selector_cookie_name:'',

		init: function(){
			"use strict";
			$('div.default').hide();
			$.cookie.json = true;
			$('.frm.frm-filter .row select').each(function(idx, combo){
				$(combo).val('');
				$(combo).trigger("chosen:updated");
			});

			site.listPagesFilter.selector_cookie_name=$('input[name=selector_cookie_name]').val();
			site.listPagesFilter.updateSelectorsWithCookieDetails();
			site.listPagesFilter.updateSelectorsWithUrlParams();
			$('div[ng-app=cagApp]').show();
			site.listPagesFilter.update();

			$('.frm.frm-filter .row select').each(function(idx, val){
				// listens to click event for all groups
				$(val).on('change', function(evt){
					site.listPagesFilter.update();
				});
			});

			if($('.frm.frm-filter .row .btn.btn-default').length){
				$('.frm.frm-filter .row .btn.btn-default').click( function(){site.listPagesFilter.update();});
			}
			if($('.frm.frm-filter .row input[name="FILTER4"]').length){

				$('.frm.frm-filter .row input[name="FILTER4"]').on('keypress', function (event) {
					 if(event.which == '13'){
						site.listPagesFilter.update();
					 }
			   });
			}

			$('.frm.frm-filter a[role="button"]').on('click', function(){ site.listPagesFilter.reset(); });

		},
		setCookies: function(){
			'use strict';
			var offSet = $('input#listFilterOffSet').val();
			var listPagesFilter = [];
			var index = 0;
			site.listPagesFilter.json = '';
			$('.frm.frm-filter .row select').each(function(idx, val){
				listPagesFilter[index] = '';
				listPagesFilter[index] = $(val).val();
				index++;
			});
			if($('.frm.frm-filter .row input[name="FILTER4"]').length){
				listPagesFilter[index] = '';
				var filter4 = $('.frm.frm-filter .row input[name="FILTER4"]').val();
				if (filter4 != null && typeof filter4 !== "undefined" && filter4 !==''){
					filter4 = filter4.replace(/\//g, "__SLASH__");
					filter4 = filter4.replace(/\./g, "__DOT__");
				}
				listPagesFilter[index] = filter4;
			}

			var cookieName = site.listPagesFilter.selector_cookie_name;
			//if (cookieName !== "shop_listing_cookie_name" && cookieName !== "dine_listing_cookie_name" ) {
				$.cookie(cookieName, listPagesFilter);
			//}

			//if Cookie is disabled, then set the json
			if(!$.cookie(site.listPagesFilter.selector_cookie_name)) {
				site.listPagesFilter.setJSON(listPagesFilter);
			}
		},
		convertToJSON: function(){
			'use strict';
			var listPagesFilter = $.cookie(site.listPagesFilter.selector_cookie_name);
			if(listPagesFilter) {
			   site.listPagesFilter.setJSON(listPagesFilter);
			}
		},
		setJSON: function setJSON(listPagesFilter) {
			for (var i = 0; i < listPagesFilter.length; i++){
				if( i == (listPagesFilter.length-1)){
					site.listPagesFilter.json += listPagesFilter[i] ;
				}else {
					site.listPagesFilter.json += listPagesFilter[i] + '.';
				}
			}
		},
		reloadJSON: function(){
			"use strict";
			$('input#uriPath').val($('input[name=filterPath]').val()).trigger('change');
			$('input#noOfColumns').val($('input#NUM_COL').val()).trigger('change');
			if(site.tpl_services_facilities.isServiceFacility(site.listPagesFilter.selector_cookie_name)){
			  site.tpl_services_facilities.update(site.listPagesFilter.json);
			}else {
				$('input#listFilter').val(site.listPagesFilter.json).trigger('change');
			}

		},
		update: function(){
			site.listPagesFilter.setCookies();
			site.listPagesFilter.convertToJSON();
			site.listPagesFilter.reloadJSON();
		},
		updateSelectorsWithCookieDetails: function(){
			var stored_listing_filter = $.cookie(site.listPagesFilter.selector_cookie_name);
			if(stored_listing_filter){
				var index = 0;
				$('.frm.frm-filter .row select').each(function(idx, val){
					$(val).val(stored_listing_filter[index]);
					$(val).trigger("chosen:updated");
					index++;
				});
				if ($('.frm.frm-filter .row input').length){
					var filter4 = stored_listing_filter[index];
					if (filter4 != null && typeof filter4 !== "undefined" && filter4 !==''){
						filter4 = filter4.replace(/__SLASH__/g,"/");
						filter4 = filter4.replace(/__DOT__/g,".");
					}
					$('.frm.frm-filter .row input[name="FILTER4"]').val(filter4);
					$('.frm.frm-filter .row input[name="FILTER4"]').trigger("chosen:updated");
				}
			}
		},
		updateSelectorsWithUrlParams: function(){
			var terminal = site.utils.get('terminal');
			var category = site.utils.get('category');
			var location = site.utils.get('location');
			var shopname = site.utils.get('shopname');
			var tagfilter = site.utils.get('tagfilter');
			$('.frm.frm-filter .row select').each(function(idx, val){
				var selectorName =  $(val).attr('name');
				if (typeof terminal !== "undefined" && terminal !=='' && selectorName == 'terminal'){
					$(val).val(terminal);
					$(val).trigger("chosen:updated");
				}
				if (typeof tagfilter !== "undefined" && tagfilter !==''
					&& (selectorName == 'tagfilter' || selectorName == 'FILTER1')){
					$(val).val(tagfilter);
					$(val).trigger("chosen:updated");
				}
				//reset location when tagfilter turns up in the url param
				if (typeof tagfilter !== "undefined" && tagfilter !==''
					&& (selectorName == 'FILTER2')){
					$(val).val("");
					$(val).trigger("chosen:updated");
				}
				if (typeof location !== "undefined" && location !=='' && selectorName == 'location'){
					$(val).val(location);
					$(val).trigger("chosen:updated");
				}
				if (typeof category !== "undefined" && category !=='' && selectorName == 'category'){
					$(val).val(category);
					$(val).trigger("chosen:updated");
				}
				var currentValue = $(val).val();
				if (typeof currentValue == "undefined"  || currentValue == null){
					$(val).val('');
					$(val).trigger("chosen:updated");
				}
			});
			if ($('.frm.frm-filter .row input[name="FILTER4"]').length){
				if (typeof shopname !== "undefined" && shopname !==''){
					$('.frm.frm-filter .row input[name="FILTER4"]').val(shopname);
					$('.frm.frm-filter .row input[name="FILTER4"]').trigger("chosen:updated");
				}
			}
		},
		reset: function(){
			"use strict";

			 $('.frm.frm-filter .row select').each(function(idx, val){
				$(val).val('');
			});
			$(".frm.frm-filter .row select").trigger("chosen:updated");
			if($('.frm.frm-filter .row input').length){
				 $('.frm.frm-filter .row input[name="FILTER4"]').val('');
			}
			site.listPagesFilter.json = '';
			$.removeCookie(site.listPagesFilter.selector_cookie_name);
			site.listPagesFilter.reloadJSON();
		}
	},
	shop_search_button: {
		init:function(){
		   site.shop_search_button.shop_search();
		   site.shop_search_button.dine_search();
		   site.shop_search_button.shop_name_button();
		   site.shop_search_button.dine_name_button();
		},
		shop_search:function(){
			if ($('.cq-shop-finder-box #shop_dine_shop_search').length){
				$(' .cq-shop-finder-box #shop_dine_shop_search').click( function(){
					$('.cagApp.shop-and-dine .cq-shop-finder-box #sdShop').find('form').serialize();
					$('.cagApp.shop-and-dine .cq-shop-finder-box #sdShop').find('form').submit();
				});
			}
		},
		dine_search:function(){
			if ($(' .cq-shop-finder-box #shop_dine_dine_search').length){
				$('.cq-shop-finder-box #shop_dine_dine_search').click( function(){
					$('.cq-shop-finder-box #shDine').find('form').serialize();
					$('.cq-shop-finder-box #shDine').find('form').submit();
				});
			}
		},
		shop_name_button:function(){
			if ($('.cq-shop-finder-box #shop_dine_shop__name_search').length){
				$('.cq-shop-finder-box #shop_dine_shop__name_search').click( function(){
					$('.cq-shop-finder-box #sdShop').find('form').serialize();
					$('.cq-shop-finder-box #sdShop').find('form').submit();
				});
			}
		},
		dine_name_button:function(){
			if ($('.cq-shop-finder-box #shop_dine_dine__name_search').length){
				$('.cq-shop-finder-box #shop_dine_dine__name_search').click( function(){
					$('.cq-shop-finder-box #shDine').find('form').serialize();
					$('.cq-shop-finder-box #shDine').find('form').submit();
				});
			}
		}
	},
	shop_dine_names_auto_complete: {
		init: function(){
			'use strict';
			site.shop_dine_names_auto_complete.shop_names_auto_complete();
			site.shop_dine_names_auto_complete.dine_names_auto_complete();
		},
		shop_names_auto_complete:function(){
			'use strict';
			var shop_names = new Bloodhound({
				 datumTokenizer: function(datum) { return Bloodhound.tokenizers.whitespace(datum.value); },
				 queryTokenizer: Bloodhound.tokenizers.whitespace,
				 remote: {
					 url: site.shop_names_json_url,
					 ajax: $.ajax({ type:'GET', dataType:'jsonp', jsonp:'jsonp', contentType:"application/json;charset=utf-8" }),
					 filter: function(list){
						 var searchStr = $('.cq-shop-finder-box #sdShop .typeahead').typeahead('val');
						 return $.map(list, function(item){
							  var   regex = new RegExp('^' + searchStr + '.*$', 'i');
								if (regex.test(item)) {
									return {val1: item };
								}

						 });
					 }
				 }
			 });
			 shop_names.initialize();
			 $('.cq-shop-finder-box #sdShop .typeahead').typeahead({ highlight: true , minLength:3}, {
				 name: 'shop_names',
				 displayKey: 'val1',
				 templates: {
					 suggestion: Handlebars.compile('<p>{{val1}}</p>')
				 },
				 source: shop_names.ttAdapter()
			 });
		},
		dine_names_auto_complete:function(){
			'use strict';
			var dine_names = new Bloodhound({
					datumTokenizer: function(datum) { return Bloodhound.tokenizers.whitespace(datum.value); },
					queryTokenizer: Bloodhound.tokenizers.whitespace,
					remote: {
						url: site.dine_names_json_url,
						 ajax: $.ajax({ type:'GET', dataType:'jsonp', jsonp:'jsonp', contentType:"application/json;charset=utf-8" }),
						 filter: function(list){
							 var searchStr = $('.cq-shop-finder-box #shDine .typeahead').typeahead('val');
							 return $.map(list, function(item){
								  var   regex = new RegExp('^' + searchStr + '.*$', 'i');
									if (regex.test(item)) {
										return {val1: item };
									}

							 });
						 }
					}
				});
				dine_names.initialize();
				//
				$('.cq-shop-finder-box #shDine .typeahead').typeahead({ highlight: true , minLength:3}, {
					name: 'dine_names',
					displayKey: 'val1',
					templates: {
						//header: '<h5>Heading</h5>',
						suggestion: Handlebars.compile('<p>{{val1}}</p>')
					},
					source: dine_names.ttAdapter()
				});
		}
	},
	shoplisting_shop__names_auto_complete: {
		init: function(){
			'use strict';
			site.shoplisting_shop__names_auto_complete.shop_names_auto_complete();
		},
		shop_names_auto_complete:function(){
			'use strict';
			var shop_names = new Bloodhound({
					datumTokenizer: function(datum) { return Bloodhound.tokenizers.whitespace(datum.value); },
					queryTokenizer: Bloodhound.tokenizers.whitespace,
					remote: {
						url: site.shop_names_json_url,
						ajax: $.ajax({ type:'GET', dataType:'jsonp', jsonp:'jsonp', contentType:"application/json;charset=utf-8" }),
						filter: function(list){
							var searchStr = $('.frm.frm-filter .row#listpageselectorfilter .typeahead#shopping_shop_name_field').typeahead('val');
							return $.map(list, function(item){
								var   regex = new RegExp('^' + searchStr + '.*$', 'i');
									if (regex.test(item)) {
										return {val1: item };
									}
							});
						}
					}
				});
			shop_names.initialize();
			$('.frm.frm-filter .row#listpageselectorfilter .typeahead#shopping_shop_name_field').typeahead({ highlight: true , minLength:3}, {
				name: 'shop_names',
				displayKey: 'val1',
				templates: {
					suggestion: Handlebars.compile('<p>{{val1}}</p>')
				},
				source: shop_names.ttAdapter()
			});
		}
	},
	dinelisting_shop__names_auto_complete: {
		init: function(){
			'use strict';
			site.dinelisting_shop__names_auto_complete.dine_names_auto_complete();
		},
		dine_names_auto_complete:function(){
			'use strict';
			var dine_names = new Bloodhound({
					datumTokenizer: function(datum) { return Bloodhound.tokenizers.whitespace(datum.value); },
					queryTokenizer: Bloodhound.tokenizers.whitespace,
					remote: {
						url: site.dine_names_json_url,
						ajax: $.ajax({ type:'GET', dataType:'jsonp', jsonp:'jsonp', contentType:"application/json;charset=utf-8" }),
						filter: function(list){
							var searchStr = $('.frm.frm-filter .row#listpageselectorfilter .typeahead#dining_shop_name_field').typeahead('val');
							return $.map(list, function(item){
								var   regex = new RegExp('^' + searchStr + '.*$', 'i');
								if (regex.test(item)) {
									return {val1: item };
								}
							});
						}
					}
				});
			dine_names.initialize();
			//
			$('.frm.frm-filter .row#listpageselectorfilter .typeahead#dining_shop_name_field').typeahead({ highlight: true , minLength:3}, {
				name: 'dine_names',
				displayKey: 'val1',
				templates: {
					//header: '<h5>Heading</h5>',
					suggestion: Handlebars.compile('<p>{{val1}}</p>')
				},
				source: dine_names.ttAdapter()
			});
		}
	},
	thirdParty: {
		init: function(){
			'use strict';
		},
		loadInstagram: function(){
			$.ajax({
				//url: cag.properties.instagram_tags_url + '?access_token=' + site.instagram_access_token,
				//url: cag.properties.instagram_users_url + '?access_token=' + site.instagram_access_token,
				//url: cag.properties.cq_publisher_url + "/content/dam/cag/instagram/instagram.data",
				url: cag.properties.cq_publisher_url + "/content/dam/cag/instagram/instagram.data",
				type: 'GET',
				dataType: 'json',
				cache: false,
				success: function(data){
					// placing the images on the page
					for (var i = 0; i <= 4; i++) {
						(i <= 3) ? $('.instagram-feed ul').append("<li class='itm-" + i + "'><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></a></li>") : $('.instagram-feed.full-size').append("<a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.standard_resolution.url + "'></a>");
					}
				}
			});
		},
		loadSGTTime: function(postSuccessAction){ // displays yesterday/today/tomorrow in SGT
			$.ajax({
				type: 'GET',
				url: site.sgt_json,
				data: {  },
				dataType: 'json',
				success: function(data){
					var names = data;
					var today = data.today,
					yesterday =data.yesterday,
					tomorrow = data.tomorrow;
					var replaceWithDate = function(){
						$(this).find('option:contains("Yesterday")').text(yesterday);
						$(this).find('option:contains("Today")').text(today);
						$(this).find('option:contains("Tomorrow")').text(tomorrow);
					}
					$('div[role="quick-search"] .date').each(replaceWithDate);
					$('#optFilterByDate').each(replaceWithDate);

					if($.isFunction(postSuccessAction)) {
						postSuccessAction(data.time);
					}
				}
			});
		},
		getWeather: function(){
			var weather_path = '/content/dam/cag/weather/';

			$.get(weather_path + 'weather.xml', function(data){
				var xml_item 		= $(data).find("item"),
				xml_temperature 	= xml_item.find("temperature"),
				xml_forecast 		= xml_item.find("forecast"),
				xml_weather_code 	= xml_item.find("wxmain"),
				valid_from 			= xml_item.find("forecastValidityFrom"),
				valid_till 			= xml_item.find("forecastValidityTill"),
				weather_box 		= $(".weather-box-wrapper"),
				description			= weather_box.find( ".text-list").find( "."+xml_weather_code.text() );
				if ( description.length > 0 ){
					weather_box.addClass( xml_weather_code.text() );
					$('<span class="temperature pull-left"></span>').html( xml_temperature.attr("high") +'&deg; C' ).appendTo( weather_box );
					$('<span class="description pull-left"></span>').html( description.text() ).appendTo( weather_box );
				}
				if( valid_from.length > 0 ) weather_box.append('<div style="display:none;">'+valid_from.attr("date")+' '+valid_from.attr("time")+'</div>');
			});
		},
		chosen: function(){
			var scope = $("[role=quick-search],[role=filter],.cq-shop-finder-box .tab-pane,.frm-filter,.recommendation .recommendation-list,#tabArrDep,.cq-multi-selector,#mc_embed_signup"),
				items = scope.find("select");
			var md = new MobileDetect(window.navigator.userAgent);
			if ( items.length > 0 ) {
				items.wrap('<div class="chosen-wrap"></div>');
				if (typeof $.fn.chosen != 'undefined') {
					if (!md.tablet() && !md.mobile()) {
						items.chosen({ width: "100%" });
					}
				} else {
					if ( site.debug ) console.log("ERR: Chosen is not defined");
				}
			}
		},
		// icheck: function(){
		// 	var items = $("input[type=radio]:not(.switchery):visible, input[type=checkbox]:not(.switchery):visible");
		// 	if ( items.length > 0 ) {
		// 		if (typeof $.fn.iCheck != 'undefined')
		// 			items.iCheck({ checkboxClass: 'icheckbox_square-orange', radioClass: 'iradio_square-orange'  });
		// 		else {
		// 			if ( site.debug ) console.log("ERR: iCheck is not defined");
		// 		}
		// 	}
		// },
		switchery: function(){
			if (typeof Switchery != 'undefined') {
				/*var switch_arrival = new Switchery( document.querySelector('#sArrivals .switchery'), { color: "#d0cdcb", secondaryColor: "#d0cdcb", jackColor: "#333333" } ),
					switch_departure = new Switchery( document.querySelector('#sDepartures .switchery'), { color: "#d0cdcb", secondaryColor: "#d0cdcb", jackColor: "#333333" } ),
					switch_airtype = new Switchery( document.querySelector('#tabArrDep .frm .switchery'), { color: "#d0cdcb", secondaryColor: "#d0cdcb", jackColor: "#333333" } );*/
				var switch_airtype = new Switchery( document.querySelector('#tabArrDep .frm .switchery'), { color: "#d0cdcb", secondaryColor: "#d0cdcb", jackColor: "#333333" } );

				// switch_arrival.handleOnchange = function(){
				// 	if ( !this.isChecked() ) {
				// 		$("#sArrivals").find("input#rdoPassengerFreighter1").prop({ checked:true }).attr("checked","checked");
				// 		$("#sArrivals").find("input#rdoPassengerFreighter2").prop({ checked:false }).removeAttr("checked");
				// 	} else {
				// 		$("#sArrivals").find("input#rdoPassengerFreighter1").prop({ checked:false }).removeAttr("checked");
				// 		$("#sArrivals").find("input#rdoPassengerFreighter2").prop({ checked:true }).attr("checked","checked");
				// 	}
				// };

				// switch_departure.handleOnchange = function(){
				// 	if ( !this.isChecked() ) {
				// 		$("#sDepartures").find("input#rdoPassengerFreighter1").prop({ checked:true }).attr("checked","checked");
				// 		$("#sDepartures").find("input#rdoPassengerFreighter2").prop({ checked:false }).removeAttr("checked");
				// 	} else {
				// 		$("#sDepartures").find("input#rdoPassengerFreighter1").prop({ checked:false }).removeAttr("checked");
				// 		$("#sDepartures").find("input#rdoPassengerFreighter2").prop({ checked:true }).attr("checked","checked");
				// 	}
				// };

			}
			else {
				if (site.debug)  console.log("ERR: Switchery is not defined");
			}
		},
		gigya: function(){
			var script=document.createElement('script');
			script.type='text/javascript';
			script.async=false;
			script.src= "http://cdn.gigya.com/js/gigya.js?apiKey="+cag.properties.gigyaAPIKey;
			if ( $("#shareDiv").length > 0 ) {
				if ( $('div.gigya-js-root').length == 0 ) {
					$("body").append('<div class="gigya-js-root"></div>');
				}
				$('head').append( script );
				var checkGigya = setInterval(function(){
					if ( typeof window.gigya != 'undefined' ) {
						var act = new gigya.socialize.UserAction();
						act.setTitle( $("meta[property='og:title']").attr("content") );
						act.setLinkBack( $("meta[property='og:url']").attr("content") );
						act.setDescription( $("meta[property='og:description']").attr("content") ); 
						var showShareBarUI_params=
						{
							containerID: 'shareDiv',
							shareButtons: 'Share',
							buttonTemplate: '<div class="handler" onclick="$onClick"></div>',
							moreEnabledProviders: cag.properties.gigyaShareButtons,
							iconsOnly: 'true',
							showCounts: 'none',
							userAction: act
						}
						gigya.socialize.showShareBarUI(showShareBarUI_params);
						clearInterval(checkGigya);
					}
				},100);
			}
		}
	},
	analytics: {
		init:function(){

			// Generic Tracking
			$("body").on("click","a",function(){
				if ( $(this).prop("href") != "" && $(this).attr("href") != "#") site.analytics.send({ category: "Generic link", action: "Clicked", label: $(this).prop("href") });
			});

			site.analytics.flight_widget();
			site.analytics.navigationbar();
			site.analytics.megadropdown();
			site.analytics.importantnotice();
			site.analytics.social();
			site.analytics.homecarousel();
			site.analytics.news();
			site.analytics.quicklinks();
			site.analytics.listbox();
			site.analytics.commonimage();
			site.analytics.taskbar();
			site.analytics.promobox();
			site.analytics.anchorlink();
			site.analytics.tabtable();
			site.analytics.imageanchorlink();
			site.analytics.shopfinderbox();
			site.analytics.tagbasedropdownfilter();
			site.analytics.airline();
			site.analytics.airlineitem();
			site.analytics.flightstatus();
			site.analytics.flightstatusinput();
			site.analytics.eventlisting();
			site.analytics.shopdinelisting();
			site.analytics.radioselector();
			site.analytics.timeline();
			site.analytics.videocarousel();
			site.analytics.accolades();
			site.analytics.recommendation();
			site.analytics.productdetail();
			site.analytics.flightxsell();
			site.analytics.xsellproductlist();
			site.analytics.featuredproducts();
			site.analytics.accordion();
			site.analytics.sitesearch();
			site.analytics.surveyPopup();
		},
		send:function(options){
			if ( !$("body").hasClass("author-mode") && !$("body").hasClass("design-mode") ) {
				if (typeof ga == 'undefined') { if ( site.debug ) console.log("ga is undefined",options); return; }
				if (options.category && options.action && options.label) {
					ga('send', 'event', options.category, options.action, options.label );
				} else
				if (options.category && options.action) {
					ga('send', 'event', options.category, options.action);
				}
				if ( site.debug ) console.log(options);
			}
		},
		flight_widget:function(){
			var scope = $("div[role=quick-search]"),
				category = "Flight Widget";

			// Expand Flight Widget
			scope.on("click",".btn-toggle",function(){
				if ( $(this).closest("form").find(".panel-collapse").hasClass("in") )
					site.analytics.send({ category: category, action: "Clicked Collapse Widget" });
				else
					site.analytics.send({ category: category, action: "Clicked Expand Widget" });
			});

			// When selected a suggested autocomplete text
			scope.on("typeahead:autocompleted","input.typeahead",function(obj,suggestObj){
				site.analytics.send({ category: category, action: "Typed "+ $(obj.currentTarget).typeahead("val") +" Selected Autocomplete " + suggestObj.val1  });
			});

			// When selected a suggested autocomplete text
			scope.on("typeahead:selected","input.typeahead",function(obj,suggestObj){
				site.analytics.send({ category: category, action: "Typed "+ $(obj.currentTarget).typeahead("val") +" Selected Autocomplete " + suggestObj.val1  });
			});

			// When clicked on View All Flights (Arrival)
			scope.on("click",".frmArrivals [role=button] a",function(){
				site.analytics.send({ category: category, action: "Clicked View All Flights (Arrival)", label: $(this).prop("href") });
			});

			// When clicked on search icon for Arrival Search
			scope.on("click",".frmArrivals.frmArrival1 button.btn",function(){
				site.analytics.send({ category: category, action: "Arrival Flight Search Icon Clicked" });
			});

			// When clicked on search button for Arrival Search
			scope.on("click",".frmArrivals.frmArrival2 button.btn",function(){
				site.analytics.send({ category: category, action: "Arrival Flight Search Button Clicked" });
			});

			// When clicked on View All Flights (Departure)
			scope.on("click",".frmDepartures [role=button] a",function(){
				site.analytics.send({ category: category, action: "Clicked View All Flights (Departure)", label: $(this).prop("href") });
			});

			// When clicked on search icon for Departure Search
			scope.on("click",".frmDepartures.frmDeparture1 button.btn",function(){
				site.analytics.send({ category: category, action: "Departure Flight Search Icon Clicked" });
			});

			// When clicked on search button for Departure Search
			scope.on("click",".frmDepartures.frmDeparture2 button.btn",function(){
				site.analytics.send({ category: category, action: "Departure Flight Search Button Clicked" });
			});

			scope.find(".frmArrivals,.frmDepartures").on("submit",function(){
				var form = $(this),
					term = form.closest(".tab-content").find("[name=term]"),
					date = form.closest(".tab-content").find("[name=date]"),
					time = form.closest(".tab-content").find("[name=time]"),
					type = "";

				if ( form.is(".frmArrivals") ) type="Arrival"; else
				if ( form.is(".frmDepartures") ) type="Departure";

				if ( term.length!=0 && date.length!=0 && time.length!=0 ) {
					// When searched on Arrivals with a keyword entered
					if (term.val()!="") {
						site.analytics.send({ category: category, action: type+" Flight Search with Keyword "+term.val() });
					}
					// When searched on Arrivals with a selected day-dropdown value
					if (date.val()!="") {
						site.analytics.send({ category: category, action: type+" Flight Search with Day-Dropdown "+date.val() });
					}
					// When searched on Arrivals with a selected day-dropdown value
					if (time.val()!="") {
						site.analytics.send({ category: category, action: type+" Flight Search with Time-Dropdown "+time.val() });
					}
					// When searched on Arrivals on Flight Widget
					var params = [];
					params.push( (term.val()!="" ? term.val() : "<keyword>") );
					params.push( (date.val()!="" ? date.val() : "<day>") );
					params.push( (time.val()!="" ? time.val() : "<time>") );
					site.analytics.send({ category: category, action: type+" Flight Search Done " + params.join(", ") });
				}
			});
		},
		navigationbar:function(){
			var scope = $("header"),
				menuitem = scope.find("#lev1-nav ul[role=navigation] a, #lev1-mobile ul[role=navigation] a"),
				category = "Navigation Bar";

			if ( scope.length==0 ) return;

			// When clicked on Changi Logo
			scope.on("click","h1 a",function(){
				site.analytics.send({ category: category, action: "Clicked Changi Logo", label: $(this).prop("href")  });
			});

			// When clicked on each section landing page URL
			menuitem.on("click",function(){
				site.analytics.send({ category: category, action: "Clicked Section " + $(this).text().trim(), label: $(this).prop("href") });
			});

			// When clicked on search icon
			scope.find("div[role=locale]")
				.on( "click" , ".btn-search" , function(){
					site.analytics.send({ category: category, action: "Clicked Search" });
				})
				.on( "click" , "a:not('.btn-search')" , function(){
					site.analytics.send({ category: category, action: "Clicked " + $(this).text().trim(), label:  $(this).prop("href") });
				});
		},
		megadropdown:function(){
			var scope = $("header"),
				nav = scope.find("#lev1-nav,#lev1-mobile"),
				menuitem = nav.find(".panel a"),
				category = "Mega Drop Down";

			if ( scope.length==0 ) return;

			menuitem.on("click",function(){
				var _self = $(this);
					section_name = nav.find("a[href=#"+ _self.closest(".collapse").prop("id") +"]").text().trim();
				site.analytics.send({ category: category, action: "Clicked " + section_name + " " + $(this).text().trim(), label: $(this).prop("href") });
			});
		},
		importantnotice:function(){
			var scope = $("#important-notice"),
				category = "Emergency Banner";
			if (scope.length==0) return;
			scope.on("click",".msg a",function(){
				site.analytics.send({ category: category, action: "Clicked", label: $(this).prop("href") });
			});
		},
		social:function(){
			var scope = $("section[role=social]"),
				category = "Social Media Icons";

			if (scope.length==0) return;

			scope.on("click","a",function(){
				site.analytics.send({ category: category, action: "Clicked", label: $(this).prop("href") });
			});

			scope.on("submit","#frmNewsletter",function(){
				var form = $(this),
					form_action = form.prop("action");
				if ( form.find("input[name=email]").val().trim() == "" )
					site.analytics.send({ category: category, action: "Submitted <empty>", label: form_action });
				else
					site.analytics.send({ category: category, action: "Submitted " + form.find("input[name=email]").val().trim(),  label: form_action });
			});
		},
		homecarousel:function(){
			var scope = $("section[role=highlight]"),
				category = "Hero Carousel";

			if (scope.length==0) return;
			scope
				.on("click",".carousel-inner .item a",function(){
					site.analytics.send({ category: category, action: "Clicked " + $(this).text().trim(), label: $(this).prop("href") });
				})
				.on("click",".carousel-indicators li",function(){
					site.analytics.send({ category: category, action: "Clicked " + $(this).index() });
				})
				.on("click",".carousel-control",function(){
					var direction = "";
					if ( $(this).hasClass("left") ) direction = "left";
					if ( $(this).hasClass("right") ) direction = "right";
					site.analytics.send({ category: category, action: "Clicked " + direction });
				});
		},
		news:function(){
			var scope = $("div[role=feeds]"),
				category = "News";

			if (scope.length==0) return;
			scope
				.on("click",".item a",function(){
					site.analytics.send({ category: category, action: "Clicked", label: $(this).prop("href") });
				})
				.on("click","[role=button] a",function(){
					site.analytics.send({ category: category, action: "Clicked More News", label: $(this).prop("href") });
				});
		},
		quicklinks:function(){
			var scope = $("#lev2-nav"),
				menuitem = scope.find("ul.nav-pills[role=tablist] a"),
				category = "Quick Link";

			if ( scope.length==0 ) return;

			// When clicked on each section landing page URL
			menuitem.on("click",function(){
				site.analytics.send({ category: category, action: "Clicked Section " + $(this).text().trim(), label: $(this).prop("href") });
			});

			scope.find(".panel ul.list-unstyled a").on("click",function(){
				var _self = $(this);
					section_name = menuitem.filter("a[href=#"+ _self.closest(".collapse").prop("id") +"]").first().text().replace(/(\r\n|\n|\r)/gm,"").trim();
				site.analytics.send({ category: category, action: "Clicked " + section_name + " > " + $(this).text().trim(), label: $(this).prop("href") });
			});
		},
		listbox:function(){
			var scope = $(".cq-list-box"),
				menuitem = scope.find("a"),
				category = "List Box Component";
			if ( scope.length==0 ) return;

			menuitem.on("click",function(){
				site.analytics.send({ category: category, action: "Clicked " + $(this).text().trim(), label: $(this).prop("href") });
			});
		},
		commonimage:function(){
			var scope = $(".cq-common-image"),
				menuitem = scope.find("a"),
				category = "Image Component";
			if ( scope.length==0 ) return;

			menuitem.on("click",function(){
				site.analytics.send({ category: category, action: "Clicked", label: $(this).prop("href") });
			});
		},
		taskbar: function(){
			var scope = $("#floating-shortcuts"),
				menuitem = scope.find("a"),
				category = "Taskbar Component";
			if ( scope.length==0 ) return;
			menuitem.on("click",function(){
				site.analytics.send({ category: category, action: "Clicked " + $(this).text().trim(), label: $(this).prop("href") });
			});
		},
		promobox:function(){
			var scope = $("body"),
				category = "Promo Box Component";

			scope.on("click",".cq-promo-box a",function(){
				site.analytics.send({ category: category, action: "Clicked " + $(this).closest(".caption").find("h3").text().trim(), label: $(this).prop("href") });
			});
		},
		anchorlink:function(){
			var scope = $(".cq-anchor-link"),
				menuitem = scope.find(".list-type-1 a"),
				category = "Anchor Link Component";
			if ( scope.length==0 ) return;

			menuitem.on("click",function(){
				site.analytics.send({ category: category, action: "Clicked " + $(this).text().trim(), label: $(this).prop("href") });
			});
		},
		tabtable:function(){
			var scope = $(".cq-tab-table"),
				menuitem = scope.find(".list-type-2 a"),
				category = "Tab Table Component";
			if ( scope.length==0 ) return;
			// When clicked on the menu link
			menuitem.on("click",function(){
				site.analytics.send({ category: category, action: "Clicked " + $(this).text().trim(), label: $(this).prop("href") });
			});
			// When clicked on the link in the tab content
			scope.find(".tab-pane").on("click","a",function(){
				site.analytics.send({ category: category, action: "Clicked " + $(this).closest(".tab-pane").prop("id").trim() + " > "+ $(this).text().trim(), label: $(this).prop("href") });
			})
		},
		imageanchorlink:function(){
			var scope = $(".cq-image-anchor-link"),
				menuitem = scope.find("a"),
				category = "Image Anchor Link Component";
			if ( scope.length==0 ) return;

			menuitem.on("click",function(){
				site.analytics.send({ category: category, action: "Clicked " + $(this).text().trim(), label: $(this).prop("href") });
			});
		},
		shopfinderbox:function(){
			var scope = $(".cq-shop-finder-box"),
				category = "Shop Finder Widget";
			if ( scope.length==0 ) return;
			scope.find("form [role=button] a").on("click",function(){
				var tab="";
				if ( $(this).closest(".tab-pane").is("#sdShop")) tab = "Shop"; else
				if ( $(this).closest(".tab-pane").is("#shDine")) tab = "Dine";
				site.analytics.send({ category: category, action: "Clicked View all shops (" + tab + ")" });
			});
			scope.find("form").on("submit",function(){
				var form = $(this),
					shopname = form.closest(".tab-pane").find("[name=shopname]"),
					terminal = form.closest(".tab-pane").find("[name=terminal]"),
					location = form.closest(".tab-pane").find("[name=location]"),
					category = form.closest(".tab-pane").find("[name=category]"),
					tab = "";

				if ( form.closest(".tab-pane").is("#sdShop")) tab = "Shop"; else
				if ( form.closest(".tab-pane").is("#shDine")) tab = "Dine";

				if ( shopname.val().trim()!="" ) site.analytics.send({ category: category, action: tab + " Search with Keyword "+ shopname.val().trim() });
				if ( terminal.val().trim()!="" ) site.analytics.send({ category: category, action: tab + " Search with Terminal-dropdown "+ terminal.val().trim() });
				if ( location.val().trim()!="" ) site.analytics.send({ category: category, action: tab + " Search with Location-dropdown "+ location.val().trim() });
				if ( category.val().trim()!="" ) site.analytics.send({ category: category, action: tab + " Search with Category-dropdown "+ category.val().trim() });

				var params = [];
					params.push( (shopname.val()!="" ? shopname.val() : "<keyword>") );
					params.push( (terminal.val()!="" ? terminal.val() : "<terminal>") );
					params.push( (location.val()!="" ? location.val() : "<location>") );
					params.push( (category.val()!="" ? category.val() : "<category>") );
					site.analytics.send({ category: category, action: tab + " Search Done " + params.join(", ") });
			});
		},
		tagbasedropdownfilter:function(){
			var scope = $(".cq-tag-base-dropdown-filter"),
				dropdown = scope.find("select"),
				category = "Tag Base Dropdown Filter";
			if ( scope.length==0 ) return;

			dropdown.on("change",function(){
				var params = [];
				$.each( dropdown, function(i,dd){
					if ( $(dd).val() != "" ) params.push( $(dd).val() );
				});
				site.analytics.send({ category: category, action: "Filtered with " + params.join(", ") });
			});
			scope.find("a.btn").on("click",function(){
				site.analytics.send({ category: category, action: "Clicked Reset" });
			});
		},
		airline:function(){
			var scope = $("#tabPassCargo"),
				tab = scope.find("[role=tablist] a"),
				filter = scope.find(".filter-AZ a"),
				category = "Airline Table";
			if ( scope.length==0 ) return;

			tab.on("click",function(){
				site.analytics.send({ category: category, action: "Clicked " + $(this).text().trim() +" Tab" });
			});
			filter.on("click",function(){
				var tab_name = scope.find( "a[href=#"+ $(this).closest(".tab-pane").prop("id") +"]" ).text().trim();
				site.analytics.send({ category: category, action: "Clicked on " + tab_name + " " + $(this).text().trim() });
			});
		},
		airlineitem:function(){
			var scope = $(".airline-item"),
				category = "Airline Component";
			if ( scope.length==0 ) return;

			scope.find(".airline-more-info a").on("click",function(){
				var airline = $(this).closest("table").find(".air-holder").text().trim();
				site.analytics.send({ category: category, action: "Clicked on " + airline + " Information", label: $(this).prop("href") });
			});
		},
		flightstatus:function(){
			var scope = $("#tabArrDep"),
				arrival = scope.find("#sArrivals"),
				departure = scope.find("#sDepartures"),
				allfilter = scope.find("#filterByFlight,select"),
				passenger_or_freighter = scope.find("#chkFilterByAirType"),
				filterByFlight = scope.find("#filterByFlight"),
				optFilterByDate = scope.find("#optFilterByDate"),
				passengerOptFilterByTime = scope.find("#passengerOptFilterByTime"),
				freighterOptFilterByTime = scope.find("#freighterOptFilterByTime"),
				optFilterByTerminal = scope.find("#optFilterByTerminal"),
				category = "Flight Status";
			if ( scope.length==0 ) return;

			allfilter.on("change",function(){
				var tab_name = scope.find("a[href=#"+ scope.find(".tab-pane.active").prop("id") +"]").text().trim(),
					mode = passenger_or_freighter.prop("checked") ? "Freighter" : "Passenger",
					params=[];
				params.push( filterByFlight.val()!="" ? filterByFlight.val() : "<keyword>" );
				params.push( optFilterByDate.val()!="" ? optFilterByDate.val() : "<date>" );
				params.push( passengerOptFilterByTime.val()!="" ? passengerOptFilterByTime.val() : "<time>" );
				params.push( freighterOptFilterByTime.val()!="" ? freighterOptFilterByTime.val() : "<time>" );
				params.push( optFilterByTerminal.val()!="" ? optFilterByTerminal.val() : "<terminal>" );

				if ( $(this).is(filterByFlight) ) site.analytics.send({ category: category, action: mode + " " + tab_name + " Flight Search with Keyword " + $(this).val() });
				if ( $(this).is(optFilterByDate) ) site.analytics.send({ category: category, action: mode + " " + tab_name + " Flight Search with Day-dropdown  " + $(this).val() });
				if ( $(this).is(passengerOptFilterByTime) ) site.analytics.send({ category: category, action: mode + " " + tab_name + " Flight Search Passenger with Time-dropdown " + $(this).val() });
				if ( $(this).is(freighterOptFilterByTime) ) site.analytics.send({ category: category, action: mode + " " + tab_name + " Flight Search Freighter with Time-dropdown " + $(this).val() });
				if ( $(this).is(optFilterByTerminal) ) site.analytics.send({ category: category, action: mode + " " + tab_name + " Flight Search with Terminal-dropdown " + $(this).val() });
				site.analytics.send({ category: category, action: mode + " " + tab_name + " Flight Search Done " + params.join(", ") });
			});
			scope.on("click","table a",function(){
				if(site.debug) {console.log($(this))};
				site.analytics.send({ category: category, action: "Clicked " + $(this).text().replace(/(\r\n|\n|\r)/gm,"").trim(), label: $(this).prop("href") });
			});
		},
		flightstatusinput: function(){
			
		},
		eventlisting:function(){
			var scope = $(".event-listing"),
				category = "Event Listing";
			if ( scope.length==0 ) return;

			scope.on("click",".thumbnail a",function(){
				var shopdinetitle = $(this).closest(".thumbnail").find("h3").text().trim();
				site.analytics.send({ category: category, action: "Clicked " + shopdinetitle, label: $(this).prop("href") });
			});
		},
		shopdinelisting:function(){
			var scope = $(".shop-dine-listing"),
				category = "Shop & Dine Listing";
			if ( scope.length==0 ) return;

			scope.on("click",".thumbnail a",function(){
				var shopdinetitle = $(this).closest(".thumbnail").find("h3").text().trim();
				site.analytics.send({ category: category, action: "Clicked " + shopdinetitle, label: $(this).prop("href") });
			});
		},
		radioselector:function(){
			var scope = $("#radio_selector_container"),
				category = "Radio Selector";
			if ( scope.length==0 ) return;
			scope.find("a[name=tagfilter]").on("click",function(){
				site.analytics.send({ category: category, action: "Filtered with " + $(this).text().trim(), label: $(this).prop("href") });
			});
		},
		timeline:function(){
			var scope = $("#timeline-carousel"),
				category = "Timeline";
			if ( scope.length==0 ) return;
			scope.find(".carousel-indicators li").on("click",function(){
				site.analytics.send({ category: category, action: "Clicked " + $(this).text().trim() });
			});
			scope.find(".carousel-inner").on("click",".owl-nav > div",function(){
				var year = scope.find(".carousel-indicators li.active").text().trim();
				site.analytics.send({ category: category, action: "Clicked " + year + " Arrow" });
			});
		},
		videocarousel:function(){
			var scope = $("#video-carousel-01"),
				category = "Video Carousel";
			scope.on("click","a.yt-video",function(){
				site.analytics.send({ category: category, action: "Clicked " + $(this).find(".title").text().trim() });
			});
		},
		accolades:function(){
			var scope = $(".awards-accolades"),
				category = "Awards";
			if ( scope.length==0 ) return;
			scope.on("click",".nav-tabs a",function(){
				site.analytics.send({ category: category, action: "Clicked " + $(this).text().trim() });
			});
			scope.find(".tab-content").on("click","a",function(){
				var year = scope.find(".nav-tabs a.active").text().trim();
				site.analytics.send({ category: category, action: "Clicked Load More of year " + year });
			});
		},
		recommendation:function(){
			var scope = $(".recommendation"),
				category = "Recommendation Article";
			if ( scope.length==0 ) return;
			scope.find("ul.selection a").on("click",function(){
				site.analytics.send({ category: category, action: "Article Clicked", label: $(this).find(".caption").text().trim() });
			});
			scope.on("click",".product-cell a",function(){
				site.analytics.send({ category: category, action: "Product Clicked " + $(this).attr("title"), label: $(this).prop("href") });
			});
		},
		productdetail:function(){
			var scope = $(".product-detail"),
				category = "Product Detail";
			if ( scope.length==0 ) return;
			scope.find("a.ishopchangi-link").on("click",function(){
				site.analytics.send({ category: category, action: "Clicked iSC Link " + $(this).siblings("h3").text().trim(), label: $(this).prop("href") });
			});
		},
		flightxsell:function(){
			var scope = $(".extra-information"),
				category = "Flight Cross-sell";
			if ( scope.length==0 ) return;
			scope.on("click",".xsell .thumbnail span[role=button] a",function(){
				site.analytics.send({ category: category, action: "Clicked cross-sell "+ $(this).closest(".caption").find("h3").text().trim() +" with search terms " + $("input[name=s]").val(), label: $(this).prop("href") });
			});
		},
		xsellproductlist:function(){
			var scope = $(".carousel-multiple-items"),
				category = "Cross-sell Product List";
			if ( scope.length==0 ) return;
			scope.on("click",".item a",function(){
				site.analytics.send({ category: category, action: "Clicked", label: $(this).prop("href") });
			});
		},
		featuredproducts:function(){
			var scope = $(".featured-products"),
				category = "Featured Product";
			if ( scope.length==0 ) return;
			scope.on("click",".thumbnail a",function(){
				site.analytics.send({ category: category, action: "Clicked " + $(this).closest(".thumbnail").find(".caption h5").text().trim() , label: $(this).prop("href") });
			});
		},
		accordion:function(){
			var scope = $(".cq-accordion"),
				category = "Accordion";
			if ( scope.length==0 ) return;
			scope.on("click",".expand-collapse",function(){
				var state = "";
				if ( $(this).closest(".panel").hasClass("active") ) state="Expand"; else state="Collapse";
				site.analytics.send({ category: category, action: state +" "+ $(this).closest(".panel").find(".panel-heading").text().trim()  });
			});
		},
		sitesearch:function(){
			var scope = $("#global-search #frmSearch"),
				category = "Search";
			if ( scope.length==0 ) return;
			scope.on("submit",function(){
				var state = "";
				site.analytics.send({ category: category, action: "Searched Site : "+ scope.find("#txtSearch").val().trim()  });
			});
		},
		surveyPopup:function(){
			var scope = $("#surveyModal"),
				category = "Survey Popup";
			if ( scope.length==0 ) return;
			scope.on("click","a[type=button]",function(){
				var state = "";
				if ( $(this).is(".btn-nope") ) site.analytics.send({ category: category, action: "Clicked No" }); else
				if ( $(this).is(".btn-take-survey") ) site.analytics.send({ category: category, action: "Clicked Yes", label: $(this).prop("href") });
			});
		},
		segmentation:function(teaser) {
			var getActionData = function(teaserObj) {
				var arr = [];
				arr.push("Loaded Teaser - (Component Name: " + teaserObj.name);
				arr.push("Segmentation : " + teaserObj.title);
				if(teaserObj.segments) {
					arr.push("Segments: [" + teaserObj.segments.join(",") + "]");
				}
				if(teaserObj.campainName) {
					arr.push("Campaign Name: " + teaserObj.campainName);
				}
				arr.push("Page Name: " + document.title);
				arr.push("Page Url: " + window.location.href + ")");
				
				return arr.join(", ");
			}
			if(teaser) {
				var actionArr = [];
				actionArr.push(getActionData(teaser));
				site.analytics.send({category: "Segmentation - Teasers", action: actionArr.join("; ")});
			}
		}
	},
	mobile: {
		item_container: $('header .item_container'),
		sub_container: $('header .sub_container'),
		quicklinks_container: $('[role="sub-navigation"] .visible-xs'),

		init: function(){
			site.mobile.menuBtn();
			$('header .collapse').on({
				'show.bs.collapse': function(){
					$('header').addClass('shown');
					site.mobile.close();
					site.mobile.reset();
				},
				'hidden.bs.collapse': function(){
					$('header').removeClass('shown');
					site.mobile.close();
					site.mobile.reset();
				}
			});
			//
			if (site.mobile.quicklinks_container) site.mobile.quickLinks();
			//
			if ($('.btn-airline-exclusions').length > 0) site.mobile.transitModal();
			if ($('.btn-transfer-lounges').length > 0) site.mobile.transitModal();
		},
		menuBtn: function(){
			// displays sub menus
			site.mobile.item_container.find('ul a').each(function(idx, val){
				$(val).on('click', function(){
					site.mobile.item_container.hide();
					site.mobile.sub_container.show().addClass('animated slideInLeft');
					site.mobile.sub_container.find('.sub').eq(idx).show();
				});
			});
			// back button
			site.mobile.sub_container.find('.btn-back').on('click', function(){
				site.mobile.sub_container.hide().removeClass('animated slideInLeft');
				site.mobile.item_container.show().addClass('animated slideInLeft');
				site.mobile.sub_container.find('.sub').hide();
			});
		},
		quickLinks: function(){
			//
			site.mobile.quicklinks_container.find('a').each(function(){
				$(this).on('click', function(){
					$('#modal-wrapper').addClass('animated slideInLeft').show();
					$('#modal-wrapper').find('.container').empty();
					$('#modal-wrapper').find('.container').append($($(this).attr('href')).find('.row').clone());
					$('html,body').animate({ scrollTop: 0 }, 'fast');
					$('body').css({ "overflow": "hidden" });
				});
			});
			//
			$('#modal-wrapper .pull-right').on('click', function(){
				site.mobile.close();
			});
		},
		transitModal: function(){
			'use strict';
			//
			$('.btn-airline-exclusions, .btn-transfer-lounges').removeAttr('data-toggle').prop('disabled', true);
			$('.btn-airline-exclusions, .btn-transfer-lounges').on('click', function(evt){
				evt.preventDefault();
				$('#modal-wrapper').addClass('animated slideInLeft airline-ex').show();
				$('#modal-wrapper').find('.container').empty();
				$('#modal-wrapper').find('.container').append($($(this).attr('href')).find('.tbl-transit').clone());
				$('html,body').animate({ scrollTop: 0 }, 'fast');
			});
			//
			$('#modal-wrapper .pull-right').on('click', function(){
				site.mobile.close();
			});
		},
		reset: function(){
			site.mobile.item_container.show().removeClass('animated slideInLeft');
			site.mobile.sub_container.hide().removeClass('animated slideInLeft');
			site.mobile.sub_container.find('.sub').hide();
		},
		close: function(){
			$('body').css({ "overflow": "" });
			$('#modal-wrapper').removeClass('animated slideInLeft').hide();
		}
	},
	ieFixes: {
		init: function(){
			site.ieFixes.newsletter();
			site.ieFixes.shopanddine();
			site.ieFixes.aboutus();
			site.ieFixes.banner();
			//site.ieFixes.airline();
			site.ieFixes.search_result();
			site.ieFixes.ie8();
			site.ieFixes.ie9();
		},
		banner: function(){
			$('body.lt-ie9 nav[role="sub-navigation"]').addClass('ie_sub-navigation');
			$('body.lt-ie9 section[role="highlight"]').addClass('ie_highlight');
			$('body.lt-ie9 section[role="banner"]').addClass('ie_banner');
			$('body.lt-ie9 section[role="banner"] div[role="breadcrumb"]').addClass('ie_breadcrumb');
			$('body.lt-ie9 section[role="main"]').addClass('ie_main');
			// Added by SA
			$('body.lt-ie9 .ie_highlight div[role="quick-search"]').addClass('ie_quick_search');
			/* */
			$('body.lt-ie9 [role="social"]').addClass('ie_social');
		},
		aboutus: function(){
			$('body.lt-ie9 div[role="global-tabs"]').addClass('ie_global-tabs');
			$('body.lt-ie9 div[role="block-anchor"]').addClass('ie_block-anchor');
			$('body.lt-ie9 div[role="timelines"]').addClass('ie_timelines');
			$('body.lt-ie9 div[role="timelines"] li').each(function(idx, itm){
				$(itm).addClass('itm-' + idx);
			});
		},
		newsletter: function(){
			// fix footer newsletter label
			$('body.lt-ie9 #frmNewsletter label').css('display', 'inline');
		},
		shopanddine: function(){
			// fix shop and dine tab widget
			$('body.lt-ie9 .nav-tabs').each(function(idx, itm){
				if ($(itm).find('li').length === 2) {
					$(itm).find('li').css({ 'display':'inline-block', 'width':'50%' });
					$(itm).css('width', '100%');
				}
			});
		},
		airline: function(){
			var scope = $("body.lt-ie9");
			if (scope.length == 0) return;
			scope.find(".tbl-airline .tbl-wrapper tr td .visible-lg table, .tbl-airline .tbl-wrapper tr td .visible-xs table")
				.find("th:nth-child(1), tbody tr:nth-child(1) td:nth-child(1)").addClass("nth-child-1").end()
				.find("th:nth-child(2), tbody tr:nth-child(1) td:nth-child(2)").addClass("nth-child-2").end()
				.find("th:nth-child(3), tbody tr:nth-child(1) td:nth-child(3)").addClass("nth-child-3").end()
				.find("th:nth-child(4), tbody tr:nth-child(1) td:nth-child(4)").addClass("nth-child-4").end()
				.find("th:nth-child(5), tbody tr:nth-child(1) td:nth-child(5)").addClass("nth-child-5").end()
				.find("th:nth-child(6), tbody tr:nth-child(1) td:nth-child(6)").addClass("nth-child-6");
		},
		search_result: function(){
			var scope = $("body.lt-ie9");
			if (scope.length == 0) return;
			$("body.lt-ie9 .suggest_arriving table, body.lt-ie9 .suggest_departing table, .exact-flight table")
				.find("th:nth-child(1), td:nth-child(1)").addClass("nth-child-1").end()
				.find("th:nth-child(2), td:nth-child(2)").addClass("nth-child-2").end()
				.find("th:nth-child(3), td:nth-child(3)").addClass("nth-child-3").end()
				.find("th:nth-child(4), td:nth-child(4)").addClass("nth-child-4").end()
				.find("th:nth-child(5), td:nth-child(5)").addClass("nth-child-5").end()
				.find("th:nth-child(6), td:nth-child(6)").addClass("nth-child-6");
		},
		ie8: function(){
			$('.row.bordered .col-lg-4:last').css({ background: 'transparent none' });
			$('.common-section.bordered .col-lg-4:last').css({ background: 'transparent none' });
			$('.shop-location .col-sm-6.col-md-4.col-lg-4:nth-child(4n)').css({ clear: 'both' });
		},
		ie9: function(){
			$('section[role="extras"]').addClass('ie_extras');
			$('section[role="extras"] div[role="social"]').addClass('ie_extras_social');
		}
	}
};


// DOCUMENT READY
$(document).ready(function(){
	'use strict';

	site.init();
});


// PAGE FULLY LOADED
$(window).bind("load", function(){
	'use strict';

	$('section[role="banner"], .ie_banner').css({ 'visibility': 'visible' });
	site.ieFixes.airline();
	site.misc.equalHeight('#awards-accolades-2011 .thumbnail h3');
	site.misc.equalHeight(".choose-list div[class^='col-']");
	if ($('body.lt-ie9').length < 1) setTimeout(function(){ site.misc.equalHeight(".five-cols div[class^='col-']"); }, 2000);
	if ($('body.lt-ie9').length < 1) setTimeout(function(){ site.misc.equalHeight(".three-cols div[class^='col-']"); }, 2000);

	//
	$('.nav-tabs li a, ul[role="tablist"] li a').on('shown.bs.tab', function(e){
		site.misc.checkFirstLastItems.init();
		if ($(".choose-list").length > 0){
			site.misc.equalHeight(".choose-list div[class^='col-']");
		}
		if ($('body.lt-ie9').length < 1) setTimeout(function(){ site.misc.equalHeight(".five-cols div[class^='col-']"); }, 2000);
		if ($('body.lt-ie9').length < 1) setTimeout(function(){ site.misc.equalHeight(".three-cols div[class^='col-']"); }, 2000);
	});

	//
	var timeout = setTimeout(function(){
		$("img.lazyload").trigger("sporty");
		//
		site.misc.skyTrax();
		//
		if ($('body.modern.pg-errors').length > 0 || $('body.modern.page-search-noresults').length > 0)
			site.misc.shortPages();
	}, 500);

	if ($('body.modern.pg-search').length > 0) {
		setInterval(function(){
			site.misc.shortPages();
		}, 2000);
	}
});


//Smart Resize
(function($, sr){
	var debounce = function(func, threshold, execAsap){
		var timeout;
		return function debounced () {
			var obj = this, args = arguments;
			function delayed () {
				if (!execAsap)
					func.apply(obj, args);
				timeout = null;
			};
			if (timeout)
				clearTimeout(timeout);
			else if (execAsap)
				func.apply(obj, args);
			timeout = setTimeout(delayed, threshold || 200);
		};
	};
	// smartresize
	jQuery.fn[sr] = function(fn){ return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
}) (jQuery, 'smartresize');

//
$(window).smartresize(function(){
	site.misc.equalHeight('#awards-accolades-2011 .thumbnail h3');
});

//We are overriding loadTeaser function to send GA data after that.
if(CQ_Analytics && CQ_Analytics.Engine && CQ_Analytics.Engine.loadTeaser) {
	if(!CQ_Analytics.Engine.originalLoadTeaser) {
		CQ_Analytics.Engine.originalLoadTeaser = CQ_Analytics.Engine.loadTeaser;   
		CQ_Analytics.Engine.loadTeaser = function(options) {
			CQ_Analytics.Engine.originalLoadTeaser(options);
			site.analytics.segmentation(CQ_Analytics.Engine.resolveTeaser(options.teasers, options.strategy, null));
		}
	}
}
var _dev = {

	init: function(){
		'use strict';

		_dev.misc.init();
	},

	misc:{
		init:function(){
			

		}
	}
}

// DOCUMENT READY
$(document).ready(function(){
	'use strict';

	_dev.init();
});


