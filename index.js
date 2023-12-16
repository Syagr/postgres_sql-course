const express = require('express')

const PORT = process.env.PORT || 80

const app = express()

app.get('/', (reg, res) => {
res.send('HELLO POSTGRES + NODEJS')
})

app.listen(PORT, () => console.log(`server started on post ${PORT}`))