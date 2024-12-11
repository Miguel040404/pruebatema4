import connection from "@/lib/mysql";

async function PaginaProfesor({params}) {
    
const { id } = await params;
const [rows] = await connection.query('SELECT * FROM profesores WHERE id = ?', [id]); 
    
    const profesor = rows[0];

    return ( 
        <div>
            <p>{profesor.nombre}</p>
            <p>{profesor.especialidad}</p>
            <p>{profesor.estado_civil}</p>
        </div>
     );
}

export default PaginaProfesor;