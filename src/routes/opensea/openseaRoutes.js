import { Router } from "express";

import collectionRoutes from "./collectionRoutes";

const router = Router();

router.use("/collections", collectionRoutes);

export default router;
