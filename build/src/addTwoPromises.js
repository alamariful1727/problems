"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addTwoPromises(promise1, promise2) {
    return __awaiter(this, void 0, void 0, function* () {
        const [a, b] = yield Promise.all([promise1, promise2]);
        return a + b;
    });
}
;
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
Promise.allSettled([Promise.resolve(2), Promise.reject(2)]).then(results => results.forEach(result => console.log(result)));
