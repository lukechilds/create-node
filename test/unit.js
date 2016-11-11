import test from 'ava';
import browserEnv from 'browser-env';
import createNode from '../dist/create-node';

browserEnv();

test('createNode should be a function', t => {
  t.is(typeof createNode, 'function');
});

test('createNode(markup) with one top level element should create an HTMLElement DOM node', t => {
  const domNode = createNode('<div></div>');
  t.true(domNode instanceof HTMLElement);
});

test('createNode(markup) with multiple top level elements should create an HTMLCollection of HTMLElement DOM nodes', t => {
  const domNode = createNode('<div></div><div></div>');
  t.true(domNode instanceof HTMLCollection);
});

test('DOM node should match markup', t => {
  const markup = `
  <div>
    <span>hello</span>
    <span>world</span>
  </div>
  `;
  const expectedText = ['hello', 'world'];
  const domNode = createNode(markup);

  t.true(domNode instanceof HTMLDivElement);
  t.is(domNode.children.length, 2);
  Array.from(domNode.children).forEach((childNode, i) => {
    t.true(childNode instanceof HTMLSpanElement);
    t.is(childNode.textContent, expectedText[i]);
  });
});

test('DOM node should insert into DOM', t => {
  const domNode = createNode('<div></div>');
  document.body.appendChild(domNode)
  t.is(document.body.lastChild, domNode);
});
