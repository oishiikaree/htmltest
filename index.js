const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>IFRAME Server</title>
      <style>
        body {
          background-color: #03234D;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: sans-serif;
          font-size: 2em;
        }
      </style>
    </head>
    <body>
      <h1>こんにちは！私はIFRAMEで表示されています！</h1>
    </body>
    </html>
  `);
});

// X-Frame-Options を明示的に設定しないため、デフォルトでは 'DENY' などの設定は含まれません。

app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました`);
  console.log('このサーバーはiframeで埋め込み可能です。');
});