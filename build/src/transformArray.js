"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_assert_1 = __importDefault(require("node:assert"));
const input = [
    {
        id: '1111',
        x: 30,
        y: 50,
        color: '#FF8200',
        type: 'circle',
        radius: 14,
    },
    {
        id: '2222',
        x: 50,
        y: 250,
        color: '#80ADCE',
        type: 'circle',
        radius: 56,
    },
    {
        id: '3333',
        x: 90,
        y: 160,
        color: '#FF8200',
        type: 'rectangle',
        width: 140,
        height: 320,
    },
    {
        id: '4444',
        x: 32,
        y: 684,
        color: '#FF8200',
        type: 'rectangle',
        width: 164,
        height: 983,
    },
];
const expected = {
    circle: {
        '1111': { x: 30, y: 50, color: '#FF8200', radius: 14 },
        '2222': { x: 50, y: 250, color: '#80ADCE', radius: 56 },
    },
    rectangle: {
        '3333': { x: 90, y: 160, color: '#FF8200', width: 140, height: 320 },
        '4444': { x: 32, y: 684, color: '#FF8200', width: 164, height: 983 },
    },
};
// ? Solution 1
// ? It's not dynamic
const solution1 = (input) => {
    let output = {}; // Add type
    input.forEach((v) => {
        if (v.type === 'circle') {
            output.circle = Object.assign(Object.assign({}, output.circle), { [v.id]: { x: v.x, y: v.y, color: v.color, radius: v.radius } });
        }
        else {
            output.rectangle = Object.assign(Object.assign({}, output.rectangle), { [v.id]: {
                    x: v.x,
                    y: v.y,
                    color: v.color,
                    width: v.width,
                    height: v.height,
                } });
        }
    });
    return output;
};
// ? Solution 2
// ? Dynamic type
const solution2 = (input) => {
    let output = {}; // Add type
    input.forEach((_a) => {
        var { type, id } = _a, rest = __rest(_a, ["type", "id"]);
        if (!output[type]) {
            output[type] = {};
        }
        output[type][id] = rest;
    });
    return output;
};
const solution3 = (input) => input.reduce((acc, _a) => {
    var { type, id } = _a, rest = __rest(_a, ["type", "id"]);
    if (!acc[type]) {
        acc[type] = {};
    }
    acc[type][id] = rest;
    return acc;
}, {});
node_assert_1.default.deepStrictEqual(solution1(input), expected);
node_assert_1.default.deepStrictEqual(solution2(input), expected);
node_assert_1.default.deepStrictEqual(solution3(input), expected);
console.log("Passed");
