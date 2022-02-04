import e from"focus-trap-react";import t,{useContext as o,createContext as r,useRef as n,useEffect as i}from"react";import a,{css as l}from"styled-components";import c from"what-input";import{use100vh as s}from"react-div-100vh";import{useMediaQuery as d}from"react-responsive";const m=r({}),p=()=>o(m),x=({children:e,value:o})=>t.createElement(m.Provider,{value:o},e),h={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",spanFontSize:"1.6rem",anchorFontSize:"1.6rem",drawerTransition:"transform 450ms cubic-bezier(0.23, 1, 0.32, 1)",drawerZIndex:"5",fullBleedSpace:"-2rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},$=(e,t)=>t.hasOwnProperty(e)?t[e]:h[e],g=a.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({position:e})=>"left"===e?"left: 0;":"right: 0;"};

  ${({overrides:e,top:t,transform:o})=>`\n      top: ${t};\n      transform: translateX(${o});\n      z-index: ${$("drawerZIndex",e)};\n      transition: ${$("drawerTransition",e)};\n    `}

  ${({open:e})=>e&&"\n        visibility: visible;\n        transform: translateX(0);\n        position: fixed;\n      "};
`,f=({clickHandler:o,drawerOpen:r,activeTrap:a,unmountTrap:l,Interior:s,config:d})=>{const m=n(),{id:x,top:h,position:$,transform:f}=d;i((()=>{"keyboard"===c.ask()&&r&&m.current.focus()}),[r]);const v=`#${x}`;return t.createElement(g,{open:r,overrides:p(),transform:f,position:$,top:h},a&&t.createElement(e,{focusTrapOptions:{fallbackFocus:v,allowOutsideClick:!0,onDeactivate:l}},t.createElement(s,{closeButtonRef:m,handleClick:()=>{o(),l()}})))},v=({Trigger:e,mountTrap:o,clickHandler:r})=>t.createElement(e,{handleClick:()=>{r(),o()}}),u=a.div`
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
`,A=({drawerOpen:e,clickHandler:o,unmountTrap:r})=>t.createElement(u,{open:e,onClick:()=>{o(),r()}}),F=a.div`
  display: flex;

  ${({justify:e})=>e&&`justify-content: ${e}`};

  ${({items:e})=>e&&`align-items: ${e}`};

  ${({direction:e})=>e&&`flex-direction: ${e}`};

  ${({wrap:e})=>e&&`flex-wrap: ${e}`};

  ${({height:e})=>e&&`height: ${e}`};

  ${({width:e})=>e&&`width: ${e}`};
`,z=({children:e,unsetBreakpoint:o,justify:r,items:n,direction:i,offset:a,className:l})=>{const c=s(),m=$("breakpoints",p());let x;const h=d({query:`(min-width: ${m[o]})`});x="none"!==o?h:"none";return t.createElement(F,{justify:r,offset:0,items:n,direction:i,className:l,height:((e,t,o)=>"none"===e||e?t-o+"px":"auto")(x,c,a)},e)},S=({top:e=!1,right:t=!1,bottom:o=!1,left:r=!1,space:n="1.6rem"}={})=>l`
    ${e&&`margin-top: ${n}`};
    ${t&&`margin-right: ${n}`};
    ${o&&`margin-bottom: ${n}`};
    ${r&&`margin-left: ${n}`};
  `,w=({color:e="#000",textDecoration:t="underline",textDecorationHover:o="underline"}={})=>l`
    ${t&&e&&o&&`\n      color: ${e};\n      text-decoration-color: ${e};\n      text-decoration: ${t};\n\n      &:visited {\n        text-decoration: ${t};\n        color: ${e};\n      }\n\n      &:active {\n        text-decoration: ${t};\n        color: ${e};\n      }\n\n      &:hover {\n        text-decoration: ${o};\n        color: ${e};\n      }\n    `};
  `,N=(e,t,o="#000",r="left")=>e&&o&&r&&`\n      text-align: ${r};\n      color: ${o};\n      font-family: ${$("fontFamily",e)};\n      font-size: ${$(t,e)};\n    `,b=a.h1`
  ${({overrides:e,color:t,textAlign:o})=>N(e,"headlineOneFontSize",t,o)}
`,k=a.h2`
  ${({overrides:e,color:t,textAlign:o})=>N(e,"headlineTwoFontSize",t,o)}
`,y=a.h3`
  ${({overrides:e,color:t,textAlign:o})=>N(e,"headlineThreeFontSize",t,o)}
`,E=a.h4`
  ${({overrides:e,color:t,textAlign:o})=>N(e,"headlineFourFontSize",t,o)}
`,T=a.h5`
  ${({overrides:e,color:t,textAlign:o})=>N(e,"headlineFiveFontSize",t,o)}
`,D=a.h6`
  ${({overrides:e,color:t,textAlign:o})=>N(e,"headlineSixFontSize",t,o)}
`,R=a.p`
  ${({overrides:e,color:t,textAlign:o})=>N(e,"paragraphFontSize",t,o)}

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`,H=a.span`
  ${({overrides:e,color:t,textAlign:o})=>N(e,"spanFontSize",t,o)}
`,O=a.a`
  cursor: pointer;

  ${({overrides:e,textAlign:t})=>N(e,"anchorFontSize",void 0,t)}

  ${({color:e,textDecoration:t,textDecorationHover:o})=>w({color:e,textDecoration:t,textDecorationHover:o})}
`,j=({textAlign:e,children:t,className:o,color:r})=>React.createElement(b,{className:o,color:r,textAlign:e,overrides:p()},t),C=({textAlign:e,children:t,className:o,color:r})=>React.createElement(k,{className:o,textAlign:e,color:r,overrides:p()},t),B=({textAlign:e,children:t,className:o,color:r})=>React.createElement(y,{className:o,textAlign:e,color:r,overrides:p()},t),I=({textAlign:e,children:t,className:o,color:r})=>React.createElement(E,{className:o,textAlign:e,color:r,overrides:p()},t),P=({textAlign:e,children:t,className:o,color:r})=>React.createElement(T,{color:r,className:o,textAlign:e,overrides:p()},t),X=({textAlign:e,children:t,className:o,color:r})=>React.createElement(D,{color:r,className:o,textAlign:e,overrides:p()},t),Z=({textAlign:e,lowercase:t,children:o,className:r,color:n})=>React.createElement(R,{color:n,className:r,textAlign:e,lowercase:t,overrides:p()},o),q=({textAlign:e,children:t,className:o,color:r})=>React.createElement(H,{color:r,className:o,textAlign:e,overrides:p()},t),G=({textAlign:e,children:t,className:o,color:r,textDecoration:n,textDecorationHover:i})=>React.createElement(O,{textDecoration:n,textDecorationHover:i,color:r,className:o,textAlign:e,overrides:p()},t);export{G as A,f as Drawer,v as DrawerTrigger,A as DrawerUnderlay,F as FlexContainer,z as FullScreenHeight,j as H1,C as H2,B as H3,I as H4,P as H5,X as H6,Z as P,x as ReactYanOverrideProvider,q as Span,w as anchorColor,S as fullBleed,p as useOverrideContext};
