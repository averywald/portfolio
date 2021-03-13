var express = require('express');
var path = require('path');
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var router = express.Router();

const url = 'mongodb://localhost:27017';
const client = new mongo(url);

// const options = {
//   root: path.join(`${__dirname}/../public/data/`)
// };

// TODO : shoud this return all blurbs related to a section ID?
router.get('/sections', (req, res, next) => {

  client.connect((err) => {
    assert.strictEqual(null, err);

    const db = client.db('portfolio');
    const coll = db.collection('sections');

    if (req.query.id) {
      coll.find({ id: Number(req.query.id) }).toArray((err, docs) => res.send(docs));
    } else {
      coll.find({}).toArray((err, docs) => res.send(docs));
    }
  });

});

// TODO : blurbs endpoint should query based on non-section related properties
router.get('/blurbs', (req, res, next) => {

  console.log(`API: ${req.query.sectionId}`);

  client.connect((err) => {
    assert.strictEqual(null, err);

    const db = client.db('portfolio');
    const coll = db.collection('blurbs');

    if (req.query.sectionId) {
      coll.find({ sectionId: Number(req.query.sectionId) }).toArray((err, docs) => res.send(docs));
    } else {
      coll.find({}).toArray((err, docs) => res.send(docs));
    }
  });

});

module.exports = router;
