import reactYanOverrides from '../react-yan-overrides';
import config from './config';

export const checkForProperty = (property) => {
  // eslint-disable-next-line no-prototype-builtins
  return reactYanOverrides.hasOwnProperty(property)
    ? reactYanOverrides[property]
    : config[property];
};

export const checkForOverride = (property, overrides) => {
  console.log(overrides);
  console.log(property);
  // eslint-disable-next-line no-prototype-builtins
  console.log(overrides.hasOwnProperty(property));
  console.log(overrides[property]);

  // eslint-disable-next-line no-prototype-builtins
  return overrides.hasOwnProperty(property)
    ? overrides[property]
    : config[property];
};
