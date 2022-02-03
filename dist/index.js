"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("focus-trap-react"),t=require("react"),r=require("styled-components"),n=require("what-input"),o=require("react-div-100vh"),i=require("react-responsive");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(e),s=l(t),c=l(r),d=l(n);const $=t.createContext({}),u=()=>t.useContext($),f={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",drawerTransition:"transform 450ms cubic-bezier(0.23, 1, 0.32, 1)",drawerZIndex:"5",fullBleedSpace:"-2rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},p=(e,t)=>t.hasOwnProperty(e)?t[e]:f[e],x=c.default.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({position:e})=>"left"===e?"left: 0;":"right: 0;"};

  ${({overrides:e,top:t,transform:r})=>`\n      top: ${t};\n      transform: translateX(${r});\n      z-index: ${p("drawerZIndex",e)};\n      transition: ${p("drawerTransition",e)};\n    `}

  ${({open:e})=>e&&"\n        visibility: visible;\n        transform: translateX(0);\n        position: fixed;\n      "};
`,m=c.default.div`
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
`,h=c.default.div`
  display: flex;

  ${({justify:e})=>e&&`justify-content: ${e}`};

  ${({items:e})=>e&&`align-items: ${e}`};

  ${({direction:e})=>e&&`flex-direction: ${e}`};

  ${({wrap:e})=>e&&`flex-wrap: ${e}`};

  ${({height:e})=>e&&`height: ${e}`};

  ${({width:e})=>e&&`width: ${e}`};
`,g=(e,t)=>e&&`\n      font-family: ${p("fontFamily",e)};\n      font-size: ${p(t,e)};\n    `,v=c.default.h1`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${g(e,"headlineOneFontSize")}\n    `}
`,F=c.default.h2`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${g(e,"headlineTwoFontSize")}\n    `}
`,w=c.default.h3`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${g(e,"headlineThreeFontSize")}\n    `}
`,b=c.default.h4`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${g(e,"headlineFourFontSize")}\n    `}
`,y=c.default.h5`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${g(e,"headlineFiveFontSize")}\n    `}
`,A=c.default.h6`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${g(e,"headlineSixFontSize")}\n    `}
`,k=c.default.p`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${g(e,"paragraphFontSize")}\n    `}

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`;exports.Drawer=({clickHandler:e,drawerOpen:r,activeTrap:n,unmountTrap:o,Interior:i,config:l})=>{const c=t.useRef(),{id:$,top:f,position:p,transform:m}=l;t.useEffect((()=>{"keyboard"===d.default.ask()&&r&&c.current.focus()}),[r]);const h=`#${$}`;return s.default.createElement(x,{open:r,overrides:u(),transform:m,position:p,top:f},n&&s.default.createElement(a.default,{focusTrapOptions:{fallbackFocus:h,allowOutsideClick:!0,onDeactivate:o}},s.default.createElement(i,{closeButtonRef:c,handleClick:()=>{e(),o()}})))},exports.DrawerTrigger=({Trigger:e,mountTrap:t,clickHandler:r})=>s.default.createElement(e,{handleClick:()=>{r(),t()}}),exports.DrawerUnderlay=({drawerOpen:e,clickHandler:t,unmountTrap:r})=>s.default.createElement(m,{open:e,onClick:()=>{t(),r()}}),exports.FlexContainer=h,exports.FullScreenHeight=({children:e,unsetBreakpoint:t,justify:r,items:n,direction:l,offset:a})=>{const c=o.use100vh(),d=p("breakpoints",u());let $;const f=i.useMediaQuery({query:`(min-width: ${d[t]})`});$="none"!==t?f:"none";return s.default.createElement(h,{justify:r,items:n,direction:l,height:((e,t,r)=>"none"===e||e?t-r+"px":"auto")($,c,a)},e)},exports.H1=({textAlign:e,children:t,className:r,color:n})=>s.default.createElement(v,{className:r,color:n,textAlign:e,overrides:u()},t),exports.H2=({textAlign:e,children:t,className:r,color:n})=>s.default.createElement(F,{className:r,textAlign:e,color:n,overrides:u()},t),exports.H3=({textAlign:e,children:t,className:r,color:n})=>s.default.createElement(w,{className:r,textAlign:e,color:n,overrides:u()},t),exports.H4=({textAlign:e,children:t,className:r,color:n})=>s.default.createElement(b,{className:r,textAlign:e,color:n,overrides:u()},t),exports.H5=({textAlign:e,children:t,className:r,color:n})=>s.default.createElement(y,{color:n,className:r,textAlign:e,overrides:u()},t),exports.H6=({textAlign:e,children:t,className:r,color:n})=>s.default.createElement(A,{color:n,className:r,textAlign:e,overrides:u()},t),exports.P=({textAlign:e,lowercase:t,children:r,className:n,color:o})=>s.default.createElement(k,{color:o,className:n,textAlign:e,lowercase:t,overrides:u()},r),exports.Paragraph=k,exports.ReactYanOverrideProvider=({children:e,overrides:t})=>s.default.createElement($.Provider,{value:t},e),exports.anchorColor=({color:e="#FFF",textDecoration:t="none",textDecorationHover:n="underline"}={})=>r.css`
    ${t&&`text-decoration: ${t}`};
    text-decoration-color: ${e};
    color: ${e};

    &:visited {
      ${t&&`text-decoration: ${t}`};
      color: ${e};
    }

    &:active {
      ${t&&`text-decoration: ${t}`};
      color: ${e};
    }

    &:hover {
      ${n&&`text-decoration: ${n}`};

      color: ${e};
    }
  `,exports.fullBleed=({top:e=!1,right:t=!1,bottom:n=!1,left:o=!1,space:i}={})=>r.css`
    ${e&&`margin-top: ${i}`};
    ${t&&`margin-right: ${i}`};
    ${n&&`margin-bottom: ${i}`};
    ${o&&`margin-left: ${i}`};
  `,exports.useOverrideContext=u;
