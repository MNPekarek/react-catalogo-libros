import { Link } from "react-router-dom";

const Menu = () => (
    <nav>
        <Link to={"/"}>Catálogo de Libros</Link>
        <Link to={"/acerca-de"}>Acerca de</Link>
    </nav>
);

export default Menu;