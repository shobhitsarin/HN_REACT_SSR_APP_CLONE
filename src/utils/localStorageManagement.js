const isBrowser = typeof(window) !== 'undefined';

/**
 * Set key/value data to localstorage
 * @param {Object} arg - Key/Value paired data to be set in localstorage
 */
export const setLocalStorage = arg => {
    const { key } = arg;
    let {  value } = arg;
    if (isBrowser) {
      if(typeof(value) === 'object') value = JSON.stringify(value);
      return window.localStorage.setItem(key, value);
    }
    // return setCookie(arg);
    return null;
  };
  
  /**
   * Returns data stored in localstorage
   * @param {string} key - Localstorage item key
   * @returns {string} - Localstorage item data
   */
  export const getLocalStorage = key => {
    if (isBrowser) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    // return readCookie(key);
    return null;
  };
  