var express = require('express');
var path = require('path');
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var router = express.Router();

const url = 'mongodb://localhost:27017';
const client = new mongo(url);

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

router.get('/blurbs', (req, res, next) => {

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

router.get('/admins', (req, res, next) => {

  client.connect((err) => {
    assert.strictEqual(null, err);

    const db = client.db('portfolio');
    const coll = db.collection('admins');

    if (req.query.u && req.query.p) {
      coll.find({ username: req.query.u, password: req.query.p }).toArray((err, docs) => {
        if (docs.length > 0) res.send({ status: 200 });
        else res.send({ status: 404 });
      });
    }
  });

});

module.exports = router;
