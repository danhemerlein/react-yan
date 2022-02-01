import React from 'react';
import styled from 'styled-components';
import { useOverrideContext } from '../../context/OverrideContext';
import { getTextAlign, typeHelper } from './helpers';

const HeadlineOne = styled.h1`
  ${(props) => {
    return `
      ${getTextAlign(props.textAlign)}
      ${typeHelper(props.overrides, 'headlineOneFontSize')}
    `;
  }}
`;

const HeadlineTwo = styled.h2`
  ${(props) => {
    return `
      ${getTextAlign(props.textAlign)}
      ${typeHelper(props.overrides, 'headlineTwoFontSize')}
    `;
  }}
`;

const HeadlineThree = styled.h3`
  ${(props) => {
    return `
      ${getTextAlign(props.textAlign)}
      ${typeHelper(props.overrides, 'headlineThreeFontSize')}
    `;
  }}
`;

const HeadlineFour = styled.h4`
  ${(props) => {
    return `
      ${getTextAlign(props.textAlign)}
      ${typeHelper(props.overrides, 'headlineFourFontSize')}
    `;
  }}
`;

const HeadlineFive = styled.h5`
  ${(props) => {
    return `
      ${getTextAlign(props.textAlign)}
      ${typeHelper(props.overrides, 'headlineFiveFontSize')}
    `;
  }}
`;

const HeadlineSix = styled.h6`
  ${(props) => {
    return `
      ${getTextAlign(props.textAlign)}
      ${typeHelper(props.overrides, 'headlineSixFontSize')}
    `;
  }}
`;

export const Paragraph = styled.p`
  ${(props) => {
    return `
      ${getTextAlign(props.textAlign)}
      ${typeHelper(props.overrides, 'paragraphFontSize')}
    `;
  }}

  ${({ lowercase }) => {
    return lowercase && `text-transform: lowercase`;
  }};
`;

export const H1 = ({ textAlign, children }) => {
  return (
    <HeadlineOne textAlign={textAlign} overrides={useOverrideContext()}>
      {children}
    </HeadlineOne>
  );
};

export const H2 = ({ textAlign, children }) => {
  return (
    <HeadlineTwo textAlign={textAlign} overrides={useOverrideContext()}>
      {children}
    </HeadlineTwo>
  );
};

export const H3 = ({ textAlign, children }) => {
  return (
    <HeadlineThree textAlign={textAlign} overrides={useOverrideContext()}>
      {children}
    </HeadlineThree>
  );
};

export const H4 = ({ textAlign, children }) => {
  return (
    <HeadlineFour textAlign={textAlign} overrides={useOverrideContext()}>
      {children}
    </HeadlineFour>
  );
};

export const H5 = ({ textAlign, children }) => {
  return (
    <HeadlineFive textAlign={textAlign} overrides={useOverrideContext()}>
      {children}
    </HeadlineFive>
  );
};

export const H6 = ({ textAlign, children }) => {
  return (
    <HeadlineSix textAlign={textAlign} overrides={useOverrideContext()}>
      {children}
    </HeadlineSix>
  );
};

export const P = ({ textAlign, lowercase, children }) => {
  return (
    <Paragraph
      textAlign={textAlign}
      lowercase={lowercase}
      overrides={useOverrideContext()}
    >
      {children}
    </Paragraph>
  );
};
