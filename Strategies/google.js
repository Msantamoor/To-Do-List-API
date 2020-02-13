import passport from 'passport'
import passportGoogle from 'passport-google-oauth'
const jwt = require('jsonwebtoken')
const { logGoogle } = require('../DataAccessLayer.js')
require('dotenv').config()

const GoogleStrategy = passportGoogle.OAuth2Strategy

const strategy = app => {
  const strategyOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.SERVER_API_URL}/auth/google/callback`
  }

//   const verifyCallback = async (accessToken, refreshToken, profile, done) => {
//     // TODO
//   }

  passport.use(new GoogleStrategy(strategyOptions))

  app.get('/auth/google',
    passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    })
)

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        console.log(res)
        console.log(res.user)
        const email = res.user.email
        console.log(email)
        const user = await logGoogle(res.user, email)
        res.send(jwt.sign({data: user._id}, process.env.signKey))
        .redirect("/Select")
    }

)

  return app
}

export { strategy }