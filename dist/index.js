"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("styled-components"),t=require("react");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(e);const i=t.createContext({}),l={},a={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.6rem",headlineThreeFontSize:"2.4rem",headlineFourFontSize:"2rem",headlineFiveFontSize:"1.6rem",headlineSixFontSize:"1.6rem",paragraphFontSize:"1.6rem",breakpoints:{mobile:320,tablet:720,desktop:1024,"desktop-max":1440}},r=e=>l.hasOwnProperty(e)?l[e]:a[e],f=(e,t)=>(console.log(t),console.log(e),console.log(t.hasOwnProperty(e)),console.log(t[e]),t.hasOwnProperty(e)?t[e]:a[e]),s=o.default.h1`
  ${({textAlign:e})=>e&&`text-align: ${e}`};

  ${({overrides:e})=>e&&`\n      font-family: ${f("fontFamily",e)};\n\n      font-size: ${f("headlineOneFontSize",e)};\n    `};
`,x=o.default.h2`
  font-family: ${r("fontFamily")};
  font-size: ${r("headlineTwoFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,$=o.default.h2`
  font-family: ${r("fontFamily")};
  font-size: ${r("headlineThreeFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,d=o.default.h4`
  font-family: ${r("fontFamily")};
  font-size: ${r("headlineFourFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,m=o.default.h5`
  font-family: ${r("fontFamily")};
  font-size: ${r("headlineFiveFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,h=o.default.h6`
  font-family: ${r("fontFamily")};
  font-size: ${r("headlineSixFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,F=o.default.p`
  font-family: ${r("fontFamily")};
  font-size: ${r("paragraphFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`;exports.H1=({textAlign:e,children:n})=>React.createElement(s,{textAlign:e,overrides:t.useContext(i)},n),exports.H2=x,exports.H3=$,exports.H4=d,exports.H5=m,exports.H6=h,exports.P=F;
