/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Récupère le panier de l'utilisateur connecté
 *     tags:
 *       - Panier
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Contenu du panier
 *       401:
 *         description: Non authentifié
 */

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Ajoute un produit au panier
 *     tags:
 *       - Panier
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *             properties:
 *               productId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Produit ajouté au panier
 *       401:
 *         description: Non authentifié
 */
import { Router } from 'express';
import { addToCart, addToWishlist } from '../controllers/userController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/cart', authMiddleware, addToCart);
router.post('/wishlist', authMiddleware, addToWishlist);

export default router;