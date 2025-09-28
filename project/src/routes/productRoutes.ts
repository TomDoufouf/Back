/**
 * @swagger
 * /products:
 *   get:
 *     summary: Récupère tous les produits
 *     tags:
 *       - Produits
 *     responses:
 *       200:
 *         description: Liste des produits
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Ajoute un nouveau produit (admin uniquement)
 *     tags:
 *       - Produits
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Produit créé avec succès
 *       403:
 *         description: Accès interdit
 */
import { Router } from 'express';
import * as productController from '../controllers/productController';
import authMiddleware from '../middlewares/authMiddleware';
import adminMiddleware from '../middlewares/adminMiddleware';

const router = Router();

// Routes publiques (lecture)
router.get('/', authMiddleware, productController.getAllProducts);
router.get('/:id', authMiddleware, productController.getProductById);

// Routes protégées (admin uniquement)
router.post('/', authMiddleware, adminMiddleware, productController.createProduct);
router.put('/:id', authMiddleware, adminMiddleware, productController.updateProduct);
router.delete('/:id', authMiddleware, adminMiddleware, productController.deleteProduct);

export default router;