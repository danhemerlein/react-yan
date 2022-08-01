import React from 'react';
import styled from 'styled-components';
import { useOverrideContext } from '../../context/OverrideContext';
import { anchorColor } from '../../utilities';
import { typeHelper } from './helpers';

const HeadlineOne = styled.h1`
  ${({ overrides, color, textAlign }) => {
    return typeHelper(overrides, 'headlineOneFontSize', color, textAlign);
  }}
`;

const HeadlineTwo = styled.h2`
  ${({ overrides, color, textAlign }) => {
    return typeHelper(overrides, 'headlineTwoFontSize', color, textAlign);
  }}
`;

const HeadlineThree = styled.h3`
  ${({ overrides, color, textAlign }) => {
    return typeHelper(overrides, 'headlineThreeFontSize', color, textAlign);
  }}
`;

const HeadlineFour = styled.h4`
  ${({ overrides, color, textAlign }) => {
    return typeHelper(overrides, 'headlineFourFontSize', color, textAlign);
  }}
`;

const HeadlineFive = styled.h5`
  ${({ overrides, color, textAlign }) => {
    return typeHelper(overrides, 'headlineFiveFontSize', color, textAlign);
  }}
`;

const HeadlineSix = styled.h6`
  ${({ overrides, color, textAlign }) => {
    return typeHelper(overrides, 'headlineSixFontSize', color, textAlign);
  }}
`;

const Paragraph = styled.p`
  ${({ overrides, color, textAlign }) => {
    return typeHelper(overrides, 'paragraphFontSize', color, textAlign);
  }}

  ${({ lowercase }) => {
    return lowercase && `text-transform: lowercase`;
  }};
`;

const S = styled.span`
  ${({ overrides, color, textAlign }) => {
    return typeHelper(overrides, 'spanFontSize', color, textAlign);
  }}
`;

const Anchor = styled.a`
  cursor: pointer;

  ${({ overrides, textAlign }) => {
    return typeHelper(overrides, 'anchorFontSize', undefined, textAlign);
  }}

  ${({ color, textDecoration, textDecorationHover }) => {
    return anchorColor({ color, textDecoration, textDecorationHover });
  }}
`;

export const H1 = ({ textAlign, children, className, color }) => {
  return (
    <HeadlineOne
      className={className}
      color={color}
      textAlign={textAlign}
      overrides={useOverrideContext()}
    >
      {children}
    </HeadlineOne>
  );
};

export const H2 = ({ textAlign, children, className, color }) => {
  return (
    <HeadlineTwo
      className={className}
      textAlign={textAlign}
      color={color}
      overrides={useOverrideContext()}
    >
      {children}
    </HeadlineTwo>
  );
};

export const H3 = ({ textAlign, children, className, color }) => {
  return (
    <HeadlineThree
      className={className}
      textAlign={textAlign}
      color={color}
      overrides={useOverrideContext()}
    >
      {children}
    </HeadlineThree>
  );
};

export const H4 = ({ textAlign, children, className, color }) => {
  return (
    <HeadlineFour
      className={className}
      textAlign={textAlign}
      color={color}
      overrides={useOverrideContext()}
    >
      {children}
    </HeadlineFour>
  );
};

export const H5 = ({ textAlign, children, className, color }) => {
  return (
    <HeadlineFive
      color={color}
      className={className}
      textAlign={textAlign}
      overrides={useOverrideContext()}
    >
      {children}
    </HeadlineFive>
  );
};

export const H6 = ({ textAlign, children, className, color }) => {
  return (
    <HeadlineSix
      color={color}
      className={className}
      textAlign={textAlign}
      overrides={useOverrideContext()}
    >
      {children}
    </HeadlineSix>
  );
};

export const P = ({ textAlign, lowercase, children, className, color }) => {
  return (
    <Paragraph
      color={color}
      className={className}
      textAlign={textAlign}
      lowercase={lowercase}
      overrides={useOverrideContext()}
    >
      {children}
    </Paragraph>
  );
};

export const Span = ({ textAlign, children, className, color }) => {
  return (
    <S
      color={color}
      className={className}
      textAlign={textAlign}
      overrides={useOverrideContext()}
    >
      {children}
    </S>
  );
};

export const A = ({
  textAlign,
  children,
  className,
  color,
  textDecoration,
  textDecorationHover,
  href,
  target,
  rel
}) => {
  return (
    <Anchor
      href={href}
      target={target}
      rel={rel}
      textDecoration={textDecoration}
      textDecorationHover={textDecorationHover}
      color={color}
      className={className}
      textAlign={textAlign}
      overrides={useOverrideContext()}
    >
      {children}
    </Anchor>
  );
};
