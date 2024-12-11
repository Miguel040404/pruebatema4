import connection from "@/lib/mysql";
import { redirect } from "next/navigation";

async function modificarProfesor(formData) {
    'use server'
    const id = formData.get('id');
    const nombre = formData.get('nombre');
    const especialidad = formData.get('especialidad');
    const estado_civil = formData.get('estado_civil');

    await connection.query('UPDATE profesores SET nombre = ?, especialidad = ?, estado_civil = ? WHERE id = ?',
        [nombre, especialidad, estado_civil, id])

    redirect(`/profesores-bd/${id}`);
}

async function PaginaModificar({ params }) {

    const { id } = await params;
    const [rows] = await connection.query('SELECT * FROM profesores WHERE id = ?', [id]);
    const profesor = rows[0];

    return (
        <>
            <form action={modificarProfesor}>
                <input type="hidden" name="id" value={profesor.id} />
                <input type="text" name="nombre" defaultValue={profesor.nombre} />
                <input type="text" name="especialidad" defaultValue={profesor.especialidad} />
                <input type="text" name="estado_civil" defaultValue={profesor.estado_civil} />
                <button >Modificar</button>

            </form>

        </>
    );
}

export default PaginaModificar;