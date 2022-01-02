import styled from 'styled-components/native';

export const ImageCover = styled.Image`
  height: 170px;
  width: 120px;
  margin: 4px;
  /* border: 1px solid #9d9d9d; */
`;
export const TextImageCover = styled.Text`
  color: ${props => props.textColor || 'palevioletred'};
  font-size: 20px;
  text-align: center;
`;
