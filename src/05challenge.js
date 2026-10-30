// ============================================
// UTILIDADES CON STRING METHODS
// ============================================

// "  CUADERNO  " -> "Cuaderno"
function capitalizar(texto) {
  const limpio = texto.trim().toLowerCase();
  return limpio.charAt(0).toUpperCase() + limpio.slice(1);
}

// Evita que el texto escrito se interprete como HTML
function escapar(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Convierte un array de textos en una lista <ul><li>
function aLista(items, vacio) {
  if (items.length === 0) return `<p>${vacio}</p>`;
  return "<ul>" + items.map((t, i) => `<li>${i}. ${escapar(t)}</li>`).join("") + "</ul>";
}

function mostrar(id) {
  document.querySelectorAll("main section").forEach((sec) => {
    sec.hidden = sec.id !== id;
  });
}

// ============================================
// MATERIALES (array + unshift / push / shift / pop / splice)
// ============================================
const materiales = [
  "Cuaderno", "Regla", "Borrador", "Tablero", "Marcador",
  "Mochila", "Calculadora", "Libro", "Sacapuntas", "Colores"
];

function renderMateriales() {
  document.getElementById("listaMateriales").innerHTML =
    aLista(materiales, "No hay materiales en el inventario.");
  document.getElementById("totalMateriales").textContent =
    `Total: ${materiales.length} materiales`;
}

// Lee el input, lo limpia con string methods y evita vacíos y repetidos
function leerNuevoMaterial() {
  const input = document.getElementById("nuevoMaterial");
  const material = capitalizar(input.value);
  input.value = "";
  input.focus();

  if (material === "") return null;

  const yaExiste = materiales.some((m) => m.toLowerCase() === material.toLowerCase());
  if (yaExiste) {
    alert(`"${material}" ya está en el inventario.`);
    return null;
  }
  return material;
}

function agregarFinal() {
  const material = leerNuevoMaterial();
  if (material) {
    materiales.push(material);
    renderMateriales();
  }
}

function agregarInicio() {
  const material = leerNuevoMaterial();
  if (material) {
    materiales.unshift(material);
    renderMateriales();
  }
}

function eliminarPrimero() {
  materiales.shift();
  renderMateriales();
}

function eliminarUltimo() {
  materiales.pop();
  renderMateriales();
}

function eliminarPosicion() {
  const input = document.getElementById("posicion");
  const texto = input.value.trim();
  input.value = "";
  const pos = Number(texto);

  if (texto === "" || !Number.isInteger(pos) || pos < 0 || pos >= materiales.length) {
    alert(`Escribe una posición válida entre 0 y ${materiales.length - 1}.`);
    return;
  }
  materiales.splice(pos, 1);
  renderMateriales();
}

// ============================================
// COLEGIO (objeto con objetos por dentro)
// ============================================
const colegio = {
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

function renderColegio() {
  const { rector, sede } = colegio;

  // Objeto: etiqueta -> valor (se recorre con Object.entries)
  const datos = {
    "Nombre": colegio.nombre.toUpperCase(),
    "Ciudad": colegio.ciudad,
    "Rector": `${rector.nombre} (${rector.edad} años)`,
    "Correo": rector.contacto.correo,
    "Teléfono": rector.contacto.telefono.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3"),
    "Dirección": sede.direccion,
    "Salones": sede.salones,
    "Biblioteca": sede.biblioteca ? "Sí" : "No"
  };

  document.getElementById("informacionColegio").innerHTML =
    "<ul>" +
    Object.entries(datos)
      .map(([etiqueta, valor]) => `<li><strong>${etiqueta}:</strong> ${escapar(valor)}</li>`)
      .join("") +
    "</ul>";

  document.getElementById("listaProfesores").innerHTML =
    "<ul>" +
    colegio.profesores
      .map((p) => `<li>${escapar(p.nombre)} - ${escapar(p.materia)}</li>`)
      .join("") +
    "</ul>";
}

// ============================================
// CALCULADORA (objeto de operaciones)
// ============================================
const operaciones = {
  "+":  (a, b) => a + b,
  "-":  (a, b) => a - b,
  "*":  (a, b) => a * b,
  "/":  (a, b) => a / b,
  "%":  (a, b) => a % b,
  "**": (a, b) => a ** b
};

function calcular(operador) {
  const texto1 = document.getElementById("numero1").value.trim();
  const texto2 = document.getElementById("numero2").value.trim();
  const salida = document.getElementById("resultadoCalculadora");

  if (texto1 === "" || texto2 === "") {
    salida.textContent = "Escribe los dos números.";
    return;
  }

  const n1 = Number(texto1);
  const n2 = Number(texto2);

  if ((operador === "/" || operador === "%") && n2 === 0) {
    salida.textContent = "No se puede dividir entre 0.";
    return;
  }

  const resultado = operaciones[operador](n1, n2);
  salida.textContent = `Resultado: ${resultado}`;
}

// ============================================
// FRUTAS
// ============================================
const frutas = [
  "Manzana", "Banano", "Naranja", "Mango", "Fresa",
  "Uva", "Piña", "Pera", "Kiwi", "Sandía"
];

function renderFrutas() {
  document.getElementById("listaFrutas").innerHTML = aLista(frutas, "No hay frutas.");
  document.getElementById("totalFrutas").textContent = `Total: ${frutas.length} frutas`;
}

function agregarFruta() {
  const input = document.getElementById("nuevaFruta");
  const fruta = capitalizar(input.value);
  input.value = "";
  input.focus();

  if (fruta === "") return;

  if (frutas.some((f) => f.toLowerCase() === fruta.toLowerCase())) {
    alert(`"${fruta}" ya está en la lista.`);
    return;
  }
  frutas.push(fruta);
  renderFrutas();
}

// ============================================
// VALIDAR CONTRASEÑA (objeto de reglas + string methods)
// ============================================
const MAYUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";
const NUMEROS = "0123456789";
const SIMBOLOS = "!@#$%^&*()-_=+[]{};:,.<>?/";

// Cada regla: descripción + función que revisa el texto
const reglasContrasena = {
  longitud:  { texto: "mínimo 8 caracteres", cumple: (c) => c.length >= 8 },
  mayuscula: { texto: "una mayúscula",       cumple: (c) => c.split("").some((l) => MAYUSCULAS.includes(l)) },
  minuscula: { texto: "una minúscula",       cumple: (c) => c.split("").some((l) => MINUSCULAS.includes(l)) },
  numero:    { texto: "un número",           cumple: (c) => c.split("").some((l) => NUMEROS.includes(l)) },
  simbolo:   { texto: "un símbolo (! @ # $)", cumple: (c) => c.split("").some((l) => SIMBOLOS.includes(l)) },
  sinEspacios: { texto: "sin espacios",      cumple: (c) => !c.includes(" ") }
};

function validarContrasena() {
  const clave = document.getElementById("contrasena").value;
  const salida = document.getElementById("resultadoContrasena");

  const faltan = Object.values(reglasContrasena)
    .filter((regla) => !regla.cumple(clave))
    .map((regla) => regla.texto);

  if (faltan.length === 0) {
    salida.textContent = `✅ Contraseña segura (${clave.length} caracteres: ${"*".repeat(clave.length)})`;
    salida.className = "ok";
  } else {
    salida.textContent = "❌ Te falta: " + faltan.join(", ") + ".";
    salida.className = "error";
  }
}

// ============================================
// INICIO
// ============================================
renderMateriales();
renderColegio();
renderFrutas();