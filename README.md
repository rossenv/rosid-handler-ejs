# rosid-handler-ejs

[![Travis Build Status](https://travis-ci.org/electerious/rosid-handler-ejs.svg?branch=master)](https://travis-ci.org/electerious/rosid-handler-ejs) [![Coverage Status](https://coveralls.io/repos/github/electerious/rosid-handler-ejs/badge.svg?branch=master)](https://coveralls.io/github/electerious/rosid-handler-ejs?branch=master)  [![Dependencies](https://david-dm.org/electerious/rosid-handler-ejs.svg)](https://david-dm.org/electerious/rosid-handler-ejs#info=dependencies) [![Greenkeeper badge](https://badges.greenkeeper.io/electerious/rosid-handler-ejs.svg)](https://greenkeeper.io/)

A function that loads an EJS file and transforms it to HTML.

## Install

```
npm install rosid-handler-ejs
```

## Usage

### API

```js
const handler = require('rosid-handler-ejs')

handler('index.ejs').then((data) => {})
handler('index.xml').then((data) => {})
handler('index.ejs', { optimize: true }).then((data) => {})
handler('index.ejs', { data: { key: 'value' } }).then((data) => {})
handler('index.ejs', { data: 'data.json' }).then((data) => {})
```

### Rosid

Add the following object to your `rosidfile.json`, `rosidfile.js` or [routes array](https://github.com/electerious/Rosid/blob/master/docs/Routes.md). `rosid-handler-ejs` will transform all matching EJS files in your source folder to HTML.

```json
{
	"name"    : "EJS",
	"path"    : "[^_]*.{html,ejs}*",
	"handler" : "rosid-handler-ejs"
}
```

```html
<!-- index.ejs -->
<h1>Hello <%= 'World' %></h1>
```

```html
<!-- index.html (output) -->
<h1>Hello World</h1>
```

## Parameters

- `filePath` `{String}` Path to file.
- `opts` `{?Object}` Options.
	- `optimize` `{?Boolean}` - Optimize output. Defaults to `false`.
	- `data` `{?Object|String}` - Data used to render the template. Defaults to `{}`.
	- `localOverwrites` `{?Boolean}` - Enable or disable [custom data per file](#custom-data-per-file). Defaults to `true`.

## Returns

- `{Promise<String|Buffer>}` The transformed file content.

## Miscellaneous

### Data

The data in `opts.data` will be used to render your template. `opts.data` can either be an object (the data) or a string (path to data file). `rosid-handler-ejs` tries to require the path when a string is specified instead of an object. The path must be absolute or relative to the current working directory.

### Custom data per file

Create a file with the name `filename.data.json` or `filename.data.js` along your `filename.ejs` to add or overwrite data from `opts.data`. You can disable this behaviour with the `localOverwrites` option.

### Environment

`rosid-handler-ejs` passes a variable called `environment` to your template. `environment` is `prod` when `opts.optimize` is `true` and `dev` when `opts.optimize` is `false`.