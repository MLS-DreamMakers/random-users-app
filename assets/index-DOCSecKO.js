(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const l=e=>{e.innerHTML=`
    <div class="refresh-card">
      <button id="refresh" type="button">refresh</button>
      <p id ="refresh-text">Click to generate a new user</p>
    </div>
    <div class="new-user-card">
      <div class="user-container">
      </div>
    </div>
  `;const r=e.querySelector(".new-user-card"),s=e.querySelector("#refresh"),n=e.querySelector(".user-container"),t=e.querySelector("#refresh-text");return{newUserSpace:r,refresh:s,userContainer:n,refreshText:t}},u=async e=>{try{const r=await fetch(e);if(!r.ok)throw new Error(`Failed to fetch data from ${e}. Status: ${r.status} ${r.statusText}`);const s=await r.json();console.log("data:",s)}catch(r){throw console.error("Error fetching data:",r),r}},h="https://randomuser.me/api/",f="https://randomuser.me/api/?inc=picture,gender,name,dob,location,email,phone,login",p=async()=>{await u(h),await u(f)},m=async()=>{try{const e=await fetch(f);if(!e.ok)throw new Error(`Failed to fetch data from the server. Network response was not ok (${e.status} ${e.statusText}).`);const s=(await e.json()).results,n=document.querySelector("#app"),{newUserSpace:t}=l(n);g(t,s)}catch(e){console.error("Error fetching users:",e)}},g=(e,r)=>{e.innerHTML="";const s=document.createDocumentFragment();r.forEach(n=>{const t=document.createElement("div"),o=document.createElement("img"),a=document.createElement("ul");a.setAttribute("id","properties"),o.setAttribute("id","user-image"),o.setAttribute("src",n.picture.large),["first","last","gender","age","city","state"].forEach(c=>{const d=document.createElement("li");d.textContent=n.name[c]||n.dob[c]||n.location[c],a.appendChild(d)}),t.appendChild(o),t.appendChild(a),s.appendChild(t)}),e.appendChild(s),refresh.addEventListener("click",()=>{userContainer.append(e)})},y=e=>{if(!e)return console.error("Error: parent element is null or undefined.");e.insertAdjacentHTML("beforebegin",`
    <header>
      <nav>
        <a href="/" data-link>Home</a>
        <a id="about" href="/about" data-link>About</a>
      </nav>
      <h1 id="site-title">Random Users Generator</h1>
    </header>
  `)},w=e=>{l(e)},b=e=>{if(!e)return console.error("Error: parent element is null or undefined.");e.insertAdjacentHTML("afterend",`
    <footer>
      <p>Copyright @ 2024 All Rights Reserved</p>
      <p>Developed by
        <a href="https://github.com/MLS-DreamMakers">MLS DreamMakers</a>
      </p>
    </footer>
  `)},i=document.querySelector("#app"),v=async()=>{y(i),w(i),await p(),await m(),b(i)};v();
