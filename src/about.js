import { createTag, content } from './index.js';

function display() {
  const main = document.createElement('main');
  const div = createTag('div', null, ['about'], null);
  const title = createTag('h1', null, null, 'FIND US ON:');
  const adress = createTag('h3', null, null, 'Buhling buhttom 46/C');
  const subtitle = createTag('h2', null, null, 'Or call us:');
  const phone = createTag('h3', null, null, '123-123-1234');

  div.appendChild(title);
  div.appendChild(adress);
  div.appendChild(subtitle);
  div.appendChild(phone);
  main.appendChild(div);
  content.appendChild(main);
}

export { display as displayAbout };
