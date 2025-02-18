function getRandomInt(min, max) {
  // min et max inclus
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // Affiche un entier entre 1 et 10

let number = 4.65;
console.log(Math.floor(number)); // Affiche: 4
console.log(Math.ceil(number));  // Affiche: 5
console.log(Math.round(number)); // Affiche: 5
