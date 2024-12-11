import connection from "@/lib/mysql";
import { revalidatePath } from "next/cache";
import Link from "next/link";

async function eliminarProfesor(formData) {
'use server'
const id = formData.get('id');

await connection.query('DELETE FROM profesores WHERE id = ?', [id]);
}

async function insertarProfesor(formData) {
    'use server'
    const nombre = formData.get('nombre');
    const especialidad = formData.get('especialidad');
    const estado_civil = formData.get('estado_civil');

    await connection.query('INSERT INTO profesores (nombre, especialidad, estado_civil) VALUES (?, ?, ?)', 
        [nombre, especialidad, estado_civil]);
    revalidatePath('/profesores-bd');
}

async function PaginaProfesores() {

    const [rows] = await connection.query('SELECT * FROM profesores');

    return (

<>
<form action={insertarProfesor}>

    <input type="text" name="nombre"  placeholder="Nombre"/>
    <input type="text" name="especialidad" placeholder="Especialidad"/>
    <input type="text" name="estado_civil"  placeholder="Estado civil"/>
    <button className="text-blue-500" >Insertar</button>
</form>

        <div>
            Lista de profesores
            {
                rows.map(profesor =>
                    <div key={profesor.id}>
                        <Link href={`/profesores-bd');/${profesor.id}`}> {profesor.nombre}</Link>
                        <Link className="text-green-500" href={`/profesores-bd/${profesor.id}/modificar-profesores`}> Modificar</Link>

                        <form action={eliminarProfesor}>
                            <input type="hidden" name="id" value={profesor.id} />
                            < button className= "text-red-500">Eliminar</button>
                        </form>
                    </div>)
            }
        </div>
        </>
    );
}

export default PaginaProfesores;