function saludar() {
  return "Hola Mundo";
}

module.exports = saludar;

if (require.main === module) {
  console.log(saludar());
}
