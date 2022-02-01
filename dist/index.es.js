import e from"focus-trap-react";import n,{useContext as t,createContext as r,useRef as o,useEffect as i}from"react";import l from"styled-components";import a from"what-input";import{use100vh as s}from"react-div-100vh";import{useMediaQuery as c}from"react-responsive";const d=r({}),m=()=>t(d),$=({children:e,overrides:t})=>n.createElement(d.Provider,{value:t},e),p={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",drawerTransition:"transform 450ms cubic-bezier(0.23, 1, 0.32, 1)",drawerZIndex:"5",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},h=(e,n)=>n.hasOwnProperty(e)?n[e]:p[e],x=l.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({position:e})=>"left"===e?"left: 0;":"right: 0;"};

  ${({overrides:e,top:n,transform:t})=>`\n      top: ${n};\n      transform: translateX(${t});\n      z-index: ${h("drawerZIndex",e)};\n      transition: ${h("drawerTransition",e)};\n    `}

  ${({open:e})=>e&&"\n        visibility: visible;\n        transform: translateX(0);\n        position: fixed;\n      "};
`,g=({clickHandler:t,drawerOpen:r,activeTrap:l,unmountTrap:s,Interior:c,config:d})=>{const $=o(),{id:p,top:h,position:g,transform:f}=d;i((()=>{"keyboard"===a.ask()&&r&&$.current.focus()}),[r]);const v=`#${p}`;return n.createElement(x,{open:r,overrides:m(),transform:f,position:g,top:h},l&&n.createElement(e,{focusTrapOptions:{fallbackFocus:v,allowOutsideClick:!0,onDeactivate:s}},n.createElement(c,{closeButtonRef:$,handleClick:()=>{t(),s()}})))},f=({Trigger:e,mountTrap:t,clickHandler:r})=>n.createElement(e,{handleClick:()=>{r(),t()}}),v=l.div`
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
`,u=({drawerOpen:e,clickHandler:t,unmountTrap:r})=>n.createElement(v,{open:e,onClick:()=>{t(),r()}}),A=l.div`
  display: flex;

  ${({justify:e})=>e&&`justify-content: ${e}`};

  ${({items:e})=>e&&`align-items: ${e}`};

  ${({direction:e})=>e&&`flex-direction: ${e}`};

  ${({wrap:e})=>e&&`flex-wrap: ${e}`};

  ${({height:e})=>e&&`height: ${e}`};

  ${({width:e})=>e&&`width: ${e}`};
`,F=({children:e,unsetBreakpoint:t,justify:r,items:o,direction:i,offset:l})=>{const a=s(),d=h("breakpoints",m());let $;const p=c({query:`(min-width: ${d[t]})`});$="none"!==t?p:"none";return n.createElement(A,{justify:r,items:o,direction:i,height:((e,n,t)=>"none"===e||e?n-t+"px":"auto")($,a,l)},e)},w=(e,n)=>e&&`\n      font-family: ${h("fontFamily",e)};\n      font-size: ${h(n,e)};\n    `,k=l.h1`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${w(e,"headlineOneFontSize")}\n    `}
`,z=l.h2`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${w(e,"headlineTwoFontSize")}\n    `}
`,b=l.h3`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${w(e,"headlineThreeFontSize")}\n    `}
`,y=l.h4`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${w(e,"headlineFourFontSize")}\n    `}
`,S=l.h5`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${w(e,"headlineFiveFontSize")}\n    `}
`,E=l.h6`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${w(e,"headlineSixFontSize")}\n    `}
`,N=l.p`
  ${({textAlign:e})=>e&&`\n        text-align: ${e};\n      `};

  ${({color:e})=>e&&`\n        color: ${e};\n      `};

  ${({overrides:e})=>`\n      ${w(e,"paragraphFontSize")}\n    `}

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`,T=({textAlign:e,children:t,className:r,color:o})=>n.createElement(k,{className:r,color:o,textAlign:e,overrides:m()},t),O=({textAlign:e,children:t,className:r,color:o})=>n.createElement(z,{className:r,textAlign:e,color:o,overrides:m()},t),j=({textAlign:e,children:t,className:r,color:o})=>n.createElement(b,{className:r,textAlign:e,color:o,overrides:m()},t),C=({textAlign:e,children:t,className:r,color:o})=>n.createElement(y,{className:r,textAlign:e,color:o,overrides:m()},t),H=({textAlign:e,children:t,className:r,color:o})=>n.createElement(S,{color:o,className:r,textAlign:e,overrides:m()},t),I=({textAlign:e,children:t,className:r,color:o})=>n.createElement(E,{color:o,className:r,textAlign:e,overrides:m()},t),B=({textAlign:e,lowercase:t,children:r,className:o,color:i})=>n.createElement(N,{color:i,className:o,textAlign:e,lowercase:t,overrides:m()},r);export{g as Drawer,f as DrawerTrigger,u as DrawerUnderlay,A as FlexContainer,F as FullScreenHeight,T as H1,O as H2,j as H3,C as H4,H as H5,I as H6,B as P,N as Paragraph,$ as ReactYanOverrideProvider,m as useOverrideContext};
