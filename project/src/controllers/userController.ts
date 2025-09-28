import { Request, Response } from 'express';
import User from '../models/User';

export const addToCart = async (req: Request, res: Response) => {
  const user = await User.findById((req as any).user?.id);
  if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé.' });

  user.cart.push(req.body.productId);
  await user.save();
  res.status(200).json(user.cart);
};

export const addToWishlist = async (req: Request, res: Response) => {
  const user = await User.findById((req as any).user?.id);
  if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé.' });

  user.wishlist.push(req.body.productId);
  await user.save();
  res.status(200).json(user.wishlist);
};