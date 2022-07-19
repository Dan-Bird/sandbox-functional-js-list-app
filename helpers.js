const elem = tag => document.createElement(tag);
const text = content => document.createTextNode(content);
const getElem = id => document.getElementById(id);
const getText = () => getElem('input-field').value;

const on = R.curry(function (eventType, element, fn) {
  element.addEventListener(eventType, fn);
});

const append = R.curry(function (node, element) {
  element.appendChild(node);
  return element;
});

const attr = R.curry(function (attributeName, attributeValue, element) {
  element.setAttribute(attributeName, attributeValue);
  return element;
});

const clear = R.curry(function (element) {
  element.innerHTML = '';
  return element;
});
