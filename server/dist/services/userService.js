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
// services/userService.ts
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if user already exists
        let user = yield user_1.default.findOne({ email });
        if (user) {
            return false;
        }
        // Create new user
        user = new user_1.default({ email, password });
        // Hash password before saving
        const salt = yield bcrypt_1.default.genSalt(10);
        user.password = yield bcrypt_1.default.hash(password, salt);
        yield user.save();
        return true;
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        throw new Error('Failed to register user');
    }
});
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findOne({ email });
        return user;
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        throw new Error('Failed to find user');
    }
});
exports.default = {
    registerUser,
    findUserByEmail,
};
//# sourceMappingURL=userService.js.map