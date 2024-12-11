import Link from "next/link";
import connection from "@/lib/mysql";
import { revalidatePath } from "next/cache";


async function eliminarPacientes(formData) {
    'use server'
    const id = formData.get('id')

    await connection.query('DELETE FROM pacientes WHERE id = ?', [id])
}

async function insertarPaciente(formData) {
    'use server'
    const nombre = formData.get('nombre')
    const localidad = formData.get('localidad')
    const fecha_nacimiento = formData.get('fecha_nacimiento')

    await connection.query('INSERT INTO pacientes (nombre, localidad, fecha_nacimiento) VALUES (?, ?, ?)',
        [nombre, localidad, fecha_nacimiento])
    revalidatePath('/pacientes-bd')
}

async function PaginaPacientes(params) {

    const [rows] = await connection.query('SELECT * FROM pacientes');

    return (

        <>  Lista de Pacientes

            <form action={insertarPaciente}>
                <input type="text" name="nombre" />
                <input type="text" name="localidad" />
                <input type="date" name="fecha_nacimiento" />
                <button className="text-blue-500">Insertar</button>
            </form>

            <div>
                {

                    rows.map(pacientes =>
                        <div key={pacientes.id}>
                            <Link href={`/pacientes-bd/${pacientes.id}`}>{pacientes.nombre}</Link>
                            <Link className="text-green-500" href={`/pacientes-bd/${pacientes.id}/modificar-pacientes-bd`}> Modificar</Link>
                            <form action={eliminarPacientes}>
                                <input type="hidden" name="id" value={pacientes.id} />
                                <button className="text-red-500">Eliminar</button>
                            </form>
                        </div>
                    )
                }
            </div>
        </>
    );

}
export default PaginaPacientes;