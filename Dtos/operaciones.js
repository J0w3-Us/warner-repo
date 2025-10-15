const suma = (a, b) => a + b;

const rest = (a, b) => a - b;

// Export correcto: module.exports (plural). Antes había un typo 'module.export'
module.exports = {
    suma,
    rest,
};