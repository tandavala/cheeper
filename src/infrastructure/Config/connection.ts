module.exports = {
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "dev",
    password: "dev",
    database: "cheeps",
  },
  migrations: {
    extension: "ts",
    directory: "../database/migrations",
  },
};
