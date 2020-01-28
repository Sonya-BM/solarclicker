var speed = 0;
var prixAutoClick = 20;
var prixMulti = 100;
var cpt = 0;
var cptAutoClick = 0;
var cptMultipli = 0;
var increment = 1;
var planete = 1;

var prixPlanete = 1250;

<<<<<<< HEAD
=======
var prix_venus = 1250;

>>>>>>> ui
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

    else{
        document.getElementById('aff_emballage').style.display = 'inherit';
        AnimationEffect
        // document.getElementById('fond_affichage').style.left = '736px';
    }
}

function multipli(){

    if (speed >= prixMulti){
        cptMultipli = cptMultipli + 1;
        speed = speed - prixMulti;
        prixMulti = prixMulti * 2;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 7bd70c087629e885263d809a8f2f9cf3840cc868
        increment = increment * 1.5;
        console.log(increment);
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nombre_multi_actif').innerHTML = 'Actif: ' + cptMultipli;
<<<<<<< HEAD

=======
        increment = increment * 1.5;
        console.log(increment);
        document.getElementById('vitesse').innerHTML = speed + 'km/h';
        document.getElementById('nombre_multi_actif').innerHTML = 'Actif: ' + cptMultipli;
>>>>>>> ui
=======
>>>>>>> 7bd70c087629e885263d809a8f2f9cf3840cc868
        document.getElementById('prix_multi_suivant').innerHTML = 'Prochain : ' + prixMulti + 'km/h';
    }
}

var ton_chiffre = 12.3455633; // Ta variable de chiffre
ton_chiffre.toFixed(2); //r'enveras 12.35..
speed;

function planeteSuivante(){
        if(speed >= prixPlanete && planete === 1){
            location.href="#boite_venus";
            planete = planete +1;
            speed = speed - prixPlanete;
            prixPlanete = Math.round(prixPlanete * 1.5);
            document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
            document.getElementById('vitesse').innerHTML = speed + 'km/h';
            document.getElementById('nom_planete').innerHTML = 'Mercure:';
        }

        else if(speed >= prixPlanete && planete === 2){
            location.href="#boite_mercure";
            planete = planete +1;
            speed = speed - prixPlanete;
            prixPlanete = Math.round(prixPlanete * 1.5);
            document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
            document.getElementById('vitesse').innerHTML = speed + 'km/h';
            document.getElementById('nom_planete').innerHTML = 'Mars:';
        }

        else if(speed >= prixPlanete && planete === 3){
            location.href="#boite_mars";
            planete = planete +1;
            speed = speed - prixPlanete;
            prixPlanete = Math.round(prixPlanete * 1.5);
            document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
            document.getElementById('vitesse').innerHTML = speed + 'km/h';
            document.getElementById('nom_planete').innerHTML = 'Jupiter:';
        }
        
        else if(speed >= prixPlanete && planete === 4){
            location.href="#boite_jupiter";
            planete = planete +1;
            speed = speed - prixPlanete;
            prixPlanete = Math.round(prixPlanete * 1.5);
            document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
            document.getElementById('vitesse').innerHTML = speed + 'km/h';
            document.getElementById('nom_planete').innerHTML = 'Saturne:';
        }

        else if(speed >= prixPlanete && planete === 5){
            location.href="#boite_saturne";
            planete = planete +1;
            speed = speed - prixPlanete;
            prixPlanete = Math.round(prixPlanete * 1.5);
            document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
            document.getElementById('vitesse').innerHTML = speed + 'km/h';
            document.getElementById('nom_planete').innerHTML = 'Uranus:';
        }

        else if(speed >= prixPlanete && planete === 6){
            location.href="#boite_uranus";
            planete = planete +1;
            speed = speed - prixPlanete;
            prixPlanete = Math.round(prixPlanete * 1.5);
            document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
            document.getElementById('vitesse').innerHTML = speed + 'km/h';
            document.getElementById('nom_planete').innerHTML = 'Neptune:';
        }

        else if(speed >= prixPlanete && planete === 7){
            location.href="#boite_neptune";
            planete = planete +1;
            speed = speed - prixPlanete;
            prixPlanete = Math.round(prixPlanete * 1.5);
            document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
            document.getElementById('vitesse').innerHTML = speed + 'km/h';
            document.getElementById('nom_planete').innerHTML = 'Pluton:';
        }

        else if (speed >= prixPlanete && planete === 8){
            location.href="#boite_pluton";
            planete = 0;
            speed = speed - prixPlanete;
            prixPlanete = Math.round(prixPlanete * 1.5);
            document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
            document.getElementById('vitesse').innerHTML = speed + 'km/h';
            document.getElementById('nom_planete').innerHTML = 'Terre:';
        }

        else if (speed >= prixPlanete && planete === 0){
            location.href="#boite_terre";
            planete = 1;
            speed = speed - prixPlanete;
            prixPlanete = Math.round(prixPlanete * 1.5);
            document.getElementById('prix_planete').innerHTML = prixPlanete + 'km/h';
            document.getElementById('vitesse').innerHTML = speed + 'km/h';
            document.getElementById('nom_planete').innerHTML = 'Venus:';
    }
}