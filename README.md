
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

MIT License

Copyright (c) 2025 Thomas Dufay

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[... texte complet disponible sur https://opensource.org/licenses/MIT ...]

---

### 🔐 `.env.example`

```env
PORT=3000
JWT_SECRET=your_jwt_secret
DB_URI=mongodb://localhost:27017/ecommerce
