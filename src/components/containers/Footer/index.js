import React, {useContext} from 'react';
import {ThemeContext} from '../../../contexts/ThemeProvider';
import Footer from '../../organism/Footer';

const Index = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <>
      <Footer {...{colors}} />
    </>
  );
};

export default Index;
