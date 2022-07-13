import { Router } from 'express';
import template from '../template';
import { Entry } from '../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const entries = await Entry.findAll({ order: [['id', 'DESC']] });
  res.send(template({ entries, path: req.path }));
});

module.exports = router;
