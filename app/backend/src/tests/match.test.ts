import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import matchMock from './mocks/match.mock'
// import Example from '../database/models/ExampleModel';

// import { Response } from 'superagent';
// import Users from '../database/models/User.model';
// import users from './mocks/users.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('/matches', () => {
  it('get deve retornar com o status 200', async () => {
    const result = await chai.request(app)
    .get('/matches')
    expect(result.status).to.equal(200)
    expect(result.body).to.equal(matchMock);
  })
})