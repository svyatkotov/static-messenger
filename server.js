const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.static('./static'));

app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}!`);
});
