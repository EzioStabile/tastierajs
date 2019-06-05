
var a = document.getElementById('A');

var testo;
var frase = "";
var inutile = "nonfaccionulla";
var inutile2 = "nonfaccionulla2";

class FunzioniTastiera {

  
    clearA(){
        console.log("!!!!!!");
        frase = frase.substring(0, frase.length - 1);
        document.getElementById("testo").value = frase;
    
    }

    scrivi(a) {

            frase = frase + a;
            document.getElementById("testo").value = frase;
        
    }

    aggiornaTesto() {
        frase = document.getElementById("testo").value;
    }

    funzioneSpazio() {
        frase = frase + " ";
        document.getElementById("testo").value = frase;
    }

    mostra() {
        document.getElementById("tastiera").style.display="block";
    }

    nascondi() {
        document.getElementById("tastiera").style.display="none";
    }

}

function scrivi(a) {

    frase = frase + a;
    document.getElementById("testo").value = frase;
}




var tastiera = new FunzioniTastiera('ita');




document.addEventListener('click', (event) => {
    console.log("!!!!!!!!!");
    var testo = document.getElementById("testo");
    var tastiera = document.getElementById("tastiera");
    if (testo.contains(event.target) || tastiera.contains(event.target)) {
        if(tastiera.style.display == "none") {
            tastiera.style.display="block";

        }
    } else {
        if(tastiera.style.display == "block")   {
            tastiera.style.display="none";
        }
    }

});

/*a.addEventListener('mousedown', () =>  {
    console.log("PREMUTO");

    var arrayOf = document.getElementsByClassName('red');

    for (var i = 0; i < arrayOf.length; i++) {
        arrayOf[i].style.fontSize = "20px";
    }

});

a.addEventListener('mouseup', () =>  {
    console.log("ALZATO");

    var arrayOf = document.getElementsByClassName('red');

    for (var i = 0; i < arrayOf.length; i++) {
        arrayOf[i].style.fontSize = "50px";
    }


});

function cambiaStyle(color) {
    a.style.color = color;
}
*/