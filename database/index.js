const mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://evelynbinkard:Aid3n0904@fec-product-overview-1eybm.mongodb.net/FECDB?retryWrites=true&w=majority', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!');
});

module.exports = {db}