import { Router } from 'express';
import { renderToString } from 'react-dom/server';
import { Entry } from '../db/models';
import React from 'react';
import Layout from '../components/Layout';

const router = Router();

router.get('/new', (req, res) => {
  const initState = {path: req.originalUrl};
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const initState = {path: req.originalUrl, entry};
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/:id/edit', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const initState = {path: req.originalUrl, entry};
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
