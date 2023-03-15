import { Link } from "react-router-dom"
export const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link navbar-brand brand-logo" to={'/'}>
                    <img src='https://firebasestorage.googleapis.com/v0/b/coderhouse-jano.appspot.com/o/favicon.ico?alt=media&token=e19facda-cffa-4410-9bfa-3662a3f1c928' alt="Logo Jano Sustentable" width="40" height="40" className="d-inline-block" /> Jano Sustentable
                </Link>
            </li>
        </>
    );
};
