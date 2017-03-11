# create-node

Converts an HTML string to a DOM node.

[![Build Status](https://travis-ci.org/lukechilds/create-node.svg?branch=master)](https://travis-ci.org/lukechilds/create-node)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/create-node/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/create-node?branch=master)
[![npm](https://img.shields.io/npm/v/create-node.svg)](https://www.npmjs.com/package/create-node)

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

collection[1].textContent;
// 'world'
```

## License

MIT © Luke Childs
