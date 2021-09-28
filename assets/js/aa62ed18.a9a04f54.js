"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72982],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||p;return r?n.createElement(k,l(l({ref:t},o),{},{components:r})):n.createElement(k,l({ref:t},o))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<p;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1390:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return o},default:function(){return c}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),l=["components"],u={},i=void 0,s={unversionedId:"puppeteer.httprequest",id:"puppeteer.httprequest",isDocsHomePage:!1,title:"puppeteer.httprequest",description:"Home &gt; puppeteer &gt; HTTPRequest",source:"@site/docs/puppeteer.httprequest.md",sourceDirName:".",slug:"/puppeteer.httprequest",permalink:"/puppeteer/docs/next/puppeteer.httprequest",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.httprequest.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.elementhandle.uploadfile",permalink:"/puppeteer/docs/next/puppeteer.elementhandle.uploadfile"},next:{title:"puppeteer.httprequest.abort",permalink:"/puppeteer/docs/next/puppeteer.httprequest.abort"}},o=[{value:"HTTPRequest class",id:"httprequest-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Methods",id:"methods",children:[]}],d={toc:o};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.httprequest"},"HTTPRequest")),(0,p.kt)("h2",{id:"httprequest-class"},"HTTPRequest class"),(0,p.kt)("p",null,"Represents an HTTP request sent by a page."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class HTTPRequest \n")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"Whenever the page sends a request, such as for a network resource, the following events are emitted by Puppeteer's ",(0,p.kt)("inlineCode",{parentName:"p"},"page"),":"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"request"),": emitted when the request is issued by the page. - ",(0,p.kt)("inlineCode",{parentName:"li"},"requestfinished")," - emitted when the response body is downloaded and the request is complete.")),(0,p.kt)("p",null,"If request fails at some point, then instead of ",(0,p.kt)("inlineCode",{parentName:"p"},"requestfinished")," event the ",(0,p.kt)("inlineCode",{parentName:"p"},"requestfailed")," event is emitted."),(0,p.kt)("p",null,"All of these events provide an instance of ",(0,p.kt)("inlineCode",{parentName:"p"},"HTTPRequest")," representing the request that occurred:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"page.on('request', request => ...)\n\n")),(0,p.kt)("p",null,"NOTE: HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,p.kt)("inlineCode",{parentName:"p"},"requestfinished")," event."),(0,p.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the ",(0,p.kt)("inlineCode",{parentName:"p"},"requestfinished")," event, and a new request is issued to a redirected url."),(0,p.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,p.kt)("inlineCode",{parentName:"p"},"HTTPRequest")," class."),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Method"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.abort"},"abort(errorCode, priority)")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Aborts a request.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.aborterrorreason"},"abortErrorReason()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.continue"},"continue(overrides, priority)")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Continues request with optional request overrides.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.continuerequestoverrides"},"continueRequestOverrides()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.enqueueinterceptaction"},"enqueueInterceptAction(pendingHandler)")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Adds an async request handler to the processing queue. Deferred handlers are not guaranteed to execute in any particular order, but they are guarnateed to resolve before the request interception is finalized.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.failure"},"failure()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Access information about the request's failure.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.finalizeinterceptions"},"finalizeInterceptions()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Awaits pending interception handlers and then decides how to fulfill the request interception.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.frame"},"frame()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.headers"},"headers()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.isnavigationrequest"},"isNavigationRequest()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.method"},"method()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.postdata"},"postData()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.redirectchain"},"redirectChain()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"A ",(0,p.kt)("code",null,"redirectChain")," is a chain of requests initiated to fetch a resource.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.resourcetype"},"resourceType()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Contains the request's resource type as it was perceived by the rendering engine.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.respond"},"respond(response, priority)")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Fulfills a request with the given response.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.response"},"response()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.responseforrequest"},"responseForRequest()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.httprequest.url"},"url()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);