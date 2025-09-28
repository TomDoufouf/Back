import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  firstname: string;
  email: string;
  password: string;
  cart: mongoose.Types.ObjectId[];
  wishlist: mongoose.Types.ObjectId[];
}

const userSchema: Schema = new Schema<IUser>({
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

export default mongoose.model<IUser>('User', userSchema);