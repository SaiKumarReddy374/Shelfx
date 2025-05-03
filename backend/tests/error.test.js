import request from 'supertest';
import app from '../db.js';

describe('Error Handling Routes', () => {
  it('should return 404 for unknown route', async () => {
    const res = await request(app).get('/non-existent-route');
    expect(res.statusCode).toBe(404);
  });

  it('should return 405 or 404 for invalid HTTP method on existing route', async () => {
    const res = await request(app).post('/books/count'); // Assuming GET is allowed, not POST
    expect([404, 405]).toContain(res.statusCode);
  });
});
