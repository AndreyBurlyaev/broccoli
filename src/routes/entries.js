import { Router } from 'express';
import { Entry } from '../db/models';

const router = Router();

router.get('/new', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

router.get('/:id/edit', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const initState = { entry };
  res.render('Layout', initState);
});

router.get('/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const initState = { entry };
  res.render('Layout', initState);
});

export default router;
