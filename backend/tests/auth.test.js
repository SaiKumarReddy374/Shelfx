
// File: tests/auth.test.js
import request from 'supertest';
import app from '../index.js';

describe('Authentication', () => {
  it('should return not authenticated if no session', async () => {
    const res = await request(app).get('/api/check-auth');
    expect(res.statusCode).toBe(200);
    expect(res.body.authenticated).toBe(false);
  });
});