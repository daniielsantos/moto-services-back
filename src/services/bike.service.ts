
import bikeRepository from "../repository/bike.repository"

class BikeService {
    constructor() {
    }

    async add(bike) {    
        return await await bikeRepository.add(bike)
    }

    async getAll() {
        return await await bikeRepository.getAll()
    }

    async remove(id) {
        return await await bikeRepository.remove(id)
    }

    async getById(id) {
        return await await bikeRepository.getById(id)
    }

    async update(id, bike) {
        return await await bikeRepository.update(id, bike)
    }
}

export default new BikeService