
window.onload = function () {
    console.log("start");

    let hova = document.getElementById("ide");
    for (var s = 0; s < 10; s++) {

        let sor = document.createElement("div");
        sor.classList.add("sor");
        hova.appendChild(sor);

        for (var o = 0; o < 10; o++) {
            let szam = document.createElement("div");
            szam.classList.add("elem");
            szam.innerText = (s + 1) * (o + 1);
            sor.appendChild(szam); 
            szam.style.color = "white";
            szam.style.background = `rgb(${255 / 10 * s}, 0, ${255 / 10 * o})`
             

        }
    }
    pascal();

}
var faktorialis = function (n) {
    let eredmeny = 1;
    for (let i = 2; i < n; i++) {
        eredmeny = eredmeny * i;
    }
    return eredmeny;
}

function pascal() {
    console.log("betöltődött");
    let hova2 = document.getElementById("pascal");
    for (var s = 0; s < 10; s++) {
        let sor2 = document.createElement("div");
        sor2.classList.add("sor2");
        hova2.appendChild(sor2);

        for (var o = 0;  o < s; o++) {
            let szam2 = document.createElement("div");
            sor2.appendChild(szam2);
            szam2.classList.add("elem2");
            szam2.style.top = s * 30;
            szam2.style.left = o * 30;
            szam2.innerText = faktorialis(s) / (faktorialis(o) * faktorialis(s - o));
        }
    }
}
