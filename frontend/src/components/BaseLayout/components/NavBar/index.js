import React from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import './index.css';


const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Inicio</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/register">Registro Libros</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/lautor">Listar Autores</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/autor">Registro Autores</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
