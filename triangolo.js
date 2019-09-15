//Dati due angoli (in gradi) di un triangolo, restituisce il terzo mancante.

/*PSEUDOCODICE
INIZIO
DICHIARA LE VARIABILI ANGOLO 
DICHIARA CHE LA SOMMA TOTALE DEGLI ANGOLI è 180
DICHIARA NON PUò ESSERE MAGGIORE DI 180
CALCOLA LA 180-LA SOMMA DEGLI ANGOLI CONOSCIUTI
STAMPA IL RISULTATO
FINE*/

//FASE DICHIARATIVA
var x
var y
var z
var somma_angoli

//FASE ESECUTIVA
x = 30
y = 60
somma_angoli = 180
z=(somma_angoli-(x+y));
if (x>0 && x<180 && y>0 && y<180 && z>0 && z<180) {
    console.log("L'angolo z è uguale a "+z+".");
} else{
    console.log("Impossibile.")
}