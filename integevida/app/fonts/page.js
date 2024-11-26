'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function CrearCuenta() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F2F1E6]">
      {/* Header */}
      <header className="w-full bg-[#54615A] text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/Imagenes/logo.png" alt="Logo" width={60} height={60} />
          <h1 className="text-2xl font-semibold font-serif">Crear Cuenta</h1>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8 w-full max-w-7xl bg-[#D3D2BB] rounded-lg shadow-md">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h1 className="text-3xl font-bold text-[#54615A] font-serif">
            House & Rental
          </h1>
          <p className="mt-2 text-[#54615A] font-serif">
            Encuentra tu hogar ideal, alquila con facilidad.
          </p>
          <Image
            src="/Imagenes/FondoFinalLogin.png"
            alt="Casa"
            width={600}
            height={400}
            className="mt-4 rounded-lg"
          />
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-1/2 bg-[#F2F1E6] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#54615A] font-serif text-center mb-6">
            Registro de Usuario
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-[#54615A] font-medium font-serif">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#96AB96] text-[#54615A]"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
            {/* Apellido */}
            <div>
              <label htmlFor="apellido" className="block text-[#54615A] font-medium font-serif">
                Apellido
              </label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                value={formData.apellido}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#96AB96] text-[#54615A]"
                placeholder="Ingresa tu apellido"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[#54615A] font-medium font-serif">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#96AB96] text-[#54615A]"
                placeholder="Ingresa tu correo"
                required
              />
            </div>
            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-[#54615A] font-medium font-serif">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#96AB96] text-[#54615A]"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-[#54615A] font-medium font-serif">
                Confirmar Contraseña
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#96AB96] text-[#54615A]"
                placeholder="Confirma tu contraseña"
                required
              />
            </div>
            {/* Buttons */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#54615A] text-white py-2 px-6 rounded-lg hover:bg-[#3e4741] font-serif"
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}