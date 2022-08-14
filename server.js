const express = require('express')
const axios = require('axios')

const app = express()
const port = 8080

app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.sendStatus(204)
})

app.get('/version', (req, res) => {
  res.status(200).json({ version: 'v1.6' })
})

app.post('/slack', async (req, res) => {
  res.sendStatus(204)
  await axios.post('https://asa.team/api/slack/ping')
})

app.post('/asaSlack', async (req, res) => {
  res.sendStatus(200)
  await axios.post('https://asa.team/api/slack/asaSlack', req.body, {
    headers: req.headers
  })
})

