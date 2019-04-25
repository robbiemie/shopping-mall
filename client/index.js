const https = require('https')

https.get('https://www.imooc.com/common/adver-getadver', res => {
  res.setEncoding('utf8')
  let rowData = ''
  res.on('data', chunk => { rowData += chunk })
  res.on('end', _ => {
    const parseData = JSON.parse(rowData)
    console.log('parseData', parseData.data.globalTopBanner)
  })
})
