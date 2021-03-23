// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.post("/api/user/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.json({ "createdUser": true });
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.post("/api/user/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/api/musician", isAuthenticated, (req, res) => {
    console.log(req.body)
    db.Musician.create({
      name: req.body.name,
      public: req.body.public,
      synth: req.body.synth,
      gain: req.body.gain,
      transpose: req.body.transpose,
      UserId: req.user.id
    }
    ).then(dbSponse => {
      console.log(dbSponse)
      res.json({ ok: true })
    }
    ).catch(err => {
      console.error(err)
      res.status(500).send('postMusician error')
    })
  })
};
