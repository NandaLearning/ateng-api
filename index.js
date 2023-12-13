const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

const data = [
  {name: "Ateng Api cuyy 😎", anggota: 7 ,image:"https://scontent.fcgk43-1.fna.fbcdn.net/v/t1.18169-9/20046300_117010978923363_7675206835184950992_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2be8e3&_nc_eui2=AeHKFbREpwQ8a8t60Qmt4Lq3a_IBH59pDlZr8gEfn2kOVkwAHfW9GQIiMOpCFYNYoq5SmX4ULg3JSV-_TLLxC1fJ&_nc_ohc=v4NUNrFMRjUAX8ABKMr&_nc_oc=AQkfgH-k65sugC7MJBt8lmClbHAnSa_mqzxmaH1TN6Xrp1g-DCVZAWq7yOrGgwnxWkA&_nc_ht=scontent.fcgk43-1.fna&oh=00_AfBFdQ6EjnB1zRjNg-kk9sEZdg2Qx_fcJbnFceYvTvbGgQ&oe=65A0A37B"},
]

// routes utama method (get) / endpoint
app.get('/', (req,res) => {
  res.send(data)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})