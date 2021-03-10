var express = require('express');
const ListTask = require('../../models/ListTask');
var router = express.Router();

router.get('/', async (req, res, next) => {
  const result = await ListTask.find();
  res.json(result);
});


module.exports = router;