import express from "express";
import cors from "cors";
import { db } from "./db/index.js"; // DB connection from drizzle
import { products } from "./db/schema.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  const result = await db.select().from(products);
  res.json(result);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
