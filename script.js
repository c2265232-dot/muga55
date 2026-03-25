/* =====================
   SAFE GAME LIST (200)
===================== */
let games = [];
for(let i=1;i<=200;i++){
  games.push({
    name: "Game " + i,
    url: "https://example.com",
    img: "https://via.placeholder.com/150"
  });
}

/* =====================
   FAVORITES ⭐
===================== */
let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

function toggleFavorite(url){
  if(favorites.includes(url)){
    favorites = favorites.filter(f=>f!==url);
  } else {
    favorites.push(url);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  loadGames();
}

function isFav(url){
  return favorites.includes(url);
}

/* =====================
   LOAD GAMES
===================== */
function loadGames(list = games){
  let el = document.getElementById("games");
  if(!el) return;

  el.innerHTML = list.map(g=>`
    <div class="card" onclick="openGame('${g.url}')">
      <img src="${g.img}">
      <p>${g.name}</p>

      <button onclick="event.stopPropagation(); openComments('${g.url}')">💬</button>

      <button onclick="event.stopPropagation(); toggleFavorite('${g.url}')">
        ${isFav(g.url) ? "⭐" : "☆"}
      </button>
    </div>
  `).join("");

  applyTheme();
}

/* =====================
   NAV
===================== */
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

/* =====================
   COMMENTS
===================== */
let comments = JSON.parse(localStorage.getItem("comments") || "{}");
let currentUser = localStorage.getItem("currentUser");

function renderComments(){
  let game = localStorage.getItem("currentGame");
  let list = comments[game] || [];

  let el = document.getElementById("commentList");
  if(!el) return;

  el.innerHTML = list.map(c=>`
    <div class="comment"><b>${c.user}</b>: ${c.text}</div>
  `).join("");

  applyTheme();
}

function submitComment(){
  let game = localStorage.getItem("currentGame");
  let input = document.getElementById("commentInput");

  if(!input || !input.value) return;

  if(!comments[game]) comments[game] = [];

  comments[game].push({
    user: currentUser || "Guest",
    text: input.value
  });

  localStorage.setItem("comments", JSON.stringify(comments));
  input.value = "";
  renderComments();
}

/* =====================
   SAVED THEMES 💾
===================== */
let themes = JSON.parse(localStorage.getItem("themes") || "{}");

function saveTheme(){
  let name = prompt("Theme name?");
  if(!name) return;

  let t = {
    bg: document.getElementById("bgColor")?.value,
    card: document.getElementById("cardColor")?.value,
    accent: document.getElementById("accentColor")?.value,
    text: document.getElementById("textColor")?.value
  };

  themes[name] = t;
  localStorage.setItem("themes", JSON.stringify(themes));
  localStorage.setItem("activeTheme", JSON.stringify(t));

  applyTheme();
}

function loadTheme(){
  let names = Object.keys(themes);
  if(names.length === 0) return alert("No themes saved");

  let name = prompt("Themes:\n" + names.join("\n"));
  if(!themes[name]) return;

  localStorage.setItem("activeTheme", JSON.stringify(themes[name]));
  applyTheme(themes[name]);
}

/* =====================
   APPLY THEME
===================== */
function applyTheme(t = null){
  if(!t){
    t = JSON.parse(localStorage.getItem("activeTheme"));
  }
  if(!t) return;

  if(t.bg) document.body.style.background = t.bg;
  if(t.text) document.body.style.color = t.text;

  document.querySelectorAll(".card").forEach(c=>{
    if(t.card) c.style.background = t.card;
  });

  document.querySelectorAll("button").forEach(b=>{
    if(t.accent) b.style.background = t.accent;
  });
}

/* =====================
   SEARCH (SAFE)
===================== */
window.onload = ()=>{
  let s = document.getElementById("search");

  if(s){
    s.oninput = e=>{
      let v = e.target.value.toLowerCase();
      loadGames(games.filter(g=>g.name.toLowerCase().includes(v)));
    };
  }

  loadGames();
  renderComments();
  applyTheme();
};
