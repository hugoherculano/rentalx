import { Router } from "express";
import { createRepositoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createRepositoryController.handle(request, response);
});

export { categoriesRoutes };
