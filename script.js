let comments = JSON.parse(localStorage.getItem("comments") || "{}");

/* ADD COMMENT */
function addComment(url){
  let text = prompt("Comment:");
  if(!text) return;

  if(!comments[url]) comments[url] = [];
  comments[url].push(text);

  localStorage.setItem("comments", JSON.stringify(comments));
  loadGames();
}

/* COUNT */
function getCommentCount(url){
  return comments[url] ? comments[url].length : 0;
}

/* VIEW COMMENTS */
function viewComments(url){
  let list = comments[url] || [];

  if(list.length === 0){
    alert("No comments yet");
    return;
  }

  let output = list.map((c,i)=>`${i+1}. ${c}`).join("\n\n");

  alert(output);
}
