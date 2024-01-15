const inputEl = document.querySelector("#input");
const btnEl = document.querySelector("#btn");
const h1El = document.querySelector("#h1");

h1El.innerHTML = inputEl.value.split("").reverse().join("").trim();

btnEl.addEventListener("click", (e) => {
    e.preventDefault();
   
    h1El.innerHTML = inputEl.value.split("");

     


    inputEl.value = "";
})
