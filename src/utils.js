export const getLocalStorage = (keys) =>
  keys.reduce((acc, key) => {
    const value = localStorage.getItem(key);
    return { ...acc, [key]: value };
  }, {});

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
