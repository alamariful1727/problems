"use strict";
class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }
    set(key, value, duration) {
        const found = this.cache.has(key);
        if (found) {
            clearTimeout(this.cache.get(key).timer);
        }
        const timer = setTimeout(() => this.cache.delete(key), duration);
        this.cache.set(key, { value, timer });
        return found;
    }
    get(key) {
        return this.cache.has(key) ? this.cache.get(key).value : -1;
    }
    count() {
        return this.cache.size;
    }
}
const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1); // 42
timeLimitedCache.count(); // 1
