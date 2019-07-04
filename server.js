
var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');

const { jwtIssuer, jwtAudience, jwtSubject, jwtSecretKey, jwtEmailAddress, jwtExpiresIn } = require('./config');

app.get('/', function (req, res) {

  const token = jwt.sign(
      { iss: jwtIssuer, aud: jwtAudience, email: jwtEmailAddress, sub: jwtSubject },
      jwtSecretKey,
      { expiresIn: jwtExpiresIn }
    );

res.send(token);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
