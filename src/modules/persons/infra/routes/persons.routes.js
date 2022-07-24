const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const PersonsController = require('../controllers/PersonsController');

const personsMiddleware = require('../../middleware/persons.middleware');
const postPersons = require('../../middleware/validations');

const personsRoutes = Router();
const personsController = new PersonsController();

personsRoutes.post(
  '/',
  postPersons(),
  personsMiddleware.verifyIfEmailAlreadyExists,
  personsController.createPersons
);

personsRoutes.get('/', personsController.getAllPersons);

personsRoutes.put('/', personsController.updatePersons);

personsRoutes.delete('/', personsController.deletePersons);

module.exports = personsRoutes;
