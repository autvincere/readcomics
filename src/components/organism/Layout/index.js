import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';

const Index = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{flex: 1}}>{children}</View>
      <Footer />
    </SafeAreaView>
  );
};

export default Index;
