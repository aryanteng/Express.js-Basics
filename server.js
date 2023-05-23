const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const userRouter = require('./routes/users');

app.use('/user', userRouter);

app.listen(3000);
