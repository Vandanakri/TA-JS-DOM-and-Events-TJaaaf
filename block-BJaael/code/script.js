
let container = document.querySelector(".box");

// loop for creating multiple boxes

for (let i = 0; i < 500; i++) {
  let box = document.createElement("div");
  box.style.width = "4rem";
  box.style.height = "4rem";
  box.style.border = "1px solid black";
  box.classList.add("center", "plate");
  box.style.fontSize = "1.25rem";

  container.append(box);
}

// color changing function

function random() {
  let boxes = document.querySelectorAll(".plate");

  for (let i = 0; i < 500; i++) {
    let num = Math.floor(Math.random() * 255);
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r},${g},${b})`;

    boxes[i].style.backgroundColor = color;
    boxes[i].innerText = num;
  }
}

container.addEventListener("mousemove", random); 






