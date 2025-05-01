(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Gp={exports:{}},Zl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bE;function GR(){if(bE)return Zl;bE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,l){var h=null;if(l!==void 0&&(h=""+l),a.key!==void 0&&(h=""+a.key),"key"in a){l={};for(var p in a)p!=="key"&&(l[p]=a[p])}else l=a;return a=l.ref,{$$typeof:i,type:r,key:h,ref:a!==void 0?a:null,props:l}}return Zl.Fragment=e,Zl.jsx=t,Zl.jsxs=t,Zl}var wE;function KR(){return wE||(wE=1,Gp.exports=GR()),Gp.exports}var J=KR(),Kp={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RE;function YR(){if(RE)return Se;RE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function b(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,G={};function q(O,ee,oe){this.props=O,this.context=ee,this.refs=G,this.updater=oe||L}q.prototype.isReactComponent={},q.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},q.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function X(){}X.prototype=q.prototype;function se(O,ee,oe){this.props=O,this.context=ee,this.refs=G,this.updater=oe||L}var te=se.prototype=new X;te.constructor=se,N(te,q.prototype),te.isPureReactComponent=!0;var de=Array.isArray,he={H:null,A:null,T:null,S:null,V:null},Ae=Object.prototype.hasOwnProperty;function x(O,ee,oe,ie,me,Re){return oe=Re.ref,{$$typeof:i,type:O,key:ee,ref:oe!==void 0?oe:null,props:Re}}function w(O,ee){return x(O.type,ee,void 0,void 0,void 0,O.props)}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function D(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(oe){return ee[oe]})}var k=/\/+/g;function V(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):ee.toString(36)}function I(){}function Ft(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(ee){O.status==="pending"&&(O.status="fulfilled",O.value=ee)},function(ee){O.status==="pending"&&(O.status="rejected",O.reason=ee)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ht(O,ee,oe,ie,me){var Re=typeof O;(Re==="undefined"||Re==="boolean")&&(O=null);var Ee=!1;if(O===null)Ee=!0;else switch(Re){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(O.$$typeof){case i:case e:Ee=!0;break;case E:return Ee=O._init,ht(Ee(O._payload),ee,oe,ie,me)}}if(Ee)return me=me(O),Ee=ie===""?"."+V(O,0):ie,de(me)?(oe="",Ee!=null&&(oe=Ee.replace(k,"$&/")+"/"),ht(me,ee,oe,"",function(oi){return oi})):me!=null&&(R(me)&&(me=w(me,oe+(me.key==null||O&&O.key===me.key?"":(""+me.key).replace(k,"$&/")+"/")+Ee)),ee.push(me)),1;Ee=0;var Dt=ie===""?".":ie+":";if(de(O))for(var et=0;et<O.length;et++)ie=O[et],Re=Dt+V(ie,et),Ee+=ht(ie,ee,oe,Re,me);else if(et=b(O),typeof et=="function")for(O=et.call(O),et=0;!(ie=O.next()).done;)ie=ie.value,Re=Dt+V(ie,et++),Ee+=ht(ie,ee,oe,Re,me);else if(Re==="object"){if(typeof O.then=="function")return ht(Ft(O),ee,oe,ie,me);throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function K(O,ee,oe){if(O==null)return O;var ie=[],me=0;return ht(O,ie,"","",function(Re){return ee.call(oe,Re,me++)}),ie}function ae(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(oe){(O._status===0||O._status===-1)&&(O._status=1,O._result=oe)},function(oe){(O._status===0||O._status===-1)&&(O._status=2,O._result=oe)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var pe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function He(){}return Se.Children={map:K,forEach:function(O,ee,oe){K(O,function(){ee.apply(this,arguments)},oe)},count:function(O){var ee=0;return K(O,function(){ee++}),ee},toArray:function(O){return K(O,function(ee){return ee})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Se.Component=q,Se.Fragment=t,Se.Profiler=a,Se.PureComponent=se,Se.StrictMode=r,Se.Suspense=m,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=he,Se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return he.H.useMemoCache(O)}},Se.cache=function(O){return function(){return O.apply(null,arguments)}},Se.cloneElement=function(O,ee,oe){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ie=N({},O.props),me=O.key,Re=void 0;if(ee!=null)for(Ee in ee.ref!==void 0&&(Re=void 0),ee.key!==void 0&&(me=""+ee.key),ee)!Ae.call(ee,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&ee.ref===void 0||(ie[Ee]=ee[Ee]);var Ee=arguments.length-2;if(Ee===1)ie.children=oe;else if(1<Ee){for(var Dt=Array(Ee),et=0;et<Ee;et++)Dt[et]=arguments[et+2];ie.children=Dt}return x(O.type,me,void 0,void 0,Re,ie)},Se.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},Se.createElement=function(O,ee,oe){var ie,me={},Re=null;if(ee!=null)for(ie in ee.key!==void 0&&(Re=""+ee.key),ee)Ae.call(ee,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(me[ie]=ee[ie]);var Ee=arguments.length-2;if(Ee===1)me.children=oe;else if(1<Ee){for(var Dt=Array(Ee),et=0;et<Ee;et++)Dt[et]=arguments[et+2];me.children=Dt}if(O&&O.defaultProps)for(ie in Ee=O.defaultProps,Ee)me[ie]===void 0&&(me[ie]=Ee[ie]);return x(O,Re,void 0,void 0,null,me)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(O){return{$$typeof:p,render:O}},Se.isValidElement=R,Se.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:ae}},Se.memo=function(O,ee){return{$$typeof:g,type:O,compare:ee===void 0?null:ee}},Se.startTransition=function(O){var ee=he.T,oe={};he.T=oe;try{var ie=O(),me=he.S;me!==null&&me(oe,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(He,pe)}catch(Re){pe(Re)}finally{he.T=ee}},Se.unstable_useCacheRefresh=function(){return he.H.useCacheRefresh()},Se.use=function(O){return he.H.use(O)},Se.useActionState=function(O,ee,oe){return he.H.useActionState(O,ee,oe)},Se.useCallback=function(O,ee){return he.H.useCallback(O,ee)},Se.useContext=function(O){return he.H.useContext(O)},Se.useDebugValue=function(){},Se.useDeferredValue=function(O,ee){return he.H.useDeferredValue(O,ee)},Se.useEffect=function(O,ee,oe){var ie=he.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(O,ee)},Se.useId=function(){return he.H.useId()},Se.useImperativeHandle=function(O,ee,oe){return he.H.useImperativeHandle(O,ee,oe)},Se.useInsertionEffect=function(O,ee){return he.H.useInsertionEffect(O,ee)},Se.useLayoutEffect=function(O,ee){return he.H.useLayoutEffect(O,ee)},Se.useMemo=function(O,ee){return he.H.useMemo(O,ee)},Se.useOptimistic=function(O,ee){return he.H.useOptimistic(O,ee)},Se.useReducer=function(O,ee,oe){return he.H.useReducer(O,ee,oe)},Se.useRef=function(O){return he.H.useRef(O)},Se.useState=function(O){return he.H.useState(O)},Se.useSyncExternalStore=function(O,ee,oe){return he.H.useSyncExternalStore(O,ee,oe)},Se.useTransition=function(){return he.H.useTransition()},Se.version="19.1.0",Se}var CE;function Jm(){return CE||(CE=1,Kp.exports=YR()),Kp.exports}var Q=Jm(),Yp={exports:{}},Jl={},Qp={exports:{}},$p={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IE;function QR(){return IE||(IE=1,function(i){function e(K,ae){var pe=K.length;K.push(ae);e:for(;0<pe;){var He=pe-1>>>1,O=K[He];if(0<a(O,ae))K[He]=ae,K[pe]=O,pe=He;else break e}}function t(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var ae=K[0],pe=K.pop();if(pe!==ae){K[0]=pe;e:for(var He=0,O=K.length,ee=O>>>1;He<ee;){var oe=2*(He+1)-1,ie=K[oe],me=oe+1,Re=K[me];if(0>a(ie,pe))me<O&&0>a(Re,ie)?(K[He]=Re,K[me]=pe,He=me):(K[He]=ie,K[oe]=pe,He=oe);else if(me<O&&0>a(Re,pe))K[He]=Re,K[me]=pe,He=me;else break e}}return ae}function a(K,ae){var pe=K.sortIndex-ae.sortIndex;return pe!==0?pe:K.id-ae.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var h=Date,p=h.now();i.unstable_now=function(){return h.now()-p}}var m=[],g=[],E=1,T=null,b=3,L=!1,N=!1,G=!1,q=!1,X=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function de(K){for(var ae=t(g);ae!==null;){if(ae.callback===null)r(g);else if(ae.startTime<=K)r(g),ae.sortIndex=ae.expirationTime,e(m,ae);else break;ae=t(g)}}function he(K){if(G=!1,de(K),!N)if(t(m)!==null)N=!0,Ae||(Ae=!0,V());else{var ae=t(g);ae!==null&&ht(he,ae.startTime-K)}}var Ae=!1,x=-1,w=5,R=-1;function D(){return q?!0:!(i.unstable_now()-R<w)}function k(){if(q=!1,Ae){var K=i.unstable_now();R=K;var ae=!0;try{e:{N=!1,G&&(G=!1,se(x),x=-1),L=!0;var pe=b;try{t:{for(de(K),T=t(m);T!==null&&!(T.expirationTime>K&&D());){var He=T.callback;if(typeof He=="function"){T.callback=null,b=T.priorityLevel;var O=He(T.expirationTime<=K);if(K=i.unstable_now(),typeof O=="function"){T.callback=O,de(K),ae=!0;break t}T===t(m)&&r(m),de(K)}else r(m);T=t(m)}if(T!==null)ae=!0;else{var ee=t(g);ee!==null&&ht(he,ee.startTime-K),ae=!1}}break e}finally{T=null,b=pe,L=!1}ae=void 0}}finally{ae?V():Ae=!1}}}var V;if(typeof te=="function")V=function(){te(k)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Ft=I.port2;I.port1.onmessage=k,V=function(){Ft.postMessage(null)}}else V=function(){X(k,0)};function ht(K,ae){x=X(function(){K(i.unstable_now())},ae)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(K){K.callback=null},i.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<K?Math.floor(1e3/K):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_next=function(K){switch(b){case 1:case 2:case 3:var ae=3;break;default:ae=b}var pe=b;b=ae;try{return K()}finally{b=pe}},i.unstable_requestPaint=function(){q=!0},i.unstable_runWithPriority=function(K,ae){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var pe=b;b=K;try{return ae()}finally{b=pe}},i.unstable_scheduleCallback=function(K,ae,pe){var He=i.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?He+pe:He):pe=He,K){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=pe+O,K={id:E++,callback:ae,priorityLevel:K,startTime:pe,expirationTime:O,sortIndex:-1},pe>He?(K.sortIndex=pe,e(g,K),t(m)===null&&K===t(g)&&(G?(se(x),x=-1):G=!0,ht(he,pe-He))):(K.sortIndex=O,e(m,K),N||L||(N=!0,Ae||(Ae=!0,V()))),K},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(K){var ae=b;return function(){var pe=b;b=ae;try{return K.apply(this,arguments)}finally{b=pe}}}}($p)),$p}var NE;function $R(){return NE||(NE=1,Qp.exports=QR()),Qp.exports}var Xp={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OE;function XR(){if(OE)return nn;OE=1;var i=Jm();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,E){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:g,implementation:E}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,nn.createPortal=function(m,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,E)},nn.flushSync=function(m){var g=h.T,E=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=g,r.p=E,r.d.f()}},nn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(m,g))},nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},nn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var E=g.as,T=p(E,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,L=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?r.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:b,fetchPriority:L}):E==="script"&&r.d.X(m,{crossOrigin:T,integrity:b,fetchPriority:L,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=p(g.as,g.crossOrigin);r.d.M(m,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(m)},nn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,T=p(E,g.crossOrigin);r.d.L(m,E,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nn.preloadModule=function(m,g){if(typeof m=="string")if(g){var E=p(g.as,g.crossOrigin);r.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(m)},nn.requestFormReset=function(m){r.d.r(m)},nn.unstable_batchedUpdates=function(m,g){return m(g)},nn.useFormState=function(m,g,E){return h.H.useFormState(m,g,E)},nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},nn.version="19.1.0",nn}var DE;function WR(){if(DE)return Xp.exports;DE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Xp.exports=XR(),Xp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ME;function ZR(){if(ME)return Jl;ME=1;var i=$R(),e=Jm(),t=WR();function r(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function h(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function p(n){if(l(n)!==n)throw Error(r(188))}function m(n){var s=n.alternate;if(!s){if(s=l(n),s===null)throw Error(r(188));return s!==n?null:n}for(var o=n,u=s;;){var f=o.return;if(f===null)break;var d=f.alternate;if(d===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===o)return p(f),n;if(d===u)return p(f),s;d=d.sibling}throw Error(r(188))}if(o.return!==u.return)o=f,u=d;else{for(var v=!1,S=f.child;S;){if(S===o){v=!0,o=f,u=d;break}if(S===u){v=!0,u=f,o=d;break}S=S.sibling}if(!v){for(S=d.child;S;){if(S===o){v=!0,o=d,u=f;break}if(S===u){v=!0,u=d,o=f;break}S=S.sibling}if(!v)throw Error(r(189))}}if(o.alternate!==u)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?n:s}function g(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=g(n),s!==null)return s;n=n.sibling}return null}var E=Object.assign,T=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),se=Symbol.for("react.consumer"),te=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var I=Symbol.for("react.client.reference");function Ft(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===I?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case q:return"Profiler";case G:return"StrictMode";case he:return"Suspense";case Ae:return"SuspenseList";case R:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case L:return"Portal";case te:return(n.displayName||"Context")+".Provider";case se:return(n._context.displayName||"Context")+".Consumer";case de:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case x:return s=n.displayName||null,s!==null?s:Ft(n.type)||"Memo";case w:s=n._payload,n=n._init;try{return Ft(n(s))}catch{}}return null}var ht=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},He=[],O=-1;function ee(n){return{current:n}}function oe(n){0>O||(n.current=He[O],He[O]=null,O--)}function ie(n,s){O++,He[O]=n.current,n.current=s}var me=ee(null),Re=ee(null),Ee=ee(null),Dt=ee(null);function et(n,s){switch(ie(Ee,s),ie(Re,n),ie(me,null),s.nodeType){case 9:case 11:n=(n=s.documentElement)&&(n=n.namespaceURI)?Zv(n):0;break;default:if(n=s.tagName,s=s.namespaceURI)s=Zv(s),n=Jv(s,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}oe(me),ie(me,n)}function oi(){oe(me),oe(Re),oe(Ee)}function wr(n){n.memoizedState!==null&&ie(Dt,n);var s=me.current,o=Jv(s,n.type);s!==o&&(ie(Re,n),ie(me,o))}function Mi(n){Re.current===n&&(oe(me),oe(Re)),Dt.current===n&&(oe(Dt),Yl._currentValue=pe)}var ms=Object.prototype.hasOwnProperty,gs=i.unstable_scheduleCallback,_s=i.unstable_cancelCallback,qo=i.unstable_shouldYield,Xu=i.unstable_requestPaint,On=i.unstable_now,Gf=i.unstable_getCurrentPriorityLevel,Go=i.unstable_ImmediatePriority,Aa=i.unstable_UserBlockingPriority,ys=i.unstable_NormalPriority,Kf=i.unstable_LowPriority,ba=i.unstable_IdlePriority,Ko=i.log,Wu=i.unstable_setDisableYieldValue,ft=null,Ge=null;function Tn(n){if(typeof Ko=="function"&&Wu(n),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(ft,n)}catch{}}var en=Math.clz32?Math.clz32:vs,Zu=Math.log,Yf=Math.LN2;function vs(n){return n>>>=0,n===0?32:31-(Zu(n)/Yf|0)|0}var Es=256,Ts=4194304;function Kn(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function wa(n,s,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,d=n.suspendedLanes,v=n.pingedLanes;n=n.warmLanes;var S=u&134217727;return S!==0?(u=S&~d,u!==0?f=Kn(u):(v&=S,v!==0?f=Kn(v):o||(o=S&~n,o!==0&&(f=Kn(o))))):(S=u&~d,S!==0?f=Kn(S):v!==0?f=Kn(v):o||(o=u&~n,o!==0&&(f=Kn(o)))),f===0?0:s!==0&&s!==f&&(s&d)===0&&(d=f&-f,o=s&-s,d>=o||d===32&&(o&4194048)!==0)?s:f}function Ss(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function Yo(n,s){switch(n){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qo(){var n=Es;return Es<<=1,(Es&4194048)===0&&(Es=256),n}function $o(){var n=Ts;return Ts<<=1,(Ts&62914560)===0&&(Ts=4194304),n}function xi(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function ki(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Xo(n,s,o,u,f,d){var v=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var S=n.entanglements,C=n.expirationTimes,B=n.hiddenUpdates;for(o=v&~o;0<o;){var Y=31-en(o),W=1<<Y;S[Y]=0,C[Y]=-1;var H=B[Y];if(H!==null)for(B[Y]=null,Y=0;Y<H.length;Y++){var j=H[Y];j!==null&&(j.lane&=-536870913)}o&=~W}u!==0&&li(n,u,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(v&~s))}function li(n,s,o){n.pendingLanes|=s,n.suspendedLanes&=~s;var u=31-en(s);n.entangledLanes|=s,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function Wo(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-en(o),f=1<<u;f&s|n[u]&s&&(n[u]|=s),o&=~f}}function Rr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ra(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Cr(){var n=ae.p;return n!==0?n:(n=window.event,n===void 0?32:yE(n.type))}function Ju(n,s){var o=ae.p;try{return ae.p=n,s()}finally{ae.p=o}}var at=Math.random().toString(36).slice(2),wt="__reactFiber$"+at,vt="__reactProps$"+at,Dn="__reactContainer$"+at,Zo="__reactEvents$"+at,Qf="__reactListeners$"+at,Ir="__reactHandles$"+at,ec="__reactResources$"+at,As="__reactMarker$"+at;function Nr(n){delete n[wt],delete n[vt],delete n[Zo],delete n[Qf],delete n[Ir]}function Pi(n){var s=n[wt];if(s)return s;for(var o=n.parentNode;o;){if(s=o[Dn]||o[wt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=iE(n);n!==null;){if(o=n[wt])return o;n=iE(n)}return s}n=o,o=n.parentNode}return null}function ui(n){if(n=n[wt]||n[Dn]){var s=n.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return n}return null}function ci(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(r(33))}function cn(n){var s=n[ec];return s||(s=n[ec]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function gt(n){n[As]=!0}var Jo=new Set,Ca={};function Yn(n,s){Li(n,s),Li(n+"Capture",s)}function Li(n,s){for(Ca[n]=s,n=0;n<s.length;n++)Jo.add(s[n])}var tc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nc={},bs={};function ic(n){return ms.call(bs,n)?!0:ms.call(nc,n)?!1:tc.test(n)?bs[n]=!0:(nc[n]=!0,!1)}function Or(n,s,o){if(ic(s))if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+o)}}function hi(n,s,o){if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+o)}}function qt(n,s,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(s,o,""+u)}}var ws,rc;function Vi(n){if(ws===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);ws=s&&s[1]||"",rc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ws+n+rc}var Ia=!1;function Na(n,s){if(!n||Ia)return"";Ia=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(j){var H=j}Reflect.construct(n,[],W)}else{try{W.call()}catch(j){H=j}n.call(W.prototype)}}else{try{throw Error()}catch(j){H=j}(W=n())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(j){if(j&&H&&typeof j.stack=="string")return[j.stack,H.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=u.DetermineComponentFrameRoot(),v=d[0],S=d[1];if(v&&S){var C=v.split(`
`),B=S.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===B.length)for(u=C.length-1,f=B.length-1;1<=u&&0<=f&&C[u]!==B[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==B[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==B[f]){var Y=`
`+C[u].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=u&&0<=f);break}}}finally{Ia=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Vi(o):""}function el(n){switch(n.tag){case 26:case 27:case 5:return Vi(n.type);case 16:return Vi("Lazy");case 13:return Vi("Suspense");case 19:return Vi("SuspenseList");case 0:case 15:return Na(n.type,!1);case 11:return Na(n.type.render,!1);case 1:return Na(n.type,!0);case 31:return Vi("Activity");default:return""}}function Oa(n){try{var s="";do s+=el(n),n=n.return;while(n);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function hn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function tl(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function $f(n){var s=tl(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){u=""+v,d.call(this,v)}}),Object.defineProperty(n,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Da(n){n._valueTracker||(n._valueTracker=$f(n))}function nl(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=tl(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function Rs(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Xf=/[\n"\\]/g;function Et(n){return n.replace(Xf,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Sn(n,s,o,u,f,d,v,S){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),s!=null?v==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+hn(s)):n.value!==""+hn(s)&&(n.value=""+hn(s)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),s!=null?Dr(n,v,hn(s)):o!=null?Dr(n,v,hn(o)):u!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.name=""+hn(S):n.removeAttribute("name")}function Cs(n,s,o,u,f,d,v,S){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),s!=null||o!=null){if(!(d!=="submit"&&d!=="reset"||s!=null))return;o=o!=null?""+hn(o):"",s=s!=null?""+hn(s):o,S||s===n.value||(n.value=s),n.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=S?n.checked:!!u,n.defaultChecked=!!u,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function Dr(n,s,o){s==="number"&&Rs(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Ui(n,s,o,u){if(n=n.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=s.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+hn(o),s=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}s!==null||n[f].disabled||(s=n[f])}s!==null&&(s.selected=!0)}}function Qe(n,s,o){if(s!=null&&(s=""+hn(s),s!==n.value&&(n.value=s),o==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=o!=null?""+hn(o):""}function Is(n,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(r(92));if(ht(u)){if(1<u.length)throw Error(r(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=hn(s),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Mn(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var Ns=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sc(n,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":u?n.setProperty(s,o):typeof o!="number"||o===0||Ns.has(s)?s==="float"?n.cssFloat=o:n[s]=(""+o).trim():n[s]=o+"px"}function il(n,s,o){if(s!=null&&typeof s!="object")throw Error(r(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&sc(n,f,u)}else for(var d in s)s.hasOwnProperty(d)&&sc(n,d,s[d])}function rl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ma(n){return Zf.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var zi=null;function xn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Bi=null,Hi=null;function sl(n){var s=ui(n);if(s&&(n=s.stateNode)){var o=n[vt]||null;e:switch(n=s.stateNode,s.type){case"input":if(Sn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Et(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var f=u[vt]||null;if(!f)throw Error(r(90));Sn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===n.form&&nl(u)}break e;case"textarea":Qe(n,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Ui(n,!!o.multiple,s,!1)}}}var fi=!1;function ac(n,s,o){if(fi)return n(s,o);fi=!0;try{var u=n(s);return u}finally{if(fi=!1,(Bi!==null||Hi!==null)&&(Jc(),Bi&&(s=Bi,n=Hi,Hi=Bi=null,sl(s),n)))for(s=0;s<n.length;s++)sl(n[s])}}function Os(n,s){var o=n.stateNode;if(o===null)return null;var u=o[vt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(r(231,s,typeof o));return o}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kn=!1;if(Qn)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){kn=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{kn=!1}var di=null,Mr=null,ji=null;function al(){if(ji)return ji;var n,s=Mr,o=s.length,u,f="value"in di?di.value:di.textContent,d=f.length;for(n=0;n<o&&s[n]===f[n];n++);var v=o-n;for(u=1;u<=v&&s[o-u]===f[d-u];u++);return ji=f.slice(n,1<u?1-u:void 0)}function pi(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function mi(){return!0}function ol(){return!1}function Mt(n){function s(o,u,f,d,v){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(o=n[S],this[S]=o?o(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?mi:ol,this.isPropagationStopped=ol,this}return E(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),s}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=Mt(Fe),Ms=E({},Fe,{view:0,detail:0}),oc=Mt(Ms),ka,Pa,gi,xs=E({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==gi&&(gi&&n.type==="mousemove"?(ka=n.screenX-gi.screenX,Pa=n.screenY-gi.screenY):Pa=ka=0,gi=n),ka)},movementY:function(n){return"movementY"in n?n.movementY:Pa}}),Pn=Mt(xs),lc=E({},xs,{dataTransfer:0}),Jf=Mt(lc),ks=E({},Ms,{relatedTarget:0}),La=Mt(ks),ll=E({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),Va=Mt(ll),uc=E({},Fe,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ua=Mt(uc),ed=E({},Fe,{data:0}),ul=Mt(ed),Ps={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cl(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=hc[n])?!!s[n]:!1}function Ls(){return cl}var fc=E({},Ms,{key:function(n){if(n.key){var s=Ps[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=pi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(n){return n.type==="keypress"?pi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?pi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),za=Mt(fc),dc=E({},xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hl=Mt(dc),Fi=E({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),pc=Mt(Fi),mc=E({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),gc=Mt(mc),_c=E({},xs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ba=Mt(_c),fn=E({},Fe,{newState:0,oldState:0}),yc=Mt(fn),vc=[9,13,27,32],_i=Qn&&"CompositionEvent"in window,c=null;Qn&&"documentMode"in document&&(c=document.documentMode);var _=Qn&&"TextEvent"in window&&!c,y=Qn&&(!_i||c&&8<c&&11>=c),A=" ",U=!1;function F(n,s){switch(n){case"keyup":return vc.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ke=!1;function Rt(n,s){switch(n){case"compositionend":return re(s);case"keypress":return s.which!==32?null:(U=!0,A);case"textInput":return n=s.data,n===A&&U?null:n;default:return null}}function Pe(n,s){if(ke)return n==="compositionend"||!_i&&F(n,s)?(n=al(),ji=Mr=di=null,ke=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return y&&s.locale!=="ko"?null:s.data;default:return null}}var xt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ct(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!xt[n.type]:s==="textarea"}function qi(n,s,o,u){Bi?Hi?Hi.push(u):Hi=[u]:Bi=u,s=sh(s,"onChange"),0<s.length&&(o=new xa("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var Gt=null,yi=null;function fl(n){Yv(n,0)}function Ec(n){var s=ci(n);if(nl(s))return n}function p_(n,s){if(n==="change")return s}var m_=!1;if(Qn){var td;if(Qn){var nd="oninput"in document;if(!nd){var g_=document.createElement("div");g_.setAttribute("oninput","return;"),nd=typeof g_.oninput=="function"}td=nd}else td=!1;m_=td&&(!document.documentMode||9<document.documentMode)}function __(){Gt&&(Gt.detachEvent("onpropertychange",y_),yi=Gt=null)}function y_(n){if(n.propertyName==="value"&&Ec(yi)){var s=[];qi(s,yi,n,xn(n)),ac(fl,s)}}function Tw(n,s,o){n==="focusin"?(__(),Gt=s,yi=o,Gt.attachEvent("onpropertychange",y_)):n==="focusout"&&__()}function Sw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ec(yi)}function Aw(n,s){if(n==="click")return Ec(s)}function bw(n,s){if(n==="input"||n==="change")return Ec(s)}function ww(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var An=typeof Object.is=="function"?Object.is:ww;function dl(n,s){if(An(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!ms.call(s,f)||!An(n[f],s[f]))return!1}return!0}function v_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function E_(n,s){var o=v_(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=v_(o)}}function T_(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?T_(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function S_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=Rs(n.document);s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=Rs(n.document)}return s}function id(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}var Rw=Qn&&"documentMode"in document&&11>=document.documentMode,Ha=null,rd=null,pl=null,sd=!1;function A_(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;sd||Ha==null||Ha!==Rs(u)||(u=Ha,"selectionStart"in u&&id(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),pl&&dl(pl,u)||(pl=u,u=sh(rd,"onSelect"),0<u.length&&(s=new xa("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Ha)))}function Vs(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var ja={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionrun:Vs("Transition","TransitionRun"),transitionstart:Vs("Transition","TransitionStart"),transitioncancel:Vs("Transition","TransitionCancel"),transitionend:Vs("Transition","TransitionEnd")},ad={},b_={};Qn&&(b_=document.createElement("div").style,"AnimationEvent"in window||(delete ja.animationend.animation,delete ja.animationiteration.animation,delete ja.animationstart.animation),"TransitionEvent"in window||delete ja.transitionend.transition);function Us(n){if(ad[n])return ad[n];if(!ja[n])return n;var s=ja[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in b_)return ad[n]=s[o];return n}var w_=Us("animationend"),R_=Us("animationiteration"),C_=Us("animationstart"),Cw=Us("transitionrun"),Iw=Us("transitionstart"),Nw=Us("transitioncancel"),I_=Us("transitionend"),N_=new Map,od="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");od.push("scrollEnd");function $n(n,s){N_.set(n,s),Yn(s,[n])}var O_=new WeakMap;function Ln(n,s){if(typeof n=="object"&&n!==null){var o=O_.get(n);return o!==void 0?o:(s={value:n,source:s,stack:Oa(s)},O_.set(n,s),s)}return{value:n,source:s,stack:Oa(s)}}var Vn=[],Fa=0,ld=0;function Tc(){for(var n=Fa,s=ld=Fa=0;s<n;){var o=Vn[s];Vn[s++]=null;var u=Vn[s];Vn[s++]=null;var f=Vn[s];Vn[s++]=null;var d=Vn[s];if(Vn[s++]=null,u!==null&&f!==null){var v=u.pending;v===null?f.next=f:(f.next=v.next,v.next=f),u.pending=f}d!==0&&D_(o,f,d)}}function Sc(n,s,o,u){Vn[Fa++]=n,Vn[Fa++]=s,Vn[Fa++]=o,Vn[Fa++]=u,ld|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function ud(n,s,o,u){return Sc(n,s,o,u),Ac(n)}function qa(n,s){return Sc(n,null,null,s),Ac(n)}function D_(n,s,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,d=n.return;d!==null;)d.childLanes|=o,u=d.alternate,u!==null&&(u.childLanes|=o),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&s!==null&&(f=31-en(o),n=d.hiddenUpdates,u=n[f],u===null?n[f]=[s]:u.push(s),s.lane=o|536870912),d):null}function Ac(n){if(50<zl)throw zl=0,mp=null,Error(r(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var Ga={};function Ow(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(n,s,o,u){return new Ow(n,s,o,u)}function cd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Gi(n,s){var o=n.alternate;return o===null?(o=bn(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function M_(n,s){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,s=o.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function bc(n,s,o,u,f,d){var v=0;if(u=n,typeof n=="function")cd(n)&&(v=1);else if(typeof n=="string")v=MR(n,o,me.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case R:return n=bn(31,o,s,f),n.elementType=R,n.lanes=d,n;case N:return zs(o.children,f,d,s);case G:v=8,f|=24;break;case q:return n=bn(12,o,s,f|2),n.elementType=q,n.lanes=d,n;case he:return n=bn(13,o,s,f),n.elementType=he,n.lanes=d,n;case Ae:return n=bn(19,o,s,f),n.elementType=Ae,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case X:case te:v=10;break e;case se:v=9;break e;case de:v=11;break e;case x:v=14;break e;case w:v=16,u=null;break e}v=29,o=Error(r(130,n===null?"null":typeof n,"")),u=null}return s=bn(v,o,s,f),s.elementType=n,s.type=u,s.lanes=d,s}function zs(n,s,o,u){return n=bn(7,n,u,s),n.lanes=o,n}function hd(n,s,o){return n=bn(6,n,null,s),n.lanes=o,n}function fd(n,s,o){return s=bn(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}var Ka=[],Ya=0,wc=null,Rc=0,Un=[],zn=0,Bs=null,Ki=1,Yi="";function Hs(n,s){Ka[Ya++]=Rc,Ka[Ya++]=wc,wc=n,Rc=s}function x_(n,s,o){Un[zn++]=Ki,Un[zn++]=Yi,Un[zn++]=Bs,Bs=n;var u=Ki;n=Yi;var f=32-en(u)-1;u&=~(1<<f),o+=1;var d=32-en(s)+f;if(30<d){var v=f-f%5;d=(u&(1<<v)-1).toString(32),u>>=v,f-=v,Ki=1<<32-en(s)+f|o<<f|u,Yi=d+n}else Ki=1<<d|o<<f|u,Yi=n}function dd(n){n.return!==null&&(Hs(n,1),x_(n,1,0))}function pd(n){for(;n===wc;)wc=Ka[--Ya],Ka[Ya]=null,Rc=Ka[--Ya],Ka[Ya]=null;for(;n===Bs;)Bs=Un[--zn],Un[zn]=null,Yi=Un[--zn],Un[zn]=null,Ki=Un[--zn],Un[zn]=null}var dn=null,dt=null,je=!1,js=null,vi=!1,md=Error(r(519));function Fs(n){var s=Error(r(418,""));throw _l(Ln(s,n)),md}function k_(n){var s=n.stateNode,o=n.type,u=n.memoizedProps;switch(s[wt]=n,s[vt]=u,o){case"dialog":Oe("cancel",s),Oe("close",s);break;case"iframe":case"object":case"embed":Oe("load",s);break;case"video":case"audio":for(o=0;o<Hl.length;o++)Oe(Hl[o],s);break;case"source":Oe("error",s);break;case"img":case"image":case"link":Oe("error",s),Oe("load",s);break;case"details":Oe("toggle",s);break;case"input":Oe("invalid",s),Cs(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Da(s);break;case"select":Oe("invalid",s);break;case"textarea":Oe("invalid",s),Is(s,u.value,u.defaultValue,u.children),Da(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||Wv(s.textContent,o)?(u.popover!=null&&(Oe("beforetoggle",s),Oe("toggle",s)),u.onScroll!=null&&Oe("scroll",s),u.onScrollEnd!=null&&Oe("scrollend",s),u.onClick!=null&&(s.onclick=ah),s=!0):s=!1,s||Fs(n)}function P_(n){for(dn=n.return;dn;)switch(dn.tag){case 5:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:dn=dn.return}}function ml(n){if(n!==dn)return!1;if(!je)return P_(n),je=!0,!1;var s=n.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Dp(n.type,n.memoizedProps)),o=!o),o&&dt&&Fs(n),P_(n),s===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(s===0){dt=Wn(n.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;n=n.nextSibling}dt=null}}else s===27?(s=dt,Qr(n.type)?(n=Pp,Pp=null,dt=n):dt=s):dt=dn?Wn(n.stateNode.nextSibling):null;return!0}function gl(){dt=dn=null,je=!1}function L_(){var n=js;return n!==null&&(gn===null?gn=n:gn.push.apply(gn,n),js=null),n}function _l(n){js===null?js=[n]:js.push(n)}var gd=ee(null),qs=null,Qi=null;function xr(n,s,o){ie(gd,s._currentValue),s._currentValue=o}function $i(n){n._currentValue=gd.current,oe(gd)}function _d(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function yd(n,s,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var v=f.child;d=d.firstContext;e:for(;d!==null;){var S=d;d=f;for(var C=0;C<s.length;C++)if(S.context===s[C]){d.lanes|=o,S=d.alternate,S!==null&&(S.lanes|=o),_d(d.return,o,n),u||(v=null);break e}d=S.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(r(341));v.lanes|=o,d=v.alternate,d!==null&&(d.lanes|=o),_d(v,o,n),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===n){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function yl(n,s,o,u){n=null;for(var f=s,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var S=f.type;An(f.pendingProps.value,v.value)||(n!==null?n.push(S):n=[S])}}else if(f===Dt.current){if(v=f.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Yl):n=[Yl])}f=f.return}n!==null&&yd(s,n,o,u),s.flags|=262144}function Cc(n){for(n=n.firstContext;n!==null;){if(!An(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Gs(n){qs=n,Qi=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function tn(n){return V_(qs,n)}function Ic(n,s){return qs===null&&Gs(n),V_(n,s)}function V_(n,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Qi===null){if(n===null)throw Error(r(308));Qi=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else Qi=Qi.next=s;return o}var Dw=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){s.aborted=!0,n.forEach(function(o){return o()})}},Mw=i.unstable_scheduleCallback,xw=i.unstable_NormalPriority,It={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vd(){return{controller:new Dw,data:new Map,refCount:0}}function vl(n){n.refCount--,n.refCount===0&&Mw(xw,function(){n.controller.abort()})}var El=null,Ed=0,Qa=0,$a=null;function kw(n,s){if(El===null){var o=El=[];Ed=0,Qa=Sp(),$a={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Ed++,s.then(U_,U_),s}function U_(){if(--Ed===0&&El!==null){$a!==null&&($a.status="fulfilled");var n=El;El=null,Qa=0,$a=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function Pw(n,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var z_=K.S;K.S=function(n,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&kw(n,s),z_!==null&&z_(n,s)};var Ks=ee(null);function Td(){var n=Ks.current;return n!==null?n:tt.pooledCache}function Nc(n,s){s===null?ie(Ks,Ks.current):ie(Ks,s.pool)}function B_(){var n=Td();return n===null?null:{parent:It._currentValue,pool:n}}var Tl=Error(r(460)),H_=Error(r(474)),Oc=Error(r(542)),Sd={then:function(){}};function j_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Dc(){}function F_(n,s,o){switch(o=n[o],o===void 0?n.push(s):o!==s&&(s.then(Dc,Dc),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,G_(n),n;default:if(typeof s.status=="string")s.then(Dc,Dc);else{if(n=tt,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=s,n.status="pending",n.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,G_(n),n}throw Sl=s,Tl}}var Sl=null;function q_(){if(Sl===null)throw Error(r(459));var n=Sl;return Sl=null,n}function G_(n){if(n===Tl||n===Oc)throw Error(r(483))}var kr=!1;function Ad(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bd(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Pr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Lr(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ke&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=Ac(n),D_(n,null,o),s}return Sc(n,u,s,o),Ac(n)}function Al(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Wo(n,o)}}function wd(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};d===null?f=d=v:d=d.next=v,o=o.next}while(o!==null);d===null?f=d=s:d=d.next=s}else f=d=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}var Rd=!1;function bl(){if(Rd){var n=$a;if(n!==null)throw n}}function wl(n,s,o,u){Rd=!1;var f=n.updateQueue;kr=!1;var d=f.firstBaseUpdate,v=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var C=S,B=C.next;C.next=null,v===null?d=B:v.next=B,v=C;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,S=Y.lastBaseUpdate,S!==v&&(S===null?Y.firstBaseUpdate=B:S.next=B,Y.lastBaseUpdate=C))}if(d!==null){var W=f.baseState;v=0,Y=B=C=null,S=d;do{var H=S.lane&-536870913,j=H!==S.lane;if(j?(Le&H)===H:(u&H)===H){H!==0&&H===Qa&&(Rd=!0),Y!==null&&(Y=Y.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ve=n,ge=S;H=s;var We=o;switch(ge.tag){case 1:if(ve=ge.payload,typeof ve=="function"){W=ve.call(We,W,H);break e}W=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=ge.payload,H=typeof ve=="function"?ve.call(We,W,H):ve,H==null)break e;W=E({},W,H);break e;case 2:kr=!0}}H=S.callback,H!==null&&(n.flags|=64,j&&(n.flags|=8192),j=f.callbacks,j===null?f.callbacks=[H]:j.push(H))}else j={lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Y===null?(B=Y=j,C=W):Y=Y.next=j,v|=H;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;j=S,S=j.next,j.next=null,f.lastBaseUpdate=j,f.shared.pending=null}}while(!0);Y===null&&(C=W),f.baseState=C,f.firstBaseUpdate=B,f.lastBaseUpdate=Y,d===null&&(f.shared.lanes=0),qr|=v,n.lanes=v,n.memoizedState=W}}function K_(n,s){if(typeof n!="function")throw Error(r(191,n));n.call(s)}function Y_(n,s){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)K_(o[n],s)}var Xa=ee(null),Mc=ee(0);function Q_(n,s){n=nr,ie(Mc,n),ie(Xa,s),nr=n|s.baseLanes}function Cd(){ie(Mc,nr),ie(Xa,Xa.current)}function Id(){nr=Mc.current,oe(Xa),oe(Mc)}var Vr=0,be=null,$e=null,Tt=null,xc=!1,Wa=!1,Ys=!1,kc=0,Rl=0,Za=null,Lw=0;function _t(){throw Error(r(321))}function Nd(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!An(n[o],s[o]))return!1;return!0}function Od(n,s,o,u,f,d){return Vr=d,be=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,K.H=n===null||n.memoizedState===null?Dy:My,Ys=!1,d=o(u,f),Ys=!1,Wa&&(d=X_(s,o,u,f)),$_(n),d}function $_(n){K.H=Bc;var s=$e!==null&&$e.next!==null;if(Vr=0,Tt=$e=be=null,xc=!1,Rl=0,Za=null,s)throw Error(r(300));n===null||kt||(n=n.dependencies,n!==null&&Cc(n)&&(kt=!0))}function X_(n,s,o,u){be=n;var f=0;do{if(Wa&&(Za=null),Rl=0,Wa=!1,25<=f)throw Error(r(301));if(f+=1,Tt=$e=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}K.H=Fw,d=s(o,u)}while(Wa);return d}function Vw(){var n=K.H,s=n.useState()[0];return s=typeof s.then=="function"?Cl(s):s,n=n.useState()[0],($e!==null?$e.memoizedState:null)!==n&&(be.flags|=1024),s}function Dd(){var n=kc!==0;return kc=0,n}function Md(n,s,o){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~o}function xd(n){if(xc){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}xc=!1}Vr=0,Tt=$e=be=null,Wa=!1,Rl=kc=0,Za=null}function pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?be.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function St(){if($e===null){var n=be.alternate;n=n!==null?n.memoizedState:null}else n=$e.next;var s=Tt===null?be.memoizedState:Tt.next;if(s!==null)Tt=s,$e=n;else{if(n===null)throw be.alternate===null?Error(r(467)):Error(r(310));$e=n,n={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Tt===null?be.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function kd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cl(n){var s=Rl;return Rl+=1,Za===null&&(Za=[]),n=F_(Za,n,s),s=be,(Tt===null?s.memoizedState:Tt.next)===null&&(s=s.alternate,K.H=s===null||s.memoizedState===null?Dy:My),n}function Pc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Cl(n);if(n.$$typeof===te)return tn(n)}throw Error(r(438,String(n)))}function Pd(n){var s=null,o=be.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=be.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=kd(),be.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(n),u=0;u<n;u++)o[u]=D;return s.index++,o}function Xi(n,s){return typeof s=="function"?s(n):s}function Lc(n){var s=St();return Ld(s,$e,n)}function Ld(n,s,o){var u=n.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=o;var f=n.baseQueue,d=u.pending;if(d!==null){if(f!==null){var v=f.next;f.next=d.next,d.next=v}s.baseQueue=f=d,u.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{s=f.next;var S=v=null,C=null,B=s,Y=!1;do{var W=B.lane&-536870913;if(W!==B.lane?(Le&W)===W:(Vr&W)===W){var H=B.revertLane;if(H===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),W===Qa&&(Y=!0);else if((Vr&H)===H){B=B.next,H===Qa&&(Y=!0);continue}else W={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},C===null?(S=C=W,v=d):C=C.next=W,be.lanes|=H,qr|=H;W=B.action,Ys&&o(d,W),d=B.hasEagerState?B.eagerState:o(d,W)}else H={lane:W,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},C===null?(S=C=H,v=d):C=C.next=H,be.lanes|=W,qr|=W;B=B.next}while(B!==null&&B!==s);if(C===null?v=d:C.next=S,!An(d,n.memoizedState)&&(kt=!0,Y&&(o=$a,o!==null)))throw o;n.memoizedState=d,n.baseState=v,n.baseQueue=C,u.lastRenderedState=d}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Vd(n){var s=St(),o=s.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,d=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do d=n(d,v.action),v=v.next;while(v!==f);An(d,s.memoizedState)||(kt=!0),s.memoizedState=d,s.baseQueue===null&&(s.baseState=d),o.lastRenderedState=d}return[d,u]}function W_(n,s,o){var u=be,f=St(),d=je;if(d){if(o===void 0)throw Error(r(407));o=o()}else o=s();var v=!An(($e||f).memoizedState,o);v&&(f.memoizedState=o,kt=!0),f=f.queue;var S=ey.bind(null,u,f,n);if(Il(2048,8,S,[n]),f.getSnapshot!==s||v||Tt!==null&&Tt.memoizedState.tag&1){if(u.flags|=2048,Ja(9,Vc(),J_.bind(null,u,f,o,s),null),tt===null)throw Error(r(349));d||(Vr&124)!==0||Z_(u,s,o)}return o}function Z_(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=be.updateQueue,s===null?(s=kd(),be.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function J_(n,s,o,u){s.value=o,s.getSnapshot=u,ty(s)&&ny(n)}function ey(n,s,o){return o(function(){ty(s)&&ny(n)})}function ty(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!An(n,o)}catch{return!0}}function ny(n){var s=qa(n,2);s!==null&&Nn(s,n,2)}function Ud(n){var s=pn();if(typeof n=="function"){var o=n;if(n=o(),Ys){Tn(!0);try{o()}finally{Tn(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:n},s}function iy(n,s,o,u){return n.baseState=o,Ld(n,$e,typeof u=="function"?u:Xi)}function Uw(n,s,o,u,f){if(zc(n))throw Error(r(485));if(n=s.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};K.T!==null?o(!0):d.isTransition=!1,u(d),o=s.pending,o===null?(d.next=s.pending=d,ry(s,d)):(d.next=o.next,s.pending=o.next=d)}}function ry(n,s){var o=s.action,u=s.payload,f=n.state;if(s.isTransition){var d=K.T,v={};K.T=v;try{var S=o(f,u),C=K.S;C!==null&&C(v,S),sy(n,s,S)}catch(B){zd(n,s,B)}finally{K.T=d}}else try{d=o(f,u),sy(n,s,d)}catch(B){zd(n,s,B)}}function sy(n,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){ay(n,s,u)},function(u){return zd(n,s,u)}):ay(n,s,o)}function ay(n,s,o){s.status="fulfilled",s.value=o,oy(s),n.state=o,s=n.pending,s!==null&&(o=s.next,o===s?n.pending=null:(o=o.next,s.next=o,ry(n,o)))}function zd(n,s,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,oy(s),s=s.next;while(s!==u)}n.action=null}function oy(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function ly(n,s){return s}function uy(n,s){if(je){var o=tt.formState;if(o!==null){e:{var u=be;if(je){if(dt){t:{for(var f=dt,d=vi;f.nodeType!==8;){if(!d){f=null;break t}if(f=Wn(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){dt=Wn(f.nextSibling),u=f.data==="F!";break e}}Fs(u)}u=!1}u&&(s=o[0])}}return o=pn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ly,lastRenderedState:s},o.queue=u,o=Iy.bind(null,be,u),u.dispatch=o,u=Ud(!1),d=qd.bind(null,be,!1,u.queue),u=pn(),f={state:s,dispatch:null,action:n,pending:null},u.queue=f,o=Uw.bind(null,be,f,d,o),f.dispatch=o,u.memoizedState=n,[s,o,!1]}function cy(n){var s=St();return hy(s,$e,n)}function hy(n,s,o){if(s=Ld(n,s,ly)[0],n=Lc(Xi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Cl(s)}catch(v){throw v===Tl?Oc:v}else u=s;s=St();var f=s.queue,d=f.dispatch;return o!==s.memoizedState&&(be.flags|=2048,Ja(9,Vc(),zw.bind(null,f,o),null)),[u,d,n]}function zw(n,s){n.action=s}function fy(n){var s=St(),o=$e;if(o!==null)return hy(s,o,n);St(),s=s.memoizedState,o=St();var u=o.queue.dispatch;return o.memoizedState=n,[s,u,!1]}function Ja(n,s,o,u){return n={tag:n,create:o,deps:u,inst:s,next:null},s=be.updateQueue,s===null&&(s=kd(),be.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n),n}function Vc(){return{destroy:void 0,resource:void 0}}function dy(){return St().memoizedState}function Uc(n,s,o,u){var f=pn();u=u===void 0?null:u,be.flags|=n,f.memoizedState=Ja(1|s,Vc(),o,u)}function Il(n,s,o,u){var f=St();u=u===void 0?null:u;var d=f.memoizedState.inst;$e!==null&&u!==null&&Nd(u,$e.memoizedState.deps)?f.memoizedState=Ja(s,d,o,u):(be.flags|=n,f.memoizedState=Ja(1|s,d,o,u))}function py(n,s){Uc(8390656,8,n,s)}function my(n,s){Il(2048,8,n,s)}function gy(n,s){return Il(4,2,n,s)}function _y(n,s){return Il(4,4,n,s)}function yy(n,s){if(typeof s=="function"){n=n();var o=s(n);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function vy(n,s,o){o=o!=null?o.concat([n]):null,Il(4,4,yy.bind(null,s,n),o)}function Bd(){}function Ey(n,s){var o=St();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Nd(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function Ty(n,s){var o=St();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Nd(s,u[1]))return u[0];if(u=n(),Ys){Tn(!0);try{n()}finally{Tn(!1)}}return o.memoizedState=[u,s],u}function Hd(n,s,o){return o===void 0||(Vr&1073741824)!==0?n.memoizedState=s:(n.memoizedState=o,n=bv(),be.lanes|=n,qr|=n,o)}function Sy(n,s,o,u){return An(o,s)?o:Xa.current!==null?(n=Hd(n,o,u),An(n,s)||(kt=!0),n):(Vr&42)===0?(kt=!0,n.memoizedState=o):(n=bv(),be.lanes|=n,qr|=n,s)}function Ay(n,s,o,u,f){var d=ae.p;ae.p=d!==0&&8>d?d:8;var v=K.T,S={};K.T=S,qd(n,!1,s,o);try{var C=f(),B=K.S;if(B!==null&&B(S,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Y=Pw(C,u);Nl(n,s,Y,In(n))}else Nl(n,s,u,In(n))}catch(W){Nl(n,s,{then:function(){},status:"rejected",reason:W},In())}finally{ae.p=d,K.T=v}}function Bw(){}function jd(n,s,o,u){if(n.tag!==5)throw Error(r(476));var f=by(n).queue;Ay(n,f,s,pe,o===null?Bw:function(){return wy(n),o(u)})}function by(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:pe},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:o},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function wy(n){var s=by(n).next.queue;Nl(n,s,{},In())}function Fd(){return tn(Yl)}function Ry(){return St().memoizedState}function Cy(){return St().memoizedState}function Hw(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var o=In();n=Pr(o);var u=Lr(s,n,o);u!==null&&(Nn(u,s,o),Al(u,s,o)),s={cache:vd()},n.payload=s;return}s=s.return}}function jw(n,s,o){var u=In();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},zc(n)?Ny(s,o):(o=ud(n,s,o,u),o!==null&&(Nn(o,n,u),Oy(o,s,u)))}function Iy(n,s,o){var u=In();Nl(n,s,o,u)}function Nl(n,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(zc(n))Ny(s,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=s.lastRenderedReducer,d!==null))try{var v=s.lastRenderedState,S=d(v,o);if(f.hasEagerState=!0,f.eagerState=S,An(S,v))return Sc(n,s,f,0),tt===null&&Tc(),!1}catch{}finally{}if(o=ud(n,s,f,u),o!==null)return Nn(o,n,u),Oy(o,s,u),!0}return!1}function qd(n,s,o,u){if(u={lane:2,revertLane:Sp(),action:u,hasEagerState:!1,eagerState:null,next:null},zc(n)){if(s)throw Error(r(479))}else s=ud(n,o,u,2),s!==null&&Nn(s,n,2)}function zc(n){var s=n.alternate;return n===be||s!==null&&s===be}function Ny(n,s){Wa=xc=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function Oy(n,s,o){if((o&4194048)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Wo(n,o)}}var Bc={readContext:tn,use:Pc,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},Dy={readContext:tn,use:Pc,useCallback:function(n,s){return pn().memoizedState=[n,s===void 0?null:s],n},useContext:tn,useEffect:py,useImperativeHandle:function(n,s,o){o=o!=null?o.concat([n]):null,Uc(4194308,4,yy.bind(null,s,n),o)},useLayoutEffect:function(n,s){return Uc(4194308,4,n,s)},useInsertionEffect:function(n,s){Uc(4,2,n,s)},useMemo:function(n,s){var o=pn();s=s===void 0?null:s;var u=n();if(Ys){Tn(!0);try{n()}finally{Tn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(n,s,o){var u=pn();if(o!==void 0){var f=o(s);if(Ys){Tn(!0);try{o(s)}finally{Tn(!1)}}}else f=s;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=jw.bind(null,be,n),[u.memoizedState,n]},useRef:function(n){var s=pn();return n={current:n},s.memoizedState=n},useState:function(n){n=Ud(n);var s=n.queue,o=Iy.bind(null,be,s);return s.dispatch=o,[n.memoizedState,o]},useDebugValue:Bd,useDeferredValue:function(n,s){var o=pn();return Hd(o,n,s)},useTransition:function(){var n=Ud(!1);return n=Ay.bind(null,be,n.queue,!0,!1),pn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,o){var u=be,f=pn();if(je){if(o===void 0)throw Error(r(407));o=o()}else{if(o=s(),tt===null)throw Error(r(349));(Le&124)!==0||Z_(u,s,o)}f.memoizedState=o;var d={value:o,getSnapshot:s};return f.queue=d,py(ey.bind(null,u,d,n),[n]),u.flags|=2048,Ja(9,Vc(),J_.bind(null,u,d,o,s),null),o},useId:function(){var n=pn(),s=tt.identifierPrefix;if(je){var o=Yi,u=Ki;o=(u&~(1<<32-en(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=kc++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=Lw++,s="«"+s+"r"+o.toString(32)+"»";return n.memoizedState=s},useHostTransitionStatus:Fd,useFormState:uy,useActionState:uy,useOptimistic:function(n){var s=pn();s.memoizedState=s.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=qd.bind(null,be,!0,o),o.dispatch=s,[n,s]},useMemoCache:Pd,useCacheRefresh:function(){return pn().memoizedState=Hw.bind(null,be)}},My={readContext:tn,use:Pc,useCallback:Ey,useContext:tn,useEffect:my,useImperativeHandle:vy,useInsertionEffect:gy,useLayoutEffect:_y,useMemo:Ty,useReducer:Lc,useRef:dy,useState:function(){return Lc(Xi)},useDebugValue:Bd,useDeferredValue:function(n,s){var o=St();return Sy(o,$e.memoizedState,n,s)},useTransition:function(){var n=Lc(Xi)[0],s=St().memoizedState;return[typeof n=="boolean"?n:Cl(n),s]},useSyncExternalStore:W_,useId:Ry,useHostTransitionStatus:Fd,useFormState:cy,useActionState:cy,useOptimistic:function(n,s){var o=St();return iy(o,$e,n,s)},useMemoCache:Pd,useCacheRefresh:Cy},Fw={readContext:tn,use:Pc,useCallback:Ey,useContext:tn,useEffect:my,useImperativeHandle:vy,useInsertionEffect:gy,useLayoutEffect:_y,useMemo:Ty,useReducer:Vd,useRef:dy,useState:function(){return Vd(Xi)},useDebugValue:Bd,useDeferredValue:function(n,s){var o=St();return $e===null?Hd(o,n,s):Sy(o,$e.memoizedState,n,s)},useTransition:function(){var n=Vd(Xi)[0],s=St().memoizedState;return[typeof n=="boolean"?n:Cl(n),s]},useSyncExternalStore:W_,useId:Ry,useHostTransitionStatus:Fd,useFormState:fy,useActionState:fy,useOptimistic:function(n,s){var o=St();return $e!==null?iy(o,$e,n,s):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Pd,useCacheRefresh:Cy},eo=null,Ol=0;function Hc(n){var s=Ol;return Ol+=1,eo===null&&(eo=[]),F_(eo,n,s)}function Dl(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function jc(n,s){throw s.$$typeof===T?Error(r(525)):(n=Object.prototype.toString.call(s),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function xy(n){var s=n._init;return s(n._payload)}function ky(n){function s(P,M){if(n){var z=P.deletions;z===null?(P.deletions=[M],P.flags|=16):z.push(M)}}function o(P,M){if(!n)return null;for(;M!==null;)s(P,M),M=M.sibling;return null}function u(P){for(var M=new Map;P!==null;)P.key!==null?M.set(P.key,P):M.set(P.index,P),P=P.sibling;return M}function f(P,M){return P=Gi(P,M),P.index=0,P.sibling=null,P}function d(P,M,z){return P.index=z,n?(z=P.alternate,z!==null?(z=z.index,z<M?(P.flags|=67108866,M):z):(P.flags|=67108866,M)):(P.flags|=1048576,M)}function v(P){return n&&P.alternate===null&&(P.flags|=67108866),P}function S(P,M,z,$){return M===null||M.tag!==6?(M=hd(z,P.mode,$),M.return=P,M):(M=f(M,z),M.return=P,M)}function C(P,M,z,$){var ue=z.type;return ue===N?Y(P,M,z.props.children,$,z.key):M!==null&&(M.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===w&&xy(ue)===M.type)?(M=f(M,z.props),Dl(M,z),M.return=P,M):(M=bc(z.type,z.key,z.props,null,P.mode,$),Dl(M,z),M.return=P,M)}function B(P,M,z,$){return M===null||M.tag!==4||M.stateNode.containerInfo!==z.containerInfo||M.stateNode.implementation!==z.implementation?(M=fd(z,P.mode,$),M.return=P,M):(M=f(M,z.children||[]),M.return=P,M)}function Y(P,M,z,$,ue){return M===null||M.tag!==7?(M=zs(z,P.mode,$,ue),M.return=P,M):(M=f(M,z),M.return=P,M)}function W(P,M,z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=hd(""+M,P.mode,z),M.return=P,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case b:return z=bc(M.type,M.key,M.props,null,P.mode,z),Dl(z,M),z.return=P,z;case L:return M=fd(M,P.mode,z),M.return=P,M;case w:var $=M._init;return M=$(M._payload),W(P,M,z)}if(ht(M)||V(M))return M=zs(M,P.mode,z,null),M.return=P,M;if(typeof M.then=="function")return W(P,Hc(M),z);if(M.$$typeof===te)return W(P,Ic(P,M),z);jc(P,M)}return null}function H(P,M,z,$){var ue=M!==null?M.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ue!==null?null:S(P,M,""+z,$);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case b:return z.key===ue?C(P,M,z,$):null;case L:return z.key===ue?B(P,M,z,$):null;case w:return ue=z._init,z=ue(z._payload),H(P,M,z,$)}if(ht(z)||V(z))return ue!==null?null:Y(P,M,z,$,null);if(typeof z.then=="function")return H(P,M,Hc(z),$);if(z.$$typeof===te)return H(P,M,Ic(P,z),$);jc(P,z)}return null}function j(P,M,z,$,ue){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return P=P.get(z)||null,S(M,P,""+$,ue);if(typeof $=="object"&&$!==null){switch($.$$typeof){case b:return P=P.get($.key===null?z:$.key)||null,C(M,P,$,ue);case L:return P=P.get($.key===null?z:$.key)||null,B(M,P,$,ue);case w:var Ce=$._init;return $=Ce($._payload),j(P,M,z,$,ue)}if(ht($)||V($))return P=P.get(z)||null,Y(M,P,$,ue,null);if(typeof $.then=="function")return j(P,M,z,Hc($),ue);if($.$$typeof===te)return j(P,M,z,Ic(M,$),ue);jc(M,$)}return null}function ve(P,M,z,$){for(var ue=null,Ce=null,fe=M,_e=M=0,Lt=null;fe!==null&&_e<z.length;_e++){fe.index>_e?(Lt=fe,fe=null):Lt=fe.sibling;var Be=H(P,fe,z[_e],$);if(Be===null){fe===null&&(fe=Lt);break}n&&fe&&Be.alternate===null&&s(P,fe),M=d(Be,M,_e),Ce===null?ue=Be:Ce.sibling=Be,Ce=Be,fe=Lt}if(_e===z.length)return o(P,fe),je&&Hs(P,_e),ue;if(fe===null){for(;_e<z.length;_e++)fe=W(P,z[_e],$),fe!==null&&(M=d(fe,M,_e),Ce===null?ue=fe:Ce.sibling=fe,Ce=fe);return je&&Hs(P,_e),ue}for(fe=u(fe);_e<z.length;_e++)Lt=j(fe,P,_e,z[_e],$),Lt!==null&&(n&&Lt.alternate!==null&&fe.delete(Lt.key===null?_e:Lt.key),M=d(Lt,M,_e),Ce===null?ue=Lt:Ce.sibling=Lt,Ce=Lt);return n&&fe.forEach(function(Jr){return s(P,Jr)}),je&&Hs(P,_e),ue}function ge(P,M,z,$){if(z==null)throw Error(r(151));for(var ue=null,Ce=null,fe=M,_e=M=0,Lt=null,Be=z.next();fe!==null&&!Be.done;_e++,Be=z.next()){fe.index>_e?(Lt=fe,fe=null):Lt=fe.sibling;var Jr=H(P,fe,Be.value,$);if(Jr===null){fe===null&&(fe=Lt);break}n&&fe&&Jr.alternate===null&&s(P,fe),M=d(Jr,M,_e),Ce===null?ue=Jr:Ce.sibling=Jr,Ce=Jr,fe=Lt}if(Be.done)return o(P,fe),je&&Hs(P,_e),ue;if(fe===null){for(;!Be.done;_e++,Be=z.next())Be=W(P,Be.value,$),Be!==null&&(M=d(Be,M,_e),Ce===null?ue=Be:Ce.sibling=Be,Ce=Be);return je&&Hs(P,_e),ue}for(fe=u(fe);!Be.done;_e++,Be=z.next())Be=j(fe,P,_e,Be.value,$),Be!==null&&(n&&Be.alternate!==null&&fe.delete(Be.key===null?_e:Be.key),M=d(Be,M,_e),Ce===null?ue=Be:Ce.sibling=Be,Ce=Be);return n&&fe.forEach(function(qR){return s(P,qR)}),je&&Hs(P,_e),ue}function We(P,M,z,$){if(typeof z=="object"&&z!==null&&z.type===N&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case b:e:{for(var ue=z.key;M!==null;){if(M.key===ue){if(ue=z.type,ue===N){if(M.tag===7){o(P,M.sibling),$=f(M,z.props.children),$.return=P,P=$;break e}}else if(M.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===w&&xy(ue)===M.type){o(P,M.sibling),$=f(M,z.props),Dl($,z),$.return=P,P=$;break e}o(P,M);break}else s(P,M);M=M.sibling}z.type===N?($=zs(z.props.children,P.mode,$,z.key),$.return=P,P=$):($=bc(z.type,z.key,z.props,null,P.mode,$),Dl($,z),$.return=P,P=$)}return v(P);case L:e:{for(ue=z.key;M!==null;){if(M.key===ue)if(M.tag===4&&M.stateNode.containerInfo===z.containerInfo&&M.stateNode.implementation===z.implementation){o(P,M.sibling),$=f(M,z.children||[]),$.return=P,P=$;break e}else{o(P,M);break}else s(P,M);M=M.sibling}$=fd(z,P.mode,$),$.return=P,P=$}return v(P);case w:return ue=z._init,z=ue(z._payload),We(P,M,z,$)}if(ht(z))return ve(P,M,z,$);if(V(z)){if(ue=V(z),typeof ue!="function")throw Error(r(150));return z=ue.call(z),ge(P,M,z,$)}if(typeof z.then=="function")return We(P,M,Hc(z),$);if(z.$$typeof===te)return We(P,M,Ic(P,z),$);jc(P,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,M!==null&&M.tag===6?(o(P,M.sibling),$=f(M,z),$.return=P,P=$):(o(P,M),$=hd(z,P.mode,$),$.return=P,P=$),v(P)):o(P,M)}return function(P,M,z,$){try{Ol=0;var ue=We(P,M,z,$);return eo=null,ue}catch(fe){if(fe===Tl||fe===Oc)throw fe;var Ce=bn(29,fe,null,P.mode);return Ce.lanes=$,Ce.return=P,Ce}finally{}}}var to=ky(!0),Py=ky(!1),Bn=ee(null),Ei=null;function Ur(n){var s=n.alternate;ie(Nt,Nt.current&1),ie(Bn,n),Ei===null&&(s===null||Xa.current!==null||s.memoizedState!==null)&&(Ei=n)}function Ly(n){if(n.tag===22){if(ie(Nt,Nt.current),ie(Bn,n),Ei===null){var s=n.alternate;s!==null&&s.memoizedState!==null&&(Ei=n)}}else zr()}function zr(){ie(Nt,Nt.current),ie(Bn,Bn.current)}function Wi(n){oe(Bn),Ei===n&&(Ei=null),oe(Nt)}var Nt=ee(0);function Fc(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||kp(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Gd(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:E({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Kd={enqueueSetState:function(n,s,o){n=n._reactInternals;var u=In(),f=Pr(u);f.payload=s,o!=null&&(f.callback=o),s=Lr(n,f,u),s!==null&&(Nn(s,n,u),Al(s,n,u))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=In(),f=Pr(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=Lr(n,f,u),s!==null&&(Nn(s,n,u),Al(s,n,u))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=In(),u=Pr(o);u.tag=2,s!=null&&(u.callback=s),s=Lr(n,u,o),s!==null&&(Nn(s,n,o),Al(s,n,o))}};function Vy(n,s,o,u,f,d,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,d,v):s.prototype&&s.prototype.isPureReactComponent?!dl(o,u)||!dl(f,d):!0}function Uy(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&Kd.enqueueReplaceState(s,s.state,null)}function Qs(n,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(n=n.defaultProps){o===s&&(o=E({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var qc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function zy(n){qc(n)}function By(n){console.error(n)}function Hy(n){qc(n)}function Gc(n,s){try{var o=n.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function jy(n,s,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Yd(n,s,o){return o=Pr(o),o.tag=3,o.payload={element:null},o.callback=function(){Gc(n,s)},o}function Fy(n){return n=Pr(n),n.tag=3,n}function qy(n,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var d=u.value;n.payload=function(){return f(d)},n.callback=function(){jy(s,o,u)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){jy(s,o,u),typeof f!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function qw(n,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&yl(s,o,f,!0),o=Bn.current,o!==null){switch(o.tag){case 13:return Ei===null?_p():o.alternate===null&&pt===0&&(pt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Sd?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),vp(n,u,f)),!1;case 22:return o.flags|=65536,u===Sd?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),vp(n,u,f)),!1}throw Error(r(435,o.tag))}return vp(n,u,f),_p(),!1}if(je)return s=Bn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==md&&(n=Error(r(422),{cause:u}),_l(Ln(n,o)))):(u!==md&&(s=Error(r(423),{cause:u}),_l(Ln(s,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=Ln(u,o),f=Yd(n.stateNode,u,f),wd(n,f),pt!==4&&(pt=2)),!1;var d=Error(r(520),{cause:u});if(d=Ln(d,o),Ul===null?Ul=[d]:Ul.push(d),pt!==4&&(pt=2),s===null)return!0;u=Ln(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=Yd(o.stateNode,u,n),wd(o,n),!1;case 1:if(s=o.type,d=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Gr===null||!Gr.has(d))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Fy(f),qy(f,n,o,u),wd(o,f),!1}o=o.return}while(o!==null);return!1}var Gy=Error(r(461)),kt=!1;function Kt(n,s,o,u){s.child=n===null?Py(s,null,o,u):to(s,n.child,o,u)}function Ky(n,s,o,u,f){o=o.render;var d=s.ref;if("ref"in u){var v={};for(var S in u)S!=="ref"&&(v[S]=u[S])}else v=u;return Gs(s),u=Od(n,s,o,v,d,f),S=Dd(),n!==null&&!kt?(Md(n,s,f),Zi(n,s,f)):(je&&S&&dd(s),s.flags|=1,Kt(n,s,u,f),s.child)}function Yy(n,s,o,u,f){if(n===null){var d=o.type;return typeof d=="function"&&!cd(d)&&d.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=d,Qy(n,s,d,u,f)):(n=bc(o.type,null,u,s,s.mode,f),n.ref=s.ref,n.return=s,s.child=n)}if(d=n.child,!tp(n,f)){var v=d.memoizedProps;if(o=o.compare,o=o!==null?o:dl,o(v,u)&&n.ref===s.ref)return Zi(n,s,f)}return s.flags|=1,n=Gi(d,u),n.ref=s.ref,n.return=s,s.child=n}function Qy(n,s,o,u,f){if(n!==null){var d=n.memoizedProps;if(dl(d,u)&&n.ref===s.ref)if(kt=!1,s.pendingProps=u=d,tp(n,f))(n.flags&131072)!==0&&(kt=!0);else return s.lanes=n.lanes,Zi(n,s,f)}return Qd(n,s,o,u,f)}function $y(n,s,o){var u=s.pendingProps,f=u.children,d=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=d!==null?d.baseLanes|o:o,n!==null){for(f=s.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;s.childLanes=d&~u}else s.childLanes=0,s.child=null;return Xy(n,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&Nc(s,d!==null?d.cachePool:null),d!==null?Q_(s,d):Cd(),Ly(s);else return s.lanes=s.childLanes=536870912,Xy(n,s,d!==null?d.baseLanes|o:o,o)}else d!==null?(Nc(s,d.cachePool),Q_(s,d),zr(),s.memoizedState=null):(n!==null&&Nc(s,null),Cd(),zr());return Kt(n,s,f,o),s.child}function Xy(n,s,o,u){var f=Td();return f=f===null?null:{parent:It._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},n!==null&&Nc(s,null),Cd(),Ly(s),n!==null&&yl(n,s,u,!0),null}function Kc(n,s){var o=s.ref;if(o===null)n!==null&&n.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(r(284));(n===null||n.ref!==o)&&(s.flags|=4194816)}}function Qd(n,s,o,u,f){return Gs(s),o=Od(n,s,o,u,void 0,f),u=Dd(),n!==null&&!kt?(Md(n,s,f),Zi(n,s,f)):(je&&u&&dd(s),s.flags|=1,Kt(n,s,o,f),s.child)}function Wy(n,s,o,u,f,d){return Gs(s),s.updateQueue=null,o=X_(s,u,o,f),$_(n),u=Dd(),n!==null&&!kt?(Md(n,s,d),Zi(n,s,d)):(je&&u&&dd(s),s.flags|=1,Kt(n,s,o,d),s.child)}function Zy(n,s,o,u,f){if(Gs(s),s.stateNode===null){var d=Ga,v=o.contextType;typeof v=="object"&&v!==null&&(d=tn(v)),d=new o(u,d),s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Kd,s.stateNode=d,d._reactInternals=s,d=s.stateNode,d.props=u,d.state=s.memoizedState,d.refs={},Ad(s),v=o.contextType,d.context=typeof v=="object"&&v!==null?tn(v):Ga,d.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Gd(s,o,v,u),d.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Kd.enqueueReplaceState(d,d.state,null),wl(s,u,d,f),bl(),d.state=s.memoizedState),typeof d.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(n===null){d=s.stateNode;var S=s.memoizedProps,C=Qs(o,S);d.props=C;var B=d.context,Y=o.contextType;v=Ga,typeof Y=="object"&&Y!==null&&(v=tn(Y));var W=o.getDerivedStateFromProps;Y=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function",S=s.pendingProps!==S,Y||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S||B!==v)&&Uy(s,d,u,v),kr=!1;var H=s.memoizedState;d.state=H,wl(s,u,d,f),bl(),B=s.memoizedState,S||H!==B||kr?(typeof W=="function"&&(Gd(s,o,W,u),B=s.memoizedState),(C=kr||Vy(s,o,C,u,H,B,v))?(Y||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=B),d.props=u,d.state=B,d.context=v,u=C):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{d=s.stateNode,bd(n,s),v=s.memoizedProps,Y=Qs(o,v),d.props=Y,W=s.pendingProps,H=d.context,B=o.contextType,C=Ga,typeof B=="object"&&B!==null&&(C=tn(B)),S=o.getDerivedStateFromProps,(B=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==W||H!==C)&&Uy(s,d,u,C),kr=!1,H=s.memoizedState,d.state=H,wl(s,u,d,f),bl();var j=s.memoizedState;v!==W||H!==j||kr||n!==null&&n.dependencies!==null&&Cc(n.dependencies)?(typeof S=="function"&&(Gd(s,o,S,u),j=s.memoizedState),(Y=kr||Vy(s,o,Y,u,H,j,C)||n!==null&&n.dependencies!==null&&Cc(n.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(u,j,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(u,j,C)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===n.memoizedProps&&H===n.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&H===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=j),d.props=u,d.state=j,d.context=C,u=Y):(typeof d.componentDidUpdate!="function"||v===n.memoizedProps&&H===n.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&H===n.memoizedState||(s.flags|=1024),u=!1)}return d=u,Kc(n,s),u=(s.flags&128)!==0,d||u?(d=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:d.render(),s.flags|=1,n!==null&&u?(s.child=to(s,n.child,null,f),s.child=to(s,null,o,f)):Kt(n,s,o,f),s.memoizedState=d.state,n=s.child):n=Zi(n,s,f),n}function Jy(n,s,o,u){return gl(),s.flags|=256,Kt(n,s,o,u),s.child}var $d={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xd(n){return{baseLanes:n,cachePool:B_()}}function Wd(n,s,o){return n=n!==null?n.childLanes&~o:0,s&&(n|=Hn),n}function ev(n,s,o){var u=s.pendingProps,f=!1,d=(s.flags&128)!==0,v;if((v=d)||(v=n!==null&&n.memoizedState===null?!1:(Nt.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,n===null){if(je){if(f?Ur(s):zr(),je){var S=dt,C;if(C=S){e:{for(C=S,S=vi;C.nodeType!==8;){if(!S){S=null;break e}if(C=Wn(C.nextSibling),C===null){S=null;break e}}S=C}S!==null?(s.memoizedState={dehydrated:S,treeContext:Bs!==null?{id:Ki,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},C=bn(18,null,null,0),C.stateNode=S,C.return=s,s.child=C,dn=s,dt=null,C=!0):C=!1}C||Fs(s)}if(S=s.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return kp(S)?s.lanes=32:s.lanes=536870912,null;Wi(s)}return S=u.children,u=u.fallback,f?(zr(),f=s.mode,S=Yc({mode:"hidden",children:S},f),u=zs(u,f,o,null),S.return=s,u.return=s,S.sibling=u,s.child=S,f=s.child,f.memoizedState=Xd(o),f.childLanes=Wd(n,v,o),s.memoizedState=$d,u):(Ur(s),Zd(s,S))}if(C=n.memoizedState,C!==null&&(S=C.dehydrated,S!==null)){if(d)s.flags&256?(Ur(s),s.flags&=-257,s=Jd(n,s,o)):s.memoizedState!==null?(zr(),s.child=n.child,s.flags|=128,s=null):(zr(),f=u.fallback,S=s.mode,u=Yc({mode:"visible",children:u.children},S),f=zs(f,S,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,to(s,n.child,null,o),u=s.child,u.memoizedState=Xd(o),u.childLanes=Wd(n,v,o),s.memoizedState=$d,s=f);else if(Ur(s),kp(S)){if(v=S.nextSibling&&S.nextSibling.dataset,v)var B=v.dgst;v=B,u=Error(r(419)),u.stack="",u.digest=v,_l({value:u,source:null,stack:null}),s=Jd(n,s,o)}else if(kt||yl(n,s,o,!1),v=(o&n.childLanes)!==0,kt||v){if(v=tt,v!==null&&(u=o&-o,u=(u&42)!==0?1:Rr(u),u=(u&(v.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,qa(n,u),Nn(v,n,u),Gy;S.data==="$?"||_p(),s=Jd(n,s,o)}else S.data==="$?"?(s.flags|=192,s.child=n.child,s=null):(n=C.treeContext,dt=Wn(S.nextSibling),dn=s,je=!0,js=null,vi=!1,n!==null&&(Un[zn++]=Ki,Un[zn++]=Yi,Un[zn++]=Bs,Ki=n.id,Yi=n.overflow,Bs=s),s=Zd(s,u.children),s.flags|=4096);return s}return f?(zr(),f=u.fallback,S=s.mode,C=n.child,B=C.sibling,u=Gi(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,B!==null?f=Gi(B,f):(f=zs(f,S,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,S=n.child.memoizedState,S===null?S=Xd(o):(C=S.cachePool,C!==null?(B=It._currentValue,C=C.parent!==B?{parent:B,pool:B}:C):C=B_(),S={baseLanes:S.baseLanes|o,cachePool:C}),f.memoizedState=S,f.childLanes=Wd(n,v,o),s.memoizedState=$d,u):(Ur(s),o=n.child,n=o.sibling,o=Gi(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,n!==null&&(v=s.deletions,v===null?(s.deletions=[n],s.flags|=16):v.push(n)),s.child=o,s.memoizedState=null,o)}function Zd(n,s){return s=Yc({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function Yc(n,s){return n=bn(22,n,null,s),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Jd(n,s,o){return to(s,n.child,null,o),n=Zd(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function tv(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),_d(n.return,s,o)}function ep(n,s,o,u,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(d.isBackwards=s,d.rendering=null,d.renderingStartTime=0,d.last=u,d.tail=o,d.tailMode=f)}function nv(n,s,o){var u=s.pendingProps,f=u.revealOrder,d=u.tail;if(Kt(n,s,u.children,o),u=Nt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tv(n,o,s);else if(n.tag===19)tv(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(ie(Nt,u),f){case"forwards":for(o=s.child,f=null;o!==null;)n=o.alternate,n!==null&&Fc(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),ep(s,!1,f,o,d);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(n=f.alternate,n!==null&&Fc(n)===null){s.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}ep(s,!0,o,null,d);break;case"together":ep(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Zi(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),qr|=s.lanes,(o&s.childLanes)===0)if(n!==null){if(yl(n,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(r(153));if(s.child!==null){for(n=s.child,o=Gi(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=Gi(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function tp(n,s){return(n.lanes&s)!==0?!0:(n=n.dependencies,!!(n!==null&&Cc(n)))}function Gw(n,s,o){switch(s.tag){case 3:et(s,s.stateNode.containerInfo),xr(s,It,n.memoizedState.cache),gl();break;case 27:case 5:wr(s);break;case 4:et(s,s.stateNode.containerInfo);break;case 10:xr(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(Ur(s),s.flags|=128,null):(o&s.child.childLanes)!==0?ev(n,s,o):(Ur(s),n=Zi(n,s,o),n!==null?n.sibling:null);Ur(s);break;case 19:var f=(n.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(yl(n,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return nv(n,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Nt,Nt.current),u)break;return null;case 22:case 23:return s.lanes=0,$y(n,s,o);case 24:xr(s,It,n.memoizedState.cache)}return Zi(n,s,o)}function iv(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps)kt=!0;else{if(!tp(n,o)&&(s.flags&128)===0)return kt=!1,Gw(n,s,o);kt=(n.flags&131072)!==0}else kt=!1,je&&(s.flags&1048576)!==0&&x_(s,Rc,s.index);switch(s.lanes=0,s.tag){case 16:e:{n=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")cd(u)?(n=Qs(u,n),s.tag=1,s=Zy(null,s,u,n,o)):(s.tag=0,s=Qd(null,s,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===de){s.tag=11,s=Ky(null,s,u,n,o);break e}else if(f===x){s.tag=14,s=Yy(null,s,u,n,o);break e}}throw s=Ft(u)||u,Error(r(306,s,""))}}return s;case 0:return Qd(n,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=Qs(u,s.pendingProps),Zy(n,s,u,f,o);case 3:e:{if(et(s,s.stateNode.containerInfo),n===null)throw Error(r(387));u=s.pendingProps;var d=s.memoizedState;f=d.element,bd(n,s),wl(s,u,null,o);var v=s.memoizedState;if(u=v.cache,xr(s,It,u),u!==d.cache&&yd(s,[It],o,!0),bl(),u=v.element,d.isDehydrated)if(d={element:u,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=d,s.memoizedState=d,s.flags&256){s=Jy(n,s,u,o);break e}else if(u!==f){f=Ln(Error(r(424)),s),_l(f),s=Jy(n,s,u,o);break e}else{switch(n=s.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(dt=Wn(n.firstChild),dn=s,je=!0,js=null,vi=!0,o=Py(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(gl(),u===f){s=Zi(n,s,o);break e}Kt(n,s,u,o)}s=s.child}return s;case 26:return Kc(n,s),n===null?(o=oE(s.type,null,s.pendingProps,null))?s.memoizedState=o:je||(o=s.type,n=s.pendingProps,u=oh(Ee.current).createElement(o),u[wt]=s,u[vt]=n,Qt(u,o,n),gt(u),s.stateNode=u):s.memoizedState=oE(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return wr(s),n===null&&je&&(u=s.stateNode=rE(s.type,s.pendingProps,Ee.current),dn=s,vi=!0,f=dt,Qr(s.type)?(Pp=f,dt=Wn(u.firstChild)):dt=f),Kt(n,s,s.pendingProps.children,o),Kc(n,s),n===null&&(s.flags|=4194304),s.child;case 5:return n===null&&je&&((f=u=dt)&&(u=vR(u,s.type,s.pendingProps,vi),u!==null?(s.stateNode=u,dn=s,dt=Wn(u.firstChild),vi=!1,f=!0):f=!1),f||Fs(s)),wr(s),f=s.type,d=s.pendingProps,v=n!==null?n.memoizedProps:null,u=d.children,Dp(f,d)?u=null:v!==null&&Dp(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=Od(n,s,Vw,null,null,o),Yl._currentValue=f),Kc(n,s),Kt(n,s,u,o),s.child;case 6:return n===null&&je&&((n=o=dt)&&(o=ER(o,s.pendingProps,vi),o!==null?(s.stateNode=o,dn=s,dt=null,n=!0):n=!1),n||Fs(s)),null;case 13:return ev(n,s,o);case 4:return et(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=to(s,null,u,o):Kt(n,s,u,o),s.child;case 11:return Ky(n,s,s.type,s.pendingProps,o);case 7:return Kt(n,s,s.pendingProps,o),s.child;case 8:return Kt(n,s,s.pendingProps.children,o),s.child;case 12:return Kt(n,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,xr(s,s.type,u.value),Kt(n,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,Gs(s),f=tn(f),u=u(f),s.flags|=1,Kt(n,s,u,o),s.child;case 14:return Yy(n,s,s.type,s.pendingProps,o);case 15:return Qy(n,s,s.type,s.pendingProps,o);case 19:return nv(n,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},n===null?(o=Yc(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Gi(n.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return $y(n,s,o);case 24:return Gs(s),u=tn(It),n===null?(f=Td(),f===null&&(f=tt,d=vd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=o),f=d),s.memoizedState={parent:u,cache:f},Ad(s),xr(s,It,f)):((n.lanes&o)!==0&&(bd(n,s),wl(s,null,null,o),bl()),f=n.memoizedState,d=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),xr(s,It,u)):(u=d.cache,xr(s,It,u),u!==f.cache&&yd(s,[It],o,!0))),Kt(n,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}function Ji(n){n.flags|=4}function rv(n,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!fE(s)){if(s=Bn.current,s!==null&&((Le&4194048)===Le?Ei!==null:(Le&62914560)!==Le&&(Le&536870912)===0||s!==Ei))throw Sl=Sd,H_;n.flags|=8192}}function Qc(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?$o():536870912,n.lanes|=s,so|=s)}function Ml(n,s){if(!je)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function ut(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function Kw(n,s,o){var u=s.pendingProps;switch(pd(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(s),null;case 1:return ut(s),null;case 3:return o=s.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),$i(It),oi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(ml(s)?Ji(s):n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,L_())),ut(s),null;case 26:return o=s.memoizedState,n===null?(Ji(s),o!==null?(ut(s),rv(s,o)):(ut(s),s.flags&=-16777217)):o?o!==n.memoizedState?(Ji(s),ut(s),rv(s,o)):(ut(s),s.flags&=-16777217):(n.memoizedProps!==u&&Ji(s),ut(s),s.flags&=-16777217),null;case 27:Mi(s),o=Ee.current;var f=s.type;if(n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Ji(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return ut(s),null}n=me.current,ml(s)?k_(s):(n=rE(f,u,o),s.stateNode=n,Ji(s))}return ut(s),null;case 5:if(Mi(s),o=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Ji(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return ut(s),null}if(n=me.current,ml(s))k_(s);else{switch(f=oh(Ee.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[wt]=s,n[vt]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=n;e:switch(Qt(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ji(s)}}return ut(s),s.flags&=-16777217,null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==u&&Ji(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(r(166));if(n=Ee.current,ml(s)){if(n=s.stateNode,o=s.memoizedProps,u=null,f=dn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[wt]=s,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Wv(n.nodeValue,o)),n||Fs(s)}else n=oh(n).createTextNode(u),n[wt]=s,s.stateNode=n}return ut(s),null;case 13:if(u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=ml(s),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[wt]=s}else gl(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ut(s),f=!1}else f=L_(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Wi(s),s):(Wi(s),null)}if(Wi(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var d=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(d=u.memoizedState.cachePool.pool),d!==f&&(u.flags|=2048)}return o!==n&&o&&(s.child.flags|=8192),Qc(s,s.updateQueue),ut(s),null;case 4:return oi(),n===null&&Rp(s.stateNode.containerInfo),ut(s),null;case 10:return $i(s.type),ut(s),null;case 19:if(oe(Nt),f=s.memoizedState,f===null)return ut(s),null;if(u=(s.flags&128)!==0,d=f.rendering,d===null)if(u)Ml(f,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(d=Fc(n),d!==null){for(s.flags|=128,Ml(f,!1),n=d.updateQueue,s.updateQueue=n,Qc(s,n),s.subtreeFlags=0,n=o,o=s.child;o!==null;)M_(o,n),o=o.sibling;return ie(Nt,Nt.current&1|2),s.child}n=n.sibling}f.tail!==null&&On()>Wc&&(s.flags|=128,u=!0,Ml(f,!1),s.lanes=4194304)}else{if(!u)if(n=Fc(d),n!==null){if(s.flags|=128,u=!0,n=n.updateQueue,s.updateQueue=n,Qc(s,n),Ml(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!je)return ut(s),null}else 2*On()-f.renderingStartTime>Wc&&o!==536870912&&(s.flags|=128,u=!0,Ml(f,!1),s.lanes=4194304);f.isBackwards?(d.sibling=s.child,s.child=d):(n=f.last,n!==null?n.sibling=d:s.child=d,f.last=d)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=On(),s.sibling=null,n=Nt.current,ie(Nt,u?n&1|2:n&1),s):(ut(s),null);case 22:case 23:return Wi(s),Id(),u=s.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(ut(s),s.subtreeFlags&6&&(s.flags|=8192)):ut(s),o=s.updateQueue,o!==null&&Qc(s,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),n!==null&&oe(Ks),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),$i(It),ut(s),null;case 25:return null;case 30:return null}throw Error(r(156,s.tag))}function Yw(n,s){switch(pd(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return $i(It),oi(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return Mi(s),null;case 13:if(Wi(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(r(340));gl()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return oe(Nt),null;case 4:return oi(),null;case 10:return $i(s.type),null;case 22:case 23:return Wi(s),Id(),n!==null&&oe(Ks),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return $i(It),null;case 25:return null;default:return null}}function sv(n,s){switch(pd(s),s.tag){case 3:$i(It),oi();break;case 26:case 27:case 5:Mi(s);break;case 4:oi();break;case 13:Wi(s);break;case 19:oe(Nt);break;case 10:$i(s.type);break;case 22:case 23:Wi(s),Id(),n!==null&&oe(Ks);break;case 24:$i(It)}}function xl(n,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var d=o.create,v=o.inst;u=d(),v.destroy=u}o=o.next}while(o!==f)}}catch(S){Je(s,s.return,S)}}function Br(n,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var d=f.next;u=d;do{if((u.tag&n)===n){var v=u.inst,S=v.destroy;if(S!==void 0){v.destroy=void 0,f=s;var C=o,B=S;try{B()}catch(Y){Je(f,C,Y)}}}u=u.next}while(u!==d)}}catch(Y){Je(s,s.return,Y)}}function av(n){var s=n.updateQueue;if(s!==null){var o=n.stateNode;try{Y_(s,o)}catch(u){Je(n,n.return,u)}}}function ov(n,s,o){o.props=Qs(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){Je(n,s,u)}}function kl(n,s){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){Je(n,s,f)}}function Ti(n,s){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){Je(n,s,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Je(n,s,f)}else o.current=null}function lv(n){var s=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){Je(n,n.return,f)}}function np(n,s,o){try{var u=n.stateNode;pR(u,n.type,o,s),u[vt]=s}catch(f){Je(n,n.return,f)}}function uv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Qr(n.type)||n.tag===4}function ip(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||uv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Qr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rp(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(n),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=ah));else if(u!==4&&(u===27&&Qr(n.type)&&(o=n.stateNode,s=null),n=n.child,n!==null))for(rp(n,s,o),n=n.sibling;n!==null;)rp(n,s,o),n=n.sibling}function $c(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(u===27&&Qr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for($c(n,s,o),n=n.sibling;n!==null;)$c(n,s,o),n=n.sibling}function cv(n){var s=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Qt(s,u,o),s[wt]=n,s[vt]=o}catch(d){Je(n,n.return,d)}}var er=!1,yt=!1,sp=!1,hv=typeof WeakSet=="function"?WeakSet:Set,Pt=null;function Qw(n,s){if(n=n.containerInfo,Np=dh,n=S_(n),id(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,d=u.focusNode;u=u.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var v=0,S=-1,C=-1,B=0,Y=0,W=n,H=null;t:for(;;){for(var j;W!==o||f!==0&&W.nodeType!==3||(S=v+f),W!==d||u!==0&&W.nodeType!==3||(C=v+u),W.nodeType===3&&(v+=W.nodeValue.length),(j=W.firstChild)!==null;)H=W,W=j;for(;;){if(W===n)break t;if(H===o&&++B===f&&(S=v),H===d&&++Y===u&&(C=v),(j=W.nextSibling)!==null)break;W=H,H=W.parentNode}W=j}o=S===-1||C===-1?null:{start:S,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(Op={focusedElem:n,selectionRange:o},dh=!1,Pt=s;Pt!==null;)if(s=Pt,n=s.child,(s.subtreeFlags&1024)!==0&&n!==null)n.return=s,Pt=n;else for(;Pt!==null;){switch(s=Pt,d=s.alternate,n=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,o=s,f=d.memoizedProps,d=d.memoizedState,u=o.stateNode;try{var ve=Qs(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(ve,d),u.__reactInternalSnapshotBeforeUpdate=n}catch(ge){Je(o,o.return,ge)}}break;case 3:if((n&1024)!==0){if(n=s.stateNode.containerInfo,o=n.nodeType,o===9)xp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":xp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=s.sibling,n!==null){n.return=s.return,Pt=n;break}Pt=s.return}}function fv(n,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Hr(n,o),u&4&&xl(5,o);break;case 1:if(Hr(n,o),u&4)if(n=o.stateNode,s===null)try{n.componentDidMount()}catch(v){Je(o,o.return,v)}else{var f=Qs(o.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(f,s,n.__reactInternalSnapshotBeforeUpdate)}catch(v){Je(o,o.return,v)}}u&64&&av(o),u&512&&kl(o,o.return);break;case 3:if(Hr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{Y_(n,s)}catch(v){Je(o,o.return,v)}}break;case 27:s===null&&u&4&&cv(o);case 26:case 5:Hr(n,o),s===null&&u&4&&lv(o),u&512&&kl(o,o.return);break;case 12:Hr(n,o);break;case 13:Hr(n,o),u&4&&mv(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=iR.bind(null,o),TR(n,o))));break;case 22:if(u=o.memoizedState!==null||er,!u){s=s!==null&&s.memoizedState!==null||yt,f=er;var d=yt;er=u,(yt=s)&&!d?jr(n,o,(o.subtreeFlags&8772)!==0):Hr(n,o),er=f,yt=d}break;case 30:break;default:Hr(n,o)}}function dv(n){var s=n.alternate;s!==null&&(n.alternate=null,dv(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&Nr(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ot=null,mn=!1;function tr(n,s,o){for(o=o.child;o!==null;)pv(n,s,o),o=o.sibling}function pv(n,s,o){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ft,o)}catch{}switch(o.tag){case 26:yt||Ti(o,s),tr(n,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:yt||Ti(o,s);var u=ot,f=mn;Qr(o.type)&&(ot=o.stateNode,mn=!1),tr(n,s,o),Fl(o.stateNode),ot=u,mn=f;break;case 5:yt||Ti(o,s);case 6:if(u=ot,f=mn,ot=null,tr(n,s,o),ot=u,mn=f,ot!==null)if(mn)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(o.stateNode)}catch(d){Je(o,s,d)}else try{ot.removeChild(o.stateNode)}catch(d){Je(o,s,d)}break;case 18:ot!==null&&(mn?(n=ot,nE(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Wl(n)):nE(ot,o.stateNode));break;case 4:u=ot,f=mn,ot=o.stateNode.containerInfo,mn=!0,tr(n,s,o),ot=u,mn=f;break;case 0:case 11:case 14:case 15:yt||Br(2,o,s),yt||Br(4,o,s),tr(n,s,o);break;case 1:yt||(Ti(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&ov(o,s,u)),tr(n,s,o);break;case 21:tr(n,s,o);break;case 22:yt=(u=yt)||o.memoizedState!==null,tr(n,s,o),yt=u;break;default:tr(n,s,o)}}function mv(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Wl(n)}catch(o){Je(s,s.return,o)}}function $w(n){switch(n.tag){case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new hv),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new hv),s;default:throw Error(r(435,n.tag))}}function ap(n,s){var o=$w(n);s.forEach(function(u){var f=rR.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function wn(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],d=n,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 27:if(Qr(S.type)){ot=S.stateNode,mn=!1;break e}break;case 5:ot=S.stateNode,mn=!1;break e;case 3:case 4:ot=S.stateNode.containerInfo,mn=!0;break e}S=S.return}if(ot===null)throw Error(r(160));pv(d,v,f),ot=null,mn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)gv(s,n),s=s.sibling}var Xn=null;function gv(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:wn(s,n),Rn(n),u&4&&(Br(3,n,n.return),xl(3,n),Br(5,n,n.return));break;case 1:wn(s,n),Rn(n),u&512&&(yt||o===null||Ti(o,o.return)),u&64&&er&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=Xn;if(wn(s,n),Rn(n),u&512&&(yt||o===null||Ti(o,o.return)),u&4){var d=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":d=f.getElementsByTagName("title")[0],(!d||d[As]||d[wt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(u),f.head.insertBefore(d,f.querySelector("head > title"))),Qt(d,u,o),d[wt]=n,gt(d),u=d;break e;case"link":var v=cE("link","href",f).get(u+(o.href||""));if(v){for(var S=0;S<v.length;S++)if(d=v[S],d.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&d.getAttribute("rel")===(o.rel==null?null:o.rel)&&d.getAttribute("title")===(o.title==null?null:o.title)&&d.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(S,1);break t}}d=f.createElement(u),Qt(d,u,o),f.head.appendChild(d);break;case"meta":if(v=cE("meta","content",f).get(u+(o.content||""))){for(S=0;S<v.length;S++)if(d=v[S],d.getAttribute("content")===(o.content==null?null:""+o.content)&&d.getAttribute("name")===(o.name==null?null:o.name)&&d.getAttribute("property")===(o.property==null?null:o.property)&&d.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&d.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(S,1);break t}}d=f.createElement(u),Qt(d,u,o),f.head.appendChild(d);break;default:throw Error(r(468,u))}d[wt]=n,gt(d),u=d}n.stateNode=u}else hE(f,n.type,n.stateNode);else n.stateNode=uE(f,u,n.memoizedProps);else d!==u?(d===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):d.count--,u===null?hE(f,n.type,n.stateNode):uE(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&np(n,n.memoizedProps,o.memoizedProps)}break;case 27:wn(s,n),Rn(n),u&512&&(yt||o===null||Ti(o,o.return)),o!==null&&u&4&&np(n,n.memoizedProps,o.memoizedProps);break;case 5:if(wn(s,n),Rn(n),u&512&&(yt||o===null||Ti(o,o.return)),n.flags&32){f=n.stateNode;try{Mn(f,"")}catch(j){Je(n,n.return,j)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,np(n,f,o!==null?o.memoizedProps:f)),u&1024&&(sp=!0);break;case 6:if(wn(s,n),Rn(n),u&4){if(n.stateNode===null)throw Error(r(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(j){Je(n,n.return,j)}}break;case 3:if(ch=null,f=Xn,Xn=lh(s.containerInfo),wn(s,n),Xn=f,Rn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Wl(s.containerInfo)}catch(j){Je(n,n.return,j)}sp&&(sp=!1,_v(n));break;case 4:u=Xn,Xn=lh(n.stateNode.containerInfo),wn(s,n),Rn(n),Xn=u;break;case 12:wn(s,n),Rn(n);break;case 13:wn(s,n),Rn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(fp=On()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,ap(n,u)));break;case 22:f=n.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,B=er,Y=yt;if(er=B||f,yt=Y||C,wn(s,n),yt=Y,er=B,Rn(n),u&8192)e:for(s=n.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||C||er||yt||$s(n)),o=null,s=n;;){if(s.tag===5||s.tag===26){if(o===null){C=o=s;try{if(d=C.stateNode,f)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{S=C.stateNode;var W=C.memoizedProps.style,H=W!=null&&W.hasOwnProperty("display")?W.display:null;S.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(j){Je(C,C.return,j)}}}else if(s.tag===6){if(o===null){C=s;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(j){Je(C,C.return,j)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,ap(n,o))));break;case 19:wn(s,n),Rn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,ap(n,u)));break;case 30:break;case 21:break;default:wn(s,n),Rn(n)}}function Rn(n){var s=n.flags;if(s&2){try{for(var o,u=n.return;u!==null;){if(uv(u)){o=u;break}u=u.return}if(o==null)throw Error(r(160));switch(o.tag){case 27:var f=o.stateNode,d=ip(n);$c(n,d,f);break;case 5:var v=o.stateNode;o.flags&32&&(Mn(v,""),o.flags&=-33);var S=ip(n);$c(n,S,v);break;case 3:case 4:var C=o.stateNode.containerInfo,B=ip(n);rp(n,B,C);break;default:throw Error(r(161))}}catch(Y){Je(n,n.return,Y)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function _v(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;_v(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function Hr(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)fv(n,s.alternate,s),s=s.sibling}function $s(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:Br(4,s,s.return),$s(s);break;case 1:Ti(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&ov(s,s.return,o),$s(s);break;case 27:Fl(s.stateNode);case 26:case 5:Ti(s,s.return),$s(s);break;case 22:s.memoizedState===null&&$s(s);break;case 30:$s(s);break;default:$s(s)}n=n.sibling}}function jr(n,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=n,d=s,v=d.flags;switch(d.tag){case 0:case 11:case 15:jr(f,d,o),xl(4,d);break;case 1:if(jr(f,d,o),u=d,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){Je(u,u.return,B)}if(u=d,f=u.updateQueue,f!==null){var S=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)K_(C[f],S)}catch(B){Je(u,u.return,B)}}o&&v&64&&av(d),kl(d,d.return);break;case 27:cv(d);case 26:case 5:jr(f,d,o),o&&u===null&&v&4&&lv(d),kl(d,d.return);break;case 12:jr(f,d,o);break;case 13:jr(f,d,o),o&&v&4&&mv(f,d);break;case 22:d.memoizedState===null&&jr(f,d,o),kl(d,d.return);break;case 30:break;default:jr(f,d,o)}s=s.sibling}}function op(n,s){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&vl(o))}function lp(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&vl(n))}function Si(n,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)yv(n,s,o,u),s=s.sibling}function yv(n,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Si(n,s,o,u),f&2048&&xl(9,s);break;case 1:Si(n,s,o,u);break;case 3:Si(n,s,o,u),f&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&vl(n)));break;case 12:if(f&2048){Si(n,s,o,u),n=s.stateNode;try{var d=s.memoizedProps,v=d.id,S=d.onPostCommit;typeof S=="function"&&S(v,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(C){Je(s,s.return,C)}}else Si(n,s,o,u);break;case 13:Si(n,s,o,u);break;case 23:break;case 22:d=s.stateNode,v=s.alternate,s.memoizedState!==null?d._visibility&2?Si(n,s,o,u):Pl(n,s):d._visibility&2?Si(n,s,o,u):(d._visibility|=2,no(n,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&op(v,s);break;case 24:Si(n,s,o,u),f&2048&&lp(s.alternate,s);break;default:Si(n,s,o,u)}}function no(n,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var d=n,v=s,S=o,C=u,B=v.flags;switch(v.tag){case 0:case 11:case 15:no(d,v,S,C,f),xl(8,v);break;case 23:break;case 22:var Y=v.stateNode;v.memoizedState!==null?Y._visibility&2?no(d,v,S,C,f):Pl(d,v):(Y._visibility|=2,no(d,v,S,C,f)),f&&B&2048&&op(v.alternate,v);break;case 24:no(d,v,S,C,f),f&&B&2048&&lp(v.alternate,v);break;default:no(d,v,S,C,f)}s=s.sibling}}function Pl(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=n,u=s,f=u.flags;switch(u.tag){case 22:Pl(o,u),f&2048&&op(u.alternate,u);break;case 24:Pl(o,u),f&2048&&lp(u.alternate,u);break;default:Pl(o,u)}s=s.sibling}}var Ll=8192;function io(n){if(n.subtreeFlags&Ll)for(n=n.child;n!==null;)vv(n),n=n.sibling}function vv(n){switch(n.tag){case 26:io(n),n.flags&Ll&&n.memoizedState!==null&&kR(Xn,n.memoizedState,n.memoizedProps);break;case 5:io(n);break;case 3:case 4:var s=Xn;Xn=lh(n.stateNode.containerInfo),io(n),Xn=s;break;case 22:n.memoizedState===null&&(s=n.alternate,s!==null&&s.memoizedState!==null?(s=Ll,Ll=16777216,io(n),Ll=s):io(n));break;default:io(n)}}function Ev(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function Vl(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Pt=u,Sv(u,n)}Ev(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tv(n),n=n.sibling}function Tv(n){switch(n.tag){case 0:case 11:case 15:Vl(n),n.flags&2048&&Br(9,n,n.return);break;case 3:Vl(n);break;case 12:Vl(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&2&&(n.return===null||n.return.tag!==13)?(s._visibility&=-3,Xc(n)):Vl(n);break;default:Vl(n)}}function Xc(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Pt=u,Sv(u,n)}Ev(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:Br(8,s,s.return),Xc(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Xc(s));break;default:Xc(s)}n=n.sibling}}function Sv(n,s){for(;Pt!==null;){var o=Pt;switch(o.tag){case 0:case 11:case 15:Br(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:vl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Pt=u;else e:for(o=n;Pt!==null;){u=Pt;var f=u.sibling,d=u.return;if(dv(u),u===o){Pt=null;break e}if(f!==null){f.return=d,Pt=f;break e}Pt=d}}}var Xw={getCacheForType:function(n){var s=tn(It),o=s.data.get(n);return o===void 0&&(o=n(),s.data.set(n,o)),o}},Ww=typeof WeakMap=="function"?WeakMap:Map,Ke=0,tt=null,Ne=null,Le=0,Ye=0,Cn=null,Fr=!1,ro=!1,up=!1,nr=0,pt=0,qr=0,Xs=0,cp=0,Hn=0,so=0,Ul=null,gn=null,hp=!1,fp=0,Wc=1/0,Zc=null,Gr=null,Yt=0,Kr=null,ao=null,oo=0,dp=0,pp=null,Av=null,zl=0,mp=null;function In(){if((Ke&2)!==0&&Le!==0)return Le&-Le;if(K.T!==null){var n=Qa;return n!==0?n:Sp()}return Cr()}function bv(){Hn===0&&(Hn=(Le&536870912)===0||je?Qo():536870912);var n=Bn.current;return n!==null&&(n.flags|=32),Hn}function Nn(n,s,o){(n===tt&&(Ye===2||Ye===9)||n.cancelPendingCommit!==null)&&(lo(n,0),Yr(n,Le,Hn,!1)),ki(n,o),((Ke&2)===0||n!==tt)&&(n===tt&&((Ke&2)===0&&(Xs|=o),pt===4&&Yr(n,Le,Hn,!1)),Ai(n))}function wv(n,s,o){if((Ke&6)!==0)throw Error(r(327));var u=!o&&(s&124)===0&&(s&n.expiredLanes)===0||Ss(n,s),f=u?eR(n,s):yp(n,s,!0),d=u;do{if(f===0){ro&&!u&&Yr(n,s,0,!1);break}else{if(o=n.current.alternate,d&&!Zw(o)){f=yp(n,s,!1),d=!1;continue}if(f===2){if(d=s,n.errorRecoveryDisabledLanes&d)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;e:{var S=n;f=Ul;var C=S.current.memoizedState.isDehydrated;if(C&&(lo(S,v).flags|=256),v=yp(S,v,!1),v!==2){if(up&&!C){S.errorRecoveryDisabledLanes|=d,Xs|=d,f=4;break e}d=gn,gn=f,d!==null&&(gn===null?gn=d:gn.push.apply(gn,d))}f=v}if(d=!1,f!==2)continue}}if(f===1){lo(n,0),Yr(n,s,0,!0);break}e:{switch(u=n,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((s&4194048)!==s)break;case 6:Yr(u,s,Hn,!Fr);break e;case 2:gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((s&62914560)===s&&(f=fp+300-On(),10<f)){if(Yr(u,s,Hn,!Fr),wa(u,0,!0)!==0)break e;u.timeoutHandle=eE(Rv.bind(null,u,o,gn,Zc,hp,s,Hn,Xs,so,Fr,d,2,-0,0),f);break e}Rv(u,o,gn,Zc,hp,s,Hn,Xs,so,Fr,d,0,-0,0)}}break}while(!0);Ai(n)}function Rv(n,s,o,u,f,d,v,S,C,B,Y,W,H,j){if(n.timeoutHandle=-1,W=s.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:xR},vv(s),W=PR(),W!==null)){n.cancelPendingCommit=W(xv.bind(null,n,s,d,o,u,f,v,S,C,Y,1,H,j)),Yr(n,d,v,!B);return}xv(n,s,d,o,u,f,v,S,C)}function Zw(n){for(var s=n;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],d=f.getSnapshot;f=f.value;try{if(!An(d(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Yr(n,s,o,u){s&=~cp,s&=~Xs,n.suspendedLanes|=s,n.pingedLanes&=~s,u&&(n.warmLanes|=s),u=n.expirationTimes;for(var f=s;0<f;){var d=31-en(f),v=1<<d;u[d]=-1,f&=~v}o!==0&&li(n,o,s)}function Jc(){return(Ke&6)===0?(Bl(0),!1):!0}function gp(){if(Ne!==null){if(Ye===0)var n=Ne.return;else n=Ne,Qi=qs=null,xd(n),eo=null,Ol=0,n=Ne;for(;n!==null;)sv(n.alternate,n),n=n.return;Ne=null}}function lo(n,s){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,gR(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),gp(),tt=n,Ne=o=Gi(n.current,null),Le=s,Ye=0,Cn=null,Fr=!1,ro=Ss(n,s),up=!1,so=Hn=cp=Xs=qr=pt=0,gn=Ul=null,hp=!1,(s&8)!==0&&(s|=s&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=s;0<u;){var f=31-en(u),d=1<<f;s|=n[f],u&=~d}return nr=s,Tc(),o}function Cv(n,s){be=null,K.H=Bc,s===Tl||s===Oc?(s=q_(),Ye=3):s===H_?(s=q_(),Ye=4):Ye=s===Gy?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Cn=s,Ne===null&&(pt=1,Gc(n,Ln(s,n.current)))}function Iv(){var n=K.H;return K.H=Bc,n===null?Bc:n}function Nv(){var n=K.A;return K.A=Xw,n}function _p(){pt=4,Fr||(Le&4194048)!==Le&&Bn.current!==null||(ro=!0),(qr&134217727)===0&&(Xs&134217727)===0||tt===null||Yr(tt,Le,Hn,!1)}function yp(n,s,o){var u=Ke;Ke|=2;var f=Iv(),d=Nv();(tt!==n||Le!==s)&&(Zc=null,lo(n,s)),s=!1;var v=pt;e:do try{if(Ye!==0&&Ne!==null){var S=Ne,C=Cn;switch(Ye){case 8:gp(),v=6;break e;case 3:case 2:case 9:case 6:Bn.current===null&&(s=!0);var B=Ye;if(Ye=0,Cn=null,uo(n,S,C,B),o&&ro){v=0;break e}break;default:B=Ye,Ye=0,Cn=null,uo(n,S,C,B)}}Jw(),v=pt;break}catch(Y){Cv(n,Y)}while(!0);return s&&n.shellSuspendCounter++,Qi=qs=null,Ke=u,K.H=f,K.A=d,Ne===null&&(tt=null,Le=0,Tc()),v}function Jw(){for(;Ne!==null;)Ov(Ne)}function eR(n,s){var o=Ke;Ke|=2;var u=Iv(),f=Nv();tt!==n||Le!==s?(Zc=null,Wc=On()+500,lo(n,s)):ro=Ss(n,s);e:do try{if(Ye!==0&&Ne!==null){s=Ne;var d=Cn;t:switch(Ye){case 1:Ye=0,Cn=null,uo(n,s,d,1);break;case 2:case 9:if(j_(d)){Ye=0,Cn=null,Dv(s);break}s=function(){Ye!==2&&Ye!==9||tt!==n||(Ye=7),Ai(n)},d.then(s,s);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:j_(d)?(Ye=0,Cn=null,Dv(s)):(Ye=0,Cn=null,uo(n,s,d,7));break;case 5:var v=null;switch(Ne.tag){case 26:v=Ne.memoizedState;case 5:case 27:var S=Ne;if(!v||fE(v)){Ye=0,Cn=null;var C=S.sibling;if(C!==null)Ne=C;else{var B=S.return;B!==null?(Ne=B,eh(B)):Ne=null}break t}}Ye=0,Cn=null,uo(n,s,d,5);break;case 6:Ye=0,Cn=null,uo(n,s,d,6);break;case 8:gp(),pt=6;break e;default:throw Error(r(462))}}tR();break}catch(Y){Cv(n,Y)}while(!0);return Qi=qs=null,K.H=u,K.A=f,Ke=o,Ne!==null?0:(tt=null,Le=0,Tc(),pt)}function tR(){for(;Ne!==null&&!qo();)Ov(Ne)}function Ov(n){var s=iv(n.alternate,n,nr);n.memoizedProps=n.pendingProps,s===null?eh(n):Ne=s}function Dv(n){var s=n,o=s.alternate;switch(s.tag){case 15:case 0:s=Wy(o,s,s.pendingProps,s.type,void 0,Le);break;case 11:s=Wy(o,s,s.pendingProps,s.type.render,s.ref,Le);break;case 5:xd(s);default:sv(o,s),s=Ne=M_(s,nr),s=iv(o,s,nr)}n.memoizedProps=n.pendingProps,s===null?eh(n):Ne=s}function uo(n,s,o,u){Qi=qs=null,xd(s),eo=null,Ol=0;var f=s.return;try{if(qw(n,f,s,o,Le)){pt=1,Gc(n,Ln(o,n.current)),Ne=null;return}}catch(d){if(f!==null)throw Ne=f,d;pt=1,Gc(n,Ln(o,n.current)),Ne=null;return}s.flags&32768?(je||u===1?n=!0:ro||(Le&536870912)!==0?n=!1:(Fr=n=!0,(u===2||u===9||u===3||u===6)&&(u=Bn.current,u!==null&&u.tag===13&&(u.flags|=16384))),Mv(s,n)):eh(s)}function eh(n){var s=n;do{if((s.flags&32768)!==0){Mv(s,Fr);return}n=s.return;var o=Kw(s.alternate,s,nr);if(o!==null){Ne=o;return}if(s=s.sibling,s!==null){Ne=s;return}Ne=s=n}while(s!==null);pt===0&&(pt=5)}function Mv(n,s){do{var o=Yw(n.alternate,n);if(o!==null){o.flags&=32767,Ne=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(n=n.sibling,n!==null)){Ne=n;return}Ne=n=o}while(n!==null);pt=6,Ne=null}function xv(n,s,o,u,f,d,v,S,C){n.cancelPendingCommit=null;do th();while(Yt!==0);if((Ke&6)!==0)throw Error(r(327));if(s!==null){if(s===n.current)throw Error(r(177));if(d=s.lanes|s.childLanes,d|=ld,Xo(n,o,d,v,S,C),n===tt&&(Ne=tt=null,Le=0),ao=s,Kr=n,oo=o,dp=d,pp=f,Av=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,sR(ys,function(){return Uv(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=K.T,K.T=null,f=ae.p,ae.p=2,v=Ke,Ke|=4;try{Qw(n,s,o)}finally{Ke=v,ae.p=f,K.T=u}}Yt=1,kv(),Pv(),Lv()}}function kv(){if(Yt===1){Yt=0;var n=Kr,s=ao,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=K.T,K.T=null;var u=ae.p;ae.p=2;var f=Ke;Ke|=4;try{gv(s,n);var d=Op,v=S_(n.containerInfo),S=d.focusedElem,C=d.selectionRange;if(v!==S&&S&&S.ownerDocument&&T_(S.ownerDocument.documentElement,S)){if(C!==null&&id(S)){var B=C.start,Y=C.end;if(Y===void 0&&(Y=B),"selectionStart"in S)S.selectionStart=B,S.selectionEnd=Math.min(Y,S.value.length);else{var W=S.ownerDocument||document,H=W&&W.defaultView||window;if(H.getSelection){var j=H.getSelection(),ve=S.textContent.length,ge=Math.min(C.start,ve),We=C.end===void 0?ge:Math.min(C.end,ve);!j.extend&&ge>We&&(v=We,We=ge,ge=v);var P=E_(S,ge),M=E_(S,We);if(P&&M&&(j.rangeCount!==1||j.anchorNode!==P.node||j.anchorOffset!==P.offset||j.focusNode!==M.node||j.focusOffset!==M.offset)){var z=W.createRange();z.setStart(P.node,P.offset),j.removeAllRanges(),ge>We?(j.addRange(z),j.extend(M.node,M.offset)):(z.setEnd(M.node,M.offset),j.addRange(z))}}}}for(W=[],j=S;j=j.parentNode;)j.nodeType===1&&W.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<W.length;S++){var $=W[S];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}dh=!!Np,Op=Np=null}finally{Ke=f,ae.p=u,K.T=o}}n.current=s,Yt=2}}function Pv(){if(Yt===2){Yt=0;var n=Kr,s=ao,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=K.T,K.T=null;var u=ae.p;ae.p=2;var f=Ke;Ke|=4;try{fv(n,s.alternate,s)}finally{Ke=f,ae.p=u,K.T=o}}Yt=3}}function Lv(){if(Yt===4||Yt===3){Yt=0,Xu();var n=Kr,s=ao,o=oo,u=Av;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Yt=5:(Yt=0,ao=Kr=null,Vv(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Gr=null),Ra(o),s=s.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ft,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=K.T,f=ae.p,ae.p=2,K.T=null;try{for(var d=n.onRecoverableError,v=0;v<u.length;v++){var S=u[v];d(S.value,{componentStack:S.stack})}}finally{K.T=s,ae.p=f}}(oo&3)!==0&&th(),Ai(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===mp?zl++:(zl=0,mp=n):zl=0,Bl(0)}}function Vv(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,vl(s)))}function th(n){return kv(),Pv(),Lv(),Uv()}function Uv(){if(Yt!==5)return!1;var n=Kr,s=dp;dp=0;var o=Ra(oo),u=K.T,f=ae.p;try{ae.p=32>o?32:o,K.T=null,o=pp,pp=null;var d=Kr,v=oo;if(Yt=0,ao=Kr=null,oo=0,(Ke&6)!==0)throw Error(r(331));var S=Ke;if(Ke|=4,Tv(d.current),yv(d,d.current,v,o),Ke=S,Bl(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ft,d)}catch{}return!0}finally{ae.p=f,K.T=u,Vv(n,s)}}function zv(n,s,o){s=Ln(o,s),s=Yd(n.stateNode,s,2),n=Lr(n,s,2),n!==null&&(ki(n,2),Ai(n))}function Je(n,s,o){if(n.tag===3)zv(n,n,o);else for(;s!==null;){if(s.tag===3){zv(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Gr===null||!Gr.has(u))){n=Ln(o,n),o=Fy(2),u=Lr(s,o,2),u!==null&&(qy(o,u,s,n),ki(u,2),Ai(u));break}}s=s.return}}function vp(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Ww;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(up=!0,f.add(o),n=nR.bind(null,n,s,o),s.then(n,n))}function nR(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,tt===n&&(Le&o)===o&&(pt===4||pt===3&&(Le&62914560)===Le&&300>On()-fp?(Ke&2)===0&&lo(n,0):cp|=o,so===Le&&(so=0)),Ai(n)}function Bv(n,s){s===0&&(s=$o()),n=qa(n,s),n!==null&&(ki(n,s),Ai(n))}function iR(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),Bv(n,o)}function rR(n,s){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(s),Bv(n,o)}function sR(n,s){return gs(n,s)}var nh=null,co=null,Ep=!1,ih=!1,Tp=!1,Ws=0;function Ai(n){n!==co&&n.next===null&&(co===null?nh=co=n:co=co.next=n),ih=!0,Ep||(Ep=!0,oR())}function Bl(n,s){if(!Tp&&ih){Tp=!0;do for(var o=!1,u=nh;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var d=0;else{var v=u.suspendedLanes,S=u.pingedLanes;d=(1<<31-en(42|n)+1)-1,d&=f&~(v&~S),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(o=!0,qv(u,d))}else d=Le,d=wa(u,u===tt?d:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(d&3)===0||Ss(u,d)||(o=!0,qv(u,d));u=u.next}while(o);Tp=!1}}function aR(){Hv()}function Hv(){ih=Ep=!1;var n=0;Ws!==0&&(mR()&&(n=Ws),Ws=0);for(var s=On(),o=null,u=nh;u!==null;){var f=u.next,d=jv(u,s);d===0?(u.next=null,o===null?nh=f:o.next=f,f===null&&(co=o)):(o=u,(n!==0||(d&3)!==0)&&(ih=!0)),u=f}Bl(n)}function jv(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var v=31-en(d),S=1<<v,C=f[v];C===-1?((S&o)===0||(S&u)!==0)&&(f[v]=Yo(S,s)):C<=s&&(n.expiredLanes|=S),d&=~S}if(s=tt,o=Le,o=wa(n,n===s?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===s&&(Ye===2||Ye===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&_s(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Ss(n,o)){if(s=o&-o,s===n.callbackPriority)return s;switch(u!==null&&_s(u),Ra(o)){case 2:case 8:o=Aa;break;case 32:o=ys;break;case 268435456:o=ba;break;default:o=ys}return u=Fv.bind(null,n),o=gs(o,u),n.callbackPriority=s,n.callbackNode=o,s}return u!==null&&u!==null&&_s(u),n.callbackPriority=2,n.callbackNode=null,2}function Fv(n,s){if(Yt!==0&&Yt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(th()&&n.callbackNode!==o)return null;var u=Le;return u=wa(n,n===tt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(wv(n,u,s),jv(n,On()),n.callbackNode!=null&&n.callbackNode===o?Fv.bind(null,n):null)}function qv(n,s){if(th())return null;wv(n,s,!0)}function oR(){_R(function(){(Ke&6)!==0?gs(Go,aR):Hv()})}function Sp(){return Ws===0&&(Ws=Qo()),Ws}function Gv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ma(""+n)}function Kv(n,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,n.id&&o.setAttribute("form",n.id),s.parentNode.insertBefore(o,s),n=new FormData(n),o.parentNode.removeChild(o),n}function lR(n,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var d=Gv((f[vt]||null).action),v=u.submitter;v&&(s=(s=v[vt]||null)?Gv(s.formAction):v.getAttribute("formAction"),s!==null&&(d=s,v=null));var S=new xa("action","action",null,u,f);n.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ws!==0){var C=v?Kv(f,v):new FormData(f);jd(o,{pending:!0,data:C,method:f.method,action:d},null,C)}}else typeof d=="function"&&(S.preventDefault(),C=v?Kv(f,v):new FormData(f),jd(o,{pending:!0,data:C,method:f.method,action:d},d,C))},currentTarget:f}]})}}for(var Ap=0;Ap<od.length;Ap++){var bp=od[Ap],uR=bp.toLowerCase(),cR=bp[0].toUpperCase()+bp.slice(1);$n(uR,"on"+cR)}$n(w_,"onAnimationEnd"),$n(R_,"onAnimationIteration"),$n(C_,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(Cw,"onTransitionRun"),$n(Iw,"onTransitionStart"),$n(Nw,"onTransitionCancel"),$n(I_,"onTransitionEnd"),Li("onMouseEnter",["mouseout","mouseover"]),Li("onMouseLeave",["mouseout","mouseover"]),Li("onPointerEnter",["pointerout","pointerover"]),Li("onPointerLeave",["pointerout","pointerover"]),Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hl));function Yv(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var d=void 0;if(s)for(var v=u.length-1;0<=v;v--){var S=u[v],C=S.instance,B=S.currentTarget;if(S=S.listener,C!==d&&f.isPropagationStopped())break e;d=S,f.currentTarget=B;try{d(f)}catch(Y){qc(Y)}f.currentTarget=null,d=C}else for(v=0;v<u.length;v++){if(S=u[v],C=S.instance,B=S.currentTarget,S=S.listener,C!==d&&f.isPropagationStopped())break e;d=S,f.currentTarget=B;try{d(f)}catch(Y){qc(Y)}f.currentTarget=null,d=C}}}}function Oe(n,s){var o=s[Zo];o===void 0&&(o=s[Zo]=new Set);var u=n+"__bubble";o.has(u)||(Qv(s,n,2,!1),o.add(u))}function wp(n,s,o){var u=0;s&&(u|=4),Qv(o,n,u,s)}var rh="_reactListening"+Math.random().toString(36).slice(2);function Rp(n){if(!n[rh]){n[rh]=!0,Jo.forEach(function(o){o!=="selectionchange"&&(hR.has(o)||wp(o,!1,n),wp(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[rh]||(s[rh]=!0,wp("selectionchange",!1,s))}}function Qv(n,s,o,u){switch(yE(s)){case 2:var f=UR;break;case 8:f=zR;break;default:f=Bp}o=f.bind(null,s,o,n),f=void 0,!kn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(s,o,{capture:!0,passive:f}):n.addEventListener(s,o,!0):f!==void 0?n.addEventListener(s,o,{passive:f}):n.addEventListener(s,o,!1)}function Cp(n,s,o,u,f){var d=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var S=u.stateNode.containerInfo;if(S===f)break;if(v===4)for(v=u.return;v!==null;){var C=v.tag;if((C===3||C===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;S!==null;){if(v=Pi(S),v===null)return;if(C=v.tag,C===5||C===6||C===26||C===27){u=d=v;continue e}S=S.parentNode}}u=u.return}ac(function(){var B=d,Y=xn(o),W=[];e:{var H=N_.get(n);if(H!==void 0){var j=xa,ve=n;switch(n){case"keypress":if(pi(o)===0)break e;case"keydown":case"keyup":j=za;break;case"focusin":ve="focus",j=La;break;case"focusout":ve="blur",j=La;break;case"beforeblur":case"afterblur":j=La;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Jf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=pc;break;case w_:case R_:case C_:j=Va;break;case I_:j=gc;break;case"scroll":case"scrollend":j=oc;break;case"wheel":j=Ba;break;case"copy":case"cut":case"paste":j=Ua;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=hl;break;case"toggle":case"beforetoggle":j=yc}var ge=(s&4)!==0,We=!ge&&(n==="scroll"||n==="scrollend"),P=ge?H!==null?H+"Capture":null:H;ge=[];for(var M=B,z;M!==null;){var $=M;if(z=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||z===null||P===null||($=Os(M,P),$!=null&&ge.push(jl(M,$,z))),We)break;M=M.return}0<ge.length&&(H=new j(H,ve,null,o,Y),W.push({event:H,listeners:ge}))}}if((s&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",j=n==="mouseout"||n==="pointerout",H&&o!==zi&&(ve=o.relatedTarget||o.fromElement)&&(Pi(ve)||ve[Dn]))break e;if((j||H)&&(H=Y.window===Y?Y:(H=Y.ownerDocument)?H.defaultView||H.parentWindow:window,j?(ve=o.relatedTarget||o.toElement,j=B,ve=ve?Pi(ve):null,ve!==null&&(We=l(ve),ge=ve.tag,ve!==We||ge!==5&&ge!==27&&ge!==6)&&(ve=null)):(j=null,ve=B),j!==ve)){if(ge=Pn,$="onMouseLeave",P="onMouseEnter",M="mouse",(n==="pointerout"||n==="pointerover")&&(ge=hl,$="onPointerLeave",P="onPointerEnter",M="pointer"),We=j==null?H:ci(j),z=ve==null?H:ci(ve),H=new ge($,M+"leave",j,o,Y),H.target=We,H.relatedTarget=z,$=null,Pi(Y)===B&&(ge=new ge(P,M+"enter",ve,o,Y),ge.target=z,ge.relatedTarget=We,$=ge),We=$,j&&ve)t:{for(ge=j,P=ve,M=0,z=ge;z;z=ho(z))M++;for(z=0,$=P;$;$=ho($))z++;for(;0<M-z;)ge=ho(ge),M--;for(;0<z-M;)P=ho(P),z--;for(;M--;){if(ge===P||P!==null&&ge===P.alternate)break t;ge=ho(ge),P=ho(P)}ge=null}else ge=null;j!==null&&$v(W,H,j,ge,!1),ve!==null&&We!==null&&$v(W,We,ve,ge,!0)}}e:{if(H=B?ci(B):window,j=H.nodeName&&H.nodeName.toLowerCase(),j==="select"||j==="input"&&H.type==="file")var ue=p_;else if(Ct(H))if(m_)ue=bw;else{ue=Sw;var Ce=Tw}else j=H.nodeName,!j||j.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?B&&rl(B.elementType)&&(ue=p_):ue=Aw;if(ue&&(ue=ue(n,B))){qi(W,ue,o,Y);break e}Ce&&Ce(n,H,B),n==="focusout"&&B&&H.type==="number"&&B.memoizedProps.value!=null&&Dr(H,"number",H.value)}switch(Ce=B?ci(B):window,n){case"focusin":(Ct(Ce)||Ce.contentEditable==="true")&&(Ha=Ce,rd=B,pl=null);break;case"focusout":pl=rd=Ha=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,A_(W,o,Y);break;case"selectionchange":if(Rw)break;case"keydown":case"keyup":A_(W,o,Y)}var fe;if(_i)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else ke?F(n,o)&&(_e="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(_e="onCompositionStart");_e&&(y&&o.locale!=="ko"&&(ke||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&ke&&(fe=al()):(di=Y,Mr="value"in di?di.value:di.textContent,ke=!0)),Ce=sh(B,_e),0<Ce.length&&(_e=new ul(_e,n,null,o,Y),W.push({event:_e,listeners:Ce}),fe?_e.data=fe:(fe=re(o),fe!==null&&(_e.data=fe)))),(fe=_?Rt(n,o):Pe(n,o))&&(_e=sh(B,"onBeforeInput"),0<_e.length&&(Ce=new ul("onBeforeInput","beforeinput",null,o,Y),W.push({event:Ce,listeners:_e}),Ce.data=fe)),lR(W,n,B,o,Y)}Yv(W,s)})}function jl(n,s,o){return{instance:n,listener:s,currentTarget:o}}function sh(n,s){for(var o=s+"Capture",u=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Os(n,o),f!=null&&u.unshift(jl(n,f,d)),f=Os(n,s),f!=null&&u.push(jl(n,f,d))),n.tag===3)return u;n=n.return}return[]}function ho(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function $v(n,s,o,u,f){for(var d=s._reactName,v=[];o!==null&&o!==u;){var S=o,C=S.alternate,B=S.stateNode;if(S=S.tag,C!==null&&C===u)break;S!==5&&S!==26&&S!==27||B===null||(C=B,f?(B=Os(o,d),B!=null&&v.unshift(jl(o,B,C))):f||(B=Os(o,d),B!=null&&v.push(jl(o,B,C)))),o=o.return}v.length!==0&&n.push({event:s,listeners:v})}var fR=/\r\n?/g,dR=/\u0000|\uFFFD/g;function Xv(n){return(typeof n=="string"?n:""+n).replace(fR,`
`).replace(dR,"")}function Wv(n,s){return s=Xv(s),Xv(n)===s}function ah(){}function Xe(n,s,o,u,f,d){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Mn(n,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Mn(n,""+u);break;case"className":hi(n,"class",u);break;case"tabIndex":hi(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":hi(n,o,u);break;case"style":il(n,u,d);break;case"data":if(s!=="object"){hi(n,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ma(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(o==="formAction"?(s!=="input"&&Xe(n,s,"name",f.name,f,null),Xe(n,s,"formEncType",f.formEncType,f,null),Xe(n,s,"formMethod",f.formMethod,f,null),Xe(n,s,"formTarget",f.formTarget,f,null)):(Xe(n,s,"encType",f.encType,f,null),Xe(n,s,"method",f.method,f,null),Xe(n,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ma(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=ah);break;case"onScroll":u!=null&&Oe("scroll",n);break;case"onScrollEnd":u!=null&&Oe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Ma(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Oe("beforetoggle",n),Oe("toggle",n),Or(n,"popover",u);break;case"xlinkActuate":qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":qt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":qt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":qt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":qt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Or(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Wf.get(o)||o,Or(n,o,u))}}function Ip(n,s,o,u,f,d){switch(o){case"style":il(n,u,d);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Mn(n,u):(typeof u=="number"||typeof u=="bigint")&&Mn(n,""+u);break;case"onScroll":u!=null&&Oe("scroll",n);break;case"onScrollEnd":u!=null&&Oe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=ah);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ca.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),d=n[vt]||null,d=d!=null?d[o]:null,typeof d=="function"&&n.removeEventListener(s,d,f),typeof u=="function")){typeof d!="function"&&d!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(s,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Or(n,o,u)}}}function Qt(n,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",n),Oe("load",n);var u=!1,f=!1,d;for(d in o)if(o.hasOwnProperty(d)){var v=o[d];if(v!=null)switch(d){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Xe(n,s,d,v,o,null)}}f&&Xe(n,s,"srcSet",o.srcSet,o,null),u&&Xe(n,s,"src",o.src,o,null);return;case"input":Oe("invalid",n);var S=d=v=f=null,C=null,B=null;for(u in o)if(o.hasOwnProperty(u)){var Y=o[u];if(Y!=null)switch(u){case"name":f=Y;break;case"type":v=Y;break;case"checked":C=Y;break;case"defaultChecked":B=Y;break;case"value":d=Y;break;case"defaultValue":S=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(r(137,s));break;default:Xe(n,s,u,Y,o,null)}}Cs(n,d,S,C,B,v,f,!1),Da(n);return;case"select":Oe("invalid",n),u=v=d=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":d=S;break;case"defaultValue":v=S;break;case"multiple":u=S;default:Xe(n,s,f,S,o,null)}s=d,o=v,n.multiple=!!u,s!=null?Ui(n,!!u,s,!1):o!=null&&Ui(n,!!u,o,!0);return;case"textarea":Oe("invalid",n),d=f=u=null;for(v in o)if(o.hasOwnProperty(v)&&(S=o[v],S!=null))switch(v){case"value":u=S;break;case"defaultValue":f=S;break;case"children":d=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(r(91));break;default:Xe(n,s,v,S,o,null)}Is(n,u,f,d),Da(n);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Xe(n,s,C,u,o,null)}return;case"dialog":Oe("beforetoggle",n),Oe("toggle",n),Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":Oe("load",n);break;case"video":case"audio":for(u=0;u<Hl.length;u++)Oe(Hl[u],n);break;case"image":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"embed":case"source":case"link":Oe("error",n),Oe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in o)if(o.hasOwnProperty(B)&&(u=o[B],u!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Xe(n,s,B,u,o,null)}return;default:if(rl(s)){for(Y in o)o.hasOwnProperty(Y)&&(u=o[Y],u!==void 0&&Ip(n,s,Y,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&Xe(n,s,S,u,o,null))}function pR(n,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,v=null,S=null,C=null,B=null,Y=null;for(j in o){var W=o[j];if(o.hasOwnProperty(j)&&W!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":C=W;default:u.hasOwnProperty(j)||Xe(n,s,j,null,u,W)}}for(var H in u){var j=u[H];if(W=o[H],u.hasOwnProperty(H)&&(j!=null||W!=null))switch(H){case"type":d=j;break;case"name":f=j;break;case"checked":B=j;break;case"defaultChecked":Y=j;break;case"value":v=j;break;case"defaultValue":S=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,s));break;default:j!==W&&Xe(n,s,H,j,u,W)}}Sn(n,v,S,C,B,Y,d,f);return;case"select":j=v=S=H=null;for(d in o)if(C=o[d],o.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":j=C;default:u.hasOwnProperty(d)||Xe(n,s,d,null,u,C)}for(f in u)if(d=u[f],C=o[f],u.hasOwnProperty(f)&&(d!=null||C!=null))switch(f){case"value":H=d;break;case"defaultValue":S=d;break;case"multiple":v=d;default:d!==C&&Xe(n,s,f,d,u,C)}s=S,o=v,u=j,H!=null?Ui(n,!!o,H,!1):!!u!=!!o&&(s!=null?Ui(n,!!o,s,!0):Ui(n,!!o,o?[]:"",!1));return;case"textarea":j=H=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Xe(n,s,S,null,u,f)}for(v in u)if(f=u[v],d=o[v],u.hasOwnProperty(v)&&(f!=null||d!=null))switch(v){case"value":H=f;break;case"defaultValue":j=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Xe(n,s,v,f,u,d)}Qe(n,H,j);return;case"option":for(var ve in o)if(H=o[ve],o.hasOwnProperty(ve)&&H!=null&&!u.hasOwnProperty(ve))switch(ve){case"selected":n.selected=!1;break;default:Xe(n,s,ve,null,u,H)}for(C in u)if(H=u[C],j=o[C],u.hasOwnProperty(C)&&H!==j&&(H!=null||j!=null))switch(C){case"selected":n.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Xe(n,s,C,H,u,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in o)H=o[ge],o.hasOwnProperty(ge)&&H!=null&&!u.hasOwnProperty(ge)&&Xe(n,s,ge,null,u,H);for(B in u)if(H=u[B],j=o[B],u.hasOwnProperty(B)&&H!==j&&(H!=null||j!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,s));break;default:Xe(n,s,B,H,u,j)}return;default:if(rl(s)){for(var We in o)H=o[We],o.hasOwnProperty(We)&&H!==void 0&&!u.hasOwnProperty(We)&&Ip(n,s,We,void 0,u,H);for(Y in u)H=u[Y],j=o[Y],!u.hasOwnProperty(Y)||H===j||H===void 0&&j===void 0||Ip(n,s,Y,H,u,j);return}}for(var P in o)H=o[P],o.hasOwnProperty(P)&&H!=null&&!u.hasOwnProperty(P)&&Xe(n,s,P,null,u,H);for(W in u)H=u[W],j=o[W],!u.hasOwnProperty(W)||H===j||H==null&&j==null||Xe(n,s,W,H,u,j)}var Np=null,Op=null;function oh(n){return n.nodeType===9?n:n.ownerDocument}function Zv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jv(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function Dp(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Mp=null;function mR(){var n=window.event;return n&&n.type==="popstate"?n===Mp?!1:(Mp=n,!0):(Mp=null,!1)}var eE=typeof setTimeout=="function"?setTimeout:void 0,gR=typeof clearTimeout=="function"?clearTimeout:void 0,tE=typeof Promise=="function"?Promise:void 0,_R=typeof queueMicrotask=="function"?queueMicrotask:typeof tE<"u"?function(n){return tE.resolve(null).then(n).catch(yR)}:eE;function yR(n){setTimeout(function(){throw n})}function Qr(n){return n==="head"}function nE(n,s){var o=s,u=0,f=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(0<u&&8>u){o=u;var v=n.ownerDocument;if(o&1&&Fl(v.documentElement),o&2&&Fl(v.body),o&4)for(o=v.head,Fl(o),v=o.firstChild;v;){var S=v.nextSibling,C=v.nodeName;v[As]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&v.rel.toLowerCase()==="stylesheet"||o.removeChild(v),v=S}}if(f===0){n.removeChild(d),Wl(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=d}while(o);Wl(s)}function xp(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":xp(o),Nr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function vR(n,s,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[As])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=Wn(n.nextSibling),n===null)break}return null}function ER(n,s,o){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Wn(n.nextSibling),n===null))return null;return n}function kp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function TR(n,s){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Wn(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return n}var Pp=null;function iE(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return n;s--}else o==="/$"&&s++}n=n.previousSibling}return null}function rE(n,s,o){switch(s=oh(o),n){case"html":if(n=s.documentElement,!n)throw Error(r(452));return n;case"head":if(n=s.head,!n)throw Error(r(453));return n;case"body":if(n=s.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Fl(n){for(var s=n.attributes;s.length;)n.removeAttributeNode(s[0]);Nr(n)}var jn=new Map,sE=new Set;function lh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ir=ae.d;ae.d={f:SR,r:AR,D:bR,C:wR,L:RR,m:CR,X:NR,S:IR,M:OR};function SR(){var n=ir.f(),s=Jc();return n||s}function AR(n){var s=ui(n);s!==null&&s.tag===5&&s.type==="form"?wy(s):ir.r(n)}var fo=typeof document>"u"?null:document;function aE(n,s,o){var u=fo;if(u&&typeof s=="string"&&s){var f=Et(s);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),sE.has(f)||(sE.add(f),n={rel:n,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),Qt(s,"link",n),gt(s),u.head.appendChild(s)))}}function bR(n){ir.D(n),aE("dns-prefetch",n,null)}function wR(n,s){ir.C(n,s),aE("preconnect",n,s)}function RR(n,s,o){ir.L(n,s,o);var u=fo;if(u&&n&&s){var f='link[rel="preload"][as="'+Et(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Et(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Et(o.imageSizes)+'"]')):f+='[href="'+Et(n)+'"]';var d=f;switch(s){case"style":d=po(n);break;case"script":d=mo(n)}jn.has(d)||(n=E({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:n,as:s},o),jn.set(d,n),u.querySelector(f)!==null||s==="style"&&u.querySelector(ql(d))||s==="script"&&u.querySelector(Gl(d))||(s=u.createElement("link"),Qt(s,"link",n),gt(s),u.head.appendChild(s)))}}function CR(n,s){ir.m(n,s);var o=fo;if(o&&n){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Et(u)+'"][href="'+Et(n)+'"]',d=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=mo(n)}if(!jn.has(d)&&(n=E({rel:"modulepreload",href:n},s),jn.set(d,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Gl(d)))return}u=o.createElement("link"),Qt(u,"link",n),gt(u),o.head.appendChild(u)}}}function IR(n,s,o){ir.S(n,s,o);var u=fo;if(u&&n){var f=cn(u).hoistableStyles,d=po(n);s=s||"default";var v=f.get(d);if(!v){var S={loading:0,preload:null};if(v=u.querySelector(ql(d)))S.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":s},o),(o=jn.get(d))&&Lp(n,o);var C=v=u.createElement("link");gt(C),Qt(C,"link",n),C._p=new Promise(function(B,Y){C.onload=B,C.onerror=Y}),C.addEventListener("load",function(){S.loading|=1}),C.addEventListener("error",function(){S.loading|=2}),S.loading|=4,uh(v,s,u)}v={type:"stylesheet",instance:v,count:1,state:S},f.set(d,v)}}}function NR(n,s){ir.X(n,s);var o=fo;if(o&&n){var u=cn(o).hoistableScripts,f=mo(n),d=u.get(f);d||(d=o.querySelector(Gl(f)),d||(n=E({src:n,async:!0},s),(s=jn.get(f))&&Vp(n,s),d=o.createElement("script"),gt(d),Qt(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function OR(n,s){ir.M(n,s);var o=fo;if(o&&n){var u=cn(o).hoistableScripts,f=mo(n),d=u.get(f);d||(d=o.querySelector(Gl(f)),d||(n=E({src:n,async:!0,type:"module"},s),(s=jn.get(f))&&Vp(n,s),d=o.createElement("script"),gt(d),Qt(d,"link",n),o.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},u.set(f,d))}}function oE(n,s,o,u){var f=(f=Ee.current)?lh(f):null;if(!f)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=po(o.href),o=cn(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=po(o.href);var d=cn(f).hoistableStyles,v=d.get(n);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,v),(d=f.querySelector(ql(n)))&&!d._p&&(v.instance=d,v.state.loading=5),jn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},jn.set(n,o),d||DR(f,n,o,v.state))),s&&u===null)throw Error(r(528,""));return v}if(s&&u!==null)throw Error(r(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=mo(o),o=cn(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function po(n){return'href="'+Et(n)+'"'}function ql(n){return'link[rel="stylesheet"]['+n+"]"}function lE(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function DR(n,s,o,u){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=n.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),Qt(s,"link",o),gt(s),n.head.appendChild(s))}function mo(n){return'[src="'+Et(n)+'"]'}function Gl(n){return"script[async]"+n}function uE(n,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=n.querySelector('style[data-href~="'+Et(o.href)+'"]');if(u)return s.instance=u,gt(u),u;var f=E({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),gt(u),Qt(u,"style",f),uh(u,o.precedence,n),s.instance=u;case"stylesheet":f=po(o.href);var d=n.querySelector(ql(f));if(d)return s.state.loading|=4,s.instance=d,gt(d),d;u=lE(o),(f=jn.get(f))&&Lp(u,f),d=(n.ownerDocument||n).createElement("link"),gt(d);var v=d;return v._p=new Promise(function(S,C){v.onload=S,v.onerror=C}),Qt(d,"link",u),s.state.loading|=4,uh(d,o.precedence,n),s.instance=d;case"script":return d=mo(o.src),(f=n.querySelector(Gl(d)))?(s.instance=f,gt(f),f):(u=o,(f=jn.get(d))&&(u=E({},o),Vp(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),gt(f),Qt(f,"link",u),n.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,uh(u,o.precedence,n));return s.instance}function uh(n,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,d=f,v=0;v<u.length;v++){var S=u[v];if(S.dataset.precedence===s)d=S;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(n,s.firstChild))}function Lp(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function Vp(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var ch=null;function cE(n,s,o){if(ch===null){var u=new Map,f=ch=new Map;f.set(o,u)}else f=ch,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var d=o[f];if(!(d[As]||d[wt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(s)||"";v=n+v;var S=u.get(v);S?S.push(d):u.set(v,[d])}}return u}function hE(n,s,o){n=n.ownerDocument||n,n.head.insertBefore(o,s==="title"?n.querySelector("head > title"):null)}function MR(n,s,o){if(o===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return n=s.disabled,typeof s.precedence=="string"&&n==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function fE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Kl=null;function xR(){}function kR(n,s,o){if(Kl===null)throw Error(r(475));var u=Kl;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=po(o.href),d=n.querySelector(ql(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=hh.bind(u),n.then(u,u)),s.state.loading|=4,s.instance=d,gt(d);return}d=n.ownerDocument||n,o=lE(o),(f=jn.get(f))&&Lp(o,f),d=d.createElement("link"),gt(d);var v=d;v._p=new Promise(function(S,C){v.onload=S,v.onerror=C}),Qt(d,"link",o),s.instance=d}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=hh.bind(u),n.addEventListener("load",s),n.addEventListener("error",s))}}function PR(){if(Kl===null)throw Error(r(475));var n=Kl;return n.stylesheets&&n.count===0&&Up(n,n.stylesheets),0<n.count?function(s){var o=setTimeout(function(){if(n.stylesheets&&Up(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(o)}}:null}function hh(){if(this.count--,this.count===0){if(this.stylesheets)Up(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var fh=null;function Up(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,fh=new Map,s.forEach(LR,n),fh=null,hh.call(n))}function LR(n,s){if(!(s.state.loading&4)){var o=fh.get(n);if(o)var u=o.get(null);else{o=new Map,fh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var v=f[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),u=v)}u&&o.set(null,u)}f=s.instance,v=f.getAttribute("data-precedence"),d=o.get(v)||u,d===u&&o.set(null,f),o.set(v,f),this.count++,u=hh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),s.state.loading|=4}}var Yl={$$typeof:te,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function VR(n,s,o,u,f,d,v,S){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xi(0),this.hiddenUpdates=xi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function dE(n,s,o,u,f,d,v,S,C,B,Y,W){return n=new VR(n,s,o,v,S,C,B,W),s=1,d===!0&&(s|=24),d=bn(3,null,null,s),n.current=d,d.stateNode=n,s=vd(),s.refCount++,n.pooledCache=s,s.refCount++,d.memoizedState={element:u,isDehydrated:o,cache:s},Ad(d),n}function pE(n){return n?(n=Ga,n):Ga}function mE(n,s,o,u,f,d){f=pE(f),u.context===null?u.context=f:u.pendingContext=f,u=Pr(s),u.payload={element:o},d=d===void 0?null:d,d!==null&&(u.callback=d),o=Lr(n,u,s),o!==null&&(Nn(o,n,s),Al(o,n,s))}function gE(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function zp(n,s){gE(n,s),(n=n.alternate)&&gE(n,s)}function _E(n){if(n.tag===13){var s=qa(n,67108864);s!==null&&Nn(s,n,67108864),zp(n,67108864)}}var dh=!0;function UR(n,s,o,u){var f=K.T;K.T=null;var d=ae.p;try{ae.p=2,Bp(n,s,o,u)}finally{ae.p=d,K.T=f}}function zR(n,s,o,u){var f=K.T;K.T=null;var d=ae.p;try{ae.p=8,Bp(n,s,o,u)}finally{ae.p=d,K.T=f}}function Bp(n,s,o,u){if(dh){var f=Hp(u);if(f===null)Cp(n,s,u,ph,o),vE(n,u);else if(HR(f,n,s,o,u))u.stopPropagation();else if(vE(n,u),s&4&&-1<BR.indexOf(n)){for(;f!==null;){var d=ui(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Kn(d.pendingLanes);if(v!==0){var S=d;for(S.pendingLanes|=2,S.entangledLanes|=2;v;){var C=1<<31-en(v);S.entanglements[1]|=C,v&=~C}Ai(d),(Ke&6)===0&&(Wc=On()+500,Bl(0))}}break;case 13:S=qa(d,2),S!==null&&Nn(S,d,2),Jc(),zp(d,2)}if(d=Hp(u),d===null&&Cp(n,s,u,ph,o),d===f)break;f=d}f!==null&&u.stopPropagation()}else Cp(n,s,u,null,o)}}function Hp(n){return n=xn(n),jp(n)}var ph=null;function jp(n){if(ph=null,n=Pi(n),n!==null){var s=l(n);if(s===null)n=null;else{var o=s.tag;if(o===13){if(n=h(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return ph=n,null}function yE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gf()){case Go:return 2;case Aa:return 8;case ys:case Kf:return 32;case ba:return 268435456;default:return 32}default:return 32}}var Fp=!1,$r=null,Xr=null,Wr=null,Ql=new Map,$l=new Map,Zr=[],BR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vE(n,s){switch(n){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Ql.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(s.pointerId)}}function Xl(n,s,o,u,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:d,targetContainers:[f]},s!==null&&(s=ui(s),s!==null&&_E(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),n)}function HR(n,s,o,u,f){switch(s){case"focusin":return $r=Xl($r,n,s,o,u,f),!0;case"dragenter":return Xr=Xl(Xr,n,s,o,u,f),!0;case"mouseover":return Wr=Xl(Wr,n,s,o,u,f),!0;case"pointerover":var d=f.pointerId;return Ql.set(d,Xl(Ql.get(d)||null,n,s,o,u,f)),!0;case"gotpointercapture":return d=f.pointerId,$l.set(d,Xl($l.get(d)||null,n,s,o,u,f)),!0}return!1}function EE(n){var s=Pi(n.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=h(o),s!==null){n.blockedOn=s,Ju(n.priority,function(){if(o.tag===13){var u=In();u=Rr(u);var f=qa(o,u);f!==null&&Nn(f,o,u),zp(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function mh(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=Hp(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);zi=u,o.target.dispatchEvent(u),zi=null}else return s=ui(o),s!==null&&_E(s),n.blockedOn=o,!1;s.shift()}return!0}function TE(n,s,o){mh(n)&&o.delete(s)}function jR(){Fp=!1,$r!==null&&mh($r)&&($r=null),Xr!==null&&mh(Xr)&&(Xr=null),Wr!==null&&mh(Wr)&&(Wr=null),Ql.forEach(TE),$l.forEach(TE)}function gh(n,s){n.blockedOn===s&&(n.blockedOn=null,Fp||(Fp=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,jR)))}var _h=null;function SE(n){_h!==n&&(_h=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){_h===n&&(_h=null);for(var s=0;s<n.length;s+=3){var o=n[s],u=n[s+1],f=n[s+2];if(typeof u!="function"){if(jp(u||o)===null)continue;break}var d=ui(o);d!==null&&(n.splice(s,3),s-=3,jd(d,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Wl(n){function s(C){return gh(C,n)}$r!==null&&gh($r,n),Xr!==null&&gh(Xr,n),Wr!==null&&gh(Wr,n),Ql.forEach(s),$l.forEach(s);for(var o=0;o<Zr.length;o++){var u=Zr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<Zr.length&&(o=Zr[0],o.blockedOn===null);)EE(o),o.blockedOn===null&&Zr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],d=o[u+1],v=f[vt]||null;if(typeof d=="function")v||SE(o);else if(v){var S=null;if(d&&d.hasAttribute("formAction")){if(f=d,v=d[vt]||null)S=v.formAction;else if(jp(f)!==null)continue}else S=v.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),SE(o)}}}function qp(n){this._internalRoot=n}yh.prototype.render=qp.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(r(409));var o=s.current,u=In();mE(o,u,n,s,null,null)},yh.prototype.unmount=qp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;mE(n.current,2,null,n,null,null),Jc(),s[Dn]=null}};function yh(n){this._internalRoot=n}yh.prototype.unstable_scheduleHydration=function(n){if(n){var s=Cr();n={blockedOn:null,target:n,priority:s};for(var o=0;o<Zr.length&&s!==0&&s<Zr[o].priority;o++);Zr.splice(o,0,n),o===0&&EE(n)}};var AE=e.version;if(AE!=="19.1.0")throw Error(r(527,AE,"19.1.0"));ae.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=m(s),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var FR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vh.isDisabled&&vh.supportsFiber)try{ft=vh.inject(FR),Ge=vh}catch{}}return Jl.createRoot=function(n,s){if(!a(n))throw Error(r(299));var o=!1,u="",f=zy,d=By,v=Hy,S=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks)),s=dE(n,1,!1,null,null,o,u,f,d,v,S,null),n[Dn]=s.current,Rp(n),new qp(s)},Jl.hydrateRoot=function(n,s,o){if(!a(n))throw Error(r(299));var u=!1,f="",d=zy,v=By,S=Hy,C=null,B=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(d=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(B=o.formState)),s=dE(n,1,!0,s,o??null,u,f,d,v,S,C,B),s.context=pE(null),o=s.current,u=In(),u=Rr(u),f=Pr(u),f.callback=null,Lr(o,f,u),o=u,s.current.lanes=o,ki(s,o),Ai(s),n[Dn]=s.current,Rp(n),new yh(s)},Jl.version="19.1.0",Jl}var xE;function JR(){if(xE)return Yp.exports;xE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Yp.exports=ZR(),Yp.exports}var eC=JR(),eu={},kE;function tC(){if(kE)return eu;kE=1,Object.defineProperty(eu,"__esModule",{value:!0}),eu.parse=h,eu.serialize=g;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function h(b,L){const N=new l,G=b.length;if(G<2)return N;const q=(L==null?void 0:L.decode)||E;let X=0;do{const se=b.indexOf("=",X);if(se===-1)break;const te=b.indexOf(";",X),de=te===-1?G:te;if(se>de){X=b.lastIndexOf(";",se-1)+1;continue}const he=p(b,X,se),Ae=m(b,se,he),x=b.slice(he,Ae);if(N[x]===void 0){let w=p(b,se+1,de),R=m(b,de,w);const D=q(b.slice(w,R));N[x]=D}X=de+1}while(X<G);return N}function p(b,L,N){do{const G=b.charCodeAt(L);if(G!==32&&G!==9)return L}while(++L<N);return N}function m(b,L,N){for(;L>N;){const G=b.charCodeAt(--L);if(G!==32&&G!==9)return L+1}return N}function g(b,L,N){const G=(N==null?void 0:N.encode)||encodeURIComponent;if(!i.test(b))throw new TypeError(`argument name is invalid: ${b}`);const q=G(L);if(!e.test(q))throw new TypeError(`argument val is invalid: ${L}`);let X=b+"="+q;if(!N)return X;if(N.maxAge!==void 0){if(!Number.isInteger(N.maxAge))throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);X+="; Max-Age="+N.maxAge}if(N.domain){if(!t.test(N.domain))throw new TypeError(`option domain is invalid: ${N.domain}`);X+="; Domain="+N.domain}if(N.path){if(!r.test(N.path))throw new TypeError(`option path is invalid: ${N.path}`);X+="; Path="+N.path}if(N.expires){if(!T(N.expires)||!Number.isFinite(N.expires.valueOf()))throw new TypeError(`option expires is invalid: ${N.expires}`);X+="; Expires="+N.expires.toUTCString()}if(N.httpOnly&&(X+="; HttpOnly"),N.secure&&(X+="; Secure"),N.partitioned&&(X+="; Partitioned"),N.priority)switch(typeof N.priority=="string"?N.priority.toLowerCase():void 0){case"low":X+="; Priority=Low";break;case"medium":X+="; Priority=Medium";break;case"high":X+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${N.priority}`)}if(N.sameSite)switch(typeof N.sameSite=="string"?N.sameSite.toLowerCase():N.sameSite){case!0:case"strict":X+="; SameSite=Strict";break;case"lax":X+="; SameSite=Lax";break;case"none":X+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${N.sameSite}`)}return X}function E(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function T(b){return a.call(b)==="[object Date]"}return eu}tC();var PE="popstate";function nC(i={}){function e(r,a){let{pathname:l,search:h,hash:p}=r.location;return gm("",{pathname:l,search:h,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Eu(a)}return rC(e,t,null,i)}function ct(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Ii(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iC(){return Math.random().toString(36).substring(2,10)}function LE(i,e){return{usr:i.state,key:i.key,idx:e}}function gm(i,e,t=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?ko(e):e,state:t,key:e&&e.key||r||iC()}}function Eu({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function ko(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substring(r),i=i.substring(0,r)),i&&(e.pathname=i)}return e}function rC(i,e,t,r={}){let{window:a=document.defaultView,v5Compat:l=!1}=r,h=a.history,p="POP",m=null,g=E();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function E(){return(h.state||{idx:null}).idx}function T(){p="POP";let q=E(),X=q==null?null:q-g;g=q,m&&m({action:p,location:G.location,delta:X})}function b(q,X){p="PUSH";let se=gm(G.location,q,X);g=E()+1;let te=LE(se,g),de=G.createHref(se);try{h.pushState(te,"",de)}catch(he){if(he instanceof DOMException&&he.name==="DataCloneError")throw he;a.location.assign(de)}l&&m&&m({action:p,location:G.location,delta:1})}function L(q,X){p="REPLACE";let se=gm(G.location,q,X);g=E();let te=LE(se,g),de=G.createHref(se);h.replaceState(te,"",de),l&&m&&m({action:p,location:G.location,delta:0})}function N(q){let X=a.location.origin!=="null"?a.location.origin:a.location.href,se=typeof q=="string"?q:Eu(q);return se=se.replace(/ $/,"%20"),ct(X,`No window.location.(origin|href) available to create URL for href: ${se}`),new URL(se,X)}let G={get action(){return p},get location(){return i(a,h)},listen(q){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(PE,T),m=q,()=>{a.removeEventListener(PE,T),m=null}},createHref(q){return e(a,q)},createURL:N,encodeLocation(q){let X=N(q);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:b,replace:L,go(q){return h.go(q)}};return G}function B0(i,e,t="/"){return sC(i,e,t,!1)}function sC(i,e,t,r){let a=typeof e=="string"?ko(e):e,l=pr(a.pathname||"/",t);if(l==null)return null;let h=H0(i);aC(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=_C(l);p=mC(h[m],g,r)}return p}function H0(i,e=[],t=[],r=""){let a=(l,h,p)=>{let m={relativePath:p===void 0?l.path||"":p,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};m.relativePath.startsWith("/")&&(ct(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let g=ur([r,m.relativePath]),E=t.concat(m);l.children&&l.children.length>0&&(ct(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),H0(l.children,e,E,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:dC(g,l.index),routesMeta:E})};return i.forEach((l,h)=>{var p;if(l.path===""||!((p=l.path)!=null&&p.includes("?")))a(l,h);else for(let m of j0(l.path))a(l,h,m)}),e}function j0(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let h=j0(r.join("/")),p=[];return p.push(...h.map(m=>m===""?l:[l,m].join("/"))),a&&p.push(...h),p.map(m=>i.startsWith("/")&&m===""?"/":m)}function aC(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:pC(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var oC=/^:[\w-]+$/,lC=3,uC=2,cC=1,hC=10,fC=-2,VE=i=>i==="*";function dC(i,e){let t=i.split("/"),r=t.length;return t.some(VE)&&(r+=fC),e&&(r+=uC),t.filter(a=>!VE(a)).reduce((a,l)=>a+(oC.test(l)?lC:l===""?cC:hC),r)}function pC(i,e){return i.length===e.length&&i.slice(0,-1).every((r,a)=>r===e[a])?i[i.length-1]-e[e.length-1]:0}function mC(i,e,t=!1){let{routesMeta:r}=i,a={},l="/",h=[];for(let p=0;p<r.length;++p){let m=r[p],g=p===r.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=Bh({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},E),b=m.route;if(!T&&g&&t&&!r[r.length-1].route.index&&(T=Bh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},E)),!T)return null;Object.assign(a,T.params),h.push({params:a,pathname:ur([l,T.pathname]),pathnameBase:TC(ur([l,T.pathnameBase])),route:b}),T.pathnameBase!=="/"&&(l=ur([l,T.pathnameBase]))}return h}function Bh(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=gC(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let l=a[0],h=l.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:r.reduce((g,{paramName:E,isOptional:T},b)=>{if(E==="*"){let N=p[b]||"";h=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const L=p[b];return T&&!L?g[E]=void 0:g[E]=(L||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:h,pattern:i}}function gC(i,e=!1,t=!0){Ii(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(r.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function _C(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ii(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function pr(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function yC(i,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof i=="string"?ko(i):i;return{pathname:t?t.startsWith("/")?t:vC(t,e):e,search:SC(r),hash:AC(a)}}function vC(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Wp(i,e,t,r){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function EC(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function F0(i){let e=EC(i);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function q0(i,e,t,r=!1){let a;typeof i=="string"?a=ko(i):(a={...i},ct(!a.pathname||!a.pathname.includes("?"),Wp("?","pathname","search",a)),ct(!a.pathname||!a.pathname.includes("#"),Wp("#","pathname","hash",a)),ct(!a.search||!a.search.includes("#"),Wp("#","search","hash",a)));let l=i===""||a.pathname==="",h=l?"/":a.pathname,p;if(h==null)p=t;else{let T=e.length-1;if(!r&&h.startsWith("..")){let b=h.split("/");for(;b[0]==="..";)b.shift(),T-=1;a.pathname=b.join("/")}p=T>=0?e[T]:"/"}let m=yC(a,p),g=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||E)&&(m.pathname+="/"),m}var ur=i=>i.join("/").replace(/\/\/+/g,"/"),TC=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),SC=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,AC=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function bC(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var G0=["POST","PUT","PATCH","DELETE"];new Set(G0);var wC=["GET",...G0];new Set(wC);var Po=Q.createContext(null);Po.displayName="DataRouter";var vf=Q.createContext(null);vf.displayName="DataRouterState";var K0=Q.createContext({isTransitioning:!1});K0.displayName="ViewTransition";var RC=Q.createContext(new Map);RC.displayName="Fetchers";var CC=Q.createContext(null);CC.displayName="Await";var Di=Q.createContext(null);Di.displayName="Navigation";var xu=Q.createContext(null);xu.displayName="Location";var vr=Q.createContext({outlet:null,matches:[],isDataRoute:!1});vr.displayName="Route";var eg=Q.createContext(null);eg.displayName="RouteError";function IC(i,{relative:e}={}){ct(ku(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=Q.useContext(Di),{hash:a,pathname:l,search:h}=Pu(i,{relative:e}),p=l;return t!=="/"&&(p=l==="/"?t:ur([t,l])),r.createHref({pathname:p,search:h,hash:a})}function ku(){return Q.useContext(xu)!=null}function ga(){return ct(ku(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(xu).location}var Y0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q0(i){Q.useContext(Di).static||Q.useLayoutEffect(i)}function tg(){let{isDataRoute:i}=Q.useContext(vr);return i?HC():NC()}function NC(){ct(ku(),"useNavigate() may be used only in the context of a <Router> component.");let i=Q.useContext(Po),{basename:e,navigator:t}=Q.useContext(Di),{matches:r}=Q.useContext(vr),{pathname:a}=ga(),l=JSON.stringify(F0(r)),h=Q.useRef(!1);return Q0(()=>{h.current=!0}),Q.useCallback((m,g={})=>{if(Ii(h.current,Y0),!h.current)return;if(typeof m=="number"){t.go(m);return}let E=q0(m,JSON.parse(l),a,g.relative==="path");i==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:ur([e,E.pathname])),(g.replace?t.replace:t.push)(E,g.state,g)},[e,t,l,a,i])}Q.createContext(null);function Pu(i,{relative:e}={}){let{matches:t}=Q.useContext(vr),{pathname:r}=ga(),a=JSON.stringify(F0(t));return Q.useMemo(()=>q0(i,JSON.parse(a),r,e==="path"),[i,a,r,e])}function OC(i,e){return $0(i,e)}function $0(i,e,t,r){var se;ct(ku(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:l}=Q.useContext(Di),{matches:h}=Q.useContext(vr),p=h[h.length-1],m=p?p.params:{},g=p?p.pathname:"/",E=p?p.pathnameBase:"/",T=p&&p.route;{let te=T&&T.path||"";X0(g,!T||te.endsWith("*")||te.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${te}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${te}"> to <Route path="${te==="/"?"*":`${te}/*`}">.`)}let b=ga(),L;if(e){let te=typeof e=="string"?ko(e):e;ct(E==="/"||((se=te.pathname)==null?void 0:se.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${te.pathname}" was given in the \`location\` prop.`),L=te}else L=b;let N=L.pathname||"/",G=N;if(E!=="/"){let te=E.replace(/^\//,"").split("/");G="/"+N.replace(/^\//,"").split("/").slice(te.length).join("/")}let q=!l&&t&&t.matches&&t.matches.length>0?t.matches:B0(i,{pathname:G});Ii(T||q!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),Ii(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=PC(q&&q.map(te=>Object.assign({},te,{params:Object.assign({},m,te.params),pathname:ur([E,a.encodeLocation?a.encodeLocation(te.pathname).pathname:te.pathname]),pathnameBase:te.pathnameBase==="/"?E:ur([E,a.encodeLocation?a.encodeLocation(te.pathnameBase).pathname:te.pathnameBase])})),h,t,r);return e&&X?Q.createElement(xu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},X):X}function DC(){let i=BC(),e=bC(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",i),h=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:l},"ErrorBoundary")," or"," ",Q.createElement("code",{style:l},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),t?Q.createElement("pre",{style:a},t):null,h)}var MC=Q.createElement(DC,null),xC=class extends Q.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?Q.createElement(vr.Provider,{value:this.props.routeContext},Q.createElement(eg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function kC({routeContext:i,match:e,children:t}){let r=Q.useContext(Po);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(vr.Provider,{value:i},t)}function PC(i,e=[],t=null,r=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let a=i,l=t==null?void 0:t.errors;if(l!=null){let m=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);ct(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let h=!1,p=-1;if(t)for(let m=0;m<a.length;m++){let g=a[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:E,errors:T}=t,b=g.route.loader&&!E.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||b){h=!0,p>=0?a=a.slice(0,p+1):a=[a[0]];break}}}return a.reduceRight((m,g,E)=>{let T,b=!1,L=null,N=null;t&&(T=l&&g.route.id?l[g.route.id]:void 0,L=g.route.errorElement||MC,h&&(p<0&&E===0?(X0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,N=null):p===E&&(b=!0,N=g.route.hydrateFallbackElement||null)));let G=e.concat(a.slice(0,E+1)),q=()=>{let X;return T?X=L:b?X=N:g.route.Component?X=Q.createElement(g.route.Component,null):g.route.element?X=g.route.element:X=m,Q.createElement(kC,{match:g,routeContext:{outlet:m,matches:G,isDataRoute:t!=null},children:X})};return t&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?Q.createElement(xC,{location:t.location,revalidation:t.revalidation,component:L,error:T,children:q(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):q()},null)}function ng(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function LC(i){let e=Q.useContext(Po);return ct(e,ng(i)),e}function VC(i){let e=Q.useContext(vf);return ct(e,ng(i)),e}function UC(i){let e=Q.useContext(vr);return ct(e,ng(i)),e}function ig(i){let e=UC(i),t=e.matches[e.matches.length-1];return ct(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function zC(){return ig("useRouteId")}function BC(){var r;let i=Q.useContext(eg),e=VC("useRouteError"),t=ig("useRouteError");return i!==void 0?i:(r=e.errors)==null?void 0:r[t]}function HC(){let{router:i}=LC("useNavigate"),e=ig("useNavigate"),t=Q.useRef(!1);return Q0(()=>{t.current=!0}),Q.useCallback(async(a,l={})=>{Ii(t.current,Y0),t.current&&(typeof a=="number"?i.navigate(a):await i.navigate(a,{fromRouteId:e,...l}))},[i,e])}var UE={};function X0(i,e,t){!e&&!UE[i]&&(UE[i]=!0,Ii(!1,t))}Q.memo(jC);function jC({routes:i,future:e,state:t}){return $0(i,void 0,t,e)}function ou(i){ct(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function FC({basename:i="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:l=!1}){ct(!ku(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),p=Q.useMemo(()=>({basename:h,navigator:a,static:l,future:{}}),[h,a,l]);typeof t=="string"&&(t=ko(t));let{pathname:m="/",search:g="",hash:E="",state:T=null,key:b="default"}=t,L=Q.useMemo(()=>{let N=pr(m,h);return N==null?null:{location:{pathname:N,search:g,hash:E,state:T,key:b},navigationType:r}},[h,m,g,E,T,b,r]);return Ii(L!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:Q.createElement(Di.Provider,{value:p},Q.createElement(xu.Provider,{children:e,value:L}))}function qC({children:i,location:e}){return OC(_m(i),e)}function _m(i,e=[]){let t=[];return Q.Children.forEach(i,(r,a)=>{if(!Q.isValidElement(r))return;let l=[...e,a];if(r.type===Q.Fragment){t.push.apply(t,_m(r.props.children,l));return}ct(r.type===ou,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ct(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=_m(r.props.children,l)),t.push(h)}),t}var Nh="get",Oh="application/x-www-form-urlencoded";function Ef(i){return i!=null&&typeof i.tagName=="string"}function GC(i){return Ef(i)&&i.tagName.toLowerCase()==="button"}function KC(i){return Ef(i)&&i.tagName.toLowerCase()==="form"}function YC(i){return Ef(i)&&i.tagName.toLowerCase()==="input"}function QC(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function $C(i,e){return i.button===0&&(!e||e==="_self")&&!QC(i)}var Eh=null;function XC(){if(Eh===null)try{new FormData(document.createElement("form"),0),Eh=!1}catch{Eh=!0}return Eh}var WC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zp(i){return i!=null&&!WC.has(i)?(Ii(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Oh}"`),null):i}function ZC(i,e){let t,r,a,l,h;if(KC(i)){let p=i.getAttribute("action");r=p?pr(p,e):null,t=i.getAttribute("method")||Nh,a=Zp(i.getAttribute("enctype"))||Oh,l=new FormData(i)}else if(GC(i)||YC(i)&&(i.type==="submit"||i.type==="image")){let p=i.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=i.getAttribute("formaction")||p.getAttribute("action");if(r=m?pr(m,e):null,t=i.getAttribute("formmethod")||p.getAttribute("method")||Nh,a=Zp(i.getAttribute("formenctype"))||Zp(p.getAttribute("enctype"))||Oh,l=new FormData(p,i),!XC()){let{name:g,type:E,value:T}=i;if(E==="image"){let b=g?`${g}.`:"";l.append(`${b}x`,"0"),l.append(`${b}y`,"0")}else g&&l.append(g,T)}}else{if(Ef(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Nh,r=null,a=Oh,h=i}return l&&a==="text/plain"&&(h=l,l=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:l,body:h}}function rg(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function JC(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function eI(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function tI(i,e,t){let r=await Promise.all(i.map(async a=>{let l=e.routes[a.route.id];if(l){let h=await JC(l,t);return h.links?h.links():[]}return[]}));return sI(r.flat(1).filter(eI).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function zE(i,e,t,r,a,l){let h=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,p=(m,g)=>{var E;return t[g].pathname!==m.pathname||((E=t[g].route.path)==null?void 0:E.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return l==="assets"?e.filter((m,g)=>h(m,g)||p(m,g)):l==="data"?e.filter((m,g)=>{var T;let E=r.routes[m.route.id];if(!E||!E.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let b=m.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(i,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function nI(i,e,{includeHydrateFallback:t}={}){return iI(i.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function iI(i){return[...new Set(i)]}function rI(i){let e={},t=Object.keys(i).sort();for(let r of t)e[r]=i[r];return e}function sI(i,e){let t=new Set;return new Set(e),i.reduce((r,a)=>{let l=JSON.stringify(rI(a));return t.has(l)||(t.add(l),r.push({key:l,link:a})),r},[])}var aI=new Set([100,101,204,205]);function oI(i,e){let t=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t.pathname==="/"?t.pathname="_root.data":e&&pr(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function W0(){let i=Q.useContext(Po);return rg(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function lI(){let i=Q.useContext(vf);return rg(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var sg=Q.createContext(void 0);sg.displayName="FrameworkContext";function Z0(){let i=Q.useContext(sg);return rg(i,"You must render this element inside a <HydratedRouter> element"),i}function uI(i,e){let t=Q.useContext(sg),[r,a]=Q.useState(!1),[l,h]=Q.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:E,onTouchStart:T}=e,b=Q.useRef(null);Q.useEffect(()=>{if(i==="render"&&h(!0),i==="viewport"){let G=X=>{X.forEach(se=>{h(se.isIntersecting)})},q=new IntersectionObserver(G,{threshold:.5});return b.current&&q.observe(b.current),()=>{q.disconnect()}}},[i]),Q.useEffect(()=>{if(r){let G=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(G)}}},[r]);let L=()=>{a(!0)},N=()=>{a(!1),h(!1)};return t?i!=="intent"?[l,b,{}]:[l,b,{onFocus:tu(p,L),onBlur:tu(m,N),onMouseEnter:tu(g,L),onMouseLeave:tu(E,N),onTouchStart:tu(T,L)}]:[!1,b,{}]}function tu(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function cI({page:i,...e}){let{router:t}=W0(),r=Q.useMemo(()=>B0(t.routes,i,t.basename),[t.routes,i,t.basename]);return r?Q.createElement(fI,{page:i,matches:r,...e}):null}function hI(i){let{manifest:e,routeModules:t}=Z0(),[r,a]=Q.useState([]);return Q.useEffect(()=>{let l=!1;return tI(i,e,t).then(h=>{l||a(h)}),()=>{l=!0}},[i,e,t]),r}function fI({page:i,matches:e,...t}){let r=ga(),{manifest:a,routeModules:l}=Z0(),{basename:h}=W0(),{loaderData:p,matches:m}=lI(),g=Q.useMemo(()=>zE(i,e,m,a,r,"data"),[i,e,m,a,r]),E=Q.useMemo(()=>zE(i,e,m,a,r,"assets"),[i,e,m,a,r]),T=Q.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let N=new Set,G=!1;if(e.forEach(X=>{var te;let se=a.routes[X.route.id];!se||!se.hasLoader||(!g.some(de=>de.route.id===X.route.id)&&X.route.id in p&&((te=l[X.route.id])!=null&&te.shouldRevalidate)||se.hasClientLoader?G=!0:N.add(X.route.id))}),N.size===0)return[];let q=oI(i,h);return G&&N.size>0&&q.searchParams.set("_routes",e.filter(X=>N.has(X.route.id)).map(X=>X.route.id).join(",")),[q.pathname+q.search]},[h,p,r,a,g,e,i,l]),b=Q.useMemo(()=>nI(E,a),[E,a]),L=hI(E);return Q.createElement(Q.Fragment,null,T.map(N=>Q.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),b.map(N=>Q.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),L.map(({key:N,link:G})=>Q.createElement("link",{key:N,...G})))}function dI(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var J0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{J0&&(window.__reactRouterVersion="7.5.3")}catch{}function pI({basename:i,children:e,window:t}){let r=Q.useRef();r.current==null&&(r.current=nC({window:t,v5Compat:!0}));let a=r.current,[l,h]=Q.useState({action:a.action,location:a.location}),p=Q.useCallback(m=>{Q.startTransition(()=>h(m))},[h]);return Q.useLayoutEffect(()=>a.listen(p),[a,p]),Q.createElement(FC,{basename:i,children:e,location:l.location,navigationType:l.action,navigator:a})}var eS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tS=Q.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:l,replace:h,state:p,target:m,to:g,preventScrollReset:E,viewTransition:T,...b},L){let{basename:N}=Q.useContext(Di),G=typeof g=="string"&&eS.test(g),q,X=!1;if(typeof g=="string"&&G&&(q=g,J0))try{let R=new URL(window.location.href),D=g.startsWith("//")?new URL(R.protocol+g):new URL(g),k=pr(D.pathname,N);D.origin===R.origin&&k!=null?g=k+D.search+D.hash:X=!0}catch{Ii(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let se=IC(g,{relative:a}),[te,de,he]=uI(r,b),Ae=yI(g,{replace:h,state:p,target:m,preventScrollReset:E,relative:a,viewTransition:T});function x(R){e&&e(R),R.defaultPrevented||Ae(R)}let w=Q.createElement("a",{...b,...he,href:q||se,onClick:X||l?e:x,ref:dI(L,de),target:m,"data-discover":!G&&t==="render"?"true":void 0});return te&&!G?Q.createElement(Q.Fragment,null,w,Q.createElement(cI,{page:se})):w});tS.displayName="Link";var mI=Q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:l,to:h,viewTransition:p,children:m,...g},E){let T=Pu(h,{relative:g.relative}),b=ga(),L=Q.useContext(vf),{navigator:N,basename:G}=Q.useContext(Di),q=L!=null&&AI(T)&&p===!0,X=N.encodeLocation?N.encodeLocation(T).pathname:T.pathname,se=b.pathname,te=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;t||(se=se.toLowerCase(),te=te?te.toLowerCase():null,X=X.toLowerCase()),te&&G&&(te=pr(te,G)||te);const de=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let he=se===X||!a&&se.startsWith(X)&&se.charAt(de)==="/",Ae=te!=null&&(te===X||!a&&te.startsWith(X)&&te.charAt(X.length)==="/"),x={isActive:he,isPending:Ae,isTransitioning:q},w=he?e:void 0,R;typeof r=="function"?R=r(x):R=[r,he?"active":null,Ae?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let D=typeof l=="function"?l(x):l;return Q.createElement(tS,{...g,"aria-current":w,className:R,ref:E,style:D,to:h,viewTransition:p},typeof m=="function"?m(x):m)});mI.displayName="NavLink";var gI=Q.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:l,method:h=Nh,action:p,onSubmit:m,relative:g,preventScrollReset:E,viewTransition:T,...b},L)=>{let N=TI(),G=SI(p,{relative:g}),q=h.toLowerCase()==="get"?"get":"post",X=typeof p=="string"&&eS.test(p),se=te=>{if(m&&m(te),te.defaultPrevented)return;te.preventDefault();let de=te.nativeEvent.submitter,he=(de==null?void 0:de.getAttribute("formmethod"))||h;N(de||te.currentTarget,{fetcherKey:e,method:he,navigate:t,replace:a,state:l,relative:g,preventScrollReset:E,viewTransition:T})};return Q.createElement("form",{ref:L,method:q,action:G,onSubmit:r?m:se,...b,"data-discover":!X&&i==="render"?"true":void 0})});gI.displayName="Form";function _I(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nS(i){let e=Q.useContext(Po);return ct(e,_I(i)),e}function yI(i,{target:e,replace:t,state:r,preventScrollReset:a,relative:l,viewTransition:h}={}){let p=tg(),m=ga(),g=Pu(i,{relative:l});return Q.useCallback(E=>{if($C(E,e)){E.preventDefault();let T=t!==void 0?t:Eu(m)===Eu(g);p(i,{replace:T,state:r,preventScrollReset:a,relative:l,viewTransition:h})}},[m,p,g,t,r,e,i,a,l,h])}var vI=0,EI=()=>`__${String(++vI)}__`;function TI(){let{router:i}=nS("useSubmit"),{basename:e}=Q.useContext(Di),t=zC();return Q.useCallback(async(r,a={})=>{let{action:l,method:h,encType:p,formData:m,body:g}=ZC(r,e);if(a.navigate===!1){let E=a.fetcherKey||EI();await i.fetch(E,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:m,body:g,formMethod:a.method||h,formEncType:a.encType||p,flushSync:a.flushSync})}else await i.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:m,body:g,formMethod:a.method||h,formEncType:a.encType||p,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[i,e,t])}function SI(i,{relative:e}={}){let{basename:t}=Q.useContext(Di),r=Q.useContext(vr);ct(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),l={...Pu(i||".",{relative:e})},h=ga();if(i==null){l.search=h.search;let p=new URLSearchParams(l.search),m=p.getAll("index");if(m.some(E=>E==="")){p.delete("index"),m.filter(T=>T).forEach(T=>p.append("index",T));let E=p.toString();l.search=E?`?${E}`:""}}return(!i||i===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:ur([t,l.pathname])),Eu(l)}function AI(i,e={}){let t=Q.useContext(K0);ct(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=nS("useViewTransitionState"),a=Pu(i,{relative:e.relative});if(!t.isTransitioning)return!1;let l=pr(t.currentLocation.pathname,r)||t.currentLocation.pathname,h=pr(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Bh(a.pathname,h)!=null||Bh(a.pathname,l)!=null}new TextEncoder;[...aI];const bI=()=>{};var BE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=function(i,e){if(!i)throw Lo(e)},Lo=function(i){return new Error("Firebase Database ("+iS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=function(i){const e=[];let t=0;for(let r=0;r<i.length;r++){let a=i.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},wI=function(i){const e=[];let t=0,r=0;for(;t<i.length;){const a=i[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[r++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],h=i[t++],p=i[t++],m=((a&7)<<18|(l&63)<<12|(h&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const l=i[t++],h=i[t++];e[r++]=String.fromCharCode((a&15)<<12|(l&63)<<6|h&63)}}return e.join("")},ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<i.length;a+=3){const l=i[a],h=a+1<i.length,p=h?i[a+1]:0,m=a+2<i.length,g=m?i[a+2]:0,E=l>>2,T=(l&3)<<4|p>>4;let b=(p&15)<<2|g>>6,L=g&63;m||(L=64,h||(b=64)),r.push(t[E],t[T],t[b],t[L])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(rS(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):wI(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],p=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||p==null||g==null||T==null)throw new RI;const b=l<<2|p>>4;if(r.push(b),g!==64){const L=p<<4&240|g>>2;if(r.push(L),T!==64){const N=g<<6&192|T;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class RI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sS=function(i){const e=rS(i);return ag.encodeByteArray(e,!0)},Hh=function(i){return sS(i).replace(/\./g,"")},jh=function(i){try{return ag.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(i){return aS(void 0,i)}function aS(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!II(t)||(i[t]=aS(i[t],e[t]));return i}function II(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=()=>NI().__FIREBASE_DEFAULTS__,DI=()=>{if(typeof process>"u"||typeof BE>"u")return;const i=BE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},MI=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&jh(i[1]);return e&&JSON.parse(e)},Tf=()=>{try{return bI()||OI()||DI()||MI()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},oS=i=>{var e,t;return(t=(e=Tf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},lS=i=>{const e=oS(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},uS=()=>{var i;return(i=Tf())===null||i===void 0?void 0:i.config},cS=i=>{var e;return(e=Tf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Hh(JSON.stringify(t)),Hh(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function og(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(un())}function xI(){var i;const e=(i=Tf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function PI(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function fS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LI(){const i=un();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function VI(){return iS.NODE_ADMIN===!0}function UI(){return!xI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zI(){try{return typeof indexedDB=="object"}catch{return!1}}function BI(){return new Promise((i,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="FirebaseError";class Er extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=HI,Object.setPrototypeOf(this,Er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lu.prototype.create)}}class Lu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],h=l?jI(l,r):"Error",p=`${this.serviceName}: ${h} (${a}).`;return new Er(a,p,r)}}function jI(i,e){return i.replace(FI,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const FI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(i){return JSON.parse(i)}function Wt(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=function(i){let e={},t={},r={},a="";try{const l=i.split(".");e=Tu(jh(l[0])||""),t=Tu(jh(l[1])||""),a=l[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:a}},qI=function(i){const e=dS(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},GI=function(i){const e=dS(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Ro(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function ym(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Fh(i,e,t){const r={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=e.call(t,i[a],a,i));return r}function ls(i,e){if(i===e)return!0;const t=Object.keys(i),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const l=i[a],h=e[a];if(HE(l)&&HE(h)){if(!ls(l,h))return!1}else if(l!==h)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function HE(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(i){const e=[];for(const[t,r]of Object.entries(i))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lu(i){const e={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,l]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function uu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)r[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)r[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const b=r[T-3]^r[T-8]^r[T-14]^r[T-16];r[T]=(b<<1|b>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],h=this.chain_[2],p=this.chain_[3],m=this.chain_[4],g,E;for(let T=0;T<80;T++){T<40?T<20?(g=p^l&(h^p),E=1518500249):(g=l^h^p,E=1859775393):T<60?(g=l&h|p&(l|h),E=2400959708):(g=l^h^p,E=3395469782);const b=(a<<5|a>>>27)+g+m+E+r[T]&4294967295;m=p,p=h,h=(l<<30|l>>>2)&4294967295,l=a,a=b}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let a=0;const l=this.buf_;let h=this.inbuf_;for(;a<t;){if(h===0)for(;a<=r;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[h]=e.charCodeAt(a),++h,++a,h===this.blockSize){this.compress_(l),h=0;break}}else for(;a<t;)if(l[h]=e[a],++h,++a,h===this.blockSize){this.compress_(l),h=0;break}}this.inbuf_=h,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[r]=this.chain_[a]>>l&255,++r;return e}}function YI(i,e){const t=new QI(i,e);return t.subscribe.bind(t)}class QI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");$I(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=Jp),a.error===void 0&&(a.error=Jp),a.complete===void 0&&(a.complete=Jp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $I(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Jp(){}function lg(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=function(i){const e=[];let t=0;for(let r=0;r<i.length;r++){let a=i.charCodeAt(r);if(a>=55296&&a<=56319){const l=a-55296;r++,le(r<i.length,"Surrogate pair missing trail surrogate.");const h=i.charCodeAt(r)-56320;a=65536+(l<<10)+h}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Af=function(i){let e=0;for(let t=0;t<i.length;t++){const r=i.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(i){return i&&i._delegate?i._delegate:i}class us{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Sf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JI(e))try{this.getOrInitializeService({instanceIdentifier:Zs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});r.resolve(l)}catch{}}}}clearInstance(e=Zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zs){return this.instances.has(e)}getOptions(e=Zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[l,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(l);r===p&&h.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),l=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;l.add(e),this.onInitCallbacks.set(a,l);const h=this.instances.get(a);return h&&e(h,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZI(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zs){return this.component?this.component.multipleInstances?e:Zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZI(i){return i===Zs?void 0:i}function JI(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new WI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(De||(De={}));const t1={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},n1=De.INFO,i1={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},r1=(i,e,...t)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),a=i1[e];if(a)console[a](`[${r}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bf{constructor(e){this.name=e,this._logLevel=n1,this._logHandler=r1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const s1=(i,e)=>e.some(t=>i instanceof t);let jE,FE;function a1(){return jE||(jE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function o1(){return FE||(FE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pS=new WeakMap,vm=new WeakMap,mS=new WeakMap,em=new WeakMap,ug=new WeakMap;function l1(i){const e=new Promise((t,r)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",h)},l=()=>{t(rs(i.result)),a()},h=()=>{r(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&pS.set(t,i)}).catch(()=>{}),ug.set(e,i),e}function u1(i){if(vm.has(i))return;const e=new Promise((t,r)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",h),i.removeEventListener("abort",h)},l=()=>{t(),a()},h=()=>{r(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",h),i.addEventListener("abort",h)});vm.set(i,e)}let Em={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return vm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||mS.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rs(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function c1(i){Em=i(Em)}function h1(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=i.call(tm(this),e,...t);return mS.set(r,e.sort?e.sort():[e]),rs(r)}:o1().includes(i)?function(...e){return i.apply(tm(this),e),rs(pS.get(this))}:function(...e){return rs(i.apply(tm(this),e))}}function f1(i){return typeof i=="function"?h1(i):(i instanceof IDBTransaction&&u1(i),s1(i,a1())?new Proxy(i,Em):i)}function rs(i){if(i instanceof IDBRequest)return l1(i);if(em.has(i))return em.get(i);const e=f1(i);return e!==i&&(em.set(i,e),ug.set(e,i)),e}const tm=i=>ug.get(i);function d1(i,e,{blocked:t,upgrade:r,blocking:a,terminated:l}={}){const h=indexedDB.open(i,e),p=rs(h);return r&&h.addEventListener("upgradeneeded",m=>{r(rs(h.result),m.oldVersion,m.newVersion,rs(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const p1=["get","getKey","getAll","getAllKeys","count"],m1=["put","add","delete","clear"],nm=new Map;function qE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(nm.get(e))return nm.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=m1.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||p1.includes(t)))return;const l=async function(h,...p){const m=this.transaction(h,a?"readwrite":"readonly");let g=m.store;return r&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),a&&m.done]))[0]};return nm.set(e,l),l}c1(i=>({...i,get:(e,t,r)=>qE(e,t)||i.get(e,t,r),has:(e,t)=>!!qE(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_1(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _1(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tm="@firebase/app",GE="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new bf("@firebase/app"),y1="@firebase/app-compat",v1="@firebase/analytics-compat",E1="@firebase/analytics",T1="@firebase/app-check-compat",S1="@firebase/app-check",A1="@firebase/auth",b1="@firebase/auth-compat",w1="@firebase/database",R1="@firebase/data-connect",C1="@firebase/database-compat",I1="@firebase/functions",N1="@firebase/functions-compat",O1="@firebase/installations",D1="@firebase/installations-compat",M1="@firebase/messaging",x1="@firebase/messaging-compat",k1="@firebase/performance",P1="@firebase/performance-compat",L1="@firebase/remote-config",V1="@firebase/remote-config-compat",U1="@firebase/storage",z1="@firebase/storage-compat",B1="@firebase/firestore",H1="@firebase/vertexai",j1="@firebase/firestore-compat",F1="firebase",q1="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="[DEFAULT]",G1={[Tm]:"fire-core",[y1]:"fire-core-compat",[E1]:"fire-analytics",[v1]:"fire-analytics-compat",[S1]:"fire-app-check",[T1]:"fire-app-check-compat",[A1]:"fire-auth",[b1]:"fire-auth-compat",[w1]:"fire-rtdb",[R1]:"fire-data-connect",[C1]:"fire-rtdb-compat",[I1]:"fire-fn",[N1]:"fire-fn-compat",[O1]:"fire-iid",[D1]:"fire-iid-compat",[M1]:"fire-fcm",[x1]:"fire-fcm-compat",[k1]:"fire-perf",[P1]:"fire-perf-compat",[L1]:"fire-rc",[V1]:"fire-rc-compat",[U1]:"fire-gcs",[z1]:"fire-gcs-compat",[B1]:"fire-fst",[j1]:"fire-fst-compat",[H1]:"fire-vertex","fire-js":"fire-js",[F1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=new Map,K1=new Map,Am=new Map;function KE(i,e){try{i.container.addComponent(e)}catch(t){mr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function aa(i){const e=i.name;if(Am.has(e))return mr.debug(`There were multiple attempts to register component ${e}.`),!1;Am.set(e,i);for(const t of qh.values())KE(t,i);for(const t of K1.values())KE(t,i);return!0}function wf(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function yn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ss=new Lu("app","Firebase",Y1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ss.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=q1;function gS(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sm,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw ss.create("bad-app-name",{appName:String(a)});if(t||(t=uS()),!t)throw ss.create("no-options");const l=qh.get(a);if(l){if(ls(t,l.options)&&ls(r,l.config))return l;throw ss.create("duplicate-app",{appName:a})}const h=new e1(a);for(const m of Am.values())h.addComponent(m);const p=new Q1(t,r,h);return qh.set(a,p),p}function cg(i=Sm){const e=qh.get(i);if(!e&&i===Sm&&uS())return gS();if(!e)throw ss.create("no-app",{appName:i});return e}function Ri(i,e,t){var r;let a=(r=G1[i])!==null&&r!==void 0?r:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const p=[`Unable to register library "${a}" with version "${e}":`];l&&p.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mr.warn(p.join(" "));return}aa(new us(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="firebase-heartbeat-database",X1=1,Su="firebase-heartbeat-store";let im=null;function _S(){return im||(im=d1($1,X1,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Su)}catch(t){console.warn(t)}}}}).catch(i=>{throw ss.create("idb-open",{originalErrorMessage:i.message})})),im}async function W1(i){try{const t=(await _S()).transaction(Su),r=await t.objectStore(Su).get(yS(i));return await t.done,r}catch(e){if(e instanceof Er)mr.warn(e.message);else{const t=ss.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mr.warn(t.message)}}}async function YE(i,e){try{const r=(await _S()).transaction(Su,"readwrite");await r.objectStore(Su).put(e,yS(i)),await r.done}catch(t){if(t instanceof Er)mr.warn(t.message);else{const r=ss.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mr.warn(r.message)}}}function yS(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=1024,J1=30;class eN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nN(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=QE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>J1){const h=iN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=QE(),{heartbeatsToSend:r,unsentEntries:a}=tN(this._heartbeatsCache.heartbeats),l=Hh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return mr.warn(t),""}}}function QE(){return new Date().toISOString().substring(0,10)}function tN(i,e=Z1){const t=[];let r=i.slice();for(const a of i){const l=t.find(h=>h.agent===a.agent);if(l){if(l.dates.push(a.date),$E(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),$E(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class nN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zI()?BI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await W1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return YE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return YE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function $E(i){return Hh(JSON.stringify({version:2,heartbeats:i})).length}function iN(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let r=1;r<i.length;r++)i[r].date<t&&(t=i[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(i){aa(new us("platform-logger",e=>new g1(e),"PRIVATE")),aa(new us("heartbeat",e=>new eN(e),"PRIVATE")),Ri(Tm,GE,i),Ri(Tm,GE,"esm2017"),Ri("fire-js","")}rN("");function hg(i,e){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(i);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(i,r[a])&&(t[r[a]]=i[r[a]]);return t}function vS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sN=vS,ES=new Lu("auth","Firebase",vS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new bf("@firebase/auth");function aN(i,...e){Gh.logLevel<=De.WARN&&Gh.warn(`Auth (${_a}): ${i}`,...e)}function Dh(i,...e){Gh.logLevel<=De.ERROR&&Gh.error(`Auth (${_a}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(i,...e){throw dg(i,...e)}function ri(i,...e){return dg(i,...e)}function fg(i,e,t){const r=Object.assign(Object.assign({},sN()),{[e]:t});return new Lu("auth","Firebase",r).create(e,{appName:i.name})}function cr(i){return fg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oN(i,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&qn(i,"argument-error"),fg(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dg(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return ES.create(i,...e)}function ye(i,e,...t){if(!i)throw dg(e,...t)}function ar(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Dh(e),new Error(e)}function gr(i,e){i||ar(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function lN(){return XE()==="http:"||XE()==="https:"}function XE(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lN()||PI()||"connection"in navigator)?navigator.onLine:!0}function cN(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t){this.shortDelay=e,this.longDelay=t,gr(t>e,"Short delay should be less than long delay!"),this.isMobile=og()||fS()}get(){return uN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(i,e){gr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dN=new Vu(3e4,6e4);function Sr(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ar(i,e,t,r,a={}){return SS(i,a,async()=>{let l={},h={};r&&(e==="GET"?h=r:l={body:JSON.stringify(r)});const p=Vo(Object.assign({key:i.config.apiKey},h)).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:m},l);return kI()||(g.referrerPolicy="no-referrer"),TS.fetch()(await AS(i,i.config.apiHost,t,p),g)})}async function SS(i,e,t){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},hN),e);try{const a=new mN(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Th(i,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const p=l.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Th(i,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Th(i,"email-already-in-use",h);if(m==="USER_DISABLED")throw Th(i,"user-disabled",h);const E=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw fg(i,E,g);qn(i,E)}}catch(a){if(a instanceof Er)throw a;qn(i,"network-request-failed",{message:String(a)})}}async function Uu(i,e,t,r,a={}){const l=await Ar(i,e,t,r,a);return"mfaPendingCredential"in l&&qn(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function AS(i,e,t,r){const a=`${e}${t}?${r}`,l=i,h=l.config.emulator?pg(i.config,a):`${i.config.apiScheme}://${a}`;return fN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function pN(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ri(this.auth,"network-request-failed")),dN.get())})}}function Th(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=ri(i,e,r);return a.customData._tokenResponse=t,a}function WE(i){return i!==void 0&&i.enterprise!==void 0}class gN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return pN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _N(i,e){return Ar(i,"GET","/v2/recaptchaConfig",Sr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(i,e){return Ar(i,"POST","/v1/accounts:delete",e)}async function Kh(i,e){return Ar(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vN(i,e=!1){const t=jt(i),r=await t.getIdToken(e),a=mg(r);ye(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:hu(rm(a.auth_time)),issuedAtTime:hu(rm(a.iat)),expirationTime:hu(rm(a.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function rm(i){return Number(i)*1e3}function mg(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return Dh("JWT malformed, contained fewer than 3 sections"),null;try{const a=jh(t);return a?JSON.parse(a):(Dh("Failed to decode base64 JWT payload"),null)}catch(a){return Dh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function ZE(i){const e=mg(i);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Er&&EN(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function EN({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hu(this.lastLoginAt),this.creationTime=hu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(i){var e;const t=i.auth,r=await i.getIdToken(),a=await Au(i,Kh(t,{idToken:r}));ye(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?bS(l.providerUserInfo):[],p=AN(i.providerData,h),m=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!(p!=null&&p.length),E=m?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:p,metadata:new wm(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(i,T)}async function SN(i){const e=jt(i);await Yh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AN(i,e){return[...i.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function bS(i){return i.map(e=>{var{providerId:t}=e,r=hg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(i,e){const t=await SS(i,{},async()=>{const r=Vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,h=await AS(i,a,"/v1/token",`key=${l}`),p=await i._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",TS.fetch()(h,{method:"POST",headers:p,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wN(i,e){return Ar(i,"POST","/v2/accounts:revokeToken",Sr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ZE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=ZE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await bN(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,h=new Eo;return r&&(ye(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),a&&(ye(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(i,e){ye(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ti{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=hg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new wm(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Au(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vN(this,e)}reload(){return SN(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ti(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Yh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(cr(this.auth));const e=await this.getIdToken();return await Au(this,yN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,h,p,m,g,E;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(a=t.email)!==null&&a!==void 0?a:void 0,L=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,N=(h=t.photoURL)!==null&&h!==void 0?h:void 0,G=(p=t.tenantId)!==null&&p!==void 0?p:void 0,q=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,X=(g=t.createdAt)!==null&&g!==void 0?g:void 0,se=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:te,emailVerified:de,isAnonymous:he,providerData:Ae,stsTokenManager:x}=t;ye(te&&x,e,"internal-error");const w=Eo.fromJSON(this.name,x);ye(typeof te=="string",e,"internal-error"),es(T,e.name),es(b,e.name),ye(typeof de=="boolean",e,"internal-error"),ye(typeof he=="boolean",e,"internal-error"),es(L,e.name),es(N,e.name),es(G,e.name),es(q,e.name),es(X,e.name),es(se,e.name);const R=new ti({uid:te,auth:e,email:b,emailVerified:de,displayName:T,isAnonymous:he,photoURL:N,phoneNumber:L,tenantId:G,stsTokenManager:w,createdAt:X,lastLoginAt:se});return Ae&&Array.isArray(Ae)&&(R.providerData=Ae.map(D=>Object.assign({},D))),q&&(R._redirectEventId=q),R}static async _fromIdTokenResponse(e,t,r=!1){const a=new Eo;a.updateFromServerResponse(t);const l=new ti({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Yh(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];ye(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?bS(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),p=new Eo;p.updateFromIdToken(r);const m=new ti({uid:a.localId,auth:e,stsTokenManager:p,isAnonymous:h}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new wm(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=new Map;function or(i){gr(i instanceof Function,"Expected a class definition");let e=JE.get(i);return e?(gr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,JE.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wS.type="NONE";const eT=wS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(i,e,t){return`firebase:${i}:${e}:${t}`}class To{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=Mh(this.userKey,a.apiKey,l),this.fullPersistenceKey=Mh("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Kh(this.auth,{idToken:e}).catch(()=>{});return t?ti._fromGetAccountInfoResponse(this.auth,t,e):null}return ti._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new To(or(eT),e,r);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||or(eT);const h=Mh(r,e.config.apiKey,e.name);let p=null;for(const g of t)try{const E=await g._get(h);if(E){let T;if(typeof E=="string"){const b=await Kh(e,{idToken:E}).catch(()=>{});if(!b)break;T=await ti._fromGetAccountInfoResponse(e,b,E)}else T=ti._fromJSON(e,E);g!==l&&(p=T),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new To(l,e,r):(l=m[0],p&&await l._set(h,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(h)}catch{}})),new To(l,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DS(e))return"Blackberry";if(MS(e))return"Webos";if(CS(e))return"Safari";if((e.includes("chrome/")||IS(e))&&!e.includes("edge/"))return"Chrome";if(OS(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RS(i=un()){return/firefox\//i.test(i)}function CS(i=un()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function IS(i=un()){return/crios\//i.test(i)}function NS(i=un()){return/iemobile/i.test(i)}function OS(i=un()){return/android/i.test(i)}function DS(i=un()){return/blackberry/i.test(i)}function MS(i=un()){return/webos/i.test(i)}function gg(i=un()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function RN(i=un()){var e;return gg(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CN(){return LI()&&document.documentMode===10}function xS(i=un()){return gg(i)||OS(i)||MS(i)||DS(i)||/windows phone/i.test(i)||NS(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(i,e=[]){let t;switch(i){case"Browser":t=tT(un());break;case"Worker":t=`${tT(un())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_a}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=l=>new Promise((h,p)=>{try{const m=e(l);h(m)}catch(m){p(m)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(i,e={}){return Ar(i,"GET","/v2/passwordPolicy",Sr(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=6;class DN{constructor(e){var t,r,a,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:ON,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,l,h,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(r=m.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nT(this),this.idTokenSubscription=new nT(this),this.beforeStateQueue=new IN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ES,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=or(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Kh(this,{idToken:e}),r=await ti._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===p)&&(m!=null&&m.user)&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(cr(this));const t=e?jt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NN(this),t=new DN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Lu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await wN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&or(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(p,this,"internal-error"),p.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,r,a);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&aN(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function br(i){return jt(i)}class nT{constructor(e){this.auth=e,this.observer=null,this.addObserver=YI(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xN(i){Rf=i}function PS(i){return Rf.loadJS(i)}function kN(){return Rf.recaptchaEnterpriseScript}function PN(){return Rf.gapiScript}function LN(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class VN{constructor(){this.enterprise=new UN}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class UN{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const zN="recaptcha-enterprise",LS="NO_RECAPTCHA";class BN{constructor(e){this.type=zN,this.auth=br(e)}async verify(e="verify",t=!1){async function r(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,p)=>{_N(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new gN(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function a(l,h,p){const m=window.grecaptcha;WE(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{h(g)}).catch(()=>{h(LS)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VN().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{r(this.auth).then(p=>{if(!t&&WE(window.grecaptcha))a(p,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=kN();m.length!==0&&(m+=p),PS(m).then(()=>{a(p,l,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function iT(i,e,t,r=!1,a=!1){const l=new BN(i);let h;if(a)h=LS;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const p=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Qh(i,e,t,r,a){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await iT(i,e,t,t==="getOobCode");return r(i,h)}else return r(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await iT(i,e,t,t==="getOobCode");return r(i,p)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(i,e){const t=wf(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ls(l,e??{}))return a;qn(a,"already-initialized")}return t.initialize({options:e})}function jN(i,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(or);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FN(i,e,t){const r=br(i);ye(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!1,l=VS(e),{host:h,port:p}=qN(e),m=p===null?"":`:${p}`,g={url:`${l}//${h}${m}/`},E=Object.freeze({host:h,port:p,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){ye(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ye(ls(g,r.config.emulator)&&ls(E,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=E,r.settings.appVerificationDisabledForTesting=!0,GN()}function VS(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function qN(i){const e=VS(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const l=a[1];return{host:l,port:rT(r.substr(l.length+1))}}else{const[l,h]=r.split(":");return{host:l,port:rT(h)}}}function rT(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function GN(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ar("not implemented")}_getIdTokenResponse(e){return ar("not implemented")}_linkToIdToken(e,t){return ar("not implemented")}_getReauthenticationResolver(e){return ar("not implemented")}}async function KN(i,e){return Ar(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(i,e){return Uu(i,"POST","/v1/accounts:signInWithPassword",Sr(i,e))}async function QN(i,e){return Ar(i,"POST","/v1/accounts:sendOobCode",Sr(i,e))}async function $N(i,e){return QN(i,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XN(i,e){return Uu(i,"POST","/v1/accounts:signInWithEmailLink",Sr(i,e))}async function WN(i,e){return Uu(i,"POST","/v1/accounts:signInWithEmailLink",Sr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends _g{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new bu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new bu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qh(e,t,"signInWithPassword",YN);case"emailLink":return XN(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qh(e,r,"signUpPassword",KN);case"emailLink":return WN(e,{idToken:t,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(i,e){return Uu(i,"POST","/v1/accounts:signInWithIdp",Sr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN="http://localhost";class oa extends _g{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new oa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=hg(t,["providerId","signInMethod"]);if(!r||!a)return null;const h=new oa(r,a);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,So(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:ZN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vo(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eO(i){const e=lu(uu(i)).link,t=e?lu(uu(e)).deep_link_id:null,r=lu(uu(i)).deep_link_id;return(r?lu(uu(r)).link:null)||r||t||e||i}class yg{constructor(e){var t,r,a,l,h,p;const m=lu(uu(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,E=(r=m.oobCode)!==null&&r!==void 0?r:null,T=JN((a=m.mode)!==null&&a!==void 0?a:null);ye(g&&E&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=E,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=m.lang)!==null&&h!==void 0?h:null,this.tenantId=(p=m.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const t=eO(e);try{return new yg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.providerId=Uo.PROVIDER_ID}static credential(e,t){return bu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=yg.parseLink(t);return ye(r,"argument-error"),bu._fromEmailAndCode(e,r.code,r.tenantId)}}Uo.PROVIDER_ID="password";Uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends vg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends zu{constructor(){super("facebook.com")}static credential(e){return oa._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch{return null}}}ts.FACEBOOK_SIGN_IN_METHOD="facebook.com";ts.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends zu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return oa._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return sr.credential(t,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends zu{constructor(){super("github.com")}static credential(e){return oa._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ns.credential(e.oauthAccessToken)}catch{return null}}}ns.GITHUB_SIGN_IN_METHOD="github.com";ns.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends zu{constructor(){super("twitter.com")}static credential(e,t){return oa._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return is.credential(t,r)}catch{return null}}}is.TWITTER_SIGN_IN_METHOD="twitter.com";is.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO(i,e){return Uu(i,"POST","/v1/accounts:signUp",Sr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await ti._fromIdTokenResponse(e,r,a),h=sT(r);return new la({user:l,providerId:h,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=sT(r);return new la({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function sT(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h extends Er{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,$h.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new $h(e,t,r,a)}}function US(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?$h._fromErrorAndOperation(i,l,e,r):l})}async function nO(i,e,t=!1){const r=await Au(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return la._forOperation(i,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iO(i,e,t=!1){const{auth:r}=i;if(yn(r.app))return Promise.reject(cr(r));const a="reauthenticate";try{const l=await Au(i,US(r,a,e,i),t);ye(l.idToken,r,"internal-error");const h=mg(l.idToken);ye(h,r,"internal-error");const{sub:p}=h;return ye(i.uid===p,r,"user-mismatch"),la._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&qn(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(i,e,t=!1){if(yn(i.app))return Promise.reject(cr(i));const r="signIn",a=await US(i,r,e),l=await la._fromIdTokenResponse(i,r,a);return t||await i._updateCurrentUser(l.user),l}async function rO(i,e){return zS(br(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(i){const e=br(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sO(i,e,t){const r=br(i);await Qh(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",$N)}async function aO(i,e,t){if(yn(i.app))return Promise.reject(cr(i));const r=br(i),h=await Qh(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tO).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&BS(i),m}),p=await la._fromIdTokenResponse(r,"signIn",h);return await r._updateCurrentUser(p.user),p}function oO(i,e,t){return yn(i.app)?Promise.reject(cr(i)):rO(jt(i),Uo.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&BS(i),r})}function lO(i,e,t,r){return jt(i).onIdTokenChanged(e,t,r)}function uO(i,e,t){return jt(i).beforeAuthStateChanged(e,t)}function cO(i,e,t,r){return jt(i).onAuthStateChanged(e,t,r)}function hO(i){return jt(i).signOut()}const Xh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xh,"1"),this.storage.removeItem(Xh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=1e3,dO=10;class jS extends HS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(r);!t&&this.localCache[r]===h||this.notifyListeners(r,h)},l=this.storage.getItem(r);CN()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,dO):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},fO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jS.type="LOCAL";const pO=jS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS extends HS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}FS.type="SESSION";const qS=FS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mO(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Cf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:l}=t.data,h=this.handlersMap[a];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const p=Array.from(h).map(async g=>g(t.origin,l)),m=await mO(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,h;return new Promise((p,m)=>{const g=Eg("",20);a.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},r);h={messageChannel:a,onMessage(T){const b=T;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),p(b.data.response);break;default:clearTimeout(E),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(){return window}function _O(i){Ci().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(){return typeof Ci().WorkerGlobalScope<"u"&&typeof Ci().importScripts=="function"}async function yO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vO(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function EO(){return GS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="firebaseLocalStorageDb",TO=1,Wh="firebaseLocalStorage",YS="fbase_key";class Bu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function If(i,e){return i.transaction([Wh],e?"readwrite":"readonly").objectStore(Wh)}function SO(){const i=indexedDB.deleteDatabase(KS);return new Bu(i).toPromise()}function Rm(){const i=indexedDB.open(KS,TO);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(Wh,{keyPath:YS})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(Wh)?e(r):(r.close(),await SO(),e(await Rm()))})})}async function aT(i,e,t){const r=If(i,!0).put({[YS]:e,value:t});return new Bu(r).toPromise()}async function AO(i,e){const t=If(i,!1).get(e),r=await new Bu(t).toPromise();return r===void 0?null:r.value}function oT(i,e){const t=If(i,!0).delete(e);return new Bu(t).toPromise()}const bO=800,wO=3;class QS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>wO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cf._getInstance(EO()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yO(),!this.activeServiceWorker)return;this.sender=new gO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rm();return await aT(e,Xh,"1"),await oT(e,Xh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>aT(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>AO(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>oT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=If(a,!1).getAll();return new Bu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}QS.type="LOCAL";const RO=QS;new Vu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(i,e){return e?or(e):(ye(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg extends _g{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CO(i){return zS(i.auth,new Tg(i),i.bypassAuthState)}function IO(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),iO(t,new Tg(i),i.bypassAuthState)}async function NO(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),nO(t,new Tg(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CO;case"linkViaPopup":case"linkViaRedirect":return NO;case"reauthViaPopup":case"reauthViaRedirect":return IO;default:qn(this.auth,"internal-error")}}resolve(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=new Vu(2e3,1e4);async function DO(i,e,t){if(yn(i.app))return Promise.reject(ri(i,"operation-not-supported-in-this-environment"));const r=br(i);oN(i,e,vg);const a=$S(r,t);return new ea(r,"signInViaPopup",e,a).executeNotNull()}class ea extends XS{constructor(e,t,r,a,l){super(e,t,a,l),this.provider=r,this.authWindow=null,this.pollId=null,ea.currentPopupAction&&ea.currentPopupAction.cancel(),ea.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){gr(this.filter.length===1,"Popup operations only handle one event");const e=Eg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ri(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ri(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ea.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ri(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OO.get())};e()}}ea.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO="pendingRedirect",xh=new Map;class xO extends XS{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=xh.get(this.auth._key());if(!e){try{const r=await kO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}xh.set(this.auth._key(),e)}return this.bypassAuthState||xh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kO(i,e){const t=VO(e),r=LO(i);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}function PO(i,e){xh.set(i._key(),e)}function LO(i){return or(i._redirectPersistence)}function VO(i){return Mh(MO,i.config.apiKey,i.name)}async function UO(i,e,t=!1){if(yn(i.app))return Promise.reject(cr(i));const r=br(i),a=$S(r,e),h=await new xO(r,a,t).execute();return h&&!t&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=10*60*1e3;class BO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HO(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!WS(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ri(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zO&&this.cachedEventUids.clear(),this.cachedEventUids.has(lT(e))}saveEventToCache(e){this.cachedEventUids.add(lT(e)),this.lastProcessedEventTime=Date.now()}}function lT(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function WS({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HO(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WS(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jO(i,e={}){return Ar(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qO=/^https?/;async function GO(i){if(i.config.emulator)return;const{authorizedDomains:e}=await jO(i);for(const t of e)try{if(KO(t))return}catch{}qn(i,"unauthorized-domain")}function KO(i){const e=bm(),{protocol:t,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&r===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===r}if(!qO.test(t))return!1;if(FO.test(i))return r===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=new Vu(3e4,6e4);function uT(){const i=Ci().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function QO(i){return new Promise((e,t)=>{var r,a,l;function h(){uT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uT(),t(ri(i,"network-request-failed"))},timeout:YO.get()})}if(!((a=(r=Ci().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Ci().gapi)===null||l===void 0)&&l.load)h();else{const p=LN("iframefcb");return Ci()[p]=()=>{gapi.load?h():t(ri(i,"network-request-failed"))},PS(`${PN()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw kh=null,e})}let kh=null;function $O(i){return kh=kh||QO(i),kh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO=new Vu(5e3,15e3),WO="__/auth/iframe",ZO="emulator/auth/iframe",JO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tD(i){const e=i.config;ye(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?pg(e,ZO):`https://${i.config.authDomain}/${WO}`,r={apiKey:e.apiKey,appName:i.name,v:_a},a=eD.get(i.config.apiHost);a&&(r.eid=a);const l=i._getFrameworks();return l.length&&(r.fw=l.join(",")),`${t}?${Vo(r).slice(1)}`}async function nD(i){const e=await $O(i),t=Ci().gapi;return ye(t,i,"internal-error"),e.open({where:document.body,url:tD(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JO,dontclear:!0},r=>new Promise(async(a,l)=>{await r.restyle({setHideOnLeave:!1});const h=ri(i,"network-request-failed"),p=Ci().setTimeout(()=>{l(h)},XO.get());function m(){Ci().clearTimeout(p),a(r)}r.ping(m).then(m,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rD=500,sD=600,aD="_blank",oD="http://localhost";class cT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lD(i,e,t,r=rD,a=sD){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const m=Object.assign(Object.assign({},iD),{width:r.toString(),height:a.toString(),top:l,left:h}),g=un().toLowerCase();t&&(p=IS(g)?aD:t),RS(g)&&(e=e||oD,m.scrollbars="yes");const E=Object.entries(m).reduce((b,[L,N])=>`${b}${L}=${N},`,"");if(RN(g)&&p!=="_self")return uD(e||"",p),new cT(null);const T=window.open(e||"",p,E);ye(T,i,"popup-blocked");try{T.focus()}catch{}return new cT(T)}function uD(i,e){const t=document.createElement("a");t.href=i,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD="__/auth/handler",hD="emulator/auth/handler",fD=encodeURIComponent("fac");async function hT(i,e,t,r,a,l){ye(i.config.authDomain,i,"auth-domain-config-required"),ye(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:_a,eventId:a};if(e instanceof vg){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",ym(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof zu){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const m=await i._getAppCheckToken(),g=m?`#${fD}=${encodeURIComponent(m)}`:"";return`${dD(i)}?${Vo(p).slice(1)}${g}`}function dD({config:i}){return i.emulator?pg(i,hD):`https://${i.authDomain}/${cD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="webStorageSupport";class pD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qS,this._completeRedirectFn=UO,this._overrideRedirectResult=PO}async _openPopup(e,t,r,a){var l;gr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await hT(e,t,r,bm(),a);return lD(e,h,Eg())}async _openRedirect(e,t,r,a){await this._originValidation(e);const l=await hT(e,t,r,bm(),a);return _O(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(gr(l,"If manager is not set, promise should be"),l)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await nD(e),r=new BO(e);return t.register("authEvent",a=>(ye(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sm,{type:sm},a=>{var l;const h=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[sm];h!==void 0&&t(!!h),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=GO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xS()||CS()||gg()}}const mD=pD;var fT="@firebase/auth",dT="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yD(i){aa(new us("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=r.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:h,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kS(i)},g=new MN(r,a,l,m);return jN(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),aa(new us("auth-internal",e=>{const t=br(e.getProvider("auth").getImmediate());return(r=>new gD(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ri(fT,dT,_D(i)),Ri(fT,dT,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=5*60,ED=cS("authIdTokenMaxAge")||vD;let pT=null;const TD=i=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ED)return;const a=t==null?void 0:t.token;pT!==a&&(pT=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Nf(i=cg()){const e=wf(i,"auth");if(e.isInitialized())return e.getImmediate();const t=HN(i,{popupRedirectResolver:mD,persistence:[RO,pO,qS]}),r=cS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(r,location.origin);if(location.origin===l.origin){const h=TD(l.toString());uO(t,h,()=>h(t.currentUser)),lO(t,p=>h(p))}}const a=oS("auth");return a&&FN(t,`http://${a}`),t}function SD(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}xN({loadJS(i){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=a=>{const l=ri("internal-error");l.customData=a,t(l)},r.type="text/javascript",r.charset="UTF-8",SD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yD("Browser");var AD="firebase",bD="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ri(AD,bD,"app");var mT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sg;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,w){function R(){}R.prototype=w.prototype,x.D=w.prototype,x.prototype=new R,x.prototype.constructor=x,x.C=function(D,k,V){for(var I=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)I[Ft-2]=arguments[Ft];return w.prototype[k].apply(D,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(x,w,R){R||(R=0);var D=Array(16);if(typeof w=="string")for(var k=0;16>k;++k)D[k]=w.charCodeAt(R++)|w.charCodeAt(R++)<<8|w.charCodeAt(R++)<<16|w.charCodeAt(R++)<<24;else for(k=0;16>k;++k)D[k]=w[R++]|w[R++]<<8|w[R++]<<16|w[R++]<<24;w=x.g[0],R=x.g[1],k=x.g[2];var V=x.g[3],I=w+(V^R&(k^V))+D[0]+3614090360&4294967295;w=R+(I<<7&4294967295|I>>>25),I=V+(k^w&(R^k))+D[1]+3905402710&4294967295,V=w+(I<<12&4294967295|I>>>20),I=k+(R^V&(w^R))+D[2]+606105819&4294967295,k=V+(I<<17&4294967295|I>>>15),I=R+(w^k&(V^w))+D[3]+3250441966&4294967295,R=k+(I<<22&4294967295|I>>>10),I=w+(V^R&(k^V))+D[4]+4118548399&4294967295,w=R+(I<<7&4294967295|I>>>25),I=V+(k^w&(R^k))+D[5]+1200080426&4294967295,V=w+(I<<12&4294967295|I>>>20),I=k+(R^V&(w^R))+D[6]+2821735955&4294967295,k=V+(I<<17&4294967295|I>>>15),I=R+(w^k&(V^w))+D[7]+4249261313&4294967295,R=k+(I<<22&4294967295|I>>>10),I=w+(V^R&(k^V))+D[8]+1770035416&4294967295,w=R+(I<<7&4294967295|I>>>25),I=V+(k^w&(R^k))+D[9]+2336552879&4294967295,V=w+(I<<12&4294967295|I>>>20),I=k+(R^V&(w^R))+D[10]+4294925233&4294967295,k=V+(I<<17&4294967295|I>>>15),I=R+(w^k&(V^w))+D[11]+2304563134&4294967295,R=k+(I<<22&4294967295|I>>>10),I=w+(V^R&(k^V))+D[12]+1804603682&4294967295,w=R+(I<<7&4294967295|I>>>25),I=V+(k^w&(R^k))+D[13]+4254626195&4294967295,V=w+(I<<12&4294967295|I>>>20),I=k+(R^V&(w^R))+D[14]+2792965006&4294967295,k=V+(I<<17&4294967295|I>>>15),I=R+(w^k&(V^w))+D[15]+1236535329&4294967295,R=k+(I<<22&4294967295|I>>>10),I=w+(k^V&(R^k))+D[1]+4129170786&4294967295,w=R+(I<<5&4294967295|I>>>27),I=V+(R^k&(w^R))+D[6]+3225465664&4294967295,V=w+(I<<9&4294967295|I>>>23),I=k+(w^R&(V^w))+D[11]+643717713&4294967295,k=V+(I<<14&4294967295|I>>>18),I=R+(V^w&(k^V))+D[0]+3921069994&4294967295,R=k+(I<<20&4294967295|I>>>12),I=w+(k^V&(R^k))+D[5]+3593408605&4294967295,w=R+(I<<5&4294967295|I>>>27),I=V+(R^k&(w^R))+D[10]+38016083&4294967295,V=w+(I<<9&4294967295|I>>>23),I=k+(w^R&(V^w))+D[15]+3634488961&4294967295,k=V+(I<<14&4294967295|I>>>18),I=R+(V^w&(k^V))+D[4]+3889429448&4294967295,R=k+(I<<20&4294967295|I>>>12),I=w+(k^V&(R^k))+D[9]+568446438&4294967295,w=R+(I<<5&4294967295|I>>>27),I=V+(R^k&(w^R))+D[14]+3275163606&4294967295,V=w+(I<<9&4294967295|I>>>23),I=k+(w^R&(V^w))+D[3]+4107603335&4294967295,k=V+(I<<14&4294967295|I>>>18),I=R+(V^w&(k^V))+D[8]+1163531501&4294967295,R=k+(I<<20&4294967295|I>>>12),I=w+(k^V&(R^k))+D[13]+2850285829&4294967295,w=R+(I<<5&4294967295|I>>>27),I=V+(R^k&(w^R))+D[2]+4243563512&4294967295,V=w+(I<<9&4294967295|I>>>23),I=k+(w^R&(V^w))+D[7]+1735328473&4294967295,k=V+(I<<14&4294967295|I>>>18),I=R+(V^w&(k^V))+D[12]+2368359562&4294967295,R=k+(I<<20&4294967295|I>>>12),I=w+(R^k^V)+D[5]+4294588738&4294967295,w=R+(I<<4&4294967295|I>>>28),I=V+(w^R^k)+D[8]+2272392833&4294967295,V=w+(I<<11&4294967295|I>>>21),I=k+(V^w^R)+D[11]+1839030562&4294967295,k=V+(I<<16&4294967295|I>>>16),I=R+(k^V^w)+D[14]+4259657740&4294967295,R=k+(I<<23&4294967295|I>>>9),I=w+(R^k^V)+D[1]+2763975236&4294967295,w=R+(I<<4&4294967295|I>>>28),I=V+(w^R^k)+D[4]+1272893353&4294967295,V=w+(I<<11&4294967295|I>>>21),I=k+(V^w^R)+D[7]+4139469664&4294967295,k=V+(I<<16&4294967295|I>>>16),I=R+(k^V^w)+D[10]+3200236656&4294967295,R=k+(I<<23&4294967295|I>>>9),I=w+(R^k^V)+D[13]+681279174&4294967295,w=R+(I<<4&4294967295|I>>>28),I=V+(w^R^k)+D[0]+3936430074&4294967295,V=w+(I<<11&4294967295|I>>>21),I=k+(V^w^R)+D[3]+3572445317&4294967295,k=V+(I<<16&4294967295|I>>>16),I=R+(k^V^w)+D[6]+76029189&4294967295,R=k+(I<<23&4294967295|I>>>9),I=w+(R^k^V)+D[9]+3654602809&4294967295,w=R+(I<<4&4294967295|I>>>28),I=V+(w^R^k)+D[12]+3873151461&4294967295,V=w+(I<<11&4294967295|I>>>21),I=k+(V^w^R)+D[15]+530742520&4294967295,k=V+(I<<16&4294967295|I>>>16),I=R+(k^V^w)+D[2]+3299628645&4294967295,R=k+(I<<23&4294967295|I>>>9),I=w+(k^(R|~V))+D[0]+4096336452&4294967295,w=R+(I<<6&4294967295|I>>>26),I=V+(R^(w|~k))+D[7]+1126891415&4294967295,V=w+(I<<10&4294967295|I>>>22),I=k+(w^(V|~R))+D[14]+2878612391&4294967295,k=V+(I<<15&4294967295|I>>>17),I=R+(V^(k|~w))+D[5]+4237533241&4294967295,R=k+(I<<21&4294967295|I>>>11),I=w+(k^(R|~V))+D[12]+1700485571&4294967295,w=R+(I<<6&4294967295|I>>>26),I=V+(R^(w|~k))+D[3]+2399980690&4294967295,V=w+(I<<10&4294967295|I>>>22),I=k+(w^(V|~R))+D[10]+4293915773&4294967295,k=V+(I<<15&4294967295|I>>>17),I=R+(V^(k|~w))+D[1]+2240044497&4294967295,R=k+(I<<21&4294967295|I>>>11),I=w+(k^(R|~V))+D[8]+1873313359&4294967295,w=R+(I<<6&4294967295|I>>>26),I=V+(R^(w|~k))+D[15]+4264355552&4294967295,V=w+(I<<10&4294967295|I>>>22),I=k+(w^(V|~R))+D[6]+2734768916&4294967295,k=V+(I<<15&4294967295|I>>>17),I=R+(V^(k|~w))+D[13]+1309151649&4294967295,R=k+(I<<21&4294967295|I>>>11),I=w+(k^(R|~V))+D[4]+4149444226&4294967295,w=R+(I<<6&4294967295|I>>>26),I=V+(R^(w|~k))+D[11]+3174756917&4294967295,V=w+(I<<10&4294967295|I>>>22),I=k+(w^(V|~R))+D[2]+718787259&4294967295,k=V+(I<<15&4294967295|I>>>17),I=R+(V^(k|~w))+D[9]+3951481745&4294967295,x.g[0]=x.g[0]+w&4294967295,x.g[1]=x.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,x.g[2]=x.g[2]+k&4294967295,x.g[3]=x.g[3]+V&4294967295}r.prototype.u=function(x,w){w===void 0&&(w=x.length);for(var R=w-this.blockSize,D=this.B,k=this.h,V=0;V<w;){if(k==0)for(;V<=R;)a(this,x,V),V+=this.blockSize;if(typeof x=="string"){for(;V<w;)if(D[k++]=x.charCodeAt(V++),k==this.blockSize){a(this,D),k=0;break}}else for(;V<w;)if(D[k++]=x[V++],k==this.blockSize){a(this,D),k=0;break}}this.h=k,this.o+=w},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var w=1;w<x.length-8;++w)x[w]=0;var R=8*this.o;for(w=x.length-8;w<x.length;++w)x[w]=R&255,R/=256;for(this.u(x),x=Array(16),w=R=0;4>w;++w)for(var D=0;32>D;D+=8)x[R++]=this.g[w]>>>D&255;return x};function l(x,w){var R=p;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=w(x)}function h(x,w){this.h=w;for(var R=[],D=!0,k=x.length-1;0<=k;k--){var V=x[k]|0;D&&V==w||(R[k]=V,D=!1)}this.g=R}var p={};function m(x){return-128<=x&&128>x?l(x,function(w){return new h([w|0],0>w?-1:0)}):new h([x|0],0>x?-1:0)}function g(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return q(g(-x));for(var w=[],R=1,D=0;x>=R;D++)w[D]=x/R|0,R*=4294967296;return new h(w,0)}function E(x,w){if(x.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(x.charAt(0)=="-")return q(E(x.substring(1),w));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(w,8)),D=T,k=0;k<x.length;k+=8){var V=Math.min(8,x.length-k),I=parseInt(x.substring(k,k+V),w);8>V?(V=g(Math.pow(w,V)),D=D.j(V).add(g(I))):(D=D.j(R),D=D.add(g(I)))}return D}var T=m(0),b=m(1),L=m(16777216);i=h.prototype,i.m=function(){if(G(this))return-q(this).m();for(var x=0,w=1,R=0;R<this.g.length;R++){var D=this.i(R);x+=(0<=D?D:4294967296+D)*w,w*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(N(this))return"0";if(G(this))return"-"+q(this).toString(x);for(var w=g(Math.pow(x,6)),R=this,D="";;){var k=de(R,w).g;R=X(R,k.j(w));var V=((0<R.g.length?R.g[0]:R.h)>>>0).toString(x);if(R=k,N(R))return V+D;for(;6>V.length;)V="0"+V;D=V+D}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function N(x){if(x.h!=0)return!1;for(var w=0;w<x.g.length;w++)if(x.g[w]!=0)return!1;return!0}function G(x){return x.h==-1}i.l=function(x){return x=X(this,x),G(x)?-1:N(x)?0:1};function q(x){for(var w=x.g.length,R=[],D=0;D<w;D++)R[D]=~x.g[D];return new h(R,~x.h).add(b)}i.abs=function(){return G(this)?q(this):this},i.add=function(x){for(var w=Math.max(this.g.length,x.g.length),R=[],D=0,k=0;k<=w;k++){var V=D+(this.i(k)&65535)+(x.i(k)&65535),I=(V>>>16)+(this.i(k)>>>16)+(x.i(k)>>>16);D=I>>>16,V&=65535,I&=65535,R[k]=I<<16|V}return new h(R,R[R.length-1]&-2147483648?-1:0)};function X(x,w){return x.add(q(w))}i.j=function(x){if(N(this)||N(x))return T;if(G(this))return G(x)?q(this).j(q(x)):q(q(this).j(x));if(G(x))return q(this.j(q(x)));if(0>this.l(L)&&0>x.l(L))return g(this.m()*x.m());for(var w=this.g.length+x.g.length,R=[],D=0;D<2*w;D++)R[D]=0;for(D=0;D<this.g.length;D++)for(var k=0;k<x.g.length;k++){var V=this.i(D)>>>16,I=this.i(D)&65535,Ft=x.i(k)>>>16,ht=x.i(k)&65535;R[2*D+2*k]+=I*ht,se(R,2*D+2*k),R[2*D+2*k+1]+=V*ht,se(R,2*D+2*k+1),R[2*D+2*k+1]+=I*Ft,se(R,2*D+2*k+1),R[2*D+2*k+2]+=V*Ft,se(R,2*D+2*k+2)}for(D=0;D<w;D++)R[D]=R[2*D+1]<<16|R[2*D];for(D=w;D<2*w;D++)R[D]=0;return new h(R,0)};function se(x,w){for(;(x[w]&65535)!=x[w];)x[w+1]+=x[w]>>>16,x[w]&=65535,w++}function te(x,w){this.g=x,this.h=w}function de(x,w){if(N(w))throw Error("division by zero");if(N(x))return new te(T,T);if(G(x))return w=de(q(x),w),new te(q(w.g),q(w.h));if(G(w))return w=de(x,q(w)),new te(q(w.g),w.h);if(30<x.g.length){if(G(x)||G(w))throw Error("slowDivide_ only works with positive integers.");for(var R=b,D=w;0>=D.l(x);)R=he(R),D=he(D);var k=Ae(R,1),V=Ae(D,1);for(D=Ae(D,2),R=Ae(R,2);!N(D);){var I=V.add(D);0>=I.l(x)&&(k=k.add(R),V=I),D=Ae(D,1),R=Ae(R,1)}return w=X(x,k.j(w)),new te(k,w)}for(k=T;0<=x.l(w);){for(R=Math.max(1,Math.floor(x.m()/w.m())),D=Math.ceil(Math.log(R)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),V=g(R),I=V.j(w);G(I)||0<I.l(x);)R-=D,V=g(R),I=V.j(w);N(V)&&(V=b),k=k.add(V),x=X(x,I)}return new te(k,x)}i.A=function(x){return de(this,x).h},i.and=function(x){for(var w=Math.max(this.g.length,x.g.length),R=[],D=0;D<w;D++)R[D]=this.i(D)&x.i(D);return new h(R,this.h&x.h)},i.or=function(x){for(var w=Math.max(this.g.length,x.g.length),R=[],D=0;D<w;D++)R[D]=this.i(D)|x.i(D);return new h(R,this.h|x.h)},i.xor=function(x){for(var w=Math.max(this.g.length,x.g.length),R=[],D=0;D<w;D++)R[D]=this.i(D)^x.i(D);return new h(R,this.h^x.h)};function he(x){for(var w=x.g.length+1,R=[],D=0;D<w;D++)R[D]=x.i(D)<<1|x.i(D-1)>>>31;return new h(R,x.h)}function Ae(x,w){var R=w>>5;w%=32;for(var D=x.g.length-R,k=[],V=0;V<D;V++)k[V]=0<w?x.i(V+R)>>>w|x.i(V+R+1)<<32-w:x.i(V+R);return new h(k,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=E,Sg=h}).apply(typeof mT<"u"?mT:typeof self<"u"?self:typeof window<"u"?window:{});var Sh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ZS,cu,JS,Ph,Cm,eA,tA,nA;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,_,y){return c==Array.prototype||c==Object.prototype||(c[_]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sh=="object"&&Sh];for(var _=0;_<c.length;++_){var y=c[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function a(c,_){if(_)e:{var y=r;c=c.split(".");for(var A=0;A<c.length-1;A++){var U=c[A];if(!(U in y))break e;y=y[U]}c=c[c.length-1],A=y[c],_=_(A),_!=A&&_!=null&&e(y,c,{configurable:!0,writable:!0,value:_})}}function l(c,_){c instanceof String&&(c+="");var y=0,A=!1,U={next:function(){if(!A&&y<c.length){var F=y++;return{value:_(F,c[F]),done:!1}}return A=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(c){return c||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var _=typeof c;return _=_!="object"?_:c?Array.isArray(c)?"array":_:"null",_=="array"||_=="object"&&typeof c.length=="number"}function g(c){var _=typeof c;return _=="object"&&c!=null||_=="function"}function E(c,_,y){return c.call.apply(c.bind,arguments)}function T(c,_,y){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,A),c.apply(_,U)}}return function(){return c.apply(_,arguments)}}function b(c,_,y){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,b.apply(null,arguments)}function L(c,_){var y=Array.prototype.slice.call(arguments,1);return function(){var A=y.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function N(c,_){function y(){}y.prototype=_.prototype,c.aa=_.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(A,U,F){for(var re=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)re[ke-2]=arguments[ke];return _.prototype[U].apply(A,re)}}function G(c){const _=c.length;if(0<_){const y=Array(_);for(let A=0;A<_;A++)y[A]=c[A];return y}return[]}function q(c,_){for(let y=1;y<arguments.length;y++){const A=arguments[y];if(m(A)){const U=c.length||0,F=A.length||0;c.length=U+F;for(let re=0;re<F;re++)c[U+re]=A[re]}else c.push(A)}}class X{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function se(c){return/^[\s\xa0]*$/.test(c)}function te(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function de(c){return de[" "](c),c}de[" "]=function(){};var he=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function Ae(c,_,y){for(const A in c)_.call(y,c[A],A,c)}function x(c,_){for(const y in c)_.call(void 0,c[y],y,c)}function w(c){const _={};for(const y in c)_[y]=c[y];return _}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(c,_){let y,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(y in A)c[y]=A[y];for(let F=0;F<R.length;F++)y=R[F],Object.prototype.hasOwnProperty.call(A,y)&&(c[y]=A[y])}}function k(c){var _=1;c=c.split(":");const y=[];for(;0<_&&c.length;)y.push(c.shift()),_--;return c.length&&y.push(c.join(":")),y}function V(c){p.setTimeout(()=>{throw c},0)}function I(){var c=He;let _=null;return c.g&&(_=c.g,c.g=c.g.next,c.g||(c.h=null),_.next=null),_}class Ft{constructor(){this.h=this.g=null}add(_,y){const A=ht.get();A.set(_,y),this.h?this.h.next=A:this.g=A,this.h=A}}var ht=new X(()=>new K,c=>c.reset());class K{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,pe=!1,He=new Ft,O=()=>{const c=p.Promise.resolve(void 0);ae=()=>{c.then(ee)}};var ee=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(y){V(y)}var _=ht;_.j(c),100>_.h&&(_.h++,c.next=_.g,_.g=c)}pe=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(c,_){this.type=c,this.g=this.target=_,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,_=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};p.addEventListener("test",y,_),p.removeEventListener("test",y,_)}catch{}return c}();function Re(c,_){if(ie.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=_,_=c.relatedTarget){if(he){e:{try{de(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else y=="mouseover"?_=c.fromElement:y=="mouseout"&&(_=c.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ee[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Re.aa.h.call(this)}}N(Re,ie);var Ee={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),et=0;function oi(c,_,y,A,U){this.listener=c,this.proxy=null,this.src=_,this.type=y,this.capture=!!A,this.ha=U,this.key=++et,this.da=this.fa=!1}function wr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Mi(c){this.src=c,this.g={},this.h=0}Mi.prototype.add=function(c,_,y,A,U){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var re=gs(c,_,A,U);return-1<re?(_=c[re],y||(_.fa=!1)):(_=new oi(_,this.src,F,!!A,U),_.fa=y,c.push(_)),_};function ms(c,_){var y=_.type;if(y in c.g){var A=c.g[y],U=Array.prototype.indexOf.call(A,_,void 0),F;(F=0<=U)&&Array.prototype.splice.call(A,U,1),F&&(wr(_),c.g[y].length==0&&(delete c.g[y],c.h--))}}function gs(c,_,y,A){for(var U=0;U<c.length;++U){var F=c[U];if(!F.da&&F.listener==_&&F.capture==!!y&&F.ha==A)return U}return-1}var _s="closure_lm_"+(1e6*Math.random()|0),qo={};function Xu(c,_,y,A,U){if(Array.isArray(_)){for(var F=0;F<_.length;F++)Xu(c,_[F],y,A,U);return null}return y=Wu(y),c&&c[Dt]?c.K(_,y,g(A)?!!A.capture:!1,U):On(c,_,y,!1,A,U)}function On(c,_,y,A,U,F){if(!_)throw Error("Invalid event type");var re=g(U)?!!U.capture:!!U,ke=ba(c);if(ke||(c[_s]=ke=new Mi(c)),y=ke.add(_,y,A,re,F),y.proxy)return y;if(A=Gf(),y.proxy=A,A.src=c,A.listener=y,c.addEventListener)me||(U=re),U===void 0&&(U=!1),c.addEventListener(_.toString(),A,U);else if(c.attachEvent)c.attachEvent(ys(_.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Gf(){function c(y){return _.call(c.src,c.listener,y)}const _=Kf;return c}function Go(c,_,y,A,U){if(Array.isArray(_))for(var F=0;F<_.length;F++)Go(c,_[F],y,A,U);else A=g(A)?!!A.capture:!!A,y=Wu(y),c&&c[Dt]?(c=c.i,_=String(_).toString(),_ in c.g&&(F=c.g[_],y=gs(F,y,A,U),-1<y&&(wr(F[y]),Array.prototype.splice.call(F,y,1),F.length==0&&(delete c.g[_],c.h--)))):c&&(c=ba(c))&&(_=c.g[_.toString()],c=-1,_&&(c=gs(_,y,A,U)),(y=-1<c?_[c]:null)&&Aa(y))}function Aa(c){if(typeof c!="number"&&c&&!c.da){var _=c.src;if(_&&_[Dt])ms(_.i,c);else{var y=c.type,A=c.proxy;_.removeEventListener?_.removeEventListener(y,A,c.capture):_.detachEvent?_.detachEvent(ys(y),A):_.addListener&&_.removeListener&&_.removeListener(A),(y=ba(_))?(ms(y,c),y.h==0&&(y.src=null,_[_s]=null)):wr(c)}}}function ys(c){return c in qo?qo[c]:qo[c]="on"+c}function Kf(c,_){if(c.da)c=!0;else{_=new Re(_,this);var y=c.listener,A=c.ha||c.src;c.fa&&Aa(c),c=y.call(A,_)}return c}function ba(c){return c=c[_s],c instanceof Mi?c:null}var Ko="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wu(c){return typeof c=="function"?c:(c[Ko]||(c[Ko]=function(_){return c.handleEvent(_)}),c[Ko])}function ft(){oe.call(this),this.i=new Mi(this),this.M=this,this.F=null}N(ft,oe),ft.prototype[Dt]=!0,ft.prototype.removeEventListener=function(c,_,y,A){Go(this,c,_,y,A)};function Ge(c,_){var y,A=c.F;if(A)for(y=[];A;A=A.F)y.push(A);if(c=c.M,A=_.type||_,typeof _=="string")_=new ie(_,c);else if(_ instanceof ie)_.target=_.target||c;else{var U=_;_=new ie(A,c),D(_,U)}if(U=!0,y)for(var F=y.length-1;0<=F;F--){var re=_.g=y[F];U=Tn(re,A,!0,_)&&U}if(re=_.g=c,U=Tn(re,A,!0,_)&&U,U=Tn(re,A,!1,_)&&U,y)for(F=0;F<y.length;F++)re=_.g=y[F],U=Tn(re,A,!1,_)&&U}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var c=this.i,_;for(_ in c.g){for(var y=c.g[_],A=0;A<y.length;A++)wr(y[A]);delete c.g[_],c.h--}}this.F=null},ft.prototype.K=function(c,_,y,A){return this.i.add(String(c),_,!1,y,A)},ft.prototype.L=function(c,_,y,A){return this.i.add(String(c),_,!0,y,A)};function Tn(c,_,y,A){if(_=c.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,F=0;F<_.length;++F){var re=_[F];if(re&&!re.da&&re.capture==y){var ke=re.listener,Rt=re.ha||re.src;re.fa&&ms(c.i,re),U=ke.call(Rt,A)!==!1&&U}}return U&&!A.defaultPrevented}function en(c,_,y){if(typeof c=="function")y&&(c=b(c,y));else if(c&&typeof c.handleEvent=="function")c=b(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:p.setTimeout(c,_||0)}function Zu(c){c.g=en(()=>{c.g=null,c.i&&(c.i=!1,Zu(c))},c.l);const _=c.h;c.h=null,c.m.apply(null,_)}class Yf extends oe{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Zu(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(c){oe.call(this),this.h=c,this.g={}}N(vs,oe);var Es=[];function Ts(c){Ae(c.g,function(_,y){this.g.hasOwnProperty(y)&&Aa(_)},c),c.g={}}vs.prototype.N=function(){vs.aa.N.call(this),Ts(this)},vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kn=p.JSON.stringify,wa=p.JSON.parse,Ss=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function Yo(){}Yo.prototype.h=null;function Qo(c){return c.h||(c.h=c.i())}function $o(){}var xi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ki(){ie.call(this,"d")}N(ki,ie);function Xo(){ie.call(this,"c")}N(Xo,ie);var li={},Wo=null;function Rr(){return Wo=Wo||new ft}li.La="serverreachability";function Ra(c){ie.call(this,li.La,c)}N(Ra,ie);function Cr(c){const _=Rr();Ge(_,new Ra(_))}li.STAT_EVENT="statevent";function Ju(c,_){ie.call(this,li.STAT_EVENT,c),this.stat=_}N(Ju,ie);function at(c){const _=Rr();Ge(_,new Ju(_,c))}li.Ma="timingevent";function wt(c,_){ie.call(this,li.Ma,c),this.size=_}N(wt,ie);function vt(c,_){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},_)}function Dn(){this.g=!0}Dn.prototype.xa=function(){this.g=!1};function Zo(c,_,y,A,U,F){c.info(function(){if(c.g)if(F)for(var re="",ke=F.split("&"),Rt=0;Rt<ke.length;Rt++){var Pe=ke[Rt].split("=");if(1<Pe.length){var xt=Pe[0];Pe=Pe[1];var Ct=xt.split("_");re=2<=Ct.length&&Ct[1]=="type"?re+(xt+"="+Pe+"&"):re+(xt+"=redacted&")}}else re=null;else re=F;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+_+`
`+y+`
`+re})}function Qf(c,_,y,A,U,F,re){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+_+`
`+y+`
`+F+" "+re})}function Ir(c,_,y,A){c.info(function(){return"XMLHTTP TEXT ("+_+"): "+As(c,y)+(A?" "+A:"")})}function ec(c,_){c.info(function(){return"TIMEOUT: "+_})}Dn.prototype.info=function(){};function As(c,_){if(!c.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var A=y[c];if(!(2>A.length)){var U=A[1];if(Array.isArray(U)&&!(1>U.length)){var F=U[0];if(F!="noop"&&F!="stop"&&F!="close")for(var re=1;re<U.length;re++)U[re]=""}}}}return Kn(y)}catch{return _}}var Nr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ui;function ci(){}N(ci,Yo),ci.prototype.g=function(){return new XMLHttpRequest},ci.prototype.i=function(){return{}},ui=new ci;function cn(c,_,y,A){this.j=c,this.i=_,this.l=y,this.R=A||1,this.U=new vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gt}function gt(){this.i=null,this.g="",this.h=!1}var Jo={},Ca={};function Yn(c,_,y){c.L=1,c.v=Is(Sn(_)),c.m=y,c.P=!0,Li(c,null)}function Li(c,_){c.F=Date.now(),bs(c),c.A=Sn(c.v);var y=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),sl(y.i,"t",A),c.C=0,y=c.j.J,c.h=new gt,c.g=gc(c.j,y?_:null,!c.m),0<c.O&&(c.M=new Yf(b(c.Y,c,c.g),c.O)),_=c.U,y=c.g,A=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(Es[0]=U.toString()),U=Es);for(var F=0;F<U.length;F++){var re=Xu(y,U[F],A||_.handleEvent,!1,_.h||_);if(!re)break;_.g[re.key]=re}_=c.H?w(c.H):{},c.m?(c.u||(c.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,_)):(c.u="GET",c.g.ea(c.A,c.u,null,_)),Cr(),Zo(c.i,c.u,c.A,c.l,c.R,c.m)}cn.prototype.ca=function(c){c=c.target;const _=this.M;_&&Pn(c)==3?_.j():this.Y(c)},cn.prototype.Y=function(c){try{if(c==this.g)e:{const Ct=Pn(this.g);var _=this.g.Ba();const qi=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||lc(this.g)))){this.J||Ct!=4||_==7||(_==8||0>=qi?Cr(3):Cr(2)),Or(this);var y=this.g.Z();this.X=y;t:if(tc(this)){var A=lc(this.g);c="";var U=A.length,F=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),hi(this);var re="";break t}this.h.i=new p.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,c+=this.h.i.decode(A[_],{stream:!(F&&_==U-1)});A.length=0,this.h.g+=c,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=y==200,Qf(this.i,this.u,this.A,this.l,this.R,Ct,y),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Rt=this.g;if((ke=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!se(ke)){var Pe=ke;break t}}Pe=null}if(y=Pe)Ir(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ws(this,y);else{this.o=!1,this.s=3,at(12),qt(this),hi(this);break e}}if(this.P){y=!0;let Gt;for(;!this.J&&this.C<re.length;)if(Gt=nc(this,re),Gt==Ca){Ct==4&&(this.s=4,at(14),y=!1),Ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Jo){this.s=4,at(15),Ir(this.i,this.l,re,"[Invalid Chunk]"),y=!1;break}else Ir(this.i,this.l,Gt,null),ws(this,Gt);if(tc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||re.length!=0||this.h.h||(this.s=1,at(16),y=!1),this.o=this.o&&y,!y)Ir(this.i,this.l,re,"[Invalid Chunked Response]"),qt(this),hi(this);else if(0<re.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Ls(xt),xt.M=!0,at(11))}}else Ir(this.i,this.l,re,null),ws(this,re);Ct==4&&qt(this),this.o&&!this.J&&(Ct==4?dc(this.j,this):(this.o=!1,bs(this)))}else Jf(this.g),y==400&&0<re.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),qt(this),hi(this)}}}catch{}finally{}};function tc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function nc(c,_){var y=c.C,A=_.indexOf(`
`,y);return A==-1?Ca:(y=Number(_.substring(y,A)),isNaN(y)?Jo:(A+=1,A+y>_.length?Ca:(_=_.slice(A,A+y),c.C=A+y,_)))}cn.prototype.cancel=function(){this.J=!0,qt(this)};function bs(c){c.S=Date.now()+c.I,ic(c,c.I)}function ic(c,_){if(c.B!=null)throw Error("WatchDog timer not null");c.B=vt(b(c.ba,c),_)}function Or(c){c.B&&(p.clearTimeout(c.B),c.B=null)}cn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(ec(this.i,this.A),this.L!=2&&(Cr(),at(17)),qt(this),this.s=2,hi(this)):ic(this,this.S-c)};function hi(c){c.j.G==0||c.J||dc(c.j,c)}function qt(c){Or(c);var _=c.M;_&&typeof _.ma=="function"&&_.ma(),c.M=null,Ts(c.U),c.g&&(_=c.g,c.g=null,_.abort(),_.ma())}function ws(c,_){try{var y=c.j;if(y.G!=0&&(y.g==c||el(y.h,c))){if(!c.K&&el(y.h,c)&&y.G==3){try{var A=y.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)za(y),Va(y);else break e;cl(y),at(18)}}else y.za=U[1],0<y.za-y.T&&37500>U[2]&&y.F&&y.v==0&&!y.C&&(y.C=vt(b(y.Za,y),6e3));if(1>=Na(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Fi(y,11)}else if((c.K||y.g==c)&&za(y),!se(_))for(U=y.Da.g.parse(_),_=0;_<U.length;_++){let Pe=U[_];if(y.T=Pe[0],Pe=Pe[1],y.G==2)if(Pe[0]=="c"){y.K=Pe[1],y.ia=Pe[2];const xt=Pe[3];xt!=null&&(y.la=xt,y.j.info("VER="+y.la));const Ct=Pe[4];Ct!=null&&(y.Aa=Ct,y.j.info("SVER="+y.Aa));const qi=Pe[5];qi!=null&&typeof qi=="number"&&0<qi&&(A=1.5*qi,y.L=A,y.j.info("backChannelRequestTimeoutMs_="+A)),A=y;const Gt=c.g;if(Gt){const yi=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yi){var F=A.h;F.g||yi.indexOf("spdy")==-1&&yi.indexOf("quic")==-1&&yi.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Oa(F,F.h),F.h=null))}if(A.D){const fl=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;fl&&(A.ya=fl,Qe(A.I,A.D,fl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),A=y;var re=c;if(A.qa=mc(A,A.J?A.ia:null,A.W),re.K){hn(A.h,re);var ke=re,Rt=A.L;Rt&&(ke.I=Rt),ke.B&&(Or(ke),bs(ke)),A.g=re}else hc(A);0<y.i.length&&Ua(y)}else Pe[0]!="stop"&&Pe[0]!="close"||Fi(y,7);else y.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Fi(y,7):ll(y):Pe[0]!="noop"&&y.l&&y.l.ta(Pe),y.v=0)}}Cr(4)}catch{}}var rc=class{constructor(c,_){this.g=c,this.map=_}};function Vi(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ia(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Na(c){return c.h?1:c.g?c.g.size:0}function el(c,_){return c.h?c.h==_:c.g?c.g.has(_):!1}function Oa(c,_){c.g?c.g.add(_):c.h=_}function hn(c,_){c.h&&c.h==_?c.h=null:c.g&&c.g.has(_)&&c.g.delete(_)}Vi.prototype.cancel=function(){if(this.i=tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function tl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let _=c.i;for(const y of c.g.values())_=_.concat(y.D);return _}return G(c.i)}function $f(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var _=[],y=c.length,A=0;A<y;A++)_.push(c[A]);return _}_=[],y=0;for(A in c)_[y++]=c[A];return _}function Da(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var _=[];c=c.length;for(var y=0;y<c;y++)_.push(y);return _}_=[],y=0;for(const A in c)_[y++]=A;return _}}}function nl(c,_){if(c.forEach&&typeof c.forEach=="function")c.forEach(_,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,_,void 0);else for(var y=Da(c),A=$f(c),U=A.length,F=0;F<U;F++)_.call(void 0,A[F],y&&y[F],c)}var Rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xf(c,_){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var A=c[y].indexOf("="),U=null;if(0<=A){var F=c[y].substring(0,A);U=c[y].substring(A+1)}else F=c[y];_(F,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Et(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Et){this.h=c.h,Cs(this,c.j),this.o=c.o,this.g=c.g,Dr(this,c.s),this.l=c.l;var _=c.i,y=new zi;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),Ui(this,y),this.m=c.m}else c&&(_=String(c).match(Rs))?(this.h=!1,Cs(this,_[1]||"",!0),this.o=Mn(_[2]||""),this.g=Mn(_[3]||"",!0),Dr(this,_[4]),this.l=Mn(_[5]||"",!0),Ui(this,_[6]||"",!0),this.m=Mn(_[7]||"")):(this.h=!1,this.i=new zi(null,this.h))}Et.prototype.toString=function(){var c=[],_=this.j;_&&c.push(Ns(_,il,!0),":");var y=this.g;return(y||_=="file")&&(c.push("//"),(_=this.o)&&c.push(Ns(_,il,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Ns(y,y.charAt(0)=="/"?Wf:rl,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Ns(y,Ma)),c.join("")};function Sn(c){return new Et(c)}function Cs(c,_,y){c.j=y?Mn(_,!0):_,c.j&&(c.j=c.j.replace(/:$/,""))}function Dr(c,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);c.s=_}else c.s=null}function Ui(c,_,y){_ instanceof zi?(c.i=_,ac(c.i,c.h)):(y||(_=Ns(_,Zf)),c.i=new zi(_,c.h))}function Qe(c,_,y){c.i.set(_,y)}function Is(c){return Qe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Mn(c,_){return c?_?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ns(c,_,y){return typeof c=="string"?(c=encodeURI(c).replace(_,sc),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function sc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var il=/[#\/\?@]/g,rl=/[#\?:]/g,Wf=/[#\?]/g,Zf=/[#\?@]/g,Ma=/#/g;function zi(c,_){this.h=this.g=null,this.i=c||null,this.j=!!_}function xn(c){c.g||(c.g=new Map,c.h=0,c.i&&Xf(c.i,function(_,y){c.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}i=zi.prototype,i.add=function(c,_){xn(this),this.i=null,c=fi(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(_),this.h+=1,this};function Bi(c,_){xn(c),_=fi(c,_),c.g.has(_)&&(c.i=null,c.h-=c.g.get(_).length,c.g.delete(_))}function Hi(c,_){return xn(c),_=fi(c,_),c.g.has(_)}i.forEach=function(c,_){xn(this),this.g.forEach(function(y,A){y.forEach(function(U){c.call(_,U,A,this)},this)},this)},i.na=function(){xn(this);const c=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let A=0;A<_.length;A++){const U=c[A];for(let F=0;F<U.length;F++)y.push(_[A])}return y},i.V=function(c){xn(this);let _=[];if(typeof c=="string")Hi(this,c)&&(_=_.concat(this.g.get(fi(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)_=_.concat(c[y])}return _},i.set=function(c,_){return xn(this),this.i=null,c=fi(this,c),Hi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[_]),this.h+=1,this},i.get=function(c,_){return c?(c=this.V(c),0<c.length?String(c[0]):_):_};function sl(c,_,y){Bi(c,_),0<y.length&&(c.i=null,c.g.set(fi(c,_),G(y)),c.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var A=_[y];const F=encodeURIComponent(String(A)),re=this.V(A);for(A=0;A<re.length;A++){var U=F;re[A]!==""&&(U+="="+encodeURIComponent(String(re[A]))),c.push(U)}}return this.i=c.join("&")};function fi(c,_){return _=String(_),c.j&&(_=_.toLowerCase()),_}function ac(c,_){_&&!c.j&&(xn(c),c.i=null,c.g.forEach(function(y,A){var U=A.toLowerCase();A!=U&&(Bi(this,A),sl(this,U,y))},c)),c.j=_}function Os(c,_){const y=new Dn;if(p.Image){const A=new Image;A.onload=L(kn,y,"TestLoadImage: loaded",!0,_,A),A.onerror=L(kn,y,"TestLoadImage: error",!1,_,A),A.onabort=L(kn,y,"TestLoadImage: abort",!1,_,A),A.ontimeout=L(kn,y,"TestLoadImage: timeout",!1,_,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else _(!1)}function Qn(c,_){const y=new Dn,A=new AbortController,U=setTimeout(()=>{A.abort(),kn(y,"TestPingServer: timeout",!1,_)},1e4);fetch(c,{signal:A.signal}).then(F=>{clearTimeout(U),F.ok?kn(y,"TestPingServer: ok",!0,_):kn(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),kn(y,"TestPingServer: error",!1,_)})}function kn(c,_,y,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(y)}catch{}}function Ds(){this.g=new Ss}function di(c,_,y){const A=y||"";try{nl(c,function(U,F){let re=U;g(U)&&(re=Kn(U)),_.push(A+F+"="+encodeURIComponent(re))})}catch(U){throw _.push(A+"type="+encodeURIComponent("_badmap")),U}}function Mr(c){this.l=c.Ub||null,this.j=c.eb||!1}N(Mr,Yo),Mr.prototype.g=function(){return new ji(this.l,this.j)},Mr.prototype.i=function(c){return function(){return c}}({});function ji(c,_){ft.call(this),this.D=c,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(ji,ft),i=ji.prototype,i.open=function(c,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=_,this.readyState=1,mi(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(_.body=c),(this.D||p).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,mi(this)),this.g&&(this.readyState=3,mi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;al(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function al(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var _=c.value?c.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!c.done}))&&(this.response=this.responseText+=_)}c.done?pi(this):mi(this),this.readyState==3&&al(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,pi(this))},i.Qa=function(c){this.g&&(this.response=c,pi(this))},i.ga=function(){this.g&&pi(this)};function pi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,mi(c)}i.setRequestHeader=function(c,_){this.u.append(c,_)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=_.next();return c.join(`\r
`)};function mi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ol(c){let _="";return Ae(c,function(y,A){_+=A,_+=":",_+=y,_+=`\r
`}),_}function Mt(c,_,y){e:{for(A in y){var A=!1;break e}A=!0}A||(y=ol(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Qe(c,_,y))}function Fe(c){ft.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Fe,ft);var xa=/^https?$/i,Ms=["POST","PUT"];i=Fe.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,_,y,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);_=_?_.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ui.g(),this.v=this.o?Qo(this.o):Qo(ui),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(_,String(c),!0),this.B=!1}catch(F){oc(this,F);return}if(c=y||"",y=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)y.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const F of A.keys())y.set(F,A.get(F));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(y.keys()).find(F=>F.toLowerCase()=="content-type"),U=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Ms,_,void 0))||A||U||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,re]of y)this.g.setRequestHeader(F,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xs(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){oc(this,F)}};function oc(c,_){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=_,c.m=5,ka(c),gi(c)}function ka(c){c.A||(c.A=!0,Ge(c,"complete"),Ge(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ge(this,"complete"),Ge(this,"abort"),gi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gi(this,!0)),Fe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Pa(this):this.bb())},i.bb=function(){Pa(this)};function Pa(c){if(c.h&&typeof h<"u"&&(!c.v[1]||Pn(c)!=4||c.Z()!=2)){if(c.u&&Pn(c)==4)en(c.Ea,0,c);else if(Ge(c,"readystatechange"),Pn(c)==4){c.h=!1;try{const re=c.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var A;if(A=re===0){var U=String(c.D).match(Rs)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),A=!xa.test(U?U.toLowerCase():"")}y=A}if(y)Ge(c,"complete"),Ge(c,"success");else{c.m=6;try{var F=2<Pn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",ka(c)}}finally{gi(c)}}}}function gi(c,_){if(c.g){xs(c);const y=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,_||Ge(c,"ready");try{y.onreadystatechange=A}catch{}}}function xs(c){c.I&&(p.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function Pn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var _=this.g.responseText;return c&&_.indexOf(c)==0&&(_=_.substring(c.length)),wa(_)}};function lc(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Jf(c){const _={};c=(c.g&&2<=Pn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(se(c[A]))continue;var y=k(c[A]);const U=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const F=_[U]||[];_[U]=F,F.push(y)}x(_,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(c,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||_}function La(c){this.Aa=0,this.i=[],this.j=new Dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ks("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ks("baseRetryDelayMs",5e3,c),this.cb=ks("retryDelaySeedMs",1e4,c),this.Wa=ks("forwardChannelMaxRetries",2,c),this.wa=ks("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Vi(c&&c.concurrentRequestLimit),this.Da=new Ds,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=La.prototype,i.la=8,i.G=1,i.connect=function(c,_,y,A){at(0),this.W=c,this.H=_||{},y&&A!==void 0&&(this.H.OSID=y,this.H.OAID=A),this.F=this.X,this.I=mc(this,null,this.W),Ua(this)};function ll(c){if(uc(c),c.G==3){var _=c.U++,y=Sn(c.I);if(Qe(y,"SID",c.K),Qe(y,"RID",_),Qe(y,"TYPE","terminate"),Ps(c,y),_=new cn(c,c.j,_),_.L=2,_.v=Is(Sn(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=_.v,y=!0),y||(_.g=gc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),bs(_)}pc(c)}function Va(c){c.g&&(Ls(c),c.g.cancel(),c.g=null)}function uc(c){Va(c),c.u&&(p.clearTimeout(c.u),c.u=null),za(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function Ua(c){if(!Ia(c.h)&&!c.s){c.s=!0;var _=c.Ga;ae||O(),pe||(ae(),pe=!0),He.add(_,c),c.B=0}}function ed(c,_){return Na(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=_.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=vt(b(c.Ga,c,_),hl(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new cn(this,this.j,c);let F=this.o;if(this.S&&(F?(F=w(F),D(F,this.S)):F=this.S),this.m!==null||this.O||(U.H=F,F=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var A=this.i[y];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=cc(this,U,_),y=Sn(this.I),Qe(y,"RID",c),Qe(y,"CVER",22),this.D&&Qe(y,"X-HTTP-Session-Id",this.D),Ps(this,y),F&&(this.O?_="headers="+encodeURIComponent(String(ol(F)))+"&"+_:this.m&&Mt(y,this.m,F)),Oa(this.h,U),this.Ua&&Qe(y,"TYPE","init"),this.P?(Qe(y,"$req",_),Qe(y,"SID","null"),U.T=!0,Yn(U,y,null)):Yn(U,y,_),this.G=2}}else this.G==3&&(c?ul(this,c):this.i.length==0||Ia(this.h)||ul(this))};function ul(c,_){var y;_?y=_.l:y=c.U++;const A=Sn(c.I);Qe(A,"SID",c.K),Qe(A,"RID",y),Qe(A,"AID",c.T),Ps(c,A),c.m&&c.o&&Mt(A,c.m,c.o),y=new cn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),_&&(c.i=_.D.concat(c.i)),_=cc(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Oa(c.h,y),Yn(y,A,_)}function Ps(c,_){c.H&&Ae(c.H,function(y,A){Qe(_,A,y)}),c.l&&nl({},function(y,A){Qe(_,A,y)})}function cc(c,_,y){y=Math.min(c.i.length,y);var A=c.l?b(c.l.Na,c.l,c):null;e:{var U=c.i;let F=-1;for(;;){const re=["count="+y];F==-1?0<y?(F=U[0].g,re.push("ofs="+F)):F=0:re.push("ofs="+F);let ke=!0;for(let Rt=0;Rt<y;Rt++){let Pe=U[Rt].g;const xt=U[Rt].map;if(Pe-=F,0>Pe)F=Math.max(0,U[Rt].g-100),ke=!1;else try{di(xt,re,"req"+Pe+"_")}catch{A&&A(xt)}}if(ke){A=re.join("&");break e}}}return c=c.i.splice(0,y),_.D=c,A}function hc(c){if(!c.g&&!c.u){c.Y=1;var _=c.Fa;ae||O(),pe||(ae(),pe=!0),He.add(_,c),c.v=0}}function cl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=vt(b(c.Fa,c),hl(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,fc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=vt(b(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Va(this),fc(this))};function Ls(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function fc(c){c.g=new cn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var _=Sn(c.qa);Qe(_,"RID","rpc"),Qe(_,"SID",c.K),Qe(_,"AID",c.T),Qe(_,"CI",c.F?"0":"1"),!c.F&&c.ja&&Qe(_,"TO",c.ja),Qe(_,"TYPE","xmlhttp"),Ps(c,_),c.m&&c.o&&Mt(_,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=Is(Sn(_)),y.m=null,y.P=!0,Li(y,c)}i.Za=function(){this.C!=null&&(this.C=null,Va(this),cl(this),at(19))};function za(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function dc(c,_){var y=null;if(c.g==_){za(c),Ls(c),c.g=null;var A=2}else if(el(c.h,_))y=_.D,hn(c.h,_),A=1;else return;if(c.G!=0){if(_.o)if(A==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var U=c.B;A=Rr(),Ge(A,new wt(A,y)),Ua(c)}else hc(c);else if(U=_.s,U==3||U==0&&0<_.X||!(A==1&&ed(c,_)||A==2&&cl(c)))switch(y&&0<y.length&&(_=c.h,_.i=_.i.concat(y)),U){case 1:Fi(c,5);break;case 4:Fi(c,10);break;case 3:Fi(c,6);break;default:Fi(c,2)}}}function hl(c,_){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*_}function Fi(c,_){if(c.j.info("Error code "+_),_==2){var y=b(c.fb,c),A=c.Xa;const U=!A;A=new Et(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Cs(A,"https"),Is(A),U?Os(A.toString(),y):Qn(A.toString(),y)}else at(2);c.G=0,c.l&&c.l.sa(_),pc(c),uc(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function pc(c){if(c.G=0,c.ka=[],c.l){const _=tl(c.h);(_.length!=0||c.i.length!=0)&&(q(c.ka,_),q(c.ka,c.i),c.h.i.length=0,G(c.i),c.i.length=0),c.l.ra()}}function mc(c,_,y){var A=y instanceof Et?Sn(y):new Et(y);if(A.g!="")_&&(A.g=_+"."+A.g),Dr(A,A.s);else{var U=p.location;A=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var F=new Et(null);A&&Cs(F,A),_&&(F.g=_),U&&Dr(F,U),y&&(F.l=y),A=F}return y=c.D,_=c.ya,y&&_&&Qe(A,y,_),Qe(A,"VER",c.la),Ps(c,A),A}function gc(c,_,y){if(_&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=c.Ca&&!c.pa?new Fe(new Mr({eb:y})):new Fe(c.pa),_.Ha(c.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function _c(){}i=_c.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ba(){}Ba.prototype.g=function(c,_){return new fn(c,_)};function fn(c,_){ft.call(this),this.g=new La(_),this.l=c,this.h=_&&_.messageUrlParams||null,c=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(c?c["X-WebChannel-Content-Type"]=_.messageContentType:c={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(c?c["X-WebChannel-Client-Profile"]=_.va:c={"X-WebChannel-Client-Profile":_.va}),this.g.S=c,(c=_&&_.Sb)&&!se(c)&&(this.g.m=c),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!se(_)&&(this.g.D=_,c=this.h,c!==null&&_ in c&&(c=this.h,_ in c&&delete c[_])),this.j=new _i(this)}N(fn,ft),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){ll(this.g)},fn.prototype.o=function(c){var _=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=Kn(c),c=y);_.i.push(new rc(_.Ya++,c)),_.G==3&&Ua(_)},fn.prototype.N=function(){this.g.l=null,delete this.j,ll(this.g),delete this.g,fn.aa.N.call(this)};function yc(c){ki.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var _=c.__sm__;if(_){e:{for(const y in _){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,_=_!==null&&c in _?_[c]:void 0),this.data=_}else this.data=c}N(yc,ki);function vc(){Xo.call(this),this.status=1}N(vc,Xo);function _i(c){this.g=c}N(_i,_c),_i.prototype.ua=function(){Ge(this.g,"a")},_i.prototype.ta=function(c){Ge(this.g,new yc(c))},_i.prototype.sa=function(c){Ge(this.g,new vc)},_i.prototype.ra=function(){Ge(this.g,"b")},Ba.prototype.createWebChannel=Ba.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,nA=function(){return new Ba},tA=function(){return Rr()},eA=li,Cm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nr.NO_ERROR=0,Nr.TIMEOUT=8,Nr.HTTP_ERROR=6,Ph=Nr,Pi.COMPLETE="complete",JS=Pi,$o.EventType=xi,xi.OPEN="a",xi.CLOSE="b",xi.ERROR="c",xi.MESSAGE="d",ft.prototype.listen=ft.prototype.K,cu=$o,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,ZS=Fe}).apply(typeof Sh<"u"?Sh:typeof self<"u"?self:typeof window<"u"?window:{});const gT="@firebase/firestore",_T="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new bf("@firebase/firestore");function _o(){return ua.logLevel}function ce(i,...e){if(ua.logLevel<=De.DEBUG){const t=e.map(Ag);ua.debug(`Firestore (${zo}): ${i}`,...t)}}function ca(i,...e){if(ua.logLevel<=De.ERROR){const t=e.map(Ag);ua.error(`Firestore (${zo}): ${i}`,...t)}}function Of(i,...e){if(ua.logLevel<=De.WARN){const t=e.map(Ag);ua.warn(`Firestore (${zo}): ${i}`,...t)}}function Ag(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(i,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,iA(i,r,t)}function iA(i,e,t){let r=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ca(r),new Error(r)}function mt(i,e,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,i||iA(e,a,r)}function nt(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Te extends Er{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(sn.UNAUTHENTICATED))}shutdown(){}}class RD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class CD{constructor(e){this.t=e,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){mt(this.o===void 0,42304);let r=this.i;const a=m=>this.i!==r?(r=this.i,t(m)):Promise.resolve();let l=new ra;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ra,e.enqueueRetryable(()=>a(this.currentUser))};const h=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},p=m=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ra)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(mt(typeof r.accessToken=="string",31837,{l:r}),new rA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return mt(e===null||typeof e=="string",2055,{h:e}),new sn(e)}}class ID{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ND{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ID(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(sn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){mt(this.o===void 0,3512);const r=l=>{l.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ce("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>r(l))};const a=l=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(mt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new yT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<i;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=DD(40);for(let l=0;l<a.length;++l)r.length<20&&a[l]<t&&(r+=e.charAt(a[l]%62))}return r}}function ze(i,e){return i<e?-1:i>e?1:0}function Im(i,e){let t=0;for(;t<i.length&&t<e.length;){const r=i.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return ze(r,a);{const l=MD(),h=xD(l.encode(vT(i,t)),l.encode(vT(e,t)));return h!==0?h:ze(r,a)}}t+=r>65535?2:1}return ze(i.length,e.length)}function vT(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function xD(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return ze(i[t],e[t]);return ze(i.length,e.length)}function Co(i,e,t){return i.length===e.length&&i.every((r,a)=>t(r,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=-62135596800,TT=1e6;class Ht{static now(){return Ht.fromMillis(Date.now())}static fromDate(e){return Ht.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*TT);return new Ht(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Te(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Te(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ET)throw new Te(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Te(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/TT}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ET;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{static fromTimestamp(e){return new lt(e)}static min(){return new lt(new Ht(0,0))}static max(){return new lt(new Ht(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="__name__";class bi{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ie(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ie(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return bi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof bi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const l=bi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return ze(e.length,t.length)}static compareSegments(e,t){const r=bi.isNumericId(e),a=bi.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?bi.extractNumericId(e).compare(bi.extractNumericId(t)):Im(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Sg.fromString(e.substring(4,e.length-2))}}class bt extends bi{construct(e,t,r){return new bt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Te(ne.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new bt(t)}static emptyPath(){return new bt([])}}const kD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Zt extends bi{construct(e,t,r){return new Zt(e,t,r)}static isValidIdentifier(e){return kD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ST}static keyField(){return new Zt([ST])}static fromServerFormat(e){const t=[];let r="",a=0;const l=()=>{if(r.length===0)throw new Te(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let h=!1;for(;a<e.length;){const p=e[a];if(p==="\\"){if(a+1===e.length)throw new Te(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new Te(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=m,a+=2}else p==="`"?(h=!h,a++):p!=="."||h?(r+=p,a++):(l(),a++)}if(l(),h)throw new Te(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Zt(t)}static emptyPath(){return new Zt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(bt.fromString(e))}static fromName(e){return new we(bt.fromString(e).popFirst(5))}static empty(){return new we(bt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&bt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return bt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new bt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=-1;function PD(i,e){const t=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,a=lt.fromTimestamp(r===1e9?new Ht(t+1,0):new Ht(t,r));return new cs(a,we.empty(),e)}function LD(i){return new cs(i.readTime,i.key,wu)}class cs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new cs(lt.min(),we.empty(),wu)}static max(){return new cs(lt.max(),we.empty(),wu)}}function VD(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=we.comparator(i.documentKey,e.documentKey),t!==0?t:ze(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(i){if(i.code!==ne.FAILED_PRECONDITION||i.message!==UD)throw i;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((r,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(r,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,r)=>{t(e)})}static reject(e){return new Z((t,r)=>{r(e)})}static waitFor(e){return new Z((t,r)=>{let a=0,l=0,h=!1;e.forEach(p=>{++a,p.next(()=>{++l,h&&l===a&&t()},m=>r(m))}),h=!0,l===a&&t()})}static or(e){let t=Z.resolve(!1);for(const r of e)t=t.next(a=>a?Z.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,l)=>{r.push(t.call(this,a,l))}),this.waitFor(r)}static mapArray(e,t){return new Z((r,a)=>{const l=e.length,h=new Array(l);let p=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next(E=>{h[g]=E,++p,p===l&&r(h)},E=>a(E))}})}static doWhile(e,t){return new Z((r,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):r()};l()})}}function BD(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Hu(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}wg.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=-1;function Cg(i){return i==null}function Zh(i){return i===0&&1/i==-1/0}function HD(i){return typeof i=="number"&&Number.isInteger(i)&&!Zh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="";function jD(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=AT(e)),e=FD(i.get(t),e);return AT(e)}function FD(i,e){let t=e;const r=i.length;for(let a=0;a<r;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case aA:t+="";break;default:t+=l}}return t}function AT(i){return i+aA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Bo(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function oA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai=class Nm{constructor(e,t){this.comparator=e,this.root=t||as.EMPTY}insert(e,t){return new Nm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,as.BLACK,null,null))}remove(e){return new Nm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,as.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ah(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ah(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ah(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ah(this.root,e,this.comparator,!0)}},Ah=class{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?r(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},as=class rr{constructor(e,t,r,a,l){this.key=e,this.value=t,this.color=r??rr.RED,this.left=a??rr.EMPTY,this.right=l??rr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,l){return new rr(e??this.key,t??this.value,r??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const l=r(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,r),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return rr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return rr.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}};as.EMPTY=null,as.RED=!0,as.BLACK=!1;as.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,t,r,a,l){return this}insert(e,t,r){return new as(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.comparator=e,this.data=new ai(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wT(this.data.getIterator())}getIteratorFrom(e){return new wT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Jt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Jt(this.comparator);return t.data=e,t}}class wT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.fields=e,e.sort(Zt.comparator)}static empty(){return new ni([])}unionWith(e){let t=new Jt(Zt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ni(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new qD("Invalid base64 string: "+l):l}}(e);return new Ni(t)}static fromUint8Array(e){const t=function(a){let l="";for(let h=0;h<a.length;++h)l+=String.fromCharCode(a[h]);return l}(e);return new Ni(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ni.EMPTY_BYTE_STRING=new Ni("");const GD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ha(i){if(mt(!!i,39018),typeof i=="string"){let e=0;const t=GD.exec(i);if(mt(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$t(i.seconds),nanos:$t(i.nanos)}}function $t(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Io(i){return typeof i=="string"?Ni.fromBase64String(i):Ni.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA="server_timestamp",uA="__type__",cA="__previous_value__",hA="__local_write_time__";function Ig(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[uA])===null||t===void 0?void 0:t.stringValue)===lA}function Ng(i){const e=i.mapValue.fields[cA];return Ig(e)?Ng(e):e}function Jh(i){const e=ha(i.mapValue.fields[hA].timestampValue);return new Ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,t,r,a,l,h,p,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g}}const ef="(default)";class tf{constructor(e,t){this.projectId=e,this.database=t||ef}static empty(){return new tf("","")}get isDefaultDatabase(){return this.database===ef}isEqual(e){return e instanceof tf&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="__type__",YD="__max__",bh={mapValue:{}},dA="__vector__",Om="value";function fa(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ig(i)?4:$D(i)?9007199254740991:QD(i)?10:11:Ie(28295,{value:i})}function Oi(i,e){if(i===e)return!0;const t=fa(i);if(t!==fa(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Jh(i).isEqual(Jh(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const h=ha(a.timestampValue),p=ha(l.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return Io(a.bytesValue).isEqual(Io(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return $t(a.geoPointValue.latitude)===$t(l.geoPointValue.latitude)&&$t(a.geoPointValue.longitude)===$t(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return $t(a.integerValue)===$t(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const h=$t(a.doubleValue),p=$t(l.doubleValue);return h===p?Zh(h)===Zh(p):isNaN(h)&&isNaN(p)}return!1}(i,e);case 9:return Co(i.arrayValue.values||[],e.arrayValue.values||[],Oi);case 10:case 11:return function(a,l){const h=a.mapValue.fields||{},p=l.mapValue.fields||{};if(bT(h)!==bT(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!Oi(h[m],p[m])))return!1;return!0}(i,e);default:return Ie(52216,{left:i})}}function Ru(i,e){return(i.values||[]).find(t=>Oi(t,e))!==void 0}function No(i,e){if(i===e)return 0;const t=fa(i),r=fa(e);if(t!==r)return ze(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ze(i.booleanValue,e.booleanValue);case 2:return function(l,h){const p=$t(l.integerValue||l.doubleValue),m=$t(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(i,e);case 3:return RT(i.timestampValue,e.timestampValue);case 4:return RT(Jh(i),Jh(e));case 5:return Im(i.stringValue,e.stringValue);case 6:return function(l,h){const p=Io(l),m=Io(h);return p.compareTo(m)}(i.bytesValue,e.bytesValue);case 7:return function(l,h){const p=l.split("/"),m=h.split("/");for(let g=0;g<p.length&&g<m.length;g++){const E=ze(p[g],m[g]);if(E!==0)return E}return ze(p.length,m.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,h){const p=ze($t(l.latitude),$t(h.latitude));return p!==0?p:ze($t(l.longitude),$t(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return CT(i.arrayValue,e.arrayValue);case 10:return function(l,h){var p,m,g,E;const T=l.fields||{},b=h.fields||{},L=(p=T[Om])===null||p===void 0?void 0:p.arrayValue,N=(m=b[Om])===null||m===void 0?void 0:m.arrayValue,G=ze(((g=L==null?void 0:L.values)===null||g===void 0?void 0:g.length)||0,((E=N==null?void 0:N.values)===null||E===void 0?void 0:E.length)||0);return G!==0?G:CT(L,N)}(i.mapValue,e.mapValue);case 11:return function(l,h){if(l===bh.mapValue&&h===bh.mapValue)return 0;if(l===bh.mapValue)return 1;if(h===bh.mapValue)return-1;const p=l.fields||{},m=Object.keys(p),g=h.fields||{},E=Object.keys(g);m.sort(),E.sort();for(let T=0;T<m.length&&T<E.length;++T){const b=Im(m[T],E[T]);if(b!==0)return b;const L=No(p[m[T]],g[E[T]]);if(L!==0)return L}return ze(m.length,E.length)}(i.mapValue,e.mapValue);default:throw Ie(23264,{Pe:t})}}function RT(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ze(i,e);const t=ha(i),r=ha(e),a=ze(t.seconds,r.seconds);return a!==0?a:ze(t.nanos,r.nanos)}function CT(i,e){const t=i.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const l=No(t[a],r[a]);if(l)return l}return ze(t.length,r.length)}function Oo(i){return Dm(i)}function Dm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const r=ha(t);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Io(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return we.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let r="[",a=!0;for(const l of t.values||[])a?a=!1:r+=",",r+=Dm(l);return r+"]"}(i.arrayValue):"mapValue"in i?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const h of r)l?l=!1:a+=",",a+=`${h}:${Dm(t.fields[h])}`;return a+"}"}(i.mapValue):Ie(61005,{value:i})}function Lh(i){switch(fa(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ng(i);return e?16+Lh(e):16;case 5:return 2*i.stringValue.length;case 6:return Io(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,l)=>a+Lh(l),0)}(i.arrayValue);case 10:case 11:return function(r){let a=0;return Bo(r.fields,(l,h)=>{a+=l.length+Lh(h)}),a}(i.mapValue);default:throw Ie(13486,{value:i})}}function Mm(i){return!!i&&"integerValue"in i}function Og(i){return!!i&&"arrayValue"in i}function Vh(i){return!!i&&"mapValue"in i}function QD(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[fA])===null||t===void 0?void 0:t.stringValue)===dA}function fu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Bo(i.mapValue.fields,(t,r)=>e.mapValue.fields[t]=fu(r)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function $D(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===YD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.value=e}static empty(){return new Jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Vh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fu(t)}setAll(e){let t=Zt.emptyPath(),r={},a=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,r,a),r={},a=[],t=p.popLast()}h?r[p.lastSegment()]=fu(h):a.push(p.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,r,a)}delete(e){const t=this.field(e.popLast());Vh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Oi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Vh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){Bo(t,(a,l)=>e[a]=l);for(const a of r)delete e[a]}clone(){return new Jn(fu(this.value))}}function pA(i){const e=[];return Bo(i.fields,(t,r)=>{const a=new Zt([t]);if(Vh(r)){const l=pA(r.mapValue).fields;if(l.length===0)e.push(a);else for(const h of l)e.push(a.child(h))}else e.push(a)}),new ni(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,r,a,l,h,p){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=l,this.data=h,this.documentState=p}static newInvalidDocument(e){return new Zn(e,0,lt.min(),lt.min(),lt.min(),Jn.empty(),0)}static newFoundDocument(e,t,r,a){return new Zn(e,1,t,lt.min(),r,a,0)}static newNoDocument(e,t){return new Zn(e,2,t,lt.min(),lt.min(),Jn.empty(),0)}static newUnknownDocument(e,t){return new Zn(e,3,t,lt.min(),lt.min(),Jn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(lt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=lt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t){this.position=e,this.inclusive=t}}function IT(i,e,t){let r=0;for(let a=0;a<i.position.length;a++){const l=e[a],h=i.position[a];if(l.field.isKeyField()?r=we.comparator(we.fromName(h.referenceValue),t.key):r=No(h,t.data.field(l.field)),l.dir==="desc"&&(r*=-1),r!==0)break}return r}function NT(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Oi(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t="asc"){this.field=e,this.dir=t}}function XD(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{}class Bt extends mA{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ZD(e,t,r):t==="array-contains"?new t2(e,r):t==="in"?new n2(e,r):t==="not-in"?new i2(e,r):t==="array-contains-any"?new r2(e,r):new Bt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new JD(e,r):new e2(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(No(t,this.value)):t!==null&&fa(this.value)===fa(t)&&this.matchesComparison(No(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hs extends mA{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new hs(e,t)}matches(e){return gA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function gA(i){return i.op==="and"}function _A(i){return WD(i)&&gA(i)}function WD(i){for(const e of i.filters)if(e instanceof hs)return!1;return!0}function xm(i){if(i instanceof Bt)return i.field.canonicalString()+i.op.toString()+Oo(i.value);if(_A(i))return i.filters.map(e=>xm(e)).join(",");{const e=i.filters.map(t=>xm(t)).join(",");return`${i.op}(${e})`}}function yA(i,e){return i instanceof Bt?function(r,a){return a instanceof Bt&&r.op===a.op&&r.field.isEqual(a.field)&&Oi(r.value,a.value)}(i,e):i instanceof hs?function(r,a){return a instanceof hs&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((l,h,p)=>l&&yA(h,a.filters[p]),!0):!1}(i,e):void Ie(19439)}function vA(i){return i instanceof Bt?function(t){return`${t.field.canonicalString()} ${t.op} ${Oo(t.value)}`}(i):i instanceof hs?function(t){return t.op.toString()+" {"+t.getFilters().map(vA).join(" ,")+"}"}(i):"Filter"}class ZD extends Bt{constructor(e,t,r){super(e,t,r),this.key=we.fromName(r.referenceValue)}matches(e){const t=we.comparator(e.key,this.key);return this.matchesComparison(t)}}class JD extends Bt{constructor(e,t){super(e,"in",t),this.keys=EA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class e2 extends Bt{constructor(e,t){super(e,"not-in",t),this.keys=EA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function EA(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>we.fromName(r.referenceValue))}class t2 extends Bt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Og(t)&&Ru(t.arrayValue,this.value)}}class n2 extends Bt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ru(this.value.arrayValue,t)}}class i2 extends Bt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ru(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ru(this.value.arrayValue,t)}}class r2 extends Bt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Og(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ru(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,t=null,r=[],a=[],l=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=l,this.startAt=h,this.endAt=p,this.Ie=null}}function OT(i,e=null,t=[],r=[],a=null,l=null,h=null){return new s2(i,e,t,r,a,l,h)}function Dg(i){const e=nt(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>xm(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(l){return l.field.canonicalString()+l.dir}(r)).join(","),Cg(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Oo(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Oo(r)).join(",")),e.Ie=t}return e.Ie}function Mg(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!XD(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!yA(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!NT(i.startAt,e.startAt)&&NT(i.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,t=null,r=[],a=[],l=null,h="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=l,this.limitType=h,this.startAt=p,this.endAt=m,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function a2(i,e,t,r,a,l,h,p){return new Df(i,e,t,r,a,l,h,p)}function o2(i){return new Df(i)}function DT(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function l2(i){return i.collectionGroup!==null}function du(i){const e=nt(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Jt(Zt.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new rf(l,r))}),t.has(Zt.keyField().canonicalString())||e.Ee.push(new rf(Zt.keyField(),r))}return e.Ee}function sa(i){const e=nt(i);return e.de||(e.de=u2(e,du(i))),e.de}function u2(i,e){if(i.limitType==="F")return OT(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new rf(a.field,l)});const t=i.endAt?new nf(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new nf(i.startAt.position,i.startAt.inclusive):null;return OT(i.path,i.collectionGroup,e,i.filters,i.limit,t,r)}}function km(i,e,t){return new Df(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function TA(i,e){return Mg(sa(i),sa(e))&&i.limitType===e.limitType}function SA(i){return`${Dg(sa(i))}|lt:${i.limitType}`}function nu(i){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>vA(a)).join(", ")}]`),Cg(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>Oo(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>Oo(a)).join(",")),`Target(${r})`}(sa(i))}; limitType=${i.limitType})`}function xg(i,e){return e.isFoundDocument()&&function(r,a){const l=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(l):we.isDocumentKey(r.path)?r.path.isEqual(l):r.path.isImmediateParentOf(l)}(i,e)&&function(r,a){for(const l of du(r))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(r,a){for(const l of r.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(r,a){return!(r.startAt&&!function(h,p,m){const g=IT(h,p,m);return h.inclusive?g<=0:g<0}(r.startAt,du(r),a)||r.endAt&&!function(h,p,m){const g=IT(h,p,m);return h.inclusive?g>=0:g>0}(r.endAt,du(r),a))}(i,e)}function c2(i){return(e,t)=>{let r=!1;for(const a of du(i)){const l=h2(a,e,t);if(l!==0)return l;r=r||a.field.isKeyField()}return 0}}function h2(i,e,t){const r=i.field.isKeyField()?we.comparator(e.key,t.key):function(l,h,p){const m=h.data.field(l),g=p.data.field(l);return m!==null&&g!==null?No(m,g):Ie(42886)}(i.field,e,t);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return Ie(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,l]of r)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Bo(this.inner,(t,r)=>{for(const[a,l]of r)e(a,l)})}isEmpty(){return oA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=new ai(we.comparator);function sf(){return f2}const AA=new ai(we.comparator);function wh(...i){let e=AA;for(const t of i)e=e.insert(t.key,t);return e}function bA(i){let e=AA;return i.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ta(){return pu()}function wA(){return pu()}function pu(){return new ya(i=>i.toString(),(i,e)=>i.isEqual(e))}const d2=new ai(we.comparator),p2=new Jt(we.comparator);function an(...i){let e=p2;for(const t of i)e=e.add(t);return e}const m2=new Jt(ze);function g2(){return m2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zh(e)?"-0":e}}function RA(i){return{integerValue:""+i}}function _2(i,e){return HD(e)?RA(e):kg(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this._=void 0}}function y2(i,e,t){return i instanceof af?function(a,l){const h={fields:{[uA]:{stringValue:lA},[hA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Ig(l)&&(l=Ng(l)),l&&(h.fields[cA]=l),{mapValue:h}}(t,e):i instanceof Cu?IA(i,e):i instanceof Iu?NA(i,e):function(a,l){const h=CA(a,l),p=MT(h)+MT(a.Re);return Mm(h)&&Mm(a.Re)?RA(p):kg(a.serializer,p)}(i,e)}function v2(i,e,t){return i instanceof Cu?IA(i,e):i instanceof Iu?NA(i,e):t}function CA(i,e){return i instanceof of?function(r){return Mm(r)||function(l){return!!l&&"doubleValue"in l}(r)}(e)?e:{integerValue:0}:null}class af extends Mf{}class Cu extends Mf{constructor(e){super(),this.elements=e}}function IA(i,e){const t=OA(e);for(const r of i.elements)t.some(a=>Oi(a,r))||t.push(r);return{arrayValue:{values:t}}}class Iu extends Mf{constructor(e){super(),this.elements=e}}function NA(i,e){let t=OA(e);for(const r of i.elements)t=t.filter(a=>!Oi(a,r));return{arrayValue:{values:t}}}class of extends Mf{constructor(e,t){super(),this.serializer=e,this.Re=t}}function MT(i){return $t(i.integerValue||i.doubleValue)}function OA(i){return Og(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function E2(i,e){return i.field.isEqual(e.field)&&function(r,a){return r instanceof Cu&&a instanceof Cu||r instanceof Iu&&a instanceof Iu?Co(r.elements,a.elements,Oi):r instanceof of&&a instanceof of?Oi(r.Re,a.Re):r instanceof af&&a instanceof af}(i.transform,e.transform)}class T2{constructor(e,t){this.version=e,this.transformResults=t}}class hr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hr}static exists(e){return new hr(void 0,e)}static updateTime(e){return new hr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class xf{}function DA(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new xA(i.key,hr.none()):new ju(i.key,i.data,hr.none());{const t=i.data,r=Jn.empty();let a=new Jt(Zt.comparator);for(let l of e.fields)if(!a.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?r.delete(l):r.set(l,h),a=a.add(l)}return new va(i.key,r,new ni(a.toArray()),hr.none())}}function S2(i,e,t){i instanceof ju?function(a,l,h){const p=a.value.clone(),m=kT(a.fieldTransforms,l,h.transformResults);p.setAll(m),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(i,e,t):i instanceof va?function(a,l,h){if(!Uh(a.precondition,l))return void l.convertToUnknownDocument(h.version);const p=kT(a.fieldTransforms,l,h.transformResults),m=l.data;m.setAll(MA(a)),m.setAll(p),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):function(a,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function mu(i,e,t,r){return i instanceof ju?function(l,h,p,m){if(!Uh(l.precondition,h))return p;const g=l.value.clone(),E=PT(l.fieldTransforms,m,h);return g.setAll(E),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(i,e,t,r):i instanceof va?function(l,h,p,m){if(!Uh(l.precondition,h))return p;const g=PT(l.fieldTransforms,m,h),E=h.data;return E.setAll(MA(l)),E.setAll(g),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(i,e,t,r):function(l,h,p){return Uh(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(i,e,t)}function A2(i,e){let t=null;for(const r of i.fieldTransforms){const a=e.data.field(r.field),l=CA(r.transform,a||null);l!=null&&(t===null&&(t=Jn.empty()),t.set(r.field,l))}return t||null}function xT(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&Co(r,a,(l,h)=>E2(l,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ju extends xf{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class va extends xf{constructor(e,t,r,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function MA(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=i.data.field(t);e.set(t,r)}}),e}function kT(i,e,t){const r=new Map;mt(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let a=0;a<t.length;a++){const l=i[a],h=l.transform,p=e.data.field(l.field);r.set(l.field,v2(h,p,t[a]))}return r}function PT(i,e,t){const r=new Map;for(const a of i){const l=a.transform,h=t.data.field(a.field);r.set(a.field,y2(l,h,e))}return r}class xA extends xf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class b2 extends xf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&S2(l,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=mu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=mu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=wA();return this.mutations.forEach(a=>{const l=e.get(a.key),h=l.overlayedDocument;let p=this.applyToLocalView(h,l.mutatedFields);p=t.has(a.key)?null:p;const m=DA(h,p);m!==null&&r.set(a.key,m),h.isValidDocument()||h.convertToNoDocument(lt.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),an())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,(t,r)=>xT(t,r))&&Co(this.baseMutations,e.baseMutations,(t,r)=>xT(t,r))}}class Pg{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){mt(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let a=function(){return d2}();const l=e.mutations;for(let h=0;h<l.length;h++)a=a.insert(l[h].key,r[h].version);return new Pg(e,t,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At,Ve;function C2(i){switch(i){case ne.OK:return Ie(64938);case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Ie(15467,{code:i})}}function I2(i){if(i===void 0)return ca("GRPC error has no .code"),ne.UNKNOWN;switch(i){case At.OK:return ne.OK;case At.CANCELLED:return ne.CANCELLED;case At.UNKNOWN:return ne.UNKNOWN;case At.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case At.INTERNAL:return ne.INTERNAL;case At.UNAVAILABLE:return ne.UNAVAILABLE;case At.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case At.NOT_FOUND:return ne.NOT_FOUND;case At.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case At.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case At.ABORTED:return ne.ABORTED;case At.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case At.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case At.DATA_LOSS:return ne.DATA_LOSS;default:return Ie(39323,{code:i})}}(Ve=At||(At={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Sg([4294967295,4294967295],0);class N2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pm(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function O2(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function D2(i,e){return Pm(i,e.toTimestamp())}function Ao(i){return mt(!!i,49232),lt.fromTimestamp(function(t){const r=ha(t);return new Ht(r.seconds,r.nanos)}(i))}function kA(i,e){return Lm(i,e).canonicalString()}function Lm(i,e){const t=function(a){return new bt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function M2(i){const e=bt.fromString(i);return mt(B2(e),10190,{key:e.toString()}),e}function Vm(i,e){return kA(i.databaseId,e.path)}function x2(i){const e=M2(i);return e.length===4?bt.emptyPath():P2(e)}function k2(i){return new bt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function P2(i){return mt(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function LT(i,e,t){return{name:Vm(i,e),fields:t.value.mapValue.fields}}function L2(i,e){let t;if(e instanceof ju)t={update:LT(i,e.key,e.value)};else if(e instanceof xA)t={delete:Vm(i,e.key)};else if(e instanceof va)t={update:LT(i,e.key,e.data),updateMask:z2(e.fieldMask)};else{if(!(e instanceof b2))return Ie(16599,{ft:e.type});t={verify:Vm(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(l,h){const p=h.transform;if(p instanceof af)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Cu)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Iu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof of)return{fieldPath:h.field.canonicalString(),increment:p.Re};throw Ie(20930,{transform:h.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:D2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ie(27497)}(i,e.precondition)),t}function V2(i,e){return i&&i.length>0?(mt(e!==void 0,14353),i.map(t=>function(a,l){let h=a.updateTime?Ao(a.updateTime):Ao(l);return h.isEqual(lt.min())&&(h=Ao(l)),new T2(h,a.transformResults||[])}(t,e))):[]}function U2(i){let e=x2(i.parent);const t=i.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){mt(r===1,65062);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const b=PA(T);return b instanceof hs&&_A(b)?b.getFilters():[b]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(b=>function(N){return new rf(yo(N.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(b))}(t.orderBy));let p=null;t.limit&&(p=function(T){let b;return b=typeof T=="object"?T.value:T,Cg(b)?null:b}(t.limit));let m=null;t.startAt&&(m=function(T){const b=!!T.before,L=T.values||[];return new nf(L,b)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const b=!T.before,L=T.values||[];return new nf(L,b)}(t.endAt)),a2(e,a,h,l,p,"F",m,g)}function PA(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=yo(t.unaryFilter.field);return Bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=yo(t.unaryFilter.field);return Bt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=yo(t.unaryFilter.field);return Bt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=yo(t.unaryFilter.field);return Bt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}}(i):i.fieldFilter!==void 0?function(t){return Bt.create(yo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return hs.create(t.compositeFilter.filters.map(r=>PA(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}}(t.compositeFilter.op))}(i):Ie(30097,{filter:i})}function yo(i){return Zt.fromServerFormat(i.fieldPath)}function z2(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function B2(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.wt=e}}function j2(i){const e=U2({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?km(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(){this.yn=new q2}addToCollectionParentIndex(e,t){return this.yn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(cs.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(cs.min())}updateCollectionGroup(e,t,r){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class q2{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new Jt(bt.comparator),l=!a.has(r);return this.index[t]=a.add(r),l}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new Jt(bt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},LA=41943040;class _n{static withCacheSize(e){return new _n(e,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(LA,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Do(0)}static ir(){return new Do(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="LruGarbageCollector",G2=1048576;function zT([i,e],[t,r]){const a=ze(i,t);return a===0?ze(e,r):a}class K2{constructor(e){this.cr=e,this.buffer=new Jt(zT),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();zT(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Y2{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){ce(UT,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Hu(t)?ce(UT,"Ignoring IndexedDB error during garbage collection: ",t):await bg(t)}await this.Ir(3e5)})}}class Q2{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(wg.le);const r=new K2(t);return this.Er.forEachTarget(e,a=>r.Pr(a.sequenceNumber)).next(()=>this.Er.Ar(e,a=>r.Pr(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Er.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(VT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),VT):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let r,a,l,h,p,m,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,h=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(r=T,p=Date.now(),this.removeTargets(e,r,t))).next(T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(g=Date.now(),_o()<=De.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${a} in `+(p-h)+`ms
	Removed ${l} targets in `+(m-p)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-E}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function $2(i,e){return new Q2(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(){this.changes=new ya(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Zn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&mu(r.mutation,a,ni.empty(),Ht.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,an()).next(()=>r))}getLocalViewOfDocuments(e,t,r=an()){const a=ta();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(l=>{let h=wh();return l.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const r=ta();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,an()))}populateOverlays(e,t,r){const a=[];return r.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,r,a){let l=sf();const h=pu(),p=function(){return pu()}();return t.forEach((m,g)=>{const E=r.get(g.key);a.has(g.key)&&(E===void 0||E.mutation instanceof va)?l=l.insert(g.key,g):E!==void 0?(h.set(g.key,E.mutation.getFieldMask()),mu(E.mutation,g,E.mutation.getFieldMask(),Ht.now())):h.set(g.key,ni.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((g,E)=>h.set(g,E)),t.forEach((g,E)=>{var T;return p.set(g,new W2(E,(T=h.get(g))!==null&&T!==void 0?T:null))}),p))}recalculateAndSaveOverlays(e,t){const r=pu();let a=new ai((h,p)=>h-p),l=an();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let E=r.get(m)||ni.empty();E=p.applyToLocalView(g,E),r.set(m,E);const T=(a.get(p.batchId)||an()).add(m);a=a.insert(p.batchId,T)})}).next(()=>{const h=[],p=a.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,E=m.value,T=wA();E.forEach(b=>{if(!l.has(b)){const L=DA(t.get(b),r.get(b));L!==null&&T.set(b,L),l=l.add(b)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,T))}return Z.waitFor(h)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(h){return we.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):l2(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(l=>{const h=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-l.size):Z.resolve(ta());let p=wu,m=l;return h.next(g=>Z.forEach(g,(E,T)=>(p<T.largestBatchId&&(p=T.largestBatchId),l.get(E)?Z.resolve():this.remoteDocumentCache.getEntry(e,E).next(b=>{m=m.insert(E,b)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,m,g,an())).next(E=>({batchId:p,changes:bA(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new we(t)).next(r=>{let a=wh();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const l=t.collectionGroup;let h=wh();return this.indexManager.getCollectionParents(e,l).next(p=>Z.forEach(p,m=>{const g=function(T,b){return new Df(b,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,r,a).next(E=>{E.forEach((T,b)=>{h=h.insert(T,b)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,r,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,l,a))).next(h=>{l.forEach((m,g)=>{const E=g.getKey();h.get(E)===null&&(h=h.insert(E,Zn.newInvalidDocument(E)))});let p=wh();return h.forEach((m,g)=>{const E=l.get(m);E!==void 0&&mu(E.mutation,g,ni.empty(),Ht.now()),xg(t,g)&&(p=p.insert(m,g))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Ao(a.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(a){return{name:a.name,query:j2(a.bundledQuery),readTime:Ao(a.readTime)}}(t)),Z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(){this.overlays=new ai(we.comparator),this.Or=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ta();return Z.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&r.set(a,l)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,l)=>{this.St(e,t,l)}),Z.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Or.get(r);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Or.delete(r)),Z.resolve()}getOverlaysForCollection(e,t,r){const a=ta(),l=t.length+1,h=new we(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>r&&a.set(m.getKey(),m)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let l=new ai((g,E)=>g-E);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let E=l.get(g.largestBatchId);E===null&&(E=ta(),l=l.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const p=ta(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,E)=>p.set(g,E)),!(p.size()>=a)););return Z.resolve(p)}St(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const h=this.Or.get(a.largestBatchId).delete(r.key);this.Or.set(a.largestBatchId,h)}this.overlays=this.overlays.insert(r.key,new R2(t,r));let l=this.Or.get(t);l===void 0&&(l=an(),this.Or.set(t,l)),this.Or.set(t,l.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(){this.sessionToken=Ni.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(){this.Nr=new Jt(Ut.Br),this.Lr=new Jt(Ut.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const r=new Ut(e,t);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Qr(new Ut(e,t))}$r(e,t){e.forEach(r=>this.removeReference(r,t))}Ur(e){const t=new we(new bt([])),r=new Ut(t,e),a=new Ut(t,e+1),l=[];return this.Lr.forEachInRange([r,a],h=>{this.Qr(h),l.push(h.key)}),l}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new we(new bt([])),r=new Ut(t,e),a=new Ut(t,e+1);let l=an();return this.Lr.forEachInRange([r,a],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new Ut(e,0),r=this.Nr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ut{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return we.comparator(e.key,t.key)||ze(e.Gr,t.Gr)}static kr(e,t){return ze(e.Gr,t.Gr)||we.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new Jt(Ut.Br)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const l=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new w2(l,t,r,a);this.mutationQueue.push(h);for(const p of a)this.zr=this.zr.add(new Ut(p.key,l)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return Z.resolve(h)}lookupMutationBatch(e,t){return Z.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Hr(r),l=a<0?0:a;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?Rg:this.Jn-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ut(t,0),a=new Ut(t,Number.POSITIVE_INFINITY),l=[];return this.zr.forEachInRange([r,a],h=>{const p=this.jr(h.Gr);l.push(p)}),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Jt(ze);return t.forEach(a=>{const l=new Ut(a,0),h=new Ut(a,Number.POSITIVE_INFINITY);this.zr.forEachInRange([l,h],p=>{r=r.add(p.Gr)})}),Z.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let l=r;we.isDocumentKey(l)||(l=l.child(""));const h=new Ut(new we(l),0);let p=new Jt(ze);return this.zr.forEachWhile(m=>{const g=m.key.path;return!!r.isPrefixOf(g)&&(g.length===a&&(p=p.add(m.Gr)),!0)},h),Z.resolve(this.Jr(p))}Jr(e){const t=[];return e.forEach(r=>{const a=this.jr(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){mt(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return Z.forEach(t.mutations,a=>{const l=new Ut(a.key,t.batchId);return r=r.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,t){const r=new Ut(t,0),a=this.zr.firstAfterOrEqual(r);return Z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.Zr=e,this.docs=function(){return new ai(we.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),l=a?a.size:0,h=this.Zr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Z.resolve(r?r.document.mutableCopy():Zn.newInvalidDocument(t))}getEntries(e,t){let r=sf();return t.forEach(a=>{const l=this.docs.get(a);r=r.insert(a,l?l.document.mutableCopy():Zn.newInvalidDocument(a))}),Z.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let l=sf();const h=t.path,p=new we(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:E}}=m.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||VD(LD(E),r)<=0||(a.has(E.key)||xg(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,r,a){Ie(9500)}Xr(e,t){return Z.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new rM(this)}getSize(e){return Z.resolve(this.size)}}class rM extends X2{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.vr.addEntry(e,a)):this.vr.removeEntry(r)}),Z.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e){this.persistence=e,this.ei=new ya(t=>Dg(t),Mg),this.lastRemoteSnapshotVersion=lt.min(),this.highestTargetId=0,this.ti=0,this.ni=new Lg,this.targetCount=0,this.ri=Do.rr()}forEachTarget(e,t){return this.ei.forEach((r,a)=>t(a)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ti&&(this.ti=t),Z.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new Do(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.ar(t),Z.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,r){let a=0;const l=[];return this.ei.forEach((h,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.ei.delete(h),l.push(this.removeMatchingKeysForTargetId(e,p.targetId)),a++)}),Z.waitFor(l).next(()=>a)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const r=this.ei.get(t)||null;return Z.resolve(r)}addMatchingKeys(e,t,r){return this.ni.qr(t,r),Z.resolve()}removeMatchingKeys(e,t,r){this.ni.$r(t,r);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(h=>{l.push(a.markPotentiallyOrphaned(e,h))}),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ni.Wr(t);return Z.resolve(r)}containsKey(e,t){return Z.resolve(this.ni.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,t){this.ii={},this.overlays={},this.si=new wg(0),this.oi=!1,this.oi=!0,this._i=new tM,this.referenceDelegate=e(this),this.ai=new sM(this),this.indexManager=new F2,this.remoteDocumentCache=function(a){return new iM(a)}(r=>this.referenceDelegate.ui(r)),this.serializer=new H2(t),this.ci=new J2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ii[e.toKey()];return r||(r=new nM(t,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,r){ce("MemoryPersistence","Starting transaction:",e);const a=new aM(this.si.next());return this.referenceDelegate.li(),r(a).next(l=>this.referenceDelegate.hi(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Pi(e,t){return Z.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,t)))}}class aM extends zD{constructor(e){super(),this.currentSequenceNumber=e}}class Vg{constructor(e){this.persistence=e,this.Ti=new Lg,this.Ii=null}static Ei(e){return new Vg(e)}get di(){if(this.Ii)return this.Ii;throw Ie(60996)}addReference(e,t,r){return this.Ti.addReference(r,t),this.di.delete(r.toString()),Z.resolve()}removeReference(e,t,r){return this.Ti.removeReference(r,t),this.di.add(r.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(a=>this.di.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.di.add(l.toString()))}).next(()=>r.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.di,r=>{const a=we.fromPath(r);return this.Ai(e,a).next(l=>{l||t.removeEntry(a,lt.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return Z.or([()=>Z.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class lf{constructor(e,t){this.persistence=e,this.Ri=new ya(r=>jD(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=$2(this,t)}static Ei(e,t){return new lf(e,t)}li(){}hi(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}Vr(e){let t=0;return this.Ar(e,r=>{t++}).next(()=>t)}Ar(e,t){return Z.forEach(this.Ri,(r,a)=>this.gr(e,r,a).next(l=>l?Z.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.Xr(e,h=>this.gr(e,h,t).next(p=>{p||(r++,l.removeEntry(h,lt.min()))})).next(()=>l.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),Z.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Lh(e.data.value)),t}gr(e,t,r){return Z.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.Ri.get(t);return Z.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.ls=r,this.hs=a}static Ps(e,t){let r=an(),a=an();for(const l of t.docChanges)switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Ug(e,t.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return UI()?8:BD(un())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,r,a){const l={result:null};return this.Rs(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.Vs(e,t,a,r).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new oM;return this.fs(e,t,h).next(p=>{if(l.result=p,this.Is)return this.gs(e,t,h,p.size)})}).next(()=>l.result)}gs(e,t,r,a){return r.documentReadCount<this.Es?(_o()<=De.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",nu(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),Z.resolve()):(_o()<=De.DEBUG&&ce("QueryEngine","Query:",nu(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ds*a?(_o()<=De.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",nu(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sa(t))):Z.resolve())}Rs(e,t){if(DT(t))return Z.resolve(null);let r=sa(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=km(t,null,"F"),r=sa(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(l=>{const h=an(...l);return this.As.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,r).next(m=>{const g=this.ps(t,p);return this.ys(t,g,h,m.readTime)?this.Rs(e,km(t,null,"F")):this.ws(e,g,t,m)}))})))}Vs(e,t,r,a){return DT(t)||a.isEqual(lt.min())?Z.resolve(null):this.As.getDocuments(e,r).next(l=>{const h=this.ps(t,l);return this.ys(t,h,r,a)?Z.resolve(null):(_o()<=De.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),nu(t)),this.ws(e,h,t,PD(a,wu)).next(p=>p))})}ps(e,t){let r=new Jt(c2(e));return t.forEach((a,l)=>{xg(e,l)&&(r=r.add(l))}),r}ys(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}fs(e,t,r){return _o()<=De.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",nu(t)),this.As.getDocumentsMatchingQuery(e,t,cs.min(),r)}ws(e,t,r,a){return this.As.getDocumentsMatchingQuery(e,r,a).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM="LocalStore";class cM{constructor(e,t,r,a){this.persistence=e,this.bs=t,this.serializer=a,this.Ss=new ai(ze),this.Ds=new ya(l=>Dg(l),Mg),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z2(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function hM(i,e,t,r){return new cM(i,e,t,r)}async function UA(i,e){const t=nt(i);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(l=>(a=l,t.Fs(e),t.mutationQueue.getAllMutationBatches(r))).next(l=>{const h=[],p=[];let m=an();for(const g of a){h.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}for(const g of l){p.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}return t.localDocuments.getDocuments(r,m).next(g=>({Ms:g,removedBatchIds:h,addedBatchIds:p}))})})}function fM(i,e){const t=nt(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),l=t.Cs.newChangeBuffer({trackRemovals:!0});return function(p,m,g,E){const T=g.batch,b=T.keys();let L=Z.resolve();return b.forEach(N=>{L=L.next(()=>E.getEntry(m,N)).next(G=>{const q=g.docVersions.get(N);mt(q!==null,48541),G.version.compareTo(q)<0&&(T.applyToRemoteDocument(G,g),G.isValidDocument()&&(G.setReadTime(g.commitVersion),E.addEntry(G)))})}),L.next(()=>p.mutationQueue.removeMutationBatch(m,T))}(t,r,e,l).next(()=>l.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(p){let m=an();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function dM(i){const e=nt(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function pM(i,e){const t=nt(i);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Rg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class BT{constructor(){this.activeTargetIds=g2()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mM{constructor(){this.So=new BT,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,r){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new BT,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="ConnectivityMonitor";class jT{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){ce(HT,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){ce(HT,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rh=null;function Um(){return Rh===null?Rh=function(){return 268435456+Math.round(2147483648*Math.random())}():Rh++,"0x"+Rh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="RestConnection",_M={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yM{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${r}/databases/${a}`,this.qo=this.databaseId.database===ef?`project_id=${r}`:`project_id=${r}&database_id=${a}`}Qo(e,t,r,a,l){const h=Um(),p=this.$o(e,t.toUriEncodedString());ce(am,`Sending RPC '${e}' ${h}:`,p,r);const m={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(m,a,l),this.Ko(e,p,m,r).then(g=>(ce(am,`Received RPC '${e}' ${h}: `,g),g),g=>{throw Of(am,`RPC '${e}' ${h} failed with error: `,g,"url: ",p,"request:",r),g})}Wo(e,t,r,a,l,h){return this.Qo(e,t,r,a,l)}Uo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),r&&r.headers.forEach((a,l)=>e[l]=a)}$o(e,t){const r=_M[e];return`${this.Lo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="WebChannelConnection";class EM extends yM{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,r,a){const l=Um();return new Promise((h,p)=>{const m=new ZS;m.setWithCredentials(!0),m.listenOnce(JS.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Ph.NO_ERROR:const E=m.getResponseJson();ce(rn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case Ph.TIMEOUT:ce(rn,`RPC '${e}' ${l} timed out`),p(new Te(ne.DEADLINE_EXCEEDED,"Request time out"));break;case Ph.HTTP_ERROR:const T=m.getStatus();if(ce(rn,`RPC '${e}' ${l} failed with status:`,T,"response text:",m.getResponseText()),T>0){let b=m.getResponseJson();Array.isArray(b)&&(b=b[0]);const L=b==null?void 0:b.error;if(L&&L.status&&L.message){const N=function(q){const X=q.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(X)>=0?X:ne.UNKNOWN}(L.status);p(new Te(N,L.message))}else p(new Te(ne.UNKNOWN,"Server responded with status "+m.getStatus()))}else p(new Te(ne.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{s_:e,streamId:l,o_:m.getLastErrorCode(),__:m.getLastError()})}}finally{ce(rn,`RPC '${e}' ${l} completed.`)}});const g=JSON.stringify(a);ce(rn,`RPC '${e}' ${l} sending request:`,a),m.send(t,"POST",g,r,15)})}a_(e,t,r){const a=Um(),l=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=nA(),p=tA(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Uo(m.initMessageHeaders,t,r),m.encodeInitMessageHeaders=!0;const E=l.join("");ce(rn,`Creating RPC '${e}' stream ${a}: ${E}`,m);const T=h.createWebChannel(E,m);let b=!1,L=!1;const N=new vM({Go:q=>{L?ce(rn,`Not sending because RPC '${e}' stream ${a} is closed:`,q):(b||(ce(rn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),b=!0),ce(rn,`RPC '${e}' stream ${a} sending:`,q),T.send(q))},zo:()=>T.close()}),G=(q,X,se)=>{q.listen(X,te=>{try{se(te)}catch(de){setTimeout(()=>{throw de},0)}})};return G(T,cu.EventType.OPEN,()=>{L||(ce(rn,`RPC '${e}' stream ${a} transport opened.`),N.t_())}),G(T,cu.EventType.CLOSE,()=>{L||(L=!0,ce(rn,`RPC '${e}' stream ${a} transport closed`),N.r_())}),G(T,cu.EventType.ERROR,q=>{L||(L=!0,Of(rn,`RPC '${e}' stream ${a} transport errored. Name:`,q.name,"Message:",q.message),N.r_(new Te(ne.UNAVAILABLE,"The operation could not be completed")))}),G(T,cu.EventType.MESSAGE,q=>{var X;if(!L){const se=q.data[0];mt(!!se,16349);const te=se,de=(te==null?void 0:te.error)||((X=te[0])===null||X===void 0?void 0:X.error);if(de){ce(rn,`RPC '${e}' stream ${a} received error:`,de);const he=de.status;let Ae=function(R){const D=At[R];if(D!==void 0)return I2(D)}(he),x=de.message;Ae===void 0&&(Ae=ne.INTERNAL,x="Unknown error status: "+he+" with message "+de.message),L=!0,N.r_(new Te(Ae,x)),T.close()}else ce(rn,`RPC '${e}' stream ${a} received:`,se),N.i_(se)}}),G(p,eA.STAT_EVENT,q=>{q.stat===Cm.PROXY?ce(rn,`RPC '${e}' stream ${a} detected buffering proxy`):q.stat===Cm.NOPROXY&&ce(rn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{N.n_()},0),N}}function om(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(i){return new N2(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,t,r=1e3,a=1.5,l=6e4){this.bi=e,this.timerId=t,this.u_=r,this.c_=a,this.l_=l,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),a=Math.max(0,t-r);a>0&&ce("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,a,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="PersistentStream";class TM{constructor(e,t,r,a,l,h,p,m){this.bi=e,this.R_=r,this.V_=a,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new zA(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(ca(t.toString()),ca("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.m_===t&&this.B_(r,a)},r=>{e(()=>{const a=new Te(ne.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(a)})})}B_(e,t){const r=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(a=>{r(()=>this.L_(a))}),this.stream.onMessage(a=>{r(()=>++this.p_==1?this.q_(a):this.onNext(a))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return ce(FT,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(ce(FT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SM extends TM{constructor(e,t,r,a,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,h),this.serializer=l}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return mt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,mt(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){mt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=V2(e.writeResults,e.commitTime),r=Ao(e.commitTime);return this.listener.j_(r,t)}H_(){const e={};e.database=k2(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>L2(this.serializer,r))};this.F_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{}class bM extends AM{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.J_=!1}Y_(){if(this.J_)throw new Te(ne.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,r,a){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Qo(e,Lm(t,r),a,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Te(ne.UNKNOWN,l.toString())})}Wo(e,t,r,a,l){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Wo(e,Lm(t,r),a,h,p,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new Te(ne.UNKNOWN,h.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class wM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(ca(t),this.ea=!1):ce("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="RemoteStore";class RM{constructor(e,t,r,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=l,this.ca.vo(h=>{r.enqueueAndForget(async()=>{Gu(this)&&(ce(Fu,"Restarting streams for network reachability change."),await async function(m){const g=nt(m);g.aa.add(4),await qu(g),g.la.set("Unknown"),g.aa.delete(4),await Pf(g)}(this))})}),this.la=new wM(r,a)}}async function Pf(i){if(Gu(i))for(const e of i.ua)await e(!0)}async function qu(i){for(const e of i.ua)await e(!1)}function Gu(i){return nt(i).aa.size===0}async function BA(i,e,t){if(!Hu(e))throw e;i.aa.add(1),await qu(i),i.la.set("Offline"),t||(t=()=>dM(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ce(Fu,"Retrying IndexedDB access"),await t(),i.aa.delete(1),await Pf(i)})}function HA(i,e){return e().catch(t=>BA(i,t,e))}async function Lf(i){const e=nt(i),t=fs(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:Rg;for(;CM(e);)try{const a=await pM(e.localStore,r);if(a===null){e.oa.length===0&&t.v_();break}r=a.batchId,IM(e,a)}catch(a){await BA(e,a)}jA(e)&&FA(e)}function CM(i){return Gu(i)&&i.oa.length<10}function IM(i,e){i.oa.push(e);const t=fs(i);t.b_()&&t.W_&&t.G_(e.mutations)}function jA(i){return Gu(i)&&!fs(i).w_()&&i.oa.length>0}function FA(i){fs(i).start()}async function NM(i){fs(i).H_()}async function OM(i){const e=fs(i);for(const t of i.oa)e.G_(t.mutations)}async function DM(i,e,t){const r=i.oa.shift(),a=Pg.from(r,e,t);await HA(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await Lf(i)}async function MM(i,e){e&&fs(i).W_&&await async function(r,a){if(function(h){return C2(h)&&h!==ne.ABORTED}(a.code)){const l=r.oa.shift();fs(r).D_(),await HA(r,()=>r.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Lf(r)}}(i,e),jA(i)&&FA(i)}async function qT(i,e){const t=nt(i);t.asyncQueue.verifyOperationInProgress(),ce(Fu,"RemoteStore received new credentials");const r=Gu(t);t.aa.add(3),await qu(t),r&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await Pf(t)}async function xM(i,e){const t=nt(i);e?(t.aa.delete(2),await Pf(t)):e||(t.aa.add(2),await qu(t),t.la.set("Unknown"))}function fs(i){return i.Ta||(i.Ta=function(t,r,a){const l=nt(t);return l.Y_(),new SM(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{jo:()=>Promise.resolve(),Jo:NM.bind(null,i),Zo:MM.bind(null,i),z_:OM.bind(null,i),j_:DM.bind(null,i)}),i.ua.push(async e=>{e?(i.Ta.D_(),await Lf(i)):(await i.Ta.stop(),i.oa.length>0&&(ce(Fu,`Stopping write stream with ${i.oa.length} pending writes`),i.oa=[]))})),i.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t,r,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=l,this.deferred=new ra,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,l){const h=Date.now()+r,p=new zg(e,t,h,a,l);return p.start(r),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Te(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qA(i,e){if(ca("AsyncQueue",`${e}: ${i}`),Hu(i))return new Te(ne.UNAVAILABLE,`${e}: ${i}`);throw i}class kM{constructor(){this.queries=GT(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,r){const a=nt(t),l=a.queries;a.queries=GT(),l.forEach((h,p)=>{for(const m of p.Ra)m.onError(r)})})(this,new Te(ne.ABORTED,"Firestore shutting down"))}}function GT(){return new ya(i=>SA(i),TA)}function PM(i){i.fa.forEach(e=>{e.next()})}var KT,YT;(YT=KT||(KT={})).ya="default",YT.Cache="cache";const LM="SyncEngine";class VM{constructor(e,t,r,a,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.nu={},this.ru=new ya(p=>SA(p),TA),this.iu=new Map,this.su=new Set,this.ou=new ai(we.comparator),this._u=new Map,this.au=new Lg,this.uu={},this.cu=new Map,this.lu=Do.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function UM(i,e,t){const r=jM(i);try{const a=await function(h,p){const m=nt(h),g=Ht.now(),E=p.reduce((L,N)=>L.add(N.key),an());let T,b;return m.persistence.runTransaction("Locally write mutations","readwrite",L=>{let N=sf(),G=an();return m.Cs.getEntries(L,E).next(q=>{N=q,N.forEach((X,se)=>{se.isValidDocument()||(G=G.add(X))})}).next(()=>m.localDocuments.getOverlayedDocuments(L,N)).next(q=>{T=q;const X=[];for(const se of p){const te=A2(se,T.get(se.key).overlayedDocument);te!=null&&X.push(new va(se.key,te,pA(te.value.mapValue),hr.exists(!0)))}return m.mutationQueue.addMutationBatch(L,g,X,p)}).next(q=>{b=q;const X=q.applyToLocalDocumentSet(T,G);return m.documentOverlayCache.saveOverlays(L,q.batchId,X)})}).then(()=>({batchId:b.batchId,changes:bA(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(h,p,m){let g=h.uu[h.currentUser.toKey()];g||(g=new ai(ze)),g=g.insert(p,m),h.uu[h.currentUser.toKey()]=g}(r,a.batchId,t),await Vf(r,a.changes),await Lf(r.remoteStore)}catch(a){const l=qA(a,"Failed to persist write");t.reject(l)}}function QT(i,e,t){const r=nt(i);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ru.forEach((l,h)=>{const p=h.view.ga(e);p.snapshot&&a.push(p.snapshot)}),function(h,p){const m=nt(h);m.onlineState=p;let g=!1;m.queries.forEach((E,T)=>{for(const b of T.Ra)b.ga(p)&&(g=!0)}),g&&PM(m)}(r.eventManager,e),a.length&&r.nu.Q_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zM(i,e){const t=nt(i),r=e.batch.batchId;try{const a=await fM(t.localStore,e);KA(t,r,null),GA(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vf(t,a)}catch(a){await bg(a)}}async function BM(i,e,t){const r=nt(i);try{const a=await function(h,p){const m=nt(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return m.mutationQueue.lookupMutationBatch(g,p).next(T=>(mt(T!==null,37113),E=T.keys(),m.mutationQueue.removeMutationBatch(g,T))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,E,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>m.localDocuments.getDocuments(g,E))})}(r.localStore,e);KA(r,e,t),GA(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vf(r,a)}catch(a){await bg(a)}}function GA(i,e){(i.cu.get(e)||[]).forEach(t=>{t.resolve()}),i.cu.delete(e)}function KA(i,e,t){const r=nt(i);let a=r.uu[r.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),r.uu[r.currentUser.toKey()]=a}}async function Vf(i,e,t){const r=nt(i),a=[],l=[],h=[];r.ru.isEmpty()||(r.ru.forEach((p,m)=>{h.push(r.Pu(m,e,t).then(g=>{var E;if((g||t)&&r.isPrimaryClient){const T=g?!g.fromCache:(E=void 0)===null||E===void 0?void 0:E.current;r.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){a.push(g);const T=Ug.Ps(m.targetId,g);l.push(T)}}))}),await Promise.all(h),r.nu.Q_(a),await async function(m,g){const E=nt(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>Z.forEach(g,b=>Z.forEach(b.ls,L=>E.persistence.referenceDelegate.addReference(T,b.targetId,L)).next(()=>Z.forEach(b.hs,L=>E.persistence.referenceDelegate.removeReference(T,b.targetId,L)))))}catch(T){if(!Hu(T))throw T;ce(uM,"Failed to update sequence numbers: "+T)}for(const T of g){const b=T.targetId;if(!T.fromCache){const L=E.Ss.get(b),N=L.snapshotVersion,G=L.withLastLimboFreeSnapshotVersion(N);E.Ss=E.Ss.insert(b,G)}}}(r.localStore,l))}async function HM(i,e){const t=nt(i);if(!t.currentUser.isEqual(e)){ce(LM,"User change. New user:",e.toKey());const r=await UA(t.localStore,e);t.currentUser=e,function(l,h){l.cu.forEach(p=>{p.forEach(m=>{m.reject(new Te(ne.CANCELLED,h))})}),l.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vf(t,r.Ms)}}function jM(i){const e=nt(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BM.bind(null,e),e}class uf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kf(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return hM(this.persistence,new lM,e.initialUser,this.serializer)}Ru(e){return new VA(Vg.Ei,this.serializer)}Au(e){return new mM}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uf.provider={build:()=>new uf};class FM extends uf{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){mt(this.persistence.referenceDelegate instanceof lf,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Y2(r,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new VA(r=>lf.Ei(r,t),this.serializer)}}class zm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>QT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HM.bind(null,this.syncEngine),await xM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kM}()}createDatastore(e){const t=kf(e.databaseInfo.databaseId),r=function(l){return new EM(l)}(e.databaseInfo);return function(l,h,p,m){return new bM(l,h,p,m)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,l,h,p){return new RM(r,a,l,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>QT(this.syncEngine,t,0),function(){return jT.C()?new jT:new gM}())}createSyncEngine(e,t){return function(a,l,h,p,m,g,E){const T=new VM(a,l,h,p,m,g);return E&&(T.hu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=nt(a);ce(Fu,"RemoteStore shutting down."),l.aa.add(5),await qu(l),l.ca.shutdown(),l.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}zm.provider={build:()=>new zm};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="FirestoreClient";class qM{constructor(e,t,r,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=sn.UNAUTHENTICATED,this.clientId=sA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(r,async h=>{ce(ds,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(r,h=>(ce(ds,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ra;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qA(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lm(i,e){i.asyncQueue.verifyOperationInProgress(),ce(ds,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let r=t.initialUser;i.setCredentialChangeListener(async a=>{r.isEqual(a)||(await UA(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function $T(i,e){i.asyncQueue.verifyOperationInProgress();const t=await GM(i);ce(ds,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(r=>qT(e.remoteStore,r)),i.setAppCheckTokenChangeListener((r,a)=>qT(e.remoteStore,a)),i._onlineComponents=e}async function GM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ce(ds,"Using user provided OfflineComponentProvider");try{await lm(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ne.FAILED_PRECONDITION||a.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Of("Error using user provided cache. Falling back to memory cache: "+t),await lm(i,new uf)}}else ce(ds,"Using default OfflineComponentProvider"),await lm(i,new FM(void 0));return i._offlineComponents}async function KM(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ce(ds,"Using user provided OnlineComponentProvider"),await $T(i,i._uninitializedComponentsProvider._online)):(ce(ds,"Using default OnlineComponentProvider"),await $T(i,new zm))),i._onlineComponents}function YM(i){return KM(i).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QM(i,e,t){if(!t)throw new Te(ne.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function $M(i,e,t,r){if(e===!0&&r===!0)throw new Te(ne.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function WT(i){if(!we.isDocumentKey(i))throw new Te(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Bg(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ie(12329,{type:typeof i})}function Bm(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Te(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bg(i);throw new Te(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="firestore.googleapis.com",ZT=!0;class JT{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Te(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=QA,this.ssl=ZT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ZT;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=LA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<G2)throw new Te(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$M("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Te(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Te(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Te(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hg{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new JT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Te(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Te(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new JT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wD;switch(r.type){case"firstParty":return new ND(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Te(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=XT.get(t);r&&(ce("ComponentProvider","Removing Datastore"),XT.delete(t),r.terminate())}(this),Promise.resolve()}}function XM(i,e,t,r={}){var a;const l=(i=Bm(i,Hg))._getSettings(),h=Object.assign(Object.assign({},l),{emulatorOptions:i._getEmulatorOptions()}),p=`${e}:${t}`;l.host!==QA&&l.host!==p&&Of("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},l),{host:p,ssl:!1,emulatorOptions:r});if(!ls(m,h)&&(i._setSettings(m),r.mockUserToken)){let g,E;if(typeof r.mockUserToken=="string")g=r.mockUserToken,E=sn.MOCK_USER;else{g=hS(r.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new Te(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new sn(T)}i._authCredentials=new RD(new rA(g,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jg(this.firestore,e,this._query)}}class fr{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fr(this.firestore,e,this._key)}}class Nu extends jg{constructor(e,t,r){super(e,t,o2(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fr(this.firestore,null,new we(e))}withConverter(e){return new Nu(this.firestore,e,this._path)}}function WM(i,e,...t){if(i=jt(i),arguments.length===1&&(e=sA.newId()),QM("doc","path",e),i instanceof Hg){const r=bt.fromString(e,...t);return WT(r),new fr(i,null,new we(r))}{if(!(i instanceof fr||i instanceof Nu))throw new Te(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(bt.fromString(e,...t));return WT(r),new fr(i.firestore,i instanceof Nu?i.converter:null,new we(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="AsyncQueue";class t0{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new zA(this,"async_queue_retry"),this.ju=()=>{const r=om();r&&ce(e0,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const t=om();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=om();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new ra;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Hu(e))throw e;ce(e0,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,ca("INTERNAL UNHANDLED ERROR: ",n0(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=t,t}enqueueAfterDelay(e,t,r){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const a=zg.createAndSchedule(this,e,t,r,l=>this.Xu(l));return this.Uu.push(a),a}Ju(){this.Ku&&Ie(47125,{ec:n0(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function n0(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class $A extends Hg{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new t0,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new t0(e),this._firestoreClient=void 0,await e}}}function XA(i,e){const t=typeof i=="object"?i:cg(),r=typeof i=="string"?i:ef,a=wf(t,"firestore").getImmediate({identifier:r});if(!a._initialized){const l=lS("firestore");l&&XM(a,...l)}return a}function ZM(i){if(i._terminated)throw new Te(ne.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||JM(i),i._firestoreClient}function JM(i){var e,t,r;const a=i._freezeSettings(),l=function(p,m,g,E){return new KD(p,m,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,YA(E.experimentalLongPollingOptions),E.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new qM(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ou(Ni.fromBase64String(e))}catch(t){throw new Te(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ou(Ni.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Te(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Te(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Te(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let l=0;l<r.length;++l)if(r[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=/^__.*__$/;class tx{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new va(e,this.data,this.fieldMask,t,this.fieldTransforms):new ju(e,this.data,t,this.fieldTransforms)}}function tb(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{oc:i})}}class Fg{constructor(e,t,r,a,l,h){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,l===void 0&&this._c(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Fg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ac({path:r,cc:!1});return a.lc(e),a}hc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ac({path:r,cc:!1});return a._c(),a}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return cf(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(tb(this.oc)&&ex.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class nx{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||kf(e)}dc(e,t,r,a=!1){return new Fg({oc:e,methodName:t,Ec:r,path:Zt.emptyPath(),cc:!1,Ic:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ix(i){const e=i._freezeSettings(),t=kf(i._databaseId);return new nx(i._databaseId,!!e.ignoreUndefinedProperties,t)}function rx(i,e,t,r,a,l={}){const h=i.dc(l.merge||l.mergeFields?2:0,e,t,a);sb("Data must be an object, but it was:",h,r);const p=ib(r,h);let m,g;if(l.merge)m=new ni(h.fieldMask),g=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const b=sx(e,T,t);if(!h.contains(b))throw new Te(ne.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);lx(E,b)||E.push(b)}m=new ni(E),g=h.fieldTransforms.filter(T=>m.covers(T.field))}else m=null,g=h.fieldTransforms;return new tx(new Jn(p),m,g)}function nb(i,e){if(rb(i=jt(i)))return sb("Unsupported field value:",e,i),ib(i,e);if(i instanceof ZA)return function(r,a){if(!tb(a.oc))throw a.Tc(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Tc(`${r._methodName}() is not currently supported inside arrays`);const l=r._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,a){const l=[];let h=0;for(const p of r){let m=nb(p,a.Pc(h));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),h++}return{arrayValue:{values:l}}}(i,e)}return function(r,a){if((r=jt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _2(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const l=Ht.fromDate(r);return{timestampValue:Pm(a.serializer,l)}}if(r instanceof Ht){const l=new Ht(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pm(a.serializer,l)}}if(r instanceof JA)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ou)return{bytesValue:O2(a.serializer,r._byteString)};if(r instanceof fr){const l=a.databaseId,h=r.firestore._databaseId;if(!h.isEqual(l))throw a.Tc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:kA(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof eb)return function(h,p){return{mapValue:{fields:{[fA]:{stringValue:dA},[Om]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.Tc("VectorValues must only contain numeric values.");return kg(p.serializer,g)})}}}}}}(r,a);throw a.Tc(`Unsupported field value: ${Bg(r)}`)}(i,e)}function ib(i,e){const t={};return oA(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bo(i,(r,a)=>{const l=nb(a,e.uc(r));l!=null&&(t[r]=l)}),{mapValue:{fields:t}}}function rb(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ht||i instanceof JA||i instanceof Ou||i instanceof fr||i instanceof ZA||i instanceof eb)}function sb(i,e,t){if(!rb(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Bg(t);throw r==="an object"?e.Tc(i+" a custom object"):e.Tc(i+" "+r)}}function sx(i,e,t){if((e=jt(e))instanceof WA)return e._internalPath;if(typeof e=="string")return ox(i,e);throw cf("Field path arguments must be of type string or ",i,!1,void 0,t)}const ax=new RegExp("[~\\*/\\[\\]]");function ox(i,e,t){if(e.search(ax)>=0)throw cf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new WA(...e.split("."))._internalPath}catch{throw cf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function cf(i,e,t,r,a){const l=r&&!r.isEmpty(),h=a!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(l||h)&&(m+=" (found",l&&(m+=` in field ${r}`),h&&(m+=` in document ${a}`),m+=")"),new Te(ne.INVALID_ARGUMENT,p+i+m)}function lx(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(i,e,t){let r;return r=i?i.toFirestore(e):e,r}function cx(i,e,t){i=Bm(i,fr);const r=Bm(i.firestore,$A),a=ux(i.converter,e);return hx(r,[rx(ix(r),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,hr.none())])}function hx(i,e){return function(r,a){const l=new ra;return r.asyncQueue.enqueueAndForget(async()=>UM(await YM(r),a,l)),l.promise}(ZM(i),e)}(function(e,t=!0){(function(a){zo=a})(_a),aa(new us("firestore",(r,{instanceIdentifier:a,options:l})=>{const h=r.getProvider("app").getImmediate(),p=new $A(new CD(r.getProvider("auth-internal")),new OD(h,r.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new Te(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tf(g.options.projectId,E)}(h,a),h);return l=Object.assign({useFetchStreams:t},l),p._setSettings(l),p},"PUBLIC").setMultipleInstances(!0)),Ri(gT,_T,e),Ri(gT,_T,"esm2017")})();const fx={apiKey:"AIzaSyDB-GLxCPzRxpi09hmlBQuGzGPsQ1ZddqI",authDomain:"fir-app-856fd.firebaseapp.com",projectId:"fir-app-856fd",storageBucket:"fir-app-856fd.firebasestorage.app",messagingSenderId:"63170366400",appId:"1:63170366400:web:54a853cf77bb0722ba9625",databaseURL:"https://fir-app-856fd-default-rtdb.firebaseio.com"},Ea=gS(fx);XA(Ea);const i0=Nf(Ea),Uf=()=>{const[i,e]=Q.useState(null),t=tg();Q.useEffect(()=>{const a=cO(i0,l=>{e(l)});return()=>a()},[]);const r=()=>{hO(i0).then(()=>{e(null),t("/login")}).catch(a=>{console.error("Logout error:",a)})};return J.jsx("nav",{className:"navbar navbar-expand-lg bg-body-tertiary",children:J.jsxs("div",{className:"container-fluid",children:[J.jsx("a",{className:"navbar-brand",href:"#",children:"Navbar"}),J.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:J.jsx("span",{className:"navbar-toggler-icon"})}),J.jsxs("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[J.jsxs("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[J.jsx("li",{className:"nav-item",children:J.jsx("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),J.jsx("li",{className:"nav-item",children:J.jsx("a",{className:"nav-link",href:"#",children:"About"})})]}),J.jsx("div",{className:"d-flex align-items-center gap-2",children:i?J.jsxs(J.Fragment,{children:[J.jsxs("span",{className:"me-2",children:["Hello, ",i.email]}),J.jsx("button",{onClick:r,className:"btn btn-outline-danger",children:"Logout"})]}):J.jsxs(J.Fragment,{children:[J.jsx("button",{onClick:()=>t("/login"),className:"btn btn-outline-primary",children:"Login"}),J.jsx("button",{onClick:()=>t("/register"),className:"btn btn-outline-secondary",children:"Register"})]})})]})]})})},r0=Nf(Ea),dx=new sr,px=()=>{const[i,e]=Q.useState(""),[t,r]=Q.useState(""),a=tg(),l=()=>{oO(r0,i,t).then(m=>{console.log("User logged in:",m.user),a("/")}).catch(m=>console.error("Login error:",m))},h=async()=>{try{const m=await DO(r0,dx);console.log("Google user:",m.user),a("/")}catch(m){console.error("Google sign-in error:",m)}},p=m=>{m.preventDefault(),l()};return J.jsxs(J.Fragment,{children:[J.jsx(Uf,{}),J.jsx("div",{children:J.jsx("div",{className:"container mt-5",children:J.jsx("div",{className:"row justify-content-center",children:J.jsx("div",{className:"col-md-6",children:J.jsx("div",{className:"card shadow",children:J.jsxs("div",{className:"card-body",children:[J.jsx("h3",{className:"card-title text-center mb-4",children:"Login"}),J.jsxs("form",{onSubmit:p,children:[J.jsxs("div",{className:"mb-3",children:[J.jsx("label",{className:"form-label",children:"Email"}),J.jsx("input",{type:"email",className:"form-control",value:i,onChange:m=>e(m.target.value),required:!0})]}),J.jsxs("div",{className:"mb-3",children:[J.jsx("label",{className:"form-label",children:"Password"}),J.jsx("input",{type:"password",className:"form-control",value:t,onChange:m=>r(m.target.value),required:!0})]}),J.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Login"})]}),J.jsxs("button",{className:"btn w-100 mt-2 d-flex align-items-center justify-content-center border",style:{backgroundColor:"#fff",color:"#757575"},onClick:h,children:[J.jsx("img",{src:"https://developers.google.com/identity/images/g-logo.png",alt:"Google logo",style:{width:20,height:20,marginRight:10}}),"Sign in with Google"]}),J.jsx("button",{className:"btn btn-success w-100 mt-2",onClick:()=>a("/forget-password"),children:"Forget Password"}),J.jsx("a",{onClick:()=>a("/register"),children:"Be a part!"})]})})})})})})]})};var s0={};const a0="@firebase/database",o0="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ab="";function mx(i){ab=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Wt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Tu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Tr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gx(e)}}catch{}return new _x},na=ob("localStorage"),yx=ob("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new bf("@firebase/database"),vx=function(){let i=1;return function(){return i++}}(),lb=function(i){const e=XI(i),t=new KI;t.update(e);const r=t.digest();return ag.encodeByteArray(r)},Ku=function(...i){let e="";for(let t=0;t<i.length;t++){const r=i[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ku.apply(null,r):typeof r=="object"?e+=Wt(r):e+=r,e+=" "}return e};let gu=null,l0=!0;const Ex=function(i,e){le(!0,"Can't turn on custom loggers persistently."),bo.logLevel=De.VERBOSE,gu=bo.log.bind(bo)},on=function(...i){if(l0===!0&&(l0=!1,gu===null&&yx.get("logging_enabled")===!0&&Ex()),gu){const e=Ku.apply(null,i);gu(e)}},Yu=function(i){return function(...e){on(i,...e)}},Hm=function(...i){const e="FIREBASE INTERNAL ERROR: "+Ku(...i);bo.error(e)},_r=function(...i){const e=`FIREBASE FATAL ERROR: ${Ku(...i)}`;throw bo.error(e),new Error(e)},En=function(...i){const e="FIREBASE WARNING: "+Ku(...i);bo.warn(e)},Tx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&En("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ub=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},Sx=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Mo="[MIN_NAME]",da="[MAX_NAME]",Ho=function(i,e){if(i===e)return 0;if(i===Mo||e===da)return-1;if(e===Mo||i===da)return 1;{const t=u0(i),r=u0(e);return t!==null?r!==null?t-r===0?i.length-e.length:t-r:-1:r!==null?1:i<e?-1:1}},Ax=function(i,e){return i===e?0:i<e?-1:1},iu=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Wt(e))},qg=function(i){if(typeof i!="object"||i===null)return Wt(i);const e=[];for(const r in i)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Wt(e[r]),t+=":",t+=qg(i[e[r]]);return t+="}",t},cb=function(i,e){const t=i.length;if(t<=e)return[i];const r=[];for(let a=0;a<t;a+=e)a+e>t?r.push(i.substring(a,t)):r.push(i.substring(a,a+e));return r};function Gn(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const hb=function(i){le(!ub(i),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let a,l,h,p,m;i===0?(l=0,h=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-r)?(p=Math.min(Math.floor(Math.log(i)/Math.LN2),r),l=p+r,h=Math.round(i*Math.pow(2,t-p)-Math.pow(2,t))):(l=0,h=Math.round(i/Math.pow(2,1-r-t))));const g=[];for(m=t;m;m-=1)g.push(h%2?1:0),h=Math.floor(h/2);for(m=e;m;m-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const E=g.join("");let T="";for(m=0;m<64;m+=8){let b=parseInt(E.substr(m,8),2).toString(16);b.length===1&&(b="0"+b),T=T+b}return T.toLowerCase()},bx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Rx=new RegExp("^-?(0*)\\d{1,10}$"),Cx=-2147483648,Ix=2147483647,u0=function(i){if(Rx.test(i)){const e=Number(i);if(e>=Cx&&e<=Ix)return e}return null},jo=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw En("Exception was thrown by user callback.",t),e},Math.floor(0))}},Nx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_u=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,yn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){En(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(on("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',En(e)}}class zh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="5",fb="v",db="s",pb="r",mb="f",gb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_b="ls",yb="p",jm="ac",vb="websocket",Eb="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,t,r,a,l=!1,h="",p=!1,m=!1,g=null){this.secure=t,this.namespace=r,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=h,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=na.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&na.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Mx(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Sb(i,e,t){le(typeof e=="string","typeof type must == string"),le(typeof t=="object","typeof params must == object");let r;if(e===vb)r=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Eb)r=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Mx(i)&&(t.ns=i.namespace);const a=[];return Gn(t,(l,h)=>{a.push(l+"="+h)}),r+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(){this.counters_={}}incrementCounter(e,t=1){Tr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return CI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={},cm={};function Kg(i){const e=i.toString();return um[e]||(um[e]=new xx),um[e]}function kx(i,e){const t=i.toString();return cm[t]||(cm[t]=e()),cm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<r.length;++a)r[a]&&jo(()=>{this.onMessage_(r[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="start",Lx="close",Vx="pLPCommand",Ux="pRTLPCB",Ab="id",bb="pw",wb="ser",zx="cb",Bx="seg",Hx="ts",jx="d",Fx="dframe",Rb=1870,Cb=30,qx=Rb-Cb,Gx=25e3,Kx=3e4;class vo{constructor(e,t,r,a,l,h,p){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=a,this.authToken=l,this.transportSessionId=h,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yu(e),this.stats_=Kg(t),this.urlFn=m=>(this.appCheckToken&&(m[jm]=this.appCheckToken),Sb(t,Eb,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Px(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kx)),Sx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yg((...l)=>{const[h,p,m,g,E]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===c0)this.id=p,this.password=m;else if(h===Lx)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...l)=>{const[h,p]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(h,p)},()=>{this.onClosed_()},this.urlFn);const r={};r[c0]="t",r[wb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[zx]=this.scriptTagHolder.uniqueCallbackIdentifier),r[fb]=Gg,this.transportSessionId&&(r[db]=this.transportSessionId),this.lastSessionId&&(r[_b]=this.lastSessionId),this.applicationId&&(r[yb]=this.applicationId),this.appCheckToken&&(r[jm]=this.appCheckToken),typeof location<"u"&&location.hostname&&gb.test(location.hostname)&&(r[pb]=mb);const a=this.urlFn(r);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vo.forceAllow_=!0}static forceDisallow(){vo.forceDisallow_=!0}static isAvailable(){return vo.forceAllow_?!0:!vo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bx()&&!wx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=sS(t),a=cb(r,qx);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[Fx]="t",r[Ab]=e,r[bb]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Wt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Yg{constructor(e,t,r,a){this.onDisconnect=r,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vx(),window[Vx+this.uniqueCallbackIdentifier]=e,window[Ux+this.uniqueCallbackIdentifier]=t,this.myIFrame=Yg.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(p){on("frame writing exception"),p.stack&&on(p.stack),on(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||on("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ab]=this.myID,e[bb]=this.myPW,e[wb]=this.currentSerial;let t=this.urlFn(e),r="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cb+r.length<=Rb;){const h=this.pendingSegs.shift();r=r+"&"+Bx+a+"="+h.seg+"&"+Hx+a+"="+h.ts+"&"+jx+a+"="+h.d,a++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(r,Math.floor(Gx)),l=()=>{clearTimeout(a),r()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const a=r.readyState;(!a||a==="loaded"||a==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{on("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=16384,Qx=45e3;let hf=null;typeof MozWebSocket<"u"?hf=MozWebSocket:typeof WebSocket<"u"&&(hf=WebSocket);class ei{constructor(e,t,r,a,l,h,p){this.connId=e,this.applicationId=r,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yu(this.connId),this.stats_=Kg(t),this.connURL=ei.connectionURL_(t,h,p,a,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,a,l){const h={};return h[fb]=Gg,typeof location<"u"&&location.hostname&&gb.test(location.hostname)&&(h[pb]=mb),t&&(h[db]=t),r&&(h[_b]=r),a&&(h[jm]=a),l&&(h[yb]=l),Sb(e,vb,h)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,na.set("previous_websocket_failure",!0);try{let r;VI(),this.mySock=new hf(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const a=r.message||r.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const a=r.message||r.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){ei.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&hf!==null&&!ei.forceDisallow_}static previouslyFailed(){return na.isInMemoryStorage||na.get("previous_websocket_failure")===!0}markConnectionHealthy(){na.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Tu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(le(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=cb(t,Yx);r.length>1&&this.sendString_(String(r.length));for(let a=0;a<r.length;a++)this.sendString_(r[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qx))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ei.responsesRequiredToBeHealthy=2;ei.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{static get ALL_TRANSPORTS(){return[vo,ei]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ei&&ei.isAvailable();let r=t&&!ei.previouslyFailed();if(e.webSocketOnly&&(t||En("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ei];else{const a=this.transports_=[];for(const l of Du.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Du.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Du.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=6e4,Xx=5e3,Wx=10*1024,Zx=100*1024,hm="t",h0="d",Jx="s",f0="r",ek="e",d0="o",p0="a",m0="n",g0="p",tk="h";class nk{constructor(e,t,r,a,l,h,p,m,g,E){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=h,this.onReady_=p,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yu("c:"+this.id+":"),this.transportManager_=new Du(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=_u(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Zx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Wx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hm in e){const t=e[hm];t===p0?this.upgradeIfSecondaryHealthy_():t===f0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===d0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=iu("t",e),r=iu("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:g0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:p0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:m0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=iu("t",e),r=iu("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=iu(hm,e);if(h0 in e){const r=e[h0];if(t===tk){const a=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===m0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Jx?this.onConnectionShutdown_(r):t===f0?this.onReset_(r):t===ek?Hm("Server Error: "+r):t===d0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Gg!==r&&En("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),_u(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($x))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_u(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Xx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:g0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(na.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{put(e,t,r,a){}merge(e,t,r,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.allowedEvents_=e,this.listeners_={},le(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let a=0;a<r.length;a++)r[a].callback.apply(r[a].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const a=this.getInitialEvent(e);a&&t.apply(r,a)}off(e,t,r){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!r||r===a[l].context)){a.splice(l,1);return}}validateEventType_(e){le(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff extends Nb{static getInstance(){return new ff}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!og()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return le(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=32,y0=768;class st{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[r]=this.pieces_[a],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ze(){return new st("")}function Me(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function ps(i){return i.pieces_.length-i.pieceNum_}function rt(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new st(i.pieces_,e)}function Ob(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function ik(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function Db(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function Mb(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new st(e,0)}function Ot(i,e){const t=[];for(let r=i.pieceNum_;r<i.pieces_.length;r++)t.push(i.pieces_[r]);if(e instanceof st)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let a=0;a<r.length;a++)r[a].length>0&&t.push(r[a])}return new st(t,0)}function xe(i){return i.pieceNum_>=i.pieces_.length}function Fn(i,e){const t=Me(i),r=Me(e);if(t===null)return e;if(t===r)return Fn(rt(i),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function xb(i,e){if(ps(i)!==ps(e))return!1;for(let t=i.pieceNum_,r=e.pieceNum_;t<=i.pieces_.length;t++,r++)if(i.pieces_[t]!==e.pieces_[r])return!1;return!0}function ii(i,e){let t=i.pieceNum_,r=e.pieceNum_;if(ps(i)>ps(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class rk{constructor(e,t){this.errorPrefix_=t,this.parts_=Db(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Af(this.parts_[r]);kb(this)}}function sk(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Af(e),kb(i)}function ak(i){const e=i.parts_.pop();i.byteLength_-=Af(e),i.parts_.length>0&&(i.byteLength_-=1)}function kb(i){if(i.byteLength_>y0)throw new Error(i.errorPrefix_+"has a key path longer than "+y0+" bytes ("+i.byteLength_+").");if(i.parts_.length>_0)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_0+") or object contains a cycle "+Js(i))}function Js(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg extends Nb{static getInstance(){return new Qg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return le(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=1e3,ok=60*5*1e3,v0=30*1e3,lk=1.3,uk=3e4,ck="server_kill",E0=3;class dr extends Ib{constructor(e,t,r,a,l,h,p,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=h,this.appCheckTokenProvider_=p,this.authOverride_=m,this.id=dr.nextPersistentConnectionId_++,this.log_=Yu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ru,this.maxReconnectDelay_=ok,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ff.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Wt(l)),le(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),r&&(this.requestCBHash_[a]=r)}get(e){this.initConnection_();const t=new Sf,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const p=h.d;h.s==="ok"?t.resolve(p):t.reject(p)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,r,a){this.initConnection_();const l=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+l),this.listens.has(h)||this.listens.set(h,new Map),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),le(!this.listens.get(h).has(l),"listen() called twice for same path/queryId.");const p={onComplete:a,hashFn:t,query:e,tag:r};this.listens.get(h).set(l,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+r+" for "+a);const l={p:r},h="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(h,l,p=>{const m=p.d,g=p.s;dr.warnOnListenWarnings_(m,t),(this.listens.get(r)&&this.listens.get(r).get(a))===e&&(this.log_("listen response",p),g!=="ok"&&this.removeListen_(r,a),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Tr(e,"w")){const r=Ro(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();En(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||GI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=v0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=qI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,a=>{const l=a.s,h=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+a),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,a)&&this.connected_&&this.sendUnlisten_(r,a,e._queryObject,t)}sendUnlisten_(e,t,r,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},h="n";a&&(l.q=r,l.t=a),this.sendRequest(h,l)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,a){const l={p:t,d:r};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,h=>{a&&setTimeout(()=>{a(h.s,h.d)},Math.floor(0))})}put(e,t,r,a){this.putInternal("p",e,t,r,a)}merge(e,t,r,a){this.putInternal("m",e,t,r,a)}putInternal(e,t,r,a,l){this.initConnection_();const h={p:t,d:r};l!==void 0&&(h.h=l),this.outstandingPuts_.push({action:e,request:h,onComplete:a}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const l=r.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Wt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Hm("Unrecognized action received from server: "+Wt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){le(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uk&&(this.reconnectDelay_=ru),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+dr.nextConnectionId_++,l=this.lastSessionId;let h=!1,p=null;const m=function(){p?p.close():(h=!0,r())},g=function(T){le(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(T)};this.realtime_={close:m,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,b]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);h?on("getToken() completed but was canceled"):(on("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=b&&b.token,p=new nk(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,L=>{En(L+" ("+this.repoInfo_.toString()+")"),this.interrupt(ck)},l))}catch(T){this.log_("Failed to get token: "+T),h||(this.repoInfo_.nodeAdmin&&En(T),m())}}}interrupt(e){on("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){on("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ym(this.interruptReasons_)&&(this.reconnectDelay_=ru,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(l=>qg(l)).join("$"):r="default";const a=this.removeListen_(e,r);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const r=new st(e).toString();let a;if(this.listens.has(r)){const l=this.listens.get(r);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(r)}else a=void 0;return a}onAuthRevoked_(e,t){on("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=E0&&(this.reconnectDelay_=v0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){on("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=E0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ab.replace(/\./g,"-")]=1,og()?e["framework.cordova"]=1:fS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ff.getInstance().currentlyOnline();return ym(this.interruptReasons_)&&e}}dr.nextPersistentConnectionId_=0;dr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ue(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Ue(Mo,e),a=new Ue(Mo,t);return this.compare(r,a)!==0}minPost(){return Ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ch;class Pb extends zf{static get __EMPTY_NODE(){return Ch}static set __EMPTY_NODE(e){Ch=e}compare(e,t){return Ho(e.name,t.name)}isDefinedOn(e){throw Lo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ue.MIN}maxPost(){return new Ue(da,Ch)}makePost(e,t){return le(typeof e=="string","KeyIndex indexValue must always be a string."),new Ue(e,Ch)}toString(){return".key"}}const wo=new Pb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t,r,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=t?r(e.key,t):1,a&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class zt{constructor(e,t,r,a,l){this.key=e,this.value=t,this.color=r??zt.RED,this.left=a??vn.EMPTY_NODE,this.right=l??vn.EMPTY_NODE}copy(e,t,r,a,l){return new zt(e??this.key,t??this.value,r??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const l=r(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,r),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return vn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,a;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return vn.EMPTY_NODE;a=r.right.min_(),r=r.copy(a.key,a.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}zt.RED=!0;zt.BLACK=!1;class hk{copy(e,t,r,a,l){return this}insert(e,t,r){return new zt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vn{constructor(e,t=vn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new vn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,zt.BLACK,null,null))}remove(e){return new vn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,zt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,a=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return a?a.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(a=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ih(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ih(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ih(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ih(this.root_,null,this.comparator_,!0,e)}}vn.EMPTY_NODE=new hk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(i,e){return Ho(i.name,e.name)}function $g(i,e){return Ho(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fm;function dk(i){Fm=i}const Lb=function(i){return typeof i=="number"?"number:"+hb(i):"string:"+i},Vb=function(i){if(i.isLeafNode()){const e=i.val();le(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tr(e,".sv"),"Priority must be a string or number.")}else le(i===Fm||i.isEmpty(),"priority of unexpected type.");le(i===Fm||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T0;class Vt{static set __childrenNodeConstructor(e){T0=e}static get __childrenNodeConstructor(){return T0}constructor(e,t=Vt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,le(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Vb(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Vt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Vt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return xe(e)?this:Me(e)===".priority"?this.priorityNode_:Vt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Vt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Me(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(le(r!==".priority"||ps(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Vt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lb(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=hb(this.value_):e+=this.value_,this.lazyHash_=lb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Vt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Vt.__childrenNodeConstructor?-1:(le(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,a=Vt.VALUE_TYPE_ORDER.indexOf(t),l=Vt.VALUE_TYPE_ORDER.indexOf(r);return le(a>=0,"Unknown leaf type: "+t),le(l>=0,"Unknown leaf type: "+r),a===l?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Vt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ub,zb;function pk(i){Ub=i}function mk(i){zb=i}class gk extends zf{compare(e,t){const r=e.node.getPriority(),a=t.node.getPriority(),l=r.compareTo(a);return l===0?Ho(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ue.MIN}maxPost(){return new Ue(da,new Vt("[PRIORITY-POST]",zb))}makePost(e,t){const r=Ub(e);return new Ue(t,new Vt("[PRIORITY-POST]",r))}toString(){return".priority"}}const ln=new gk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=Math.log(2);class yk{constructor(e){const t=l=>parseInt(Math.log(l)/_k,10),r=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=r(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const df=function(i,e,t,r){i.sort(e);const a=function(m,g){const E=g-m;let T,b;if(E===0)return null;if(E===1)return T=i[m],b=t?t(T):T,new zt(b,T.node,zt.BLACK,null,null);{const L=parseInt(E/2,10)+m,N=a(m,L),G=a(L+1,g);return T=i[L],b=t?t(T):T,new zt(b,T.node,zt.BLACK,N,G)}},l=function(m){let g=null,E=null,T=i.length;const b=function(N,G){const q=T-N,X=T;T-=N;const se=a(q+1,X),te=i[q],de=t?t(te):te;L(new zt(de,te.node,G,null,se))},L=function(N){g?(g.left=N,g=N):(E=N,g=N)};for(let N=0;N<m.count;++N){const G=m.nextBitIsOne(),q=Math.pow(2,m.count-(N+1));G?b(q,zt.BLACK):(b(q,zt.BLACK),b(q,zt.RED))}return E},h=new yk(i.length),p=l(h);return new vn(r||e,p)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fm;const go={};class lr{static get Default(){return le(go&&ln,"ChildrenNode.ts has not been loaded"),fm=fm||new lr({".priority":go},{".priority":ln}),fm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ro(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof vn?t:null}hasIndex(e){return Tr(this.indexSet_,e.toString())}addIndex(e,t){le(e!==wo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let a=!1;const l=t.getIterator(Ue.Wrap);let h=l.getNext();for(;h;)a=a||e.isDefinedOn(h.node),r.push(h),h=l.getNext();let p;a?p=df(r,e.getCompare()):p=go;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const E=Object.assign({},this.indexes_);return E[m]=p,new lr(E,g)}addToIndexes(e,t){const r=Fh(this.indexes_,(a,l)=>{const h=Ro(this.indexSet_,l);if(le(h,"Missing index implementation for "+l),a===go)if(h.isDefinedOn(e.node)){const p=[],m=t.getIterator(Ue.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&p.push(g),g=m.getNext();return p.push(e),df(p,h.getCompare())}else return go;else{const p=t.get(e.name);let m=a;return p&&(m=m.remove(new Ue(e.name,p))),m.insert(e,e.node)}});return new lr(r,this.indexSet_)}removeFromIndexes(e,t){const r=Fh(this.indexes_,a=>{if(a===go)return a;{const l=t.get(e.name);return l?a.remove(new Ue(e.name,l)):a}});return new lr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;class qe{static get EMPTY_NODE(){return su||(su=new qe(new vn($g),null,lr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Vb(this.priorityNode_),this.children_.isEmpty()&&le(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||su}updatePriority(e){return this.children_.isEmpty()?this:new qe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?su:t}}getChild(e){const t=Me(e);return t===null?this:this.getImmediateChild(t).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(le(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Ue(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(r,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(r,this.children_));const h=a.isEmpty()?su:this.priorityNode_;return new qe(a,h,l)}}updateChild(e,t){const r=Me(e);if(r===null)return t;{le(Me(e)!==".priority"||ps(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(r).updateChild(rt(e),t);return this.updateImmediateChild(r,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,a=0,l=!0;if(this.forEachChild(ln,(h,p)=>{t[h]=p.val(e),r++,l&&qe.INTEGER_REGEXP_.test(h)?a=Math.max(a,Number(h)):l=!1}),!e&&l&&a<2*r){const h=[];for(const p in t)h[p]=t[p];return h}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lb(this.getPriority().val())+":"),this.forEachChild(ln,(t,r)=>{const a=r.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":lb(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const a=this.resolveIndex_(r);if(a){const l=a.getPredecessorKey(new Ue(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ue(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ue(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Ue.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Ue.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qu?-1:0}withIndex(e){if(e===wo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new qe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===wo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ln),a=t.getIterator(ln);let l=r.getNext(),h=a.getNext();for(;l&&h;){if(l.name!==h.name||!l.node.equals(h.node))return!1;l=r.getNext(),h=a.getNext()}return l===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===wo?null:this.indexMap_.get(e.toString())}}qe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vk extends qe{constructor(){super(new vn($g),qe.EMPTY_NODE,lr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return qe.EMPTY_NODE}isEmpty(){return!1}}const Qu=new vk;Object.defineProperties(Ue,{MIN:{value:new Ue(Mo,qe.EMPTY_NODE)},MAX:{value:new Ue(da,Qu)}});Pb.__EMPTY_NODE=qe.EMPTY_NODE;Vt.__childrenNodeConstructor=qe;dk(Qu);mk(Qu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=!0;function Xt(i,e=null){if(i===null)return qe.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),le(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Vt(t,Xt(e))}if(!(i instanceof Array)&&Ek){const t=[];let r=!1;if(Gn(i,(h,p)=>{if(h.substring(0,1)!=="."){const m=Xt(p);m.isEmpty()||(r=r||!m.getPriority().isEmpty(),t.push(new Ue(h,m)))}}),t.length===0)return qe.EMPTY_NODE;const l=df(t,fk,h=>h.name,$g);if(r){const h=df(t,ln.getCompare());return new qe(l,Xt(e),new lr({".priority":h},{".priority":ln}))}else return new qe(l,Xt(e),lr.Default)}else{let t=qe.EMPTY_NODE;return Gn(i,(r,a)=>{if(Tr(i,r)&&r.substring(0,1)!=="."){const l=Xt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(r,l))}}),t.updatePriority(Xt(e))}}pk(Xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk extends zf{constructor(e){super(),this.indexPath_=e,le(!xe(e)&&Me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),a=this.extractChild(t.node),l=r.compareTo(a);return l===0?Ho(e.name,t.name):l}makePost(e,t){const r=Xt(e),a=qe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ue(t,a)}maxPost(){const e=qe.EMPTY_NODE.updateChild(this.indexPath_,Qu);return new Ue(da,e)}toString(){return Db(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk extends zf{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Ho(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ue.MIN}maxPost(){return Ue.MAX}makePost(e,t){const r=Xt(e);return new Ue(t,r)}toString(){return".value"}}const Ak=new Sk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(i){return{type:"value",snapshotNode:i}}function wk(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Rk(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function S0(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function Ck(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ln}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return le(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return le(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mo}hasEnd(){return this.endSet_}getIndexEndValue(){return le(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return le(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:da}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return le(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ln}copy(){const e=new Xg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function A0(i){const e={};if(i.isDefault())return e;let t;if(i.index_===ln?t="$priority":i.index_===Ak?t="$value":i.index_===wo?t="$key":(le(i.index_ instanceof Tk,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=Wt(t),i.startSet_){const r=i.startAfterSet_?"startAfter":"startAt";e[r]=Wt(i.indexStartValue_),i.startNameSet_&&(e[r]+=","+Wt(i.indexStartName_))}if(i.endSet_){const r=i.endBeforeSet_?"endBefore":"endAt";e[r]=Wt(i.indexEndValue_),i.endNameSet_&&(e[r]+=","+Wt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function b0(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==ln&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends Ib{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(le(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=a,this.log_=Yu("p:rest:"),this.listens_={}}listen(e,t,r,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const h=pf.getListenId_(e,r),p={};this.listens_[h]=p;const m=A0(e._queryParams);this.restRequest_(l+".json",m,(g,E)=>{let T=E;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,r),Ro(this.listens_,h)===p){let b;g?g===401?b="permission_denied":b="rest_error:"+g:b="ok",a(b,null)}})}unlisten(e,t){const r=pf.getListenId_(e,t);delete this.listens_[r]}get(e){const t=A0(e._queryParams),r=e._path.toString(),a=new Sf;return this.restRequest_(r+".json",t,(l,h)=>{let p=h;l===404&&(p=null,l=null),l===null?(this.onDataUpdate_(r,p,!1,null),a.resolve(p)):a.reject(new Error(p))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vo(t);this.log_("Sending REST request for "+h);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(r&&p.readyState===4){this.log_("REST Response for "+h+" received. status:",p.status,"response:",p.responseText);let m=null;if(p.status>=200&&p.status<300){try{m=Tu(p.responseText)}catch{En("Failed to parse JSON response for "+h+": "+p.responseText)}r(null,m)}else p.status!==401&&p.status!==404&&En("Got unsuccessful REST response for "+h+" Status: "+p.status),r(p.status);r=null}},p.open("GET",h,!0),p.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.rootNode_=qe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(){return{value:null,children:new Map}}function Bb(i,e,t){if(xe(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const r=Me(e);i.children.has(r)||i.children.set(r,mf());const a=i.children.get(r);e=rt(e),Bb(a,e,t)}}function qm(i,e,t){i.value!==null?t(e,i.value):Nk(i,(r,a)=>{const l=new st(e.toString()+"/"+r);qm(a,l,t)})}function Nk(i,e){i.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Gn(this.last_,(r,a)=>{t[r]=t[r]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=10*1e3,Dk=30*1e3,Mk=5*60*1e3;class xk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ok(e);const r=w0+(Dk-w0)*Math.random();_u(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Gn(e,(a,l)=>{l>0&&Tr(this.statsToReport_,a)&&(t[a]=l,r=!0)}),r&&this.server_.reportStats(t),_u(this.reportStats_.bind(this),Math.floor(Math.random()*2*Mk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wi;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wi||(wi={}));function Hb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fb(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=wi.ACK_USER_WRITE,this.source=Hb()}operationForChild(e){if(xe(this.path)){if(this.affectedTree.value!=null)return le(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new st(e));return new gf(Ze(),t,this.revert)}}else return le(Me(this.path)===e,"operationForChild called for unrelated child."),new gf(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=wi.OVERWRITE}operationForChild(e){return xe(this.path)?new pa(this.source,Ze(),this.snap.getImmediateChild(e)):new pa(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=wi.MERGE}operationForChild(e){if(xe(this.path)){const t=this.children.subtree(new st(e));return t.isEmpty()?null:t.value?new pa(this.source,Ze(),t.value):new Mu(this.source,Ze(),t)}else return le(Me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Mu(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(xe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Me(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function kk(i,e,t,r){const a=[],l=[];return e.forEach(h=>{h.type==="child_changed"&&i.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&l.push(Ck(h.childName,h.snapshotNode))}),au(i,a,"child_removed",e,r,t),au(i,a,"child_added",e,r,t),au(i,a,"child_moved",l,r,t),au(i,a,"child_changed",e,r,t),au(i,a,"value",e,r,t),a}function au(i,e,t,r,a,l){const h=r.filter(p=>p.type===t);h.sort((p,m)=>Lk(i,p,m)),h.forEach(p=>{const m=Pk(i,p,l);a.forEach(g=>{g.respondsTo(p.type)&&e.push(g.createEvent(m,i.query_))})})}function Pk(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function Lk(i,e,t){if(e.childName==null||t.childName==null)throw Lo("Should only compare child_ events.");const r=new Ue(e.childName,e.snapshotNode),a=new Ue(t.childName,t.snapshotNode);return i.index_.compare(r,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(i,e){return{eventCache:i,serverCache:e}}function yu(i,e,t,r){return qb(new Wg(e,t,r),i.serverCache)}function Gb(i,e,t,r){return qb(i.eventCache,new Wg(e,t,r))}function Gm(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function ma(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dm;const Vk=()=>(dm||(dm=new vn(Ax)),dm);class it{static fromObject(e){let t=new it(null);return Gn(e,(r,a)=>{t=t.set(new st(r),a)}),t}constructor(e,t=Vk()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ze(),value:this.value};if(xe(e))return null;{const r=Me(e),a=this.children.get(r);if(a!==null){const l=a.findRootMostMatchingPathAndValue(rt(e),t);return l!=null?{path:Ot(new st(r),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(xe(e))return this;{const t=Me(e),r=this.children.get(t);return r!==null?r.subtree(rt(e)):new it(null)}}set(e,t){if(xe(e))return new it(t,this.children);{const r=Me(e),l=(this.children.get(r)||new it(null)).set(rt(e),t),h=this.children.insert(r,l);return new it(this.value,h)}}remove(e){if(xe(e))return this.children.isEmpty()?new it(null):new it(null,this.children);{const t=Me(e),r=this.children.get(t);if(r){const a=r.remove(rt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new it(null):new it(this.value,l)}else return this}}get(e){if(xe(e))return this.value;{const t=Me(e),r=this.children.get(t);return r?r.get(rt(e)):null}}setTree(e,t){if(xe(e))return t;{const r=Me(e),l=(this.children.get(r)||new it(null)).setTree(rt(e),t);let h;return l.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,l),new it(this.value,h)}}fold(e){return this.fold_(Ze(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((a,l)=>{r[a]=l.fold_(Ot(e,a),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Ze(),t)}findOnPath_(e,t,r){const a=this.value?r(t,this.value):!1;if(a)return a;if(xe(e))return null;{const l=Me(e),h=this.children.get(l);return h?h.findOnPath_(rt(e),Ot(t,l),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ze(),t)}foreachOnPath_(e,t,r){if(xe(e))return this;{this.value&&r(t,this.value);const a=Me(e),l=this.children.get(a);return l?l.foreachOnPath_(rt(e),Ot(t,a),r):new it(null)}}foreach(e){this.foreach_(Ze(),e)}foreach_(e,t){this.children.inorderTraversal((r,a)=>{a.foreach_(Ot(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.writeTree_=e}static empty(){return new si(new it(null))}}function vu(i,e,t){if(xe(e))return new si(new it(t));{const r=i.writeTree_.findRootMostValueAndPath(e);if(r!=null){const a=r.path;let l=r.value;const h=Fn(a,e);return l=l.updateChild(h,t),new si(i.writeTree_.set(a,l))}else{const a=new it(t),l=i.writeTree_.setTree(e,a);return new si(l)}}}function R0(i,e,t){let r=i;return Gn(t,(a,l)=>{r=vu(r,Ot(e,a),l)}),r}function C0(i,e){if(xe(e))return si.empty();{const t=i.writeTree_.setTree(e,new it(null));return new si(t)}}function Km(i,e){return Ta(i,e)!=null}function Ta(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(Fn(t.path,e)):null}function I0(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ln,(r,a)=>{e.push(new Ue(r,a))}):i.writeTree_.children.inorderTraversal((r,a)=>{a.value!=null&&e.push(new Ue(r,a.value))}),e}function os(i,e){if(xe(e))return i;{const t=Ta(i,e);return t!=null?new si(new it(t)):new si(i.writeTree_.subtree(e))}}function Ym(i){return i.writeTree_.isEmpty()}function xo(i,e){return Kb(Ze(),i.writeTree_,e)}function Kb(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let r=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(le(l.value!==null,"Priority writes must always be leaf nodes"),r=l.value):t=Kb(Ot(i,a),l,t)}),!t.getChild(i).isEmpty()&&r!==null&&(t=t.updateChild(Ot(i,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(i,e){return Zb(e,i)}function Uk(i,e,t,r,a){le(r>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:r,visible:a}),a&&(i.visibleWrites=vu(i.visibleWrites,e,t)),i.lastWriteId=r}function zk(i,e){for(let t=0;t<i.allWrites.length;t++){const r=i.allWrites[t];if(r.writeId===e)return r}return null}function Bk(i,e){const t=i.allWrites.findIndex(p=>p.writeId===e);le(t>=0,"removeWrite called with nonexistent writeId.");const r=i.allWrites[t];i.allWrites.splice(t,1);let a=r.visible,l=!1,h=i.allWrites.length-1;for(;a&&h>=0;){const p=i.allWrites[h];p.visible&&(h>=t&&Hk(p,r.path)?a=!1:ii(r.path,p.path)&&(l=!0)),h--}if(a){if(l)return jk(i),!0;if(r.snap)i.visibleWrites=C0(i.visibleWrites,r.path);else{const p=r.children;Gn(p,m=>{i.visibleWrites=C0(i.visibleWrites,Ot(r.path,m))})}return!0}else return!1}function Hk(i,e){if(i.snap)return ii(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&ii(Ot(i.path,t),e))return!0;return!1}function jk(i){i.visibleWrites=Qb(i.allWrites,Fk,Ze()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function Fk(i){return i.visible}function Qb(i,e,t){let r=si.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const h=l.path;let p;if(l.snap)ii(t,h)?(p=Fn(t,h),r=vu(r,p,l.snap)):ii(h,t)&&(p=Fn(h,t),r=vu(r,Ze(),l.snap.getChild(p)));else if(l.children){if(ii(t,h))p=Fn(t,h),r=R0(r,p,l.children);else if(ii(h,t))if(p=Fn(h,t),xe(p))r=R0(r,Ze(),l.children);else{const m=Ro(l.children,Me(p));if(m){const g=m.getChild(rt(p));r=vu(r,Ze(),g)}}}else throw Lo("WriteRecord should have .snap or .children")}}return r}function $b(i,e,t,r,a){if(!r&&!a){const l=Ta(i.visibleWrites,e);if(l!=null)return l;{const h=os(i.visibleWrites,e);if(Ym(h))return t;if(t==null&&!Km(h,Ze()))return null;{const p=t||qe.EMPTY_NODE;return xo(h,p)}}}else{const l=os(i.visibleWrites,e);if(!a&&Ym(l))return t;if(!a&&t==null&&!Km(l,Ze()))return null;{const h=function(g){return(g.visible||a)&&(!r||!~r.indexOf(g.writeId))&&(ii(g.path,e)||ii(e,g.path))},p=Qb(i.allWrites,h,e),m=t||qe.EMPTY_NODE;return xo(p,m)}}}function qk(i,e,t){let r=qe.EMPTY_NODE;const a=Ta(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(ln,(l,h)=>{r=r.updateImmediateChild(l,h)}),r;if(t){const l=os(i.visibleWrites,e);return t.forEachChild(ln,(h,p)=>{const m=xo(os(l,new st(h)),p);r=r.updateImmediateChild(h,m)}),I0(l).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const l=os(i.visibleWrites,e);return I0(l).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function Gk(i,e,t,r,a){le(r||a,"Either existingEventSnap or existingServerSnap must exist");const l=Ot(e,t);if(Km(i.visibleWrites,l))return null;{const h=os(i.visibleWrites,l);return Ym(h)?a.getChild(t):xo(h,a.getChild(t))}}function Kk(i,e,t,r){const a=Ot(e,t),l=Ta(i.visibleWrites,a);if(l!=null)return l;if(r.isCompleteForChild(t)){const h=os(i.visibleWrites,a);return xo(h,r.getNode().getImmediateChild(t))}else return null}function Yk(i,e){return Ta(i.visibleWrites,e)}function Qk(i,e,t,r,a,l,h){let p;const m=os(i.visibleWrites,e),g=Ta(m,Ze());if(g!=null)p=g;else if(t!=null)p=xo(m,t);else return[];if(p=p.withIndex(h),!p.isEmpty()&&!p.isLeafNode()){const E=[],T=h.getCompare(),b=l?p.getReverseIteratorFrom(r,h):p.getIteratorFrom(r,h);let L=b.getNext();for(;L&&E.length<a;)T(L,r)!==0&&E.push(L),L=b.getNext();return E}else return[]}function $k(){return{visibleWrites:si.empty(),allWrites:[],lastWriteId:-1}}function Qm(i,e,t,r){return $b(i.writeTree,i.treePath,e,t,r)}function Xb(i,e){return qk(i.writeTree,i.treePath,e)}function N0(i,e,t,r){return Gk(i.writeTree,i.treePath,e,t,r)}function _f(i,e){return Yk(i.writeTree,Ot(i.treePath,e))}function Xk(i,e,t,r,a,l){return Qk(i.writeTree,i.treePath,e,t,r,a,l)}function Zg(i,e,t){return Kk(i.writeTree,i.treePath,e,t)}function Wb(i,e){return Zb(Ot(i.treePath,e),i.writeTree)}function Zb(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;le(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),le(r!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(r);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(r,S0(r,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(r,Rk(r,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(r,wk(r,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(r,S0(r,e.snapshotNode,a.oldSnap));else throw Lo("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const Jb=new Zk;class Jg{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Wg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zg(this.writes_,e,r)}}getChildAfterChild(e,t,r){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ma(this.viewCache_),l=Xk(this.writes_,a,t,1,r,e);return l.length===0?null:l[0]}}function Jk(i,e){le(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),le(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function eP(i,e,t,r,a){const l=new Wk;let h,p;if(t.type===wi.OVERWRITE){const g=t;g.source.fromUser?h=$m(i,e,g.path,g.snap,r,a,l):(le(g.source.fromServer,"Unknown source."),p=g.source.tagged||e.serverCache.isFiltered()&&!xe(g.path),h=yf(i,e,g.path,g.snap,r,a,p,l))}else if(t.type===wi.MERGE){const g=t;g.source.fromUser?h=nP(i,e,g.path,g.children,r,a,l):(le(g.source.fromServer,"Unknown source."),p=g.source.tagged||e.serverCache.isFiltered(),h=Xm(i,e,g.path,g.children,r,a,p,l))}else if(t.type===wi.ACK_USER_WRITE){const g=t;g.revert?h=sP(i,e,g.path,r,a,l):h=iP(i,e,g.path,g.affectedTree,r,a,l)}else if(t.type===wi.LISTEN_COMPLETE)h=rP(i,e,t.path,r,l);else throw Lo("Unknown operation type: "+t.type);const m=l.getChanges();return tP(e,h,m),{viewCache:h,changes:m}}function tP(i,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const a=r.getNode().isLeafNode()||r.getNode().isEmpty(),l=Gm(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!r.getNode().equals(l)||!r.getNode().getPriority().equals(l.getPriority()))&&t.push(bk(Gm(e)))}}function ew(i,e,t,r,a,l){const h=e.eventCache;if(_f(r,t)!=null)return e;{let p,m;if(xe(t))if(le(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=ma(e),E=g instanceof qe?g:qe.EMPTY_NODE,T=Xb(r,E);p=i.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=Qm(r,ma(e));p=i.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Me(t);if(g===".priority"){le(ps(t)===1,"Can't have a priority with additional path components");const E=h.getNode();m=e.serverCache.getNode();const T=N0(r,t,E,m);T!=null?p=i.filter.updatePriority(E,T):p=h.getNode()}else{const E=rt(t);let T;if(h.isCompleteForChild(g)){m=e.serverCache.getNode();const b=N0(r,t,h.getNode(),m);b!=null?T=h.getNode().getImmediateChild(g).updateChild(E,b):T=h.getNode().getImmediateChild(g)}else T=Zg(r,g,e.serverCache);T!=null?p=i.filter.updateChild(h.getNode(),g,T,E,a,l):p=h.getNode()}}return yu(e,p,h.isFullyInitialized()||xe(t),i.filter.filtersNodes())}}function yf(i,e,t,r,a,l,h,p){const m=e.serverCache;let g;const E=h?i.filter:i.filter.getIndexedFilter();if(xe(t))g=E.updateFullNode(m.getNode(),r,null);else if(E.filtersNodes()&&!m.isFiltered()){const L=m.getNode().updateChild(t,r);g=E.updateFullNode(m.getNode(),L,null)}else{const L=Me(t);if(!m.isCompleteForPath(t)&&ps(t)>1)return e;const N=rt(t),q=m.getNode().getImmediateChild(L).updateChild(N,r);L===".priority"?g=E.updatePriority(m.getNode(),q):g=E.updateChild(m.getNode(),L,q,N,Jb,null)}const T=Gb(e,g,m.isFullyInitialized()||xe(t),E.filtersNodes()),b=new Jg(a,T,l);return ew(i,T,t,a,b,p)}function $m(i,e,t,r,a,l,h){const p=e.eventCache;let m,g;const E=new Jg(a,e,l);if(xe(t))g=i.filter.updateFullNode(e.eventCache.getNode(),r,h),m=yu(e,g,!0,i.filter.filtersNodes());else{const T=Me(t);if(T===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),r),m=yu(e,g,p.isFullyInitialized(),p.isFiltered());else{const b=rt(t),L=p.getNode().getImmediateChild(T);let N;if(xe(b))N=r;else{const G=E.getCompleteChild(T);G!=null?Ob(b)===".priority"&&G.getChild(Mb(b)).isEmpty()?N=G:N=G.updateChild(b,r):N=qe.EMPTY_NODE}if(L.equals(N))m=e;else{const G=i.filter.updateChild(p.getNode(),T,N,b,E,h);m=yu(e,G,p.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function O0(i,e){return i.eventCache.isCompleteForChild(e)}function nP(i,e,t,r,a,l,h){let p=e;return r.foreach((m,g)=>{const E=Ot(t,m);O0(e,Me(E))&&(p=$m(i,p,E,g,a,l,h))}),r.foreach((m,g)=>{const E=Ot(t,m);O0(e,Me(E))||(p=$m(i,p,E,g,a,l,h))}),p}function D0(i,e,t){return t.foreach((r,a)=>{e=e.updateChild(r,a)}),e}function Xm(i,e,t,r,a,l,h,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;xe(t)?g=r:g=new it(null).setTree(t,r);const E=e.serverCache.getNode();return g.children.inorderTraversal((T,b)=>{if(E.hasChild(T)){const L=e.serverCache.getNode().getImmediateChild(T),N=D0(i,L,b);m=yf(i,m,new st(T),N,a,l,h,p)}}),g.children.inorderTraversal((T,b)=>{const L=!e.serverCache.isCompleteForChild(T)&&b.value===null;if(!E.hasChild(T)&&!L){const N=e.serverCache.getNode().getImmediateChild(T),G=D0(i,N,b);m=yf(i,m,new st(T),G,a,l,h,p)}}),m}function iP(i,e,t,r,a,l,h){if(_f(a,t)!=null)return e;const p=e.serverCache.isFiltered(),m=e.serverCache;if(r.value!=null){if(xe(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return yf(i,e,t,m.getNode().getChild(t),a,l,p,h);if(xe(t)){let g=new it(null);return m.getNode().forEachChild(wo,(E,T)=>{g=g.set(new st(E),T)}),Xm(i,e,t,g,a,l,p,h)}else return e}else{let g=new it(null);return r.foreach((E,T)=>{const b=Ot(t,E);m.isCompleteForPath(b)&&(g=g.set(E,m.getNode().getChild(b)))}),Xm(i,e,t,g,a,l,p,h)}}function rP(i,e,t,r,a){const l=e.serverCache,h=Gb(e,l.getNode(),l.isFullyInitialized()||xe(t),l.isFiltered());return ew(i,h,t,r,Jb,a)}function sP(i,e,t,r,a,l){let h;if(_f(r,t)!=null)return e;{const p=new Jg(r,e,a),m=e.eventCache.getNode();let g;if(xe(t)||Me(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=Qm(r,ma(e));else{const T=e.serverCache.getNode();le(T instanceof qe,"serverChildren would be complete if leaf node"),E=Xb(r,T)}E=E,g=i.filter.updateFullNode(m,E,l)}else{const E=Me(t);let T=Zg(r,E,e.serverCache);T==null&&e.serverCache.isCompleteForChild(E)&&(T=m.getImmediateChild(E)),T!=null?g=i.filter.updateChild(m,E,T,rt(t),p,l):e.eventCache.getNode().hasChild(E)?g=i.filter.updateChild(m,E,qe.EMPTY_NODE,rt(t),p,l):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=Qm(r,ma(e)),h.isLeafNode()&&(g=i.filter.updateFullNode(g,h,l)))}return h=e.serverCache.isFullyInitialized()||_f(r,Ze())!=null,yu(e,g,h,i.filter.filtersNodes())}}function aP(i,e){const t=ma(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!xe(e)&&!t.getImmediateChild(Me(e)).isEmpty())?t.getChild(e):null}function M0(i,e,t,r){e.type===wi.MERGE&&e.source.queryId!==null&&(le(ma(i.viewCache_),"We should always have a full cache before handling merges"),le(Gm(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=eP(i.processor_,a,e,t,r);return Jk(i.processor_,l.viewCache),le(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,oP(i,l.changes,l.viewCache.eventCache.getNode())}function oP(i,e,t,r){const a=i.eventRegistrations_;return kk(i.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x0;function lP(i){le(!x0,"__referenceConstructor has already been defined"),x0=i}function e_(i,e,t,r){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return le(l!=null,"SyncTree gave us an op for an invalid query."),M0(l,e,t,r)}else{let l=[];for(const h of i.views.values())l=l.concat(M0(h,e,t,r));return l}}function t_(i,e){let t=null;for(const r of i.views.values())t=t||aP(r,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k0;function uP(i){le(!k0,"__referenceConstructor has already been defined"),k0=i}class P0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new it(null),this.pendingWriteTree_=$k(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tw(i,e,t,r,a){return Uk(i.pendingWriteTree_,e,t,r,a),a?Hf(i,new pa(Hb(),e,t)):[]}function ia(i,e,t=!1){const r=zk(i.pendingWriteTree_,e);if(Bk(i.pendingWriteTree_,e)){let l=new it(null);return r.snap!=null?l=l.set(Ze(),!0):Gn(r.children,h=>{l=l.set(new st(h),!0)}),Hf(i,new gf(r.path,l,t))}else return[]}function Bf(i,e,t){return Hf(i,new pa(jb(),e,t))}function cP(i,e,t){const r=it.fromObject(t);return Hf(i,new Mu(jb(),e,r))}function hP(i,e,t,r){const a=rw(i,r);if(a!=null){const l=sw(a),h=l.path,p=l.queryId,m=Fn(h,e),g=new pa(Fb(p),m,t);return aw(i,h,g)}else return[]}function fP(i,e,t,r){const a=rw(i,r);if(a){const l=sw(a),h=l.path,p=l.queryId,m=Fn(h,e),g=it.fromObject(t),E=new Mu(Fb(p),m,g);return aw(i,h,E)}else return[]}function n_(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(h,p)=>{const m=Fn(h,e),g=t_(p,m);if(g)return g});return $b(a,e,l,t,!0)}function Hf(i,e){return nw(e,i.syncPointTree_,null,Yb(i.pendingWriteTree_,Ze()))}function nw(i,e,t,r){if(xe(i.path))return iw(i,e,t,r);{const a=e.get(Ze());t==null&&a!=null&&(t=t_(a,Ze()));let l=[];const h=Me(i.path),p=i.operationForChild(h),m=e.children.get(h);if(m&&p){const g=t?t.getImmediateChild(h):null,E=Wb(r,h);l=l.concat(nw(p,m,g,E))}return a&&(l=l.concat(e_(a,i,r,t))),l}}function iw(i,e,t,r){const a=e.get(Ze());t==null&&a!=null&&(t=t_(a,Ze()));let l=[];return e.children.inorderTraversal((h,p)=>{const m=t?t.getImmediateChild(h):null,g=Wb(r,h),E=i.operationForChild(h);E&&(l=l.concat(iw(E,p,m,g)))}),a&&(l=l.concat(e_(a,i,r,t))),l}function rw(i,e){return i.tagToQueryMap.get(e)}function sw(i){const e=i.indexOf("$");return le(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new st(i.substr(0,e))}}function aw(i,e,t){const r=i.syncPointTree_.get(e);le(r,"Missing sync point for query tag that we're tracking");const a=Yb(i.pendingWriteTree_,e);return e_(r,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new i_(t)}node(){return this.node_}}class r_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ot(this.path_,e);return new r_(this.syncTree_,t)}node(){return n_(this.syncTree_,this.path_)}}const dP=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},L0=function(i,e,t){if(!i||typeof i!="object")return i;if(le(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return pP(i[".sv"],e,t);if(typeof i[".sv"]=="object")return mP(i[".sv"],e);le(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},pP=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:le(!1,"Unexpected server value: "+i)}},mP=function(i,e,t){i.hasOwnProperty("increment")||le(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const r=i.increment;typeof r!="number"&&le(!1,"Unexpected increment value: "+r);const a=e.node();if(le(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return r;const h=a.getValue();return typeof h!="number"?r:h+r},gP=function(i,e,t,r){return s_(e,new r_(t,i),r)},ow=function(i,e,t){return s_(i,new i_(e),t)};function s_(i,e,t){const r=i.getPriority().val(),a=L0(r,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const h=i,p=L0(h.getValue(),e,t);return p!==h.getValue()||a!==h.getPriority().val()?new Vt(p,Xt(a)):i}else{const h=i;return l=h,a!==h.getPriority().val()&&(l=l.updatePriority(new Vt(a))),h.forEachChild(ln,(p,m)=>{const g=s_(m,e.getImmediateChild(p),t);g!==m&&(l=l.updateImmediateChild(p,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function o_(i,e){let t=e instanceof st?e:new st(e),r=i,a=Me(t);for(;a!==null;){const l=Ro(r.node.children,a)||{children:{},childCount:0};r=new a_(a,r,l),t=rt(t),a=Me(t)}return r}function Fo(i){return i.node.value}function lw(i,e){i.node.value=e,Wm(i)}function uw(i){return i.node.childCount>0}function _P(i){return Fo(i)===void 0&&!uw(i)}function jf(i,e){Gn(i.node.children,(t,r)=>{e(new a_(t,i,r))})}function cw(i,e,t,r){t&&e(i),jf(i,a=>{cw(a,e,!0)})}function yP(i,e,t){let r=i.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function $u(i){return new st(i.parent===null?i.name:$u(i.parent)+"/"+i.name)}function Wm(i){i.parent!==null&&vP(i.parent,i.name,i)}function vP(i,e,t){const r=_P(t),a=Tr(i.node.children,e);r&&a?(delete i.node.children[e],i.node.childCount--,Wm(i)):!r&&!a&&(i.node.children[e]=t.node,i.node.childCount++,Wm(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=/[\[\].#$\/\u0000-\u001F\u007F]/,TP=/[\[\].#$\u0000-\u001F\u007F]/,pm=10*1024*1024,hw=function(i){return typeof i=="string"&&i.length!==0&&!EP.test(i)},fw=function(i){return typeof i=="string"&&i.length!==0&&!TP.test(i)},SP=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),fw(i)},AP=function(i,e,t,r){l_(lg(i,"value"),e,t)},l_=function(i,e,t){const r=t instanceof st?new rk(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+Js(r));if(typeof e=="function")throw new Error(i+"contains a function "+Js(r)+" with contents = "+e.toString());if(ub(e))throw new Error(i+"contains "+e.toString()+" "+Js(r));if(typeof e=="string"&&e.length>pm/3&&Af(e)>pm)throw new Error(i+"contains a string greater than "+pm+" utf8 bytes "+Js(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Gn(e,(h,p)=>{if(h===".value")a=!0;else if(h!==".priority"&&h!==".sv"&&(l=!0,!hw(h)))throw new Error(i+" contains an invalid key ("+h+") "+Js(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sk(r,h),l_(i,p,r),ak(r)}),a&&l)throw new Error(i+' contains ".value" child '+Js(r)+" in addition to actual children.")}},dw=function(i,e,t,r){if(!fw(t))throw new Error(lg(i,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},bP=function(i,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dw(i,e,t)},wP=function(i,e){if(Me(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},RP=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!SP(t))throw new Error(lg(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pw(i,e){let t=null;for(let r=0;r<e.length;r++){const a=e[r],l=a.getPath();t!==null&&!xb(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function yr(i,e,t){pw(i,t),IP(i,r=>ii(r,e)||ii(e,r))}function IP(i,e){i.recursionDepth_++;let t=!0;for(let r=0;r<i.eventLists_.length;r++){const a=i.eventLists_[r];if(a){const l=a.path;e(l)?(NP(i.eventLists_[r]),i.eventLists_[r]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function NP(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const r=t.getEventRunner();gu&&on("event: "+t.toString()),jo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP="repo_interrupt",DP=25;class MP{constructor(e,t,r,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new CP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mf(),this.transactionQueueTree_=new a_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xP(i,e,t){if(i.stats_=Kg(i.repoInfo_),i.forceRestClient_||Nx())i.server_=new pf(i.repoInfo_,(r,a,l,h)=>{V0(i,r,a,l,h)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>U0(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Wt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}i.persistentConnection_=new dr(i.repoInfo_,e,(r,a,l,h)=>{V0(i,r,a,l,h)},r=>{U0(i,r)},r=>{PP(i,r)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(r=>{i.server_.refreshAuthToken(r)}),i.appCheckProvider_.addTokenChangeListener(r=>{i.server_.refreshAppCheckToken(r.token)}),i.statsReporter_=kx(i.repoInfo_,()=>new xk(i.stats_,i.server_)),i.infoData_=new Ik,i.infoSyncTree_=new P0({startListening:(r,a,l,h)=>{let p=[];const m=i.infoData_.getNode(r._path);return m.isEmpty()||(p=Bf(i.infoSyncTree_,r._path,m),setTimeout(()=>{h("ok")},0)),p},stopListening:()=>{}}),c_(i,"connected",!1),i.serverSyncTree_=new P0({startListening:(r,a,l,h)=>(i.server_.listen(r,l,a,(p,m)=>{const g=h(p,m);yr(i.eventQueue_,r._path,g)}),[]),stopListening:(r,a)=>{i.server_.unlisten(r,a)}})}function kP(i){const t=i.infoData_.getNode(new st(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function u_(i){return dP({timestamp:kP(i)})}function V0(i,e,t,r,a){i.dataUpdateCount++;const l=new st(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let h=[];if(a)if(r){const m=Fh(t,g=>Xt(g));h=fP(i.serverSyncTree_,l,m,a)}else{const m=Xt(t);h=hP(i.serverSyncTree_,l,m,a)}else if(r){const m=Fh(t,g=>Xt(g));h=cP(i.serverSyncTree_,l,m)}else{const m=Xt(t);h=Bf(i.serverSyncTree_,l,m)}let p=l;h.length>0&&(p=Ff(i,l)),yr(i.eventQueue_,p,h)}function U0(i,e){c_(i,"connected",e),e===!1&&VP(i)}function PP(i,e){Gn(e,(t,r)=>{c_(i,t,r)})}function c_(i,e,t){const r=new st("/.info/"+e),a=Xt(t);i.infoData_.updateSnapshot(r,a);const l=Bf(i.infoSyncTree_,r,a);yr(i.eventQueue_,r,l)}function mw(i){return i.nextWriteId_++}function LP(i,e,t,r,a){h_(i,"set",{path:e.toString(),value:t,priority:r});const l=u_(i),h=Xt(t,r),p=n_(i.serverSyncTree_,e),m=ow(h,p,l),g=mw(i),E=tw(i.serverSyncTree_,e,m,g,!0);pw(i.eventQueue_,E),i.server_.put(e.toString(),h.val(!0),(b,L)=>{const N=b==="ok";N||En("set at "+e+" failed: "+b);const G=ia(i.serverSyncTree_,g,!N);yr(i.eventQueue_,e,G),zP(i,a,b,L)});const T=Ew(i,e);Ff(i,T),yr(i.eventQueue_,T,[])}function VP(i){h_(i,"onDisconnectEvents");const e=u_(i),t=mf();qm(i.onDisconnect_,Ze(),(a,l)=>{const h=gP(a,l,i.serverSyncTree_,e);Bb(t,a,h)});let r=[];qm(t,Ze(),(a,l)=>{r=r.concat(Bf(i.serverSyncTree_,a,l));const h=Ew(i,a);Ff(i,h)}),i.onDisconnect_=mf(),yr(i.eventQueue_,Ze(),r)}function UP(i){i.persistentConnection_&&i.persistentConnection_.interrupt(OP)}function h_(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),on(t,...e)}function zP(i,e,t,r){e&&jo(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;r&&(l+=": "+r);const h=new Error(l);h.code=a,e(h)}})}function gw(i,e,t){return n_(i.serverSyncTree_,e,t)||qe.EMPTY_NODE}function f_(i,e=i.transactionQueueTree_){if(e||qf(i,e),Fo(e)){const t=yw(i,e);le(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&BP(i,$u(e),t)}else uw(e)&&jf(e,t=>{f_(i,t)})}function BP(i,e,t){const r=t.map(g=>g.currentWriteId),a=gw(i,e,r);let l=a;const h=a.hash();for(let g=0;g<t.length;g++){const E=t[g];le(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const T=Fn(e,E.path);l=l.updateChild(T,E.currentOutputSnapshotRaw)}const p=l.val(!0),m=e;i.server_.put(m.toString(),p,g=>{h_(i,"transaction put response",{path:m.toString(),status:g});let E=[];if(g==="ok"){const T=[];for(let b=0;b<t.length;b++)t[b].status=2,E=E.concat(ia(i.serverSyncTree_,t[b].currentWriteId)),t[b].onComplete&&T.push(()=>t[b].onComplete(null,!0,t[b].currentOutputSnapshotResolved)),t[b].unwatcher();qf(i,o_(i.transactionQueueTree_,e)),f_(i,i.transactionQueueTree_),yr(i.eventQueue_,e,E);for(let b=0;b<T.length;b++)jo(T[b])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{En("transaction at "+m.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}Ff(i,e)}},h)}function Ff(i,e){const t=_w(i,e),r=$u(t),a=yw(i,t);return HP(i,a,r),r}function HP(i,e,t){if(e.length===0)return;const r=[];let a=[];const h=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const m=e[p],g=Fn(t,m.path);let E=!1,T;if(le(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)E=!0,T=m.abortReason,a=a.concat(ia(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=DP)E=!0,T="maxretry",a=a.concat(ia(i.serverSyncTree_,m.currentWriteId,!0));else{const b=gw(i,m.path,h);m.currentInputSnapshot=b;const L=e[p].update(b.val());if(L!==void 0){l_("transaction failed: Data returned ",L,m.path);let N=Xt(L);typeof L=="object"&&L!=null&&Tr(L,".priority")||(N=N.updatePriority(b.getPriority()));const q=m.currentWriteId,X=u_(i),se=ow(N,b,X);m.currentOutputSnapshotRaw=N,m.currentOutputSnapshotResolved=se,m.currentWriteId=mw(i),h.splice(h.indexOf(q),1),a=a.concat(tw(i.serverSyncTree_,m.path,se,m.currentWriteId,m.applyLocally)),a=a.concat(ia(i.serverSyncTree_,q,!0))}else E=!0,T="nodata",a=a.concat(ia(i.serverSyncTree_,m.currentWriteId,!0))}yr(i.eventQueue_,t,a),a=[],E&&(e[p].status=2,function(b){setTimeout(b,Math.floor(0))}(e[p].unwatcher),e[p].onComplete&&(T==="nodata"?r.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):r.push(()=>e[p].onComplete(new Error(T),!1,null))))}qf(i,i.transactionQueueTree_);for(let p=0;p<r.length;p++)jo(r[p]);f_(i,i.transactionQueueTree_)}function _w(i,e){let t,r=i.transactionQueueTree_;for(t=Me(e);t!==null&&Fo(r)===void 0;)r=o_(r,t),e=rt(e),t=Me(e);return r}function yw(i,e){const t=[];return vw(i,e,t),t.sort((r,a)=>r.order-a.order),t}function vw(i,e,t){const r=Fo(e);if(r)for(let a=0;a<r.length;a++)t.push(r[a]);jf(e,a=>{vw(i,a,t)})}function qf(i,e){const t=Fo(e);if(t){let r=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[r]=t[a],r++);t.length=r,lw(e,t.length>0?t:void 0)}jf(e,r=>{qf(i,r)})}function Ew(i,e){const t=$u(_w(i,e)),r=o_(i.transactionQueueTree_,e);return yP(r,a=>{mm(i,a)}),mm(i,r),cw(r,a=>{mm(i,a)}),t}function mm(i,e){const t=Fo(e);if(t){const r=[];let a=[],l=-1;for(let h=0;h<t.length;h++)t[h].status===3||(t[h].status===1?(le(l===h-1,"All SENT items should be at beginning of queue."),l=h,t[h].status=3,t[h].abortReason="set"):(le(t[h].status===0,"Unexpected transaction status in abort"),t[h].unwatcher(),a=a.concat(ia(i.serverSyncTree_,t[h].currentWriteId,!0)),t[h].onComplete&&r.push(t[h].onComplete.bind(null,new Error("set"),!1,null))));l===-1?lw(e,void 0):t.length=l+1,yr(i.eventQueue_,$u(e),a);for(let h=0;h<r.length;h++)jo(r[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(i){let e="";const t=i.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let a=t[r];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function FP(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):En(`Invalid query segment '${t}' in query '${i}'`)}return e}const z0=function(i,e){const t=qP(i),r=t.namespace;t.domain==="firebase.com"&&_r(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&_r("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Tx();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Tb(t.host,t.secure,r,a,e,"",r!==t.subdomain),path:new st(t.pathString)}},qP=function(i){let e="",t="",r="",a="",l="",h=!0,p="https",m=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(p=i.substring(0,g-1),i=i.substring(g+2));let E=i.indexOf("/");E===-1&&(E=i.length);let T=i.indexOf("?");T===-1&&(T=i.length),e=i.substring(0,Math.min(E,T)),E<T&&(a=jP(i.substring(E,T)));const b=FP(i.substring(Math.min(i.length,T)));g=e.indexOf(":"),g>=0?(h=p==="https"||p==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const L=e.slice(0,g);if(L.toLowerCase()==="localhost")t="localhost";else if(L.split(".").length<=2)t=L;else{const N=e.indexOf(".");r=e.substring(0,N).toLowerCase(),t=e.substring(N+1),l=r}"ns"in b&&(l=b.ns)}return{host:e,port:m,domain:t,subdomain:r,secure:h,scheme:p,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t,r,a){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=a}get key(){return xe(this._path)?null:Ob(this._path)}get ref(){return new Sa(this._repo,this._path)}get _queryIdentifier(){const e=b0(this._queryParams),t=qg(e);return t==="{}"?"default":t}get _queryObject(){return b0(this._queryParams)}isEqual(e){if(e=jt(e),!(e instanceof d_))return!1;const t=this._repo===e._repo,r=xb(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&r&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+ik(this._path)}}class Sa extends d_{constructor(e,t){super(e,t,new Xg,!1)}get parent(){const e=Mb(this._path);return e===null?null:new Sa(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function GP(i,e){return i=jt(i),i._checkNotDeleted("ref"),e!==void 0?KP(i._root,e):i._root}function KP(i,e){return i=jt(i),Me(i._path)===null?bP("child","path",e):dw("child","path",e),new Sa(i._repo,Ot(i._path,e))}function YP(i,e){i=jt(i),wP("set",i._path),AP("set",e,i._path);const t=new Sf;return LP(i._repo,i._path,e,null,t.wrapCallback(()=>{})),t.promise}lP(Sa);uP(Sa);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP="FIREBASE_DATABASE_EMULATOR_HOST",Zm={};let $P=!1;function XP(i,e,t,r){i.repoInfo_=new Tb(e,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(i.authTokenProvider_=r)}function WP(i,e,t,r,a){let l=r||i.options.databaseURL;l===void 0&&(i.options.projectId||_r("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),on("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let h=z0(l,a),p=h.repoInfo,m;typeof process<"u"&&s0&&(m=s0[QP]),m?(l=`http://${m}?ns=${p.namespace}`,h=z0(l,a),p=h.repoInfo):h.repoInfo.secure;const g=new Dx(i.name,i.options,e);RP("Invalid Firebase Database URL",h),xe(h.path)||_r("Database URL must point to the root of a Firebase Database (not including a child path).");const E=JP(p,i,g,new Ox(i,t));return new eL(E,i)}function ZP(i,e){const t=Zm[e];(!t||t[i.key]!==i)&&_r(`Database ${e}(${i.repoInfo_}) has already been deleted.`),UP(i),delete t[i.key]}function JP(i,e,t,r){let a=Zm[e.name];a||(a={},Zm[e.name]=a);let l=a[i.toURLString()];return l&&_r("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new MP(i,$P,t,r),a[i.toURLString()]=l,l}class eL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sa(this._repo,Ze())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_r("Cannot call "+e+" on a deleted database.")}}function tL(i=cg(),e){const t=wf(i,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=lS("database");r&&nL(t,...r)}return t}function nL(i,e,t,r={}){i=jt(i),i._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=i._repoInternal;if(i._instanceStarted){if(a===i._repoInternal.repoInfo_.host&&ls(r,l.repoInfo_.emulatorOptions))return;_r("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(l.repoInfo_.nodeAdmin)r.mockUserToken&&_r('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new zh(zh.OWNER);else if(r.mockUserToken){const p=typeof r.mockUserToken=="string"?r.mockUserToken:hS(r.mockUserToken,i.app.options.projectId);h=new zh(p)}XP(l,a,r,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(i){mx(_a),aa(new us("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return WP(r,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Ri(a0,o0,i),Ri(a0,o0,"esm2017")}dr.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};dr.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};iL();const rL=tL(Ea),sL=()=>{const i=()=>{YP(GP(rL,"users/rupam"),{id:1,name:"Rupam",age:22})};return J.jsxs("div",{children:[J.jsx(Uf,{}),"Home",J.jsx("button",{className:"btn btn-primary",onClick:i,children:"Put Data"})]})},aL=Nf(Ea),oL=XA(Ea),lL=()=>{const[i,e]=Q.useState(""),[t,r]=Q.useState(""),[a,l]=Q.useState(""),[h,p]=Q.useState(""),[m,g]=Q.useState(""),[E,T]=Q.useState(""),b=async()=>{try{const G=(await aO(aL,i,t)).user;await cx(WM(oL,"users",G.uid),{uid:G.uid,email:G.email,fullName:a,phone:h,address:m,gender:E,createdAt:new Date}),console.log("User created and details saved:",G)}catch(N){console.error("Signup error:",N)}},L=N=>{N.preventDefault(),b()};return J.jsxs("div",{children:[J.jsx(Uf,{}),J.jsx("div",{className:"container mt-5",children:J.jsx("div",{className:"row justify-content-center",children:J.jsx("div",{className:"col-md-6",children:J.jsx("div",{className:"card shadow",children:J.jsxs("div",{className:"card-body",children:[J.jsx("h3",{className:"card-title text-center mb-4",children:"Register"}),J.jsxs("form",{onSubmit:L,children:[J.jsxs("div",{className:"mb-3",children:[J.jsx("label",{className:"form-label",children:"Full Name"}),J.jsx("input",{type:"text",className:"form-control",value:a,onChange:N=>l(N.target.value),required:!0})]}),J.jsxs("div",{className:"mb-3",children:[J.jsx("label",{className:"form-label",children:"Phone"}),J.jsx("input",{type:"text",className:"form-control",value:h,onChange:N=>p(N.target.value),required:!0})]}),J.jsxs("div",{className:"mb-3",children:[J.jsx("label",{className:"form-label",children:"Address"}),J.jsx("input",{type:"text",className:"form-control",value:m,onChange:N=>g(N.target.value),required:!0})]}),J.jsxs("div",{className:"mb-3",children:[J.jsx("label",{className:"form-label",children:"Gender"}),J.jsxs("select",{className:"form-control",value:E,onChange:N=>T(N.target.value),required:!0,children:[J.jsx("option",{value:"",children:"Select"}),J.jsx("option",{value:"male",children:"Male"}),J.jsx("option",{value:"female",children:"Female"}),J.jsx("option",{value:"other",children:"Other"})]})]}),J.jsxs("div",{className:"mb-3",children:[J.jsx("label",{className:"form-label",children:"Email"}),J.jsx("input",{type:"email",className:"form-control",value:i,onChange:N=>e(N.target.value),required:!0})]}),J.jsxs("div",{className:"mb-3",children:[J.jsx("label",{className:"form-label",children:"Password"}),J.jsx("input",{type:"password",className:"form-control",value:t,onChange:N=>r(N.target.value),required:!0})]}),J.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Sign Up"})]})]})})})})})]})},uL=Nf(Ea),cL=()=>{const[i,e]=Q.useState(""),[t,r]=Q.useState(null),[a,l]=Q.useState(null),h=p=>{p.preventDefault(),sO(uL,i).then(()=>{r("Password reset email sent successfully!"),l(null)}).catch(m=>{console.error(m),l("Failed to send password reset email."),r(null)})};return J.jsxs(J.Fragment,{children:[J.jsx(Uf,{}),J.jsx("div",{className:"container mt-5",children:J.jsx("div",{className:"row justify-content-center",children:J.jsx("div",{className:"col-md-6",children:J.jsx("div",{className:"card shadow",children:J.jsxs("div",{className:"card-body",children:[J.jsx("h4",{className:"mb-3",children:"Forgot Password"}),J.jsxs("form",{onSubmit:h,children:[J.jsx("label",{className:"form-label",children:"Enter your email"}),J.jsx("input",{type:"email",className:"form-control mb-3",value:i,onChange:p=>e(p.target.value),required:!0}),J.jsx("button",{className:"btn btn-primary w-100",type:"submit",children:"Send Reset Email"})]}),t&&J.jsx("div",{className:"alert alert-success mt-3",children:t}),a&&J.jsx("div",{className:"alert alert-danger mt-3",children:a})]})})})})})]})},hL=()=>J.jsx("div",{children:J.jsxs(qC,{children:[J.jsx(ou,{path:"/login",element:J.jsx(px,{})}),J.jsx(ou,{path:"/register",element:J.jsx(lL,{})}),J.jsx(ou,{path:"/forget-password",element:J.jsx(cL,{})}),J.jsx(ou,{path:"/",element:J.jsx(sL,{})})]})}),fL=()=>J.jsx("div",{children:J.jsx(pI,{basename:"/Firebase-Project",children:J.jsx(hL,{})})});eC.createRoot(document.getElementById("root")).render(J.jsx(Q.StrictMode,{children:J.jsx(fL,{})}));
