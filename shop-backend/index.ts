import express, { type Request, type Response } from "express";
import productRoutes from "./src/routes/product.route";
import cors from 'cors'
import { toNodeHandler } from "better-auth/node";
import { auth } from "./src/lib/auth";

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true, 
}))

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.use("/api", productRoutes);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/*splat", (req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found" });
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
