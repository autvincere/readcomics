import React, {useContext} from 'react';
import {ThemeContext} from '../../../contexts/ThemeProvider';
import Header from '../../organism/Header';

const Index = () => {
  const {colors, toggleTheme, darkTheme} = useContext(ThemeContext);
  return (
    <>
      <Header {...{colors, toggleTheme, darkTheme}} />
    </>
  );
};

export default Index;
