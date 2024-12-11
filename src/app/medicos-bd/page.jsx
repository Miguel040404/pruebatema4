import Link from "next/link";
import connection from "../lib/mysql";






async function PaginaMedicos(params) {
    
    const [rows] = await connection.query ('SELECT * FROM medicos');

    return (

      <div>  Medicos

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
    );

}
export default PaginaMedicos;