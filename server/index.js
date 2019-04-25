const http = require('http')
const chalk = require('chalk')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
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
const options = {
  port: 3000,
  ip: '127.0.0.1'
}
server.listen(options.port, options.ip, _ => {
  console.log(`服务端已启动：http://${chalk.green(options.ip + ':' + options.port)}.`)
})
