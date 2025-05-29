function changeBGColor(color) {
  document.body.style.background = color;
}
function changeTextColor(textId, color) {
  document.getElementById(textId).style.color = color;
}
function addMenu(){
  const mlink1 = document.createElement('a');
  mlink1.textContent = "Main Page";
  mlink1.title = "Main Page";
  mlink1.href = "index";
  document.getElementById("menu").appendChild(mlink1);
  const mlink2 = document.createElement('a');
  mlink2.textContent = "Fibonacci";
  mlink2.title = "Fibonacci";
  mlink2.href = "fibonacci";
  document.getElementById("menu").appendChild(mlink2);
  const mlink3 = document.createElement('a');
  mlink3.textContent = "Quiz";
  mlink3.title = "Quiz";
  mlink3.href = "quiz";
  document.getElementById("menu").appendChild(mlink3);
  const mlink4 = document.createElement('a');
  mlink4.textContent = "Bouncing Ball";
  mlink4.title = "Bouncing Ball";
  mlink4.href = "bouncingball";
  document.getElementById("menu").appendChild(mlink4);
}
