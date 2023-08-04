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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function mongooseConnect() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const mongoDbUri = (_a = process.env.MONGODB_URI) !== null && _a !== void 0 ? _a : 'mongodb://localhost:27017';
        console.log(mongoDbUri);
        yield (0, mongoose_1.connect)(mongoDbUri);
    });
}
exports.default = mongooseConnect;
