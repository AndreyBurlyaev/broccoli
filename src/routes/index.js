import { Router } from 'express';
import { Entry } from '../../db/models';
import { verifyRefreshToken } from '../utils/verifyToken';

const router = Router();

router.get('/', async (req, res) => {
  const entries = await Entry.findAll({ order: [['id', 'DESC']] });
  const initState = { entries };
  res.render('Entries', initState);
});

router.get('/profile', verifyRefreshToken, (req, res) => res.render('ProfilePage'));

export default router;
