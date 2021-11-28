import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";

import routes from "./routes/routes";

const app = express();
const port = process.env.PORT || 8081;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["DELETE", "GET", "POST", "PUT"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

export default app;
