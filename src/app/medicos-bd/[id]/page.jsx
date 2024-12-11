import connection from "@/lib/mysql";

async function Paginamedicos({params}) {
    
const { id } = await params;
const [rows] = await connection.query('SELECT * FROM medicos WHERE id = ?', [id]); 
    
    const medicos = rows[0];

    return ( 
        <div>
            <p>{medicos.nombre}</p>
            <p>{medicos.especialidad}</p>
            <p>{medicos.perfil}</p>
        </div>
     );
}

export default Paginamedicos;