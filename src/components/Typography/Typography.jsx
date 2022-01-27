import styled from 'styled-components';
import config from '../../config';

export const H1 = styled.h1`
  font-family: ${config.typography.fontFamily};
  font-size: ${config.typography.headlineOne.fontSize};
`;

export const H2 = styled.h2`
  font-family: ${config.typography.fontFamily};
  font-size: ${config.typography.headlineTwo.fontSize};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const H3 = styled.h2`
  font-family: ${config.typography.fontFamily};
  font-size: ${config.typography.headlineThree.fontSize};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;

export const P = styled.p`
  font-family: ${config.typography.fontFamily};
  font-size: ${config.typography.paragraph.fontSize};

  ${({ lowercase }) => {
    return lowercase && `text-transform: lowercase`;
  }};

  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign}`;
  }};
`;
