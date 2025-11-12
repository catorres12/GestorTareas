let tareasPendientes = [];
let tareasRealizadas = [];

function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(
            "Gestor de Tareas\n\n" +
            "1. Agregar tarea\n" +
            "2. Ver tareas\n" +
            "3. Eliminar tarea\n" +
            "4. Editar tarea\n" +
            "5. Marcar tarea como realizada\n" +
            "6. Ver contadores\n" +
            "7. Salir\n\n" +
            "Elige una opción:"
        );

        switch (opcion) {
            case "1":
                agregarTarea();
                break;
            case "2":
                verTareas();
                break;
            case "3":
                eliminarTarea();
                break;
            case "4":
                editarTarea();
                break;
            case "5":
                marcarComoRealizada();
                break;
            case "6":
                mostrarContadores();
                break;
            case "7":
                alert("¡Hasta luego!");
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    } while (opcion !== "7");
}

function agregarTarea() {
    let nuevaTarea = prompt("Escribe la nueva tarea:");
    if (nuevaTarea && nuevaTarea.trim() !== "") {
        tareasPendientes.push(nuevaTarea.trim());
        alert("Tarea agregada correctamente.");
    } else {
        alert("No se agregó ninguna tarea.");
    }
}

function verTareas() {
    let lista = "Tareas Pendientes:\n";
    if (tareasPendientes.length === 0) {
        lista += "No hay tareas pendientes.\n";
    } else {
        for (let i = 0; i < tareasPendientes.length; i++) {
            lista += `${i + 1}. ${tareasPendientes[i]}\n`;
        }
    }

    lista += "\nTareas Realizadas:\n";
    if (tareasRealizadas.length === 0) {
        lista += "No hay tareas realizadas.";
    } else {
        for (let i = 0; i < tareasRealizadas.length; i++) {
            lista += `${i + 1}. ${tareasRealizadas[i]}\n`;
        }
    }

    alert(lista);
}

function eliminarTarea() {
    verTareas();
    let indice = prompt("Escribe el número de la tarea pendiente que deseas eliminar:");
    let numero = parseInt(indice);

    if (!isNaN(numero) && numero >= 1 && numero <= tareasPendientes.length) {
        let confirmar = confirm(`¿Seguro que quieres eliminar la tarea: "${tareasPendientes[numero - 1]}"?`);
        if (confirmar) {
            tareasPendientes.splice(numero - 1, 1);
            alert("Tarea eliminada.");
        } else {
            alert("Operación cancelada.");
        }
    } else {
        alert("Número inválido.");
    }
}

function editarTarea() {
    verTareas();
    let indice = prompt("Escribe el número de la tarea pendiente que deseas editar:");
    let numero = parseInt(indice);

    if (!isNaN(numero) && numero >= 1 && numero <= tareasPendientes.length) {
        let nuevaTarea = prompt(`Edita la tarea: "${tareasPendientes[numero - 1]}"`);
        if (nuevaTarea && nuevaTarea.trim() !== "") {
            tareasPendientes[numero - 1] = nuevaTarea.trim();
            alert("Tarea editada correctamente.");
        } else {
            alert("No se realizó ningún cambio.");
        }
    } else {
        alert("Número inválido.");
    }
}

function marcarComoRealizada() {
    verTareas();
    let indice = prompt("Escribe el número de la tarea pendiente que deseas marcar como realizada:");
    let numero = parseInt(indice);

    if (!isNaN(numero) && numero >= 1 && numero <= tareasPendientes.length) {
        let tarea = tareasPendientes.splice(numero - 1, 1)[0];
        tareasRealizadas.push(tarea);
        alert(`Tarea "${tarea}" marcada como realizada.`);
    } else {
        alert("Número inválido.");
    }
}

function mostrarContadores() {
    alert(`Tareas pendientes: ${tareasPendientes.length}\nTareas realizadas: ${tareasRealizadas.length}`);
}

// Iniciar el programa
mostrarMenu();

