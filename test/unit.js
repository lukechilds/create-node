import test from 'ava';
import Window from 'window';
import createNode from '../dist/create-node';

test('createNode should be a function', t => {
	t.is(typeof createNode, 'function');
});

test('createNode(markup) with one top level element should create an HTMLElement DOM node', t => {
	const { document, HTMLElement } = new Window();

	const domNode = createNode('<div></div>', document);
	t.true(domNode instanceof HTMLElement);
});

test('createNode(markup) with multiple top level elements should create an HTMLCollection of HTMLElement DOM nodes', t => {
	const { document, HTMLCollection } = new Window();

	const domNode = createNode('<div></div><div></div>', document);
	t.true(domNode instanceof HTMLCollection);
});

test('DOM node should match markup', t => {
	const { document, HTMLDivElement, HTMLSpanElement } = new Window();

	const markup = `
  <div>
    <span>hello</span>
    <span>world</span>
  </div>
  `;
	const expectedText = ['hello', 'world'];
	const domNode = createNode(markup, document);

	t.true(domNode instanceof HTMLDivElement);
	t.is(domNode.children.length, 2);
	Array.from(domNode.children).forEach((childNode, i) => {
		t.true(childNode instanceof HTMLSpanElement);
		t.is(childNode.textContent, expectedText[i]);
	});
});

test('DOM node should insert into DOM', t => {
	const { document } = new Window();

	const domNode = createNode('<div></div>', document);
	document.body.appendChild(domNode);
	t.is(document.body.lastChild, domNode);
});
