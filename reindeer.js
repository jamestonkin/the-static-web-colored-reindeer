var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var newColor = ""

//THIS DID NOT WORK IT PRINTED THE FIRST COLOR WITH EVERY REINDEER, THEN THE SECOND COLOR WITH EVERY REINDEER
// for (var i = 0; i < 8; i++) {
//   for (var j = 0; j < reindeer.length; j++) {
//     newColor += colors[i] + " " + reindeer[j];
//     console.log(newColor);
//   }
// }

//THIS DID NOT WORK, IT PRINTED EACH COLOR, THEN EACH REINDEER
// var newReindeer = ""
// for (var i = 0; i < 8; i++) {
//   newColor += colors[i];
// }
// for (var j = 0; j < reindeer.length; j++) {
//   newReindeer += reindeer[j];
// }
//
// console.log(newColor + newReindeer);

//THIS FINALLY WORKED
for (var i = 0; i < reindeer.length; i++) {
    newColor += colors[i] + " " + reindeer[i] + "<br>";
    console.log(newColor);
}

var hohohoElement = document.getElementById("coloredReindeer");
hohohoElement.innerHTML = newColor;
