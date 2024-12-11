import Link from "next/link";
import connection from "../lib/mysql";
import { revalidatePath } from "next/cache";


async function eliminarMedicos(formData) {
    'use server'
const id = formData.get('id')

await connection.query('DELETE FROM medicos WHERE id = ?', [id])
}

async function insertarAlumno(formData) {
    'use server'
    const nombre = formData.get('nombre')
    const especialidad = formData.get('especialidad')
    const perfil = formData.get('perfil')

    await connection.query('INSERT INTO medicos (nombre, especialidad, perfil) VALUES (?, ?, ?)',
        [nombre, especialidad, perfil])
        revalidatePath('/medicos-bd')
}

async function PaginaMedicos(params) {
    
    const [rows] = await connection.query ('SELECT * FROM medicos');

    return (

      <>  Medicos

        <form action={insertarAlumno}>
            <input type="text" name="nombre" />
            <input type="text" name="especialidad" />
            <input type="text" name="perfil" />
            <button>Insertar</button>
        </form>

<div>
        {

            rows.map(medicos=>
                <div key={medicos.id}>
                    <Link href={`/medicos-bd/${medicos.id}`}>{medicos.nombre}</Link>
                    <Link className="text-green-500" href={`/medicos-bd/${medicos.id}/modificar-medicos-bd`}>Modificar</Link>
                    <form action={eliminarMedicos}>
                        <input type="hidden" name="id" value={medicos.id} />
                        <button className="text-red-500">Eliminar</button>
                    </form>
                </div>
            )
        }
</div>
      </>
    );

}
export default PaginaMedicos;