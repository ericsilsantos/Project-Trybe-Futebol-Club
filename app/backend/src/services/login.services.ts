import 'dotenv/config';
import Joi = require('joi');
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import User from '../database/models/User.model';
import throwEmailOrPasswordIncorrect from './utils';

interface Login {
  email: string,
  password?: string,
}

class LoginServise {
  static async login(email: string): Promise<User> {
    const result = await User.findOne({ where: { email }, raw: true });
    if (!result) throwEmailOrPasswordIncorrect('Incorrect email or password');
    return result as User;
  }

  static async validateRequest(login: Login) {
    const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }).messages({ 'string.empty': 'All fields must be filled' });
    const result = await schema.validateAsync(login);
    return result;
  }

  static async getToken(user: Login | null) {
    const secret: string = process.env.JWT_SECRET || 'jwt_secret';
    const token = jwt.sign({ data: user }, secret);
    return token;
  }

  static async verifyPassword(password: string, passwordHash: string) {
    const result = await bcrypt.compare(password, passwordHash);
    if (!result) throwEmailOrPasswordIncorrect('Incorrect email or password');
  }
}

export default LoginServise;
