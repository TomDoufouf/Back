"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const getAllProducts = async () => {
    return await Product_1.default.find();
};
exports.getAllProducts = getAllProducts;
const getProductById = async (id) => {
    return await Product_1.default.findById(id);
};
exports.getProductById = getProductById;
const createProduct = async (data) => {
    const newProduct = new Product_1.default(data);
    return await newProduct.save();
};
exports.createProduct = createProduct;
const updateProduct = async (id, data) => {
    return await Product_1.default.findByIdAndUpdate(id, data, { new: true });
};
exports.updateProduct = updateProduct;
const deleteProduct = async (id) => {
    return await Product_1.default.findByIdAndDelete(id);
};
exports.deleteProduct = deleteProduct;
