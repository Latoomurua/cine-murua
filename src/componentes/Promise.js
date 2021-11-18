const products = []

const catalogoPeliculas = (timeout, data) => {
    return new Promise ((resolve,reject) =>{
        if (data.length>0){
            setTimeout(()=>{
                resolve(data)
            },timeout);
        }else{
            reject('Error no hay nada en el array')
        }
    });
}

catalogoPeliculas(0, data)
.then(() => catalogoPeliculas(1000,
    data.map(pelicula => console.log(pelicula.name))
))
.catch((err) => console.log(err))
    .finally(()=>console.log('Finalizado'));