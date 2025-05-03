import request from 'supertest';
import app from '../db.js';

describe('Buyer Routes', () => {
  it('should explore books for buyer', async () => {
    const res = await request(app).get('/explore');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return buyer count', async () => {
    const res = await request(app).get('/countBuyers');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('count');
  });
});