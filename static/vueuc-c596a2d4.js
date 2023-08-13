import{c as Le,F as Me,C as We,d as H,p as He,x as Se,i as ae,r as F,b as R,q as ze,t as Z,g as D,j as A,K as Ve,o as K,l as U,n as Te,L as Ee,e as Xe,f as Ye,m as De}from"./@vue-6c443430.js";import{a as q,o as oe}from"./evtd-b614532e.js";import{A as Ae,d as ce,z as G,y as Ne,g as _e}from"./seemly-2e71c052.js";import{u as de}from"./@css-render-8efa2268.js";import{d as Pe,u as le,o as je,i as Ue}from"./vooks-bac0419b.js";import{z as qe}from"./vdirs-b0483831.js";import{R as Ke}from"./@juggle-41516555.js";import{C as Ge}from"./css-render-d3958e6a.js";function se(n,e,t="default"){const i=e[t];if(i===void 0)throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);return i()}function ue(n,e=!0,t=[]){return n.forEach(i=>{if(i!==null){if(typeof i!="object"){(typeof i=="string"||typeof i=="number")&&t.push(Le(String(i)));return}if(Array.isArray(i)){ue(i,e,t);return}if(i.type===Me){if(i.children===null)return;Array.isArray(i.children)&&ue(i.children,e,t)}else i.type!==We&&t.push(i)}}),t}function he(n,e,t="default"){const i=e[t];if(i===void 0)throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);const o=ue(i());if(o.length===1)return o[0];throw new Error(`[vueuc/${n}]: slot[${t}] should have exactly one child.`)}let L=null;function Fe(){if(L===null&&(L=document.getElementById("v-binder-view-measurer"),L===null)){L=document.createElement("div"),L.id="v-binder-view-measurer";const{style:n}=L;n.position="fixed",n.left="0",n.right="0",n.top="0",n.bottom="0",n.pointerEvents="none",n.visibility="hidden",document.body.appendChild(L)}return L.getBoundingClientRect()}function Je(n,e){const t=Fe();return{top:e,left:n,height:0,width:0,right:t.width-n,bottom:t.height-e}}function ne(n){const e=n.getBoundingClientRect(),t=Fe();return{left:e.left-t.left,top:e.top-t.top,bottom:t.height+t.top-e.bottom,right:t.width+t.left-e.right,width:e.width,height:e.height}}function Qe(n){return n.nodeType===9?null:n.parentNode}function Be(n){if(n===null)return null;const e=Qe(n);if(e===null)return null;if(e.nodeType===9)return document;if(e.nodeType===1){const{overflow:t,overflowX:i,overflowY:o}=getComputedStyle(e);if(/(auto|scroll|overlay)/.test(t+o+i))return e}return Be(e)}const Ze=H({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(n){var e;He("VBinder",(e=Se())===null||e===void 0?void 0:e.proxy);const t=ae("VBinder",null),i=F(null),o=r=>{i.value=r,t&&n.syncTargetWithParent&&t.setTargetRef(r)};let u=[];const p=()=>{let r=i.value;for(;r=Be(r),r!==null;)u.push(r);for(const b of u)oe("scroll",b,x,!0)},g=()=>{for(const r of u)q("scroll",r,x,!0);u=[]},a=new Set,m=r=>{a.size===0&&p(),a.has(r)||a.add(r)},y=r=>{a.has(r)&&a.delete(r),a.size===0&&g()},x=()=>{Ae(d)},d=()=>{a.forEach(r=>r())},c=new Set,v=r=>{c.size===0&&oe("resize",window,s),c.has(r)||c.add(r)},h=r=>{c.has(r)&&c.delete(r),c.size===0&&q("resize",window,s)},s=()=>{c.forEach(r=>r())};return R(()=>{q("resize",window,s),g()}),{targetRef:i,setTargetRef:o,addScrollListener:m,removeScrollListener:y,addResizeListener:v,removeResizeListener:h}},render(){return se("binder",this.$slots)}}),xt=Ze,$t=H({name:"Target",setup(){const{setTargetRef:n,syncTarget:e}=ae("VBinder");return{syncTarget:e,setTargetDirective:{mounted:n,updated:n}}},render(){const{syncTarget:n,setTargetDirective:e}=this;return n?ze(he("follower",this.$slots),[[e]]):he("follower",this.$slots)}});function pe(n,e){console.error(`[vueuc/${n}]: ${e}`)}const{c:W}=Ge(),fe="vueuc-style";function me(n){return n&-n}class Re{constructor(e,t){this.l=e,this.min=t;const i=new Array(e+1);for(let o=0;o<e+1;++o)i[o]=0;this.ft=i}add(e,t){if(t===0)return;const{l:i,ft:o}=this;for(e+=1;e<=i;)o[e]+=t,e+=me(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;const{ft:t,min:i,l:o}=this;if(e>o)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let u=e*i;for(;e>0;)u+=t[e],e-=me(e);return u}getBound(e){let t=0,i=this.l;for(;i>t;){const o=Math.floor((t+i)/2),u=this.sum(o);if(u>e){i=o;continue}else if(u<e){if(t===o)return this.sum(t+1)<=e?t+1:o;t=o}else return o}return t}}function ve(n){return typeof n=="string"?document.querySelector(n):n()}const et=H({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(n){return{showTeleport:Pe(Z(n,"show")),mergedTo:D(()=>{const{to:e}=n;return e??"body"})}},render(){return this.showTeleport?this.disabled?se("lazy-teleport",this.$slots):A(Ve,{disabled:this.disabled,to:this.mergedTo},se("lazy-teleport",this.$slots)):null}}),J={top:"bottom",bottom:"top",left:"right",right:"left"},be={start:"end",center:"center",end:"start"},ie={top:"height",bottom:"height",left:"width",right:"width"},tt={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},nt={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},it={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},ge={top:!0,bottom:!1,left:!0,right:!1},we={top:"end",bottom:"start",left:"end",right:"start"};function rt(n,e,t,i,o,u){if(!o||u)return{placement:n,top:0,left:0};const[p,g]=n.split("-");let a=g??"center",m={top:0,left:0};const y=(c,v,h)=>{let s=0,r=0;const b=t[c]-e[v]-e[c];return b>0&&i&&(h?r=ge[v]?b:-b:s=ge[v]?b:-b),{left:s,top:r}},x=p==="left"||p==="right";if(a!=="center"){const c=it[n],v=J[c],h=ie[c];if(t[h]>e[h]){if(e[c]+e[h]<t[h]){const s=(t[h]-e[h])/2;e[c]<s||e[v]<s?e[c]<e[v]?(a=be[g],m=y(h,v,x)):m=y(h,c,x):a="center"}}else t[h]<e[h]&&e[v]<0&&e[c]>e[v]&&(a=be[g])}else{const c=p==="bottom"||p==="top"?"left":"top",v=J[c],h=ie[c],s=(t[h]-e[h])/2;(e[c]<s||e[v]<s)&&(e[c]>e[v]?(a=we[c],m=y(h,c,x)):(a=we[v],m=y(h,v,x)))}let d=p;return e[p]<t[ie[p]]&&e[p]<e[J[p]]&&(d=J[p]),{placement:a!=="center"?`${d}-${a}`:d,left:m.left,top:m.top}}function ot(n,e){return e?nt[n]:tt[n]}function lt(n,e,t,i,o,u){if(u)switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+t.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+t.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+t.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+t.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+t.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2+i)}px`,left:`${Math.round(t.left-e.left+t.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2+i)}px`,left:`${Math.round(t.left-e.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+t.width/2+o)}px`,transform:"translateX(-50%)"}}}const st=W([W(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),W(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[W("> *",{pointerEvents:"all"})])]),Mt=H({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(n){const e=ae("VBinder"),t=le(()=>n.enabled!==void 0?n.enabled:n.show),i=F(null),o=F(null),u=()=>{const{syncTrigger:d}=n;d.includes("scroll")&&e.addScrollListener(a),d.includes("resize")&&e.addResizeListener(a)},p=()=>{e.removeScrollListener(a),e.removeResizeListener(a)};K(()=>{t.value&&(a(),u())});const g=de();st.mount({id:"vueuc/binder",head:!0,anchorMetaName:fe,ssr:g}),R(()=>{p()}),je(()=>{t.value&&a()});const a=()=>{if(!t.value)return;const d=i.value;if(d===null)return;const c=e.targetRef,{x:v,y:h,overlap:s}=n,r=v!==void 0&&h!==void 0?Je(v,h):ne(c);d.style.setProperty("--v-target-width",`${Math.round(r.width)}px`),d.style.setProperty("--v-target-height",`${Math.round(r.height)}px`);const{width:b,minWidth:T,placement:I,internalShift:k,flip:O}=n;d.setAttribute("v-placement",I),s?d.setAttribute("v-overlap",""):d.removeAttribute("v-overlap");const{style:B}=d;b==="target"?B.width=`${r.width}px`:b!==void 0?B.width=b:B.width="",T==="target"?B.minWidth=`${r.width}px`:T!==void 0?B.minWidth=T:B.minWidth="";const Y=ne(d),N=ne(o.value),{left:_,top:l,placement:f}=rt(I,r,Y,k,O,s),w=ot(f,s),{left:$,top:M,transform:z}=lt(f,N,r,l,_,s);d.setAttribute("v-placement",f),d.style.setProperty("--v-offset-left",`${Math.round(_)}px`),d.style.setProperty("--v-offset-top",`${Math.round(l)}px`),d.style.transform=`translateX(${$}) translateY(${M}) ${z}`,d.style.setProperty("--v-transform-origin",w),d.style.transformOrigin=w};U(t,d=>{d?(u(),m()):p()});const m=()=>{Te().then(a).catch(d=>console.error(d))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(d=>{U(Z(n,d),a)}),["teleportDisabled"].forEach(d=>{U(Z(n,d),m)}),U(Z(n,"syncTrigger"),d=>{d.includes("resize")?e.addResizeListener(a):e.removeResizeListener(a),d.includes("scroll")?e.addScrollListener(a):e.removeScrollListener(a)});const y=Ue(),x=le(()=>{const{to:d}=n;if(d!==void 0)return d;y.value});return{VBinder:e,mergedEnabled:t,offsetContainerRef:o,followerRef:i,mergedTo:x,syncPosition:a}},render(){return A(et,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var n,e;const t=A("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[A("div",{class:"v-binder-follower-content",ref:"followerRef"},(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))]);return this.zindexable?ze(t,[[qe,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});class ut{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||Ke)(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const t of e){const i=this.elHandlersMap.get(t.target);i!==void 0&&i(t)}}registerHandler(e,t){this.elHandlersMap.set(e,t),this.observer.observe(e)}unregisterHandler(e){this.elHandlersMap.has(e)&&(this.elHandlersMap.delete(e),this.observer.unobserve(e))}}const ye=new ut,xe=H({name:"ResizeObserver",props:{onResize:Function},setup(n){let e=!1;const t=Se().proxy;function i(o){const{onResize:u}=n;u!==void 0&&u(o)}K(()=>{const o=t.$el;if(o===void 0){pe("resize-observer","$el does not exist.");return}if(o.nextElementSibling!==o.nextSibling&&o.nodeType===3&&o.nodeValue!==""){pe("resize-observer","$el can not be observed (it may be a text node).");return}o.nextElementSibling!==null&&(ye.registerHandler(o.nextElementSibling,i),e=!0)}),R(()=>{e&&ye.unregisterHandler(t.$el.nextElementSibling)})},render(){return Ee(this.$slots,"default")}});let Q;function at(){return Q===void 0&&("matchMedia"in window?Q=window.matchMedia("(pointer:coarse)").matches:Q=!1),Q}let re;function $e(){return re===void 0&&(re="chrome"in window?window.devicePixelRatio:1),re}const dt=W(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[W("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[W("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),St=H({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(n){const e=de();dt.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:fe,ssr:e}),K(()=>{const{defaultScrollIndex:l,defaultScrollKey:f}=n;l!=null?v({index:l}):f!=null&&v({key:f})});let t=!1,i=!1;Xe(()=>{if(t=!1,!i){i=!0;return}v({top:x.value,left:y})}),Ye(()=>{t=!0,i||(i=!0)});const o=D(()=>{const l=new Map,{keyField:f}=n;return n.items.forEach((w,$)=>{l.set(w[f],$)}),l}),u=F(null),p=F(void 0),g=new Map,a=D(()=>{const{items:l,itemSize:f,keyField:w}=n,$=new Re(l.length,f);return l.forEach((M,z)=>{const S=M[w],E=g.get(S);E!==void 0&&$.add(z,E)}),$}),m=F(0);let y=0;const x=F(0),d=le(()=>Math.max(a.value.getBound(x.value-ce(n.paddingTop))-1,0)),c=D(()=>{const{value:l}=p;if(l===void 0)return[];const{items:f,itemSize:w}=n,$=d.value,M=Math.min($+Math.ceil(l/w+1),f.length-1),z=[];for(let S=$;S<=M;++S)z.push(f[S]);return z}),v=(l,f)=>{if(typeof l=="number"){b(l,f,"auto");return}const{left:w,top:$,index:M,key:z,position:S,behavior:E,debounce:C=!0}=l;if(w!==void 0||$!==void 0)b(w,$,E);else if(M!==void 0)r(M,E,C);else if(z!==void 0){const ee=o.value.get(z);ee!==void 0&&r(ee,E,C)}else S==="bottom"?b(0,Number.MAX_SAFE_INTEGER,E):S==="top"&&b(0,0,E)};let h,s=null;function r(l,f,w){const{value:$}=a,M=$.sum(l)+ce(n.paddingTop);if(!w)u.value.scrollTo({left:0,top:M,behavior:f});else{h=l,s!==null&&window.clearTimeout(s),s=window.setTimeout(()=>{h=void 0,s=null},16);const{scrollTop:z,offsetHeight:S}=u.value;if(M>z){const E=$.get(l);M+E<=z+S||u.value.scrollTo({left:0,top:M+E-S,behavior:f})}else u.value.scrollTo({left:0,top:M,behavior:f})}}function b(l,f,w){u.value.scrollTo({left:l,top:f,behavior:w})}function T(l,f){var w,$,M;if(t||n.ignoreItemResize||_(f.target))return;const{value:z}=a,S=o.value.get(l),E=z.get(S),C=(M=($=(w=f.borderBoxSize)===null||w===void 0?void 0:w[0])===null||$===void 0?void 0:$.blockSize)!==null&&M!==void 0?M:f.contentRect.height;if(C===E)return;C-n.itemSize===0?g.delete(l):g.set(l,C-n.itemSize);const P=C-E;if(P===0)return;z.add(S,P);const V=u.value;if(V!=null){if(h===void 0){const te=z.sum(S);V.scrollTop>te&&V.scrollBy(0,P)}else if(S<h)V.scrollBy(0,P);else if(S===h){const te=z.sum(S);C+te>V.scrollTop+V.offsetHeight&&V.scrollBy(0,P)}N()}m.value++}const I=!at();let k=!1;function O(l){var f;(f=n.onScroll)===null||f===void 0||f.call(n,l),(!I||!k)&&N()}function B(l){var f;if((f=n.onWheel)===null||f===void 0||f.call(n,l),I){const w=u.value;if(w!=null){if(l.deltaX===0&&(w.scrollTop===0&&l.deltaY<=0||w.scrollTop+w.offsetHeight>=w.scrollHeight&&l.deltaY>=0))return;l.preventDefault(),w.scrollTop+=l.deltaY/$e(),w.scrollLeft+=l.deltaX/$e(),N(),k=!0,Ae(()=>{k=!1})}}}function Y(l){if(t||_(l.target)||l.contentRect.height===p.value)return;p.value=l.contentRect.height;const{onResize:f}=n;f!==void 0&&f(l)}function N(){const{value:l}=u;l!=null&&(x.value=l.scrollTop,y=l.scrollLeft)}function _(l){let f=l;for(;f!==null;){if(f.style.display==="none")return!0;f=f.parentElement}return!1}return{listHeight:p,listStyle:{overflow:"auto"},keyToIndex:o,itemsStyle:D(()=>{const{itemResizable:l}=n,f=G(a.value.sum());return m.value,[n.itemsStyle,{boxSizing:"content-box",height:l?"":f,minHeight:l?f:"",paddingTop:G(n.paddingTop),paddingBottom:G(n.paddingBottom)}]}),visibleItemsStyle:D(()=>(m.value,{transform:`translateY(${G(a.value.sum(d.value))})`})),viewportItems:c,listElRef:u,itemsElRef:F(null),scrollTo:v,handleListResize:Y,handleListScroll:O,handleListWheel:B,handleItemResize:T}},render(){const{itemResizable:n,keyField:e,keyToIndex:t,visibleItemsTag:i}=this;return A(xe,{onResize:this.handleListResize},{default:()=>{var o,u;return A("div",De(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?A("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[A(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(p=>{const g=p[e],a=t.get(g),m=this.$slots.default({item:p,index:a})[0];return n?A(xe,{key:g,onResize:y=>this.handleItemResize(g,y)},{default:()=>m}):(m.key=g,m)})})]):(u=(o=this.$slots).empty)===null||u===void 0?void 0:u.call(o)])}})}}),X="v-hidden",ft=W("[v-hidden]",{display:"none!important"}),zt=H({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(n,{slots:e}){const t=F(null),i=F(null);function o(){const{value:p}=t,{getCounter:g,getTail:a}=n;let m;if(g!==void 0?m=g():m=i.value,!p||!m)return;m.hasAttribute(X)&&m.removeAttribute(X);const{children:y}=p,x=p.offsetWidth,d=[],c=e.tail?a==null?void 0:a():null;let v=c?c.offsetWidth:0,h=!1;const s=p.children.length-(e.tail?1:0);for(let b=0;b<s-1;++b){if(b<0)continue;const T=y[b];if(h){T.hasAttribute(X)||T.setAttribute(X,"");continue}else T.hasAttribute(X)&&T.removeAttribute(X);const I=T.offsetWidth;if(v+=I,d[b]=I,v>x){const{updateCounter:k}=n;for(let O=b;O>=0;--O){const B=s-1-O;k!==void 0?k(B):m.textContent=`${B}`;const Y=m.offsetWidth;if(v-=d[O],v+Y<=x||O===0){h=!0,b=O-1,c&&(b===-1?(c.style.maxWidth=`${x-Y}px`,c.style.boxSizing="border-box"):c.style.maxWidth="");break}}}}const{onUpdateOverflow:r}=n;h?r!==void 0&&r(!0):(r!==void 0&&r(!1),m.setAttribute(X,""))}const u=de();return ft.mount({id:"vueuc/overflow",head:!0,anchorMetaName:fe,ssr:u}),K(o),{selfRef:t,counterRef:i,sync:o}},render(){const{$slots:n}=this;return Te(this.sync),A("div",{class:"v-overflow",ref:"selfRef"},[Ee(n,"default"),n.counter?n.counter():A("span",{style:{display:"inline-block"},ref:"counterRef"}),n.tail?n.tail():null])}});function Ie(n){return n instanceof HTMLElement}function Oe(n){for(let e=0;e<n.childNodes.length;e++){const t=n.childNodes[e];if(Ie(t)&&(Ce(t)||Oe(t)))return!0}return!1}function ke(n){for(let e=n.childNodes.length-1;e>=0;e--){const t=n.childNodes[e];if(Ie(t)&&(Ce(t)||ke(t)))return!0}return!1}function Ce(n){if(!ct(n))return!1;try{n.focus({preventScroll:!0})}catch{}return document.activeElement===n}function ct(n){if(n.tabIndex>0||n.tabIndex===0&&n.getAttribute("tabIndex")!==null)return!0;if(n.getAttribute("disabled"))return!1;switch(n.nodeName){case"A":return!!n.href&&n.rel!=="ignore";case"INPUT":return n.type!=="hidden"&&n.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let j=[];const Tt=H({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(n){const e=Ne(),t=F(null),i=F(null);let o=!1,u=!1;const p=typeof document>"u"?null:document.activeElement;function g(){return j[j.length-1]===e}function a(s){var r;s.code==="Escape"&&g()&&((r=n.onEsc)===null||r===void 0||r.call(n,s))}K(()=>{U(()=>n.active,s=>{s?(x(),oe("keydown",document,a)):(q("keydown",document,a),o&&d())},{immediate:!0})}),R(()=>{q("keydown",document,a),o&&d()});function m(s){if(!u&&g()){const r=y();if(r===null||r.contains(_e(s)))return;c("first")}}function y(){const s=t.value;if(s===null)return null;let r=s;for(;r=r.nextSibling,!(r===null||r instanceof Element&&r.tagName==="DIV"););return r}function x(){var s;if(!n.disabled){if(j.push(e),n.autoFocus){const{initialFocusTo:r}=n;r===void 0?c("first"):(s=ve(r))===null||s===void 0||s.focus({preventScroll:!0})}o=!0,document.addEventListener("focus",m,!0)}}function d(){var s;if(n.disabled||(document.removeEventListener("focus",m,!0),j=j.filter(b=>b!==e),g()))return;const{finalFocusTo:r}=n;r!==void 0?(s=ve(r))===null||s===void 0||s.focus({preventScroll:!0}):n.returnFocusOnDeactivated&&p instanceof HTMLElement&&(u=!0,p.focus({preventScroll:!0}),u=!1)}function c(s){if(g()&&n.active){const r=t.value,b=i.value;if(r!==null&&b!==null){const T=y();if(T==null||T===b){u=!0,r.focus({preventScroll:!0}),u=!1;return}u=!0;const I=s==="first"?Oe(T):ke(T);u=!1,I||(u=!0,r.focus({preventScroll:!0}),u=!1)}}}function v(s){if(u)return;const r=y();r!==null&&(s.relatedTarget!==null&&r.contains(s.relatedTarget)?c("last"):c("first"))}function h(s){u||(s.relatedTarget!==null&&s.relatedTarget===t.value?c("last"):c("first"))}return{focusableStartRef:t,focusableEndRef:i,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:v,handleEndFocus:h}},render(){const{default:n}=this.$slots;if(n===void 0)return null;if(this.disabled)return n();const{active:e,focusableStyle:t}=this;return A(Me,null,[A("div",{"aria-hidden":"true",tabindex:e?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),n(),A("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:e?"0":"-1",onFocus:this.handleEndFocus})])}});export{Tt as F,xe as V,St as a,Mt as b,xt as c,$t as d,zt as e,ye as r};
