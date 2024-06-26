//functions for home page html components
const app = document.querySelector("#app");
const header = (parentEl) => {
  //document.querySelector('#app').innerHTML = `
  // app.innerHTML = 
   parentEl.innerHTML = `
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
    <div class="new-user-info"></div>
  `;
  const newUserSpace = parentEl.querySelector('.new-user-info');

  return { newUserSpace };
}
const renderUserInfo = (newUserSpace, users) => {
  users.forEach((user) => {
    const li = document.createElement("li");
    newUserSpace.append(li);
  newUserSpace.textContent = newUserInfo.gender;
   })
}

const refreshButton = () => {
    const refresh = document.querySelector('#refresh');
    const text = `refreshed`;
    refresh.addEventListener('click', () => {
    newUserSpace.append(text);
    console.log('Refeshed!');
});
}
const footer = () => {
  document.querySelector('#app').innerHTML = `
    <footer>
    </footer>
    `;
};
  
export {
  header,
  refreshButton,
  footer, 
};
