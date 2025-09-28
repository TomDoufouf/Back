import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import cors from 'cors';
//import helmet from 'helmet';

// Import des routes
import productRoutes from './routes/productRoutes';
import authRoutes from './routes/authRoutes';
//import cartRoutes from './routes/cartRoutes';
//import wishlistRoutes from './routes/wishlistRoutes';
import userRoutes from './routes/userRoutes';


import { setupSwagger } from './config/swagger';


import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('./swagger.yaml');


dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middlewares globaux
app.use(express.json());
//app.use(cors());
//app.use(helmet());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('✅ Connexion à MongoDB réussie'))
  .catch((err) => console.error('❌ Erreur MongoDB :', err));

// Déclaration des routes
app.use('/products', productRoutes);
app.use('/auth', authRoutes);
//app.use('/cart', cartRoutes);
//app.use('/wishlist', wishlistRoutes);
app.use('/user', userRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

setupSwagger(app);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});