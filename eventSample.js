let btn = document.getElementById("btn");
let msg = document.getElementById("message");

let counter = 0;
msg.textContent = "0回クリックされました";

btn.addEventListener("click", function() {
  counter++;
  msg.textContent = counter + "回クリックされました";
});


let children = document.getElementById("list").children;

for (let i = 0; i < children.length; i++) {
  children[i].addEventListener("mouseover", function() {
    children[i].style.backgroundColor = "lightgreen";
  });
  children[i].addEventListener("mouseout", function() {
    children[i].style.backgroundColor = "white";
  });
}