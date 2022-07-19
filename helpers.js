const elem = tag => document.createElement(tag);
const text = content => document.createTextNode(content);
const getElem = id => document.getElementById(id);
const getText = () => getElem('input-field').value;

const append = R.curry(function (node, element) {
  element.appendChild(node);
  return element;
});

const attr = R.curry(function (attributeName, attributeValue, element) {
  element.setAttribute(attributeName, attributeValue);
  return element;
});
