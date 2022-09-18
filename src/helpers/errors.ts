import { Request, Response } from "express";

export default class{
    static notFound(req: Request, res: Response): void{
        res.status(400).send("Path not found");
    }
}