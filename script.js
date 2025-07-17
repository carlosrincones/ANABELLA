document.addEventListener('DOMContentLoaded', () => {
    const malla = document.getElementById('malla-container');

    // Ejemplo: listado de asignaturas con prerrequisitos
    const asignaturas = [
        { id: 1, nombre: "Matemáticas I", prereqs: [] },
        { id: 2, nombre: "Física I", prereqs: [1] },
        { id: 3, nombre: "Química", prereqs: [] },
        { id: 4, nombre: "Matemáticas II", prereqs: [1] },
        { id: 5, nombre: "Física II", prereqs: [2,4] },
    ];

    // Estado de aprobados almacenado localmente
    let aprobados = JSON.parse(localStorage.getItem('aprobados')) || [];

    // Función para renderizar la malla
    function renderMalla() {
        malla.innerHTML = '';
        asignaturas.forEach(asig => {
            const div = document.createElement('div');
            div.className = 'asignatura';
            // Si todos los prereqs están en aprobados, asignatura desbloqueada
            const desbloqueada = asig.prereqs.every(p => aprobados.includes(p));
            if(desbloqueada) div.classList.add('desbloqueada');

            div.textContent = asig.nombre;
            div.onclick = () => {
                if(desbloqueada) {
                    if(!aprobados.includes(asig.id)) {
                        aprobados.push(asig.id);
                        localStorage.setItem('aprobados', JSON.stringify(aprobados));
                        renderMalla();
                    }
                } else {
                    alert("Debes aprobar los prerrequisitos primero");
                }
            };

            malla.appendChild(div);
        });
    }

    renderMalla();
});

