import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const createRepositoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createRepositoryController = new CreateCategoryController(
    createRepositoryUseCase
);

export { createRepositoryController };
