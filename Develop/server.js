require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.ecommerce_db, process.env.root, process.env.DrewsBrews, {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});