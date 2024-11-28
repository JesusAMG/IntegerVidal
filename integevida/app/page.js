"use client";

import Link from "next/link";
import Image from "next/image";
import { AuthProvider } from "./context/AuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          {children}
          <div className="min-h-screen bg-[#F2F1E6] flex flex-col font-serif">
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
              <main className="flex flex-col gap-8 row-start-2 items-center">
                <h1 className="text-2xl font-bold text-center text-[#54615A]">
                  Bienvenido a House Rental
                </h1>

                <Image
                  className="dark:invert"
                  src="/Imagenes/logo.png"
                  alt="Logo de House Rental"
                  width={180}
                  height={38}
                />

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                  <Link
                    href="/login"
                    className="rounded-full bg-[#B7B6A2] text-white hover:bg-[#96AB96] px-4 py-2 transition-colors"
                  >
                    Presione para entrar a el login
                  </Link>
                </div>
              </main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
