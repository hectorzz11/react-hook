import React, {useState, useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () =>{
    //funcion que hace que cambie entre el light y dark mode
    //pierme elemento el estado el segundo la funcion que va a cambiar el estado 
    //de quien? de useState cuyo estado inicial es False
    const [darkMode, setDarkMode] = useState(false);
    const color = useContext(ThemeContext);
    
    const handleClick = () =>{
        //false lo cambia a true por cada cambio
        setDarkMode(!darkMode);

    }
    return (

    <div className="Header">
        <h1 style={{color}}>ReactHooks</h1>
        <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        <button type="button" onClick={() => setDarkMode
            (!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>
        </div>
    );
    }



export default Header;