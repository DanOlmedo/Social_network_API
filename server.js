const express = require('express');
const mongodb = require('mongodb').MongoClient;
let db = require('./config/connection');
const routes = require('./routes');
const { User, Thought, Reaction } = require('./models');
const data = require('./utils/data')

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectionStringURI = `mongodb://localhost:27017/SN_db`;
app.use(routes);
  
mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();

    db.collection('userList').deleteMany({});

    db.collection('userList').insertOne(data, (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res);
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);