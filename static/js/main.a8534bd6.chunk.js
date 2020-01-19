(this.webpackJsonpnews_viewer=this.webpackJsonpnews_viewer||[]).push([[0],{38:function(e,n,t){e.exports=t(66)},43:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(30),o=t.n(c),i=(t(43),t(8)),l=t(6),u=t(7),m=t(13);function s(){var e=Object(l.a)(["\n    font-size: 1.125rem;\n    cursor: pointer;\n    white-space: pre;\n    text-decoration: none;\n    color: inherit;\n    padding-bottom: 0.25rem;\n    \n    &:hover {\n        color: #495057;\n    }\n\n    &.active {\n        font-weight: 600;\n        border-bottom: 2px solid #22b8cf;\n        color: #20b6cd;\n        &:hover {\n            color: #3bc9db;\n        }\n    }\n\n    & + & {\n        margin-left: 1rem;\n    }\n"]);return s=function(){return e},e}function p(){var e=Object(l.a)(["\n    background: #20b6cd;\n    color: white;\n    height: 4rem;\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return p=function(){return e},e}function d(){var e=Object(l.a)(["\n    display: flex;\n    padding: 1rem;\n    width: 768px;\n    margin: 0 auto;\n    @media screen and (max-width: 768px) {\n        width: 100%;\n        overflow-x: auto;\n    }\n"]);return d=function(){return e},e}var f=[{name:"all",text:"\uc804\uccb4\ubcf4\uae30"},{name:"business",text:"\ube44\uc988\ub2c8\uc2a4"},{name:"entertainment",text:"\uc5d4\ud130\ud14c\uc778\uba3c\ud2b8"},{name:"health",text:"\uac74\uac15"},{name:"science",text:"\uacfc\ud559"},{name:"sports",text:"\uc2a4\ud3ec\uce20"},{name:"technology",text:"\uae30\uc220"}],h=u.a.div(d()),b=u.a.div(p()),g=Object(u.a)(m.b)(s()),v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null,"News App"),r.a.createElement(h,null,f.map((function(e){return r.a.createElement(g,{key:e.name,activeClassName:"active",exact:"all"===e.name,to:"all"===e.name?"/":"/".concat(e.name)},e.text)}))))},x=t(11);function w(){var e=Object(l.a)(["\n    display: flex;\n    .thumbnail {\n        margin-right: 1rem;\n        img {\n            display: block;\n            width: 160px;\n            height: 100px;\n            object-fit: cover;\n        }\n    }\n    .contents {\n        h2 {\n            margin: 0;\n            a {\n                color: black;\n            }\n        }\n        p {\n            margin: 0;\n            line-height: 1.5;\n            margin-top: 0.5rem;\n            white-space: normal;\n        }\n    }\n    & + &  {\n        margin-top: 3rem;\n    }\n"]);return w=function(){return e},e}var E=u.a.div(w()),y=function(e){var n=e.article,t=n.title,a=n.description,c=n.url,o=n.urlToImage;return r.a.createElement(E,null,o&&r.a.createElement("div",{className:"thumbnail"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:o,alt:"thumbnail"}))),r.a.createElement("div",{className:"contents"},r.a.createElement("h2",null,r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},t)),r.a.createElement("p",null,a)))},j=t(35),O=t.n(j),k=t(19),N=t.n(k);function _(){var e=Object(l.a)(["\n    box-sizing: border-box;\n    padding-bottom: 3rem;\n    width: 768px;\n    margin: 0 auto;\n    margin-top: 2rem;\n    @media screen and (max-width: 768px) {\n        width: 100%;\n        padding-left: 1rem;\n        padding-right: 1rem;\n    }\n"]);return _=function(){return e},e}var z=u.a.div(_()),S=function(e){var n=e.category,t=function(e,n){var t=Object(a.useState)(!1),r=Object(x.a)(t,2),c=r[0],o=r[1],i=Object(a.useState)(null),l=Object(x.a)(i,2),u=l[0],m=l[1],s=Object(a.useState)(null),p=Object(x.a)(s,2),d=p[0],f=p[1];return Object(a.useEffect)((function(){!function(){var n;N.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.prev=1,t.next=4,N.a.awrap(e());case 4:n=t.sent,m(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),f(t.t0);case 11:o(!1);case 12:case"end":return t.stop()}}),null,null,[[1,8]])}()}),n),[c,u,d]}((function(){var e="all"===n?"":"&category=".concat(n);return O.a.get("https://newsapi.org/v2/top-headlines?country=kr".concat(e,"&apiKey=3f62e272920947c3b4fee20cb22cee7a"))}),[n]),c=Object(x.a)(t,3),o=c[0],i=c[1],l=c[2];if(o)return r.a.createElement(z,null,"\ub300\uae30 \uc911...");if(!i)return null;if(l)return r.a.createElement(z,null,"\uc5d0\ub7ec \ubc1c\uc0dd!");var u=i.data.articles;return r.a.createElement(z,null,u.map((function(e){return r.a.createElement(y,{key:e.url,article:e})})))},B=function(e){var n=e.match.params.category||"all";return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(S,{category:n}))},F=function(){return r.a.createElement(i.a,{path:"/:category?",component:B})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m.a,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.a8534bd6.chunk.js.map