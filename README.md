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


### 启动 Http Server

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

### 格式化url

```javascript
const http = require('http')
const chalk = require('chalk')
const url = require('url')
const util = require('util')
// const fs = require('fs')
const server = http.createServer((req, res) => {
  //...
  console.log('url.parse', url.parse(req.url))
  // 格式化url
  res.end(util.inspect(url.parse(req.url)))
})
```

### 读取本地静态文件

```javascript

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
  // 读取文件
  fs.readFile(`server/${pathname.substring(1)}`, (err, data) => {
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      })
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(data.toString())
    }
    res.end()
  })
})
```