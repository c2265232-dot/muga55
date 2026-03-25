/* =====================
   HUGE GAME LIST (200+)
===================== */
let games = [];
for(let i=1;i<=220;i++){
  games.push({
    name:"Game "+i,
    url:"https://example.com",
    img:"https://via.placeholder.com/150",
    cat:"action"
  });
}

/* =====================
   FAVORITES
===================== */
let favorites = JSON.parse(localStorage.getItem("favorites")||"[]");

function toggleFavorite(url){
  if(favorites.includes(url)){
    favorites = favorites.filter(f=>f!==url);
  } else favorites.push(url);

  localStorage.setItem("favorites",JSON.stringify(favorites));
  loadGames();
}

/* =====================
   LOAD GAMES
===================== */
function loadGames(list = games){
  let el = document.getElementById("games");
  if(!el) return;

  el.innerHTML = list.map(g=>`
    <div class="card" onclick="openGame('${g.url}')">
      <img src="${g.img}">
      <p>${g.name}</p>

      <button onclick="event.stopPropagation(); toggleFavorite('${g.url}')">
        ${favorites.includes(g.url) ? "⭐" : "☆"}
      </button>
    </div>
  `).join("");

  applyTheme();
}

/* FAVORITES PAGE */
function goFavorites(){
  location.href="favorites.html";
}

if(location.pathname.includes("favorites")){
  loadGames(games.filter(g=>favorites.includes(g.url)));
}

/* =====================
   SEARCH FIXED
===================== */
window.onload = ()=>{
  let s = document.getElementById("search");
  if(s){
    s.oninput = e=>{
      let v=e.target.value.toLowerCase();
      loadGames(games.filter(g=>g.name.toLowerCase().includes(v)));
    };
  }

  loadGames();
};

/* =====================
   NAV
===================== */
function openGame(url){
  window.open(url,"_self");
}

function openSettings(){
  location.href="settings.html";
}

function goBack(){
  location.href="index.html";
}

/* =====================
   THEME SYSTEM
===================== */
function saveTheme(){
  let t={
    bg:bgColor.value,
    card:cardColor.value,
    accent:accentColor.value,
    text:textColor.value,
    size:textSize.value,
    font:font.value,
    img:bgImage.value,
    tabName:tabName.value,
    tabIcon:tabIcon.value
  };

  localStorage.setItem("theme",JSON.stringify(t));
  applyTheme();
}

function applyTheme(){
  let t=JSON.parse(localStorage.getItem("theme"));
  if(!t) return;

  document.body.style.background = t.bg;
  document.body.style.color = t.text;
  document.body.style.fontSize = t.size+"px";
  document.body.style.fontFamily = t.font;

  if(t.img){
    document.body.style.backgroundImage=`url(${t.img})`;
    document.body.style.backgroundSize="cover";
  }

  document.querySelectorAll(".card").forEach(c=>{
    c.style.background=t.card;
  });

  document.querySelectorAll("button").forEach(b=>{
    b.style.background=t.accent;
  });

  if(t.tabName) document.title=t.tabName;
  let icon=document.getElementById("icon");
  if(icon && t.tabIcon) icon.href=t.tabIcon;
}

/* START */
applyTheme();
