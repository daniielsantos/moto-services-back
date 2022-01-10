import mysql from "../infra/databases/mysql"

class PartnerRepository {
  constructor(){
  }

  async add(partner) {    
    const sql = `INSERT INTO Partner SET ?`
    return await mysql.execute(sql, partner)
  }

  async getAll() {
    const sql = 'SELECT * FROM Partner'
    return await mysql.execute(sql)
  }

  async remove(id) {
    const sql = `DELETE FROM Partner WHERE id = ?`
    return await mysql.execute(sql, id)
  }

  async getById(id) {
    const sql = `SELECT * FROM Partner WHERE id = ?`
    return await mysql.execute(sql, id)
  }

  async update(id, partner) {
    const sql = `UPDATE Partner SET ? WHERE id = ?`
    const params = [{...partner}, parseInt(id)]
    
    return await mysql.execute(sql, params)
  }
}

export default new PartnerRepository