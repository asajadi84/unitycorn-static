(window.webpackJsonp=window.webpackJsonp||[]).push([[7,58],{124:function(e,t,a){"use strict";var n=a(2),r=a(6),l=a(0),c=a.n(l),s=a(115),o=a(116),i=a(114),m=a(117),u=a(47),f=a.n(u),h=["to","href","label","prependBaseUrlToHref"];function d(e){var t=e.to,a=e.href,l=e.label,s=e.prependBaseUrlToHref,i=Object(r.a)(e,h),u=Object(m.a)(t),f=Object(m.a)(a,{forcePrependBaseUrl:!0});return c.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:s?f:a}:{to:u},i),l)}var g=function(e){var t=e.url,a=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(i.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,l=n.links,o=void 0===l?[]:l,u=n.logo,h=void 0===u?{}:u,p=Object(m.a)(h.src);return a?c.a.createElement("footer",{className:Object(s.a)("footer",{"footer--dark":"dark"===a.style})},c.a.createElement("div",{className:"container"},o&&o.length>0&&c.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(d,e))}))):null)}))),c.a.createElement("center",null,c.a.createElement("img",{class:"footerlogo",src:"/img/footerlogo.svg",width:"150px"})),(h||r)&&c.a.createElement("div",{className:"text--center"},h&&h.src&&c.a.createElement("div",{className:"margin-bottom--sm"},h.href?c.a.createElement("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:f.a.footerLogoLink},c.a.createElement(g,{alt:h.alt,url:p})):c.a.createElement(g,{alt:h.alt,url:p})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(121);t.default=function(){return r.a.createElement(l.a,{title:"\u0635\u0641\u062d\u0647 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"\u0635\u0641\u062d\u0647 \u06cc\u0627\u0641\u062a \u0646\u0634\u062f"),r.a.createElement("p",null,"\u0635\u0641\u062d\u0647\u200c\u0627\u06cc \u06a9\u0647 \u0622\u062f\u0631\u0633 \u0622\u0646 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u062f \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f."),r.a.createElement("p",null,"\u0627\u06af\u0631 \u0627\u0632 \u062f\u0631\u0633\u062a\u06cc \u0622\u062f\u0631\u0633 \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u062f\u0627\u0631\u06cc\u062f \u06af\u0632\u0627\u0631\u0634 \u062e\u0631\u0627\u0628\u06cc \u0644\u06cc\u0646\u06a9 \u0631\u0627 \u0628\u0647 \u0645\u0627 \u0627\u0637\u0644\u0627\u0639 \u062f\u0647\u06cc\u062f.")))))}},165:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),c=a(115),s=a(450),o=a(166),i=a.n(o),m=a(167),u=a.n(m),f=a(114),h=a(449),d=a(58),g=a.n(d),p=/{([\d,-]+)}/,v=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},j=/title=".*"/;t.a=function(e){var t=e.children,a=e.className,o=e.metastring,m=Object(f.a)().siteConfig.themeConfig.prism,d=void 0===m?{}:m,E=Object(r.useState)(!1),k=E[0],b=E[1],y=Object(r.useState)(!1),N=y[0],_=y[1];Object(r.useEffect)((function(){_(!0)}),[]);var O=Object(r.useRef)(null),B=[],x="",w=Object(h.a)();if(o&&p.test(o)){var C=o.match(p)[1];B=u.a.parse(C).filter((function(e){return e>0}))}o&&j.test(o)&&(x=o.match(j)[0].split("title=")[1].replace(/"+/g,""));var T=a&&a.replace(/language-/,"");!T&&d.defaultLanguage&&(T=d.defaultLanguage);var L=t.replace(/\n$/,"");if(0===B.length&&void 0!==T){for(var S,H="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"]);case"jsx":case"tsx":return v(["js","jsBlock","jsx"]);case"html":return v(["js","jsBlock","html"]);case"python":case"py":return v(["python"]);default:return v()}}(T),P=t.replace(/\n$/,"").split("\n"),U=0;U<P.length;){var $=U+1,A=P[U].match(I);if(null!==A){switch(A.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":H+=$+",";break;case"highlight-start":S=$;break;case"highlight-end":H+=S+"-"+($-1)+","}P.splice(U,1)}else U+=1}B=u.a.parse(H),L=P.join("\n")}var J=function(){i()(L),b(!0),setTimeout((function(){return b(!1)}),2e3)};return l.a.createElement(s.a,Object(n.a)({},s.b,{key:String(N),theme:w,code:L,language:T}),(function(e){var t,a,r=e.className,s=e.style,o=e.tokens,i=e.getLineProps,m=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,x&&l.a.createElement("div",{style:s,className:g.a.codeBlockTitle},x),l.a.createElement("div",{className:g.a.codeBlockContent},l.a.createElement("button",{ref:O,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(g.a.copyButton,(t={},t[g.a.copyButtonWithTitle]=x,t)),onClick:J},k?"Copied":"Copy"),l.a.createElement("div",{tabIndex:0,className:Object(c.a)(r,g.a.codeBlock,(a={},a[g.a.codeBlockWithTitle]=x,a))},l.a.createElement("div",{className:g.a.codeBlockLines,style:s},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return B.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},m({token:e,key:t})))})))}))))))}))}}}]);