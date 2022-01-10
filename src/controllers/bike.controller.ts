import { Request, Response } from "express"
import bikeService from "../services/bike.service"

class BikeController {

    async add(req: Request, res: Response) { 
        let bike = req.body
        try {
            const result = await bikeService.add(bike)
            res.status(200).send(result)
        } catch (e) {
            res.status(400).send(e)
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const result = await bikeService.getAll()
            res.status(200).send(result)
        } catch (e) {
            res.status(400).send(e)
        }
    }
    
    async remove(req: Request, res: Response) {
        let id = req.params.id
        try {
            const result = await bikeService.remove(id)
            res.status(200).send(result)
        } catch (e) {
            res.status(400).send(e)
        }
    }
    
    async getById(req: Request, res: Response) {
        let id = req.params.id
        try {
            const result = await bikeService.getById(id)
            res.status(200).send(result)
        } catch (e) {
            res.status(400).send(e)
        }
    }
    
    async update(req: Request, res: Response) {
        let id = req.params.id
        let bike = req.body
        const params = [{...bike}, parseInt(id)]
        
        try {
            const result = await bikeService.update(id, bike)
            res.status(200).send(result)
        } catch (e) {
            res.status(400).send(e)
        }
    }
}

export default new BikeController