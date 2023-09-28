const set = (key: string, value: string) => {
    if (typeof Storage !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem(key, value);
    }
};

const get = (key: string) => {
    let item: string | null = '';
    if (typeof Storage !== 'undefined' && typeof localStorage !== 'undefined') {
        item = localStorage.getItem(key);
    }
    return item;
};

const Storage = {
    set,
    get
};

export default Storage;
