import mysql from "../infra/databases/mysql"

class OrderRepository {
  constructor(){
  }

  async add(order) {    
    const sql = `INSERT INTO Orders SET ?`
    return await mysql.execute(sql, order)
  }

  async getAll() {
    const sql = 'SELECT * FROM Orders'
    return await mysql.execute(sql)
  }

  async remove(id) {
    const sql = `DELETE FROM Orders WHERE id = ?`
    return await mysql.execute(sql, id)
  }

  async getById(id) {
    const sql = `SELECT * FROM Orders WHERE id = ?`
    return await mysql.execute(sql, id)
  }

  async update(id, order) {
    const sql = `UPDATE Orders SET ? WHERE id = ?`
    const params = [{...order}, parseInt(id)]
    
    return await mysql.execute(sql, params)
  }
}

export default new OrderRepository