const message = content =>
  R.pipe(attr('data-message', content), append(text(content)))(elem('div'));

document.body.appendChild(message('example message'));
