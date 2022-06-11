const weather = require('./weather')
const geocode = require('./geocode')
const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('../src/views/index', {
        title: 'Weather app',
        name: "ABC"
    })
})

app.get('/weather', (req, res) => {
    geocode(req.query.address, (error, data) => {
        if(error) {
            return res.send({
                error
            })
        }else{
            weather(data, (error, data) => {
                if(error){
                    return res.send({error})
                }else{
                    return res.send(`The temperture in ${data.location} is ${data.data}, and it feels like ${data.data1}`)
                }
            })
        }
    })
})

app.listen(3000, () => {
    console.log("server is up on port 3000")
})