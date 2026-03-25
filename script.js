let games = [
{"name":"Crazy Cattle 3D","url":"https://crazy-cattle.github.io/","img":"https://crazy-cattle.github.io/icon.png","cat":"action"},
{"name":"Slope","url":"https://3kh0.github.io/projects/slope/","img":"https://images.crazygames.com/games/slope/cover-160x160.png","cat":"action"},
{"name":"Run 3","url":"https://3kh0.github.io/projects/run-3/","img":"https://images.crazygames.com/games/run-3/cover-160x160.png","cat":"action"},
{"name":"Drift Hunters","url":"https://3kh0.github.io/projects/drift-hunters/","img":"https://images.crazygames.com/games/drift-hunters/cover-160x160.png","cat":"driving"},
{"name":"Moto X3M","url":"https://3kh0.github.io/projects/moto-x3m/","img":"https://images.crazygames.com/games/moto-x3m/cover-160x160.png","cat":"driving"},
{"name":"Agar.io","url":"https://agar.io/","img":"https://upload.wikimedia.org/wikipedia/en/1/19/Agar.io_logo.png","cat":"io"},
{"name":"Slither.io","url":"https://slither.io/","img":"https://upload.wikimedia.org/wikipedia/en/3/32/Slither.io_logo.png","cat":"io"},
{"name":"2048","url":"https://play2048.co/","img":"https://upload.wikimedia.org/wikipedia/commons/1/18/2048_logo.svg","cat":"classic"}
];

/* LOAD */
function loadGames(list = games){
  document.getElementById("games").innerHTML =
    list.map(g=>`
      <div class="card" onclick="openGame('${g.url}')">
        <img src="${g.img}">
        <p>${g.name}</p>

        <button onclick="event.stopPropagation(); openComments('${g.url}')">💬</button>
      </div>
    `).join("");
}

/* OPEN GAME */
function openGame(url){
  location.href = "game.html?url=" + encodeURIComponent(url);
}

/* SEARCH */
document.getElementById("search").oninput = e=>{
  let v = e.target.value.toLowerCase();
  loadGames(games.filter(g=>g.name.toLowerCase().includes(v)));
};

/* CATEGORY */
function filterCategory(cat){
  if(cat==="all") loadGames();
  else loadGames(games.filter(g=>g.cat===cat));
}

/* TAB CLOAK */
function cloakTab(){
  let name = prompt("Tab name:");
  let icon = prompt("Icon URL:");
  if(name) document.title = name;
  if(icon) document.getElementById("icon").href = icon;
}

/* COMMENTS */
let comments = JSON.parse(localStorage.getItem("comments")||"{}");
let currentGame=null;

function openComments(url){
  currentGame=url;
  document.getElementById("commentPanel").classList.remove("hidden");
  renderComments();
}

function closeComments(){
  document.getElementById("commentPanel").classList.add("hidden");
}

function renderComments(){
  let list=comments[currentGame]||[];
  document.getElementById("commentList").innerHTML =
    list.map(c=>`<div class="comment">${c}</div>`).join("");
}

function submitComment(){
  let input=document.getElementById("commentInput");
  if(!input.value) return;

  if(!comments[currentGame]) comments[currentGame]=[];
  comments[currentGame].push(input.value);

  localStorage.setItem("comments",JSON.stringify(comments));
  input.value="";
  renderComments();
}

/* SETTINGS */
function openSettings(){
  document.getElementById("settingsPanel").classList.remove("hidden");
}

function closeSettings(){
  document.getElementById("settingsPanel").classList.add("hidden");
}

function saveTheme(){
  let theme={
    bg:document.getElementById("bgColor").value,
    card:document.getElementById("cardColor").value,
    accent:document.getElementById("accentColor").value
  };
  localStorage.setItem("theme",JSON.stringify(theme));
  applyTheme();
}

function applyTheme(){
  let t=JSON.parse(localStorage.getItem("theme"));
  if(!t) return;

  document.body.style.background=t.bg;

  document.querySelectorAll(".card").forEach(c=>c.style.background=t.card);
  document.querySelectorAll("button").forEach(b=>b.style.background=t.accent);
}

setTimeout(applyTheme,100);

/* START */
loadGames();
