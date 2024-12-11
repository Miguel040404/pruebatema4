import { redirect } from "next/navigation";

async function modificarPacientes(formData) {
    'use server';
    const id = formData.get('id');
    const nombre = formData.get('nombre');
    const localidad = formData.get('localidad');
    const fecha_nacimiento = formData.get('fecha_nacimiento');

    const response = await fetch(`http://localhost:4000/pacientes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, localidad, fecha_nacimiento }),
    });

    if (!response.ok) {
        throw new Error('Error al modificar el pacientes');
    }

    redirect(`/pacientes-api/${id}`);
}

async function obtenerPacientes(id) {
    const response = await fetch(`http://localhost:4000/pacientes/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener los datos del pacientes');
    }
    return response.json();
}

async function PaginaModificar({ params }) {
    const { id } = params;
    const pacientes = await obtenerPacientes(id);

    return (
        <>
            <form action={modificarPacientes}>
                <input type="hidden" name="id" defaultValue={pacientes.id} />
                <input type="text" name="nombre" defaultValue={pacientes.nombre} />
                <input type="text" name="localidad" defaultValue={pacientes.localidad} />
                <input
                    type="date"
                    name="fecha_nacimiento"
                    defaultValue={new Date(pacientes.fecha_nacimiento).toISOString().split('T')[0]}
                />
                <button>Modificar</button>
            </form>
        </>
    );
}

export default PaginaModificar;
