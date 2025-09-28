"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productService = __importStar(require("../services/productService"));
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des produits.' });
    }
};
exports.getAllProducts = getAllProducts;
const getProductById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'ID invalide.' });
    }
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product)
            return res.status(404).json({ message: 'Produit non trouvé.' });
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération du produit.' });
    }
};
exports.getProductById = getProductById;
const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création du produit.' });
    }
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'ID invalide.' });
    }
    try {
        const updated = await productService.updateProduct(req.params.id, req.body);
        if (!updated)
            return res.status(404).json({ message: 'Produit non trouvé.' });
        res.status(200).json(updated);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du produit.' });
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'ID invalide.' });
    }
    try {
        const deleted = await productService.deleteProduct(req.params.id);
        if (!deleted)
            return res.status(404).json({ message: 'Produit non trouvé.' });
        res.status(200).json({ message: 'Produit supprimé avec succès.' });
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du produit.' });
    }
};
exports.deleteProduct = deleteProduct;
