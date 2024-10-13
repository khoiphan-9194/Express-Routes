const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/diagnostics.json')
  .then((data) => res.json(JSON.parse(data)));

});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  const { isValid, errors } = req.body; //object errors

  
    const FullError = {
      time: Date.now(),
      error_id: uuidv4(),
      errors,
    };
    


    if (isValid) {
      readAndAppend(FullError, './db/diagnostics.json');
      res.json(`Error has been logged`);
    } else {
      res.json(`Error has not been logged`);
    }
 
});


module.exports = diagnostics;
/*



  {
    "time": 1616087317843,
    "error_id": "ca0616fa-f603-4d85-a9c6-fa62c73a9bf9",
    "errors": {
      "tip:": "Tip must be at least 15 characters long",
      "topic": "",
      "username": " Username is too short"
    }
*/