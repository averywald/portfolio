var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var options = {
    root: path.join(`${__dirname}/../public/data/`)
  }

  var fileName = 'testSections.json';

  res.sendFile(fileName, options, (err) => {
    if (err) next(err);
    else console.log(`sent ${fileName}`);
  });
});

module.exports = router;
