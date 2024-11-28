'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="min-h-screen bg-[#F2F1E6] flex flex-col font-serif">
      <header className="w-full bg-[#54615A] text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/Imagenes/logo.png" alt="Logo" width={60} height={60} />
          <h1 className="text-2xl font-bold">Inicio</h1>
        </div>
        <nav className="flex gap-8">
          <Link href="/buscar" className="hover:text-gray-300 text-lg">Buscar Casa</Link>
          <Link href="/publicar" className="hover:text-gray-300 text-lg">Publicar</Link>
          <Link href="/mispublicaciones" className="hover:text-gray-300 text-lg">Ver publicaciones</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Image src="/Imagenes/logoLogin.png" alt="Usuario" width={30} height={30} />
          <span className="text-lg">Hola, {}</span>
        </div>
      </header>

      <main className="flex flex-col gap-12 items-center p-8 w-full max-w-7xl mx-auto">
        {/* Tu contenido existente */}
        <section className="relative w-full rounded-lg overflow-hidden">
          <Image
            src="/Imagenes/FondoInicio.png"
            alt="Fondo de inicio"
            width={1200}
            height={500}
            className="object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-serif font-bold">Alquiler de casas en línea</h1>
            <p className="mt-4 font-serif text-xl">Encuentra tu hogar ideal, alquila con facilidad.</p>
            <div className="flex gap-4 mt-6">
              <Link href="/buscar">
                <button className="bg-[#96AB96] text-white py-3 px-6 rounded-lg hover:bg-[#7a8e7a] font-serif text-lg">
                  Encuentra tu casa
                </button>
              </Link>
              <Link href="/publicar">
                <button className="bg-[#54615A] text-white py-3 px-6 rounded-lg hover:bg-[#3e4741] font-serif text-lg">
                  Publica tu propiedad
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#F2F1E6] p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-serif text-[#54615A] font-bold mb-8">Registra tu casa para alquilar</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col items-center text-center">
              <span className="text-[#54615A] font-bold text-2xl bg-[#F2F1E6] px-4 py-2 rounded-full border-2 border-[#54615A]">
                1
              </span>
              <p className="text-[#54615A] font-serif mt-4 text-xl font-semibold">Crea un perfil</p>
              <p className="text-sm text-gray-700 mt-2">Proporciona información básica sobre ti y tu propiedad.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[#54615A] font-bold text-2xl bg-[#F2F1E6] px-4 py-2 rounded-full border-2 border-[#54615A]">
                2
              </span>
              <p className="text-[#54615A] font-serif mt-4 text-xl font-semibold">Agrega fotos</p>
              <p className="text-sm text-gray-700 mt-2">Sube fotos de tu casa para atraer a los inquilinos.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[#54615A] font-bold text-2xl bg-[#F2F1E6] px-4 py-2 rounded-full border-2 border-[#54615A]">
                3
              </span>
              <p className="text-[#54615A] font-serif mt-4 text-xl font-semibold">Establece el precio</p>
              <p className="text-sm text-gray-700 mt-2">Define un precio competitivo para tu propiedad.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[#54615A] font-bold text-2xl bg-[#F2F1E6] px-4 py-2 rounded-full border-2 border-[#54615A]">
                4
              </span>
              <p className="text-[#54615A] font-serif mt-4 text-xl font-semibold">Establece las reglas</p>
              <p className="text-sm text-gray-700 mt-2">Define las reglas de la casa y las políticas de arrendamiento.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}