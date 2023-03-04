import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

    handle(request: Request, response: Response) {
        try {
            const specifications = this.listSpecificationsUseCase.execute();

            return response.status(200).json(specifications);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { ListSpecificationsController };
