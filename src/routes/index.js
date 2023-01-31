import { Router } from 'express';
import { Entry } from '../../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const entries = await Entry.findAll({ order: [['id', 'DESC']] });
  const initState = { entries };
  res.render('Layout', initState);
});

export default router;
