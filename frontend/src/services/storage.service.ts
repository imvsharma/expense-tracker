export const StorageService = {
    set: (key: string, value : string) => {
        localStorage.setItem(key, value)
    },

    get: (key: string) => {
        return localStorage.getItem(key)
    },

    remove: (key: string) => {
        localStorage.removeItem(key)
    },

    clear: () => {
        localStorage.clear()
    },

    length: localStorage.length
}