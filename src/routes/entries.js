import { Router } from 'express';
import template from '../template';
import { Entry } from '../db/models';

const router = Router();

router.get('/new', (req, res) => {
  res.send(template({ path: req.path }));
});

router.get('/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  res.send(template({ entry, path: req.path })).end();
});

router.get('/:id/edit', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  res.send(template({ entry, path: req.path })).end();
});

module.exports = router;
