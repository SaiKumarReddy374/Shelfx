import request from 'supertest';
import app from '../db.js';

describe('Seller Routes', () => {
  it('should fetch all sellers', async () => {
    const res = await request(app).get('/sellers');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return seller count', async () => {
    const res = await request(app).get('/countSellers');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('count');
  });
});