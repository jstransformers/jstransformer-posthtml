'use strict'

const posthtml = require('posthtml')
const loop = require('simple-loop')

exports.name = 'posthtml'
exports.outputFormat = 'html'

exports.renderAsync = function (str, options) {
  return new Promise((resolve, reject) => {
    // Load all desired plugins.
    const plugins = []
    const pluginsToLoad = options.plugins || []
    loop(pluginsToLoad, (item, i) => {
      let plugin = null
      switch (typeof i) {
        case 'number':
          if (typeof item === 'string') {
            plugin = require(item)()
          } else {
            plugin = item
          }

          break
        case 'object':
          plugin = i
          break
        case 'string':
          plugin = require(i)(item)
          break
        default:
          plugin = i
          break
      }

      if (plugin) {
        plugins.push(plugin)
      }
    })

    // Process with PostHTML.
    posthtml(plugins).process(str, options).then(result => {
      resolve(result.html)
    }, reject)
  })
}
