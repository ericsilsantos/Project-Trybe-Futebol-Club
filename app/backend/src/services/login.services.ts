import 'dotenv/config';
import Joi = require('joi');
import * as jwt from 'jsonwebtoken';
import User from '../database/models/User.model';

interface Login {
  email: string,
  password: string,
}

class LoginServise {
  static async login(email: string) {
    const result = await User.findOne(
      { where: { email }, raw: true },
    );
    return result;
  }

  static async validateRequest(login: Login) {
    const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }).messages({ 'string.empty': 'All fields must be filled' });
    const result = await schema.validateAsync(login);
    return result;
  }

  static async getToken(user: User | null) {
    const secret: string = process.env.JWT_SECRET || 'jwt_secret';
    const token = jwt.sign({ data: user }, secret);
    return token;
  }
}

export default LoginServise;
