import e from"focus-trap-react";import t,{useContext as n,createContext as o,useRef as r,useEffect as i}from"react";import l,{css as a}from"styled-components";import c from"what-input";import{use100vh as s}from"react-div-100vh";import{useMediaQuery as d}from"react-responsive";const $=o({}),m=()=>n($),p=({children:e,overrides:n})=>t.createElement($.Provider,{value:n},e),h={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",drawerTransition:"transform 450ms cubic-bezier(0.23, 1, 0.32, 1)",drawerZIndex:"5",fullBleedSpace:"-2rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},x=(e,t)=>t.hasOwnProperty(e)?t[e]:h[e],g=l.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({position:e})=>"left"===e?"left: 0;":"right: 0;"};

  ${({overrides:e,top:t,transform:n})=>`\n      top: ${t};\n      transform: translateX(${n});\n      z-index: ${x("drawerZIndex",e)};\n      transition: ${x("drawerTransition",e)};\n    `}

  ${({open:e})=>e&&"\n        visibility: visible;\n        transform: translateX(0);\n        position: fixed;\n      "};
`,f=({clickHandler:n,drawerOpen:o,activeTrap:l,unmountTrap:a,Interior:s,config:d})=>{const $=r(),{id:p,top:h,position:x,transform:f}=d;i((()=>{"keyboard"===c.ask()&&o&&$.current.focus()}),[o]);const v=`#${p}`;return t.createElement(g,{open:o,overrides:m(),transform:f,position:x,top:h},l&&t.createElement(e,{focusTrapOptions:{fallbackFocus:v,allowOutsideClick:!0,onDeactivate:a}},t.createElement(s,{closeButtonRef:$,handleClick:()=>{n(),a()}})))},v=({Trigger:e,mountTrap:n,clickHandler:o})=>t.createElement(e,{handleClick:()=>{o(),n()}}),u=l.div`
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
`,F=({drawerOpen:e,clickHandler:n,unmountTrap:o})=>t.createElement(u,{open:e,onClick:()=>{n(),o()}}),A=l.div`
  display: flex;

  ${({justify:e})=>e&&`justify-content: ${e}`};

  ${({items:e})=>e&&`align-items: ${e}`};

  ${({direction:e})=>e&&`flex-direction: ${e}`};

  ${({wrap:e})=>e&&`flex-wrap: ${e}`};

  ${({height:e})=>e&&`height: ${e}`};

  ${({width:e})=>e&&`width: ${e}`};
`,w=({children:e,unsetBreakpoint:n,justify:o,items:r,direction:i,offset:l})=>{const a=s(),c=x("breakpoints",m());let $;const p=d({query:`(min-width: ${c[n]})`});$="none"!==n?p:"none";return t.createElement(A,{justify:o,items:r,direction:i,height:((e,t,n)=>"none"===e||e?t-n+"px":"auto")($,a,l)},e)},b=(e,t)=>e&&`\n      font-family: ${x("fontFamily",e)};\n      font-size: ${x(t,e)};\n    `,k=l.h1`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${b(e,"headlineOneFontSize")}\n    `}
`,z=l.h2`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${b(e,"headlineTwoFontSize")}\n    `}
`,y=l.h3`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${b(e,"headlineThreeFontSize")}\n    `}
`,S=l.h4`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${b(e,"headlineFourFontSize")}\n    `}
`,E=l.h5`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${b(e,"headlineFiveFontSize")}\n    `}
`,N=l.h6`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${b(e,"headlineSixFontSize")}\n    `}
`,T=l.p`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${b(e,"paragraphFontSize")}\n    `}

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`,O=({textAlign:e,children:n,className:o,color:r})=>t.createElement(k,{className:o,color:r,textAlign:e,overrides:m()},n),j=({textAlign:e,children:n,className:o,color:r})=>t.createElement(z,{className:o,textAlign:e,color:r,overrides:m()},n),C=({textAlign:e,children:n,className:o,color:r})=>t.createElement(y,{className:o,textAlign:e,color:r,overrides:m()},n),H=({textAlign:e,children:n,className:o,color:r})=>t.createElement(S,{className:o,textAlign:e,color:r,overrides:m()},n),B=({textAlign:e,children:n,className:o,color:r})=>t.createElement(E,{color:r,className:o,textAlign:e,overrides:m()},n),D=({textAlign:e,children:n,className:o,color:r})=>t.createElement(N,{color:r,className:o,textAlign:e,overrides:m()},n),I=({textAlign:e,lowercase:n,children:o,className:r,color:i})=>t.createElement(T,{color:i,className:r,textAlign:e,lowercase:n,overrides:m()},o),P=({top:e=!1,right:t=!1,bottom:n=!1,left:o=!1,space:r}={})=>a`
    ${e&&`margin-top: ${r}`};
    ${t&&`margin-right: ${r}`};
    ${n&&`margin-bottom: ${r}`};
    ${o&&`margin-left: ${r}`};
  `,X=({color:e="#FFF",textDecoration:t="none",textDecorationHover:n="underline"}={})=>a`
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
  `;export{f as Drawer,v as DrawerTrigger,F as DrawerUnderlay,A as FlexContainer,w as FullScreenHeight,O as H1,j as H2,C as H3,H as H4,B as H5,D as H6,I as P,T as Paragraph,p as ReactYanOverrideProvider,X as anchorColor,P as fullBleed,m as useOverrideContext};
