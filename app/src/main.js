//funcs to handle app initialization + navigation logic based on user interaction
//single-page application (SPA) with vanilla JavaScript + no frameworks
import './assets/style.css';
import { routeTest, getUsers } from './api'
import { app, header, usersHome, footer} from './components/home';
import { about } from './components/about'; //use event listener to navigate between pages

const main = async () => {
  await routeTest(); //performing route testing asynchronously
  header(app); //rendering header synchronously before #app el
  await getUsers(); //fetching and rendering user info asynchronously

  //event listener for nav between home + about page by using history obj to prevent page reload (important for single page apps)
  document.addEventListener('click', async (event) => {
    try {
      const { target } = event;
      if (target.tagName === 'A' && target.hasAttribute('data-link')) { //tag names are returned as uppercase
        event.preventDefault(); //prevent default link behavior of reloarding
        const dataLink = target.getAttribute('data-link'); //getting each data-link href attribute val
        if (dataLink === 'about-page') {
          app.innerHTML = ''; // clear app content
          about(app); // render about page content
        } else if (dataLink === 'home-page') {
          app.innerHTML = '';
          usersHome(app); // render home page content
          await getUsers(); // fetch users again when returning to home
        }
        history.pushState({}, '', target.getAttribute('href')); // Update URL without page reload
      }
    } catch (error) {
      console.warn('Warning! Error during event handler:', error);
    }
  });

  footer(app);
};

// document.addEventListener('DOMContentLoaded', main); //runs so slow, will figure it out later

main(); //calling main app logic