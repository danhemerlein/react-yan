import e from"focus-trap-react";import t,{useContext as o,createContext as r,useRef as n,useEffect as i}from"react";import l,{css as a}from"styled-components";import c from"what-input";import{use100vh as s}from"react-div-100vh";import{useMediaQuery as $}from"react-responsive";const d=r({}),m=()=>o(d),x=({children:e,value:o})=>t.createElement(d.Provider,{value:o},e),p={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",spanFontSize:"1.6rem",anchorFontSize:"1.6rem",drawerTransition:"transform 450ms cubic-bezier(0.23, 1, 0.32, 1)",drawerZIndex:"5",fullBleedSpace:"-2rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},g=(e,t)=>(console.log(e),console.log(t),console.log(t.hasOwnProperty(e)),t.hasOwnProperty(e)?t[e]:p[e]),h=l.div`
  position: absolute;
  display: block;
  visibility: hidden;

  ${({position:e})=>"left"===e?"left: 0;":"right: 0;"};

  ${({overrides:e,top:t,transform:o})=>`\n      top: ${t};\n      transform: translateX(${o});\n      z-index: ${g("drawerZIndex",e)};\n      transition: ${g("drawerTransition",e)};\n    `}

  ${({open:e})=>e&&"\n        visibility: visible;\n        transform: translateX(0);\n        position: fixed;\n      "};
`,f=({clickHandler:o,drawerOpen:r,activeTrap:l,unmountTrap:a,Interior:s,config:$})=>{const d=n(),{id:x,top:p,position:g,transform:f}=$;i((()=>{"keyboard"===c.ask()&&r&&d.current.focus()}),[r]);const v=`#${x}`;return t.createElement(h,{open:r,overrides:m(),transform:f,position:g,top:p},l&&t.createElement(e,{focusTrapOptions:{fallbackFocus:v,allowOutsideClick:!0,onDeactivate:a}},t.createElement(s,{closeButtonRef:d,handleClick:()=>{o(),a()}})))},v=({Trigger:e,mountTrap:o,clickHandler:r})=>t.createElement(e,{handleClick:()=>{r(),o()}}),u=l.div`
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
`,F=({drawerOpen:e,clickHandler:o,unmountTrap:r})=>t.createElement(u,{open:e,onClick:()=>{o(),r()}}),A=l.div`
  display: flex;

  ${({justify:e})=>e&&`justify-content: ${e}`};

  ${({items:e})=>e&&`align-items: ${e}`};

  ${({direction:e})=>e&&`flex-direction: ${e}`};

  ${({wrap:e})=>e&&`flex-wrap: ${e}`};

  ${({height:e})=>e&&`height: ${e}`};

  ${({width:e})=>e&&`width: ${e}`};
`,z=({children:e,unsetBreakpoint:o,justify:r,items:n,direction:i,offset:l,className:a})=>{const c=s();console.log(m());const d=g("breakpoints",m());let x;const p=$({query:`(min-width: ${d[o]})`});x="none"!==o?p:"none";return t.createElement(A,{justify:r,offset:0,items:n,direction:i,className:a,height:((e,t,o)=>"none"===e||e?t-o+"px":"auto")(x,c,l)},e)},w=({top:e=!1,right:t=!1,bottom:o=!1,left:r=!1,space:n}={})=>a`
    ${e&&`margin-top: ${n}`};
    ${t&&`margin-right: ${n}`};
    ${o&&`margin-bottom: ${n}`};
    ${r&&`margin-left: ${n}`};
  `,N=({color:e="#FFF",textDecoration:t="none",textDecorationHover:o="underline"}={})=>a`
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
  `,S=(e,t)=>e&&`\n      font-family: ${g("fontFamily",e)};\n      font-size: ${g(t,e)};\n    `,b=l.h1`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${S(e,"headlineOneFontSize")}`}
`,k=l.h2`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${S(e,"headlineTwoFontSize")}`}
`,y=l.h3`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${S(e,"headlineThreeFontSize")}`}
`,E=l.h4`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${S(e,"headlineFourFontSize")}`}
`,T=l.h5`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${S(e,"headlineFiveFontSize")}`}
`,D=l.h6`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${S(e,"headlineSixFontSize")}`}
`,H=l.p`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${S(e,"paragraphFontSize")}`}

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`,O=l.span`
  ${({textAlign:e})=>e&&`text-align: ${e};`};

  ${({color:e})=>e&&`color: ${e};`};

  ${({overrides:e})=>`${S(e,"spanFontSize")}`}
`,j=l.a`
  ${({textAlign:e})=>e&&`\n      text-align: ${e};\n    `};

  ${N({color:({color:e})=>e,textDecoration:({textDecoration:e})=>e,textDecorationHover:({textDecorationHover:e})=>e})};

  ${({overrides:e})=>`\n      ${S(e,"anchorFontFize")}\n    `}
`,C=({textAlign:e,children:o,className:r,color:n})=>t.createElement(b,{className:r,color:n,textAlign:e,overrides:m()},o),B=({textAlign:e,children:o,className:r,color:n})=>t.createElement(k,{className:r,textAlign:e,color:n,overrides:m()},o),I=({textAlign:e,children:o,className:r,color:n})=>t.createElement(y,{className:r,textAlign:e,color:n,overrides:m()},o),P=({textAlign:e,children:o,className:r,color:n})=>t.createElement(E,{className:r,textAlign:e,color:n,overrides:m()},o),X=({textAlign:e,children:o,className:r,color:n})=>t.createElement(T,{color:n,className:r,textAlign:e,overrides:m()},o),Z=({textAlign:e,children:o,className:r,color:n})=>t.createElement(D,{color:n,className:r,textAlign:e,overrides:m()},o),q=({textAlign:e,lowercase:o,children:r,className:n,color:i})=>t.createElement(H,{color:i,className:n,textAlign:e,lowercase:o,overrides:m()},r),R=({textAlign:e,children:o,className:r,color:n})=>t.createElement(O,{color:n,className:r,textAlign:e,overrides:m()},o),G=({textAlign:e,children:o,className:r,color:n,textDecoration:i,textDecorationHover:l})=>t.createElement(j,{textDecoration:i,textDecorationHover:l,color:n,className:r,textAlign:e,overrides:m()},o);export{G as A,f as Drawer,v as DrawerTrigger,F as DrawerUnderlay,A as FlexContainer,z as FullScreenHeight,C as H1,B as H2,I as H3,P as H4,X as H5,Z as H6,q as P,x as ReactYanOverrideProvider,R as Span,N as anchorColor,w as fullBleed,m as useOverrideContext};
