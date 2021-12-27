import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ImageCover, TextImageCover} from './styles';

const Index = ({children, stackScreen, nameEdition, url}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(stackScreen, nameEdition);
      }}>
      <ImageCover source={url} resizeMode="contain" />
      <TextImageCover>{children}</TextImageCover>
    </TouchableOpacity>
  );
};
Index.displayName = 'ThumbComic_atom';
export default Index;
