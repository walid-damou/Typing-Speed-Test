//-----------------------shuffle les paragraphes-----------------------------------

let parag = document.getElementById('para');
tab=["JavaScript est un langage dit client-side, c'est-à-dire que les scripts sont exécutés par le navigateur chez l'internaute (le client)."
,"Un script server-side s'occupe de créer la page Web qui sera envoyée au navigateur. Ce dernier va alors afficher la page puis exécuter les scripts client-side."
,"Le JavaScript est utilisé pour réaliser des extensions pour différents programmes, Chrome et Firefox possèdent tous deux des extensions enpartie codées en JavaScript."
,"JavaScript a la possibilité d'être exécuté sur n'importe quelle machine grâce au projet Node.js."
,"Le JavaScript s'inclut dans la page Web ou dans un fichier externe et permet de dynamiser une page HTML."
,"JavaScript désigne un langage de développement informatique, et plus précisément un langage de script orienté objet."
,"Le langage JavaScript est principalement employé pour améliorer l'ergonomie d'un site Internet et/ou d'une interface applicative utilisateur."];
function shuffle(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
i=shuffle(0,7);
let neww=`<p> ${tab[i]}</p>`;
parag.innerHTML=neww;

//-----------------------chrono---------------------------------------------------

var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0;
function chrono(){
    end = new Date();
    diff = end - start;
    diff = new Date(diff);
    var msec = diff.getMilliseconds();
    var sec = diff.getSeconds();
    var min = diff.getMinutes();
    if (min < 10){
        min = "0" + min;
    }
    if (sec < 10){
        sec = "0" + sec;
    }
    if(msec < 10){
        msec = "0" +msec;
    }
    if(msec>100){
        msec=Math.floor(msec/10);
    }
    document.getElementById("chrono").innerHTML = min + ":" + sec + ":" + msec;
    setTimeout("chercher()",10);
    timerID = setTimeout("chrono()", 10);
}

//-----------------------fonction pour arreter le chrono----------------------------------------

function chercher(){
    if(tab[i]===document.getElementById("input").value){
        chronoStop();
    }
}

//-----------------------fonction pour demarrer le chrono---------------------------------------

var w=2;
function chronoStart(){
    if(w==2){
       start = new Date();
        chrono();
        w=1;
    }
}

//-----------------------fonction pour refaire -------------------------------------------------

function chronoReset(){
    document.location.reload(true);
}

//-----------------------fonction pour stoper--------------------------------------------------

function chronoStop(){
    clearTimeout(timerID);
}

//-----------------------fonction de verification d'erreur---------------------------------------

function color(){
    var b=document.getElementById("input").value.length;
    if(tab[i].charAt(b-1)!=document.getElementById("input").value.charAt(b-1)){
        document.getElementById("input").style.border=" 10px solid red";
    }
    else{
        document.getElementById("input").style.border=" 10px solid cyan";
    }
}
//-------------------------------ONMOUSEOVER--------------------------------------------------
function col(a){
    document.getElementById("reset").style.background=a;
}
//-------------------------------ONMOUSEOUT----------------------------------------------------                          
function nor(a){
    document.getElementById("reset").style.backgroundColor=a;
}
//----------------------------------------------------------------------------------------------