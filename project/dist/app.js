"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
//import cors from 'cors';
//import helmet from 'helmet';
// Import des routes
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
//import cartRoutes from './routes/cartRoutes';
//import wishlistRoutes from './routes/wishlistRoutes';
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middlewares globaux
app.use(express_1.default.json());
//app.use(cors());
//app.use(helmet());
// Connexion à MongoDB
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connexion à MongoDB réussie'))
    .catch((err) => console.error('❌ Erreur MongoDB :', err));
// Déclaration des routes
app.use('/products', productRoutes_1.default);
app.use('/auth', authRoutes_1.default);
//app.use('/cart', cartRoutes);
//app.use('/wishlist', wishlistRoutes);
app.use('/user', userRoutes_1.default);
// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
