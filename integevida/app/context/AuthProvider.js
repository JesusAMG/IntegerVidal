import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig'; // Ajusta la ruta de importación según sea necesario

// Crear el contexto con un valor por defecto
const AuthContext = createContext({
  user: null,
  loading: true
});

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth, 
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }, 
      (error) => {
        console.error('Authentication error:', error);
        setLoading(false);
      }
    );

    // Limpiar suscripción al desmontar
    return () => unsubscribe();
  }, []);

  // Valor del contexto
  const value = { user, loading };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  // Agregar una verificación adicional
  if (context === undefined) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  
  return context;
};