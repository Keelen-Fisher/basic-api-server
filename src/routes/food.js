'use strict';

const express = require('express');
const { foodModel } = require('../modules');

const router = express.Router();

// Get all
router.get('/food', async(req, res) => {

  const food = await foodModel.findAll();
  res.status(200).json(food);
});


// Get one
router.get('/food/:id', async (req, res) => {
  const oneFood = await foodModel.findAll({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(oneFood);
});


// Post One
router.post('/food', async(req, res, send) => {
  console.log('req body: ', req.body);

  const newFood = await foodModel.create(req.body);
  res.status(200).send(newFood);
});


// update one
router.put('/food/:id', async (req, res) => {
  const updateFood = await foodModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${updateFood} is updated.`);
} );

// Delete One
router.delete('/food/:id', async (req, res) => {
  const deletedFood = await foodModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${deletedFood} is deleted `);
});

module.exports = router;