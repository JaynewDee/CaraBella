const mongoose = require('mongoose');

mongoose.connect(
   process.env.MONGODB_URI || 'mongodb://localhost/cara_bella', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
   }
);

module.exports = mongoose.connection;