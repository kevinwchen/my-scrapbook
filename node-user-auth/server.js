// pull in express library
const express = require('express')
// get app for express
const app = express()
// bcrypt library
const bcrypt = require('bcrypt')

// ensure app can accept json as an input
app.use(express.json())


// this users variable is typically stored in a DB
const users = ['nana']

// create route to get users
app.get('/users', (req, res) => {
    res.json(users)
})

// create route to creating a user (not secure, passwords not hashed)
// app.post('/users', (req, res) => {
//     const user = { name: req.body.name, password: req.body.password }
//     users.push(user)
//     res.status(201).send()
// })

// route to create user with bcrypt
// salt is stored inside hashedPassword
app.post('/users', async (req, res) => {
    try {
        // const salt = await bcrypt.genSalt()
        // const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        // console.log(salt)
        // console.log(hashedPassword)
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

// route to login a particular user

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name == req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        // bcrypt.compare prevents a timing attack
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not allowed')
        }
    } catch {
        res.status(500).send()
    }
})


app.listen(3000)