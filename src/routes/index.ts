import transaction from "./transaction";
import auth from "./auth";
import { Express } from "express";

export default (app: Express) => {
  app.use("/api/auth", auth);
  app.use("/api/txs", transaction);
};
