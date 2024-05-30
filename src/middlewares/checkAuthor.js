import { Entry } from '../../db/models';

const checkAuthor = async (req, res, next) => {
  const post = await Entry.findByPk(req.params.id);
  if (post?.userId !== res.locals.user?.id) {
    return res.status(403).json({ message: 'Not your entry!' });
  }
  return next();
};

export default checkAuthor;
