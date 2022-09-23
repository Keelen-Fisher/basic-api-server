'use strict';

const fiveError = require('../error-handlers/500.js');

const validator = (req, res, next) => {
  let { name } = req.body;
  try {
    if(name) {
      next();
    } else {
      console.log('Testing testing I am here');
      fiveError();
    }
  } catch (error) {
    next(error.message);
  }
};

module.exports = validator;