"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("focus-trap-react"),t=require("react"),r=require("styled-components"),n=require("what-input"),i=require("react-div-100vh"),o=require("react-responsive");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(e),d=a(t),s=a(r),c=a(n);const u=t.createContext({}),f=()=>t.useContext(u),p={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",drawerTransition:"transform 450ms cubic-bezier(0.23, 1, 0.32, 1)",drawerZIndex:"5",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},x=(e,t)=>t.hasOwnProperty(e)?t[e]:p[e],h=s.default.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({position:e})=>"left"===e?"left: 0;":"right: 0;"};

  ${({overrides:e,top:t,transform:r})=>`\n      top: ${t};\n      transform: translateX(${r});\n      z-index: ${x("drawerZIndex",e)};\n      transition: ${x("drawerTransition",e)};\n    `}

  ${({open:e})=>e&&"\n        visibility: visible;\n        transform: translateX(0);\n        position: fixed;\n      "};
`,$=s.default.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
  cursor: pointer;

  ${({open:e})=>e&&"display: block;"};
`,m=s.default.div`
  display: flex;

  ${({justify:e})=>e&&`justify-content: ${e}`};

  ${({items:e})=>e&&`align-items: ${e}`};

  ${({direction:e})=>e&&`flex-direction: ${e}`};

  ${({wrap:e})=>e&&`flex-wrap: ${e}`};

  ${({height:e})=>e&&`height: ${e}`};

  ${({width:e})=>e&&`width: ${e}`};
`,g=e=>e&&`text-align: ${e};`,v=(e,t)=>e&&`\n      font-family: ${x("fontFamily",e)};\n      font-size: ${x(t,e)};\n    `,w=s.default.h1`
  ${e=>`\n      ${g(e.textAlign)}\n      ${v(e.overrides,"headlineOneFontSize")}\n    `}
`,F=s.default.h2`
  ${e=>`\n      ${g(e.textAlign)}\n      ${v(e.overrides,"headlineTwoFontSize")}\n    `}
`,y=s.default.h3`
  ${e=>`\n      ${g(e.textAlign)}\n      ${v(e.overrides,"headlineThreeFontSize")}\n    `}
`,A=s.default.h4`
  ${e=>`\n      ${g(e.textAlign)}\n      ${v(e.overrides,"headlineFourFontSize")}\n    `}
`,b=s.default.h5`
  ${e=>`\n      ${g(e.textAlign)}\n      ${v(e.overrides,"headlineFiveFontSize")}\n    `}
`,k=s.default.h6`
  ${e=>`\n      ${g(e.textAlign)}\n      ${v(e.overrides,"headlineSixFontSize")}\n    `}
`,z=s.default.p`
  ${e=>`\n      ${g(e.textAlign)}\n      ${v(e.overrides,"paragraphFontSize")}\n    `}

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`;exports.Drawer=({clickHandler:e,drawerOpen:r,activeTrap:n,unmountTrap:i,Interior:o,config:a})=>{const s=t.useRef(),{id:u,top:p,position:x,transform:$}=a;t.useEffect((()=>{"keyboard"===c.default.ask()&&r&&s.current.focus()}),[r]);const m=`#${u}`;return d.default.createElement(h,{open:r,overrides:f(),transform:$,position:x,top:p},n&&d.default.createElement(l.default,{focusTrapOptions:{fallbackFocus:m,allowOutsideClick:!0,onDeactivate:i}},d.default.createElement(o,{closeButtonRef:s,handleClick:()=>{e(),i()}})))},exports.DrawerTrigger=({Trigger:e,mountTrap:t,clickHandler:r})=>d.default.createElement(e,{handleClick:()=>{r(),t()}}),exports.DrawerUnderlay=({drawerOpen:e,clickHandler:t,unmountTrap:r})=>d.default.createElement($,{open:e,onClick:()=>{t(),r()}}),exports.FlexContainer=m,exports.FullScreenHeight=({children:e,unsetBreakpoint:t,justify:r,items:n,direction:a,offset:l})=>{const s=i.use100vh(),c=x("breakpoints",f());let u;const p=o.useMediaQuery({query:`(min-width: ${c[t]})`});u="none"!==t?p:"none";return d.default.createElement(m,{justify:r,items:n,direction:a,height:((e,t,r)=>"none"===e||e?t-r+"px":"auto")(u,s,l)},e)},exports.H1=({textAlign:e,children:t})=>d.default.createElement(w,{textAlign:e,overrides:f()},t),exports.H2=({textAlign:e,children:t})=>d.default.createElement(F,{textAlign:e,overrides:f()},t),exports.H3=({textAlign:e,children:t})=>d.default.createElement(y,{textAlign:e,overrides:f()},t),exports.H4=({textAlign:e,children:t})=>d.default.createElement(A,{textAlign:e,overrides:f()},t),exports.H5=({textAlign:e,children:t})=>d.default.createElement(b,{textAlign:e,overrides:f()},t),exports.H6=({textAlign:e,children:t})=>d.default.createElement(k,{textAlign:e,overrides:f()},t),exports.P=({textAlign:e,lowercase:t,children:r})=>d.default.createElement(z,{textAlign:e,lowercase:t,overrides:f()},r),exports.Paragraph=z,exports.ReactYanOverrideProvider=({children:e,overrides:t})=>d.default.createElement(u.Provider,{value:t},e),exports.useOverrideContext=f;
