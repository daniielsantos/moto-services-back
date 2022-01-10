import BikeController from "../controllers/bike.controller"


import { Request, Response, Router } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) => BikeController.getAll(req, res))
router.get("/:id", (req: Request, res: Response) => BikeController.getById(req, res))
router.get("/add", (req: Request, res: Response) => BikeController.add(req, res))
router.delete("/remove/:id", (req: Request, res: Response) => BikeController.remove(req, res))
router.patch("/update/:id", (req: Request, res: Response) => BikeController.update(req, res))

export default router