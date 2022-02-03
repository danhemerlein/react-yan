"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("focus-trap-react"),t=require("react"),r=require("styled-components"),o=require("what-input"),n=require("react-div-100vh"),i=require("react-responsive");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(e),c=l(t),s=l(r),d=l(o);const $=t.createContext({}),x=()=>t.useContext($),u={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",spanFontSize:"1.6rem",anchorFontSize:"1.6rem",drawerTransition:"transform 450ms cubic-bezier(0.23, 1, 0.32, 1)",drawerZIndex:"5",fullBleedSpace:"-2rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},f=(e,t)=>t.hasOwnProperty(e)?t[e]:u[e],p=s.default.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({position:e})=>"left"===e?"left: 0;":"right: 0;"};

  ${({overrides:e,top:t,transform:r})=>`\n      top: ${t};\n      transform: translateX(${r});\n      z-index: ${f("drawerZIndex",e)};\n      transition: ${f("drawerTransition",e)};\n    `}

  ${({open:e})=>e&&"\n        visibility: visible;\n        transform: translateX(0);\n        position: fixed;\n      "};
`,m=s.default.div`
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
`,g=s.default.div`
  display: flex;

  ${({justify:e})=>e&&`justify-content: ${e}`};

  ${({items:e})=>e&&`align-items: ${e}`};

  ${({direction:e})=>e&&`flex-direction: ${e}`};

  ${({wrap:e})=>e&&`flex-wrap: ${e}`};

  ${({height:e})=>e&&`height: ${e}`};

  ${({width:e})=>e&&`width: ${e}`};
`,h=({color:e="#FFF",textDecoration:t="none",textDecorationHover:o="underline"}={})=>r.css`
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
      ${o&&`text-decoration: ${o}`};

      color: ${e};
    }
  `,v=(e,t)=>e&&`\n      font-family: ${f("fontFamily",e)};\n      font-size: ${f(t,e)};\n    `,F=s.default.h1`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"headlineOneFontSize")}`}
`,A=s.default.h2`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"headlineTwoFontSize")}`}
`,w=s.default.h3`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"headlineThreeFontSize")}`}
`,z=s.default.h4`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"headlineFourFontSize")}`}
`,S=s.default.h5`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"headlineFiveFontSize")}`}
`,b=s.default.h6`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"headlineSixFontSize")}`}
`,y=s.default.p`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"paragraphFontSize")}`}

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`,k=s.default.span`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"spanFontSize")}`}
`,N=s.default.a`
  ${({textAlign:e})=>e&&`\n      text-align: ${e};\n    `};

  ${h({color:({color:e})=>e,textDecoration:({textDecoration:e})=>e,textDecorationHover:({textDecorationHover:e})=>e})};

  ${({overrides:e})=>`\n      ${v(e,"anchorFontFize")}\n    `}
`;exports.A=({textAlign:e,children:t,className:r,color:o,textDecoration:n,textDecorationHover:i})=>c.default.createElement(N,{textDecoration:n,textDecorationHover:i,color:o,className:r,textAlign:e,overrides:x()},t),exports.Drawer=({clickHandler:e,drawerOpen:r,activeTrap:o,unmountTrap:n,Interior:i,config:l})=>{const s=t.useRef(),{id:$,top:u,position:f,transform:m}=l;t.useEffect((()=>{"keyboard"===d.default.ask()&&r&&s.current.focus()}),[r]);const g=`#${$}`;return c.default.createElement(p,{open:r,overrides:x(),transform:m,position:f,top:u},o&&c.default.createElement(a.default,{focusTrapOptions:{fallbackFocus:g,allowOutsideClick:!0,onDeactivate:n}},c.default.createElement(i,{closeButtonRef:s,handleClick:()=>{e(),n()}})))},exports.DrawerTrigger=({Trigger:e,mountTrap:t,clickHandler:r})=>c.default.createElement(e,{handleClick:()=>{r(),t()}}),exports.DrawerUnderlay=({drawerOpen:e,clickHandler:t,unmountTrap:r})=>c.default.createElement(m,{open:e,onClick:()=>{t(),r()}}),exports.FlexContainer=g,exports.FullScreenHeight=({children:e,unsetBreakpoint:t,justify:r,items:o,direction:l,offset:a})=>{const s=n.use100vh(),d=f("breakpoints",x());let $;const u=i.useMediaQuery({query:`(min-width: ${d[t]})`});$="none"!==t?u:"none";return c.default.createElement(g,{justify:r,items:o,direction:l,height:((e,t,r)=>"none"===e||e?t-r+"px":"auto")($,s,a)},e)},exports.H1=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(F,{className:r,color:o,textAlign:e,overrides:x()},t),exports.H2=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(A,{className:r,textAlign:e,color:o,overrides:x()},t),exports.H3=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(w,{className:r,textAlign:e,color:o,overrides:x()},t),exports.H4=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(z,{className:r,textAlign:e,color:o,overrides:x()},t),exports.H5=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(S,{color:o,className:r,textAlign:e,overrides:x()},t),exports.H6=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(b,{color:o,className:r,textAlign:e,overrides:x()},t),exports.P=({textAlign:e,lowercase:t,children:r,className:o,color:n})=>c.default.createElement(y,{color:n,className:o,textAlign:e,lowercase:t,overrides:x()},r),exports.ReactYanOverrideProvider=({children:e,value:t})=>c.default.createElement($.Provider,{value:t},e),exports.Span=({textAlign:e,children:t,className:r,color:o})=>c.default.createElement(k,{color:o,className:r,textAlign:e,overrides:x()},t),exports.anchorColor=h,exports.fullBleed=({top:e=!1,right:t=!1,bottom:o=!1,left:n=!1,space:i}={})=>r.css`
    ${e&&`margin-top: ${i}`};
    ${t&&`margin-right: ${i}`};
    ${o&&`margin-bottom: ${i}`};
    ${n&&`margin-left: ${i}`};
  `,exports.useOverrideContext=x;
