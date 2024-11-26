'use client';

export default function Publicar() {
  return (
    <div className="min-h-screen bg-[#F2F1E6] flex flex-col items-center font-serif p-8">
      <h1 className="text-4xl font-bold text-black mb-8">Publica tu Casa</h1>
      <form className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">

        {/* Dirección */}
        <div className="mb-6">
          <label
            htmlFor="direccion"
            className="block text-black font-medium mb-2"
          >
            Dirección:
          </label>
          <input
            type="text"
            id="direccion"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54615A] focus:text-[#2C3E50] text-black"
            placeholder="Ejemplo: Calle 123, Ciudad, País"
          />
        </div>

        {/* Precio */}
        <div className="mb-6">
          <label
            htmlFor="precio"
            className="block text-black font-medium mb-2"
          >
            Precio por Mes (en $):
          </label>
          <input
            type="number"
            id="precio"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54615A] focus:text-[#2C3E50] text-black"
            placeholder="Ejemplo: 500"
          />
        </div>

        {/* Número de habitaciones */}
        <div className="mb-6">
          <label
            htmlFor="habitaciones"
            className="block text-black font-medium mb-2"
          >
            Número de Habitaciones:
          </label>
          <input
            type="number"
            id="habitaciones"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54615A] focus:text-[#2C3E50] text-black"
            placeholder="Ejemplo: 3"
          />
        </div>

        {/* Características adicionales */}
        <div className="mb-6">
          <label
            htmlFor="caracteristicas"
            className="block text-black font-medium mb-2"
          >
            Características adicionales:
          </label>
          <textarea
            id="caracteristicas"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54615A] focus:text-[#2C3E50] text-black"
            placeholder="Ejemplo: Piscina, jardín, estacionamiento..."
            rows="4"
          ></textarea>
        </div>

        {/* Subir imágenes */}
        <div className="mb-6">
          <label
            htmlFor="imagenes"
            className="block text-black font-medium mb-2"
          >
            Subir Imágenes:
          </label>
          <input
            type="file"
            id="imagenes"
            multiple
            className="w-full text-gray-700"
          />
        </div>

        {/* Botón de enviar */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#54615A] text-white py-3 px-6 rounded-lg hover:bg-[#3e4741] font-medium text-lg"
          >
            Publicar Casa
          </button>
        </div>
      </form>
    </div>
  );
}