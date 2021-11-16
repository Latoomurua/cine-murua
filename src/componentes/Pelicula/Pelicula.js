import './Pelicula.css'
import { useState } from 'react';

const Pelicula = ({title, price, image, description}) => {

    const [valoraciones, setValoraciones] = useState(0);
    const [mostrar, setMostrar] = useState(true)

    const increment = () => {
        setValoraciones(valoraciones+1);
    }

    const mostrarDetalles = () => {
        setMostrar(!mostrar)
    }

    return (
        <div className='pelicula-container'>
            <div className='pelicula-portada'>
                <h1>{title}</h1>
                <img src={image} alt={title} />
            </div>
            <div className='pelicula-info'>
                <button onClick={mostrarDetalles}>
                Ver/Ocultar detalles
                </button>
                {
                mostrar &&
                <>
                <p>{description}</p>
                </>
                }
            </div>
            <div className='pelicula-valoracion'>
                <p>{valoraciones} Estrellas <button onClick={increment}>Valorar</button></p>
            </div>
            <div className='pelicula-price'>
                <h3>{price}</h3>
            </div>

            <hr />
        </div>
    )
}

export default Pelicula