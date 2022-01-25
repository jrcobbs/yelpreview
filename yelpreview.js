'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('YOUR_API_KEY');
 
const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');
  const queryObject = url.parse(req.url, true).query;
    let params = queryObject;
    getBusiness(Object.values(params)[0], Object.values(params)[1], res)
});

server.listen(port, hostname, function() {
  console.log("server started at " + hostname + "/" + port)
});

function getReviews(id) {
  var reviewResults = new Array();
  return new Promise(function(resolve, reject) {
    client.reviews(id).then(response => {
      const reviews = response.jsonBody.reviews !== null ? response.jsonBody.reviews : []
      reviews.forEach(review => {
        let reviewDto = {"review": review.text}
        reviewResults.push(reviewDto);
      });
      console.log(JSON.stringify(reviewResults));
      resolve(JSON.stringify(reviewResults));
    });
  });
  
}
function getBusiness(searchTerm, searchLocation, res) {
  client.search({
    term: '\'' + searchTerm + '\'',
    location: '\'' + searchLocation + '\'',
  }).then(response => {
    getReviews(response.jsonBody.businesses[0].id).then(function(reviewResults) {
      res.end(reviewResults);
    }).catch(e => {
      res.end(e);
    });
  }).catch(e => {
    res.end("Restaurant not found. Make sure you include restaurant name and location in your search" +
    " and the url has key words assigned to search values (e.g. 'restaurant=taco bell&location=san francisco' not '=taco bell&=san francisco'." +
    " Otherwise, please try a new restaurant");
  });
}