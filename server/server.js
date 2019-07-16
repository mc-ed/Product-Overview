const express = require('express')
const app = express()
const port = 3000;
const db = require('../database/index.js')
const saveImage = require('../database/downloadPhotos')

app.use(express.static('./public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/:SS', (req, res) => {
    
    const arg = req.params.SS;

    db.getItem(arg).then(data => res.send(data));
})

app.listen(port, () => console.log(`app listening on port ${port}!`))