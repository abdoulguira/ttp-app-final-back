const express = require('express');
require('dotenv').config();
// const { users } = require('../database')
// var bodyParser = require('body-parser')
// var jsonParser = bodyParser.json()
const axios = require('axios');


const router = express.Router();
//api from Peng's youtube resource, must be changed if needed since it is someone's private key:
//https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=' 

// use axios or fetch to get data from movie api

//all movies
router.get('/getMovies/:term', async (req, res) => {
    console.log(req.params.term);
    // res.end('NA');
    axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${req.params.term}`,
      })
      .then(function (response) {
          res.send(response.data)
      })
      .catch(e=>console.log(e))
});

//api key used for categorizing: https://api.themoviedb.org/3/movie/550?api_key=9b790665c935b1e0e1913340b809510c

//genre categorized movies
router.get('/movie/:movie_id/keywords', async (req, res) => {
    console.log(req.params.term);
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
    console.log(req.params.term);
    // res.end('NA');
    axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
        //https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
      })
      .then(function (response) {
          res.send(response.data)
      })
      .catch(e=>console.log(e))
});

//similar movies, working well, use as a recommeded function on the front end.
router.get('/movie/:movie_id/similar', async (req, res) => {
    console.log(req.params.term);
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



module.exports = router;





// This will be a format to post or add data to the data base
router.post('/addData',(req,res) => {

    res.end('NA');
    // basically, in here we will find a way to add data to our json data in the database
    // of course the database we be the tables for users and the table for movies
    // that we will be creating


});

module.exports = router;

// Note that those are just code you can get online, copy and paste.
// only the code inside methods will change base on what you trying to do or archive.
// don't forget to 'npm install -g express' 
// I use the command 'npm install --save-dev nodemon' to install the node_modules
// I used command 'npm init -y' to get the package.json file

// after running 'node index.js' go to http://localhost:5000/ and yu should see Cannot Get /  displayed on the screen
// try http://localhost:5000/getData and you should see the local data that I passed on the get method
