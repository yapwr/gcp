const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/version', (req, res) => {
  res.send('v1.3 asaSlack implemented')
})

// To ping for testing
app.post('/slack', async (req, res) => {
  res.sendStatus(200)
  const axios = require('axios')
  await axios.post('https://asa.team/api/slack/ping', req)
})

app.post('/asaSlack', async (req, res) => {
  res.sendStatus(200)
  const axios = require('axios')
  await axios.post('https://asa.team/api/slack/asaSlack', req)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})