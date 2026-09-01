import"../chunks/DsnmJJEf.js";import{aP as w,q as g,r as h,S as O,aR as T,a5 as p,ai as S,aw as k,aJ as C,ax as D,a9 as m,x as I,a8 as L,ab as c,aH as N,z as b,A as R,B as u,aK as j,aS as A,F as v,aT as E,C as M,D as P,G as $}from"../chunks/BA3sBYwL.js";import{s as z}from"../chunks/BJEp80Tu.js";import{s as B}from"../chunks/BuTm2ZrJ.js";function H(d,l,e=!1,o=!1,f=!1){var i=d,t="";w(()=>{var s=O;if(t===(t=l()??"")){g&&h();return}if(s.nodes_start!==null&&(T(s.nodes_start,s.nodes_end),s.nodes_start=s.nodes_end=null),t!==""){if(g){p.data;for(var a=h(),_=a;a!==null&&(a.nodeType!==S||a.data!=="");)_=a,a=k(a);if(a===null)throw C(),D;m(p,_),i=I(a);return}var n=t+"";e?n=`<svg>${n}</svg>`:o&&(n=`<math>${n}</math>`);var r=L(n);if((e||o)&&(r=c(r)),m(c(r),r.lastChild),e||o)for(;c(r);)i.before(c(r));else i.before(r)}})}const J=!0,Y=!0,W=Object.freeze(Object.defineProperty({__proto__:null,csr:Y,prerender:J},Symbol.toStringTag,{value:"Module"})),q=globalThis.__sveltekit_10xgceu.env,y={google_analytics_id:q.PUBLIC_ANALYTICS_ID};var F=A(b('<meta charset="utf-8"/> <script async><\/script> <!> <meta name="viewport" content="width=device-width, initial-scale=1"/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>',1)),G=b('<div class="font-sans antialiased"><!></div>');function X(d,l){N(l,!0);var e=G();R(f=>{var i=F(),t=v(E(i),2),s=v(t,2);H(s,()=>`
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", ${JSON.stringify(y.google_analytics_id)});
  <\/script>
  `),M(8),w(()=>B(t,"src",`https://www.googletagmanager.com/gtag/js?id=${y.google_analytics_id??""}`)),u(f,i)});var o=P(e);z(o,()=>l.children),$(e),u(d,e),j()}export{X as component,W as universal};
