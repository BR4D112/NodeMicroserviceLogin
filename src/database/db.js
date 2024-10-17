import { Sequelize } from 'sequelize'

export const sequalize = new Sequelize('loginDB', 'root', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})
