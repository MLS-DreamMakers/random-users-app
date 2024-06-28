//funcs to handle app initialization + navigation logic based on user interaction
//single-page application (SPA) with vanilla JavaScript + no frameworks
import './assets/style.css';
import { routeTest, getUsers } from './api'
import { app, header, usersHome, footer} from './components/home';
import { about } from './components/about'; //use event listener to navigate between pages

const main = async () => {
  await routeTest(); //performing route testing asynchronously
  header(app); //rendering header synchronously before #app el
  usersHome(app); //rendering home page users content synchronously
  await getUsers(); //fetching and rendering user info asynchronously
  footer(app);
};

// about();
main(); //calling main app logic