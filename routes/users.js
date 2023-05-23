const express = require('express');
const router = express.Router();

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

module.exports = router;
