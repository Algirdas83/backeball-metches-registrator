import mysql from 'mysql2/promise'
import { Sequelize } from 'sequelize'
import {Users, Match, Points} from '../model/index.js'


const db = {}


 const  dbTemplate = {

    host:'localhost',
    user: 'root',
    password: '',
    database: 'basketball'
}



 const connection = await mysql.createConnection({
    host:dbTemplate.host,
    user: dbTemplate.user,
    password: dbTemplate.password,
    
})

 await connection.query('CREATE DATABASE IF NOT EXISTS ' + dbTemplate.database)




const sequelize = new Sequelize(dbTemplate.database, dbTemplate.user, dbTemplate.password,{

    dialect: 'mysql'
}  )

db.Users = Users(sequelize)
db.Match = Match(sequelize)
db.Points = Points(sequelize)

await sequelize.sync({ alert: true });

export default db