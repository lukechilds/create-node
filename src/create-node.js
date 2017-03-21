export default (markup, doc) => {
	doc = doc || window.document;

	const container = doc.createElement('div');
	container.innerHTML = markup;
	return container.children.length > 1 ? container.children : container.children[0];
};
