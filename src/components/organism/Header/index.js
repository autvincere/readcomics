import React from 'react';
import {Switch, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import {ContainerHeader, LogoBack} from './styles';
import SVGImg from '../../../assets/svg/anonymous_comics_logo.svg';

const Index = ({colors, toggleTheme, darkTheme}) => {
  const navigation = useNavigation();

  return (
    <ContainerHeader background={colors.backgroundColor}>
      <LogoBack onPress={() => navigation.navigate('Home')}>
        <SVGImg width={60} height={60} style={{fill: colors.iconColor}} />
        <Text
          style={{
            fontFamily: 'Krungthep',
            fontSize: 20,
            color: colors.textColor,
          }}>
          AnonymousComics
        </Text>
      </LogoBack>
      <View>
        <Switch
          trackColor={{false: '#000', true: '#fff'}}
          thumbColor={darkTheme ? '#000' : '#fff'}
          ios_backgroundColor="#000"
          onValueChange={toggleTheme}
          value={darkTheme}
        />
      </View>
    </ContainerHeader>
  );
};

export default Index;
