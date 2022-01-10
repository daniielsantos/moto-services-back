import { Request, Response } from "express"
import partnerService from "../services/partner.service"

class PartnerController {

    async add(req: Request, res: Response) { 
        let bike = req.body
        try {
            const result = await partnerService.add(bike)
            res.status(200).send(result)
        } catch (e) {
            res.status(400).send(e)
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const result = await partnerService.getAll()
            res.status(200).send(result)
        } catch (e) {
            res.status(400).send(e)
        }
    }
    
    async remove(req: Request, res: Response) {
        let id = req.params.id
        try {
            const result = await partnerService.remove(id)
            res.status(200).send(result)
        } catch (e) {
            res.status(400).send(e)
        }
    }
    
    async getById(req: Request, res: Response) {
        let id = req.params.id
        try {
            const result = await partnerService.getById(id)
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
            const result = await partnerService.update(id, bike)
            res.status(200).send(result)
        } catch (e) {
            res.status(400).send(e)
        }
    }
}

export default new PartnerController