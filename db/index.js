// url
// // mysql://root:kSYvSCD9Sfs4U3etkC4Q@containers-us-west-115.railway.app:5562/railway

// database
// // railway

// host
// // containers-us-west-115.railway.app

// password
// // kSYvSCD9Sfs4U3etkC4Q

// port
// // 5562

// user
// // root

const { Sequelize } = require("sequelize");
const { catalogModel } = require("../model/catalog");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("railway", "root", "kSYvSCD9Sfs4U3etkC4Q", {
  host: "containers-us-west-115.railway.app",
  dialect: "mysql",
  port: 5562,
});

const db = {};
db.sequelize = sequelize;
db.catalog = catalogModel(sequelize, Sequelize)

module.exports = db;
