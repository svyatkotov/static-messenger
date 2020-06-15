const express = require('express');
const PORT = 3000;
const app = express();

const page = 'chat';

app.use(express.static('./static'));

app.listen(PORT, () => {
  console.log(`Страница доступна по адресу: http://localhost:${PORT}/${page}.html`);
});
