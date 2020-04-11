// muj server
const path = require('path');
const express = require('express');

const server = express();

server.get('/', function (req, res) {
    const filePath = path.resolve(__dirname, './index.html')
    res.sendFile(filePath)
});

server.get('/api/products', function (req, res) {
    const filePath = path.resolve(__dirname, './data.json')
    res.sendFile(filePath)
  })
  
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

server.listen(5000, function () {
  console.log('Server bezi na adrese http://localhost:5000')
})