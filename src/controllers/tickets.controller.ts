import { NextFunction, Request, Response } from 'express';

import { TicketsService } from '../services/tickets.service';
import { RequestParams } from '../utils/interfaces';

export class TicketsController {
  private ticketsService: TicketsService;

  constructor(ticketsService: TicketsService) {
    this.ticketsService = ticketsService;
  }

  async findAll(
    { params }: Request<RequestParams>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { id } = params;
      const tickets = await this.ticketsService.getTickets(id);
      res.status(200).json(tickets);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error while retreaving tickets:', err.message);
        next(err);
      }
      next(err);
    }
  }
}

export const ticketsController = new TicketsController(new TicketsService());
