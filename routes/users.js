const { text } = require('body-parser');
const express = require('express');
const router = express.Router();
const db = require('../database/database');
const user = require('../database/users');
const passport = require('../database/authentication');
var bodyParser = require('body-parser') // browser will be needing it to parse when data is sent
var jsonParser = bodyParser.json()
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}
router.use(cors(corsOptions))



//will add a new user to the database
router.post('/', jsonParser,(req, res) => {
    
    let { user_id,username, user_password, email, gender} = req.body;
  
    user.create({

      user_id,
      username,
      user_password,
      email,
      gender

    })
      .then(gig => {
        res.status(201).json(gig);
      })
      .catch(err => {
        res.status(400).json(err);
      }); 
    })
// Will delete a user

router.delete('/delete/:userId', 
async (req, res) => {
    
    let { user_id,username, user_password, email, gender} = req.body;

    await user.destroy ({
      where: { user_id : req.params.userId }

     }).then(() => {
      res.status(204).end();
     });
    

});

// update the database

router.put('/update/:userId',jsonParser, async (req, res) => {

  // handle id not exist 
  try {
      let gig = await user.update(req.body, {
          where: { user_id: req.params.userId }
      });
  res.status(200).json(gig)    }
  catch (e) {
      res.json(e)
  }
});

// for authentification
router.get('/:username/:password', async (req, res) => {
  try {
      const allusers = await user.findOne({ where: { username: req.params.username } });
      
      console.log(allusers);
      //const pass = await user.findOne({ where: { username: req.params.username } });
      if (allusers === null) {
        res.status(404).json(allusers)
      }
      else if(allusers['user_password'] !== null){
        let pass= allusers['user_password']

        if(pass !== req.params.password){
          res.status(403).json(allusers) // 403 is forbidden
        }
        else{

          res.status(200).json(allusers)
  
        }
      }
  
  }
  catch (e) {
      res.json(e)
  }
})



// will get all the users
router.get('/', async (req, res) => {
  try {
      const allusers = await user.findAll();
  res.status( allusers == null ? 204 : 200).json(allusers)
  }
  catch (e) {
      res.json(e)
  }
})



module.exports = router;