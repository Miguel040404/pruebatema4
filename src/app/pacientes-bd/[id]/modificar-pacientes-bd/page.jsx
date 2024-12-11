import connection from "@/lib/mysql";
import { redirect } from "next/navigation";

async function modificarMedicos(formData) {
    'use server'
    const id = formData.get('id');
    const nombre = formData.get('nombre');
    const especialidad = formData.get('especialidad');
    const perfil = formData.get('perfil');

    await connection.query('UPDATE medicos SET nombre = ?, especialidad = ?, perfil = ? WHERE id = ?',
        [nombre, especialidad, perfil, id])

    redirect(`/medicos-bd/${id}`);
}

async function PaginaModificar({ params }) {

    const { id } = await params;
    const [rows] = await connection.query('SELECT * FROM medicos WHERE id = ?', [id]);
    const medicos = rows[0];

    return (
        <>
            <form action={modificarMedicos}>
                <input type="hidden" name="id" value={medicos.id} />
                <input type="text" name="nombre" defaultValue={medicos.nombre} />
                <input type="text" name="especialidad" defaultValue={medicos.especialidad} />
                <input type="text" name="perfil" defaultValue={medicos.perfil} />
                <button >Modificar</button>

            </form>

        </>
    );
}

export default PaginaModificar;