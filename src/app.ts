import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productsRoutes from "./routes/productsRoutes";

dotenv.config();

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGIN?.split(",") || [];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // permite
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

// app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json());


// Rotas

// Mostrar Todos Moveis
app.use("/furniture", productsRoutes);




const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
