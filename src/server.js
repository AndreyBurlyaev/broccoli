import express from 'express';
import morgan from 'morgan';
import path from 'path';
import indexRouter from './routes/index';
import entriesRouter from './routes/entries';
import apiRouter from './routes/api';
import jsxRender from './utils/jsxRendex';

const PORT = 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');

app.set('views', path.join(__dirname, 'components'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use('/', indexRouter);
app.use('/entries/', entriesRouter);
app.use('/api/v1/', apiRouter);

app.listen(PORT, () => {
  console.log('Server start on', PORT);
});
