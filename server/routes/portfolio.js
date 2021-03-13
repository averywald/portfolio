var express = require('express');
var path = require('path');
var router = express.Router();

const options = {
  root: path.join(`${__dirname}/../public/data/`)
};

router.get('/', (req, res, next) => {
  var section = (req.query.section) ? req.query.section : '*';

  var fileName = 'testSections.json';

  res.sendFile(fileName, options, (err) => {
    if (err) next(err);
    else console.log(`sent ${fileName}`);
  });
});

module.exports = router;
