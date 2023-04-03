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
const userService_1 = __importDefault(require("../services/userService"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Check if user already exists
        const userExists = yield userService_1.default.findUserByEmail(email);
        if (userExists) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        // Register user
        const registered = yield userService_1.default.registerUser(email, password);
        if (!registered) {
            throw new Error('Failed to register user');
        }
        return res.json({ msg: 'User registered successfully' });
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        return res.status(500).json({ msg: 'Server error' });
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = yield userService_1.default.findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        // Check password
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        // TODO: Return JWT token
        const token = 'dummy_token';
        res.json({ token });
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        return res.status(500).json({ msg: 'Server error' });
    }
});
exports.default = {
    register,
    login,
};
//# sourceMappingURL=userController.js.map