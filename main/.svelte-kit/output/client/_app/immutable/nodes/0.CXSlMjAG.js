import"../chunks/DsnmJJEf.js";import{aP as w,q as g,r as h,S as O,aR as T,a5 as p,ai as S,aw as k,aJ as C,ax as D,a9 as m,x as I,a8 as L,ab as c,aH as N,z as b,A as R,B as v,aK as j,aS as A,F as u,aT as E,C as M,D as P,G as $}from"../chunks/BA3sBYwL.js";import{s as z}from"../chunks/BJEp80Tu.js";import{s as B}from"../chunks/BuTm2ZrJ.js";function H(f,l,t=!1,o=!1,d=!1){var i=f,e="";w(()=>{var s=O;if(e===(e=l()??"")){g&&h();return}if(s.nodes_start!==null&&(T(s.nodes_start,s.nodes_end),s.nodes_start=s.nodes_end=null),e!==""){if(g){p.data;for(var a=h(),_=a;a!==null&&(a.nodeType!==S||a.data!=="");)_=a,a=k(a);if(a===null)throw C(),D;m(p,_),i=I(a);return}var n=e+"";t?n=`<svg>${n}</svg>`:o&&(n=`<math>${n}</math>`);var r=L(n);if((t||o)&&(r=c(r)),m(c(r),r.lastChild),t||o)for(;c(r);)i.before(c(r));else i.before(r)}})}const J=!0,Y=!0,W=Object.freeze(Object.defineProperty({__proto__:null,csr:Y,prerender:J},Symbol.toStringTag,{value:"Module"})),q=globalThis.__sveltekit_1fffyvs.env,y={google_analytics_id:q.PUBLIC_ANALYTICS_ID};var F=A(b('<meta charset="utf-8"/> <script async><\/script> <!> <meta name="viewport" content="width=device-width, initial-scale=1"/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>',1)),G=b('<div class="font-sans antialiased"><!></div>');function X(f,l){N(l,!0);var t=G();R(d=>{var i=F(),e=u(E(i),2),s=u(e,2);H(s,()=>`
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", ${JSON.stringify(y.google_analytics_id)});
  <\/script>
  `),M(8),w(()=>B(e,"src",`https://www.googletagmanager.com/gtag/js?id=${y.google_analytics_id??""}`)),v(d,i)});var o=P(t);z(o,()=>l.children),$(t),v(f,t),j()}export{X as component,W as universal};
