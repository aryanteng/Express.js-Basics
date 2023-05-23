const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', log, (req, res) => {
  res.render('index', { text: 'World' });
});

const userRouter = require('./routes/users');

app.use('/user', userRouter);

function log(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
