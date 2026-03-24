let games = [];

/* LOAD GAMES */
fetch("games.json")
.then(res => res.json())
.then(data => {
  games = data.games;
  loadGames(games);
});

/* =====================
   RATINGS SYSTEM (1–5)
===================== */
let ratings = JSON.parse(localStorage.getItem("ratings") || "{}");

function rateGame(url, value){
  ratings[url] = value; // saves YOUR rating (1–5)
  localStorage.setItem("ratings", JSON.stringify(ratings));
  loadGames(games);
}

function getRating(url){
  return ratings[url] || 0;
}

function renderStars(url){
  let rating = getRating(url);
  let stars = "";

  for(let i = 1; i <= 5; i++){
    if(i <= rating){
      stars += `<span onclick="event.stopPropagation(); rateGame('${url}',${i})" style="cursor:pointer;font-size:18px;">⭐</span>`;
    } else {
      stars += `<span onclick="event.stopPropagation(); rateGame('${url}',${i})" style="cursor:pointer;font-size:18px;">☆</span>`;
    }
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
