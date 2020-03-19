const express = require('express');
const app = express();
const Image =  require('../class/Image')
app.get('/images', (req,res) =>{
  Image.findAll({
    limit: 20,

    order: [ [ 'createdAt', 'DESC' ]]
  }).then(function(data){
    
    return res.send(data);
  }); 
})

module.exports = app;