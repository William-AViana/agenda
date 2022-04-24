require('dotenv').config();

module.exports = {
  test: {
    client: 'pg',
    version: '8.7',
    connection: {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORLD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
