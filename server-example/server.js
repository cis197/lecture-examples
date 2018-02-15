const express =  require('express');
const middlewares = require('./middlewares');

const app = express();

const port = process.env.PORT || 3000

app.use((req, res, next) => {
  console.log(`I am a middleware`);
  next();
})


app.get('/', (req, res) => {
  return res.send('hello world');
})


app.get('/restricted', middlewares.adminCheck, (req, res) => {
  return res.send('hello restricted world');
})


app.use((err, req, res, next) => {
  res.status(500).send(err.message);
})

app.listen(port,  () => {
  console.log(`Listening on port ${port}`);
})
