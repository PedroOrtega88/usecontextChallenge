import React, { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';


const Button = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`${theme}-button`}>
          Toggle Theme
        </button>
      );
    };




export default Button;