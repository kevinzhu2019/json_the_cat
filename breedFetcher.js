const request = require('request');

// const searchKey = process.argv[2];

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(`${error}`, null);
    } else if (JSON.parse(body)["status"] === 404) {
      callback("There are somethign wrong with the website, try again later!", null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(`Sorry, we didn't find anything!`, null);
      } else {
        callback(null, data[0]["description"]);
      }
    }
  });
};

module.exports = { fetchBreedDescription };