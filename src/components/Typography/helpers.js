import { checkForOverride } from '../../utils';

export const typeHelper = (
  overrides,
  fontSizeKey,
  color = 'inherit',
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
