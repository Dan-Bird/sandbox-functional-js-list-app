const app = (state, output) => {
  append(view(state), output);
};

const message = (content, index) =>
  R.pipe(attr('data-index', index), append(text(content)))(elem('div'));

const view = state => {
  const appendFns = state.map((content, index) => {
    return append(message(content, index));
  });

  return R.pipe(...appendFns)(elem('div'));
};

app(
  Object.freeze(['first message', 'second message']),
  getElem('message-container')
);
