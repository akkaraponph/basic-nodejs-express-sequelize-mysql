const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
	dbConfig.DB_DATABASE, 
	dbConfig.DB_USERNAME, 
	dbConfig.DB_PASSWORD, 
	{
		host: dbConfig.DB_HOST,
		dialect: dbConfig.dialect,
		operatorsAliases: false,
		pool: {
			max: dbConfig.pool.max,
			min: dbConfig.pool.min,
			acquire: dbConfig.pool.acquire,
			idle: dbConfig.pool.idle
		}
	}
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Register models
db.students = require("./student.model.js")(sequelize, Sequelize);
db.faculty = require("./faculty.model.js")(sequelize, Sequelize);

// Initialize associations
Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

module.exports = db;
