import { Router } from 'express';
import LoginControler from '../controllers/login.controller';

const login = Router();

login.post('/', LoginControler.login);

export default login;
