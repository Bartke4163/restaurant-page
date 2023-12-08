import { createTag, content } from './index.js';

function display() {
  const listItems = ['HOME', 'MENU', 'ABOUT'];
  const ul = document.createElement('ul');

  listItems.forEach((item) => {
    ul.appendChild(createTag('li', null, null, item));
  });

  const nav = document.createElement('nav');
  nav.appendChild(ul);

  content.appendChild(nav);
}

export { display as displayNav };
