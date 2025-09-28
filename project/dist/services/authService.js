"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = async (data) => {
    if (!data.password)
        throw new Error("Mot de passe requis");
    const hashedPassword = await bcryptjs_1.default.hash(data.password, 10);
    const user = new User_1.default({ ...data, password: hashedPassword });
    return await user.save();
};
exports.register = register;
const login = async (email, password) => {
    const user = await User_1.default.findOne({ email });
    if (!user)
        return null;
    const isMatch = await bcryptjs_1.default.compare(password, user.password);
    if (!isMatch)
        return null;
    const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, user };
};
exports.login = login;
