import { NavLink } from "react-router"

export const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink to="/" className="nav-link" >Inicio</NavLink>
        <NavLink to="/proyectos" className="nav-link" >Proyectos</NavLink>
        <NavLink to="/contacto" className="nav-link" >Contacto</NavLink>
    </nav>
  )
}
