async function obtenerMedicos(id) {
    const response = await fetch(`http://localhost:4000/medicos/${id}`);
    if (!response.ok) {
        throw new Error(`Error al obtener los datos del medicos con id ${id}`);
    }
    return response.json();
}

async function PaginaMedicos({ params }) {
    const { id } = params;
    
    // Llama a la API externa para obtener los datos del medicos
    const medicos = await obtenerMedicos(id);

    return (
        <div>
            <p>{medicos.nombre}</p>
            <p>{medicos.especialidad}</p>
            <p>{medicos.perfil}</p>
        </div>
    );
}

export default PaginaMedicos;
