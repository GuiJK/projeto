import knex from 'knex'

import {
    person,
    sessions
  } from '../../middleware/validations';

  import {
    PersonsController,
    SessionsController
 } from '../../infra/controllers'
import sessionsRoutes from './sessions.routes';
import personsRoutes from './persons.routes';

const routes = knex.Router();

routes.post('/login', sessionsRoutes);

routes.post('/persons', personsRoutes)







