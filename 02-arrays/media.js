// CALCULO MEDIA

let nota = [10, 7.5, 6.5, 8];
console.log(nota);
let media = (nota[0] + nota[1] + nota[2] + nota[3])/nota.length;

console.log("A média é " + media);

nota.pop();
console.log(nota);
media = (nota[0] + nota[1] + nota[2])/nota.length;
console.log(nota);

console.log(media);