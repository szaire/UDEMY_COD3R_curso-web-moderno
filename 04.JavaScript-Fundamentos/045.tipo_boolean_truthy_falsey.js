let bool = true;
console.log(bool);
console.log(!bool);
console.log(!!bool);

// Valores Truthy -> Não são necessariamente booleanos, mas retornam valores booleanos
console.log("\nos verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!bool);

console.log("\nos falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(bool = false));

console.log("\noperações lógicas com valores truthy e falsey...");
console.log(!!("" || null || 0 || "texto" || 123));
console.log("" || null || 0 || "texto" || 123);

const nome = "";
console.log(nome || "Desconhecido");
