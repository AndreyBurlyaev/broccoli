import { Router } from 'express';
import { Entry } from '../../db/models';
import checkAuthor from '../middlewares/checkAuthor';
// import checkAuthor from '../middlewares/checkAuthor';

const router = Router();

router
  .route('/new')
  .get((req, res) => {
    const initState = {};
    res.render('New', initState);
  })
  .post(async (req, res) => {
    await Entry.create({ ...req.body, userId: res.locals.user.id });
    res.redirect('/');
  });

router.get('/:id/edit', checkAuthor, async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const initState = { entry };
  res.render('Edit', initState);
});

router.get('/:id', checkAuthor, async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const initState = { entry };
  res.render('Show', initState);
});

export default router;
