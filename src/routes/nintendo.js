'use strict';

const express = require('express');
const { nintendoModel } = require('../modules');

const router = express.Router();

// Get all
router.get('/nintendo', async(req, res) => {

  const nintendo = await nintendoModel.findAll();
  res.status(200).json(nintendo);
});


// Get one
router.get('/nintendo/:id', async (req, res) => {
  const oneNintendo = await nintendoModel.findAll({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(oneNintendo);
});


// Post one
router.post('/nintendo', async(req, res, send) => {
  console.log('req.body: ', req.body);

  const newNintendo = await nintendoModel.create(req.body);
  res.status(200).send(newNintendo);
});


// update one
router.put('/nintendo/:id', async (req, res) => {
  const updateNin = await nintendoModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${updateNin} is updated.`);
} );


// Delete One
router.delete('/nintendo/:id', async (req, res) => {
  const deletedNin = await nintendoModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`${deletedNin} is deleted `);
});

module.exports = router;