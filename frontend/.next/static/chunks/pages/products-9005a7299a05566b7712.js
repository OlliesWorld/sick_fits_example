_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{cUBK:function(t,e,n){"use strict";n.d(e,"a",(function(){return I})),n.d(e,"b",(function(){return N}));var i=n("jT3O"),r=n("nKUr"),d=n("VX74"),o=n("lTCR"),a=n.n(o),c=n("vOnD"),s=n("obyI"),u=n("YFqc"),l=n.n(u),p=c.b.div.withConfig({displayName:"ItemStyles__Item",componentId:"sc-16pk14u-0"})(["background:white;border:1px solid var(--offWhite);box-shadow:var(--bs);position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid var(--lightGray);grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:var(--lightGray);& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"]),b=c.b.h3.withConfig({displayName:"Title",componentId:"sc-16nq74k-0"})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:var(--red);display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"]),g=c.b.span.withConfig({displayName:"PriceTag",componentId:"nwbk6t-0"})(["background:var(--red);transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"]),f=n("2y/O"),h=n("xvhg");function j(){var t=Object(i.a)(["\n  mutation DELETE_PRODUCT_MUTATION($id: ID!) {\n    deleteProduct(id: $id) {\n      id\n      name\n    }\n  }\n"]);return j=function(){return t},t}var m=a()(j());function x(t,e){t.evict(t.identify(e.data.deleteProduct))}function v(t){var e=t.id,n=t.children,i=Object(d.useMutation)(m,{variables:{id:e},update:x}),o=Object(h.a)(i,2),a=o[0],c=o[1],s=c.loading;c.error;return Object(r.jsx)("button",{type:"button",disabled:s,onClick:function(){confirm("Are you sure you want to delete this item?")&&a().catch((function(t){return alert(t.message)}))},children:n})}var O=n("VliS");function y(){var t=Object(i.a)(["\n    mutation ADD_TO_CART_MUTATION($id: ID!){\n        addToCart(productId: $id){\n             id\n        }\n    }\n"]);return y=function(){return t},t}var w=a()(y());function _(t){var e=t.id,n=Object(d.useMutation)(w,{variables:{id:e},refetchQueries:[{query:O.a}]}),i=Object(h.a)(n,2),o=i[0],a=i[1].loading;return Object(r.jsxs)("button",{disabled:a,type:"button",onClick:o,children:["Add",a&&"ing"," To Cart \ud83d\uded2"]})}function T(t){var e,n,i=t.product;return Object(r.jsxs)(p,{children:[Object(r.jsx)("img",{src:null===i||void 0===i||null===(e=i.photo)||void 0===e||null===(n=e.image)||void 0===n?void 0:n.publicUrlTransformed,alt:i.name}),Object(r.jsx)(b,{children:Object(r.jsx)(l.a,{href:"/product/".concat(i.id),children:i.name})}),Object(r.jsx)(g,{children:Object(f.a)(i.price)}),Object(r.jsx)("p",{children:i.description}),Object(r.jsxs)("div",{className:"buttonList",children:[Object(r.jsx)(l.a,{href:{pathname:"/update",query:{id:i.id}},children:"Edit \u270f\ufe0f"}),Object(r.jsx)(_,{id:i.id}),Object(r.jsx)(v,{id:i.id,children:"Delete"})]})]})}function k(){var t=Object(i.a)(["\n    query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {\n        allProducts(first: $first, skip: $skip){\n            id\n            name\n            price\n            description\n            photo {\n                id\n                image {\n                    publicUrlTransformed\n                }\n            }\n        }\n    }\n\n"]);return k=function(){return t},t}var I=a()(k()),C=c.b.div.withConfig({displayName:"Products__ProductsListStyles",componentId:"sc-1uv5x8m-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;"]);function N(t){var e=t.page,n=Object(d.useQuery)(I,{variables:{skip:e*s.a-s.a,first:s.a}}),i=n.data,o=n.error;return n.loading?Object(r.jsx)("p",{children:"Loading..."}):o?Object(r.jsxs)("p",{children:["Error: ",o.message]}):Object(r.jsx)("div",{children:Object(r.jsx)(C,{children:null===i||void 0===i?void 0:i.allProducts.map((function(t){return Object(r.jsx)(T,{product:t},t.id)}))})})}},my7y:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var i=n("nKUr"),r=n("nOHt"),d=n("KzMt"),o=n("cUBK");function a(){var t=Object(r.useRouter)().query,e=parseInt(t.page);return Object(i.jsxs)("div",{children:[Object(i.jsx)(d.b,{page:e||1}),Object(i.jsx)(o.b,{page:e||1}),Object(i.jsx)(d.b,{page:e||1})]})}},pqrm:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return n("my7y")}])}},[["pqrm",0,1,2,3,4,5]]]);