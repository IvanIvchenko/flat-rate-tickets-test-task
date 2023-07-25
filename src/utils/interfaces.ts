export interface ResponseError extends Error {
  statusCode?: number;
}

export interface RequestParams {
  id: string;
}

export interface Ticket {
  section: string;
  row: string;
  seat_number: number;
  price: number;
}

export interface SeatSmall {
  SeatNumber: number;
  SeatRow: string;
  ZoneId: number;
}
export interface Seat extends SeatSmall {
  SeatStatusId: number;
}

export interface Zone {
  Id: number;
  Description: string;
}

export interface Price {
  ZoneId: number;
  Price: number;
  PerformanceId: number;
}
