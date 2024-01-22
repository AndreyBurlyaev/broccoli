import { Entry, User } from '../../db/models';

const checkAuthor = async (req, res, next) => {
  const post = await Entry.findByPk(req.params.id);
  // const {user} = await User.findByPk(res.locals.user.id);
  if (post?.userId !== res.locals.user?.id) {
    return res.status(403).json({ message: 'Not your entry!' });
  }
  // if (!user) {
  //   res.redirect('/');
  // }
  return next();
};

export default checkAuthor;
