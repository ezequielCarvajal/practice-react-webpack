"use strict";(self.webpackChunkplatzi_store=self.webpackChunkplatzi_store||[]).push([[982],{7876:(e,t,a)=>{var r;a.d(t,{Z:()=>n}),e=a.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o=function(e){return{type:"ADD_TO_CART",payload:e}},c=function(e){return{type:"REMOVE_FROM_CART",payload:e}},l={addToCart:o,removeFromCart:c},s=l;const n=s;var i,d;(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(o,"addToCart","C:\\Users\\ezequ\\dev\\Frontend\\webpack-platzi\\Oscar-platzi\\curso-practico\\platzi-store\\src\\actions\\index.js"),i.register(c,"removeFromCart","C:\\Users\\ezequ\\dev\\Frontend\\webpack-platzi\\Oscar-platzi\\curso-practico\\platzi-store\\src\\actions\\index.js"),i.register(l,"actions","C:\\Users\\ezequ\\dev\\Frontend\\webpack-platzi\\Oscar-platzi\\curso-practico\\platzi-store\\src\\actions\\index.js"),i.register(s,"default","C:\\Users\\ezequ\\dev\\Frontend\\webpack-platzi\\Oscar-platzi\\curso-practico\\platzi-store\\src\\actions\\index.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)},9982:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r,o=a(7294),c=a(6841),l=a(7876);e=a.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s=function(e){var t=e.cart;return o.createElement("div",{className:"Checkout"},o.createElement("div",{className:"Checkout-content"},t.length>0?o.createElement("h3",null,"Lista de Pedidos:"):o.createElement("h2",null,"Sin Pedidos"),t.map((function(t){return o.createElement("div",{className:"Checkout-item",key:t.title},o.createElement("div",{className:"Checkout-element"},o.createElement("h4",null,t.title),o.createElement("span",null,"$",t.price)),o.createElement("button",{type:"button",onClick:(a=t,function(){e.removeFromCart(a)})},o.createElement("i",{className:"fas fa-trash-alt"})));var a}))),t.length>0&&o.createElement("div",{className:"Checkout-sidebar"},o.createElement("h3",null,"Precio Total: $ ".concat(t.reduce((function(e,t){return e+t.price}),0)))))},n=function(e){return{cart:e.cart}},i={removeFromCart:l.Z.removeFromCart},d=(0,c.$j)(n,i)(s);const u=d;var p,m;(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(s,"Checkout","C:\\Users\\ezequ\\dev\\Frontend\\webpack-platzi\\Oscar-platzi\\curso-practico\\platzi-store\\src\\containers\\Checkout.jsx"),p.register(n,"mapStateToProps","C:\\Users\\ezequ\\dev\\Frontend\\webpack-platzi\\Oscar-platzi\\curso-practico\\platzi-store\\src\\containers\\Checkout.jsx"),p.register(i,"mapDispatchToProps","C:\\Users\\ezequ\\dev\\Frontend\\webpack-platzi\\Oscar-platzi\\curso-practico\\platzi-store\\src\\containers\\Checkout.jsx"),p.register(d,"default","C:\\Users\\ezequ\\dev\\Frontend\\webpack-platzi\\Oscar-platzi\\curso-practico\\platzi-store\\src\\containers\\Checkout.jsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}}]);