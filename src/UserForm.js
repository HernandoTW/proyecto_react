// UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ fetchUsuarios }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { nombre, apellido, correo, telefono, contraseña };

    try {
      await axios.post('http://127.0.0.1:8000/api/usuarios', userData);
      resetForm();
      if (fetchUsuarios) fetchUsuarios();
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };

  const resetForm = () => {
    setNombre('');
    setApellido('');
    setCorreo('');
    setTelefono('');
    setContraseña('');
  };

  return (
    <div>
      <h2>Crear Nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default UserForm;
