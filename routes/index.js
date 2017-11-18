var express = require('express');
var router = express.Router();
var quotes = require('../public/data/quotes.json');

/* Get a random quote from quotes and assign values */
function getRandomQuote(){
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(quote);
  quoteAuthor = quote['quoteAuthor'];
  quoteText = quote['quoteText'];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // Generate random quote on each get request
  getRandomQuote();
  res.render('index', { title: 'Quoter' });
});

module.exports = router;
