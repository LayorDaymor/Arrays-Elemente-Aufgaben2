/////////////////////////
/* Aufgabe lvl 1.4 split() */
////////////////////////
var meinText1="Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag."
var meinText2=" Wie geht es dir heute?";
var meinText3="Heute ist ein großer Tag für uns.";

var split1= meinText1.split();
var split2= meinText1.split("");
var split3= meinText1.split(" ");

console.log(split1)
console.log(split2)
console.log(split3)

/////////////////////////
/* Aufgabe lvl 1.5 pop() */
////////////////////////

const totalSongs=["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"]
totalSongs.push("Sweet Child O'Mine", "Blinding Lights", "Sign of the Time")

var entfernterSong=totalSongs.pop();
console.log(entfernterSong);

const bestenFussballerAllerZeiten=["test1", "test2", "test3", "test4", "test5", ]
bestenFussballerAllerZeiten.push("test6", "test7", "test7")

var entfernterFussballer=bestenFussballerAllerZeiten.pop();
bestenFussballerAllerZeiten.pop();
bestenFussballerAllerZeiten.pop();
bestenFussballerAllerZeiten.pop();
console.log(entfernterFussballer);
console.log(bestenFussballerAllerZeiten);

/////////////////////////
/* Aufgabe lvl 1.7 unshift() */
////////////////////////
var deutscheGerichte=["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"]

deutscheGerichte.unshift("Labskaus", "Matjesfilet mit Speckstippe", "Quark mit Leinöl und Kartoffeln", "Bremer Knipp", "Pinkel mit Grünkohl");
console.log(deutscheGerichte);

/////////////////////////
/* Aufgabe lvl 1.8 shift() */
////////////////////////
var nichtGut=deutscheGerichte.shift();
console.log(nichtGut);

/////////////////////////
/* Aufgabe lvl 1.9 Push Pop Shift Unshift Difference */
////////////////////////
var neuArray =[23, 54, 75]
/* Push und Pop */
neuArray.push(1, 2)
console.log(neuArray);
neuArray.pop()
neuArray.pop()

console.log(neuArray);

/* Unshift und Shift */
neuArray.unshift(99, 100);
console.log(neuArray);
neuArray.shift();
neuArray.shift();
console.log(neuArray);

/////////////////////////
/* Aufgabe lvl 1.9 splice() Entfernen
////////////////////////

/* Zum Entfernen von Elementen: array.splice (postitin des gelöschten Index, Anzahl der Elemente). */

let array3 = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
  ];
  
/* Entferne die Fotos mit der Nummer 004-007. */
let delImg1=array3.splice(4,4);
console.log(delImg1);
/* Entferne die Fotos mit der Nummer 0010-0014. */
let delImg2=array3.splice(6,5);
console.log(delImg2);
let delImg3=array3.splice(3,10);
console.log(delImg3);

/////////////////////////
/* Aufgabe lvl 1.11 splice() */
////////////////////////
/* Für das Hinzufügen von Elementen: array.splice (Index, Anzahl der Elemente, Element).
 */

var array = [ "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg" ];

array.splice(1, 0,"imageTeilnehmer008supercode", "imageTeilnehmer009supercode", "imageTeilnehmer0010supercode", );

console.log(array)

for (let i = 14; i <= 19; i++) {
    array.splice(array.length,0,"imageTeilnehmer00"+i+"supercode")
/*   array.push("imageTeilnehmer00"+ i + "supercode");
 */  
}
console.log(array);

/////////////////////////
/* Aufgabe lvl 2.1 Split() */
////////////////////////
let url ="window.location.href;"

let a =url.split(".")

let scheme=a[0];
console.log(scheme);
let filename=a[2];
console.log(filename);

console.log(scheme, filename);

/////////////////////////
/* Aufgabe lvl 2.2 Split() */
////////////////////////
function erfahren() {   
  let ergbnissPlatz=document.getElementById("dasErgbniss");
  let mytext=document.getElementById("my-input").value;
  
  let a=mytext.split(".");
  
  let formatierung = a[1];
  
  ergbnissPlatz.innerText=formatierung
  
  }