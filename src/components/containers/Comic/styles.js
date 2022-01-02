import styled from 'styled-components/native';

export const Container = styled.View`
  /* flex-wrap: wrap; */
  flex-direction: column;
  background-color: yellow;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;

export const ImageComic = styled.Image`
  width: 100%;
  /* height: windowHeight - 200; */
  height: ${props => props.windowHeight - 200};
  min-height: 200px;
  /* resizeMode: 'contain', */
  flex: 1;
`;
