import config from './config';

export const checkForOverride = (property, overrides) => {
  // eslint-disable-next-line no-prototype-builtins
  return overrides.hasOwnProperty(property)
    ? overrides[property]
    : config[property];
};
