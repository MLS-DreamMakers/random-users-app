//functions to handle the about page
import htmlLogo from '../assets/svg/html.svg'
import cssLogo from '../assets/svg/css.svg'
import javascriptLogo from '../assets/svg/javascript.svg'
import viteLogo from '../assets/svg/vite.svg'
import { header } from '../components/home'

const about = () => {
  document.querySelector('#app').innerHTML = `
    ${header()}
    <h2>About</h2>
    <p>Created with: </p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
    <img src="${htmlLogo}" class="tech-stack" alt="HTML logo" />
      </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
      <img src="${cssLogo}" class="tech-stack" alt="CSS logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="tech-stack vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="tech-stack" alt="Vite logo" />
    </a>
  `;
};

export { about };