const lampadina = document.getElementById('lampadina');
const bottone = document.getElementById('toggleBtn');

toggleBtn.addEventListener("click", function(){
    if (lampadina.scroll.includes("white_lamp")){
        lampadina.src = "img/img/yellow_lamp.png";
        toggleBtn.textContent = "Spegni";
    } else {
        lampadina.src = "img/img/white_lamp.png";
        toggleBtn.textContent = "Accendi";
    }

})