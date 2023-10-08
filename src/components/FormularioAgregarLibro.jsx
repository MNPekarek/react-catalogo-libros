import { useForm } from "react-hook-form";

const FormularioAgregarLibro = ({agregarLibro}) => {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        agregarLibro(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="titulo">Título</label>
                <input 
                id="titulo"
                name="titulo"
                {... register("titulo", { required: "Este campo es requerido"})}
                />
                {errors.titulo && <span>errors.titulo.message</span>}
            </div>
            <div>
                <label htmlFor="autor">Autor</label>
                <input 
                id="autor"
                name="autor"
                {... register("autor", { required: "Este campo es requerido"})}
                />
                {errors.autor && <span>errors.autor.message</span>}
            </div>
            <div>
                <label htmlFor="categoria">Categoria</label>
                <input 
                id="categoria"
                name="categoria"
                {... register("categoria", { required: "Este campo es requerido"})}
                />
                {errors.categoria && <span>errors.categoria.message</span>}
            </div>
            <button type="submit">Agregar Libro</button>

        </form>
    );
};

export default FormularioAgregarLibro;