import e from"styled-components";const t={fontFamily:"sans-serif",headlineOne:{fontSize:"3.2rem"},headlineTwo:{fontSize:"2.4rem"},headlineThree:{fontSize:"2.4rem"},paragraph:{fontSize:"1.6rem"}},n=e.h1`
  font-family: ${t.fontFamily};
  font-size: ${t.headlineOne.fontSize};
`,i=e.h2`
  font-family: ${t.fontFamily};
  font-size: ${t.headlineTwo.fontSize};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,o=e.h2`
  font-family: ${t.fontFamily};
  font-size: ${t.headlineThree.fontSize};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,a=e.p`
  font-family: ${t.fontFamily};
  font-size: ${t.paragraph.fontSize};

  ${({lowercase:e})=>e&&"text-transform: lowercase"};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`;export{n as H1,i as H2,o as H3,a as P};
