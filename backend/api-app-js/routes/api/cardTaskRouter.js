var express = require('express');
const CardTask = require('../../models/CardTask');
var router = express.Router();

router.get('/', async (req, res, next) => {
  const result = await CardTask.find();
  res.json(result);
});

module.exports = router;