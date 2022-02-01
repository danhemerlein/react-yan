import e from"focus-trap-react";import t,{useContext as n,createContext as i,useRef as r,useEffect as o}from"react";import l from"styled-components";import a from"what-input";import{use100vh as s}from"react-div-100vh";import{useMediaQuery as d}from"react-responsive";const c=i({}),m=()=>n(c),p=({children:e,overrides:n})=>t.createElement(c.Provider,{value:n},e),h={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",drawerTransition:"transform 450ms cubic-bezier(0.23, 1, 0.32, 1)",drawerZIndex:"5",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},$=(e,t)=>t.hasOwnProperty(e)?t[e]:h[e],f=l.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({position:e})=>"left"===e?"left: 0;":"right: 0;"};

  ${({overrides:e,top:t,transform:n})=>`\n      top: ${t};\n      transform: translateX(${n});\n      z-index: ${$("drawerZIndex",e)};\n      transition: ${$("drawerTransition",e)};\n    `}

  ${({open:e})=>e&&"\n        visibility: visible;\n        transform: translateX(0);\n        position: fixed;\n      "};
`,x=({clickHandler:n,drawerOpen:i,activeTrap:l,unmountTrap:s,Interior:d,config:c})=>{const p=r(),{id:h,top:$,position:x,transform:g}=c;o((()=>{"keyboard"===a.ask()&&i&&p.current.focus()}),[i]);const v=`#${h}`;return t.createElement(f,{open:i,overrides:m(),transform:g,position:x,top:$},l&&t.createElement(e,{focusTrapOptions:{fallbackFocus:v,allowOutsideClick:!0,onDeactivate:s}},t.createElement(d,{closeButtonRef:p,handleClick:()=>{n(),s()}})))},g=({Trigger:e,mountTrap:n,clickHandler:i})=>t.createElement(e,{handleClick:()=>{i(),n()}}),v=l.div`
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
`,u=({drawerOpen:e,clickHandler:n,unmountTrap:i})=>t.createElement(v,{open:e,onClick:()=>{n(),i()}}),A=l.div`
  display: flex;

  ${({justify:e})=>e&&`justify-content: ${e}`};

  ${({items:e})=>e&&`align-items: ${e}`};

  ${({direction:e})=>e&&`flex-direction: ${e}`};

  ${({wrap:e})=>e&&`flex-wrap: ${e}`};

  ${({height:e})=>e&&`height: ${e}`};

  ${({width:e})=>e&&`width: ${e}`};
`,F=({children:e,unsetBreakpoint:n,justify:i,items:r,direction:o,offset:l})=>{const a=s(),c=$("breakpoints",m());let p;const h=d({query:`(min-width: ${c[n]})`});p="none"!==n?h:"none";return t.createElement(A,{justify:i,items:r,direction:o,height:((e,t,n)=>"none"===e||e?t-n+"px":"auto")(p,a,l)},e)},w=e=>e&&`text-align: ${e};`,k=(e,t)=>e&&`\n      font-family: ${$("fontFamily",e)};\n      font-size: ${$(t,e)};\n    `,z=l.h1`
  ${e=>`\n      ${w(e.textAlign)}\n      ${k(e.overrides,"headlineOneFontSize")}\n    `}
`,b=l.h2`
  ${e=>`\n      ${w(e.textAlign)}\n      ${k(e.overrides,"headlineTwoFontSize")}\n    `}
`,y=l.h3`
  ${e=>`\n      ${w(e.textAlign)}\n      ${k(e.overrides,"headlineThreeFontSize")}\n    `}
`,S=l.h4`
  ${e=>`\n      ${w(e.textAlign)}\n      ${k(e.overrides,"headlineFourFontSize")}\n    `}
`,E=l.h5`
  ${e=>`\n      ${w(e.textAlign)}\n      ${k(e.overrides,"headlineFiveFontSize")}\n    `}
`,T=l.h6`
  ${e=>`\n      ${w(e.textAlign)}\n      ${k(e.overrides,"headlineSixFontSize")}\n    `}
`,O=l.p`
  ${e=>`\n      ${w(e.textAlign)}\n      ${k(e.overrides,"paragraphFontSize")}\n    `}

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`,j=({textAlign:e,children:n})=>t.createElement(z,{textAlign:e,overrides:m()},n),C=({textAlign:e,children:n})=>t.createElement(b,{textAlign:e,overrides:m()},n),H=({textAlign:e,children:n})=>t.createElement(y,{textAlign:e,overrides:m()},n),I=({textAlign:e,children:n})=>t.createElement(S,{textAlign:e,overrides:m()},n),B=({textAlign:e,children:n})=>t.createElement(E,{textAlign:e,overrides:m()},n),P=({textAlign:e,children:n})=>t.createElement(T,{textAlign:e,overrides:m()},n),X=({textAlign:e,lowercase:n,children:i})=>t.createElement(O,{textAlign:e,lowercase:n,overrides:m()},i);export{x as Drawer,g as DrawerTrigger,u as DrawerUnderlay,A as FlexContainer,F as FullScreenHeight,j as H1,C as H2,H as H3,I as H4,B as H5,P as H6,X as P,O as Paragraph,p as ReactYanOverrideProvider,m as useOverrideContext};
