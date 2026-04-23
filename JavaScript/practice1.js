const title = document.querySelector("#title");
const button = document.querySelector("#btn");

button.addEventListener("click", function (){
   title.textContent = "You clicked the button!";
   title.style.color = "red";

});
