var assert = require('assert');
const yelp = require('yelp-fusion');

describe('when Yelp client does not have API key', function() {
    it('report error', function() {
      API_KEY = "YOUR_API_KEY";
      const client = yelp.client("");
      assert.notEqual(client.apiKey, API_KEY);
    });
});
describe('when Yelp client does not have search terms', function() {
    it('report null', function() {
      API_KEY = "YOUR_API_KEY";
      const client = yelp.client(API_KEY);
      client.search({
        term: null,
        location: null,
      }).then(response => {
        assert.equal(response, null);
        });
      });
});