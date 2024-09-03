const request = require('supertest');
const app = require('../../index'); // Presume-se que index.js exporte o app express

describe('GET /api/tasks', () => {
  it('should return a list of tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('tasks');
  });
});
