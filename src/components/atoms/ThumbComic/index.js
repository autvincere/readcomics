import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ImageCover, TextImageCover} from './styles';

const Index = ({children, stackScreen, nameEdition, url}) => {
  const navigation = useNavigation();
  // const imageCover = 'batman_cover.jpg';
  // const imageURI = Asset.fromModule(require(url)).uri;
  console.log(url);
  //console.log(imageCover);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(stackScreen, nameEdition);
      }}>
      <ImageCover source={url} />
      <TextImageCover>{children}</TextImageCover>
    </TouchableOpacity>
  );
};
Index.displayName = 'ThumbComic_atom';
export default Index;
