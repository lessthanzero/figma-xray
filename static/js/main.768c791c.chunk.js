(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(n,e,t){"use strict";(function(n){function r(e){return new Promise(function(t){n(function(){t(e())})})}t.d(e,"a",function(){return r})}).call(this,t(59).setImmediate)},25:function(n,e,t){n.exports=t.p+"static/media/ComponentIcon.483685cf.svg"},26:function(n,e,t){n.exports=t.p+"static/media/PageIcon.6e637937.svg"},27:function(n,e,t){n.exports=t.p+"static/media/TextIcon.b2843f21.svg"},31:function(n,e,t){n.exports=t(61)},61:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),o=t.n(a),c=t(5),u=t.n(c),i=t(3),l=t(1);function s(){var n=Object(r.a)(["\n      background-color: transparent;\n      color: #123;\n    "]);return s=function(){return n},n}function f(){var n=Object(r.a)(["\n      opacity: 0.2;\n    "]);return f=function(){return n},n}function m(){var n=Object(r.a)(["\n  padding: 0.75em 1em;\n  font-weight: bold;\n  border-radius: 0.25em;\n  background-color: #123;\n  ","\n  color: white;\n  border: 1px solid #123;\n  ","\n"]);return m=function(){return n},n}function d(){var n=Object(r.a)(["\n  margin-bottom: 1em;\n"]);return d=function(){return n},n}function p(){var n=Object(r.a)(["\n  display: block;\n  font-weight: 700;\n  margin-bottom: 0.5em;\n"]);return p=function(){return n},n}function E(){var n=Object(r.a)(['\n  padding: 0.75em;\n  border-radius: 0.25em;\n  border: 1px solid #ccc;\n  width: 100%;\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n']);return E=function(){return n},n}var b=l.default.input(E()),g=l.default.label(p()),v=l.default.div(d()),O=l.default.button(m(),function(n){return n.disabled&&Object(l.css)(f())},function(n){return n.secondary&&Object(l.css)(s())});function h(){var n=Object(r.a)(["\n  text-decoration: underline;\n  cursor: pointer;\n"]);return h=function(){return n},n}function j(){var n=Object(r.a)(["\n  color: #999;\n"]);return j=function(){return n},n}function T(){var n=Object(r.a)(["\n  margin-bottom: 40px;\n"]);return T=function(){return n},n}var k=l.default.div(T());function y(n){var e=n.personalToken,t=n.onClick;return o.a.createElement(w,null,"Personal Token:"," ",o.a.createElement(x,{onClick:t},e&&e.substr(0,5)+"..."))}var w=l.default.div(j()),x=l.default.span(h());function C(n){var e=n.onChange,t=n.personalToken,r=n.onBlur,c=n.onFocus,u=Object(a.useRef)(null);return o.a.createElement(v,null,o.a.createElement(g,{htmlFor:"personalToken"},"Personal Token"),o.a.createElement(b,{autoComplete:"off",spellCheck:!1,name:"personalToken",value:t||"",onChange:function(n){return e(n.target.value)},onBlur:r,onFocus:c,ref:u,placeholder:"e.g. 12345-12345678-1234-1234-1234-123456789012"}),o.a.createElement("p",null,"Generate a token in Figma's Account Settings page and paste it here."))}var D=function(n){var e=n.onChange,t=n.personalToken,r=Object(a.useState)(!1),c=Object(i.a)(r,2),u=c[0],l=c[1];return o.a.createElement(k,null,!t||u?o.a.createElement(C,{onChange:e,personalToken:t,onFocus:function(){return l(!0)},onBlur:function(){return l(!1)}}):o.a.createElement(y,{personalToken:t,onClick:function(){return l(!0)}}))};function N(){var n=Object(r.a)(["\n  margin-bottom: 40px;\n"]);return N=function(){return n},n}var I=l.default.div(N());var S=function(n){var e=n.onSubmit,t=n.noTokenYet,r=Object(a.useState)(""),c=Object(i.a)(r,2),u=c[0],l=c[1];return o.a.createElement(I,null,o.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e(u)}},o.a.createElement(v,null,o.a.createElement(g,{htmlFor:"personalToken"},"File ID"),o.a.createElement(b,{autoComplete:"off",spellCheck:!1,name:"personalToken",value:u,onChange:function(n){return l(n.target.value)},placeholder:"e.g. AaBbCcDdEeFfGg12345ABCDE"}),o.a.createElement("p",null,"Use the string of characters inside a Figma file's URL.")),o.a.createElement(v,null,o.a.createElement(O,{type:"submit",disabled:t||!u},"X-Ray this file"))))},M=t(12),A=t.n(M),L=t(15),R=t(24);function U(){var n=Object(r.a)([""]);return U=function(){return n},n}function F(){var n=Object(r.a)(["\n  font-weight: 900;\n  margin-bottom: 0.5em;\n"]);return F=function(){return n},n}function _(){var n=Object(r.a)(["\n      background-color: #123;\n      color: white;\n    "]);return _=function(){return n},n}function B(){var n=Object(r.a)(["\n  padding: 20px;\n  cursor: pointer;\n  border-radius: 0.5em;\n  margin-right: 20px;\n  background-color: #eee;\n  ","\n"]);return B=function(){return n},n}function Y(){var n=Object(r.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]);return Y=function(){return n},n}var G=l.default.div(Y());function P(n){var e=n.name,t=n.count,r=n.onClick,a=n.active;return o.a.createElement(z,{active:a,onClick:r},o.a.createElement(X,null,e),null!==t?o.a.createElement(J,null,t):null)}var z=l.default.div(B(),function(n){return n.active&&Object(l.css)(_())}),X=l.default.div(F()),J=l.default.div(U()),W=t(25),q=t.n(W),$=t(26),H=t.n($),K=t(27),Q=t.n(K);function V(){var n=Object(r.a)(["\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #ddd;\n  font-weight: bold;\n  padding: 0.2em 0.5em;\n"]);return V=function(){return n},n}var Z=l.default.span(V());function nn(){var n=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return nn=function(){return n},n}function en(){var n=Object(r.a)(["\n  font-size: 85%;\n  margin-top: 10px;\n  margin-left: 5px;\n"]);return en=function(){return n},n}function tn(){var n=Object(r.a)(["\n  cursor: pointer;\n  font-size: 85%;\n"]);return tn=function(){return n},n}function rn(){var n=Object(r.a)(["\n      color: ",";\n    "]);return rn=function(){return n},n}function an(){var n=Object(r.a)(["\n  /* font-weight: bold; */\n  color: ",";\n  ","\n"]);return an=function(){return n},n}function on(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 85%;\n  margin-bottom: 10px;\n"]);return on=function(){return n},n}function cn(){var n=Object(r.a)(["\n  margin: 20px 0;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  img {\n    max-width: 200px;\n    max-height: 200px;\n  }\n"]);return cn=function(){return n},n}function un(){var n=Object(r.a)(["\n  margin-bottom: 20px;\n  margin-right: 20px;\n  padding: 20px;\n  border-radius: 3px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  box-shadow: rgba(25, 25, 25, 0.06) 0px 7px 15px 0px;\n"]);return un=function(){return n},n}function ln(n){var e=n.imageData,t=n.node;return o.a.createElement(dn,null,o.a.createElement(En,null,o.a.createElement(mn,{path:t.path})),o.a.createElement(bn,{type:"TEXT"},o.a.createElement("img",{src:Q.a,alt:"Figma Text Icon"})," ",t.node.name.substr(0,20)),o.a.createElement(pn,null,e&&o.a.createElement("img",{srcSet:e[t.node.id]+" 2w",sizes:"1px",src:e[t.node.id],alt:"Component Preview"})))}function sn(n){var e=n.component,t=n.imageData,r=Object(a.useState)(!1),c=Object(i.a)(r,2),u=c[0],l=c[1];return o.a.createElement(dn,null,o.a.createElement(En,null,o.a.createElement(mn,{path:e.path})),o.a.createElement(bn,{type:"COMPONENT"},o.a.createElement("img",{src:q.a,alt:"Figma Component Icon"})," ",e.name.substr(0,20)),o.a.createElement(pn,null,t&&o.a.createElement("img",{srcSet:t[e.id]+" 2w",sizes:"1px",src:t[e.id],alt:"Component Preview"})),o.a.createElement(gn,{onClick:function(){return l(!u)}},o.a.createElement(Z,null,e.count)," ",0===e.count?"instances":1===e.count?"instance...":"instances..."),u?o.a.createElement(fn,{instances:e.instances}):null)}function fn(n){var e=n.instances;return o.a.createElement(vn,null,e.map(function(n,e){return o.a.createElement(mn,{key:e,path:n.path})}))}function mn(n){var e=n.path;return e?o.a.createElement("div",null,o.a.createElement("img",{src:H.a,alt:"Figma Page Icon"})," ",e.join(" \u25b8 ")):null}var dn=l.default.div(un()),pn=l.default.div(cn()),En=l.default.div(on(),"#999"),bn=l.default.div(an(),"#999",function(n){return"COMPONENT"===n.type&&Object(l.css)(rn(),"#7b67fb")}),gn=l.default.div(tn()),vn=l.default.div(en()),On=l.default.div(nn());function hn(){var n=Object(r.a)([""]);return hn=function(){return n},n}function jn(){var n=Object(r.a)(["\n  margin: 10px 0 20px 0;\n  font-weight: 600;\n  padding: 10px;\n  border-left: 3px solid #123;\n"]);return jn=function(){return n},n}var Tn={USAGE:function(n,e){return-1*(n.count>e.count?1:n.count<e.count?-1:0)},NAME:function(n,e){return n.name.localeCompare(e.name)}};function kn(n){var e=n.subtitle,t=n.components,r=n.imageData,a=n.sort,c=t.length,u=t.slice(0).sort(Tn[a]);return o.a.createElement(wn,null,o.a.createElement(yn,null,e),o.a.createElement(On,null,c>0?u.map(function(n){return o.a.createElement(sn,{key:n.id,component:n,imageData:r})}):"None."))}var yn=l.default.p(jn()),wn=l.default.section(hn()),xn=function(n){var e=n.fileID,t=n.fileData,r=n.summary,c=n.imageData,u=n.inlineTextStyleNodes,l=Object(a.useState)("LIBRARY"),s=Object(i.a)(l,2),f=s[0],m=s[1],d=Object(a.useState)("USAGE"),p=Object(i.a)(d,2),E=p[0],b=p[1];return null===t||null===r||null===e?null:o.a.createElement("div",null,o.a.createElement(G,null,o.a.createElement(P,{name:"Library Components",active:"LIBRARY"===f,count:r.LIBRARY.length,onClick:function(){m("LIBRARY")}}),o.a.createElement(P,{name:"Local Components",active:"DOCUMENT"===f,count:r.DOCUMENT.length,onClick:function(){return m("DOCUMENT")}}),o.a.createElement(P,{name:"Deleted Components",active:"DELETED_FROM_DOCUMENT"===f,count:r.DELETED_FROM_DOCUMENT.length,onClick:function(){return m("DELETED_FROM_DOCUMENT")}}),o.a.createElement(P,{name:"Inline Styles",active:"INLINE_STYLES"===f,count:u?u.length:0,onClick:function(){return m("INLINE_STYLES")}})),("LIBRARY"===f||"DOCUMENT"===f||"DELETED_FROM_DOCUMENT"===f)&&o.a.createElement(G,null,o.a.createElement(P,{name:"Sort by Usage",active:"USAGE"===E,onClick:function(){return b("USAGE")}}),o.a.createElement(P,{name:"Sort by Name",active:"NAME"===E,onClick:function(){return b("NAME")}})),"LIBRARY"===f&&o.a.createElement(kn,{subtitle:"These are the components you've used from the team library.",components:r.LIBRARY,imageData:c,sort:E}),"DOCUMENT"===f&&o.a.createElement(kn,{subtitle:"If any are not used, consider deleting them.",components:r.DOCUMENT,imageData:c,sort:E}),"DELETED_FROM_DOCUMENT"===f&&o.a.createElement(kn,{subtitle:"Undiscoverable components. Consider restoring the master, or replace the instance.",components:r.DELETED_FROM_DOCUMENT,imageData:c,sort:E}),"INLINE_STYLES"===f&&o.a.createElement(wn,null,o.a.createElement(yn,null,"These text layers are not connected to any style. Consider defining new styles or assigning to existing ones."),o.a.createElement(On,null,u&&(u.length>0?u.map(function(n){return o.a.createElement(ln,{key:n.node.id,node:n,imageData:c})}):"None."))))},Cn=t(28),Dn=t.n(Cn),Nn=function(){return(Nn=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}).apply(this,arguments)},In=function(n){var e=n.accessToken?{Authorization:"Bearer "+n.accessToken}:{"X-Figma-Token":n.personalAccessToken},t=Dn.a.create({baseURL:"https://"+(n.apiRoot||"api.figma.com")+"/v1/",headers:e});return{client:t,file:function(n,e){return void 0===e&&(e={}),t.get("files/"+n,{params:e})},fileImages:function(n,e){return t.get("images/"+n,{params:Nn({},e,{ids:e.ids.join(",")})})},comments:function(n){return t.get("files/"+n+"/comments")},postComment:function(n,e){return t.post("files/"+n+"/comments",e)},teamProjects:function(n){return t.get("teams/"+n+"/projects")},projectFiles:function(n){return t.get("projects/"+n+"/files")}}};function Sn(n,e){return new Promise(function(t,r){In({personalAccessToken:e}).file(n).then(function(n){var e=n.data;t(e)}).catch(r)})}function Mn(n,e,t){return new Promise(function(r,a){In({personalAccessToken:e}).fileImages(n,{ids:t,scale:2,format:"png"}).then(function(n){var e=n.data;r(e.images)}).catch(a)})}function An(n){return"INSTANCE"===n.type?[n]:"children"in n?n.children.map(An).reduce(function(n,e){return n.concat(e)},[]):[]}function Ln(n,e){return An(n).filter(function(n){return n.componentId===e})}function Rn(n,e){var t=function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];var a=e.name;if(e.id===t)return r;if(!("children"in e))return!1;for(var o=0;o<e.children.length;o+=1){var c=n(e.children[o],t,r.concat(a));if(!1!==c)return c}return!1}(n,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]);return!!t&&t.slice(1)}function Un(n){var e=function(n){var e=n.components,t={};return Object.keys(e).forEach(function(r){t[r]={component:e[r],count:Ln(n.document,r).length,path:Rn(n.document,r)}}),t}(n),t=Object.keys(e).map(function(t){return{id:t,path:e[t].path,name:e[t].component.name,type:e[t].component.key?"LIBRARY":e[t].path?"DOCUMENT":"DELETED_FROM_DOCUMENT",count:e[t].count,instances:Ln(n.document,t).map(function(e){return{path:Rn(n.document,e.id)}})}}).filter(function(n){return!("LIBRARY"===n.type&&0===n.count)});return{LIBRARY:t.filter(function(n){return"LIBRARY"===n.type}),DOCUMENT:t.filter(function(n){return"DOCUMENT"===n.type}),DELETED_FROM_DOCUMENT:t.filter(function(n){return"DELETED_FROM_DOCUMENT"===n.type})}}var Fn=t(13),_n=t.n(Fn);function Bn(n,e){return n&&"object"===typeof n&&e in n}var Yn=t(14);function Gn(){var n=Object(r.a)(["\n  color: inherit;\n"]);return Gn=function(){return n},n}function Pn(){var n=Object(r.a)(["\n  font-weight: 300;\n  color: #999;\n"]);return Pn=function(){return n},n}function zn(){var n=Object(r.a)(["\n  font-weight: 900;\n  margin-bottom: 40px;\n"]);return zn=function(){return n},n}function Xn(n){var e=n.fileID,t=n.personalToken,r=Object(a.useState)(null),c=Object(i.a)(r,2),u=c[0],l=c[1],s=Object(a.useState)(null),f=Object(i.a)(s,2),m=f[0],d=f[1],p=Object(a.useState)(null),E=Object(i.a)(p,2),b=E[0],g=E[1],v=Object(a.useState)("NONE"),O=Object(i.a)(v,2),h=O[0],j=O[1],T=Object(a.useState)(null),k=Object(i.a)(T,2),y=k[0],w=k[1],x=Object(a.useState)(null),C=Object(i.a)(x,2),D=C[0],N=C[1];return Object(a.useEffect)(function(){return u&&(window.document.title="X-Ray: "+u.name),function(){window.document.title="X-Ray"}},[u]),Object(a.useEffect)(function(){(function(){var n=Object(R.a)(A.a.mark(function n(){var r,a,o,c,u,i,s;return A.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return j("LOADING_DOCUMENT"),l(null),w(null),g(null),n.next=6,Sn(e,t);case 6:if(r=n.sent,l(r),!r){n.next=30;break}return j("ANALYSING"),n.next=12,Object(Yn.a)(function(){return Un(r)});case 12:return a=n.sent,d(a),n.next=16,Object(Yn.a)(function(){return n=r,_n()(n.document).reduce(function(e,t){return t&&("INSTANCE"===t.type?this.block():"TEXT"!==t.type||Bn(t,"styles")&&Bn(t.styles,"text")||e.push({node:t,path:Rn(n.document,t.id)})),e},[]);var n});case 16:if(o=n.sent,N(o),c=Object.keys(r.components),u=o.map(function(n){return n.node.id}),!(i=new Set([].concat(Object(L.a)(c),Object(L.a)(u)))).size){n.next=27;break}return j("LOADING_IMAGES"),n.next=25,Mn(e,t,Array.from(i));case 25:s=n.sent,w(s);case 27:j("NONE"),n.next=31;break;case 30:j("NONE");case 31:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}})()().catch(function(n){if(j("NONE"),!n.request)throw n;g(n.message)})},[e,t]),o.a.createElement("div",null,o.a.createElement(Wn,null,u?o.a.createElement($n,{target:"_blank",href:"https://www.figma.com/file/".concat(e)},u.name):null," ",o.a.createElement(qn,null,o.a.createElement(Jn,{loading:h,error:b}))),u?o.a.createElement(xn,{fileID:e,fileData:u,summary:m,imageData:y,inlineTextStyleNodes:D}):null)}function Jn(n){var e=n.loading,t=n.error;return o.a.createElement(o.a.Fragment,null,t||{NONE:null,LOADING_DOCUMENT:"Loading document...",LOADING_IMAGES:"Loading images...",ANALYSING:"Analysing document..."}[e])}var Wn=l.default.h1(zn()),qn=l.default.span(Pn()),$n=l.default.a(Gn());function Hn(){var n=Object(r.a)(["\n  display: inline-block;\n  text-decoration: underline;\n  margin-bottom: 20px;\n  cursor: pointer;\n"]);return Hn=function(){return n},n}function Kn(){var n=Object(r.a)(["\n  padding: 20px;\n"]);return Kn=function(){return n},n}var Qn=l.default.div(Kn());var Vn=function(){var n=Object(a.useState)(null),e=Object(i.a)(n,2),t=e[0],r=e[1],c=Object(a.useState)(null),u=Object(i.a)(c,2),l=u[0],s=u[1];function f(){var n=window.location.hash.match(/#\/file\/(\w+)/);s(n?n[1]:null)}function m(n){s(n),n?window.history.pushState(null,"","#/file/".concat(n)):window.history.pushState(null,"","#/")}return Object(a.useEffect)(function(){var n=window.localStorage.getItem("personalToken")||"";n&&r(n),f(),window.onpopstate=function(){f()}},[]),o.a.createElement(Qn,null,o.a.createElement(D,{personalToken:t,onChange:function(n){r(n),window.localStorage.setItem("personalToken",n)}}),!l&&o.a.createElement(S,{onSubmit:m,noTokenYet:!t}),t&&l&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Zn,{onClick:function(){return m("")}},"Choose another file"),o.a.createElement(Xn,{fileID:l,personalToken:t})))},Zn=l.default.div(Hn());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=t(29);function ee(){var n=Object(r.a)(['\n\n    * {\n        box-sizing: border-box;\n    }\n\n    body {\n        margin: 0;\n        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        color: #123;\n        font-weight: 300;\n        background-color: #f8f8f8;\n        font-size: 13px;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n            monospace;\n    }\n']);return ee=function(){return n},n}var te=Object(l.createGlobalStyle)(ee());u.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(ne.Normalize,null),o.a.createElement(te,null),o.a.createElement(Vn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.768c791c.chunk.js.map