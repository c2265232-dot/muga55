let games = [
  {"name":"Crazy Cattle 3D","url":"https://crazy-cattle.github.io/","img":"https://crazy-cattle.github.io/icon.png"},
  {"name":"Slope","url":"https://3kh0.github.io/projects/slope/","img":"https://images.crazygames.com/games/slope/cover-160x160.png"},
  {"name":"Run 3","url":"https://3kh0.github.io/projects/run-3/","img":"https://images.crazygames.com/games/run-3/cover-160x160.png"},
  {"name":"Tunnel Rush","url":"https://3kh0.github.io/projects/tunnel-rush/","img":"https://images.crazygames.com/games/tunnel-rush/cover-160x160.png"},
  {"name":"Drift Hunters","url":"https://3kh0.github.io/projects/drift-hunters/","img":"https://images.crazygames.com/games/drift-hunters/cover-160x160.png"},
  {"name":"Retro Bowl","url":"https://3kh0.github.io/projects/retro-bowl/","img":"https://images.crazygames.com/games/retro-bowl/cover-160x160.png"},
  {"name":"Moto X3M","url":"https://3kh0.github.io/projects/moto-x3m/","img":"https://images.crazygames.com/games/moto-x3m/cover-160x160.png"},
  {"name":"Stickman Hook","url":"https://3kh0.github.io/projects/stickman-hook/","img":"https://images.crazygames.com/games/stickman-hook/cover-160x160.png"},
  {"name":"Basketball Stars","url":"https://3kh0.github.io/projects/basketball-stars/","img":"https://images.crazygames.com/games/basketball-stars/cover-160x160.png"},
  {"name":"Fireboy & Watergirl","url":"https://3kh0.github.io/projects/fireboy-watergirl/","img":"https://images.crazygames.com/games/fireboy-and-watergirl/cover-160x160.png"},

  {"name":"Vex 6","url":"https://3kh0.github.io/projects/vex-6/","img":"https://images.crazygames.com/games/vex-6/cover-160x160.png"},
  {"name":"Vex 7","url":"https://3kh0.github.io/projects/vex-7/","img":"https://images.crazygames.com/games/vex-7/cover-160x160.png"},
  {"name":"Agar.io","url":"https://agar.io/","img":"https://upload.wikimedia.org/wikipedia/en/1/19/Agar.io_logo.png"},
  {"name":"Slither.io","url":"https://slither.io/","img":"https://upload.wikimedia.org/wikipedia/en/3/32/Slither.io_logo.png"},
  {"name":"Diep.io","url":"https://diep.io/","img":"https://diep.io/favicon.ico"},
  {"name":"Zombs Royale","url":"https://zombsroyale.io/","img":"https://zombsroyale.io/img/icon.png"},
  {"name":"Krunker.io","url":"https://krunker.io/","img":"https://krunker.io/img/favicon.png"},
  {"name":"Shell Shockers","url":"https://shellshock.io/","img":"https://shellshock.io/img/logo.png"},
  {"name":"Paper.io 2","url":"https://paper-io.com/","img":"https://images.crazygames.com/games/paper-io-2/cover-160x160.png"},
  {"name":"Hole.io","url":"https://hole-io.com/","img":"https://images.crazygames.com/games/hole-io/cover-160x160.png"},

  {"name":"Flappy Bird","url":"https://flappybird.io/","img":"https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_Bird_icon.png"},
  {"name":"2048","url":"https://play2048.co/","img":"https://upload.wikimedia.org/wikipedia/commons/1/18/2048_logo.svg"},
  {"name":"Minesweeper","url":"https://minesweeperonline.com/","img":"https://upload.wikimedia.org/wikipedia/commons/5/5a/Minesweeper_Icon.png"},
  {"name":"Tetris","url":"https://tetris.com/play-tetris","img":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Tetris_logo.png"},
  {"name":"Pacman","url":"https://www.google.com/logos/2010/pacman10-i.html","img":"https://upload.wikimedia.org/wikipedia/en/5/59/Pac-man.png"}
];

/* =====================
   RATINGS SYSTEM
===================== */
let ratings = JSON.parse(localStorage.getItem("ratings") || "{}");

function rateGame(url, value){
  ratings[url] = value;
  localStorage.setItem("ratings", JSON.stringify(ratings));
  loadGames(games);
}

function getRating(url){
  return ratings[url] || 0;
}

function renderStars(url){
  let rating = getRating(url);
  let stars = "";

  for(let i=1;i<=5;i++){
    stars += `<span onclick="event.stopPropagation(); rateGame('${url}',${i})" style="cursor:pointer;">${i<=rating?"⭐":"☆"}</span>`;
  }

  return stars;
}

/* =====================
   LOAD GAMES
===================== */
function loadGames(list){
  document.getElementById("games").innerHTML =
    list.map(g=>`
      <div class="card" onclick="openGame('${g.url}')">
        <img src="${g.img}">
        <p>${g.name}</p>
        <div>${renderStars(g.url)}</div>
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
