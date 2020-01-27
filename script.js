var speed = 0;
var prixAutoClick = 20;
var prixMulti = 100;
var cpt = 0;
var cptAutoClick = 0;
var cptMultipli = 0;
var increment = 1;

var prix_venus = 1250;

function vitess() {
    speed = speed + increment;
    document.getElementById('vitesse').innerHTML = speed + 'km/h';
    console.log(speed);
}

function autoClick() {

    if (speed >= prixAutoClick) {
        cptAutoClick = cptAutoClick + 1;
        speed = speed - prixAutoClick;
        prixAutoClick = prixAutoClick * 2;

        document.getElementById('nombre_actif').innerHTML = 'Actif: ' + cptAutoClick;
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('prix_auto_click').innerHTML = 'Actuel: ' + prixAutoClick + 'km/h';
        document.getElementById('prix_auto_click_suivant').innerHTML ='Prochain: ' + prixAutoClick * 2 + 'km/h';
        setInterval(vitess, 1000);
        console.log(speed)
    }
}

function multipli(){

    if (speed >= prixMulti){
        cptMultipli = cptMultipli + 1;
        speed = speed - prixMulti;
        prixMulti = prixMulti * 2;
        increment = increment * 1.5;
        console.log(increment);
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nombre_multi_actif').innerHTML = 'Actif: ' + cptMultipli;
        document.getElementById('prix_multi_suivant').innerHTML = 'Prochain : ' + prixMulti + 'km/h';
    }
}