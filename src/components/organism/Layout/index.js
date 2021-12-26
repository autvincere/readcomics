import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Footer from '../Footer';
import Header from '../Header';

const Index = ({children}) => {
  // console.log(children);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{backgroundColor: 'black', flex: 1}}>{children}</View>
      <Footer />
    </SafeAreaView>
  );
};

export default Index;
