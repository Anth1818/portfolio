import{j as o}from"./jsx-runtime.D_zvdyIk.js";import{a as e}from"./index.9MVAkNgL.js";const a=({lang:r})=>{const[s,i]=e.useState(!1);e.useEffect(()=>{const t=()=>{i(window.scrollY>200)};return window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]);const l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
          .scroll-to-top {
            z-index: 1000;
            position: fixed;
            bottom: 70px;
            right: 20px;
            background-color: #ff5e00;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: opacity 0.3s ease-in-out;
          }
          .scroll-to-top.visible {
            opacity: 1;
          }
        `}),o.jsx("button",{className:`scroll-to-top text-4xl${s?" visible":""}`,id:"scrollToTopButton",onClick:l,"aria-label":r==="es"?"Volver arriba":"Scroll to top",type:"button",children:"↑"})]})};export{a as default};
