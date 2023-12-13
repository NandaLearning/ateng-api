const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

const data = [
  {
    name: "Ateng Api cuyy 😎",
    anggota: 7,
    image: "./ateng.jpeg",
    slides: [
      "https://images.tokopedia.net/img/cache/1190/wmEwCC/2023/12/12/f5347ee5-0ce3-4b76-bf24-0ef05e6c22c3.jpg.webp?ect=4g",
      "https://images.tokopedia.net/img/cache/1190/wmEwCC/2023/12/12/f5347ee5-0ce3-4b76-bf24-0ef05e6c22c3.jpg.webp?ect=4g",
      "https://images.tokopedia.net/img/cache/1200/NXCtjv/2023/12/9/ef5c2f59-3a39-4120-9b38-c613c0e27baa.jpg",
    ],
  },
];

// Main route - method (GET) / endpoint
app.get('/', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
