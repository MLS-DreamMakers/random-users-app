//functions for home page html components

const home = () => {
  document.querySelector('#app').innerHTML = `
    <header>
      <nav>
        <a href="/" data-link>Home</a>
        <a href="/about" data-link>About</a>
      </nav>
      <h1>Random Users Generator</h1>
    </header>
    <main>
      <div class="card">
        <button id="refresh" type="button">refresh</button>
      </div>
      <p">Click refresh to generate a new user</p>
    </main>
    <footer>
    </footer>
  `;
};
  
export { home };