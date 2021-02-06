//pulling packages
const express = require('express')
const app = express()
const ejs = require('ejs')
const ejsLayouts = require('express-ejs-layouts')
const fs = require('fs')
const weather = require('weather-js')

//middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//routes
app.get('/', (req,res) =>{
    res.render('./weather/index')
})

app.get('/weather', (req,res)=>{
    let zipcode = req.query.zipcode
    weather.find({search: zipcode , degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        res.render('./weather/search.ejs', {result})
      });
})

app.get('/weather', (req,res)=>{
    res.render('./weather/search')
    console.log(`you made it to the results page`)
})

//server
const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`${PORT}🎧`))