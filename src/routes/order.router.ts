import orderController from "../controllers/order.controller"


import { Request, Response, Router } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) => orderController.getAll(req, res))
router.get("/:id", (req: Request, res: Response) => orderController.getById(req, res))
router.get("/add", (req: Request, res: Response) => orderController.add(req, res))
router.delete("/remove/:id", (req: Request, res: Response) => orderController.remove(req, res))
router.patch("/update/:id", (req: Request, res: Response) => orderController.update(req, res))

export default router