(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),b=o,O=l["".concat(i,".").concat(b)]||l[b]||d[b]||r;return n?a.a.createElement(O,c(c({ref:t},s),{},{components:n})):a.a.createElement(O,c({ref:t},s))}));function O(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},294:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(6),r=(n(0),n(113)),i={id:"unityscripting_scriptsstructure",title:"\u0633\u0627\u062e\u062a\u0627\u0631 \u0648 \u0637\u0631\u0632 \u06a9\u0627\u0631 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0647\u0627",slug:"/unityscripting/scriptsstructure"},c={unversionedId:"unityscripting_scriptsstructure",id:"unityscripting_scriptsstructure",isDocsHomePage:!1,title:"\u0633\u0627\u062e\u062a\u0627\u0631 \u0648 \u0637\u0631\u0632 \u06a9\u0627\u0631 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0647\u0627",description:"\u0628\u0631\u0627\u06cc \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u0635\u062d\u06cc\u062d \u0648 \u0627\u0635\u0648\u0644\u06cc \u0646\u062d\u0648\u0647\u200c\u06cc \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0646\u0648\u06cc\u0633\u06cc \u062f\u0631 \u0627\u0646\u062c\u06cc\u0646 \u06cc\u0648\u0646\u06cc\u062a\u06cc\u060c \u0627\u0628\u062a\u062f\u0627 \u0628\u0627\u06cc\u062f \u0628\u0627 \u0633\u0627\u062e\u062a\u0627\u0631 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0647\u0627 \u0648 \u0637\u0631\u0632 \u06a9\u0627\u0631 \u0622\u0646\u200c\u0647\u0627 \u0628\u0627 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u062f\u0631 \u0627\u06cc\u0646 \u0627\u0646\u062c\u06cc\u0646 \u0622\u0634\u0646\u0627 \u0634\u0648\u06cc\u0645. \u0647\u0645\u0627\u0646\u0637\u0648\u0631 \u06a9\u0647 \u06af\u0641\u062a\u0647 \u0634\u062f \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0646\u0648\u06cc\u0633\u06cc \u062f\u0631 \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0639\u0645\u062f\u062a\u0627\u064b \u0628\u0627 \u0647\u062f\u0641 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc\u06cc \u0635\u0648\u0631\u062a \u0645\u06cc\u200c\u067e\u0630\u06cc\u0631\u062f \u06a9\u0647 \u0628\u0647 \u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 \u062f\u0631 \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u0646\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u062d\u0627\u0644\u062a \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0646\u0648\u0634\u062a\u0647 \u0634\u062f\u0647 \u062a\u0648\u0633\u0637 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06cc\u06a9 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u062e\u062a\u0635\u0627\u0635\u06cc \u0639\u0645\u0644 \u06a9\u0646\u062f. \u0628\u0647 \u0648\u0633\u06cc\u0644\u0647\u200c\u06cc \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0646\u0648\u06cc\u0633\u06cc \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0645\u06a9\u0627\u0646\u06cc\u06a9 \u0648 \u06a9\u0627\u0631\u06a9\u0631\u062f\u0647\u0627\u06cc \u0628\u0639\u0636\u0627\u064b \u067e\u06cc\u0686\u06cc\u062f\u0647\u200c\u06cc \u0645\u062f\u0646\u0638\u0631 \u0637\u0631\u0627\u062d \u0628\u0627\u0632\u06cc \u0631\u0627 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0646\u0645\u0648\u062f \u06a9\u0647 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0622\u0646\u200c\u0647\u0627 \u0628\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0628\u0648\u0645\u06cc \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0628\u0633\u06cc\u0627\u0631 \u062f\u0634\u0648\u0627\u0631 \u0648 \u06cc\u0627 \u0646\u0627\u0645\u0645\u06a9\u0646 \u0628\u0627\u0634\u062f.",source:"@site/docs\\unityscripting_scriptsstructure.md",slug:"/unityscripting/scriptsstructure",permalink:"/docs/unityscripting/scriptsstructure",version:"current",sidebar:"someSidebar",previous:{title:"\u0645\u0642\u062f\u0645\u0647",permalink:"/docs/unityscripting/intro"},next:{title:"\u0646\u0642\u0634 \u0641\u06cc\u0644\u062f \u062f\u0631 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a MonoBehaviour",permalink:"/docs/unityscripting/monobehaviourfield"}},p=[{value:"\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a MonoBehaviour",id:"\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a-monobehaviour",children:[]}],s={rightToc:p};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u0628\u0631\u0627\u06cc \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u0635\u062d\u06cc\u062d \u0648 \u0627\u0635\u0648\u0644\u06cc \u0646\u062d\u0648\u0647\u200c\u06cc \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0646\u0648\u06cc\u0633\u06cc \u062f\u0631 \u0627\u0646\u062c\u06cc\u0646 \u06cc\u0648\u0646\u06cc\u062a\u06cc\u060c \u0627\u0628\u062a\u062f\u0627 \u0628\u0627\u06cc\u062f \u0628\u0627 \u0633\u0627\u062e\u062a\u0627\u0631 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0647\u0627 \u0648 \u0637\u0631\u0632 \u06a9\u0627\u0631 \u0622\u0646\u200c\u0647\u0627 \u0628\u0627 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u062f\u0631 \u0627\u06cc\u0646 \u0627\u0646\u062c\u06cc\u0646 \u0622\u0634\u0646\u0627 \u0634\u0648\u06cc\u0645. \u0647\u0645\u0627\u0646\u0637\u0648\u0631 \u06a9\u0647 \u06af\u0641\u062a\u0647 \u0634\u062f \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0646\u0648\u06cc\u0633\u06cc \u062f\u0631 \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0639\u0645\u062f\u062a\u0627\u064b \u0628\u0627 \u0647\u062f\u0641 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc\u06cc \u0635\u0648\u0631\u062a \u0645\u06cc\u200c\u067e\u0630\u06cc\u0631\u062f \u06a9\u0647 \u0628\u0647 \u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 \u062f\u0631 \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u0646\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u062d\u0627\u0644\u062a \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0646\u0648\u0634\u062a\u0647 \u0634\u062f\u0647 \u062a\u0648\u0633\u0637 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06cc\u06a9 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u062e\u062a\u0635\u0627\u0635\u06cc \u0639\u0645\u0644 \u06a9\u0646\u062f. \u0628\u0647 \u0648\u0633\u06cc\u0644\u0647\u200c\u06cc \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0646\u0648\u06cc\u0633\u06cc \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0645\u06a9\u0627\u0646\u06cc\u06a9 \u0648 \u06a9\u0627\u0631\u06a9\u0631\u062f\u0647\u0627\u06cc \u0628\u0639\u0636\u0627\u064b \u067e\u06cc\u0686\u06cc\u062f\u0647\u200c\u06cc \u0645\u062f\u0646\u0638\u0631 \u0637\u0631\u0627\u062d \u0628\u0627\u0632\u06cc \u0631\u0627 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0646\u0645\u0648\u062f \u06a9\u0647 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0622\u0646\u200c\u0647\u0627 \u0628\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0628\u0648\u0645\u06cc \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0628\u0633\u06cc\u0627\u0631 \u062f\u0634\u0648\u0627\u0631 \u0648 \u06cc\u0627 \u0646\u0627\u0645\u0645\u06a9\u0646 \u0628\u0627\u0634\u062f."),Object(r.b)("p",null,"\u0647\u0631 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u06cc\u0648\u0646\u06cc\u062a\u06cc\u060c \u0641\u0627\u06cc\u0644\u06cc \u0645\u062a\u0646\u06cc \u0628\u0627 \u0641\u0631\u0645\u062a cs (\u0645\u062e\u0641\u0641 CSharp) \u0627\u0633\u062a \u06a9\u0647 \u0627\u06af\u0631 \u062a\u0648\u0633\u0637 \u0641\u0631\u0645\u0627\u0646Create C# Script \u0627\u062f\u06cc\u062a\u0648\u0631 \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0627\u06cc\u062c\u0627\u062f \u0634\u062f\u0647 \u0628\u0627\u0634\u062f (\u0628\u0627 \u0645\u0631\u0627\u062c\u0639\u0647 \u0628\u0647 \u067e\u0646\u062c\u0631\u0647\u200c\u06cc Project \u0648 \u0627\u0646\u062a\u062e\u0627\u0628 C# Script \u0627\u0632 \u0645\u0646\u0648\u06cc Create) \u0645\u062d\u062a\u0648\u06cc \u06a9\u062f\u0647\u0627\u06cc \u0627\u0632 \u067e\u06cc\u0634 \u0646\u0648\u0634\u062a\u0647 \u0634\u062f\u0647\u200c\u0627\u06cc \u062e\u0648\u0627\u0647\u062f \u0628\u0648\u062f."),Object(r.b)("p",null,"\u0627\u06cc\u0646 \u06a9\u062f \u0627\u0632 \u067e\u06cc\u0634 \u0646\u0648\u0634\u062a\u0647 \u0634\u062f\u0647 \u0634\u0627\u0645\u0644 \u06a9\u0644\u0627\u0633\u06cc \u0647\u0645\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0627\u0633\u062a \u06a9\u0647 \u0627\u0632 \u06a9\u0644\u0627\u0633\u06cc \u0628\u0647 \u0646\u0627\u0645 ",Object(r.b)("inlineCode",{parentName:"p"},"MonoBehaviour")," \u0627\u0631\u062b\u200c\u0628\u0631\u06cc \u06a9\u0631\u062f\u0647 \u0648 \u062f\u0627\u0631\u0627\u06cc \u062f\u0648 \u0645\u062a\u062f ",Object(r.b)("inlineCode",{parentName:"p"},"Start")," \u0648 ",Object(r.b)("inlineCode",{parentName:"p"},"Update")," \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u0646\u06a9\u062a\u0647")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u0627\u06cc\u0646 \u0639\u0645\u0644 \u0628\u0627 \u0642\u0648\u0627\u0639\u062f \u062f\u0627\u062a \u0646\u062a \u0641\u0631\u06cc\u0645\u0648\u0631\u06a9 \u0628\u0631\u0627\u06cc \u0641\u0627\u06cc\u0644\u200c\u0647\u0627\u06cc \u0633\u06cc \u0634\u0627\u0631\u067e \u06a9\u0627\u0645\u0644\u0627\u064b \u0645\u0637\u0627\u0628\u0642 \u0627\u0633\u062a. \u0686\u0631\u0627 \u06a9\u0647 \u062f\u0631 \u0633\u06cc \u0634\u0627\u0631\u067e \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f \u0646\u06cc\u0632 \u0647\u0631 \u06a9\u0644\u0627\u0633 \u062f\u0631 \u0641\u0627\u06cc\u0644\u06cc \u0647\u0645\u0646\u0627\u0645 \u062e\u0648\u062f\u0634 \u0642\u0631\u0627\u0631 \u062f\u0627\u0631\u062f."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u0646\u06a9\u062a\u0647")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u0628\u0647 \u062f\u0644\u06cc\u0644 \u0647\u0645\u0646\u0627\u0645 \u0628\u0648\u062f\u0646 \u0646\u0627\u0645 \u06a9\u0644\u0627\u0633\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f \u0628\u0627 \u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u062a\u0648\u0635\u06cc\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u0646\u0627\u0645 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0645\u0637\u0627\u0628\u0642 \u0628\u0627 \u0642\u0648\u0627\u0639\u062f \u0646\u0627\u0645\u06af\u0630\u0627\u0631\u06cc \u06a9\u0644\u0627\u0633 \u0648 \u0628\u0647 \u0635\u0648\u0631\u062a PascalCase \u0646\u0648\u0634\u062a\u0647 \u0634\u0648\u062f."))),Object(r.b)("p",null,"\u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062b\u0627\u0644 \u0627\u06af\u0631 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u06cc \u0628\u0647 \u0646\u0627\u0645 ",Object(r.b)("inlineCode",{parentName:"p"},"TestScript")," \u062f\u0631 \u0627\u062f\u06cc\u062a\u0648\u0631 \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u0645 \u0645\u062d\u062a\u0648\u0627\u06cc\u06cc \u06a9\u0647 \u067e\u0633 \u0627\u0632 \u0627\u06cc\u062c\u0627\u062f \u0634\u062f\u0646 \u0641\u0627\u06cc\u0644 \u0628\u0647 \u0635\u0648\u0631\u062a \u0627\u062a\u0648\u0645\u0627\u062a\u06cc\u06a9 \u062f\u0631 \u0622\u0646 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u062e\u0648\u0627\u0647\u062f \u0628\u0648\u062f:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-clike"}),"using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class TestScript : MonoBehaviour {\n    // Use this for initialization\n    void Start () {\n\n    }\n    \n    // Update is called once per frame\n    void Update () {\n\n    }\n}\n")),Object(r.b)("h2",{id:"\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a-monobehaviour"},"\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a MonoBehaviour"),Object(r.b)("p",null,"\u06a9\u0644\u0627\u0633 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0641\u0627\u06cc\u0644 \u0622\u0646\u200c\u0647\u0627 \u062a\u0648\u0633\u0637 \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u0628\u0647 \u0637\u0648\u0631 \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0632 \u06a9\u0644\u0627\u0633\u06cc \u0628\u0647 \u0646\u0627\u0645 ",Object(r.b)("inlineCode",{parentName:"p"},"MonoBahaviour")," \u0627\u0631\u062b\u200c\u0628\u0631\u06cc \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f. \u06a9\u0644\u0627\u0633 ",Object(r.b)("inlineCode",{parentName:"p"},"MonoBahaviour")," \u06cc\u06a9\u06cc \u0627\u0632 \u06a9\u0644\u0627\u0633\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0635 \u0628\u0647 \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0628\u0648\u062f\u0647 \u06a9\u0647 \u062f\u0631 \u0641\u0636\u0627\u06cc \u0646\u0627\u0645 ",Object(r.b)("inlineCode",{parentName:"p"},"UnityEngine")," \u0642\u0631\u0627\u0631 \u062f\u0627\u0631\u062f (\u062f\u0631 \u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u0627\u06cc\u0646 \u0641\u0636\u0627\u06cc \u0646\u0627\u0645 \u062f\u0631 \u0633\u0637\u0631 3 \u0628\u0647 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0634\u0646\u0627\u0633\u0627\u0646\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a). \u0628\u0647 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u06cc \u06a9\u0647 \u0627\u0632 \u06a9\u0644\u0627\u0633 ",Object(r.b)("inlineCode",{parentName:"p"},"MonoBahaviour")," \u0627\u0631\u062b\u200c\u0628\u0631\u06cc \u06a9\u0631\u062f\u0647 \u0628\u0627\u0634\u062f \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a MonoBahaviour \u06af\u0641\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),Object(r.b)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0647 \u06cc\u06a9 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0628\u062a\u0648\u0627\u0646\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0647 \u06af\u06cc\u0645\u200c\u0622\u0628\u062c\u06a9\u062a\u200c\u0647\u0627 \u0627\u0636\u0627\u0641\u0647 \u0634\u0648\u062f \u0644\u0627\u0632\u0645 \u0627\u0633\u062a \u06a9\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0644\u0627\u0633 \u0627\u0631\u062b\u200c\u0628\u0631\u06cc \u06a9\u0631\u062f\u0647 \u0628\u0627\u0634\u062f\u061b \u062f\u0631 \u063a\u06cc\u0631 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0647\u0646\u06af\u0627\u0645 drag \u06a9\u0631\u062f\u0646 \u0622\u0646 \u0628\u0631 \u0631\u0648\u06cc Inspector \u06af\u06cc\u0645\u200c\u0622\u0628\u062c\u06a9\u062a \u0628\u0627 \u062e\u0637\u0627 \u0645\u0648\u0627\u062c\u0647 \u0645\u06cc\u200c\u0634\u0648\u06cc\u0645. \u0627\u0632 \u0622\u0646\u200c\u062c\u0627\u06cc\u06cc \u06a9\u0647 \u062f\u0631 \u0627\u06a9\u062b\u0631 \u0645\u0648\u0627\u0631\u062f \u0647\u062f\u0641 \u0627\u0632 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0646\u0648\u06cc\u0633\u06cc \u0627\u06cc\u062c\u0627\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u062e\u062a\u0635\u0627\u0635\u06cc \u0627\u0633\u062a \u0628\u0646\u0627\u0628\u0631\u0627\u06cc\u0646 \u06a9\u0644\u0627\u0633\u200c\u0647\u0627\u06cc \u0627\u06cc\u062c\u0627\u062f \u0634\u062f\u0647 \u0628\u0647 \u0637\u0648\u0631 \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 \u0627\u0632 \u06a9\u0644\u0627\u0633 ",Object(r.b)("inlineCode",{parentName:"p"},"MonoBahaviour")," \u0627\u0631\u062b\u200c\u0628\u0631\u06cc \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f. \u062f\u0631 \u0645\u0648\u0627\u0631\u062f\u06cc \u0628\u0647 \u062c\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0628\u0647 \u0633\u0627\u062f\u06af\u06cc \u0639\u0628\u0627\u0631\u062a ",Object(r.b)("inlineCode",{parentName:"p"},"MonoBahaviour")," \u0631\u0627 \u0628\u0647 \u0637\u0648\u0631 \u062f\u0633\u062a\u06cc \u062d\u0630\u0641 \u06a9\u0631\u062f. \u0627\u0645\u0627 \u062a\u0642\u0631\u06cc\u0628\u0627\u064b \u062a\u0645\u0627\u0645 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u0627 \u062f\u0631 \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0645\u06cc\u200c\u0646\u0648\u06cc\u0633\u06cc\u0645 \u0628\u0647 \u0645\u0646\u0638\u0648\u0631 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648 \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a MonoBehaviour \u0647\u0633\u062a\u0646\u062f."),Object(r.b)("p",null,"\u0627\u0632 \u0622\u0646\u200c\u062c\u0627\u06cc\u06cc \u06a9\u0647 \u0647\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u06cc\u0648\u0646\u06cc\u062a\u06cc \u062f\u0631 \u0648\u0627\u0642\u0639 \u06cc\u06a9 \u0634\u06cc \u0645\u062d\u0633\u0648\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f \u0628\u0646\u0627\u0628\u0631\u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u06cc \u06a9\u0647 \u0627\u0632 \u0631\u0648\u06cc \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a MonoBahaviour \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u0646\u06cc\u0632 \u06cc\u06a9 \u0634\u06cc \u0628\u0647 \u0634\u0645\u0627\u0631 \u0645\u06cc\u200c\u0631\u0648\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u062d\u0627\u0644\u062a \u0634\u06cc \u0627\u0632 \u0631\u0648\u06cc \u06a9\u0644\u0627\u0633 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a ",Object(r.b)("inlineCode",{parentName:"p"},"MonoBehaviour")," \u06a9\u0647 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0646\u0648\u06cc\u0633 \u0628\u0627\u0632\u06cc \u0646\u0648\u0634\u062a\u0647 \u0627\u0633\u062a \u0646\u0645\u0648\u0646\u0647\u200c\u0633\u0627\u0632\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f."),Object(r.b)("p",null,Object(r.b)("img",{alt:"image",src:n(294).default})),Object(r.b)("p",null,"\u0645\u062b\u0644 \u0647\u0631 \u06a9\u0644\u0627\u0633 \u062f\u06cc\u06af\u0631\u06cc \u062f\u0631 \u0633\u06cc \u0634\u0627\u0631\u067e\u060c \u06a9\u0644\u0627\u0633\u200c\u0647\u0627\u06cc \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0647\u0627\u06cc \u06cc\u0648\u0646\u06cc\u062a\u06cc \u0646\u06cc\u0632 \u0627\u0632 \u0641\u06cc\u0644\u062f\u0647\u0627 \u0648 \u0645\u062a\u062f\u0647\u0627 \u062a\u0634\u06a9\u06cc\u0644 \u0634\u062f\u0647\u200c\u0627\u0646\u062f. \u062f\u0631 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u200c\u0647\u0627\u06cc MonoBehaviour \u0641\u06cc\u0644\u062f\u0647\u0627 \u0648 \u0645\u062a\u062f\u0647\u0627 \u0647\u0631 \u06a9\u062f\u0627\u0645 \u0646\u0642\u0634 \u0645\u0634\u062e\u0635\u06cc \u0631\u0627 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u0627\u06cc\u0641\u0627 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f \u06a9\u0647 \u062f\u0631 \u0645\u0637\u0627\u0644\u0628 \u0628\u0639\u062f\u06cc \u0628\u0647 \u0622\u0646\u200c\u0647\u0627 \u062e\u0648\u0627\u0647\u06cc\u0645 \u067e\u0631\u062f\u0627\u062e\u062a."))}u.isMDXComponent=!0}}]);