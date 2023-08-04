"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const init_1 = __importDefault(require("./startup/init"));
const router_1 = __importDefault(require("./startup/router"));
const security_1 = __importDefault(require("./startup/security"));
(0, init_1.default)(app);
(0, security_1.default)(app, express_1.default);
(0, router_1.default)(app);
console.log('bob');
const getDuplicates = (str) => {
    const obj = {};
    str.split('').forEach((char) => {
        if (obj[char]) {
            obj[char]++;
        }
        else {
            obj[char] = 1;
        }
    });
    return obj;
};
const text = 'adsjfdsfsfjsdjfhacabcsbajda';
console.log(getDuplicates(text));
const oneObj = { name: 'hello' };
console.log(oneObj);
const names = ['bob'];
