import e,{css as t}from"styled-components";import o from"focus-trap-react";import r,{useContext as n,createContext as i,useRef as l,useEffect as a}from"react";import c from"what-input";import{use100vh as s}from"react-div-100vh";import{useMediaQuery as d}from"react-responsive";const m=e.div`
  position: relative;

  ${({height:e})=>e&&`height: ${e}`};
`,p=e.div`
  position: absolute;

  ${({top:e})=>e&&`top: ${e}`};

  ${({right:e})=>e&&`right: ${e}`};

  ${({bottom:e})=>e&&`bottom: ${e}`};

  ${({left:e})=>e&&`left: ${e}`};
`,$=i({}),h=()=>n($),x=({children:e,value:t})=>r.createElement($.Provider,{value:t},e),g={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",spanFontSize:"1.6rem",anchorFontSize:"1.6rem",drawerTransition:"transform 450ms cubic-bezier(0.23, 1, 0.32, 1)",drawerZIndex:"5",fullBleedSpace:"-2rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},v=(e,t)=>t.hasOwnProperty(e)?t[e]:g[e],f=e.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({position:e})=>"left"===e?"left: 0;":"right: 0;"};

  ${({overrides:e,top:t,transform:o})=>`\n      top: ${t};\n      transform: translateX(${o});\n      z-index: ${v("drawerZIndex",e)};\n      transition: ${v("drawerTransition",e)};\n    `}

  ${({open:e})=>e&&"\n        visibility: visible;\n        transform: translateX(0);\n        position: fixed;\n      "};
`,u=({clickHandler:e,drawerOpen:t,activeTrap:n,unmountTrap:i,Interior:s,config:d})=>{const m=l(),{id:p,top:$,position:x,transform:g}=d;a((()=>{"keyboard"===c.ask()&&t&&m.current.focus()}),[t]);const v=`#${p}`;return r.createElement(f,{open:t,overrides:h(),transform:g,position:x,top:$},n&&r.createElement(o,{focusTrapOptions:{fallbackFocus:v,allowOutsideClick:!0,onDeactivate:i}},r.createElement(s,{closeButtonRef:m,handleClick:()=>{e(),i()}})))},A=({Trigger:e,mountTrap:t,clickHandler:o})=>r.createElement(e,{handleClick:()=>{o(),t()}}),F=e.div`
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
`,b=({drawerOpen:e,clickHandler:t,unmountTrap:o})=>r.createElement(F,{open:e,onClick:()=>{t(),o()}}),z=e.div`
  display: flex;

  ${({justify:e})=>e&&`justify-content: ${e}`};

  ${({items:e})=>e&&`align-items: ${e}`};

  ${({direction:e})=>e&&`flex-direction: ${e}`};

  ${({wrap:e})=>e&&`flex-wrap: ${e}`};

  ${({height:e})=>e&&`height: ${e}`};

  ${({width:e})=>e&&`width: ${e}`};
`,S=({children:e,unsetBreakpoint:t,justify:o,items:n,direction:i,offset:l,className:a})=>{const c=s(),m=v("breakpoints",h());let p;const $=d({query:`(min-width: ${m[t]})`});p="none"!==t?$:"none";return r.createElement(z,{justify:o,offset:0,items:n,direction:i,className:a,height:((e,t,o)=>"none"===e||e?t-o+"px":"auto")(p,c,l)},e)},w=({top:e=!1,right:o=!1,bottom:r=!1,left:n=!1,space:i="1.6rem"}={})=>t`
    ${e&&`margin-top: ${i}`};
    ${o&&`margin-right: ${i}`};
    ${r&&`margin-bottom: ${i}`};
    ${n&&`margin-left: ${i}`};
  `,N=({color:e="#000",textDecoration:o="underline",textDecorationHover:r="underline"}={})=>t`
    ${o&&e&&r&&`\n      color: ${e};\n      text-decoration-color: ${e};\n      text-decoration: ${o};\n\n      &:visited {\n        text-decoration: ${o};\n        color: ${e};\n      }\n\n      &:active {\n        text-decoration: ${o};\n        color: ${e};\n      }\n\n      &:hover {\n        text-decoration: ${r};\n        color: ${e};\n      }\n    `};
  `,k=(e,t,o="#000",r="left")=>e&&o&&r&&`\n      text-align: ${r};\n      color: ${o};\n      font-family: ${v("fontFamily",e)};\n      font-size: ${v(t,e)};\n    `,y=e.h1`
  ${({overrides:e,color:t,textAlign:o})=>k(e,"headlineOneFontSize",t,o)}
`,E=e.h2`
  ${({overrides:e,color:t,textAlign:o})=>k(e,"headlineTwoFontSize",t,o)}
`,T=e.h3`
  ${({overrides:e,color:t,textAlign:o})=>k(e,"headlineThreeFontSize",t,o)}
`,D=e.h4`
  ${({overrides:e,color:t,textAlign:o})=>k(e,"headlineFourFontSize",t,o)}
`,H=e.h5`
  ${({overrides:e,color:t,textAlign:o})=>k(e,"headlineFiveFontSize",t,o)}
`,O=e.h6`
  ${({overrides:e,color:t,textAlign:o})=>k(e,"headlineSixFontSize",t,o)}
`,j=e.p`
  ${({overrides:e,color:t,textAlign:o})=>k(e,"paragraphFontSize",t,o)}

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`,C=e.span`
  ${({overrides:e,color:t,textAlign:o})=>k(e,"spanFontSize",t,o)}
`,B=e.a`
  cursor: pointer;

  ${({overrides:e,textAlign:t})=>k(e,"anchorFontSize",void 0,t)}

  ${({color:e,textDecoration:t,textDecorationHover:o})=>N({color:e,textDecoration:t,textDecorationHover:o})}
`,I=({textAlign:e,children:t,className:o,color:n})=>r.createElement(y,{className:o,color:n,textAlign:e,overrides:h()},t),P=({textAlign:e,children:t,className:o,color:n})=>r.createElement(E,{className:o,textAlign:e,color:n,overrides:h()},t),X=({textAlign:e,children:t,className:o,color:n})=>r.createElement(T,{className:o,textAlign:e,color:n,overrides:h()},t),Z=({textAlign:e,children:t,className:o,color:n})=>r.createElement(D,{className:o,textAlign:e,color:n,overrides:h()},t),q=({textAlign:e,children:t,className:o,color:n})=>r.createElement(H,{color:n,className:o,textAlign:e,overrides:h()},t),R=({textAlign:e,children:t,className:o,color:n})=>r.createElement(O,{color:n,className:o,textAlign:e,overrides:h()},t),G=({textAlign:e,lowercase:t,children:o,className:n,color:i})=>r.createElement(j,{color:i,className:n,textAlign:e,lowercase:t,overrides:h()},o),J=({textAlign:e,children:t,className:o,color:n})=>r.createElement(C,{color:n,className:o,textAlign:e,overrides:h()},t),K=({textAlign:e,children:t,className:o,color:n,textDecoration:i,textDecorationHover:l})=>r.createElement(B,{textDecoration:i,textDecorationHover:l,color:n,className:o,textAlign:e,overrides:h()},t);export{K as A,p as AbsoluteContainer,u as Drawer,A as DrawerTrigger,b as DrawerUnderlay,z as FlexContainer,S as FullScreenHeight,I as H1,P as H2,X as H3,Z as H4,q as H5,R as H6,G as P,x as ReactYanOverrideProvider,m as RelativeContainer,J as Span,N as anchorColor,w as fullBleed,h as useOverrideContext};
