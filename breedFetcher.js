const args = process.argv.slice(2)
const request = require('request')

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args;

const fetchBreedDescription = function(breedName, callback) {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      return callback(error);
    }
    if (breedName === null) {
      console.log('Breed not found.');
    }

    return callback(data[0].description, '');
  });
}

fetchBreedDescription(args, (error, description) => {
  console.log(error, description)
});

module.exports = { fetchBreedDescription };
