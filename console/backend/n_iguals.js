// Devuelve un arreglo con los primeros 10 números pares (2..20)
function obtenerDiezPares() {
  const pares = [];
  for (let i = 0; i < 10; i++) {
    const numero = (i + 1) * 2;
    pares.push(numero);
  }
  return pares;
}

module.exports = { obtenerDiezPares };