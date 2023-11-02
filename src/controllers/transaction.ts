import { Request, Response } from "express";
import Transaction from "../models/Transaction";

export default {
  get: async (req: Request, res: Response): Promise<void> => {
    try {
      let transactions = await Transaction.find({});
      res.json(transactions);
    } catch (err) {
      res.status(500).send("Server error");
    }
  },
};
