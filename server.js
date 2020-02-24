const express = require('express');
const cors = require('cors')
const path = require('path')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const passport = require('passport')
const passportGoogle = require('passport-google-oauth')
const GoogleStrategy = passportGoogle.OAuth2Strategy
const { to } = require('await-to-js')
const { getEmail, createObject } = require('./DataAccessLayer.js')
const signInTime = ((1000 * 60) * 60)
require('dotenv').config()
require('passport')
require('./mongo.js')

const strategyOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.SERVER_API_URL}/auth/google/callback`
}

const verifyCallback = async (
        accessToken,
        refreshToken,
        profile,
        done
      ) => {
        const verifiedEmail = profile.emails.find(email => email.verified) || profile.emails[0]
          console.log(verifiedEmail)
          console.log(profile.id)
        let [err, user] = await to(getEmail(verifiedEmail.value))
        
        if (err || user) {
            return done(err, user)
        }
        
        
        
        const [createdError, createdUser] = await to(
          createObject({
            provider: profile.provider,
            providerId: profile.id,
            displayName: profile.displayName,
            email: verifiedEmail.value,
            password: null,
            lists: []
          })
        )

        return done(createdError, createdUser)
      }


const app = express();

const PORT = process.env.PORT || 3307;

app.use(cors());

passport.use(new GoogleStrategy(strategyOptions, verifyCallback))
  
app.get('/auth/google',
// async (req, res) =>{
  passport.authenticate('google', {
      scope: [
          'https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/userinfo.email'
      ]
    })
//   res.send()
)



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'react')));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});



const { testConnection } = require('./DataAccessLayer.js')
const { checkPass } = require('./DataAccessLayer.js')
const { checkUse } = require('./DataAccessLayer.js')
const { checkEmail } = require('./DataAccessLayer.js')
// const { createObject } = require('./DataAccessLayer.js')
const { createListObj } = require('./DataAccessLayer.js')
const { createTaskObj } = require('./DataAccessLayer.js')
const { readListObjects } = require('./DataAccessLayer.js')
const { readTaskObjects } = require('./DataAccessLayer.js')
const { updateListObj } = require('./DataAccessLayer.js')
const { updateTaskObj } = require('./DataAccessLayer.js')
const { updateTaskObjDone } = require('./DataAccessLayer.js')
const { deleteTaskObj } = require('./DataAccessLayer.js')
const { deleteTaskObjDone } = require('./DataAccessLayer.js')
const { deleteTaskObjSelected } = require('./DataAccessLayer.js')
const { deleteListObj } = require('./DataAccessLayer.js')
const { getSalt } = require('./DataAccessLayer.js')


app.get('/connection', async (req, res) => {
    const connection = await testConnection()
    res.send(connection)
})

  
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: `${process.env.FRONT_END_URL}/CUForm` }), async (req, res) => {
        console.log(res)
        console.log(req.user)
        console.log(res.user._id)
        return res
        .status(200)
        .cookie('jwt', (jwt.sign({ data: req.user._id }, process.env.signKey)), {
            // domain: `${process.env.COOKIE_URL}`,
            // path:'/',
            expires: new Date(Date.now() + (signInTime)),
            httpOnly: false
        })
        .send(jwt.sign({data: sign._id}, process.env.signKey))
        // .redirect(`${process.env.FRONT_END_URL}/Select`)
})

app.get('/users-names', async (req, res) => {
    const username = req.query.username
    console.log(username)
    const clear = await checkUse(username)
    console.log(clear)
    res.send(clear)
})

app.get('/users-emails', async (req, res) => {
    const email = req.query.email
    console.log(email)
    const clear = await checkEmail(email)
    res.send(clear)
})

app.get('/users-check', async (req, res) => {
    const username = req.query.username
    const salt = await getSalt(username)
    if(salt === false){
        res.send('Sign in Failed')
    } else {
        res.send(salt)
    }
})

app.get('/users-login', async (req, res) => {
    console.log(process.env.signKey)
    const username = req.query.username
    const pass = jwt.verify(req.query.password, process.env.checkKey)
    const sign = await checkPass(username)
    console.log(sign._id)
    if (bcrypt.compareSync(pass, sign.password)) {
        res.send(jwt.sign({data: sign._id}, process.env.signKey))
    } else {
        res.send('Sign in Failed')
    }
})


app.post('/users', async (req, res) => {
    console.log(req.body)
    const salt = bcrypt.genSaltSync(10);
    console.log(salt)
    const hash = bcrypt.hashSync(jwt.verify(req.body.password, process.env.passKey), salt);
    // console.log(hash)
    const newObject = {
        username: req.body.username,
        email: req.body.email,
        password: hash,
        salt: jwt.verify(req.body.salt, process.env.inSaltKey).toString(),

        lists: []
    }

    const user = await createObject(newObject)
    console.log('Object Created')
    res.send('New User Created')
})

app.post('/lists', async (req, res) => {
    if(
        req.body.listname.length > 50 ||
        req.body.description.length > 250 ||
        req.body.due.length > 50
        ){
            res.send('Too much data, keep list fields within 50, 250, and 50 characters respectively')
        }else{
    const user = jwt.verify(req.query.user, process.env.postListKey).data
    const newObject = req.body
    const list = await createListObj(user, newObject)
    console.log('Object Created')
    res.send(list)
        }
})

app.post('/tasks', async (req, res) => {
    if(
        req.body.name.length > 50 ||
        req.body.description.length > 250 ||
        req.body.due.length > 50
        ){
            res.send('Too much data, keep task fields within 50, 250, and 50 characters respectively')
        }else{
    const user = jwt.verify(req.query.user, process.env.postTaskKey).data
    const list = req.query.list
    const newObject = req.body
    const task = await createTaskObj(user, list, newObject)
    console.log('Object Created')
    res.send(task)
        }
})

app.get('/lists', async (req, res) => {
    const user = jwt.verify(req.query.user, process.env.getListKey).data
    console.log(user)
    const lists = await readListObjects(user)
    console.log('A list GET Request was made');
    res.send(lists)
})

app.get('/tasks', async (req, res) =>  {
    console.log(req.query.user)
    const user = jwt.verify(req.query.user, process.env.getTaskKey).data
    console.log(user)
    const list = req.query.list
    const index = req.query.index
    const tasks = await readTaskObjects(user, list, index)
    res.send(tasks)
})

app.patch('/lists', async(req, res) => {
    if(
        req.body.listname.length > 50 ||
        req.body.description.length > 250 ||
        req.body.due.length > 50
        ){
            res.send('Too much data, keep list fields within 50, 250, and 50 characters respectively')
        }else{
    const user = jwt.verify(req.query.user, process.env.patchListKey).data
    const id = req.query.id
    const list = req.body
    const update = await updateListObj(user, id, list)
    res.send(update)
        }
})

app.delete('/lists', async(req, res) => {
    const user = jwt.verify(req.query.user, process.env.deleteListKey).data
    const list = req.query.list
    const update = await deleteListObj(user, list)
    res.send(update)
})

app.patch('/tasks', async(req, res) => {
    if(
        req.body.name.length > 50 ||
        req.body.description.length > 250 ||
        req.body.due.length > 50
        ){
            res.send('Too much data, keep task fields within 50, 250, and 50 characters respectively')
        }else{
    const user = jwt.verify(req.query.user, process.env.patchTaskKey).data
    const id = req.query.id
    const listname = req.query.list
    const task = req.body
    const update = await updateTaskObj(user, listname, id, task)
    res.send(update)
        }
})

app.patch('/tasks-complete', async(req, res) => {
    const user = jwt.verify(req.query.user, process.env.patchCompleteKey).data
    const id = req.query.id
    const listname = req.query.list
    const task = req.query.complete
    const update = await updateTaskObjDone(user, listname, id, task)
    res.send(update)
})

app.delete('/tasks', async(req, res) => {
    const user = jwt.verify(req.query.user, process.env.deleteTaskKey).data
    const id = req.query.id
    const listname = req.query.list
    const update = await deleteTaskObj(user, listname, id)
    res.send(update)
})

app.delete('/tasks-complete', async(req, res) => {
    const user = jwt.verify(req.query.user, process.env.deleteCompleteKey).data
    const listname = req.query.list
    const update = await deleteTaskObjDone(user, listname)
    res.send(update)
})

app.delete('/tasks-selected', async(req, res) => {
    const user = jwt.verify(req.query.user, process.env.deleteSelectKey).data
    const listname = req.query.list
    const namesArray = req.query.names
    const update = await deleteTaskObjSelected(user, listname, namesArray)
    res.send(update)
})

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(PORT, () => console.log(`Server is up on port ${PORT}.`));