import mysql from "./mysql"


class Tables {
    async createTables() {
        await this.bike()
        await this.order()
        await this.partner()
    }

    async bike() {
      const query = `CREATE TABLE IF NOT EXISTS Bike (id INT NOT NULL AUTO_INCREMENT,
        name varchar(150),
        model varchar(150),
        brand varchar(150),
        year varchar(50),
        tumbnailUrl varchar(150),
        PRIMARY KEY (id))`
      await mysql.execute(query)
    }

    async order() {
        const query = `CREATE TABLE IF NOT EXISTS Orders (id INT NOT NULL AUTO_INCREMENT,
            date varchar(150),
            price double,
            description varchar(150),
            tumbnailUrl varchar(150),
            PRIMARY KEY (id))`
        await mysql.execute(query)
    }

    async partner() {
        const query = `CREATE TABLE IF NOT EXISTS Partner (id INT NOT NULL AUTO_INCREMENT,
            name varchar(150),
            description varchar(150),
            tumbnailUrl varchar(150),
            PRIMARY KEY (id))`
        await mysql.execute(query)
    }
  }

export default new Tables