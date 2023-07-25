import axios from 'axios';

import { Price, Seat, Zone } from './interfaces';

export class TicketsApi {
  async getEvent(id: string): Promise<unknown> {
    try {
      const res = await axios.get(
        `https://my.laphil.com/en/rest-proxy/TXN/Packages/${id}`,
      );
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.message) {
        throw new Error(err.message);
      }
      throw new Error('Unknown error occured');
    }
  }
  async getPrices(id: string): Promise<Price[]> {
    try {
      const res = await axios.get(
        `https://my.laphil.com/en/rest-proxy/TXN/Packages/${id}/Prices?modeOfSaleId=26&priceTypeId=&sourceId=30885`,
      );
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.message) {
        throw new Error(err.message);
      }
      throw new Error('Unknown error occured');
    }
  }
  async getSeats(id: string): Promise<Seat[]> {
    try {
      const res = await axios.get(
        `https://my.laphil.com/en/rest-proxy/TXN/Packages/${id}/Seats?constituentId=0&modeOfSaleId=26&packageId=${id}`,
      );
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.message) {
        throw new Error(err.message);
      }
      throw new Error('Unknown error occured');
    }
  }
  async getZones(id: string): Promise<{ Zones: Zone[] }[]> {
    try {
      const res = await axios.get(
        `https://my.laphil.com/en/rest-proxy/TXN/PriceTypes/Details?modeOfSaleId=26&packageId=${id}&sourceId=30885`,
      );
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.message) {
        throw new Error(err.message);
      }
      throw new Error('Unknown error occured');
    }
  }
}

export const ticketsApi = new TicketsApi();
