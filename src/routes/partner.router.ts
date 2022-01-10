import partnerController from "../controllers/partner.controller"


import { Request, Response, Router } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) => partnerController.getAll(req, res))
router.get("/:id", (req: Request, res: Response) => partnerController.getById(req, res))
router.get("/add", (req: Request, res: Response) => partnerController.add(req, res))
router.delete("/remove/:id", (req: Request, res: Response) => partnerController.remove(req, res))
router.patch("/update/:id", (req: Request, res: Response) => partnerController.update(req, res))

export default router