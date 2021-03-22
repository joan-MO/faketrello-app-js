var express = require('express');
const ListTask = require('../../models/ListTask');
const listTaskSchemaValidation = require('../../utils/schemas/listTask')
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

    const listTask = await ListTask.find(filter);

  if (!listTask) {
    return res.status(404).json({ error: 'not found' });
  }

  res.json(listTask);

  } catch (error) {
    next(error);
  }
  
});

router.get('/:_id', async (req, res, next) => {
  try {
    const _id = req.params._id;

    const listTask = await ListTask.findOne({ _id: _id });

    if (!listTask) {
      return res.status(404).json({ error: 'not found' });
    }
    res.json({ result: listTask });

  } catch (err) {
    next(err);
  }
});


router.post('/', validate(listTaskSchemaValidation), async (req, res, next) => {

  try {

    const { title } = req.body;
    const newListTask = new ListTask({title});
  
    await newListTask.save();
  
    res.status(201).json({ result: newListTask});

  } catch (error) {
    next(error);
  }

})

router.put('/:_id', validate(listTaskSchemaValidation), async(req, res, next) => {

  try {
    const { _id } = req.params;
    const { title } = req.body;

    const updatedListTask = await ListTask.findByIdAndUpdate(_id, {$set:{ title }}, { useFindAndModify: false} )
    
    if (!updatedListTask) {
      res.status(404).json({ error: 'not found' });
      return;
    }
  
    res.json({ result: updatedListTask.title });
  
  } catch (error) {
    next(error);
  }

})

router.put('/assignCardTask/:_id', async (req, res, next) => {

  try {

    const { _id } = req.params;
    const { card_tasks } = req.body;
    const updatedListTask = await ListTask.findByIdAndUpdate(_id, {$push: { card_tasks: card_tasks}}, { useFindAndModify: false})

    if (!updatedListTask) {
      res.status(404).json({ error: 'not found' });
      return;
    }
  
    res.json(`${updatedListTask.title} updated`);
    
  } catch (error) {
    next(error); 
  }

});

router.put('/removeCardTask/:_id', async (req, res, next) => {

  try {

    const { _id } = req.params;
    const { card_tasks } = req.body;
    const updatedListTask = await ListTask.findByIdAndUpdate(_id, {$pull: { card_tasks: card_tasks}}, { useFindAndModify: false})

    if (!updatedListTask) {
      res.status(404).json({ error: 'not found' });
      return;
    }
  
    res.json(`${updatedListTask.title} updated`);
    
  } catch (error) {
    next(error); 
  }

});


module.exports = router;