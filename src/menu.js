import { createTag, content } from './index.js';

const menu = [
  {
    name: 'Buh Pizza',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
    price: '22$',
  },
  {
    name: 'Plink Pizza',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
    price: '30$',
  },
  {
    name: 'Juh Pizza',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
    price: '25$',
  },
];

function display() {
  const main = document.createElement('main');
  const title = createTag('h1', null, null, 'PIZZERIA PIZZA');
  const containerDiv = createTag('div', null, ['menu'], null);
  containerDiv.appendChild(title);

  menu.forEach((item) => {
    const div = createTag('div', null, null, null);
    const name = createTag('h1', null, null, item.name);
    const description = createTag('p', null, null, item.description);
    const price = createTag('h2', null, null, item.price);
    const hr = createTag('hr', null, null, null);
    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(hr);
    containerDiv.appendChild(div);
  });
  main.appendChild(containerDiv);
  content.appendChild(main);
}

export { display as displayMenu };
