let games = [];

fetch("games.json")
.then(res => res.json())
.then(data => {
  games = data.games;
  loadGames(games);
});

function loadGames(list){
  document.getElementById("games").innerHTML =
    list.map(g=>`
      <div class="card" onclick="openGame('${g.url}')">
        <img src="${g.img}">
        <p>${g.name}</p>
<small>⭐ ${getAverage(g.url)}</small>
      </div>
    `).join("");
}

function openGame(url){
  location.href = "game.html?url=" + encodeURIComponent(url);
}

document.getElementById("search").oninput = e=>{
  let v = e.target.value.toLowerCase();
  loadGames(games.filter(g=>g.name.toLowerCase().includes(v)));
};
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
<button onclick="rateGame('${g.url}',5)">⭐</button>
