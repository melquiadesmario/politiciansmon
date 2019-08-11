const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send('Hello Dev!')
})

app.listen(3333, () => console.log('Server is runing...!'))
