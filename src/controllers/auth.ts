import { Response } from "express";
import jwt from "jsonwebtoken";

export default {
  getToken: async (req: any, res: Response): Promise<void> => {
    try {
      const payload = {
        user: {
          id: req.params.id,
        },
      };

      jwt.sign(
        payload,
        "password",
        { expiresIn: "5 days" },
        (err: any, token: any) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      res.status(500).send("Server error");
    }
  },
};
