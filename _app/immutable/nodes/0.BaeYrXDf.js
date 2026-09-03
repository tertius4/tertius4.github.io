import"../chunks/DsnmJJEf.js";import{t as b,h as g,g as p,A as O,aO as k,T as h,ac as T,ae as A,aA as I,au as L,X as m,k as N,W as R,Z as f,p as j,aP as C,aQ as u,a as v,b as D,aR as S,s as y,n as E,f as M}from"../chunks/BuoSeif0.js";import{h as P}from"../chunks/BH1uJKPK.js";import{s as $}from"../chunks/SxKQB1hq.js";import{s as W}from"../chunks/blHhaNpA.js";function Y(c,r,n=!1,i=!1,_=!1){var o=c,t="";b(()=>{var e=O;if(t===(t=r()??"")){g&&p();return}if(e.nodes_start!==null&&(k(e.nodes_start,e.nodes_end),e.nodes_start=e.nodes_end=null),t!==""){if(g){h.data;for(var a=p(),d=a;a!==null&&(a.nodeType!==T||a.data!=="");)d=a,a=A(a);if(a===null)throw I(),L;m(h,d),o=N(a);return}var l=t+"";n?l=`<svg>${l}</svg>`:i&&(l=`<math>${l}</math>`);var s=R(l);if((n||i)&&(s=f(s)),m(f(s),s.lastChild),n||i)for(;f(s);)o.before(f(s));else o.before(s)}})}const q=!0,z=!0;async function B({}){return{lang:document.cookie.split("; ").find(r=>r.startsWith("lang="))?.split("=")[1]||"en"}}const G=Object.freeze(Object.defineProperty({__proto__:null,csr:z,load:B,prerender:q},Symbol.toStringTag,{value:"Module"})),H=globalThis.__sveltekit_1qe9655.env,w={google_analytics_id:H.PUBLIC_ANALYTICS_ID};var J=S(M('<meta charset="utf-8"/> <script async><\/script> <!> <meta name="viewport" content="width=device-width, initial-scale=1"/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>',1));function K(c,r){j(r,!0);var n=C();P(_=>{var o=J(),t=y(u(o),2),e=y(t,2);Y(e,()=>`
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", ${JSON.stringify(w.google_analytics_id)});
  <\/script>
  `),E(8),b(()=>W(t,"src",`https://www.googletagmanager.com/gtag/js?id=${w.google_analytics_id??""}`)),v(_,o)});var i=u(n);$(i,()=>r.children),v(c,n),D()}export{K as component,G as universal};
