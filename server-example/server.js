const express =  require('express');
const middlewares = require('./middlewares');
const todosRouter = require('./routes/todos').router;
const accountRouter = require('./routes/account').router;
const apiRouter = require('./routes/api').router;
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const app = express();

app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

const port = process.env.PORT || 3000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cookieSession({
  name: 'local-session',
  keys: ['spooky'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  return res.render('index', { flash: 'click a link'  });
})

app.use('/account', accountRouter)
app.use('/todos', middlewares.adminCheck, todosRouter)
app.use('/api', apiRouter)

app.use('*', (req, res) => {
  return res.render('index', { flash: '404: page not found :/' });
})

app.use((err, req, res, next) => {
  return res.render('index', { flash: err.message });
})

app.listen(port,  () => {
  console.log(`Listening on port ${port}`);
})
