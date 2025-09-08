
import { Router } from "express";
import { getAllProducts, createMovel } from "../controllers/productsController";

const router = Router();

router.get("/", getAllProducts);

router.post("/createmovel", createMovel);

export default router;
