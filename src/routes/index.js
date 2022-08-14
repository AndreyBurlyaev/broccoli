import { Router } from 'express';
import { renderToString } from 'react-dom/server';
import { Entry } from '../db/models';
import Layout from '../components/Layout';
import React from 'react';

const router = Router();

router.get('/', async (req, res) => {
  const entries = await Entry.findAll({ order: [['id', 'DESC']] });
   const initState = {path: req.originalUrl, entries};
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
