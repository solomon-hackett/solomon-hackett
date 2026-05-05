import sql from './db';
import { Stat } from './definitions';

export async function fetchStatCards() {
  try {
    const data = await sql<Stat[]>`SELECT * FROM stats;`;
    return data;
  } catch (err) {
    console.log("Database query failed: " + err);
    throw new Error("Failed to fetch card data.");
  }
}
