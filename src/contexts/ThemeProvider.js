import React, {createContext, useState} from 'react';
import {colors} from '../assets/styles/colors';

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme(previousState => !previousState);

  const theme = {
    colors: darkTheme ? colors.dark : colors.light,
    toggleTheme,
    darkTheme,
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
