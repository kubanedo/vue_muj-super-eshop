// muj server
const path = require('path');
const cors = require('cors');
const express = require('express');

const server = express();
server.use(cors());

server.get('/', function (req, res) {
    const filePath = path.resolve(__dirname, './index.html')
    res.sendFile(filePath)
});

server.get('/api/products', function (req, res) {
    const filePath = path.resolve(__dirname, './data.json')
    res.sendFile(filePath)
  });

server.get('/api/product/url/:url_id', function (req, res) {
    const data = require('./data-by-url.json');
    const productData = data[req.params.url_id];
    if (productData === undefined || productData === null)  {
      console.log('no data')
      res.json({ "err": "nodata"})
    } else {
      res.json(data[req.params.url_id])
    }  
});

server.get('/api/product_by_url/:product_id', function (req, res) {
  const data = require('./data.json');
  const productData = data[req.params.product_id];
  if (productData === undefined || productData === null) {
    console.log('no data')
    res.json({ "err": "nodata" })
  } else {
    res.json(data[req.params.product_id])
  }
});

server.get('/api/products/available', function (req, res) {
    const data = require('./data.json')
    const availableProducts = {}
  
    Object.entries(data).forEach(([key, val]) => {
      if (val.stock > 0) {
        availableProducts[key] = val
      }
    })
  
    res.json(availableProducts)
});

server.get('/api/products/featured', function (req, res) {
  const data = require('./data.json')
  const featuredProducts = {}

  Object.entries(data).forEach(([key, val]) => {
    if (val.tag == "featured") {
      featuredProducts[key] = val
    }
  })

  res.json(featuredProducts)
});

server.get('/api/products/featured/:number_of_products', function (req, res) {
  const data = require('./data.json')
  const featuredProducts = {}
  
  let i = 0;
  Object.entries(data).forEach(([key, val]) => {
    if (val.tag == "featured") {
      if(i < req.params.number_of_products) {
        featuredProducts[key] = val;
        i++;
      }
    }
  });

  res.json(featuredProducts)
});


/*server.get('/api/products/featured/random/', function (req, res) {
  const data = require('./data.json')
  const featuredProducts = {}

  let arrayOfItems = Object.entries(data);
  function shuffleArray(array) {

    let currentIndex = array.length;
    let temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  
  };
  shuffleArray(arrayOfItems);
  arrayOfItems.forEach(([key, val]) => {
    if (val.tag == "featured") {
      featuredProducts[key] = val
    }
  })
  //console.log(req.params.number_of_items);
  res.json(featuredProducts)
});*/

server.listen(5000, function () {
  console.log('Server bezi na adrese http://localhost:5000')
})