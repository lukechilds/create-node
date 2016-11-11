# create-node [![Build Status](https://travis-ci.org/lukechilds/create-node.svg?branch=master)](https://travis-ci.org/lukechilds/create-node) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/create-node/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/create-node?branch=master)

Converts an HTML string to a DOM node.

> ❗️**Important note**
>
> This module is intended for use in the browser and therefore requires a JS environment that implements the DOM. If you want to use it with Node.js you'll need to provide your own DOM implementation such as [`jsdom`](https://github.com/tmpvar/jsdom).

## Install

```shell
npm install --save create-node
```

or

```shell
jspm install create-node
```

## Usage

Passing in markup with one top level element will return an `HTMLElement` (or something that inherits from it e.g `HTMLDivElement`)

```js
import createNode from 'create-node';

const markup = `
<div>
  <span>hello</span>
  <span>world</span>
</div>`;

const node = createNode(markup);
// HTMLDivElement

node.querySelector('span:first-child').textContent;
// 'hello'

document.body.appendChild(node);
```

Passing in markup with multiple top level elements will return an `HTMLCollection` of `HTMLElement`s.

```js
import createNode from 'create-node';

const markup = `
<span>hello</span>
<span>world</span>`;

const collection = createNode(markup);
// HTMLCollection

collection.querySelector('span:last-child').textContent;
// 'world'
```

## License

MIT © Luke Childs
