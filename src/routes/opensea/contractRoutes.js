import { Router } from "express";

import fetchContract from "../../controllers/opensea/contracts/fetchContract";

const router = Router();

router.route("/").get(fetchContract);

export default router;
