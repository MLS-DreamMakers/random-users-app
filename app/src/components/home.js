// functions for home page html components
import { profiles } from "./user-profiles";

const app = document.querySelector('#app');

const header = (parentEl) => {
  if (!parentEl) { //guard clause if parentEl is not defined
    return console.error('Error: parent element is null or undefined.');
  }
  const headerHTML = `
    <header>
      <nav>
        <a href="/" data-link>Home</a>
        <a id="about" href="/about" data-link>About</a>
      </nav>
      <h1 id="site-title">Random Users Generator</h1>
    </header>
  `;
  parentEl.insertAdjacentHTML('beforebegin', headerHTML);
};

const usersHome = (parentEl) => {
  profiles(parentEl);
};

const footer = (parentEl) => {
  if (!parentEl) { //guard clause if parentEl is not defined
    return console.error('Error: parent element is null or undefined.');
  }
  const headerHTML = `
    <footer>
      <p>Copyright @ 2024 All Rights Reserved</p>
      <p>Developed by
        <a href="https://github.com/MLS-DreamMakers">MLS DreamMakers</a>
      </p>
    </footer>
  `;
  parentEl.insertAdjacentHTML('afterend', headerHTML);
};
  
export { app, header, usersHome, footer };