const express = require('express');
require('dotenv').config();
// var bodyParser = require('body-parser')
// var jsonParser = bodyParser.json()
const axios = require('axios');
const router = express.Router();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

router.use(cors(corsOptions))

//all movies
router.get('/getMovies/:term', async (req, res) => {
    console.log(req.params.term);
    // res.end('NA');
    axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.API_KEY}&query=${req.params.term}`,
      })
      .then(function (response) {
          res.send(response.data)
      })
      .catch(e=>console.log(e))
});


//genre categorized movies
router.get('/movie/:movie_id/keywords', async (req, res) => {
    console.log(req.params.movie_id);
    // res.end('NA');
    axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie_id/550?api_key=${process.env.API_KEY}`,
      })
      .then(function (response) {
        res.send(response);
      })
      .catch(e=>console.log(e))
});

//popular-movies, working well, use word "popular" for keyword search
router.get('/movie/popular', async (req, res) => {
    // res.end('NA');
    axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
      })
      .then(function (response) {
          res.send(response.data)
      })
      .catch(e=>console.log(e))
});

//similar movies, working well, use as a recommeded function on the front end.
router.get('/movie/similar/:movie_id', async (req, res) => {
    console.log(req.params.movie_id);
    // res.end('NA');
    axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${req.params.movie_id}/similar?api_key=${process.env.API_KEY}`,
      })
      .then(function (response) {
          res.send(response.data)
      })
      .catch(e=>console.log(e))
});

// fetch movie detail

router.get('/movie/detail/:movie_id', async (req,res) =>{
    axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${req.params.movie_id}?api_key=${process.env.API_KEY}`,
      })
      .then(function (response) {
          res.send(response.data)
      })
      .catch(e=>console.log(e)) 
});


module.exports = router;
