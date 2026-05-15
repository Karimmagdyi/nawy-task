import mongoose, { Document, Schema } from "mongoose";

export interface IApartment extends Document {
  name: string;
  developer: string;
  project: string;
  unitNumber: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
}

const ApartmentSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    developer: { type: String, required: true },
    project: { type: String, required: true },
    unitNumber: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    area: { type: Number, required: true },
    images: [{ type: String }],
  },
  { timestamps: true },
);

export default mongoose.model<IApartment>("Apartment", ApartmentSchema);
