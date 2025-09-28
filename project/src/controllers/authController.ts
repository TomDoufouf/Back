
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const register = async (req: Request, res: Response) => {
  const { username, firstname, email, password } = req.body;
  if (!username || !firstname || !email || !password) {
    return res.status(400).json({ message: 'Champs requis manquants' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(409).json({ message: 'Utilisateur déjà existant' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, firstname, email, password: hashedPassword });
  await newUser.save();

  res.status(201).json({ message: 'Compte créé avec succès' });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Utilisateur non trouvé' });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ message: 'Mot de passe incorrect' });

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  res.json({ token });
};
