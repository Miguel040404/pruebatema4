import connection from "@/lib/mysql";
import { revalidatePath } from "next/cache";
import Link from "next/link";

async function eliminarMedicos(formData) {
'use server'
const id = formData.get('id');

await connection.query('DELETE FROM medicos WHERE id = ?', [id]);
}

async function insertarMedicos(formData) {
    'use server'
    const nombre = formData.get('nombre');
    const especialidad = formData.get('especialidad');
    const perfil = formData.get('perfil');

    await connection.query('INSERT INTO medicos (nombre, especialidad, perfil) VALUES (?, ?, ?)', 
        [nombre, especialidad, perfil]);
    revalidatePath('/medicos-bd');
}

async function PaginaMedicos() {

    const [rows] = await connection.query('SELECT * FROM medicos');

    return (

<>
<form action={insertarMedicos}>

    <input type="text" name="nombre"  placeholder="Nombre"/>
    <input type="text" name="especialidad" placeholder="Especialidad"/>
    <input type="text" name="perfil"  placeholder="perfil"/>
    <button className="text-blue-500" >Insertar</button>
</form>

        <div>
            Lista de medicos
            {
                rows.map(medicos =>
                    <div key={medicos.id}>
                        <Link href={`/medicos-bd');/${medicos.id}`}> {medicos.nombre}</Link>
                        <Link className="text-green-500" href={`/medicos-bd/${medicos.id}/modificar-medicos`}> Modificar</Link>

                        <form action={eliminarMedicos}>
                            <input type="hidden" name="id" value={medicos.id} />
                            < button className= "text-red-500">Eliminar</button>
                        </form>
                    </div>)
            }
        </div>
        </>
    );
}

export default PaginaMedicos;