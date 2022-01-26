const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;
//for authentication ................
const passport = require('../middlewares/authentication');


router.get('/:id', (req,res) => {
  passport.isAuthenticated();
    User.findByPk({id})
    .then(User => {
      res.json(User);
      console.log(" ");
    });
});


module.exports = router;
