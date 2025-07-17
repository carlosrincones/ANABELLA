// script.js
// SÍNTESIS: Cada objeto representa un semestre. Llena la malla con más semestres o electivas cuando lo requieras.
const MALLA = [
  // PRIMER SEMESTRE
  {
    nombre: "Primer Semestre",
    materias: [
      { codigo: "008-1714", nombre: "Matemáticas I (AGROB)", creditos: 4, prerrequisitos: [] },
      { codigo: "010-1714", nombre: "Química General", creditos: 4, prerrequisitos: [] },
      { codigo: "003-1712", nombre: "Biología I", creditos: 2, prerrequisitos: [] },
      { codigo: "006-1013", nombre: "Comp. y Exp. Lingüística I", creditos: 3, prerrequisitos: [] },
      { codigo: "009-1012", nombre: "Destrezas para el Aprendizaje", creditos: 2, prerrequisitos: [] },
      { codigo: "003-1711", nombre: "Laboratorio de Biología I", creditos: 1, prerrequisitos: [] },
      { codigo: "002-1111", nombre: "Extra Académica Cultural", creditos: 1, prerrequisitos: [] },
      { codigo: "015-1111", nombre: "Extra Académica Deportiva", creditos: 0, prerrequisitos: [] }
    ]
  },
  // SEGUNDO SEMESTRE
  {
    nombre: "Segundo Semestre",
    materias: [
      { codigo: "011-1722", nombre: "Sociología de la Salud", creditos: 2, prerrequisitos: [] },
      { codigo: "010-1723", nombre: "Química Orgánica", creditos: 3, prerrequisitos: ["010-1714"] },
      { codigo: "008-2023", nombre: "Estadística General", creditos: 3, prerrequisitos: ["008-1714"] },
      { codigo: "007-1723", nombre: "Inglés Instrumental", creditos: 3, prerrequisitos: [] },
      { codigo: "003-1723", nombre: "Biología II", creditos: 3, prerrequisitos: ["003-1712"] },
      { codigo: "003-1721", nombre: "Laboratorio de Biología II", creditos: 1, prerrequisitos: ["003-1711"] },
      { codigo: "005-1723", nombre: "Física para Medicina", creditos: 3, prerrequisitos: ["008-1714"] }
    ]
  },
  // TERCER SEMESTRE
  {
    nombre: "Tercer Semestre",
    materias: [
      { codigo: "151-2117", nombre: "Anatomía I", creditos: 7, prerrequisitos: ["003-1723","003-1721"] },
      { codigo: "151-2213", nombre: "Embriología", creditos: 3, prerrequisitos: ["003-1723","003-1721"] },
      { codigo: "150-2012", nombre: "Ciencias Sociales", creditos: 2, prerrequisitos: ["011-1722","006-1013"] },
      { codigo: "150-2111", nombre: "ITPP I", creditos: 1, prerrequisitos: ["011-1722"] }
    ]
  },
  // CUARTO SEMESTRE
  {
    nombre: "Cuarto Semestre",
    materias: [
      { codigo: "153-2026", nombre: "Bioquímica", creditos: 6, prerrequisitos: ["010-1723","003-1723"] },
      { codigo: "151-2123", nombre: "Anatomía II", creditos: 3, prerrequisitos: ["151-2117","151-2213"] },
      { codigo: "152-2025", nombre: "Psicología Evolutiva", creditos: 5, prerrequisitos: ["151-2213"] },
      { codigo: "153-2221", nombre: "Informática", creditos: 1, prerrequisitos: ["008-2023"] },
      { codigo: "150-2121", nombre: "ITPP II", creditos: 1, prerrequisitos: ["150-2111","151-2117"] }
    ]
  },
  // QUINTO SEMESTRE
  {
    nombre: "Quinto Semestre",
    materias: [
      { codigo: "153-3018", nombre: "Fisiología", creditos: 8, prerrequisitos: ["151-2123","153-2026"] },
      { codigo: "151-3114", nombre: "Histología", creditos: 4, prerrequisitos: ["151-2123"] },
      { codigo: "150-3012", nombre: "Estadística", creditos: 2, prerrequisitos: ["150-2012","153-2221"] },
      { codigo: "155-3111", nombre: "ITPP III", creditos: 1, prerrequisitos: ["150-2121"] },
      { codigo: "XXX-XX1", nombre: "Electiva", creditos: 1, prerrequisitos: [], electiva: true }
    ]
  },
  // ... Agrega los siguientes semestres siguiendo el mismo esquema ...
  // Ejemplo para el sexto semestre:
  {
    nombre: "Sexto Semestre",
    materias: [
      { codigo: "157-3025", nombre: "Microbiología e Inmunología Clínica", creditos: 5, prerrequisitos: ["151-3114","153-3018"] },
      { codigo: "157-3124", nombre: "Parasitología", creditos: 4, prerrequisitos: ["151-3114","153-3018"] },
      { codigo: "150-3023", nombre: "Epidemiología Gral. y Saneamiento Ambiental", creditos: 3, prerrequisitos: ["150-3012"] },
      { codigo: "152-3022", nombre: "Psicología Médica", creditos: 6, prerrequisitos: ["152-2025","153-3018"] },
      { codigo: "154-3121", nombre: "ITPP IV", creditos: 1, prerrequisitos: ["155-3111"] },
      { codigo: "XXX-XX1", nombre: "Electiva", creditos: 1, prerrequisitos: [], electiva: true }
    ]
  },
  // Puedes seguir completando con los otros semestres usando el mismo patrón.
  // Ejemplo de bloque "Electivas"
  {
    nombre: "Electivas Socio-Humanísticas / Profesionales",
    materias: [
      { codigo: "011-1183", nombre: "Ética (Socio-Humanística)", creditos: 3, prerrequisitos: [], electiva: true },
      { codigo: "150-3211", nombre: "Metodología de la Investigación I (Profesional)", creditos: 1, prerrequisitos: ["011-1722","150-2012"], electiva: true }
      // ... Añade más electivas según tu lista ...
    ]
  }
];

// Gestión de progreso del usuario
let aprobadas = JSON.parse(localStorage.getItem('aprobadas-medicina-bolivar') || '[]');
function guardarProgreso() { localStorage.setItem('aprobadas-medicina-bolivar', JSON.stringify(aprobadas)); }
function desbloqueada(materia) {
  return (materia.prerrequisitos || []).every(cod => aprobadas.includes(cod));
}

function renderMalla() {
  const cont = document.getElementById("malla");
  cont.innerHTML = "";
  MALLA.forEach(sem => {
    const divSem = document.createElement('div');
    divSem.className = "semestre";
    divSem.innerHTML = `<h3>${sem.nombre}</h3>`;
    sem.materias.forEach(m => {
      let clase = "materia";
      if (aprobadas.includes(m.codigo))      clase += " seleccionada";
      else if (desbloqueada(m))              clase += " desbloqueada";
      else                                   clase += " bloqueada";
      if (m.electiva)                        clase += " electiva";
      const matDiv = document.createElement('div');
      matDiv.className = clase;
      matDiv.innerHTML = `<span class="codigo">${m.codigo}</span> ${m.nombre}
                          <span class="creditos">${m.creditos} cr</span>
                          ${m.prerrequisitos.length ? `<span class="prerrequisitos">Prerrequisitos: ${m.prerrequisitos.join(', ')}</span>` : ''}`;
      // Permite marcar como aprobada
      if (desbloqueada(m) && !aprobadas.includes(m.codigo)) {
        matDiv.onclick = () => {
          aprobadas.push(m.codigo);
          guardarProgreso();
          renderMalla();
        };
      }
      // Permite desmarcar si ya está aprobada
      else if (aprobadas.includes(m.codigo)) {
        matDiv.onclick = () => {
          aprobadas = aprobadas.filter(code => code !== m.codigo);
          guardarProgreso();
          renderMalla();
        };
      } else {
        matDiv.title = "Aprueba los prerrequisitos para desbloquear esta materia";
      }
      divSem.appendChild(matDiv);
    });
    cont.appendChild(divSem);
  });
}

document.getElementById("reset").onclick = () => {
  if(confirm("¿Seguro que deseas reiniciar tu progreso?")) {
    aprobadas = [];
    guardarProgreso();
    renderMalla();
  }
};
renderMalla();
