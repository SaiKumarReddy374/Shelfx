// File: tests/request.test.js
import request from 'supertest';
import app from '../index.js';

describe('Request APIs', () => {
  it('should return requests for seller', async () => {
    const sellerId = 1;
    const res = await request(app).get(`/api/requests/${sellerId}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});