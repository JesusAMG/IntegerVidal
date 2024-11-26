'use client';

import { useState } from 'react';

export default function MisPublicaciones() {
  // Datos de ejemplo, estos vendrán dinámicamente desde Firebase
  const casasPublicadas = [
    {
      id: 1,
      imagen: "https://via.placeholder.com/600x400",
      titulo: "Casa en la playa",
      ubicacion: "Ciudad, Barrio",
      precio: "$1200 por mes",
      descripcion: "Hermosa casa frente al mar.",
    },
    {
      id: 2,
      imagen: "https://via.placeholder.com/600x400",
      titulo: "Casa de campo",
      ubicacion: "Ciudad, Campo",
      precio: "$1500 por mes",
      descripcion: "Casa rural con amplios jardines.",
    },
    {
      id: 3,
      imagen: "https://via.placeholder.com/600x400",
      titulo: "Departamento céntrico",
      ubicacion: "Ciudad, Centro",
      precio: "$1800 por mes",
      descripcion: "Departamento moderno en el centro de la ciudad.",
    },
  ];

  // Estado para manejar las publicaciones
  const [publicaciones, setPublicaciones] = useState(casasPublicadas);

  // Función para eliminar una publicación
  const eliminarCasa = (id) => {
    setPublicaciones(publicaciones.filter(casa => casa.id !== id));
  };

  // Función para editar una publicación (simple ejemplo)
  const editarCasa = (id) => {
    alert(`Editar casa con ID: ${id}`);
    // Aquí iría el código para redirigir a un formulario de edición o mostrar un modal.
  };

  return (
    <div className="min-h-screen bg-[#F2F1E6] p-8">
      <h1 className="text-4xl font-bold text-black mb-8">Mis Publicaciones</h1>

      {/* Contenedor de las casas publicadas por el usuario */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {publicaciones.map((casa) => (
          <div key={casa.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={casa.imagen}
              alt={casa.titulo}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-black">{casa.titulo}</h3>
            <p className="text-[#54615A]">{casa.ubicacion}</p>
            <p className="text-black font-bold">{casa.precio}</p>
            <p className="text-[#54615A]">{casa.descripcion}</p>

            {/* Botones para editar y eliminar */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => editarCasa(casa.id)}
                className="bg-[#54615A] text-white py-2 px-4 rounded-lg hover:bg-[#3e4741]"
              >
                Editar
              </button>
              <button
                onClick={() => eliminarCasa(casa.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}