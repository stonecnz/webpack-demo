(()=>{var e={426:(e,r,t)=>{"use strict";t.d(r,{Z:()=>m});var n=t(81),o=t.n(n),a=t(645),s=t.n(a),c=t(667),i=t.n(c),u=new URL(t(306),t.b),l=new URL(t(449),t.b),p=s()(o()),d=i()(u),f=i()(l);p.push([e.id,'*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n  font-family: "MyFont";\r\n  src: url('+d+') format("truetype");\r\n}\r\n\r\n.name {\r\n  text-align: center;\r\n  font-family: "MyFont";\r\n  font-size: 3rem;\r\n  padding: 3rem 1rem;\r\n  color: purple;\r\n  transition: transform 0.5s ease-in-out;\r\n  border: 0.5rem solid black;\r\n  border-radius: 1rem;\r\n  width: fit-content;\r\n  margin: 5rem auto;\r\n  background: url('+f+");\r\n}\r\n\r\n.name:hover {\r\n  transform: scale(1.1);\r\n  box-shadow: 1rem 2rem 2.5rem #888;\r\n}\r\n",""]);const m=p},645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},667:e=>{"use strict";e.exports=function(e,r){return r||(r={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),r.hash&&(e+=r.hash),/["'() \t\n]|(%20)/.test(e)||r.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},522:e=>{e.exports=[["to","from","heading","body"],["Mary","John","Reminder","Call Cindy on Tuesday"],["Zoe","Bill","Reminder","Buy orange juice"],["Autumn","Lindsey","Letter","I miss you"]]},379:e=>{"use strict";var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var a={},s=[],c=0;c<e.length;c++){var i=e[c],u=n.base?i[0]+n.base:i[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=t(p),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var m=o(f,n);n.byIndex=c,r.splice(c,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=t(a[s]);r[c].references--}for(var i=n(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=i}}},569:e=>{"use strict";var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{"use strict";e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{"use strict";e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{"use strict";e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},267:e=>{e.exports={note:{to:["Mary"],from:["John"],heading:["Reminder"],body:["Call Cindy on Tuesday"]}}},209:(e,r,t)=>{"use strict";var n=t(379),o=t.n(n),a=t(795),s=t.n(a),c=t(569),i=t.n(c),u=t(565),l=t.n(u),p=t(216),d=t.n(p),f=t(589),m=t.n(f),h=t(426),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=i().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=d(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var y=t(449),g=t(267),b=t.n(g),x=t(522),T=t.n(x);const w=JSON.parse('{"T":"TOML Example","c":{"u2":"Tom Preston-Werner"}}'),M=JSON.parse('{"T":"YAML Example","c":{"u2":"Tom Preston-Werner"}}'),S=JSON.parse('{"T":"JSON5 Example","c":{"u2":"Tom Preston-Werner"}}');console.log(w.T),console.log(w.c.u2),console.log(M.T),console.log(M.c.u2),console.log(S.T),console.log(S.c.u2),document.body.appendChild(function(){const e=document.createElement("div");return(new Image).src=y,e.innerHTML=`Hi! My name is ${"Caleb"}`,e.classList.add("name"),console.log(b()),console.log(T()),e}())},306:(e,r,t)=>{"use strict";e.exports=t.p+"5cfd90f7c4f8f5f91c44.ttf"},449:(e,r,t)=>{"use strict";e.exports=t.p+"bd24837f3d8ba5959e76.gif"}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={id:n,exports:{}};return e[n](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t(209)})();