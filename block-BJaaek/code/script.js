let boxFirst = document.querySelector(".first");
let boxSecond = document.querySelector(".second");

function randomColor(){
  var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  boxFirst.style.backgroundColor = color;
}

function clickChange() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  boxSecond.style.backgroundColor = bgColor;
}

boxFirst.addEventListener("click",randomColor);

boxSecond.addEventListener("mousemove",clickChange);
