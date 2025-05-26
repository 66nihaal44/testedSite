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
  mlink1.href = "";
  document.getElementsByClassName("menu")[0].appendChild(mlink1);
  const mlink2 = document.createElement('a');
  mlink2.textContent = "Fibonacci";
  mlink2.title = "Fibonacci";
  mlink2.href = "fibonacci";
  document.getElementsByClassName("menu")[0].appendChild(mlink2);
  const mlink3 = document.createElement('a');
  mlink3.textContent = "Quiz";
  mlink3.title = "Quiz";
  mlink3.href = "quiz";
  document.getElementsByClassName("menu")[0].appendChild(mlink3);
}
