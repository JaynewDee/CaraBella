const db = require('../config/connection');
const {
   User,
   Package
} = require('../models');

db.once('open', async () => {


   await User.create({
      username: 'Admin',
      firstName: 'Tricia',
      lastName: 'Kelly',
      email: 'kellytm91@gmail.com',
      password: 'password91'
   });

   console.log('Data seeded');

   process.exit();
});