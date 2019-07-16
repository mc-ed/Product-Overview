const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');
const db = require('./index.js')

function readFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function(err, filenames) {
      if (err) {
        console.log('no data', err);
        return;
      }
    
      filenames.forEach(function(filename) {
        fs.readFile(dirname + '/' + filename, 'utf-8', function(err, content) {
          if (err) {
            console.log(err);
            return;
          } else {
            if(filename !== '.DS_Store'){
              let instance = new Product(JSON.parse(content))
              instance.save((err) => {
                if (err){
                  console.log(err);
                } else {
                  console.log('saved');
                }
      
               
              });
  
  
            }
          // onFileContent(filename, content);
          // console.log(JSON.parse(content))
          
          }
        });
      });
    });
  }
  
  // const pleaseWork = readFiles('../ProductJSONFiles');
  