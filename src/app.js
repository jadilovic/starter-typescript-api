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
class me {
    constructor() {
        this.name = 'aki';
        this.age = 44;
    }
}
function myObj(obj) {
    return 'test ' + obj.name + ' ' + obj.age;
}
console.log(myObj({ name: 'wou', age: 22 }));
function getLocation(obj) {
    return `${obj.name} lives at ${obj.address.city} with post number ${obj.address.post}`;
}
console.log(getLocation({ name: 'mark', address: { city: 'Bosanski Novi', post: 9999 } }));
var Category;
(function (Category) {
    Category["Sport"] = "S";
    Category["Movie"] = "M";
    Category["Animal"] = "A";
    Category["Car"] = "C";
})(Category || (Category = {}));
function getCategory(cat, cat1) {
    return cat + cat1;
}
console.log(getCategory(Category.Animal, Category.Car));
const myValue = 'Testing';
const myLength = myValue.length;
console.log(myLength);
function getTypes(value) {
    return value;
}
console.log(getTypes({ name: 'aki', age: 11 }));
function usingGenerics(value) {
    return [value];
}
console.log(usingGenerics('boby'));
console.log(usingGenerics(33));
class DoBig {
    doIt() {
        console.log('I am doing it');
    }
}
const doMe = new DoBig();
doMe.doIt();
