export function stringifyObject(obj) {
    return JSON.stringify(obj);
}

export function setlocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getlocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

export function clearLocalStorage() {
    localStorage.clear();
}

