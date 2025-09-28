/**
 * @swagger
 * /auth/token:
 *   post:
 *     summary: Connexion utilisateur et génération du token JWT
 *     tags:
 *       - Authentification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie, token JWT retourné
 *       401:
 *         description: Identifiants invalides
 */
import { Router } from 'express';
import * as authController from '../controllers/authController';

const router = Router();

router.post('/account', authController.register);
router.post('/token', authController.login);

export default router;
