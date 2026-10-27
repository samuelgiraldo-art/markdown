
let materiales_colegio = [
  "cuaderno", "regla", "borrador", "tablero", "marcador",
  "mochila", "calculadora", "libro", "sacapuntas", "colores"
];

console.log(materiales_colegio[0]);
console.log(materiales_colegio[4]);


// agregar al inicio
materiales_colegio.unshift("compas");
materiales_colegio.unshift("transportador");
console.log("Después de unshift:", materiales_colegio);

// agregar al final
materiales_colegio.push("pegante");
materiales_colegio.push("cartulina");
console.log("Después de push:", materiales_colegio);

// eliminar el primero
materiales_colegio.shift();
console.log("Después de shift:", materiales_colegio);

// eliminar el último
materiales_colegio.pop();
console.log("Después de pop:", materiales_colegio);

// eliminar posición específica
materiales_colegio.splice(4, 1);
console.log("Después de splice(4,1):", materiales_colegio);

// eliminar posiciones 0 y 1 a la vez
materiales_colegio.splice(0, 2);
console.log("Después de splice(0,2):", materiales_colegio);


let colegio = {
  nombre: "Colegio San Jorge",
  ciudad: "Bogotá",
  rector: {
    nombre: "Mauricio Torres",
    edad: 52,
    contacto: {
      correo: "rector@sanjorge.edu.co",
      telefono: "3109876543"
    }
  },
  sede: {
    direccion: "Carrera 7 # 45-10",
    salones: 24,
    biblioteca: true
  },
  profesores: [
    { nombre: "Sandra", materia: "Matemáticas" },
    { nombre: "Julián", materia: "Español" },
    { nombre: "Marcela", materia: "Ciencias" }
  ]
};

console.log("Colegio:", colegio.nombre);
console.log("Rector:", colegio.rector.nombre);
console.log("Correo del rector:", colegio.rector.contacto.correo);
console.log("Dirección:", colegio.sede.direccion);
console.log("Primer profesor:", colegio.profesores[0].nombre, "-", colegio.profesores[0].materia);
console.log(colegio);