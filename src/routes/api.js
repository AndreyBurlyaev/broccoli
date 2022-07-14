import { Router } from 'express';
import { Entry } from '../db/models';

const router = Router();

router.route('/entries')
  .get(async (req, res) => {
    const entries = await Entry.findAll({ order: [['id', 'DESC']] });
    res.json(entries);
  });

router.route('/entries/:id')
  .get(async (req, res) => {
    const entry = await Entry.findOne({ where: { id: req.params.id } });
    res.json(entry);
  });

export default router;
