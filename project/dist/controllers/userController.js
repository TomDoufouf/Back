"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToWishlist = exports.addToCart = void 0;
const User_1 = __importDefault(require("../models/User"));
const addToCart = async (req, res) => {
    const user = await User_1.default.findById(req.user?.id);
    if (!user)
        return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    user.cart.push(req.body.productId);
    await user.save();
    res.status(200).json(user.cart);
};
exports.addToCart = addToCart;
const addToWishlist = async (req, res) => {
    const user = await User_1.default.findById(req.user?.id);
    if (!user)
        return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    user.wishlist.push(req.body.productId);
    await user.save();
    res.status(200).json(user.wishlist);
};
exports.addToWishlist = addToWishlist;
