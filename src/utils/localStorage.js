export const setLocalStorageItem = (key, value) => {
  const stringifiedValue = JSON.stringify(value)
  localStorage.setItem(key, stringifiedValue)
}

export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key)
}

export const getLocalStorageItem = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

/* const useLocalStorageSubscribe = (callback) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}; */
