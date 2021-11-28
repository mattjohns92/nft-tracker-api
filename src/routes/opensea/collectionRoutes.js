import { Router } from "express";

import fetchCollections from "../../controllers/collections/fetchCollections";

const router = Router();

router.route("/").get(fetchCollections);

export default router;
