import { Link } from "react-router-dom";
import { useState } from "react";
import FormularioAgregarLibro from "./FormularioAgregarLibro";

const ListaLibros = ({libros}) => {
    const [categoria, setCategoria] = useState("");

    const [ListaLibros, setListaLibros] = useState(libros);

    const agregarLibro = (nuevoLibro) => {
        setListaLibros([...ListaLibros, nuevoLibro]);
    };

    const librosFiltrados = ListaLibros.filter(
        (libro) => libro.categoria === categoria || !categoria);



    return (
        <>
        <h1>Formulario Nuevo Libro</h1>
        <FormularioAgregarLibro agregarLibro={agregarLibro} />
        <h1>Mini Carálogo de Libros</h1>
        <label>Categoría:</label>
    <select onChange={(e) => setCategoria(e.target.value)}>
        <option key={0} value="">Todos</option>
        <option key={1} value="Clásico">Clásico</option>
        <option key={2} value="Distopía">Distopía</option>

    </select>


        <div className="book-grid">
            {
                librosFiltrados.map(libro=>(
                    <div key={libro.id} className="book-card">
                        <div className="book-title">{libro.titulo}</div>
                        <div>{libro.descripcion}</div>
                        <div>{libro.autor}</div>
                        <div>{libro.categoria}</div><br></br>
                        <Link to={`/libro/${libro.id}`}>Ver más</Link>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default ListaLibros;