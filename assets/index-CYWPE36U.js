(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const l=e=>{e.innerHTML=`
    <div class="refresh-card">
      <button id="refresh" type="button">refresh</button>
      <p id ="refresh-text">Click to generate a new user</p>
    </div>
    <div class="new-user-card">
    </div>
  `;const r=e.querySelector(".new-user-card"),n=e.querySelector("#refresh"),s=e.querySelector("#refresh-text");return{newUserSpace:r,refresh:n,refreshText:s}},c=document.querySelector("#app"),p=e=>{if(!e)return console.error("Error: parent element is null or undefined.");e.insertAdjacentHTML("beforebegin",`
    <header>
      <nav>
        <a href="/" data-link>Home</a>
        <a id="about" href="/about" data-link>About</a>
      </nav>
      <h1 id="site-title">Random Users Generator</h1>
    </header>
  `)},m=e=>{l(e)},g=e=>{if(!e)return console.error("Error: parent element is null or undefined.");e.insertAdjacentHTML("afterend",`
    <footer>
      <p>Copyright @ 2024 All Rights Reserved</p>
      <p>Developed by
        <a href="https://github.com/MLS-DreamMakers">MLS DreamMakers</a>
      </p>
    </footer>
  `)},u=async e=>{try{const r=await fetch(e);if(!r.ok)throw new Error(`Failed to fetch data from ${e}. Status: ${r.status} ${r.statusText}`);const n=await r.json();console.log("data:",n)}catch(r){throw console.error("Error fetching data:",r),r}},y="https://randomuser.me/api/",f="https://randomuser.me/api/?inc=picture,gender,name,dob,location,email,phone,login",b=async()=>{await u(y),await u(f)},w=(e,r)=>{e.innerHTML="";const n=document.createDocumentFragment();r.forEach(s=>{const t=document.createElement("div"),o=document.createElement("img"),a=document.createElement("ul");t.setAttribute("id","user-container"),a.setAttribute("id","properties"),o.setAttribute("id","user-image"),o.setAttribute("src",s.picture.large),["first","last","gender","age","city","state"].forEach(i=>{const d=document.createElement("li");d.textContent=s.name[i]||s.dob[i]||s.location[i],a.appendChild(d)}),t.appendChild(o),t.appendChild(a),n.appendChild(t)}),e.append(n)},h=async()=>{try{const e=await fetch(f);if(!e.ok)throw new Error(`Failed to fetch data from the server. Network response was not ok (${e.status} ${e.statusText}).`);const n=(await e.json()).results,{newUserSpace:s,refresh:t}=l(c);w(s,n),t.addEventListener("click",async()=>{h()})}catch(e){console.error("Error fetching users:",e)}},L=async()=>{await b(),p(c),m(c),await h(),g(c)};L();
