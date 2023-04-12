require('dotenv').config();

const DB_USER = process.env.DB_USER || 'usuario';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_DATABASE = process.env.DB_DATABASE || 'project';

module.exports = {
  api: {
    port: parseInt(process.env.API_PORT) || 4000
  },
  database: {
    uri: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster-gcp-southameric.eyzpkug.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`,
    collections: {
      users: 'users',
      notes: 'notes'
    }
  }
};
