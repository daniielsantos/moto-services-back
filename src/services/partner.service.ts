
import partnerRepository from "../repository/partner.repository"

class PartnerService {
    constructor() {
    }

    async add(partner) {    
        return await await partnerRepository.add(partner)
    }

    async getAll() {
        return await await partnerRepository.getAll()
    }

    async remove(id) {
        return await await partnerRepository.remove(id)
    }

    async getById(id) {
        return await await partnerRepository.getById(id)
    }

    async update(id, partner) {
        return await await partnerRepository.update(id, partner)
    }
}

export default new PartnerService