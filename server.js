const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/version', (req, res) => {
  res.send('v1.5')
})

// To ping for testing
app.post('/slack', async (req, res) => {
  res.sendStatus(200)
  const axios = require('axios')
  await axios.post('https://asa.team/api/slack/ping')
})

// app.post('/asaSlack', async (req, res) => {
//   res.sendStatus(200)
//   const axios = require('axios')
//   await axios.post('https://asa.team/api/slack/asaSlack', {
//     "body": req.body,
//     "headers": req.headers
//   })
// })

// Stack overflow soln
app.post('/asaSlack', async (req, res) => {
  res.sendStatus(200)
  let err
  const axios = require('axios')
  await axios.post('https://asa.team/api/slack/ping', {
    body: 'Starting log'
  })
  await axios.post('https://asa.team/api/slack/asaSlack', req.body , req.headers).catch((error) => {
    err = error
  })
  await axios.post('https://asa.team/api/slack/ping', {
    body: err
  })
})

