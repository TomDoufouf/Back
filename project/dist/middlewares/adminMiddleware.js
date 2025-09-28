"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adminMiddleware = (req, res, next) => {
    if (req.user?.email === 'admin@admin.com') {
        return next();
    }
    return res.status(403).json({ message: 'Accès réservé à l’administrateur.' });
};
exports.default = adminMiddleware;
