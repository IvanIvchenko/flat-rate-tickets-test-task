import request from 'supertest';
import {app} from '../src/app';

describe('GET tickets', () => {
  it('should fetch concert tickets', async () => {
    const response = await request(app).get('/1195');
    
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    
    // Verify the structure of each ticket
    response.body.forEach((ticket: {
      section: string;
      row: string;
      seat_number: number;
      price: number;
    }) => {
      expect(ticket).toHaveProperty('section', expect.any(String));
      expect(ticket).toHaveProperty('row', expect.any(String));
      expect(ticket).toHaveProperty('seat_number', expect.any(Number));
      expect(ticket).toHaveProperty('price', expect.any(Number));
    });
  }, 100000);
});