import { checkForOverride } from '../../utils';

export const typeHelper = (
  overrides,
  fontSizeKey,
  color = '#000',
  textAlign = 'left'
) => {
  return (
    overrides &&
    color &&
    textAlign &&
    `
      text-align: ${textAlign};
      color: ${color};
      font-family: ${checkForOverride('fontFamily', overrides)};
      font-size: ${checkForOverride(fontSizeKey, overrides)};
    `
  );
};
