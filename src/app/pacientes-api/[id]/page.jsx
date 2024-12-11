async function obtenerPacientes(id) {
    const response = await fetch(`http://localhost:4000/pacientes/${id}`);
    if (!response.ok) {
        throw new Error(`Error al obtener los datos del pacientes con id ${id}`);
    }
    return response.json();
}

async function PaginaPacientes({ params }) {
    const { id } = params;
    
    // Llama a la API externa para obtener los datos del pacientes
    const pacientes = await obtenerPacientes(id);

    return (
        <div>
            <p>{pacientes.nombre}</p>
            <p>{pacientes.localidad}</p>
            <p>{new Date(pacientes.fecha_nacimiento).toLocaleDateString()}</p>
        </div>
    );
}

export default PaginaPacientes;
