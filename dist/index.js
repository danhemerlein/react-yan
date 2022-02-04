"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("focus-trap-react"),t=require("react"),o=require("styled-components"),r=require("what-input"),n=require("react-div-100vh"),l=require("react-responsive");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(e),s=i(t),c=i(o),d=i(r);const $=t.createContext({}),x=()=>t.useContext($),u={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",spanFontSize:"1.6rem",anchorFontSize:"1.6rem",drawerTransition:"transform 450ms cubic-bezier(0.23, 1, 0.32, 1)",drawerZIndex:"5",fullBleedSpace:"-2rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},f=(e,t)=>(console.log(e),console.log(t),console.log(t.hasOwnProperty(e)),t.hasOwnProperty(e)?t[e]:u[e]),p=c.default.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({position:e})=>"left"===e?"left: 0;":"right: 0;"};

  ${({overrides:e,top:t,transform:o})=>`\n      top: ${t};\n      transform: translateX(${o});\n      z-index: ${f("drawerZIndex",e)};\n      transition: ${f("drawerTransition",e)};\n    `}

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
`,g=c.default.div`
  display: flex;

  ${({justify:e})=>e&&`justify-content: ${e}`};

  ${({items:e})=>e&&`align-items: ${e}`};

  ${({direction:e})=>e&&`flex-direction: ${e}`};

  ${({wrap:e})=>e&&`flex-wrap: ${e}`};

  ${({height:e})=>e&&`height: ${e}`};

  ${({width:e})=>e&&`width: ${e}`};
`,h=({color:e="#FFF",textDecoration:t="none",textDecorationHover:r="underline"}={})=>o.css`
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
      ${r&&`text-decoration: ${r}`};

      color: ${e};
    }
  `,v=(e,t)=>e&&`\n      font-family: ${f("fontFamily",e)};\n      font-size: ${f(t,e)};\n    `,F=c.default.h1`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"headlineOneFontSize")}`}
`,A=c.default.h2`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"headlineTwoFontSize")}`}
`,w=c.default.h3`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"headlineThreeFontSize")}`}
`,y=c.default.h4`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"headlineFourFontSize")}`}
`,z=c.default.h5`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"headlineFiveFontSize")}`}
`,S=c.default.h6`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"headlineSixFontSize")}`}
`,b=c.default.p`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"paragraphFontSize")}`}

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`,N=c.default.span`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${v(e,"spanFontSize")}`}
`,k=c.default.a`
  ${({textAlign:e})=>e&&`\n      text-align: ${e};\n    `};

  ${h({color:({color:e})=>e,textDecoration:({textDecoration:e})=>e,textDecorationHover:({textDecorationHover:e})=>e})};

  ${({overrides:e})=>`\n      ${v(e,"anchorFontFize")}\n    `}
`;exports.A=({textAlign:e,children:t,className:o,color:r,textDecoration:n,textDecorationHover:l})=>s.default.createElement(k,{textDecoration:n,textDecorationHover:l,color:r,className:o,textAlign:e,overrides:x()},t),exports.Drawer=({clickHandler:e,drawerOpen:o,activeTrap:r,unmountTrap:n,Interior:l,config:i})=>{const c=t.useRef(),{id:$,top:u,position:f,transform:m}=i;t.useEffect((()=>{"keyboard"===d.default.ask()&&o&&c.current.focus()}),[o]);const g=`#${$}`;return s.default.createElement(p,{open:o,overrides:x(),transform:m,position:f,top:u},r&&s.default.createElement(a.default,{focusTrapOptions:{fallbackFocus:g,allowOutsideClick:!0,onDeactivate:n}},s.default.createElement(l,{closeButtonRef:c,handleClick:()=>{e(),n()}})))},exports.DrawerTrigger=({Trigger:e,mountTrap:t,clickHandler:o})=>s.default.createElement(e,{handleClick:()=>{o(),t()}}),exports.DrawerUnderlay=({drawerOpen:e,clickHandler:t,unmountTrap:o})=>s.default.createElement(m,{open:e,onClick:()=>{t(),o()}}),exports.FlexContainer=g,exports.FullScreenHeight=({children:e,unsetBreakpoint:t,justify:o,items:r,direction:i,offset:a,className:c})=>{const d=n.use100vh();console.log(x());const $=f("breakpoints",x());let u;const p=l.useMediaQuery({query:`(min-width: ${$[t]})`});u="none"!==t?p:"none";return s.default.createElement(g,{justify:o,offset:0,items:r,direction:i,className:c,height:((e,t,o)=>"none"===e||e?t-o+"px":"auto")(u,d,a)},e)},exports.H1=({textAlign:e,children:t,className:o,color:r})=>s.default.createElement(F,{className:o,color:r,textAlign:e,overrides:x()},t),exports.H2=({textAlign:e,children:t,className:o,color:r})=>s.default.createElement(A,{className:o,textAlign:e,color:r,overrides:x()},t),exports.H3=({textAlign:e,children:t,className:o,color:r})=>s.default.createElement(w,{className:o,textAlign:e,color:r,overrides:x()},t),exports.H4=({textAlign:e,children:t,className:o,color:r})=>s.default.createElement(y,{className:o,textAlign:e,color:r,overrides:x()},t),exports.H5=({textAlign:e,children:t,className:o,color:r})=>s.default.createElement(z,{color:r,className:o,textAlign:e,overrides:x()},t),exports.H6=({textAlign:e,children:t,className:o,color:r})=>s.default.createElement(S,{color:r,className:o,textAlign:e,overrides:x()},t),exports.P=({textAlign:e,lowercase:t,children:o,className:r,color:n})=>s.default.createElement(b,{color:n,className:r,textAlign:e,lowercase:t,overrides:x()},o),exports.ReactYanOverrideProvider=({children:e,value:t})=>s.default.createElement($.Provider,{value:t},e),exports.Span=({textAlign:e,children:t,className:o,color:r})=>s.default.createElement(N,{color:r,className:o,textAlign:e,overrides:x()},t),exports.anchorColor=h,exports.fullBleed=({top:e=!1,right:t=!1,bottom:r=!1,left:n=!1,space:l}={})=>o.css`
    ${e&&`margin-top: ${l}`};
    ${t&&`margin-right: ${l}`};
    ${r&&`margin-bottom: ${l}`};
    ${n&&`margin-left: ${l}`};
  `,exports.useOverrideContext=x;
