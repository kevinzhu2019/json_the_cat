const request = require('request');

const searchKey = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${searchKey}`, (error, response, body) => {
  if (JSON.parse(body)["status"] === 404) {
    console.log("Please check the URL and try again later!");
  } else {
    // console.log(body);
    // console.log(error);
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Sorry, we didn't find anything!`);
    } else {
      console.log(data[0]["description"]);
    }
  }
});