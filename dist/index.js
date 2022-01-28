"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("styled-components"));const n={fontFamily:"sans-serif",headlineOne:{fontSize:"3.2rem"},headlineTwo:{fontSize:"2.4rem"},headlineThree:{fontSize:"2.4rem"},paragraph:{fontSize:"1.6rem"}},i=t.default.h1`
  font-family: ${n.fontFamily};
  font-size: ${n.headlineOne.fontSize};
`,o=t.default.h2`
  font-family: ${n.fontFamily};
  font-size: ${n.headlineTwo.fontSize};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,a=t.default.h2`
  font-family: ${n.fontFamily};
  font-size: ${n.headlineThree.fontSize};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,f=t.default.p`
  font-family: ${n.fontFamily};
  font-size: ${n.paragraph.fontSize};

  ${({lowercase:e})=>e&&"text-transform: lowercase"};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`;exports.H1=i,exports.H2=o,exports.H3=a,exports.P=f;
