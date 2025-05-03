import request from 'supertest';
import app from '../db.js';

describe('Auth Route', () => {
  it('should check authentication status', async () => {
    const res = await request(app).get('/check-auth');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('authenticated');
  });
});