
import { Router } from "express";
import { getActiveProducts, getAllProducts } from "../controllers/productsController";

const router = Router();


router.get("/all", getAllProducts);
router.get("/ativos", getActiveProducts);

// router.post("/createmovel", createMovel);

export default router;
