import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  code: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
  internalReference: string;
  shellId: number;
  inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
  rating: number;
  createdAt: number;
  updatedAt: number;
}

const productSchema: Schema = new Schema<IProduct>({
  code: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  image: String,
  category: String,
  price: Number,
  quantity: Number,
  internalReference: String,
  shellId: Number,
  inventoryStatus: {
    type: String,
    enum: ['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK'],
    default: 'INSTOCK'
  },
  rating: Number,
  createdAt: Number,
  updatedAt: Number
});

export default mongoose.model<IProduct>('Product', productSchema);