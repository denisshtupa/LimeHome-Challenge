const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/lime-home-challenge'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/lime-home-challenge/'}
);
});

app.listen(process.env.PORT || 8080);