import Sequelize from 'sequelize'
export const sequelize = new Sequelize(
    'Proyecto', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
}) 