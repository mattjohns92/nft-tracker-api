import { Router } from "express";

import contractRoutes from "./contractRoutes";

const router = Router();

router.use("/contracts", contractRoutes);

export default router;
