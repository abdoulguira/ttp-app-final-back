const { text } = require('body-parser');
const express = require('express');
const router = express.Router();
const db = require('../database/database');
const user = require('../database/users');

//will add a new user to the database
router.post('/add', (req,res) => {

 // let {user_id,username, user_password, email, gender} =req.body;

  let data= {user_id:3, username:'usrete', user_password:12345, email: 'guimani@yahoo.fr', gender:'M'}
  let errors = [];

  if(!user_password){
    errors.push({text: "Please provide a username"});

  }

  if(!username){
    errors.push({text: "Please provide a username"});

  }

  user.create({

    user_id,
    username,
    user_password,
    email,
    gender
  })
    .then(gigs => res.redirect ('/users'))
    .catch(err => console.log(err));

});

// will get all the users
router.get('/', (req,res) =>
  
  user.findAll()
   .then(users => {
     console.log(users);
     res.sendStatus(200);
     
   })
   .catch(err =>  console.log(err)));


module.exports = router;
