var kérdések;
var adottkérdés = 0;

 function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
     );
     
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
}

var kérdésMegjelenítés = function(kérdésSzáma)
{
    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");
   let kattintott = document.getElementById("válasz1").onclick

    kérdés_szöveg.innerHTML = kérdések[kérdésSzáma].questionText
    kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzáma].image
    válasz1.innerText = kérdések[kérdésSzáma].answer1
    
   
    válasz2.innerText = kérdések[kérdésSzáma].answer2
    válasz3.innerText = kérdések[kérdésSzáma].answer3
}

window.onload = () => {
    letöltés();


    function Vissza() {
        if (adottkérdés == 0) {
            adottkérdés = kérdések.length - 1;
            letöltés();
        } else {
            adottkérdés--;
            letöltés();
        }
    }

    function Elore() {
        if (adottkérdés == kérdések.length - 1) {
            adottkérdés = 0;
            letöltés();
        } else {
            adottkérdés++;
            letöltés();
        }
    }
}