// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from './UserList';
import UserForm from './UserForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>Administración de Usuarios</h1>
        <nav>
          <Link to="/usuarios">Ver Lista de Usuarios</Link> |{' '}
          <Link to="/crear-usuario">Crear Nuevo Usuario</Link>
        </nav>

        <Routes>
          <Route path="/usuarios" element={<UserList />} />
          <Route path="/crear-usuario" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
