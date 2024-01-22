import { Router } from 'express';
import checkNoAuth from '../middlewares/checkAuth';

const router = Router();

router.get('/signup', checkNoAuth, (req, res) => {
  res.render('SignUpPage');
});

router.get('/login', checkNoAuth, (req, res) => {
  res.render('LoginPage');
});

router.get('/logout', (req, res) => res.clearCookie('accessToken').clearCookie('refreshToken').status(200).redirect('/'));

export default router;
