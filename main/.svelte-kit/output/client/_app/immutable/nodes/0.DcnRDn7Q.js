import"../chunks/DsnmJJEf.js";import{t as b,h as g,g as p,A as O,aO as T,T as h,ac as k,ae as j,aA as A,au as I,X as m,k as L,W as N,Z as c,p as R,aP as C,aQ as u,a as v,b as D,aR as S,s as y,n as E,f as M}from"../chunks/BuoSeif0.js";import{h as P}from"../chunks/BH1uJKPK.js";import{s as $}from"../chunks/SxKQB1hq.js";import{s as Y}from"../chunks/blHhaNpA.js";function z(f,l,r=!1,n=!1,_=!1){var o=f,t="";b(()=>{var e=O;if(t===(t=l()??"")){g&&p();return}if(e.nodes_start!==null&&(T(e.nodes_start,e.nodes_end),e.nodes_start=e.nodes_end=null),t!==""){if(g){h.data;for(var a=p(),d=a;a!==null&&(a.nodeType!==k||a.data!=="");)d=a,a=j(a);if(a===null)throw A(),I;m(h,d),o=L(a);return}var i=t+"";r?i=`<svg>${i}</svg>`:n&&(i=`<math>${i}</math>`);var s=N(i);if((r||n)&&(s=c(s)),m(c(s),s.lastChild),r||n)for(;c(s);)o.before(c(s));else o.before(s)}})}const B=!0,H=!0,F=Object.freeze(Object.defineProperty({__proto__:null,csr:H,prerender:B},Symbol.toStringTag,{value:"Module"})),J=globalThis.__sveltekit_92j30.env,w={google_analytics_id:J.PUBLIC_ANALYTICS_ID};var Q=S(M('<meta charset="utf-8"/> <script async><\/script> <!> <meta name="viewport" content="width=device-width, initial-scale=1"/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>',1));function G(f,l){R(l,!0);var r=C();P(_=>{var o=Q(),t=y(u(o),2),e=y(t,2);z(e,()=>`
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", ${JSON.stringify(w.google_analytics_id)});
  <\/script>
  `),E(8),b(()=>Y(t,"src",`https://www.googletagmanager.com/gtag/js?id=${w.google_analytics_id??""}`)),v(_,o)});var n=u(r);$(n,()=>l.children),v(f,r),D()}export{G as component,F as universal};
