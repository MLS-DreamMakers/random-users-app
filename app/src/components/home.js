// functions for home page html components
import siteLogo from '../assets/svg/site-logo.svg';
import { profiles } from "./user-profiles";

const app = document.querySelector('#app');

const header = (parentEl) => {
  if (!parentEl) { //guard clause if parentEl is not defined
    return console.error('Error: parent element is null or undefined.');
  }
  const headerHTML = `
    <header>
      <nav>
        <ul>
          <li>
            <a href="/" data-link="home-page">Home</a>
          </li>
          <li>
            <a href="/about" data-link="about-page">About</a>
          </li>
        </ul>
      </nav>
      <div id="site-logo">
        <img src="${siteLogo}" class="logo site" alt="Site logo">
      </div>
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
  const footerHTML = `
    <footer>
      <p>Copyright @ 2024 All Rights Reserved</p>
      <p>Developed by
        <a href="https://github.com/MLS-DreamMakers">MLS DreamMakers</a>
      </p>
    </footer>
  `;
  parentEl.insertAdjacentHTML('afterend', footerHTML);
};
  
export { app, header, usersHome, footer };