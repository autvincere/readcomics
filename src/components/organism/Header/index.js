import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
// import {padding} from '../../../utils/functions';
import SVGImg from '../../../assets/svg/anonymous_comics_logo.svg';

const Index = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Home');
      }}
      style={{
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: padding(3, 4, 5, 6),
        paddingTop: 10,
        paddingBottom: 4,
      }}>
      <SVGImg width={60} height={60} style={{fill: 'black'}} />
      <Text style={{fontFamily: 'Krungthep', fontSize: 20}}>
        AnonymousComics
      </Text>
    </TouchableOpacity>
  );
};

export default Index;
