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
const express_1 = require("express");
const user_schema_1 = __importDefault(require("../mongodb/schema/user.schema"));
const controller = (0, express_1.Router)();
controller
    .post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { username, email, password } = req.body;
    try {
        const newUser = yield new user_schema_1.default({
            username,
            email,
            password,
        }).save();
        res.status(201).json(newUser);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Failed to create new user' });
    }
}))
    .get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_schema_1.default.find({});
        res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Failed to get users' });
    }
}))
    .get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id, req.params);
    if (!id) {
        return res.status(401).json({ message: 'Missing user ID in params' });
    }
    try {
        const existingUser = yield user_schema_1.default.findById(id);
        if (existingUser) {
            res.status(200).json(existingUser);
        }
        else {
            res.status(400).json({ message: 'No user found with ID: ' + id });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to get user from database' });
    }
}))
    .patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id, req.params);
    if (!id) {
        return res.status(401).json({ message: 'Missing user ID in params' });
    }
    try {
        const existingUser = yield user_schema_1.default.findById(id);
        if (existingUser) {
            const changes = req.body;
            console.log(changes);
            const updatedUser = yield user_schema_1.default.findOneAndUpdate({ _id: id }, changes, { new: true });
            res.status(200).json(updatedUser);
        }
        else {
            res.status(400).json({ message: 'No user found with ID: ' + id });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to get user from database' });
    }
}))
    .delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        return res
            .status(400)
            .json({ message: 'Request must include id params' });
    }
    try {
        const user = yield user_schema_1.default.findOne({ _id: id });
        yield user_schema_1.default.deleteOne({ _id: id });
        res.status(203).json({ message: 'User with id ' + id + ' was deleted' });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Failed to delete user' });
    }
}));
exports.default = controller;
