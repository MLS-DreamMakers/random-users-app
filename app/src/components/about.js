//functions to handle the about page
import htmlLogo from '../assets/svg/html.svg'
import cssLogo from '../assets/svg/css.svg'
import javascriptLogo from '../assets/svg/javascript.svg'
import viteLogo from '../assets/svg/vite.svg'
import githubLogo from '../assets/svg/github.svg'
import connectLogo from '../assets/svg/connect.svg'

const about = (parentEl) => {
  if (!parentEl) { //guard clause if parentEl is not defined
    return console.error('Error: parent element is null or undefined.');
  }
  const aboutHTML = `
    <div class="about">
      <div id="intro">
        <p>
          This website is a free, open source generator that fetches random user profiles for you. Feel free to use these profiles to help populate your database, as inpiration for your content creation, or anything!
        </>
        <div id="purpose">
          Our application is designed for anyone seeking diverse and realistic user profiles for design mockups, user testing, or other creative purposes.
        </div>
        <br>
      </div>
      <p>
        Fork this project or contact us here:
      </>
      <div class="collaborate">
        <a href="https://github.com/MLS-DreamMakers/random-users-app" target="_blank">
          <img src="${githubLogo}" class="logo collaborate" alt="GitHub logo"/>
        </a>
        <a href="https://github.com/MLS-DreamMakers" target="_blank">
          <img src="${connectLogo}" class="logo collaborate" alt="Connect with us"/>
        </a>
      </div>
      <br>
      <div class="tech-stack">
        <p>Site created with: </p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
          <img src="${htmlLogo}" class="logo" alt="HTML logo"/>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
          <img src="${cssLogo}" class="logo" alt="CSS logo"/>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src="${viteLogo}" class="logo" alt="Vite logo"/>
        </a>
      </div>
    </div>
  `;
  parentEl.insertAdjacentHTML('beforeend', aboutHTML);
};

export { about };