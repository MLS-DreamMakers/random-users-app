//funcs to handle app initialization + navigation logic based on user interaction
//single-page application (SPA) with vanilla JavaScript + no frameworks
import './assets/style.css';
import { routeTest, getUsers, renderUserInfo } from './api'
import { header, footer} from './components/home';
import { about } from './components/about'; //use event listener to navigate between pages
import { profiles } from './components/user-profiles';

const appDiv = document.querySelector('#app');

const main = () => {
  header(appDiv);
  // profiles();
  // footer();
     routeTest();
     // checkResponseStatus()
  // Api tests
  getUsers();
   ; //testing api fetching
};
about();
main();