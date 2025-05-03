// File: tests/book.test.js
import request from 'supertest';
import app from '../index.js';

describe('Book APIs', () => {
  it('should return total book count', async () => {
    const res = await request(app).get('/api/books/count');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('count');
  });
});