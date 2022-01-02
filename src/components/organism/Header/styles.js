import styled from 'styled-components/native';
import {heightHeader} from '../../../utils/layout';

export const ContainerHeader = styled.View`
  background-color: ${props => props.background};
  /* background-color: red; */
  display: flex;
  height: ${heightHeader}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const LogoBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 6px;
  padding-bottom: 4px;
  /* background-color: red; */
  width: auto;
  margin: 0 auto;
`;
