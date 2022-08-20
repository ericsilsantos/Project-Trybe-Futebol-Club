import { Router } from 'express';
import LoginControler from '../controllers/login.controller';

const login = Router();

login.post('/', LoginControler.login);
login.get('/validate', LoginControler.loginValidate);

export default login;
