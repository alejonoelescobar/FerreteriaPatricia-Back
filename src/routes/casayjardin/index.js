import { Router } from "express";
import { casayjardinControllers } from "../../controllers/index.js";

const casayJardinRoutes = Router();

casayJardinRoutes.post("/createItem", casayjardinControllers.createCasaYJardinItem);
casayJardinRoutes.get("/getItems", casayjardinControllers.getCasaYJardinItems);
casayJardinRoutes.get("/getItem/:id", casayjardinControllers.getByIDCasaYJardinItem);
casayJardinRoutes.delete("/deleteItem/:id", casayjardinControllers.deleteCasaYJardinItem);
casayJardinRoutes.put("/editItem/:id", casayjardinControllers.editCasaYJardinItem);

export default casayJardinRoutes;