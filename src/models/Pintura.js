import { Schema, model } from "mongoose";

const PinturaSchema = Schema({
    code: { type: String },
    name: { type: String, required: [true, "Name is required"] },
    color: { type: String },
    brand: { type: String },
    cost: { type: Number, required: [true, "Cost is required"] },
    price: { type: Number },
    stock: { type: Number, required: true },
    img: { type: String, default: "" },
});

export default model("Pintura", PinturaSchema)