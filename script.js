const MALLA = [
  { nombre: "Primer Semestre", materias: [
    { nombre: "Matemáticas I (AGROB)", prerrequisitos: [] },
    { nombre: "Química General", prerrequisitos: [] },
    { nombre: "Biología I", prerrequisitos: [] },
    { nombre: "Comp. y Exp. Lingüística I", prerrequisitos: [] },
    { nombre: "Desarrollo de Destrezas para el Aprendizaje", prerrequisitos: [] },
    { nombre: "Laboratorio de Biología I", prerrequisitos: [] },
    { nombre: "Extra Académica Cultural", prerrequisitos: [] },
    { nombre: "Extra Académica Deportiva", prerrequisitos: [] }
  ]},
  // ... Pega aquí el resto de semestres, según lo mostrado antes ...
];

// --- lógicas para aprobar/desaprobar materias y prerrequisitos ---
let aprobadas = JSON.parse(localStorage.getItem('aprobadas-medicina-rosa') || '[]');
function guardarProgreso() { localStorage.setItem('aprobadas-medicina-rosa', JSON.stringify(aprobadas)); }
function desbloqueada(materia) {
  return (materia.prerrequisitos || []).every(n => aprobadas.includes(n));
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
      if (aprobadas.includes(m.nombre))      clase += " aprobada";
      else if (desbloqueada(m))              clase += " desbloqueada";
      else                                   clase += " bloqueada";
      if (m.electiva)                        clase += " electiva";
      const matDiv = document.createElement('div');
      matDiv.className = clase;
      matDiv.innerHTML = `${m.nombre}`;
      // Permite marcar como aprobada si está desbloqueada
      if (desbloqueada(m) && !aprobadas.includes(m.nombre)) {
        matDiv.onclick = () => {
          aprobadas.push(m.nombre);
          guardarProgreso();
          renderMalla();
        };
      }
      // Permite desmarcar si ya está aprobada
      else if (aprobadas.includes(m.nombre)) {
        matDiv.onclick = () => {
          aprobadas = aprobadas.filter(n => n !== m.nombre);
          guardarProgreso();
          renderMalla();
        };
      } else {
        matDiv.title = "Aprueba los prerrequisitos para desbloquear seleccionando en orden.";
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

