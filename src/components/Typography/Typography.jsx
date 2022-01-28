import styled from 'styled-components';
import config from '../../config';
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
  font-size: ${config.headlineTwoFontSize};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const H3 = styled.h2`
  font-family: ${checkForProperty('fontFamily')};
  font-size: ${config.headlineThreeFontSize};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const P = styled.p`
  font-family: ${checkForProperty('fontFamily')};
  font-size: ${config.paragraphFontSize};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};

  ${({ lowercase }) => {
    return lowercase && `text-transform: lowercase`;
  }};
`;
