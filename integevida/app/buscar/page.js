'use client';

import Link from 'next/link';

export default function MostrarCasas() {
  return (
    <div className="min-h-screen bg-[#F2F1E6] flex flex-col items-center font-serif p-8">
      <h1 className="text-4xl font-bold text-black mb-8">Casas Publicadas</h1>

      {/* Contenedor de casas publicadas */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Casa ejemplo */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Casa"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-black">Casa en la playa</h3>
          <p className="text-[#54615A]">Ciudad, Barrio</p>
          <p className="text-black font-bold">$1200 por mes</p>
          <div className="mt-4">
            <Link href="/detallecasa">
              <button className="bg-[#54615A] text-white py-2 px-4 rounded-lg hover:bg-[#3e4741]">
                Ver Detalles
              </button>
            </Link>
          </div>
        </div>

        {/* Otra casa ejemplo */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Casa"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-black">Casa de campo</h3>
          <p className="text-[#54615A]">Ciudad, Barrio</p>
          <p className="text-black font-bold">$1500 por mes</p>
          <div className="mt-4">
            <Link href="/detalles/casa2">
              <button className="bg-[#54615A] text-white py-2 px-4 rounded-lg hover:bg-[#3e4741]">
                Ver Detalles
              </button>
            </Link>
          </div>
        </div>

        {/* Más casas pueden ir aquí */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Casa"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-black">Departamento céntrico</h3>
          <p className="text-[#54615A]">Ciudad, Centro</p>
          <p className="text-black font-bold">$1800 por mes</p>
          <div className="mt-4">
            <Link href="/detalles/casa3">
              <button className="bg-[#54615A] text-white py-2 px-4 rounded-lg hover:bg-[#3e4741]">
                Ver Detalles
              </button>
            </Link>
          </div>
        </div>

        {/* Agregar más casas de manera similar */}
      </div>
    </div>
  );
}