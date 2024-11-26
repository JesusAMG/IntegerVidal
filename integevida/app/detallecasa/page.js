'use client';

export default function DetallesCasa() {
  const casa = {
    imagenes: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
    ],
    titulo: "Casa en la playa",
    descripcion: "Hermosa casa frente al mar, perfecta para vacaciones.",
    precio: "$1200 por mes",
    ubicacion: { lat: 19.432608, lng: -99.133209 },
    habitaciones: 3,
    baños: 2,
    tamaño: "150 m²",
  };

  return (
    <div className="min-h-screen bg-[#F2F1E6] p-8">
      <h1 className="text-4xl font-bold text-black mb-8">Detalles de la Casa</h1>

      <div className="flex flex-wrap justify-center mb-8">
        {casa.imagenes.map((imagen, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <img
              src={imagen}
              alt={`Imagen ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-black">{casa.titulo}</h2>
        <p className="text-[#54615A]">{casa.descripcion}</p>
        <p className="text-black font-bold mt-4">{casa.precio}</p>
        <p className="mt-2 text-[#54615A]">Habitaciones: {casa.habitaciones}</p>
        <p className="mt-2 text-[#54615A]">Baños: {casa.baños}</p>
        <p className="mt-2 text-[#54615A]">Tamaño: {casa.tamaño}</p>
      </div>

      <div className="w-full h-96 mb-8">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${casa.ubicacion.lat},${casa.ubicacion.lng}`}
        ></iframe>
      </div>

      <div className="text-center">
        <button className="bg-[#54615A] text-white py-2 px-4 rounded-lg hover:bg-[#3e4741]">
          Regresar a las publicaciones
        </button>
      </div>
    </div>
  );
}