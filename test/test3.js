function probarEsPar() {
  // Pruebas con números pares
  console.log(esPar(2) === true);
  console.log(esPar(4) === true);
  console.log(esPar(10) === true);

  // Pruebas con números impares
  console.log(esPar(3) === false);
  console.log(esPar(7) === false);
  console.log(esPar(11) === false);

  // Pruebas con el número cero
  console.log(esPar(0) === true);

  // Prueba con número negativo par
  console.log(esPar(-6) === true);

  // Prueba con número negativo impar
  console.log(esPar(-3) === false);
}

// Ejecutar las pruebas
probarEsPar();


