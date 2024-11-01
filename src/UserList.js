
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/usuarios');
      setUsuarios(response.data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  const deleteUsuario = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/usuarios/${id}`);
      fetchUsuarios();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} {usuario.apellido} - {usuario.correo} - {usuario.telefono}
            <button onClick={() => deleteUsuario(usuario.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
