import { Router } from 'express';
import { Entry } from '../../db/models';
import checkAuthor from '../middlewares/checkAuthor';

const router = Router();

router.route('/entries/:id')
  .put(checkAuthor, async (req, res) => {
    console.log(req.body, req.params.id);
    await Entry.update(req.body, { where: { id: req.params.id } });
    res.sendStatus(200);
  })
  .delete(checkAuthor, async (req, res) => {
    await Entry.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  });

export default router;
