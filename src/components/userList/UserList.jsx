import React, { useState } from 'react';
import './styles.css';

export const UserList = ({ users = [], onUserAdded }) => {
  const [search, setSearch] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "" // Agregar campo de contraseña
  });

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // Enviar datos al backend para crear un usuario
  const handleCreateUser = async () => {
    if (!newUser.name || !newUser.last_name || !newUser.email || !newUser.password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await fetch("http://18.220.73.186/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      });

      if (response.ok) {
        const createdUser = await response.json();
        alert("Usuario creado exitosamente!");
        setNewUser({ name: "", last_name: "", email: "", password: "" }); // Limpiar formulario
        onUserAdded(createdUser); // Actualizar lista de usuarios
      } else {
        alert("Error al crear el usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  // Filtrar usuarios por búsqueda
  const filteredUsers = users.filter(usuario =>
    usuario.name.toLowerCase().includes(search.toLowerCase()) ||
    usuario.lastname.toLowerCase().includes(search.toLowerCase()) ||
    usuario.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar usuario..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Formulario para crear usuario */}
      <div className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Apellido"
          value={newUser.lastname}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <input
          type="password" // Campo de contraseña
          name="password"
          placeholder="Contraseña"
          value={newUser.password}
          onChange={handleInputChange}
        />
        <button onClick={handleCreateUser} className="create-button">Crear Usuario</button>
      </div>

      {/* Tabla de usuarios */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.name}</td>
                <td>{usuario.last_name}</td>
                <td>{usuario.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay usuarios encontrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
