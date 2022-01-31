import e,{useContext as t,createContext as n}from"react";import i from"styled-components";const o=n({}),l=()=>t(o),a=({children:t,overrides:n})=>e.createElement(o.Provider,{value:n},t),r={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},f=(e,t)=>(console.log(t),console.log(e),console.log(t.hasOwnProperty(e)),console.log(t[e]),t.hasOwnProperty(e)?t[e]:r[e]),m=i.h1`
  ${({textAlign:e})=>e&&`text-align: ${e}`};

  ${({overrides:e})=>e&&`\n      font-family: ${f("fontFamily",e)};\n\n      font-size: ${f("headlineOneFontSize",e)};\n    `};
`,$=({textAlign:t,children:n})=>e.createElement(m,{textAlign:t,overrides:l()},n),s=i.h2`
  font-family: ${f("fontFamily",{})};
  font-size: ${f("headlineTwoFontSize",{})};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,h=i.h2`
  font-family: ${f("fontFamily",{})};
  font-size: ${f("headlineThreeFontSize",{})};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,F=i.h4`
  font-family: ${f("fontFamily",{})};
  font-size: ${f("headlineFourFontSize",{})};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,g=i.h5`
  font-family: ${f("fontFamily",{})};
  font-size: ${f("headlineFiveFontSize",{})};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,d=i.h6`
  font-family: ${f("fontFamily",{})};
  font-size: ${f("headlineSixFontSize",{})};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,x=i.p`
  font-family: ${f("fontFamily",{})};
  font-size: ${f("paragraphFontSize",{})};

  ${({textAlign:e})=>e&&`text-align: ${e}`};

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`;export{$ as H1,s as H2,h as H3,F as H4,g as H5,d as H6,a as OverrideProvider,x as P,l as useOverrideContext};
