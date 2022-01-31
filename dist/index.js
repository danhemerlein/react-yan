"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(e),i=n(t);const l=e.createContext({}),a=()=>e.useContext(l),r={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},f=(e,t)=>(console.log(t),console.log(e),console.log(t.hasOwnProperty(e)),console.log(t[e]),t.hasOwnProperty(e)?t[e]:r[e]),s=i.default.h1`
  ${({textAlign:e})=>e&&`text-align: ${e}`};

  ${({overrides:e})=>e&&`\n      font-family: ${f("fontFamily",e)};\n\n      font-size: ${f("headlineOneFontSize",e)};\n    `};
`,d=i.default.h2`
  font-family: ${f("fontFamily",{})};
  font-size: ${f("headlineTwoFontSize",{})};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,x=i.default.h2`
  font-family: ${f("fontFamily",{})};
  font-size: ${f("headlineThreeFontSize",{})};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,$=i.default.h4`
  font-family: ${f("fontFamily",{})};
  font-size: ${f("headlineFourFontSize",{})};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,m=i.default.h5`
  font-family: ${f("fontFamily",{})};
  font-size: ${f("headlineFiveFontSize",{})};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,h=i.default.h6`
  font-family: ${f("fontFamily",{})};
  font-size: ${f("headlineSixFontSize",{})};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,F=i.default.p`
  font-family: ${f("fontFamily",{})};
  font-size: ${f("paragraphFontSize",{})};

  ${({textAlign:e})=>e&&`text-align: ${e}`};

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`;exports.H1=({textAlign:e,children:t})=>o.default.createElement(s,{textAlign:e,overrides:a()},t),exports.H2=d,exports.H3=x,exports.H4=$,exports.H5=m,exports.H6=h,exports.OverrideProvider=({children:e,overrides:t})=>o.default.createElement(l.Provider,{value:t},e),exports.P=F,exports.useOverrideContext=a;
