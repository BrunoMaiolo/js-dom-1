const lampadina = document.getElementById('lampadina');
const bottone = document.getElementById('toggleBtn');

toggleBtn.addEventListener("click", function(){
    if (lampadina.src.includes("white_lamp")){
        lampadina.src = "img/img/yellow_lamp.png";
        bottone.textContent = "Spegni";
    } else {
        lampadina.src = "img/img/white_lamp.png";
        bottone.textContent = "Accendi";
    }

})