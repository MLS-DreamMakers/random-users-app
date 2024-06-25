//funcs to handle app initialization + navigation logic based on user interaction
//single-page application (SPA) with vanilla JavaScript + no frameworks
import './assets/style.css';
import { helperFunc } from './api'
import { home } from './components/home';
import { about } from './components/about'; //use event listener to navigate between pages
import { profiles } from './components/user-profiles';

const main = () => {
  home();
  profiles();
};

main();