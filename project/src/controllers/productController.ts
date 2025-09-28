import { Request, Response } from 'express';
import mongoose from 'mongoose';
import * as productService from '../services/productService';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des produits.' });
  }
};

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'ID invalide.' });
    }

    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Produit non trouvé.' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération du produit.' });
    }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du produit.' });
  }
};

export const updateProduct = async (req: Request, res: Response) => 
{

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'ID invalide.' });
    }

    try {
        const updated = await productService.updateProduct(req.params.id, req.body);
        if (!updated) return res.status(404).json({ message: 'Produit non trouvé.' });
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du produit.' });
    }
};

export const deleteProduct = async (req: Request, res: Response) => 
{
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'ID invalide.' });
    }

    try {
        const deleted = await productService.deleteProduct(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Produit non trouvé.' });
        res.status(200).json({ message: 'Produit supprimé avec succès.' });
        } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du produit.' });
    }
};