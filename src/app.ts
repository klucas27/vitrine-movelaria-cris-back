import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productsRoutes from "./routes/productsRoutes";


dotenv.config();
const PORT = parseInt(process.env.PORT || "3003", 10);

const app = express();

app.use(cors()); // Allow all origins, or configure specific origins
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


// Rotas
app.use("/furniture", productsRoutes);


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`)
});