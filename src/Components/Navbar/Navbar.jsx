
import { CartWidget } from "../CartWidget/CartWidget"
import { Categorias } from "./Categorias/Categorias"
import { Secciones } from "./Secciones/Secciones"
import { CategoriasProductos } from "../CategoriasProductos/CategoriasProductos"
import { BotonDarkMode } from "./BotonDarkMode/BotonDarkMode"

// //Context
// import { useDarkModeContext } from "../../context/DarkModeContext"
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Secciones />
            <Categorias CategoriasProductos={CategoriasProductos}/>
          </ul>
          <CartWidget/>
          <BotonDarkMode/>
        </div>
      </div>
    </nav>

  )
}