var express = require('express');
const CardTask = require('../../models/CardTask');
const cardTaskSchemaValidation = require('../../utils/schemas/cardTask')
var router = express.Router();
const validate = require('../../utils/validateData');
const validationAuth = require('../../utils/validateAuth')

router.get('/', validationAuth, async (req, res, next) => {

  try {

  const cardTask = await CardTask.find();

  if (!cardTask) {
    return res.status(404).json({ error: 'not found' });
  }

  res.json(cardTask);

  } catch (error) {
    next(error);
  }
  
});

router.get('/:_id', validationAuth, async (req, res, next) => {
  try {
    const _id = req.params._id;

    const cardTask = await CardTask.findOne({ _id: _id });

    if (!cardTask) {
      return res.status(404).json({ error: 'not found' });
    }
    res.json({ result: cardTask });

  } catch (err) {
    next(err);
  }
});


router.post('/', validationAuth, validate(cardTaskSchemaValidation), async (req, res, next) => {

  try {

    const { title } = req.body;
    const { description } = req.body
    const newCardTask = new CardTask({title, description});
    
    await newCardTask.save();
  
    res.status(201).json({ result: newCardTask});

  } catch (error) {
    next(error);
  }

})

router.put('/:_id', validationAuth, async(req, res, next) => {

  try {
    const { _id } = req.params;
    const cardTaskData = req.body
    const updateCardTask = await CardTask.findByIdAndUpdate({ _id: _id }, cardTaskData, {new: true, useFindAndModify: false} )

    
    if (!updateCardTask) {
      res.status(404).json({ error: 'not found' });
      return;
    }
  
    res.json({ result: updateCardTask });
  
  } catch (error) {
    next(error);
  }

})

router.delete('/:_id', validationAuth, async (req, res, next) => {
  try {

    const { _id } = req.params;
    const deleteCardTask = await CardTask.findByIdAndDelete(_id);
    res.json(`${deleteCardTask.title} deleted`);

  } catch (error) {
    next(error);
  }

});



module.exports = router;