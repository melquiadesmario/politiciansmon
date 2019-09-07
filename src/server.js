const express = require('express')

const app = express()

app.use(express.json())

app.use(require('./routes'))

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Server started on port ${ port }`))
