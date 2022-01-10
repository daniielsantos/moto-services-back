
import orderRepository from "../repository/order.repository"

class OrderService {
    constructor() {
    }

    async add(order) {    
        return await await orderRepository.add(order)
    }

    async getAll() {
        return await await orderRepository.getAll()
    }

    async remove(id) {
        return await await orderRepository.remove(id)
    }

    async getById(id) {
        return await await orderRepository.getById(id)
    }

    async update(id, order) {
        return await await orderRepository.update(id, order)
    }
}

export default new OrderService