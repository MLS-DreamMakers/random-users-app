// functions for home page html components

const header = (parentEl) => {
  //document.querySelector('#app').innerHTML = `
  // app.innerHTML = 
   parentEl.innerHTML = `
    <header>
      <nav>
        <a href="/" data-link>Home</a>
        <a id="about" href="/random-users-app/" data-link>About</a>
      </nav>
      <h1>Random Users Generator</h1>
    </header>
    <div class="card">
      <button id="refresh" type="button" onClick="window.location.reload()">refresh</button>
    </div>
    <p>Click refresh to generate a new user</p>
     <div class="user-container">
    <div class="new-user-info">
     </div>
    </div:
  `;
const newUserSpace = parentEl.querySelector('.new-user-info');
  return { newUserSpace };
}

const footer = () => {
  document.querySelector('#app').innerHTML = `
    <footer>
    </footer>
    `;
};
  
export {
  header,
  footer, 
};
