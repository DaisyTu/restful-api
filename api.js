const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/post' function (req,res){
  // Setting Database(PostgreSQL, MySQL, Redis, SQLite, MongoDB,)
})

app.listen(3000)
console.log("[Ready] Server Listen on port 3000...");
