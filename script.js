let games = [/* KEEP YOUR 100 GAMES HERE */];

/* =====================
   STORAGE
===================== */
let ratings = JSON.parse(localStorage.getItem("ratings") || "{}");
let comments = JSON.parse(localStorage.getItem("comments") || "{}");
let user = localStorage.getItem("user") || "Guest";

/* =====================
   LOGIN (FAKE ACCOUNT)
===================== */
function login(){
  let name = prompt("Enter username:");
  if(name){
    user = name;
    localStorage.setItem("user", user);
    alert("Logged in as " + user);
  }
}

/* =====================
   RATINGS
===================== */
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

/* =====================
   COMMENTS
===================== */
function addComment(url){
  let text = prompt("Enter comment:");
  if(!text) return;

  if(!comments[url]) comments[url] = [];
  comments[url].push({user:user,text:text});

  localStorage.setItem("comments", JSON.stringify(comments));
  alert("Comment added!");
}

function getCommentCount(url){
  return comments[url] ? comments[url].length : 0;
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

        <div>${renderStars(g.url)}</div>
        <small>💬 ${getCommentCount(g.url)} comments</small>

        <button onclick="event.stopPropagation(); addComment('${g.url}')">
          💬 Comment
        </button>
      </div>
    `).join("");

  updateLeaderboard();
}

/* =====================
   LEADERBOARD
===================== */
function updateLeaderboard(){
  let sorted = [...games].sort((a,b)=>getRating(b.url)-getRating(a.url)).slice(0,5);

  document.getElementById("leaderboard").innerHTML =
    "<h3>🏆 Top Games</h3>" +
    sorted.map(g=>`<div>${g.name} ⭐ ${getRating(g.url)}</div>`).join("");
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
