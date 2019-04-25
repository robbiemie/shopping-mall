# shopping-mall

## install

```
$ npm i
```

## start project

```
$ npm run dev
```

## run server

```
$ npm run server
```


## 启动 Http Server

```javascript
const http = require('http')
const chalk = require('chalk')
const server = http.createServer((req, res) => {
  // 设置响应信息
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain;charset=utf-8;')
  res.end('Hello NodeJs!')
})
const options = {
  port: 3000,
  ip: '127.0.0.1'
}
server.listen(options.port, options.ip, _ => {
  console.log(`服务端已启动：http://${chalk.green(options.ip + ':' + options.port)}.`)
})

```