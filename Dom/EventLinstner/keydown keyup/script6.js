let box=document.getElementById("box");
let display=document.getElementById("display");

display.addEventListener('keydown',function(e){
    display.style.color="red";
    display.innerText=e.key+"is keyup";
});
document.addEventListener("keyup", function (e) {
    display.style.color = "green";
    display.innerText = e.key + " is keyUp";
  });