const express = require('express')
const app = express()
app.get('/', (req, res) => res.json({ message: 'hello welcome pre -prod' }))
app.listen(process.env.PORT || 80)
