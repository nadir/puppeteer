"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12426],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=l(r),d=p,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},21502:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(87462),p=r(63366),a=(r(67294),r(3905)),o=["components"],i={},u=void 0,l={unversionedId:"puppeteer.eventemitter.on",id:"version-9.1.1/puppeteer.eventemitter.on",isDocsHomePage:!1,title:"puppeteer.eventemitter.on",description:"Home &gt; puppeteer &gt; EventEmitter &gt; on",source:"@site/versioned_docs/version-9.1.1/puppeteer.eventemitter.on.md",sourceDirName:".",slug:"/puppeteer.eventemitter.on",permalink:"/puppeteer/docs/9.1.1/puppeteer.eventemitter.on",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.eventemitter.on.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.eventemitter.off",permalink:"/puppeteer/docs/9.1.1/puppeteer.eventemitter.off"},next:{title:"puppeteer.eventemitter.once",permalink:"/puppeteer/docs/9.1.1/puppeteer.eventemitter.once"}},c=[{value:"EventEmitter.on() method",id:"eventemitteron-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],m={toc:c};function s(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.eventemitter"},"EventEmitter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.eventemitter.on"},"on")),(0,a.kt)("h2",{id:"eventemitteron-method"},"EventEmitter.on() method"),(0,a.kt)("p",null,"Bind an event listener to fire when an event occurs."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"on(event: EventType, handler: Handler): EventEmitter;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.eventtype"},"EventType")),(0,a.kt)("td",{parentName:"tr",align:null},"the event type you'd like to listen to. Can be a string or symbol.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handler"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.handler"},"Handler")),(0,a.kt)("td",{parentName:"tr",align:null},"the function to be called when the event occurs.")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.eventemitter"},"EventEmitter")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"this")," to enable you to chain method calls."))}s.isMDXComponent=!0}}]);