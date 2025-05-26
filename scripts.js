function changeBGColor(color) {
  document.body.style.background = color;
}
function changeTextColor(textId, color) {
  document.getElementById(textId).style.color = color;
}
function addMenu(){
  mlink = document.createElement('a');
  mlink.textContent = "Main Page";
  mlink.title = "Main Page";
  mlink.href = "";
  document.getElementsByClassName("menu")[0].appendChild(mlink);
  // const mlink2 = document.createElement('a');
  mlink.textContent = "Fibonacci";
  mlink.title = "Fibonacci";
  mlink.href = "fibonacci";
  document.getElementsByClassName("menu")[0].appendChild(mlink);
  // const mlink3 = document.createElement('a');
  mlink.textContent = "Quiz";
  mlink.title = "Quiz";
  mlink.href = "quiz";
  document.getElementsByClassName("menu")[0].appendChild(mlink);
}
