// console/backend/primos.js
// Utilidades: comprobar igualdad estricta y test de números primos

/** Devuelve true si a y b son estrictamente iguales. */
const sonNumerosIguales = (a, b) => a === b;

/** Devuelve true si n es un entero primo (>= 2). */
function esPrimo(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = { sonNumerosIguales, esPrimo };