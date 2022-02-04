"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("styled-components"),t=require("focus-trap-react"),r=require("react"),o=require("what-input"),n=require("react-div-100vh"),i=require("react-responsive");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(e),s=l(t),c=l(r),d=l(o);const u=a.default.div`
  position: relative;

  ${({height:e})=>e&&`height: ${e}`};
`,f=a.default.div`
  position: absolute;

  ${({top:e})=>e&&`top: ${e}`};

  ${({right:e})=>e&&`right: ${e}`};

  ${({bottom:e})=>e&&`bottom: ${e}`};

  ${({left:e})=>e&&`left: ${e}`};
`,p=r.createContext({}),x=()=>r.useContext(p),m={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",spanFontSize:"1.6rem",anchorFontSize:"1.6rem",drawerTransition:"transform 450ms cubic-bezier(0.23, 1, 0.32, 1)",drawerZIndex:"5",fullBleedSpace:"-2rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},$=(e,t)=>t.hasOwnProperty(e)?t[e]:m[e],h=a.default.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({position:e})=>"left"===e?"left: 0;":"right: 0;"};

  ${({overrides:e,top:t,transform:r})=>`\n      top: ${t};\n      transform: translateX(${r});\n      z-index: ${$("drawerZIndex",e)};\n      transition: ${$("drawerTransition",e)};\n    `}

  ${({open:e})=>e&&"\n        visibility: visible;\n        transform: translateX(0);\n        position: fixed;\n      "};
`,v=a.default.div`
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
`,g=a.default.div`
  display: flex;

  ${({justify:e})=>e&&`justify-content: ${e}`};

  ${({items:e})=>e&&`align-items: ${e}`};

  ${({direction:e})=>e&&`flex-direction: ${e}`};

  ${({wrap:e})=>e&&`flex-wrap: ${e}`};

  ${({height:e})=>e&&`height: ${e}`};

  ${({width:e})=>e&&`width: ${e}`};
`,A=({color:t="#000",textDecoration:r="underline",textDecorationHover:o="underline"}={})=>e.css`
    ${r&&t&&o&&`\n      color: ${t};\n      text-decoration-color: ${t};\n      text-decoration: ${r};\n\n      &:visited {\n        text-decoration: ${r};\n        color: ${t};\n      }\n\n      &:active {\n        text-decoration: ${r};\n        color: ${t};\n      }\n\n      &:hover {\n        text-decoration: ${o};\n        color: ${t};\n      }\n    `};
  `,F=(e,t,r="#000",o="left")=>e&&r&&o&&`\n      text-align: ${o};\n      color: ${r};\n      font-family: ${$("fontFamily",e)};\n      font-size: ${$(t,e)};\n    `,b=a.default.h1`
  ${({overrides:e,color:t,textAlign:r})=>F(e,"headlineOneFontSize",t,r)}
`,w=a.default.h2`
  ${({overrides:e,color:t,textAlign:r})=>F(e,"headlineTwoFontSize",t,r)}
`,S=a.default.h3`
  ${({overrides:e,color:t,textAlign:r})=>F(e,"headlineThreeFontSize",t,r)}
`,z=a.default.h4`
  ${({overrides:e,color:t,textAlign:r})=>F(e,"headlineFourFontSize",t,r)}
`,y=a.default.h5`
  ${({overrides:e,color:t,textAlign:r})=>F(e,"headlineFiveFontSize",t,r)}
`,N=a.default.h6`
  ${({overrides:e,color:t,textAlign:r})=>F(e,"headlineSixFontSize",t,r)}
`,k=a.default.p`
  ${({overrides:e,color:t,textAlign:r})=>F(e,"paragraphFontSize",t,r)}

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`,E=a.default.span`
  ${({overrides:e,color:t,textAlign:r})=>F(e,"spanFontSize",t,r)}
`,H=a.default.a`
  cursor: pointer;

  ${({overrides:e,textAlign:t})=>F(e,"anchorFontSize",void 0,t)}

  ${({color:e,textDecoration:t,textDecorationHover:r})=>A({color:e,textDecoration:t,textDecorationHover:r})}
`;exports.A=({textAlign:e,children:t,className:r,color:o,textDecoration:n,textDecorationHover:i})=>c.default.createElement(H,{textDecoration:n,textDecorationHover:i,color:o,className:r,textAlign:e,overrides:x()},t),exports.AbsoluteContainer=f,exports.Drawer=({clickHandler:e,drawerOpen:t,activeTrap:o,unmountTrap:n,Interior:i,config:l})=>{const a=r.useRef(),{id:u,top:f,position:p,transform:m}=l;r.useEffect((()=>{"keyboard"===d.default.ask()&&t&&a.current.focus()}),[t]);const $=`#${u}`;return c.default.createElement(h,{open:t,overrides:x(),transform:m,position:p,top:f},o&&c.default.createElement(s.default,{focusTrapOptions:{fallbackFocus:$,allowOutsideClick:!0,onDeactivate:n}},c.default.createElement(i,{closeButtonRef:a,handleClick:()=>{e(),n()}})))},exports.DrawerTrigger=({Trigger:e,mountTrap:t,clickHandler:r})=>c.default.createElement(e,{handleClick:()=>{r(),t()}}),exports.DrawerUnderlay=({drawerOpen:e,clickHandler:t,unmountTrap:r})=>c.default.createElement(v,{open:e,onClick:()=>{t(),r()}}),exports.FlexContainer=g,exports.FullScreenHeight=({children:e,unsetBreakpoint:t,justify:r,items:o,direction:l,offset:a,className:s})=>{const d=n.use100vh(),u=$("breakpoints",x());let f;const p=i.useMediaQuery({query:`(min-width: ${u[t]})`});f="none"!==t?p:"none";return c.default.createElement(g,{justify:r,offset:0,items:o,direction:l,className:s,height:((e,t,r)=>"none"===e||e?t-r+"px":"auto")(f,d,a)},e)},exports.H1=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(b,{className:r,color:o,textAlign:e,overrides:x()},t),exports.H2=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(w,{className:r,textAlign:e,color:o,overrides:x()},t),exports.H3=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(S,{className:r,textAlign:e,color:o,overrides:x()},t),exports.H4=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(z,{className:r,textAlign:e,color:o,overrides:x()},t),exports.H5=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(y,{color:o,className:r,textAlign:e,overrides:x()},t),exports.H6=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(N,{color:o,className:r,textAlign:e,overrides:x()},t),exports.P=({textAlign:e,lowercase:t,children:r,className:o,color:n})=>c.default.createElement(k,{color:n,className:o,textAlign:e,lowercase:t,overrides:x()},r),exports.ReactYanOverrideProvider=({children:e,value:t})=>c.default.createElement(p.Provider,{value:t},e),exports.RelativeContainer=u,exports.Span=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(E,{color:o,className:r,textAlign:e,overrides:x()},t),exports.anchorColor=A,exports.fullBleed=({top:t=!1,right:r=!1,bottom:o=!1,left:n=!1,space:i="1.6rem"}={})=>e.css`
    ${t&&`margin-top: ${i}`};
    ${r&&`margin-right: ${i}`};
    ${o&&`margin-bottom: ${i}`};
    ${n&&`margin-left: ${i}`};
  `,exports.useOverrideContext=x;
