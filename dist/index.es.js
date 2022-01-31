import e from"styled-components";import{useContext as t,createContext as n}from"react";const i=n({}),o={},l={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},a=e=>o.hasOwnProperty(e)?o[e]:l[e],r=(e,t)=>(console.log(t),console.log(e),console.log(t.hasOwnProperty(e)),console.log(t[e]),t.hasOwnProperty(e)?t[e]:l[e]),f=e.h1`
  ${({textAlign:e})=>e&&`text-align: ${e}`};

  ${({overrides:e})=>e&&`\n      font-family: ${r("fontFamily",e)};\n\n      font-size: ${r("headlineOneFontSize",e)};\n    `};
`,m=({textAlign:e,children:n})=>React.createElement(f,{textAlign:e,overrides:t(i)},n),$=e.h2`
  font-family: ${a("fontFamily")};
  font-size: ${a("headlineTwoFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,s=e.h2`
  font-family: ${a("fontFamily")};
  font-size: ${a("headlineThreeFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,h=e.h4`
  font-family: ${a("fontFamily")};
  font-size: ${a("headlineFourFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,F=e.h5`
  font-family: ${a("fontFamily")};
  font-size: ${a("headlineFiveFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,g=e.h6`
  font-family: ${a("fontFamily")};
  font-size: ${a("headlineSixFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,x=e.p`
  font-family: ${a("fontFamily")};
  font-size: ${a("paragraphFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`;export{m as H1,$ as H2,s as H3,h as H4,F as H5,g as H6,x as P};
