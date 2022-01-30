import reactYanOverrides from '../react-yan-overrides';
import config from './config';

export const checkForProperty = (property) => {
  // eslint-disable-next-line no-prototype-builtins
  return reactYanOverrides.hasOwnProperty(property)
    ? reactYanOverrides[property]
    : config[property];
};
