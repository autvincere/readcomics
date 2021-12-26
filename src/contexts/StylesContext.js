import React, {createContext, useState} from 'react';
import {colors} from '../assets/styles/colors';
import {typography} from '../assets/styles/typography';
const StylesContext = createContext();

const StylesProvider = ({children}) => {
  const [isLightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => setLightTheme(previousState => !previousState);
  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
    typography,
    toggleTheme,
    isLightTheme,
  };
  return (
    <StylesContext.Provider value={theme}>{children}</StylesContext.Provider>
  );
};

export default StylesProvider;
