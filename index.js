import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// rutas de la API
import postRoutes from "./src/routes/postRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Blogging API funcionando 🚀");
});

// postRoutes
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});