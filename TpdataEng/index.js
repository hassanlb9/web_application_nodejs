const session = require('express-session');
const express = require('express');
const hostname = 'localhost';
const port = 3000;
const app = express();
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/json');
// });


app.use(
    session({
        secret: 'secret string',
        resave: false,
        saveUninitialized: false,
        cookie: {}
    })
);


app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})

app.get('/', function(req, res){
  if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
      req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
  req.session.pageCountByCurrentUserOrAnyNameYouWant++;
  res.send({
      pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
  });
});
