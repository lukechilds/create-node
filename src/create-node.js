export default markup => {
  const container = document.createElement('div');
  container.innerHTML = markup;
  return container.children[0];
}
