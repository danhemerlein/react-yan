// import reactYanOverrides from '../react-yan-overrides';
// eslint-disable-next-line import/no-unresolved
import reactYanOverrides from '../../react-yan-overrides';
import config from './config';
import { configOverrides } from './paths';

console.log(configOverrides);

export const checkForProperty = (property) => {
  // eslint-disable-next-line no-prototype-builtins
  return reactYanOverrides.hasOwnProperty(property)
    ? reactYanOverrides[property]
    : config[property];
};
