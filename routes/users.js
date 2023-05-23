const express = require('express');
const router = express.Router();

router.use(log);

router.get('/', (req, res) => {
  res.send('User List');
});

router.get('/new', (req, res) => {
  res.render('users/new');
});

router.post('/', (req, res) => {
  const isValid = true;
  const firstName = req.body.firstName;
  if (isValid) {
    user.push({ name: firstName });
    res.redirect(`/user/${user.length - 1}`);
  } else {
    console.log('error');
    res.render('users/new', { firstName: firstName });
  }
  res.send(`hi ${firstName}`);
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
