//functions to generate random user profiles

const profiles = (parentEl) => {
  parentEl.innerHTML = `
    <div class="refresh-card">
      <button id="refresh" type="button">refresh</button>
      <p id ="refresh-text">Click to generate a new user</p>
    </div>
    <div class="new-user-card">
    </div>
  `;
  const newUserSpace = parentEl.querySelector('.new-user-card');
  const refresh = parentEl.querySelector('#refresh');
  const refreshText = parentEl.querySelector('#refresh-text');

  return { newUserSpace, refresh, refreshText };
};

export { profiles };