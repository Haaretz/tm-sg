import config from './configShim.json';

export default {
  /**
   * Get the dot-notation key path `property` from `config`, returning `undefined`
   * if it doesn't exist.
   *
   * @param {(string|string[])} property - The key path to read on `config`.
   * @returns {*} The value of the given property on `config`.
   */
  getSafe(property) {
    const keys = Array.isArray(property) ? property : property.split('.');
    let value = config;
    let key;
    while (keys.length) {
      if (value === null || typeof value !== 'object') {
        value = undefined;
        break;
      }
      key = keys.shift();
      value = value[key];
    }
    return value;
  },

  /**
   * Like `getSafe`, but throw an error if the value is undefined.
   * Emulates the `get()` method from `config`.
   *
   * @param {(string|string[])} property - The key path to read on `config`.
   * @returns {*} The value of the given property on `config`.
   */
  get(property) {
    const keyPath = Array.isArray(property) ? property.join('.') : property;
    const value = this.getSafe(property);
    if (value === undefined) {
      throw new Error(`Configuration property "${keyPath}" is not defined`);
    }
    return value;
  },

  /**
   * Emulates the `has()` method from `config`.
   *
   * @param {(string|string[])} property - The key path to read on `config`.
   * @returns {boolean} Whether or not the given property is defined in `config`
   */
  has(property) {
    if (property === null || property === undefined) {
      return false;
    }
    return this.getSafe(property) !== undefined;
  },
};
