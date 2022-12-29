'use strict';

const express = require('express');
const cors = require('cors');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(cors());

app.get('/api/v1/date', (req, res) => {
  res.send(new Date().toString());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);