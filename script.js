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
  }
];

function loadGames(list = games){
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

loadGames();
