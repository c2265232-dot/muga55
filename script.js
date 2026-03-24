let games = [
  {
    name: "Crazy Cattle 3D",
    url: "https://crazy-cattle.github.io/",
    img: "https://crazy-cattle.github.io/icon.png"
  },
  {
    name: "Slope",
    url: "https://3kh0.github.io/projects/slope/",
    img: "https://images.crazygames.com/games/slope/cover-160x160.png"
  },
  {
    name: "Run 3",
    url: "https://3kh0.github.io/projects/run-3/",
    img: "https://images.crazygames.com/games/run-3/cover-160x160.png"
  }
];

/* =====================
   RATINGS SYSTEM
===================== */
let ratings = JSON.parse(localStorage.getItem("ratings") || "{}");

function rateGame(url, value){
  if(!ratings[url]) ratings[url] = [];
  ratings[url].push(value);
  localStorage.setItem("ratings", JSON.stringify(ratings));
  loadGames();
}

function getAverage(url){
  if(!ratings[url]) return "No ratings";
  let avg = ratings[url].reduce((a,b)=>a+b,0) / ratings[url].length;
  return avg.toFixed(1);
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

        <small>⭐ ${getAverage(g.url)}</small>

        <button onclick="event.stopPropagation(); rateGame('${g.url}',5)">
          ⭐ Rate
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

/* =====================
   START
===================== */
loadGames();
