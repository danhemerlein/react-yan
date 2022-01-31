import { checkForOverride } from '../../utils';

export const getTextAlign = (textAlign) => {
  return textAlign && `text-align: ${textAlign};`;
};

export const typeHelper = (overrides, fontSizeKey) => {
  return (
    overrides &&
    `
      font-family: ${checkForOverride('fontFamily', overrides)};
      font-size: ${checkForOverride(fontSizeKey, overrides)};
    `
  );
};
