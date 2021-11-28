import { Router } from "express";

import openseaRoutes from "./opensea/openseaRoutes";

const router = Router();

router.get("/", async (req, res, next) => {
  res.status = "200";
  res.send("OK");

  await next();
});

router.use("/api/v1/opensea", openseaRoutes);

export default router;
