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
    { nombre: "Segundo Semestre", materias: [
      { nombre: "Sociología de la Salud", prerrequisitos: [] },
      { nombre: "Química Orgánica", prerrequisitos: ["Química General"] },
      { nombre: "Estadística General", prerrequisitos: ["Matemáticas I (AGROB)"] },
      { nombre: "Inglés Instrumental", prerrequisitos: [] },
      { nombre: "Biología II", prerrequisitos: ["Biología I"] },
      { nombre: "Laboratorio de Biología II", prerrequisitos: ["Laboratorio de Biología I"] },
      { nombre: "Física para Medicina", prerrequisitos: ["Matemáticas I (AGROB)"] }
    ]},
    { nombre: "Tercer Semestre", materias: [
      { nombre: "Anatomía I", prerrequisitos: ["Biología II","Laboratorio de Biología II"] },
      { nombre: "Embriología", prerrequisitos: ["Biología II","Laboratorio de Biología II"] },
      { nombre: "Ciencias Sociales", prerrequisitos: ["Sociología de la Salud","Comp. y Exp. Lingüística I"] },
      { nombre: "ITPP I", prerrequisitos: ["Sociología de la Salud"] }
    ]},
    { nombre: "Cuarto Semestre", materias: [
      { nombre: "Bioquímica", prerrequisitos: ["Química Orgánica","Biología II"] },
      { nombre: "Anatomía II", prerrequisitos: ["Anatomía I","Embriología"] },
      { nombre: "Psicología Evolutiva", prerrequisitos: ["Embriología"] },
      { nombre: "Informática", prerrequisitos: ["Estadística General"] },
      { nombre: "ITPP II", prerrequisitos: ["ITPP I","Anatomía I"] }
    ]},
    { nombre: "Quinto Semestre", materias: [
      { nombre: "Fisiología", prerrequisitos: ["Anatomía II","Bioquímica"] },
      { nombre: "Histología", prerrequisitos: ["Anatomía II"] },
      { nombre: "Estadística", prerrequisitos: ["Ciencias Sociales"] },
      { nombre: "ITPP III", prerrequisitos: ["ITPP II"] },
      { nombre: "Electiva", prerrequisitos: [], electiva: true }
    ]},
    { nombre: "Sexto Semestre", materias: [
      { nombre: "Microbiología e Inmunología Clínica", prerrequisitos: ["Histología","Fisiología"] },
      { nombre: "Parasitología", prerrequisitos: ["Histología","Fisiología"] },
      { nombre: "Epidemiología General y Saneamiento Ambiental", prerrequisitos: ["Estadística"] },
      { nombre: "Psicología Médica", prerrequisitos: ["Psicología Evolutiva","Microbiología e Inmunología Clínica"] },
      { nombre: "ITPP IV", prerrequisitos: ["ITPP III"] },
      { nombre: "Electiva", prerrequisitos: [], electiva: true }
    ]},
    { nombre: "Séptimo Semestre", materias: [
      { nombre: "Medicina I (Semiología)", prerrequisitos: ["Microbiología e Inmunología Clínica","Parasitología"] },
      { nombre: "Fisiopatología", prerrequisitos: ["Fisiología","Medicina I (Semiología)"] },
      { nombre: "Anatomía Patológica", prerrequisitos: ["Microbiología e Inmunología Clínica"] }
    ]},
    { nombre: "Octavo Semestre", materias: [
      { nombre: "Cirugía I", prerrequisitos: ["Medicina I (Semiología)","Fisiopatología"] },
      { nombre: "Ginecología y Obstetricia I", prerrequisitos: ["Medicina I (Semiología)","Fisiopatología"] },
      { nombre: "Puericultura", prerrequisitos: ["Medicina I (Semiología)"] },
      { nombre: "Farmacología I", prerrequisitos: ["Anatomía Patológica"] },
      { nombre: "Genética", prerrequisitos: ["Medicina I (Semiología)"] }
    ]},
    { nombre: "Noveno Semestre", materias: [
      { nombre: "Pediatría I", prerrequisitos: ["Puericultura","Farmacología I"] },
      { nombre: "Medicina II", prerrequisitos: ["Medicina I (Semiología)","Fisiopatología"] },
      { nombre: "Farmacología II", prerrequisitos: ["Farmacología I"] },
      { nombre: "Psicopatología", prerrequisitos: ["Psicología Médica"] },
      { nombre: "Electiva", prerrequisitos: [], electiva: true }
    ]},
    { nombre: "Décimo Semestre", materias: [
      { nombre: "Medicina III", prerrequisitos: ["Medicina II","Pediatría I"] },
      { nombre: "Cirugía II", prerrequisitos: ["Cirugía I"] },
      { nombre: "Ginecología y Obstetricia II", prerrequisitos: ["Ginecología y Obstetricia I"] },
      { nombre: "Deontología Médica", prerrequisitos: [] },
      { nombre: "Epidemiología Especial", prerrequisitos: [] }
    ]},
    { nombre: "Décimo Primer Semestre", materias: [
      { nombre: "Medicina IV", prerrequisitos: ["Medicina III"] },
      { nombre: "Pediatría II", prerrequisitos: ["Pediatría I"] },
      { nombre: "Imagenología", prerrequisitos: [] },
      { nombre: "Administración Médica", prerrequisitos: [] },
      { nombre: "Medicina Legal", prerrequisitos: [] },
      { nombre: "Electiva", prerrequisitos: [], electiva: true }
    ]},
    { nombre: "Décimo Segundo Semestre", materias: [
      { nombre: "Psiquiatría Clínica", prerrequisitos: ["Medicina IV"] },
      { nombre: "Medicina V", prerrequisitos: ["Medicina IV"] },
      { nombre: "Cirugía III", prerrequisitos: ["Cirugía II"] },
      { nombre: "Medicina del Trabajo", prerrequisitos: [] },
      { nombre: "Historia de la Medicina", prerrequisitos: [] }
    ]},
    { nombre: "Internado Rotatorio", materias: [
      { nombre: "Medicina VI", prerrequisitos: ["Medicina V"] },
      { nombre: "Pediatría III", prerrequisitos: ["Pediatría II"] },
      { nombre: "Higiene Mental y Psicoterapia", prerrequisitos: [] },
      { nombre: "Trabajo de Grado", prerrequisitos: [] },
      { nombre: "Cirugía IV", prerrequisitos: ["Cirugía III"] },
      { nombre: "Ginecología y Obstetricia III", prerrequisitos: ["Ginecología y Obstetricia II"] },
      { nombre: "Pasantía Rural", prerrequisitos: [] }
    ]},
    { nombre: "Electivas Socio-Humanísticas", materias: [
      { nombre: "Ética", prerrequisitos: [], electiva: true },
      { nombre: "Historia de la Cultura", prerrequisitos: [], electiva: true },
      { nombre: "Sexología Básica", prerrequisitos: [], electiva: true },
      { nombre: "Visión Filosófica de la Ciencia", prerrequisitos: [], electiva: true },
      { nombre: "Expresión Escrita", prerrequisitos: [], electiva: true },
      { nombre: "Dinámica de Grupos", prerrequisitos: [], electiva: true },
      { nombre: "Introducción a la Literatura Contemporánea", prerrequisitos: [], electiva: true },
      { nombre: "Sociología Urbana", prerrequisitos: [], electiva: true },
      { nombre: "Dirección de Reuniones", prerrequisitos: [], electiva: true },
      { nombre: "Educación Ambiental", prerrequisitos: [], electiva: true },
      { nombre: "Actualización Lingüística", prerrequisitos: [], electiva: true },
      { nombre: "Yoga", prerrequisitos: [], electiva: true }
    ]},
    { nombre: "Electivas Profesionales", materias: [
      { nombre: "Metodología de la Investigación I", prerrequisitos: [], electiva: true },
      { nombre: "Metodología de la Investigación II", prerrequisitos: [], electiva: true },
      { nombre: "Medicina Familiar y Comunitaria I", prerrequisitos: [], electiva: true },
      { nombre: "Medicina Familiar y Comunitaria II", prerrequisitos: [], electiva: true },
      { nombre: "Salud Relación Hombre-Ambiente", prerrequisitos: [], electiva: true },
      { nombre: "Dietética Clínica", prerrequisitos: [], electiva: true },
      { nombre: "Seguridad Alimentaria", prerrequisitos: [], electiva: true },
      { nombre: "Vigilancia Epidemiológica", prerrequisitos: [], electiva: true },
      { nombre: "Higiene del Trabajo", prerrequisitos: [], electiva: true },
      { nombre: "Embriología Avanzada", prerrequisitos: [], electiva: true },
      { nombre: "Sexología Médica", prerrequisitos: [], electiva: true }
    ]}
  ];
  
  // Guardar y cargar progreso
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
  
