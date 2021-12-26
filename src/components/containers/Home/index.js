import React from 'react';
import {Container, Text, Thumbs} from './styles';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  batmanEdition,
  xmenEdition,
  darkAges,
  avengers,
  superman,
  flash,
} from '../../../utils/data/index';
import ThumbComic from '../../atoms/ThumbComic';
const Index = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Container
      // style={{ backgroundColor: '#000000' }}
      >
        <ThumbComic
          stackScreen="Comic"
          nameEdition={batmanEdition}
          url={require('../../../assets/img/batman_cover.jpg')}>
          Batman
        </ThumbComic>

        <ThumbComic
          stackScreen="Comic"
          nameEdition={xmenEdition}
          url={require('../../../assets/img/xmen_cover.jpg')}>
          Xmen
        </ThumbComic>

        <TouchableOpacity
          onPress={() => navigation.navigate('Comic', darkAges)}>
          <Thumbs source={require('../../../assets/img/dark_ages_cover.jpg')} />
          <Text style={{color: 'red', fontSize: 20, textAlign: 'center'}}>
            Dark Ages
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Comic', avengers)}>
          <Thumbs source={require('../../../assets/img/avengers_cover.jpg')} />
          <Text style={{color: 'red', fontSize: 20, textAlign: 'center'}}>
            The Avengers
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Comic', superman)}>
          <Thumbs source={require('../../../assets/img/superman_cover.jpg')} />
          <Text
            style={{
              color: 'red',
              fontSize: 20,
              textAlign: 'center',
              // resizeMode: 'contain',
            }}>
            Superman
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Comic', flash)}>
          <Thumbs source={require('../../../assets/img/the_flash_cover.jpg')} />
          <Text style={{color: 'red', fontSize: 20, textAlign: 'center'}}>
            The Flash
          </Text>
        </TouchableOpacity>
      </Container>
    </ScrollView>
  );
};
Index.displayName = 'Home_Index_Template';
export default Index;
