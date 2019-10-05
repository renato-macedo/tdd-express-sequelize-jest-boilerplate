const request = require('supertest');
const app = require('../../src/app');
const { User } = require('../../src/app/models/');
const truncate = require('../utils/truncate');

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should create user ', async () => {
    const user = await User.create({
      first_name: 'John',
      last_name: 'Doe',
      password: '1234',
      email: 'johndoe@gmail.com',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456',
      });

    expect(response.status).toBe(200);
  });
});
