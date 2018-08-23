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

app.post("/upload", (req, res, next) => {
  const data = req.body.payload // array of objects
  console.dir(data)
  const new_entry = {
    date: Date(),
    orderlist: req.body.payload.orderlist,
    sum: req.body.payload.sum
  }
  res.end(JSON.stringify(new_entry))
})

app.get('/', (req, res, next) => {
  res.render('index', {
    content: ReactDOMServer.renderToString(Content()),
    // props: '<script type="text/javascript">var messages='+JSON.stringify(docs)+'</script>'
  })
})

app.listen(3000)

// 주문완료를 누르면
// this.state.current_order 배열을 json으로 파싱
// post 방식으로 전송

// server에서는 받아다가 순회하며
// public/order_report.json을 열어서
// 데이터를 읽어온 뒤
// [0] [...원래 있던 데이터] 식으로 새로 배열 만든 뒤
// 덮어쓰기

// 주문 건들을 모두 모아놓은 order_report.json에 저장하되
// 맨 앞에 추가하여 attach

// 완료 후 이에 대하여 alert로 주문 내역 출력
// 그리고 this.state.current_order는 초기화

// 서버 요청에 대해서는 반드시, 반환이 있어야 한다. res를 통하여.
// 요청할 때에 헤더를 반드시 잘 작성해야 한다. 아니면 서버 쪽에서 데이터를 아예 못받아냄