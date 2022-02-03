import { checkForOverride } from '../../utils';

export const typeHelper = (overrides, fontSizeKey) => {
  return (
    overrides &&
    `
      font-family: ${checkForOverride('fontFamily', overrides)};
      font-size: ${checkForOverride(fontSizeKey, overrides)};
    `
  );
};
