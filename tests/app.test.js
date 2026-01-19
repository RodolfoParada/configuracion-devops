const request = require('supertest');
const app = require('../app');

describe('Endpoints básicos', () => {
  it('Debe responder 200 en la raíz', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toContain('DevOps');
  });

  it('Healthcheck debe estar UP', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('UP');
  });
});