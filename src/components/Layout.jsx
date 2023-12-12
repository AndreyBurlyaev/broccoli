import React from 'react';

export default function Layout({ children, initState }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes" />
        <link rel="icon" href="/img/icon-48x48.png" />
        <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" href="/stylesheets/application.css" />
        {/* скрипт наполнения вспомогательнго объекта initState для работы гидратации */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />

        {/* скрипты собранные через Webpack */}
        <script defer src="/js/app.js" />
        <script defer src="/js/vendor.js" />
        <title>Broccoli Blog</title>
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
