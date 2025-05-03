import request from 'supertest';
import app from '../db.js';

describe('Book Routes', () => {
  it('should return books count', async () => {
    const res = await request(app).get('/books/count');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('count');
  });
});