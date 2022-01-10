import mysql from "../infra/databases/mysql"

class BikeRepository {
    constructor(){
    }
  
    async add(bike) {    
      const sql = `INSERT INTO Bike SET ?`
      return await mysql.execute(sql, bike)
    }
  
    async getAll() {
      const sql = 'SELECT * FROM bike'
      return await mysql.execute(sql)
    }
  
    async remove(id) {
      const sql = `DELETE FROM Bike WHERE id = ?`
      return await mysql.execute(sql, id)
    }
  
    async getById(id) {
      const sql = `SELECT * FROM Bike WHERE id = ?`
      return await mysql.execute(sql, id)
    }
  
    async update(id, bike) {
      const sql = `UPDATE Bike SET ? WHERE id = ?`
      const params = [{...bike}, parseInt(id)]
      
      return await mysql.execute(sql, params)
    }
  }

  export default new BikeRepository