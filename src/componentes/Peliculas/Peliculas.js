import Pelicula from '../Pelicula/Pelicula'

const Peliculas = (props) => {
    return (
        <>
        { props.pelicula.map((pelicula, index) => 
        <Pelicula 
            key={index}
            title={pelicula.title}
            price={pelicula.price}
            image={pelicula.image}
            description={pelicula.description}/> )
        };
        </>
    )
}

export default Peliculas;