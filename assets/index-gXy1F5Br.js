(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const s=()=>{document.querySelector("#app").innerHTML=`
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
  `},a=()=>{s()};a();
