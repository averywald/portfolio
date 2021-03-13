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

router.get('/sections/:id', (req, res, next) => {
  var sectionId = req.params.id;

  client.connect((err) => {
    assert.strictEqual(null, err);

    const db = client.db('portfolio');
    const coll = db.collection('sections');

    coll.find({ id: Number(sectionId) }).toArray((err, docs) => {

      res.send(docs, options, (err) => {
        if (err) next(err);
        else console.log(`sent docs`);
      });

    });

  });

});

module.exports = router;
