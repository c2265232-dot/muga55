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
