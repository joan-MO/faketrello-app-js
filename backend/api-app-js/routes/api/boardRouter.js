var express = require('express');
const Board = require('../../models/board');
var router = express.Router();

router.get('/', async (req, res, next) => {
  const result = await Board.find();
  res.json(result);
});

router.post('/', async (req, res, next) => {
  const { title } = req.body;
  const newBoard = new Board ({title});

  const boardCreate = await newBoard.save();

  res.status(201).json({ result: newBoard});

})

module.exports = router;