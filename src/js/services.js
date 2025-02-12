export function stringifyObject(obj) {
    return JSON.stringify(obj);
}

export function setlocalStorage(key, value) {
    localStorage.setItem(key, value);
}

export function getlocalStorage(key) {
    return localStorage.getItem(key);
}

export function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

export function clearLocalStorage() {
    localStorage.clear();
}

