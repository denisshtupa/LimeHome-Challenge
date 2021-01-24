const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/google-map-ng'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/google-map-ng/'}
);
});

app.listen(process.env.PORT || 8080);