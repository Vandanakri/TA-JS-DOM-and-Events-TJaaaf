
let result = document.getElementById("inputext");
let clear = document.querySelector(".clear")

let data  = (number)  =>{
  result.value += number;
}

let Result = () => {
  try {
    result.value = eval(result.value)
  }
  catch(err) {
    alert("Enter valid input")
  }
}

function clearFn() {
  result.value = " ";
}
clear.addEventListener("click", clearFn);