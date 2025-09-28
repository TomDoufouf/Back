import { Request, Response, NextFunction } from 'express';

const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  //if (req.user?.email === 'admin@admin.com') {
  if ((req as any).user?.email === 'admin@admin.com') {
    return next();
  }
  return res.status(403).json({ message: 'Accès réservé à l’administrateur.' });
};

export default adminMiddleware;