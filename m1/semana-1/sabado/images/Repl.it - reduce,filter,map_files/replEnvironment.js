(window.webpackJsonp=window.webpackJsonp||[]).push([[62,5],{1000:function(e,t,r){"use strict";var n=t;function o(){n.Reader._configure(n.BufferReader),n.util._configure()}n.build="minimal",n.Writer=r(769),n.BufferWriter=r(1009),n.Reader=r(770),n.BufferReader=r(1010),n.util=r(216),n.rpc=r(1011),n.roots=r(1013),n.configure=o,n.Writer._configure(n.BufferWriter),o()},1001:function(e,t,r){"use strict";e.exports=function(e,t){var r=new Array(arguments.length-1),n=0,o=2,a=!0;for(;o<arguments.length;)r[n++]=arguments[o++];return new Promise(function(o,i){r[n]=function(e){if(a)if(a=!1,e)i(e);else{for(var t=new Array(arguments.length-1),r=0;r<t.length;)t[r++]=arguments[r];o.apply(null,t)}};try{e.apply(t||null,r)}catch(e){a&&(a=!1,i(e))}})}},1002:function(e,t,r){"use strict";var n=t;n.length=function(e){var t=e.length;if(!t)return 0;for(var r=0;--t%4>1&&"="===e.charAt(t);)++r;return Math.ceil(3*e.length)/4-r};for(var o=new Array(64),a=new Array(123),i=0;i<64;)a[o[i]=i<26?i+65:i<52?i+71:i<62?i-4:i-59|43]=i++;n.encode=function(e,t,r){for(var n,a=null,i=[],s=0,c=0;t<r;){var u=e[t++];switch(c){case 0:i[s++]=o[u>>2],n=(3&u)<<4,c=1;break;case 1:i[s++]=o[n|u>>4],n=(15&u)<<2,c=2;break;case 2:i[s++]=o[n|u>>6],i[s++]=o[63&u],c=0}s>8191&&((a||(a=[])).push(String.fromCharCode.apply(String,i)),s=0)}return c&&(i[s++]=o[n],i[s++]=61,1===c&&(i[s++]=61)),a?(s&&a.push(String.fromCharCode.apply(String,i.slice(0,s))),a.join("")):String.fromCharCode.apply(String,i.slice(0,s))};n.decode=function(e,t,r){for(var n,o=r,i=0,s=0;s<e.length;){var c=e.charCodeAt(s++);if(61===c&&i>1)break;if(void 0===(c=a[c]))throw Error("invalid encoding");switch(i){case 0:n=c,i=1;break;case 1:t[r++]=n<<2|(48&c)>>4,n=c,i=2;break;case 2:t[r++]=(15&n)<<4|(60&c)>>2,n=c,i=3;break;case 3:t[r++]=(3&n)<<6|c,i=0}}if(1===i)throw Error("invalid encoding");return r-o},n.test=function(e){return/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)}},1003:function(e,t,r){"use strict";function n(){this._listeners={}}e.exports=n,n.prototype.on=function(e,t,r){return(this._listeners[e]||(this._listeners[e]=[])).push({fn:t,ctx:r||this}),this},n.prototype.off=function(e,t){if(void 0===e)this._listeners={};else if(void 0===t)this._listeners[e]=[];else for(var r=this._listeners[e],n=0;n<r.length;)r[n].fn===t?r.splice(n,1):++n;return this},n.prototype.emit=function(e){var t=this._listeners[e];if(t){for(var r=[],n=1;n<arguments.length;)r.push(arguments[n++]);for(n=0;n<t.length;)t[n].fn.apply(t[n++].ctx,r)}return this}},1004:function(e,t,r){"use strict";function n(e){return"undefined"!=typeof Float32Array?function(){var t=new Float32Array([-0]),r=new Uint8Array(t.buffer),n=128===r[3];function o(e,n,o){t[0]=e,n[o]=r[0],n[o+1]=r[1],n[o+2]=r[2],n[o+3]=r[3]}function a(e,n,o){t[0]=e,n[o]=r[3],n[o+1]=r[2],n[o+2]=r[1],n[o+3]=r[0]}function i(e,n){return r[0]=e[n],r[1]=e[n+1],r[2]=e[n+2],r[3]=e[n+3],t[0]}function s(e,n){return r[3]=e[n],r[2]=e[n+1],r[1]=e[n+2],r[0]=e[n+3],t[0]}e.writeFloatLE=n?o:a,e.writeFloatBE=n?a:o,e.readFloatLE=n?i:s,e.readFloatBE=n?s:i}():function(){function t(e,t,r,n){var o=t<0?1:0;if(o&&(t=-t),0===t)e(1/t>0?0:2147483648,r,n);else if(isNaN(t))e(2143289344,r,n);else if(t>3.4028234663852886e38)e((o<<31|2139095040)>>>0,r,n);else if(t<1.1754943508222875e-38)e((o<<31|Math.round(t/1.401298464324817e-45))>>>0,r,n);else{var a=Math.floor(Math.log(t)/Math.LN2);e((o<<31|a+127<<23|8388607&Math.round(t*Math.pow(2,-a)*8388608))>>>0,r,n)}}function r(e,t,r){var n=e(t,r),o=2*(n>>31)+1,a=n>>>23&255,i=8388607&n;return 255===a?i?NaN:o*(1/0):0===a?1.401298464324817e-45*o*i:o*Math.pow(2,a-150)*(i+8388608)}e.writeFloatLE=t.bind(null,o),e.writeFloatBE=t.bind(null,a),e.readFloatLE=r.bind(null,i),e.readFloatBE=r.bind(null,s)}(),"undefined"!=typeof Float64Array?function(){var t=new Float64Array([-0]),r=new Uint8Array(t.buffer),n=128===r[7];function o(e,n,o){t[0]=e,n[o]=r[0],n[o+1]=r[1],n[o+2]=r[2],n[o+3]=r[3],n[o+4]=r[4],n[o+5]=r[5],n[o+6]=r[6],n[o+7]=r[7]}function a(e,n,o){t[0]=e,n[o]=r[7],n[o+1]=r[6],n[o+2]=r[5],n[o+3]=r[4],n[o+4]=r[3],n[o+5]=r[2],n[o+6]=r[1],n[o+7]=r[0]}function i(e,n){return r[0]=e[n],r[1]=e[n+1],r[2]=e[n+2],r[3]=e[n+3],r[4]=e[n+4],r[5]=e[n+5],r[6]=e[n+6],r[7]=e[n+7],t[0]}function s(e,n){return r[7]=e[n],r[6]=e[n+1],r[5]=e[n+2],r[4]=e[n+3],r[3]=e[n+4],r[2]=e[n+5],r[1]=e[n+6],r[0]=e[n+7],t[0]}e.writeDoubleLE=n?o:a,e.writeDoubleBE=n?a:o,e.readDoubleLE=n?i:s,e.readDoubleBE=n?s:i}():function(){function t(e,t,r,n,o,a){var i=n<0?1:0;if(i&&(n=-n),0===n)e(0,o,a+t),e(1/n>0?0:2147483648,o,a+r);else if(isNaN(n))e(0,o,a+t),e(2146959360,o,a+r);else if(n>1.7976931348623157e308)e(0,o,a+t),e((i<<31|2146435072)>>>0,o,a+r);else{var s;if(n<2.2250738585072014e-308)e((s=n/5e-324)>>>0,o,a+t),e((i<<31|s/4294967296)>>>0,o,a+r);else{var c=Math.floor(Math.log(n)/Math.LN2);1024===c&&(c=1023),e(4503599627370496*(s=n*Math.pow(2,-c))>>>0,o,a+t),e((i<<31|c+1023<<20|1048576*s&1048575)>>>0,o,a+r)}}}function r(e,t,r,n,o){var a=e(n,o+t),i=e(n,o+r),s=2*(i>>31)+1,c=i>>>20&2047,u=4294967296*(1048575&i)+a;return 2047===c?u?NaN:s*(1/0):0===c?5e-324*s*u:s*Math.pow(2,c-1075)*(u+4503599627370496)}e.writeDoubleLE=t.bind(null,o,0,4),e.writeDoubleBE=t.bind(null,a,4,0),e.readDoubleLE=r.bind(null,i,0,4),e.readDoubleBE=r.bind(null,s,4,0)}(),e}function o(e,t,r){t[r]=255&e,t[r+1]=e>>>8&255,t[r+2]=e>>>16&255,t[r+3]=e>>>24}function a(e,t,r){t[r]=e>>>24,t[r+1]=e>>>16&255,t[r+2]=e>>>8&255,t[r+3]=255&e}function i(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0}function s(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}e.exports=n(n)},1005:function(module,exports,__webpack_require__){"use strict";function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(e){}return null}module.exports=inquire},1006:function(e,t,r){"use strict";var n=t;n.length=function(e){for(var t=0,r=0,n=0;n<e.length;++n)(r=e.charCodeAt(n))<128?t+=1:r<2048?t+=2:55296==(64512&r)&&56320==(64512&e.charCodeAt(n+1))?(++n,t+=4):t+=3;return t},n.read=function(e,t,r){if(r-t<1)return"";for(var n,o=null,a=[],i=0;t<r;)(n=e[t++])<128?a[i++]=n:n>191&&n<224?a[i++]=(31&n)<<6|63&e[t++]:n>239&&n<365?(n=((7&n)<<18|(63&e[t++])<<12|(63&e[t++])<<6|63&e[t++])-65536,a[i++]=55296+(n>>10),a[i++]=56320+(1023&n)):a[i++]=(15&n)<<12|(63&e[t++])<<6|63&e[t++],i>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,a)),i=0);return o?(i&&o.push(String.fromCharCode.apply(String,a.slice(0,i))),o.join("")):String.fromCharCode.apply(String,a.slice(0,i))},n.write=function(e,t,r){for(var n,o,a=r,i=0;i<e.length;++i)(n=e.charCodeAt(i))<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=63&n|128):55296==(64512&n)&&56320==(64512&(o=e.charCodeAt(i+1)))?(n=65536+((1023&n)<<10)+(1023&o),++i,t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=63&n|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=63&n|128);return r-a}},1007:function(e,t,r){"use strict";e.exports=function(e,t,r){var n=r||8192,o=n>>>1,a=null,i=n;return function(r){if(r<1||r>o)return e(r);i+r>n&&(a=e(n),i=0);var s=t.call(a,i,i+=r);return 7&i&&(i=1+(7|i)),s}}},1008:function(e,t,r){"use strict";e.exports=o;var n=r(216);function o(e,t){this.lo=e>>>0,this.hi=t>>>0}var a=o.zero=new o(0,0);a.toNumber=function(){return 0},a.zzEncode=a.zzDecode=function(){return this},a.length=function(){return 1};var i=o.zeroHash="\0\0\0\0\0\0\0\0";o.fromNumber=function(e){if(0===e)return a;var t=e<0;t&&(e=-e);var r=e>>>0,n=(e-r)/4294967296>>>0;return t&&(n=~n>>>0,r=~r>>>0,++r>4294967295&&(r=0,++n>4294967295&&(n=0))),new o(r,n)},o.from=function(e){if("number"==typeof e)return o.fromNumber(e);if(n.isString(e)){if(!n.Long)return o.fromNumber(parseInt(e,10));e=n.Long.fromString(e)}return e.low||e.high?new o(e.low>>>0,e.high>>>0):a},o.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var t=1+~this.lo>>>0,r=~this.hi>>>0;return t||(r=r+1>>>0),-(t+4294967296*r)}return this.lo+4294967296*this.hi},o.prototype.toLong=function(e){return n.Long?new n.Long(0|this.lo,0|this.hi,Boolean(e)):{low:0|this.lo,high:0|this.hi,unsigned:Boolean(e)}};var s=String.prototype.charCodeAt;o.fromHash=function(e){return e===i?a:new o((s.call(e,0)|s.call(e,1)<<8|s.call(e,2)<<16|s.call(e,3)<<24)>>>0,(s.call(e,4)|s.call(e,5)<<8|s.call(e,6)<<16|s.call(e,7)<<24)>>>0)},o.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},o.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this},o.prototype.zzDecode=function(){var e=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this},o.prototype.length=function(){var e=this.lo,t=(this.lo>>>28|this.hi<<4)>>>0,r=this.hi>>>24;return 0===r?0===t?e<16384?e<128?1:2:e<2097152?3:4:t<16384?t<128?5:6:t<2097152?7:8:r<128?9:10}},1009:function(e,t,r){"use strict";e.exports=i;var n=r(769);(i.prototype=Object.create(n.prototype)).constructor=i;var o=r(216),a=o.Buffer;function i(){n.call(this)}i.alloc=function(e){return(i.alloc=o._Buffer_allocUnsafe)(e)};var s=a&&a.prototype instanceof Uint8Array&&"set"===a.prototype.set.name?function(e,t,r){t.set(e,r)}:function(e,t,r){if(e.copy)e.copy(t,r,0,e.length);else for(var n=0;n<e.length;)t[r++]=e[n++]};function c(e,t,r){e.length<40?o.utf8.write(e,t,r):t.utf8Write(e,r)}i.prototype.bytes=function(e){o.isString(e)&&(e=o._Buffer_from(e,"base64"));var t=e.length>>>0;return this.uint32(t),t&&this._push(s,t,e),this},i.prototype.string=function(e){var t=a.byteLength(e);return this.uint32(t),t&&this._push(c,t,e),this}},1010:function(e,t,r){"use strict";e.exports=a;var n=r(770);(a.prototype=Object.create(n.prototype)).constructor=a;var o=r(216);function a(e){n.call(this,e)}o.Buffer&&(a.prototype._slice=o.Buffer.prototype.slice),a.prototype.string=function(){var e=this.uint32();return this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+e,this.len))}},1011:function(e,t,r){"use strict";t.Service=r(1012)},1012:function(e,t,r){"use strict";e.exports=o;var n=r(216);function o(e,t,r){if("function"!=typeof e)throw TypeError("rpcImpl must be a function");n.EventEmitter.call(this),this.rpcImpl=e,this.requestDelimited=Boolean(t),this.responseDelimited=Boolean(r)}(o.prototype=Object.create(n.EventEmitter.prototype)).constructor=o,o.prototype.rpcCall=function e(t,r,o,a,i){if(!a)throw TypeError("request must be specified");var s=this;if(!i)return n.asPromise(e,s,t,r,o,a);if(s.rpcImpl)try{return s.rpcImpl(t,r[s.requestDelimited?"encodeDelimited":"encode"](a).finish(),function(e,r){if(e)return s.emit("error",e,t),i(e);if(null!==r){if(!(r instanceof o))try{r=o[s.responseDelimited?"decodeDelimited":"decode"](r)}catch(e){return s.emit("error",e,t),i(e)}return s.emit("data",r,t),i(null,r)}s.end(!0)})}catch(e){return s.emit("error",e,t),void setTimeout(function(){i(e)},0)}else setTimeout(function(){i(Error("already ended"))},0)},o.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}},1013:function(e,t,r){"use strict";e.exports={}},1014:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1015),o=r(335);function a(e){var t=o.parse(e),r=t.protocol,n=t.slashes,a=t.auth,i=t.host,s=t.pathname;return{uri:o.format({protocol:r,slashes:n,auth:a,host:i,query:{ordered:"1"}}),path:null!=s?s:"/"}}t.splitHref=a;var i=4,s=new Map([["opening",0],["open",1],["closing",2],["closed",3]]),c=function(){function e(e,t){var r=this;if(this.CLOSED=3,this.CLOSING=2,this.OPEN=1,this.CONNECTING=0,t)throw new Error("Passing protocols is not implemented");var o=a(e),s=o.uri,c=o.path;this.onopen=null,this.onclose=null,this.onmessage=null,this.onerror=null,this.eioSocket=n(s,{path:c,transports:["polling"]}),this.url=e,this.extensions="",this.protocol="",this.bufferedAmount=0,this.binaryType="blob",this.readyState=0,this.incomingSequence=0,this.outOfOrderQueue={},this.outgoingSequence=0,this.setReadyState(),this.eioSocket.on("open",function(){if(r.setReadyState(),null!=r.onopen){var e=new Event("open");r.onopen.call(r,e)}}),this.eioSocket.on("close",function(e){if(r.setReadyState(),null!=r.onclose){var t=new CloseEvent("close",{reason:e,code:1001,wasClean:!1});r.onclose.call(r,t)}}),this.eioSocket.on("message",function(e){if(r.setReadyState(),null!=r.onmessage){if("string"==typeof e)throw new Error("expected data to be ArrayBuffer not string");var t=new DataView(e).getUint32(0);if(r.incomingSequence===t){r.incomingSequence=t+1;var n=new MessageEvent("message",{data:e.slice(i)}),o=r.onmessage.bind(r);o(n);var a=Object.keys(r.outOfOrderQueue);a.length>0&&(a.sort().forEach(function(e){o(new MessageEvent("message",{data:r.outOfOrderQueue[+e]})),r.incomingSequence=+e+1}),r.outOfOrderQueue={})}else r.outOfOrderQueue[t]=e.slice(i)}}),this.eioSocket.on("error",function(){if(r.setReadyState(),null!=r.onerror){var e=new Event("error");r.onerror.call(r,e)}})}return e.prototype.setReadyState=function(){this.readyState=s.get(this.eioSocket.readyState)},e.prototype.send=function(e){var t=new ArrayBuffer(i+e.byteLength);new Uint8Array(t).set(new Uint8Array(e),i),new DataView(t).setUint32(0,this.outgoingSequence),this.outgoingSequence+=1,this.eioSocket.send(t),this.setReadyState()},e.prototype.close=function(){this.onmessage=null,this.eioSocket.close(),this.setReadyState()},e.prototype.addEventListener=function(){throw new Error("Not Implemented, please use onmessage, onopen, onerror, or onclose")},e.prototype.removeEventListener=function(){throw new Error("Not Implemented")},e.prototype.dispatchEvent=function(){throw new Error("Not Implemented")},e}();t.EIOCompat=c},1015:function(e,t,r){e.exports=r(1016),e.exports.parser=r(331)},1016:function(e,t,r){var n=r(772),o=r(679),a=r(403)("engine.io-client:socket"),i=r(905),s=r(331),c=r(1032),u=r(680);function l(e,t){if(!(this instanceof l))return new l(e,t);t=t||{},e&&"object"==typeof e&&(t=e,e=null),e?(e=c(e),t.hostname=e.host,t.secure="https"===e.protocol||"wss"===e.protocol,t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=c(t.host).host),this.secure=null!=t.secure?t.secure:"undefined"!=typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.agent=t.agent||!1,this.hostname=t.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=t.query||{},"string"==typeof this.query&&(this.query=u.decode(this.query)),this.upgrade=!1!==t.upgrade,this.path=(t.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!t.forceJSONP,this.jsonp=!1!==t.jsonp,this.forceBase64=!!t.forceBase64,this.enablesXDR=!!t.enablesXDR,this.withCredentials=!1!==t.withCredentials,this.timestampParam=t.timestampParam||"t",this.timestampRequests=t.timestampRequests,this.transports=t.transports||["polling","websocket"],this.transportOptions=t.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=t.policyPort||843,this.rememberUpgrade=t.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=t.onlyBinaryUpgrades,this.perMessageDeflate=!1!==t.perMessageDeflate&&(t.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=t.pfx||null,this.key=t.key||null,this.passphrase=t.passphrase||null,this.cert=t.cert||null,this.ca=t.ca||null,this.ciphers=t.ciphers||null,this.rejectUnauthorized=void 0===t.rejectUnauthorized||t.rejectUnauthorized,this.forceNode=!!t.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(t.extraHeaders&&Object.keys(t.extraHeaders).length>0&&(this.extraHeaders=t.extraHeaders),t.localAddress&&(this.localAddress=t.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}e.exports=l,l.priorWebsocketSuccess=!1,o(l.prototype),l.protocol=s.protocol,l.Socket=l,l.Transport=r(678),l.transports=r(772),l.parser=r(331),l.prototype.createTransport=function(e){a('creating transport "%s"',e);var t=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}(this.query);t.EIO=s.protocol,t.transport=e;var r=this.transportOptions[e]||{};return this.id&&(t.sid=this.id),new n[e]({query:t,socket:this,agent:r.agent||this.agent,hostname:r.hostname||this.hostname,port:r.port||this.port,secure:r.secure||this.secure,path:r.path||this.path,forceJSONP:r.forceJSONP||this.forceJSONP,jsonp:r.jsonp||this.jsonp,forceBase64:r.forceBase64||this.forceBase64,enablesXDR:r.enablesXDR||this.enablesXDR,withCredentials:r.withCredentials||this.withCredentials,timestampRequests:r.timestampRequests||this.timestampRequests,timestampParam:r.timestampParam||this.timestampParam,policyPort:r.policyPort||this.policyPort,pfx:r.pfx||this.pfx,key:r.key||this.key,passphrase:r.passphrase||this.passphrase,cert:r.cert||this.cert,ca:r.ca||this.ca,ciphers:r.ciphers||this.ciphers,rejectUnauthorized:r.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:r.perMessageDeflate||this.perMessageDeflate,extraHeaders:r.extraHeaders||this.extraHeaders,forceNode:r.forceNode||this.forceNode,localAddress:r.localAddress||this.localAddress,requestTimeout:r.requestTimeout||this.requestTimeout,protocols:r.protocols||void 0,isReactNative:this.isReactNative})},l.prototype.open=function(){var e;if(this.rememberUpgrade&&l.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))e="websocket";else{if(0===this.transports.length){var t=this;return void setTimeout(function(){t.emit("error","No transports available")},0)}e=this.transports[0]}this.readyState="opening";try{e=this.createTransport(e)}catch(e){return this.transports.shift(),void this.open()}e.open(),this.setTransport(e)},l.prototype.setTransport=function(e){a("setting transport %s",e.name);var t=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=e,e.on("drain",function(){t.onDrain()}).on("packet",function(e){t.onPacket(e)}).on("error",function(e){t.onError(e)}).on("close",function(){t.onClose("transport close")})},l.prototype.probe=function(e){a('probing transport "%s"',e);var t=this.createTransport(e,{probe:1}),r=!1,n=this;function o(){if(n.onlyBinaryUpgrades){var o=!this.supportsBinary&&n.transport.supportsBinary;r=r||o}r||(a('probe transport "%s" opened',e),t.send([{type:"ping",data:"probe"}]),t.once("packet",function(o){if(!r)if("pong"===o.type&&"probe"===o.data){if(a('probe transport "%s" pong',e),n.upgrading=!0,n.emit("upgrading",t),!t)return;l.priorWebsocketSuccess="websocket"===t.name,a('pausing current transport "%s"',n.transport.name),n.transport.pause(function(){r||"closed"!==n.readyState&&(a("changing transport and sending upgrade packet"),p(),n.setTransport(t),t.send([{type:"upgrade"}]),n.emit("upgrade",t),t=null,n.upgrading=!1,n.flush())})}else{a('probe transport "%s" failed',e);var i=new Error("probe error");i.transport=t.name,n.emit("upgradeError",i)}}))}function i(){r||(r=!0,p(),t.close(),t=null)}function s(r){var o=new Error("probe error: "+r);o.transport=t.name,i(),a('probe transport "%s" failed because of error: %s',e,r),n.emit("upgradeError",o)}function c(){s("transport closed")}function u(){s("socket closed")}function d(e){t&&e.name!==t.name&&(a('"%s" works - aborting "%s"',e.name,t.name),i())}function p(){t.removeListener("open",o),t.removeListener("error",s),t.removeListener("close",c),n.removeListener("close",u),n.removeListener("upgrading",d)}l.priorWebsocketSuccess=!1,t.once("open",o),t.once("error",s),t.once("close",c),this.once("close",u),this.once("upgrading",d),t.open()},l.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",l.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var e=0,t=this.upgrades.length;e<t;e++)this.probe(this.upgrades[e])}},l.prototype.onPacket=function(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',e.type,e.data),this.emit("packet",e),this.emit("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emit("data",e.data),this.emit("message",e.data)}else a('packet received with socket readyState "%s"',this.readyState)},l.prototype.onHandshake=function(e){this.emit("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},l.prototype.onHeartbeat=function(e){clearTimeout(this.pingTimeoutTimer);var t=this;t.pingTimeoutTimer=setTimeout(function(){"closed"!==t.readyState&&t.onClose("ping timeout")},e||t.pingInterval+t.pingTimeout)},l.prototype.setPing=function(){var e=this;clearTimeout(e.pingIntervalTimer),e.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",e.pingTimeout),e.ping(),e.onHeartbeat(e.pingTimeout)},e.pingInterval)},l.prototype.ping=function(){var e=this;this.sendPacket("ping",function(){e.emit("ping")})},l.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},l.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},l.prototype.write=l.prototype.send=function(e,t,r){return this.sendPacket("message",e,t,r),this},l.prototype.sendPacket=function(e,t,r,n){if("function"==typeof t&&(n=t,t=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){(r=r||{}).compress=!1!==r.compress;var o={type:e,data:t,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},l.prototype.close=function(){if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var e=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}function t(){e.onClose("forced close"),a("socket closing - telling transport to close"),e.transport.close()}function r(){e.removeListener("upgrade",r),e.removeListener("upgradeError",r),t()}function n(){e.once("upgrade",r),e.once("upgradeError",r)}return this},l.prototype.onError=function(e){a("socket error %j",e),l.priorWebsocketSuccess=!1,this.emit("error",e),this.onClose("transport error",e)},l.prototype.onClose=function(e,t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',e);clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",e,t),this.writeBuffer=[],this.prevBufferLen=0}},l.prototype.filterUpgrades=function(e){for(var t=[],r=0,n=e.length;r<n;r++)~i(this.transports,e[r])&&t.push(e[r]);return t}},1017:function(e,t){try{e.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(t){e.exports=!1}},1018:function(e,t,r){var n=r(677),o=r(773),a=r(679),i=r(402),s=r(403)("engine.io-client:polling-xhr");function c(){}function u(e){if(o.call(this,e),this.requestTimeout=e.requestTimeout,this.extraHeaders=e.extraHeaders,"undefined"!=typeof location){var t="https:"===location.protocol,r=location.port;r||(r=t?443:80),this.xd="undefined"!=typeof location&&e.hostname!==location.hostname||r!==e.port,this.xs=e.secure!==t}}function l(e){this.method=e.method||"GET",this.uri=e.uri,this.xd=!!e.xd,this.xs=!!e.xs,this.async=!1!==e.async,this.data=void 0!==e.data?e.data:null,this.agent=e.agent,this.isBinary=e.isBinary,this.supportsBinary=e.supportsBinary,this.enablesXDR=e.enablesXDR,this.withCredentials=e.withCredentials,this.requestTimeout=e.requestTimeout,this.pfx=e.pfx,this.key=e.key,this.passphrase=e.passphrase,this.cert=e.cert,this.ca=e.ca,this.ciphers=e.ciphers,this.rejectUnauthorized=e.rejectUnauthorized,this.extraHeaders=e.extraHeaders,this.create()}if(e.exports=u,e.exports.Request=l,i(u,o),u.prototype.supportsBinary=!0,u.prototype.request=function(e){return(e=e||{}).uri=this.uri(),e.xd=this.xd,e.xs=this.xs,e.agent=this.agent||!1,e.supportsBinary=this.supportsBinary,e.enablesXDR=this.enablesXDR,e.withCredentials=this.withCredentials,e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized,e.requestTimeout=this.requestTimeout,e.extraHeaders=this.extraHeaders,new l(e)},u.prototype.doWrite=function(e,t){var r="string"!=typeof e&&void 0!==e,n=this.request({method:"POST",data:e,isBinary:r}),o=this;n.on("success",t),n.on("error",function(e){o.onError("xhr post error",e)}),this.sendXhr=n},u.prototype.doPoll=function(){s("xhr poll");var e=this.request(),t=this;e.on("data",function(e){t.onData(e)}),e.on("error",function(e){t.onError("xhr poll error",e)}),this.pollXhr=e},a(l.prototype),l.prototype.create=function(){var e={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized;var t=this.xhr=new n(e),r=this;try{s("xhr open %s: %s",this.method,this.uri),t.open(this.method,this.uri,this.async);try{if(this.extraHeaders)for(var o in t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0),this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&t.setRequestHeader(o,this.extraHeaders[o])}catch(e){}if("POST"===this.method)try{this.isBinary?t.setRequestHeader("Content-type","application/octet-stream"):t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(e){}try{t.setRequestHeader("Accept","*/*")}catch(e){}"withCredentials"in t&&(t.withCredentials=this.withCredentials),this.requestTimeout&&(t.timeout=this.requestTimeout),this.hasXDR()?(t.onload=function(){r.onLoad()},t.onerror=function(){r.onError(t.responseText)}):t.onreadystatechange=function(){if(2===t.readyState)try{var e=t.getResponseHeader("Content-Type");(r.supportsBinary&&"application/octet-stream"===e||"application/octet-stream; charset=UTF-8"===e)&&(t.responseType="arraybuffer")}catch(e){}4===t.readyState&&(200===t.status||1223===t.status?r.onLoad():setTimeout(function(){r.onError("number"==typeof t.status?t.status:0)},0))},s("xhr data %s",this.data),t.send(this.data)}catch(e){return void setTimeout(function(){r.onError(e)},0)}"undefined"!=typeof document&&(this.index=l.requestsCount++,l.requests[this.index]=this)},l.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},l.prototype.onData=function(e){this.emit("data",e),this.onSuccess()},l.prototype.onError=function(e){this.emit("error",e),this.cleanup(!0)},l.prototype.cleanup=function(e){if(void 0!==this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=c:this.xhr.onreadystatechange=c,e)try{this.xhr.abort()}catch(e){}"undefined"!=typeof document&&delete l.requests[this.index],this.xhr=null}},l.prototype.onLoad=function(){var e;try{var t;try{t=this.xhr.getResponseHeader("Content-Type")}catch(e){}e=("application/octet-stream"===t||"application/octet-stream; charset=UTF-8"===t)&&this.xhr.response||this.xhr.responseText}catch(e){this.onError(e)}null!=e&&this.onData(e)},l.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},l.prototype.abort=function(){this.cleanup()},l.requestsCount=0,l.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",p);else if("function"==typeof addEventListener){var d="onpagehide"in self?"pagehide":"unload";addEventListener(d,p,!1)}function p(){for(var e in l.requests)l.requests.hasOwnProperty(e)&&l.requests[e].abort()}},1019:function(e,t){e.exports=Object.keys||function(e){var t=[],r=Object.prototype.hasOwnProperty;for(var n in e)r.call(e,n)&&t.push(n);return t}},1020:function(e,t,r){(function(t){var n=r(1021),o=Object.prototype.toString,a="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===o.call(Blob),i="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===o.call(File);e.exports=function e(r){if(!r||"object"!=typeof r)return!1;if(n(r)){for(var o=0,s=r.length;o<s;o++)if(e(r[o]))return!0;return!1}if("function"==typeof t&&t.isBuffer&&t.isBuffer(r)||"function"==typeof ArrayBuffer&&r instanceof ArrayBuffer||a&&r instanceof Blob||i&&r instanceof File)return!0;if(r.toJSON&&"function"==typeof r.toJSON&&1===arguments.length)return e(r.toJSON(),!0);for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)&&e(r[c]))return!0;return!1}}).call(this,r(80).Buffer)},1021:function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},1022:function(e,t){e.exports=function(e,t,r){var n=e.byteLength;if(t=t||0,r=r||n,e.slice)return e.slice(t,r);if(t<0&&(t+=n),r<0&&(r+=n),r>n&&(r=n),t>=n||t>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(e),a=new Uint8Array(r-t),i=t,s=0;i<r;i++,s++)a[s]=o[i];return a.buffer}},1023:function(e,t){function r(){}e.exports=function(e,t,n){var o=!1;return n=n||r,a.count=e,0===e?t():a;function a(e,r){if(a.count<=0)throw new Error("after called too many times");--a.count,e?(o=!0,t(e),t=n):0!==a.count||o||t(null,r)}}},1024:function(e,t){
/*! https://mths.be/utf8js v2.1.2 by @mathias */
//# sourceMappingURL=replEnvironment.js.map