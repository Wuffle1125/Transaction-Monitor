import middleware from "./middlewares";
import routes from "./routes";
import dbConnect from "./config/db";
import { Monitor } from "./services/monitor";
import app from "./app";
import { config } from "dotenv";

config();
middleware(app);
routes(app);
dbConnect();

Monitor();

app.listen(process.env.PORT!, () => {
  console.log(`listening on port ${process.env.PORT}!`);
});

export default app;
