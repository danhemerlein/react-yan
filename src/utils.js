/* eslint-disable no-prototype-builtins */
import config from './config';

export const checkForOverride = (property, overrides) => {
  return overrides.hasOwnProperty(property)
    ? overrides[property]
    : config[property];
};
