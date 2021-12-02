const args = process.argv.slice(2)
const request = require('request')

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args;

const BreedDesc = (breed, callback) => {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      return callback(error);
    }
    if (breed === null) {
      console.log('Breed not found.');
    }

    return callback(data[0].description, '');
  });
}

BreedDesc(args, (error, description) => {
  console.log(error, description)
});