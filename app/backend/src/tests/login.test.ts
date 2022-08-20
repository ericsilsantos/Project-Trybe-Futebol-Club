import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import Users from '../database/models/User.model';
import users from './mocks/users.mock';

chai.use(chaiHttp);

const { expect } = chai;

const login = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}
describe('/Login', () => {
  // beforeEach(() => {
  //   sinon.stub(Users, 'findOne').resolves(users[0] as Users);
  // })
  // afterEach(() => {
  //   sinon.restore();
  // })
  it('Deve retornar um token caso os dados passados estejam corretos', async () => {
    const result = await chai.request(app)
      .post('/login')
      .send(login);
    expect(result.status).to.equal(200)
    expect(result.body).to.have.property('token');
    // expect(false).to.be.eq(true);
  });
})