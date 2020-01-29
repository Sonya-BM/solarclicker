var speed = 0;
var prixAutoClick = 20;
var prixMulti = 100;
var cpt = 0;
var cptAutoClick = 0;
var cptMultipli = 0;
var increment = 1;
var planete = 1;

var niveau = 1;
var niveauRomain = 0;

const tempsAlert = 4000;

var prixPlanete = 1;


var prixPlanete = 1250;

function vitess() {
    speed = Math.round(speed + increment);
    document.getElementById('vitesse').innerHTML = speed + 'km/h';
    console.log(speed);
}

function autoClick() {

    if (speed >= prixAutoClick) {
        cptAutoClick = cptAutoClick + 1;
        speed = speed - prixAutoClick;
        prixAutoClick = Math.round(prixAutoClick * 2);

        document.getElementById('nombre_actif').innerHTML = 'Actif: ' + cptAutoClick;
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('prix_auto_click').innerHTML = 'Actuel: ' + prixAutoClick + 'km/h';
        document.getElementById('prix_auto_click_suivant').innerHTML = 'Prochain: ' + prixAutoClick * 2 + 'km/h';
        setInterval(vitess, 1000);
        console.log(speed)
    }
    //AFFICHE LE MESSAGE DE REFUS:
    else {
        document.getElementById('aff_emballage').style.display = 'inherit';
        setInterval(effacerAlert, tempsAlert)
    }
}

function effacerAlert() {
    document.getElementById('aff_emballage').style.display = 'none';
}

function multipli() {

    if (speed >= prixMulti) {
        cptMultipli = cptMultipli + 1;
        speed = Math.round(speed - prixMulti);
        prixMulti = Math.round(prixMulti * 2);
        increment = Math.round(increment * 1.5);
        console.log(increment);
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nombre_multi_actif').innerHTML = 'Actif: ' + cptMultipli;
        document.getElementById('prix_multi_suivant').innerHTML = 'Prochain : ' + prixMulti + 'km/h';
    }
}

// var romanMatrix = [
//     [1000, 'M'],
//     [900, 'CM'],
//     [500, 'D'],
//     [400, 'CD'],
//     [100, 'C'],
//     [90, 'XC'],
//     [50, 'L'],
//     [40, 'XL'],
//     [10, 'X'],
//     [9, 'IX'],
//     [5, 'V'],
//     [4, 'IV'],
//     [1, 'I']
//   ];
  
//   function convert(niveau) { 
//     if(niveau < 1){ niveauRomain = "";}
//     if(niveau >= 40){ niveauRomain = "XL" + convert(niveau - 40);}
//     if(niveau >= 10){  niveauRomain = "X" + convert(niveau - 10);}
//     if(niveau >= 9){  niveauRomain = "IX" + convert(niveau - 9);}
//     if(niveau >= 5){  niveauRomain = "V" + convert(niveau - 5);}
//     if(niveau >= 4){  niveauRomain = "IV" + convert(niveau - 4);}
//     if(niveau >= 1){  niveauRomain = "I" + convert(niveau - 1);}  
//   }

function planeteSuivante() {
    if (speed >= prixPlanete && planete === 1) {
        location.href = "#boite_venus";
        planete = planete + 1;
        speed = speed - prixPlanete;
        prixPlanete = Math.round(prixPlanete * 1.5);
        document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nom_planete').innerHTML = 'Mercure:';
        document.getElementById('nv_aff').innerHTML = 'I';
    } else if (speed >= prixPlanete && planete === 2) {
        location.href = "#boite_mercure";
        planete = planete + 1;
        speed = speed - prixPlanete;
        prixPlanete = Math.round(prixPlanete * 1.5);
        document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nom_planete').innerHTML = 'Mars:';
        document.getElementById('nv_aff').innerHTML = 'II';
    } else if (speed >= prixPlanete && planete === 3) {
        location.href = "#boite_mars";
        planete = planete + 1;
        speed = speed - prixPlanete;
        prixPlanete = Math.round(prixPlanete * 1.5);
        document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nom_planete').innerHTML = 'Jupiter:';
         document.getElementById('nv_aff').innerHTML = 'III';
    } else if (speed >= prixPlanete && planete === 4) {
        location.href = "#boite_jupiter";
        planete = planete + 1;
        speed = speed - prixPlanete;
        prixPlanete = Math.round(prixPlanete * 1.5);
        document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nom_planete').innerHTML = 'Saturne:';
        document.getElementById('nv_aff').innerHTML = 'IV';
    } else if (speed >= prixPlanete && planete === 5) {
        location.href = "#boite_saturne";
        planete = planete + 1;
        speed = speed - prixPlanete;
        prixPlanete = Math.round(prixPlanete * 1.5);
        document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nom_planete').innerHTML = 'Uranus:';
         document.getElementById('nv_aff').innerHTML = 'V';
    } else if (speed >= prixPlanete && planete === 6) {
        location.href = "#boite_uranus";
        planete = planete + 1;
        speed = speed - prixPlanete;
        prixPlanete = Math.round(prixPlanete * 1.5);
        document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nom_planete').innerHTML = 'Neptune:';
         document.getElementById('nv_aff').innerHTML = 'VI';
    } else if (speed >= prixPlanete && planete === 7) {
        location.href = "#boite_neptune";
        planete = planete + 1;
        speed = speed - prixPlanete;
        prixPlanete = Math.round(prixPlanete * 1.5);
        document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nom_planete').innerHTML = 'Pluton:';
        document.getElementById('nv_aff').innerHTML = 'VII';
    } else if (speed >= prixPlanete && planete === 8) {
        location.href = "#boite_pluton";
        planete = 0;
        speed = speed - prixPlanete;
        prixPlanete = Math.round(prixPlanete * 1.5);
        document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nom_planete').innerHTML = 'Terre:';
        document.getElementById('nv_aff').innerHTML = 'VIII';
    } else if (speed >= prixPlanete && planete === 0) {
        location.href = "#boite_terre";
        planete = 1;
        speed = speed - prixPlanete;
        prixPlanete = Math.round(prixPlanete * 1.5);
        document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nom_planete').innerHTML = 'Venus:';
        document.getElementById('nv_aff').innerHTML = 'IX';
    }
}