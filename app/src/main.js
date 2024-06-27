//funcs to handle app initialization + navigation logic based on user interaction
//single-page application (SPA) with vanilla JavaScript + no frameworks
import './assets/style.css';
import { routeTest, getUsers, renderUserInfo } from './api'
import { header, usersHome, footer} from './components/home';
import { about } from './components/about'; //use event listener to navigate between pages
import { profiles } from './components/user-profiles';

const appDiv = document.querySelector('#app');

const main = async () => {
  header(appDiv); //rendering header synchronously before #app el
  usersHome(appDiv); //rendering home page users content synchronously
  await routeTest(); //performing route testing asynchronously
  // checkResponseStatus()
  await getUsers(); //fetching and rendering user info asynchronously
  // profiles();
  footer(appDiv);
};

// about();
main(); //calling main app logic