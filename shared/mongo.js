const { MongoClient } = require("mongodb");

const URL= "mongodb+srv://sandeep:123456qw@cluster0.4bf2f.mongodb.net/password-reset?retryWrites=true&w=majority";

// const URL = process.env.URL;

const DB_NAME = process.env.DB_NAME;
const client = new MongoClient(URL);

const mongodb = {
  db: null,
  users: null,

  async connect() {
    await client.connect();
    this.db = client.db(DB_NAME);
    this.users = this.db.collection("users");
  },
};

module.exports = mongodb;
