import { createTag, content } from './index.js';

function display() {
  const footer = document.createElement('footer');
  const div = document.createElement('div');
  const p = createTag('p', null, null, 'Created by Bartke');

  div.appendChild(p);
  footer.appendChild(div);
  content.appendChild(footer);
}

export { display as displayFooter };
