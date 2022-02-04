"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("focus-trap-react"),t=require("react"),r=require("styled-components"),o=require("what-input"),n=require("react-div-100vh"),i=require("react-responsive");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(e),c=a(t),s=a(r),d=a(o);const x=t.createContext({}),u=()=>t.useContext(x),m={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",spanFontSize:"1.6rem",anchorFontSize:"1.6rem",drawerTransition:"transform 450ms cubic-bezier(0.23, 1, 0.32, 1)",drawerZIndex:"5",fullBleedSpace:"-2rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},p=(e,t)=>t.hasOwnProperty(e)?t[e]:m[e],f=s.default.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({position:e})=>"left"===e?"left: 0;":"right: 0;"};

  ${({overrides:e,top:t,transform:r})=>`\n      top: ${t};\n      transform: translateX(${r});\n      z-index: ${p("drawerZIndex",e)};\n      transition: ${p("drawerTransition",e)};\n    `}

  ${({open:e})=>e&&"\n        visibility: visible;\n        transform: translateX(0);\n        position: fixed;\n      "};
`,h=s.default.div`
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
`,$=s.default.div`
  display: flex;

  ${({justify:e})=>e&&`justify-content: ${e}`};

  ${({items:e})=>e&&`align-items: ${e}`};

  ${({direction:e})=>e&&`flex-direction: ${e}`};

  ${({wrap:e})=>e&&`flex-wrap: ${e}`};

  ${({height:e})=>e&&`height: ${e}`};

  ${({width:e})=>e&&`width: ${e}`};
`,v=({color:e="#000",textDecoration:t="underline",textDecorationHover:o="underline"}={})=>r.css`
    ${t&&e&&o&&`\n      color: ${e};\n      text-decoration-color: ${e};\n      text-decoration: ${t};\n\n      &:visited {\n        text-decoration: ${t};\n        color: ${e};\n      }\n\n      &:active {\n        text-decoration: ${t};\n        color: ${e};\n      }\n\n      &:hover {\n        text-decoration: ${o};\n        color: ${e};\n      }\n    `};
  `,g=(e,t,r="#000",o="left")=>e&&r&&o&&`\n      text-align: ${o};\n      color: ${r};\n      font-family: ${p("fontFamily",e)};\n      font-size: ${p(t,e)};\n    `,A=s.default.h1`
  ${({overrides:e,color:t,textAlign:r})=>g(e,"headlineOneFontSize",t,r)}
`,F=s.default.h2`
  ${({overrides:e,color:t,textAlign:r})=>g(e,"headlineTwoFontSize",t,r)}
`,w=s.default.h3`
  ${({overrides:e,color:t,textAlign:r})=>g(e,"headlineThreeFontSize",t,r)}
`,S=s.default.h4`
  ${({overrides:e,color:t,textAlign:r})=>g(e,"headlineFourFontSize",t,r)}
`,z=s.default.h5`
  ${({overrides:e,color:t,textAlign:r})=>g(e,"headlineFiveFontSize",t,r)}
`,b=s.default.h6`
  ${({overrides:e,color:t,textAlign:r})=>g(e,"headlineSixFontSize",t,r)}
`,y=s.default.p`
  ${({overrides:e,color:t,textAlign:r})=>g(e,"paragraphFontSize",t,r)}

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`,N=s.default.span`
  ${({overrides:e,color:t,textAlign:r})=>g(e,"spanFontSize",t,r)}
`,k=s.default.a`
  cursor: pointer;

  ${({overrides:e,textAlign:t})=>g(e,"anchorFontSize",void 0,t)}

  ${({color:e,textDecoration:t,textDecorationHover:r})=>v({color:e,textDecoration:t,textDecorationHover:r})}
`;exports.A=({textAlign:e,children:t,className:r,color:o,textDecoration:n,textDecorationHover:i})=>React.createElement(k,{textDecoration:n,textDecorationHover:i,color:o,className:r,textAlign:e,overrides:u()},t),exports.Drawer=({clickHandler:e,drawerOpen:r,activeTrap:o,unmountTrap:n,Interior:i,config:a})=>{const s=t.useRef(),{id:x,top:m,position:p,transform:h}=a;t.useEffect((()=>{"keyboard"===d.default.ask()&&r&&s.current.focus()}),[r]);const $=`#${x}`;return c.default.createElement(f,{open:r,overrides:u(),transform:h,position:p,top:m},o&&c.default.createElement(l.default,{focusTrapOptions:{fallbackFocus:$,allowOutsideClick:!0,onDeactivate:n}},c.default.createElement(i,{closeButtonRef:s,handleClick:()=>{e(),n()}})))},exports.DrawerTrigger=({Trigger:e,mountTrap:t,clickHandler:r})=>c.default.createElement(e,{handleClick:()=>{r(),t()}}),exports.DrawerUnderlay=({drawerOpen:e,clickHandler:t,unmountTrap:r})=>c.default.createElement(h,{open:e,onClick:()=>{t(),r()}}),exports.FlexContainer=$,exports.FullScreenHeight=({children:e,unsetBreakpoint:t,justify:r,items:o,direction:a,offset:l,className:s})=>{const d=n.use100vh(),x=p("breakpoints",u());let m;const f=i.useMediaQuery({query:`(min-width: ${x[t]})`});m="none"!==t?f:"none";return c.default.createElement($,{justify:r,offset:0,items:o,direction:a,className:s,height:((e,t,r)=>"none"===e||e?t-r+"px":"auto")(m,d,l)},e)},exports.H1=({textAlign:e,children:t,className:r,color:o})=>React.createElement(A,{className:r,color:o,textAlign:e,overrides:u()},t),exports.H2=({textAlign:e,children:t,className:r,color:o})=>React.createElement(F,{className:r,textAlign:e,color:o,overrides:u()},t),exports.H3=({textAlign:e,children:t,className:r,color:o})=>React.createElement(w,{className:r,textAlign:e,color:o,overrides:u()},t),exports.H4=({textAlign:e,children:t,className:r,color:o})=>React.createElement(S,{className:r,textAlign:e,color:o,overrides:u()},t),exports.H5=({textAlign:e,children:t,className:r,color:o})=>React.createElement(z,{color:o,className:r,textAlign:e,overrides:u()},t),exports.H6=({textAlign:e,children:t,className:r,color:o})=>React.createElement(b,{color:o,className:r,textAlign:e,overrides:u()},t),exports.P=({textAlign:e,lowercase:t,children:r,className:o,color:n})=>React.createElement(y,{color:n,className:o,textAlign:e,lowercase:t,overrides:u()},r),exports.ReactYanOverrideProvider=({children:e,value:t})=>c.default.createElement(x.Provider,{value:t},e),exports.Span=({textAlign:e,children:t,className:r,color:o})=>React.createElement(N,{color:o,className:r,textAlign:e,overrides:u()},t),exports.anchorColor=v,exports.fullBleed=({top:e=!1,right:t=!1,bottom:o=!1,left:n=!1,space:i="1.6rem"}={})=>r.css`
    ${e&&`margin-top: ${i}`};
    ${t&&`margin-right: ${i}`};
    ${o&&`margin-bottom: ${i}`};
    ${n&&`margin-left: ${i}`};
  `,exports.useOverrideContext=u;
