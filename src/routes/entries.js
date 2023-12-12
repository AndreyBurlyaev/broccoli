import { Router } from 'express';
import { Entry } from '../../db/models';

const router = Router();

router
  .route('/new')
  .get((req, res) => {
    const initState = {};
    res.render('New', initState);
  })
  .post(async (req, res) => {
    await Entry.create(req.body);
    res.redirect('/');
  });

router.get('/:id/edit', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const initState = { entry };
  res.render('Edit', initState);
});

router.get('/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const initState = { entry };
  res.render('Show', initState);
});

export default router;
