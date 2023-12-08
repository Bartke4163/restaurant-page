import { displayNav } from './nav';
import { displayFooter } from './footer';
import { displayHome } from './home';
import { displayMenu } from './menu';
import { displayAbout } from './about';

const content = document.querySelector('#content');

function createTag(type, id, elemClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (elemClasses) {
    elemClasses.forEach((elemClass) => {
      element.classList.add(elemClass);
    });
  }
  if (content) element.innerText = content;
  return element;
}

function home() {
  content.innerHTML = '';
  displayNav();
  displayHome();
  displayFooter();
}

function menu() {
  content.innerHTML = '';
  displayNav();
  displayMenu();
  displayFooter();
}

function about() {
  content.innerHTML = '';
  displayNav();
  displayAbout();
  displayFooter();
}

home();
console.log('yo');
document.addEventListener('click', (event) => {
  const target = event.target.innerText;

  if (target === 'HOME') home();
  if (target === 'MENU') menu();
  if (target === 'ABOUT') about();
});

export { createTag, content };
