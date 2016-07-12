# rosid-handler-ejs

[![Travis Build Status](https://travis-ci.org/electerious/rosid-handler-ejs.svg?branch=master)](https://travis-ci.org/electerious/rosid-handler-ejs) [![Coverage Status](https://coveralls.io/repos/github/electerious/rosid-handler-ejs/badge.svg?branch=master)](https://coveralls.io/github/electerious/rosid-handler-ejs?branch=master) [![Dependencies](https://david-dm.org/electerious/rosid-handler-ejs.svg)](https://david-dm.org/electerious/rosid-handler-ejs#info=dependencies)

A function that loads an EJS-file and transforms it to HTML.

## Install

```
npm install rosid-handler-ejs
```

## Usage

```js
const ejs = require('rosid-handler-ejs')

ejs('/src/index.ejs', '/src', '/dist', {}).then(({ data, savePath }) => {})
ejs('/src/index.html', '/src', '/dist', {}).then(({ data, savePath }) => {})
```

## Parameters

- `filePath` `{String}` Absolute path to the requested file.
- `srcPath` `{String}` Absolute path to the source folder.
- `distPath` `{?String}` Absolute path to the export folder.
- `route` `{Object}` The route which matched the request URL.

## Returns

- `{Promise}({Object})`
	- `data` `{String | Buffer}` The transformed file content.
	- `savePath` `{?String}` Where to save the file when compiling.