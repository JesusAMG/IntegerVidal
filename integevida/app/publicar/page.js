'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db, auth } from '../utils/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import uploadImagesToCloudinary from '../utils/cloudinaryUpload';


export default function Publicar() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [direccion, setDireccion] = useState('');
  const [precio, setPrecio] = useState('');
  const [habitaciones, setHabitaciones] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!currentUser) {
      alert('Por favor inicia sesión');
      setLoading(false);
      return;
    }

    try {
      if (!direccion || !precio || !habitaciones || imagenes.length === 0) {
        alert('Por favor llena todos los campos y sube al menos una imagen');
        setLoading(false);
        return;
      }

      const uploadedImages = await uploadImagesToCloudinary(imagenes);

      // Asegúrate de pasar el objeto 'db' correctamente
      const docRef = await addDoc(collection(db, 'Propiedades'), {
        direccion,
        precio: Number(precio),
        habitaciones: Number(habitaciones),
        caracteristicas,
        imagenes: uploadedImages,
        id_usuario: currentUser.uid,
        usuario_email: currentUser.email,
        createdAt: new Date()
      });

      alert('Propiedad publicada con éxito');
      router.push('/home');
    } catch (error) {
      console.error('Error al publicar propiedad:', error);
      alert(`Hubo un error al publicar la propiedad: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F2F1E6] flex flex-col items-center font-serif p-8">
      <h1 className="text-4xl font-bold text-black mb-8">Publica tu Casa</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">

        {}
        <div className="mb-6">
          <label htmlFor="direccion" className="block text-black font-medium mb-2">Dirección:</label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54615A] focus:text-[#2C3E50] text-black"
            placeholder="Ejemplo: Calle 123, Ciudad, País"
          />
        </div>

        {}
        <div className="mb-6">
          <label htmlFor="precio" className="block text-black font-medium mb-2">Precio por Mes (en $):</label>
          <input
            type="number"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54615A] focus:text-[#2C3E50] text-black"
            placeholder="Ejemplo: 500"
          />
        </div>

        {}
        <div className="mb-6">
          <label htmlFor="habitaciones" className="block text-black font-medium mb-2">Número de Habitaciones:</label>
          <input
            type="number"
            id="habitaciones"
            value={habitaciones}
            onChange={(e) => setHabitaciones(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54615A] focus:text-[#2C3E50] text-black"
            placeholder="Ejemplo: 3"
          />
        </div>

        {}
        <div className="mb-6">
          <label htmlFor="caracteristicas" className="block text-black font-medium mb-2">Características adicionales:</label>
          <textarea
            id="caracteristicas"
            value={caracteristicas}
            onChange={(e) => setCaracteristicas(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54615A] focus:text-[#2C3E50] text-black"
            placeholder="Ejemplo: Piscina, jardín, estacionamiento..."
            rows="4"
          ></textarea>
        </div>

        {}
        <div className="mb-6">
          <label htmlFor="imagenes" className="block text-black font-medium mb-2">Subir Imágenes:</label>
          <input
            type="file"
            id="imagenes"
            multiple
            onChange={(e) => setImagenes([...e.target.files])}
            className="w-full text-gray-700"
          />
        </div>

        {}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#54615A] text-white py-3 px-6 rounded-lg hover:bg-[#3e4741] font-medium text-lg"
            disabled={loading}
          >
            {loading ? 'Publicando...' : 'Publicar Casa'}
          </button>
        </div>
      </form>
    </div>
  );
}
