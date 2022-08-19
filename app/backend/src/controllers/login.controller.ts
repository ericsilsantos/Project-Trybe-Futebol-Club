import { Request, Response } from 'express';
import LoginServise from '../services/login.services';

class LoginControler {
  static async login(req: Request, res: Response) {
    const { email, password } = await LoginServise.validateRequest(req.body);
    const user = await LoginServise.login(email);
    await LoginServise.verifyPassword(password, user.password);
    const token = await LoginServise.getToken(user);
    res.status(200).json({ token });
  }
}

export default LoginControler;
