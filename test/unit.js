import test from 'ava';
import createNode from '../dist/create-node';

test('createNode should be a function', t => {
  t.is(typeof createNode, 'function');
});
