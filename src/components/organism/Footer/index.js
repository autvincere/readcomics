import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import SVGImg from '../../../assets/svg/me-gusta.svg';
const index = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'gray',
      }}>
      <Text style={{marginTop: 10}}>all rights are not mine</Text>
      <SVGImg width={20} height={20} style={{fill: 'black'}} />
    </View>
  );
};

export default index;
