import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';

import App from '../components/App';

const fs = require('fs');
const hbs = require('hbs');
const path = require('path');

function template(initState) {
  // console.log('-----', initState.entries[1]);
  const PATH = path.join(__dirname, '../view/index.hbs');
  const theHtml = fs.readFileSync(PATH, 'utf-8');
  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(
    <StaticRouter location={initState.path}>
      <App {...initState} />
    </StaticRouter>,
  );
  return hbsTemplate({ content: reactComp, initState: JSON.stringify(initState) });
}

export default template;
