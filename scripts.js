function changeBGColor(color) {
  document.body.style.background = color;
}
function changeTextColor(textId, color) {
  document.getElementById(textId).style.color = color;
}
function addItem(title, href){
  const mlink = document.createElement('a');
  mlink.textContent = title;
  mlink.title = title;
  mlink.href = href;
  document.getElementById("menu").appendChild(mlink);
}
function addMenu(){
  addItem("Main Page", "index");
  addItem("Fibonacci", "fibonacci");
  addItem("Quiz", "quiz");
  addItem("Resume", "resume");
  addItem("Site Traffic", "sitetraffic");
}
