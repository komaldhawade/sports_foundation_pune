(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1041,6832],{53346:function(e,t,n){"use strict";n.d(t,{F:function(){return E}});var r=n(52322),a=n(19602),o=n(70241),i=n(5632),c=n(2784),l=n(53054),s=n(74784),u=n(53044),d=n(74133),f=n(94951),m=n(17581);let p=(0,c.forwardRef)((e,t)=>(0,r.jsx)(d.x,{as:"button",width:"".concat(45),height:"".concat(45),position:"absolute",right:{default:"0",lg:"15"},top:{default:"-45",lg:"20"},color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"sm",backgroundColor:{default:"transparent",hover:"white/20"},...e,ref:t,children:(0,r.jsx)(f.J,{as:m.Z})}));var g=n(30195);let h=()=>{let e=(0,i.useRouter)(),t=(0,l.Zk)();(0,c.useEffect)(()=>{let n=(e,n)=>{let{shallow:r}=n;r||t()};return e.events.on("routeChangeComplete",n),()=>{e.events.off("routeChangeComplete",n)}},[t,e])},b=()=>{let e=(0,l.Mr)(),t=(0,i.useRouter)(),n=(0,l.aJ)();return h(),t.beforePopState(t=>{let{as:r,options:a}=t,{shallow:o}=a;if(!o)return!0;if(n&&r.endsWith(n.as))return e(null),!0;let i=w.safeParse(r);return e(i.success?i.data:null),!1}),null},w=g.z.string().min(4).max(255).transform((e,t)=>{try{var n,r;let t=null===(r=e.split("#").shift())||void 0===r?void 0:null===(n=r.split("_").pop())||void 0===n?void 0:n.replace(".htm","");return g.z.coerce.number().parse(t).valueOf()}catch(e){return t.addIssue({code:g.z.ZodIssueCode.custom,message:"ID could not be extracted from code"}),g.z.NEVER}});var v=n(85459),y=n(43943);n(71705);let _={Prev:y.Z,Next:v.Z},k=(0,c.forwardRef)((e,t)=>{let{direction:n,...a}=e;return(0,r.jsx)(d.x,{as:"button",width:"45",height:"45",position:"absolute",top:"half",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"sm",backgroundColor:{default:"transparent",hover:"white/20"},...a,left:"Prev"===n?"15":void 0,right:"Next"===n?"15":void 0,className:"_1rmnktx0",ref:t,"data-cy":"".concat("Prev"===n?"prev":"next","-video"),children:(0,r.jsx)(f.J,{as:_[n]})})}),x=e=>{let{urlDetailGenerator:t}=e,[n,a]=(0,l.iA)(),{previousResource:o,nextResource:i}=(0,l.CY)(t);return(C(o,i),o||i)?(0,r.jsxs)(d.x,{as:"nav",display:{default:"none",lg:"block"},children:[(0,r.jsx)(k,{direction:"Prev",onClick:o,disabled:!o||n}),(0,r.jsx)(k,{direction:"Next",onClick:i,disabled:!i||n})]}):null},C=(e,t)=>{let[n]=(0,l.iA)();(0,c.useEffect)(()=>{let r=r=>{!n&&("ArrowLeft"===r.key?e&&e():"ArrowRight"===r.key&&t&&t())};return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[e,t,n])};n(39515),n(62159),n(20419);var j=(0,n(46724).c)({defaultClassName:"_btqskg6 _btqskg3 _1286nb12il _1286nb128l _1286nb14jf _1286nb14k7 _1286nb14kr _1286nb14lj _1286nb14m3 _1286nb14mv _1286nb14nf _1286nb14o7 _1286nb187s _1286nb12el _1286nb12dp _1286nb1229 _1286nb123z _1286nb11b3 _1286nb1191 _1286nb13kr",variantClassNames:{isRemoveBackgroundOnboardingEnabled:{true:"_1286nb1h _1286nb1k _1286nb17v",false:"_1286nb1g _1286nb1j"}},defaultVariants:{isRemoveBackgroundOnboardingEnabled:!1},compoundVariants:[]}),R="_1286nb11zr _1286nb11l3 _1286nb12h9 _1286nb12k1 _1286nb1279 _1286nb12a1 _1286nb11a9 _1286nb13el _1286nb146f _1286nb146w _1286nb19f _1286nb13kr",N="_1286nb19x _1286nb1i9 _1286nb1ql _1286nb1yx _1286nb12t9 _1286nb12tx _1286nb15 _1286nb19l _1286nb117l _1286nb179s _1286nb189 _1286nb191";let O=e=>{let{children:t}=e,{disableOnboarding:n}=(0,s.$q)();return(0,r.jsx)(o.aV,{className:N,onClick:n,children:(0,r.jsx)(o.VY,{className:R,onInteractOutside:e=>e.preventDefault(),children:(0,r.jsx)("div",{className:j({isRemoveBackgroundOnboardingEnabled:!0}),children:t})})})},E=e=>{let{urlDetailGenerator:t,children:n}=e,i=S(),l=A(),u=I(),{isRemoveBackgroundOnboardingEnabled:d}=(0,s.$q)();(0,a.$6)(i);let f=(0,c.useCallback)(e=>{let t=e.target;t&&"dialog"===t.getAttribute("role")&&l()},[l]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{}),(0,r.jsx)(o.fC,{open:i,onOpenChange:l,modal:!0,children:d?(0,r.jsx)(O,{children:n}):(0,r.jsx)(o.aV,{className:N,onClick:f,children:(0,r.jsxs)(o.VY,{className:R,children:[(0,r.jsx)(o.x8,{asChild:!0,children:(0,r.jsx)(p,{})}),(0,r.jsx)(x,{urlDetailGenerator:t}),(0,r.jsx)("div",{className:j(),ref:u,children:n})]})})})]})},A=()=>{let e=(0,l.Zk)(),{push:t}=(0,i.useRouter)(),n=(0,l.aJ)();return(0,c.useCallback)(()=>{if(null===n){e();return}t({pathname:n.pathname,query:n.query},n.as,{shallow:!0,scroll:!1}).then(()=>{e(),setTimeout(()=>(0,u.c1)("ssmNavigate"),500)})},[e,n,t])},S=()=>null!==(0,l.bA)(),I=()=>{let e=(0,c.useRef)(null),t=(0,l.bA)();return(0,c.useEffect)(()=>{t&&e.current&&(e.current.scrollTop=0)},[t]),e}},20722:function(e,t,n){"use strict";n.d(t,{B:function(){return m}});var r=n(52322),a=n(96308),o=n(34989),i=n(94951),c=n(61909),l=n(16490),s=n(7415),u=n(76828),d=n(53054),f=n(1867);let m=e=>{let{id:t,name:n,type:m,buttonClassName:p,labelClassName:g,preview:{width:h,height:b,url:w},showTooltip:v=!1,tooltipSide:y,inThumbnail:_=!1}=e,{t:k}=(0,s.$G)("common"),x=(0,f.z)(w,h,b),C=(0,d.Zk)(),j=(0,o.n)(),R=(0,u.fD)({event_name:_?"similar_images_thumbnail":"similar_images",file_id:t.toString(),file_name:n,content_group2:m,search_logic_applied:"similar_images"}),N=(0,r.jsxs)("button",{className:p,onClick:async e=>{e.preventDefault(),e.stopPropagation(),R(),C(),await x()},children:[(0,r.jsx)(c.T,{children:k("viewSimilar")}),(0,r.jsx)(i.J,{as:l.Z,size:"base"}),(0,r.jsx)("span",{className:g,children:k("viewSimilar")})]});return v?(0,r.jsx)(a.u,{align:"end",trigger:N,container:j.current,triggerAsChild:!0,side:y,children:k("viewSimilar")}):N}},96832:function(e,t,n){"use strict";n.r(t),n.d(t,{Seo:function(){return f}});var r=n(52322),a=n(69374),o=n(46805),i=n(97729),c=n.n(i),l=n(2784),s=n(69669),u=n(25694);let d=e=>{let{title:t,description:n,url:r,image:a,hashtags:o=[],type:i}=e;return(0,l.useMemo)(()=>{let e=a||{url:"".concat(u.p,"/meta-tags-social/og-fb-logo-en.png?w=1200"),width:1200,height:676},c="".concat(n).concat(o.length>0?" ".concat(o.map(e=>"#".concat(e)).join(" ")):"");return[{property:"og:title",content:t},{property:"og:description",content:c},{property:"og:type",content:i},{property:"og:url",content:r},{property:"og:image",content:e.url},{property:"og:image:width",content:"".concat(e.width)},{property:"og:image:height",content:"".concat(e.height)},{property:"og:image:alt",content:t},{property:"og:site_name",content:"Freepik"},{property:"fb:admins",content:"1031507953"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:site",content:"@freepik"},{property:"twitter:creator",content:"@freepik"},{property:"twitter:title",content:t},{property:"twitter:image:src",content:e.url},{property:"twitter:url",content:r},{property:"twitter:description",content:c}]},[a,n,o,t,i,r])},f=e=>{let{title:t,description:n,cdns:i,image:u,alternates:f,defaultAlternate:m,noIndex:p=!1,excludeCanonical:g=!1,replaceCanonical:h=[],hashtags:b,forceUrl:w,type:v="article"}=e,y=(0,o.ZK)(),_=(0,a.to)({withParams:!1,replacePaths:!0}),k=(0,a.to)({withQuery:!1,withParams:!1,replacePaths:!0}),x=d({title:t,description:n,url:w||_,image:u,hashtags:b,type:v}),C=(0,l.useMemo)(()=>h.reduce((e,t)=>{let{matcher:n,replace:r}=t;return e.replace(n,r)},k),[k,h]);return(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:t}),n&&(0,r.jsx)("meta",{name:"description",content:n}),s.v.map(e=>{let{rel:t,type:n,href:a,sizes:o}=e;return(0,r.jsx)("link",{rel:t,type:n,href:a,sizes:o},"".concat(t,"-").concat(n&&o?"".concat(n,"-").concat(o):n||o))}),x.map(e=>{let{property:t,content:n}=e;return(0,r.jsx)("meta",{property:t,content:n},t)}),s.m.map(e=>{let{rel:t,href:n,crossOrigin:a}=e;return(0,r.jsx)("link",{rel:t,href:n,crossOrigin:a},"".concat(t,"-").concat(n,"-").concat(a))}),null==i?void 0:i.map(e=>(0,r.jsx)("link",{rel:"dns-prefetch",href:e},e)),(0,r.jsx)("meta",{name:"p:domain_verify",content:"fdda3a988da750af54ad90466dd90119"}),(0,r.jsx)("meta",{name:"facebook-domain-verification",content:"3oh58risl8zubokve93o200pvyihj0"}),(0,r.jsx)("meta",{name:"robots",content:"max-image-preview:large"}),(0,r.jsx)("meta",{name:"lang",content:y}),p&&(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow, noarchive"}),!g&&(0,r.jsx)("link",{rel:"canonical",href:w||C}),f&&f.map(e=>{let{href:t,lang:n}=e;return(0,r.jsx)("link",{rel:"alternate",hrefLang:n,href:t},n)}),m&&(0,r.jsx)("link",{rel:"alternate",hrefLang:"x-default",href:m}),"en"===y&&(0,r.jsx)("link",{rel:"manifest",href:"/manifest.json"})]})}},35605:function(e,t,n){"use strict";n.d(t,{f:function(){return i},r:function(){return c}});var r=n(52322),a=n(2784);let o=(0,a.createContext)(null),i=e=>{let{children:t,shouldTrackingLog:n}=e,i=(0,a.useMemo)(()=>({shouldTrackingLog:n}),[n]);return(0,r.jsx)(o.Provider,{value:i,children:t})},c=()=>(0,a.useContext)(o)||{shouldTrackingLog:!0}},9268:function(e,t,n){"use strict";n.d(t,{H:function(){return a}});let r=e=>{let{resource:t,file:n,option:r,size:a,action:o}=e,i=new URLSearchParams;return i.set("resource","".concat(t)),n&&r?(i.set("file",n),i.set("option","".concat(r))):a&&i.set("size","".concat(a)),o&&i.set("action",o),i.toString()},a=async e=>{let t=r(e),n=await fetch("/api/regular/download?".concat(t));return n.ok?{success:!0,data:await n.json()}:429===n.status?{success:!1,data:"DOWNLOAD_LIMIT_REACHED",metadata:"/download-limit"}:401===n.status||403===n.status||405===n.status?{success:!1,data:"AUTHENTICATION_ERROR"}:404===n.status?{success:!1,data:"NOT_FOUND"}:{success:!1,data:"UNKNOWN_ERROR"}}},38613:function(e,t,n){"use strict";n.d(t,{iJ:function(){return j},Zd:function(){return N},tS:function(){return M}});var r=n(2784),a=n(76828),o=n(92570),i=n(92592),c=n(42155),l=n(71784);let s=(e,t)=>t||("photo"===e?"jpg":"zip");var u=n(42433),d=n(35605),f=n(9268),m=n(33554),p=n(48532),g=n(72302),h=n(21805),b=n(30195),w=n(43900);let v=b.z.enum(["download","copy","edit","prompt"]);b.z.object({resource:b.z.coerce.number(),file:w.ru.optional(),option:b.z.coerce.number().optional(),size:b.z.coerce.number().optional(),action:v.optional()}),b.z.object({data:b.z.object({filename:b.z.string(),url:b.z.string(),prompt:b.z.string().optional()})}).transform(e=>{let{data:t}=e;return t});let y=b.z.array(b.z.string()),_=new Date(new Date().getTime()+48e4),k=h.Z.withConverter({write:e=>e}),x=e=>{try{let t=k.get(e);if(!t)return[];return y.parse(JSON.parse(t))}catch(e){return[]}},C=()=>{let e=(0,g.I)(),t=(0,p.b)();return(0,r.useCallback)(n=>{if(!e)return;let r="".concat("ck_items_").concat(e),a=x(r),o="".concat(n);if(!a.includes(o)){let e=JSON.stringify([...a,o]);k.set(r,e,{path:"/",domain:t,expires:_})}},[e,t])},j=e=>{let{resource:t,file:n,action:p="download",location:g="resource_detail",option:h,size:b}=e,{id:w,name:v,author:y,premium:_,regularType:k,isAIGenerated:x}=t,[j,R]=(0,r.useState)(!1),{isUserWinback:N,showWinbackModal:O}=(0,i.lK)(),{showAttribution:E}=(0,u.tc)(),A=C(),S=(0,m.b)(),I=(0,c.mS)(),{shouldTrackingLog:P}=(0,d.r)(),{showDeviceBlockedModal:z,isDeviceBlocked:M}=(0,o.q)(),T=(0,a.TH)({file_extension:s(k,n),file_name:v,file_id:w,license:_?"premium":"free",resolution:b?l.w8[b]:"original",style:"na",author_name:y.name,category:x?"ai_image":k,action:"prompt"===p?"view_prompt":p,location:g});return{handleDownload:(0,r.useCallback)(async()=>{if(M){z();return}if(N){O();return}R(!0);let e=await (0,f.H)({resource:w,size:b?2e3:void 0,action:p,file:n,option:h});if(e.success)return"prompt"!==p&&E&&E(),R(!1),A(w),P&&I({resourceId:w,isResourcePremium:_,resourceType:k,downloadType:p}),T(),e.data;"prompt"!==p&&S(e),R(!1)},[M,N,w,b,p,n,h,S,z,O,E,A,P,T,I,_,k]),isDownloading:j}};var R=n(25720);let N=e=>{let{isDownloading:t,handleDownload:n}=j(e),a=(0,R.J)();return{isDownloading:t,onClick:(0,r.useCallback)(async e=>{e.preventDefault();let t=e.currentTarget;if(!t)return;let r=await n();r&&(r.filename&&(t.download=r.filename),t.href=r.url,t.click(),a())},[n,a])}};var O=n(18460),E=n(20037),A=n(15721),S=n(7415),I=n(22237),P=n(85074);let z=(e,t)=>{let n=document.createElement("a");t&&(n.download=t),n.href=e,n.click(),setTimeout(function(){n.remove()},200)},M=()=>{let{t:e}=(0,S.$G)(["detail","common"]),[t,n]=(0,r.useState)(!1),{setToast:a}=(0,P.p)(),{setConfirm:o}=(0,I.N)(),i=(0,r.useCallback)(async t=>{try{(0,A.C)()||a({type:"danger",message:e("clipboardNotSupported")}),n(!0),await navigator.clipboard.write([t]),a({type:"success",title:e("detail:copyImageClipboard"),message:e("common:copiedsuccessfully"),testId:"notification-copied-successfully"})}catch(e){a()}finally{n(!1)}},[a,e]),c=(0,r.useCallback)(async(e,t,n,r,a,c)=>{let l="clipboard"===r,s=l?e.naturalWidth:t,u=l?e.naturalHeight:n,d=document.createElement("canvas");d.width=s,d.height=u;let f=d.getContext("2d");f&&(f.drawImage(e,0,0,s,u),d.toBlob(async e=>{let t;if(e){if(l){if((0,E.gn)()||O.G){t=new ClipboardItem({[e.type]:Promise.resolve(e)}),o(()=>{i(t)});return}i(t=new ClipboardItem({[e.type]:e}))}else{let t=window.URL.createObjectURL(e);z(t,c),window.URL.revokeObjectURL(t)}}},"image/".concat(a),1))},[i,o]);return{downloadImageSize:(0,r.useCallback)(async e=>{let{url:t,filename:n,width:r,height:o}=e;try{let e=new Image;e.src=t,e.crossOrigin="Anonymous",e.onload=()=>{c(e,r,o,"download","jpeg",n)},e.onerror=()=>a()}catch(e){a()}},[c,a]),downloadCopyImageToClipboard:(0,r.useCallback)(async e=>{let{url:t,width:r,height:o}=e;try{n(!0);let e=new Image;e.src=t,e.crossOrigin="Anonymous",e.onload=()=>{c(e,r,o,"clipboard","png")},e.onerror=()=>{n(!1),a()}}catch(e){n(!1),a()}},[a,c]),isCopying:t}}},33554:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var r=n(7415),a=n(2784),o=n(85074);let i=()=>{let{t:e}=(0,r.$G)("error"),{setToast:t}=(0,o.p)();return(0,a.useCallback)(n=>{if("DOWNLOAD_LIMIT_REACHED"===n.data&&"metadata"in n){window.location.href=n.metadata;return}if("AUTHENTICATION_ERROR"===n.data){window.location.href="/oauth-logout";return}"NOT_FOUND"===n.data&&t({type:"danger",message:e("notFound")}),"UNKNOWN_ERROR"===n.data&&t({type:"danger",message:e("unknown")})},[t,e])}},3949:function(e,t,n){"use strict";n.d(t,{P:function(){return r}});let r=(0,n(2784).createContext)(null)},12276:function(e,t,n){"use strict";n.d(t,{cB:function(){return l},ql:function(){return s.q}});var r=n(3949),a=n(52322),o=n(5632),i=n(2784),c=n(53054);let l=e=>{let{children:t}=e,{asPath:n}=(0,o.useRouter)(),[l,s]=(0,i.useState)("original"),[u,d]=(0,i.useState)(!0),[f,m]=(0,i.useState)(!1),[p,g]=(0,i.useState)(!1),[h,b]=(0,c.iA)(),[w,v]=(0,i.useState)(),y=(0,i.useMemo)(()=>({imagePreviewMode:l,setImagePreviewMode:s,isRemoveBackgroundLoading:f,setIsRemoveBackgroundLoading:m,isRemoveBackgroundActive:"transparent"===l,removeBackgroundAnimationEnd:u,setRemoveBackgroundAnimationEnd:d,forceRemoveBackgroundButtonTooltip:p,setForceRemoveBackgroundButtonTooltip:g,imageWithoutBackgroundDimensions:w,setImageWithoutBackgroundDimensions:v}),[p,l,w,f,u]);return(0,i.useEffect)(()=>{s("original"),d(!0)},[n]),(0,i.useEffect)(()=>{b(f)},[f,b]),(0,a.jsx)(r.P.Provider,{value:y,children:t})};var s=n(496)},496:function(e,t,n){"use strict";n.d(t,{q:function(){return o}});var r=n(2784),a=n(3949);let o=()=>{let e=(0,r.useContext)(a.P);if(null===e)throw Error("useRemoveBackgroundState must be used within a DetailRemoveBackgroundProvider");return e}},49361:function(e,t,n){"use strict";n.d(t,{MF:function(){return c},QC:function(){return l},_R:function(){return r},d2:function(){return i},jR:function(){return o},wj:function(){return a}});let r=2e3,a=15,o="REMOVE_BACKGROUND_ONBOARDING",i=new Date(2024,4,13,12,0,0),c=["photo"],l="PNG"},32365:function(e,t,n){"use strict";n.d(t,{X:function(){return r}});let r=async(e,t)=>{if(!e)return;let n=await fetch("/api/ai/remove-background-check?uuid=".concat(e).concat(t?"&isLastCall=1":""));if(200!==n.status)return null;let{image_url:r}=await n.json();return r}},1691:function(e,t,n){"use strict";n.d(t,{Ux:function(){return o},A8:function(){return S},CA:function(){return I},$q:function(){return P},A0:function(){return M}});var r=n(67298),a=n(49361);let o=()=>{let{type:e}=(0,r.ph)();return a.MF.includes(e)};var i=n(9691),c=n(2784),l=n(53476),s=n(496),u=n(28019),d=n(25720),f=n(74923),m=n(12276);let p=()=>{let{setForceRemoveBackgroundButtonTooltip:e,setIsRemoveBackgroundLoading:t}=(0,m.ql)(),n=(0,d.J)();return(0,c.useCallback)(async r=>{let a=(0,f.L)(),o=await fetch("/api/ai/remove-background",{method:"POST",body:JSON.stringify({resourceId:r,uuid:a})});if(429===o.status)return e(!0),t(!1),await n(),null;if(!o.ok)throw Error("Failed to remove background");return a},[e,t,n])};var g=n(32365),h=n(42433),b=n(10854);let w=(e,t)=>{let n=new Image;n.onload=function(){let e=document.createElement("canvas"),r=e.getContext("2d");if(e.width=n.width,e.height=n.height,!r){t(!1);return}r.drawImage(n,0,0);let a=r.getImageData(0,0,e.width,e.height).data;for(let e=0;e<a.length;e+=4)if(0!==a[e+3]){t(!0);return}t(!1)},n.src=e};var v=n(83145),y=n(7415),_=n(85074);let k=()=>{let{setToast:e}=(0,_.p)(),{t}=(0,y.$G)("detail");return(0,c.useCallback)(()=>{e({type:"danger",title:t("removeBackground.errorTitle"),message:t("removeBackground.errorMessage"),duration:3e3})},[e,t])};var x=n(92274);let C=()=>(0,c.useCallback)(()=>{(0,x.r)("bb6a004a-8f03-4d2a-88fb-a63499d4591a").then(e=>{e.init(),e.logEvent("remove_bg")})},[]),j=()=>{let{id:e}=(0,h.ph)(),{setIsRemoveBackgroundLoading:t,setImagePreviewMode:n}=(0,s.q)(),r=(0,l.Zl)((0,u.e)(e));return(0,c.useCallback)(e=>{t(!1),n("transparent"),e&&r(e)},[n,t,r])},R=()=>{let e=k(),t=j(),{id:n,premium:r,regularType:a}=(0,h.ph)(),{setIsRemoveBackgroundLoading:o}=(0,s.q)(),i=(0,b.mS)(),l=C();return(0,c.useCallback)(async c=>{try{let o=await (0,v.C)(c);w(o,c=>{if(!c){e();return}t(o),i({resourceId:n,isResourcePremium:r,resourceType:a,downloadType:"remove_background"}),l()})}catch(t){e(),o(!1)}},[n,r,a,o,l,i,t,e])},N=()=>{let e=(0,c.useRef)(0),t=(0,c.useRef)(null),n=R(),{setIsRemoveBackgroundLoading:r}=(0,m.ql)(),o=k(),i=(0,d.J)();return(0,c.useCallback)(c=>{t.current=setInterval(async()=>{if(e.current>=a.wj){t.current&&clearInterval(t.current),o(),r(!1);return}e.current+=1;let l=await (0,g.X)(c);l&&(n(l),await i(),t.current&&clearInterval(t.current))},a._R)},[n,r,o,i])},O=()=>{let{id:e,premium:t}=(0,r.ph)(),{setIsRemoveBackgroundLoading:n}=(0,s.q)(),a=(0,l.sJ)((0,u.e)(e)),o=k(),d=N(),f=j(),m=(0,i.PN)(),g=p(),h=(0,c.useCallback)(()=>m({event:"ga4event",event_name:"background_remove",category:"photo",file_id:e,license:t?"premium":"free",location:"resource_detail"}),[e,t,m]);return(0,c.useCallback)(async()=>{if(n(!0),a){f();return}try{h();let t=await g(e);if(!t){n(!1);return}d(t)}catch(e){o(),n(!1)}},[n,a,f,o,h,g,e,d])};var E=n(76828),A=n(38613);let S=()=>{let{id:e,name:t,author:n,premium:r,regularType:o,isAIGenerated:i,dimensions:{width:s=0,height:d=0}={}}=(0,h.ph)(),{downloadCopyImageToClipboard:f}=(0,A.tS)(),m=(0,l.sJ)((0,u.e)(e)),p=(0,E.TH)({file_extension:a.QC.toLowerCase(),file_name:t,file_id:e,license:r?"premium":"free",resolution:"original",style:"na",author_name:n.name,category:i?"ai_image":o,action:"copy",location:"resource_detail"});return(0,c.useCallback)(()=>{f({url:m,width:s,height:d}),p()},[f,d,m,p,s])},I=()=>{let e=O(),{hideAttribution:t}=(0,h.ph)(),{isRemoveBackgroundActive:n,setImagePreviewMode:r,setRemoveBackgroundAnimationEnd:a}=(0,s.q)();return(0,c.useCallback)(async()=>{a(!1),t(),n?r("original"):await e()},[t,n,e,r,a])},P=()=>{let[e,t]=(0,l.FV)(u.y),n=(0,c.useCallback)(()=>{!(Date.now()>a.d2.getTime())&&(localStorage.getItem(a.jR)||t(!0))},[t]),r=(0,c.useCallback)(()=>{localStorage.setItem(a.jR,"true"),t(!1)},[t]);return(0,c.useMemo)(()=>({isRemoveBackgroundOnboardingEnabled:e,enableOnboarding:n,disableOnboarding:r}),[r,n,e])};var z=n(63727);let M=()=>{let{id:e}=(0,r.ph)(),t=(0,l.sJ)((0,u.e)(e));return(0,l.sJ)(z.PR)&&!t}},83145:function(e,t,n){"use strict";n.d(t,{C:function(){return r}});let r=e=>fetch(e).then(e=>e.blob()).then(e=>new Promise(t=>{let n=new FileReader;n.onload=function(){t(this.result)},n.readAsDataURL(e)}))},74784:function(e,t,n){"use strict";n.d(t,{$q:function(){return o.$q},A0:function(){return o.A0},A8:function(){return o.A8},CA:function(){return o.CA},QC:function(){return r.QC},Ux:function(){return o.Ux},ql:function(){return a.ql}});var r=n(49361),a=n(12276),o=n(1691);n(28019)},28019:function(e,t,n){"use strict";n.d(t,{e:function(){return o},y:function(){return i}});var r=n(53476);let a=(0,r.cn)({key:"removeBackgroundStorageState",default:{}}),o=(0,r.CG)({key:"removeBackgroundStorage",get:e=>t=>{let{get:n}=t;return n(a)[e]},set:e=>(t,n)=>{let{set:o,get:i}=t;if(n instanceof r.nY)return;let c=i(a);o(a,{...c,[e]:n})}}),i=(0,r.cn)({key:"isRemoveBackgroundOnboardingEnabledState",default:!1})},59086:function(e,t,n){"use strict";var r=n(52322);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"m405.678 227.322-69-69A25 25 0 0 0 319 151H166c-35.841 0-65 29.159-65 65v35H66c-35.841 0-65 29.159-65 65v262c0 35.841 29.159 65 65 65h182c35.841 0 65-29.159 65-65v-35h35c35.841 0 65-29.159 65-65V245a25 25 0 0 0-7.322-17.678M263 578c0 8.271-6.729 15-15 15H66c-8.271 0-15-6.729-15-15V316c0-8.271 6.729-15 15-15h35v177c0 35.841 29.159 65 65 65h97zm85-85H166c-8.271 0-15-6.729-15-15V216c0-8.271 6.729-15 15-15h128v44c0 13.808 11.192 25 25 25h44v208c0 8.271-6.729 15-15 15"})})},16490:function(e,t,n){"use strict";var r=n(52322);t.Z=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,r.jsx)("path",{d:"M207 452a25 25 0 0 1-12.261-3.213l-231-130a25 25 0 0 1-.071-43.533l231-131a25 25 0 0 1 24.664 0l231 131a25.002 25.002 0 0 1-.071 43.533l-231 130A25 25 0 0 1 207 452M26.826 296.917 207 398.313l180.174-101.396L207 194.74z"}),(0,r.jsx)("path",{d:"M207 553a25 25 0 0 1-12.261-3.213l-231-130c-12.033-6.771-16.298-22.016-9.526-34.048 6.772-12.035 22.016-16.298 34.048-9.526L207 499.314l218.739-123.101c12.031-6.771 27.275-2.506 34.048 9.526 6.771 12.032 2.507 27.276-9.526 34.048l-231 130A25 25 0 0 1 207 553"}),(0,r.jsx)("path",{d:"M207 653a25 25 0 0 1-12.261-3.213l-231-130c-12.033-6.771-16.298-22.016-9.526-34.048 6.772-12.035 22.016-16.298 34.048-9.526L207 599.314l218.739-123.101c12.031-6.772 27.275-2.507 34.048 9.526 6.771 12.032 2.507 27.276-9.526 34.048l-231 130A25 25 0 0 1 207 653"})]})},69374:function(e,t,n){"use strict";n.d(t,{Bw:function(){return i},to:function(){return u}});var r=n(52322),a=n(2784);let o=(0,a.createContext)(e=>e),i=e=>{let{children:t,fixerUrl:n}=e;return(0,r.jsx)(o.Provider,{value:n,children:t})},c=()=>(0,a.useContext)(o);var l=n(46805),s=n(5632);let u=function(){let{withQuery:e=!0,withParams:t=!1,replacePaths:n=!1,onlyQuery:r=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{domain:o,routes:i}=(0,l.Vx)(),{asPath:u}=(0,s.useRouter)(),[d,f]=u.split("#"),[m,p]=d.split("?"),g=c();return(0,a.useMemo)(()=>{if(r)return p;let a=g(m),c=i&&n?a.split("/").reduce((e,t)=>t.length>0?"".concat(e).concat(i["/".concat(t)]||"/".concat(t)):e,""):a;return"".concat(o).concat(c).concat(e&&p?"?".concat(p):"").concat(f&&t?"#".concat(f):"")},[o,g,f,r,m,p,n,i,t,e])}},20037:function(e,t,n){"use strict";n.d(t,{gn:function(){return o},eE:function(){return a}});let r=(()=>{if("undefined"==typeof navigator)return"Unknown";let e=navigator.userAgent,t=navigator.platform,n={MacOS:["Macintosh","MacIntel","MacPPC","Mac68K"].includes(t),iOS:["iPhone","iPad","iPod"].includes(t),Windows:["Win32","Win64","Windows","WinCE"].includes(t),Android:/Android/.test(e),Linux:/Linux/.test(t),Unknown:!0};return Object.keys(n).find(e=>n[e])||"Unknown"})(),a=()=>"MacOS"===r,o=()=>"iOS"===r},71705:function(){},20419:function(){},92274:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});let r=new Map,a=async(e,t)=>{if(!e)throw Error("Missing api key");r.has(e)||r.set(e,new Promise(n=>{let r=`usersnapCallback_${Math.random().toString().slice(2)}`;if(e){let a=t?`&n=${t}`:"",o=`//widget.usersnap.com/global/load/${e}?onload=${r}${a}`;if(!window[r]){window[r]=e=>(delete window[r],n(e));let e=document.createElement("script");e.defer=!0,e.nonce=t,e.onerror=()=>{throw Error("Wrong api key or paused project")},e.src=o,document.head.appendChild(e)}}}));let n=await r.get(e);return{init:async e=>{await n.init(e)},logEvent:async e=>{await n.logEvent(e)},show:async e=>await n.show(e),hide:async e=>{await n.hide(e)},destroy:async()=>{await n.destroy()},on:(e,t)=>{n.on(e,t)},off:(e,t)=>{n.off(e,t)}}}}}]);