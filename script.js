var speed = 0;
var prixAutoClick = 20;
var cpt = 0;
var cptAutoClick = 0;

function vitess(){
speed = speed + 1;
document.getElementById('vitesse').innerHTML = speed + 'km/h';
console.log(speed);
}

function autoClick() {

    if (speed >= prixAutoClick) {
        cptAutoClick = cptAutoClick + 1;
        speed = speed - prixAutoClick;
        prixAutoClick = prixAutoClick * 2;

        document.getElementById('nombre_actif').innerHTML = cptAutoClick;
        document.getElementById('vitesse').innerHTML = speed;
        document.getElementById('prix_auto_click').innerHTML = prixAutoClick + 'km/h';
        document.getElementById('prix_auto_click_suivant').innerHTML = prixAutoClick * 2 + 'km/h';
        setInterval(autoClick, 1000);
        console.log(speed)
    }
}
