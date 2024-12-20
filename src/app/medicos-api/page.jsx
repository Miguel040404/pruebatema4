'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

async function eliminarMedicos(formData) {
    const id = formData.get('id');
    const response = await fetch(`http://localhost:4000/medicos/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Error al eliminar el medicos');
    }
}

async function insertarMedicos(formData) {
    const nombre = formData.get('nombre');
    const especialidad = formData.get('especialidad');
    const perfil = formData.get('perfil');

    const response = await fetch('http://localhost:4000/medicos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, especialidad, perfil }),
    });

    if (!response.ok) {
        throw new Error('Error al insertar el medicos');
    }
}

async function obtenerMedicos() {
    const response = await fetch('http://localhost:4000/medicos');
    if (!response.ok) {
        throw new Error('Error al obtener los medicos');
    }
    return response.json();
}

function PaginaMedicos() {
    const [medicos, setMedicos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        obtenerMedicos()
            .then(data => {
                setMedicos(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    if (loading) return <p>Cargando medicos...</p>;

    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                try {
                    await insertarMedicos(formData);
                    setMedicos(await obtenerMedicos());
                } catch (error) {
                    console.error(error);
                }
            }}>
                <input type="text" name="nombre" placeholder="Nombre" required />
                <input type="text" name="especialidad" placeholder="Especialidad" required />
                <input type="text" name="perfil" placeholder="Perfil" required />
                <button className="text-blue-500">Insertar</button>
            </form>

            <div>
                <h3>Lista de medicos</h3>
                {
                    medicos.map(medicos => (
                        <div key={medicos.id}>
                            <Link href={`/medicos-api/${medicos.id}`}> {medicos.nombre}</Link>
                            <Link className="text-green-500" href={`/medicos-api/${medicos.id}/modificar-medicos-api`}> Modificar</Link>

                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                try {
                                    await eliminarMedicos(formData);
                                    setMedicos(await obtenerMedicos());
                                } catch (error) {
                                    console.error(error);
                                }
                            }}>
                                <input type="hidden" name="id" value={medicos.id} />
                                <button className="text-red-500">Eliminar</button>
                            </form>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default PaginaMedicos;
