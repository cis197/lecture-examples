const express =  require('express');
const middlewares = require('./middlewares');
const todosRouter = require('./routes/todos').router;

const app = express();

const port = process.env.PORT || 3000

app.use((req, res, next) => {
  console.log(`I am a middleware`);
  next();
})


app.get('/', (req, res) => {
  return res.send('hello world');
})

app.use('/todos', todosRouter)

app.get('/login', middlewares.login, middlewares.logout, (req, res) => {
  return res.send('logged in and out');
})

app.get('/restricted', middlewares.adminCheck, (req, res) => {
  return res.send('hello restricted world');
})

app.use((err, req, res, next) => {
  return res.status(500).send(err.message);
})

app.listen(port,  () => {
  console.log(`Listening on port ${port}`);
})
