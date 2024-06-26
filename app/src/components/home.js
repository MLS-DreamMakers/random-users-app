// functions for home page html components

const header = (parentEl) => {
  if (!parentEl) { //guard clause if parentEl is not defined
    return console.error('Parent element is null or undefined.');
  }
  const headerHTML = `
    <header>
      <nav>
        <a href="/" data-link>Home</a>
        <a id="about" href="/random-users-app/" data-link>About</a>
      </nav>
      <h1 id="site-title">Random Users Generator</h1>
    </header>
  `;
  parentEl.insertAdjacentHTML('beforebegin', headerHTML);
};

const usersHome = (parentEl) => {
  parentEl.innerHTML = `
    <div class="card">
      <button id="refresh" type="button">refresh</button>
    </div>
    <p id ="refresh-text">Click refresh to generate a new user</p>
    <div class="new-user-info">
      <div class="user-container">
      </div>
    </div>
  `;
  const newUserSpace = parentEl.querySelector('.new-user-info');
  const refresh = parentEl.querySelector('refresh');
  const userContainer = parentEl.querySelector('.user-container');
  const refreshText = parentEl.querySelector('#refresh-text');
  return { newUserSpace, refresh, userContainer, refreshText };
};

const footer = () => {
  document.querySelector('#app').innerHTML = `
    <footer>
    </footer>
    `;
};
  
export { header, usersHome, footer };