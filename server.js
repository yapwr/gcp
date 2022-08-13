const express = require('express')
const app = express()
const port = 8080
const functions = require('firebase-functions')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/version', (req, res) => {
  res.send('v1.0')
})

app.post('/slack', async (req, res) => {
  const start = new Date().getTime()
  functions.logger.log('Start of slack')
  res.sendStatus(200)
  functions.logger.log('After res send 200', new Date().getTime() - start)
  const axios = require('axios')
  await axios.post('https://asa.team/api/slack/ping')
  functions.logger.log('End of slack', new Date().getTime() - start)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})