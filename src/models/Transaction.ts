import mongoose, { Schema } from "mongoose";

const TransactionSchema: Schema = new Schema({
  hash: { type: String, required: true },
  total: { type: Number, required: true },
  fees: { type: Number, required: true },
  inputs: { type: Array, required: true },
  outputs: { type: Array, required: true },
});

export default mongoose.model("transaction", TransactionSchema);
