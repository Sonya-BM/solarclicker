var speed = 0;
var prixAutoClick = 20;
var prixMulti = 100;
var cpt = 0;
var cptAutoClick = 0;
var cptMultipli = 0;
var increment = 1;
var planete = 1;

var prixPlanete = 1250;
var niveau = 1;
var niveauRomain = 0;

const tempsAlert = 4000;

var prixPlanete = 1;



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
        speed = speed - prixMulti;
        prixMulti = prixMulti * 2;
        increment = increment * 1.5;
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



//*****     Button play              *****/
HTML SCSS JSResult
EDIT ON
// var c = document.getElementById('canvas');
// var ctx = c.getContext('2d');
// var btn = document.getElementsByClassName('btn')[0];

// c.width = window.innerWidth;
// c.height = window.innerHeight;

// var mouseX = c.width / 2;
// var mouseY = c.height / 2;
// var txtPosition = 0;

// var particles = [];

// btn.addEventListener('mouseup', function(e){
//     mouseX = e.clientX;
//     mouseY = e.clientY;
    
//     createParticles();
//     changeText();
// });

// setTimeout(function(){
//     createParticles();
// }, 250);

// draw();

// function draw(){
    
//     drawBg();
//     incParticles();
//     drawParticles();
    
//     window.requestAnimationFrame(draw);
    
// }

// function drawBg(){
//     ctx.rect(0, 0, c.width, c.height);
//     ctx.fillStyle = "rgb(40, 45, 50)";
//     ctx.fill();
// }

// function drawParticles(){
//     for(i = 0; i < particles.length; i++){
//         ctx.beginPath();
//         ctx.arc(particles[i].x,
//                      particles[i].y,
//                      particles[i].size,
//                      0,
//                      Math.PI * 2);
//         ctx.fillStyle = particles[i].color;
//         ctx.closePath();
//         ctx.fill();
//     }
// }

// function incParticles(){
//     for(i = 0; i < particles.length; i++){
//         particles[i].x += particles[i].velX;
//         particles[i].y += particles[i].velY;
        
//         particles[i].size = Math.max(0, (particles[i].size - .05));
        
//         if(particles[i].size === 0){
//             particles.splice(i, 1);
//         }
//     }
// }

// function createParticles(){
//     for(i = 0; i < 30; i++){
//         particles.push({
//             x: mouseX,
//             y: mouseY,
//             size: parseInt(Math.random() * 10),
//             color: 'rgb(' + ranRgb() + ')',
//             velX: ranVel(),
//             velY: ranVel()
//         });
//     }
// }

// function ranRgb(){
//     var colors = [
//         '255, 122, 206',
//         '0, 157, 255',
//         '0, 240, 168',
//         '0, 240, 120'
//     ];
    
//     var i = parseInt(Math.random() * 10);
    
//     return colors[i];
// }

// function ranVel(){
//     var vel = 0;
    
//     if(Math.random() < 0.5){
//         vel = Math.abs(Math.random());
//     } else {
//         vel = -Math.abs(Math.random());
//     }
            
//     return vel;
// }

// // Text

// var btnTxt = [
//     'hehe',
//     'ouch!',
//     'sparkles!',
//     'ooh',
//     'oooooh',
//     'ooooooooooh',
//     'HARDER',
//     'softer',
//     'tenderly',
//     'this is getting weird',
//     'please stop',
//     '"gags"',
//     'woof',
//     'meow',
//     '@Lewitje'
// ];

// function changeText(){
//     if(txtPosition !== btnTxt.length){
//         btn.innerHTML = btnTxt[txtPosition];
//         txtPosition += 1;
//     }
// }