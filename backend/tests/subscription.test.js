import request from 'supertest';
import app from '../db.js';

describe('Subscription Routes', () => {
  it('should return all subscriptions', async () => {
    const res = await request(app).get('/subscriptions');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});