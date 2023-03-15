import { Link } from "react-router-dom"


export const Categorias = (props) => {

    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <button className="btn">Conocenos</button>
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Sobre Nosotros</a></li>
                    <li><a className="dropdown-item" href="#">Consejos Sustentables</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Se parte de Jano Sustentable</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <button className="btn">Catálogo</button>
                </a>
                <ul className="dropdown-menu">
                    {
                        props.CategoriasProductos.map((categoria) => {
                            return <li key={categoria.NumeroCategoria}><Link className="dropdown-item" id="textos__navbar" to={`/category/${categoria.nombreCat}`}>{categoria.nombreCat}</Link></li>
                        })
                    }
                </ul>
            </li>
        </>
    )
}