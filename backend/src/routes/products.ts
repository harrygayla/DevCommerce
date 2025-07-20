import { Router } from "express";
import { db } from "../db";
import { products } from "../../src/db/schema";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/", async (req, res) => {
  const list = await db.select().from(products);
  res.json(list);
});

router.get("/:id", async (req, res) => {
  const item = await db.select().from(products)
    .where(eq(products.id, Number(req.params.id)));
  res.json(item[0] ?? null);
});

export default router;
