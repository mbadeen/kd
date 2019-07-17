const express = require('express')
const cors = require('cors')
const menu = require('./src/menu.json')

const app = express()
const port = 3001

app.use(cors())

app.get('/menu', (req, res) => res.json(menu))

// eslint-disable-next-line
app.listen(port, () => console.log(`Listening on port ${port}!`))
