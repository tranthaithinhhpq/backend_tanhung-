'use strict';
import 'dotenv/config';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const db = {};

let sequelize;
const customizeConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: false,
  timezone: '+07:00',
  define: {
    freezeTableName: true   // << GIỮ NGUYÊN TÊN BẢNG, KHÔNG PLURALIZE
  },
  // (không bắt buộc) giúp giữ định dạng datetime dạng string
  // dialectOptions: { dateStrings: true, typeCast: true }
};

sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  customizeConfig
);

// load models & associate
fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && file.endsWith('.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

