const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/SN_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;