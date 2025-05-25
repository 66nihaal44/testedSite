function changeBGColor(color) {
  document.body.style.background = color;
}
function changeTextColor(textId, color) {
  document.getElementById(textId).style.color = color;
}
function addMenu(){
  const mlink1 = document.createElement('a');
  disText1 = document.createTextNode("Main Page");
  mlink1.appendChild(disText1);
  mlink1.title = "Main Page";
  mlink1.href = "https://66nihaal44.github.io/testedSite/";
  document.getElementById("menu").appendChild(mlink1);
  const mlink2 = document.createElement('a');
  disText2 = document.createTextNode("Fibonacci");
  mlink2.appendChild(disText2);
  mlink2.title = "Fibonacci";
  mlink2.href = "https://66nihaal44.github.io/testedSite/fibonacci";
  document.getElementById("menu").appendChild(mlink2);
  const mlink3 = document.createElement('a');
  disText3 = document.createTextNode("Quiz");
  mlink3.appendChild(disText3);
  mlink3.title = "Quiz";
  mlink3.href = "https://66nihaal44.github.io/testedSite/quiz";
  document.getElementById("menu").appendChild(mlink3);
}
