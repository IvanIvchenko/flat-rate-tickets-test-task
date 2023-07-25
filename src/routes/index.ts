import { Router } from 'express';

import { ticketsRouter } from './tickets.router';

const router = Router();

router.use('/', ticketsRouter);

export { router as routes };
