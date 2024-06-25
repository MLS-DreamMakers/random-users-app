//functions for home page html components

const header = () => {
  document.querySelector('#app').innerHTML = `
    <header>
      <nav>
        <a href="/" data-link>Home</a>
        <a href="/about" data-link>About</a>
      </nav>
      <h1>Random Users Generator</h1>
    </header>
    <div class="card">
      <button id="refresh" type="button">refresh</button>
    </div>
    <p">Click refresh to generate a new user</p>
  `;
};

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