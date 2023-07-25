import { Router } from 'express';

import { ticketsController } from '../controllers/tickets.controller';
import { eventIdValidator } from '../middleware/eventIdValidator';

const ticketsRouter = Router();

ticketsRouter.get(
  '/:id',
  eventIdValidator,
  ticketsController.findAll.bind(ticketsController),
);

export { ticketsRouter };
