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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("../mongodb/mongodb"));
const appSetup = (app) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongodb_1.default)();
        const APP_PORT = Number(process.env.APP_PORT) || 5000;
        app.listen(APP_PORT, () => {
            console.log('Server is listening at port:: ' + APP_PORT);
        });
    }
    catch (error) {
        console.log('Failed to connect to database');
        console.log(error);
    }
});
exports.default = appSetup;
