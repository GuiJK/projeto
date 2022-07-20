const { Router } = require('express');

const personsRoutes = require('../../../modules/persons/infra/routes/persons.routes');
const sessionsRoutes = require('../../../modules/persons/infra/routes/sessions.routes');

const routes = Router();

routes.use('/persons', personsRoutes);

routes.use('/login', sessionsRoutes);

module.exports = routes;
