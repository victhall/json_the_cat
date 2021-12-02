const request = require('request')
const url = 'https://api.thecatapi.com/v1/breeds/search?q=Siberian';

request(url, (error, response, body) => {
  if(error) console.log(error)
  console.log(response.statusCode);
  console.log(body);
  const data = JSON.parse(body);
console.log(data);
console.log(typeof data);
for (let item of data) {
console.log(item.weight)
}
});
