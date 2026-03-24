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
  {"name":"Fireboy & Watergirl","url":"https://3kh0.github.io/projects/fireboy-watergirl/","img":"https://images.crazygames.com/games/fireboy-and-watergirl/cover-160x160.png"}
];

/* ⭐ RATINGS */
let ratings = JSON.parse(localStorage.getItem("ratings") || "{}");

function rateGame(url, value){
  ratings[url] = value;
  localStorage.setItem("ratings", JSON.stringify(ratings));
  loadGames();
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

/* LOAD GAMES */
function loadGames(list = games){
  document.getElementById("games").innerHTML =
    list.map(g=>`
      <div class="card" onclick="openGame('${g.url}')">
        <img src="${g.img}">
        <p>${g.name}</p>
        <div>${renderStars(g.url)}</div>
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

/* START */
loadGames();
