var yo = require('yo-yo')
var css = require('./styles/plugin-tab-styles')

function plugintab ({ api: {}, events: {}, url } = {}) {
  var el = yo`
    <div class="${css.pluginTabView}" id="pluginView">
      <iframe class="${css.iframe}" src="${url}/index.html"></iframe>
    </div>`
  return { render () { return el } }
}

module.exports = plugintab
