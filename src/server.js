const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const userRoute = require('./routes/Users')

app.use('/api/v1/users', userRoute)

app.get('/status', (req, res) => {
  res.send({ status: 'OK'})
})

