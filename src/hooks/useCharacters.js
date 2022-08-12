import { useState, useEffect } from "react";

const useCharacters = url=>{

    //valor inicial arreglo vacio
    const [characters, setCharacters] = useState([]);
    //se trajo usseffect se pasa una funcion anonimo y el segundo valor que esta escuchando
    useEffect(() =>{
        //se pasa la url
        //transforman la informacion y la guardan
        fetch(url)
        //el response lo manda a response json para convertirlo
        .then(response => response.json())
        //se pasan los datos a la funcion que se encargan de guardarlo a nuestro estado la api es data.results
        .then(data => setCharacters(data.results))
    }, [url]);
    //esta funcion regresa a los personjes con los datos llamnados a la api
    return characters;
};
export default useCharacters;