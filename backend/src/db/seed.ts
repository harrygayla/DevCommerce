import { db } from "./index";
import { products } from "./schema";

async function seed() {
  await db.insert(products).values([
    { name: "Hat", price: "14.99" },
    { name: "Jacket", price: "59.99" }
  ]);
  console.log("🌱 Seed complete");
  process.exit(0);
}
seed();
