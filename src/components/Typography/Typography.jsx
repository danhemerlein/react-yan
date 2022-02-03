import React from 'react';
import styled from 'styled-components';
import { useOverrideContext } from '../../context/OverrideContext';
import { anchorColor } from '../../utilities';
import { typeHelper } from './helpers';

const HeadlineOne = styled.h1`
  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign};`;
  }};

  ${({ color }) => {
    return color && `color: ${color};`;
  }};

  ${({ overrides }) => {
    return `${typeHelper(overrides, 'headlineOneFontSize')}`;
  }}
`;

const HeadlineTwo = styled.h2`
  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign};`;
  }};

  ${({ color }) => {
    return color && `color: ${color};`;
  }};

  ${({ overrides }) => {
    return `${typeHelper(overrides, 'headlineTwoFontSize')}`;
  }}
`;

const HeadlineThree = styled.h3`
  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign};`;
  }};

  ${({ color }) => {
    return color && `color: ${color};`;
  }};

  ${({ overrides }) => {
    return `${typeHelper(overrides, 'headlineThreeFontSize')}`;
  }}
`;

const HeadlineFour = styled.h4`
  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign};`;
  }};

  ${({ color }) => {
    return color && `color: ${color};`;
  }};

  ${({ overrides }) => {
    return `${typeHelper(overrides, 'headlineFourFontSize')}`;
  }}
`;

const HeadlineFive = styled.h5`
  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign};`;
  }};

  ${({ color }) => {
    return color && `color: ${color};`;
  }};

  ${({ overrides }) => {
    return `${typeHelper(overrides, 'headlineFiveFontSize')}`;
  }}
`;

const HeadlineSix = styled.h6`
  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign};`;
  }};

  ${({ color }) => {
    return color && `color: ${color};`;
  }};

  ${({ overrides }) => {
    return `${typeHelper(overrides, 'headlineSixFontSize')}`;
  }}
`;

const Paragraph = styled.p`
  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign};`;
  }};

  ${({ color }) => {
    return color && `color: ${color};`;
  }};

  ${({ overrides }) => {
    return `${typeHelper(overrides, 'paragraphFontSize')}`;
  }}

  ${({ lowercase }) => {
    return lowercase && `text-transform: lowercase`;
  }};
`;

const S = styled.span`
  ${({ textAlign }) => {
    return textAlign && `text-align: ${textAlign};`;
  }};

  ${({ color }) => {
    return color && `color: ${color};`;
  }};

  ${({ overrides }) => {
    return `${typeHelper(overrides, 'spanFontSize')}`;
  }}
`;

// const Anchor = styled.a``;

const Anchor = styled.a`
  ${({ textAlign }) => {
    return (
      textAlign &&
      `
      text-align: ${textAlign};
    `
    );
  }};

  ${anchorColor({
    color: ({ color }) => {
      return color;
    },
    textDecoration: ({ textDecoration }) => {
      return textDecoration;
    },
    textDecorationHover: ({ textDecorationHover }) => {
      return textDecorationHover;
    }
  })};

  ${({ overrides }) => {
    return `
      ${typeHelper(overrides, 'anchorFontFize')}
    `;
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
  textDecorationHover
}) => {
  return (
    <Anchor
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
