const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

const data = [
  { name: "Ateng Api cuyy 😎", anggota: 7 ,image:"https://media-xsp1-2.cdn.whatsapp.net/v/t61.24694-24/312240005_940587030689958_2275050323242277943_n.jpg?ccb=11-4&oh=01_AdSDrXuxSDxM7Qb_MIT_Tx4Z17DVa9qvhBE9MKmmmd_JIA&oe=65844165&_nc_sid=e6ed6c&_nc_cat=108"},
]

// routes utama method (get) / endpoint
app.get('/', (req,res) => {
  res.send(data)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})