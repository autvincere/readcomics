import styled from 'styled-components/native';
import {heightFooter, heightHeader} from '../../../utils/layout';

export const Container = styled.View`
  height: ${props => props.windowHeight - heightFooter - heightHeader}px;
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: space-around;
  /* background-color: #000000; */
  padding: 4px;
  flex-wrap: wrap;
`;
