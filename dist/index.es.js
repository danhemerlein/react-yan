import e from"styled-components";const t={fontFamily:"sans-serif",headlineOneFontSize:"3.2rem",headlineTwoFontSize:"2.4rem",headlineThreeFontSize:"2.4rem",paragraphFontSize:"1.6rem"},n={},i=e=>n.hasOwnProperty(e)?n[e]:t[e],o=e.h1`
  font-family: ${i("fontFamily")};

  font-size: ${i("headlineOneFontSize")};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,a=e.h2`
  font-family: ${i("fontFamily")};
  font-size: ${t.headlineTwoFontSize};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,l=e.h2`
  font-family: ${i("fontFamily")};
  font-size: ${t.headlineThreeFontSize};

  ${({textAlign:e})=>e&&`text-align: ${e}`};
`,f=e.p`
  font-family: ${i("fontFamily")};
  font-size: ${t.paragraphFontSize};

  ${({textAlign:e})=>e&&`text-align: ${e}`};

  ${({lowercase:e})=>e&&"text-transform: lowercase"};
`;export{o as H1,a as H2,l as H3,f as P};
