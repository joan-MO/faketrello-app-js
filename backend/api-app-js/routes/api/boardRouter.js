var express = require('express');
const Board = require('../../models/board');
const boardSchemaValidation = require('../../utils/schemas/board')
var router = express.Router();
const validate = require('../../utils/validateData');


router.get('/', async (req, res, next) => {

  try {

    const title = req.query.title;

    const filter = {};

    if (title) {
      filter.title =  new RegExp('^'
      +title, "i");
    }

    const board = await Board.find(filter);

  if (!board) {
    return res.status(404).json({ error: 'not found' });
  }

  res.json(board);

  } catch (error) {
    next(error);
  }
  
});

router.get('/:_id', async (req, res, next) => {
  try {
    const _id = req.params._id;

    const board = await Board.findOne({ _id: _id });

    if (!board) {
      return res.status(404).json({ error: 'not found' });
    }
    res.json({ result: board });

  } catch (err) {
    next(err);
  }
});


router.post('/', validate(boardSchemaValidation), async (req, res, next) => {

  try {

    const { title } = req.body;
    const newBoard = new Board({title});
    
    await newBoard.save();
  
    res.status(201).json({ result: newBoard});

  } catch (error) {
    next(error);
  }

})

router.put('/:_id', validate(boardSchemaValidation), async(req, res, next) => {

  try {
    const { _id } = req.params;
    const { title } = req.body;
    const updatedBoard = await Board.findByIdAndUpdate(_id, {$set:{ title }}, { useFindAndModify: false} )
    
    if (!updatedBoard) {
      res.status(404).json({ error: 'not found' });
      return;
    }
  
    res.json({ result: updatedBoard.title });
  
  } catch (error) {
    next(error);
  }

})

router.put('/assignListTask/:_id', async (req, res, next) => {

  try {

    const { _id } = req.params;
    const { list_tasks } = req.body;
    const updatedBoard = await Board.findByIdAndUpdate(_id, {$push: { list_tasks: list_tasks}}, { useFindAndModify: false})

    if (!updatedBoard) {
      res.status(404).json({ error: 'not found' });
      return;
    }
  
    res.json(`${updatedBoard.title} updated`);
    
  } catch (error) {
    next(error); 
  }

});

router.put('/removeListTask/:_id', async (req, res, next) => {

  try {

    const { _id } = req.params;
    const { list_tasks } = req.body;
    const updatedBoard = await Board.findByIdAndUpdate(_id, {$pull: { list_tasks: list_tasks}}, { useFindAndModify: false})

    if (!updatedBoard) {
      res.status(404).json({ error: 'not found' });
      return;
    }
  
    res.json(`${updatedBoard.title} updated`);
    
  } catch (error) {
    next(error); 
  }

});

router.delete('/:_id', async (req, res, next) => {
  try {

    const { _id } = req.params;
    const deletedBoard = await Board.findByIdAndDelete(_id);
    res.json(`${deletedBoard.title} deleted`);

  } catch (error) {
    next(error);
  }

});

module.exports = router;