require('babel-register')({
  presets: [ 'react' ]
})

const express = require('express'), 
  app = express(),
  bodyParser = require('body-parser'),
  validator = require('express-validator'),
  logger = require('morgan'),
  errorHandler = require('errorhandler'),
  compression = require('compression'),
  ReactDOMServer = require('react-dom/server'),
  React = require('react')


const Content = React.createFactory(require('./components/content.jsx'))

app.set('view engine', 'hbs')

app.use(compression())
app.use(logger('dev'))
app.use(errorHandler())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(validator())
app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.render('index', {
    content: ReactDOMServer.renderToString(Content()),
    // props: '<script type="text/javascript">var messages='+JSON.stringify(docs)+'</script>'
  })
})

app.listen(3000)