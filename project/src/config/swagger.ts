import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Gestion Produits',
      version: '1.0.0',
      description: 'Documentation de l\'API pour les produits, utilisateurs, panier et liste d\'envies',
    },
  },
  apis: ['./src/routes/*.ts'], // Documentation auto à partir des routes
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};