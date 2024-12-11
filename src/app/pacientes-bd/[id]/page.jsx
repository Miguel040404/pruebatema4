import connection from "@/lib/mysql";

async function PaginaPacientes({params}) {
    
const { id } = await params;
const [rows] = await connection.query('SELECT * FROM pacientes WHERE id = ?', [id]); 
    
    const pacientes = rows[0];

    return ( 
        <div>
            <p>{pacientes.nombre}</p>
            <p>{pacientes.localidad}</p>
            <p>{pacientes.perfil.fecha_nacimiento.toLocaleDateString()}</p>
        </div>
     );
}

export default PaginaPacientes;