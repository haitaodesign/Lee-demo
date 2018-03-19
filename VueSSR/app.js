const Vue = require('vue')
const server = require('express')()
const context = {
  title: 'hello'
}
const title = 'hello lee'
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./temp.html', 'utf-8')
})
server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
      title: title
    },
    template: `<div>The visited URL is: {{ url }}
    <h3>{{title}}</h3>
    </div>`
  })
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})
server.listen(8089)
