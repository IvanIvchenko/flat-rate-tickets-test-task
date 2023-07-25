import { Price, Seat, SeatSmall, Ticket, Zone } from '../utils/interfaces';
import { ticketsApi } from '../utils/ticketsApi';

export class TicketsService {
  async getTickets(id: string): Promise<Ticket[]> {
    const [seats, zones, prices] = await Promise.all([
      await ticketsApi.getSeats(id),
      await ticketsApi.getZones(id),
      await ticketsApi.getPrices(id),
    ]);
    const seatsFiltered = seats.flatMap((seat: Seat) => {
      if (seat.SeatStatusId === 0) {
        const { SeatNumber, SeatRow, ZoneId } = seat;
        return { SeatNumber, SeatRow, ZoneId };
      }
      return [];
    });
    const zonesFiltered = zones
      .map((zone: { Zones: Zone[] }) => zone.Zones)
      .flat()
      .map((zone: Zone) => {
        return { Id: zone.Id, Description: zone.Description };
      });
    const pricesFiltered = prices.flatMap((price: Price) => {
      if (price.PerformanceId === 0) {
        return { ZoneId: price.ZoneId, Price: price.Price };
      }
      return [];
    });
    const tickets = seatsFiltered.map((seat: SeatSmall) => {
      return {
        section: zonesFiltered.filter(
          (zone: { Id: number }) => zone.Id === seat.ZoneId,
        )[0].Description,
        row: seat.SeatRow,
        seat_number: Number(seat.SeatNumber),
        price: pricesFiltered.filter(
          (price: { ZoneId: number }) => price.ZoneId === seat.ZoneId,
        )[0].Price,
      };
    });
    return tickets;
  }
}
