




function calculateQuantity() {
const inputElement = document.getElementById("qtyField");
const inputValue = inputElement.value;
    let Faktor = inputValue / 4;
  //  alert("Faktor . " + Faktor);
    const tabelle = document.getElementById("myTable");
    const zeilen = tabelle.getElementsByTagName("tr");

    for (let i = 0; i < zeilen.length; i++) {
      const zellen = zeilen[i].getElementsByTagName("td");

      if (zellen.length > 1) {
        const wert1 = parseFloat(zellen[0].innerText);

         if (!isNaN(wert1)) {   //prüft ob es eine gültige Zahl zum rechen ist.

          const neuesErgebnis = wert1 * Faktor;
          let roundeNeuesErbenis = neuesErgebnis.toFixed(2);
         let geroundeNeuesErbenis = roundeNeuesErbenis.replace('.',',');

       //   alert("Alter Wert :" + wert1 +"neuer Wert : " + neuesErgebnis)

          zellen[1].innerText = geroundeNeuesErbenis;
        }
      }
    }
}