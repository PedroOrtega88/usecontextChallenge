import React, { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';


const Button = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`${theme}-button`}>
          Cambia el tema
        </button>
      );
    };




export default Button;