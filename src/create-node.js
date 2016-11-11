export default markup => {
  const container = document.createElement('div');
  container.innerHTML = markup;
  return container.children.length > 1 ? container.children : container.children[0];
}
