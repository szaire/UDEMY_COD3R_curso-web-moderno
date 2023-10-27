const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); // não vai dar erro
console.log(escola.charCodeAt(3));

console.log(escola.indexOf("3"));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!"));

console.log(escola.replace(/\o/, "e")); // aplicando regex
console.log(escola.replace("3", "e")); // aplicando regex

console.log("Ana, Maria, Pedro".split(","));

// Locuras do javascript:
console.log(7 / 0);
console.log("10" / 2);
console.log("3" + 2);
console.log("3" - 2);
console.log("Show!" * 2);
console.log(0.1 + 0.7); // Computers are dumb as sheesh
