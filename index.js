const textEl = document.getElementById("textarea");
const totCounterEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");

textEl.addEventListener("keyup", ()=>{
    updateCounter();
});

updateCounter();

function updateCounter(){
    totCounterEl.innerText = textEl.value.length

    remainingEl.innerText  = textEl.getAttribute("maxLength") - textEl.value.length
}