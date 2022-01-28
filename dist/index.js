"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("styled-components"));const n={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.4rem",headlineThreeFontSize:"2.4rem",paragraphFontSize:"1.6rem"},i={},o=e=>i.hasOwnProperty(e)?i[e]:n[e],a=t.default.h1`
  font-family: ${o("fontFamily")};

  font-size: ${o("headlineOneFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,l=t.default.h2`
  font-family: ${o("fontFamily")};
  font-size: ${n.headlineTwoFontSize};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,r=t.default.h2`
  font-family: ${o("fontFamily")};
  font-size: ${n.headlineThreeFontSize};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,f=t.default.p`
  font-family: ${o("fontFamily")};
  font-size: ${n.paragraphFontSize};

  ${({textAlign:e})=>e&&`text-align: ${e}`};

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`;exports.H1=a,exports.H2=l,exports.H3=r,exports.P=f;
