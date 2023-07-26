import axios, { AxiosError } from 'axios';

import { Price, Seat, Zone } from './interfaces';

export class TicketsApi {
  private async fetchData<T>(url: string): Promise<T> {
    try {
      const response = await axios.get<T>(url);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.message) {
        const axiosError = err as AxiosError;
        throw new Error(axiosError.message);
      }
      throw new Error('Unknown error occurred');
    }
  }

  async getEvent(id: string): Promise<unknown[]> {
    const url = `https://my.laphil.com/en/rest-proxy/TXN/Packages/${id}`;
    return this.fetchData<unknown[]>(url);
  }

  async getPrices(id: string): Promise<Price[]> {
    const url = `
      https://my.laphil.com/en/rest-proxy/TXN/Packages/${id}/Prices?modeOfSaleId=26&priceTypeId=&sourceId=30885
    `;
    return this.fetchData<Price[]>(url);
  }
  async getSeats(id: string): Promise<Seat[]> {
    const url = `
      https://my.laphil.com/en/rest-proxy/TXN/Packages/${id}/Seats?constituentId=0&modeOfSaleId=26&packageId=${id}
    `;
    return this.fetchData<Seat[]>(url);
  }
  async getZones(id: string): Promise<{ Zones: Zone[] }[]> {
    const url = `
      https://my.laphil.com/en/rest-proxy/TXN/PriceTypes/Details?modeOfSaleId=26&packageId=${id}&sourceId=30885
    `;
    return this.fetchData<{ Zones: Zone[] }[]>(url);
  }
}

export const ticketsApi = new TicketsApi();
