import { Router } from "express";

const routes = Router();
import casayJardinRoutes from "./casayjardin/index.js";

routes.use("/casayjardin", casayJardinRoutes);

export default routes;