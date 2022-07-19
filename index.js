const elem = tag => document.createElement(tag);
const text = content => document.createTextNode(content);

const append = R.curry(function (node, element) {
  element.appendChild(node);
  return element;
});

const attr = R.curry(function (attributeName, attributeValue, element) {
  element.setAttribute(attributeName, attributeValue);
  return element;
});

const message = content =>
  R.pipe(attr('data-message', content), append(text(content)))(elem('div'));

document.body.appendChild(message('example message'));
