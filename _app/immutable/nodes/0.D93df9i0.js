import"../chunks/DsnmJJEf.js";import{y as b,h as g,a as p,J as O,aO as k,Z as h,ac as T,ae as j,aA as I,au as L,a2 as m,c as N,a1 as R,a4 as f,x as A,aP as C,aQ as u,e as y,z as D,aR as S,i as v,n as E,f as M}from"../chunks/qmVkqO-U.js";import{h as P}from"../chunks/B64cTtx7.js";import{s as $}from"../chunks/CZzYaBm8.js";import{s as z}from"../chunks/DliUrZRJ.js";function J(c,r,n=!1,i=!1,_=!1){var o=c,t="";b(()=>{var e=O;if(t===(t=r()??"")){g&&p();return}if(e.nodes_start!==null&&(k(e.nodes_start,e.nodes_end),e.nodes_start=e.nodes_end=null),t!==""){if(g){h.data;for(var a=p(),d=a;a!==null&&(a.nodeType!==T||a.data!=="");)d=a,a=j(a);if(a===null)throw I(),L;m(h,d),o=N(a);return}var l=t+"";n?l=`<svg>${l}</svg>`:i&&(l=`<math>${l}</math>`);var s=R(l);if((n||i)&&(s=f(s)),m(f(s),s.lastChild),n||i)for(;f(s);)o.before(f(s));else o.before(s)}})}const Y=!0,B=!0;async function H({}){return{lang:document.cookie.split("; ").find(r=>r.startsWith("lang="))?.split("=")[1]||"en"}}const K=Object.freeze(Object.defineProperty({__proto__:null,csr:B,load:H,prerender:Y},Symbol.toStringTag,{value:"Module"})),Q=globalThis.__sveltekit_jg2u42.env,w={google_analytics_id:Q.PUBLIC_ANALYTICS_ID};var U=S(M('<meta charset="utf-8"/> <script async><\/script> <!> <meta name="viewport" content="width=device-width, initial-scale=1"/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>',1));function V(c,r){A(r,!0);var n=C();P(_=>{var o=U(),t=v(u(o),2),e=v(t,2);J(e,()=>`
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", ${JSON.stringify(w.google_analytics_id)});
  <\/script>
  `),E(8),b(()=>z(t,"src",`https://www.googletagmanager.com/gtag/js?id=${w.google_analytics_id??""}`)),y(_,o)});var i=u(n);$(i,()=>r.children),y(c,n),D()}export{V as component,K as universal};
