// Dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

// listen for when someone goes to
// localhost:3000/
// upon getting a request at that URL
// send text 'Hello World'

// Routes
app.get('/', (req, res) => {
  // console.log('Oh hey! I got a request. Let me respond with something')
  res.render('show.ejs')
})

// app.get('/somedata', (request, response) => {
//   // console.log('response: ', response);
//   // console.log('===================');
//   response.send('here is your information')
// })

// App Listen
app.listen(PORT, () => {
  console.log('I am listening on port ' + PORT)
})