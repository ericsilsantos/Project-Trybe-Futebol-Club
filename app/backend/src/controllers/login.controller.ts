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

  static async loginValidate(req: Request, res: Response) {
    const token = req.headers.authorization || 'tokenfake';
    const { data: { email } } = await LoginServise.verifyToken(token);
    const { role } = await LoginServise.login(email);
    res.status(200).json({ role });
  }
}

export default LoginControler;
