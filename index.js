const app = (state, output) => {
  const appendFns = state.map((content, index) => {
    return append(message(content, index));
  });

  R.pipe(...appendFns)(output);
};

const message = (content, index) =>
  R.pipe(attr('data-index', index), append(text(content)))(elem('div'));

app(
  Object.freeze(['first message', 'second message']),
  getElem('message-container')
);
