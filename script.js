console.log("SCRIPT LOADED");
/* =====================
   GAMES (EDIT HERE ONLY)
===================== */
let games = [
{"name":"Crazy Cattle 3D","url":"https://crazy-cattle.github.io/","img":"https://crazy-cattle.github.io/icon.png","cat":"action"},
{"name":"Slope","url":"https://3kh0.github.io/projects/slope/","img":"https://images.crazygames.com/games/slope/cover-160x160.png","cat":"action"},
{"name":"Run 3","url":"https://3kh0.github.io/projects/run-3/","img":"https://images.crazygames.com/games/run-3/cover-160x160.png","cat":"action"},
{"name":"Tunnel Rush","url":"https://3kh0.github.io/projects/tunnel-rush/","img":"https://images.crazygames.com/games/tunnel-rush/cover-160x160.png","cat":"action"},
{"name":"Drift Hunters","url":"https://3kh0.github.io/projects/drift-hunters/","img":"https://images.crazygames.com/games/drift-hunters/cover-160x160.png","cat":"driving"},
{"name":"Moto X3M","url":"https://3kh0.github.io/projects/moto-x3m/","img":"https://images.crazygames.com/games/moto-x3m/cover-160x160.png","cat":"driving"},
{"name":"Agar.io","url":"https://agar.io/","img":"https://upload.wikimedia.org/wikipedia/en/1/19/Agar.io_logo.png","cat":"io"},
{"name":"Slither.io","url":"https://slither.io/","img":"https://upload.wikimedia.org/wikipedia/en/3/32/Slither.io_logo.png","cat":"io"},
{"name":"Diep.io","url":"https://diep.io/","img":"https://diep.io/favicon.ico","cat":"io"},
{"name":"Krunker.io","url":"https://krunker.io/","img":"https://krunker.io/img/favicon.png","cat":"io"},
{"name":"Zombs Royale","url":"https://zombsroyale.io/","img":"https://zombsroyale.io/img/icon.png","cat":"io"},
{"name":"Shell Shockers","url":"https://shellshock.io/","img":"https://shellshock.io/img/logo.png","cat":"io"},
{"name":"2048","url":"https://play2048.co/","img":"https://upload.wikimedia.org/wikipedia/commons/1/18/2048_logo.svg","cat":"classic"},
{"name":"Tetris","url":"https://tetris.com/play-tetris","img":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Tetris_logo.png","cat":"classic"},
{"name":"Minesweeper","url":"https://minesweeperonline.com/","img":"https://upload.wikimedia.org/wikipedia/commons/5/5a/Minesweeper_Icon.png","cat":"classic"},
{"name":"Pacman","url":"https://www.google.com/logos/2010/pacman10-i.html","img":"https://upload.wikimedia.org/wikipedia/en/5/59/Pac-man.png","cat":"classic"},
{"name":"Retro Bowl","url":"https://3kh0.github.io/projects/retro-bowl/","img":"https://images.crazygames.com/games/retro-bowl/cover-160x160.png","cat":"sports"},
{"name":"Basketball Stars","url":"https://3kh0.github.io/projects/basketball-stars/","img":"https://images.crazygames.com/games/basketball-stars/cover-160x160.png","cat":"sports"},
{"name":"Soccer Random","url":"https://poki.com/en/g/soccer-random","img":"https://images.crazygames.com/games/soccer-random/cover-160x160.png","cat":"sports"},
{"name":"Basket Random","url":"https://poki.com/en/g/basket-random","img":"https://images.crazygames.com/games/basket-random/cover-160x160.png","cat":"sports"}
];

/* =====================
   TAB CLOAKING
===================== */
function cloakTab(){
  let name = prompt("Tab name:");
  let icon = prompt("Icon URL:");

  if(name) document.title = name;
  if(icon) document.getElementById("icon").href = icon;
}

/* =====================
   COMMENTS SYSTEM
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

function viewComments(url){
  let list = comments[url] || [];

  if(list.length === 0){
    alert("No comments yet");
    return;
  }

  let output = list.map((c,i)=>`${i+1}. ${c}`).join("\n\n");
  alert(output);
}

/* =====================
   CATEGORY FILTER
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
          ➕
        </button>

        <button onclick="event.stopPropagation(); viewComments('${g.url}')">
          👀
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

/* START */
loadGames();
