import React, {useState, useEffect, useReducer, useMemo, useRef, useCallback} from "react";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";

const initialState = {

    favorites:[]
}
const API = 'https://rickandmortyapi.com/api/character/'
const favoriteReducer = (state, action) =>{

    switch(action.type){

        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                //destructuracion, se envian los personajes
                favorites:[...state.favorites, action.payload]

            };
            default:
                return state;

    }
}

const Characters =() =>{
    //const[characters, setCharacters] = useState([]);
    const[favorites, dispatch] = useReducer(favoriteReducer,initialState);
    const[search, setSearch] = useState('');
    const searchInput =useRef(null);

   //llamado 
   const characters = useCharacters(API);

    const handleclick =favorite =>{

        dispatch({type:'ADD_TO_FAVORITE',payload:favorite})
    }
/*
    const handleSearch=(event) =>{

        setSearch(event.target.value)
    }*/
//use callback recibe una funcion anonima
    const handleSearch = useCallback(()=>{
        setSearch(searchInput.current.value);
        
    }, [])
    /*const filteredUsers = characters.filter((user) =>{

        return user.name.toLowerCase().includes(search.toLowerCase());

    })*/

    const filteredUsers = useMemo(() =>
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  )



    return(        

        <div className="Characters">
            {favorites.favorites.map(favorite => (

            <li key={favorite.id}>
                {favorite.name}
            </li>
            ))}
              <Search search={search} searchInput={searchInput} handleSearch ={handleSearch} />

            {filteredUsers.map(character =>(
                <div className="item" key={character.id}>
                    <h2>{character.name}</h2>
                    <button type="button" onClick={()=> handleclick(character)}>Agregar a Favoritos</button>
                </div>              

            ))}                
        </div>
    );
}
export  default Characters;