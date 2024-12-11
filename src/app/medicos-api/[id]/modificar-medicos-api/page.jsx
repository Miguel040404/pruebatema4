import { redirect } from "next/navigation";

async function modificarMedicos(formData) {
    'use server';
    const id = formData.get('id');
    const nombre = formData.get('nombre');
    const especialidad = formData.get('especialidad');
    const perfil = formData.get('perfil');

    const response = await fetch(`http://localhost:4000/medicos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, especialidad, perfil}),
    });

    if (!response.ok) {
        throw new Error('Error al modificar el medicos');
    }

    redirect(`/medicos-api/${id}`);
}

async function obtenerMedicos(id) {
    const response = await fetch(`http://localhost:4000/medicos/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener los datos del medicos');
    }
    return response.json();
}

async function PaginaModificar({ params }) {
    const { id } = params;
    const medicos = await obtenerMedicos(id);

    return (
        <>
            <form action={modificarMedicos}>
                <input type="hidden" name="id" defaultValue={medicos.id} />
                <input type="text" name="nombre" defaultValue={medicos.nombre} />
                <input type="text" name="especialidad" defaultValue={medicos.especialidad} />
                <input type="text" name="perfil" defaultValue={medicos.perfil} />
                <button>Modificar</button>
            </form>
        </>
    );
}

export default PaginaModificar;
