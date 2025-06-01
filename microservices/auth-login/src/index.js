const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();



const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json()); // <-- Importante para leer JSON en POST

// Rutas
app.use("/api", authRoutes); // <-- Aquí montamos /api/login

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
  })
  .catch((err) => console.error("❌ Error de conexión a MongoDB:", err));
