# create-node [![Build Status](https://travis-ci.org/lukechilds/create-node.svg?branch=master)](https://travis-ci.org/lukechilds/create-node) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/create-node/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/create-node?branch=master)

Converts an HTML string to a DOM node.

> ❗️**Important note**
>
> This module is intended for use in the browser and therefore requires a JS environment that implements the DOM. If you want to use it with node you'll also need `jsdom` or some other DOM implementation.

## Install

```shell
npm install --save create-node
```

or

```shell
jspm install npm:create-node
```

## Usage

```js
import createNode from 'create-node';

const markup = `
<div>
  <span>hello</span>
  <span>world</span>
</div>`;

const node = createNode(markup);
// HTMLDivElement

node.querySelector('span:last-child').textContent;
// 'world'

document.body.appendChild(node);
```

## License

MIT © Luke Childs
