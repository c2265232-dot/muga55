let games = [
{"name":"Crazy Cattle 3D","url":"https://crazy-cattle.github.io/","img":"https://crazy-cattle.github.io/icon.png","cat":"action"},
{"name":"Slope","url":"https://3kh0.github.io/projects/slope/","img":"https://images.crazygames.com/games/slope/cover-160x160.png","cat":"action"},
{"name":"Run 3","url":"https://3kh0.github.io/projects/run-3/","img":"https://images.crazygames.com/games/run-3/cover-160x160.png","cat":"action"},
{"name":"Tunnel Rush","url":"https://3kh0.github.io/projects/tunnel-rush/","img":"https://images.crazygames.com/games/tunnel-rush/cover-160x160.png","cat":"action"},
{"name":"Vex 6","url":"https://3kh0.github.io/projects/vex-6/","img":"https://images.crazygames.com/games/vex-6/cover-160x160.png","cat":"action"},
{"name":"Vex 7","url":"https://3kh0.github.io/projects/vex-7/","img":"https://images.crazygames.com/games/vex-7/cover-160x160.png","cat":"action"},
{"name":"Stickman Hook","url":"https://3kh0.github.io/projects/stickman-hook/","img":"https://images.crazygames.com/games/stickman-hook/cover-160x160.png","cat":"action"},
{"name":"Fireboy & Watergirl","url":"https://3kh0.github.io/projects/fireboy-watergirl/","img":"https://images.crazygames.com/games/fireboy-and-watergirl/cover-160x160.png","cat":"action"},
{"name":"Temple Run 2","url":"https://poki.com/en/g/temple-run-2","img":"https://images.crazygames.com/games/temple-run-2/cover-160x160.png","cat":"action"},
{"name":"Subway Surfers","url":"https://poki.com/en/g/subway-surfers","img":"https://images.crazygames.com/games/subway-surfers/cover-160x160.png","cat":"action"},

{"name":"Drift Hunters","url":"https://3kh0.github.io/projects/drift-hunters/","img":"https://images.crazygames.com/games/drift-hunters/cover-160x160.png","cat":"driving"},
{"name":"Moto X3M","url":"https://3kh0.github.io/projects/moto-x3m/","img":"https://images.crazygames.com/games/moto-x3m/cover-160x160.png","cat":"driving"},
{"name":"Madalin Stunt Cars","url":"https://poki.com/en/g/madalin-stunt-cars-2","img":"https://images.crazygames.com/games/madalin-stunt-cars-2/cover-160x160.png","cat":"driving"},
{"name":"Burnout Drift","url":"https://poki.com/en/g/burnout-drift","img":"https://images.crazygames.com/games/burnout-drift/cover-160x160.png","cat":"driving"},
{"name":"Car Rush","url":"https://poki.com/en/g/car-rush","img":"https://images.crazygames.com/games/car-rush/cover-160x160.png","cat":"driving"},

{"name":"Agar.io","url":"https://agar.io/","img":"https://upload.wikimedia.org/wikipedia/en/1/19/Agar.io_logo.png","cat":"io"},
{"name":"Slither.io","url":"https://slither.io/","img":"https://upload.wikimedia.org/wikipedia/en/3/32/Slither.io_logo.png","cat":"io"},
{"name":"Diep.io","url":"https://diep.io/","img":"https://diep.io/favicon.ico","cat":"io"},
{"name":"Zombs Royale","url":"https://zombsroyale.io/","img":"https://zombsroyale.io/img/icon.png","cat":"io"},
{"name":"Krunker.io","url":"https://krunker.io/","img":"https://krunker.io/img/favicon.png","cat":"io"},
{"name":"Shell Shockers","url":"https://shellshock.io/","img":"https://shellshock.io/img/logo.png","cat":"io"},
{"name":"Paper.io 2","url":"https://paper-io.com/","img":"https://images.crazygames.com/games/paper-io-2/cover-160x160.png","cat":"io"},
{"name":"Hole.io","url":"https://hole-io.com/","img":"https://images.crazygames.com/games/hole-io/cover-160x160.png","cat":"io"},

{"name":"Retro Bowl","url":"https://3kh0.github.io/projects/retro-bowl/","img":"https://images.crazygames.com/games/retro-bowl/cover-160x160.png","cat":"sports"},
{"name":"Basketball Stars","url":"https://3kh0.github.io/projects/basketball-stars/","img":"https://images.crazygames.com/games/basketball-stars/cover-160x160.png","cat":"sports"},
{"name":"Soccer Random","url":"https://poki.com/en/g/soccer-random","img":"https://images.crazygames.com/games/soccer-random/cover-160x160.png","cat":"sports"},
{"name":"Basket Random","url":"https://poki.com/en/g/basket-random","img":"https://images.crazygames.com/games/basket-random/cover-160x160.png","cat":"sports"},
{"name":"Football Legends","url":"https://poki.com/en/g/football-legends","img":"https://images.crazygames.com/games/football-legends/cover-160x160.png","cat":"sports"},

{"name":"2048","url":"https://play2048.co/","img":"https://upload.wikimedia.org/wikipedia/commons/1/18/2048_logo.svg","cat":"classic"},
{"name":"Tetris","url":"https://tetris.com/play-tetris","img":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Tetris_logo.png","cat":"classic"},
{"name":"Minesweeper","url":"https://minesweeperonline.com/","img":"https://upload.wikimedia.org/wikipedia/commons/5/5a/Minesweeper_Icon.png","cat":"classic"},
{"name":"Pacman","url":"https://www.google.com/logos/2010/pacman10-i.html","img":"https://upload.wikimedia.org/wikipedia/en/5/59/Pac-man.png","cat":"classic"},
{"name":"Chess","url":"https://www.chess.com/play","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_piece_-_White_king.JPG/120px-Chess_piece_-_White_king.JPG","cat":"classic"},
{"name":"Checkers","url":"https://cardgames.io/checkers/","img":"https://upload.wikimedia.org/wikipedia/commons/2/2d/Draughts_board.png","cat":"classic"}
];

/* KEEP EVERYTHING ELSE SAME BELOW */
/* =====================
   THEME STORAGE
===================== */
let savedThemes = JSON.parse(localStorage.getItem("themes") || "{}");
let activeTheme = JSON.parse(localStorage.getItem("activeTheme") || "null");

/* =====================
   APPLY THEME (FIXED!)
===================== */
function applyTheme(t){
  if(!t) return;

  document.body.style.background = t.bg || "#0e0e0e";
  document.body.style.color = t.text || "white";

  document.querySelectorAll(".card").forEach(c=>{
    c.style.background = t.card || "#151515";
  });

  document.querySelectorAll("button").forEach(b=>{
    b.style.background = t.accent || "#1a1a1a";
  });

  if(t.tabName) document.title = t.tabName;

  let icon = document.getElementById("icon");
  if(icon && t.tabIcon) icon.href = t.tabIcon;
}

/* LOAD ACTIVE THEME ON EVERY PAGE */
function loadActiveTheme(){
  let t = JSON.parse(localStorage.getItem("activeTheme"));
  if(t) applyTheme(t);
}

/* =====================
   PRESETS
===================== */
function loadPreset(name){
  let presets = {
    "Coolmath": {
      bg:"#0f172a", card:"#1e293b", accent:"#22c55e", text:"#ffffff",
      tabName:"Coolmath Games", tabIcon:"https://www.coolmathgames.com/favicon.ico"
    },
    "Google": {
      bg:"#ffffff", card:"#f1f3f4", accent:"#4285f4", text:"#000000",
      tabName:"Google", tabIcon:"https://www.google.com/favicon.ico"
    },
    "Dark": {
      bg:"#0e0e0e", card:"#151515", accent:"#4caf50", text:"#ffffff"
    }
  };

  let t = presets[name];
  if(!t) return;

  localStorage.setItem("activeTheme", JSON.stringify(t));
  applyTheme(t);
}

/* =====================
   SAVE CUSTOM THEME
===================== */
function saveTheme(){
  let name = document.getElementById("themeName").value;
  if(!name) return alert("Name it");

  let t = {
    bg:bgColor.value,
    card:cardColor.value,
    accent:accentColor.value,
    text:textColor.value,
    tabName:tabName.value,
    tabIcon:tabIcon.value
  };

  savedThemes[name] = t;

  localStorage.setItem("themes", JSON.stringify(savedThemes));
  localStorage.setItem("activeTheme", JSON.stringify(t));

  updateThemeList();
  applyTheme(t);
}

/* =====================
   LOAD SAVED THEME
===================== */
function loadTheme(){
  let name = document.getElementById("themeList").value;
  let t = savedThemes[name];
  if(!t) return;

  localStorage.setItem("activeTheme", JSON.stringify(t));
  applyTheme(t);
}

/* =====================
   UPDATE DROPDOWN
===================== */
function updateThemeList(){
  let list = document.getElementById("themeList");
  if(!list) return;

  list.innerHTML = Object.keys(savedThemes)
    .map(t=>`<option>${t}</option>`).join("");
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

  loadActiveTheme(); // 🔥 FIX: reapplies after render
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

  loadActiveTheme();
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
   START
===================== */
loadGames();
renderComments();
updateThemeList();
loadActiveTheme();
