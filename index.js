const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

const data = [
  { name: "Ateng Api cuyy 😎", anggota: 7 ,image:"./ateng.jpeg"},
]

// routes utama method (get) / endpoint
app.get('/', (req,res) => {
  res.send(data)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})