const fs = require('fs')
const path = require('path')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')
const app = express()

// 生成服务端渲染函数
const renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'), {
  // 推荐
  runInNewContext: false,
  // 模板html文件
  template: fs.readFileSync(path.resolve(__dirname, './index.ssr.html'), 'utf-8'),
  // client manifest
  clientManifest: require('./dist/vue-ssr-client-manifest.json')
})

function renderToString (context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      err ? reject(err) : resolve(html)
    })
  })
}

app.use('/', express.static('./dist'))
app.use('/public', express.static('./public'))

app.use(async (req, res, next) => {
  try {
    debugger
    const context = {
      title: '服务端渲染测试', // {{title}}
      url: req.url
    }
    console.log(req.url)
    // 将服务器端渲染好的html返回给客户端
    const body = await renderToString(context)

    res.send(body)
  } catch (e) {
    // 如果没找到，放过请求，继续运行后面的中间件
    next()
  }
})

app.listen(3001, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('run on 3001')
  }
})
