const app = (state, output, dispatch) => {
  R.pipe(clear(), append(view(state)))(output);

  const stop = dispatch(e => {
    stop();

    const newText = getText();
    const newState = [...state, newText];
    app(newState, output, dispatch);
  });
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

const buttonClick = on('click', getElem('message-button'));

app(Object.freeze([]), getElem('message-container'), buttonClick);
