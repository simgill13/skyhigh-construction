const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL || 'mongodb://sim:test@ds145790.mlab.com:45790/breaze';
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const {Usersky} = require('./models');
const passport = require("passport"); //added this
const proxy = require('http-proxy-middleware');
const {BasicStrategy} = require('passport-http');
const BearerStrategy = require("passport-http-bearer").Strategy; // a
const app = express();
app.use(bodyParser.json())
var setCookie = require('set-cookie');

// API endpoints go here!












 // PASSPORT STRATEGY =========================

// this srategy is more for google login than it is regular pass check.

// passport.use(new BearerStrategy(
//   function(token, done) {
//     console.log(token);

//     User.findOne({ accessToken: token }, function (err, user) {
//       console.log('token is here',token)
//       console.log('user is here', User)
//       console.log(user)
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       return done(null, user, { scope: 'all' });
//     });

//   }
// ));




// ================================== -- USER COLLECTION--  STARTS  ===========================






app.get('/api/usersky', (req, res) => {
    console.log('you have hit the get call')
  Usersky
  .find()
  .exec()
  .then(data => {
    res.json(data)
  })
  .catch(console.error)
}
);



// this end point will handel user creation 
app.post('/api/usersky', (req, res) => {
    let email = req.body.email
    let password= req.body.password
  

    Usersky
    .find({email})
    .count()
    .exec()
    .then(count => {
        if(count >= 1){
            return res.status(401).json({message:"email is already taken"})
        }
        return  Usersky.hashPassword(password);      
    })
    .then(hash => {
       return Usersky
      .create({
       email: req.body.email,
       password:hash
      })
    })
    .then(newUser => {
      res.status(201).json(newUser.apiRepr())
    })
  
});









// use this to validate the login

const basicStrategy = new BasicStrategy(
  (email, password, callback) => {

    let user;


    Usersky
      .findOne({email})
      .exec()
      .then(_user => {
        user = _user;
        if (!user) {
          console.log("second")
          return callback(null, false, "Incorrect Email");
        }
        console.log('THIRDDD')
        user.validatePassword(password)
      
      .then(isValid => {
        if (!isValid) {
          console.log("forth")
          return callback(null, false, "Incorrect password");
        }
        else {
          console.log('fifth')
          return callback(null, user);
        }
      });
    })
});





passport.use(basicStrategy);
app.use(passport.initialize());

app.get('/api/usersky/validate/:useremail', passport.authenticate('basic', {session: false}), (req, res) => {
  useremail = req.params.useremail.toLowerCase();

  Usersky
    .findOne({ email: useremail })
    .then(user => {
      if (!user) {
        return res.status(404).json({message: 'Invalid Credentials'});
      } else {
       
        return res.status(200).json(user.apiRepr());
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Internal server error'})
    });
})
























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
