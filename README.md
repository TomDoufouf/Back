
# 🛒 Back-end E-commerce API

Projet Express.js en TypeScript pour gérer :
- Authentification JWT
- Gestion des produits
- Panier
- Liste d'envies
- Autorisations

## 🚀 Installation

git clone https://github.com/TomDoufouf/Back.git
cd Back
npm install

🧪 Lancer le projet
Shell
npm run dev

📦 Endpoints principaux
POST /auth/register : Inscription
POST /auth/login : Connexion
GET /products : Liste des produits
POST /cart : Ajouter au panier
POST /wishlist : Ajouter à la liste d'envies

🔐 Authentification
Utilise JWT pour sécuriser les routes privées.

🛠️ Stack
Node.js
Express.js
TypeScript
MongoDB (à venir)
📄 Licence
MIT


---

### 🔐 `.env.example`

```env
PORT=3000
JWT_SECRET=your_jwt_secret
DB_URI=mongodb://localhost:27017/ecommerce
