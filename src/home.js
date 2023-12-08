import { createTag, content } from './index.js';

function display() {
  const main = document.createElement('main');
  const div = createTag('div', null, ['home'], null);
  const title = createTag('h1', null, null, 'PIZZERIA PIZZA');
  const subtitle = createTag('p', null, null, 'THE BEST PIZZA EVER');
  const hr = document.createElement('hr');
  const titleTwo = createTag('h2', null, null, 'Check out our menu');
  const button = createTag('button', null, null, 'MENU');
  div.appendChild(title);
  div.appendChild(subtitle);
  div.appendChild(hr);
  div.appendChild(titleTwo);
  div.appendChild(button);
  main.appendChild(div);
  content.appendChild(main);
}

export { display as displayHome };
