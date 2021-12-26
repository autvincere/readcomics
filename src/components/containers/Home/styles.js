import styled from 'styled-components/native';
import {View, ScrollView, TouchableOpacity} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: space-around;
  /* background-color: #000000; */
  padding: 4px;
  flex-wrap: wrap;
`;
export const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
export const Thumbs = styled.Image`
  height: 190px;
  width: 120px;
  margin: 4px;
`;
export const ThumbComic = styled.TouchableOpacity`
  Image{
    source:{require(${props => props.src})}
    Text {
      color: 'red';
      font-size: 20;
      text-align: center;
    }
  } 
  }
`;
