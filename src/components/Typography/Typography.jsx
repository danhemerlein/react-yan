import React from 'react';
import styled from 'styled-components';
import { useOverrideContext } from '../../context/OverrideContext';
import { checkForOverride } from '../../utils';

const HeadlineOne = styled.h1`
  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};

  ${({ overrides }) => {
    return (
      overrides &&
      `
      font-family: ${checkForOverride('fontFamily', overrides)};

      font-size: ${checkForOverride('headlineOneFontSize', overrides)};
    `
    );
  }};
`;

export const H1 = ({ textAlign, children }) => {
  return (
    <HeadlineOne textAlign={textAlign} overrides={useOverrideContext()}>
      {children}
    </HeadlineOne>
  );
};

export const H2 = styled.h2`
  font-family: ${checkForOverride('fontFamily', {})};
  font-size: ${checkForOverride('headlineTwoFontSize', {})};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const H3 = styled.h2`
  font-family: ${checkForOverride('fontFamily', {})};
  font-size: ${checkForOverride('headlineThreeFontSize', {})};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const H4 = styled.h4`
  font-family: ${checkForOverride('fontFamily', {})};
  font-size: ${checkForOverride('headlineFourFontSize', {})};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const H5 = styled.h5`
  font-family: ${checkForOverride('fontFamily', {})};
  font-size: ${checkForOverride('headlineFiveFontSize', {})};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const H6 = styled.h6`
  font-family: ${checkForOverride('fontFamily', {})};
  font-size: ${checkForOverride('headlineSixFontSize', {})};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const P = styled.p`
  font-family: ${checkForOverride('fontFamily', {})};
  font-size: ${checkForOverride('paragraphFontSize', {})};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};

  ${({ lowercase }) => {
    return lowercase && `text-transform: lowercase`;
  }};
`;
