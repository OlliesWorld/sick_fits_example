_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"2y/O":function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t={style:"currency",currency:"USD",minimumFractionDigits:2};e%100===0&&(t.minimumFractionDigits=0);var n=Intl.NumberFormat("en-us",t);return n.format(e/100)}n.d(t,"a",(function(){return r}))},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=l.length;u<c;u++){var s=l[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var d=o.props[s],f=r[s]||new Set;f.has(d)?a=!1:(f.add(d),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},QcRT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders",function(){return n("V+vy")}])},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"V+vy":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n("jT3O"),o=n("nKUr"),a=n("VX74"),i=n("lTCR"),u=n.n(i),c=n("VUBQ"),s=n("vOnD"),d=s.b.li.withConfig({displayName:"OrderItemStyles",componentId:"fbwo89-0"})(["box-shadow:var(--bs);list-style:none;padding:2rem;border:1px solid var(--offWhite);h2{border-bottom:2px solid red;margin-top:0;margin-bottom:2rem;padding-bottom:2rem;}.images{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fit,minmax(0,1fr));margin-top:1rem;img{height:200px;object-fit:cover;width:100%;}}.order-meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(20px,1fr));display:grid;grid-gap:1rem;text-align:center;& > *{margin:0;background:rgba(0,0,0,0.03);padding:1rem 0;}strong{display:block;margin-bottom:1rem;}}"]),f=n("8Kt/"),l=n.n(f),p=n("2y/O"),m=n("YFqc"),h=n.n(m);function v(){var e=Object(r.a)(["\n    query USER_ORDERS_QUERY{\n        allOrders {\n            id\n            charge\n            total\n            user {\n                id\n            }\n            items {\n                id\n                name\n                description\n                price\n                quantity\n                photo {\n                    image {\n                        publicUrlTransformed\n                    }\n                }\n            }\n        }\n    }\n"]);return v=function(){return e},e}var g=u()(v()),y=s.b.ul.withConfig({displayName:"orders__OrderUl",componentId:"sc-15udvsj-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));grid-gap:4rem;"]);function b(e){return e.items.reduce((function(e,t){return e+t.quantity}),0)}function x(){var e=Object(a.useQuery)(g),t=e.data,n=e.error;if(e.loading)return Object(o.jsx)("p",{children:"Loading...."});if(n)return Object(o.jsx)(c.a,{error:n});var r=t.allOrders;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l.a,{children:Object(o.jsxs)("title",{children:["Sick Fits - Your (",r.length,") Orders"]})}),Object(o.jsxs)("h2",{children:["You have ",r.length," orders! "]}),Object(o.jsx)(y,{children:r.map((function(e){return Object(o.jsx)(d,{children:Object(o.jsx)(h.a,{href:"/order/".concat(e.id),children:Object(o.jsxs)("a",{children:[Object(o.jsxs)("p",{children:["Order Id: ",e.id]}),Object(o.jsxs)("div",{className:"order-meta",children:[Object(o.jsxs)("p",{children:[b(e)," Items"]}),Object(o.jsxs)("p",{children:[" ",e.items.length," Product",1===e.items.length?"":"s"]}),Object(o.jsx)("p",{children:Object(p.a)(e.total)})]}),Object(o.jsx)("div",{className:"images",children:e.items.map((function(e){var t,n;return Object(o.jsx)("img",{src:null===(t=e.photo)||void 0===t||null===(n=t.image)||void 0===n?void 0:n.publicUrlTransformed,alt:e.name},"image-".concat(e.id))}))})]})})})}))})]})}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),u=n("tCBg"),c=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),u=n("nOHt"),c=n("vNVm"),s={};function d(e,t,n,r){if((0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],u=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),l=f.href,p=f.as,m=e.children,h=e.replace,v=e.shallow,g=e.scroll,y=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var b=a.Children.only(m),x=b&&"object"===typeof b&&b.ref,O=(0,c.useIntersection)({rootMargin:"200px"}),j=r(O,2),_=j[0],w=j[1],M=a.default.useCallback((function(e){_(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,_]);(0,a.useEffect)((function(){var e=w&&t&&(0,i.isLocalURL)(l),r="undefined"!==typeof y?y:n&&n.locale,o=s[l+"%"+p+(r?"%"+r:"")];e&&!o&&d(n,l,p,{locale:r})}),[p,l,w,y,t,n]);var C={ref:M,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,l,p,h,v,g,y)},onMouseEnter:function(e){(0,i.isLocalURL)(l)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),d(n,l,p,{priority:!0}))}};return(e.passHref||"a"===b.type&&!("href"in b.props))&&(C.href=(0,i.addBasePath)((0,i.addLocale)(p,"undefined"!==typeof y?y:n&&n.locale,n&&n.defaultLocale))),a.default.cloneElement(b,C)};t.default=f},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},vNVm:function(e,t,n){"use strict";var r=n("zoAU"),o=n("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,o=(0,a.useRef)(),s=(0,a.useState)(!1),d=r(s,2),f=d[0],l=d[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&l(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){u||f||(0,i.default)((function(){return l(!0)}))}),[f]),[p,f]};var a=n("q1tI"),i=o(n("0G5g")),u="undefined"!==typeof IntersectionObserver;var c=new Map}},[["QcRT",0,1,2,3,4]]]);