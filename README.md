# jstransformer-posthtml

[PostHTML](https://github.com/posthtml/posthtml) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-posthtml/master.svg)](https://travis-ci.org/jstransformers/jstransformer-posthtml)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-posthtml/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-posthtml?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-posthtml/master.svg)](http://david-dm.org/jstransformers/jstransformer-posthtml)
[![NPM version](https://img.shields.io/npm/v/jstransformer-posthtml.svg)](https://www.npmjs.org/package/jstransformer-posthtml)

## Installation

    npm install jstransformer-posthtml

## API

```js
var posthtml = require('jstransformer')(require('jstransformer-posthtml'))
var html = '<myComponent><myTitle>Super Title</myTitle><myText>Awesome Text</myText></myComponent>'
var options = {
  plugins: [
    'posthtml-custom-elements'
  ]
}

posthtml.render(html, options).body
//=> <div class="myComponent"><div class="myTitle">Super Title</div><div class="myText">Awesome Text</div></div>
```

## License

MIT
