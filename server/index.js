const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL || 'mongodb://sim:test@ds145790.mlab.com:45790/breaze';
const router = express.Router();
const mongoose = require('mongoose');
const {Usersky} = require('./models');
const passport = require("passport"); //added this
const BearerStrategy = require("passport-http-bearer").Strategy; // a
const app = express();
app.use(bodyParser.json())
// API endpoints go here!











 // PASSPORT STRATEGY =========================


passport.use(new BearerStrategy(
  function(token, done) {
    console.log(token);

    User.findOne({ accessToken: token }, function (err, user) {
      console.log('token is here',token)
      console.log('user is here', User)
      console.log(user)
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'all' });
    });

  }
));




// ================================== -- USER COLLECTION--  STARTS  ===========================


app.get('/api/user',passport.authenticate('bearer', { session: false }), (req, res) => {
  User
  .find()
  .exec()
  .then(data => res.json({
      users:data.map(user=> user.apiRepr())
  }))
  .catch(console.error)
}
);


// this end point is created because i can use it to check if a user exists 
// in the data base, when google auth is clicked 
// -- if the user is already in the database, then this will be used
//-- if not a new user will be created.
app.get('/api/user/:googleId', (req, res) => {
  User
  .findOne({googleId: req.params.googleId})
  .exec()
  .then(data => res.json(data))
  .catch(console.error)
}
);





















// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {


         mongoose.connect(DATABASE_URL, err => {
            if(err) {
              return reject(err);
        }
            console.log('Db connected');
            server = app.listen(port, () => {
                resolve();
            }).on('error', reject);
        });
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
