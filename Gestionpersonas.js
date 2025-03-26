const readline = require('readline');

// Crear una interfaz para la lectura de entradas
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n--- Menú ---");
  console.log("1. Ingresar nueva persona");
  console.log("2. Mostrar todos los datos");
  console.log("3. Filtrar por DNI");
  console.log("4. Salir");
}

function ingresarPersona(matriz) {
  rl.question("Ingresa el nombre: ", (nombre) => {
    rl.question("Ingresa el apellido: ", (apellido) => {
      rl.question("Ingresa el DNI: ", (dni) => {
        rl.question("Ingresa los teléfonos separados por comas: ", (telefonosInput) => {
          rl.question("Ingresa los nombres de los hijos separados por comas: ", (hijosInput) => {
            let telefonos = telefonosInput.split(',').map(tel => tel.trim()).filter(tel => tel);
            let hijos = hijosInput.split(',').map(hijo => hijo.trim()).filter(hijo => hijo);

            matriz.push([nombre, apellido, dni, telefonos, hijos]);
            console.log("\nPersona agregada con éxito!\n");
            mostrarMenuYSeleccionar(matriz);
          });
        });
      });
    });
  });
}

function mostrarTodos(matriz) {
  if (matriz.length === 0) {
    console.log("\nNo hay personas registradas.\n");
  } else {
    console.log("\nDatos ingresados:");
    matriz.forEach(persona => {
      const [nombre, apellido, dni, telefonos, hijos] = persona;
      console.log(`${nombre} ${apellido}, DNI: ${dni}, Teléfonos: ${telefonos.length} teléfono(s), Hijos: ${hijos.length}`);
    });
  }
  mostrarMenuYSeleccionar(matriz);
}

function filtrarPorDni(matriz) {
  rl.question("Ingresa el DNI para filtrar: ", (dniBuscar) => {
    const persona = matriz.find(persona => persona[2] === dniBuscar);
    if (persona) {
      const [nombre, apellido, dni, telefonos, hijos] = persona;
      console.log(`\nDatos de ${nombre} ${apellido}:`);
      console.log(`DNI: ${dni}, Teléfonos: ${telefonos.length} teléfono(s), Hijos: ${hijos.length}\n`);
    } else {
      console.log("\nNo se encontró una persona con ese DNI.\n");
    }
    mostrarMenuYSeleccionar(matriz);
  });
}

function mostrarMenuYSeleccionar(matriz) {
  mostrarMenu();
  rl.question("\nElige una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        ingresarPersona(matriz);
        break;
      case "2":
        mostrarTodos(matriz);
        break;
      case "3":
        filtrarPorDni(matriz);
        break;
      case "4":
        console.log("\nSaliendo del programa...\n");
        rl.close();
        break;
      default:
        console.log("\nOpción no válida, intenta de nuevo.\n");
        mostrarMenuYSeleccionar(matriz);
    }
  });
}

function main() {
  let matrizPersonas = [];
  mostrarMenuYSeleccionar(matrizPersonas);
}

main();
