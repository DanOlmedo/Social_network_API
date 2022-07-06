const express = require('express');
const mongodb = require('mongodb').MongoClient;
const data = require('./models/data');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/SN_db`;

let db;

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

app.use(express.json());

app.get('/users', (req, res) => {
    db.collection('userList')
      .find()
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
  });
  