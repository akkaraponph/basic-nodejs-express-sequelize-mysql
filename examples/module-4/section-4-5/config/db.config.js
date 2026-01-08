module.exports = {
	DB_HOST: process.env.DB_HOST || "localhost",
	DB_USERNAME: process.env.DB_USERNAME || "root",
	DB_PASSWORD: process.env.DB_PASSWORD || "",
	DB_DATABASE: process.env.DB_DATABASE || "db_std",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};

