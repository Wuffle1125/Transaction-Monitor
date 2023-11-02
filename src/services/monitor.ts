import axios from "axios";
import Transaction from "../models/Transaction";

export const Monitor = () => {
  console.log(Number(process.env.INTERVAL!));
  setInterval(async () => {
    axios
      .get("https://api.blockcypher.com/v1/btc/main/txs")
      .then(async ({ data: txs }) => {
        const sorted = txs.sort((tx1: any, tx2: any) => {
          return tx2.total - tx1.total;
        });
        const largest = sorted.filter(
          (tx: any) => tx.total === sorted[0]?.total
        );
        if (largest.length) {
          const prev = await Transaction.find({
            total: largest[0].total,
            fees: largest[0].fees,
            inputs: largest[0].inputs,
            outputs: largest[0].outputs,
          });
          if (prev.length) return;
          const transaction = new Transaction({
            hash: largest[0].hash,
            total: largest[0].total,
            fees: largest[0].fees,
            inputs: largest[0].inputs,
            outputs: largest[0].outputs,
          });
          await transaction.save();
        }
      })
      .catch(({ response }) => {});
  }, Number(process.env.INTERVAL!));

};
