const app = (state, output) => {
  append(view(state), output);
};

const message = (content, index) =>
  R.pipe(attr('data-index', index), append(text(content)))(elem('div'));

const view = state => {
  const el = elem('div');

  const appendFns = state.map((content, index) => {
    return append(message(content, index));
  });

  return state.length > 0 ? R.pipe(...appendFns)(elem('div')) : el;
};

app(Object.freeze([]), getElem('message-container'));
