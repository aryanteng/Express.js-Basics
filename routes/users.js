const express = require('express');
const router = express.Router();

router.use(log);

router.get('/', (req, res) => {
  res.send('User List');
});

router.get('/new', (req, res) => {
  res.send('User find');
});

router.post('/', (req, res) => {
  res.send('create user');
});

router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user);
    res.send(`get user id: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`udpate user id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user id: ${req.params.id}`);
  });

const user = [{ name: 'Aryan' }, { name: 'Avi' }];

router.param('id', (req, res, next, id) => {
  req.user = user[id];
  next();
});

function log(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
