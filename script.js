let games = [];

/* LOAD GAMES FROM FILE */
fetch("games.json")
.then(res => res.json())
.then(data => {
  games = data.games;
  loadGames(games);
});

/* =====================
   RATINGS SYSTEM
===================== */
let ratings = JSON.parse(localStorage.getItem("ratings") || "{}");

function rateGame(url, value){
  if(!ratings[url]) ratings[url] = [];
  ratings[url].push(value);
  localStorage.setItem("ratings", JSON.stringify(ratings));
  loadGames(games);
}

function getAverage(url){
  if(!ratings[url]) return "No ratings";
  let avg = ratings[url].reduce((a,b)=>a+b,0) / ratings[url].length;
  return avg.toFixed(1);
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
