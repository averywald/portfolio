var express = require('express');
var path = require('path');
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var router = express.Router();

const url = 'mongodb://localhost:27017';
const client = new mongo(url);

const options = {
  root: path.join(`${__dirname}/../public/data/`)
};

router.get('/', (req, res, next) => {
  var section = (req.query.section) ? req.query.section : '*';

  var fileName = 'testSections.json';

  client.connect((err) => {
    assert.equal(null, err);
    console.log('successfully connected to db');

    const db = client.db('portfolio');
    const coll = db.collection('sections');
    
    coll.find({}).toArray((err, docs) => {
      console.log(docs);
    });
  });

  

  res.sendFile(fileName, options, (err) => {
    if (err) next(err);
    else console.log(`sent ${fileName}`);
  });
});

module.exports = router;
