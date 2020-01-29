const express = require('express');
const cors = require('cors')
const path = require('path')
require('dotenv').config()

require('./mongo.js')


const app = express();

const PORT = process.env.PORT || 3307;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'react')));


const { testConnection } = require('./DataAccessLayer.js')
const { checkPass } = require('./DataAccessLayer.js')
const { check } = require('./DataAccessLayer.js')
const { checkUse } = require('./DataAccessLayer.js')
const { checkEmail } = require('./DataAccessLayer.js')
const { createObject } = require('./DataAccessLayer.js')
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


app.get('/users-names', async (req,res) => {
    let filter = req.query.username
    console.log(filter)
    const clear = await checkUse(filter)
    console.log(clear)
    res.send(clear)
})

app.get('/users-emails', async (req, res) => {
    let filter = req.query.email
    console.log(filter)
    const clear = await checkEmail(filter)
    console.log(clear)
    res.send(clear)
})

app.get('/users-login', async (req, res) => {
    let filter = req.query.username
    let pass = req.query.password
    console.log(filter)
    const user = await checkPass(filter)
    console.log(user)
    const match = check(user.data[0].password, pass)
    if(match === true){
        res.send(user.data[0]._id)
    } else if (match === false){
        res.send('Sign in Failed')
    }
})


app.post('/users', async (req, res) => {
    const newObject = req.body
    const user = await createObject(newObject)
    console.log('Object Created')
    res.send(user)
})

app.post('/lists', async (req, res) => {
    const user = req.query.user
    const newObject = req.body
    const list = await createListObj(user, newObject)
    console.log('Object Created')
    res.send(list)
})

app.post('/tasks', async (req, res) => {
    const user = req.query.user
    const list = req.query.list
    const newObject = req.body
    console.log(newObject)
    const task = await createTaskObj(user, list, newObject)
    console.log('Object Created')
    res.send(task)
})

app.get('/lists', async (req, res) => {
    const user = req.query.user
    console.log(user)
    const lists = await readListObjects(user)
    console.log('A list GET Request was made');
    res.send(lists)
})

app.get('/tasks', async (req, res) =>  {
    const user = req.query.user
    const list = req.query.list
    const index = req.query.index
    const tasks = await readTaskObjects(user, list, index)
    res.send(tasks)
})

app.patch('/lists', async(req, res) => {
    const user = req.query.user
    const id = req.query.id
    const list = req.body
    const update = await updateListObj(user, id, list)
    res.send(update)
})

app.delete('/lists', async(req, res) => {
    const user = req.query.user
    const list = req.query.list
    const update = await deleteListObj(user, list)
    res.send(update)
})

app.patch('/tasks', async(req, res) => {
    const user = req.query.user
    const id = req.query.id
    const listname = req.query.list
    const task = req.body
    const update = await updateTaskObj(user, listname, id, task)
    res.send(update)
})

app.patch('/tasks-complete', async(req, res) => {
    const user = req.query.user
    const id = req.query.id
    const listname = req.query.list
    const task = req.query.complete
    const update = await updateTaskObjDone(user, listname, id, task)
    res.send(update)
})

app.delete('/tasks', async(req, res) => {
    const user = req.query.user
    const id = req.query.id
    const listname = req.query.list
    const update = await deleteTaskObj(user, listname, id)
    res.send(update)
})

app.delete('/tasks-complete', async(req, res) => {
    const user = req.query.user
    const listname = req.query.list
    const update = await deleteTaskObjDone(user, listname)
    res.send(update)
})

app.delete('/tasks-selected', async(req, res) => {
    const user = req.query.user
    const listname = req.query.list
    const names = req.query.names
    const update = await deleteTaskObjSelected(user, listname, names)
    res.send(update)
})

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, './react/', '/'))
})

app.listen(PORT, () => console.log(`Server is up on port ${PORT}.`));