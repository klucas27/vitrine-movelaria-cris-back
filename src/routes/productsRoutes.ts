import { Router } from "express";
import { getActiveProducts, getAllProducts, deleteProduct, createProduct, updateProduct } from "../controllers/productsController";

const router = Router();

router.get("/all", getAllProducts);
router.get("/ativos", getActiveProducts);
router.delete('/:id', deleteProduct);
router.post("/createProduct", createProduct);
router.put("/update/:id", updateProduct);

export default router;
