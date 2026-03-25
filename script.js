let games = [
{"name":"Crazy Cattle 3D","url":"https://crazy-cattle.github.io/","img":"https://crazy-cattle.github.io/icon.png","cat":"action"},
{"name":"Slope","url":"https://3kh0.github.io/projects/slope/","img":"https://images.crazygames.com/games/slope/cover-160x160.png","cat":"action"},
{"name":"Run 3","url":"https://3kh0.github.io/projects/run-3/","img":"https://images.crazygames.com/games/run-3/cover-160x160.png","cat":"action"},
{"name":"Drift Hunters","url":"https://3kh0.github.io/projects/drift-hunters/","img":"https://images.crazygames.com/games/drift-hunters/cover-160x160.png","cat":"driving"},
{"name":"Agar.io","url":"https://agar.io/","img":"https://upload.wikimedia.org/wikipedia/en/1/19/Agar.io_logo.png","cat":"io"}
];

/* LOAD GAMES */
function loadGames(list = games){
  let el = document.getElementById("games");
  if(!el) return;

  el.innerHTML = list.map(g=>`
    <div class="card" onclick="openGame('${g.url}')">
      <img src="${g.img}">
      <p>${g.name}</p>

      <button onclick="event.stopPropagation(); openComments('${g.url}')">💬</button>
    </div>
  `).join("");
}

/* NAVIGATION */
function openGame(url){
  location.href = "game.html?url=" + encodeURIComponent(url);
}

function openComments(url){
  localStorage.setItem("currentGame", url);
  location.href = "comments.html";
}

function openSettings(){
  location.href = "settings.html";
}

function goBack(){
  location.href = "index.html";
}

/* SEARCH */
let search = document.getElementById("search");
if(search){
  search.oninput = e=>{
    let v = e.target.value.toLowerCase();
    loadGames(games.filter(g=>g.name.toLowerCase().includes(v)));
  };
}

/* CATEGORY */
function filterCategory(cat){
  if(cat==="all") loadGames();
  else loadGames(games.filter(g=>g.cat===cat));
}

/* COMMENTS SYSTEM */
let comments = JSON.parse(localStorage.getItem("comments")||"{}");

function renderComments(){
  let game = localStorage.getItem("currentGame");
  let list = comments[game] || [];

  let el = document.getElementById("commentList");
  if(!el) return;

  el.innerHTML = list.map(c=>`<div class="comment">${c}</div>`).join("");
}

function submitComment(){
  let game = localStorage.getItem("currentGame");
  let input = document.getElementById("commentInput");

  if(!input || !input.value) return;

  if(!comments[game]) comments[game]=[];
  comments[game].push(input.value);

  localStorage.setItem("comments", JSON.stringify(comments));
  input.value="";
  renderComments();
}

/* SETTINGS */
function saveTheme(){
  let theme={
    bg:document.getElementById("bgColor").value,
    card:document.getElementById("cardColor").value,
    accent:document.getElementById("accentColor").value
  };

  localStorage.setItem("theme", JSON.stringify(theme));
  applyTheme();
}

function applyTheme(){
  let t = JSON.parse(localStorage.getItem("theme"));
  if(!t) return;

  document.body.style.background = t.bg;

  document.querySelectorAll(".card").forEach(c=>c.style.background=t.card);
  document.querySelectorAll("button").forEach(b=>b.style.background=t.accent);
}

/* AUTO RUN */
loadGames();
renderComments();
setTimeout(applyTheme,100);
