import './Pelicula.css'
import { useState } from 'react';

const Pelicula = ({title, price, image, description}) => {

    const [valoraciones, setValoraciones] = useState(0);
    const [mostrar, setMostrar] = useState(true)

    const increment = () => {
        if (valoraciones < 5) setValoraciones(valoraciones+1);
    }

    const decrement = () => {
        if (valoraciones >= 1) setValoraciones(valoraciones-1);
    }

    const send = () => {
        console.log(`El usuario valoro la pelicula con una cantidad de estrellas de: ${valoraciones}`)
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
                <p>{valoraciones} Estrellas <button onClick={send}>Enviar valoracion</button></p>
                <button onClick={decrement}>Valorar -</button>
                <button onClick={increment}>Valorar +</button>
            </div>
            <div className='pelicula-price'>
                <h3>{price}</h3>
            </div>

            <hr />
        </div>
    )
}

export default Pelicula