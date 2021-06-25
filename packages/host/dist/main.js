(()=>{var e,t,r={561:(e,t,r)=>{"use strict";const n=single-spa;var o=r.t(n,2);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p="undefined"!=typeof window;function f(e,t){if("object"!==a(t)||Array.isArray(t)||null===t)throw Error("Invalid ".concat(e,": received ").concat(Array.isArray(t)?"array":t," but expected a plain object"))}function v(e,t){if("boolean"!=typeof t)throw Error("Invalid ".concat(e,": received ").concat(a(t),", but expected a boolean"))}function h(e,t,r,n){if(!n){var o=Object.keys(t),a=[];o.forEach((function(e){r.indexOf(e)<0&&a.push(e)})),a.length>0&&console.warn(Error("Invalid ".concat(e,": received invalid properties '").concat(a.join(", "),"', but valid properties are ").concat(r.join(", "))))}}function m(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("string"!=typeof t||r&&""===t.trim())throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected a").concat(r?" non-blank":""," string"))}function y(e,t){if(m(e,t),t.indexOf("/")<0)throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an absolute path that starts with /"))}function b(e,t,r){if(!Array.isArray(t)&&("object"!==a(a(t))||"number"!==t.length))throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an array"));for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];for(var c=0;c<t.length;c++)r.apply(void 0,[t[c],"".concat(e,"[").concat(c,"]")].concat(o))}function g(e,t){var r;return"/"===(r="/"===e.substr(-1)?"/"===t[0]?e+t.slice(1):e+t:"/"===t[0]?e+t:e+"/"+t).substr(-1)&&r.length>1&&(r=r.slice(0,r.length-1)),r}function w(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return e[r];return null}var E=Object.prototype.hasOwnProperty.call(o,"default")?Object.getOwnPropertyDescriptor(o,"default").value.pathToActiveWhen:n.pathToActiveWhen,O="undefined"!=typeof Symbol?Symbol():"@";function N(e,t){if(p)return e.getAttribute(t);var r=w(e.attrs,(function(e){return e.name===t.toLowerCase()}));return r?r.value:null}function P(e,t){return p?e.hasAttribute(t):e.attrs.some((function(e){return e.name===t}))}function A(e,t,r){if("application"===e.nodeName.toLowerCase()){if(e.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var n={type:"application",name:N(e,"name")},o=N(e,"loader");if(o)if(t.loaders&&t.loaders.hasOwnProperty(o))n.loader=t.loaders[o];else if(p)throw Error("Application loader '".concat(o,"' was not defined in the htmlLayoutData"));var a=N(e,"error");if(a)if(t.errors&&t.errors.hasOwnProperty(a))n.error=t.errors[a];else if(p)throw Error("Application error handler '".concat(o,"' was not defined in the htmlLayoutData"));return j(e,n,t),[n]}if("route"===e.nodeName.toLowerCase()){var i={type:"route",routes:[]},c=N(e,"path");c&&(i.path=c),P(e,"default")&&(i.default=!0),P(e,"exact")&&(i.exact=!0),j(e,i,t);for(var u=0;u<e.childNodes.length;u++){var l;(l=i.routes).push.apply(l,s(A(e.childNodes[u],t,r)))}return[i]}if("redirect"===e.nodeName.toLowerCase())return r.redirects[g("/",N(e,"from"))]=g("/",N(e,"to")),[];if("undefined"!=typeof Node&&e instanceof Node){if(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())return[];if(e.childNodes&&e.childNodes.length>0){e.routes=[];for(var d=0;d<e.childNodes.length;d++){var f;(f=e.routes).push.apply(f,s(A(e.childNodes[d],t,r)))}}return[e]}if(e.childNodes){for(var v={type:e.nodeName.toLowerCase(),routes:[],attrs:e.attrs},h=0;h<e.childNodes.length;h++){var m;(m=v.routes).push.apply(m,s(A(e.childNodes[h],t,r)))}return[v]}return"#comment"===e.nodeName?[{type:"#comment",value:e.data}]:"#text"===e.nodeName?[{type:"#text",value:e.value}]:void 0}function j(e,t,r){for(var n=(N(e,"props")||"").split(","),o=0;o<n.length;o++){var a=n[o].trim();if(0!==a.length)if(t.props||(t.props={}),r.props&&r.props.hasOwnProperty(a))t.props[a]=r.props[a];else{if(p)throw Error("Prop '".concat(a,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));t.props[a]=O}}}function S(e){return{bootstrap:function(){return Promise.resolve()},mount:function(t){return Promise.resolve().then((function(){t.domElement.innerHTML=e}))},unmount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=""}))}}}function C(e){var t=e.location,r=e.routes,n=e.parentContainer,o=e.previousSibling,a=e.shouldMount,i=e.applicationContainers;return r.forEach((function(e,r){if("application"===e.type){if(a){var c,u=W(e.name);i[e.name]?c=i[e.name]:document.getElementById(u)?c=document.getElementById(u):(c=document.createElement("div")).id=u,L(c,n,o),o=c}}else if("route"===e.type)o=C({location:t,routes:e.routes,parentContainer:n,previousSibling:o,shouldMount:a&&e.activeWhen(t),applicationContainers:i});else if(e instanceof Node||"string"==typeof e.type)if(a){if(!e.connectedNode){var s=e instanceof Node?e.cloneNode(!1):I(e);e.connectedNode=s}L(e.connectedNode,n,o),e.routes&&C({location:t,routes:e.routes,parentContainer:e.connectedNode,previousSibling:null,shouldMount:a,applicationContainers:i}),o=e.connectedNode}else(l=e.connectedNode)&&(l.remove?l.remove():l.parentNode.removeChild(l)),delete e.connectedNode;var l})),o}function x(e){for(var t=e.applicationName,r=e.location,n=e.routes,o=0;o<n.length;o++){var a=n[o];if("application"===a.type){if(a.name===t)return a}else if("route"===a.type){if(a.activeWhen(r)){var i=x({applicationName:t,location:r,routes:a.routes});if(i)return i}}else if(a.routes){var c=x({applicationName:t,location:r,routes:a.routes});if(c)return c}}}function L(e,t,r){var n=r?r.nextSibling:t.firstChild;n!==e&&t.insertBefore(e,n)}function W(e){return"single-spa-application:".concat(e)}function I(e){if("#text"===e.type.toLowerCase())return document.createTextNode(e.value);if("#comment"===e.type.toLowerCase())return document.createComment(e.value);var t=document.createElement(e.type);return(e.attrs||[]).forEach((function(e){t.setAttribute(e.name,e.value)})),t.routes&&t.routes.forEach((function(e){t.appendChild(I(e))})),t}function T(e){return e===n.SKIP_BECAUSE_BROKEN||e===n.LOAD_ERROR}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location;return t["hash"===e.mode?"hash":"pathname"]}function D(e){try{return new URL(e)}catch(r){var t=document.createElement("a");return t.href=e,t}}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u(u({},e),t)}var R,H,B,k,U=function(e,t){if(e&&e.nodeName||"string"==typeof e){if(p&&!t&&window.singleSpaLayoutData&&(t=window.singleSpaLayoutData),"string"==typeof e){if(!p)throw Error("calling constructRoutes with a string on the server is not yet supported");if(!(e=(new DOMParser).parseFromString(e,"text/html").documentElement.querySelector("single-spa-router")))throw Error("constructRoutes should be called with a string HTML document that contains a <single-spa-router> element.")}e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("template"===e.nodeName.toLowerCase()&&(e=(e.content||e).querySelector("single-spa-router")),"single-spa-router"!==e.nodeName.toLowerCase())throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(e.nodeName));p&&e.isConnected&&e.parentNode.removeChild(e);var r={routes:[],redirects:{}};N(e,"mode")&&(r.mode=N(e,"mode")),N(e,"base")&&(r.base=N(e,"base")),N(e,"containerEl")&&(r.containerEl=N(e,"containerEl"));for(var n=0;n<e.childNodes.length;n++){var o;(o=r.routes).push.apply(o,s(A(e.childNodes[n],t,r)))}return r}(e,t)}else if(t)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(e){f("routesConfig",e);var t,r=e.disableWarnings;if(h("routesConfig",e,["mode","base","containerEl","routes","disableWarnings","redirects"],r),e.hasOwnProperty("containerEl")?function(e,t){if("string"==typeof t?""===t.trim():!(p&&t instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(t," but expected either non-blank string or HTMLElement"))}(0,e.containerEl):e.containerEl="body",e.hasOwnProperty("mode")||(e.mode="history"),function(e,t,r){if(r.indexOf(t)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(t,"' but expected ").concat(r.join(", ")))}(0,e.mode,["history","hash"]),e.hasOwnProperty("base")?(m("routesConfig.base",e.base),e.base=(0!==(t=e.base).indexOf("/")&&(t="/"+t),"/"!==t[t.length-1]&&(t+="/"),t)):e.base="/",e.hasOwnProperty("redirects"))for(var n in f("routesConfig.redirects",e.redirects),e.redirects){var o=e.redirects[n];y("routesConfig.redirects key",n),y("routesConfig.redirects['".concat(n,"']"),o)}var a=p?window.location.pathname:"/",i="hash"===e.mode?a+"#":"";b("routesConfig.routes",e.routes,(function e(t,n,o){var a=o.parentPath,i=o.siblingActiveWhens,c=o.parentActiveWhen;if(f(n,t),"application"===t.type)h(n,t,["type","name","props","loader","error"],r),t.props&&f("".concat(n,".props"),t.props),m("".concat(n,".name"),t.name);else if("route"===t.type){h(n,t,["type","path","routes","props","default","exact"],r),t.hasOwnProperty("exact")&&v("".concat(n,".exact"),t.exact);var u,s=t.hasOwnProperty("path"),l=t.hasOwnProperty("default");if(s)m("".concat(n,".path"),t.path),u=g(a,t.path),t.activeWhen=E(u,t.exact),i.push(t.activeWhen);else{if(!l)throw Error("Invalid ".concat(n,": routes must have either a path or default property."));v("".concat(n,".default"),t.default),u=a,t.activeWhen=function(e,t){return function(r){return t(r)&&!e.some((function(e){return e(r)}))}}(i,c)}if(s&&l&&t.default)throw Error("Invalid ".concat(n,": cannot have both path and set default to true."));t.routes&&b("".concat(n,".routes"),t.routes,e,{parentPath:u,siblingActiveWhens:[],parentActiveWhen:t.activeWhen})}else{if("undefined"!=typeof Node&&t instanceof Node);else for(var d in t)"routes"!==d&&"attrs"!==d&&m("".concat(n,"['").concat(d,"']"),t[d],!1);t.routes&&b("".concat(n,".routes"),t.routes,e,{parentPath:a,siblingActiveWhens:i,parentActiveWhen:c})}}),{parentPath:i+e.base,parentActiveWhen:function(){return!0},siblingActiveWhens:[]}),delete e.disableWarnings}(e),e}(null),q=(H=(R={routes:U,loadApp:function(e){var t=e.name;return r(70)(t)}}).routes,B=R.loadApp,function e(t,r,n,o){o.forEach((function(o){"application"===o.type?(t[o.name]||(t[o.name]=[]),t[o.name].push({activeWhen:r,props:_(n,o.props),loader:o.loader})):"route"===o.type?e(t,o.activeWhen,_(n,o.props),o.routes):o.routes&&e(t,r,n,o.routes)}))}(k={},(function(){return!0}),{},H.routes),Object.keys(k).map((function(e){var t=k[e];return{name:e,customProps:function(e,r){var n=w(t,(function(e){return e.activeWhen(r)}));return n?n.props:{}},activeWhen:t.map((function(e){return e.activeWhen})),app:function(){var r;p&&(r=w(t,(function(e){return e.activeWhen(window.location)})));var o=B({name:e});return r&&r.loader?function(e,t,r){return Promise.resolve().then((function(){var o,a=W(e),i=document.getElementById(a);i||((i=document.createElement("div")).id=a,i.style.display="none",document.body.appendChild(i),o=function(){i.style.removeProperty("display"),""===i.getAttribute("style")&&i.removeAttribute("style"),window.removeEventListener("single-spa:before-mount-routing-event",o)},window.addEventListener("single-spa:before-mount-routing-event",o));var c="string"==typeof t.loader?S(t.loader):t.loader,u=(0,n.mountRootParcel)(c,{name:"application-loader:".concat(e),domElement:i});function s(){return u.unmount().then((function(){o&&o()}))}return Promise.all([u.mountPromise,r]).then((function(e){var t,r=function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),2!==r.length);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t)||l(t,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();r[0];var n=r[1];return s().then((function(){return n}))}),(function(e){return s().then((function(){throw e}))}))}))}(e,r,o):o}}}))),F=function(e){var t=e.routes,r=e.active,o=void 0===r||r,i=!1,c={},u=t.base.slice(0,t.base.length-1),s={isActive:function(){return i},activate:function(){i||(i=!0,p&&(window.addEventListener("single-spa:before-routing-event",d),window.addEventListener("single-spa:before-mount-routing-event",f),window.addEventListener("single-spa:routing-event",v),(0,n.addErrorHandler)(l),f()))},deactivate:function(){i&&(i=!1,p&&(window.removeEventListener("single-spa:before-routing-event",d),window.removeEventListener("single-spa:before-mount-routing-event",f),window.removeEventListener("single-spa:routing-event",v),(0,n.removeErrorHandler)(l)))}};return o&&s.activate(),s;function l(e){var r=x({applicationName:e.appOrParcelName,location:window.location,routes:t.routes});if(r&&r.error){var o=document.getElementById(W(r.name)),a="string"==typeof r.error?S(r.error):r.error;c[r.name]=(0,n.mountRootParcel)(a,{domElement:o})}setTimeout((function(){throw e}))}function d(e){var r=e.detail,o=r.newAppStatuses,i=r.cancelNavigation,u=r.newUrl,s=M(t,D(u)),l=function(e){var r=t.redirects[e];if(e===s){if(!i)throw Error("single-spa-layout: <redirect> requires single-spa@>=5.7.0");return i(),setTimeout((function(){(0,n.navigateToUrl)(r)})),{v:void 0}}};for(var d in t.redirects){var p=l(d);if("object"===a(p))return p.v}for(var f in o)c[f]&&T((0,n.getAppStatus)(f))&&!T(o[f])&&(c[f].unmount(),delete c[f])}function f(){if(0===M(t).indexOf(u)){var e="string"==typeof t.containerEl?document.querySelector(t.containerEl):t.containerEl,r=(0,n.getMountedApps)().reduce((function(e,t){return e[t]=document.getElementById(W(t)),e}),{});C({location:window.location,routes:t.routes,parentContainer:e,shouldMount:!0,applicationContainers:r})}}function v(e){var t=e.detail.newUrl,r=[],o=(0,n.checkActivityFunctions)(t?D(t):location);(0,n.getAppNames)().forEach((function(e){o.indexOf(e)<0&&r.push(e)})),r.forEach((function(e){c[e]&&(c[e].unmount(),delete c[e]);var t=document.getElementById(W(e));t&&t.isConnected&&t.parentNode.removeChild(t)}))}}({routes:U,applications:q});q.forEach(n.registerApplication),F.activate(),console.log(q),(0,n.start)()},70:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=70,e.exports=t}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.m=r,o.c=n,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var a=Object.create(null);o.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var c=2&n&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,o.d(a,i),a},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{o.S={};var e={},t={};o.I=(r,n)=>{n||(n=[]);var a=t[r];if(a||(a=t[r]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[r])return e[r];o.o(o.S,r)||(o.S[r]={}),o.S[r];var i=[];return e[r]=i.length?Promise.all(i).then((()=>e[r]=1)):1}}})(),o(561)})();
//# sourceMappingURL=main.js.map