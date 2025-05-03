// File: tests/subscription.test.js
import request from 'supertest';
import app from '../index.js';

describe('Subscription APIs', () => {
  it('should return all subscriptions', async () => {
    const res = await request(app).get('/api/subscriptions');
    expect(res.statusCode).toBe(200);
  });
});
