import{d as p,z as m,o as c,b as f,e as n,f as _,h as v,c as h,k as g,q as $,s as k,B as i}from"../modules/vue-BoRon-WM.js";import{u as d,f as x}from"./context-CEhFzup4.js";import"../index-DciMdwpn.js";import"../modules/shiki-DuDioCMK.js";function l(e){return e.startsWith("/")?"/coding-with-ai"+e.slice(1):e}function C(e,s=!1){const o=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?s?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const w={class:"my-auto w-full"},y=p({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){d();const s=e,o=m(()=>C(s.background,!0));return(t,r)=>(c(),f("div",{class:"slidev-layout cover text-center",style:v(o.value)},[n("div",w,[_(t.$slots,"default")])],4))}}),R={__name:"coding-with-ai.md__slidev_1",setup(e){const{$slidev:s,$nav:o,$clicksContext:t,$clicks:r,$page:B,$renderContext:b,$frontmatter:u}=d();return t.setup(),(z,a)=>(c(),h(y,$(k(i(x)(i(u),0))),{default:g(()=>a[0]||(a[0]=[n("h1",null,"AI编码体验",-1),n("p",null,"Coding with Copilot",-1)])),_:1},16))}};export{R as default};