import * as mysql from "mysql"
import * as dotenv from "dotenv"

dotenv.config()

class Mysql {

    async execute(query, params = []) {
        const conn = mysql.createConnection({
            host: process.env.SQL_HOST,
            port: 3306,
            user: process.env.SQL_USER,
            password: process.env.SQL_PASS,
            database: process.env.SQL_DB
        })
        return new Promise((resolve, reject) => {
            conn.query(query, params, (erro, result) => {
              if (erro) {
                reject(erro)
              } else {
                resolve(result)
                conn.end()
              }
            })
        })

    }

}

export default new Mysql()