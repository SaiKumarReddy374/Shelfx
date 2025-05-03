// File: tests/seller.test.js
import request from 'supertest';
import app from '../index.js';

describe('Seller APIs', () => {
  it('should return all sellers (admin)', async () => {
    const res = await request(app).get('/api/sellers');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return seller count', async () => {
    const res = await request(app).get('/api/countSellers');
    expect(res.statusCode).toBe(200);
  });
});