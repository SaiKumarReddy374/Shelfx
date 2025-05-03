// File: tests/buyer.test.js
import request from 'supertest';
import app from '../index.js';

describe('Buyer APIs', () => {
  it('should return buyer count', async () => {
    const res = await request(app).get('/api/countBuyers');
    expect(res.statusCode).toBe(200);
  });

  it('should explore books for buyers', async () => {
    const res = await request(app).get('/api/explore');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
