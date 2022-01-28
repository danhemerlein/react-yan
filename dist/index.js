function e(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}
Object.defineProperty(exports, '__esModule', { value: !0 });
const t = e(require('styled-components'));

const n = {
  fontFamily: 'sans-serif',
  headlineOne: { fontSize: '3.2rem' },
  headlineTwo: { fontSize: '2.4rem' },
  headlineThree: { fontSize: '2.4rem' },
  paragraph: { fontSize: '1.6rem' }
};
const i = t.default.h1`
  font-family: ${n.fontFamily};
  font-size: ${n.headlineOne.fontSize};
`;
const o = t.default.h2`
  font-family: ${n.fontFamily};
  font-size: ${n.headlineTwo.fontSize};

  ${({ textAlign: e }) => {
    return e && `text-align: ${e}`;
  }};
`;
const a = t.default.h2`
  font-family: ${n.fontFamily};
  font-size: ${n.headlineThree.fontSize};

  ${({ textAlign: e }) => {
    return e && `text-align: ${e}`;
  }};
`;
const f = t.default.p`
  font-family: ${n.fontFamily};
  font-size: ${n.paragraph.fontSize};

  ${({ lowercase: e }) => {
    return e && 'text-transform: lowercase';
  }};

  ${({ textAlign: e }) => {
    return e && `text-align: ${e}`;
  }};
`;
(exports.H1 = i), (exports.H2 = o), (exports.H3 = a), (exports.P = f);
