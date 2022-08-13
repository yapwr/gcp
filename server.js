const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/version', (req, res) => {
  res.send('v1.0')
})

app.post('/slack', async (req, res) => {
  const start = new Date().getTime()
  console.log('Start of slack')
  res.sendStatus(200)
  console.log('After res send 200', new Date().getTime() - start)
  const axios = require('axios')
  await axios.post('https://asa.team/api/slack/ping')
  console.log('End of slack', new Date().getTime() - start)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})