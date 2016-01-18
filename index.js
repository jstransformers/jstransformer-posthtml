'use strict';

var posthtml = require('posthtml')
var loop = require('simple-loop')

exports.name = 'posthtml'
exports.outputFormat = 'html'

exports.renderAsync = function (str, options) {
  return new Promise(function (resolve, reject) {
    // Load all desired plugins.
    var plugins = []
    var pluginsToLoad = options.plugins || []
    loop(pluginsToLoad, function (item, i) {
      var plugin = null
      switch (typeof i) {
        case 'number':
          if (typeof item == 'string') {
            plugin = require(item)()
          }
          else {
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
    posthtml(plugins).process(str, options).then(function (result) {
      resolve(result.html)
    }, reject)
  })
}
