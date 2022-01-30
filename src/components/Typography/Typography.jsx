import styled from 'styled-components';
import { checkForProperty } from '../../utils';

export const H1 = styled.h1`
  font-family: ${checkForProperty('fontFamily')};

  font-size: ${checkForProperty('headlineOneFontSize')};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const H2 = styled.h2`
  font-family: ${checkForProperty('fontFamily')};
  font-size: ${checkForProperty('headlineTwoFontSize')};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const H3 = styled.h2`
  font-family: ${checkForProperty('fontFamily')};
  font-size: ${checkForProperty('headlineThreeFontSize')};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const H4 = styled.h4`
  font-family: ${checkForProperty('fontFamily')};
  font-size: ${checkForProperty('headlineFourFontSize')};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const H5 = styled.h5`
  font-family: ${checkForProperty('fontFamily')};
  font-size: ${checkForProperty('headlineFiveFontSize')};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const H6 = styled.h6`
  font-family: ${checkForProperty('fontFamily')};
  font-size: ${checkForProperty('headlineSixFontSize')};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const P = styled.p`
  font-family: ${checkForProperty('fontFamily')};
  font-size: ${checkForProperty('paragraphFontSize')};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};

  ${({ lowercase }) => {
    return lowercase && `text-transform: lowercase`;
  }};
`;
