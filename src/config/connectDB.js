const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('tanhung_general_hospital_db', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
export default connection;