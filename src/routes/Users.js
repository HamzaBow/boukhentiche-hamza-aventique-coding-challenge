const express = require('express')
const router = express.Router()
const fs = require('fs')

// Get All Users
router.get('/', (req, res) => {
  const data = fs.readFileSync(__dirname +'/../../data/users.json')
  const users = JSON.parse(data)
  const filteredUsers = users.map((user) =>  {
    return {
      id: user.id,
      full_name: `${user.first_name} ${user.last_name}`,
      email: user.email,
      age: new Date().getFullYear() - Number.parseInt(user.birthday.substr(0, 4))
    }
  })
  res.json(filteredUsers)
})

// Get One User

router.get('/:id', (req, res) => {
  const data = fs.readFileSync(__dirname +'/../../data/users.json')
  const users = JSON.parse(data)
  const user = users.find((u) => u.id === req.params.id)
  res.json(user)
})


module.exports = router;