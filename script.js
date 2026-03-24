let games = [
  {"name":"Crazy Cattle 3D","url":"https://crazy-cattle.github.io/","img":"https://crazy-cattle.github.io/icon.png","cat":"action"},
  {"name":"Slope","url":"https://3kh0.github.io/projects/slope/","img":"https://images.crazygames.com/games/slope/cover-160x160.png","cat":"action"},
  {"name":"Run 3","url":"https://3kh0.github.io/projects/run-3/","img":"https://images.crazygames.com/games/run-3/cover-160x160.png","cat":"action"},
  {"name":"Drift Hunters","url":"https://3kh0.github.io/projects/drift-hunters/","img":"https://images.crazygames.com/games/drift-hunters/cover-160x160.png","cat":"driving"},
  {"name":"Moto X3M","url":"https://3kh0.github.io/projects/moto-x3m/","img":"https://images.crazygames.com/games/moto-x3m/cover-160x160.png","cat":"driving"},
  {"name":"Agar.io","url":"https://agar.io/","img":"https://upload.wikimedia.org/wikipedia/en/1/19/Agar.io_logo.png","cat":"io"},
  {"name":"Slither.io","url":"https://slither.io/","img":"https://upload.wikimedia.org/wikipedia/en/3/32/Slither.io_logo.png","cat":"io"},
  {"name":"2048","url":"https://play2048.co/","img":"https://upload.wikimedia.org/wikipedia/commons/1/18/2048_logo.svg","cat":"classic"},
  {"name":"Tetris","url":"https://tetris.com/play-tetris","img":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Tetris_logo.png","cat":"classic"}
];

/* =====================
   TAB CLOAKING
===================== */
function cloakTab(){
  let name = prompt("Enter tab name:");
  let icon = prompt("Enter icon URL:");

  if(name) document.title = name;
  if(icon) document.getElementById("icon").href = icon;
}

/* =====================
   COMMENTS
===================== */
let comments = JSON.parse(localStorage.getItem("comments") || "{}");

function addComment(url){
  let text = prompt("Comment:");
  if(!text) return;

  if(!comments[url]) comments[url] = [];
  comments[url].push(text);

  localStorage.setItem("comments", JSON.stringify(comments));
  loadGames();
}

function getCommentCount(url){
  return comments[url] ? comments[url].length : 0;
}

/* =====================
   CATEGORIES
===================== */
function filterCategory(cat){
  if(cat === "all"){
    loadGames(games);
  } else {
    loadGames(games.filter(g=>g.cat===cat));
  }
}

/* =====================
   LOAD GAMES
===================== */
function loadGames(list = games){
  document.getElementById("games").innerHTML =
    list.map(g=>`
      <div class="card" onclick="openGame('${g.url}')">
        <img src="${g.img}">
        <p>${g.name}</p>

        <small>💬 ${getCommentCount(g.url)} comments</small>

        <button onclick="event.stopPropagation(); addComment('${g.url}')">
          💬 Comment
        </button>
      </div>
    `).join("");
}

/* =====================
   OPEN GAME
===================== */
function openGame(url){
  location.href = "game.html?url=" + encodeURIComponent(url);
}

/* =====================
   SEARCH
===================== */
document.getElementById("search").oninput = e=>{
  let v = e.target.value.toLowerCase();
  loadGames(games.filter(g=>g.name.toLowerCase().includes(v)));
};

loadGames();
