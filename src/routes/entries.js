import { Router } from 'express';
import { Entry } from '../db/models';

const router = Router();

router.route('/new')
  .get((req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .post(async (req, res) => {
    await Entry.create(req.body);
    res.redirect('/');
  });

router.route('/:id/edit')
  .get(async (req, res) => {
    const entry = await Entry.findOne({ where: { id: req.params.id } });
    const initState = { entry };
    res.render('Layout', initState);
  })
  .post(async (req, res) => {
    const { id } = req.params;
    await Entry.update(req.body, { where: { id } });
    res.redirect(`/entries/${id}`);
  });

router.get('/:id/delete', async (req, res) => {
  const { id } = req.params;
  await Entry.destroy({ where: { id } });
  res.redirect('/');
});

router.get('/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const initState = { entry };
  res.render('Layout', initState);
});

export default router;
